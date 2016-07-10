(require 'cljs.build.api)

(cljs.build.api/build "src"
  {:main 'enough.repro
   :output-to "repro.js"})
