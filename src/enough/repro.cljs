(ns enough.repro
  (:require
    [om.next :as om :refer [defui]]))
;; I think the core of the issue is that both SavingsChart and transact! call for :chart reads
;; SavingsChart is scheduled for a read because it depends on :life-events?
;; unclear why SavingsChart is scheduled for a read
;; the second SavingsChart read doesn't include life-events
;; original: 
#_(om/transact! this `[(events/save ~parsed-data) :life-events :chart])
;; `this` is LifeEventForm instance
#_(om/transact! this [(events/save {:some :data}) :life-events :chart])

(defmulti read om/dispatch)
(defmulti mutate om/dispatch)

(defmethod read :events
  [{:keys [state query]} key params]
  (let [s @state]
    {:value (om/db->tree query (get s key) s)}))
(defmethod read :chart [e k p]
  {:value {:some :chart}})
(defmethod mutate 'transact/events
  [{:keys [state]} key params]
  (swap! state assoc :events :new))

(defui Chart
  static om/IQuery (query [this] '[:chart]))
(defui Events
  static om/IQuery (query [this] '[:events]))
(defui Root
  static om/IQuery
  (query [this]
    `[{:chart ~(om/get-query Chart)}
      {:events ~(om/get-query Events)}]))

(def parser (om/parser {:read read :mutate mutate}))
(def init-data {})

(defn repro []
  (let [s (atom (om/tree->db Root init-data true))
        ui (parser {:state s} '[(transact/events) :chart])
        ui-a (parser {:state s} (om/get-query Chart))
        ui-b (parser {:state s} (om/get-query Events))
        ui' (parser {:state s} '[(transact/events) :chart :events])
        ui-a' (parser {:state s} (om/get-query Chart))
        ui-b' (parser {:state s} (om/get-query Events))]
    (prn "ui:" ui)
    (prn "ui':" ui')
    (assert (= ui-a ui-a'))))
