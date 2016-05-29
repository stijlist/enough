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
    (into [] (map (partial get-in s) (get s key)))))

(defmethod read :default
  [{:keys [state]} key params]
  {:value (get-normalized-toplevel-key state key)})
(defmethod mutate 'parameters/update
  [{:keys [state]} key {:keys [name] :as params}]
  {:action
   (fn []
     (swap! state update-in [:parameters/by-name name] (fn [old] (merge old params))))})

(def parser (om/parser {:read read :mutate mutate}))
(def reconciler (om/reconciler {:state init-data :parser parser}))

(prn (parser {:state (atom init-data)} '[:parameters]))
(prn (parser {:state (atom init-data)} '[(parameters/update {:name "Salary" :value 2 :editing? false})]))

(defui Parameter
  static om/Ident
  (ident [this {:keys [name]}]
    [:parameters/by-name name])
  static om/IQuery
  (query [this]
    [:name :value :editing?])
  Object
  (render [this]
    (let [{:keys [name value editing?]} (om/props this)]
     (html 
       [:div nil 
        [:button 
         {:onClick #(om/transact! this '[(parameters/update {:name "Salary" :value 1 :editing? true})])}
         "Edit"]
        [:div name] 
        (if editing? 
          [:form 
           {:onSubmit (fn [e] (.preventDefault e) (om/transact! this '[(parameters/update {:name "Salary" :value 5 :editing? false})]))}
           [:input {:type "text"}]
           [:input {:type "submit"}]] 
          [:div value])]))))

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
