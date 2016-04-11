// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17884__auto__ = [];
var len__17877__auto___28999 = arguments.length;
var i__17878__auto___29000 = (0);
while(true){
if((i__17878__auto___29000 < len__17877__auto___28999)){
args__17884__auto__.push((arguments[i__17878__auto___29000]));

var G__29001 = (i__17878__auto___29000 + (1));
i__17878__auto___29000 = G__29001;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((2) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17885__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__28991_29002 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__28992_29003 = null;
var count__28993_29004 = (0);
var i__28994_29005 = (0);
while(true){
if((i__28994_29005 < count__28993_29004)){
var k_29006 = cljs.core._nth.call(null,chunk__28992_29003,i__28994_29005);
e.setAttribute(cljs.core.name.call(null,k_29006),cljs.core.get.call(null,attrs,k_29006));

var G__29007 = seq__28991_29002;
var G__29008 = chunk__28992_29003;
var G__29009 = count__28993_29004;
var G__29010 = (i__28994_29005 + (1));
seq__28991_29002 = G__29007;
chunk__28992_29003 = G__29008;
count__28993_29004 = G__29009;
i__28994_29005 = G__29010;
continue;
} else {
var temp__4425__auto___29011 = cljs.core.seq.call(null,seq__28991_29002);
if(temp__4425__auto___29011){
var seq__28991_29012__$1 = temp__4425__auto___29011;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28991_29012__$1)){
var c__17622__auto___29013 = cljs.core.chunk_first.call(null,seq__28991_29012__$1);
var G__29014 = cljs.core.chunk_rest.call(null,seq__28991_29012__$1);
var G__29015 = c__17622__auto___29013;
var G__29016 = cljs.core.count.call(null,c__17622__auto___29013);
var G__29017 = (0);
seq__28991_29002 = G__29014;
chunk__28992_29003 = G__29015;
count__28993_29004 = G__29016;
i__28994_29005 = G__29017;
continue;
} else {
var k_29018 = cljs.core.first.call(null,seq__28991_29012__$1);
e.setAttribute(cljs.core.name.call(null,k_29018),cljs.core.get.call(null,attrs,k_29018));

var G__29019 = cljs.core.next.call(null,seq__28991_29012__$1);
var G__29020 = null;
var G__29021 = (0);
var G__29022 = (0);
seq__28991_29002 = G__29019;
chunk__28992_29003 = G__29020;
count__28993_29004 = G__29021;
i__28994_29005 = G__29022;
continue;
}
} else {
}
}
break;
}

var seq__28995_29023 = cljs.core.seq.call(null,children);
var chunk__28996_29024 = null;
var count__28997_29025 = (0);
var i__28998_29026 = (0);
while(true){
if((i__28998_29026 < count__28997_29025)){
var ch_29027 = cljs.core._nth.call(null,chunk__28996_29024,i__28998_29026);
e.appendChild(ch_29027);

var G__29028 = seq__28995_29023;
var G__29029 = chunk__28996_29024;
var G__29030 = count__28997_29025;
var G__29031 = (i__28998_29026 + (1));
seq__28995_29023 = G__29028;
chunk__28996_29024 = G__29029;
count__28997_29025 = G__29030;
i__28998_29026 = G__29031;
continue;
} else {
var temp__4425__auto___29032 = cljs.core.seq.call(null,seq__28995_29023);
if(temp__4425__auto___29032){
var seq__28995_29033__$1 = temp__4425__auto___29032;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28995_29033__$1)){
var c__17622__auto___29034 = cljs.core.chunk_first.call(null,seq__28995_29033__$1);
var G__29035 = cljs.core.chunk_rest.call(null,seq__28995_29033__$1);
var G__29036 = c__17622__auto___29034;
var G__29037 = cljs.core.count.call(null,c__17622__auto___29034);
var G__29038 = (0);
seq__28995_29023 = G__29035;
chunk__28996_29024 = G__29036;
count__28997_29025 = G__29037;
i__28998_29026 = G__29038;
continue;
} else {
var ch_29039 = cljs.core.first.call(null,seq__28995_29033__$1);
e.appendChild(ch_29039);

var G__29040 = cljs.core.next.call(null,seq__28995_29033__$1);
var G__29041 = null;
var G__29042 = (0);
var G__29043 = (0);
seq__28995_29023 = G__29040;
chunk__28996_29024 = G__29041;
count__28997_29025 = G__29042;
i__28998_29026 = G__29043;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq28988){
var G__28989 = cljs.core.first.call(null,seq28988);
var seq28988__$1 = cljs.core.next.call(null,seq28988);
var G__28990 = cljs.core.first.call(null,seq28988__$1);
var seq28988__$2 = cljs.core.next.call(null,seq28988__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__28989,G__28990,seq28988__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17732__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17733__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17734__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17735__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17736__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17732__auto__,prefer_table__17733__auto__,method_cache__17734__auto__,cached_hierarchy__17735__auto__,hierarchy__17736__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17732__auto__,prefer_table__17733__auto__,method_cache__17734__auto__,cached_hierarchy__17735__auto__,hierarchy__17736__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17736__auto__,method_table__17732__auto__,prefer_table__17733__auto__,method_cache__17734__auto__,cached_hierarchy__17735__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_29044 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_29044.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_29044.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_29044.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_29044);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__29045,st_map){
var map__29050 = p__29045;
var map__29050__$1 = ((((!((map__29050 == null)))?((((map__29050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29050):map__29050);
var container_el = cljs.core.get.call(null,map__29050__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__29050,map__29050__$1,container_el){
return (function (p__29052){
var vec__29053 = p__29052;
var k = cljs.core.nth.call(null,vec__29053,(0),null);
var v = cljs.core.nth.call(null,vec__29053,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__29050,map__29050__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__29054,dom_str){
var map__29057 = p__29054;
var map__29057__$1 = ((((!((map__29057 == null)))?((((map__29057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29057):map__29057);
var c = map__29057__$1;
var content_area_el = cljs.core.get.call(null,map__29057__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__29059){
var map__29062 = p__29059;
var map__29062__$1 = ((((!((map__29062 == null)))?((((map__29062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29062):map__29062);
var content_area_el = cljs.core.get.call(null,map__29062__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__18935__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto__){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto__){
return (function (state_29105){
var state_val_29106 = (state_29105[(1)]);
if((state_val_29106 === (1))){
var inst_29090 = (state_29105[(7)]);
var inst_29090__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29091 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29092 = ["10px","10px","100%","68px","1.0"];
var inst_29093 = cljs.core.PersistentHashMap.fromArrays(inst_29091,inst_29092);
var inst_29094 = cljs.core.merge.call(null,inst_29093,style);
var inst_29095 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29090__$1,inst_29094);
var inst_29096 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29090__$1,msg);
var inst_29097 = cljs.core.async.timeout.call(null,(300));
var state_29105__$1 = (function (){var statearr_29107 = state_29105;
(statearr_29107[(8)] = inst_29096);

(statearr_29107[(7)] = inst_29090__$1);

(statearr_29107[(9)] = inst_29095);

return statearr_29107;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29105__$1,(2),inst_29097);
} else {
if((state_val_29106 === (2))){
var inst_29090 = (state_29105[(7)]);
var inst_29099 = (state_29105[(2)]);
var inst_29100 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_29101 = ["auto"];
var inst_29102 = cljs.core.PersistentHashMap.fromArrays(inst_29100,inst_29101);
var inst_29103 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29090,inst_29102);
var state_29105__$1 = (function (){var statearr_29108 = state_29105;
(statearr_29108[(10)] = inst_29099);

return statearr_29108;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29105__$1,inst_29103);
} else {
return null;
}
}
});})(c__18935__auto__))
;
return ((function (switch__18914__auto__,c__18935__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__18915__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__18915__auto____0 = (function (){
var statearr_29112 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29112[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__18915__auto__);

(statearr_29112[(1)] = (1));

return statearr_29112;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__18915__auto____1 = (function (state_29105){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_29105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e29113){if((e29113 instanceof Object)){
var ex__18918__auto__ = e29113;
var statearr_29114_29116 = state_29105;
(statearr_29114_29116[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29113;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29117 = state_29105;
state_29105 = G__29117;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__18915__auto__ = function(state_29105){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18915__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18915__auto____1.call(this,state_29105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__18915__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__18915__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto__))
})();
var state__18937__auto__ = (function (){var statearr_29115 = f__18936__auto__.call(null);
(statearr_29115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto__);

return statearr_29115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto__))
);

return c__18935__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__29119 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__29119,(0),null);
var ln = cljs.core.nth.call(null,vec__29119,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__29122 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__29122,(0),null);
var file_line = cljs.core.nth.call(null,vec__29122,(1),null);
var file_column = cljs.core.nth.call(null,vec__29122,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__29122,file_name,file_line,file_column){
return (function (p1__29120_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__29120_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__29122,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16819__auto__ = file_line;
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
var and__16807__auto__ = cause;
if(cljs.core.truth_(and__16807__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16807__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__29125 = figwheel.client.heads_up.ensure_container.call(null);
var map__29125__$1 = ((((!((map__29125 == null)))?((((map__29125.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29125.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29125):map__29125);
var content_area_el = cljs.core.get.call(null,map__29125__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__18935__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto__){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto__){
return (function (state_29173){
var state_val_29174 = (state_29173[(1)]);
if((state_val_29174 === (1))){
var inst_29156 = (state_29173[(7)]);
var inst_29156__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_29157 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_29158 = ["0.0"];
var inst_29159 = cljs.core.PersistentHashMap.fromArrays(inst_29157,inst_29158);
var inst_29160 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29156__$1,inst_29159);
var inst_29161 = cljs.core.async.timeout.call(null,(300));
var state_29173__$1 = (function (){var statearr_29175 = state_29173;
(statearr_29175[(7)] = inst_29156__$1);

(statearr_29175[(8)] = inst_29160);

return statearr_29175;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29173__$1,(2),inst_29161);
} else {
if((state_val_29174 === (2))){
var inst_29156 = (state_29173[(7)]);
var inst_29163 = (state_29173[(2)]);
var inst_29164 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_29165 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_29166 = cljs.core.PersistentHashMap.fromArrays(inst_29164,inst_29165);
var inst_29167 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_29156,inst_29166);
var inst_29168 = cljs.core.async.timeout.call(null,(200));
var state_29173__$1 = (function (){var statearr_29176 = state_29173;
(statearr_29176[(9)] = inst_29167);

(statearr_29176[(10)] = inst_29163);

return statearr_29176;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29173__$1,(3),inst_29168);
} else {
if((state_val_29174 === (3))){
var inst_29156 = (state_29173[(7)]);
var inst_29170 = (state_29173[(2)]);
var inst_29171 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_29156,"");
var state_29173__$1 = (function (){var statearr_29177 = state_29173;
(statearr_29177[(11)] = inst_29170);

return statearr_29177;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29173__$1,inst_29171);
} else {
return null;
}
}
}
});})(c__18935__auto__))
;
return ((function (switch__18914__auto__,c__18935__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__18915__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__18915__auto____0 = (function (){
var statearr_29181 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29181[(0)] = figwheel$client$heads_up$clear_$_state_machine__18915__auto__);

(statearr_29181[(1)] = (1));

return statearr_29181;
});
var figwheel$client$heads_up$clear_$_state_machine__18915__auto____1 = (function (state_29173){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_29173);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e29182){if((e29182 instanceof Object)){
var ex__18918__auto__ = e29182;
var statearr_29183_29185 = state_29173;
(statearr_29183_29185[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29173);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29182;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29186 = state_29173;
state_29173 = G__29186;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__18915__auto__ = function(state_29173){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__18915__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__18915__auto____1.call(this,state_29173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__18915__auto____0;
figwheel$client$heads_up$clear_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__18915__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto__))
})();
var state__18937__auto__ = (function (){var statearr_29184 = f__18936__auto__.call(null);
(statearr_29184[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto__);

return statearr_29184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto__))
);

return c__18935__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__18935__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto__){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto__){
return (function (state_29218){
var state_val_29219 = (state_29218[(1)]);
if((state_val_29219 === (1))){
var inst_29208 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_29218__$1 = state_29218;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29218__$1,(2),inst_29208);
} else {
if((state_val_29219 === (2))){
var inst_29210 = (state_29218[(2)]);
var inst_29211 = cljs.core.async.timeout.call(null,(400));
var state_29218__$1 = (function (){var statearr_29220 = state_29218;
(statearr_29220[(7)] = inst_29210);

return statearr_29220;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29218__$1,(3),inst_29211);
} else {
if((state_val_29219 === (3))){
var inst_29213 = (state_29218[(2)]);
var inst_29214 = figwheel.client.heads_up.clear.call(null);
var state_29218__$1 = (function (){var statearr_29221 = state_29218;
(statearr_29221[(8)] = inst_29213);

return statearr_29221;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29218__$1,(4),inst_29214);
} else {
if((state_val_29219 === (4))){
var inst_29216 = (state_29218[(2)]);
var state_29218__$1 = state_29218;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29218__$1,inst_29216);
} else {
return null;
}
}
}
}
});})(c__18935__auto__))
;
return ((function (switch__18914__auto__,c__18935__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__18915__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__18915__auto____0 = (function (){
var statearr_29225 = [null,null,null,null,null,null,null,null,null];
(statearr_29225[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__18915__auto__);

(statearr_29225[(1)] = (1));

return statearr_29225;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__18915__auto____1 = (function (state_29218){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_29218);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e29226){if((e29226 instanceof Object)){
var ex__18918__auto__ = e29226;
var statearr_29227_29229 = state_29218;
(statearr_29227_29229[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29218);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29226;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29230 = state_29218;
state_29218 = G__29230;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__18915__auto__ = function(state_29218){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18915__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18915__auto____1.call(this,state_29218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__18915__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__18915__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto__))
})();
var state__18937__auto__ = (function (){var statearr_29228 = f__18936__auto__.call(null);
(statearr_29228[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto__);

return statearr_29228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto__))
);

return c__18935__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1460363594682