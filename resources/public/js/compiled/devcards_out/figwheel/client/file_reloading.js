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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__24846_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__24846_SHARP_));
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
var seq__24851 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__24852 = null;
var count__24853 = (0);
var i__24854 = (0);
while(true){
if((i__24854 < count__24853)){
var n = cljs.core._nth.call(null,chunk__24852,i__24854);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24855 = seq__24851;
var G__24856 = chunk__24852;
var G__24857 = count__24853;
var G__24858 = (i__24854 + (1));
seq__24851 = G__24855;
chunk__24852 = G__24856;
count__24853 = G__24857;
i__24854 = G__24858;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24851);
if(temp__4425__auto__){
var seq__24851__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24851__$1)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,seq__24851__$1);
var G__24859 = cljs.core.chunk_rest.call(null,seq__24851__$1);
var G__24860 = c__17622__auto__;
var G__24861 = cljs.core.count.call(null,c__17622__auto__);
var G__24862 = (0);
seq__24851 = G__24859;
chunk__24852 = G__24860;
count__24853 = G__24861;
i__24854 = G__24862;
continue;
} else {
var n = cljs.core.first.call(null,seq__24851__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__24863 = cljs.core.next.call(null,seq__24851__$1);
var G__24864 = null;
var G__24865 = (0);
var G__24866 = (0);
seq__24851 = G__24863;
chunk__24852 = G__24864;
count__24853 = G__24865;
i__24854 = G__24866;
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

var seq__24905_24912 = cljs.core.seq.call(null,deps);
var chunk__24906_24913 = null;
var count__24907_24914 = (0);
var i__24908_24915 = (0);
while(true){
if((i__24908_24915 < count__24907_24914)){
var dep_24916 = cljs.core._nth.call(null,chunk__24906_24913,i__24908_24915);
topo_sort_helper_STAR_.call(null,dep_24916,(depth + (1)),state);

var G__24917 = seq__24905_24912;
var G__24918 = chunk__24906_24913;
var G__24919 = count__24907_24914;
var G__24920 = (i__24908_24915 + (1));
seq__24905_24912 = G__24917;
chunk__24906_24913 = G__24918;
count__24907_24914 = G__24919;
i__24908_24915 = G__24920;
continue;
} else {
var temp__4425__auto___24921 = cljs.core.seq.call(null,seq__24905_24912);
if(temp__4425__auto___24921){
var seq__24905_24922__$1 = temp__4425__auto___24921;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24905_24922__$1)){
var c__17622__auto___24923 = cljs.core.chunk_first.call(null,seq__24905_24922__$1);
var G__24924 = cljs.core.chunk_rest.call(null,seq__24905_24922__$1);
var G__24925 = c__17622__auto___24923;
var G__24926 = cljs.core.count.call(null,c__17622__auto___24923);
var G__24927 = (0);
seq__24905_24912 = G__24924;
chunk__24906_24913 = G__24925;
count__24907_24914 = G__24926;
i__24908_24915 = G__24927;
continue;
} else {
var dep_24928 = cljs.core.first.call(null,seq__24905_24922__$1);
topo_sort_helper_STAR_.call(null,dep_24928,(depth + (1)),state);

var G__24929 = cljs.core.next.call(null,seq__24905_24922__$1);
var G__24930 = null;
var G__24931 = (0);
var G__24932 = (0);
seq__24905_24912 = G__24929;
chunk__24906_24913 = G__24930;
count__24907_24914 = G__24931;
i__24908_24915 = G__24932;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__24909){
var vec__24911 = p__24909;
var x = cljs.core.nth.call(null,vec__24911,(0),null);
var xs = cljs.core.nthnext.call(null,vec__24911,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__24911,x,xs,get_deps__$1){
return (function (p1__24867_SHARP_){
return clojure.set.difference.call(null,p1__24867_SHARP_,x);
});})(vec__24911,x,xs,get_deps__$1))
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
var seq__24945 = cljs.core.seq.call(null,provides);
var chunk__24946 = null;
var count__24947 = (0);
var i__24948 = (0);
while(true){
if((i__24948 < count__24947)){
var prov = cljs.core._nth.call(null,chunk__24946,i__24948);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24949_24957 = cljs.core.seq.call(null,requires);
var chunk__24950_24958 = null;
var count__24951_24959 = (0);
var i__24952_24960 = (0);
while(true){
if((i__24952_24960 < count__24951_24959)){
var req_24961 = cljs.core._nth.call(null,chunk__24950_24958,i__24952_24960);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24961,prov);

var G__24962 = seq__24949_24957;
var G__24963 = chunk__24950_24958;
var G__24964 = count__24951_24959;
var G__24965 = (i__24952_24960 + (1));
seq__24949_24957 = G__24962;
chunk__24950_24958 = G__24963;
count__24951_24959 = G__24964;
i__24952_24960 = G__24965;
continue;
} else {
var temp__4425__auto___24966 = cljs.core.seq.call(null,seq__24949_24957);
if(temp__4425__auto___24966){
var seq__24949_24967__$1 = temp__4425__auto___24966;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24949_24967__$1)){
var c__17622__auto___24968 = cljs.core.chunk_first.call(null,seq__24949_24967__$1);
var G__24969 = cljs.core.chunk_rest.call(null,seq__24949_24967__$1);
var G__24970 = c__17622__auto___24968;
var G__24971 = cljs.core.count.call(null,c__17622__auto___24968);
var G__24972 = (0);
seq__24949_24957 = G__24969;
chunk__24950_24958 = G__24970;
count__24951_24959 = G__24971;
i__24952_24960 = G__24972;
continue;
} else {
var req_24973 = cljs.core.first.call(null,seq__24949_24967__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24973,prov);

var G__24974 = cljs.core.next.call(null,seq__24949_24967__$1);
var G__24975 = null;
var G__24976 = (0);
var G__24977 = (0);
seq__24949_24957 = G__24974;
chunk__24950_24958 = G__24975;
count__24951_24959 = G__24976;
i__24952_24960 = G__24977;
continue;
}
} else {
}
}
break;
}

var G__24978 = seq__24945;
var G__24979 = chunk__24946;
var G__24980 = count__24947;
var G__24981 = (i__24948 + (1));
seq__24945 = G__24978;
chunk__24946 = G__24979;
count__24947 = G__24980;
i__24948 = G__24981;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__24945);
if(temp__4425__auto__){
var seq__24945__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24945__$1)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,seq__24945__$1);
var G__24982 = cljs.core.chunk_rest.call(null,seq__24945__$1);
var G__24983 = c__17622__auto__;
var G__24984 = cljs.core.count.call(null,c__17622__auto__);
var G__24985 = (0);
seq__24945 = G__24982;
chunk__24946 = G__24983;
count__24947 = G__24984;
i__24948 = G__24985;
continue;
} else {
var prov = cljs.core.first.call(null,seq__24945__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__24953_24986 = cljs.core.seq.call(null,requires);
var chunk__24954_24987 = null;
var count__24955_24988 = (0);
var i__24956_24989 = (0);
while(true){
if((i__24956_24989 < count__24955_24988)){
var req_24990 = cljs.core._nth.call(null,chunk__24954_24987,i__24956_24989);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_24990,prov);

var G__24991 = seq__24953_24986;
var G__24992 = chunk__24954_24987;
var G__24993 = count__24955_24988;
var G__24994 = (i__24956_24989 + (1));
seq__24953_24986 = G__24991;
chunk__24954_24987 = G__24992;
count__24955_24988 = G__24993;
i__24956_24989 = G__24994;
continue;
} else {
var temp__4425__auto___24995__$1 = cljs.core.seq.call(null,seq__24953_24986);
if(temp__4425__auto___24995__$1){
var seq__24953_24996__$1 = temp__4425__auto___24995__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__24953_24996__$1)){
var c__17622__auto___24997 = cljs.core.chunk_first.call(null,seq__24953_24996__$1);
var G__24998 = cljs.core.chunk_rest.call(null,seq__24953_24996__$1);
var G__24999 = c__17622__auto___24997;
var G__25000 = cljs.core.count.call(null,c__17622__auto___24997);
var G__25001 = (0);
seq__24953_24986 = G__24998;
chunk__24954_24987 = G__24999;
count__24955_24988 = G__25000;
i__24956_24989 = G__25001;
continue;
} else {
var req_25002 = cljs.core.first.call(null,seq__24953_24996__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_25002,prov);

var G__25003 = cljs.core.next.call(null,seq__24953_24996__$1);
var G__25004 = null;
var G__25005 = (0);
var G__25006 = (0);
seq__24953_24986 = G__25003;
chunk__24954_24987 = G__25004;
count__24955_24988 = G__25005;
i__24956_24989 = G__25006;
continue;
}
} else {
}
}
break;
}

