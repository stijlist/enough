(ns enough.core
  (:require
   [goog.dom :as dom]
   [om.next :as om :refer-macros [defui]]
   [sablono.core :refer-macros [html]]))

(enable-console-print!)
(def init-data
  {:parameters [{:name "Salary" :value 1 :editing? false}]})

(defmulti read om/dispatch)

(defn get-normalized-toplevel-key [state key]
  (let [s @state]
    (into [] (map #(get-in s %) (get s key)))))

(defmethod read :parameters
  [{:keys [state]} key params]
  {:value (get-normalized-toplevel-key state key)})

(defmulti mutate om/dispatch)

(defmethod mutate 'parameters/update
  [{:keys [state]} key {:keys [name] :as params}]
  {:pre [(string? name)]}
  {:action
   (fn []
     (swap! state update-in [:parameters/by-name name] (fn [old] (merge old params))))})

(defui Parameter
  static om/Ident
  (ident [this {:keys [name]}]
    [:parameters/by-name name])
  static om/IQuery
  (query [this]
    '[:name :value :editing?])
  Object
  (render [this]
    (let [{:keys [name value editing?] :as props} (om/props this)]
     (html 
       [:div nil 
        (str (om/props this))
        [:button {:onClick #(om/transact! this '[(parameters/update {:name "Salary" :editing? true})])} "Set editing to true"]
        [:button {:onClick #(om/transact! this '[(parameters/update {:name "Salary" :value 2})])} "Set value to 2"]]))))

(def parameter (om/factory Parameter {:keyfn :name}))

(defui Root
  static om/IQuery
  (query [this]
    (let [subquery (om/get-query Parameter)]
      `[{:parameters ~subquery}]))
  Object
  (render [this]
    (html 
      [:div nil (map parameter (:parameters (om/props this)))])))

(def parser (om/parser {:read read :mutate mutate}))
(def reconciler (om/reconciler {:state init-data :parser parser}))

(om/add-root! reconciler Root (dom/getElement "app"))
