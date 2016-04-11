// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32299_32313 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32300_32314 = null;
var count__32301_32315 = (0);
var i__32302_32316 = (0);
while(true){
if((i__32302_32316 < count__32301_32315)){
var f_32317 = cljs.core._nth.call(null,chunk__32300_32314,i__32302_32316);
cljs.core.println.call(null,"  ",f_32317);

var G__32318 = seq__32299_32313;
var G__32319 = chunk__32300_32314;
var G__32320 = count__32301_32315;
var G__32321 = (i__32302_32316 + (1));
seq__32299_32313 = G__32318;
chunk__32300_32314 = G__32319;
count__32301_32315 = G__32320;
i__32302_32316 = G__32321;
continue;
} else {
var temp__4425__auto___32322 = cljs.core.seq.call(null,seq__32299_32313);
if(temp__4425__auto___32322){
var seq__32299_32323__$1 = temp__4425__auto___32322;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32299_32323__$1)){
var c__17622__auto___32324 = cljs.core.chunk_first.call(null,seq__32299_32323__$1);
var G__32325 = cljs.core.chunk_rest.call(null,seq__32299_32323__$1);
var G__32326 = c__17622__auto___32324;
var G__32327 = cljs.core.count.call(null,c__17622__auto___32324);
var G__32328 = (0);
seq__32299_32313 = G__32325;
chunk__32300_32314 = G__32326;
count__32301_32315 = G__32327;
i__32302_32316 = G__32328;
continue;
} else {
var f_32329 = cljs.core.first.call(null,seq__32299_32323__$1);
cljs.core.println.call(null,"  ",f_32329);

var G__32330 = cljs.core.next.call(null,seq__32299_32323__$1);
var G__32331 = null;
var G__32332 = (0);
var G__32333 = (0);
seq__32299_32313 = G__32330;
chunk__32300_32314 = G__32331;
count__32301_32315 = G__32332;
i__32302_32316 = G__32333;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32334 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16819__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32334);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32334)))?cljs.core.second.call(null,arglists_32334):arglists_32334));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32303 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32304 = null;
var count__32305 = (0);
var i__32306 = (0);
while(true){
if((i__32306 < count__32305)){
var vec__32307 = cljs.core._nth.call(null,chunk__32304,i__32306);
var name = cljs.core.nth.call(null,vec__32307,(0),null);
var map__32308 = cljs.core.nth.call(null,vec__32307,(1),null);
var map__32308__$1 = ((((!((map__32308 == null)))?((((map__32308.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32308.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32308):map__32308);
var doc = cljs.core.get.call(null,map__32308__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__32308__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__32335 = seq__32303;
var G__32336 = chunk__32304;
var G__32337 = count__32305;
var G__32338 = (i__32306 + (1));
seq__32303 = G__32335;
chunk__32304 = G__32336;
count__32305 = G__32337;
i__32306 = G__32338;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__32303);
if(temp__4425__auto__){
var seq__32303__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32303__$1)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,seq__32303__$1);
var G__32339 = cljs.core.chunk_rest.call(null,seq__32303__$1);
var G__32340 = c__17622__auto__;
var G__32341 = cljs.core.count.call(null,c__17622__auto__);
var G__32342 = (0);
seq__32303 = G__32339;
chunk__32304 = G__32340;
count__32305 = G__32341;
i__32306 = G__32342;
continue;
} else {
var vec__32310 = cljs.core.first.call(null,seq__32303__$1);
var name = cljs.core.nth.call(null,vec__32310,(0),null);
var map__32311 = cljs.core.nth.call(null,vec__32310,(1),null);
var map__32311__$1 = ((((!((map__32311 == null)))?((((map__32311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32311):map__32311);
var doc = cljs.core.get.call(null,map__32311__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__32311__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__32343 = cljs.core.next.call(null,seq__32303__$1);
var G__32344 = null;
var G__32345 = (0);
var G__32346 = (0);
seq__32303 = G__32343;
chunk__32304 = G__32344;
count__32305 = G__32345;
i__32306 = G__32346;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1460338562486