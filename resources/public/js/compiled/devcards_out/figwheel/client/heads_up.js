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
var args__17870__auto__ = [];
var len__17863__auto___26392 = arguments.length;
var i__17864__auto___26393 = (0);
while(true){
if((i__17864__auto___26393 < len__17863__auto___26392)){
args__17870__auto__.push((arguments[i__17864__auto___26393]));

var G__26394 = (i__17864__auto___26393 + (1));
i__17864__auto___26393 = G__26394;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((2) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17871__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__26384_26395 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__26385_26396 = null;
var count__26386_26397 = (0);
var i__26387_26398 = (0);
while(true){
if((i__26387_26398 < count__26386_26397)){
var k_26399 = cljs.core._nth.call(null,chunk__26385_26396,i__26387_26398);
e.setAttribute(cljs.core.name.call(null,k_26399),cljs.core.get.call(null,attrs,k_26399));

var G__26400 = seq__26384_26395;
var G__26401 = chunk__26385_26396;
var G__26402 = count__26386_26397;
var G__26403 = (i__26387_26398 + (1));
seq__26384_26395 = G__26400;
chunk__26385_26396 = G__26401;
count__26386_26397 = G__26402;
i__26387_26398 = G__26403;
continue;
} else {
var temp__4425__auto___26404 = cljs.core.seq.call(null,seq__26384_26395);
if(temp__4425__auto___26404){
var seq__26384_26405__$1 = temp__4425__auto___26404;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26384_26405__$1)){
var c__17608__auto___26406 = cljs.core.chunk_first.call(null,seq__26384_26405__$1);
var G__26407 = cljs.core.chunk_rest.call(null,seq__26384_26405__$1);
var G__26408 = c__17608__auto___26406;
var G__26409 = cljs.core.count.call(null,c__17608__auto___26406);
var G__26410 = (0);
seq__26384_26395 = G__26407;
chunk__26385_26396 = G__26408;
count__26386_26397 = G__26409;
i__26387_26398 = G__26410;
continue;
} else {
var k_26411 = cljs.core.first.call(null,seq__26384_26405__$1);
e.setAttribute(cljs.core.name.call(null,k_26411),cljs.core.get.call(null,attrs,k_26411));

var G__26412 = cljs.core.next.call(null,seq__26384_26405__$1);
var G__26413 = null;
var G__26414 = (0);
var G__26415 = (0);
seq__26384_26395 = G__26412;
chunk__26385_26396 = G__26413;
count__26386_26397 = G__26414;
i__26387_26398 = G__26415;
continue;
}
} else {
}
}
break;
}

var seq__26388_26416 = cljs.core.seq.call(null,children);
var chunk__26389_26417 = null;
var count__26390_26418 = (0);
var i__26391_26419 = (0);
while(true){
if((i__26391_26419 < count__26390_26418)){
var ch_26420 = cljs.core._nth.call(null,chunk__26389_26417,i__26391_26419);
e.appendChild(ch_26420);

var G__26421 = seq__26388_26416;
var G__26422 = chunk__26389_26417;
var G__26423 = count__26390_26418;
var G__26424 = (i__26391_26419 + (1));
seq__26388_26416 = G__26421;
chunk__26389_26417 = G__26422;
count__26390_26418 = G__26423;
i__26391_26419 = G__26424;
continue;
} else {
var temp__4425__auto___26425 = cljs.core.seq.call(null,seq__26388_26416);
if(temp__4425__auto___26425){
var seq__26388_26426__$1 = temp__4425__auto___26425;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__26388_26426__$1)){
var c__17608__auto___26427 = cljs.core.chunk_first.call(null,seq__26388_26426__$1);
var G__26428 = cljs.core.chunk_rest.call(null,seq__26388_26426__$1);
var G__26429 = c__17608__auto___26427;
var G__26430 = cljs.core.count.call(null,c__17608__auto___26427);
var G__26431 = (0);
seq__26388_26416 = G__26428;
chunk__26389_26417 = G__26429;
count__26390_26418 = G__26430;
i__26391_26419 = G__26431;
continue;
} else {
var ch_26432 = cljs.core.first.call(null,seq__26388_26426__$1);
e.appendChild(ch_26432);

var G__26433 = cljs.core.next.call(null,seq__26388_26426__$1);
var G__26434 = null;
var G__26435 = (0);
var G__26436 = (0);
seq__26388_26416 = G__26433;
chunk__26389_26417 = G__26434;
count__26390_26418 = G__26435;
i__26391_26419 = G__26436;
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

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq26381){
var G__26382 = cljs.core.first.call(null,seq26381);
var seq26381__$1 = cljs.core.next.call(null,seq26381);
var G__26383 = cljs.core.first.call(null,seq26381__$1);
var seq26381__$2 = cljs.core.next.call(null,seq26381__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__26382,G__26383,seq26381__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17718__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17719__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17720__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17721__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17722__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17718__auto__,prefer_table__17719__auto__,method_cache__17720__auto__,cached_hierarchy__17721__auto__,hierarchy__17722__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17718__auto__,prefer_table__17719__auto__,method_cache__17720__auto__,cached_hierarchy__17721__auto__,hierarchy__17722__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17722__auto__,method_table__17718__auto__,prefer_table__17719__auto__,method_cache__17720__auto__,cached_hierarchy__17721__auto__));
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
var el_26437 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_26437.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_26437.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_26437.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_26437);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__26438,st_map){
var map__26443 = p__26438;
var map__26443__$1 = ((((!((map__26443 == null)))?((((map__26443.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26443.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26443):map__26443);
var container_el = cljs.core.get.call(null,map__26443__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__26443,map__26443__$1,container_el){
return (function (p__26445){
var vec__26446 = p__26445;
var k = cljs.core.nth.call(null,vec__26446,(0),null);
var v = cljs.core.nth.call(null,vec__26446,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__26443,map__26443__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__26447,dom_str){
var map__26450 = p__26447;
var map__26450__$1 = ((((!((map__26450 == null)))?((((map__26450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26450):map__26450);
var c = map__26450__$1;
var content_area_el = cljs.core.get.call(null,map__26450__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__26452){
var map__26455 = p__26452;
var map__26455__$1 = ((((!((map__26455 == null)))?((((map__26455.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26455.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26455):map__26455);
var content_area_el = cljs.core.get.call(null,map__26455__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__18972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto__){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto__){
return (function (state_26498){
var state_val_26499 = (state_26498[(1)]);
if((state_val_26499 === (1))){
var inst_26483 = (state_26498[(7)]);
var inst_26483__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26484 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26485 = ["10px","10px","100%","68px","1.0"];
var inst_26486 = cljs.core.PersistentHashMap.fromArrays(inst_26484,inst_26485);
var inst_26487 = cljs.core.merge.call(null,inst_26486,style);
var inst_26488 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26483__$1,inst_26487);
var inst_26489 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26483__$1,msg);
var inst_26490 = cljs.core.async.timeout.call(null,(300));
var state_26498__$1 = (function (){var statearr_26500 = state_26498;
(statearr_26500[(7)] = inst_26483__$1);

(statearr_26500[(8)] = inst_26489);

(statearr_26500[(9)] = inst_26488);

return statearr_26500;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26498__$1,(2),inst_26490);
} else {
if((state_val_26499 === (2))){
var inst_26483 = (state_26498[(7)]);
var inst_26492 = (state_26498[(2)]);
var inst_26493 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_26494 = ["auto"];
var inst_26495 = cljs.core.PersistentHashMap.fromArrays(inst_26493,inst_26494);
var inst_26496 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26483,inst_26495);
var state_26498__$1 = (function (){var statearr_26501 = state_26498;
(statearr_26501[(10)] = inst_26492);

return statearr_26501;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26498__$1,inst_26496);
} else {
return null;
}
}
});})(c__18972__auto__))
;
return ((function (switch__18860__auto__,c__18972__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__18861__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__18861__auto____0 = (function (){
var statearr_26505 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26505[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__18861__auto__);

(statearr_26505[(1)] = (1));

return statearr_26505;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__18861__auto____1 = (function (state_26498){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_26498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e26506){if((e26506 instanceof Object)){
var ex__18864__auto__ = e26506;
var statearr_26507_26509 = state_26498;
(statearr_26507_26509[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26510 = state_26498;
state_26498 = G__26510;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__18861__auto__ = function(state_26498){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18861__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__18861__auto____1.call(this,state_26498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__18861__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__18861__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto__))
})();
var state__18974__auto__ = (function (){var statearr_26508 = f__18973__auto__.call(null);
(statearr_26508[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto__);

return statearr_26508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto__))
);

return c__18972__auto__;
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
var vec__26512 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__26512,(0),null);
var ln = cljs.core.nth.call(null,vec__26512,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__26515 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__26515,(0),null);
var file_line = cljs.core.nth.call(null,vec__26515,(1),null);
var file_column = cljs.core.nth.call(null,vec__26515,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__26515,file_name,file_line,file_column){
return (function (p1__26513_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__26513_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__26515,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16805__auto__ = file_line;
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
var and__16793__auto__ = cause;
if(cljs.core.truth_(and__16793__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16793__auto__;
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
var map__26518 = figwheel.client.heads_up.ensure_container.call(null);
var map__26518__$1 = ((((!((map__26518 == null)))?((((map__26518.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26518.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26518):map__26518);
var content_area_el = cljs.core.get.call(null,map__26518__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__18972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto__){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto__){
return (function (state_26566){
var state_val_26567 = (state_26566[(1)]);
if((state_val_26567 === (1))){
var inst_26549 = (state_26566[(7)]);
var inst_26549__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_26550 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_26551 = ["0.0"];
var inst_26552 = cljs.core.PersistentHashMap.fromArrays(inst_26550,inst_26551);
var inst_26553 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26549__$1,inst_26552);
var inst_26554 = cljs.core.async.timeout.call(null,(300));
var state_26566__$1 = (function (){var statearr_26568 = state_26566;
(statearr_26568[(8)] = inst_26553);

(statearr_26568[(7)] = inst_26549__$1);

return statearr_26568;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26566__$1,(2),inst_26554);
} else {
if((state_val_26567 === (2))){
var inst_26549 = (state_26566[(7)]);
var inst_26556 = (state_26566[(2)]);
var inst_26557 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_26558 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_26559 = cljs.core.PersistentHashMap.fromArrays(inst_26557,inst_26558);
var inst_26560 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_26549,inst_26559);
var inst_26561 = cljs.core.async.timeout.call(null,(200));
var state_26566__$1 = (function (){var statearr_26569 = state_26566;
(statearr_26569[(9)] = inst_26560);

(statearr_26569[(10)] = inst_26556);

return statearr_26569;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26566__$1,(3),inst_26561);
} else {
if((state_val_26567 === (3))){
var inst_26549 = (state_26566[(7)]);
var inst_26563 = (state_26566[(2)]);
var inst_26564 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_26549,"");
var state_26566__$1 = (function (){var statearr_26570 = state_26566;
(statearr_26570[(11)] = inst_26563);

return statearr_26570;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26566__$1,inst_26564);
} else {
return null;
}
}
}
});})(c__18972__auto__))
;
return ((function (switch__18860__auto__,c__18972__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__18861__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__18861__auto____0 = (function (){
var statearr_26574 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26574[(0)] = figwheel$client$heads_up$clear_$_state_machine__18861__auto__);

(statearr_26574[(1)] = (1));

return statearr_26574;
});
var figwheel$client$heads_up$clear_$_state_machine__18861__auto____1 = (function (state_26566){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_26566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e26575){if((e26575 instanceof Object)){
var ex__18864__auto__ = e26575;
var statearr_26576_26578 = state_26566;
(statearr_26576_26578[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26575;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26579 = state_26566;
state_26566 = G__26579;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__18861__auto__ = function(state_26566){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__18861__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__18861__auto____1.call(this,state_26566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__18861__auto____0;
figwheel$client$heads_up$clear_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__18861__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto__))
})();
var state__18974__auto__ = (function (){var statearr_26577 = f__18973__auto__.call(null);
(statearr_26577[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto__);

return statearr_26577;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto__))
);

return c__18972__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__18972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto__){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto__){
return (function (state_26611){
var state_val_26612 = (state_26611[(1)]);
if((state_val_26612 === (1))){
var inst_26601 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_26611__$1 = state_26611;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26611__$1,(2),inst_26601);
} else {
if((state_val_26612 === (2))){
var inst_26603 = (state_26611[(2)]);
var inst_26604 = cljs.core.async.timeout.call(null,(400));
var state_26611__$1 = (function (){var statearr_26613 = state_26611;
(statearr_26613[(7)] = inst_26603);

return statearr_26613;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26611__$1,(3),inst_26604);
} else {
if((state_val_26612 === (3))){
var inst_26606 = (state_26611[(2)]);
var inst_26607 = figwheel.client.heads_up.clear.call(null);
var state_26611__$1 = (function (){var statearr_26614 = state_26611;
(statearr_26614[(8)] = inst_26606);

return statearr_26614;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26611__$1,(4),inst_26607);
} else {
if((state_val_26612 === (4))){
var inst_26609 = (state_26611[(2)]);
var state_26611__$1 = state_26611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26611__$1,inst_26609);
} else {
return null;
}
}
}
}
});})(c__18972__auto__))
;
return ((function (switch__18860__auto__,c__18972__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__18861__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__18861__auto____0 = (function (){
var statearr_26618 = [null,null,null,null,null,null,null,null,null];
(statearr_26618[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__18861__auto__);

(statearr_26618[(1)] = (1));

return statearr_26618;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__18861__auto____1 = (function (state_26611){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_26611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e26619){if((e26619 instanceof Object)){
var ex__18864__auto__ = e26619;
var statearr_26620_26622 = state_26611;
(statearr_26620_26622[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26623 = state_26611;
state_26611 = G__26623;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__18861__auto__ = function(state_26611){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18861__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__18861__auto____1.call(this,state_26611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__18861__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__18861__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto__))
})();
var state__18974__auto__ = (function (){var statearr_26621 = f__18973__auto__.call(null);
(statearr_26621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto__);

return statearr_26621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto__))
);

return c__18972__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1457416904588