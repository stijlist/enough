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
playground.core.years_til_retirement = (function playground$core$years_til_retirement(p__32946){
var map__32949 = p__32946;
var map__32949__$1 = ((((!((map__32949 == null)))?((((map__32949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32949):map__32949);
var salary = cljs.core.get.call(null,map__32949__$1,new cljs.core.Keyword(null,"salary","salary",1283904063));
var expenses = cljs.core.get.call(null,map__32949__$1,new cljs.core.Keyword(null,"expenses","expenses",-63975799));
var rate_of_return = cljs.core.get.call(null,map__32949__$1,new cljs.core.Keyword(null,"rate-of-return","rate-of-return",592356691));
if(cljs.core.every_QMARK_.call(null,cljs.core.number_QMARK_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [salary,expenses,rate_of_return], null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"salary","salary",-1370531706,null),new cljs.core.Symbol(null,"expenses","expenses",1576555728,null),new cljs.core.Symbol(null,"rate-of-return","rate-of-return",-2062079078,null)], null))))].join('')));
}

var years = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0)], null);
while(true){
var balance = cljs.core.peek.call(null,years);
var growth = (balance * rate_of_return);
var new_balance = (((balance + salary) + growth) - expenses);
if((growth >= expenses)){
return years;
} else {
var G__32951 = cljs.core.conj.call(null,years,new_balance);
years = G__32951;
continue;
}
break;
}
});
playground.core.sample_data = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"salary","salary",1283904063),(40000),new cljs.core.Keyword(null,"expenses","expenses",-63975799),(20000),new cljs.core.Keyword(null,"rate-of-return","rate-of-return",592356691),0.05], null);
playground.core.multiplier = (function playground$core$multiplier(p__32952,p__32953){
var vec__32956 = p__32952;
var domain_start = cljs.core.nth.call(null,vec__32956,(0),null);
var domain_end = cljs.core.nth.call(null,vec__32956,(1),null);
var vec__32957 = p__32953;
var range_start = cljs.core.nth.call(null,vec__32957,(0),null);
var range_end = cljs.core.nth.call(null,vec__32957,(1),null);
return ((range_end - range_start) / (domain_end - domain_start));
});
playground.core.offset = (function playground$core$offset(p__32958,p__32959){
var vec__32962 = p__32958;
var domain_start = cljs.core.nth.call(null,vec__32962,(0),null);
var domain_end = cljs.core.nth.call(null,vec__32962,(1),null);
var vec__32963 = p__32959;
var range_start = cljs.core.nth.call(null,vec__32963,(0),null);
var range_end = cljs.core.nth.call(null,vec__32963,(1),null);
return (range_start - domain_start);
});
playground.core.linear_scale = (function playground$core$linear_scale(p__32964,p__32965){
var vec__32968 = p__32964;
var domain_start = cljs.core.nth.call(null,vec__32968,(0),null);
var domain_end = cljs.core.nth.call(null,vec__32968,(1),null);
var vec__32969 = p__32965;
var range_start = cljs.core.nth.call(null,vec__32969,(0),null);
var range_end = cljs.core.nth.call(null,vec__32969,(1),null);
var multiplier = playground.core.multiplier.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [domain_start,domain_end], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [range_start,range_end], null));
var offset = playground.core.offset.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [domain_start,domain_end], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [range_start,range_end], null));
return ((function (multiplier,offset,vec__32968,domain_start,domain_end,vec__32969,range_start,range_end){
return (function (domain){
return (offset + (multiplier * domain));
});
;})(multiplier,offset,vec__32968,domain_start,domain_end,vec__32969,range_start,range_end))
});
playground.core.translate = (function playground$core$translate(x,y){
return [cljs.core.str("translate("),cljs.core.str(x),cljs.core.str(","),cljs.core.str(y),cljs.core.str(")")].join('');
});
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
playground.core.coerce_to_type_of = (function playground$core$coerce_to_type_of(orig,v){
var pred__32973 = cljs.core._EQ_;
var expr__32974 = cljs.core.type.call(null,orig);
if(cljs.core.truth_(pred__32973.call(null,Number,expr__32974))){
return Number(v);
} else {
if(cljs.core.truth_(pred__32973.call(null,String,expr__32974))){
return String(v);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__32974)].join('')));
}
}
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playground.core","playground.core",-861442896),new cljs.core.Keyword(null,"coercion-to-example-type","coercion-to-example-type",669120425)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"coercion-to-example-type",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),devcards.core.test_card.call(null,(function (){
try{var values__19471__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"1"),playground.core.coerce_to_type_of.call(null,"a",(1)));
var result__19472__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__19471__auto__);
if(cljs.core.truth_(result__19472__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"coerce-to-type-of","coerce-to-type-of",2116937819,null),"a",(1)),"1"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19471__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"coerce-to-type-of","coerce-to-type-of",2116937819,null),"a",(1)),"1"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19471__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19472__auto__;
}catch (e32976){var t__19509__auto__ = e32976;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"coerce-to-type-of","coerce-to-type-of",2116937819,null),"a",(1)),"1"),new cljs.core.Keyword(null,"actual","actual",107306363),t__19509__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}),(function (){
try{var values__19471__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),playground.core.coerce_to_type_of.call(null,(1),"1"));
var result__19472__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__19471__auto__);
if(cljs.core.truth_(result__19472__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"coerce-to-type-of","coerce-to-type-of",2116937819,null),(1),"1"),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19471__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"coerce-to-type-of","coerce-to-type-of",2116937819,null),(1),"1"),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19471__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19472__auto__;
}catch (e32977){var t__19509__auto__ = e32977;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"coerce-to-type-of","coerce-to-type-of",2116937819,null),(1),"1"),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19509__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}})),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));

