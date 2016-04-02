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

(defn multiplier [[domain-start domain-end]
                  [range-start range-end]]
  (/ (- range-end range-start) (- domain-end domain-start)))

(defn offset [[domain-start domain-end]
              [range-start range-end]]
  (- range-start domain-start))

(defn linear-scale [[domain-start domain-end]
                    [range-start range-end]]
 (let [multiplier (multiplier [domain-start domain-end] [range-start range-end])
       offset (offset [domain-start domain-end] [range-start range-end])]
   (fn [domain] (+ offset (* multiplier domain))))) 

(defn translate [x y]
  (str "translate(" x "," y ")"))

(deftest test-linear-scale
  (testing "basic offset"
    (is (= (offset [0 10] [5 15]) 5)))
  (testing "scale factors other than 1"
    (is (= ((linear-scale [0 10] [0 50]) 1) 5)))
  (testing "offset scale factors other than 1"
    (is (= ((linear-scale [0 10] [5 55]) 1) 10)))
  (testing "multiplier and offset of inverse scales"
    (is (= (multiplier [0 10] [10 0]) -1))
    (is (= (offset [0 10] [10 0]) 10)))
  (testing "midpoint of inverse scale"
    (is 
      (= ((linear-scale [0 10] [10 0]) 5) 5))))
  
#_(defcard bar-chart
  (let [data (years-til-retirement sample-data)
        width 420
        bar-height 20
        x-scale (linear-scale [0 (apply max data)] [0 width])]
    (html 
      [:svg {:width width :height (* bar-height (count data)) :class "chart"}
        (map-indexed 
          (fn [i x] 
            [:g {:transform (translate 0 (* i bar-height))}
             [:rect {:width (x-scale x) :height (dec bar-height)}]
             [:text {:x (- (x-scale x) 3) :y (/ bar-height 2) :dy "0.35em"} (.toFixed x 2)]])
          data)
          ])))


(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html

