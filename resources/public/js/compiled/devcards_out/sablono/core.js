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
var G__24564__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__24563 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__24563,(0),null);
var body = cljs.core.nthnext.call(null,vec__24563,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__24564 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__24565__i = 0, G__24565__a = new Array(arguments.length -  0);
while (G__24565__i < G__24565__a.length) {G__24565__a[G__24565__i] = arguments[G__24565__i + 0]; ++G__24565__i;}
  args = new cljs.core.IndexedSeq(G__24565__a,0);
} 
return G__24564__delegate.call(this,args);};
G__24564.cljs$lang$maxFixedArity = 0;
G__24564.cljs$lang$applyTo = (function (arglist__24566){
var args = cljs.core.seq(arglist__24566);
return G__24564__delegate(args);
});
G__24564.cljs$core$IFn$_invoke$arity$variadic = G__24564__delegate;
return G__24564;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__17577__auto__ = (function sablono$core$update_arglists_$_iter__24571(s__24572){
return (new cljs.core.LazySeq(null,(function (){
var s__24572__$1 = s__24572;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24572__$1);
if(temp__4425__auto__){
var s__24572__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24572__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__24572__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__24574 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__24573 = (0);
while(true){
if((i__24573 < size__17576__auto__)){
var args = cljs.core._nth.call(null,c__17575__auto__,i__24573);
cljs.core.chunk_append.call(null,b__24574,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__24575 = (i__24573 + (1));
i__24573 = G__24575;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24574),sablono$core$update_arglists_$_iter__24571.call(null,cljs.core.chunk_rest.call(null,s__24572__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24574),null);
}
} else {
var args = cljs.core.first.call(null,s__24572__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__24571.call(null,cljs.core.rest.call(null,s__24572__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17577__auto__.call(null,arglists);
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
var args__17870__auto__ = [];
var len__17863__auto___24581 = arguments.length;
var i__17864__auto___24582 = (0);
while(true){
if((i__17864__auto___24582 < len__17863__auto___24581)){
args__17870__auto__.push((arguments[i__17864__auto___24582]));

var G__24583 = (i__17864__auto___24582 + (1));
i__17864__auto___24582 = G__24583;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__17577__auto__ = (function sablono$core$iter__24577(s__24578){
return (new cljs.core.LazySeq(null,(function (){
var s__24578__$1 = s__24578;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24578__$1);
if(temp__4425__auto__){
var s__24578__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24578__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__24578__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__24580 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__24579 = (0);
while(true){
if((i__24579 < size__17576__auto__)){
var style = cljs.core._nth.call(null,c__17575__auto__,i__24579);
cljs.core.chunk_append.call(null,b__24580,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__24584 = (i__24579 + (1));
i__24579 = G__24584;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24580),sablono$core$iter__24577.call(null,cljs.core.chunk_rest.call(null,s__24578__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24580),null);
}
} else {
var style = cljs.core.first.call(null,s__24578__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__24577.call(null,cljs.core.rest.call(null,s__24578__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17577__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq24576){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq24576));
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
sablono.core.link_to24585 = (function sablono$core$link_to24585(var_args){
var args__17870__auto__ = [];
var len__17863__auto___24588 = arguments.length;
var i__17864__auto___24589 = (0);
while(true){
if((i__17864__auto___24589 < len__17863__auto___24588)){
args__17870__auto__.push((arguments[i__17864__auto___24589]));

var G__24590 = (i__17864__auto___24589 + (1));
i__17864__auto___24589 = G__24590;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return sablono.core.link_to24585.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

sablono.core.link_to24585.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to24585.cljs$lang$maxFixedArity = (1);

sablono.core.link_to24585.cljs$lang$applyTo = (function (seq24586){
var G__24587 = cljs.core.first.call(null,seq24586);
var seq24586__$1 = cljs.core.next.call(null,seq24586);
return sablono.core.link_to24585.cljs$core$IFn$_invoke$arity$variadic(G__24587,seq24586__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to24585);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to24591 = (function sablono$core$mail_to24591(var_args){
var args__17870__auto__ = [];
var len__17863__auto___24596 = arguments.length;
var i__17864__auto___24597 = (0);
while(true){
if((i__17864__auto___24597 < len__17863__auto___24596)){
args__17870__auto__.push((arguments[i__17864__auto___24597]));

var G__24598 = (i__17864__auto___24597 + (1));
i__17864__auto___24597 = G__24598;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return sablono.core.mail_to24591.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

sablono.core.mail_to24591.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__24594){
var vec__24595 = p__24594;
var content = cljs.core.nth.call(null,vec__24595,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16805__auto__ = content;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to24591.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to24591.cljs$lang$applyTo = (function (seq24592){
var G__24593 = cljs.core.first.call(null,seq24592);
var seq24592__$1 = cljs.core.next.call(null,seq24592);
return sablono.core.mail_to24591.cljs$core$IFn$_invoke$arity$variadic(G__24593,seq24592__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to24591);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list24599 = (function sablono$core$unordered_list24599(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__17577__auto__ = (function sablono$core$unordered_list24599_$_iter__24604(s__24605){
return (new cljs.core.LazySeq(null,(function (){
var s__24605__$1 = s__24605;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24605__$1);
if(temp__4425__auto__){
var s__24605__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24605__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__24605__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__24607 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__24606 = (0);
while(true){
if((i__24606 < size__17576__auto__)){
var x = cljs.core._nth.call(null,c__17575__auto__,i__24606);
cljs.core.chunk_append.call(null,b__24607,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__24608 = (i__24606 + (1));
i__24606 = G__24608;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24607),sablono$core$unordered_list24599_$_iter__24604.call(null,cljs.core.chunk_rest.call(null,s__24605__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24607),null);
}
} else {
var x = cljs.core.first.call(null,s__24605__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list24599_$_iter__24604.call(null,cljs.core.rest.call(null,s__24605__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17577__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list24599);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list24609 = (function sablono$core$ordered_list24609(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__17577__auto__ = (function sablono$core$ordered_list24609_$_iter__24614(s__24615){
return (new cljs.core.LazySeq(null,(function (){
var s__24615__$1 = s__24615;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24615__$1);
if(temp__4425__auto__){
var s__24615__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24615__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__24615__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__24617 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__24616 = (0);
while(true){
if((i__24616 < size__17576__auto__)){
var x = cljs.core._nth.call(null,c__17575__auto__,i__24616);
cljs.core.chunk_append.call(null,b__24617,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__24618 = (i__24616 + (1));
i__24616 = G__24618;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24617),sablono$core$ordered_list24609_$_iter__24614.call(null,cljs.core.chunk_rest.call(null,s__24615__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24617),null);
}
} else {
var x = cljs.core.first.call(null,s__24615__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list24609_$_iter__24614.call(null,cljs.core.rest.call(null,s__24615__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17577__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list24609);
/**
 * Create an image element.
 */
sablono.core.image24619 = (function sablono$core$image24619(var_args){
var args24620 = [];
var len__17863__auto___24623 = arguments.length;
var i__17864__auto___24624 = (0);
while(true){
if((i__17864__auto___24624 < len__17863__auto___24623)){
args24620.push((arguments[i__17864__auto___24624]));

var G__24625 = (i__17864__auto___24624 + (1));
i__17864__auto___24624 = G__24625;
continue;
} else {
}
break;
}

var G__24622 = args24620.length;
switch (G__24622) {
case 1:
return sablono.core.image24619.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image24619.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24620.length)].join('')));

}
});

sablono.core.image24619.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image24619.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image24619.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image24619);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__24627_SHARP_,p2__24628_SHARP_){
return [cljs.core.str(p1__24627_SHARP_),cljs.core.str("["),cljs.core.str(p2__24628_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__24629_SHARP_,p2__24630_SHARP_){
return [cljs.core.str(p1__24629_SHARP_),cljs.core.str("-"),cljs.core.str(p2__24630_SHARP_)].join('');
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
sablono.core.color_field24631 = (function sablono$core$color_field24631(var_args){
var args24632 = [];
var len__17863__auto___24699 = arguments.length;
var i__17864__auto___24700 = (0);
while(true){
if((i__17864__auto___24700 < len__17863__auto___24699)){
args24632.push((arguments[i__17864__auto___24700]));

var G__24701 = (i__17864__auto___24700 + (1));
i__17864__auto___24700 = G__24701;
continue;
} else {
}
break;
}

var G__24634 = args24632.length;
switch (G__24634) {
case 1:
return sablono.core.color_field24631.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field24631.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24632.length)].join('')));

}
});

sablono.core.color_field24631.cljs$core$IFn$_invoke$arity$1 = (function (name__24552__auto__){
return sablono.core.color_field24631.call(null,name__24552__auto__,null);
});

sablono.core.color_field24631.cljs$core$IFn$_invoke$arity$2 = (function (name__24552__auto__,value__24553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__24552__auto__,value__24553__auto__);
});

sablono.core.color_field24631.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field24631);

/**
 * Creates a date input field.
 */
sablono.core.date_field24635 = (function sablono$core$date_field24635(var_args){
var args24636 = [];
var len__17863__auto___24703 = arguments.length;
var i__17864__auto___24704 = (0);
while(true){
if((i__17864__auto___24704 < len__17863__auto___24703)){
args24636.push((arguments[i__17864__auto___24704]));

var G__24705 = (i__17864__auto___24704 + (1));
i__17864__auto___24704 = G__24705;
continue;
} else {
}
break;
}

var G__24638 = args24636.length;
switch (G__24638) {
case 1:
return sablono.core.date_field24635.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field24635.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24636.length)].join('')));

}
});

sablono.core.date_field24635.cljs$core$IFn$_invoke$arity$1 = (function (name__24552__auto__){
return sablono.core.date_field24635.call(null,name__24552__auto__,null);
});

sablono.core.date_field24635.cljs$core$IFn$_invoke$arity$2 = (function (name__24552__auto__,value__24553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__24552__auto__,value__24553__auto__);
});

sablono.core.date_field24635.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field24635);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field24639 = (function sablono$core$datetime_field24639(var_args){
var args24640 = [];
var len__17863__auto___24707 = arguments.length;
var i__17864__auto___24708 = (0);
while(true){
if((i__17864__auto___24708 < len__17863__auto___24707)){
args24640.push((arguments[i__17864__auto___24708]));

var G__24709 = (i__17864__auto___24708 + (1));
i__17864__auto___24708 = G__24709;
continue;
} else {
}
break;
}

var G__24642 = args24640.length;
switch (G__24642) {
case 1:
return sablono.core.datetime_field24639.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field24639.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24640.length)].join('')));

}
});

sablono.core.datetime_field24639.cljs$core$IFn$_invoke$arity$1 = (function (name__24552__auto__){
return sablono.core.datetime_field24639.call(null,name__24552__auto__,null);
});

sablono.core.datetime_field24639.cljs$core$IFn$_invoke$arity$2 = (function (name__24552__auto__,value__24553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__24552__auto__,value__24553__auto__);
});

sablono.core.datetime_field24639.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field24639);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field24643 = (function sablono$core$datetime_local_field24643(var_args){
var args24644 = [];
var len__17863__auto___24711 = arguments.length;
var i__17864__auto___24712 = (0);
while(true){
if((i__17864__auto___24712 < len__17863__auto___24711)){
args24644.push((arguments[i__17864__auto___24712]));

var G__24713 = (i__17864__auto___24712 + (1));
i__17864__auto___24712 = G__24713;
continue;
} else {
}
break;
}

var G__24646 = args24644.length;
switch (G__24646) {
case 1:
return sablono.core.datetime_local_field24643.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field24643.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24644.length)].join('')));

}
});

sablono.core.datetime_local_field24643.cljs$core$IFn$_invoke$arity$1 = (function (name__24552__auto__){
return sablono.core.datetime_local_field24643.call(null,name__24552__auto__,null);
});

sablono.core.datetime_local_field24643.cljs$core$IFn$_invoke$arity$2 = (function (name__24552__auto__,value__24553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__24552__auto__,value__24553__auto__);
});

sablono.core.datetime_local_field24643.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field24643);

/**
 * Creates a email input field.
 */
sablono.core.email_field24647 = (function sablono$core$email_field24647(var_args){
var args24648 = [];
var len__17863__auto___24715 = arguments.length;
var i__17864__auto___24716 = (0);
while(true){
if((i__17864__auto___24716 < len__17863__auto___24715)){
args24648.push((arguments[i__17864__auto___24716]));

var G__24717 = (i__17864__auto___24716 + (1));
i__17864__auto___24716 = G__24717;
continue;
} else {
}
break;
}

var G__24650 = args24648.length;
switch (G__24650) {
case 1:
return sablono.core.email_field24647.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field24647.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24648.length)].join('')));

}
});

sablono.core.email_field24647.cljs$core$IFn$_invoke$arity$1 = (function (name__24552__auto__){
return sablono.core.email_field24647.call(null,name__24552__auto__,null);
});

sablono.core.email_field24647.cljs$core$IFn$_invoke$arity$2 = (function (name__24552__auto__,value__24553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__24552__auto__,value__24553__auto__);
});

sablono.core.email_field24647.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field24647);

/**
 * Creates a file input field.
 */
sablono.core.file_field24651 = (function sablono$core$file_field24651(var_args){
var args24652 = [];
var len__17863__auto___24719 = arguments.length;
var i__17864__auto___24720 = (0);
while(true){
if((i__17864__auto___24720 < len__17863__auto___24719)){
args24652.push((arguments[i__17864__auto___24720]));

var G__24721 = (i__17864__auto___24720 + (1));
i__17864__auto___24720 = G__24721;
continue;
} else {
}
break;
}

var G__24654 = args24652.length;
switch (G__24654) {
case 1:
return sablono.core.file_field24651.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field24651.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24652.length)].join('')));

}
});

sablono.core.file_field24651.cljs$core$IFn$_invoke$arity$1 = (function (name__24552__auto__){
return sablono.core.file_field24651.call(null,name__24552__auto__,null);
});

sablono.core.file_field24651.cljs$core$IFn$_invoke$arity$2 = (function (name__24552__auto__,value__24553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__24552__auto__,value__24553__auto__);
});

sablono.core.file_field24651.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field24651);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field24655 = (function sablono$core$hidden_field24655(var_args){
var args24656 = [];
var len__17863__auto___24723 = arguments.length;
var i__17864__auto___24724 = (0);
while(true){
if((i__17864__auto___24724 < len__17863__auto___24723)){
args24656.push((arguments[i__17864__auto___24724]));

var G__24725 = (i__17864__auto___24724 + (1));
i__17864__auto___24724 = G__24725;
continue;
} else {
}
break;
}

var G__24658 = args24656.length;
switch (G__24658) {
case 1:
return sablono.core.hidden_field24655.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field24655.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24656.length)].join('')));

}
});

sablono.core.hidden_field24655.cljs$core$IFn$_invoke$arity$1 = (function (name__24552__auto__){
return sablono.core.hidden_field24655.call(null,name__24552__auto__,null);
});

sablono.core.hidden_field24655.cljs$core$IFn$_invoke$arity$2 = (function (name__24552__auto__,value__24553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__24552__auto__,value__24553__auto__);
});

sablono.core.hidden_field24655.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field24655);

/**
 * Creates a month input field.
 */
sablono.core.month_field24659 = (function sablono$core$month_field24659(var_args){
var args24660 = [];
var len__17863__auto___24727 = arguments.length;
var i__17864__auto___24728 = (0);
while(true){
if((i__17864__auto___24728 < len__17863__auto___24727)){
args24660.push((arguments[i__17864__auto___24728]));

var G__24729 = (i__17864__auto___24728 + (1));
i__17864__auto___24728 = G__24729;
continue;
} else {
}
break;
}

var G__24662 = args24660.length;
switch (G__24662) {
case 1:
return sablono.core.month_field24659.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field24659.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24660.length)].join('')));

}
});

sablono.core.month_field24659.cljs$core$IFn$_invoke$arity$1 = (function (name__24552__auto__){
return sablono.core.month_field24659.call(null,name__24552__auto__,null);
});

sablono.core.month_field24659.cljs$core$IFn$_invoke$arity$2 = (function (name__24552__auto__,value__24553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__24552__auto__,value__24553__auto__);
});

sablono.core.month_field24659.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field24659);

/**
 * Creates a number input field.
 */
sablono.core.number_field24663 = (function sablono$core$number_field24663(var_args){
var args24664 = [];
var len__17863__auto___24731 = arguments.length;
var i__17864__auto___24732 = (0);
while(true){
if((i__17864__auto___24732 < len__17863__auto___24731)){
args24664.push((arguments[i__17864__auto___24732]));

var G__24733 = (i__17864__auto___24732 + (1));
i__17864__auto___24732 = G__24733;
continue;
} else {
}
break;
}

var G__24666 = args24664.length;
switch (G__24666) {
case 1:
return sablono.core.number_field24663.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field24663.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24664.length)].join('')));

}
});

