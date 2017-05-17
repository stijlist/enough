(ns enough.server
  (:require
    [aleph.http :as http])
  (:gen-class))

;; request handling
(defn handler [req]
  {:status 200
   :headers {"content-type" "text/plain"}
   :body "Hello!"})

(defn -main [& args]
  (http/start-server handler {:port 8080}))

;; database access
(def db-path "./db/enough.edn")
(defn read-db []
  (read-string (slurp db-path)))
(defn write-db [db]
  (spit db-path db))
(defn record [fact db]
  (update db :facts conj fact))
(defn index-db [db]
  (group-by :type (:facts db)))
(defn tx-db [readfn writefn updatefn]
  (writefn (updatefn (readfn))))
