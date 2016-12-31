(ns enough.ui.chart
  (:require 
    [om.next :as om :refer-macros [defui]]))

(defui SavingsChart
  static om/IQuery
  (query [this] '[:chart])
  Object
  (render [this]
    (let [{:keys [chart life-events] :as props} (om/props this)]
      (assert (not (nil? life-events)) "Life events cannot be nil"))))
