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
playground.core.years_til_retirement = (function playground$core$years_til_retirement(p__33938){
var map__33941 = p__33938;
var map__33941__$1 = ((((!((map__33941 == null)))?((((map__33941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33941):map__33941);
var salary = cljs.core.get.call(null,map__33941__$1,new cljs.core.Keyword(null,"salary","salary",1283904063));
var expenses = cljs.core.get.call(null,map__33941__$1,new cljs.core.Keyword(null,"expenses","expenses",-63975799));
var rate_of_return = cljs.core.get.call(null,map__33941__$1,new cljs.core.Keyword(null,"rate-of-return","rate-of-return",592356691));
var cutoff = cljs.core.get.call(null,map__33941__$1,new cljs.core.Keyword(null,"cutoff","cutoff",316921213));
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
var G__33943 = cljs.core.conj.call(null,years,new_balance);
years = G__33943;
continue;
}
break;
}
});
playground.core.linear_scale = (function playground$core$linear_scale(p__33944,p__33945){
var vec__33948 = p__33944;
var domain_start = cljs.core.nth.call(null,vec__33948,(0),null);
var domain_end = cljs.core.nth.call(null,vec__33948,(1),null);
var vec__33949 = p__33945;
var range_start = cljs.core.nth.call(null,vec__33949,(0),null);
var range_end = cljs.core.nth.call(null,vec__33949,(1),null);
var multiplier = ((range_end - range_start) / (domain_end - domain_start));
var offset = (range_start - domain_start);
return ((function (multiplier,offset,vec__33948,domain_start,domain_end,vec__33949,range_start,range_end){
return (function (domain){
return (offset + (multiplier * domain));
});
;})(multiplier,offset,vec__33948,domain_start,domain_end,vec__33949,range_start,range_end))
});
playground.core.translate = (function playground$core$translate(x,y){
return [cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join('');
});
playground.core.thousands__GT_k = (function playground$core$thousands__GT_k(n){
return [cljs.core.str(((n / (1000)) | (0))),cljs.core.str("k")].join('');
});
playground.core.column_chart = (function playground$core$column_chart(data,width,height){
var y_scale = playground.core.linear_scale.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.apply.call(null,cljs.core.max,data)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),height], null));
var bar_width = (width / cljs.core.count.call(null,data));
return React.createElement("svg",{"height": height, "width": width, "className": "chart"},sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (y_scale,bar_width){
return (function (i,d){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),playground.core.translate.call(null,(i * bar_width),(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"y","y",-1757859776),(height - y_scale.call(null,d)),new cljs.core.Keyword(null,"height","height",1025178622),y_scale.call(null,d),new cljs.core.Keyword(null,"width","width",-384071477),(bar_width - (1))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"x","x",2099068185),((7) + (bar_width / (2))),new cljs.core.Keyword(null,"y","y",-1757859776),(height - (3)),new cljs.core.Keyword(null,"dy","dy",1719547243),"0.15em"], null),playground.core.thousands__GT_k.call(null,d)], null)], null);
});})(y_scale,bar_width))
,data)));
});
playground.core.coerce_to_type_of = (function playground$core$coerce_to_type_of(orig,v){
var pred__33953 = cljs.core._EQ_;
var expr__33954 = cljs.core.type.call(null,orig);
if(cljs.core.truth_(pred__33953.call(null,Number,expr__33954))){
return Number(v);
} else {
if(cljs.core.truth_(pred__33953.call(null,String,expr__33954))){
return String(v);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__33954)].join('')));
}
}
});
playground.core.editable_parameter = (function playground$core$editable_parameter(state,p__33957){
var vec__33959 = p__33957;
var k = cljs.core.nth.call(null,vec__33959,(0),null);
var v = cljs.core.nth.call(null,vec__33959,(1),null);
return sablono.interpreter.interpret.call(null,(function (){var value = cljs.core.get.call(null,cljs.core.deref.call(null,state),k);
var editing_QMARK_ = cljs.core.contains_QMARK_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"editing","editing",1365491601)),k);
if(editing_QMARK_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (value,editing_QMARK_,vec__33959,k,v){
return (function (e){
return cljs.core.swap_BANG_.call(null,state,((function (value,editing_QMARK_,vec__33959,k,v){
return (function (s){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,s,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing","editing",1365491601)], null),((function (value,editing_QMARK_,vec__33959,k,v){
return (function (p1__33956_SHARP_){
return cljs.core.disj.call(null,p1__33956_SHARP_,k);
});})(value,editing_QMARK_,vec__33959,k,v))
),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),((function (value,editing_QMARK_,vec__33959,k,v){
return (function (){
return playground.core.coerce_to_type_of.call(null,v,e.target.parentElement.firstElementChild.value);
});})(value,editing_QMARK_,vec__33959,k,v))
);
});})(value,editing_QMARK_,vec__33959,k,v))
);
});})(value,editing_QMARK_,vec__33959,k,v))
], null),"Done"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (value,editing_QMARK_,vec__33959,k,v){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing","editing",1365491601)], null),((function (value,editing_QMARK_,vec__33959,k,v){
return (function (ks){
if(cljs.core.truth_(ks)){
return cljs.core.conj.call(null,ks,k);
} else {
return cljs.core.PersistentHashSet.fromArray([k], true);
}
});})(value,editing_QMARK_,vec__33959,k,v))
);
});})(value,editing_QMARK_,vec__33959,k,v))
], null),[cljs.core.str(value)].join('')], null);
}
})());
});
playground.core.retirement_vals = (function playground$core$retirement_vals(m){
return cljs.core.vals.call(null,cljs.core.select_keys.call(null,m,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"salary","salary",1283904063),new cljs.core.Keyword(null,"expenses","expenses",-63975799),new cljs.core.Keyword(null,"rate-of-return","rate-of-return",592356691)], null)));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playground.core","playground.core",-861442896),new cljs.core.Keyword(null,"interactive-chart","interactive-chart",2146800190)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"interactive-chart",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,owner){
return React.createElement("div",null,null,React.createElement("div",null,null,sablono.interpreter.interpret.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,playground.core.editable_parameter,state),cljs.core.dissoc.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"editing","editing",1365491601))))),(function (){var attrs33960 = ((cljs.core.not_every_QMARK_.call(null,cljs.core.number_QMARK_,playground.core.retirement_vals.call(null,cljs.core.deref.call(null,state))))?"Waiting...":playground.core.column_chart.call(null,playground.core.years_til_retirement.call(null,cljs.core.deref.call(null,state)),(420),(150)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs33960))?sablono.interpreter.attributes.call(null,attrs33960):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs33960))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs33960)], null))));
})());
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"salary","salary",1283904063),(40000),new cljs.core.Keyword(null,"expenses","expenses",-63975799),(20000),new cljs.core.Keyword(null,"rate-of-return","rate-of-return",592356691),0.05,new cljs.core.Keyword(null,"cutoff","cutoff",316921213),(20),new cljs.core.Keyword(null,"editing","editing",1365491601),cljs.core.PersistentHashSet.EMPTY], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
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

//# sourceMappingURL=core.js.map?rel=1460404866428