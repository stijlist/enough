(ns enough.core
  (:require
   [om.next :as om :refer-macros [defui]]
   #_[sablono.core :refer-macros [html]]))

(defn s-atom [data] {:state (atom data)})
(enable-console-print!)
(defmulti read om/dispatch)
(defmulti mutate om/dispatch)

(def init-data
  {:parameters [[:parameters/by-name "Salary"]]
   :parameters/by-name {"Salary" {:name "Salary" :value 1}}})

(defn get-normalized-toplevel-key [state key]
  (let [s @state]
    (into [] (map (partial get-in s) (get s key)))))

(defmethod read :default
  [{:keys [state]} key params]
  {:value (get-normalized-toplevel-key state key)})

(def parser (om/parser {:read read :mutate mutate}))
(def reconciler (om/reconciler {:state init-data :parser parser}))

(prn (parser (s-atom init-data) '[:parameters]))
#_(prn (om/transact! reconciler '[(editing {:target-key :salary})]))
#_(prn (parser {:state app-state} '[(:parameters {:name :salary})]))
#_(prn (om/transact! reconciler '[(parameter/update {:name :salary :value 50000})]))
#_(prn (parser {:state app-state} '[(:parameters {:name :salary})]))
#_(prn @app-state)
#_(prn "reading parameters" (parser {:state app-state} '[:parameters]))

