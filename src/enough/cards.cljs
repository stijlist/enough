(ns enough.cards
  (:require 
    [enough.ui :refer [LifeEventForm]]
    [clojure.set :as set]
    [goog.dom :refer [append createElement getElement]]
    [om.next :as om]))

(enable-console-print!)

(let [_ (defonce event-form-state (atom {:creating? false}))
      watch (getElement "watch-root")
      _ (aset watch "innerHTML" (str "<div>" @event-form-state "</div>"))
      read
      (fn [{:keys [state] :as env} key params]
        {:value (get @state key)})
      mutate
      (fn [{:keys [state] :as env} key params]
        {:action
         (condp = key
           'events/new #(swap! state assoc :creating? true)
           'events/cancel #(swap! state assoc :creating? false)
           'events/save 
           #(let [add-event
                  (fn [state]
                    (-> state
                      (update :life-events conj params)
                      (assoc :creating? false)))]
               (swap! state add-event)))})
      parser (om/parser {:read read :mutate mutate})]
  (add-watch event-form-state :card
    (fn [k ref old new] 
      (let [old-keys (set (keys old)) new-keys (set (keys new))]
        (prn old new)
        (aset watch "innerHTML" (str "<div>" new "</div>"))
        (prn "added:" (set/difference new-keys old-keys))
        (prn "changed:" (select-keys new (set/intersection old-keys new-keys))))))
  (om/add-root!
    (om/reconciler {:state event-form-state :parser parser})
    LifeEventForm
    (getElement "test-root")))
