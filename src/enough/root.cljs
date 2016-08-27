(ns enough.root
  (:require
    [enough.data :refer [life-events-by-year]]
    [enough.ui :refer [Parameter LifeEvent LifeEventForm]]
    [enough.ui.chart :refer [SavingsChart]]
    [om.next :as om :refer [defui]]
    [om.dom :as dom]
    [goog.dom]))

(def parameter (om/factory Parameter {:keyfn :name}))
(def render-chart (om/factory SavingsChart))
(def life-event (om/factory LifeEvent {:keyfn :name}))
(def life-event-form (om/factory LifeEventForm))

(defui Root
  static om/IQuery
  (query [this]
    `[{:parameters ~(om/get-query Parameter)}
      {:life-events ~(om/get-query LifeEvent)}
      {:event-form ~(om/get-query LifeEventForm)}
      :chart])
  Object
  (render [this]
    (let [{:keys [parameters chart life-events event-form] :as props} (om/props this)]
      (dom/div 
        #js {:className "pa0 bg-near-white black-80"}
        (dom/h2 #js {:className "f4 bb w-50"} "Parameters")
        (dom/div nil (map parameter parameters))
        (dom/div #js {:className "w-50"}
          (dom/h2 #js {:className "f4 bb"} "Life events")
          (life-event-form event-form)
          (dom/div nil 
            (map life-event life-events)))
        (dom/div nil 
          (render-chart
            (assoc chart :life-events-index (life-events-by-year life-events) :height 200 :width 400)))))))

(om/add-root! enough.data/reconciler Root (goog.dom/getElement "app"))
