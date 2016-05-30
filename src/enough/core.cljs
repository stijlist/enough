(ns enough.core
  (:require
   [goog.dom :as dom]
   [om.next :as om :refer-macros [defui]]
   [sablono.core :refer-macros [html]]))

(enable-console-print!)
(defmulti read om/dispatch)
(defmulti mutate om/dispatch)
(def init-data
  {:parameters [[:parameters/by-name "Salary"]]
   :parameters/by-name {"Salary" {:name "Salary" :value 1 :editing? false}}})

(defn get-normalized-toplevel-key [state key]
  (let [s @state]
    (prn "state in root read" s)
    (into [] (map (partial get-in s) (get s key)))))

(defmethod read :default
  [{:keys [state]} key params]
  {:value (get-normalized-toplevel-key state key)})
(defmethod mutate 'parameters/update
  [{:keys [state]} key {:keys [name] :as params}]
  (prn "params to mutation" params)
  {:action
   (fn []
     (prn "what does get-in return" (get-in @state [:parameters/by-name name]))
     (swap! state update-in [:parameters/by-name name] 
       (fn [old] (prn "old parameters" old "new parameters" params) params)))})

(def parser (om/parser {:read read :mutate mutate}))
(def reconciler (om/reconciler {:state init-data :parser parser}))

(defui Parameter
  static om/Ident
  (ident [this {:keys [name]}]
    [:parameters/by-name name])
  static om/IQuery
  (query [this]
    [:name :value :editing?])
  Object
  (render [this]
    (let [{:keys [name value editing?] :as props} (om/props this)]
     (prn "re-render Parameter with props " props)
     (html 
       [:div nil 
        (str (om/props this))
        [:button {:onClick #(om/transact! this '[(parameters/update {:name "Salary" :value 1 :editing? false})])} "Set value to 1"]
        [:button {:onClick #(om/transact! this '[(parameters/update {:name "Salary" :value 2 :editing? false})])} "Set value to 2"]]))))

(def parameter (om/factory Parameter))

(defui Root
  static om/IQuery
  (query [this]
    '[:parameters])
  Object
  (render [this]
    (html 
      [:div nil (map parameter (:parameters (om/props this)))])))

(om/add-root! reconciler Root (dom/getElement "app"))
