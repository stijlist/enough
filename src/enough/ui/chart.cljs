(ns enough.ui.chart
  (:require [om.dom :as dom]
            [om.next :as om :refer-macros [defui]]
            [goog.dom]
            [goog.ui.Popup]
            [goog.positioning.AnchoredPosition]
            [goog.positioning.Corner]))

(defrecord Year [^number index ^number balance ^number income-growth ^number expenses breakdown])

(defn years-til-retirement
  [{:keys [^number salary ^number expenses ^number rate-of-return ^number initial-savings ^number cutoff life-events-index] :as input}]
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
          next (conj! years (Year. this-year new-balance growth total-costs expense-breakdown))]
      (if done?
        (assoc input
          :max-bar-value (+ total-costs new-balance)
          :data (persistent! next)
          :num-years this-year)
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

(defui ExpenseBreakdown
  static om/IQuery
  (query [this]
    '[:breakdown :index])
  Object
  (render [this]
    (let [{:keys [breakdown index] :as props} (om/props this)]
      (prn "re-render ExpenseBreakdown:" props)
      (when breakdown
        (apply dom/div 
          #js {:style 
               #js {"padding" "3px"
                    "border" "1px solid black"
                    "borderRadius" ".125rem"
                    "maxWidth" "20em"}}
          (map
            #(dom/div nil (:name %) " " (get-in % [:costs-per-year index]))
            breakdown))))))

(def render-breakdown (om/factory ExpenseBreakdown))

(defui YearUI
  static om/Ident
  (ident [this props]
    [:years/by-index (:index props)])
  Object
  (componentDidMount [this]
    (let [content (goog.dom/getElement "popover")
          target (dom/node this)
          popup
          (goog.ui.Popup.
            content
            (goog.positioning.AnchoredPosition. target goog.positioning.Corner.TOP_START))]
      (.setPinnedCorner popup goog.positioning.Corner.BOTTOM_START)
      (.setMargin popup 0 0 10 0)
      (om/update-state! this assoc :popup popup)))
  ;; TODO: componentWillUnmount (clean up mutations to popover container div)
  (render [this]
    (let [{:keys [index balance expenses income-growth breakdown] :as props} (om/props this)
          {:keys [true-height bar-width y-scale]} (om/get-computed this)
          {:keys [mouseover? popup]} (om/get-state this)
          scaled-b (y-scale balance)
          scaled-e (y-scale expenses)
          scaled-g (y-scale income-growth)]
      (dom/g 
        ;; translate horizontally
        #js {:transform (translate (* index bar-width) 0)}

        ;; render balance
        (dom/g nil
          (dom/rect
            #js {:fill "steelblue"
                 :y (- true-height scaled-b) 
                 :height scaled-b 
                 :width (dec bar-width)}))

        ;; render expenses
        (dom/g
          #js {:transform (translate 0 (- scaled-b)) ;; align vertically with balance
               :onMouseOver #(om/update-state! this assoc :mouseover? true)
               :onMouseLeave #(om/update-state! this assoc :mouseover? false)
               :onClick 
               (fn [e]
                 (js/ReactDOM.render
                   (render-breakdown {:breakdown breakdown :index index})
                   (.getElement popup))
                 (doto popup 
                   (.setVisible true)
                   (.reposition)))}
          (dom/rect
            #js {:fill (if mouseover? "aquamarine" "lightcoral")
                 :y (- true-height scaled-e)
                 :height scaled-e
                 :width (dec bar-width)}))

        ;; render growth
        (dom/g
          #js {:transform
               (translate 0 (- (- scaled-b scaled-g)))}
          (dom/rect
            #js {:fill "mediumaquamarine"
                 :y (- true-height scaled-g)
                 :height scaled-g
                 :width (dec bar-width)}))))))

(def render-year (om/factory YearUI {:keyfn :index}))

(defn savings-chart [{:keys [max-bar-value data num-years]}]
  (let [pixels-per-thousand 0.2
        max-bar-height (* pixels-per-thousand (/ max-bar-value 1000))
        bar-width 10
        chart-opts
        {:true-height max-bar-height
         :y-scale (linear-scale [0 max-bar-value] [0 max-bar-height])
         :bar-width bar-width}]
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
      savings-chart)))
