// Compiled by ClojureScript 1.7.170 {}
goog.provide('playground.core');
goog.require('cljs.core');
goog.require('om.next');
goog.require('sablono.core');
goog.require('devcards.core');
cljs.core.enable_console_print_BANG_.call(null);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playground.core","playground.core",-861442896),new cljs.core.Keyword(null,"title-card","title-card",-712785820)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"title-card",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),React.createElement("div",null,React.createElement("h1",null,"How much yet is enough?")),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
playground.core.round = (function playground$core$round(x){
return x.toFixed((2));
});
playground.core.none = "";
playground.core.debug = "1px dotted black";
playground.core.years_til_retirement = (function playground$core$years_til_retirement(p__22659){
var map__22662 = p__22659;
var map__22662__$1 = ((((!((map__22662 == null)))?((((map__22662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22662):map__22662);
var salary = cljs.core.get.call(null,map__22662__$1,new cljs.core.Keyword(null,"salary","salary",1283904063));
var expenses = cljs.core.get.call(null,map__22662__$1,new cljs.core.Keyword(null,"expenses","expenses",-63975799));
var rate_of_return = cljs.core.get.call(null,map__22662__$1,new cljs.core.Keyword(null,"rate-of-return","rate-of-return",592356691));
var years = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null);
while(true){
var balance = cljs.core.peek.call(null,years);
var growth = (balance * rate_of_return);
var new_balance = (((balance + salary) + growth) - expenses);
if((growth >= expenses)){
return years;
} else {
var G__22664 = cljs.core.conj.call(null,years,new_balance);
years = G__22664;
continue;
}
break;
}
});
playground.core.sample_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"salary","salary",1283904063),(40000),new cljs.core.Keyword(null,"expenses","expenses",-63975799),(20000),new cljs.core.Keyword(null,"rate-of-return","rate-of-return",592356691),0.05], null);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playground.core","playground.core",-861442896),new cljs.core.Keyword(null,"simulated-growth","simulated-growth",2017783262)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"simulated-growth",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),playground.core.years_til_retirement.call(null,playground.core.sample_data),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
playground.core.point_at_height = (function playground$core$point_at_height(x){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str(x),cljs.core.str("em")].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"1em",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"auto"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"\u00B7"], null)], null);
});
playground.core.bar_of_height = (function playground$core$bar_of_height(x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"background-color","background-color",570434026),"black",new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str(x),cljs.core.str("em")].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"1em",new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"auto"], null)], null)], null);
});
playground.core.scale_to_step_size = (function playground$core$scale_to_step_size(step,years){
return cljs.core.map.call(null,(function (p1__22665_SHARP_){
return (p1__22665_SHARP_ / step);
}),years);
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playground.core","playground.core",-861442896),new cljs.core.Keyword(null,"scaled-growth","scaled-growth",-748203063)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"scaled-growth",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),playground.core.scale_to_step_size.call(null,(10000),playground.core.years_til_retirement.call(null,playground.core.sample_data)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
playground.core.graph_with_ems = (function playground$core$graph_with_ems(years){
var scale = cljs.core.apply.call(null,cljs.core.max,years);
var x_step = (5);
var y_step = (10000);
var x_axis = cljs.core.range.call(null,(0),(30),x_step);
var y_axis = cljs.core.range.call(null,(0),scale,y_step);
var scaled_years = playground.core.scale_to_step_size.call(null,y_step,years);
return React.createElement("div",{"style": {"display": "-webkit-flex", "flexDirection": "row"}},React.createElement("div",{"style": {"flexDirection": "column", "lineHeight": "1em"}},sablono.interpreter.interpret.call(null,cljs.core.reverse.call(null,cljs.core.map.call(null,((function (scale,x_step,y_step,x_axis,y_axis,scaled_years){
return (function (v){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),v], null);
});})(scale,x_step,y_step,x_axis,y_axis,scaled_years))
,y_axis)))),React.createElement("div",{"style": {"flexDirection": "column"}},React.createElement("div",{"style": {"border": playground.core.debug, "height": [cljs.core.str(cljs.core.apply.call(null,cljs.core.max,scaled_years)),cljs.core.str("em")].join(''), "display": "-webkit-flex"}},sablono.interpreter.interpret.call(null,cljs.core.map.call(null,playground.core.point_at_height,scaled_years))),React.createElement("div",{"style": {"flexDirection": "column"}},sablono.interpreter.interpret.call(null,cljs.core.interpose.call(null," ",cljs.core.range.call(null,cljs.core.count.call(null,years)))))));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playground.core","playground.core",-861442896),new cljs.core.Keyword(null,"graph-simulated-growth","graph-simulated-growth",634000019)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"graph-simulated-growth",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),playground.core.graph_with_ems.call(null,playground.core.years_til_retirement.call(null,playground.core.sample_data)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
playground.core.point_at = (function playground$core$point_at(x,y){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"left","left",-399115937),x,new cljs.core.Keyword(null,"top","top",-1856271961),y,new cljs.core.Keyword(null,"display","display",242065432),"-webkit-flex"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"auto"], null)], null),"\u00B7"], null)], null);
});
playground.core.graph = (function playground$core$graph(years){
var height = (200);
var width = (200);
var scale = cljs.core.apply.call(null,cljs.core.max,years);
var x_step = (width / cljs.core.count.call(null,years));
var y_step = (scale / height);
var x_axis = cljs.core.range.call(null,(0),cljs.core.count.call(null,years));
var y_axis = cljs.core.range.call(null,(0),scale,y_step);
var scaled_x_axis = cljs.core.map.call(null,((function (height,width,scale,x_step,y_step,x_axis,y_axis){
return (function (p1__22666_SHARP_){
return (x_step * p1__22666_SHARP_);
});})(height,width,scale,x_step,y_step,x_axis,y_axis))
,x_axis);
var scaled_years = playground.core.scale_to_step_size.call(null,y_step,years);
return React.createElement("div",null,React.createElement("div",{"style": {"height": height, "width": width, "display": "-webkit-flex"}},React.createElement("div",{"style": {"display": "-webkit-flex", "flexDirection": "row"}},sablono.interpreter.interpret.call(null,cljs.core.map.call(null,playground.core.point_at,x_axis,cljs.core.map.call(null,((function (height,width,scale,x_step,y_step,x_axis,y_axis,scaled_x_axis,scaled_years){
return (function (p1__22667_SHARP_){
return (height - p1__22667_SHARP_);
});})(height,width,scale,x_step,y_step,x_axis,y_axis,scaled_x_axis,scaled_years))
,scaled_years))))));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playground.core","playground.core",-861442896),new cljs.core.Keyword(null,"graph-simulated-absolute","graph-simulated-absolute",-1379339627)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"graph-simulated-absolute",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),playground.core.graph.call(null,playground.core.years_til_retirement.call(null,playground.core.sample_data)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
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

//# sourceMappingURL=core.js.map?rel=1458267718526