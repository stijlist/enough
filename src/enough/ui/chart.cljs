(ns enough.ui.chart
  (:require 
    [enough.data :refer [life-events-by-year]]
    [om.dom :as dom]
    [om.next :as om :refer-macros [defui]]
    [goog.dom])
  (:import
    goog.ui.Popup
    goog.positioning.AnchoredPosition
    goog.positioning.Corner))

(defui SavingsChart
  static om/IQuery
  (query [this]
    '[:chart])
  Object
  (render [this]
    (let [{:keys [chart life-events] :as props} (om/props this)
          _ (assert (not (nil? life-events)) "Life events cannot be nil")
          ]
      )))
