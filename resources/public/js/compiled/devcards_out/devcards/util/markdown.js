// Compiled by ClojureScript 1.7.170 {}
goog.provide('devcards.util.markdown');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljsjs.showdown');
devcards.util.markdown.leading_space_count = (function devcards$util$markdown$leading_space_count(s){
var temp__4425__auto__ = cljs.core.second.call(null,cljs.core.re_matches.call(null,/^([\s]*).*/,s));
if(cljs.core.truth_(temp__4425__auto__)){
var ws = temp__4425__auto__;
return ws.length;
} else {
return null;
}
});
devcards.util.markdown.is_bullet_item_QMARK_ = (function devcards$util$markdown$is_bullet_item_QMARK_(s){
return cljs.core.boolean$.call(null,cljs.core.re_matches.call(null,/^\s*([-*+]|[0-9]+\.)\s.*/,s));
});
/**
 * Find the common left edge of bullet lists in a collection of lines.
 */
devcards.util.markdown.bullets_left_edge = (function devcards$util$markdown$bullets_left_edge(lines){
var or__16819__auto__ = cljs.core.apply.call(null,cljs.core.min,cljs.core.map.call(null,devcards.util.markdown.leading_space_count,cljs.core.filter.call(null,devcards.util.markdown.is_bullet_item_QMARK_,lines)));
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return (0);
}
});
/**
 * Strip the left margin's extra whitespace, but leave bullet list indents in tact.
 */
devcards.util.markdown.strip_left_margin = (function devcards$util$markdown$strip_left_margin(s,margin){
if(cljs.core.truth_(devcards.util.markdown.is_bullet_item_QMARK_.call(null,s))){
return cljs.core.subs.call(null,s,margin);
} else {
return clojure.string.trim.call(null,s);
}
});
var conv_class_31347 = Showdown.converter;
var converter_31348 = (new conv_class_31347());
/**
 * render markdown
 */