playground.core.coercion_to_example_type = (function playground$core$coercion_to_example_type(){
return cljs.test.test_var.call(null,playground$core$coercion_to_example_type.cljs$lang$var);
});
playground.core.coercion_to_example_type.cljs$lang$test = (function (){
try{var values__19471__auto___32980 = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,"1"),playground.core.coerce_to_type_of.call(null,"a",(1)));
var result__19472__auto___32981 = cljs.core.apply.call(null,cljs.core._EQ_,values__19471__auto___32980);
if(cljs.core.truth_(result__19472__auto___32981)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"coerce-to-type-of","coerce-to-type-of",2116937819,null),"a",(1)),"1"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19471__auto___32980),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"coerce-to-type-of","coerce-to-type-of",2116937819,null),"a",(1)),"1"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19471__auto___32980)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e32978){var t__19509__auto___32982 = e32978;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"coerce-to-type-of","coerce-to-type-of",2116937819,null),"a",(1)),"1"),new cljs.core.Keyword(null,"actual","actual",107306363),t__19509__auto___32982,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__19471__auto__ = cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,(1)),playground.core.coerce_to_type_of.call(null,(1),"1"));
var result__19472__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__19471__auto__);
if(cljs.core.truth_(result__19472__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"coerce-to-type-of","coerce-to-type-of",2116937819,null),(1),"1"),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__19471__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"coerce-to-type-of","coerce-to-type-of",2116937819,null),(1),"1"),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__19471__auto__)),new cljs.core.Symbol(null,"not","not",1044554643,null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__19472__auto__;
}catch (e32979){var t__19509__auto__ = e32979;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"coerce-to-type-of","coerce-to-type-of",2116937819,null),(1),"1"),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__19509__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});