sablono.core.number_field24663.cljs$core$IFn$_invoke$arity$1 = (function (name__24552__auto__){
return sablono.core.number_field24663.call(null,name__24552__auto__,null);
});

sablono.core.number_field24663.cljs$core$IFn$_invoke$arity$2 = (function (name__24552__auto__,value__24553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__24552__auto__,value__24553__auto__);
});

sablono.core.number_field24663.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field24663);

/**
 * Creates a password input field.
 */
sablono.core.password_field24667 = (function sablono$core$password_field24667(var_args){
var args24668 = [];
var len__17863__auto___24735 = arguments.length;
var i__17864__auto___24736 = (0);
while(true){
if((i__17864__auto___24736 < len__17863__auto___24735)){
args24668.push((arguments[i__17864__auto___24736]));

var G__24737 = (i__17864__auto___24736 + (1));
i__17864__auto___24736 = G__24737;
continue;
} else {
}
break;
}

var G__24670 = args24668.length;
switch (G__24670) {
case 1:
return sablono.core.password_field24667.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field24667.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24668.length)].join('')));

}
});

sablono.core.password_field24667.cljs$core$IFn$_invoke$arity$1 = (function (name__24552__auto__){
return sablono.core.password_field24667.call(null,name__24552__auto__,null);
});

