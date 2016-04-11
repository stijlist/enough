// Compiled by ClojureScript 1.7.170 {}
goog.provide('clojure.set');
goog.require('cljs.core');
clojure.set.bubble_max_key = (function clojure$set$bubble_max_key(k,coll){

var max = cljs.core.apply.call(null,cljs.core.max_key,k,coll);
return cljs.core.cons.call(null,max,cljs.core.remove.call(null,((function (max){
return (function (p1__28194_SHARP_){
return (max === p1__28194_SHARP_);
});})(max))
,coll));
});
/**
 * Return a set that is the union of the input sets
 */
clojure.set.union = (function clojure$set$union(var_args){
var args28195 = [];
var len__17877__auto___28201 = arguments.length;
var i__17878__auto___28202 = (0);
while(true){
if((i__17878__auto___28202 < len__17877__auto___28201)){
args28195.push((arguments[i__17878__auto___28202]));

var G__28203 = (i__17878__auto___28202 + (1));
i__17878__auto___28202 = G__28203;
continue;
} else {
}
break;
}

var G__28200 = args28195.length;
switch (G__28200) {
case 0:
return clojure.set.union.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return clojure.set.union.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17896__auto__ = (new cljs.core.IndexedSeq(args28195.slice((2)),(0)));
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17896__auto__);

}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.PersistentHashSet.EMPTY;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.union.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,cljs.core.conj,s2,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.conj,s1,s2);
}
});

clojure.set.union.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,cljs.core.count,cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,cljs.core.into,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
});

clojure.set.union.cljs$lang$applyTo = (function (seq28196){
var G__28197 = cljs.core.first.call(null,seq28196);
var seq28196__$1 = cljs.core.next.call(null,seq28196);
var G__28198 = cljs.core.first.call(null,seq28196__$1);
var seq28196__$2 = cljs.core.next.call(null,seq28196__$1);
return clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(G__28197,G__28198,seq28196__$2);
});

clojure.set.union.cljs$lang$maxFixedArity = (2);
/**
 * Return a set that is the intersection of the input sets
 */
clojure.set.intersection = (function clojure$set$intersection(var_args){
var args28206 = [];
var len__17877__auto___28212 = arguments.length;
var i__17878__auto___28213 = (0);
while(true){
if((i__17878__auto___28213 < len__17877__auto___28212)){
args28206.push((arguments[i__17878__auto___28213]));

var G__28214 = (i__17878__auto___28213 + (1));
i__17878__auto___28213 = G__28214;
continue;
} else {
}
break;
}

var G__28211 = args28206.length;
switch (G__28211) {
case 1:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17896__auto__ = (new cljs.core.IndexedSeq(args28206.slice((2)),(0)));
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17896__auto__);

}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
while(true){
if((cljs.core.count.call(null,s2) < cljs.core.count.call(null,s1))){
var G__28216 = s2;
var G__28217 = s1;
s1 = G__28216;
s2 = G__28217;
continue;
} else {
return cljs.core.reduce.call(null,((function (s1,s2){
return (function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return result;
} else {
return cljs.core.disj.call(null,result,item);
}
});})(s1,s2))
,s1,s1);
}
break;
}
});

clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
var bubbled_sets = clojure.set.bubble_max_key.call(null,(function (p1__28205_SHARP_){
return (- cljs.core.count.call(null,p1__28205_SHARP_));
}),cljs.core.conj.call(null,sets,s2,s1));
return cljs.core.reduce.call(null,clojure.set.intersection,cljs.core.first.call(null,bubbled_sets),cljs.core.rest.call(null,bubbled_sets));
});

clojure.set.intersection.cljs$lang$applyTo = (function (seq28207){
var G__28208 = cljs.core.first.call(null,seq28207);
var seq28207__$1 = cljs.core.next.call(null,seq28207);
var G__28209 = cljs.core.first.call(null,seq28207__$1);
var seq28207__$2 = cljs.core.next.call(null,seq28207__$1);
return clojure.set.intersection.cljs$core$IFn$_invoke$arity$variadic(G__28208,G__28209,seq28207__$2);
});

clojure.set.intersection.cljs$lang$maxFixedArity = (2);
/**
 * Return a set that is the first set without elements of the remaining sets
 */
