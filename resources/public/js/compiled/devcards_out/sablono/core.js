// Compiled by ClojureScript 1.7.170 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom.server');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__27037__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__27036 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__27036,(0),null);
var body = cljs.core.nthnext.call(null,vec__27036,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__27037 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__27038__i = 0, G__27038__a = new Array(arguments.length -  0);
while (G__27038__i < G__27038__a.length) {G__27038__a[G__27038__i] = arguments[G__27038__i + 0]; ++G__27038__i;}
  args = new cljs.core.IndexedSeq(G__27038__a,0);
} 
return G__27037__delegate.call(this,args);};
G__27037.cljs$lang$maxFixedArity = 0;
G__27037.cljs$lang$applyTo = (function (arglist__27039){
var args = cljs.core.seq(arglist__27039);
return G__27037__delegate(args);
});
G__27037.cljs$core$IFn$_invoke$arity$variadic = G__27037__delegate;
return G__27037;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__17591__auto__ = (function sablono$core$update_arglists_$_iter__27044(s__27045){
return (new cljs.core.LazySeq(null,(function (){
var s__27045__$1 = s__27045;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27045__$1);
if(temp__4425__auto__){
var s__27045__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27045__$2)){
var c__17589__auto__ = cljs.core.chunk_first.call(null,s__27045__$2);
var size__17590__auto__ = cljs.core.count.call(null,c__17589__auto__);
var b__27047 = cljs.core.chunk_buffer.call(null,size__17590__auto__);
if((function (){var i__27046 = (0);
while(true){
if((i__27046 < size__17590__auto__)){
var args = cljs.core._nth.call(null,c__17589__auto__,i__27046);
cljs.core.chunk_append.call(null,b__27047,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__27048 = (i__27046 + (1));
i__27046 = G__27048;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27047),sablono$core$update_arglists_$_iter__27044.call(null,cljs.core.chunk_rest.call(null,s__27045__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27047),null);
}
} else {
var args = cljs.core.first.call(null,s__27045__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__27044.call(null,cljs.core.rest.call(null,s__27045__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17591__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return ReactDOMServer.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__17884__auto__ = [];
var len__17877__auto___27054 = arguments.length;
var i__17878__auto___27055 = (0);
while(true){
if((i__17878__auto___27055 < len__17877__auto___27054)){
args__17884__auto__.push((arguments[i__17878__auto___27055]));

var G__27056 = (i__17878__auto___27055 + (1));
i__17878__auto___27055 = G__27056;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((0) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17885__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__17591__auto__ = (function sablono$core$iter__27050(s__27051){
return (new cljs.core.LazySeq(null,(function (){
var s__27051__$1 = s__27051;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27051__$1);
if(temp__4425__auto__){
var s__27051__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27051__$2)){
var c__17589__auto__ = cljs.core.chunk_first.call(null,s__27051__$2);
var size__17590__auto__ = cljs.core.count.call(null,c__17589__auto__);
var b__27053 = cljs.core.chunk_buffer.call(null,size__17590__auto__);
if((function (){var i__27052 = (0);
while(true){
if((i__27052 < size__17590__auto__)){
var style = cljs.core._nth.call(null,c__17589__auto__,i__27052);
cljs.core.chunk_append.call(null,b__27053,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__27057 = (i__27052 + (1));
i__27052 = G__27057;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27053),sablono$core$iter__27050.call(null,cljs.core.chunk_rest.call(null,s__27051__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27053),null);
}
} else {
var style = cljs.core.first.call(null,s__27051__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__27050.call(null,cljs.core.rest.call(null,s__27051__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17591__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq27049){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27049));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to27058 = (function sablono$core$link_to27058(var_args){
var args__17884__auto__ = [];
var len__17877__auto___27061 = arguments.length;
var i__17878__auto___27062 = (0);
while(true){
if((i__17878__auto___27062 < len__17877__auto___27061)){
args__17884__auto__.push((arguments[i__17878__auto___27062]));

var G__27063 = (i__17878__auto___27062 + (1));
i__17878__auto___27062 = G__27063;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((1) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((1)),(0))):null);
return sablono.core.link_to27058.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17885__auto__);
});

sablono.core.link_to27058.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to27058.cljs$lang$maxFixedArity = (1);

sablono.core.link_to27058.cljs$lang$applyTo = (function (seq27059){
var G__27060 = cljs.core.first.call(null,seq27059);
var seq27059__$1 = cljs.core.next.call(null,seq27059);
return sablono.core.link_to27058.cljs$core$IFn$_invoke$arity$variadic(G__27060,seq27059__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to27058);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to27064 = (function sablono$core$mail_to27064(var_args){
var args__17884__auto__ = [];
var len__17877__auto___27069 = arguments.length;
var i__17878__auto___27070 = (0);
while(true){
if((i__17878__auto___27070 < len__17877__auto___27069)){
args__17884__auto__.push((arguments[i__17878__auto___27070]));

var G__27071 = (i__17878__auto___27070 + (1));
i__17878__auto___27070 = G__27071;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((1) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((1)),(0))):null);
return sablono.core.mail_to27064.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17885__auto__);
});

sablono.core.mail_to27064.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__27067){
var vec__27068 = p__27067;
var content = cljs.core.nth.call(null,vec__27068,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16819__auto__ = content;
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to27064.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to27064.cljs$lang$applyTo = (function (seq27065){
var G__27066 = cljs.core.first.call(null,seq27065);
var seq27065__$1 = cljs.core.next.call(null,seq27065);
return sablono.core.mail_to27064.cljs$core$IFn$_invoke$arity$variadic(G__27066,seq27065__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to27064);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list27072 = (function sablono$core$unordered_list27072(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__17591__auto__ = (function sablono$core$unordered_list27072_$_iter__27077(s__27078){
return (new cljs.core.LazySeq(null,(function (){
var s__27078__$1 = s__27078;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27078__$1);
if(temp__4425__auto__){
var s__27078__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27078__$2)){
var c__17589__auto__ = cljs.core.chunk_first.call(null,s__27078__$2);
var size__17590__auto__ = cljs.core.count.call(null,c__17589__auto__);
var b__27080 = cljs.core.chunk_buffer.call(null,size__17590__auto__);
if((function (){var i__27079 = (0);
while(true){
if((i__27079 < size__17590__auto__)){
var x = cljs.core._nth.call(null,c__17589__auto__,i__27079);
cljs.core.chunk_append.call(null,b__27080,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__27081 = (i__27079 + (1));
i__27079 = G__27081;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27080),sablono$core$unordered_list27072_$_iter__27077.call(null,cljs.core.chunk_rest.call(null,s__27078__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27080),null);
}
} else {
var x = cljs.core.first.call(null,s__27078__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list27072_$_iter__27077.call(null,cljs.core.rest.call(null,s__27078__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17591__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list27072);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list27082 = (function sablono$core$ordered_list27082(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__17591__auto__ = (function sablono$core$ordered_list27082_$_iter__27087(s__27088){
return (new cljs.core.LazySeq(null,(function (){
var s__27088__$1 = s__27088;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27088__$1);
if(temp__4425__auto__){
var s__27088__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27088__$2)){
var c__17589__auto__ = cljs.core.chunk_first.call(null,s__27088__$2);
var size__17590__auto__ = cljs.core.count.call(null,c__17589__auto__);
var b__27090 = cljs.core.chunk_buffer.call(null,size__17590__auto__);
if((function (){var i__27089 = (0);
while(true){
if((i__27089 < size__17590__auto__)){
var x = cljs.core._nth.call(null,c__17589__auto__,i__27089);
cljs.core.chunk_append.call(null,b__27090,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__27091 = (i__27089 + (1));
i__27089 = G__27091;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27090),sablono$core$ordered_list27082_$_iter__27087.call(null,cljs.core.chunk_rest.call(null,s__27088__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27090),null);
}
} else {
var x = cljs.core.first.call(null,s__27088__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list27082_$_iter__27087.call(null,cljs.core.rest.call(null,s__27088__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17591__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list27082);
/**
 * Create an image element.
 */
sablono.core.image27092 = (function sablono$core$image27092(var_args){
var args27093 = [];
var len__17877__auto___27096 = arguments.length;
var i__17878__auto___27097 = (0);
while(true){
if((i__17878__auto___27097 < len__17877__auto___27096)){
args27093.push((arguments[i__17878__auto___27097]));

var G__27098 = (i__17878__auto___27097 + (1));
i__17878__auto___27097 = G__27098;
continue;
} else {
}
break;
}

var G__27095 = args27093.length;
switch (G__27095) {
case 1:
return sablono.core.image27092.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image27092.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27093.length)].join('')));

}
});

sablono.core.image27092.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image27092.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image27092.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image27092);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__27100_SHARP_,p2__27101_SHARP_){
return [cljs.core.str(p1__27100_SHARP_),cljs.core.str("["),cljs.core.str(p2__27101_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__27102_SHARP_,p2__27103_SHARP_){
return [cljs.core.str(p1__27102_SHARP_),cljs.core.str("-"),cljs.core.str(p2__27103_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field27104 = (function sablono$core$color_field27104(var_args){
var args27105 = [];
var len__17877__auto___27172 = arguments.length;
var i__17878__auto___27173 = (0);
while(true){
if((i__17878__auto___27173 < len__17877__auto___27172)){
args27105.push((arguments[i__17878__auto___27173]));

var G__27174 = (i__17878__auto___27173 + (1));
i__17878__auto___27173 = G__27174;
continue;
} else {
}
break;
}

var G__27107 = args27105.length;
switch (G__27107) {
case 1:
return sablono.core.color_field27104.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field27104.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27105.length)].join('')));

}
});

sablono.core.color_field27104.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.color_field27104.call(null,name__19410__auto__,null);
});

sablono.core.color_field27104.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.color_field27104.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field27104);

/**
 * Creates a date input field.
 */
sablono.core.date_field27108 = (function sablono$core$date_field27108(var_args){
var args27109 = [];
var len__17877__auto___27176 = arguments.length;
var i__17878__auto___27177 = (0);
while(true){
if((i__17878__auto___27177 < len__17877__auto___27176)){
args27109.push((arguments[i__17878__auto___27177]));

var G__27178 = (i__17878__auto___27177 + (1));
i__17878__auto___27177 = G__27178;
continue;
} else {
}
break;
}

var G__27111 = args27109.length;
switch (G__27111) {
case 1:
return sablono.core.date_field27108.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field27108.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27109.length)].join('')));

}
});

sablono.core.date_field27108.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.date_field27108.call(null,name__19410__auto__,null);
});

sablono.core.date_field27108.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.date_field27108.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field27108);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field27112 = (function sablono$core$datetime_field27112(var_args){
var args27113 = [];
var len__17877__auto___27180 = arguments.length;
var i__17878__auto___27181 = (0);
while(true){
if((i__17878__auto___27181 < len__17877__auto___27180)){
args27113.push((arguments[i__17878__auto___27181]));

var G__27182 = (i__17878__auto___27181 + (1));
i__17878__auto___27181 = G__27182;
continue;
} else {
}
break;
}

var G__27115 = args27113.length;
switch (G__27115) {
case 1:
return sablono.core.datetime_field27112.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field27112.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27113.length)].join('')));

}
});

sablono.core.datetime_field27112.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.datetime_field27112.call(null,name__19410__auto__,null);
});

sablono.core.datetime_field27112.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.datetime_field27112.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field27112);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field27116 = (function sablono$core$datetime_local_field27116(var_args){
var args27117 = [];
var len__17877__auto___27184 = arguments.length;
var i__17878__auto___27185 = (0);
while(true){
if((i__17878__auto___27185 < len__17877__auto___27184)){
args27117.push((arguments[i__17878__auto___27185]));

var G__27186 = (i__17878__auto___27185 + (1));
i__17878__auto___27185 = G__27186;
continue;
} else {
}
break;
}

var G__27119 = args27117.length;
switch (G__27119) {
case 1:
return sablono.core.datetime_local_field27116.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field27116.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27117.length)].join('')));

}
});

sablono.core.datetime_local_field27116.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.datetime_local_field27116.call(null,name__19410__auto__,null);
});

sablono.core.datetime_local_field27116.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.datetime_local_field27116.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field27116);

/**
 * Creates a email input field.
 */
sablono.core.email_field27120 = (function sablono$core$email_field27120(var_args){
var args27121 = [];
var len__17877__auto___27188 = arguments.length;
var i__17878__auto___27189 = (0);
while(true){
if((i__17878__auto___27189 < len__17877__auto___27188)){
args27121.push((arguments[i__17878__auto___27189]));

var G__27190 = (i__17878__auto___27189 + (1));
i__17878__auto___27189 = G__27190;
continue;
} else {
}
break;
}

var G__27123 = args27121.length;
switch (G__27123) {
case 1:
return sablono.core.email_field27120.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field27120.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27121.length)].join('')));

}
});

sablono.core.email_field27120.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.email_field27120.call(null,name__19410__auto__,null);
});

sablono.core.email_field27120.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.email_field27120.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field27120);

/**
 * Creates a file input field.
 */
sablono.core.file_field27124 = (function sablono$core$file_field27124(var_args){
var args27125 = [];
var len__17877__auto___27192 = arguments.length;
var i__17878__auto___27193 = (0);
while(true){
if((i__17878__auto___27193 < len__17877__auto___27192)){
args27125.push((arguments[i__17878__auto___27193]));

var G__27194 = (i__17878__auto___27193 + (1));
i__17878__auto___27193 = G__27194;
continue;
} else {
}
break;
}

var G__27127 = args27125.length;
switch (G__27127) {
case 1:
return sablono.core.file_field27124.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field27124.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27125.length)].join('')));

}
});

sablono.core.file_field27124.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.file_field27124.call(null,name__19410__auto__,null);
});

sablono.core.file_field27124.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.file_field27124.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field27124);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field27128 = (function sablono$core$hidden_field27128(var_args){
var args27129 = [];
var len__17877__auto___27196 = arguments.length;
var i__17878__auto___27197 = (0);
while(true){
if((i__17878__auto___27197 < len__17877__auto___27196)){
args27129.push((arguments[i__17878__auto___27197]));

var G__27198 = (i__17878__auto___27197 + (1));
i__17878__auto___27197 = G__27198;
continue;
} else {
}
break;
}

var G__27131 = args27129.length;
switch (G__27131) {
case 1:
return sablono.core.hidden_field27128.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field27128.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27129.length)].join('')));

}
});

sablono.core.hidden_field27128.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.hidden_field27128.call(null,name__19410__auto__,null);
});

sablono.core.hidden_field27128.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.hidden_field27128.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field27128);

/**
 * Creates a month input field.
 */
sablono.core.month_field27132 = (function sablono$core$month_field27132(var_args){
var args27133 = [];
var len__17877__auto___27200 = arguments.length;
var i__17878__auto___27201 = (0);
while(true){
if((i__17878__auto___27201 < len__17877__auto___27200)){
args27133.push((arguments[i__17878__auto___27201]));

var G__27202 = (i__17878__auto___27201 + (1));
i__17878__auto___27201 = G__27202;
continue;
} else {
}
break;
}

var G__27135 = args27133.length;
switch (G__27135) {
case 1:
return sablono.core.month_field27132.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field27132.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27133.length)].join('')));

}
});

