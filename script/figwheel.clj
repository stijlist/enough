(require '[figwheel-sidecar.repl :as r]
         '[figwheel-sidecar.repl-api :as ra])

(def builds (filter #{"dev" "prod"} *command-line-args*))

(ra/start-figwheel!
  {:figwheel-options {}
   :build-ids builds
   :all-builds
   [{:id "dev"
     :figwheel true
     :source-paths ["src"]
     :compiler {:main 'enough.core
                :asset-path "js"
                :output-to "resources/public/js/main.js"
                :output-dir "resources/public/js"
                :verbose true}}
    {:id "prod"
     :figwheel true
     :source-paths ["src"]
     :compiler {:optimizations :advanced
                :output-to "resources/public/js/main.js"
                :source-map "resources/public/js/main.js.map"}}]})

(ra/cljs-repl)
