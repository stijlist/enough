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
    '[:name :costs-per-year :value :constant?])
  Object
  (render [this]
    (let [{:keys [name costs-per-year constant?] :as props} (om/props this)
          {:keys [expanded?]} (om/get-state this)
          total-cost (if constant? (:value props) (reduce + (vals costs-per-year)))
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

(defn track-in [component k f]
  (fn [e]
    (om/update-state! component merge {k (f (.. e -target -value))})))

(defn form-field [this label key parse-fn errmap]
  (let [value (get (om/get-state this) key)
        errmsg (get errmap key)]
    (dom/div nil
      (dom/div nil
        (dom/label nil label))
      (dom/div nil
        (dom/input #js {:value value :type "text" :onChange (track-in this key parse-fn)}))
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
            (form-field this "New value:" :field-value identity nil)
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

(def init-form-state
  {:name ""
   :value 0
   :index 0
   :duration 1
   :event-category "income"
   :costs-per-year {}})

(defn parse-int [s]
  (let [parsed (js/parseInt s)]
    (when-not (js/isNaN parsed) parsed)))

(s/def ::form-data
  (s/keys :req-un [::name
                   (or
                     (and ::value ::constant?)
                     (and ::index ::duration ::costs-per-year))]))
(s/def ::name (s/and string? not-empty))
(s/def ::value int?)
(s/def ::index nat-int?)
(s/def ::duration pos-int?)
(s/def ::costs-per-year (s/map-of nat-int? ::value))
;; TODO: replace with boolean? once we figure out why s/exercise fails for boolean values
(s/def ::constant? #{true false})

(def messages
  {:name "Enter a name for this event."
   :value "An event's value cannot be zero."
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
          {:keys [name value index duration event-category constant? costs-per-year] :as pending} (om/get-state this)
          form-data (s/conform ::form-data pending)
          errors (when (= form-data :cljs.spec/invalid)
                   (s/explain-data ::form-data pending))
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
          (form-field this "Event name:" :name identity error-map)
          (when-not (empty? costs-per-year)
            (dom/div nil (render-costs-per-year costs-per-year)))
          (dom/select
            #js {:value event-category
                 :onChange #(om/update-state! this assoc :event-category (.. % -target -value))}
            (dom/option #js {:value "income"} "Income")
            (dom/option #js {:value "expense"} "Expense"))
          (case event-category
            "income" (form-field this "Value of event:" :value parse-int error-map)
            "expense" (form-field this "Cost of event:" :value parse-int error-map))
          (when (not constant?)
            (dom/div nil
              (form-field this "Years from now:" :index parse-int error-map)
              (form-field this "Recurring (years)?" :duration parse-int error-map)))
          (dom/label nil "Constant?")
          (dom/input #js {:type "checkbox" :value "constant"
                          :onClick #(om/update-state! this merge {:constant? (.. % -target -checked)})})

          ;; buttons: add cost, cancel, done
          (dom/div nil
            (dom/div nil
              (if (not constant?)
                (dom/button
                  #js {:onClick
                       #(let [sign (case event-category "expense" - "income" +)
                              signed-value (sign value)]
                         (om/update-state! this update :costs-per-year assoc index signed-value))}
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
                     :onMouseOver #(when errors (prn errors)) ;; TODO - draw eye to errors
                     :onClick
                     #(when-not errors
                       (om/transact! this `[(events/save ~form-data) :life-events])
                       (om/set-state! this init-form-state))}
                "Done"))))))))
