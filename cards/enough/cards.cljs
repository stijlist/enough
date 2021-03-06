(ns enough.cards
  (:require 
    [enough.ui :refer [LifeEventForm]]
    [enough.chart :refer [ExpenseBreakdown]]
    [clojure.set :as set]
    [goog.dom :refer [append createElement getElement]]
    [om.next :as om]))

(enable-console-print!)

(defonce atoms (atom {}))


(defn lazy-div [parent id]
  (or (getElement id)
    (let [div (doto (createElement "div") (aset "id" id))]
      (append parent div)
      div)))

(defn card [& {:keys [name component init read mutate]}]
  (assert name "name must be provided")
  (let [state
        (or
          (get @atoms name)
          (let [new (atom init)]
            (swap! atoms assoc name new)
            new))
        all-roots (lazy-div (.-body js/document) "card-roots")
        root-div (lazy-div all-roots name)
        watch-div (lazy-div all-roots (str name "-watch"))
        update-watch #(aset watch-div "innerHTML" (str "<div>" % "</div>"))
        parser (om/parser {:read read :mutate mutate})
        reconciler (om/reconciler {:state state :parser parser})]
    (update-watch @state)
    (add-watch state :card 
      (fn [k ref old new]
        (let [old-keys (set (keys old)) new-keys (set (keys new))]
          (update-watch new)
          (prn "added:" (set/difference new-keys old-keys))
          (prn "changed:" (select-keys new (set/intersection old-keys new-keys))))))
    (om/add-root! reconciler component root-div)))

(card
  :name "event-form"
  :component LifeEventForm
  :init {:creating? false}
  :read (fn [{:keys [state]} key params] {:value (get @state key)})
  :mutate
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
           (swap! state add-event)))}))

(card
  :name "expense-breakdown"
  :component ExpenseBreakdown
  :init {:breakdown [{:name "Test event" :costs-per-year {0 1000}}] :index 0}
  :read (fn [{:keys [state]} key params]
          (let [res (get @state key)]
            (prn "naive read result:" res)
            {:value res}))
  :mutate #())
