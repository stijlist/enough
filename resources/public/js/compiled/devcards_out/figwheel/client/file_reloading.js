// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16819__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16819__auto__){
return or__16819__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16819__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28331_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28331_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28336 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28337 = null;
var count__28338 = (0);
var i__28339 = (0);
while(true){
if((i__28339 < count__28338)){
var n = cljs.core._nth.call(null,chunk__28337,i__28339);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28340 = seq__28336;
var G__28341 = chunk__28337;
var G__28342 = count__28338;
var G__28343 = (i__28339 + (1));
seq__28336 = G__28340;
chunk__28337 = G__28341;
count__28338 = G__28342;
i__28339 = G__28343;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28336);
if(temp__4425__auto__){
var seq__28336__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28336__$1)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,seq__28336__$1);
var G__28344 = cljs.core.chunk_rest.call(null,seq__28336__$1);
var G__28345 = c__17622__auto__;
var G__28346 = cljs.core.count.call(null,c__17622__auto__);
var G__28347 = (0);
seq__28336 = G__28344;
chunk__28337 = G__28345;
count__28338 = G__28346;
i__28339 = G__28347;
continue;
} else {
var n = cljs.core.first.call(null,seq__28336__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28348 = cljs.core.next.call(null,seq__28336__$1);
var G__28349 = null;
var G__28350 = (0);
var G__28351 = (0);
seq__28336 = G__28348;
chunk__28337 = G__28349;
count__28338 = G__28350;
i__28339 = G__28351;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28390_28397 = cljs.core.seq.call(null,deps);
var chunk__28391_28398 = null;
var count__28392_28399 = (0);
var i__28393_28400 = (0);
while(true){
if((i__28393_28400 < count__28392_28399)){
var dep_28401 = cljs.core._nth.call(null,chunk__28391_28398,i__28393_28400);
topo_sort_helper_STAR_.call(null,dep_28401,(depth + (1)),state);

var G__28402 = seq__28390_28397;
var G__28403 = chunk__28391_28398;
var G__28404 = count__28392_28399;
var G__28405 = (i__28393_28400 + (1));
seq__28390_28397 = G__28402;
chunk__28391_28398 = G__28403;
count__28392_28399 = G__28404;
i__28393_28400 = G__28405;
continue;
} else {
var temp__4425__auto___28406 = cljs.core.seq.call(null,seq__28390_28397);
if(temp__4425__auto___28406){
var seq__28390_28407__$1 = temp__4425__auto___28406;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28390_28407__$1)){
var c__17622__auto___28408 = cljs.core.chunk_first.call(null,seq__28390_28407__$1);
var G__28409 = cljs.core.chunk_rest.call(null,seq__28390_28407__$1);
var G__28410 = c__17622__auto___28408;
var G__28411 = cljs.core.count.call(null,c__17622__auto___28408);
var G__28412 = (0);
seq__28390_28397 = G__28409;
chunk__28391_28398 = G__28410;
count__28392_28399 = G__28411;
i__28393_28400 = G__28412;
continue;
} else {
var dep_28413 = cljs.core.first.call(null,seq__28390_28407__$1);
topo_sort_helper_STAR_.call(null,dep_28413,(depth + (1)),state);

var G__28414 = cljs.core.next.call(null,seq__28390_28407__$1);
var G__28415 = null;
var G__28416 = (0);
var G__28417 = (0);
seq__28390_28397 = G__28414;
chunk__28391_28398 = G__28415;
count__28392_28399 = G__28416;
i__28393_28400 = G__28417;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28394){
var vec__28396 = p__28394;
var x = cljs.core.nth.call(null,vec__28396,(0),null);
var xs = cljs.core.nthnext.call(null,vec__28396,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28396,x,xs,get_deps__$1){
return (function (p1__28352_SHARP_){
return clojure.set.difference.call(null,p1__28352_SHARP_,x);
});})(vec__28396,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28430 = cljs.core.seq.call(null,provides);
var chunk__28431 = null;
var count__28432 = (0);
var i__28433 = (0);
while(true){
if((i__28433 < count__28432)){
var prov = cljs.core._nth.call(null,chunk__28431,i__28433);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28434_28442 = cljs.core.seq.call(null,requires);
var chunk__28435_28443 = null;
var count__28436_28444 = (0);
var i__28437_28445 = (0);
while(true){
if((i__28437_28445 < count__28436_28444)){
var req_28446 = cljs.core._nth.call(null,chunk__28435_28443,i__28437_28445);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28446,prov);

var G__28447 = seq__28434_28442;
var G__28448 = chunk__28435_28443;
var G__28449 = count__28436_28444;
var G__28450 = (i__28437_28445 + (1));
seq__28434_28442 = G__28447;
chunk__28435_28443 = G__28448;
count__28436_28444 = G__28449;
i__28437_28445 = G__28450;
continue;
} else {
var temp__4425__auto___28451 = cljs.core.seq.call(null,seq__28434_28442);
if(temp__4425__auto___28451){
var seq__28434_28452__$1 = temp__4425__auto___28451;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28434_28452__$1)){
var c__17622__auto___28453 = cljs.core.chunk_first.call(null,seq__28434_28452__$1);
var G__28454 = cljs.core.chunk_rest.call(null,seq__28434_28452__$1);
var G__28455 = c__17622__auto___28453;
var G__28456 = cljs.core.count.call(null,c__17622__auto___28453);
var G__28457 = (0);
seq__28434_28442 = G__28454;
chunk__28435_28443 = G__28455;
count__28436_28444 = G__28456;
i__28437_28445 = G__28457;
continue;
} else {
var req_28458 = cljs.core.first.call(null,seq__28434_28452__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28458,prov);

var G__28459 = cljs.core.next.call(null,seq__28434_28452__$1);
var G__28460 = null;
var G__28461 = (0);
var G__28462 = (0);
seq__28434_28442 = G__28459;
chunk__28435_28443 = G__28460;
count__28436_28444 = G__28461;
i__28437_28445 = G__28462;
continue;
}
} else {
}
}
break;
}

var G__28463 = seq__28430;
var G__28464 = chunk__28431;
var G__28465 = count__28432;
var G__28466 = (i__28433 + (1));
seq__28430 = G__28463;
chunk__28431 = G__28464;
count__28432 = G__28465;
i__28433 = G__28466;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__28430);
if(temp__4425__auto__){
var seq__28430__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28430__$1)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,seq__28430__$1);
var G__28467 = cljs.core.chunk_rest.call(null,seq__28430__$1);
var G__28468 = c__17622__auto__;
var G__28469 = cljs.core.count.call(null,c__17622__auto__);
var G__28470 = (0);
seq__28430 = G__28467;
chunk__28431 = G__28468;
count__28432 = G__28469;
i__28433 = G__28470;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28430__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28438_28471 = cljs.core.seq.call(null,requires);
var chunk__28439_28472 = null;
var count__28440_28473 = (0);
var i__28441_28474 = (0);
while(true){
if((i__28441_28474 < count__28440_28473)){
var req_28475 = cljs.core._nth.call(null,chunk__28439_28472,i__28441_28474);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28475,prov);

var G__28476 = seq__28438_28471;
var G__28477 = chunk__28439_28472;
var G__28478 = count__28440_28473;
var G__28479 = (i__28441_28474 + (1));
seq__28438_28471 = G__28476;
chunk__28439_28472 = G__28477;
count__28440_28473 = G__28478;
i__28441_28474 = G__28479;
continue;
} else {
var temp__4425__auto___28480__$1 = cljs.core.seq.call(null,seq__28438_28471);
if(temp__4425__auto___28480__$1){
var seq__28438_28481__$1 = temp__4425__auto___28480__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28438_28481__$1)){
var c__17622__auto___28482 = cljs.core.chunk_first.call(null,seq__28438_28481__$1);
var G__28483 = cljs.core.chunk_rest.call(null,seq__28438_28481__$1);
var G__28484 = c__17622__auto___28482;
var G__28485 = cljs.core.count.call(null,c__17622__auto___28482);
var G__28486 = (0);
seq__28438_28471 = G__28483;
chunk__28439_28472 = G__28484;
count__28440_28473 = G__28485;
i__28441_28474 = G__28486;
continue;
} else {
var req_28487 = cljs.core.first.call(null,seq__28438_28481__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28487,prov);

var G__28488 = cljs.core.next.call(null,seq__28438_28481__$1);
var G__28489 = null;
var G__28490 = (0);
var G__28491 = (0);
seq__28438_28471 = G__28488;
chunk__28439_28472 = G__28489;
count__28440_28473 = G__28490;
i__28441_28474 = G__28491;
continue;
}
} else {
}
}
break;
}