clojure.set.difference = (function clojure$set$difference(var_args){
var args28218 = [];
var len__17877__auto___28224 = arguments.length;
var i__17878__auto___28225 = (0);
while(true){
if((i__17878__auto___28225 < len__17877__auto___28224)){
args28218.push((arguments[i__17878__auto___28225]));

var G__28226 = (i__17878__auto___28225 + (1));
i__17878__auto___28225 = G__28226;
continue;
} else {
}
break;
}

var G__28223 = args28218.length;
switch (G__28223) {
case 1:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17896__auto__ = (new cljs.core.IndexedSeq(args28218.slice((2)),(0)));
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17896__auto__);

}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$1 = (function (s1){
return s1;
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$2 = (function (s1,s2){
if((cljs.core.count.call(null,s1) < cljs.core.count.call(null,s2))){
return cljs.core.reduce.call(null,(function (result,item){
if(cljs.core.contains_QMARK_.call(null,s2,item)){
return cljs.core.disj.call(null,result,item);
} else {
return result;
}
}),s1,s1);
} else {
return cljs.core.reduce.call(null,cljs.core.disj,s1,s2);
}
});

clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic = (function (s1,s2,sets){
return cljs.core.reduce.call(null,clojure.set.difference,s1,cljs.core.conj.call(null,sets,s2));
});

clojure.set.difference.cljs$lang$applyTo = (function (seq28219){
var G__28220 = cljs.core.first.call(null,seq28219);
var seq28219__$1 = cljs.core.next.call(null,seq28219);
var G__28221 = cljs.core.first.call(null,seq28219__$1);
var seq28219__$2 = cljs.core.next.call(null,seq28219__$1);
return clojure.set.difference.cljs$core$IFn$_invoke$arity$variadic(G__28220,G__28221,seq28219__$2);
});

clojure.set.difference.cljs$lang$maxFixedArity = (2);
/**
 * Returns a set of the elements for which pred is true
 */
clojure.set.select = (function clojure$set$select(pred,xset){
return cljs.core.reduce.call(null,(function (s,k){
if(cljs.core.truth_(pred.call(null,k))){
return s;
} else {
return cljs.core.disj.call(null,s,k);
}
}),xset,xset);
});
/**
 * Returns a rel of the elements of xrel with only the keys in ks
 */
clojure.set.project = (function clojure$set$project(xrel,ks){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__28228_SHARP_){
return cljs.core.select_keys.call(null,p1__28228_SHARP_,ks);
}),xrel));
});
/**
 * Returns the map with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename_keys = (function clojure$set$rename_keys(map,kmap){
return cljs.core.reduce.call(null,(function (m,p__28231){
var vec__28232 = p__28231;
var old = cljs.core.nth.call(null,vec__28232,(0),null);
var new$ = cljs.core.nth.call(null,vec__28232,(1),null);
if(cljs.core.contains_QMARK_.call(null,map,old)){
return cljs.core.assoc.call(null,m,new$,cljs.core.get.call(null,map,old));
} else {
return m;
}
}),cljs.core.apply.call(null,cljs.core.dissoc,map,cljs.core.keys.call(null,kmap)),kmap);
});
/**
 * Returns a rel of the maps in xrel with the keys in kmap renamed to the vals in kmap
 */
clojure.set.rename = (function clojure$set$rename(xrel,kmap){
return cljs.core.set.call(null,cljs.core.map.call(null,(function (p1__28233_SHARP_){
return clojure.set.rename_keys.call(null,p1__28233_SHARP_,kmap);
}),xrel));
});
/**
 * Returns a map of the distinct values of ks in the xrel mapped to a
 *   set of the maps in xrel with the corresponding values of ks.
 */
clojure.set.index = (function clojure$set$index(xrel,ks){
return cljs.core.reduce.call(null,(function (m,x){
var ik = cljs.core.select_keys.call(null,x,ks);
return cljs.core.assoc.call(null,m,ik,cljs.core.conj.call(null,cljs.core.get.call(null,m,ik,cljs.core.PersistentHashSet.EMPTY),x));
}),cljs.core.PersistentArrayMap.EMPTY,xrel);
});
/**
 * Returns the map with the vals mapped to the keys.
 */
