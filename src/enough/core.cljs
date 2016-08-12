(ns enough.core
  (:require
   [enough.chart :as chart :refer [SavingsChart]]
   [goog.dom :as gdom]
   [clojure.set :as set]
   [om.dom :as dom]
   [om.next :as om :refer-macros [defui]]
   [sablono.core :refer-macros [html]]))

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
   (fn []
     (swap! state update-in [:parameters/by-name name] (fn [old] (merge old params))))})

(defmethod mutate 'events/new
  [{:keys [state]} key {:keys [name] :as params}]
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

(defn coerce-to-type-of [orig v]
  (condp = (type orig)
    js/Number (js/Number v)
    js/String (js/String v)))

(defn render-costs-per-year [costs-per-year]
  (map
    (fn [[year cost]]
      (dom/li #js {:key year} (str "$" cost " " year " years from now")))
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
    (let [{:keys [name costs-per-year] :as props} (om/props this)
          {:keys [expanded?]} (om/get-state this)
          total-cost (reduce + (vals costs-per-year))
          expanded? (or expanded? false)]
      (prn "re-render LifeEvent" props)
      (apply dom/div nil
        (dom/div nil
          (str name " $" total-cost " total. ")
          (if (not expanded?)
            (dom/button
              #js {:onClick 
                   (fn [e] 
                     (.preventDefault e)
                     (om/set-state! this {:expanded? true}))}
              "Summary")
            (dom/button
              #js {:onClick
                   (fn [e]
                     (.preventDefault e)
                     (om/set-state! this {:expanded? false}))}
              "Collapse")))
        (if expanded? (render-costs-per-year costs-per-year))))))

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
      (dom/div nil
        (dom/span nil (str name ": " value))
        (if (not editing?)
          (dom/button
            #js {:onClick #(om/transact! this `[(parameters/update {:name ~name :editing? true})])}
            "Edit")
          (dom/div nil
            (dom/label "New value:")
            (dom/input
              #js {:type "text"
                   :value (or field-value value)
                   :onChange (track-in this :field-value)})
            (dom/button
              #js {:onClick
                   (fn [e]
                     (let [new-value (coerce-to-type-of value field-value)]
                       (om/transact! this 
                         `[(parameters/update 
                             {:name ~name 
                              :value ~new-value 
                              :editing? false}) 
                           :chart])))}
              "Save")))))))

(defui LifeEventForm
  static om/IQuery
  (query [this]
    [:creating?])
  Object
  (initLocalState [this]
    {:name "" :cost "0" :index "0" :duration "1" :costs-per-year {}})
  (render [this]
    (let [{:keys [creating?] :as props} (om/props this)
          {:keys [name cost index duration costs-per-year] :as pending} (om/get-state this)
          ;; name is non-empty, and cost, index, and duration are all numbers
          valid?
          (and (not (empty? name))
            (every? (comp not js/isNaN js/parseInt) [cost index duration])
            (not (empty? costs-per-year)))]

      (prn "re-render form" props)
      (if (not creating?)
        (dom/button 
          #js {:onClick #(om/transact! this '[(events/new)])}
          "New life event")
        (dom/div nil
          (dom/div nil
            (dom/label nil "Event name:")
            (dom/input #js {:value name :type "text" :onChange (track-in this :name)}))
          (when (not (empty? costs-per-year))
            (dom/div nil (render-costs-per-year costs-per-year)))
          (dom/div nil
            (dom/label nil "Cost of event:")
            (dom/input #js {:value cost :type "text" :onChange (track-in this :cost)}))
          (dom/div nil
            (dom/label nil "Years from now:")
            (dom/input #js {:value index :type "text" :onChange (track-in this :index)}))
          (dom/div nil
            (dom/label nil "Recurring for how many years?")
            (dom/input #js {:value duration :type "text" :onChange (track-in this :duration)}))
          (dom/div nil
            (dom/button 
              #js {:onClick #(om/update-state! this update :costs-per-year assoc (js/parseInt index) (js/parseInt cost))}
              "Add cost")
            (dom/button #js {:onClick #(om/transact! this '[(events/cancel)])} "Cancel")
            (dom/button
              #js {:disabled (not valid?)
                   :onClick
                   #(do 
                     (om/transact! this `[(events/save ~(om/get-state this)) :life-events :chart])
                     (om/set-state! this {:name "" :cost "0" :index "0" :duration "1" :costs-per-year {}}))}
              "Done")))))))

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
      (dom/div nil
        (apply dom/div nil (map parameter parameters))
        (dom/div nil
          (apply dom/div nil 
            (map life-event life-events))
          (life-event-form event-form))
        (dom/div #js {:style #js {:overflow "scroll" :maxWidth "100%" :maxHeight "100%"}}
          (render-chart
            (assoc chart :life-events-index (life-events-by-year life-events))))))))
 
(def parser (om/parser {:read read :mutate mutate}))
(def reconciler (om/reconciler {:state init-data :parser parser}))

(om/add-root! reconciler Root (gdom/getElement "app"))
