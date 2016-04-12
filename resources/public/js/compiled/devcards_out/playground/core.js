// Compiled by ClojureScript 1.7.170 {}
goog.provide('playground.core');
goog.require('cljs.core');
goog.require('om.next');
goog.require('sablono.core');
goog.require('devcards.core');
goog.require('cljs.test');
cljs.core.enable_console_print_BANG_.call(null);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playground.core","playground.core",-861442896),new cljs.core.Keyword(null,"title-card","title-card",-712785820)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"title-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),React.createElement("div",null,React.createElement("h1",null,"How much is enough?")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
playground.core.years_til_retirement = (function playground$core$years_til_retirement(p__34642){
var map__34645 = p__34642;
var map__34645__$1 = ((((!((map__34645 == null)))?((((map__34645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34645):map__34645);
var salary = cljs.core.get.call(null,map__34645__$1,new cljs.core.Keyword(null,"salary","salary",1283904063));
var expenses = cljs.core.get.call(null,map__34645__$1,new cljs.core.Keyword(null,"expenses","expenses",-63975799));
var rate_of_return = cljs.core.get.call(null,map__34645__$1,new cljs.core.Keyword(null,"rate-of-return","rate-of-return",592356691));
var cutoff = cljs.core.get.call(null,map__34645__$1,new cljs.core.Keyword(null,"cutoff","cutoff",316921213));
if(cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [salary,expenses,rate_of_return], null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"salary","salary",-1370531706,null),new cljs.core.Symbol(null,"expenses","expenses",1576555728,null),new cljs.core.Symbol(null,"rate-of-return","rate-of-return",-2062079078,null)], null))))].join('')));
}

var years = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null);
while(true){
var balance = cljs.core.peek.call(null,years);
var growth = (balance * rate_of_return);
var new_balance = (((balance + salary) + growth) - expenses);
var done_QMARK_ = (cljs.core.truth_(cutoff)?(cljs.core.count.call(null,years) >= cutoff):(growth >= expenses));
if(done_QMARK_){
return years;
} else {
var G__34647 = cljs.core.conj.call(null,years,new_balance);
years = G__34647;
continue;
}
break;
}
});
playground.core.linear_scale = (function playground$core$linear_scale(p__34648,p__34649){
var vec__34652 = p__34648;
var domain_start = cljs.core.nth.call(null,vec__34652,(0),null);
var domain_end = cljs.core.nth.call(null,vec__34652,(1),null);
var vec__34653 = p__34649;
var range_start = cljs.core.nth.call(null,vec__34653,(0),null);
var range_end = cljs.core.nth.call(null,vec__34653,(1),null);
var multiplier = ((range_end - range_start) / (domain_end - domain_start));
var offset = (range_start - domain_start);
return ((function (multiplier,offset,vec__34652,domain_start,domain_end,vec__34653,range_start,range_end){
return (function (domain){
return (offset + (multiplier * domain));
});
;})(multiplier,offset,vec__34652,domain_start,domain_end,vec__34653,range_start,range_end))
});
playground.core.translate = (function playground$core$translate(x,y){
return [cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join('');
});
playground.core.thousands__GT_k = (function playground$core$thousands__GT_k(n){
return [cljs.core.str(((n / (1000)) | (0))),cljs.core.str("k")].join('');
});
/**
 * @constructor
 */
playground.core.ColumnChart = (function playground$core$ColumnChart(){
var this__20305__auto__ = this;
React.Component.apply(this__20305__auto__,arguments);

if(!((this__20305__auto__.initLocalState == null))){
this__20305__auto__.state = this__20305__auto__.initLocalState();
} else {
this__20305__auto__.state = {};
}

return this__20305__auto__;
});

playground.core.ColumnChart.prototype = goog.object.clone(React.Component.prototype);

var x34658_34670 = playground.core.ColumnChart.prototype;
x34658_34670.componentWillUpdate = ((function (x34658_34670){
return (function (next_props__20242__auto__,next_state__20243__auto__){
var this__20241__auto__ = this;
if(((!((this__20241__auto__ == null)))?(((false) || (this__20241__auto__.om$next$Ident$))?true:false):false)){
var ident__20244__auto___34671 = om.next.ident.call(null,this__20241__auto__,om.next.props.call(null,this__20241__auto__));
var next_ident__20245__auto___34672 = om.next.ident.call(null,this__20241__auto__,om.next._next_props.call(null,next_props__20242__auto__,this__20241__auto__));
if(cljs.core.not_EQ_.call(null,ident__20244__auto___34671,next_ident__20245__auto___34672)){
var idxr__20246__auto___34673 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20241__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__20246__auto___34673 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__20246__auto___34673),((function (idxr__20246__auto___34673,ident__20244__auto___34671,next_ident__20245__auto___34672,this__20241__auto__,x34658_34670){
return (function (indexes__20247__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__20247__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__20244__auto___34671], null),cljs.core.disj,this__20241__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__20245__auto___34672], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__20241__auto__);
});})(idxr__20246__auto___34673,ident__20244__auto___34671,next_ident__20245__auto___34672,this__20241__auto__,x34658_34670))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__20241__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__20241__auto__);
});})(x34658_34670))
;

