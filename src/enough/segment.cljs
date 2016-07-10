(ns enough.segment
  (:require [cljs.spec :as s] [sablono.core :refer-macros [html]]))

(s/def ::rect (s/cat :type #{:rect} :desc (s/keys :req-un [::y ::height ::width])))
(s/def ::label (s/cat :type #{:text} :offsets (s/keys) :label string?))
(s/def ::translated (s/keys :req-un [::transform]))

(s/fdef svg
  :args (s/cat :datum number? :translation ::translation)
  :ret (s/cat :type #{:g} :transform ::translated :rect ::rect :text ::label)
  :fn (constantly true))

(defprotocol ISegment
  (stack [this top-or-bottom]
    "Returns a segment with the height and width of s2 and :ty such that s2's
    bottom edge is aligned with this segment's top edge.")
  (inset [this top-or-bottom]
    "Given a segment s2 provided as either :top or :bottom, return a segment
    with the dimensions of s2 whose top or bottom edge aligns with the
    corresponding top or bottom edge in s1.")
  (svg [this opts]
    "Render the svg form of this segment."))

(defn translate [x y]
  (str "translate(" x "," y ")"))

(defrecord Segment [height width tx ty]
  ISegment
  (stack [this {:keys [top bottom]}]
    (assert (not (and top bottom)) "Can't supply both :top and :bottom to stack.")
    (assert (or top bottom) "Must supply at least one of :top or :bottom to stack")
    (cond
      top (assoc top :ty (- ty (:height top)))
      bottom (assoc bottom :ty (+ ty (:height bottom))))))
  (inset [this {:keys [top bottom]}]
    (assert (not (and top bottom)) "Can't supply both :top and :bottom to inset.")
    (assert (or top bottom) "Must supply at least one of :top or :bottom to inset")
    (cond
      top
      (assoc top :ty ty)
      bottom
      (assoc bottom :ty (- (+ ty height) (:height bottom)))))
  (svg [this {:keys [scale fill container label-fn text-opts] :as opts}]
    (let [[height width tx ty] (map scale [height width tx ty])]
      [:g {:transform (translate tx ty)}
        [:rect
          {:fill fill
           :y (- (:height container) height)
           :height height
           :width width}
          [:text text-opts (label-fn height)]]]))