var G__25007 = cljs.core.next.call(null,seq__24945__$1);
var G__25008 = null;
var G__25009 = (0);
var G__25010 = (0);
seq__24945 = G__25007;
chunk__24946 = G__25008;
count__24947 = G__25009;
i__24948 = G__25010;
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
var seq__25015_25019 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__25016_25020 = null;
var count__25017_25021 = (0);
var i__25018_25022 = (0);
while(true){
if((i__25018_25022 < count__25017_25021)){
var ns_25023 = cljs.core._nth.call(null,chunk__25016_25020,i__25018_25022);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25023);

var G__25024 = seq__25015_25019;
var G__25025 = chunk__25016_25020;
var G__25026 = count__25017_25021;
var G__25027 = (i__25018_25022 + (1));
seq__25015_25019 = G__25024;
chunk__25016_25020 = G__25025;
count__25017_25021 = G__25026;
i__25018_25022 = G__25027;
continue;
} else {
var temp__4425__auto___25028 = cljs.core.seq.call(null,seq__25015_25019);
if(temp__4425__auto___25028){
var seq__25015_25029__$1 = temp__4425__auto___25028;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25015_25029__$1)){
var c__17622__auto___25030 = cljs.core.chunk_first.call(null,seq__25015_25029__$1);
var G__25031 = cljs.core.chunk_rest.call(null,seq__25015_25029__$1);
var G__25032 = c__17622__auto___25030;
var G__25033 = cljs.core.count.call(null,c__17622__auto___25030);
var G__25034 = (0);
seq__25015_25019 = G__25031;
chunk__25016_25020 = G__25032;
count__25017_25021 = G__25033;
i__25018_25022 = G__25034;
continue;
} else {
var ns_25035 = cljs.core.first.call(null,seq__25015_25029__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_25035);

var G__25036 = cljs.core.next.call(null,seq__25015_25029__$1);
var G__25037 = null;
var G__25038 = (0);
var G__25039 = (0);
seq__25015_25019 = G__25036;
chunk__25016_25020 = G__25037;
count__25017_25021 = G__25038;
i__25018_25022 = G__25039;
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
var G__25040__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__25040 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__25041__i = 0, G__25041__a = new Array(arguments.length -  0);
while (G__25041__i < G__25041__a.length) {G__25041__a[G__25041__i] = arguments[G__25041__i + 0]; ++G__25041__i;}
  args = new cljs.core.IndexedSeq(G__25041__a,0);
} 
return G__25040__delegate.call(this,args);};
G__25040.cljs$lang$maxFixedArity = 0;
G__25040.cljs$lang$applyTo = (function (arglist__25042){
var args = cljs.core.seq(arglist__25042);
return G__25040__delegate(args);
});
G__25040.cljs$core$IFn$_invoke$arity$variadic = G__25040__delegate;
return G__25040;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__25044 = cljs.core._EQ_;
var expr__25045 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__25044.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__25045))){
var path_parts = ((function (pred__25044,expr__25045){
return (function (p1__25043_SHARP_){
return clojure.string.split.call(null,p1__25043_SHARP_,/[\/\\]/);
});})(pred__25044,expr__25045))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__25044,expr__25045){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e25047){if((e25047 instanceof Error)){
var e = e25047;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e25047;

}
}})());
});
;})(path_parts,sep,root,pred__25044,expr__25045))
} else {
if(cljs.core.truth_(pred__25044.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__25045))){
return ((function (pred__25044,expr__25045){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__25044,expr__25045){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__25044,expr__25045))
);

return deferred.addErrback(((function (deferred,pred__25044,expr__25045){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__25044,expr__25045))
);
});
;})(pred__25044,expr__25045))
} else {
return ((function (pred__25044,expr__25045){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__25044,expr__25045))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__25048,callback){
var map__25051 = p__25048;
var map__25051__$1 = ((((!((map__25051 == null)))?((((map__25051.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25051.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25051):map__25051);
var file_msg = map__25051__$1;
var request_url = cljs.core.get.call(null,map__25051__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__25051,map__25051__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__25051,map__25051__$1,file_msg,request_url))
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
return (function (state_25075){
var state_val_25076 = (state_25075[(1)]);
if((state_val_25076 === (7))){
var inst_25071 = (state_25075[(2)]);
var state_25075__$1 = state_25075;
var statearr_25077_25097 = state_25075__$1;
(statearr_25077_25097[(2)] = inst_25071);

(statearr_25077_25097[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (1))){
var state_25075__$1 = state_25075;
var statearr_25078_25098 = state_25075__$1;
(statearr_25078_25098[(2)] = null);

(statearr_25078_25098[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (4))){
var inst_25055 = (state_25075[(7)]);
var inst_25055__$1 = (state_25075[(2)]);
var state_25075__$1 = (function (){var statearr_25079 = state_25075;
(statearr_25079[(7)] = inst_25055__$1);

return statearr_25079;
})();
if(cljs.core.truth_(inst_25055__$1)){
var statearr_25080_25099 = state_25075__$1;
(statearr_25080_25099[(1)] = (5));

} else {
var statearr_25081_25100 = state_25075__$1;
(statearr_25081_25100[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (6))){
var state_25075__$1 = state_25075;
var statearr_25082_25101 = state_25075__$1;
(statearr_25082_25101[(2)] = null);

(statearr_25082_25101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (3))){
var inst_25073 = (state_25075[(2)]);
var state_25075__$1 = state_25075;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25075__$1,inst_25073);
} else {
if((state_val_25076 === (2))){
var state_25075__$1 = state_25075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25075__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_25076 === (11))){
var inst_25067 = (state_25075[(2)]);
var state_25075__$1 = (function (){var statearr_25083 = state_25075;
(statearr_25083[(8)] = inst_25067);

return statearr_25083;
})();
var statearr_25084_25102 = state_25075__$1;
(statearr_25084_25102[(2)] = null);

(statearr_25084_25102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (9))){
var inst_25059 = (state_25075[(9)]);
var inst_25061 = (state_25075[(10)]);
var inst_25063 = inst_25061.call(null,inst_25059);
var state_25075__$1 = state_25075;
var statearr_25085_25103 = state_25075__$1;
(statearr_25085_25103[(2)] = inst_25063);

(statearr_25085_25103[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (5))){
var inst_25055 = (state_25075[(7)]);
var inst_25057 = figwheel.client.file_reloading.blocking_load.call(null,inst_25055);
var state_25075__$1 = state_25075;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25075__$1,(8),inst_25057);
} else {
if((state_val_25076 === (10))){
var inst_25059 = (state_25075[(9)]);
var inst_25065 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_25059);
var state_25075__$1 = state_25075;
var statearr_25086_25104 = state_25075__$1;
(statearr_25086_25104[(2)] = inst_25065);

(statearr_25086_25104[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25076 === (8))){
var inst_25055 = (state_25075[(7)]);
var inst_25061 = (state_25075[(10)]);
var inst_25059 = (state_25075[(2)]);
var inst_25060 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_25061__$1 = cljs.core.get.call(null,inst_25060,inst_25055);
var state_25075__$1 = (function (){var statearr_25087 = state_25075;
(statearr_25087[(9)] = inst_25059);

(statearr_25087[(10)] = inst_25061__$1);

return statearr_25087;
})();
if(cljs.core.truth_(inst_25061__$1)){
var statearr_25088_25105 = state_25075__$1;
(statearr_25088_25105[(1)] = (9));

} else {
var statearr_25089_25106 = state_25075__$1;
(statearr_25089_25106[(1)] = (10));

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
var statearr_25093 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25093[(0)] = figwheel$client$file_reloading$state_machine__18915__auto__);

(statearr_25093[(1)] = (1));

return statearr_25093;
});
var figwheel$client$file_reloading$state_machine__18915__auto____1 = (function (state_25075){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_25075);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e25094){if((e25094 instanceof Object)){
var ex__18918__auto__ = e25094;
var statearr_25095_25107 = state_25075;
(statearr_25095_25107[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25075);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25094;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25108 = state_25075;
state_25075 = G__25108;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__18915__auto__ = function(state_25075){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__18915__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__18915__auto____1.call(this,state_25075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__18915__auto____0;
figwheel$client$file_reloading$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__18915__auto____1;
return figwheel$client$file_reloading$state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto__))
})();
var state__18937__auto__ = (function (){var statearr_25096 = f__18936__auto__.call(null);
(statearr_25096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto__);

return statearr_25096;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__25109,callback){
var map__25112 = p__25109;
var map__25112__$1 = ((((!((map__25112 == null)))?((((map__25112.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25112.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25112):map__25112);
var file_msg = map__25112__$1;
var namespace = cljs.core.get.call(null,map__25112__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__25112,map__25112__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__25112,map__25112__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__25114){
var map__25117 = p__25114;
var map__25117__$1 = ((((!((map__25117 == null)))?((((map__25117.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25117.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25117):map__25117);
var file_msg = map__25117__$1;
var namespace = cljs.core.get.call(null,map__25117__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__25119,callback){
var map__25122 = p__25119;
var map__25122__$1 = ((((!((map__25122 == null)))?((((map__25122.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25122.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25122):map__25122);
var file_msg = map__25122__$1;
var request_url = cljs.core.get.call(null,map__25122__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__25122__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__18935__auto___25210 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___25210,out){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___25210,out){
return (function (state_25192){
var state_val_25193 = (state_25192[(1)]);
if((state_val_25193 === (1))){
var inst_25170 = cljs.core.nth.call(null,files,(0),null);
var inst_25171 = cljs.core.nthnext.call(null,files,(1));
var inst_25172 = files;
var state_25192__$1 = (function (){var statearr_25194 = state_25192;
(statearr_25194[(7)] = inst_25171);

(statearr_25194[(8)] = inst_25172);

(statearr_25194[(9)] = inst_25170);

return statearr_25194;
})();
var statearr_25195_25211 = state_25192__$1;
(statearr_25195_25211[(2)] = null);

(statearr_25195_25211[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25193 === (2))){
var inst_25175 = (state_25192[(10)]);
var inst_25172 = (state_25192[(8)]);
var inst_25175__$1 = cljs.core.nth.call(null,inst_25172,(0),null);
var inst_25176 = cljs.core.nthnext.call(null,inst_25172,(1));
var inst_25177 = (inst_25175__$1 == null);
var inst_25178 = cljs.core.not.call(null,inst_25177);
var state_25192__$1 = (function (){var statearr_25196 = state_25192;
(statearr_25196[(10)] = inst_25175__$1);

(statearr_25196[(11)] = inst_25176);

return statearr_25196;
})();
if(inst_25178){
var statearr_25197_25212 = state_25192__$1;
(statearr_25197_25212[(1)] = (4));

} else {
var statearr_25198_25213 = state_25192__$1;
(statearr_25198_25213[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25193 === (3))){
var inst_25190 = (state_25192[(2)]);
var state_25192__$1 = state_25192;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25192__$1,inst_25190);
} else {
if((state_val_25193 === (4))){
var inst_25175 = (state_25192[(10)]);
var inst_25180 = figwheel.client.file_reloading.reload_js_file.call(null,inst_25175);
var state_25192__$1 = state_25192;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25192__$1,(7),inst_25180);
} else {
if((state_val_25193 === (5))){
var inst_25186 = cljs.core.async.close_BANG_.call(null,out);
var state_25192__$1 = state_25192;
var statearr_25199_25214 = state_25192__$1;
(statearr_25199_25214[(2)] = inst_25186);

(statearr_25199_25214[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25193 === (6))){
var inst_25188 = (state_25192[(2)]);
var state_25192__$1 = state_25192;
var statearr_25200_25215 = state_25192__$1;
(statearr_25200_25215[(2)] = inst_25188);

(statearr_25200_25215[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25193 === (7))){
var inst_25176 = (state_25192[(11)]);
var inst_25182 = (state_25192[(2)]);
var inst_25183 = cljs.core.async.put_BANG_.call(null,out,inst_25182);
var inst_25172 = inst_25176;
var state_25192__$1 = (function (){var statearr_25201 = state_25192;
(statearr_25201[(8)] = inst_25172);

(statearr_25201[(12)] = inst_25183);

return statearr_25201;
})();
var statearr_25202_25216 = state_25192__$1;
(statearr_25202_25216[(2)] = null);

(statearr_25202_25216[(1)] = (2));


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
});})(c__18935__auto___25210,out))
;
return ((function (switch__18914__auto__,c__18935__auto___25210,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18915__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18915__auto____0 = (function (){
var statearr_25206 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25206[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18915__auto__);

(statearr_25206[(1)] = (1));

return statearr_25206;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__18915__auto____1 = (function (state_25192){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_25192);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e25207){if((e25207 instanceof Object)){
var ex__18918__auto__ = e25207;
var statearr_25208_25217 = state_25192;
(statearr_25208_25217[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25192);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25207;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25218 = state_25192;
state_25192 = G__25218;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18915__auto__ = function(state_25192){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18915__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18915__auto____1.call(this,state_25192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18915__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__18915__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___25210,out))
})();
var state__18937__auto__ = (function (){var statearr_25209 = f__18936__auto__.call(null);
(statearr_25209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___25210);

return statearr_25209;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___25210,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__25219,opts){
var map__25223 = p__25219;
var map__25223__$1 = ((((!((map__25223 == null)))?((((map__25223.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25223.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25223):map__25223);
var eval_body__$1 = cljs.core.get.call(null,map__25223__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__25223__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e25225){var e = e25225;
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
return (function (p1__25226_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25226_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__25231){
var vec__25232 = p__25231;
var k = cljs.core.nth.call(null,vec__25232,(0),null);
var v = cljs.core.nth.call(null,vec__25232,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__25233){
var vec__25234 = p__25233;
var k = cljs.core.nth.call(null,vec__25234,(0),null);
var v = cljs.core.nth.call(null,vec__25234,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__25238,p__25239){
var map__25486 = p__25238;
var map__25486__$1 = ((((!((map__25486 == null)))?((((map__25486.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25486.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25486):map__25486);
var opts = map__25486__$1;
var before_jsload = cljs.core.get.call(null,map__25486__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__25486__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__25486__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__25487 = p__25239;
var map__25487__$1 = ((((!((map__25487 == null)))?((((map__25487.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25487.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25487):map__25487);
var msg = map__25487__$1;
var files = cljs.core.get.call(null,map__25487__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__25487__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__25487__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__18935__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto__,map__25486,map__25486__$1,opts,before_jsload,on_jsload,reload_dependents,map__25487,map__25487__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto__,map__25486,map__25486__$1,opts,before_jsload,on_jsload,reload_dependents,map__25487,map__25487__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_25640){
var state_val_25641 = (state_25640[(1)]);
if((state_val_25641 === (7))){
var inst_25502 = (state_25640[(7)]);
var inst_25503 = (state_25640[(8)]);
var inst_25501 = (state_25640[(9)]);
var inst_25504 = (state_25640[(10)]);
var inst_25509 = cljs.core._nth.call(null,inst_25502,inst_25504);
var inst_25510 = figwheel.client.file_reloading.eval_body.call(null,inst_25509,opts);
var inst_25511 = (inst_25504 + (1));
var tmp25642 = inst_25502;
var tmp25643 = inst_25503;
var tmp25644 = inst_25501;
var inst_25501__$1 = tmp25644;
var inst_25502__$1 = tmp25642;
var inst_25503__$1 = tmp25643;
var inst_25504__$1 = inst_25511;
var state_25640__$1 = (function (){var statearr_25645 = state_25640;
(statearr_25645[(7)] = inst_25502__$1);

(statearr_25645[(8)] = inst_25503__$1);

(statearr_25645[(11)] = inst_25510);

(statearr_25645[(9)] = inst_25501__$1);

(statearr_25645[(10)] = inst_25504__$1);

return statearr_25645;
})();
var statearr_25646_25732 = state_25640__$1;
(statearr_25646_25732[(2)] = null);

(statearr_25646_25732[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (20))){
var inst_25544 = (state_25640[(12)]);
var inst_25552 = figwheel.client.file_reloading.sort_files.call(null,inst_25544);
var state_25640__$1 = state_25640;
var statearr_25647_25733 = state_25640__$1;
(statearr_25647_25733[(2)] = inst_25552);

(statearr_25647_25733[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (27))){
var state_25640__$1 = state_25640;
var statearr_25648_25734 = state_25640__$1;
(statearr_25648_25734[(2)] = null);

(statearr_25648_25734[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (1))){
var inst_25493 = (state_25640[(13)]);
var inst_25490 = before_jsload.call(null,files);
var inst_25491 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_25492 = (function (){return ((function (inst_25493,inst_25490,inst_25491,state_val_25641,c__18935__auto__,map__25486,map__25486__$1,opts,before_jsload,on_jsload,reload_dependents,map__25487,map__25487__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25235_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25235_SHARP_);
});
;})(inst_25493,inst_25490,inst_25491,state_val_25641,c__18935__auto__,map__25486,map__25486__$1,opts,before_jsload,on_jsload,reload_dependents,map__25487,map__25487__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25493__$1 = cljs.core.filter.call(null,inst_25492,files);
var inst_25494 = cljs.core.not_empty.call(null,inst_25493__$1);
var state_25640__$1 = (function (){var statearr_25649 = state_25640;
(statearr_25649[(13)] = inst_25493__$1);

(statearr_25649[(14)] = inst_25491);

(statearr_25649[(15)] = inst_25490);

return statearr_25649;
})();
if(cljs.core.truth_(inst_25494)){
var statearr_25650_25735 = state_25640__$1;
(statearr_25650_25735[(1)] = (2));

} else {
var statearr_25651_25736 = state_25640__$1;
(statearr_25651_25736[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (24))){
var state_25640__$1 = state_25640;
var statearr_25652_25737 = state_25640__$1;
(statearr_25652_25737[(2)] = null);

(statearr_25652_25737[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (39))){
var inst_25594 = (state_25640[(16)]);
var state_25640__$1 = state_25640;
var statearr_25653_25738 = state_25640__$1;
(statearr_25653_25738[(2)] = inst_25594);

(statearr_25653_25738[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (46))){
var inst_25635 = (state_25640[(2)]);
var state_25640__$1 = state_25640;
var statearr_25654_25739 = state_25640__$1;
(statearr_25654_25739[(2)] = inst_25635);

(statearr_25654_25739[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (4))){
var inst_25538 = (state_25640[(2)]);
var inst_25539 = cljs.core.List.EMPTY;
var inst_25540 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_25539);
var inst_25541 = (function (){return ((function (inst_25538,inst_25539,inst_25540,state_val_25641,c__18935__auto__,map__25486,map__25486__$1,opts,before_jsload,on_jsload,reload_dependents,map__25487,map__25487__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25236_SHARP_){
var and__16807__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__25236_SHARP_);
if(cljs.core.truth_(and__16807__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__25236_SHARP_));
} else {
return and__16807__auto__;
}
});
;})(inst_25538,inst_25539,inst_25540,state_val_25641,c__18935__auto__,map__25486,map__25486__$1,opts,before_jsload,on_jsload,reload_dependents,map__25487,map__25487__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25542 = cljs.core.filter.call(null,inst_25541,files);
var inst_25543 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_25544 = cljs.core.concat.call(null,inst_25542,inst_25543);
var state_25640__$1 = (function (){var statearr_25655 = state_25640;
(statearr_25655[(12)] = inst_25544);

(statearr_25655[(17)] = inst_25538);

(statearr_25655[(18)] = inst_25540);

return statearr_25655;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_25656_25740 = state_25640__$1;
(statearr_25656_25740[(1)] = (16));

} else {
var statearr_25657_25741 = state_25640__$1;
(statearr_25657_25741[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (15))){
var inst_25528 = (state_25640[(2)]);
var state_25640__$1 = state_25640;
var statearr_25658_25742 = state_25640__$1;
(statearr_25658_25742[(2)] = inst_25528);

(statearr_25658_25742[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (21))){
var inst_25554 = (state_25640[(19)]);
var inst_25554__$1 = (state_25640[(2)]);
var inst_25555 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_25554__$1);
var state_25640__$1 = (function (){var statearr_25659 = state_25640;
(statearr_25659[(19)] = inst_25554__$1);

return statearr_25659;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25640__$1,(22),inst_25555);
} else {
if((state_val_25641 === (31))){
var inst_25638 = (state_25640[(2)]);
var state_25640__$1 = state_25640;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25640__$1,inst_25638);
} else {
if((state_val_25641 === (32))){
var inst_25594 = (state_25640[(16)]);
var inst_25599 = inst_25594.cljs$lang$protocol_mask$partition0$;
var inst_25600 = (inst_25599 & (64));
var inst_25601 = inst_25594.cljs$core$ISeq$;
var inst_25602 = (inst_25600) || (inst_25601);
var state_25640__$1 = state_25640;
if(cljs.core.truth_(inst_25602)){
var statearr_25660_25743 = state_25640__$1;
(statearr_25660_25743[(1)] = (35));

} else {
var statearr_25661_25744 = state_25640__$1;
(statearr_25661_25744[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (40))){
var inst_25615 = (state_25640[(20)]);
var inst_25614 = (state_25640[(2)]);
var inst_25615__$1 = cljs.core.get.call(null,inst_25614,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_25616 = cljs.core.get.call(null,inst_25614,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_25617 = cljs.core.not_empty.call(null,inst_25615__$1);
var state_25640__$1 = (function (){var statearr_25662 = state_25640;
(statearr_25662[(21)] = inst_25616);

(statearr_25662[(20)] = inst_25615__$1);

return statearr_25662;
})();
if(cljs.core.truth_(inst_25617)){
var statearr_25663_25745 = state_25640__$1;
(statearr_25663_25745[(1)] = (41));

} else {
var statearr_25664_25746 = state_25640__$1;
(statearr_25664_25746[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (33))){
var state_25640__$1 = state_25640;
var statearr_25665_25747 = state_25640__$1;
(statearr_25665_25747[(2)] = false);

(statearr_25665_25747[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (13))){
var inst_25514 = (state_25640[(22)]);
var inst_25518 = cljs.core.chunk_first.call(null,inst_25514);
var inst_25519 = cljs.core.chunk_rest.call(null,inst_25514);
var inst_25520 = cljs.core.count.call(null,inst_25518);
var inst_25501 = inst_25519;
var inst_25502 = inst_25518;
var inst_25503 = inst_25520;
var inst_25504 = (0);
var state_25640__$1 = (function (){var statearr_25666 = state_25640;
(statearr_25666[(7)] = inst_25502);

(statearr_25666[(8)] = inst_25503);

(statearr_25666[(9)] = inst_25501);

(statearr_25666[(10)] = inst_25504);

return statearr_25666;
})();
var statearr_25667_25748 = state_25640__$1;
(statearr_25667_25748[(2)] = null);

(statearr_25667_25748[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (22))){
var inst_25562 = (state_25640[(23)]);
var inst_25558 = (state_25640[(24)]);
var inst_25557 = (state_25640[(25)]);
var inst_25554 = (state_25640[(19)]);
var inst_25557__$1 = (state_25640[(2)]);
var inst_25558__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25557__$1);
var inst_25559 = (function (){var all_files = inst_25554;
var res_SINGLEQUOTE_ = inst_25557__$1;
var res = inst_25558__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_25562,inst_25558,inst_25557,inst_25554,inst_25557__$1,inst_25558__$1,state_val_25641,c__18935__auto__,map__25486,map__25486__$1,opts,before_jsload,on_jsload,reload_dependents,map__25487,map__25487__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__25237_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__25237_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_25562,inst_25558,inst_25557,inst_25554,inst_25557__$1,inst_25558__$1,state_val_25641,c__18935__auto__,map__25486,map__25486__$1,opts,before_jsload,on_jsload,reload_dependents,map__25487,map__25487__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25560 = cljs.core.filter.call(null,inst_25559,inst_25557__$1);
var inst_25561 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_25562__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_25561);
var inst_25563 = cljs.core.not_empty.call(null,inst_25562__$1);
var state_25640__$1 = (function (){var statearr_25668 = state_25640;
(statearr_25668[(23)] = inst_25562__$1);

(statearr_25668[(24)] = inst_25558__$1);

(statearr_25668[(25)] = inst_25557__$1);

(statearr_25668[(26)] = inst_25560);

return statearr_25668;
})();
if(cljs.core.truth_(inst_25563)){
var statearr_25669_25749 = state_25640__$1;
(statearr_25669_25749[(1)] = (23));

} else {
var statearr_25670_25750 = state_25640__$1;
(statearr_25670_25750[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (36))){
var state_25640__$1 = state_25640;
var statearr_25671_25751 = state_25640__$1;
(statearr_25671_25751[(2)] = false);

(statearr_25671_25751[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (41))){
var inst_25615 = (state_25640[(20)]);
var inst_25619 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_25620 = cljs.core.map.call(null,inst_25619,inst_25615);
var inst_25621 = cljs.core.pr_str.call(null,inst_25620);
var inst_25622 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_25621)].join('');
var inst_25623 = figwheel.client.utils.log.call(null,inst_25622);
var state_25640__$1 = state_25640;
var statearr_25672_25752 = state_25640__$1;
(statearr_25672_25752[(2)] = inst_25623);

(statearr_25672_25752[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (43))){
var inst_25616 = (state_25640[(21)]);
var inst_25626 = (state_25640[(2)]);
var inst_25627 = cljs.core.not_empty.call(null,inst_25616);
var state_25640__$1 = (function (){var statearr_25673 = state_25640;
(statearr_25673[(27)] = inst_25626);

return statearr_25673;
})();
if(cljs.core.truth_(inst_25627)){
var statearr_25674_25753 = state_25640__$1;
(statearr_25674_25753[(1)] = (44));

} else {
var statearr_25675_25754 = state_25640__$1;
(statearr_25675_25754[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (29))){
var inst_25594 = (state_25640[(16)]);
var inst_25562 = (state_25640[(23)]);
var inst_25558 = (state_25640[(24)]);
var inst_25557 = (state_25640[(25)]);
var inst_25554 = (state_25640[(19)]);
var inst_25560 = (state_25640[(26)]);
var inst_25590 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_25593 = (function (){var all_files = inst_25554;
var res_SINGLEQUOTE_ = inst_25557;
var res = inst_25558;
var files_not_loaded = inst_25560;
var dependencies_that_loaded = inst_25562;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25594,inst_25562,inst_25558,inst_25557,inst_25554,inst_25560,inst_25590,state_val_25641,c__18935__auto__,map__25486,map__25486__$1,opts,before_jsload,on_jsload,reload_dependents,map__25487,map__25487__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25592){
var map__25676 = p__25592;
var map__25676__$1 = ((((!((map__25676 == null)))?((((map__25676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25676):map__25676);
var namespace = cljs.core.get.call(null,map__25676__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25594,inst_25562,inst_25558,inst_25557,inst_25554,inst_25560,inst_25590,state_val_25641,c__18935__auto__,map__25486,map__25486__$1,opts,before_jsload,on_jsload,reload_dependents,map__25487,map__25487__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25594__$1 = cljs.core.group_by.call(null,inst_25593,inst_25560);
var inst_25596 = (inst_25594__$1 == null);
var inst_25597 = cljs.core.not.call(null,inst_25596);
var state_25640__$1 = (function (){var statearr_25678 = state_25640;
(statearr_25678[(16)] = inst_25594__$1);

(statearr_25678[(28)] = inst_25590);

return statearr_25678;
})();
if(inst_25597){
var statearr_25679_25755 = state_25640__$1;
(statearr_25679_25755[(1)] = (32));

} else {
var statearr_25680_25756 = state_25640__$1;
(statearr_25680_25756[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (44))){
var inst_25616 = (state_25640[(21)]);
var inst_25629 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_25616);
var inst_25630 = cljs.core.pr_str.call(null,inst_25629);
var inst_25631 = [cljs.core.str("not required: "),cljs.core.str(inst_25630)].join('');
var inst_25632 = figwheel.client.utils.log.call(null,inst_25631);
var state_25640__$1 = state_25640;
var statearr_25681_25757 = state_25640__$1;
(statearr_25681_25757[(2)] = inst_25632);

(statearr_25681_25757[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (6))){
var inst_25535 = (state_25640[(2)]);
var state_25640__$1 = state_25640;
var statearr_25682_25758 = state_25640__$1;
(statearr_25682_25758[(2)] = inst_25535);

(statearr_25682_25758[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (28))){
var inst_25560 = (state_25640[(26)]);
var inst_25587 = (state_25640[(2)]);
var inst_25588 = cljs.core.not_empty.call(null,inst_25560);
var state_25640__$1 = (function (){var statearr_25683 = state_25640;
(statearr_25683[(29)] = inst_25587);

return statearr_25683;
})();
if(cljs.core.truth_(inst_25588)){
var statearr_25684_25759 = state_25640__$1;
(statearr_25684_25759[(1)] = (29));

} else {
var statearr_25685_25760 = state_25640__$1;
(statearr_25685_25760[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (25))){
var inst_25558 = (state_25640[(24)]);
var inst_25574 = (state_25640[(2)]);
var inst_25575 = cljs.core.not_empty.call(null,inst_25558);
var state_25640__$1 = (function (){var statearr_25686 = state_25640;
(statearr_25686[(30)] = inst_25574);

return statearr_25686;
})();
if(cljs.core.truth_(inst_25575)){
var statearr_25687_25761 = state_25640__$1;
(statearr_25687_25761[(1)] = (26));

} else {
var statearr_25688_25762 = state_25640__$1;
(statearr_25688_25762[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (34))){
var inst_25609 = (state_25640[(2)]);
var state_25640__$1 = state_25640;
if(cljs.core.truth_(inst_25609)){
var statearr_25689_25763 = state_25640__$1;
(statearr_25689_25763[(1)] = (38));

} else {
var statearr_25690_25764 = state_25640__$1;
(statearr_25690_25764[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (17))){
var state_25640__$1 = state_25640;
var statearr_25691_25765 = state_25640__$1;
(statearr_25691_25765[(2)] = recompile_dependents);

(statearr_25691_25765[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (3))){
var state_25640__$1 = state_25640;
var statearr_25692_25766 = state_25640__$1;
(statearr_25692_25766[(2)] = null);

(statearr_25692_25766[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (12))){
var inst_25531 = (state_25640[(2)]);
var state_25640__$1 = state_25640;
var statearr_25693_25767 = state_25640__$1;
(statearr_25693_25767[(2)] = inst_25531);

(statearr_25693_25767[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (2))){
var inst_25493 = (state_25640[(13)]);
var inst_25500 = cljs.core.seq.call(null,inst_25493);
var inst_25501 = inst_25500;
var inst_25502 = null;
var inst_25503 = (0);
var inst_25504 = (0);
var state_25640__$1 = (function (){var statearr_25694 = state_25640;
(statearr_25694[(7)] = inst_25502);

(statearr_25694[(8)] = inst_25503);

(statearr_25694[(9)] = inst_25501);

(statearr_25694[(10)] = inst_25504);

return statearr_25694;
})();
var statearr_25695_25768 = state_25640__$1;
(statearr_25695_25768[(2)] = null);

(statearr_25695_25768[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (23))){
var inst_25562 = (state_25640[(23)]);
var inst_25558 = (state_25640[(24)]);
var inst_25557 = (state_25640[(25)]);
var inst_25554 = (state_25640[(19)]);
var inst_25560 = (state_25640[(26)]);
var inst_25565 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_25567 = (function (){var all_files = inst_25554;
var res_SINGLEQUOTE_ = inst_25557;
var res = inst_25558;
var files_not_loaded = inst_25560;
var dependencies_that_loaded = inst_25562;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25562,inst_25558,inst_25557,inst_25554,inst_25560,inst_25565,state_val_25641,c__18935__auto__,map__25486,map__25486__$1,opts,before_jsload,on_jsload,reload_dependents,map__25487,map__25487__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25566){
var map__25696 = p__25566;
var map__25696__$1 = ((((!((map__25696 == null)))?((((map__25696.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25696.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25696):map__25696);
var request_url = cljs.core.get.call(null,map__25696__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25562,inst_25558,inst_25557,inst_25554,inst_25560,inst_25565,state_val_25641,c__18935__auto__,map__25486,map__25486__$1,opts,before_jsload,on_jsload,reload_dependents,map__25487,map__25487__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25568 = cljs.core.reverse.call(null,inst_25562);
var inst_25569 = cljs.core.map.call(null,inst_25567,inst_25568);
var inst_25570 = cljs.core.pr_str.call(null,inst_25569);
var inst_25571 = figwheel.client.utils.log.call(null,inst_25570);
var state_25640__$1 = (function (){var statearr_25698 = state_25640;
(statearr_25698[(31)] = inst_25565);

return statearr_25698;
})();
var statearr_25699_25769 = state_25640__$1;
(statearr_25699_25769[(2)] = inst_25571);

(statearr_25699_25769[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (35))){
var state_25640__$1 = state_25640;
var statearr_25700_25770 = state_25640__$1;
(statearr_25700_25770[(2)] = true);

(statearr_25700_25770[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (19))){
var inst_25544 = (state_25640[(12)]);
var inst_25550 = figwheel.client.file_reloading.expand_files.call(null,inst_25544);
var state_25640__$1 = state_25640;
var statearr_25701_25771 = state_25640__$1;
(statearr_25701_25771[(2)] = inst_25550);

(statearr_25701_25771[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (11))){
var state_25640__$1 = state_25640;
var statearr_25702_25772 = state_25640__$1;
(statearr_25702_25772[(2)] = null);

(statearr_25702_25772[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (9))){
var inst_25533 = (state_25640[(2)]);
var state_25640__$1 = state_25640;
var statearr_25703_25773 = state_25640__$1;
(statearr_25703_25773[(2)] = inst_25533);

(statearr_25703_25773[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (5))){
var inst_25503 = (state_25640[(8)]);
var inst_25504 = (state_25640[(10)]);
var inst_25506 = (inst_25504 < inst_25503);
var inst_25507 = inst_25506;
var state_25640__$1 = state_25640;
if(cljs.core.truth_(inst_25507)){
var statearr_25704_25774 = state_25640__$1;
(statearr_25704_25774[(1)] = (7));

} else {
var statearr_25705_25775 = state_25640__$1;
(statearr_25705_25775[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (14))){
var inst_25514 = (state_25640[(22)]);
var inst_25523 = cljs.core.first.call(null,inst_25514);
var inst_25524 = figwheel.client.file_reloading.eval_body.call(null,inst_25523,opts);
var inst_25525 = cljs.core.next.call(null,inst_25514);
var inst_25501 = inst_25525;
var inst_25502 = null;
var inst_25503 = (0);
var inst_25504 = (0);
var state_25640__$1 = (function (){var statearr_25706 = state_25640;
(statearr_25706[(7)] = inst_25502);

(statearr_25706[(8)] = inst_25503);

(statearr_25706[(32)] = inst_25524);

(statearr_25706[(9)] = inst_25501);

(statearr_25706[(10)] = inst_25504);

return statearr_25706;
})();
var statearr_25707_25776 = state_25640__$1;
(statearr_25707_25776[(2)] = null);

(statearr_25707_25776[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (45))){
var state_25640__$1 = state_25640;
var statearr_25708_25777 = state_25640__$1;
(statearr_25708_25777[(2)] = null);

(statearr_25708_25777[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (26))){
var inst_25562 = (state_25640[(23)]);
var inst_25558 = (state_25640[(24)]);
var inst_25557 = (state_25640[(25)]);
var inst_25554 = (state_25640[(19)]);
var inst_25560 = (state_25640[(26)]);
var inst_25577 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_25579 = (function (){var all_files = inst_25554;
var res_SINGLEQUOTE_ = inst_25557;
var res = inst_25558;
var files_not_loaded = inst_25560;
var dependencies_that_loaded = inst_25562;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25562,inst_25558,inst_25557,inst_25554,inst_25560,inst_25577,state_val_25641,c__18935__auto__,map__25486,map__25486__$1,opts,before_jsload,on_jsload,reload_dependents,map__25487,map__25487__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__25578){
var map__25709 = p__25578;
var map__25709__$1 = ((((!((map__25709 == null)))?((((map__25709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25709):map__25709);
var namespace = cljs.core.get.call(null,map__25709__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__25709__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25562,inst_25558,inst_25557,inst_25554,inst_25560,inst_25577,state_val_25641,c__18935__auto__,map__25486,map__25486__$1,opts,before_jsload,on_jsload,reload_dependents,map__25487,map__25487__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25580 = cljs.core.map.call(null,inst_25579,inst_25558);
var inst_25581 = cljs.core.pr_str.call(null,inst_25580);
var inst_25582 = figwheel.client.utils.log.call(null,inst_25581);
var inst_25583 = (function (){var all_files = inst_25554;
var res_SINGLEQUOTE_ = inst_25557;
var res = inst_25558;
var files_not_loaded = inst_25560;
var dependencies_that_loaded = inst_25562;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25562,inst_25558,inst_25557,inst_25554,inst_25560,inst_25577,inst_25579,inst_25580,inst_25581,inst_25582,state_val_25641,c__18935__auto__,map__25486,map__25486__$1,opts,before_jsload,on_jsload,reload_dependents,map__25487,map__25487__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_25562,inst_25558,inst_25557,inst_25554,inst_25560,inst_25577,inst_25579,inst_25580,inst_25581,inst_25582,state_val_25641,c__18935__auto__,map__25486,map__25486__$1,opts,before_jsload,on_jsload,reload_dependents,map__25487,map__25487__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_25584 = setTimeout(inst_25583,(10));
var state_25640__$1 = (function (){var statearr_25711 = state_25640;
(statearr_25711[(33)] = inst_25577);

(statearr_25711[(34)] = inst_25582);

return statearr_25711;
})();
var statearr_25712_25778 = state_25640__$1;
(statearr_25712_25778[(2)] = inst_25584);

(statearr_25712_25778[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (16))){
var state_25640__$1 = state_25640;
var statearr_25713_25779 = state_25640__$1;
(statearr_25713_25779[(2)] = reload_dependents);

(statearr_25713_25779[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (38))){
var inst_25594 = (state_25640[(16)]);
var inst_25611 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25594);
var state_25640__$1 = state_25640;
var statearr_25714_25780 = state_25640__$1;
(statearr_25714_25780[(2)] = inst_25611);

(statearr_25714_25780[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (30))){
var state_25640__$1 = state_25640;
var statearr_25715_25781 = state_25640__$1;
(statearr_25715_25781[(2)] = null);

(statearr_25715_25781[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (10))){
var inst_25514 = (state_25640[(22)]);
var inst_25516 = cljs.core.chunked_seq_QMARK_.call(null,inst_25514);
var state_25640__$1 = state_25640;
if(inst_25516){
var statearr_25716_25782 = state_25640__$1;
(statearr_25716_25782[(1)] = (13));

} else {
var statearr_25717_25783 = state_25640__$1;
(statearr_25717_25783[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (18))){
var inst_25548 = (state_25640[(2)]);
var state_25640__$1 = state_25640;
if(cljs.core.truth_(inst_25548)){
var statearr_25718_25784 = state_25640__$1;
(statearr_25718_25784[(1)] = (19));

} else {
var statearr_25719_25785 = state_25640__$1;
(statearr_25719_25785[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (42))){
var state_25640__$1 = state_25640;
var statearr_25720_25786 = state_25640__$1;
(statearr_25720_25786[(2)] = null);

(statearr_25720_25786[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (37))){
var inst_25606 = (state_25640[(2)]);
var state_25640__$1 = state_25640;
var statearr_25721_25787 = state_25640__$1;
(statearr_25721_25787[(2)] = inst_25606);

(statearr_25721_25787[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25641 === (8))){
var inst_25514 = (state_25640[(22)]);
var inst_25501 = (state_25640[(9)]);
var inst_25514__$1 = cljs.core.seq.call(null,inst_25501);
var state_25640__$1 = (function (){var statearr_25722 = state_25640;
(statearr_25722[(22)] = inst_25514__$1);

return statearr_25722;
})();
if(inst_25514__$1){
var statearr_25723_25788 = state_25640__$1;
(statearr_25723_25788[(1)] = (10));

} else {
var statearr_25724_25789 = state_25640__$1;
(statearr_25724_25789[(1)] = (11));

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
});})(c__18935__auto__,map__25486,map__25486__$1,opts,before_jsload,on_jsload,reload_dependents,map__25487,map__25487__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__18914__auto__,c__18935__auto__,map__25486,map__25486__$1,opts,before_jsload,on_jsload,reload_dependents,map__25487,map__25487__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18915__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18915__auto____0 = (function (){
var statearr_25728 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25728[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__18915__auto__);

(statearr_25728[(1)] = (1));

return statearr_25728;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__18915__auto____1 = (function (state_25640){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_25640);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e25729){if((e25729 instanceof Object)){
var ex__18918__auto__ = e25729;
var statearr_25730_25790 = state_25640;
(statearr_25730_25790[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25640);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25729;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25791 = state_25640;
state_25640 = G__25791;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__18915__auto__ = function(state_25640){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18915__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18915__auto____1.call(this,state_25640);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18915__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__18915__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto__,map__25486,map__25486__$1,opts,before_jsload,on_jsload,reload_dependents,map__25487,map__25487__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__18937__auto__ = (function (){var statearr_25731 = f__18936__auto__.call(null);
(statearr_25731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto__);

return statearr_25731;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto__,map__25486,map__25486__$1,opts,before_jsload,on_jsload,reload_dependents,map__25487,map__25487__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__18935__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__25794,link){
var map__25797 = p__25794;
var map__25797__$1 = ((((!((map__25797 == null)))?((((map__25797.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25797.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25797):map__25797);
var file = cljs.core.get.call(null,map__25797__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__25797,map__25797__$1,file){
return (function (p1__25792_SHARP_,p2__25793_SHARP_){
if(cljs.core._EQ_.call(null,p1__25792_SHARP_,p2__25793_SHARP_)){
return p1__25792_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__25797,map__25797__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__25803){
var map__25804 = p__25803;
var map__25804__$1 = ((((!((map__25804 == null)))?((((map__25804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25804):map__25804);
var match_length = cljs.core.get.call(null,map__25804__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__25804__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__25799_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__25799_SHARP_);
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
var args25806 = [];
var len__17877__auto___25809 = arguments.length;
var i__17878__auto___25810 = (0);
while(true){
if((i__17878__auto___25810 < len__17877__auto___25809)){
args25806.push((arguments[i__17878__auto___25810]));

var G__25811 = (i__17878__auto___25810 + (1));
i__17878__auto___25810 = G__25811;
continue;
} else {
}
break;
}

var G__25808 = args25806.length;
switch (G__25808) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25806.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__25813_SHARP_,p2__25814_SHARP_){
return cljs.core.assoc.call(null,p1__25813_SHARP_,cljs.core.get.call(null,p2__25814_SHARP_,key),p2__25814_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__25815){
var map__25818 = p__25815;
var map__25818__$1 = ((((!((map__25818 == null)))?((((map__25818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25818):map__25818);
var f_data = map__25818__$1;
var file = cljs.core.get.call(null,map__25818__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__25820,files_msg){
var map__25827 = p__25820;
var map__25827__$1 = ((((!((map__25827 == null)))?((((map__25827.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25827.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25827):map__25827);
var opts = map__25827__$1;
var on_cssload = cljs.core.get.call(null,map__25827__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__25829_25833 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__25830_25834 = null;
var count__25831_25835 = (0);
var i__25832_25836 = (0);
while(true){
if((i__25832_25836 < count__25831_25835)){
var f_25837 = cljs.core._nth.call(null,chunk__25830_25834,i__25832_25836);
figwheel.client.file_reloading.reload_css_file.call(null,f_25837);

var G__25838 = seq__25829_25833;
var G__25839 = chunk__25830_25834;
var G__25840 = count__25831_25835;
var G__25841 = (i__25832_25836 + (1));
seq__25829_25833 = G__25838;
chunk__25830_25834 = G__25839;
count__25831_25835 = G__25840;
i__25832_25836 = G__25841;
continue;
} else {
var temp__4425__auto___25842 = cljs.core.seq.call(null,seq__25829_25833);
if(temp__4425__auto___25842){
var seq__25829_25843__$1 = temp__4425__auto___25842;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25829_25843__$1)){
var c__17622__auto___25844 = cljs.core.chunk_first.call(null,seq__25829_25843__$1);
var G__25845 = cljs.core.chunk_rest.call(null,seq__25829_25843__$1);
var G__25846 = c__17622__auto___25844;
var G__25847 = cljs.core.count.call(null,c__17622__auto___25844);
var G__25848 = (0);
seq__25829_25833 = G__25845;
chunk__25830_25834 = G__25846;
count__25831_25835 = G__25847;
i__25832_25836 = G__25848;
continue;
} else {
var f_25849 = cljs.core.first.call(null,seq__25829_25843__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_25849);

var G__25850 = cljs.core.next.call(null,seq__25829_25843__$1);
var G__25851 = null;
var G__25852 = (0);
var G__25853 = (0);
seq__25829_25833 = G__25850;
chunk__25830_25834 = G__25851;
count__25831_25835 = G__25852;
i__25832_25836 = G__25853;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__25827,map__25827__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__25827,map__25827__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1460363586406