x34658_34670.shouldComponentUpdate = ((function (x34658_34670){
return (function (next_props__20242__auto__,next_state__20243__auto__){
var this__20241__auto__ = this;
var next_props__20242__auto____$1 = goog.object.get(next_props__20242__auto__,"omcljs$value");
var next_props__20242__auto____$2 = (function (){var G__34660 = next_props__20242__auto____$1;
var G__34660__$1 = (((next_props__20242__auto____$1 instanceof om.next.OmProps))?om.next.unwrap.call(null,G__34660):G__34660);
return G__34660__$1;
})();
var or__16819__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__20241__auto__),next_props__20242__auto____$2);
if(or__16819__auto__){
return or__16819__auto__;
} else {
var and__16807__auto__ = this__20241__auto__.state;
if(cljs.core.truth_(and__16807__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__20241__auto__.state,"omcljs$state"),goog.object.get(next_state__20243__auto__,"omcljs$state"));
} else {
return and__16807__auto__;
}
}
});})(x34658_34670))
;

x34658_34670.componentWillUnmount = ((function (x34658_34670){
return (function (){
var this__20241__auto__ = this;
var r__20251__auto__ = om.next.get_reconciler.call(null,this__20241__auto__);
var cfg__20252__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__20251__auto__);
var st__20253__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__20252__auto__);
var indexer__20250__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__20252__auto__);
if(cljs.core.truth_((function (){var and__16807__auto__ = !((st__20253__auto__ == null));
if(and__16807__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__20253__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__20241__auto__], null));
} else {
return and__16807__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__20253__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__20241__auto__);
} else {
}

if((indexer__20250__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__20250__auto__,this__20241__auto__);
}
});})(x34658_34670))
;

x34658_34670.componentDidUpdate = ((function (x34658_34670){
return (function (prev_props__20248__auto__,prev_state__20249__auto__){
var this__20241__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__20241__auto__);
});})(x34658_34670))
;

x34658_34670.isMounted = ((function (x34658_34670){
return (function (){
var this__20241__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__20241__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x34658_34670))
;

x34658_34670.componentWillMount = ((function (x34658_34670){
return (function (){
var this__20241__auto__ = this;
var indexer__20250__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__20241__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__20250__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__20250__auto__,this__20241__auto__);
}
});})(x34658_34670))
;

x34658_34670.render = ((function (x34658_34670){
return (function (){
var this__20240__auto__ = this;
var this$ = this__20240__auto__;
var _STAR_reconciler_STAR_34661 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_34662 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_34663 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_34664 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_34665 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__20240__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__20240__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__20240__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__20240__auto__);

om.next._STAR_parent_STAR_ = this__20240__auto__;

try{var map__34666 = om.next.props.call(null,this$);
var map__34666__$1 = ((((!((map__34666 == null)))?((((map__34666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34666):map__34666);
var data = cljs.core.get.call(null,map__34666__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var width = cljs.core.get.call(null,map__34666__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__34666__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var y_scale = playground.core.linear_scale.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.apply.call(null,cljs.core.max,data)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),height], null));
var bar_width = (width / cljs.core.count.call(null,data));
return React.createElement("svg",{"height": height, "width": width, "className": "chart"},sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (map__34666,map__34666__$1,data,width,height,y_scale,bar_width,_STAR_reconciler_STAR_34661,_STAR_depth_STAR_34662,_STAR_shared_STAR_34663,_STAR_instrument_STAR_34664,_STAR_parent_STAR_34665,this$,this__20240__auto__,x34658_34670){
return (function (i,d){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),playground.core.translate.call(null,(i * bar_width),(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"y","y",-1757859776),(height - y_scale.call(null,d)),new cljs.core.Keyword(null,"height","height",1025178622),y_scale.call(null,d),new cljs.core.Keyword(null,"width","width",-384071477),(bar_width - (1))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),((7) + (bar_width / (2))),new cljs.core.Keyword(null,"y","y",-1757859776),(height - (3)),new cljs.core.Keyword(null,"dy","dy",1719547243),"0.15em"], null),playground.core.thousands__GT_k.call(null,d)], null)], null);
});})(map__34666,map__34666__$1,data,width,height,y_scale,bar_width,_STAR_reconciler_STAR_34661,_STAR_depth_STAR_34662,_STAR_shared_STAR_34663,_STAR_instrument_STAR_34664,_STAR_parent_STAR_34665,this$,this__20240__auto__,x34658_34670))
,data)));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_34665;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_34664;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_34663;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_34662;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_34661;
}});})(x34658_34670))
;


playground.core.ColumnChart.prototype.constructor = playground.core.ColumnChart;

playground.core.ColumnChart.prototype.constructor.displayName = "playground.core/ColumnChart";

