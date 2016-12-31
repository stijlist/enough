# enough
a financial journal

Reproducing a bug: (double render of SavingsChart, with no :life-events in the second render read)

I think this bug stems from a flaw in the design (SavingsChart relies on data
that's in the root query but not in its actual query, because we want the union of all subqueries for each read key and we can't just naively specify the keys we want AHA! that's what we want to fix). 

The first time SavingsChart is rendered, it's rendered from the root, and when the Events transaction happens with no read hint, the root is re-rendered automatically (presumably because data affected by the :chart read is modified? TODO verify this). When we add a read hint, the root is re-rendered, THEN the :chart key is re-read on its own (from the SavingsChart query), which means no :life-events key is read.

A useful invariant to preserve is "does this component render the same way in
the root instance and standalone?"
