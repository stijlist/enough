(ns enough.ui.journal
  (:require
   [clojure.spec :as s]
   [om.next :as om :refer [defui]]
   [om.dom :as dom]))

; what do I want?
; a way to track my expenses
; how much?
; for what?
; when? (day granularity)

(s/def ::state (s/keys :req [::expenses]))
(s/def ::expenses (s/coll-of ::expense))
(s/def ::expense (s/keys :req [::cost ::for]))
(s/def ::cost int?)
(s/def ::for (s/keys :req [::purpose]))
(s/def ::purpose string?)
(s/def ::when string?) ;; TODO: date - RFC3339 for now

(defui JournalExpenseForm
  Object
  (render [this]
    (let [{:keys [hello add-expense]} (om/props this)]
      (dom/button
        #js {:onClick #(add-expense hello)}
        "Add expense"))))