playground.core.ColumnChart.prototype.om$isComponent = true;

var x34668_34674 = playground.core.ColumnChart;


var x34669_34675 = playground.core.ColumnChart.prototype;


playground.core.ColumnChart.cljs$lang$type = true;

playground.core.ColumnChart.cljs$lang$ctorStr = "playground.core/ColumnChart";

playground.core.ColumnChart.cljs$lang$ctorPrWriter = (function (this__20307__auto__,writer__20308__auto__,opt__20309__auto__){
return cljs.core._write.call(null,writer__20308__auto__,"playground.core/ColumnChart");
});
playground.core.column_chart = om.next.factory.call(null,playground.core.ColumnChart);
playground.core.coerce_to_type_of = (function playground$core$coerce_to_type_of(orig,v){
var pred__34679 = cljs.core._EQ_;
var expr__34680 = cljs.core.type.call(null,orig);
if(cljs.core.truth_(pred__34679.call(null,Number,expr__34680))){
return Number(v);
} else {
if(cljs.core.truth_(pred__34679.call(null,String,expr__34680))){
return String(v);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__34680)].join('')));
}
}
});
playground.core.editable_parameter = (function playground$core$editable_parameter(state,p__34683){
var vec__34685 = p__34683;
var k = cljs.core.nth.call(null,vec__34685,(0),null);
var v = cljs.core.nth.call(null,vec__34685,(1),null);
return sablono.interpreter.interpret.call(null,(function (){var value = cljs.core.get.call(null,cljs.core.deref.call(null,state),k);
var editing_QMARK_ = cljs.core.contains_QMARK_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"editing","editing",1365491601)),k);
if(editing_QMARK_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (value,editing_QMARK_,vec__34685,k,v){
return (function (e){
return cljs.core.swap_BANG_.call(null,state,((function (value,editing_QMARK_,vec__34685,k,v){
return (function (s){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing","editing",1365491601)], null),((function (value,editing_QMARK_,vec__34685,k,v){
return (function (p1__34682_SHARP_){
return cljs.core.disj.call(null,p1__34682_SHARP_,k);
});})(value,editing_QMARK_,vec__34685,k,v))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),((function (value,editing_QMARK_,vec__34685,k,v){
return (function (){
return playground.core.coerce_to_type_of.call(null,v,e.target.parentElement.firstElementChild.value);
});})(value,editing_QMARK_,vec__34685,k,v))
);
});})(value,editing_QMARK_,vec__34685,k,v))
);
});})(value,editing_QMARK_,vec__34685,k,v))
], null),"Done"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (value,editing_QMARK_,vec__34685,k,v){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing","editing",1365491601)], null),((function (value,editing_QMARK_,vec__34685,k,v){
return (function (ks){
if(cljs.core.truth_(ks)){
return cljs.core.conj.call(null,ks,k);
} else {
return cljs.core.PersistentHashSet.fromArray([k], true);
}
});})(value,editing_QMARK_,vec__34685,k,v))
);
});})(value,editing_QMARK_,vec__34685,k,v))
], null),[cljs.core.str(value)].join('')], null);
}
})());
});
playground.core.retirement_vals = (function playground$core$retirement_vals(m){
return cljs.core.vals.call(null,cljs.core.select_keys.call(null,m,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"salary","salary",1283904063),new cljs.core.Keyword(null,"expenses","expenses",-63975799),new cljs.core.Keyword(null,"rate-of-return","rate-of-return",592356691)], null)));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playground.core","playground.core",-861442896),new cljs.core.Keyword(null,"interactive-chart","interactive-chart",2146800190)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"interactive-chart",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,owner){
var chart_data = playground.core.years_til_retirement.call(null,cljs.core.deref.call(null,state));
return React.createElement("div",null,null,React.createElement("div",null,null,sablono.interpreter.interpret.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,playground.core.editable_parameter,state),cljs.core.dissoc.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"editing","editing",1365491601))))),React.createElement("div",null,null,"Years til retirement: ",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,chart_data))),React.createElement("div",null,null,sablono.interpreter.interpret.call(null,playground.core.column_chart.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"data","data",-232669377),chart_data,new cljs.core.Keyword(null,"width","width",-384071477),(420),new cljs.core.Keyword(null,"height","height",1025178622),(150)], null)))));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"salary","salary",1283904063),(40000),new cljs.core.Keyword(null,"expenses","expenses",-63975799),(20000),new cljs.core.Keyword(null,"rate-of-return","rate-of-return",592356691),0.05,new cljs.core.Keyword(null,"editing","editing",1365491601),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
playground.core.main = (function playground$core$main(){
var temp__4423__auto__ = document.getElementById("main-app-area");
if(cljs.core.truth_(temp__4423__auto__)){
var node = temp__4423__auto__;
return React.render(React.createElement("div",null,"This is working"),node);
} else {
return null;
}
});
playground.core.main.call(null);

//# sourceMappingURL=core.js.map?rel=1460422781144