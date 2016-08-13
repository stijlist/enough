(ns enough.ui
  (:require
   [clojure.spec :as s]
   [goog.dom]
   [om.dom :as dom]
   [om.next :as om :refer-macros [defui]]))

(enable-console-print!)

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

(defn form-field [this label key]
  (dom/div nil
    (dom/label nil label)
    (dom/input #js {:value (get (om/get-state this) key) :type "text" :onChange (track-in this key)})))

(def init-form-state {:name "" :cost "0" :index "0" :duration "1" :costs-per-year {}})

(s/def ::form-data (s/keys :req-un [::name ::cost ::index ::duration ::costs-per-year]))
(s/def ::name not-empty)
(s/def ::cost #(not (zero? %)))
(s/def ::index number?)
(s/def ::costs-per-year not-empty)

(def messages
  {::name "An event's name cannot be empty."
   ::cost "An event's cost cannot be zero."
   ::index "The event must be happening this year or in the future."
   ::costs-per-year "You haven't added any costs. Click \"Add cost\" to save the cost you're editing before you click \"Done\"."})

(defui LifeEventForm
  static om/IQuery
  (query [this]
    [:creating?])
  Object
  (initLocalState [this]
    init-form-state)
  (render [this]
    (let [{:keys [creating?] :as props} (om/props this)
          {:keys [name cost index duration costs-per-year] :as pending} (om/get-state this)
          conformed (s/conform ::form-data pending)
          errors (when (= conformed :cljs.spec/invalid)
                   (s/explain-data ::form-data pending))
          _ (prn conformed errors)
          _ (prn (map (fn [{:keys [via]}] (get messages (last via))) (get errors :cljs.spec/problems)))
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
          (form-field this "Event name:" :name)
          (when (not (empty? costs-per-year))
            (dom/div nil (render-costs-per-year costs-per-year)))
          (form-field this "Cost of event:" :cost)
          (form-field this "Years from now:" :index)
          (form-field this "Recurring for how many years?" :duration)
          (dom/div nil
            (dom/button 
              #js {:onClick #(om/update-state! this update :costs-per-year assoc (js/parseInt index) (js/parseInt cost))}
              "Add cost")
            (dom/button 
              #js {:onClick 
                   #(do 
                     (om/transact! this '[(events/cancel)])
                     (om/set-state! this init-form-state))} "Cancel")
            (dom/button
              #js {:disabled (not valid?)
                   :onClick
                   #(do 
                     (om/transact! this `[(events/save ~(om/get-state this)) :life-events :chart])
                     (om/set-state! this init-form-state))}
              "Done")))))))
