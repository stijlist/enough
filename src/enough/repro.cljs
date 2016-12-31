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

(defui A
  static om/IQuery
  (query [this]
    '[:a]))

(defui B
  static om/IQuery
  (query [this]
    '[:b-subquery]))

(defmulti read om/dispatch)

(defmethod read :a
  [{:keys [state query]} key params]
  (let [s @state
        ret (om/db->tree query (get s key) s)]
    {:value ret}))

;;TODO: do we even need to involve the state atom in the read for b?
(defmethod read :b
  [e k p]
  {:value {:some :b-value}})

(defmulti mutate om/dispatch)

(defmethod mutate 'transact/a
  [{:keys [state]} key params]
  (swap! state assoc :a :new))

(def render-a (om/factory A))
(def render-b (om/factory B))

(defui Repro
  static om/IQuery
  (query [this]
    `[{:a ~(om/get-query A)}
      {:b ~(om/get-query B)}])
  Object
  (render [this]
    (let [{:keys [a b] :as props} (om/props this)]
      (render-a a)
      (render-b props))))

(def parser (om/parser {:read read :mutate mutate}))

(comment
  (let [this nil]
    (om/transact! parser [(transact/a :something) :a :b])))
