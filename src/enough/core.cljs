(ns enough.core
  (:require
   [enough.chart :as chart]
   [goog.dom :as dom]
   [clojure.set :as set]
   [cljs.spec :as s]
   [om.next :as om :refer-macros [defui]]
   [sablono.core :refer-macros [html]]))

(enable-console-print!)

(def ident->chart-key
  {"Salary" :salary "Expenses" :expenses "Rate of return" :rate-of-return})

(def init-data
  {:parameters 
   [{:name "Salary" :value 40000 :editing? false}
    {:name "Expenses" :value 30000 :editing? false}
    {:name "Rate of return" :value 0.1 :editing? false}]
   :life-events
   [{:name "L.A. trip!" :costs-per-year {0 2000}}
    {:name "Buy that Miata!" :costs-per-year {3 5000}}]
   :pending-event nil})

(defn multimap [kvs]
  (let [assoc-val-as-set 
        (fn [m [k v]]
          (if (contains? m k) 
            (assoc m k (conj (get m k) v))
            (assoc m k #{v})))]
    (reduce assoc-val-as-set {} kvs)))

(defn life-events-by-year [life-events]
  (let [get-year-ev-pairs (fn [e] (for [k (-> e :costs-per-year keys)] [k e]))]
    (multimap (mapcat get-year-ev-pairs life-events))))

(defmulti read om/dispatch)

(defn get-normalized-toplevel-key [state key]
  (let [s @state]
    (into [] (map #(get-in s %) (get s key)))))

(defmethod read :parameters
  [{:keys [state]} key params]
  {:value (get-normalized-toplevel-key state key)})

(defmethod read :chart-values
  [{:keys [state]} key params]
  {:value 
   (assoc 
     (into {} (map (juxt :name :value)) (get-normalized-toplevel-key state :parameters))
     :year->life-events
     (life-events-by-year (get-normalized-toplevel-key state :life-events)))})

(defmethod read :life-events
  [{:keys [state]} key params]
  {:value (get-normalized-toplevel-key state key)})

(defmethod read :pending-event
  [{:keys [state]} key params]
  {:value (:pending-event @state)})

(defmulti mutate om/dispatch)

(defmethod mutate 'parameters/update
  [{:keys [state]} key {:keys [name] :as params}]
  {:pre [(string? name)]}
  {:action
   (fn []
     (swap! state update-in [:parameters/by-name name] (fn [old] (merge old params))))})

(defn validate [spec f]
  (fn [state & args]
    (let [state' (apply f state args)]
      (if (s/valid? spec state') 
        state'
        (do
          (println "Backing out transaction due to spec failure:")
          (s/explain spec state')
          state)))))

(s/def ::pending-life-event (s/or :none nil? :some ::life-event))
(s/def ::life-event
  (s/keys :req-un [::name ::costs-per-year]))
(s/def ::name string?)
(s/def ::costs-per-year #(every? number? (keys %)))
(s/def ::ident (s/tuple keyword? #(not (coll? %))))
(s/def ::life-events (s/coll-of ::ident []))
(s/def ::app-state (s/keys :req-un [::pending-event ::life-events]))

(defmethod mutate 'events/create-pending
  [{:keys [state]} key params]
  {:action
   (fn []
     (swap! state (validate ::app-state assoc) :pending-event {:name "" :costs-per-year {}}))})

(defmethod mutate 'event/update-pending-costs
  [{:keys [state]} key {:keys [pending-index pending-cost]}]
  {:pre [(not (nil? pending-cost))
         (not (nil? pending-index))]}
  (let [ev (:pending-event state)
        costs (:costs-per-year ev)
        new-costs (assoc costs pending-index pending-cost)]
    {:action 
     (fn []
       (swap! state (validate ::app-state update-in) [:pending-event] merge {:costs-per-year new-costs }))}))

(defmethod mutate 'event/update-pending-name
  [{:keys [state]} key {:keys [pending-name] :as params}]
  {:action 
   (fn []
     (if pending-name
       (swap! state (validate ::app-state update-in) [:pending-event] merge {:name pending-name})))})

(defmethod mutate 'event/save
  [{:keys [state]} key {:keys [ident data]}]
  (let [add-life-event #(-> %
                          (assoc-in ident data)
                          (update :life-events conj ident)
                          (assoc :pending-event nil))]
    {:action
     (fn []
       (swap! state (validate ::app-state add-life-event)))}))

(defui Chart
  Object
  (render [this]
    (prn "re-render Chart" (-> this om/props))
    (-> (om/props this) 
      (set/rename-keys ident->chart-key)
      (assoc :cutoff 65)
      (chart/years-til-retirement)
      (chart/bar-chart {:width 400 :height 500}))))

(defn coerce-to-type-of [orig v]
  (condp = (type orig)
    js/Number (js/Number v)
    js/String (js/String v)))

(defn render-costs-per-year [costs-per-year]
  (map 
    (fn [[year cost]]
      [:li (str "$" cost " " year " years from now")])
    costs-per-year))

(defui LifeEvent
  static om/Ident
  (ident [this {:keys [name]}]
    [:life-events/by-name name])
  static om/IQuery
  (query [this]
    '[:name :costs-per-year])
  Object
  (render [this]
    (let [{:keys [name costs-per-year]} (om/props this)
          {:keys [expanded?]} (om/get-state this)
          total-cost (reduce + (vals costs-per-year))
          expanded? (or expanded? false)]
      (html 
        [:div 
         [:div
          (str name " $" total-cost " total. ")
          (if (not expanded?)
            [:a 
             {:onClick 
              (fn [e] 
                (.preventDefault e)
                (om/set-state! this {:expanded? true}))
              :href "" 
              :style {:font-size "small" :font-style "italic"}}
             "(See summary)"]
            [:a
             {:onClick
              (fn [e]
                (.preventDefault e)
                (om/set-state! this {:expanded? false}))
              :href ""
              :style {:font-size "small" :font-style "italic"}}
             "(Collapse summary)"])]
           (if expanded? (render-costs-per-year costs-per-year))]))))

(defn track-in [component k]
  (fn [e]
    (om/update-state! component merge {k (.. e -target -value)})))

(defui Parameter
  static om/Ident
  (ident [this {:keys [name]}]
    [:parameters/by-name name])
  static om/IQuery
  (query [this]
    '[:name :value :editing?])
  Object
  (render [this]
    (let [{:keys [name value editing?] :as props} (om/props this)
          {:keys [field-value] :as state} (om/get-state this)]
     (html 
       [:div nil
        [:span (str name ": " value)] 
        (if (not editing?)
          [:button {:onClick #(om/transact! this `[(parameters/update {:name ~name :editing? true})])} "Edit"]
          [:div 
            [:label "New value:"] 
            [:input 
             {:type "text" 
              :value (or field-value value)
              :onChange (track-in this :field-value)}]
            [:button 
             {:onClick 
              (fn [e]
                (let [new-value (coerce-to-type-of value field-value)]
                  (om/transact! this 
                    `[(parameters/update 
                        {:name ~name 
                         :value ~new-value 
                         :editing? false}) 
                      :chart-values])))}
              "Save"]])]))))

(defui PendingLifeEvent
  static om/IQuery
  (query [this]
    [:pending-event])
  Object
  (render [this]
    (let [{:keys [name costs-per-year] :as pending} (:pending-event (om/props this))
          creating? (not (nil? pending))
          {:keys [editing-name pending-cost pending-index]} (om/get-state this)]
      (html
        (if (not creating?)
          [:button 
           {:onClick #(om/transact! this '[(events/create-pending)])}
           "New life event"]
          [:div
           [:div
            [:label "Event name:"]
            (if editing-name
              [:span [:input {:value (or editing-name "") :type "text" :onChange (track-in this :editing-name)}]
               [:button 
                {:onClick 
                 (fn [] 
                   (om/transact! this `[(event/update-pending-name {:pending-name ~editing-name})])
                   (om/update-state! this dissoc :editing-name))}
                 "Save"]]

               [:span 
                (:name pending)
                [:button 
                 {:onClick #(om/update-state! this assoc :editing-name "")} 
                "Edit"]])]
           (when (not (empty? costs-per-year))
             [:div (map (fn [[year cost]] [:li (str "$" cost " in year " year)]) costs-per-year)])
           [:div
            [:label "Cost of event:"]
            [:input {:value (or pending-cost "") :type "text" :onChange (track-in this :pending-cost)}]]
           [:div
            [:label "Years from now:"]
            [:input {:value (or pending-index "") :type "text" :onChange (track-in this :pending-index)}]
            [:button 
             {:onClick 
              #(if (and pending-cost pending-index)
                (let [pc (js/Number pending-cost)
                      pi (js/Number pending-index)]
                (do
                  (om/transact! this 
                    `[(event/update-pending-costs {:pending-cost ~pc :pending-index ~pi})])
                  (om/update-state! this dissoc :pending-cost :pending-index))))}
             "Add another cost"]
            [:button 
             {:onClick 
              #(when pending
                (om/transact! this `[(event/save {:ident [:life-events/by-name ~(:name pending)] :data ~pending}) :life-events :chart-values :pending-event]))}
             "Done"]]])))))

(def parameter (om/factory Parameter {:keyfn :name}))
(def chart (om/factory Chart))
(def life-event (om/factory LifeEvent {:keyfn :name}))
(def life-event-pending (om/factory PendingLifeEvent))

(defui Root
  static om/IQuery
  (query [this]
    (let [pquery (om/get-query Parameter) lquery (om/get-query LifeEvent)]
      `[{:parameters ~pquery} :chart-values {:life-events ~lquery} :pending-event]))
  Object
  (render [this]
    (let [{:keys [parameters chart-values life-events pending-event] :as props} (om/props this)]
      (html 
        [:div
         [:div (map parameter parameters)]
         [:div
           (map life-event life-events)
           (life-event-pending pending-event)]
         (chart chart-values)]))))

(def parser (om/parser {:read read :mutate mutate}))
(def reconciler (om/reconciler {:state init-data :parser parser}))

(om/add-root! reconciler Root (dom/getElement "app"))
