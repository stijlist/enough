(ns enough.data
  (:require
   [clojure.set :as set]
   [goog.dom]
   [om.dom :as dom]
   [om.next :as om :refer-macros [defui]]))

(enable-console-print!)

(def init-data
  {:parameters 
   [{:name "Rate of return" :value 0.04 :editing? false}]
   :life-events
   [{:name "Expenses" :value -30000 :constant? true}
    {:name "Salary" :value 40000 :constant? true}]
   :event-form {:creating? false}
   :snapshots []
   :window-size {:height (.-innerHeight js/window)
                 :width (.-innerWidth js/window)}})

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
    {:value ret}))

(def ident->chart-key
  {"Rate of return" :rate-of-return})

(defmethod read :event-form
  [{:keys [state]} key params]
  {:value (get @state :event-form)})

(defn clamp [n] (fn [x] (if (> x n) n x)))

(defmethod read :chart
  [{:keys [state]} key params]
  (let [s @state
        parameters (om/db->tree '[*] (get s :parameters) s)
        pname->pvalue (into {} (map (juxt :name :value)) parameters)
        dimensions (-> (:window-size s)
                     (update :height (clamp 400))
                     (update :width (clamp 600)))
        chart (-> pname->pvalue
                (set/rename-keys ident->chart-key)
                (assoc :cutoff 100)
                (merge dimensions))
        with-snapshots
        (assoc chart :snapshots (map #(-> % (update :height (clamp 100)) (update :width (clamp 150))) (:snapshots s)))]
    {:value with-snapshots}))

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
  (when-not (:name params)
    (throw (ex-info "Name of event cannot be null or empty" params)))
  (let [pending params
        ident [:life-events/by-name (:name params)]
        add-life-event #(-> %
                          (assoc-in ident pending)
                          (update :life-events conj ident)
                          (assoc-in [:event-form :creating?] false))]
    {:action #(swap! state add-life-event)}))

(defmethod mutate 'chart/snapshot
  [{:keys [state]} key params]
  {:action #(swap! state update :snapshots conj params)})

(defmethod mutate 'window/resize
  [{:keys [state]} key params]
  {:action #(swap! state assoc :window-size params)})

(def parser (om/parser {:read read :mutate mutate}))
(def reconciler (om/reconciler {:state init-data :parser parser}))
