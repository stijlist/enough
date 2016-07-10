
This is a minimal repro case for some strange behavior when
using a destructuring form in `defprotocol` methods.

In short,

    (defprotocol P
      (f [this {:keys [x]}]))

    (defrecord R []
      P
      (f [this m] m))
    
    (f (R.) {:hello "world"}) ;; => {:keys [:hello]}

We expect to get the same map as output as we gave as input, but
instead we get the destructuring map.
