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
var seq__26207_26221 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26208_26222 = null;
var count__26209_26223 = (0);
var i__26210_26224 = (0);
while(true){
if((i__26210_26224 < count__26209_26223)){
var f_26225 = cljs.core._nth.call(null,chunk__26208_26222,i__26210_26224);
cljs.core.println.call(null,"  ",f_26225);

var G__26226 = seq__26207_26221;
var G__26227 = chunk__26208_26222;
var G__26228 = count__26209_26223;
var G__26229 = (i__26210_26224 + (1));
seq__26207_26221 = G__26226;
chunk__26208_26222 = G__26227;
count__26209_26223 = G__26228;
i__26210_26224 = G__26229;
continue;
} else {
var temp__4425__auto___26230 = cljs.core.seq.call(null,seq__26207_26221);
if(temp__4425__auto___26230){
var seq__26207_26231__$1 = temp__4425__auto___26230;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26207_26231__$1)){
var c__17608__auto___26232 = cljs.core.chunk_first.call(null,seq__26207_26231__$1);
var G__26233 = cljs.core.chunk_rest.call(null,seq__26207_26231__$1);
var G__26234 = c__17608__auto___26232;
var G__26235 = cljs.core.count.call(null,c__17608__auto___26232);
var G__26236 = (0);
seq__26207_26221 = G__26233;
chunk__26208_26222 = G__26234;
count__26209_26223 = G__26235;
i__26210_26224 = G__26236;
continue;
} else {
var f_26237 = cljs.core.first.call(null,seq__26207_26231__$1);
cljs.core.println.call(null,"  ",f_26237);

var G__26238 = cljs.core.next.call(null,seq__26207_26231__$1);
var G__26239 = null;
var G__26240 = (0);
var G__26241 = (0);
seq__26207_26221 = G__26238;
chunk__26208_26222 = G__26239;
count__26209_26223 = G__26240;
i__26210_26224 = G__26241;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_26242 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16805__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_26242);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_26242)))?cljs.core.second.call(null,arglists_26242):arglists_26242));
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
var seq__26211 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__26212 = null;
var count__26213 = (0);
var i__26214 = (0);
while(true){
if((i__26214 < count__26213)){
var vec__26215 = cljs.core._nth.call(null,chunk__26212,i__26214);
var name = cljs.core.nth.call(null,vec__26215,(0),null);
var map__26216 = cljs.core.nth.call(null,vec__26215,(1),null);
var map__26216__$1 = ((((!((map__26216 == null)))?((((map__26216.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26216.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26216):map__26216);
var doc = cljs.core.get.call(null,map__26216__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26216__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26243 = seq__26211;
var G__26244 = chunk__26212;
var G__26245 = count__26213;
var G__26246 = (i__26214 + (1));
seq__26211 = G__26243;
chunk__26212 = G__26244;
count__26213 = G__26245;
i__26214 = G__26246;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__26211);
if(temp__4425__auto__){
var seq__26211__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26211__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__26211__$1);
var G__26247 = cljs.core.chunk_rest.call(null,seq__26211__$1);
var G__26248 = c__17608__auto__;
var G__26249 = cljs.core.count.call(null,c__17608__auto__);
var G__26250 = (0);
seq__26211 = G__26247;
chunk__26212 = G__26248;
count__26213 = G__26249;
i__26214 = G__26250;
continue;
} else {
var vec__26218 = cljs.core.first.call(null,seq__26211__$1);
var name = cljs.core.nth.call(null,vec__26218,(0),null);
var map__26219 = cljs.core.nth.call(null,vec__26218,(1),null);
var map__26219__$1 = ((((!((map__26219 == null)))?((((map__26219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26219):map__26219);
var doc = cljs.core.get.call(null,map__26219__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__26219__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__26251 = cljs.core.next.call(null,seq__26211__$1);
var G__26252 = null;
var G__26253 = (0);
var G__26254 = (0);
seq__26211 = G__26251;
chunk__26212 = G__26252;
count__26213 = G__26253;
i__26214 = G__26254;
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

//# sourceMappingURL=repl.js.map?rel=1457416903486