sablono.core.password_field24667.cljs$core$IFn$_invoke$arity$2 = (function (name__24552__auto__,value__24553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__24552__auto__,value__24553__auto__);
});

sablono.core.password_field24667.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field24667);

/**
 * Creates a range input field.
 */
sablono.core.range_field24671 = (function sablono$core$range_field24671(var_args){
var args24672 = [];
var len__17863__auto___24739 = arguments.length;
var i__17864__auto___24740 = (0);
while(true){
if((i__17864__auto___24740 < len__17863__auto___24739)){
args24672.push((arguments[i__17864__auto___24740]));

var G__24741 = (i__17864__auto___24740 + (1));
i__17864__auto___24740 = G__24741;
continue;
} else {
}
break;
}

var G__24674 = args24672.length;
switch (G__24674) {
case 1:
return sablono.core.range_field24671.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field24671.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24672.length)].join('')));

}
});

sablono.core.range_field24671.cljs$core$IFn$_invoke$arity$1 = (function (name__24552__auto__){
return sablono.core.range_field24671.call(null,name__24552__auto__,null);
});

sablono.core.range_field24671.cljs$core$IFn$_invoke$arity$2 = (function (name__24552__auto__,value__24553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__24552__auto__,value__24553__auto__);
});

sablono.core.range_field24671.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field24671);

