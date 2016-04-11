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
playground.core.years_til_retirement = (function playground$core$years_til_retirement(p__20835){
var map__20838 = p__20835;
var map__20838__$1 = ((((!((map__20838 == null)))?((((map__20838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__20838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20838):map__20838);
var salary = cljs.core.get.call(null,map__20838__$1,new cljs.core.Keyword(null,"salary","salary",1283904063));
var expenses = cljs.core.get.call(null,map__20838__$1,new cljs.core.Keyword(null,"expenses","expenses",-63975799));
var rate_of_return = cljs.core.get.call(null,map__20838__$1,new cljs.core.Keyword(null,"rate-of-return","rate-of-return",592356691));
var years = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null);
while(true){
var balance = cljs.core.peek.call(null,years);
var growth = (balance * rate_of_return);
var new_balance = (((balance + salary) + growth) - expenses);
if((growth >= expenses)){
return years;
} else {
var G__20840 = cljs.core.conj.call(null,years,new_balance);
years = G__20840;
continue;
}
break;
}
});
playground.core.sample_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"salary","salary",1283904063),(40000),new cljs.core.Keyword(null,"expenses","expenses",-63975799),(20000),new cljs.core.Keyword(null,"rate-of-return","rate-of-return",592356691),0.05], null);
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playground.core","playground.core",-861442896),new cljs.core.Keyword(null,"simulated-growth","simulated-growth",2017783262)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"simulated-growth",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),playground.core.years_til_retirement.call(null,playground.core.sample_data),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
playground.core.multiplier = (function playground$core$multiplier(p__20841,p__20842){
var vec__20845 = p__20841;
var domain_start = cljs.core.nth.call(null,vec__20845,(0),null);
var domain_end = cljs.core.nth.call(null,vec__20845,(1),null);
var vec__20846 = p__20842;
var range_start = cljs.core.nth.call(null,vec__20846,(0),null);
var range_end = cljs.core.nth.call(null,vec__20846,(1),null);
return ((range_end - range_start) / (domain_end - domain_start));
});
playground.core.offset = (function playground$core$offset(p__20847,p__20848){
var vec__20851 = p__20847;
var domain_start = cljs.core.nth.call(null,vec__20851,(0),null);
var domain_end = cljs.core.nth.call(null,vec__20851,(1),null);
var vec__20852 = p__20848;
var range_start = cljs.core.nth.call(null,vec__20852,(0),null);
var range_end = cljs.core.nth.call(null,vec__20852,(1),null);
return (range_start - domain_start);
});
playground.core.linear_scale = (function playground$core$linear_scale(p__20853,p__20854){
var vec__20857 = p__20853;
var domain_start = cljs.core.nth.call(null,vec__20857,(0),null);
var domain_end = cljs.core.nth.call(null,vec__20857,(1),null);
var vec__20858 = p__20854;
var range_start = cljs.core.nth.call(null,vec__20858,(0),null);
var range_end = cljs.core.nth.call(null,vec__20858,(1),null);
var multiplier = playground.core.multiplier.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [domain_start,domain_end], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [range_start,range_end], null));
var offset = playground.core.offset.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [domain_start,domain_end], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [range_start,range_end], null));
return ((function (multiplier,offset,vec__20857,domain_start,domain_end,vec__20858,range_start,range_end){
return (function (domain){
return (offset + (multiplier * domain));
});
;})(multiplier,offset,vec__20857,domain_start,domain_end,vec__20858,range_start,range_end))
});
playground.core.translate = (function playground$core$translate(x,y){
return [cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join('');
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playground.core","playground.core",-861442896),new cljs.core.Keyword(null,"test-linear-scale","test-linear-scale",2069699959)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"test-linear-scale",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"basic offset");

var ret__19529__auto__ = (function (){try{var values__19471__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),playground.core.offset.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(15)], null)));
var result__19472__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__19471__auto__);
if(cljs.core.truth_(result__19472__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(15)], null)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19471__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(15)], null)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19471__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19472__auto__;
}catch (e20859){var t__19509__auto__ = e20859;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(15)], null)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19509__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__19529__auto__;
}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"scale factors other than 1");

var ret__19529__auto__ = (function (){try{var values__19471__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),playground.core.linear_scale.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(50)], null)).call(null,(1)));
var result__19472__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__19471__auto__);
if(cljs.core.truth_(result__19472__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"linear-scale","linear-scale",91410306,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(50)], null)),(1)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19471__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"linear-scale","linear-scale",91410306,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(50)], null)),(1)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19471__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19472__auto__;
}catch (e20860){var t__19509__auto__ = e20860;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"linear-scale","linear-scale",91410306,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(50)], null)),(1)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19509__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__19529__auto__;
}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"offset scale factors other than 1");

