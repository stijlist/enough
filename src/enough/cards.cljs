(ns enough.cards
  (:require 
    [goog.dom]
    [om.next :as om]))

(enable-console-print!)
(om/add-root!
  (om/reconciler {:state {} :parser (om/parser {:read #() :mutate #()})})
  (om/ui
    Object
    (render [this] (prn "root mounted")))
  (goog.dom/getElement "test-root"))
