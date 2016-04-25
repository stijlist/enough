(ns playground.core
  (:require
   [om.next :as om :refer-macros [defui]]
   [sablono.core :refer-macros [html]]
   [devcards.core :refer-macros [defcard deftest]]
   [cljs.test :refer-macros [is testing]]))

(enable-console-print!)

(defcard title-card
  (html [:div [:h1 "How much is enough?"]]))

(defn years-til-retirement
  [{:keys [salary expenses rate-of-return cutoff]}]
  {:pre [(every? number? [salary expenses rate-of-return])]}
  (loop [years [0]]
    (let [balance (peek years)
          growth (* balance rate-of-return)
          new-balance (- (+ balance salary growth) expenses)
          done? (if cutoff (>= (count years) cutoff) (>= growth expenses))]
      (if done?
        years
        (recur (conj years new-balance))))))

(defn linear-scale [[domain-start domain-end]
                    [range-start range-end]]
 (let [multiplier (/ (- range-end range-start) (- domain-end domain-start))
       offset (- range-start domain-start)]
   (fn [domain] (+ offset (* multiplier domain))))) 

(defn translate [x y]
  (str "translate(" x "," y ")"))

(defn thousands->k [n]
  (str (int (/ n 1000)) "k"))

(defui ColumnChart
  Object
  (render [this]
    (let [{:keys [data width height]} (om/props this)
          y-scale (linear-scale [0 (apply max data)] [0 height])
          bar-width (/ width (count data))]
      (html 
        [:svg {:class "chart" :height height :width width}
         (map-indexed 
           (fn [i d]
             [:g {:transform (translate (* i bar-width) 0)}
              [:rect 
               {:y (- height (y-scale d)) :height (y-scale d) :width (dec bar-width)}]
              [:text 
               {:x (+ 7 (/ bar-width 2)) :y (- height 3) :dy "0.15em"} 
               (thousands->k d)]])
           data)]))))

(def column-chart (om/factory ColumnChart))

(defn coerce-to-type-of [orig v]
  (condp = (type orig)
    js/Number (js/Number v)
    js/String (js/String v)))

(defn trigger-edit [{:keys [state k]}]
  (fn [] 
    (prn "triggered edit")
    (swap! state update-in [:editing] (fn [ks] (conj ks k)))
    (prn "state after edit" @state)))

(defn input-complete [{:keys [state k v]}]
  (fn [e] 
    (swap! state 
      (fn [s] 
        (-> s
          (update-in [:editing] #(disj % k))
          (update-in [k] 
            #(coerce-to-type-of v 
              (.. e -target -parentElement -firstElementChild -value))))))))
 

;; TODO: re-renders aren't happening; why?
(defui EditableParameter
  Object
  (render [this]
    (let [{:keys [state k]} (om/props this)
          ; TODO: not sure of the value of making these computed
          ; {:keys [input-complete trigger-edit]} (om/get-computed this)
          v (get @state k)
          editing? (contains? (get @state :editing) k)]
      (prn (str "key: " k " val: " v " editing: " editing?))
      (html
        (if editing? 
          [:div nil ;; TODO: use forms so we get keyevent handling for free
           [:input {:type "text"}]
           [:button {:onClick (input-complete {:state state :k k :v v})} "Done"]]
          [:div nil (str v) [:button {:onClick (trigger-edit {:state state :k k})} "Edit"]])))))

(def editable-parameter (om/factory EditableParameter))

(defui InteractiveChart
  Object
  (render [this]
    (let [state (om/get-props this)
          _ (prn state)
          chart-data (years-til-retirement state)]
      (html 
        [:div nil
         [:div nil (map #(editable-parameter {:state state :k (first %) :v (second %)}) @state)]
         [:div nil "Years til retirement: " (count chart-data)]
         [:div nil
          (column-chart {:data chart-data :width 420 :height 150})]]))))

(def interactive-chart (om/factory InteractiveChart))

(defn retirement-vals [m]
  (vals (select-keys m [:salary :expenses :rate-of-return])))

(defcard interactive-chart
  (fn [state _]
    (interactive-chart state))
  {:salary 40000 :expenses 20000 :rate-of-return 0.05 :editing #{}})

(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html

