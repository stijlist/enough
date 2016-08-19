(ns enough.core
  (:require
   [enough.chart :refer [SavingsChart]]
   [enough.ui :refer [Parameter LifeEvent LifeEventForm]]
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
   :event-form {:creating? true}})

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

(def parameter (om/factory Parameter {:keyfn :name}))
(def render-chart (om/factory SavingsChart))
(def life-event (om/factory LifeEvent {:keyfn :name}))
(def life-event-form (om/factory LifeEventForm))

(defui Root
  static om/IQuery
  (query [this]
    `[{:parameters ~(om/get-query Parameter)}
      {:life-events ~(om/get-query LifeEvent)}
      {:event-form ~(om/get-query LifeEventForm)}
      :chart])
  Object
  (render [this]
    (let [{:keys [parameters chart life-events event-form] :as props} (om/props this)]
      (dom/div 
        #js {:className "pa0 bg-near-white black-80"}
        (dom/h2 #js {:className "f4 bb w-50"} "Parameters")
        (dom/div nil (map parameter parameters))
        (dom/div #js {:className "w-50"}
          (dom/h2 #js {:className "f4 bb"} "Life events")
          (life-event-form event-form)
          (dom/div nil 
            (map life-event life-events)))
        (dom/div #js {:style #js {:overflow "scroll" :maxWidth "100%" :maxHeight "100%"}}
          (render-chart
            (assoc chart :life-events-index (life-events-by-year life-events))))))))
 
(def parser (om/parser {:read read :mutate mutate}))
(def reconciler (om/reconciler {:state init-data :parser parser}))

(om/add-root! reconciler Root (goog.dom/getElement "app"))
