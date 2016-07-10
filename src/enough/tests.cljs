(ns ^:figwheel-always enough.tests
  (:require [cljs.test :refer-macros [run-tests]]
            enough.segment-test))

(enable-console-print!)
(run-tests 'enough.segment-test)
