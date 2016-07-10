(ns enough.chart
  (:require [sablono.core :refer-macros [html]]
            [enough.segment :as segment :refer [Segment]]))

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
            year (count years)
            cost-this-year (->> (get year->life-events year)
                             (map #(get-in % [:costs-per-year year]))
                             (reduce +))
            new-balance (- (+ balance salary growth) (+ expenses cost-this-year))
            done? (or 
                    (>= year cutoff)
                    (>= growth expenses)
                    (< balance 0))
            next (conj years {:balance new-balance 
                              :expenses expenses 
                              :additional-expenses cost-this-year
                              :income-growth growth 
                              :income salary})]
        (if done? next (recur next))))))

(defn linear-scale [[domain-start domain-end]
                    [range-start range-end]]
 (let [multiplier (/ (- range-end range-start) (- domain-end domain-start))
       offset (- range-start domain-start)]
   (fn [domain] (+ offset (* multiplier domain))))) 

(defn thousands->k [n]
  (str (int (/ n 1000)) "k"))

(def width 30)

(defn render-year
  [i [balance expenses growth] opts]
  (let [seg #(Segment. % width (* i width) 0)
        b (seg balance)
        e (segment/inset b {:top (seg expenses)})
        g (segment/stack e {:bottom (seg growth)})]
    [(segment/svg b (assoc opts :fill "steelblue"))
     (segment/svg e (assoc opts :fill "lightcoral"))
     (segment/svg g (assoc opts :fill "aquamarine"))]))

(defn savings-chart [data {:keys [width height]}]
  (let [balances (map :balance data) 
        expenses (map #(+ (:expenses %) (:additional-expenses %)) data)
        growth (map :income-growth data)
        true-height 300
        bar-width 40
        new-opts
        {:container {:height width}
         :width 40
         :label-fn thousands->k
         :scale (linear-scale [0 1000000] [0 300])
         :text-opts {:x (+ 7 (/ bar-width 2)) :y (- true-height 3) :dy "0.15em"}}]
    (html
      [:div {:style {:overflow "scroll" :max-width "100%" :max-height (str height "px")}}
        [:svg 
         {:class "chart" 
          :height (str true-height "px") 
          :width (str (* (:width new-opts) (count data)) "px")}
          (map-indexed #(render-year %1 %2 new-opts) (map vector balances expenses growth))
         
         ]])))
