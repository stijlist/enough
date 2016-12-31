(ns enough.root
  (:require
    [om.next :as om :refer [defui]]
    [om.dom :as dom]
    [goog.dom]))

(def init-data {})

(defmulti read om/dispatch)
(defmethod read :life-events [_ _ _]
  {:value {}})
(defmethod read :chart [_ _ _]
  {:value {}})

(defmulti mutate om/dispatch)
(defmethod mutate 'events/save
  [{:keys [state]} key params]
  {:action #(swap! state identity)})

(def parser (om/parser {:read read :mutate mutate}))
(def reconciler (om/reconciler {:state init-data :parser parser}))

(def static-txn {:name "Test"})

(defui SavingsChart
  static om/IQuery
  (query [this] '[:chart])
  Object
  (render [this]
    (let [{:keys [chart life-events] :as props} (om/props this)]
      (prn "re-render SavingsChart")
      (assert (not (nil? life-events)) " events cannot be nil"))))

(def render-chart (om/factory SavingsChart))

(defui Root
  static om/IQuery
  (query [this]
    `[{:life-events [:name]}
      {:chart ~(om/get-query SavingsChart)}])
  Object
  (render [this]
    (let [{:keys [life-events] :as props} (om/props this)]
      (prn "Root props are" props)
      (dom/div 
        #js {:style #js {:margin "0 auto" :max-width 600}}
        (dom/div nil
          (dom/h2 nil " events"))
        (dom/div nil
          (dom/button
            #js {:onClick #(om/transact! this `[(events/save ~static-txn) :life-events])}
            "Doesn't repro")
          (dom/button
            #js {:onClick #(om/transact! this `[(events/save ~static-txn) :chart])}
            "Repro"))
        (dom/div nil
          (render-chart props))))))

(om/add-root! reconciler Root (goog.dom/getElement "app"))
