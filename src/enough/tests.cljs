(ns ^:figwheel-always enough.tests
  (:require [cljs.test :refer-macros [run-tests]]
            enough.segment-test))

(enable-console-print!)
(prn "hello")
(run-tests 'enough.segment-test)