sablono.core.month_field27132.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.month_field27132.call(null,name__19410__auto__,null);
});

sablono.core.month_field27132.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.month_field27132.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field27132);

/**
 * Creates a number input field.
 */
sablono.core.number_field27136 = (function sablono$core$number_field27136(var_args){
var args27137 = [];
var len__17877__auto___27204 = arguments.length;
var i__17878__auto___27205 = (0);
while(true){
if((i__17878__auto___27205 < len__17877__auto___27204)){
args27137.push((arguments[i__17878__auto___27205]));

var G__27206 = (i__17878__auto___27205 + (1));
i__17878__auto___27205 = G__27206;
continue;
} else {
}
break;
}

var G__27139 = args27137.length;
switch (G__27139) {
case 1:
return sablono.core.number_field27136.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field27136.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27137.length)].join('')));

}
});

sablono.core.number_field27136.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.number_field27136.call(null,name__19410__auto__,null);
});

sablono.core.number_field27136.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.number_field27136.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field27136);

/**
 * Creates a password input field.
 */
sablono.core.password_field27140 = (function sablono$core$password_field27140(var_args){
var args27141 = [];
var len__17877__auto___27208 = arguments.length;
var i__17878__auto___27209 = (0);
while(true){
if((i__17878__auto___27209 < len__17877__auto___27208)){
args27141.push((arguments[i__17878__auto___27209]));

var G__27210 = (i__17878__auto___27209 + (1));
i__17878__auto___27209 = G__27210;
continue;
} else {
}
break;
}

var G__27143 = args27141.length;
switch (G__27143) {
case 1:
return sablono.core.password_field27140.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field27140.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27141.length)].join('')));

}
});

