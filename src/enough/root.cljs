(ns enough.root
  (:require
    [enough.data]
    [om.next :as om :refer [defui]]
    [om.dom :as dom]
    [goog.dom]))

(def static-txn {:name "Test"})

(defui LifeEvent
  static om/Ident
  (ident [this {:keys [name]}]
    [:life-events/by-name name])
  static om/IQuery
  (query [this]
    '[:name :costs-per-year :cost :constant?])
  Object
  (render [this]))

(defui LifeEventForm
  static om/IQuery
  (query [this]
    [:creating?])
  Object
  (render [this]
    (let []
      (dom/div nil
        (dom/button #js {:onClick #(om/transact! this `[(events/save ~static-txn) :life-events])} "Doesn't repro")
        (dom/button #js {:onClick #(om/transact! this `[(events/save ~static-txn) :life-events :chart])} "Repro")))))

(defui SavingsChart
  static om/IQuery
  (query [this] '[:chart])
  Object
  (render [this]
    (let [{:keys [chart life-events] :as props} (om/props this)]
      (assert (not (nil? life-events)) "Life events cannot be nil"))))

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
      (prn "props are" props)
      (dom/div 
        #js {:style #js {:margin "0 auto" :max-width 600}}
        (dom/div nil
          (dom/h2 nil "Life events"))
        (dom/div nil
          (life-event-form {}))
        (dom/div nil
          (render-chart props))))))

(om/add-root! enough.data/reconciler Root (goog.dom/getElement "app"))
