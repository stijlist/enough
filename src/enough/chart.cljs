(ns enough.chart
  (:require [om.dom :as dom]
            [om.next :as om :refer-macros [defui]]))

(defrecord Year [^number index ^number balance ^number income-growth ^number expenses])

(defn years-til-retirement
  [{:keys [^number salary ^number expenses ^number rate-of-return ^number initial-savings ^number cutoff life-events-index]}]
  (loop [years (transient []) balance initial-savings this-year 0]
    (let [growth (* balance rate-of-return)
          expense-breakdown (get life-events-index this-year)
          get-costs-this-year (map #(get-in % [:costs-per-year this-year]))
          variable-costs (transduce get-costs-this-year + expense-breakdown)
          total-costs (+ expenses variable-costs)
          new-balance (- (+ balance salary growth) total-costs)
          done? (or 
                  (>= this-year cutoff)
                  (>= growth expenses)
                  (< balance 0))
          next (conj! years (Year. this-year new-balance growth total-costs))]
      (if done?
        {:max-bar-value (+ total-costs new-balance) :data (persistent! next) :num-years this-year}
        (recur next new-balance (inc this-year))))))

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
          text-offsets (thousands->k balance))))))

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
            (dom/text text-offsets (thousands->k income-growth))))))))

(defui YearUI
  static om/Ident
  (ident [this props]
    [:years/by-index (:index props)])
  Object
  (render [this]
    (let [{:keys [index balance expenses income-growth]} (om/props this)
          {:keys [true-height bar-width y-scale text-offsets display-popover!]} (om/get-computed this)
          scaled-b (y-scale balance)
          scaled-e (y-scale expenses)
          scaled-g (y-scale income-growth)]
      (dom/g 
        ;; translate horizontally
        #js {:transform (translate (* index bar-width) 0)}

        ;; render balance
        (dom/g
          #js {}
          (dom/rect
            #js {:fill "steelblue"
                 :y (- true-height scaled-b) 
                 :height scaled-b 
                 :width (dec bar-width)})
          (dom/text text-offsets (thousands->k balance)))

        ;; render expenses
        (dom/g
          #js {:transform (translate 0 (- scaled-b))} ;; align vertically with balance
          (dom/rect
            #js {:fill "lightcoral"
                 :y (- true-height scaled-e)
                 :height scaled-e
                 :width (dec bar-width)})
          (dom/text text-offsets (thousands->k expenses)))

        ;; render growth
        (dom/g
          #js {:transform
               (translate 0 (- (- scaled-b scaled-g)))}
          (dom/rect
            #js {:fill "mediumaquamarine"
                 :y (- true-height scaled-g)
                 :height scaled-g
                 :width (dec bar-width)}
            (when (> scaled-g 10)
              (dom/text text-offsets (thousands->k income-growth)))))))))

(def render-year (om/factory YearUI {:keyfn :index}))

(defn savings-chart [{:keys [max-bar-value data num-years]} {:keys [display-popover!] :as opts}]
  (let [pixels-per-thousand 0.5
        max-bar-height (* pixels-per-thousand (/ max-bar-value 1000))
        bar-width 40
        chart-opts
        {:true-height max-bar-height
         :y-scale (linear-scale [0 max-bar-value] [0 max-bar-height])
         :bar-width bar-width
         :text-offsets #js {:x (+ 7 (/ bar-width 2)) :y (- max-bar-height 3) :dy "0.15em"}
         :display-popover! display-popover!}]
    (dom/svg
      #js {:className "chart"
           :height (str max-bar-height "px")
           :width (str (* bar-width (count data)) "px")}
      (map #(render-year (om/computed % chart-opts)) data))))

(defui SavingsChart
  Object
  (render [this]
    (-> (om/props this)
      years-til-retirement 
      (savings-chart 
        {:display-popover! #(om/transact! this `[(popovers/show ~%) :popovers])}))))
