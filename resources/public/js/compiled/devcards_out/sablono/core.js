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
var G__30522__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__30521 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__30521,(0),null);
var body = cljs.core.nthnext.call(null,vec__30521,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__30522 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30523__i = 0, G__30523__a = new Array(arguments.length -  0);
while (G__30523__i < G__30523__a.length) {G__30523__a[G__30523__i] = arguments[G__30523__i + 0]; ++G__30523__i;}
  args = new cljs.core.IndexedSeq(G__30523__a,0);
} 
return G__30522__delegate.call(this,args);};
G__30522.cljs$lang$maxFixedArity = 0;
G__30522.cljs$lang$applyTo = (function (arglist__30524){
var args = cljs.core.seq(arglist__30524);
return G__30522__delegate(args);
});
G__30522.cljs$core$IFn$_invoke$arity$variadic = G__30522__delegate;
return G__30522;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__17591__auto__ = (function sablono$core$update_arglists_$_iter__30529(s__30530){
return (new cljs.core.LazySeq(null,(function (){
var s__30530__$1 = s__30530;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30530__$1);
if(temp__4425__auto__){
var s__30530__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30530__$2)){
var c__17589__auto__ = cljs.core.chunk_first.call(null,s__30530__$2);
var size__17590__auto__ = cljs.core.count.call(null,c__17589__auto__);
var b__30532 = cljs.core.chunk_buffer.call(null,size__17590__auto__);
if((function (){var i__30531 = (0);
while(true){
if((i__30531 < size__17590__auto__)){
var args = cljs.core._nth.call(null,c__17589__auto__,i__30531);
cljs.core.chunk_append.call(null,b__30532,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__30533 = (i__30531 + (1));
i__30531 = G__30533;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30532),sablono$core$update_arglists_$_iter__30529.call(null,cljs.core.chunk_rest.call(null,s__30530__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30532),null);
}
} else {
var args = cljs.core.first.call(null,s__30530__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__30529.call(null,cljs.core.rest.call(null,s__30530__$2)));
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
var len__17877__auto___30539 = arguments.length;
var i__17878__auto___30540 = (0);
while(true){
if((i__17878__auto___30540 < len__17877__auto___30539)){
args__17884__auto__.push((arguments[i__17878__auto___30540]));

var G__30541 = (i__17878__auto___30540 + (1));
i__17878__auto___30540 = G__30541;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((0) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17885__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__17591__auto__ = (function sablono$core$iter__30535(s__30536){
return (new cljs.core.LazySeq(null,(function (){
var s__30536__$1 = s__30536;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30536__$1);
if(temp__4425__auto__){
var s__30536__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30536__$2)){
var c__17589__auto__ = cljs.core.chunk_first.call(null,s__30536__$2);
var size__17590__auto__ = cljs.core.count.call(null,c__17589__auto__);
var b__30538 = cljs.core.chunk_buffer.call(null,size__17590__auto__);
if((function (){var i__30537 = (0);
while(true){
if((i__30537 < size__17590__auto__)){
var style = cljs.core._nth.call(null,c__17589__auto__,i__30537);
cljs.core.chunk_append.call(null,b__30538,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__30542 = (i__30537 + (1));
i__30537 = G__30542;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30538),sablono$core$iter__30535.call(null,cljs.core.chunk_rest.call(null,s__30536__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30538),null);
}
} else {
var style = cljs.core.first.call(null,s__30536__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__30535.call(null,cljs.core.rest.call(null,s__30536__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq30534){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30534));
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
sablono.core.link_to30543 = (function sablono$core$link_to30543(var_args){
var args__17884__auto__ = [];
var len__17877__auto___30546 = arguments.length;
var i__17878__auto___30547 = (0);
while(true){
if((i__17878__auto___30547 < len__17877__auto___30546)){
args__17884__auto__.push((arguments[i__17878__auto___30547]));

var G__30548 = (i__17878__auto___30547 + (1));
i__17878__auto___30547 = G__30548;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((1) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((1)),(0))):null);
return sablono.core.link_to30543.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17885__auto__);
});

sablono.core.link_to30543.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to30543.cljs$lang$maxFixedArity = (1);

sablono.core.link_to30543.cljs$lang$applyTo = (function (seq30544){
var G__30545 = cljs.core.first.call(null,seq30544);
var seq30544__$1 = cljs.core.next.call(null,seq30544);
return sablono.core.link_to30543.cljs$core$IFn$_invoke$arity$variadic(G__30545,seq30544__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to30543);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to30549 = (function sablono$core$mail_to30549(var_args){
var args__17884__auto__ = [];
var len__17877__auto___30554 = arguments.length;
var i__17878__auto___30555 = (0);
while(true){
if((i__17878__auto___30555 < len__17877__auto___30554)){
args__17884__auto__.push((arguments[i__17878__auto___30555]));

var G__30556 = (i__17878__auto___30555 + (1));
i__17878__auto___30555 = G__30556;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((1) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((1)),(0))):null);
return sablono.core.mail_to30549.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17885__auto__);
});

sablono.core.mail_to30549.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__30552){
var vec__30553 = p__30552;
var content = cljs.core.nth.call(null,vec__30553,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16819__auto__ = content;
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to30549.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to30549.cljs$lang$applyTo = (function (seq30550){
var G__30551 = cljs.core.first.call(null,seq30550);
var seq30550__$1 = cljs.core.next.call(null,seq30550);
return sablono.core.mail_to30549.cljs$core$IFn$_invoke$arity$variadic(G__30551,seq30550__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to30549);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list30557 = (function sablono$core$unordered_list30557(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__17591__auto__ = (function sablono$core$unordered_list30557_$_iter__30562(s__30563){
return (new cljs.core.LazySeq(null,(function (){
var s__30563__$1 = s__30563;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30563__$1);
if(temp__4425__auto__){
var s__30563__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30563__$2)){
var c__17589__auto__ = cljs.core.chunk_first.call(null,s__30563__$2);
var size__17590__auto__ = cljs.core.count.call(null,c__17589__auto__);
var b__30565 = cljs.core.chunk_buffer.call(null,size__17590__auto__);
if((function (){var i__30564 = (0);
while(true){
if((i__30564 < size__17590__auto__)){
var x = cljs.core._nth.call(null,c__17589__auto__,i__30564);
cljs.core.chunk_append.call(null,b__30565,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__30566 = (i__30564 + (1));
i__30564 = G__30566;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30565),sablono$core$unordered_list30557_$_iter__30562.call(null,cljs.core.chunk_rest.call(null,s__30563__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30565),null);
}
} else {
var x = cljs.core.first.call(null,s__30563__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list30557_$_iter__30562.call(null,cljs.core.rest.call(null,s__30563__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list30557);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list30567 = (function sablono$core$ordered_list30567(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__17591__auto__ = (function sablono$core$ordered_list30567_$_iter__30572(s__30573){
return (new cljs.core.LazySeq(null,(function (){
var s__30573__$1 = s__30573;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30573__$1);
if(temp__4425__auto__){
var s__30573__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30573__$2)){
var c__17589__auto__ = cljs.core.chunk_first.call(null,s__30573__$2);
var size__17590__auto__ = cljs.core.count.call(null,c__17589__auto__);
var b__30575 = cljs.core.chunk_buffer.call(null,size__17590__auto__);
if((function (){var i__30574 = (0);
while(true){
if((i__30574 < size__17590__auto__)){
var x = cljs.core._nth.call(null,c__17589__auto__,i__30574);
cljs.core.chunk_append.call(null,b__30575,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__30576 = (i__30574 + (1));
i__30574 = G__30576;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30575),sablono$core$ordered_list30567_$_iter__30572.call(null,cljs.core.chunk_rest.call(null,s__30573__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30575),null);
}
} else {
var x = cljs.core.first.call(null,s__30573__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list30567_$_iter__30572.call(null,cljs.core.rest.call(null,s__30573__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list30567);
/**
 * Create an image element.
 */
sablono.core.image30577 = (function sablono$core$image30577(var_args){
var args30578 = [];
var len__17877__auto___30581 = arguments.length;
var i__17878__auto___30582 = (0);
while(true){
if((i__17878__auto___30582 < len__17877__auto___30581)){
args30578.push((arguments[i__17878__auto___30582]));

var G__30583 = (i__17878__auto___30582 + (1));
i__17878__auto___30582 = G__30583;
continue;
} else {
}
break;
}

var G__30580 = args30578.length;
switch (G__30580) {
case 1:
return sablono.core.image30577.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image30577.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30578.length)].join('')));

}
});

sablono.core.image30577.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image30577.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image30577.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image30577);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__30585_SHARP_,p2__30586_SHARP_){
return [cljs.core.str(p1__30585_SHARP_),cljs.core.str("["),cljs.core.str(p2__30586_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__30587_SHARP_,p2__30588_SHARP_){
return [cljs.core.str(p1__30587_SHARP_),cljs.core.str("-"),cljs.core.str(p2__30588_SHARP_)].join('');
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
sablono.core.color_field30589 = (function sablono$core$color_field30589(var_args){
var args30590 = [];
var len__17877__auto___30657 = arguments.length;
var i__17878__auto___30658 = (0);
while(true){
if((i__17878__auto___30658 < len__17877__auto___30657)){
args30590.push((arguments[i__17878__auto___30658]));

var G__30659 = (i__17878__auto___30658 + (1));
i__17878__auto___30658 = G__30659;
continue;
} else {
}
break;
}

var G__30592 = args30590.length;
switch (G__30592) {
case 1:
return sablono.core.color_field30589.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field30589.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30590.length)].join('')));

}
});

sablono.core.color_field30589.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.color_field30589.call(null,name__19410__auto__,null);
});

sablono.core.color_field30589.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.color_field30589.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field30589);

/**
 * Creates a date input field.
 */
sablono.core.date_field30593 = (function sablono$core$date_field30593(var_args){
var args30594 = [];
var len__17877__auto___30661 = arguments.length;
var i__17878__auto___30662 = (0);
while(true){
if((i__17878__auto___30662 < len__17877__auto___30661)){
args30594.push((arguments[i__17878__auto___30662]));

var G__30663 = (i__17878__auto___30662 + (1));
i__17878__auto___30662 = G__30663;
continue;
} else {
}
break;
}

var G__30596 = args30594.length;
switch (G__30596) {
case 1:
return sablono.core.date_field30593.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field30593.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30594.length)].join('')));

}
});

sablono.core.date_field30593.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.date_field30593.call(null,name__19410__auto__,null);
});

sablono.core.date_field30593.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.date_field30593.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field30593);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field30597 = (function sablono$core$datetime_field30597(var_args){
var args30598 = [];
var len__17877__auto___30665 = arguments.length;
var i__17878__auto___30666 = (0);
while(true){
if((i__17878__auto___30666 < len__17877__auto___30665)){
args30598.push((arguments[i__17878__auto___30666]));

var G__30667 = (i__17878__auto___30666 + (1));
i__17878__auto___30666 = G__30667;
continue;
} else {
}
break;
}

var G__30600 = args30598.length;
switch (G__30600) {
case 1:
return sablono.core.datetime_field30597.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field30597.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30598.length)].join('')));

}
});

sablono.core.datetime_field30597.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.datetime_field30597.call(null,name__19410__auto__,null);
});

sablono.core.datetime_field30597.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.datetime_field30597.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field30597);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field30601 = (function sablono$core$datetime_local_field30601(var_args){
var args30602 = [];
var len__17877__auto___30669 = arguments.length;
var i__17878__auto___30670 = (0);
while(true){
if((i__17878__auto___30670 < len__17877__auto___30669)){
args30602.push((arguments[i__17878__auto___30670]));

var G__30671 = (i__17878__auto___30670 + (1));
i__17878__auto___30670 = G__30671;
continue;
} else {
}
break;
}

var G__30604 = args30602.length;
switch (G__30604) {
case 1:
return sablono.core.datetime_local_field30601.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field30601.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30602.length)].join('')));

}
});

sablono.core.datetime_local_field30601.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.datetime_local_field30601.call(null,name__19410__auto__,null);
});

sablono.core.datetime_local_field30601.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.datetime_local_field30601.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field30601);

/**
 * Creates a email input field.
 */
sablono.core.email_field30605 = (function sablono$core$email_field30605(var_args){
var args30606 = [];
var len__17877__auto___30673 = arguments.length;
var i__17878__auto___30674 = (0);
while(true){
if((i__17878__auto___30674 < len__17877__auto___30673)){
args30606.push((arguments[i__17878__auto___30674]));

var G__30675 = (i__17878__auto___30674 + (1));
i__17878__auto___30674 = G__30675;
continue;
} else {
}
break;
}

var G__30608 = args30606.length;
switch (G__30608) {
case 1:
return sablono.core.email_field30605.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field30605.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30606.length)].join('')));

}
});

sablono.core.email_field30605.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.email_field30605.call(null,name__19410__auto__,null);
});

sablono.core.email_field30605.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.email_field30605.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field30605);

/**
 * Creates a file input field.
 */
sablono.core.file_field30609 = (function sablono$core$file_field30609(var_args){
var args30610 = [];
var len__17877__auto___30677 = arguments.length;
var i__17878__auto___30678 = (0);
while(true){
if((i__17878__auto___30678 < len__17877__auto___30677)){
args30610.push((arguments[i__17878__auto___30678]));

var G__30679 = (i__17878__auto___30678 + (1));
i__17878__auto___30678 = G__30679;
continue;
} else {
}
break;
}

var G__30612 = args30610.length;
switch (G__30612) {
case 1:
return sablono.core.file_field30609.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field30609.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30610.length)].join('')));

}
});

sablono.core.file_field30609.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.file_field30609.call(null,name__19410__auto__,null);
});

sablono.core.file_field30609.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.file_field30609.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field30609);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field30613 = (function sablono$core$hidden_field30613(var_args){
var args30614 = [];
var len__17877__auto___30681 = arguments.length;
var i__17878__auto___30682 = (0);
while(true){
if((i__17878__auto___30682 < len__17877__auto___30681)){
args30614.push((arguments[i__17878__auto___30682]));

var G__30683 = (i__17878__auto___30682 + (1));
i__17878__auto___30682 = G__30683;
continue;
} else {
}
break;
}

var G__30616 = args30614.length;
switch (G__30616) {
case 1:
return sablono.core.hidden_field30613.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field30613.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30614.length)].join('')));

}
});

sablono.core.hidden_field30613.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.hidden_field30613.call(null,name__19410__auto__,null);
});

