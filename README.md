# enough
a financial journal

![current state](https://raw.githubusercontent.com/stijlist/enough/master/screenshots/enough-2016-08-19.png)


Ideas:

Unify the idea of a "parameter" with the idea of an "event" - parameters are events that occur in every period of the simulation.

Provide more powerful event specifications - recurring events, periodic events, and events that change over time.

Make the user interface for creating new life events accessible from the chart UI.

Implement something akin to exponential decay for the granularity of the simulation - forecast the next few days, the next few months, the next few years, and the next few decades.

Come up with a strategy for optionally re-scaling the chart when updates to parameters make it too large or small to read.

When the chart changes sizes due to changes to inputs, first expand the chart out with an animation, then scale down with an animation.

Enable the user to compare different possibilities - implement snapshot functionality, and display snapshots (perhaps as scaled-down versions of the chart UI).

Todos:

Move event form state out of component-local state.

Differentiate the pending life event from the pending costs in the visual hierarchy of the life event form.

Review the language used in the life event form - reduce the ambiguity of the state where no costs have been added yet.

Differentiate the expense breakdown popover from the surrounding content.

Set up a regression test suite for reads, mutations, and chart calculations.

Archive:
Align form fields and edit buttons. @done
Make chart segments interactive. On mouseover, highlight and provide a breakdown of the expenses, revenue growth, or income for that segment. @done
Improve error messages and feedback while creating new life events. @done
Set up a devcards harness so we can test the UI from particular init states. @done
