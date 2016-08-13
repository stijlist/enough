(require '[figwheel-sidecar.repl :as r]
         '[figwheel-sidecar.repl-api :as ra])

(def builds (filter #{"dev" "prod" "cards"} *command-line-args*))

(ra/start-figwheel!
  {:figwheel-options {}
   :build-ids builds
   :all-builds
   [{:id "dev"
     :figwheel true
     :source-paths ["src" "test"]
     :compiler {:main 'enough.core
                :asset-path "js"
                :output-to "resources/public/js/main.js"
                :output-dir "resources/public/js"
                :verbose true}}
    {:id "prod"
     :figwheel true
     :source-paths ["src"]
     :compiler {:optimizations :advanced
                :output-to "resources/public/js/main-opt.js"
                :source-map "resources/public/js/main-opt.js.map"}}
    {:id "cards"
     :figwheel true
     :source-paths ["src" "cards"]
     :compiler {:main 'enough.cards
                :asset-path "js"
                :output-to "resources/public/js/cards.js"
                :output-dir "resources/public/js"
                :verbose true}}]})

(ra/cljs-repl)