sablono.core.hidden_field30613.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.hidden_field30613.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field30613);

/**
 * Creates a month input field.
 */
sablono.core.month_field30617 = (function sablono$core$month_field30617(var_args){
var args30618 = [];
var len__17877__auto___30685 = arguments.length;
var i__17878__auto___30686 = (0);
while(true){
if((i__17878__auto___30686 < len__17877__auto___30685)){
args30618.push((arguments[i__17878__auto___30686]));

var G__30687 = (i__17878__auto___30686 + (1));
i__17878__auto___30686 = G__30687;
continue;
} else {
}
break;
}

var G__30620 = args30618.length;
switch (G__30620) {
case 1:
return sablono.core.month_field30617.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field30617.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30618.length)].join('')));

}
});

sablono.core.month_field30617.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.month_field30617.call(null,name__19410__auto__,null);
});

sablono.core.month_field30617.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.month_field30617.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field30617);

/**
 * Creates a number input field.
 */
sablono.core.number_field30621 = (function sablono$core$number_field30621(var_args){
var args30622 = [];
var len__17877__auto___30689 = arguments.length;
var i__17878__auto___30690 = (0);
while(true){
if((i__17878__auto___30690 < len__17877__auto___30689)){
args30622.push((arguments[i__17878__auto___30690]));

var G__30691 = (i__17878__auto___30690 + (1));
i__17878__auto___30690 = G__30691;
continue;
} else {
}
break;
}

var G__30624 = args30622.length;
switch (G__30624) {
case 1:
return sablono.core.number_field30621.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field30621.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30622.length)].join('')));

}
});

