(ns enough.root
  (:require
    [enough.data]
    [enough.ui :refer [LifeEvent LifeEventForm]]
    [enough.ui.chart :refer [SavingsChart]]
    [om.next :as om :refer [defui]]
    [om.dom :as dom]
    [goog.dom]))

(def render-chart (om/factory SavingsChart))
(def life-event (om/factory LifeEvent {:keyfn :name}))
(def life-event-form (om/factory LifeEventForm))

(defui Root
  static om/IQuery
  (query [this]
    `[
      {:life-events ~(om/get-query LifeEvent)}
      {:event-form ~(om/get-query LifeEventForm)}
      {:chart ~(om/get-query SavingsChart)}])
  Object
  (render [this]
    (let [{:keys [life-events event-form] :as props} (om/props this)]
      (dom/div 
        #js {:style #js {:margin "0 auto" :max-width 600}}
        (dom/div nil
          (dom/h2 nil "Life events")
          (life-event-form event-form)
          (dom/div nil 
            (map life-event life-events)))
        (dom/div nil 
          (render-chart props))))))

(defn resize-handler [e]
  (om/transact!
    enough.data/reconciler
    `[(window/resize {:height ~(.-innerHeight js/window)
                      :width ~(.-innerWidth js/window)})]))

(.addEventListener js/window "resize" resize-handler)

(om/add-root! enough.data/reconciler Root (goog.dom/getElement "app"))
