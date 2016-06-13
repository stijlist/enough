(ns enough.chart
  (:require [sablono.core :refer-macros [html]]))

(defn years-til-retirement
  [{:keys [salary expenses rate-of-return cutoff]}]
  {:pre [(number? salary) 
         (number? expenses) 
         (number? rate-of-return)
         (not (nil? cutoff))]}
  (loop [years []]
    (let [balance (or (:balance (peek years)) 0)
          growth (* balance rate-of-return)
          new-balance (- (+ balance salary growth) expenses)
          done? (or 
                  (>= (count years) cutoff)
                  (>= growth expenses)
                  (< balance 0))
          next (conj years {:balance new-balance 
                            :expenses expenses 
                            :income-growth growth 
                            :income salary})]
      (if done? next (recur next)))))

(defn linear-scale [[domain-start domain-end]
                    [range-start range-end]]
 (let [multiplier (/ (- range-end range-start) (- domain-end domain-start))
       offset (- range-start domain-start)]
   (fn [domain] (+ offset (* multiplier domain))))) 

(defn translate [x y]
  (str "translate(" x "," y ")"))

(defn thousands->k [n]
  (str (int (/ n 1000)) "k"))

(defn bar-chart [data {:keys [width height]}]
  (let [balances (map :balance data) 
        expenses (map (juxt :balance :expenses) data)
        income-growth (map (juxt :balance :income-growth) data)
        true-height 500
        y-scale (linear-scale [0 1000000] [0 true-height])
        bar-width 40
        text-offsets {:x (+ 7 (/ bar-width 2)) :y (- true-height 3) :dy "0.15em"}]
    (html
      [:div {:style {:overflow "scroll" :max-width "100%" }}
        [:svg 
         {:class "chart" 
          :height (str true-height "px") 
          :width (str (* bar-width (count data)) "px")}
         (map-indexed 
           (fn [i d]
             [:g {:transform (translate (* i bar-width) 0)}
              [:rect 
               {:fill "steelblue"
                :y (- true-height (y-scale d)) 
                :height (y-scale d) 
                :width (dec bar-width)}]
              [:text text-offsets (thousands->k d)]])
           balances)
         (map-indexed
           (fn [i [balance-offset d]]
             [:g {:transform 
                  (translate (* i bar-width) (- (y-scale balance-offset)))}
              [:rect
               {:fill "lightcoral"
                :y (- true-height (y-scale d))
                :height (y-scale d)
                :width (dec bar-width)}]
              [:text text-offsets (thousands->k d)]])
           expenses)
         (map-indexed
           (fn [i [balance-offset d]]
             [:g {:transform
                  (translate (* i bar-width) (- (- (y-scale balance-offset) (y-scale d))))}
              [:rect 
               {:fill "mediumaquamarine"
                :y (- true-height (y-scale d))
                :height (y-scale d)
                :width (dec bar-width)}]
              (when (> (y-scale d) 10)
                [:text text-offsets (thousands->k d)])])
           income-growth)
         ]])))
