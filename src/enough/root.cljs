(ns enough.root
  (:require
    [enough.data]
    [enough.ui :refer [LifeEvent LifeEventForm]]
    [enough.ui.chart :refer [SavingsChart]]
    [om.next :as om :refer [defui]]
    [om.dom :as dom]
    [goog.dom]))

(def render-chart (om/factory SavingsChart))
(def life-event-form (om/factory LifeEventForm))

(defui Root
  static om/IQuery
  (query [this]
    `[{:life-events ~(om/get-query LifeEvent)}
      {:event-form ~(om/get-query LifeEventForm)}
      {:chart ~(om/get-query SavingsChart)}])
  Object
  (render [this]
    (let [{:keys [life-events] :as props} (om/props this)]
      (prn props)
      (dom/div 
        #js {:style #js {:margin "0 auto" :max-width 600}}
        (dom/div nil
          (dom/h2 nil "Life events"))
        (dom/div nil
          (life-event-form {}))
        (dom/div nil
          (render-chart props))))))

(om/add-root! enough.data/reconciler Root (goog.dom/getElement "app"))
