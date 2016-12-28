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
;;TODO: do we even need to involve the state atom?
(defmethod read :a
  [e k p]
  {:value {:some :a-value}})
;;TODO - we probably need to involve db->tree here to repro
(defmethod read :b
  [e k p]
  {:value {:some :b-value}})

(comment
(defmethod read :life-events
  [{:keys [state query]} key params]
  (let [s @state
        ret (om/db->tree query (get s key) s)]
    (prn "read life events" ret)
    {:value ret}))
)

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

(comment
  ;; get instance of A somehow as `this`
  (let [this nil]
    (om/transact! this [(transact/a :something) :a :b])))