/**
 * Creates a search input field.
 */
sablono.core.search_field24675 = (function sablono$core$search_field24675(var_args){
var args24676 = [];
var len__17863__auto___24743 = arguments.length;
var i__17864__auto___24744 = (0);
while(true){
if((i__17864__auto___24744 < len__17863__auto___24743)){
args24676.push((arguments[i__17864__auto___24744]));

var G__24745 = (i__17864__auto___24744 + (1));
i__17864__auto___24744 = G__24745;
continue;
} else {
}
break;
}

var G__24678 = args24676.length;
switch (G__24678) {
case 1:
return sablono.core.search_field24675.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field24675.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24676.length)].join('')));

}
});

sablono.core.search_field24675.cljs$core$IFn$_invoke$arity$1 = (function (name__24552__auto__){
return sablono.core.search_field24675.call(null,name__24552__auto__,null);
});

sablono.core.search_field24675.cljs$core$IFn$_invoke$arity$2 = (function (name__24552__auto__,value__24553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__24552__auto__,value__24553__auto__);
});

sablono.core.search_field24675.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field24675);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field24679 = (function sablono$core$tel_field24679(var_args){
var args24680 = [];
var len__17863__auto___24747 = arguments.length;
var i__17864__auto___24748 = (0);
while(true){
if((i__17864__auto___24748 < len__17863__auto___24747)){
args24680.push((arguments[i__17864__auto___24748]));

var G__24749 = (i__17864__auto___24748 + (1));
i__17864__auto___24748 = G__24749;
continue;
} else {
}
break;
}

var G__24682 = args24680.length;
switch (G__24682) {
case 1:
return sablono.core.tel_field24679.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field24679.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24680.length)].join('')));

}
});

