(ns enough.cards
  (:require 
    [enough.ui :refer [LifeEventForm]]
    [enough.chart :refer [ExpenseBreakdown]]
    [clojure.set :as set]
    [goog.dom :refer [append createElement getElement]]
    [om.next :as om]))

(enable-console-print!)

(def atoms (atom {}))

(defn card [& {:keys [name component init-state read mutate]}]
  (assert name "name must be provided")
  (when-not (getElement "card-roots")
    (append
      (.-body js/document)
      (doto 
        (createElement "div")
        (aset "id" "card-roots"))))
  (when-not (getElement name)
    (append
      (getElement "card-roots")
      (doto
        (createElement "div")
        (aset "id" name))))
  (when-not (getElement (str name "-watch"))
    (append
      (getElement "card-roots")
      (doto
        (createElement "div")
        (aset "id" (str name "-watch")))))
  (let [state
        (or 
          (get atoms name)
          (let [new (atom init-state)]
            (swap! atoms assoc name new)
            new))
        root-div (getElement name)
        watch-div (getElement (str name "-watch"))
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
  :init-state {:creating? false}
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
  :init-state {:breakdown [{:name "Test event" :costs-per-year {0 1000}}] :index 0}
  :read (fn [{:keys [state]} key params]
          (let [res (get @state key)]
            (prn "naive read result:" res)
            {:value res}))
  :mutate #())
