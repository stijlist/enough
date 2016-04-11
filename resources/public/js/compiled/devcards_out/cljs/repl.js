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
var seq__28814_28828 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28815_28829 = null;
var count__28816_28830 = (0);
var i__28817_28831 = (0);
while(true){
if((i__28817_28831 < count__28816_28830)){
var f_28832 = cljs.core._nth.call(null,chunk__28815_28829,i__28817_28831);
cljs.core.println.call(null,"  ",f_28832);

var G__28833 = seq__28814_28828;
var G__28834 = chunk__28815_28829;
var G__28835 = count__28816_28830;
var G__28836 = (i__28817_28831 + (1));
seq__28814_28828 = G__28833;
chunk__28815_28829 = G__28834;
count__28816_28830 = G__28835;
i__28817_28831 = G__28836;
continue;
} else {
var temp__4425__auto___28837 = cljs.core.seq.call(null,seq__28814_28828);
if(temp__4425__auto___28837){
var seq__28814_28838__$1 = temp__4425__auto___28837;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28814_28838__$1)){
var c__17622__auto___28839 = cljs.core.chunk_first.call(null,seq__28814_28838__$1);
var G__28840 = cljs.core.chunk_rest.call(null,seq__28814_28838__$1);
var G__28841 = c__17622__auto___28839;
var G__28842 = cljs.core.count.call(null,c__17622__auto___28839);
var G__28843 = (0);
seq__28814_28828 = G__28840;
chunk__28815_28829 = G__28841;
count__28816_28830 = G__28842;
i__28817_28831 = G__28843;
continue;
} else {
var f_28844 = cljs.core.first.call(null,seq__28814_28838__$1);
cljs.core.println.call(null,"  ",f_28844);

var G__28845 = cljs.core.next.call(null,seq__28814_28838__$1);
var G__28846 = null;
var G__28847 = (0);
var G__28848 = (0);
seq__28814_28828 = G__28845;
chunk__28815_28829 = G__28846;
count__28816_28830 = G__28847;
i__28817_28831 = G__28848;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_28849 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16819__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_28849);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_28849)))?cljs.core.second.call(null,arglists_28849):arglists_28849));
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
var seq__28818 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__28819 = null;
var count__28820 = (0);
var i__28821 = (0);
while(true){
if((i__28821 < count__28820)){
var vec__28822 = cljs.core._nth.call(null,chunk__28819,i__28821);
var name = cljs.core.nth.call(null,vec__28822,(0),null);
var map__28823 = cljs.core.nth.call(null,vec__28822,(1),null);
var map__28823__$1 = ((((!((map__28823 == null)))?((((map__28823.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28823.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28823):map__28823);
var doc = cljs.core.get.call(null,map__28823__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28823__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28850 = seq__28818;
var G__28851 = chunk__28819;
var G__28852 = count__28820;
var G__28853 = (i__28821 + (1));
seq__28818 = G__28850;
chunk__28819 = G__28851;
count__28820 = G__28852;
i__28821 = G__28853;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28818);
if(temp__4425__auto__){
var seq__28818__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28818__$1)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,seq__28818__$1);
var G__28854 = cljs.core.chunk_rest.call(null,seq__28818__$1);
var G__28855 = c__17622__auto__;
var G__28856 = cljs.core.count.call(null,c__17622__auto__);
var G__28857 = (0);
seq__28818 = G__28854;
chunk__28819 = G__28855;
count__28820 = G__28856;
i__28821 = G__28857;
continue;
} else {
var vec__28825 = cljs.core.first.call(null,seq__28818__$1);
var name = cljs.core.nth.call(null,vec__28825,(0),null);
var map__28826 = cljs.core.nth.call(null,vec__28825,(1),null);
var map__28826__$1 = ((((!((map__28826 == null)))?((((map__28826.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28826.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28826):map__28826);
var doc = cljs.core.get.call(null,map__28826__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__28826__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__28858 = cljs.core.next.call(null,seq__28818__$1);
var G__28859 = null;
var G__28860 = (0);
var G__28861 = (0);
seq__28818 = G__28858;
chunk__28819 = G__28859;
count__28820 = G__28860;
i__28821 = G__28861;
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

//# sourceMappingURL=repl.js.map?rel=1460363593809