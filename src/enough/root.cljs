(ns enough.root
  (:require
    [enough.data]
    [enough.ui :refer [Parameter LifeEvent LifeEventForm]]
    [enough.ui.chart :refer [SavingsChart]]
    [enough.ui.journal :refer [JournalExpenseForm]]
    [om.next :as om :refer [defui]]
    [om.dom :as dom]
    [goog.dom]))

(def parameter (om/factory Parameter {:keyfn :name}))
(def render-chart (om/factory SavingsChart))
(def life-event (om/factory LifeEvent {:keyfn :name}))
(def life-event-form (om/factory LifeEventForm))
(def journal-expense (om/factory JournalExpenseForm))

(defui Root
  static om/IQuery
  (query [this]
    `[{:parameters ~(om/get-query Parameter)}
      {:life-events ~(om/get-query LifeEvent)}
      {:event-form ~(om/get-query LifeEventForm)}
      ~@(om/get-query SavingsChart)])
  Object
  (render [this]
    (let [{:keys [parameters life-events event-form] :as props} (om/props this)]
      (dom/div 
        #js {:style #js {:margin "0 auto" :maxWidth 600}}
        (dom/div nil (map parameter parameters))
        (dom/div nil
          (dom/h2 nil "Today")
          (journal-expense {:hello "hello world" :add-expense #()})
          (dom/h2 nil "Life events")
          (life-event-form event-form)
          (dom/div nil 
            (map life-event life-events)))
        (dom/div nil 
          ;; TODO: transacting on `this` from SavingsChart causes no-queries error, so pass snapshot-fn
          (render-chart (om/computed props {:snapshot-fn (fn [snapshot-result] #(om/transact! enough.data/reconciler `[(chart/snapshot ~snapshot-result)]))})))))))

(defn resize-handler [e]
  (om/transact!
    enough.data/reconciler
    `[(window/resize {:height ~(.-innerHeight js/window)
                      :width ~(.-innerWidth js/window)})]))

(.addEventListener js/window "resize" resize-handler)

(om/add-root! enough.data/reconciler Root (goog.dom/getElement "app"))
