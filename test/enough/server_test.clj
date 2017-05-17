(ns enough.server-test
  (:require [clojure.test :refer [deftest is are]]
            [enough.server]))

(deftest index
  (is 
    (= 
      (enough.server/index-db {:facts [{:type :expense}]})
      {:expense [{:type :expense}]})))

(deftest tx-record
  (let [readfn (constantly {:facts []})
        writefn identity]
    (are
      [updatefn output]
      (= (enough.server/tx-db readfn writefn updatefn) output)

      (partial enough.server/record {:hello "world"}) {:facts [{:hello "world"}]}))
  )