clojure.set.map_invert = (function clojure$set$map_invert(m){
return cljs.core.reduce.call(null,(function (m__$1,p__28236){
var vec__28237 = p__28236;
var k = cljs.core.nth.call(null,vec__28237,(0),null);
var v = cljs.core.nth.call(null,vec__28237,(1),null);
return cljs.core.assoc.call(null,m__$1,v,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
/**
 * When passed 2 rels, returns the rel corresponding to the natural
 *   join. When passed an additional keymap, joins on the corresponding
 *   keys.
 */
clojure.set.join = (function clojure$set$join(var_args){
var args28242 = [];
var len__17877__auto___28247 = arguments.length;
var i__17878__auto___28248 = (0);
while(true){
if((i__17878__auto___28248 < len__17877__auto___28247)){
args28242.push((arguments[i__17878__auto___28248]));

var G__28249 = (i__17878__auto___28248 + (1));
i__17878__auto___28248 = G__28249;
continue;
} else {
}
break;
}

var G__28244 = args28242.length;
switch (G__28244) {
case 2:
return clojure.set.join.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return clojure.set.join.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28242.length)].join('')));

}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$2 = (function (xrel,yrel){
if((cljs.core.seq.call(null,xrel)) && (cljs.core.seq.call(null,yrel))){
var ks = clojure.set.intersection.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,xrel))),cljs.core.set.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,yrel))));
var vec__28245 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel], null));
var r = cljs.core.nth.call(null,vec__28245,(0),null);
var s = cljs.core.nth.call(null,vec__28245,(1),null);
var idx = clojure.set.index.call(null,r,ks);
return cljs.core.reduce.call(null,((function (ks,vec__28245,r,s,idx){
return (function (ret,x){
var found = idx.call(null,cljs.core.select_keys.call(null,x,ks));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,ks,vec__28245,r,s,idx){
return (function (p1__28238_SHARP_,p2__28239_SHARP_){
return cljs.core.conj.call(null,p1__28238_SHARP_,cljs.core.merge.call(null,p2__28239_SHARP_,x));
});})(found,ks,vec__28245,r,s,idx))
,ret,found);
} else {
return ret;
}
});})(ks,vec__28245,r,s,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});

clojure.set.join.cljs$core$IFn$_invoke$arity$3 = (function (xrel,yrel,km){
var vec__28246 = (((cljs.core.count.call(null,xrel) <= cljs.core.count.call(null,yrel)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [xrel,yrel,clojure.set.map_invert.call(null,km)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [yrel,xrel,km], null));
var r = cljs.core.nth.call(null,vec__28246,(0),null);
var s = cljs.core.nth.call(null,vec__28246,(1),null);
var k = cljs.core.nth.call(null,vec__28246,(2),null);
var idx = clojure.set.index.call(null,r,cljs.core.vals.call(null,k));
return cljs.core.reduce.call(null,((function (vec__28246,r,s,k,idx){
return (function (ret,x){
var found = idx.call(null,clojure.set.rename_keys.call(null,cljs.core.select_keys.call(null,x,cljs.core.keys.call(null,k)),k));
if(cljs.core.truth_(found)){
return cljs.core.reduce.call(null,((function (found,vec__28246,r,s,k,idx){
return (function (p1__28240_SHARP_,p2__28241_SHARP_){
return cljs.core.conj.call(null,p1__28240_SHARP_,cljs.core.merge.call(null,p2__28241_SHARP_,x));
});})(found,vec__28246,r,s,k,idx))
,ret,found);
} else {
return ret;
}
});})(vec__28246,r,s,k,idx))
,cljs.core.PersistentHashSet.EMPTY,s);
});

clojure.set.join.cljs$lang$maxFixedArity = 3;
/**
 * Is set1 a subset of set2?
 */
clojure.set.subset_QMARK_ = (function clojure$set$subset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) <= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__28251_SHARP_){
return cljs.core.contains_QMARK_.call(null,set2,p1__28251_SHARP_);
}),set1));
});
/**
 * Is set1 a superset of set2?
 */
clojure.set.superset_QMARK_ = (function clojure$set$superset_QMARK_(set1,set2){
return ((cljs.core.count.call(null,set1) >= cljs.core.count.call(null,set2))) && (cljs.core.every_QMARK_.call(null,(function (p1__28252_SHARP_){
return cljs.core.contains_QMARK_.call(null,set1,p1__28252_SHARP_);
}),set2));
});

//# sourceMappingURL=set.js.map?rel=1460338555011