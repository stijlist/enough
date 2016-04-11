// Compiled by ClojureScript 1.7.170 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.autoload_QMARK_ = (cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?(function (){
var pred__32718 = cljs.core._EQ_;
var expr__32719 = (function (){var or__16819__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e32722){if((e32722 instanceof Error)){
var e = e32722;
return false;
} else {
throw e32722;

}
}})();
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__32718.call(null,"true",expr__32719))){
return true;
} else {
if(cljs.core.truth_(pred__32718.call(null,"false",expr__32719))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__32719)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e32724){if((e32724 instanceof Error)){
var e = e32724;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e32724;

}
}} else {
return null;
}
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.repl_print_fn = (function figwheel$client$repl_print_fn(var_args){
var args__17884__auto__ = [];
var len__17877__auto___32726 = arguments.length;
var i__17878__auto___32727 = (0);
while(true){
if((i__17878__auto___32727 < len__17877__auto___32726)){
args__17884__auto__.push((arguments[i__17878__auto___32727]));

var G__32728 = (i__17878__auto___32727 + (1));
i__17878__auto___32727 = G__32728;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((0) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17885__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq32725){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32725));
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32729){
var map__32732 = p__32729;
var map__32732__$1 = ((((!((map__32732 == null)))?((((map__32732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32732):map__32732);
var message = cljs.core.get.call(null,map__32732__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32732__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16819__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16807__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16807__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16807__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__18935__auto___32894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___32894,ch){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___32894,ch){
return (function (state_32863){
var state_val_32864 = (state_32863[(1)]);
if((state_val_32864 === (7))){
var inst_32859 = (state_32863[(2)]);
var state_32863__$1 = state_32863;
var statearr_32865_32895 = state_32863__$1;
(statearr_32865_32895[(2)] = inst_32859);

(statearr_32865_32895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32864 === (1))){
var state_32863__$1 = state_32863;
var statearr_32866_32896 = state_32863__$1;
(statearr_32866_32896[(2)] = null);

(statearr_32866_32896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32864 === (4))){
var inst_32816 = (state_32863[(7)]);
var inst_32816__$1 = (state_32863[(2)]);
var state_32863__$1 = (function (){var statearr_32867 = state_32863;
(statearr_32867[(7)] = inst_32816__$1);

return statearr_32867;
})();
if(cljs.core.truth_(inst_32816__$1)){
var statearr_32868_32897 = state_32863__$1;
(statearr_32868_32897[(1)] = (5));

} else {
var statearr_32869_32898 = state_32863__$1;
(statearr_32869_32898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32864 === (15))){
var inst_32823 = (state_32863[(8)]);
var inst_32838 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32823);
var inst_32839 = cljs.core.first.call(null,inst_32838);
var inst_32840 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32839);
var inst_32841 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_32840)].join('');
var inst_32842 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_32841);
var state_32863__$1 = state_32863;
var statearr_32870_32899 = state_32863__$1;
(statearr_32870_32899[(2)] = inst_32842);

(statearr_32870_32899[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32864 === (13))){
var inst_32847 = (state_32863[(2)]);
var state_32863__$1 = state_32863;
var statearr_32871_32900 = state_32863__$1;
(statearr_32871_32900[(2)] = inst_32847);

(statearr_32871_32900[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32864 === (6))){
var state_32863__$1 = state_32863;
var statearr_32872_32901 = state_32863__$1;
(statearr_32872_32901[(2)] = null);

(statearr_32872_32901[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32864 === (17))){
var inst_32845 = (state_32863[(2)]);
var state_32863__$1 = state_32863;
var statearr_32873_32902 = state_32863__$1;
(statearr_32873_32902[(2)] = inst_32845);

(statearr_32873_32902[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32864 === (3))){
var inst_32861 = (state_32863[(2)]);
var state_32863__$1 = state_32863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32863__$1,inst_32861);
} else {
if((state_val_32864 === (12))){
var inst_32822 = (state_32863[(9)]);
var inst_32836 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32822,opts);
var state_32863__$1 = state_32863;
if(cljs.core.truth_(inst_32836)){
var statearr_32874_32903 = state_32863__$1;
(statearr_32874_32903[(1)] = (15));

} else {
var statearr_32875_32904 = state_32863__$1;
(statearr_32875_32904[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32864 === (2))){
var state_32863__$1 = state_32863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32863__$1,(4),ch);
} else {
if((state_val_32864 === (11))){
var inst_32823 = (state_32863[(8)]);
var inst_32828 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32829 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32823);
var inst_32830 = cljs.core.async.timeout.call(null,(1000));
var inst_32831 = [inst_32829,inst_32830];
var inst_32832 = (new cljs.core.PersistentVector(null,2,(5),inst_32828,inst_32831,null));
var state_32863__$1 = state_32863;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32863__$1,(14),inst_32832);
} else {
if((state_val_32864 === (9))){
var inst_32823 = (state_32863[(8)]);
var inst_32849 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_32850 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32823);
var inst_32851 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32850);
var inst_32852 = [cljs.core.str("Not loading: "),cljs.core.str(inst_32851)].join('');
var inst_32853 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_32852);
var state_32863__$1 = (function (){var statearr_32876 = state_32863;
(statearr_32876[(10)] = inst_32849);

return statearr_32876;
})();
var statearr_32877_32905 = state_32863__$1;
(statearr_32877_32905[(2)] = inst_32853);

(statearr_32877_32905[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32864 === (5))){
var inst_32816 = (state_32863[(7)]);
var inst_32818 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32819 = (new cljs.core.PersistentArrayMap(null,2,inst_32818,null));
var inst_32820 = (new cljs.core.PersistentHashSet(null,inst_32819,null));
var inst_32821 = figwheel.client.focus_msgs.call(null,inst_32820,inst_32816);
var inst_32822 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32821);
var inst_32823 = cljs.core.first.call(null,inst_32821);
var inst_32824 = figwheel.client.autoload_QMARK_.call(null);
var state_32863__$1 = (function (){var statearr_32878 = state_32863;
(statearr_32878[(8)] = inst_32823);

(statearr_32878[(9)] = inst_32822);

return statearr_32878;
})();
if(cljs.core.truth_(inst_32824)){
var statearr_32879_32906 = state_32863__$1;
(statearr_32879_32906[(1)] = (8));

} else {
var statearr_32880_32907 = state_32863__$1;
(statearr_32880_32907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32864 === (14))){
var inst_32834 = (state_32863[(2)]);
var state_32863__$1 = state_32863;
var statearr_32881_32908 = state_32863__$1;
(statearr_32881_32908[(2)] = inst_32834);

(statearr_32881_32908[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32864 === (16))){
var state_32863__$1 = state_32863;
var statearr_32882_32909 = state_32863__$1;
(statearr_32882_32909[(2)] = null);

(statearr_32882_32909[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32864 === (10))){
var inst_32855 = (state_32863[(2)]);
var state_32863__$1 = (function (){var statearr_32883 = state_32863;
(statearr_32883[(11)] = inst_32855);

return statearr_32883;
})();
var statearr_32884_32910 = state_32863__$1;
(statearr_32884_32910[(2)] = null);

(statearr_32884_32910[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32864 === (8))){
var inst_32822 = (state_32863[(9)]);
var inst_32826 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32822,opts);
var state_32863__$1 = state_32863;
if(cljs.core.truth_(inst_32826)){
var statearr_32885_32911 = state_32863__$1;
(statearr_32885_32911[(1)] = (11));

} else {
var statearr_32886_32912 = state_32863__$1;
(statearr_32886_32912[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18935__auto___32894,ch))
;
return ((function (switch__18914__auto__,c__18935__auto___32894,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18915__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18915__auto____0 = (function (){
var statearr_32890 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32890[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18915__auto__);

(statearr_32890[(1)] = (1));

return statearr_32890;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18915__auto____1 = (function (state_32863){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_32863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e32891){if((e32891 instanceof Object)){
var ex__18918__auto__ = e32891;
var statearr_32892_32913 = state_32863;
(statearr_32892_32913[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32914 = state_32863;
state_32863 = G__32914;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18915__auto__ = function(state_32863){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18915__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18915__auto____1.call(this,state_32863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18915__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18915__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___32894,ch))
})();
var state__18937__auto__ = (function (){var statearr_32893 = f__18936__auto__.call(null);
(statearr_32893[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___32894);

return statearr_32893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___32894,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__32915_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__32915_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_32922 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_32922){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_32920 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_32921 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_32921;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_32920;
}}catch (e32919){if((e32919 instanceof Error)){
var e = e32919;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_32922], null));
} else {
var e = e32919;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_32922))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__32923){
var map__32930 = p__32923;
var map__32930__$1 = ((((!((map__32930 == null)))?((((map__32930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32930):map__32930);
var opts = map__32930__$1;
var build_id = cljs.core.get.call(null,map__32930__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__32930,map__32930__$1,opts,build_id){
return (function (p__32932){
var vec__32933 = p__32932;
var map__32934 = cljs.core.nth.call(null,vec__32933,(0),null);
var map__32934__$1 = ((((!((map__32934 == null)))?((((map__32934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32934):map__32934);
var msg = map__32934__$1;
var msg_name = cljs.core.get.call(null,map__32934__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32933,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__32933,map__32934,map__32934__$1,msg,msg_name,_,map__32930,map__32930__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__32933,map__32934,map__32934__$1,msg,msg_name,_,map__32930,map__32930__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__32930,map__32930__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__32940){
var vec__32941 = p__32940;
var map__32942 = cljs.core.nth.call(null,vec__32941,(0),null);
var map__32942__$1 = ((((!((map__32942 == null)))?((((map__32942.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32942.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32942):map__32942);
var msg = map__32942__$1;
var msg_name = cljs.core.get.call(null,map__32942__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32941,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__32944){
var map__32954 = p__32944;
var map__32954__$1 = ((((!((map__32954 == null)))?((((map__32954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32954):map__32954);
var on_compile_warning = cljs.core.get.call(null,map__32954__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__32954__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__32954,map__32954__$1,on_compile_warning,on_compile_fail){
return (function (p__32956){
var vec__32957 = p__32956;
var map__32958 = cljs.core.nth.call(null,vec__32957,(0),null);
var map__32958__$1 = ((((!((map__32958 == null)))?((((map__32958.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32958.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32958):map__32958);
var msg = map__32958__$1;
var msg_name = cljs.core.get.call(null,map__32958__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__32957,(1));
var pred__32960 = cljs.core._EQ_;
var expr__32961 = msg_name;
if(cljs.core.truth_(pred__32960.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__32961))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__32960.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__32961))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__32954,map__32954__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18935__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto__,msg_hist,msg_names,msg){
return (function (state_33177){
var state_val_33178 = (state_33177[(1)]);
if((state_val_33178 === (7))){
var inst_33101 = (state_33177[(2)]);
var state_33177__$1 = state_33177;
if(cljs.core.truth_(inst_33101)){
var statearr_33179_33225 = state_33177__$1;
(statearr_33179_33225[(1)] = (8));

} else {
var statearr_33180_33226 = state_33177__$1;
(statearr_33180_33226[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (20))){
var inst_33171 = (state_33177[(2)]);
var state_33177__$1 = state_33177;
var statearr_33181_33227 = state_33177__$1;
(statearr_33181_33227[(2)] = inst_33171);

(statearr_33181_33227[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (27))){
var inst_33167 = (state_33177[(2)]);
var state_33177__$1 = state_33177;
var statearr_33182_33228 = state_33177__$1;
(statearr_33182_33228[(2)] = inst_33167);

(statearr_33182_33228[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (1))){
var inst_33094 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33177__$1 = state_33177;
if(cljs.core.truth_(inst_33094)){
var statearr_33183_33229 = state_33177__$1;
(statearr_33183_33229[(1)] = (2));

} else {
var statearr_33184_33230 = state_33177__$1;
(statearr_33184_33230[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (24))){
var inst_33169 = (state_33177[(2)]);
var state_33177__$1 = state_33177;
var statearr_33185_33231 = state_33177__$1;
(statearr_33185_33231[(2)] = inst_33169);

(statearr_33185_33231[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (4))){
var inst_33175 = (state_33177[(2)]);
var state_33177__$1 = state_33177;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33177__$1,inst_33175);
} else {
if((state_val_33178 === (15))){
var inst_33173 = (state_33177[(2)]);
var state_33177__$1 = state_33177;
var statearr_33186_33232 = state_33177__$1;
(statearr_33186_33232[(2)] = inst_33173);

(statearr_33186_33232[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (21))){
var inst_33132 = (state_33177[(2)]);
var state_33177__$1 = state_33177;
var statearr_33187_33233 = state_33177__$1;
(statearr_33187_33233[(2)] = inst_33132);

(statearr_33187_33233[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (31))){
var inst_33156 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33177__$1 = state_33177;
if(cljs.core.truth_(inst_33156)){
var statearr_33188_33234 = state_33177__$1;
(statearr_33188_33234[(1)] = (34));

} else {
var statearr_33189_33235 = state_33177__$1;
(statearr_33189_33235[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (32))){
var inst_33165 = (state_33177[(2)]);
var state_33177__$1 = state_33177;
var statearr_33190_33236 = state_33177__$1;
(statearr_33190_33236[(2)] = inst_33165);

(statearr_33190_33236[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (33))){
var inst_33154 = (state_33177[(2)]);
var state_33177__$1 = state_33177;
var statearr_33191_33237 = state_33177__$1;
(statearr_33191_33237[(2)] = inst_33154);

(statearr_33191_33237[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (13))){
var inst_33115 = figwheel.client.heads_up.clear.call(null);
var state_33177__$1 = state_33177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33177__$1,(16),inst_33115);
} else {
if((state_val_33178 === (22))){
var inst_33136 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33137 = figwheel.client.heads_up.append_message.call(null,inst_33136);
var state_33177__$1 = state_33177;
var statearr_33192_33238 = state_33177__$1;
(statearr_33192_33238[(2)] = inst_33137);

(statearr_33192_33238[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (36))){
var inst_33163 = (state_33177[(2)]);
var state_33177__$1 = state_33177;
var statearr_33193_33239 = state_33177__$1;
(statearr_33193_33239[(2)] = inst_33163);

(statearr_33193_33239[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (29))){
var inst_33147 = (state_33177[(2)]);
var state_33177__$1 = state_33177;
var statearr_33194_33240 = state_33177__$1;
(statearr_33194_33240[(2)] = inst_33147);

(statearr_33194_33240[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (6))){
var inst_33096 = (state_33177[(7)]);
var state_33177__$1 = state_33177;
var statearr_33195_33241 = state_33177__$1;
(statearr_33195_33241[(2)] = inst_33096);

(statearr_33195_33241[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (28))){
var inst_33143 = (state_33177[(2)]);
var inst_33144 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33145 = figwheel.client.heads_up.display_warning.call(null,inst_33144);
var state_33177__$1 = (function (){var statearr_33196 = state_33177;
(statearr_33196[(8)] = inst_33143);

return statearr_33196;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33177__$1,(29),inst_33145);
} else {
if((state_val_33178 === (25))){
var inst_33141 = figwheel.client.heads_up.clear.call(null);
var state_33177__$1 = state_33177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33177__$1,(28),inst_33141);
} else {
if((state_val_33178 === (34))){
var inst_33158 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33177__$1 = state_33177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33177__$1,(37),inst_33158);
} else {
if((state_val_33178 === (17))){
var inst_33123 = (state_33177[(2)]);
var state_33177__$1 = state_33177;
var statearr_33197_33242 = state_33177__$1;
(statearr_33197_33242[(2)] = inst_33123);

(statearr_33197_33242[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (3))){
var inst_33113 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33177__$1 = state_33177;
if(cljs.core.truth_(inst_33113)){
var statearr_33198_33243 = state_33177__$1;
(statearr_33198_33243[(1)] = (13));

} else {
var statearr_33199_33244 = state_33177__$1;
(statearr_33199_33244[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (12))){
var inst_33109 = (state_33177[(2)]);
var state_33177__$1 = state_33177;
var statearr_33200_33245 = state_33177__$1;
(statearr_33200_33245[(2)] = inst_33109);

(statearr_33200_33245[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (2))){
var inst_33096 = (state_33177[(7)]);
var inst_33096__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_33177__$1 = (function (){var statearr_33201 = state_33177;
(statearr_33201[(7)] = inst_33096__$1);

return statearr_33201;
})();
if(cljs.core.truth_(inst_33096__$1)){
var statearr_33202_33246 = state_33177__$1;
(statearr_33202_33246[(1)] = (5));

} else {
var statearr_33203_33247 = state_33177__$1;
(statearr_33203_33247[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (23))){
var inst_33139 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33177__$1 = state_33177;
if(cljs.core.truth_(inst_33139)){
var statearr_33204_33248 = state_33177__$1;
(statearr_33204_33248[(1)] = (25));

} else {
var statearr_33205_33249 = state_33177__$1;
(statearr_33205_33249[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (35))){
var state_33177__$1 = state_33177;
var statearr_33206_33250 = state_33177__$1;
(statearr_33206_33250[(2)] = null);

(statearr_33206_33250[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (19))){
var inst_33134 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33177__$1 = state_33177;
if(cljs.core.truth_(inst_33134)){
var statearr_33207_33251 = state_33177__$1;
(statearr_33207_33251[(1)] = (22));

} else {
var statearr_33208_33252 = state_33177__$1;
(statearr_33208_33252[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (11))){
var inst_33105 = (state_33177[(2)]);
var state_33177__$1 = state_33177;
var statearr_33209_33253 = state_33177__$1;
(statearr_33209_33253[(2)] = inst_33105);

(statearr_33209_33253[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (9))){
var inst_33107 = figwheel.client.heads_up.clear.call(null);
var state_33177__$1 = state_33177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33177__$1,(12),inst_33107);
} else {
if((state_val_33178 === (5))){
var inst_33098 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33177__$1 = state_33177;
var statearr_33210_33254 = state_33177__$1;
(statearr_33210_33254[(2)] = inst_33098);

(statearr_33210_33254[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (14))){
var inst_33125 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33177__$1 = state_33177;
if(cljs.core.truth_(inst_33125)){
var statearr_33211_33255 = state_33177__$1;
(statearr_33211_33255[(1)] = (18));

} else {
var statearr_33212_33256 = state_33177__$1;
(statearr_33212_33256[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (26))){
var inst_33149 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33177__$1 = state_33177;
if(cljs.core.truth_(inst_33149)){
var statearr_33213_33257 = state_33177__$1;
(statearr_33213_33257[(1)] = (30));

} else {
var statearr_33214_33258 = state_33177__$1;
(statearr_33214_33258[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (16))){
var inst_33117 = (state_33177[(2)]);
var inst_33118 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33119 = figwheel.client.format_messages.call(null,inst_33118);
var inst_33120 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33121 = figwheel.client.heads_up.display_error.call(null,inst_33119,inst_33120);
var state_33177__$1 = (function (){var statearr_33215 = state_33177;
(statearr_33215[(9)] = inst_33117);

return statearr_33215;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33177__$1,(17),inst_33121);
} else {
if((state_val_33178 === (30))){
var inst_33151 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33152 = figwheel.client.heads_up.display_warning.call(null,inst_33151);
var state_33177__$1 = state_33177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33177__$1,(33),inst_33152);
} else {
if((state_val_33178 === (10))){
var inst_33111 = (state_33177[(2)]);
var state_33177__$1 = state_33177;
var statearr_33216_33259 = state_33177__$1;
(statearr_33216_33259[(2)] = inst_33111);

(statearr_33216_33259[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (18))){
var inst_33127 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33128 = figwheel.client.format_messages.call(null,inst_33127);
var inst_33129 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33130 = figwheel.client.heads_up.display_error.call(null,inst_33128,inst_33129);
var state_33177__$1 = state_33177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33177__$1,(21),inst_33130);
} else {
if((state_val_33178 === (37))){
var inst_33160 = (state_33177[(2)]);
var state_33177__$1 = state_33177;
var statearr_33217_33260 = state_33177__$1;
(statearr_33217_33260[(2)] = inst_33160);

(statearr_33217_33260[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33178 === (8))){
var inst_33103 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33177__$1 = state_33177;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33177__$1,(11),inst_33103);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__18935__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18914__auto__,c__18935__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18915__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18915__auto____0 = (function (){
var statearr_33221 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33221[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18915__auto__);

(statearr_33221[(1)] = (1));

return statearr_33221;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18915__auto____1 = (function (state_33177){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_33177);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e33222){if((e33222 instanceof Object)){
var ex__18918__auto__ = e33222;
var statearr_33223_33261 = state_33177;
(statearr_33223_33261[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33177);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33222;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33262 = state_33177;
state_33177 = G__33262;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18915__auto__ = function(state_33177){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18915__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18915__auto____1.call(this,state_33177);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18915__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18915__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto__,msg_hist,msg_names,msg))
})();
var state__18937__auto__ = (function (){var statearr_33224 = f__18936__auto__.call(null);
(statearr_33224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto__);

return statearr_33224;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto__,msg_hist,msg_names,msg))
);

return c__18935__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18935__auto___33325 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___33325,ch){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___33325,ch){
return (function (state_33308){
var state_val_33309 = (state_33308[(1)]);
if((state_val_33309 === (1))){
var state_33308__$1 = state_33308;
var statearr_33310_33326 = state_33308__$1;
(statearr_33310_33326[(2)] = null);

(statearr_33310_33326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33309 === (2))){
var state_33308__$1 = state_33308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33308__$1,(4),ch);
} else {
if((state_val_33309 === (3))){
var inst_33306 = (state_33308[(2)]);
var state_33308__$1 = state_33308;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33308__$1,inst_33306);
} else {
if((state_val_33309 === (4))){
var inst_33296 = (state_33308[(7)]);
var inst_33296__$1 = (state_33308[(2)]);
var state_33308__$1 = (function (){var statearr_33311 = state_33308;
(statearr_33311[(7)] = inst_33296__$1);

return statearr_33311;
})();
if(cljs.core.truth_(inst_33296__$1)){
var statearr_33312_33327 = state_33308__$1;
(statearr_33312_33327[(1)] = (5));

} else {
var statearr_33313_33328 = state_33308__$1;
(statearr_33313_33328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33309 === (5))){
var inst_33296 = (state_33308[(7)]);
var inst_33298 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33296);
var state_33308__$1 = state_33308;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33308__$1,(8),inst_33298);
} else {
if((state_val_33309 === (6))){
var state_33308__$1 = state_33308;
var statearr_33314_33329 = state_33308__$1;
(statearr_33314_33329[(2)] = null);

(statearr_33314_33329[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33309 === (7))){
var inst_33304 = (state_33308[(2)]);
var state_33308__$1 = state_33308;
var statearr_33315_33330 = state_33308__$1;
(statearr_33315_33330[(2)] = inst_33304);

(statearr_33315_33330[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33309 === (8))){
var inst_33300 = (state_33308[(2)]);
var state_33308__$1 = (function (){var statearr_33316 = state_33308;
(statearr_33316[(8)] = inst_33300);

return statearr_33316;
})();
var statearr_33317_33331 = state_33308__$1;
(statearr_33317_33331[(2)] = null);

(statearr_33317_33331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__18935__auto___33325,ch))
;
return ((function (switch__18914__auto__,c__18935__auto___33325,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18915__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18915__auto____0 = (function (){
var statearr_33321 = [null,null,null,null,null,null,null,null,null];
(statearr_33321[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18915__auto__);

(statearr_33321[(1)] = (1));

return statearr_33321;
});
var figwheel$client$heads_up_plugin_$_state_machine__18915__auto____1 = (function (state_33308){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_33308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e33322){if((e33322 instanceof Object)){
var ex__18918__auto__ = e33322;
var statearr_33323_33332 = state_33308;
(statearr_33323_33332[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33322;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33333 = state_33308;
state_33308 = G__33333;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18915__auto__ = function(state_33308){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18915__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18915__auto____1.call(this,state_33308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18915__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18915__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___33325,ch))
})();
var state__18937__auto__ = (function (){var statearr_33324 = f__18936__auto__.call(null);
(statearr_33324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___33325);

return statearr_33324;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___33325,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__18935__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto__){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto__){
return (function (state_33354){
var state_val_33355 = (state_33354[(1)]);
if((state_val_33355 === (1))){
var inst_33349 = cljs.core.async.timeout.call(null,(3000));
var state_33354__$1 = state_33354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33354__$1,(2),inst_33349);
} else {
if((state_val_33355 === (2))){
var inst_33351 = (state_33354[(2)]);
var inst_33352 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33354__$1 = (function (){var statearr_33356 = state_33354;
(statearr_33356[(7)] = inst_33351);

return statearr_33356;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33354__$1,inst_33352);
} else {
return null;
}
}
});})(c__18935__auto__))
;
return ((function (switch__18914__auto__,c__18935__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18915__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18915__auto____0 = (function (){
var statearr_33360 = [null,null,null,null,null,null,null,null];
(statearr_33360[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18915__auto__);

(statearr_33360[(1)] = (1));

return statearr_33360;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18915__auto____1 = (function (state_33354){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_33354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e33361){if((e33361 instanceof Object)){
var ex__18918__auto__ = e33361;
var statearr_33362_33364 = state_33354;
(statearr_33362_33364[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33361;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33365 = state_33354;
state_33354 = G__33365;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18915__auto__ = function(state_33354){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18915__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18915__auto____1.call(this,state_33354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18915__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18915__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto__))
})();
var state__18937__auto__ = (function (){var statearr_33363 = f__18936__auto__.call(null);
(statearr_33363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto__);

return statearr_33363;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto__))
);

return c__18935__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__33366){
var map__33373 = p__33366;
var map__33373__$1 = ((((!((map__33373 == null)))?((((map__33373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33373):map__33373);
var ed = map__33373__$1;
var formatted_exception = cljs.core.get.call(null,map__33373__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__33373__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__33373__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__33375_33379 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__33376_33380 = null;
var count__33377_33381 = (0);
var i__33378_33382 = (0);
while(true){
if((i__33378_33382 < count__33377_33381)){
var msg_33383 = cljs.core._nth.call(null,chunk__33376_33380,i__33378_33382);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33383);

var G__33384 = seq__33375_33379;
var G__33385 = chunk__33376_33380;
var G__33386 = count__33377_33381;
var G__33387 = (i__33378_33382 + (1));
seq__33375_33379 = G__33384;
chunk__33376_33380 = G__33385;
count__33377_33381 = G__33386;
i__33378_33382 = G__33387;
continue;
} else {
var temp__4425__auto___33388 = cljs.core.seq.call(null,seq__33375_33379);
if(temp__4425__auto___33388){
var seq__33375_33389__$1 = temp__4425__auto___33388;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33375_33389__$1)){
var c__17622__auto___33390 = cljs.core.chunk_first.call(null,seq__33375_33389__$1);
var G__33391 = cljs.core.chunk_rest.call(null,seq__33375_33389__$1);
var G__33392 = c__17622__auto___33390;
var G__33393 = cljs.core.count.call(null,c__17622__auto___33390);
var G__33394 = (0);
seq__33375_33379 = G__33391;
chunk__33376_33380 = G__33392;
count__33377_33381 = G__33393;
i__33378_33382 = G__33394;
continue;
} else {
var msg_33395 = cljs.core.first.call(null,seq__33375_33389__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33395);

var G__33396 = cljs.core.next.call(null,seq__33375_33389__$1);
var G__33397 = null;
var G__33398 = (0);
var G__33399 = (0);
seq__33375_33379 = G__33396;
chunk__33376_33380 = G__33397;
count__33377_33381 = G__33398;
i__33378_33382 = G__33399;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__33400){
var map__33403 = p__33400;
var map__33403__$1 = ((((!((map__33403 == null)))?((((map__33403.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33403.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33403):map__33403);
var w = map__33403__$1;
var message = cljs.core.get.call(null,map__33403__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16807__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16807__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16807__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__33411 = cljs.core.seq.call(null,plugins);
var chunk__33412 = null;
var count__33413 = (0);
var i__33414 = (0);
while(true){
if((i__33414 < count__33413)){
var vec__33415 = cljs.core._nth.call(null,chunk__33412,i__33414);
var k = cljs.core.nth.call(null,vec__33415,(0),null);
var plugin = cljs.core.nth.call(null,vec__33415,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33417 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33411,chunk__33412,count__33413,i__33414,pl_33417,vec__33415,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33417.call(null,msg_hist);
});})(seq__33411,chunk__33412,count__33413,i__33414,pl_33417,vec__33415,k,plugin))
);
} else {
}

var G__33418 = seq__33411;
var G__33419 = chunk__33412;
var G__33420 = count__33413;
var G__33421 = (i__33414 + (1));
seq__33411 = G__33418;
chunk__33412 = G__33419;
count__33413 = G__33420;
i__33414 = G__33421;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__33411);
if(temp__4425__auto__){
var seq__33411__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33411__$1)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,seq__33411__$1);
var G__33422 = cljs.core.chunk_rest.call(null,seq__33411__$1);
var G__33423 = c__17622__auto__;
var G__33424 = cljs.core.count.call(null,c__17622__auto__);
var G__33425 = (0);
seq__33411 = G__33422;
chunk__33412 = G__33423;
count__33413 = G__33424;
i__33414 = G__33425;
continue;
} else {
var vec__33416 = cljs.core.first.call(null,seq__33411__$1);
var k = cljs.core.nth.call(null,vec__33416,(0),null);
var plugin = cljs.core.nth.call(null,vec__33416,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33426 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33411,chunk__33412,count__33413,i__33414,pl_33426,vec__33416,k,plugin,seq__33411__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33426.call(null,msg_hist);
});})(seq__33411,chunk__33412,count__33413,i__33414,pl_33426,vec__33416,k,plugin,seq__33411__$1,temp__4425__auto__))
);
} else {
}

var G__33427 = cljs.core.next.call(null,seq__33411__$1);
var G__33428 = null;
var G__33429 = (0);
var G__33430 = (0);
seq__33411 = G__33427;
chunk__33412 = G__33428;
count__33413 = G__33429;
i__33414 = G__33430;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args33431 = [];
var len__17877__auto___33434 = arguments.length;
var i__17878__auto___33435 = (0);
while(true){
if((i__17878__auto___33435 < len__17877__auto___33434)){
args33431.push((arguments[i__17878__auto___33435]));

var G__33436 = (i__17878__auto___33435 + (1));
i__17878__auto___33435 = G__33436;
continue;
} else {
}
break;
}

var G__33433 = args33431.length;
switch (G__33433) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33431.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17884__auto__ = [];
var len__17877__auto___33442 = arguments.length;
var i__17878__auto___33443 = (0);
while(true){
if((i__17878__auto___33443 < len__17877__auto___33442)){
args__17884__auto__.push((arguments[i__17878__auto___33443]));

var G__33444 = (i__17878__auto___33443 + (1));
i__17878__auto___33443 = G__33444;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((0) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17885__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33439){
var map__33440 = p__33439;
var map__33440__$1 = ((((!((map__33440 == null)))?((((map__33440.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33440.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33440):map__33440);
var opts = map__33440__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33438){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33438));
});

//# sourceMappingURL=client.js.map?rel=1460338563599