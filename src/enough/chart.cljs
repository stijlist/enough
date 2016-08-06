(ns enough.chart
  (:require [sablono.core :refer-macros [html]]
            [om.dom :as dom]
            [om.next :as om :refer-macros [defui]]))

(defn multimap [kvs]
  (let [assoc-val-as-set 
        (fn [m [k v]]
          (assoc m k (if-not (contains? m k) #{v} (conj (get m k) v))))]
    (reduce assoc-val-as-set {} kvs)))

(defn life-events-by-year [life-events]
  (let [get-year-ev-pairs (fn [e] (for [k (-> e :costs-per-year keys)] [k e]))]
    (multimap (mapcat get-year-ev-pairs life-events))))

(def year->life-events (memoize life-events-by-year))

(defrecord Year [^number index ^number balance ^number income-growth ^number expenses])

(defn years-til-retirement
  [{:keys [^number salary ^number expenses ^number rate-of-return ^number initial-savings ^number cutoff life-events]}]
  {:pre [(number? salary)
         (number? expenses)
         (number? rate-of-return)
         (number? initial-savings)
         (not (nil? cutoff))]}
  ;; year->life-events only needs to be recomputed when life-events change, pull out of ytr
  (loop [years (transient []) balance initial-savings]
    (let [growth (* balance rate-of-return)
          this-year (count years)
          expense-breakdown (get (year->life-events life-events) this-year)
          get-costs-this-year (map #(get-in % [:costs-per-year this-year]))
          variable-costs (transduce get-costs-this-year + expense-breakdown)
          total-costs (+ expenses variable-costs)
          new-balance (- (+ balance salary growth) total-costs)
          done? (or 
                  (>= this-year cutoff)
                  (>= growth expenses)
                  (< balance 0))
          next (conj! years (Year. this-year new-balance growth expenses))]
      (if done?
        {:max-bar-value (+ total-costs new-balance) :data (persistent! next) :num-years this-year}
        (recur next new-balance)))))

(defn linear-scale [[domain-start domain-end]
                    [range-start range-end]]
 (let [multiplier (/ (- range-end range-start) (- domain-end domain-start))
       offset (- range-start domain-start)]
   (fn [domain] (+ offset (* multiplier domain))))) 

(defn translate [x y]
  (str "translate(" x "," y ")"))

(defn thousands->k [n]
  (str (int (/ n 1000)) "k"))

(defn render-balance 
  [{:keys [bar-width true-height y-scale text-offsets]}]
  (fn [{:keys [index balance]}]
    (let [height (y-scale balance)]
      (dom/g
        #js {:transform (translate (* index bar-width) 0)}
        (dom/rect
          #js {:fill "steelblue"
               :y (- true-height height) 
               :height height 
               :width (dec bar-width)})
        (dom/text
          (clj->js text-offsets) (thousands->k balance))))))

(defn render-income-growth
  [{:keys [bar-width true-height y-scale text-offsets]}]
  (fn [{:keys [index balance income-growth]}]
    (let [scaled-bal (y-scale balance)
          scaled-g (y-scale income-growth)]
      (dom/g
        #js {:transform
             (translate (* index bar-width) (- (- scaled-bal scaled-g)))}
        (dom/rect
          #js {:fill "mediumaquamarine"
               :y (- true-height scaled-g)
               :height scaled-g
               :width (dec bar-width)}
          (when (> scaled-g 10)
            (dom/text (clj->js text-offsets) (thousands->k income-growth))))))))

(defn points [& xys]
  (map (fn [[x y]] (str x "," y)) xys))

(defui ExpensesSegment
  static om/Ident
  (ident [this props]
    [:expenses-segments/by-index (:index props)])
  Object
  (render [this]
    (let [{:keys [index balance expenses focused]} (om/props this)
          {:keys [mouseover?]} (om/get-state this)
          {:keys [true-height bar-width y-scale text-offsets display-popover!]} (om/get-computed this)
          i index
          d expenses]
      (dom/g
        #js {:transform 
             (translate (* i bar-width) (- (y-scale balance)))
             :onMouseOver #(om/update-state! this assoc :mouseover? true)
             :onMouseLeave #(om/update-state! this assoc :mouseover? false)
             :onClick 
             #(display-popover!
               {:ident (om/get-ident this)
                :position {:top (- true-height (+ (y-scale balance) (y-scale d)))
                           :left (* i bar-width)}
                           :message [:span "test"]})}
        (dom/rect
          #js {:fill (if mouseover? "lightblue" "lightcoral")
               :y (- true-height (y-scale d))
               :height (y-scale d)
               :width (dec bar-width)})
        (dom/text (clj->js text-offsets) (thousands->k d))))))

(defn render-year [year])

(def render-expenses (om/factory ExpensesSegment {:keyfn #(-> % (get :index) (str "-expense"))}))

(defn savings-chart [{:keys [max-bar-value data num-years]} {:keys [display-popover!] :as opts}]
  (let [pixels-per-thousand 0.5
        max-bar-height (* pixels-per-thousand (/ max-bar-value 1000))
        bar-width 40
        chart-opts
        {:true-height max-bar-height
         :y-scale (linear-scale [0 max-bar-value] [0 max-bar-height])
         :bar-width bar-width
         :text-offsets {:x (+ 7 (/ bar-width 2)) :y (- max-bar-height 3) :dy "0.15em"}
         :display-popover! display-popover!}]
    (dom/svg
      #js {:className "chart"
           :height (str max-bar-height "px")
           :width (str (* bar-width (count data)) "px")}
      (map (render-balance chart-opts) data)
      (map #(render-expenses (om/computed % chart-opts)) data)
      (map (render-income-growth chart-opts) data))))

(defui SavingsChart
  static om/IQuery
  (query [this] '[:chart])
  Object
  (render [this]
    (let [props (om/props this)]
      (time
      (-> props 
        years-til-retirement 
        (savings-chart 
          {:display-popover! #(om/transact! this `[(popovers/show ~%) :popovers])}))))))
