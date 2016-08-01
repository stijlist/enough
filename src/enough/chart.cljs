(ns enough.chart
  (:require [sablono.core :refer-macros [html]]
            [enough.segment :as segment]
            [om.next :as om :refer-macros [defui]]))

(defn multimap [kvs]
  (let [assoc-val-as-set 
        (fn [m [k v]]
          (if (contains? m k) 
            (assoc m k (conj (get m k) v))
            (assoc m k #{v})))]
    (reduce assoc-val-as-set {} kvs)))

(defn life-events-by-year [life-events]
  (let [get-year-ev-pairs (fn [e] (for [k (-> e :costs-per-year keys)] [k e]))]
    (multimap (mapcat get-year-ev-pairs life-events))))

(defn years-til-retirement
  [{:keys [salary expenses rate-of-return cutoff life-events]}]
  {:pre [(number? salary)
         (number? expenses)
         (number? rate-of-return)
         (not (nil? cutoff))]}
  (let [year->life-events (life-events-by-year life-events)]
    (loop [years []]
      (let [balance (or (:balance (peek years)) 0)
            growth (* balance rate-of-return)
            this-year (count years)
            expense-breakdown (get year->life-events this-year)
            new-balance (- (+ balance salary growth) expenses)
            done? (or 
                    (>= this-year cutoff)
                    (>= growth expenses)
                    (< balance 0))
            next (conj years {:balance new-balance 
                              :expenses expenses 
                              :income-growth growth 
                              :income salary
                              :expense-breakdown expense-breakdown})]
        (if done? next (recur next))))))

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
  (fn [i d]
    [:g {:transform (translate (* i bar-width) 0)}
     [:rect 
      {:fill "steelblue"
       :y (- true-height (y-scale d)) 
       :height (y-scale d) 
       :width (dec bar-width)}]
     [:text text-offsets (thousands->k d)]]))

(defn render-income-growth
  [{:keys [bar-width true-height y-scale text-offsets]}]
  (fn [i [balance-offset d]]
    [:g {:transform
         (translate (* i bar-width) (- (- (y-scale balance-offset) (y-scale d))))}
     [:rect 
      {:fill "mediumaquamarine"
       :y (- true-height (y-scale d))
       :height (y-scale d)
       :width (dec bar-width)}]
     (when (> (y-scale d) 10)
       [:text text-offsets (thousands->k d)])]))

(defn points [& xys]
  (map (fn [[x y]] (str x "," y)) xys))

(defui ExpensesSegment
  static om/Ident
  (ident [this props]
    [:expenses-segments/by-index (:i props)])
  Object
  (render [this]
    (let [{:keys [i balance expenses expense-breakdown focused
                  true-height bar-width y-scale text-offsets]} (om/props this)
          {:keys [mouseover?]} (om/get-state this)
          variable-costs (->> expense-breakdown
                           (map #(get-in % [:costs-per-year i]))
                           (reduce +))
          display-popover! (om/get-computed this :display-popover!)
          d (+ expenses variable-costs)]
      (html
        [:g {:transform 
             (translate (* i bar-width) (- (y-scale balance)))
             :onMouseOver #(om/update-state! this assoc :mouseover? true)
             :onMouseLeave #(om/update-state! this assoc :mouseover? false)
             :onClick #(display-popover! 
                         {:ident (om/get-ident this) :position {:top (- true-height (+ (y-scale balance) (y-scale d))) :left (* i bar-width)} :message [:span "test"]})}
         [:rect
          {:fill (if mouseover? "lightblue" "lightcoral")
           :y (- true-height (y-scale d))
           :height (y-scale d)
           :width (dec bar-width)}]
         [:text text-offsets (thousands->k d)]]))))

(def render-expenses (om/factory ExpensesSegment {:keyfn #(-> % (get :i) (str "-expense"))}))

(defn savings-chart [data {:keys [display-popover!] :as opts}]
  (let [balances (map :balance data) 
        expenses (map #(select-keys % [:balance :expenses :expense-breakdown]) data)
        income-growth (map (juxt :balance :income-growth) data)
        pixels-per-thousand 0.5
        max-bar-value (reduce + (-> (last data) (select-keys [:balance :expenses :income-growth]) vals))
        max-bar-height (* pixels-per-thousand (/ max-bar-value 1000))
        bar-width 40
        chart-opts
        {:true-height max-bar-height
         :y-scale (linear-scale [0 max-bar-value] [0 max-bar-height])
         :bar-width bar-width
         :text-offsets {:x (+ 7 (/ bar-width 2)) :y (- max-bar-height 3) :dy "0.15em"}}]
    (html
      [:svg
       {:class "chart"
        :height (str max-bar-height "px")
        :width (str (* bar-width (count data)) "px")}
       (map-indexed (render-balance chart-opts) balances)
       (map-indexed
          (fn [i m]
            (render-expenses (om/computed (assoc (merge m chart-opts) :i i) {:display-popover! display-popover!})))
          expenses)
       (map-indexed (render-income-growth chart-opts) income-growth)])))

(defui SavingsChart
  static om/IQuery
  (query [this] '[:chart])
  Object
  (render [this]
    (let [props (om/props this)]
      (-> props 
        years-til-retirement 
        (savings-chart 
          {:display-popover! #(om/transact! this `[(popovers/show ~%) :popovers])})))))