sablono.core.password_field27140.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.password_field27140.call(null,name__19410__auto__,null);
});

sablono.core.password_field27140.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.password_field27140.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field27140);

/**
 * Creates a range input field.
 */
sablono.core.range_field27144 = (function sablono$core$range_field27144(var_args){
var args27145 = [];
var len__17877__auto___27212 = arguments.length;
var i__17878__auto___27213 = (0);
while(true){
if((i__17878__auto___27213 < len__17877__auto___27212)){
args27145.push((arguments[i__17878__auto___27213]));

var G__27214 = (i__17878__auto___27213 + (1));
i__17878__auto___27213 = G__27214;
continue;
} else {
}
break;
}

var G__27147 = args27145.length;
switch (G__27147) {
case 1:
return sablono.core.range_field27144.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field27144.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27145.length)].join('')));

}
});

sablono.core.range_field27144.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.range_field27144.call(null,name__19410__auto__,null);
});

sablono.core.range_field27144.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.range_field27144.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field27144);

/**
 * Creates a search input field.
 */
sablono.core.search_field27148 = (function sablono$core$search_field27148(var_args){
var args27149 = [];
var len__17877__auto___27216 = arguments.length;
var i__17878__auto___27217 = (0);
while(true){
if((i__17878__auto___27217 < len__17877__auto___27216)){
args27149.push((arguments[i__17878__auto___27217]));

var G__27218 = (i__17878__auto___27217 + (1));
i__17878__auto___27217 = G__27218;
continue;
} else {
}
break;
}

var G__27151 = args27149.length;
switch (G__27151) {
case 1:
return sablono.core.search_field27148.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field27148.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27149.length)].join('')));

}
});