sablono.core.number_field30621.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.number_field30621.call(null,name__19410__auto__,null);
});

sablono.core.number_field30621.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.number_field30621.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field30621);

/**
 * Creates a password input field.
 */
sablono.core.password_field30625 = (function sablono$core$password_field30625(var_args){
var args30626 = [];
var len__17877__auto___30693 = arguments.length;
var i__17878__auto___30694 = (0);
while(true){
if((i__17878__auto___30694 < len__17877__auto___30693)){
args30626.push((arguments[i__17878__auto___30694]));

var G__30695 = (i__17878__auto___30694 + (1));
i__17878__auto___30694 = G__30695;
continue;
} else {
}
break;
}

var G__30628 = args30626.length;
switch (G__30628) {
case 1:
return sablono.core.password_field30625.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field30625.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30626.length)].join('')));

}
});

sablono.core.password_field30625.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.password_field30625.call(null,name__19410__auto__,null);
});

sablono.core.password_field30625.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.password_field30625.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field30625);

/**
 * Creates a range input field.
 */
sablono.core.range_field30629 = (function sablono$core$range_field30629(var_args){
var args30630 = [];
var len__17877__auto___30697 = arguments.length;
var i__17878__auto___30698 = (0);
while(true){
if((i__17878__auto___30698 < len__17877__auto___30697)){
args30630.push((arguments[i__17878__auto___30698]));

var G__30699 = (i__17878__auto___30698 + (1));
i__17878__auto___30698 = G__30699;
continue;
} else {
}
break;
}

var G__30632 = args30630.length;
switch (G__30632) {
case 1:
return sablono.core.range_field30629.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field30629.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30630.length)].join('')));

}
});