var ret__19529__auto__ = (function (){try{var values__19471__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(10)),playground.core.linear_scale.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(55)], null)).call(null,(1)));
var result__19472__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__19471__auto__);
if(cljs.core.truth_(result__19472__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"linear-scale","linear-scale",91410306,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(55)], null)),(1)),(10)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19471__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"linear-scale","linear-scale",91410306,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(55)], null)),(1)),(10)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19471__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19472__auto__;
}catch (e20861){var t__19509__auto__ = e20861;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"linear-scale","linear-scale",91410306,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(55)], null)),(1)),(10)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19509__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__19529__auto__;
}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"multiplier and offset of inverse scales");

var ret__19529__auto__ = (function (){
try{var values__19471__auto___20871 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(-1)),playground.core.multiplier.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)));
var result__19472__auto___20872 = cljs.core.apply.call(null,cljs.core._EQ_,values__19471__auto___20871);
if(cljs.core.truth_(result__19472__auto___20872)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"multiplier","multiplier",277847625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)),(-1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19471__auto___20871),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"multiplier","multiplier",277847625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)),(-1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19471__auto___20871)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e20862){var t__19509__auto___20873 = e20862;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"multiplier","multiplier",277847625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)),(-1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19509__auto___20873,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__19471__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(10)),playground.core.offset.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)));
var result__19472__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__19471__auto__);
if(cljs.core.truth_(result__19472__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)),(10)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19471__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)),(10)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19471__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19472__auto__;
}catch (e20863){var t__19509__auto__ = e20863;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)),(10)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19509__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})()
;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__19529__auto__;
}),(function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"midpoint of inverse scale");

var ret__19529__auto__ = (function (){try{var values__19471__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),playground.core.linear_scale.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)).call(null,(5)));
var result__19472__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__19471__auto__);
if(cljs.core.truth_(result__19472__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"linear-scale","linear-scale",91410306,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)),(5)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19471__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"linear-scale","linear-scale",91410306,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)),(5)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19471__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19472__auto__;
}catch (e20864){var t__19509__auto__ = e20864;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"linear-scale","linear-scale",91410306,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)),(5)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19509__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__19529__auto__;
})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

playground.core.test_linear_scale = (function playground$core$test_linear_scale(){
return cljs.test.test_var.call(null,playground$core$test_linear_scale.cljs$lang$var);
});
playground.core.test_linear_scale.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"basic offset");

var ret__19529__auto___20874 = (function (){try{var values__19471__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),playground.core.offset.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(15)], null)));
var result__19472__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__19471__auto__);
if(cljs.core.truth_(result__19472__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(15)], null)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19471__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(15)], null)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19471__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19472__auto__;
}catch (e20865){var t__19509__auto__ = e20865;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(15)], null)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19509__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);


cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"scale factors other than 1");

var ret__19529__auto___20875 = (function (){try{var values__19471__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),playground.core.linear_scale.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(50)], null)).call(null,(1)));
var result__19472__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__19471__auto__);
if(cljs.core.truth_(result__19472__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"linear-scale","linear-scale",91410306,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(50)], null)),(1)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19471__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"linear-scale","linear-scale",91410306,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(50)], null)),(1)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19471__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19472__auto__;
}catch (e20866){var t__19509__auto__ = e20866;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"linear-scale","linear-scale",91410306,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(50)], null)),(1)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19509__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);


cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"offset scale factors other than 1");

var ret__19529__auto___20876 = (function (){try{var values__19471__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(10)),playground.core.linear_scale.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(55)], null)).call(null,(1)));
var result__19472__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__19471__auto__);
if(cljs.core.truth_(result__19472__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"linear-scale","linear-scale",91410306,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(55)], null)),(1)),(10)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19471__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"linear-scale","linear-scale",91410306,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(55)], null)),(1)),(10)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19471__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19472__auto__;
}catch (e20867){var t__19509__auto__ = e20867;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"linear-scale","linear-scale",91410306,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(5),(55)], null)),(1)),(10)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19509__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);


cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"multiplier and offset of inverse scales");

var ret__19529__auto___20877 = (function (){
try{var values__19471__auto___20878 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(-1)),playground.core.multiplier.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)));
var result__19472__auto___20879 = cljs.core.apply.call(null,cljs.core._EQ_,values__19471__auto___20878);
if(cljs.core.truth_(result__19472__auto___20879)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"multiplier","multiplier",277847625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)),(-1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19471__auto___20878),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"multiplier","multiplier",277847625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)),(-1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19471__auto___20878)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e20868){var t__19509__auto___20880 = e20868;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"multiplier","multiplier",277847625,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)),(-1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19509__auto___20880,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__19471__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(10)),playground.core.offset.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)));
var result__19472__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__19471__auto__);
if(cljs.core.truth_(result__19472__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)),(10)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19471__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)),(10)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19471__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19472__auto__;
}catch (e20869){var t__19509__auto__ = e20869;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)),(10)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19509__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})()
;
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);


cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"midpoint of inverse scale");

var ret__19529__auto__ = (function (){try{var values__19471__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(5)),playground.core.linear_scale.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)).call(null,(5)));
var result__19472__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__19471__auto__);
if(cljs.core.truth_(result__19472__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"linear-scale","linear-scale",91410306,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)),(5)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19471__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"linear-scale","linear-scale",91410306,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)),(5)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19471__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19472__auto__;
}catch (e20870){var t__19509__auto__ = e20870;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(cljs.core.list(new cljs.core.Symbol(null,"linear-scale","linear-scale",91410306,null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(10),(0)], null)),(5)),(5)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19509__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})();
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);

return ret__19529__auto__;
});

playground.core.test_linear_scale.cljs$lang$var = new cljs.core.Var(function(){return playground.core.test_linear_scale;},new cljs.core.Symbol("playground.core","test-linear-scale","playground.core/test-linear-scale",1147575208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.core","playground.core",779088631,null),new cljs.core.Symbol(null,"test-linear-scale","test-linear-scale",-584735810,null),"/Users/bert/Dropbox/source/playground/src/playground/core.cljs",27,1,45,45,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.core.test_linear_scale)?playground.core.test_linear_scale.cljs$lang$test:null)]));
playground.core.display_thousands = (function playground$core$display_thousands(n){
return [cljs.core.str(((n / (1000)) | (0))),cljs.core.str("k")].join('');
});
playground.core.column_chart = (function playground$core$column_chart(data,width,height){
var y_scale = playground.core.linear_scale.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),cljs.core.apply.call(null,cljs.core.max,data)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),height], null));
var bar_width = (width / cljs.core.count.call(null,data));
return React.createElement("svg",{"height": height, "width": width, "className": "chart"},sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,((function (y_scale,bar_width){
return (function (i,d){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),playground.core.translate.call(null,(i * bar_width),(0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"y","y",-1757859776),(height - y_scale.call(null,d)),new cljs.core.Keyword(null,"height","height",1025178622),y_scale.call(null,d),new cljs.core.Keyword(null,"width","width",-384071477),(bar_width - (1))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),((7) + (bar_width / (2))),new cljs.core.Keyword(null,"y","y",-1757859776),(height - (3)),new cljs.core.Keyword(null,"dy","dy",1719547243),"0.15em",new cljs.core.Keyword(null,"color","color",1011675173),"red"], null),playground.core.display_thousands.call(null,d)], null)], null);
});})(y_scale,bar_width))
,data)));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playground.core","playground.core",-861442896),new cljs.core.Keyword(null,"column-chart","column-chart",-1655691580)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"column-chart",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),playground.core.column_chart.call(null,playground.core.years_til_retirement.call(null,playground.core.sample_data),(420),(150)),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
playground.core.editable_parameter = (function playground$core$editable_parameter(state,p__20881){
var vec__20883 = p__20881;
var k = cljs.core.nth.call(null,vec__20883,(0),null);
var v = cljs.core.nth.call(null,vec__20883,(1),null);
return sablono.interpreter.interpret.call(null,(function (){var value = cljs.core.get.call(null,cljs.core.deref.call(null,state),k);
var editing_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"editing","editing",1365491601),value);
if(editing_QMARK_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (value,editing_QMARK_,vec__20883,k,v){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),((function (value,editing_QMARK_,vec__20883,k,v){
return (function (e){
return e.target.parentElement.firstElementChild.value;
});})(value,editing_QMARK_,vec__20883,k,v))
);
});})(value,editing_QMARK_,vec__20883,k,v))
], null),"Done"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (value,editing_QMARK_,vec__20883,k,v){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),cljs.core.constantly.call(null,new cljs.core.Keyword(null,"editing","editing",1365491601)));
});})(value,editing_QMARK_,vec__20883,k,v))
], null),[cljs.core.str(value)].join('')], null);
}
})());
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playground.core","playground.core",-861442896),new cljs.core.Keyword(null,"interactive-chart","interactive-chart",2146800190)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"interactive-chart",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,owner){
cljs.core.println.call(null,cljs.core.deref.call(null,state));

return React.createElement("div",null,null,(function (){var attrs20884 = playground.core.column_chart.call(null,playground.core.years_til_retirement.call(null,cljs.core.deref.call(null,state)),(420),(150));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs20884))?sablono.interpreter.attributes.call(null,attrs20884):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs20884))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs20884)], null))));
})());
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"salary","salary",1283904063),(40000),new cljs.core.Keyword(null,"expenses","expenses",-63975799),(20000),new cljs.core.Keyword(null,"rate-of-return","rate-of-return",592356691),0.05], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
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

//# sourceMappingURL=core.js.map?rel=1460362155237