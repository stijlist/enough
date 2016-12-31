(ns enough.ui
  (:require
   [clojure.spec :as s]
   [goog.dom]
   [om.dom :as dom]
   [om.next :as om :refer-macros [defui]]))

(enable-console-print!)

(def static-txn {:name "Test"})
(defui LifeEvent
  static om/Ident
  (ident [this {:keys [name]}]
    [:life-events/by-name name])
  static om/IQuery
  (query [this]
    '[:name :costs-per-year :cost :constant?])
  Object
  (render [this]
    (let [{:keys [name costs-per-year constant?] :as props} (om/props this)
          {:keys [expanded?]} (om/get-state this)
          total-cost (if constant? (:cost props) (reduce + (vals costs-per-year)))
          expanded? (or expanded? false)]
      )))

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