sablono.core.range_field30629.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.range_field30629.call(null,name__19410__auto__,null);
});

sablono.core.range_field30629.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.range_field30629.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field30629);

/**
 * Creates a search input field.
 */
sablono.core.search_field30633 = (function sablono$core$search_field30633(var_args){
var args30634 = [];
var len__17877__auto___30701 = arguments.length;
var i__17878__auto___30702 = (0);
while(true){
if((i__17878__auto___30702 < len__17877__auto___30701)){
args30634.push((arguments[i__17878__auto___30702]));

var G__30703 = (i__17878__auto___30702 + (1));
i__17878__auto___30702 = G__30703;
continue;
} else {
}
break;
}

var G__30636 = args30634.length;
switch (G__30636) {
case 1:
return sablono.core.search_field30633.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field30633.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30634.length)].join('')));

}
});

sablono.core.search_field30633.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.search_field30633.call(null,name__19410__auto__,null);
});

sablono.core.search_field30633.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.search_field30633.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field30633);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field30637 = (function sablono$core$tel_field30637(var_args){
var args30638 = [];
var len__17877__auto___30705 = arguments.length;
var i__17878__auto___30706 = (0);
while(true){
if((i__17878__auto___30706 < len__17877__auto___30705)){
args30638.push((arguments[i__17878__auto___30706]));

var G__30707 = (i__17878__auto___30706 + (1));
i__17878__auto___30706 = G__30707;
continue;
} else {
}
break;
}

var G__30640 = args30638.length;
switch (G__30640) {
case 1:
return sablono.core.tel_field30637.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field30637.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30638.length)].join('')));

}
});

