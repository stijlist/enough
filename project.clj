(defproject enough "0.1.0-SNAPSHOT"
  :description "a financial journal"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :profiles {:dev {:plugins [[com.jakemccrary/lein-test-refresh "0.20.0"]]}}
  :dependencies [[org.clojure/clojure "1.8.0"]
                 [org.clojure/clojurescript "1.9.183"]
                 [cljsjs/react "15.1.0-0"]
                 [cljsjs/react-dom "15.1.0-0"]
                 [org.omcljs/om "1.0.0-alpha41"]
                 [figwheel-sidecar "0.5.4" :scope "test"]
                 [aleph "0.4.3"]
                 [org.clojure/test.check "0.9.0" :scope "dev"]])
