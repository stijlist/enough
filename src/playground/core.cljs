(ns playground.core
  (:require
   [om.next :as om :refer-macros [defui]]
   [sablono.core :refer-macros [html]]
   [devcards.core :refer-macros [defcard deftest]]))

(enable-console-print!)

(defcard title-card
  (html [:div [:h1 "How much yet is enough?"]]))

(defn- round [x] (.toFixed x 2))

(def none "")
(def debug "1px dotted black")

(defn years-til-retirement
  [{:keys [salary expenses rate-of-return]}]
  (loop [years [0]]
    (let [balance (peek years)
          growth (* balance rate-of-return)
          ; _ (println "Principal: " (round balance) " Growth: " (round growth))
          new-balance (- (+ balance salary growth) expenses)]
      (if (>= growth expenses)
        years
        (recur (conj years new-balance))))))

(def sample-data {:salary 40000 :expenses 20000 :rate-of-return 0.05})

(defcard simulated-growth
  (years-til-retirement sample-data))

;; what are the assumptions the "*-at-height" fns make about their containers?
(defn point-at-height [x]
  [:div {:style {:height (str x "em") :width "1em" :margin-top "auto" }} 
   [:div "·"]])

(defn bar-of-height [x]
  [:div {:style {:background-color "black" :height (str x "em") :width "1em" :margin-top "auto"}}])

(defn scale-to-step-size [step years]
  (map #(/ % step) years))

(defcard scaled-growth
  (scale-to-step-size 10000 (years-til-retirement sample-data)))

(defn graph-with-ems [years]
  (let [scale (apply max years)
        x-step 5
        y-step 10000 ;; will be 1 em
        x-axis (range 0 30 x-step)
        y-axis (range 0 scale y-step)
        scaled-years (scale-to-step-size y-step years)]
    (html 
      [:div {:style {:display "-webkit-flex" :flex-direction "row"}} 
        [:div {:style {:flex-direction "column" :line-height "1em"}}
          (reverse (map (fn [v] [:div v]) y-axis))]
        [:div {:style {:flex-direction "column"}}
          [:div {:style
                 {:border debug :height (str (apply max scaled-years) "em") :display "-webkit-flex"}} 
                (map point-at-height scaled-years)]
          [:div {:style {:flex-direction "column"}} (interpose " " (range (count years)))]]])))

(defcard graph-simulated-growth
  (graph-with-ems (years-til-retirement sample-data)))

;; what are the assumptions the "*-at-height" fns make about their containers?
(defn point-at [x y]
  [:div {:style {:position "relative" :left x :top y :display "-webkit-flex"}}
   [:div {:style {:margin-bottom "auto"}} "·"]])

(defn graph [years]
  (let [height 200
        width 200 
        scale (apply max years)
        x-step (/ width (count years))
        y-step (/ scale height)
        x-axis (range 0 (count years))
        y-axis (range 0 scale y-step)
        scaled-x-axis (map #(* x-step %) x-axis)
        scaled-years (scale-to-step-size y-step years)]
    (html 
      [:div 
        [:div 
         {:style {:height height :width width :display "-webkit-flex"}}
         [:div 
          {:style {:display "-webkit-flex" :flex-direction "row"}}
          (map point-at x-axis (map #(- height %) scaled-years))]]])))

(defcard graph-simulated-absolute 
  (graph (years-til-retirement sample-data)))
    
(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (js/React.render (html [:div "This is working"]) node)))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html