sablono.core.tel_field30637.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.tel_field30637.call(null,name__19410__auto__,null);
});

sablono.core.tel_field30637.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.tel_field30637.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field30637);

/**
 * Creates a text input field.
 */
sablono.core.text_field30641 = (function sablono$core$text_field30641(var_args){
var args30642 = [];
var len__17877__auto___30709 = arguments.length;
var i__17878__auto___30710 = (0);
while(true){
if((i__17878__auto___30710 < len__17877__auto___30709)){
args30642.push((arguments[i__17878__auto___30710]));

var G__30711 = (i__17878__auto___30710 + (1));
i__17878__auto___30710 = G__30711;
continue;
} else {
}
break;
}

var G__30644 = args30642.length;
switch (G__30644) {
case 1:
return sablono.core.text_field30641.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field30641.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30642.length)].join('')));

}
});

sablono.core.text_field30641.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.text_field30641.call(null,name__19410__auto__,null);
});

sablono.core.text_field30641.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.text_field30641.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field30641);

/**
 * Creates a time input field.
 */
sablono.core.time_field30645 = (function sablono$core$time_field30645(var_args){
var args30646 = [];
var len__17877__auto___30713 = arguments.length;
var i__17878__auto___30714 = (0);
while(true){
if((i__17878__auto___30714 < len__17877__auto___30713)){
args30646.push((arguments[i__17878__auto___30714]));

var G__30715 = (i__17878__auto___30714 + (1));
i__17878__auto___30714 = G__30715;
continue;
} else {
}
break;
}

var G__30648 = args30646.length;
switch (G__30648) {
case 1:
return sablono.core.time_field30645.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field30645.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30646.length)].join('')));

}
});