playground.core.coercion_to_example_type.cljs$lang$var = new cljs.core.Var(function(){return playground.core.coercion_to_example_type;},new cljs.core.Symbol("playground.core","coercion-to-example-type","playground.core/coercion-to-example-type",250434958,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"playground.core","playground.core",779088631,null),new cljs.core.Symbol(null,"coercion-to-example-type","coercion-to-example-type",-1985315344,null),"/Users/bert/Dropbox/source/playground/src/playground/core.cljs",34,1,66,66,cljs.core.List.EMPTY,null,(cljs.core.truth_(playground.core.coercion_to_example_type)?playground.core.coercion_to_example_type.cljs$lang$test:null)]));
playground.core.editable_parameter = (function playground$core$editable_parameter(state,p__32983){
var vec__32985 = p__32983;
var k = cljs.core.nth.call(null,vec__32985,(0),null);
var v = cljs.core.nth.call(null,vec__32985,(1),null);
return sablono.interpreter.interpret.call(null,(function (){var value = cljs.core.get.call(null,cljs.core.deref.call(null,state),k);
var editing_QMARK_ = cljs.core.contains_QMARK_.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,state),new cljs.core.Keyword(null,"editing","editing",1365491601)),k);
if(editing_QMARK_){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"text"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (value,editing_QMARK_,vec__32985,k,v){
return (function (e){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null),((function (value,editing_QMARK_,vec__32985,k,v){
return (function (){
return playground.core.coerce_to_type_of.call(null,v,e.target.parentElement.firstElementChild.value);
});})(value,editing_QMARK_,vec__32985,k,v))
);
});})(value,editing_QMARK_,vec__32985,k,v))
], null),"Done"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (value,editing_QMARK_,vec__32985,k,v){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"editing","editing",1365491601)], null),((function (value,editing_QMARK_,vec__32985,k,v){
return (function (ks){
if(cljs.core.truth_(ks)){
return cljs.core.conj.call(null,ks,k);
} else {
return cljs.core.PersistentHashSet.fromArray([k], true);
}
});})(value,editing_QMARK_,vec__32985,k,v))
);
});})(value,editing_QMARK_,vec__32985,k,v))
], null),[cljs.core.str(value)].join('')], null);
}
})());
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playground.core","playground.core",-861442896),new cljs.core.Keyword(null,"editable-parameters","editable-parameters",-99448422)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"editable-parameters",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,owner){
return React.createElement("div",null,null,sablono.interpreter.interpret.call(null,cljs.core.map.call(null,(function (p1__32986_SHARP_){
return playground.core.editable_parameter.call(null,state,p1__32986_SHARP_);
}),cljs.core.deref.call(null,state))));
}),new cljs.core.Keyword(null,"initial-data","initial-data",-1315709804),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"saying","saying",704747656),"roses are red",new cljs.core.Keyword(null,"number","number",1570378438),(1)], null),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.PersistentArrayMap.EMPTY], null));
})], null));
playground.core.retirement_vals = (function playground$core$retirement_vals(m){
return cljs.core.vals.call(null,cljs.core.select_keys.call(null,m,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"salary","salary",1283904063),new cljs.core.Keyword(null,"expenses","expenses",-63975799),new cljs.core.Keyword(null,"rate-of-return","rate-of-return",592356691)], null)));
});
devcards.core.register_card.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"playground.core","playground.core",-861442896),new cljs.core.Keyword(null,"interactive-chart","interactive-chart",2146800190)], null),new cljs.core.Keyword(null,"func","func",-238706040),(function (){
return devcards.core.card_base.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),"interactive-chart",new cljs.core.Keyword(null,"documentation","documentation",1889593999),null,new cljs.core.Keyword(null,"main-obj","main-obj",-1544409742),(function (state,owner){
cljs.core.println.call(null,cljs.core.deref.call(null,state));

return React.createElement("div",null,null,React.createElement("div",null,null,sablono.interpreter.interpret.call(null,playground.core.editable_parameter.call(null,state,cljs.core.first.call(null,cljs.core.deref.call(null,state))))),(function (){var attrs32987 = ((cljs.core.not_every_QMARK_.call(null,cljs.core.number_QMARK_,playground.core.retirement_vals.call(null,cljs.core.deref.call(null,state))))?"Waiting...":playground.core.column_chart.call(null,playground.core.years_til_retirement.call(null,cljs.core.deref.call(null,state)),(420),(150)));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs32987))?sablono.interpreter.attributes.call(null,attrs32987):null),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs32987))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs32987)], null))));
})());
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

//# sourceMappingURL=core.js.map?rel=1460400263295