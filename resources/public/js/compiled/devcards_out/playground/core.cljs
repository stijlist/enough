(ns playground.core
  (:require
   [om.next :as om :refer-macros [defui]]
   [sablono.core :refer-macros [html]]
   [devcards.core :refer-macros [defcard deftest]]))

(enable-console-print!)

(defcard title-card
  (html [:div [:h1 "How much is enough?"]]))

(defn years-til-retirement
  [{:keys [salary expenses rate-of-return]}]
  (loop [years [0]]
    (let [balance (peek years)
          growth (* balance rate-of-return)
          new-balance (- (+ balance salary growth) expenses)]
      (if (>= growth expenses)
        years
        (recur (conj years new-balance))))))

(def sample-data {:salary 40000 :expenses 20000 :rate-of-return 0.05})

(defcard simulated-growth
  (years-til-retirement sample-data))

(defcard svg-test
  (html 
    [:svg 
     [:rect {:fill "black" :width "10" :height "100" :x "10" :y "10"}]
     [:text {:x 30 :y 30} "hello world"]]))

(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html