var G__28492 = cljs.core.next.call(null,seq__28430__$1);
var G__28493 = null;
var G__28494 = (0);
var G__28495 = (0);
seq__28430 = G__28492;
chunk__28431 = G__28493;
count__28432 = G__28494;
i__28433 = G__28495;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28500_28504 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28501_28505 = null;
var count__28502_28506 = (0);
var i__28503_28507 = (0);
while(true){
if((i__28503_28507 < count__28502_28506)){
var ns_28508 = cljs.core._nth.call(null,chunk__28501_28505,i__28503_28507);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28508);

var G__28509 = seq__28500_28504;
var G__28510 = chunk__28501_28505;
var G__28511 = count__28502_28506;
var G__28512 = (i__28503_28507 + (1));
seq__28500_28504 = G__28509;
chunk__28501_28505 = G__28510;
count__28502_28506 = G__28511;
i__28503_28507 = G__28512;
continue;
} else {
var temp__4425__auto___28513 = cljs.core.seq.call(null,seq__28500_28504);
if(temp__4425__auto___28513){
var seq__28500_28514__$1 = temp__4425__auto___28513;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28500_28514__$1)){
var c__17622__auto___28515 = cljs.core.chunk_first.call(null,seq__28500_28514__$1);
var G__28516 = cljs.core.chunk_rest.call(null,seq__28500_28514__$1);
var G__28517 = c__17622__auto___28515;
var G__28518 = cljs.core.count.call(null,c__17622__auto___28515);
var G__28519 = (0);
seq__28500_28504 = G__28516;
chunk__28501_28505 = G__28517;
count__28502_28506 = G__28518;
i__28503_28507 = G__28519;
continue;
} else {
var ns_28520 = cljs.core.first.call(null,seq__28500_28514__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28520);

var G__28521 = cljs.core.next.call(null,seq__28500_28514__$1);
var G__28522 = null;
var G__28523 = (0);
var G__28524 = (0);
seq__28500_28504 = G__28521;
chunk__28501_28505 = G__28522;
count__28502_28506 = G__28523;
i__28503_28507 = G__28524;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16819__auto__ = goog.require__;
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28525__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28525 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28526__i = 0, G__28526__a = new Array(arguments.length -  0);
while (G__28526__i < G__28526__a.length) {G__28526__a[G__28526__i] = arguments[G__28526__i + 0]; ++G__28526__i;}
  args = new cljs.core.IndexedSeq(G__28526__a,0);
} 
return G__28525__delegate.call(this,args);};
G__28525.cljs$lang$maxFixedArity = 0;
G__28525.cljs$lang$applyTo = (function (arglist__28527){
var args = cljs.core.seq(arglist__28527);
return G__28525__delegate(args);
});
G__28525.cljs$core$IFn$_invoke$arity$variadic = G__28525__delegate;
return G__28525;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28529 = cljs.core._EQ_;
var expr__28530 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28529.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28530))){
var path_parts = ((function (pred__28529,expr__28530){
return (function (p1__28528_SHARP_){
return clojure.string.split.call(null,p1__28528_SHARP_,/[\/\\]/);
});})(pred__28529,expr__28530))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__28529,expr__28530){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28532){if((e28532 instanceof Error)){
var e = e28532;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28532;

}
}})());
});
;})(path_parts,sep,root,pred__28529,expr__28530))
} else {
if(cljs.core.truth_(pred__28529.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28530))){
return ((function (pred__28529,expr__28530){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__28529,expr__28530){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28529,expr__28530))
);

return deferred.addErrback(((function (deferred,pred__28529,expr__28530){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28529,expr__28530))
);
});
;})(pred__28529,expr__28530))
} else {
return ((function (pred__28529,expr__28530){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28529,expr__28530))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28533,callback){
var map__28536 = p__28533;
var map__28536__$1 = ((((!((map__28536 == null)))?((((map__28536.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28536.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28536):map__28536);
var file_msg = map__28536__$1;
var request_url = cljs.core.get.call(null,map__28536__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28536,map__28536__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28536,map__28536__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__18935__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto__){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto__){
return (function (state_28560){
var state_val_28561 = (state_28560[(1)]);
if((state_val_28561 === (7))){
var inst_28556 = (state_28560[(2)]);
var state_28560__$1 = state_28560;
var statearr_28562_28582 = state_28560__$1;
(statearr_28562_28582[(2)] = inst_28556);

(statearr_28562_28582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (1))){
var state_28560__$1 = state_28560;
var statearr_28563_28583 = state_28560__$1;
(statearr_28563_28583[(2)] = null);

(statearr_28563_28583[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (4))){
var inst_28540 = (state_28560[(7)]);
var inst_28540__$1 = (state_28560[(2)]);
var state_28560__$1 = (function (){var statearr_28564 = state_28560;
(statearr_28564[(7)] = inst_28540__$1);

return statearr_28564;
})();
if(cljs.core.truth_(inst_28540__$1)){
var statearr_28565_28584 = state_28560__$1;
(statearr_28565_28584[(1)] = (5));

} else {
var statearr_28566_28585 = state_28560__$1;
(statearr_28566_28585[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (6))){
var state_28560__$1 = state_28560;
var statearr_28567_28586 = state_28560__$1;
(statearr_28567_28586[(2)] = null);

(statearr_28567_28586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (3))){
var inst_28558 = (state_28560[(2)]);
var state_28560__$1 = state_28560;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28560__$1,inst_28558);
} else {
if((state_val_28561 === (2))){
var state_28560__$1 = state_28560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28560__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28561 === (11))){
var inst_28552 = (state_28560[(2)]);
var state_28560__$1 = (function (){var statearr_28568 = state_28560;
(statearr_28568[(8)] = inst_28552);

return statearr_28568;
})();
var statearr_28569_28587 = state_28560__$1;
(statearr_28569_28587[(2)] = null);

(statearr_28569_28587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (9))){
var inst_28544 = (state_28560[(9)]);
var inst_28546 = (state_28560[(10)]);
var inst_28548 = inst_28546.call(null,inst_28544);
var state_28560__$1 = state_28560;
var statearr_28570_28588 = state_28560__$1;
(statearr_28570_28588[(2)] = inst_28548);

(statearr_28570_28588[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (5))){
var inst_28540 = (state_28560[(7)]);
var inst_28542 = figwheel.client.file_reloading.blocking_load.call(null,inst_28540);
var state_28560__$1 = state_28560;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28560__$1,(8),inst_28542);
} else {
if((state_val_28561 === (10))){
var inst_28544 = (state_28560[(9)]);
var inst_28550 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28544);
var state_28560__$1 = state_28560;
var statearr_28571_28589 = state_28560__$1;
(statearr_28571_28589[(2)] = inst_28550);

(statearr_28571_28589[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28561 === (8))){
var inst_28546 = (state_28560[(10)]);
var inst_28540 = (state_28560[(7)]);
var inst_28544 = (state_28560[(2)]);
var inst_28545 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28546__$1 = cljs.core.get.call(null,inst_28545,inst_28540);
var state_28560__$1 = (function (){var statearr_28572 = state_28560;
(statearr_28572[(9)] = inst_28544);

(statearr_28572[(10)] = inst_28546__$1);

return statearr_28572;
})();
if(cljs.core.truth_(inst_28546__$1)){
var statearr_28573_28590 = state_28560__$1;
(statearr_28573_28590[(1)] = (9));

} else {
var statearr_28574_28591 = state_28560__$1;
(statearr_28574_28591[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__18935__auto__))
;
return ((function (switch__18914__auto__,c__18935__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__18915__auto__ = null;
var figwheel$client$file_reloading$state_machine__18915__auto____0 = (function (){
var statearr_28578 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28578[(0)] = figwheel$client$file_reloading$state_machine__18915__auto__);

(statearr_28578[(1)] = (1));

return statearr_28578;
});
var figwheel$client$file_reloading$state_machine__18915__auto____1 = (function (state_28560){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_28560);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e28579){if((e28579 instanceof Object)){
var ex__18918__auto__ = e28579;
var statearr_28580_28592 = state_28560;
(statearr_28580_28592[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28579;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28593 = state_28560;
state_28560 = G__28593;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18915__auto__ = function(state_28560){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18915__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18915__auto____1.call(this,state_28560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18915__auto____0;
figwheel$client$file_reloading$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18915__auto____1;
return figwheel$client$file_reloading$state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto__))
})();
var state__18937__auto__ = (function (){var statearr_28581 = f__18936__auto__.call(null);
(statearr_28581[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto__);

return statearr_28581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto__))
);

return c__18935__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28594,callback){
var map__28597 = p__28594;
var map__28597__$1 = ((((!((map__28597 == null)))?((((map__28597.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28597.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28597):map__28597);
var file_msg = map__28597__$1;
var namespace = cljs.core.get.call(null,map__28597__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28597,map__28597__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28597,map__28597__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28599){
var map__28602 = p__28599;
var map__28602__$1 = ((((!((map__28602 == null)))?((((map__28602.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28602.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28602):map__28602);
var file_msg = map__28602__$1;
var namespace = cljs.core.get.call(null,map__28602__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16807__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16807__auto__){
var or__16819__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
var or__16819__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16819__auto____$1)){
return or__16819__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16807__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28604,callback){
var map__28607 = p__28604;
var map__28607__$1 = ((((!((map__28607 == null)))?((((map__28607.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28607.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28607):map__28607);
var file_msg = map__28607__$1;
var request_url = cljs.core.get.call(null,map__28607__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28607__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__18935__auto___28695 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___28695,out){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___28695,out){
return (function (state_28677){
var state_val_28678 = (state_28677[(1)]);
if((state_val_28678 === (1))){
var inst_28655 = cljs.core.nth.call(null,files,(0),null);
var inst_28656 = cljs.core.nthnext.call(null,files,(1));
var inst_28657 = files;
var state_28677__$1 = (function (){var statearr_28679 = state_28677;
(statearr_28679[(7)] = inst_28656);

(statearr_28679[(8)] = inst_28655);

(statearr_28679[(9)] = inst_28657);

return statearr_28679;
})();
var statearr_28680_28696 = state_28677__$1;
(statearr_28680_28696[(2)] = null);

(statearr_28680_28696[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28678 === (2))){
var inst_28657 = (state_28677[(9)]);
var inst_28660 = (state_28677[(10)]);
var inst_28660__$1 = cljs.core.nth.call(null,inst_28657,(0),null);
var inst_28661 = cljs.core.nthnext.call(null,inst_28657,(1));
var inst_28662 = (inst_28660__$1 == null);
var inst_28663 = cljs.core.not.call(null,inst_28662);
var state_28677__$1 = (function (){var statearr_28681 = state_28677;
(statearr_28681[(11)] = inst_28661);

(statearr_28681[(10)] = inst_28660__$1);

return statearr_28681;
})();
if(inst_28663){
var statearr_28682_28697 = state_28677__$1;
(statearr_28682_28697[(1)] = (4));

} else {
var statearr_28683_28698 = state_28677__$1;
(statearr_28683_28698[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28678 === (3))){
var inst_28675 = (state_28677[(2)]);
var state_28677__$1 = state_28677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28677__$1,inst_28675);
} else {
if((state_val_28678 === (4))){
var inst_28660 = (state_28677[(10)]);
var inst_28665 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28660);
var state_28677__$1 = state_28677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28677__$1,(7),inst_28665);
} else {
if((state_val_28678 === (5))){
var inst_28671 = cljs.core.async.close_BANG_.call(null,out);
var state_28677__$1 = state_28677;
var statearr_28684_28699 = state_28677__$1;
(statearr_28684_28699[(2)] = inst_28671);

(statearr_28684_28699[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28678 === (6))){
var inst_28673 = (state_28677[(2)]);
var state_28677__$1 = state_28677;
var statearr_28685_28700 = state_28677__$1;
(statearr_28685_28700[(2)] = inst_28673);

(statearr_28685_28700[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28678 === (7))){
var inst_28661 = (state_28677[(11)]);
var inst_28667 = (state_28677[(2)]);
var inst_28668 = cljs.core.async.put_BANG_.call(null,out,inst_28667);
var inst_28657 = inst_28661;
var state_28677__$1 = (function (){var statearr_28686 = state_28677;
(statearr_28686[(12)] = inst_28668);

(statearr_28686[(9)] = inst_28657);

return statearr_28686;
})();
var statearr_28687_28701 = state_28677__$1;
(statearr_28687_28701[(2)] = null);

(statearr_28687_28701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__18935__auto___28695,out))
;
return ((function (switch__18914__auto__,c__18935__auto___28695,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18915__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18915__auto____0 = (function (){
var statearr_28691 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28691[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18915__auto__);

(statearr_28691[(1)] = (1));

return statearr_28691;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18915__auto____1 = (function (state_28677){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_28677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e28692){if((e28692 instanceof Object)){
var ex__18918__auto__ = e28692;
var statearr_28693_28702 = state_28677;
(statearr_28693_28702[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28703 = state_28677;
state_28677 = G__28703;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18915__auto__ = function(state_28677){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18915__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18915__auto____1.call(this,state_28677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18915__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18915__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___28695,out))
})();
var state__18937__auto__ = (function (){var statearr_28694 = f__18936__auto__.call(null);
(statearr_28694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___28695);

return statearr_28694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___28695,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28704,opts){
var map__28708 = p__28704;
var map__28708__$1 = ((((!((map__28708 == null)))?((((map__28708.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28708.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28708):map__28708);
var eval_body__$1 = cljs.core.get.call(null,map__28708__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28708__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16807__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16807__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16807__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28710){var e = e28710;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28711_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28711_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28716){
var vec__28717 = p__28716;
var k = cljs.core.nth.call(null,vec__28717,(0),null);
var v = cljs.core.nth.call(null,vec__28717,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28718){
var vec__28719 = p__28718;
var k = cljs.core.nth.call(null,vec__28719,(0),null);
var v = cljs.core.nth.call(null,vec__28719,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28723,p__28724){
var map__28971 = p__28723;
var map__28971__$1 = ((((!((map__28971 == null)))?((((map__28971.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28971.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28971):map__28971);
var opts = map__28971__$1;
var before_jsload = cljs.core.get.call(null,map__28971__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28971__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28971__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28972 = p__28724;
var map__28972__$1 = ((((!((map__28972 == null)))?((((map__28972.cljs$lang$protocol_mask$partition0$ & (64))) || (map__28972.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28972):map__28972);
var msg = map__28972__$1;
var files = cljs.core.get.call(null,map__28972__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28972__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28972__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18935__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto__,map__28971,map__28971__$1,opts,before_jsload,on_jsload,reload_dependents,map__28972,map__28972__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto__,map__28971,map__28971__$1,opts,before_jsload,on_jsload,reload_dependents,map__28972,map__28972__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29125){
var state_val_29126 = (state_29125[(1)]);
if((state_val_29126 === (7))){
var inst_28988 = (state_29125[(7)]);
var inst_28986 = (state_29125[(8)]);
var inst_28989 = (state_29125[(9)]);
var inst_28987 = (state_29125[(10)]);
var inst_28994 = cljs.core._nth.call(null,inst_28987,inst_28989);
var inst_28995 = figwheel.client.file_reloading.eval_body.call(null,inst_28994,opts);
var inst_28996 = (inst_28989 + (1));
var tmp29127 = inst_28988;
var tmp29128 = inst_28986;
var tmp29129 = inst_28987;
var inst_28986__$1 = tmp29128;
var inst_28987__$1 = tmp29129;
var inst_28988__$1 = tmp29127;
var inst_28989__$1 = inst_28996;
var state_29125__$1 = (function (){var statearr_29130 = state_29125;
(statearr_29130[(7)] = inst_28988__$1);

(statearr_29130[(8)] = inst_28986__$1);

(statearr_29130[(11)] = inst_28995);

(statearr_29130[(9)] = inst_28989__$1);

(statearr_29130[(10)] = inst_28987__$1);

return statearr_29130;
})();
var statearr_29131_29217 = state_29125__$1;
(statearr_29131_29217[(2)] = null);

(statearr_29131_29217[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (20))){
var inst_29029 = (state_29125[(12)]);
var inst_29037 = figwheel.client.file_reloading.sort_files.call(null,inst_29029);
var state_29125__$1 = state_29125;
var statearr_29132_29218 = state_29125__$1;
(statearr_29132_29218[(2)] = inst_29037);

(statearr_29132_29218[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (27))){
var state_29125__$1 = state_29125;
var statearr_29133_29219 = state_29125__$1;
(statearr_29133_29219[(2)] = null);

(statearr_29133_29219[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (1))){
var inst_28978 = (state_29125[(13)]);
var inst_28975 = before_jsload.call(null,files);
var inst_28976 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28977 = (function (){return ((function (inst_28978,inst_28975,inst_28976,state_val_29126,c__18935__auto__,map__28971,map__28971__$1,opts,before_jsload,on_jsload,reload_dependents,map__28972,map__28972__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28720_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28720_SHARP_);
});
;})(inst_28978,inst_28975,inst_28976,state_val_29126,c__18935__auto__,map__28971,map__28971__$1,opts,before_jsload,on_jsload,reload_dependents,map__28972,map__28972__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28978__$1 = cljs.core.filter.call(null,inst_28977,files);
var inst_28979 = cljs.core.not_empty.call(null,inst_28978__$1);
var state_29125__$1 = (function (){var statearr_29134 = state_29125;
(statearr_29134[(13)] = inst_28978__$1);

(statearr_29134[(14)] = inst_28976);

(statearr_29134[(15)] = inst_28975);

return statearr_29134;
})();
if(cljs.core.truth_(inst_28979)){
var statearr_29135_29220 = state_29125__$1;
(statearr_29135_29220[(1)] = (2));

} else {
var statearr_29136_29221 = state_29125__$1;
(statearr_29136_29221[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (24))){
var state_29125__$1 = state_29125;
var statearr_29137_29222 = state_29125__$1;
(statearr_29137_29222[(2)] = null);

(statearr_29137_29222[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (39))){
var inst_29079 = (state_29125[(16)]);
var state_29125__$1 = state_29125;
var statearr_29138_29223 = state_29125__$1;
(statearr_29138_29223[(2)] = inst_29079);

(statearr_29138_29223[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (46))){
var inst_29120 = (state_29125[(2)]);
var state_29125__$1 = state_29125;
var statearr_29139_29224 = state_29125__$1;
(statearr_29139_29224[(2)] = inst_29120);

(statearr_29139_29224[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (4))){
var inst_29023 = (state_29125[(2)]);
var inst_29024 = cljs.core.List.EMPTY;
var inst_29025 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29024);
var inst_29026 = (function (){return ((function (inst_29023,inst_29024,inst_29025,state_val_29126,c__18935__auto__,map__28971,map__28971__$1,opts,before_jsload,on_jsload,reload_dependents,map__28972,map__28972__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28721_SHARP_){
var and__16807__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28721_SHARP_);
if(cljs.core.truth_(and__16807__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28721_SHARP_));
} else {
return and__16807__auto__;
}
});
;})(inst_29023,inst_29024,inst_29025,state_val_29126,c__18935__auto__,map__28971,map__28971__$1,opts,before_jsload,on_jsload,reload_dependents,map__28972,map__28972__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29027 = cljs.core.filter.call(null,inst_29026,files);
var inst_29028 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29029 = cljs.core.concat.call(null,inst_29027,inst_29028);
var state_29125__$1 = (function (){var statearr_29140 = state_29125;
(statearr_29140[(12)] = inst_29029);

(statearr_29140[(17)] = inst_29025);

(statearr_29140[(18)] = inst_29023);

return statearr_29140;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29141_29225 = state_29125__$1;
(statearr_29141_29225[(1)] = (16));

} else {
var statearr_29142_29226 = state_29125__$1;
(statearr_29142_29226[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (15))){
var inst_29013 = (state_29125[(2)]);
var state_29125__$1 = state_29125;
var statearr_29143_29227 = state_29125__$1;
(statearr_29143_29227[(2)] = inst_29013);

(statearr_29143_29227[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (21))){
var inst_29039 = (state_29125[(19)]);
var inst_29039__$1 = (state_29125[(2)]);
var inst_29040 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29039__$1);
var state_29125__$1 = (function (){var statearr_29144 = state_29125;
(statearr_29144[(19)] = inst_29039__$1);

return statearr_29144;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29125__$1,(22),inst_29040);
} else {
if((state_val_29126 === (31))){
var inst_29123 = (state_29125[(2)]);
var state_29125__$1 = state_29125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29125__$1,inst_29123);
} else {
if((state_val_29126 === (32))){
var inst_29079 = (state_29125[(16)]);
var inst_29084 = inst_29079.cljs$lang$protocol_mask$partition0$;
var inst_29085 = (inst_29084 & (64));
var inst_29086 = inst_29079.cljs$core$ISeq$;
var inst_29087 = (inst_29085) || (inst_29086);
var state_29125__$1 = state_29125;
if(cljs.core.truth_(inst_29087)){
var statearr_29145_29228 = state_29125__$1;
(statearr_29145_29228[(1)] = (35));

} else {
var statearr_29146_29229 = state_29125__$1;
(statearr_29146_29229[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (40))){
var inst_29100 = (state_29125[(20)]);
var inst_29099 = (state_29125[(2)]);
var inst_29100__$1 = cljs.core.get.call(null,inst_29099,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29101 = cljs.core.get.call(null,inst_29099,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29102 = cljs.core.not_empty.call(null,inst_29100__$1);
var state_29125__$1 = (function (){var statearr_29147 = state_29125;
(statearr_29147[(20)] = inst_29100__$1);

(statearr_29147[(21)] = inst_29101);

return statearr_29147;
})();
if(cljs.core.truth_(inst_29102)){
var statearr_29148_29230 = state_29125__$1;
(statearr_29148_29230[(1)] = (41));

} else {
var statearr_29149_29231 = state_29125__$1;
(statearr_29149_29231[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (33))){
var state_29125__$1 = state_29125;
var statearr_29150_29232 = state_29125__$1;
(statearr_29150_29232[(2)] = false);

(statearr_29150_29232[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (13))){
var inst_28999 = (state_29125[(22)]);
var inst_29003 = cljs.core.chunk_first.call(null,inst_28999);
var inst_29004 = cljs.core.chunk_rest.call(null,inst_28999);
var inst_29005 = cljs.core.count.call(null,inst_29003);
var inst_28986 = inst_29004;
var inst_28987 = inst_29003;
var inst_28988 = inst_29005;
var inst_28989 = (0);
var state_29125__$1 = (function (){var statearr_29151 = state_29125;
(statearr_29151[(7)] = inst_28988);

(statearr_29151[(8)] = inst_28986);

(statearr_29151[(9)] = inst_28989);

(statearr_29151[(10)] = inst_28987);

return statearr_29151;
})();
var statearr_29152_29233 = state_29125__$1;
(statearr_29152_29233[(2)] = null);

(statearr_29152_29233[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (22))){
var inst_29043 = (state_29125[(23)]);
var inst_29039 = (state_29125[(19)]);
var inst_29047 = (state_29125[(24)]);
var inst_29042 = (state_29125[(25)]);
var inst_29042__$1 = (state_29125[(2)]);
var inst_29043__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29042__$1);
var inst_29044 = (function (){var all_files = inst_29039;
var res_SINGLEQUOTE_ = inst_29042__$1;
var res = inst_29043__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29043,inst_29039,inst_29047,inst_29042,inst_29042__$1,inst_29043__$1,state_val_29126,c__18935__auto__,map__28971,map__28971__$1,opts,before_jsload,on_jsload,reload_dependents,map__28972,map__28972__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28722_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28722_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29043,inst_29039,inst_29047,inst_29042,inst_29042__$1,inst_29043__$1,state_val_29126,c__18935__auto__,map__28971,map__28971__$1,opts,before_jsload,on_jsload,reload_dependents,map__28972,map__28972__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29045 = cljs.core.filter.call(null,inst_29044,inst_29042__$1);
var inst_29046 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29047__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29046);
var inst_29048 = cljs.core.not_empty.call(null,inst_29047__$1);
var state_29125__$1 = (function (){var statearr_29153 = state_29125;
(statearr_29153[(26)] = inst_29045);

(statearr_29153[(23)] = inst_29043__$1);

(statearr_29153[(24)] = inst_29047__$1);

(statearr_29153[(25)] = inst_29042__$1);

return statearr_29153;
})();
if(cljs.core.truth_(inst_29048)){
var statearr_29154_29234 = state_29125__$1;
(statearr_29154_29234[(1)] = (23));

} else {
var statearr_29155_29235 = state_29125__$1;
(statearr_29155_29235[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (36))){
var state_29125__$1 = state_29125;
var statearr_29156_29236 = state_29125__$1;
(statearr_29156_29236[(2)] = false);

(statearr_29156_29236[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (41))){
var inst_29100 = (state_29125[(20)]);
var inst_29104 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29105 = cljs.core.map.call(null,inst_29104,inst_29100);
var inst_29106 = cljs.core.pr_str.call(null,inst_29105);
var inst_29107 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29106)].join('');
var inst_29108 = figwheel.client.utils.log.call(null,inst_29107);
var state_29125__$1 = state_29125;
var statearr_29157_29237 = state_29125__$1;
(statearr_29157_29237[(2)] = inst_29108);

(statearr_29157_29237[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (43))){
var inst_29101 = (state_29125[(21)]);
var inst_29111 = (state_29125[(2)]);
var inst_29112 = cljs.core.not_empty.call(null,inst_29101);
var state_29125__$1 = (function (){var statearr_29158 = state_29125;
(statearr_29158[(27)] = inst_29111);

return statearr_29158;
})();
if(cljs.core.truth_(inst_29112)){
var statearr_29159_29238 = state_29125__$1;
(statearr_29159_29238[(1)] = (44));

} else {
var statearr_29160_29239 = state_29125__$1;
(statearr_29160_29239[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (29))){
var inst_29045 = (state_29125[(26)]);
var inst_29043 = (state_29125[(23)]);
var inst_29039 = (state_29125[(19)]);
var inst_29047 = (state_29125[(24)]);
var inst_29079 = (state_29125[(16)]);
var inst_29042 = (state_29125[(25)]);
var inst_29075 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29078 = (function (){var all_files = inst_29039;
var res_SINGLEQUOTE_ = inst_29042;
var res = inst_29043;
var files_not_loaded = inst_29045;
var dependencies_that_loaded = inst_29047;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29045,inst_29043,inst_29039,inst_29047,inst_29079,inst_29042,inst_29075,state_val_29126,c__18935__auto__,map__28971,map__28971__$1,opts,before_jsload,on_jsload,reload_dependents,map__28972,map__28972__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29077){
var map__29161 = p__29077;
var map__29161__$1 = ((((!((map__29161 == null)))?((((map__29161.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29161.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29161):map__29161);
var namespace = cljs.core.get.call(null,map__29161__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29045,inst_29043,inst_29039,inst_29047,inst_29079,inst_29042,inst_29075,state_val_29126,c__18935__auto__,map__28971,map__28971__$1,opts,before_jsload,on_jsload,reload_dependents,map__28972,map__28972__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29079__$1 = cljs.core.group_by.call(null,inst_29078,inst_29045);
var inst_29081 = (inst_29079__$1 == null);
var inst_29082 = cljs.core.not.call(null,inst_29081);
var state_29125__$1 = (function (){var statearr_29163 = state_29125;
(statearr_29163[(28)] = inst_29075);

(statearr_29163[(16)] = inst_29079__$1);

return statearr_29163;
})();
if(inst_29082){
var statearr_29164_29240 = state_29125__$1;
(statearr_29164_29240[(1)] = (32));

} else {
var statearr_29165_29241 = state_29125__$1;
(statearr_29165_29241[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (44))){
var inst_29101 = (state_29125[(21)]);
var inst_29114 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29101);
var inst_29115 = cljs.core.pr_str.call(null,inst_29114);
var inst_29116 = [cljs.core.str("not required: "),cljs.core.str(inst_29115)].join('');
var inst_29117 = figwheel.client.utils.log.call(null,inst_29116);
var state_29125__$1 = state_29125;
var statearr_29166_29242 = state_29125__$1;
(statearr_29166_29242[(2)] = inst_29117);

(statearr_29166_29242[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (6))){
var inst_29020 = (state_29125[(2)]);
var state_29125__$1 = state_29125;
var statearr_29167_29243 = state_29125__$1;
(statearr_29167_29243[(2)] = inst_29020);

(statearr_29167_29243[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (28))){
var inst_29045 = (state_29125[(26)]);
var inst_29072 = (state_29125[(2)]);
var inst_29073 = cljs.core.not_empty.call(null,inst_29045);
var state_29125__$1 = (function (){var statearr_29168 = state_29125;
(statearr_29168[(29)] = inst_29072);

return statearr_29168;
})();
if(cljs.core.truth_(inst_29073)){
var statearr_29169_29244 = state_29125__$1;
(statearr_29169_29244[(1)] = (29));

} else {
var statearr_29170_29245 = state_29125__$1;
(statearr_29170_29245[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (25))){
var inst_29043 = (state_29125[(23)]);
var inst_29059 = (state_29125[(2)]);
var inst_29060 = cljs.core.not_empty.call(null,inst_29043);
var state_29125__$1 = (function (){var statearr_29171 = state_29125;
(statearr_29171[(30)] = inst_29059);

return statearr_29171;
})();
if(cljs.core.truth_(inst_29060)){
var statearr_29172_29246 = state_29125__$1;
(statearr_29172_29246[(1)] = (26));

} else {
var statearr_29173_29247 = state_29125__$1;
(statearr_29173_29247[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (34))){
var inst_29094 = (state_29125[(2)]);
var state_29125__$1 = state_29125;
if(cljs.core.truth_(inst_29094)){
var statearr_29174_29248 = state_29125__$1;
(statearr_29174_29248[(1)] = (38));

} else {
var statearr_29175_29249 = state_29125__$1;
(statearr_29175_29249[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (17))){
var state_29125__$1 = state_29125;
var statearr_29176_29250 = state_29125__$1;
(statearr_29176_29250[(2)] = recompile_dependents);

(statearr_29176_29250[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (3))){
var state_29125__$1 = state_29125;
var statearr_29177_29251 = state_29125__$1;
(statearr_29177_29251[(2)] = null);

(statearr_29177_29251[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (12))){
var inst_29016 = (state_29125[(2)]);
var state_29125__$1 = state_29125;
var statearr_29178_29252 = state_29125__$1;
(statearr_29178_29252[(2)] = inst_29016);

(statearr_29178_29252[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (2))){
var inst_28978 = (state_29125[(13)]);
var inst_28985 = cljs.core.seq.call(null,inst_28978);
var inst_28986 = inst_28985;
var inst_28987 = null;
var inst_28988 = (0);
var inst_28989 = (0);
var state_29125__$1 = (function (){var statearr_29179 = state_29125;
(statearr_29179[(7)] = inst_28988);

(statearr_29179[(8)] = inst_28986);

(statearr_29179[(9)] = inst_28989);

(statearr_29179[(10)] = inst_28987);

return statearr_29179;
})();
var statearr_29180_29253 = state_29125__$1;
(statearr_29180_29253[(2)] = null);

(statearr_29180_29253[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (23))){
var inst_29045 = (state_29125[(26)]);
var inst_29043 = (state_29125[(23)]);
var inst_29039 = (state_29125[(19)]);
var inst_29047 = (state_29125[(24)]);
var inst_29042 = (state_29125[(25)]);
var inst_29050 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29052 = (function (){var all_files = inst_29039;
var res_SINGLEQUOTE_ = inst_29042;
var res = inst_29043;
var files_not_loaded = inst_29045;
var dependencies_that_loaded = inst_29047;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29045,inst_29043,inst_29039,inst_29047,inst_29042,inst_29050,state_val_29126,c__18935__auto__,map__28971,map__28971__$1,opts,before_jsload,on_jsload,reload_dependents,map__28972,map__28972__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29051){
var map__29181 = p__29051;
var map__29181__$1 = ((((!((map__29181 == null)))?((((map__29181.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29181.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29181):map__29181);
var request_url = cljs.core.get.call(null,map__29181__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29045,inst_29043,inst_29039,inst_29047,inst_29042,inst_29050,state_val_29126,c__18935__auto__,map__28971,map__28971__$1,opts,before_jsload,on_jsload,reload_dependents,map__28972,map__28972__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29053 = cljs.core.reverse.call(null,inst_29047);
var inst_29054 = cljs.core.map.call(null,inst_29052,inst_29053);
var inst_29055 = cljs.core.pr_str.call(null,inst_29054);
var inst_29056 = figwheel.client.utils.log.call(null,inst_29055);
var state_29125__$1 = (function (){var statearr_29183 = state_29125;
(statearr_29183[(31)] = inst_29050);

return statearr_29183;
})();
var statearr_29184_29254 = state_29125__$1;
(statearr_29184_29254[(2)] = inst_29056);

(statearr_29184_29254[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (35))){
var state_29125__$1 = state_29125;
var statearr_29185_29255 = state_29125__$1;
(statearr_29185_29255[(2)] = true);

(statearr_29185_29255[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (19))){
var inst_29029 = (state_29125[(12)]);
var inst_29035 = figwheel.client.file_reloading.expand_files.call(null,inst_29029);
var state_29125__$1 = state_29125;
var statearr_29186_29256 = state_29125__$1;
(statearr_29186_29256[(2)] = inst_29035);

(statearr_29186_29256[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (11))){
var state_29125__$1 = state_29125;
var statearr_29187_29257 = state_29125__$1;
(statearr_29187_29257[(2)] = null);

(statearr_29187_29257[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (9))){
var inst_29018 = (state_29125[(2)]);
var state_29125__$1 = state_29125;
var statearr_29188_29258 = state_29125__$1;
(statearr_29188_29258[(2)] = inst_29018);

(statearr_29188_29258[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (5))){
var inst_28988 = (state_29125[(7)]);
var inst_28989 = (state_29125[(9)]);
var inst_28991 = (inst_28989 < inst_28988);
var inst_28992 = inst_28991;
var state_29125__$1 = state_29125;
if(cljs.core.truth_(inst_28992)){
var statearr_29189_29259 = state_29125__$1;
(statearr_29189_29259[(1)] = (7));

} else {
var statearr_29190_29260 = state_29125__$1;
(statearr_29190_29260[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (14))){
var inst_28999 = (state_29125[(22)]);
var inst_29008 = cljs.core.first.call(null,inst_28999);
var inst_29009 = figwheel.client.file_reloading.eval_body.call(null,inst_29008,opts);
var inst_29010 = cljs.core.next.call(null,inst_28999);
var inst_28986 = inst_29010;
var inst_28987 = null;
var inst_28988 = (0);
var inst_28989 = (0);
var state_29125__$1 = (function (){var statearr_29191 = state_29125;
(statearr_29191[(7)] = inst_28988);

(statearr_29191[(32)] = inst_29009);

(statearr_29191[(8)] = inst_28986);

(statearr_29191[(9)] = inst_28989);

(statearr_29191[(10)] = inst_28987);

return statearr_29191;
})();
var statearr_29192_29261 = state_29125__$1;
(statearr_29192_29261[(2)] = null);

(statearr_29192_29261[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (45))){
var state_29125__$1 = state_29125;
var statearr_29193_29262 = state_29125__$1;
(statearr_29193_29262[(2)] = null);

(statearr_29193_29262[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (26))){
var inst_29045 = (state_29125[(26)]);
var inst_29043 = (state_29125[(23)]);
var inst_29039 = (state_29125[(19)]);
var inst_29047 = (state_29125[(24)]);
var inst_29042 = (state_29125[(25)]);
var inst_29062 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29064 = (function (){var all_files = inst_29039;
var res_SINGLEQUOTE_ = inst_29042;
var res = inst_29043;
var files_not_loaded = inst_29045;
var dependencies_that_loaded = inst_29047;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29045,inst_29043,inst_29039,inst_29047,inst_29042,inst_29062,state_val_29126,c__18935__auto__,map__28971,map__28971__$1,opts,before_jsload,on_jsload,reload_dependents,map__28972,map__28972__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29063){
var map__29194 = p__29063;
var map__29194__$1 = ((((!((map__29194 == null)))?((((map__29194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29194):map__29194);
var namespace = cljs.core.get.call(null,map__29194__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29194__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29045,inst_29043,inst_29039,inst_29047,inst_29042,inst_29062,state_val_29126,c__18935__auto__,map__28971,map__28971__$1,opts,before_jsload,on_jsload,reload_dependents,map__28972,map__28972__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29065 = cljs.core.map.call(null,inst_29064,inst_29043);
var inst_29066 = cljs.core.pr_str.call(null,inst_29065);
var inst_29067 = figwheel.client.utils.log.call(null,inst_29066);
var inst_29068 = (function (){var all_files = inst_29039;
var res_SINGLEQUOTE_ = inst_29042;
var res = inst_29043;
var files_not_loaded = inst_29045;
var dependencies_that_loaded = inst_29047;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29045,inst_29043,inst_29039,inst_29047,inst_29042,inst_29062,inst_29064,inst_29065,inst_29066,inst_29067,state_val_29126,c__18935__auto__,map__28971,map__28971__$1,opts,before_jsload,on_jsload,reload_dependents,map__28972,map__28972__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29045,inst_29043,inst_29039,inst_29047,inst_29042,inst_29062,inst_29064,inst_29065,inst_29066,inst_29067,state_val_29126,c__18935__auto__,map__28971,map__28971__$1,opts,before_jsload,on_jsload,reload_dependents,map__28972,map__28972__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29069 = setTimeout(inst_29068,(10));
var state_29125__$1 = (function (){var statearr_29196 = state_29125;
(statearr_29196[(33)] = inst_29067);

(statearr_29196[(34)] = inst_29062);

return statearr_29196;
})();
var statearr_29197_29263 = state_29125__$1;
(statearr_29197_29263[(2)] = inst_29069);

(statearr_29197_29263[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (16))){
var state_29125__$1 = state_29125;
var statearr_29198_29264 = state_29125__$1;
(statearr_29198_29264[(2)] = reload_dependents);

(statearr_29198_29264[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (38))){
var inst_29079 = (state_29125[(16)]);
var inst_29096 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29079);
var state_29125__$1 = state_29125;
var statearr_29199_29265 = state_29125__$1;
(statearr_29199_29265[(2)] = inst_29096);

(statearr_29199_29265[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (30))){
var state_29125__$1 = state_29125;
var statearr_29200_29266 = state_29125__$1;
(statearr_29200_29266[(2)] = null);

(statearr_29200_29266[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (10))){
var inst_28999 = (state_29125[(22)]);
var inst_29001 = cljs.core.chunked_seq_QMARK_.call(null,inst_28999);
var state_29125__$1 = state_29125;
if(inst_29001){
var statearr_29201_29267 = state_29125__$1;
(statearr_29201_29267[(1)] = (13));

} else {
var statearr_29202_29268 = state_29125__$1;
(statearr_29202_29268[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (18))){
var inst_29033 = (state_29125[(2)]);
var state_29125__$1 = state_29125;
if(cljs.core.truth_(inst_29033)){
var statearr_29203_29269 = state_29125__$1;
(statearr_29203_29269[(1)] = (19));

} else {
var statearr_29204_29270 = state_29125__$1;
(statearr_29204_29270[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (42))){
var state_29125__$1 = state_29125;
var statearr_29205_29271 = state_29125__$1;
(statearr_29205_29271[(2)] = null);

(statearr_29205_29271[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (37))){
var inst_29091 = (state_29125[(2)]);
var state_29125__$1 = state_29125;
var statearr_29206_29272 = state_29125__$1;
(statearr_29206_29272[(2)] = inst_29091);

(statearr_29206_29272[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29126 === (8))){
var inst_28986 = (state_29125[(8)]);
var inst_28999 = (state_29125[(22)]);
var inst_28999__$1 = cljs.core.seq.call(null,inst_28986);
var state_29125__$1 = (function (){var statearr_29207 = state_29125;
(statearr_29207[(22)] = inst_28999__$1);

return statearr_29207;
})();
if(inst_28999__$1){
var statearr_29208_29273 = state_29125__$1;
(statearr_29208_29273[(1)] = (10));

} else {
var statearr_29209_29274 = state_29125__$1;
(statearr_29209_29274[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18935__auto__,map__28971,map__28971__$1,opts,before_jsload,on_jsload,reload_dependents,map__28972,map__28972__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18914__auto__,c__18935__auto__,map__28971,map__28971__$1,opts,before_jsload,on_jsload,reload_dependents,map__28972,map__28972__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18915__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18915__auto____0 = (function (){
var statearr_29213 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29213[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18915__auto__);

(statearr_29213[(1)] = (1));

return statearr_29213;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18915__auto____1 = (function (state_29125){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_29125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e29214){if((e29214 instanceof Object)){
var ex__18918__auto__ = e29214;
var statearr_29215_29275 = state_29125;
(statearr_29215_29275[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29214;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29276 = state_29125;
state_29125 = G__29276;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18915__auto__ = function(state_29125){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18915__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18915__auto____1.call(this,state_29125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18915__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18915__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto__,map__28971,map__28971__$1,opts,before_jsload,on_jsload,reload_dependents,map__28972,map__28972__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18937__auto__ = (function (){var statearr_29216 = f__18936__auto__.call(null);
(statearr_29216[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto__);

return statearr_29216;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto__,map__28971,map__28971__$1,opts,before_jsload,on_jsload,reload_dependents,map__28972,map__28972__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18935__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29279,link){
var map__29282 = p__29279;
var map__29282__$1 = ((((!((map__29282 == null)))?((((map__29282.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29282.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29282):map__29282);
var file = cljs.core.get.call(null,map__29282__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__29282,map__29282__$1,file){
return (function (p1__29277_SHARP_,p2__29278_SHARP_){
if(cljs.core._EQ_.call(null,p1__29277_SHARP_,p2__29278_SHARP_)){
return p1__29277_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__29282,map__29282__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29288){
var map__29289 = p__29288;
var map__29289__$1 = ((((!((map__29289 == null)))?((((map__29289.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29289.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29289):map__29289);
var match_length = cljs.core.get.call(null,map__29289__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29289__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29284_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29284_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args29291 = [];
var len__17877__auto___29294 = arguments.length;
var i__17878__auto___29295 = (0);
while(true){
if((i__17878__auto___29295 < len__17877__auto___29294)){
args29291.push((arguments[i__17878__auto___29295]));

var G__29296 = (i__17878__auto___29295 + (1));
i__17878__auto___29295 = G__29296;
continue;
} else {
}
break;
}

var G__29293 = args29291.length;
switch (G__29293) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29291.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29298_SHARP_,p2__29299_SHARP_){
return cljs.core.assoc.call(null,p1__29298_SHARP_,cljs.core.get.call(null,p2__29299_SHARP_,key),p2__29299_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29300){
var map__29303 = p__29300;
var map__29303__$1 = ((((!((map__29303 == null)))?((((map__29303.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29303.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29303):map__29303);
var f_data = map__29303__$1;
var file = cljs.core.get.call(null,map__29303__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29305,files_msg){
var map__29312 = p__29305;
var map__29312__$1 = ((((!((map__29312 == null)))?((((map__29312.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29312.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29312):map__29312);
var opts = map__29312__$1;
var on_cssload = cljs.core.get.call(null,map__29312__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29314_29318 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29315_29319 = null;
var count__29316_29320 = (0);
var i__29317_29321 = (0);
while(true){
if((i__29317_29321 < count__29316_29320)){
var f_29322 = cljs.core._nth.call(null,chunk__29315_29319,i__29317_29321);
figwheel.client.file_reloading.reload_css_file.call(null,f_29322);

var G__29323 = seq__29314_29318;
var G__29324 = chunk__29315_29319;
var G__29325 = count__29316_29320;
var G__29326 = (i__29317_29321 + (1));
seq__29314_29318 = G__29323;
chunk__29315_29319 = G__29324;
count__29316_29320 = G__29325;
i__29317_29321 = G__29326;
continue;
} else {
var temp__4425__auto___29327 = cljs.core.seq.call(null,seq__29314_29318);
if(temp__4425__auto___29327){
var seq__29314_29328__$1 = temp__4425__auto___29327;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29314_29328__$1)){
var c__17622__auto___29329 = cljs.core.chunk_first.call(null,seq__29314_29328__$1);
var G__29330 = cljs.core.chunk_rest.call(null,seq__29314_29328__$1);
var G__29331 = c__17622__auto___29329;
var G__29332 = cljs.core.count.call(null,c__17622__auto___29329);
var G__29333 = (0);
seq__29314_29318 = G__29330;
chunk__29315_29319 = G__29331;
count__29316_29320 = G__29332;
i__29317_29321 = G__29333;
continue;
} else {
var f_29334 = cljs.core.first.call(null,seq__29314_29328__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29334);

var G__29335 = cljs.core.next.call(null,seq__29314_29328__$1);
var G__29336 = null;
var G__29337 = (0);
var G__29338 = (0);
seq__29314_29318 = G__29335;
chunk__29315_29319 = G__29336;
count__29316_29320 = G__29337;
i__29317_29321 = G__29338;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__29312,map__29312__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__29312,map__29312__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1460338555812