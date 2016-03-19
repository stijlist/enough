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
var pred__26626 = cljs.core._EQ_;
var expr__26627 = (function (){var or__16805__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e26630){if((e26630 instanceof Error)){
var e = e26630;
return false;
} else {
throw e26630;

}
}})();
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__26626.call(null,"true",expr__26627))){
return true;
} else {
if(cljs.core.truth_(pred__26626.call(null,"false",expr__26627))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__26627)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e26632){if((e26632 instanceof Error)){
var e = e26632;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e26632;

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
var args__17870__auto__ = [];
var len__17863__auto___26634 = arguments.length;
var i__17864__auto___26635 = (0);
while(true){
if((i__17864__auto___26635 < len__17863__auto___26634)){
args__17870__auto__.push((arguments[i__17864__auto___26635]));

var G__26636 = (i__17864__auto___26635 + (1));
i__17864__auto___26635 = G__26636;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));

return null;
});

figwheel.client.repl_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq26633){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26633));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__26637){
var map__26640 = p__26637;
var map__26640__$1 = ((((!((map__26640 == null)))?((((map__26640.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26640.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26640):map__26640);
var message = cljs.core.get.call(null,map__26640__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__26640__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16805__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16805__auto__)){
return or__16805__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16793__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16793__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16793__auto__;
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
var c__18972__auto___26802 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto___26802,ch){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto___26802,ch){
return (function (state_26771){
var state_val_26772 = (state_26771[(1)]);
if((state_val_26772 === (7))){
var inst_26767 = (state_26771[(2)]);
var state_26771__$1 = state_26771;
var statearr_26773_26803 = state_26771__$1;
(statearr_26773_26803[(2)] = inst_26767);

(statearr_26773_26803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (1))){
var state_26771__$1 = state_26771;
var statearr_26774_26804 = state_26771__$1;
(statearr_26774_26804[(2)] = null);

(statearr_26774_26804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (4))){
var inst_26724 = (state_26771[(7)]);
var inst_26724__$1 = (state_26771[(2)]);
var state_26771__$1 = (function (){var statearr_26775 = state_26771;
(statearr_26775[(7)] = inst_26724__$1);

return statearr_26775;
})();
if(cljs.core.truth_(inst_26724__$1)){
var statearr_26776_26805 = state_26771__$1;
(statearr_26776_26805[(1)] = (5));

} else {
var statearr_26777_26806 = state_26771__$1;
(statearr_26777_26806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (15))){
var inst_26731 = (state_26771[(8)]);
var inst_26746 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26731);
var inst_26747 = cljs.core.first.call(null,inst_26746);
var inst_26748 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_26747);
var inst_26749 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_26748)].join('');
var inst_26750 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_26749);
var state_26771__$1 = state_26771;
var statearr_26778_26807 = state_26771__$1;
(statearr_26778_26807[(2)] = inst_26750);

(statearr_26778_26807[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (13))){
var inst_26755 = (state_26771[(2)]);
var state_26771__$1 = state_26771;
var statearr_26779_26808 = state_26771__$1;
(statearr_26779_26808[(2)] = inst_26755);

(statearr_26779_26808[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (6))){
var state_26771__$1 = state_26771;
var statearr_26780_26809 = state_26771__$1;
(statearr_26780_26809[(2)] = null);

(statearr_26780_26809[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (17))){
var inst_26753 = (state_26771[(2)]);
var state_26771__$1 = state_26771;
var statearr_26781_26810 = state_26771__$1;
(statearr_26781_26810[(2)] = inst_26753);

(statearr_26781_26810[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (3))){
var inst_26769 = (state_26771[(2)]);
var state_26771__$1 = state_26771;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26771__$1,inst_26769);
} else {
if((state_val_26772 === (12))){
var inst_26730 = (state_26771[(9)]);
var inst_26744 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_26730,opts);
var state_26771__$1 = state_26771;
if(cljs.core.truth_(inst_26744)){
var statearr_26782_26811 = state_26771__$1;
(statearr_26782_26811[(1)] = (15));

} else {
var statearr_26783_26812 = state_26771__$1;
(statearr_26783_26812[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (2))){
var state_26771__$1 = state_26771;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26771__$1,(4),ch);
} else {
if((state_val_26772 === (11))){
var inst_26731 = (state_26771[(8)]);
var inst_26736 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26737 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_26731);
var inst_26738 = cljs.core.async.timeout.call(null,(1000));
var inst_26739 = [inst_26737,inst_26738];
var inst_26740 = (new cljs.core.PersistentVector(null,2,(5),inst_26736,inst_26739,null));
var state_26771__$1 = state_26771;
return cljs.core.async.ioc_alts_BANG_.call(null,state_26771__$1,(14),inst_26740);
} else {
if((state_val_26772 === (9))){
var inst_26731 = (state_26771[(8)]);
var inst_26757 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_26758 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_26731);
var inst_26759 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_26758);
var inst_26760 = [cljs.core.str("Not loading: "),cljs.core.str(inst_26759)].join('');
var inst_26761 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_26760);
var state_26771__$1 = (function (){var statearr_26784 = state_26771;
(statearr_26784[(10)] = inst_26757);

return statearr_26784;
})();
var statearr_26785_26813 = state_26771__$1;
(statearr_26785_26813[(2)] = inst_26761);

(statearr_26785_26813[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (5))){
var inst_26724 = (state_26771[(7)]);
var inst_26726 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_26727 = (new cljs.core.PersistentArrayMap(null,2,inst_26726,null));
var inst_26728 = (new cljs.core.PersistentHashSet(null,inst_26727,null));
var inst_26729 = figwheel.client.focus_msgs.call(null,inst_26728,inst_26724);
var inst_26730 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_26729);
var inst_26731 = cljs.core.first.call(null,inst_26729);
var inst_26732 = figwheel.client.autoload_QMARK_.call(null);
var state_26771__$1 = (function (){var statearr_26786 = state_26771;
(statearr_26786[(8)] = inst_26731);

(statearr_26786[(9)] = inst_26730);

return statearr_26786;
})();
if(cljs.core.truth_(inst_26732)){
var statearr_26787_26814 = state_26771__$1;
(statearr_26787_26814[(1)] = (8));

} else {
var statearr_26788_26815 = state_26771__$1;
(statearr_26788_26815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (14))){
var inst_26742 = (state_26771[(2)]);
var state_26771__$1 = state_26771;
var statearr_26789_26816 = state_26771__$1;
(statearr_26789_26816[(2)] = inst_26742);

(statearr_26789_26816[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (16))){
var state_26771__$1 = state_26771;
var statearr_26790_26817 = state_26771__$1;
(statearr_26790_26817[(2)] = null);

(statearr_26790_26817[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (10))){
var inst_26763 = (state_26771[(2)]);
var state_26771__$1 = (function (){var statearr_26791 = state_26771;
(statearr_26791[(11)] = inst_26763);

return statearr_26791;
})();
var statearr_26792_26818 = state_26771__$1;
(statearr_26792_26818[(2)] = null);

(statearr_26792_26818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26772 === (8))){
var inst_26730 = (state_26771[(9)]);
var inst_26734 = figwheel.client.reload_file_state_QMARK_.call(null,inst_26730,opts);
var state_26771__$1 = state_26771;
if(cljs.core.truth_(inst_26734)){
var statearr_26793_26819 = state_26771__$1;
(statearr_26793_26819[(1)] = (11));

} else {
var statearr_26794_26820 = state_26771__$1;
(statearr_26794_26820[(1)] = (12));

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
});})(c__18972__auto___26802,ch))
;
return ((function (switch__18860__auto__,c__18972__auto___26802,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18861__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18861__auto____0 = (function (){
var statearr_26798 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26798[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18861__auto__);

(statearr_26798[(1)] = (1));

return statearr_26798;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18861__auto____1 = (function (state_26771){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_26771);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e26799){if((e26799 instanceof Object)){
var ex__18864__auto__ = e26799;
var statearr_26800_26821 = state_26771;
(statearr_26800_26821[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26771);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26822 = state_26771;
state_26771 = G__26822;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18861__auto__ = function(state_26771){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18861__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18861__auto____1.call(this,state_26771);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18861__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18861__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto___26802,ch))
})();
var state__18974__auto__ = (function (){var statearr_26801 = f__18973__auto__.call(null);
(statearr_26801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto___26802);

return statearr_26801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto___26802,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__26823_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__26823_SHARP_));
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
var base_path_26830 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_26830){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_26828 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_26829 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_26829;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_26828;
}}catch (e26827){if((e26827 instanceof Error)){
var e = e26827;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_26830], null));
} else {
var e = e26827;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_26830))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__26831){
var map__26838 = p__26831;
var map__26838__$1 = ((((!((map__26838 == null)))?((((map__26838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26838):map__26838);
var opts = map__26838__$1;
var build_id = cljs.core.get.call(null,map__26838__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__26838,map__26838__$1,opts,build_id){
return (function (p__26840){
var vec__26841 = p__26840;
var map__26842 = cljs.core.nth.call(null,vec__26841,(0),null);
var map__26842__$1 = ((((!((map__26842 == null)))?((((map__26842.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26842.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26842):map__26842);
var msg = map__26842__$1;
var msg_name = cljs.core.get.call(null,map__26842__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26841,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__26841,map__26842,map__26842__$1,msg,msg_name,_,map__26838,map__26838__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__26841,map__26842,map__26842__$1,msg,msg_name,_,map__26838,map__26838__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__26838,map__26838__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__26848){
var vec__26849 = p__26848;
var map__26850 = cljs.core.nth.call(null,vec__26849,(0),null);
var map__26850__$1 = ((((!((map__26850 == null)))?((((map__26850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26850):map__26850);
var msg = map__26850__$1;
var msg_name = cljs.core.get.call(null,map__26850__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26849,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__26852){
var map__26862 = p__26852;
var map__26862__$1 = ((((!((map__26862 == null)))?((((map__26862.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26862.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26862):map__26862);
var on_compile_warning = cljs.core.get.call(null,map__26862__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__26862__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__26862,map__26862__$1,on_compile_warning,on_compile_fail){
return (function (p__26864){
var vec__26865 = p__26864;
var map__26866 = cljs.core.nth.call(null,vec__26865,(0),null);
var map__26866__$1 = ((((!((map__26866 == null)))?((((map__26866.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26866.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26866):map__26866);
var msg = map__26866__$1;
var msg_name = cljs.core.get.call(null,map__26866__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__26865,(1));
var pred__26868 = cljs.core._EQ_;
var expr__26869 = msg_name;
if(cljs.core.truth_(pred__26868.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__26869))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__26868.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__26869))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__26862,map__26862__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto__,msg_hist,msg_names,msg){
return (function (state_27085){
var state_val_27086 = (state_27085[(1)]);
if((state_val_27086 === (7))){
var inst_27009 = (state_27085[(2)]);
var state_27085__$1 = state_27085;
if(cljs.core.truth_(inst_27009)){
var statearr_27087_27133 = state_27085__$1;
(statearr_27087_27133[(1)] = (8));

} else {
var statearr_27088_27134 = state_27085__$1;
(statearr_27088_27134[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (20))){
var inst_27079 = (state_27085[(2)]);
var state_27085__$1 = state_27085;
var statearr_27089_27135 = state_27085__$1;
(statearr_27089_27135[(2)] = inst_27079);

(statearr_27089_27135[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (27))){
var inst_27075 = (state_27085[(2)]);
var state_27085__$1 = state_27085;
var statearr_27090_27136 = state_27085__$1;
(statearr_27090_27136[(2)] = inst_27075);

(statearr_27090_27136[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (1))){
var inst_27002 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_27085__$1 = state_27085;
if(cljs.core.truth_(inst_27002)){
var statearr_27091_27137 = state_27085__$1;
(statearr_27091_27137[(1)] = (2));

} else {
var statearr_27092_27138 = state_27085__$1;
(statearr_27092_27138[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (24))){
var inst_27077 = (state_27085[(2)]);
var state_27085__$1 = state_27085;
var statearr_27093_27139 = state_27085__$1;
(statearr_27093_27139[(2)] = inst_27077);

(statearr_27093_27139[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (4))){
var inst_27083 = (state_27085[(2)]);
var state_27085__$1 = state_27085;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27085__$1,inst_27083);
} else {
if((state_val_27086 === (15))){
var inst_27081 = (state_27085[(2)]);
var state_27085__$1 = state_27085;
var statearr_27094_27140 = state_27085__$1;
(statearr_27094_27140[(2)] = inst_27081);

(statearr_27094_27140[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (21))){
var inst_27040 = (state_27085[(2)]);
var state_27085__$1 = state_27085;
var statearr_27095_27141 = state_27085__$1;
(statearr_27095_27141[(2)] = inst_27040);

(statearr_27095_27141[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (31))){
var inst_27064 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_27085__$1 = state_27085;
if(cljs.core.truth_(inst_27064)){
var statearr_27096_27142 = state_27085__$1;
(statearr_27096_27142[(1)] = (34));

} else {
var statearr_27097_27143 = state_27085__$1;
(statearr_27097_27143[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (32))){
var inst_27073 = (state_27085[(2)]);
var state_27085__$1 = state_27085;
var statearr_27098_27144 = state_27085__$1;
(statearr_27098_27144[(2)] = inst_27073);

(statearr_27098_27144[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (33))){
var inst_27062 = (state_27085[(2)]);
var state_27085__$1 = state_27085;
var statearr_27099_27145 = state_27085__$1;
(statearr_27099_27145[(2)] = inst_27062);

(statearr_27099_27145[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (13))){
var inst_27023 = figwheel.client.heads_up.clear.call(null);
var state_27085__$1 = state_27085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27085__$1,(16),inst_27023);
} else {
if((state_val_27086 === (22))){
var inst_27044 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27045 = figwheel.client.heads_up.append_message.call(null,inst_27044);
var state_27085__$1 = state_27085;
var statearr_27100_27146 = state_27085__$1;
(statearr_27100_27146[(2)] = inst_27045);

(statearr_27100_27146[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (36))){
var inst_27071 = (state_27085[(2)]);
var state_27085__$1 = state_27085;
var statearr_27101_27147 = state_27085__$1;
(statearr_27101_27147[(2)] = inst_27071);

(statearr_27101_27147[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (29))){
var inst_27055 = (state_27085[(2)]);
var state_27085__$1 = state_27085;
var statearr_27102_27148 = state_27085__$1;
(statearr_27102_27148[(2)] = inst_27055);

(statearr_27102_27148[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (6))){
var inst_27004 = (state_27085[(7)]);
var state_27085__$1 = state_27085;
var statearr_27103_27149 = state_27085__$1;
(statearr_27103_27149[(2)] = inst_27004);

(statearr_27103_27149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (28))){
var inst_27051 = (state_27085[(2)]);
var inst_27052 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27053 = figwheel.client.heads_up.display_warning.call(null,inst_27052);
var state_27085__$1 = (function (){var statearr_27104 = state_27085;
(statearr_27104[(8)] = inst_27051);

return statearr_27104;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27085__$1,(29),inst_27053);
} else {
if((state_val_27086 === (25))){
var inst_27049 = figwheel.client.heads_up.clear.call(null);
var state_27085__$1 = state_27085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27085__$1,(28),inst_27049);
} else {
if((state_val_27086 === (34))){
var inst_27066 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27085__$1 = state_27085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27085__$1,(37),inst_27066);
} else {
if((state_val_27086 === (17))){
var inst_27031 = (state_27085[(2)]);
var state_27085__$1 = state_27085;
var statearr_27105_27150 = state_27085__$1;
(statearr_27105_27150[(2)] = inst_27031);

(statearr_27105_27150[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (3))){
var inst_27021 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_27085__$1 = state_27085;
if(cljs.core.truth_(inst_27021)){
var statearr_27106_27151 = state_27085__$1;
(statearr_27106_27151[(1)] = (13));

} else {
var statearr_27107_27152 = state_27085__$1;
(statearr_27107_27152[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (12))){
var inst_27017 = (state_27085[(2)]);
var state_27085__$1 = state_27085;
var statearr_27108_27153 = state_27085__$1;
(statearr_27108_27153[(2)] = inst_27017);

(statearr_27108_27153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (2))){
var inst_27004 = (state_27085[(7)]);
var inst_27004__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_27085__$1 = (function (){var statearr_27109 = state_27085;
(statearr_27109[(7)] = inst_27004__$1);

return statearr_27109;
})();
if(cljs.core.truth_(inst_27004__$1)){
var statearr_27110_27154 = state_27085__$1;
(statearr_27110_27154[(1)] = (5));

} else {
var statearr_27111_27155 = state_27085__$1;
(statearr_27111_27155[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (23))){
var inst_27047 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_27085__$1 = state_27085;
if(cljs.core.truth_(inst_27047)){
var statearr_27112_27156 = state_27085__$1;
(statearr_27112_27156[(1)] = (25));

} else {
var statearr_27113_27157 = state_27085__$1;
(statearr_27113_27157[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (35))){
var state_27085__$1 = state_27085;
var statearr_27114_27158 = state_27085__$1;
(statearr_27114_27158[(2)] = null);

(statearr_27114_27158[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (19))){
var inst_27042 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_27085__$1 = state_27085;
if(cljs.core.truth_(inst_27042)){
var statearr_27115_27159 = state_27085__$1;
(statearr_27115_27159[(1)] = (22));

} else {
var statearr_27116_27160 = state_27085__$1;
(statearr_27116_27160[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (11))){
var inst_27013 = (state_27085[(2)]);
var state_27085__$1 = state_27085;
var statearr_27117_27161 = state_27085__$1;
(statearr_27117_27161[(2)] = inst_27013);

(statearr_27117_27161[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (9))){
var inst_27015 = figwheel.client.heads_up.clear.call(null);
var state_27085__$1 = state_27085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27085__$1,(12),inst_27015);
} else {
if((state_val_27086 === (5))){
var inst_27006 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_27085__$1 = state_27085;
var statearr_27118_27162 = state_27085__$1;
(statearr_27118_27162[(2)] = inst_27006);

(statearr_27118_27162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (14))){
var inst_27033 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_27085__$1 = state_27085;
if(cljs.core.truth_(inst_27033)){
var statearr_27119_27163 = state_27085__$1;
(statearr_27119_27163[(1)] = (18));

} else {
var statearr_27120_27164 = state_27085__$1;
(statearr_27120_27164[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (26))){
var inst_27057 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_27085__$1 = state_27085;
if(cljs.core.truth_(inst_27057)){
var statearr_27121_27165 = state_27085__$1;
(statearr_27121_27165[(1)] = (30));

} else {
var statearr_27122_27166 = state_27085__$1;
(statearr_27122_27166[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (16))){
var inst_27025 = (state_27085[(2)]);
var inst_27026 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27027 = figwheel.client.format_messages.call(null,inst_27026);
var inst_27028 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27029 = figwheel.client.heads_up.display_error.call(null,inst_27027,inst_27028);
var state_27085__$1 = (function (){var statearr_27123 = state_27085;
(statearr_27123[(9)] = inst_27025);

return statearr_27123;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27085__$1,(17),inst_27029);
} else {
if((state_val_27086 === (30))){
var inst_27059 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27060 = figwheel.client.heads_up.display_warning.call(null,inst_27059);
var state_27085__$1 = state_27085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27085__$1,(33),inst_27060);
} else {
if((state_val_27086 === (10))){
var inst_27019 = (state_27085[(2)]);
var state_27085__$1 = state_27085;
var statearr_27124_27167 = state_27085__$1;
(statearr_27124_27167[(2)] = inst_27019);

(statearr_27124_27167[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (18))){
var inst_27035 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27036 = figwheel.client.format_messages.call(null,inst_27035);
var inst_27037 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_27038 = figwheel.client.heads_up.display_error.call(null,inst_27036,inst_27037);
var state_27085__$1 = state_27085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27085__$1,(21),inst_27038);
} else {
if((state_val_27086 === (37))){
var inst_27068 = (state_27085[(2)]);
var state_27085__$1 = state_27085;
var statearr_27125_27168 = state_27085__$1;
(statearr_27125_27168[(2)] = inst_27068);

(statearr_27125_27168[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27086 === (8))){
var inst_27011 = figwheel.client.heads_up.flash_loaded.call(null);
var state_27085__$1 = state_27085;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27085__$1,(11),inst_27011);
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
});})(c__18972__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__18860__auto__,c__18972__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto____0 = (function (){
var statearr_27129 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27129[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto__);

(statearr_27129[(1)] = (1));

return statearr_27129;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto____1 = (function (state_27085){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_27085);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e27130){if((e27130 instanceof Object)){
var ex__18864__auto__ = e27130;
var statearr_27131_27169 = state_27085;
(statearr_27131_27169[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27085);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27170 = state_27085;
state_27085 = G__27170;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto__ = function(state_27085){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto____1.call(this,state_27085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto__,msg_hist,msg_names,msg))
})();
var state__18974__auto__ = (function (){var statearr_27132 = f__18973__auto__.call(null);
(statearr_27132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto__);

return statearr_27132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto__,msg_hist,msg_names,msg))
);

return c__18972__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18972__auto___27233 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto___27233,ch){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto___27233,ch){
return (function (state_27216){
var state_val_27217 = (state_27216[(1)]);
if((state_val_27217 === (1))){
var state_27216__$1 = state_27216;
var statearr_27218_27234 = state_27216__$1;
(statearr_27218_27234[(2)] = null);

(statearr_27218_27234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27217 === (2))){
var state_27216__$1 = state_27216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27216__$1,(4),ch);
} else {
if((state_val_27217 === (3))){
var inst_27214 = (state_27216[(2)]);
var state_27216__$1 = state_27216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27216__$1,inst_27214);
} else {
if((state_val_27217 === (4))){
var inst_27204 = (state_27216[(7)]);
var inst_27204__$1 = (state_27216[(2)]);
var state_27216__$1 = (function (){var statearr_27219 = state_27216;
(statearr_27219[(7)] = inst_27204__$1);

return statearr_27219;
})();
if(cljs.core.truth_(inst_27204__$1)){
var statearr_27220_27235 = state_27216__$1;
(statearr_27220_27235[(1)] = (5));

} else {
var statearr_27221_27236 = state_27216__$1;
(statearr_27221_27236[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27217 === (5))){
var inst_27204 = (state_27216[(7)]);
var inst_27206 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_27204);
var state_27216__$1 = state_27216;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27216__$1,(8),inst_27206);
} else {
if((state_val_27217 === (6))){
var state_27216__$1 = state_27216;
var statearr_27222_27237 = state_27216__$1;
(statearr_27222_27237[(2)] = null);

(statearr_27222_27237[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27217 === (7))){
var inst_27212 = (state_27216[(2)]);
var state_27216__$1 = state_27216;
var statearr_27223_27238 = state_27216__$1;
(statearr_27223_27238[(2)] = inst_27212);

(statearr_27223_27238[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27217 === (8))){
var inst_27208 = (state_27216[(2)]);
var state_27216__$1 = (function (){var statearr_27224 = state_27216;
(statearr_27224[(8)] = inst_27208);

return statearr_27224;
})();
var statearr_27225_27239 = state_27216__$1;
(statearr_27225_27239[(2)] = null);

(statearr_27225_27239[(1)] = (2));


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
});})(c__18972__auto___27233,ch))
;
return ((function (switch__18860__auto__,c__18972__auto___27233,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18861__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18861__auto____0 = (function (){
var statearr_27229 = [null,null,null,null,null,null,null,null,null];
(statearr_27229[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18861__auto__);

(statearr_27229[(1)] = (1));

return statearr_27229;
});
var figwheel$client$heads_up_plugin_$_state_machine__18861__auto____1 = (function (state_27216){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_27216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e27230){if((e27230 instanceof Object)){
var ex__18864__auto__ = e27230;
var statearr_27231_27240 = state_27216;
(statearr_27231_27240[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27230;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27241 = state_27216;
state_27216 = G__27241;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18861__auto__ = function(state_27216){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18861__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18861__auto____1.call(this,state_27216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18861__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18861__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto___27233,ch))
})();
var state__18974__auto__ = (function (){var statearr_27232 = f__18973__auto__.call(null);
(statearr_27232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto___27233);

return statearr_27232;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto___27233,ch))
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
var c__18972__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18972__auto__){
return (function (){
var f__18973__auto__ = (function (){var switch__18860__auto__ = ((function (c__18972__auto__){
return (function (state_27262){
var state_val_27263 = (state_27262[(1)]);
if((state_val_27263 === (1))){
var inst_27257 = cljs.core.async.timeout.call(null,(3000));
var state_27262__$1 = state_27262;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27262__$1,(2),inst_27257);
} else {
if((state_val_27263 === (2))){
var inst_27259 = (state_27262[(2)]);
var inst_27260 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_27262__$1 = (function (){var statearr_27264 = state_27262;
(statearr_27264[(7)] = inst_27259);

return statearr_27264;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27262__$1,inst_27260);
} else {
return null;
}
}
});})(c__18972__auto__))
;
return ((function (switch__18860__auto__,c__18972__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__18861__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__18861__auto____0 = (function (){
var statearr_27268 = [null,null,null,null,null,null,null,null];
(statearr_27268[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18861__auto__);

(statearr_27268[(1)] = (1));

return statearr_27268;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18861__auto____1 = (function (state_27262){
while(true){
var ret_value__18862__auto__ = (function (){try{while(true){
var result__18863__auto__ = switch__18860__auto__.call(null,state_27262);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18863__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18863__auto__;
}
break;
}
}catch (e27269){if((e27269 instanceof Object)){
var ex__18864__auto__ = e27269;
var statearr_27270_27272 = state_27262;
(statearr_27270_27272[(5)] = ex__18864__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27262);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18862__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27273 = state_27262;
state_27262 = G__27273;
continue;
} else {
return ret_value__18862__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18861__auto__ = function(state_27262){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18861__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18861__auto____1.call(this,state_27262);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18861__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18861__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18861__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18861__auto__;
})()
;})(switch__18860__auto__,c__18972__auto__))
})();
var state__18974__auto__ = (function (){var statearr_27271 = f__18973__auto__.call(null);
(statearr_27271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18972__auto__);

return statearr_27271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18974__auto__);
});})(c__18972__auto__))
);

return c__18972__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__27274){
var map__27281 = p__27274;
var map__27281__$1 = ((((!((map__27281 == null)))?((((map__27281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27281):map__27281);
var ed = map__27281__$1;
var formatted_exception = cljs.core.get.call(null,map__27281__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__27281__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__27281__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__27283_27287 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__27284_27288 = null;
var count__27285_27289 = (0);
var i__27286_27290 = (0);
while(true){
if((i__27286_27290 < count__27285_27289)){
var msg_27291 = cljs.core._nth.call(null,chunk__27284_27288,i__27286_27290);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27291);

var G__27292 = seq__27283_27287;
var G__27293 = chunk__27284_27288;
var G__27294 = count__27285_27289;
var G__27295 = (i__27286_27290 + (1));
seq__27283_27287 = G__27292;
chunk__27284_27288 = G__27293;
count__27285_27289 = G__27294;
i__27286_27290 = G__27295;
continue;
} else {
var temp__4425__auto___27296 = cljs.core.seq.call(null,seq__27283_27287);
if(temp__4425__auto___27296){
var seq__27283_27297__$1 = temp__4425__auto___27296;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27283_27297__$1)){
var c__17608__auto___27298 = cljs.core.chunk_first.call(null,seq__27283_27297__$1);
var G__27299 = cljs.core.chunk_rest.call(null,seq__27283_27297__$1);
var G__27300 = c__17608__auto___27298;
var G__27301 = cljs.core.count.call(null,c__17608__auto___27298);
var G__27302 = (0);
seq__27283_27287 = G__27299;
chunk__27284_27288 = G__27300;
count__27285_27289 = G__27301;
i__27286_27290 = G__27302;
continue;
} else {
var msg_27303 = cljs.core.first.call(null,seq__27283_27297__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_27303);

var G__27304 = cljs.core.next.call(null,seq__27283_27297__$1);
var G__27305 = null;
var G__27306 = (0);
var G__27307 = (0);
seq__27283_27287 = G__27304;
chunk__27284_27288 = G__27305;
count__27285_27289 = G__27306;
i__27286_27290 = G__27307;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__27308){
var map__27311 = p__27308;
var map__27311__$1 = ((((!((map__27311 == null)))?((((map__27311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27311):map__27311);
var w = map__27311__$1;
var message = cljs.core.get.call(null,map__27311__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
if(cljs.core.truth_((function (){var and__16793__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16793__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16793__auto__;
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
var seq__27319 = cljs.core.seq.call(null,plugins);
var chunk__27320 = null;
var count__27321 = (0);
var i__27322 = (0);
while(true){
if((i__27322 < count__27321)){
var vec__27323 = cljs.core._nth.call(null,chunk__27320,i__27322);
var k = cljs.core.nth.call(null,vec__27323,(0),null);
var plugin = cljs.core.nth.call(null,vec__27323,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27325 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27319,chunk__27320,count__27321,i__27322,pl_27325,vec__27323,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_27325.call(null,msg_hist);
});})(seq__27319,chunk__27320,count__27321,i__27322,pl_27325,vec__27323,k,plugin))
);
} else {
}

var G__27326 = seq__27319;
var G__27327 = chunk__27320;
var G__27328 = count__27321;
var G__27329 = (i__27322 + (1));
seq__27319 = G__27326;
chunk__27320 = G__27327;
count__27321 = G__27328;
i__27322 = G__27329;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__27319);
if(temp__4425__auto__){
var seq__27319__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27319__$1)){
var c__17608__auto__ = cljs.core.chunk_first.call(null,seq__27319__$1);
var G__27330 = cljs.core.chunk_rest.call(null,seq__27319__$1);
var G__27331 = c__17608__auto__;
var G__27332 = cljs.core.count.call(null,c__17608__auto__);
var G__27333 = (0);
seq__27319 = G__27330;
chunk__27320 = G__27331;
count__27321 = G__27332;
i__27322 = G__27333;
continue;
} else {
var vec__27324 = cljs.core.first.call(null,seq__27319__$1);
var k = cljs.core.nth.call(null,vec__27324,(0),null);
var plugin = cljs.core.nth.call(null,vec__27324,(1),null);
if(cljs.core.truth_(plugin)){
var pl_27334 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__27319,chunk__27320,count__27321,i__27322,pl_27334,vec__27324,k,plugin,seq__27319__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_27334.call(null,msg_hist);
});})(seq__27319,chunk__27320,count__27321,i__27322,pl_27334,vec__27324,k,plugin,seq__27319__$1,temp__4425__auto__))
);
} else {
}

var G__27335 = cljs.core.next.call(null,seq__27319__$1);
var G__27336 = null;
var G__27337 = (0);
var G__27338 = (0);
seq__27319 = G__27335;
chunk__27320 = G__27336;
count__27321 = G__27337;
i__27322 = G__27338;
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
var args27339 = [];
var len__17863__auto___27342 = arguments.length;
var i__17864__auto___27343 = (0);
while(true){
if((i__17864__auto___27343 < len__17863__auto___27342)){
args27339.push((arguments[i__17864__auto___27343]));

var G__27344 = (i__17864__auto___27343 + (1));
i__17864__auto___27343 = G__27344;
continue;
} else {
}
break;
}

var G__27341 = args27339.length;
switch (G__27341) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27339.length)].join('')));

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
var args__17870__auto__ = [];
var len__17863__auto___27350 = arguments.length;
var i__17864__auto___27351 = (0);
while(true){
if((i__17864__auto___27351 < len__17863__auto___27350)){
args__17870__auto__.push((arguments[i__17864__auto___27351]));

var G__27352 = (i__17864__auto___27351 + (1));
i__17864__auto___27351 = G__27352;
continue;
} else {
}
break;
}

var argseq__17871__auto__ = ((((0) < args__17870__auto__.length))?(new cljs.core.IndexedSeq(args__17870__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17871__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__27347){
var map__27348 = p__27347;
var map__27348__$1 = ((((!((map__27348 == null)))?((((map__27348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27348):map__27348);
var opts = map__27348__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq27346){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq27346));
});

//# sourceMappingURL=client.js.map?rel=1457416905252