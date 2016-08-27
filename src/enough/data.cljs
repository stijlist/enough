(ns enough.data
  (:require
   [clojure.set :as set]
   [goog.dom]
   [om.dom :as dom]
   [om.next :as om :refer-macros [defui]]))

(enable-console-print!)

(def init-data
  {:parameters 
   [{:name "Salary" :value 40000 :editing? false}
    {:name "Expenses" :value 30000 :editing? false}
    {:name "Rate of return" :value 0.04 :editing? false}
    {:name "Initial savings" :value 0 :editing? false}]
   :life-events []
   :event-form {:creating? false}})

(defmulti read om/dispatch)

(defmethod read :parameters
  [{:keys [state query]} key params]
  (let [s @state]
    {:value (om/db->tree query (get s key) s)}))

(defn life-events-by-year [life-events]
  (letfn [(assoc-set [m [k v]]
            (if-not (contains? m k)
              (assoc m k #{v}) 
              (update m k conj v)))
          (multimap [kvs]
            (reduce assoc-set {} kvs))
          (year-to-events [e] 
            (for [k (-> e :costs-per-year keys)] [k e]))]
    (multimap (mapcat year-to-events life-events))))

(defmethod read :life-events
  [{:keys [state query]} key params]
  (let [s @state
        ret (om/db->tree query (get s key) s)]
    (prn "re-read life event key" ret)
    {:value ret}))

(def ident->chart-key
  {"Salary" :salary "Expenses" :expenses "Rate of return" :rate-of-return "Initial savings" :initial-savings})

(defmethod read :event-form
  [{:keys [state]} key params]
  {:value (get @state :event-form)})

(defmethod read :chart
  [{:keys [state]} key params]
  (let [s @state
        parameters (om/db->tree '[*] (get s :parameters) s)
        pname->pvalue (into {} (map (juxt :name :value)) parameters)
        chart (-> pname->pvalue
                (set/rename-keys ident->chart-key)
                (assoc :cutoff 65))]
    {:value chart}))

(defmulti mutate om/dispatch)

(defmethod mutate 'parameters/update
  [{:keys [state]} key {:keys [name] :as params}]
  {:pre [(string? name)]}
  {:action
   #(swap! state update-in [:parameters/by-name name] (fn [old] (merge old params)))})

(defmethod mutate 'events/new
  [{:keys [state]} key params]
  {:action #(swap! state assoc-in [:event-form :creating?] true)})

(defmethod mutate 'events/cancel
  [{:keys [state]} key params]
  {:action #(swap! state assoc-in [:event-form :creating?] false)})

(defmethod mutate 'events/save
  [{:keys [state]} key params]
  (let [pending params
        ident [:life-events/by-name (:name params)]
        add-life-event #(-> %
                          (assoc-in ident pending)
                          (update :life-events conj ident)
                          (assoc-in [:event-form :creating?] false))]
    {:action #(swap! state add-life-event)}))

(def parser (om/parser {:read read :mutate mutate}))
(def reconciler (om/reconciler {:state init-data :parser parser}))
