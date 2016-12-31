Reproducing a bug: (double render of SavingsChart, with no :life-events in the second render read)

The first time SavingsChart is rendered, it's rendered from the root, and when
the Events transaction happens with no read hint, the root is re-rendered
automatically (presumably because data affected by the :chart read is modified?
TODO verify this). When we add a read hint, the root is re-rendered, THEN the
:chart key is re-read on its own (from the SavingsChart query), which means no
:life-events key is read.

I guess a useful invariant to preserve is "does this component render the same
way in the root instance and standalone?"

I think this bug stems from a flaw in the design. SavingsChart relies on data
that's in the root query but not in its actual query, because we want the union
of all subqueries for each read key and we can't just naively join between
components that specify different subqueries for the keys we want - Om's
behavior here is that the last key's subquery is used, instead of the union of
all the subqueries.

Oh, wait - *application code* composes the query - this means that we can do
this subquery union ourselves. That might be the solution to this design
problem.
