(ns enough.repro)

(enable-console-print!)

(defprotocol IHaveStrangeDestructuringBehavior
  (repro [this {:keys [x]}])
  (wont-repro [this m]))

(defrecord SomeRecord []
  IHaveStrangeDestructuringBehavior
  (repro [this m]
    (prn "map has been replaced with the destructuring map from the protocol" m))
  (wont-repro [this m]
    (prn "map is fine:" m)))

(repro (SomeRecord.) {:x :should-have-a-value})
(wont-repro (SomeRecord.) {:x :does-have-a-value})