sablono.core.tel_field24679.cljs$core$IFn$_invoke$arity$1 = (function (name__24552__auto__){
return sablono.core.tel_field24679.call(null,name__24552__auto__,null);
});

sablono.core.tel_field24679.cljs$core$IFn$_invoke$arity$2 = (function (name__24552__auto__,value__24553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__24552__auto__,value__24553__auto__);
});

sablono.core.tel_field24679.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field24679);

/**
 * Creates a text input field.
 */
sablono.core.text_field24683 = (function sablono$core$text_field24683(var_args){
var args24684 = [];
var len__17863__auto___24751 = arguments.length;
var i__17864__auto___24752 = (0);
while(true){
if((i__17864__auto___24752 < len__17863__auto___24751)){
args24684.push((arguments[i__17864__auto___24752]));

var G__24753 = (i__17864__auto___24752 + (1));
i__17864__auto___24752 = G__24753;
continue;
} else {
}
break;
}

var G__24686 = args24684.length;
switch (G__24686) {
case 1:
return sablono.core.text_field24683.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field24683.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24684.length)].join('')));

}
});

sablono.core.text_field24683.cljs$core$IFn$_invoke$arity$1 = (function (name__24552__auto__){
return sablono.core.text_field24683.call(null,name__24552__auto__,null);
});