sablono.core.search_field27148.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.search_field27148.call(null,name__19410__auto__,null);
});

sablono.core.search_field27148.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.search_field27148.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field27148);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field27152 = (function sablono$core$tel_field27152(var_args){
var args27153 = [];
var len__17877__auto___27220 = arguments.length;
var i__17878__auto___27221 = (0);
while(true){
if((i__17878__auto___27221 < len__17877__auto___27220)){
args27153.push((arguments[i__17878__auto___27221]));

var G__27222 = (i__17878__auto___27221 + (1));
i__17878__auto___27221 = G__27222;
continue;
} else {
}
break;
}

var G__27155 = args27153.length;
switch (G__27155) {
case 1:
return sablono.core.tel_field27152.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field27152.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27153.length)].join('')));

}
});

sablono.core.tel_field27152.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.tel_field27152.call(null,name__19410__auto__,null);
});

sablono.core.tel_field27152.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.tel_field27152.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field27152);

/**
 * Creates a text input field.
 */
sablono.core.text_field27156 = (function sablono$core$text_field27156(var_args){
var args27157 = [];
var len__17877__auto___27224 = arguments.length;
var i__17878__auto___27225 = (0);
while(true){
if((i__17878__auto___27225 < len__17877__auto___27224)){
args27157.push((arguments[i__17878__auto___27225]));

var G__27226 = (i__17878__auto___27225 + (1));
i__17878__auto___27225 = G__27226;
continue;
} else {
}
break;
}

var G__27159 = args27157.length;
switch (G__27159) {
case 1:
return sablono.core.text_field27156.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field27156.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27157.length)].join('')));

}
});

