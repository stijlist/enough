(ns enough.core
  (:require
   [enough.chart :as chart]
   [goog.dom :as dom]
   [om.next :as om :refer-macros [defui]]
   [sablono.core :refer-macros [html]]))

(enable-console-print!)

(def ident->chart-key
  {"Salary" :salary "Expenses" :expenses "Rate of return" :rate-of-return})

(def init-data
  {:parameters 
   [{:name "Salary" :value 10000 :editing? false}
    {:name "Expenses" :value 5000 :editing? false}
    {:name "Rate of return" :value 0.1 :editing? false}]})

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
   (->> (get-normalized-toplevel-key state :parameters) 
     (map (juxt :name :value)) 
     (into {}))})

(defmulti mutate om/dispatch)

(defmethod mutate 'parameters/update
  [{:keys [state]} key {:keys [name] :as params}]
  {:pre [(string? name)]}
  {:action
   (fn []
     (swap! state update-in [:parameters/by-name name] (fn [old] (merge old params))))})

(defn rename-keys [m keymap]
  (into {} (map (fn [[k v]] [(get keymap k) v])) m))

(defui Chart
  Object
  (render [this]
    (prn "re-render Chart" (-> this om/props))
    (-> (om/props this) 
      (rename-keys ident->chart-key)
      (chart/years-til-retirement)
      (chart/bar {:width 200 :height 200}))))

(defn coerce-to-type-of [orig v]
  (condp = (type orig)
    js/Number (js/Number v)
    js/String (js/String v)))

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
        (str (om/props this))
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

(def parameter (om/factory Parameter {:keyfn :name}))
(def chart (om/factory Chart))

(defui Root
  static om/IQuery
  (query [this]
    (let [pquery (om/get-query Parameter) cquery (om/get-query Chart)]
      `[{:parameters ~pquery} :chart-values]))
  Object
  (render [this]
    (let [{:keys [parameters chart-values]} (om/props this)]
      (html 
        [:div
         [:div nil (map parameter parameters)]
         (chart chart-values)]))))

(def parser (om/parser {:read read :mutate mutate}))
(def reconciler (om/reconciler {:state init-data :parser parser}))

(om/add-root! reconciler Root (dom/getElement "app"))