sablono.core.text_field24683.cljs$core$IFn$_invoke$arity$2 = (function (name__24552__auto__,value__24553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__24552__auto__,value__24553__auto__);
});

sablono.core.text_field24683.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field24683);

/**
 * Creates a time input field.
 */
sablono.core.time_field24687 = (function sablono$core$time_field24687(var_args){
var args24688 = [];
var len__17863__auto___24755 = arguments.length;
var i__17864__auto___24756 = (0);
while(true){
if((i__17864__auto___24756 < len__17863__auto___24755)){
args24688.push((arguments[i__17864__auto___24756]));

var G__24757 = (i__17864__auto___24756 + (1));
i__17864__auto___24756 = G__24757;
continue;
} else {
}
break;
}

var G__24690 = args24688.length;
switch (G__24690) {
case 1:
return sablono.core.time_field24687.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field24687.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24688.length)].join('')));

}
});

sablono.core.time_field24687.cljs$core$IFn$_invoke$arity$1 = (function (name__24552__auto__){
return sablono.core.time_field24687.call(null,name__24552__auto__,null);
});

sablono.core.time_field24687.cljs$core$IFn$_invoke$arity$2 = (function (name__24552__auto__,value__24553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__24552__auto__,value__24553__auto__);
});

sablono.core.time_field24687.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field24687);

/**
 * Creates a url input field.
 */
