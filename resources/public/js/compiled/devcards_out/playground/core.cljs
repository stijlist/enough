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
    [:svg {:class "chart"}
     [:g {:transform "translate(0,0)"}
      [:rect {:width 40 :height 19}]
      [:text {:x 37 :y 9.5 :dy "0.35em"} "4"]]
     [:g {:transform "translate(0,20)"}
      [:rect {:width 80 :height 19}]
      [:text {:x 77 :y 9.5 :dy "0.35em"} "8"]]]))

(defn linear-scale [[domain-start domain-end]
                    [range-start range-end]]
 (let [multiplier (/ (- range-end range-start) (- domain-end domain-start))
       offset (* multiplier range-start)]
   (fn [domain] (+ offset (* multiplier domain))))) 

#_(defcard test-linear-scale
  (let [f (linear-scale [0 50] [0 10])]
    (f 5))) ;; expected is a function that takes 5 and returns 1

(defcard programmatic-svg-test
  (let [data [4, 8, 15, 16, 23, 42]
        width 420
        bar-height 20
        x-scale (range 0 (apply max data))]))

    

(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html