devcards.util.markdown.markdown_to_html = ((function (conv_class_31347,converter_31348){
return (function devcards$util$markdown$markdown_to_html(markdown_txt){
return converter_31348.makeHtml(markdown_txt);
});})(conv_class_31347,converter_31348))
;
devcards.util.markdown.matches_delim_QMARK_ = (function devcards$util$markdown$matches_delim_QMARK_(line){
return cljs.core.re_matches.call(null,/^[\s]*```(\w*).*/,line);
});
if(typeof devcards.util.markdown.block_parser !== 'undefined'){
} else {
devcards.util.markdown.block_parser = (function (){var method_table__17732__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17733__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17734__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17735__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17736__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"devcards.util.markdown","block-parser"),((function (method_table__17732__auto__,prefer_table__17733__auto__,method_cache__17734__auto__,cached_hierarchy__17735__auto__,hierarchy__17736__auto__){
return (function (p__31349,line){
var map__31350 = p__31349;
var map__31350__$1 = ((((!((map__31350 == null)))?((((map__31350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31350):map__31350);
var stage = cljs.core.get.call(null,map__31350__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(devcards.util.markdown.matches_delim_QMARK_.call(null,line))?new cljs.core.Keyword(null,"delim","delim",1621565472):new cljs.core.Keyword(null,"line","line",212345235)),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(stage)], null);
});})(method_table__17732__auto__,prefer_table__17733__auto__,method_cache__17734__auto__,cached_hierarchy__17735__auto__,hierarchy__17736__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17736__auto__,method_table__17732__auto__,prefer_table__17733__auto__,method_cache__17734__auto__,cached_hierarchy__17735__auto__));
})();
}
cljs.core._add_method.call(null,devcards.util.markdown.block_parser,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"markdown","markdown",1227225089)], null),(function (p__31352,line){
var map__31353 = p__31352;
var map__31353__$1 = ((((!((map__31353 == null)))?((((map__31353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31353):map__31353);
var st = map__31353__$1;
var stage = cljs.core.get.call(null,map__31353__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var left_margin = cljs.core.get.call(null,map__31353__$1,new cljs.core.Keyword(null,"left-margin","left-margin",1869643147));
return cljs.core.update_in.call(null,st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.Keyword(null,"content","content",15833224)], null),cljs.core.conj,devcards.util.markdown.strip_left_margin.call(null,line,left_margin));
}));
cljs.core._add_method.call(null,devcards.util.markdown.block_parser,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"code-block","code-block",-2113425141)], null),(function (p__31355,line){
var map__31356 = p__31355;
var map__31356__$1 = ((((!((map__31356 == null)))?((((map__31356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31356):map__31356);
var st = map__31356__$1;
var stage = cljs.core.get.call(null,map__31356__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
return cljs.core.update_in.call(null,st,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.Keyword(null,"content","content",15833224)], null),cljs.core.conj,cljs.core.subs.call(null,line,new cljs.core.Keyword(null,"leading-spaces","leading-spaces",1148061085).cljs$core$IFn$_invoke$arity$1(stage)));
}));
cljs.core._add_method.call(null,devcards.util.markdown.block_parser,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delim","delim",1621565472),new cljs.core.Keyword(null,"markdown","markdown",1227225089)], null),(function (p__31358,line){
var map__31359 = p__31358;
var map__31359__$1 = ((((!((map__31359 == null)))?((((map__31359.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31359.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31359):map__31359);
var st = map__31359__$1;
var stage = cljs.core.get.call(null,map__31359__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var accum = cljs.core.get.call(null,map__31359__$1,new cljs.core.Keyword(null,"accum","accum",-1892427250));
var lang = cljs.core.second.call(null,devcards.util.markdown.matches_delim_QMARK_.call(null,line));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"accum","accum",-1892427250),cljs.core.conj.call(null,accum,stage)),new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"code-block","code-block",-2113425141),new cljs.core.Keyword(null,"lang","lang",-1819677104),((clojure.string.blank_QMARK_.call(null,lang))?null:lang),new cljs.core.Keyword(null,"leading-spaces","leading-spaces",1148061085),devcards.util.markdown.leading_space_count.call(null,line),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentVector.EMPTY], null));
}));
cljs.core._add_method.call(null,devcards.util.markdown.block_parser,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delim","delim",1621565472),new cljs.core.Keyword(null,"code-block","code-block",-2113425141)], null),(function (p__31361,line){
var map__31362 = p__31361;
var map__31362__$1 = ((((!((map__31362 == null)))?((((map__31362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31362):map__31362);
var st = map__31362__$1;
var stage = cljs.core.get.call(null,map__31362__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var accum = cljs.core.get.call(null,map__31362__$1,new cljs.core.Keyword(null,"accum","accum",-1892427250));
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"accum","accum",-1892427250),cljs.core.conj.call(null,accum,stage)),new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentVector.EMPTY], null));
}));
devcards.util.markdown.parse_out_blocks_STAR_ = (function devcards$util$markdown$parse_out_blocks_STAR_(m){
var lines = clojure.string.split.call(null,m,"\n");
return cljs.core.reduce.call(null,devcards.util.markdown.block_parser,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"stage","stage",1843544772),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"markdown","markdown",1227225089),new cljs.core.Keyword(null,"content","content",15833224),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"accum","accum",-1892427250),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"left-margin","left-margin",1869643147),devcards.util.markdown.bullets_left_edge.call(null,lines)], null),lines);
});
devcards.util.markdown.parse_out_blocks = (function devcards$util$markdown$parse_out_blocks(m){
var map__31370 = devcards.util.markdown.parse_out_blocks_STAR_.call(null,m);
var map__31370__$1 = ((((!((map__31370 == null)))?((((map__31370.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31370.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31370):map__31370);
var stage = cljs.core.get.call(null,map__31370__$1,new cljs.core.Keyword(null,"stage","stage",1843544772));
var accum = cljs.core.get.call(null,map__31370__$1,new cljs.core.Keyword(null,"accum","accum",-1892427250));
return cljs.core.map.call(null,((function (map__31370,map__31370__$1,stage,accum){
return (function (x){
return cljs.core.update_in.call(null,x,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224)], null),((function (map__31370,map__31370__$1,stage,accum){
return (function (p1__31364_SHARP_){
return clojure.string.join.call(null,"\n",p1__31364_SHARP_);
});})(map__31370,map__31370__$1,stage,accum))
);
});})(map__31370,map__31370__$1,stage,accum))
,cljs.core.filter.call(null,((function (map__31370,map__31370__$1,stage,accum){
return (function (p__31372){
var map__31373 = p__31372;
var map__31373__$1 = ((((!((map__31373 == null)))?((((map__31373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31373):map__31373);
var content = cljs.core.get.call(null,map__31373__$1,new cljs.core.Keyword(null,"content","content",15833224));
return cljs.core.not_empty.call(null,content);
});})(map__31370,map__31370__$1,stage,accum))
,cljs.core.conj.call(null,accum,stage)));
});

//# sourceMappingURL=markdown.js.map?rel=1460338560577