sablono.core.url_field24691 = (function sablono$core$url_field24691(var_args){
var args24692 = [];
var len__17863__auto___24759 = arguments.length;
var i__17864__auto___24760 = (0);
while(true){
if((i__17864__auto___24760 < len__17863__auto___24759)){
args24692.push((arguments[i__17864__auto___24760]));

var G__24761 = (i__17864__auto___24760 + (1));
i__17864__auto___24760 = G__24761;
continue;
} else {
}
break;
}

var G__24694 = args24692.length;
switch (G__24694) {
case 1:
return sablono.core.url_field24691.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field24691.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24692.length)].join('')));

}
});

sablono.core.url_field24691.cljs$core$IFn$_invoke$arity$1 = (function (name__24552__auto__){
return sablono.core.url_field24691.call(null,name__24552__auto__,null);
});

sablono.core.url_field24691.cljs$core$IFn$_invoke$arity$2 = (function (name__24552__auto__,value__24553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__24552__auto__,value__24553__auto__);
});

sablono.core.url_field24691.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field24691);

/**
 * Creates a week input field.
 */
sablono.core.week_field24695 = (function sablono$core$week_field24695(var_args){
var args24696 = [];
var len__17863__auto___24763 = arguments.length;
var i__17864__auto___24764 = (0);
while(true){
if((i__17864__auto___24764 < len__17863__auto___24763)){
args24696.push((arguments[i__17864__auto___24764]));

var G__24765 = (i__17864__auto___24764 + (1));
i__17864__auto___24764 = G__24765;
continue;
} else {
}
break;
}

var G__24698 = args24696.length;
switch (G__24698) {
case 1:
return sablono.core.week_field24695.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field24695.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24696.length)].join('')));

}
});

sablono.core.week_field24695.cljs$core$IFn$_invoke$arity$1 = (function (name__24552__auto__){
return sablono.core.week_field24695.call(null,name__24552__auto__,null);
});

sablono.core.week_field24695.cljs$core$IFn$_invoke$arity$2 = (function (name__24552__auto__,value__24553__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__24552__auto__,value__24553__auto__);
});

sablono.core.week_field24695.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field24695);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box24767 = (function sablono$core$check_box24767(var_args){
var args24768 = [];
var len__17863__auto___24771 = arguments.length;
var i__17864__auto___24772 = (0);
while(true){
if((i__17864__auto___24772 < len__17863__auto___24771)){
args24768.push((arguments[i__17864__auto___24772]));

var G__24773 = (i__17864__auto___24772 + (1));
i__17864__auto___24772 = G__24773;
continue;
} else {
}
break;
}

var G__24770 = args24768.length;
switch (G__24770) {
case 1:
return sablono.core.check_box24767.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box24767.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box24767.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24768.length)].join('')));

}
});

sablono.core.check_box24767.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box24767.call(null,name,null);
});

sablono.core.check_box24767.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box24767.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box24767.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box24767.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box24767);
/**
 * Creates a radio button.
 */
sablono.core.radio_button24775 = (function sablono$core$radio_button24775(var_args){
var args24776 = [];
var len__17863__auto___24779 = arguments.length;
var i__17864__auto___24780 = (0);
while(true){
if((i__17864__auto___24780 < len__17863__auto___24779)){
args24776.push((arguments[i__17864__auto___24780]));

var G__24781 = (i__17864__auto___24780 + (1));
i__17864__auto___24780 = G__24781;
continue;
} else {
}
break;
}

var G__24778 = args24776.length;
switch (G__24778) {
case 1:
return sablono.core.radio_button24775.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button24775.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button24775.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24776.length)].join('')));

}
});

sablono.core.radio_button24775.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button24775.call(null,group,null);
});