sablono.core.time_field30645.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.time_field30645.call(null,name__19410__auto__,null);
});

sablono.core.time_field30645.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.time_field30645.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field30645);

/**
 * Creates a url input field.
 */
sablono.core.url_field30649 = (function sablono$core$url_field30649(var_args){
var args30650 = [];
var len__17877__auto___30717 = arguments.length;
var i__17878__auto___30718 = (0);
while(true){
if((i__17878__auto___30718 < len__17877__auto___30717)){
args30650.push((arguments[i__17878__auto___30718]));

var G__30719 = (i__17878__auto___30718 + (1));
i__17878__auto___30718 = G__30719;
continue;
} else {
}
break;
}

var G__30652 = args30650.length;
switch (G__30652) {
case 1:
return sablono.core.url_field30649.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field30649.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30650.length)].join('')));

}
});

sablono.core.url_field30649.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.url_field30649.call(null,name__19410__auto__,null);
});

sablono.core.url_field30649.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.url_field30649.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field30649);

/**
 * Creates a week input field.
 */
sablono.core.week_field30653 = (function sablono$core$week_field30653(var_args){
var args30654 = [];
var len__17877__auto___30721 = arguments.length;
var i__17878__auto___30722 = (0);
while(true){
if((i__17878__auto___30722 < len__17877__auto___30721)){
args30654.push((arguments[i__17878__auto___30722]));

var G__30723 = (i__17878__auto___30722 + (1));
i__17878__auto___30722 = G__30723;
continue;
} else {
}
break;
}

var G__30656 = args30654.length;
switch (G__30656) {
case 1:
return sablono.core.week_field30653.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field30653.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30654.length)].join('')));

}
});

sablono.core.week_field30653.cljs$core$IFn$_invoke$arity$1 = (function (name__19410__auto__){
return sablono.core.week_field30653.call(null,name__19410__auto__,null);
});

sablono.core.week_field30653.cljs$core$IFn$_invoke$arity$2 = (function (name__19410__auto__,value__19411__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__19410__auto__,value__19411__auto__);
});

sablono.core.week_field30653.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field30653);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box30725 = (function sablono$core$check_box30725(var_args){
var args30726 = [];
var len__17877__auto___30729 = arguments.length;
var i__17878__auto___30730 = (0);
while(true){
if((i__17878__auto___30730 < len__17877__auto___30729)){
args30726.push((arguments[i__17878__auto___30730]));

var G__30731 = (i__17878__auto___30730 + (1));
i__17878__auto___30730 = G__30731;
continue;
} else {
}
break;
}

var G__30728 = args30726.length;
switch (G__30728) {
case 1:
return sablono.core.check_box30725.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box30725.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box30725.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30726.length)].join('')));

}
});

sablono.core.check_box30725.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box30725.call(null,name,null);
});

sablono.core.check_box30725.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box30725.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box30725.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box30725.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box30725);
/**
 * Creates a radio button.
 */
sablono.core.radio_button30733 = (function sablono$core$radio_button30733(var_args){
var args30734 = [];
var len__17877__auto___30737 = arguments.length;
var i__17878__auto___30738 = (0);
while(true){
if((i__17878__auto___30738 < len__17877__auto___30737)){
args30734.push((arguments[i__17878__auto___30738]));

var G__30739 = (i__17878__auto___30738 + (1));
i__17878__auto___30738 = G__30739;
continue;
} else {
}
break;
}

var G__30736 = args30734.length;
switch (G__30736) {
case 1:
return sablono.core.radio_button30733.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button30733.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button30733.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30734.length)].join('')));

}
});

sablono.core.radio_button30733.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button30733.call(null,group,null);
});

