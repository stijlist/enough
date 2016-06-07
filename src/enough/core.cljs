(ns enough.core
  (:require
   [goog.dom :as dom]
   [om.next :as om :refer-macros [defui]]
   [sablono.core :refer-macros [html]]))

(enable-console-print!)
(def init-data
  {:parameters [[:parameters/by-name "Salary"]]
   :parameters/by-name {"Salary" {:name "Salary" :value 1 :editing? false}}})

(defmulti read om/dispatch)

(defn get-normalized-toplevel-key [state key]
  (let [s @state]
    (prn "state in get-n-t-k" s)
    (into [] (map #(get-in s %) (get s key)))))

(defmethod read :parameters
  [{:keys [state]} key params]
  (prn "calling read with key:" key "state:" @state "and params" params)
  (prn "returning:" (get-normalized-toplevel-key state key))
  {:value (get-normalized-toplevel-key state key)})

(defmulti mutate om/dispatch)

(defmethod mutate 'parameters/update
  [{:keys [state]} key {:keys [name] :as params}]
  (prn "params to mutation" params)
  {:action
   (fn []
     (swap! state update-in [:parameters/by-name name] (constantly params)))})

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
        [:button {:onClick #(om/transact! this '[(parameters/update {:name "Salary" :value 2 :editing? false})])} "Set value to 2"]]))))

(def parameter (om/factory Parameter {:keyfn :name}))

(defui Root
  static om/IQuery
  (query [this]
    (let [subquery (om/get-query Parameter)]
      ;; (assert (= subquery [:name :value :editing?]))
      ;; mysteriously, substituting om/get-query Parameter here doesn't yield
      ;; the same result, even though the subqueries are equal
      ;; instead, om/props of the Parameter starts returning the ident instead
      ;; one explanation would be that the subquery is changing, but it's not -
      ;; (prn "subqueries equal" keeps printing "true"
      ;; perhaps I could assert that the subqueries were equal to make sure
      ;; I'm not just misreading the test log
      ;; (prn "subqueries equal" (= subquery '[:name :value :editing?]))
      ;; `[{:parameters ~subquery}]))
      `[{:parameters ~subquery}]))
  Object
  (render [this]
    (prn "rendering Root" (om/props this))
    (html 
      [:div nil (map parameter (:parameters (om/props this)))])))

(def parser (om/parser {:read read :mutate mutate}))
(def reconciler (om/reconciler {:state init-data :parser parser}))
(add-watch (om/app-state reconciler) :parameters-by-name-contains-salary
  (fn [k ref old new] 
    (let [pred #(-> % :parameters/by-name (contains? "Salary"))]
      (assert (pred old) (str "Old is " old))
      (assert (pred new) (str "New is " new)))))

(om/add-root! reconciler Root (dom/getElement "app"))