sablono.core.text_field27156.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.text_field27156.call(null,name__19410__auto__,null);
});

sablono.core.text_field27156.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.text_field27156.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field27156);

/**
 * Creates a time input field.
 */
sablono.core.time_field27160 = (function sablono$core$time_field27160(var_args){
var args27161 = [];
var len__17877__auto___27228 = arguments.length;
var i__17878__auto___27229 = (0);
while(true){
if((i__17878__auto___27229 < len__17877__auto___27228)){
args27161.push((arguments[i__17878__auto___27229]));

var G__27230 = (i__17878__auto___27229 + (1));
i__17878__auto___27229 = G__27230;
continue;
} else {
}
break;
}

var G__27163 = args27161.length;
switch (G__27163) {
case 1:
return sablono.core.time_field27160.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field27160.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27161.length)].join('')));

}
});

sablono.core.time_field27160.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.time_field27160.call(null,name__19410__auto__,null);
});

sablono.core.time_field27160.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.time_field27160.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field27160);

/**
 * Creates a url input field.
 */
sablono.core.url_field27164 = (function sablono$core$url_field27164(var_args){
var args27165 = [];
var len__17877__auto___27232 = arguments.length;
var i__17878__auto___27233 = (0);
while(true){
if((i__17878__auto___27233 < len__17877__auto___27232)){
args27165.push((arguments[i__17878__auto___27233]));

var G__27234 = (i__17878__auto___27233 + (1));
i__17878__auto___27233 = G__27234;
continue;
} else {
}
break;
}

var G__27167 = args27165.length;
switch (G__27167) {
case 1:
return sablono.core.url_field27164.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field27164.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27165.length)].join('')));

}
});

