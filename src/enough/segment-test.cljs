(ns enough.segment-test
  (:require [cljs.test :refer-macros [deftest is are]]
            [enough.segment :as segment :refer [Segment]]))

(defn top-edge [s]
  (:ty s))
(defn bottom-edge [s]
  (+ (:ty s) (:height s)))

(deftest stacked-segments
  (let [s1 (Segment. 10 1 0 0)
        s2 (Segment. 2 1 0 0)
        stacked-top (segment/stack s1 {:top s2})]
    (is (= (top-edge s1) (bottom-edge stacked-top)))))

(deftest inset-segments
  (let [s1 (Segment. 10 1 0 0)
        s2 (Segment. 2 1 0 0)
        top-inset (segment/inset s1 {:top s2})
        bottom-inset (segment/inset s1 {:bottom s2})]
    (is (= (top-edge s1) (top-edge top-inset)))
    (is (= (bottom-edge s1) (bottom-edge bottom-inset)))))

