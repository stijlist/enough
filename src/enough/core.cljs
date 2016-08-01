(ns enough.core
  (:require
   [enough.chart :as chart :refer [SavingsChart]]
   [goog.dom :as dom]
   [om.dom :refer [node]]
   [clojure.set :as set]
   [cljs.spec :as s]
   [om.next :as om :refer-macros [defui]]
   [sablono.core :refer-macros [html]]))

(enable-console-print!)

(s/def ::pending-life-event (s/or :none nil? :some ::life-event))
(s/def ::life-event
  (s/keys :req-un [::name ::costs-per-year]))
(s/def ::name string?)
(s/def ::costs-per-year #(every? number? (keys %)))
(s/def ::ident (s/tuple keyword? #(not (coll? %))))
(s/def ::life-events (s/coll-of ::ident []))
(s/def ::app-state (s/keys :req-un [::pending-event ::life-events ::popovers]))

(def init-data
  {:parameters 
   [{:name "Salary" :value 40000 :editing? false}
    {:name "Expenses" :value 30000 :editing? false}
    {:name "Rate of return" :value 0.04 :editing? false}]
   :life-events
   [{:name "Moving!" :costs-per-year {0 2000 1 2000}}
    {:name "Buy that Miata!" :costs-per-year {3 5000}}]
   :pending-event nil
   :popovers []})

(defmulti read om/dispatch)

(defmethod read :parameters
  [{:keys [state query]} key params]
  (let [s @state]
    {:value (om/db->tree query (get s key) s)}))

(defmethod read :life-events
  [{:keys [state query]} key params]
  (let [s @state]
    {:value (om/db->tree query (get s key) s)}))

(def ident->chart-key
  {"Salary" :salary "Expenses" :expenses "Rate of return" :rate-of-return})

(defmethod read :chart
  [{:keys [state]} key params]
  (let [s @state
        parameters (om/db->tree '[*] (get s :parameters) s)
        life-events (om/db->tree '[*] (get s :life-events) s)
        pname->pvalue (into {} (map (juxt :name :value)) parameters)
        focused (get s :focused-segments)
        chart (-> pname->pvalue
                (set/rename-keys ident->chart-key)
                (assoc :life-events life-events :cutoff 65 :focused focused))]
    {:value chart}))

(defmethod read :popovers
  [{:keys [state]} key params]
  (let [s @state
        popovers (om/db->tree '[*] (get s :popovers) s)]
    {:value popovers}))

(defmethod read :pending-event
  [{:keys [state]} key params]
  {:value (:pending-event @state)})

(defmulti mutate om/dispatch)

(defn apply-if-valid [f spec]
  (fn [state & args]
    (let [state' (apply f state args)]
      (if (s/valid? spec state') 
        state'
        (do
          (println "Backing out transaction due to spec failure:")
          (s/explain spec state')
          state)))))

(defmethod mutate 'parameters/update
  [{:keys [state]} key {:keys [name] :as params}]
  {:pre [(string? name)]}
  {:action
   (fn []
     (swap! state (apply-if-valid update-in ::app-state) [:parameters/by-name name] (fn [old] (merge old params))))})

(defmethod mutate 'events/create-pending
  [{:keys [state]} key params]
  {:action
   (fn []
     (swap! state (apply-if-valid assoc ::app-state) :pending-event {:name "" :costs-per-year {}}))})

(defmethod mutate 'event/update-pending-costs
  [{:keys [state]} key {:keys [pending-index pending-cost]}]
  {:pre [(not (nil? pending-cost))
         (not (nil? pending-index))]}
  (let [costs (get-in @state [:pending-event :costs-per-year])
        new-costs (assoc costs pending-index pending-cost)]
    {:action 
     (fn []
       (swap! state (apply-if-valid update-in ::app-state) [:pending-event] merge {:costs-per-year new-costs}))}))

(defmethod mutate 'event/update-pending-name
  [{:keys [state]} key {:keys [pending-name] :as params}]
  {:action 
   (fn []
     (swap! state (apply-if-valid update-in ::app-state) [:pending-event] merge {:name pending-name}))})

(defmethod mutate 'events/cancel-pending
  [{:keys [state]} key params]
  {:action #(swap! state assoc :pending-event nil)})

(defmethod mutate 'events/save-pending
  [{:keys [state]} key params]
  (let [pending (:pending-event @state)
        ident [:life-events/by-name (:name pending)]
        add-life-event #(-> %
                          (assoc-in ident pending)
                          (update :life-events conj ident)
                          (assoc :pending-event nil))]
    {:action
     (fn []
       (swap! state (apply-if-valid add-life-event ::app-state)))}))

(defmethod mutate 'popovers/show
  [{:keys [state]} key {:keys [ident] :as params}]
  (letfn [(add-popover [state p]
            (-> state
              (assoc-in [:popovers/by-ident ident] p)
              (update :popovers conj [:popovers/by-ident ident])))]
    {:action #(swap! state add-popover params)}))

(defn coerce-to-type-of [orig v]
  (condp = (type orig)
    js/Number (js/Number v)
    js/String (js/String v)))

(defn render-costs-per-year [costs-per-year]
  (map 
    (fn [[year cost]]
      [:li {:key year} (str "$" cost " " year " years from now")])
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
            [:button
             {:onClick 
              (fn [e] 
                (.preventDefault e)
                (om/set-state! this {:expanded? true}))}
             "Summary"]
            [:button
             {:onClick
              (fn [e]
                (.preventDefault e)
                (om/set-state! this {:expanded? false}))}
             "Collapse"])]
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
                      :chart])))}
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
             [:div (render-costs-per-year costs-per-year)])
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
            [:button {:onClick #(om/transact! this '[(events/cancel-pending)])} "Cancel"]
            [:button 
             {:onClick 
              #(when pending
                (om/transact! this `[(events/save-pending) :life-events :chart :pending-event]))}
             "Done"]]])))))

(defui ExpensePopover
  static om/IQuery
  (query [this]
    '[:message :position :ident])
  static om/Ident
  (ident [this props]
    [:popovers/by-ident (:ident props)])
  Object
  (render [this]
    (let [{:keys [message position]} (om/props this)]
      (html
        [:div 
         {:style 
          {:height "20px"
           :width "20px"
           :top 50 #_(:top position)
           :left (:left position)
           :position "relative"}}
         message]))))

(def parameter (om/factory Parameter {:keyfn :name}))
(def render-chart (om/factory SavingsChart))
(def render-popover (om/factory ExpensePopover))
(def life-event (om/factory LifeEvent {:keyfn :name}))
(def life-event-pending (om/factory PendingLifeEvent))

(def BoundingClientRect (-> (dom/getElement "app") .getBoundingClientRect type))

(extend-type 
  BoundingClientRect
  IEncodeClojure
  (-js->clj [x options]
    (into {}
      (for [k (js/Object.keys x)] [(keyword k) (js->clj (aget x k))]))))

(defui Root
  static om/IQuery
  (query [this]
    (let [pquery (om/get-query Parameter) lquery (om/get-query LifeEvent) cquery (om/get-query SavingsChart) ppquery (om/get-query ExpensePopover)]
      `[{:parameters ~pquery} {:chart ~cquery} {:life-events ~lquery} :pending-event {:popovers ~ppquery}]))
  Object
  (render [this]
    (let [{:keys [parameters chart life-events pending-event popovers] :as props} (om/props this)]
      (html 
        [:div
         [:div (map parameter parameters)]
         [:div
           (map life-event life-events)
           (life-event-pending pending-event)]
         [:div {:style {:overflow "scroll" :max-width "100%" :max-height "100%"}}
          [:div (map render-popover popovers)]
          (render-chart chart)]]))))

(def parser (om/parser {:read read :mutate mutate}))
(def reconciler (om/reconciler {:state init-data :parser parser}))

(om/add-root! reconciler Root (dom/getElement "app"))
