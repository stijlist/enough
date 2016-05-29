(ns enough.core
  (:require
   [goog.dom :as dom]
   [om.next :as om :refer-macros [defui]]
   [sablono.core :refer-macros [html]]))

(defn s-atom [data] {:state (atom data)})
(enable-console-print!)
(defmulti read om/dispatch)
(defmulti mutate om/dispatch)
(def init-data
  {:parameters [[:parameters/by-name "Salary"]]
   :parameters/by-name {"Salary" {:name "Salary" :value 1 :editing? false}}})

(defn get-normalized-toplevel-key [state key]
  (let [s @state]
    (into [] (map (partial get-in s) (get s key)))))

(defmethod read :default
  [{:keys [state]} key params]
  {:value (get-normalized-toplevel-key state key)})
(defmethod mutate 'parameters/update
  [{:keys [state]} key {:keys [name value editing?] :as params}]
  {:action
   (fn []
     (swap! state update-in [:parameters/by-name name] (constantly params)))})

(def parser (om/parser {:read read :mutate mutate}))
(def reconciler (om/reconciler {:state init-data :parser parser}))

(prn (parser (s-atom init-data) '[:parameters]))
(prn (parser (s-atom init-data) '[(parameters/update {:name "Salary" :value 2 :editing? false})]))
#_(prn (om/transact! reconciler '[(editing {:target-key :salary})]))
#_(prn (parser {:state app-state} '[(:parameters {:name :salary})]))
#_(prn (om/transact! reconciler '[(parameter/update {:name :salary :value 50000})]))
#_(prn (parser {:state app-state} '[(:parameters {:name :salary})]))
#_(prn @app-state)
#_(prn "reading parameters" (parser {:state app-state} '[:parameters]))

(defui Root
  static om/IQuery
  (query [this]
    '[:parameters])
  Object
  (render [this]
    (html [:div nil (.toString (om/props this)) [:button {:onClick #(om/transact! this '[(parameters/update {:name "Salary" :value 2 :editing? false})])} "Edit"]])))
(om/add-root! reconciler Root (dom/getElement "app"))