sablono.core.url_field27164.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.url_field27164.call(null,name__19410__auto__,null);
});

sablono.core.url_field27164.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.url_field27164.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field27164);

/**
 * Creates a week input field.
 */
sablono.core.week_field27168 = (function sablono$core$week_field27168(var_args){
var args27169 = [];
var len__17877__auto___27236 = arguments.length;
var i__17878__auto___27237 = (0);
while(true){
if((i__17878__auto___27237 < len__17877__auto___27236)){
args27169.push((arguments[i__17878__auto___27237]));

var G__27238 = (i__17878__auto___27237 + (1));
i__17878__auto___27237 = G__27238;
continue;
} else {
}
break;
}

var G__27171 = args27169.length;
switch (G__27171) {
case 1:
return sablono.core.week_field27168.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field27168.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27169.length)].join('')));

}
});

sablono.core.week_field27168.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.week_field27168.call(null,name__19410__auto__,null);
});

sablono.core.week_field27168.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.week_field27168.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field27168);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box27240 = (function sablono$core$check_box27240(var_args){
var args27241 = [];
var len__17877__auto___27244 = arguments.length;
var i__17878__auto___27245 = (0);
while(true){
if((i__17878__auto___27245 < len__17877__auto___27244)){
args27241.push((arguments[i__17878__auto___27245]));

var G__27246 = (i__17878__auto___27245 + (1));
i__17878__auto___27245 = G__27246;
continue;
} else {
}
break;
}

var G__27243 = args27241.length;
switch (G__27243) {
case 1:
return sablono.core.check_box27240.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box27240.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box27240.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27241.length)].join('')));

}
});

sablono.core.check_box27240.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box27240.call(null,name,null);
});

sablono.core.check_box27240.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box27240.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box27240.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box27240.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box27240);
/**
 * Creates a radio button.
 */
sablono.core.radio_button27248 = (function sablono$core$radio_button27248(var_args){
var args27249 = [];
var len__17877__auto___27252 = arguments.length;
var i__17878__auto___27253 = (0);
while(true){
if((i__17878__auto___27253 < len__17877__auto___27252)){
args27249.push((arguments[i__17878__auto___27253]));

var G__27254 = (i__17878__auto___27253 + (1));
i__17878__auto___27253 = G__27254;
continue;
} else {
}
break;
}

var G__27251 = args27249.length;
switch (G__27251) {
case 1:
return sablono.core.radio_button27248.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button27248.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button27248.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27249.length)].join('')));

}
});

sablono.core.radio_button27248.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button27248.call(null,group,null);
});