sablono.core.radio_button30733.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button30733.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button30733.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button30733.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button30733);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options30741 = (function sablono$core$select_options30741(coll){
var iter__17591__auto__ = (function sablono$core$select_options30741_$_iter__30750(s__30751){
return (new cljs.core.LazySeq(null,(function (){
var s__30751__$1 = s__30751;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30751__$1);
if(temp__4425__auto__){
var s__30751__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30751__$2)){
var c__17589__auto__ = cljs.core.chunk_first.call(null,s__30751__$2);
var size__17590__auto__ = cljs.core.count.call(null,c__17589__auto__);
var b__30753 = cljs.core.chunk_buffer.call(null,size__17590__auto__);
if((function (){var i__30752 = (0);
while(true){
if((i__30752 < size__17590__auto__)){
var x = cljs.core._nth.call(null,c__17589__auto__,i__30752);
cljs.core.chunk_append.call(null,b__30753,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__30756 = x;
var text = cljs.core.nth.call(null,vec__30756,(0),null);
var val = cljs.core.nth.call(null,vec__30756,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__30756,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options30741.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__30758 = (i__30752 + (1));
i__30752 = G__30758;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30753),sablono$core$select_options30741_$_iter__30750.call(null,cljs.core.chunk_rest.call(null,s__30751__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30753),null);
}
} else {
var x = cljs.core.first.call(null,s__30751__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__30757 = x;
var text = cljs.core.nth.call(null,vec__30757,(0),null);
var val = cljs.core.nth.call(null,vec__30757,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__30757,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options30741.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options30741_$_iter__30750.call(null,cljs.core.rest.call(null,s__30751__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options30741);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down30759 = (function sablono$core$drop_down30759(var_args){
var args30760 = [];
var len__17877__auto___30763 = arguments.length;
var i__17878__auto___30764 = (0);
while(true){
if((i__17878__auto___30764 < len__17877__auto___30763)){
args30760.push((arguments[i__17878__auto___30764]));

var G__30765 = (i__17878__auto___30764 + (1));
i__17878__auto___30764 = G__30765;
continue;
} else {
}
break;
}

var G__30762 = args30760.length;
switch (G__30762) {
case 2:
return sablono.core.drop_down30759.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down30759.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30760.length)].join('')));

}
});

sablono.core.drop_down30759.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down30759.call(null,name,options,null);
});

sablono.core.drop_down30759.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down30759.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down30759);
/**
 * Creates a text area element.
 */
sablono.core.text_area30767 = (function sablono$core$text_area30767(var_args){
var args30768 = [];
var len__17877__auto___30771 = arguments.length;
var i__17878__auto___30772 = (0);
while(true){
if((i__17878__auto___30772 < len__17877__auto___30771)){
args30768.push((arguments[i__17878__auto___30772]));

var G__30773 = (i__17878__auto___30772 + (1));
i__17878__auto___30772 = G__30773;
continue;
} else {
}
break;
}

var G__30770 = args30768.length;
switch (G__30770) {
case 1:
return sablono.core.text_area30767.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area30767.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30768.length)].join('')));

}
});

sablono.core.text_area30767.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area30767.call(null,name,null);
});

sablono.core.text_area30767.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area30767.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area30767);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label30775 = (function sablono$core$label30775(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label30775);
/**
 * Creates a submit button.
 */
sablono.core.submit_button30776 = (function sablono$core$submit_button30776(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button30776);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button30777 = (function sablono$core$reset_button30777(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button30777);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to30778 = (function sablono$core$form_to30778(var_args){
var args__17884__auto__ = [];
var len__17877__auto___30783 = arguments.length;
var i__17878__auto___30784 = (0);
while(true){
if((i__17878__auto___30784 < len__17877__auto___30783)){
args__17884__auto__.push((arguments[i__17878__auto___30784]));

var G__30785 = (i__17878__auto___30784 + (1));
i__17878__auto___30784 = G__30785;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((1) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((1)),(0))):null);
return sablono.core.form_to30778.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17885__auto__);
});

sablono.core.form_to30778.cljs$core$IFn$_invoke$arity$variadic = (function (p__30781,body){
var vec__30782 = p__30781;
var method = cljs.core.nth.call(null,vec__30782,(0),null);
var action = cljs.core.nth.call(null,vec__30782,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to30778.cljs$lang$maxFixedArity = (1);

sablono.core.form_to30778.cljs$lang$applyTo = (function (seq30779){
var G__30780 = cljs.core.first.call(null,seq30779);
var seq30779__$1 = cljs.core.next.call(null,seq30779);
return sablono.core.form_to30778.cljs$core$IFn$_invoke$arity$variadic(G__30780,seq30779__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to30778);

//# sourceMappingURL=core.js.map?rel=1460338559532