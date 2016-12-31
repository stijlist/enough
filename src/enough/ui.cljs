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
    '[:name :costs-per-year :cost :constant?])
  Object
  (render [this]
    (let [{:keys [name costs-per-year constant?] :as props} (om/props this)
          {:keys [expanded?]} (om/get-state this)
          total-cost (if constant? (:cost props) (reduce + (vals costs-per-year)))
          expanded? (or expanded? false)]
      (apply dom/div nil
        (dom/div nil
          (if constant?
            (str name " $" total-cost " per year. ")
            (str name " $" total-cost " total. "))
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

(defn form-field [this label key errmap]
  (let [value (get (om/get-state this) key)
        errmsg (get errmap key)]
    (dom/div nil
      (dom/div nil
        (dom/label nil label))
      (dom/div nil
        (dom/input #js {:value value :type "text" :onChange (track-in this key)}))
      (dom/div 
        (dom/span nil errmsg)))))

(defui Parameter
  static om/Ident
  (ident [this {:keys [name]}]
    [:parameters/by-name name])
  static om/IQuery
  (query [this]
    '[:name :value :editing?])
  Object
  (initLocalState [this]
    {:field-value (:value (om/props this))})
  (render [this]
    (let [{:keys [name value editing?] :as props} (om/props this)
          {:keys [field-value] :as state} (om/get-state this)]
      (dom/div nil
        (dom/span nil (str name ": "))
        (dom/span nil value)
        (if (not editing?)
          (dom/button
            #js {:onClick #(om/transact! this `[(parameters/update {:name ~name :editing? true})])}
            "Edit")
          (dom/div nil
            (form-field this "New value:" :field-value nil)
            (dom/button
              #js {:onClick
                   (fn [e]
                     (let [new-value (if field-value (coerce-to-type-of value field-value) value)]
                       (om/transact! this 
                         `[(parameters/update 
                             {:name ~name 
                              :value ~new-value 
                              :editing? false}) 
                           :chart])))}
              "Save")))))))

(def init-form-state {:name "" :cost "0" :index "0" :duration "1" :costs-per-year {}})

(defn parse-int [s]
  (let [parsed (js/parseInt s)]
    (when-not (js/isNaN parsed) parsed)))

(def parsed-nat? (comp nat-int? parse-int))

(s/def ::form-data
  (s/or
    :event-fields
    (s/keys :req-un [::name ::cost ::index ::duration ::costs-per-year])
    :constant-income
    (s/keys :req-un [::name ::cost ::constant?])
    :constant-expense
    (s/keys :req-un [::name ::value ::constant?])))
(s/def ::name not-empty)
(s/def ::cost parse-int)
(s/def ::index (s/and parse-int parsed-nat?))
(s/def ::costs-per-year not-empty)
(s/def ::constant? (s/and boolean? true?))

(def messages
  {:name "Enter a name for this event."
   :cost "An event's cost cannot be zero."
   :index "The event must be happening this year or in the future."})

(defn mapvals [f m]
  (into {} (map (fn [[k v]] [k (f v)])) m))

(defui LifeEventForm
  static om/IQuery
  (query [this]
    [:creating?])
  Object
  (initLocalState [this]
    init-form-state)
  (render [this]
    (let [{:keys [creating?] :as props} (om/props this)
          {:keys [name cost index duration constant? costs-per-year] :as pending} (om/get-state this)
          conformed-data (s/conform ::form-data pending)
          form-data (when-not (= :cljs.spec/invalid conformed-data) (second conformed-data))
          numeric-keys [:cost :index :duration]
          errors (when (= form-data :cljs.spec/invalid)
                   (s/explain-data ::form-data pending))
          parsed-data (when-not errors
                        (->> (select-keys form-data numeric-keys)
                          (mapvals js/parseInt)
                          (merge form-data)))
          error-keys (into #{} (map (comp peek :in)) (get errors :cljs.spec/problems))
          error-map (select-keys messages error-keys)]

      ;; button to create new life event
      (if (not creating?)
        (dom/div nil
          (dom/button
            #js {:onClick #(om/transact! this '[(events/new)])}
            "New"))

        ;; forms for event name, cost, years from now, recurring
        (dom/div nil
          (form-field this "Event name:" :name error-map)
          (when-not (empty? costs-per-year)
            (dom/div nil (render-costs-per-year costs-per-year)))
          (form-field this "Cost of event:" :cost error-map)
          (when (not constant?)
            (dom/div nil
              (form-field this "Years from now:" :index error-map)
              (form-field this "Recurring (years)?" :duration error-map)))
          (dom/label nil "Constant?")
          (dom/input #js {:type "checkbox" :value "constant"
                          :onClick #(om/update-state! this merge {:constant? (.. % -target -checked)})})

          ;; buttons: add cost, cancel, done
          (dom/div nil
            (dom/div nil
              (if (not constant?)
                (dom/button
                  #js {:onClick #(om/update-state! this update :costs-per-year assoc (js/parseInt index) (js/parseInt cost))}
                  "Add cost")))
            (dom/div nil
              (dom/button
                #js {:onClick
                     #(do
                       (om/transact! this '[(events/cancel)])
                       (om/set-state! this init-form-state))} "Cancel")
              (dom/button
                #js {:style (when errors #js {:color "graytext"})
                     :ref :done-button
                     :onMouseOver #() ;; TODO - draw eye to errors
                     :onClick
                     #(when-not errors
                       (om/transact! this `[(events/save ~parsed-data) :life-events])
                       (om/set-state! this init-form-state))}
                "Done"))))))))
