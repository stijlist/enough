(ns enough.core
  (:require
   [enough.chart :as chart]
   [goog.dom :as dom]
   [clojure.set :as set]
   [om.next :as om :refer-macros [defui]]
   [sablono.core :refer-macros [html]]))

(enable-console-print!)

(def ident->chart-key
  {"Salary" :salary "Expenses" :expenses "Rate of return" :rate-of-return})

(def init-data
  {:parameters 
   [{:name "Salary" :value 100000 :editing? false}
    {:name "Expenses" :value 80000 :editing? false}
    {:name "Rate of return" :value 0.1 :editing? false}]
   :life-events
   [{:name "Milan trip!" :costs-per-year {0 2000}}
    {:name "Japan trip!" :costs-per-year {0 1000 1 3000}}]
   ;; temporary, TODO(stijlist): reset to nil
   :pending-event {}})

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

(defmethod mutate 'events/create-pending
  [{:keys [state]} key params]
  {:action
   (fn []
     (swap! state assoc :pending-event {}))})

(defmethod mutate 'event/update-pending
  [{:keys [state]} key {:keys [pending-index pending-cost]}]
  (let [ev (:pending-event state)
        costs (:costs-per-year ev)
        new-costs (assoc costs pending-index pending-cost)]
    {:action 
     (fn []
       (swap! state update-in [:pending-event :costs-per-year] merge {:costs-per-year new-costs}))}))

(defmethod mutate 'events/save
  [{:keys [state]} key params]
  (let [pending (:pending-event state)]
    {:action
     (fn []
       (swap! state update-in :life-events conj pending))}))

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
              :onChange #(let [new (.. % -target -value)] 
                           (om/set-state! this {:field-value new}))}]
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

(defn track-in [component k]
  (fn [e]
    (om/update-state! component merge {k (.. e -target -value)})))

(defui PendingLifeEvent
  static om/IQuery
  (query [this]
    [:pending-event])
  Object
  (render [this]
    (let [{:keys [name costs-per-year] :as pending} (om/props this)
          creating? (not (nil? pending))
          {:keys [pending-name pending-cost pending-index]} (om/get-state this)]
      (html
        (if (not creating?)
          [:button 
           {:onClick #(om/transact! this '[(events/create-pending)])}
           "New life event"]
          [:div
           [:div
            [:label "Event name:"]
            [:input {:value (or pending-name "") :type "text" :onChange (track-in this :pending-name)}]]
           [:div
            [:label "Cost of event:"]
            [:input {:value (or pending-cost "") :type "text" :onChange (track-in this :pending-cost)}]]
           [:div
            [:label "Years from now:"]
            [:input {:value (or pending-index "") :type "text" :onChange (track-in this :pending-index)}]
            [:button 
             {:onClick 
              #(if (and pending-cost pending-index)
                (do
                  (om/transact! this 
                    `[(event/update-pending {:cost ~pending-cost :cost-index ~pending-index})])
                  (om/update-state! this dissoc :pending-cost :pending-index)
                  ))}
             "Add another cost"]
            [:button 
             {:onClick 
              #(if pending
                (om/transact! this `[(event/save ~pending)]))}
             "Done"]]]))
    )
  )
)

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
    (let [{:keys [parameters chart-values life-events pending-event] :as props} (om/props this)
          ]
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