sablono.core.radio_button24775.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button24775.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button24775.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button24775.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button24775);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options24783 = (function sablono$core$select_options24783(coll){
var iter__17577__auto__ = (function sablono$core$select_options24783_$_iter__24792(s__24793){
return (new cljs.core.LazySeq(null,(function (){
var s__24793__$1 = s__24793;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__24793__$1);
if(temp__4425__auto__){
var s__24793__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__24793__$2)){
var c__17575__auto__ = cljs.core.chunk_first.call(null,s__24793__$2);
var size__17576__auto__ = cljs.core.count.call(null,c__17575__auto__);
var b__24795 = cljs.core.chunk_buffer.call(null,size__17576__auto__);
if((function (){var i__24794 = (0);
while(true){
if((i__24794 < size__17576__auto__)){
var x = cljs.core._nth.call(null,c__17575__auto__,i__24794);
cljs.core.chunk_append.call(null,b__24795,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24798 = x;
var text = cljs.core.nth.call(null,vec__24798,(0),null);
var val = cljs.core.nth.call(null,vec__24798,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24798,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options24783.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__24800 = (i__24794 + (1));
i__24794 = G__24800;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24795),sablono$core$select_options24783_$_iter__24792.call(null,cljs.core.chunk_rest.call(null,s__24793__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__24795),null);
}
} else {
var x = cljs.core.first.call(null,s__24793__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__24799 = x;
var text = cljs.core.nth.call(null,vec__24799,(0),null);
var val = cljs.core.nth.call(null,vec__24799,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__24799,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options24783.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options24783_$_iter__24792.call(null,cljs.core.rest.call(null,s__24793__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17577__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options24783);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down24801 = (function sablono$core$drop_down24801(var_args){
var args24802 = [];
var len__17863__auto___24805 = arguments.length;
var i__17864__auto___24806 = (0);
while(true){
if((i__17864__auto___24806 < len__17863__auto___24805)){
args24802.push((arguments[i__17864__auto___24806]));

var G__24807 = (i__17864__auto___24806 + (1));
i__17864__auto___24806 = G__24807;
continue;
} else {
}
break;
}

var G__24804 = args24802.length;
switch (G__24804) {
case 2:
return sablono.core.drop_down24801.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down24801.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24802.length)].join('')));

}
});

sablono.core.drop_down24801.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down24801.call(null,name,options,null);
});

sablono.core.drop_down24801.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down24801.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down24801);
/**
 * Creates a text area element.
 */
sablono.core.text_area24809 = (function sablono$core$text_area24809(var_args){
var args24810 = [];
var len__17863__auto___24813 = arguments.length;
var i__17864__auto___24814 = (0);
while(true){
if((i__17864__auto___24814 < len__17863__auto___24813)){
args24810.push((arguments[i__17864__auto___24814]));

var G__24815 = (i__17864__auto___24814 + (1));
i__17864__auto___24814 = G__24815;
continue;
} else {
}
break;
}

var G__24812 = args24810.length;
switch (G__24812) {
case 1:
return sablono.core.text_area24809.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area24809.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24810.length)].join('')));

}
});

sablono.core.text_area24809.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area24809.call(null,name,null);
});

sablono.core.text_area24809.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area24809.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area24809);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label24817 = (function sablono$core$label24817(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label24817);
/**
 * Creates a submit button.
 */
sablono.core.submit_button24818 = (function sablono$core$submit_button24818(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button24818);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button24819 = (function sablono$core$reset_button24819(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button24819);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to24820 = (function sablono$core$form_to24820(var_args){
var args__17870__auto__ = [];
var len__17863__auto___24825 = arguments.length;
var i__17864__auto___24826 = (0);
while(true){
if((i__17864__auto___24826 < len__17863__auto___24825)){
args__17870__auto__.push((arguments[i__17864__auto___24826]));

var G__24827 = (i__17864__auto___24826 + (1));
i__17864__auto___24826 = G__24827;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((1) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((1)),(0))):null);
return sablono.core.form_to24820.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17871__auto__);
});

sablono.core.form_to24820.cljs$core$IFn$_invoke$arity$variadic = (function (p__24823,body){
var vec__24824 = p__24823;
var method = cljs.core.nth.call(null,vec__24824,(0),null);
var action = cljs.core.nth.call(null,vec__24824,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to24820.cljs$lang$maxFixedArity = (1);

sablono.core.form_to24820.cljs$lang$applyTo = (function (seq24821){
var G__24822 = cljs.core.first.call(null,seq24821);
var seq24821__$1 = cljs.core.next.call(null,seq24821);
return sablono.core.form_to24820.cljs$core$IFn$_invoke$arity$variadic(G__24822,seq24821__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to24820);

//# sourceMappingURL=core.js.map?rel=1457416899768