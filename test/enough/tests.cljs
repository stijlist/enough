(ns ^:figwheel-always enough.tests
  (:require
   [clojure.test :refer [deftest is run-tests]]
   [enough.ui.journal :refer [JournalExpenseForm]]))

(enable-console-print!)

(run-tests)
