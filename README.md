# enough
a financial journal

This is a minimal repro case for some strange behavior when
using a destructuring form in `defprotocol` methods.

In short,

    (defprotocol P
      (f [this {:keys [x]}]))

    (defrecording R
      (f [this m]
        (prn "m:" m)))
    (f (R.) {:hello "world"}) ;; => {:keys [:hello]}

We expect to get the same map as output as we gave as input, but
instead we get the destructuring map.