sablono.core.radio_button27248.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button27248.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button27248.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button27248.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button27248);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options27256 = (function sablono$core$select_options27256(coll){
var iter__17591__auto__ = (function sablono$core$select_options27256_$_iter__27265(s__27266){
return (new cljs.core.LazySeq(null,(function (){
var s__27266__$1 = s__27266;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27266__$1);
if(temp__4425__auto__){
var s__27266__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27266__$2)){
var c__17589__auto__ = cljs.core.chunk_first.call(null,s__27266__$2);
var size__17590__auto__ = cljs.core.count.call(null,c__17589__auto__);
var b__27268 = cljs.core.chunk_buffer.call(null,size__17590__auto__);
if((function (){var i__27267 = (0);
while(true){
if((i__27267 < size__17590__auto__)){
var x = cljs.core._nth.call(null,c__17589__auto__,i__27267);
cljs.core.chunk_append.call(null,b__27268,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__27271 = x;
var text = cljs.core.nth.call(null,vec__27271,(0),null);
var val = cljs.core.nth.call(null,vec__27271,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__27271,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options27256.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__27273 = (i__27267 + (1));
i__27267 = G__27273;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27268),sablono$core$select_options27256_$_iter__27265.call(null,cljs.core.chunk_rest.call(null,s__27266__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27268),null);
}
} else {
var x = cljs.core.first.call(null,s__27266__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__27272 = x;
var text = cljs.core.nth.call(null,vec__27272,(0),null);
var val = cljs.core.nth.call(null,vec__27272,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__27272,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options27256.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options27256_$_iter__27265.call(null,cljs.core.rest.call(null,s__27266__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17591__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options27256);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down27274 = (function sablono$core$drop_down27274(var_args){
var args27275 = [];
var len__17877__auto___27278 = arguments.length;
var i__17878__auto___27279 = (0);
while(true){
if((i__17878__auto___27279 < len__17877__auto___27278)){
args27275.push((arguments[i__17878__auto___27279]));

var G__27280 = (i__17878__auto___27279 + (1));
i__17878__auto___27279 = G__27280;
continue;
} else {
}
break;
}

var G__27277 = args27275.length;
switch (G__27277) {
case 2:
return sablono.core.drop_down27274.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down27274.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27275.length)].join('')));

}
});

sablono.core.drop_down27274.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down27274.call(null,name,options,null);
});

sablono.core.drop_down27274.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down27274.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down27274);
/**
 * Creates a text area element.
 */
sablono.core.text_area27282 = (function sablono$core$text_area27282(var_args){
var args27283 = [];
var len__17877__auto___27286 = arguments.length;
var i__17878__auto___27287 = (0);
while(true){
if((i__17878__auto___27287 < len__17877__auto___27286)){
args27283.push((arguments[i__17878__auto___27287]));

var G__27288 = (i__17878__auto___27287 + (1));
i__17878__auto___27287 = G__27288;
continue;
} else {
}
break;
}

var G__27285 = args27283.length;
switch (G__27285) {
case 1:
return sablono.core.text_area27282.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area27282.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27283.length)].join('')));

}
});

sablono.core.text_area27282.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area27282.call(null,name,null);
});

sablono.core.text_area27282.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area27282.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area27282);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label27290 = (function sablono$core$label27290(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label27290);
/**
 * Creates a submit button.
 */
sablono.core.submit_button27291 = (function sablono$core$submit_button27291(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button27291);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button27292 = (function sablono$core$reset_button27292(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button27292);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to27293 = (function sablono$core$form_to27293(var_args){
var args__17884__auto__ = [];
var len__17877__auto___27298 = arguments.length;
var i__17878__auto___27299 = (0);
while(true){
if((i__17878__auto___27299 < len__17877__auto___27298)){
args__17884__auto__.push((arguments[i__17878__auto___27299]));

var G__27300 = (i__17878__auto___27299 + (1));
i__17878__auto___27299 = G__27300;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((1) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((1)),(0))):null);
return sablono.core.form_to27293.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17885__auto__);
});

sablono.core.form_to27293.cljs$core$IFn$_invoke$arity$variadic = (function (p__27296,body){
var vec__27297 = p__27296;
var method = cljs.core.nth.call(null,vec__27297,(0),null);
var action = cljs.core.nth.call(null,vec__27297,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to27293.cljs$lang$maxFixedArity = (1);

sablono.core.form_to27293.cljs$lang$applyTo = (function (seq27294){
var G__27295 = cljs.core.first.call(null,seq27294);
var seq27294__$1 = cljs.core.next.call(null,seq27294);
return sablono.core.form_to27293.cljs$core$IFn$_invoke$arity$variadic(G__27295,seq27294__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to27293);

//# sourceMappingURL=core.js.map?rel=1460363590661