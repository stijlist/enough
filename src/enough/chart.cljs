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
            cost-this-year (->> expense-breakdown
                             (map #(get-in % [:costs-per-year this-year]))
                             (reduce +))
            new-balance (- (+ balance salary growth) (+ expenses cost-this-year))
            done? (or 
                    (>= this-year cutoff)
                    (>= growth expenses)
                    (< balance 0))
            next (conj years {:balance new-balance 
                              :expenses expenses 
                              :additional-expenses cost-this-year
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
  Object
  (render [this]
    (let [{:keys [i balance expenses additional-expenses expense-breakdown
                  true-height bar-width y-scale text-offsets]} (om/props this)
          {:keys [mouseover? expanded?]} (om/get-state this)
          d (+ expenses additional-expenses)]
      (html
        [:g {:transform 
             (translate (* i bar-width) (- (y-scale balance)))
             :onMouseOver #(om/update-state! this assoc :mouseover? true)
             :onMouseLeave #(om/update-state! this assoc :mouseover? false)
             :onClick #(om/update-state! this update :expanded? not)}
         (when expanded?
           (let [center (js/Math.round (/ bar-width 2))
                 one-third-inset (js/Math.round (/ bar-width 3))
                 bar-height (- true-height (y-scale d))
                 tooltip-color "lightcoral"]
             [:g
              [:rect
               {:y (- bar-height 40 one-third-inset) :height 40 :width (* 1 bar-width) :stroke "black" :fill "white"}]
              [:polygon
               {:points 
                (points 
                  [center bar-height]
                  [one-third-inset (- bar-height one-third-inset)]
                  [(- bar-width one-third-inset) (- bar-height one-third-inset)])
                :style {:stroke "black" :fill "white"}}]]))
         [:rect
          {:fill (if mouseover? "lightblue" "lightcoral")
           :y (- true-height (y-scale d))
           :height (y-scale d)
           :width (dec bar-width)}]
         [:text text-offsets (thousands->k d)]]))))

(def render-expenses (om/factory ExpensesSegment {:keyfn #(-> % (get :i) (str "-expense"))}))

(defn savings-chart [data {:keys [width height]}]
  (let [balances (map :balance data) 
        expenses (map #(select-keys % [:balance :expenses :additional-expenses :expense-breakdown]) data)
        income-growth (map (juxt :balance :income-growth) data)
        true-height 300
        bar-width 40
        chart-opts
        {:true-height true-height
         :y-scale (linear-scale [0 1000000] [0 true-height])
         :bar-width bar-width
         :text-offsets {:x (+ 7 (/ bar-width 2)) :y (- true-height 3) :dy "0.15em"}}]
    (html
      [:div {:style {:overflow "scroll" :max-width "100%" :max-height (str height "px")}}
        [:svg 
         {:class "chart" 
          :height (str true-height "px") 
          :width (str (* bar-width (count data)) "px")}
         (map-indexed (render-balance chart-opts) balances)
         (map-indexed 
            (fn [i m]
              (render-expenses (assoc (merge m chart-opts) :i i))) 
            expenses)
         (map-indexed (render-income-growth chart-opts) income-growth)]])))

(defui SavingsChart
  Object
  (render [this]
    (-> (om/props this)
      (years-til-retirement)
      (savings-chart {:width 400 :height 300}))))
