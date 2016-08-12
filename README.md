# enough
a financial journal

![current state](https://raw.githubusercontent.com/stijlist/enough/master/screenshots/enough-2016-07-05.png)


Ideas:

Make chart segments interactive. On mouseover, highlight and provide a breakdown of the expenses, revenue growth, or income for that segment.

Unify the idea of a "parameter" with the idea of an "event" - parameters are events that occur in every period of the simulation.

Provide more powerful event specifications - recurring events, periodic events, and events that change over time.

Increase the granularity of the simulation from years to months.

Come up with a strategy for optionally re-scaling the chart when updates to parameters make it too large or small to read.

Todos:

Style the expense breakdown popover.

Improve error messages and feedback while creating new life events.

Set up a devcards harness so we can test the UI from particular init states.

Set up a clojure.test suite for reads, mutations, and chart calculations.

Understand where errors under advanced compilation are coming from.
