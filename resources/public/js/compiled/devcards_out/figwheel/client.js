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
var pred__29233 = cljs.core._EQ_;
var expr__29234 = (function (){var or__16819__auto__ = (function (){try{return localStorage.getItem("figwheel_autoload");
}catch (e29237){if((e29237 instanceof Error)){
var e = e29237;
return false;
} else {
throw e29237;

}
}})();
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return "true";
}
})();
if(cljs.core.truth_(pred__29233.call(null,"true",expr__29234))){
return true;
} else {
if(cljs.core.truth_(pred__29233.call(null,"false",expr__29234))){
return false;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__29234)].join('')));
}
}
}):(function (){
return true;
}));
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
try{localStorage.setItem("figwheel_autoload",cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));

return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));
}catch (e29239){if((e29239 instanceof Error)){
var e = e29239;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Unable to access localStorage")].join(''));
} else {
throw e29239;

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
var len__17877__auto___29241 = arguments.length;
var i__17878__auto___29242 = (0);
while(true){
if((i__17878__auto___29242 < len__17877__auto___29241)){
args__17884__auto__.push((arguments[i__17878__auto___29242]));

var G__29243 = (i__17878__auto___29242 + (1));
i__17878__auto___29242 = G__29243;
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

figwheel.client.repl_print_fn.cljs$lang$applyTo = (function (seq29240){
return figwheel.client.repl_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29240));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29244){
var map__29247 = p__29244;
var map__29247__$1 = ((((!((map__29247 == null)))?((((map__29247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29247):map__29247);
var message = cljs.core.get.call(null,map__29247__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29247__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__18935__auto___29409 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___29409,ch){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___29409,ch){
return (function (state_29378){
var state_val_29379 = (state_29378[(1)]);
if((state_val_29379 === (7))){
var inst_29374 = (state_29378[(2)]);
var state_29378__$1 = state_29378;
var statearr_29380_29410 = state_29378__$1;
(statearr_29380_29410[(2)] = inst_29374);

(statearr_29380_29410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (1))){
var state_29378__$1 = state_29378;
var statearr_29381_29411 = state_29378__$1;
(statearr_29381_29411[(2)] = null);

(statearr_29381_29411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (4))){
var inst_29331 = (state_29378[(7)]);
var inst_29331__$1 = (state_29378[(2)]);
var state_29378__$1 = (function (){var statearr_29382 = state_29378;
(statearr_29382[(7)] = inst_29331__$1);

return statearr_29382;
})();
if(cljs.core.truth_(inst_29331__$1)){
var statearr_29383_29412 = state_29378__$1;
(statearr_29383_29412[(1)] = (5));

} else {
var statearr_29384_29413 = state_29378__$1;
(statearr_29384_29413[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (15))){
var inst_29338 = (state_29378[(8)]);
var inst_29353 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29338);
var inst_29354 = cljs.core.first.call(null,inst_29353);
var inst_29355 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29354);
var inst_29356 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_29355)].join('');
var inst_29357 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29356);
var state_29378__$1 = state_29378;
var statearr_29385_29414 = state_29378__$1;
(statearr_29385_29414[(2)] = inst_29357);

(statearr_29385_29414[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (13))){
var inst_29362 = (state_29378[(2)]);
var state_29378__$1 = state_29378;
var statearr_29386_29415 = state_29378__$1;
(statearr_29386_29415[(2)] = inst_29362);

(statearr_29386_29415[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (6))){
var state_29378__$1 = state_29378;
var statearr_29387_29416 = state_29378__$1;
(statearr_29387_29416[(2)] = null);

(statearr_29387_29416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (17))){
var inst_29360 = (state_29378[(2)]);
var state_29378__$1 = state_29378;
var statearr_29388_29417 = state_29378__$1;
(statearr_29388_29417[(2)] = inst_29360);

(statearr_29388_29417[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (3))){
var inst_29376 = (state_29378[(2)]);
var state_29378__$1 = state_29378;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29378__$1,inst_29376);
} else {
if((state_val_29379 === (12))){
var inst_29337 = (state_29378[(9)]);
var inst_29351 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29337,opts);
var state_29378__$1 = state_29378;
if(cljs.core.truth_(inst_29351)){
var statearr_29389_29418 = state_29378__$1;
(statearr_29389_29418[(1)] = (15));

} else {
var statearr_29390_29419 = state_29378__$1;
(statearr_29390_29419[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (2))){
var state_29378__$1 = state_29378;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29378__$1,(4),ch);
} else {
if((state_val_29379 === (11))){
var inst_29338 = (state_29378[(8)]);
var inst_29343 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29344 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29338);
var inst_29345 = cljs.core.async.timeout.call(null,(1000));
var inst_29346 = [inst_29344,inst_29345];
var inst_29347 = (new cljs.core.PersistentVector(null,2,(5),inst_29343,inst_29346,null));
var state_29378__$1 = state_29378;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29378__$1,(14),inst_29347);
} else {
if((state_val_29379 === (9))){
var inst_29338 = (state_29378[(8)]);
var inst_29364 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29365 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29338);
var inst_29366 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29365);
var inst_29367 = [cljs.core.str("Not loading: "),cljs.core.str(inst_29366)].join('');
var inst_29368 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29367);
var state_29378__$1 = (function (){var statearr_29391 = state_29378;
(statearr_29391[(10)] = inst_29364);

return statearr_29391;
})();
var statearr_29392_29420 = state_29378__$1;
(statearr_29392_29420[(2)] = inst_29368);

(statearr_29392_29420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (5))){
var inst_29331 = (state_29378[(7)]);
var inst_29333 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29334 = (new cljs.core.PersistentArrayMap(null,2,inst_29333,null));
var inst_29335 = (new cljs.core.PersistentHashSet(null,inst_29334,null));
var inst_29336 = figwheel.client.focus_msgs.call(null,inst_29335,inst_29331);
var inst_29337 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29336);
var inst_29338 = cljs.core.first.call(null,inst_29336);
var inst_29339 = figwheel.client.autoload_QMARK_.call(null);
var state_29378__$1 = (function (){var statearr_29393 = state_29378;
(statearr_29393[(9)] = inst_29337);

(statearr_29393[(8)] = inst_29338);

return statearr_29393;
})();
if(cljs.core.truth_(inst_29339)){
var statearr_29394_29421 = state_29378__$1;
(statearr_29394_29421[(1)] = (8));

} else {
var statearr_29395_29422 = state_29378__$1;
(statearr_29395_29422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (14))){
var inst_29349 = (state_29378[(2)]);
var state_29378__$1 = state_29378;
var statearr_29396_29423 = state_29378__$1;
(statearr_29396_29423[(2)] = inst_29349);

(statearr_29396_29423[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (16))){
var state_29378__$1 = state_29378;
var statearr_29397_29424 = state_29378__$1;
(statearr_29397_29424[(2)] = null);

(statearr_29397_29424[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (10))){
var inst_29370 = (state_29378[(2)]);
var state_29378__$1 = (function (){var statearr_29398 = state_29378;
(statearr_29398[(11)] = inst_29370);

return statearr_29398;
})();
var statearr_29399_29425 = state_29378__$1;
(statearr_29399_29425[(2)] = null);

(statearr_29399_29425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29379 === (8))){
var inst_29337 = (state_29378[(9)]);
var inst_29341 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29337,opts);
var state_29378__$1 = state_29378;
if(cljs.core.truth_(inst_29341)){
var statearr_29400_29426 = state_29378__$1;
(statearr_29400_29426[(1)] = (11));

} else {
var statearr_29401_29427 = state_29378__$1;
(statearr_29401_29427[(1)] = (12));

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
});})(c__18935__auto___29409,ch))
;
return ((function (switch__18914__auto__,c__18935__auto___29409,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__18915__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__18915__auto____0 = (function (){
var statearr_29405 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29405[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__18915__auto__);

(statearr_29405[(1)] = (1));

return statearr_29405;
});
var figwheel$client$file_reloader_plugin_$_state_machine__18915__auto____1 = (function (state_29378){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_29378);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e29406){if((e29406 instanceof Object)){
var ex__18918__auto__ = e29406;
var statearr_29407_29428 = state_29378;
(statearr_29407_29428[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29378);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29406;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29429 = state_29378;
state_29378 = G__29429;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__18915__auto__ = function(state_29378){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__18915__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__18915__auto____1.call(this,state_29378);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__18915__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__18915__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___29409,ch))
})();
var state__18937__auto__ = (function (){var statearr_29408 = f__18936__auto__.call(null);
(statearr_29408[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___29409);

return statearr_29408;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___29409,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29430_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29430_SHARP_));
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
var base_path_29437 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29437){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_29435 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29436 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = figwheel.client.repl_print_fn;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),figwheel.client.utils.eval_helper.call(null,code,opts)], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29436;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29435;
}}catch (e29434){if((e29434 instanceof Error)){
var e = e29434;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29437], null));
} else {
var e = e29434;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29437))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29438){
var map__29445 = p__29438;
var map__29445__$1 = ((((!((map__29445 == null)))?((((map__29445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29445):map__29445);
var opts = map__29445__$1;
var build_id = cljs.core.get.call(null,map__29445__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29445,map__29445__$1,opts,build_id){
return (function (p__29447){
var vec__29448 = p__29447;
var map__29449 = cljs.core.nth.call(null,vec__29448,(0),null);
var map__29449__$1 = ((((!((map__29449 == null)))?((((map__29449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29449):map__29449);
var msg = map__29449__$1;
var msg_name = cljs.core.get.call(null,map__29449__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29448,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29448,map__29449,map__29449__$1,msg,msg_name,_,map__29445,map__29445__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29448,map__29449,map__29449__$1,msg,msg_name,_,map__29445,map__29445__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29445,map__29445__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29455){
var vec__29456 = p__29455;
var map__29457 = cljs.core.nth.call(null,vec__29456,(0),null);
var map__29457__$1 = ((((!((map__29457 == null)))?((((map__29457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29457):map__29457);
var msg = map__29457__$1;
var msg_name = cljs.core.get.call(null,map__29457__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29456,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29459){
var map__29469 = p__29459;
var map__29469__$1 = ((((!((map__29469 == null)))?((((map__29469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29469):map__29469);
var on_compile_warning = cljs.core.get.call(null,map__29469__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29469__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29469,map__29469__$1,on_compile_warning,on_compile_fail){
return (function (p__29471){
var vec__29472 = p__29471;
var map__29473 = cljs.core.nth.call(null,vec__29472,(0),null);
var map__29473__$1 = ((((!((map__29473 == null)))?((((map__29473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29473):map__29473);
var msg = map__29473__$1;
var msg_name = cljs.core.get.call(null,map__29473__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29472,(1));
var pred__29475 = cljs.core._EQ_;
var expr__29476 = msg_name;
if(cljs.core.truth_(pred__29475.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29476))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29475.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29476))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29469,map__29469__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__18935__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto__,msg_hist,msg_names,msg){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto__,msg_hist,msg_names,msg){
return (function (state_29692){
var state_val_29693 = (state_29692[(1)]);
if((state_val_29693 === (7))){
var inst_29616 = (state_29692[(2)]);
var state_29692__$1 = state_29692;
if(cljs.core.truth_(inst_29616)){
var statearr_29694_29740 = state_29692__$1;
(statearr_29694_29740[(1)] = (8));

} else {
var statearr_29695_29741 = state_29692__$1;
(statearr_29695_29741[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (20))){
var inst_29686 = (state_29692[(2)]);
var state_29692__$1 = state_29692;
var statearr_29696_29742 = state_29692__$1;
(statearr_29696_29742[(2)] = inst_29686);

(statearr_29696_29742[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (27))){
var inst_29682 = (state_29692[(2)]);
var state_29692__$1 = state_29692;
var statearr_29697_29743 = state_29692__$1;
(statearr_29697_29743[(2)] = inst_29682);

(statearr_29697_29743[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (1))){
var inst_29609 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29692__$1 = state_29692;
if(cljs.core.truth_(inst_29609)){
var statearr_29698_29744 = state_29692__$1;
(statearr_29698_29744[(1)] = (2));

} else {
var statearr_29699_29745 = state_29692__$1;
(statearr_29699_29745[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (24))){
var inst_29684 = (state_29692[(2)]);
var state_29692__$1 = state_29692;
var statearr_29700_29746 = state_29692__$1;
(statearr_29700_29746[(2)] = inst_29684);

(statearr_29700_29746[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (4))){
var inst_29690 = (state_29692[(2)]);
var state_29692__$1 = state_29692;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29692__$1,inst_29690);
} else {
if((state_val_29693 === (15))){
var inst_29688 = (state_29692[(2)]);
var state_29692__$1 = state_29692;
var statearr_29701_29747 = state_29692__$1;
(statearr_29701_29747[(2)] = inst_29688);

(statearr_29701_29747[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (21))){
var inst_29647 = (state_29692[(2)]);
var state_29692__$1 = state_29692;
var statearr_29702_29748 = state_29692__$1;
(statearr_29702_29748[(2)] = inst_29647);

(statearr_29702_29748[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (31))){
var inst_29671 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29692__$1 = state_29692;
if(cljs.core.truth_(inst_29671)){
var statearr_29703_29749 = state_29692__$1;
(statearr_29703_29749[(1)] = (34));

} else {
var statearr_29704_29750 = state_29692__$1;
(statearr_29704_29750[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (32))){
var inst_29680 = (state_29692[(2)]);
var state_29692__$1 = state_29692;
var statearr_29705_29751 = state_29692__$1;
(statearr_29705_29751[(2)] = inst_29680);

(statearr_29705_29751[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (33))){
var inst_29669 = (state_29692[(2)]);
var state_29692__$1 = state_29692;
var statearr_29706_29752 = state_29692__$1;
(statearr_29706_29752[(2)] = inst_29669);

(statearr_29706_29752[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (13))){
var inst_29630 = figwheel.client.heads_up.clear.call(null);
var state_29692__$1 = state_29692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29692__$1,(16),inst_29630);
} else {
if((state_val_29693 === (22))){
var inst_29651 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29652 = figwheel.client.heads_up.append_message.call(null,inst_29651);
var state_29692__$1 = state_29692;
var statearr_29707_29753 = state_29692__$1;
(statearr_29707_29753[(2)] = inst_29652);

(statearr_29707_29753[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (36))){
var inst_29678 = (state_29692[(2)]);
var state_29692__$1 = state_29692;
var statearr_29708_29754 = state_29692__$1;
(statearr_29708_29754[(2)] = inst_29678);

(statearr_29708_29754[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (29))){
var inst_29662 = (state_29692[(2)]);
var state_29692__$1 = state_29692;
var statearr_29709_29755 = state_29692__$1;
(statearr_29709_29755[(2)] = inst_29662);

(statearr_29709_29755[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (6))){
var inst_29611 = (state_29692[(7)]);
var state_29692__$1 = state_29692;
var statearr_29710_29756 = state_29692__$1;
(statearr_29710_29756[(2)] = inst_29611);

(statearr_29710_29756[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (28))){
var inst_29658 = (state_29692[(2)]);
var inst_29659 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29660 = figwheel.client.heads_up.display_warning.call(null,inst_29659);
var state_29692__$1 = (function (){var statearr_29711 = state_29692;
(statearr_29711[(8)] = inst_29658);

return statearr_29711;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29692__$1,(29),inst_29660);
} else {
if((state_val_29693 === (25))){
var inst_29656 = figwheel.client.heads_up.clear.call(null);
var state_29692__$1 = state_29692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29692__$1,(28),inst_29656);
} else {
if((state_val_29693 === (34))){
var inst_29673 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29692__$1 = state_29692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29692__$1,(37),inst_29673);
} else {
if((state_val_29693 === (17))){
var inst_29638 = (state_29692[(2)]);
var state_29692__$1 = state_29692;
var statearr_29712_29757 = state_29692__$1;
(statearr_29712_29757[(2)] = inst_29638);

(statearr_29712_29757[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (3))){
var inst_29628 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29692__$1 = state_29692;
if(cljs.core.truth_(inst_29628)){
var statearr_29713_29758 = state_29692__$1;
(statearr_29713_29758[(1)] = (13));

} else {
var statearr_29714_29759 = state_29692__$1;
(statearr_29714_29759[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (12))){
var inst_29624 = (state_29692[(2)]);
var state_29692__$1 = state_29692;
var statearr_29715_29760 = state_29692__$1;
(statearr_29715_29760[(2)] = inst_29624);

(statearr_29715_29760[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (2))){
var inst_29611 = (state_29692[(7)]);
var inst_29611__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_29692__$1 = (function (){var statearr_29716 = state_29692;
(statearr_29716[(7)] = inst_29611__$1);

return statearr_29716;
})();
if(cljs.core.truth_(inst_29611__$1)){
var statearr_29717_29761 = state_29692__$1;
(statearr_29717_29761[(1)] = (5));

} else {
var statearr_29718_29762 = state_29692__$1;
(statearr_29718_29762[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (23))){
var inst_29654 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29692__$1 = state_29692;
if(cljs.core.truth_(inst_29654)){
var statearr_29719_29763 = state_29692__$1;
(statearr_29719_29763[(1)] = (25));

} else {
var statearr_29720_29764 = state_29692__$1;
(statearr_29720_29764[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (35))){
var state_29692__$1 = state_29692;
var statearr_29721_29765 = state_29692__$1;
(statearr_29721_29765[(2)] = null);

(statearr_29721_29765[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (19))){
var inst_29649 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29692__$1 = state_29692;
if(cljs.core.truth_(inst_29649)){
var statearr_29722_29766 = state_29692__$1;
(statearr_29722_29766[(1)] = (22));

} else {
var statearr_29723_29767 = state_29692__$1;
(statearr_29723_29767[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (11))){
var inst_29620 = (state_29692[(2)]);
var state_29692__$1 = state_29692;
var statearr_29724_29768 = state_29692__$1;
(statearr_29724_29768[(2)] = inst_29620);

(statearr_29724_29768[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (9))){
var inst_29622 = figwheel.client.heads_up.clear.call(null);
var state_29692__$1 = state_29692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29692__$1,(12),inst_29622);
} else {
if((state_val_29693 === (5))){
var inst_29613 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29692__$1 = state_29692;
var statearr_29725_29769 = state_29692__$1;
(statearr_29725_29769[(2)] = inst_29613);

(statearr_29725_29769[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (14))){
var inst_29640 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29692__$1 = state_29692;
if(cljs.core.truth_(inst_29640)){
var statearr_29726_29770 = state_29692__$1;
(statearr_29726_29770[(1)] = (18));

} else {
var statearr_29727_29771 = state_29692__$1;
(statearr_29727_29771[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (26))){
var inst_29664 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29692__$1 = state_29692;
if(cljs.core.truth_(inst_29664)){
var statearr_29728_29772 = state_29692__$1;
(statearr_29728_29772[(1)] = (30));

} else {
var statearr_29729_29773 = state_29692__$1;
(statearr_29729_29773[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (16))){
var inst_29632 = (state_29692[(2)]);
var inst_29633 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29634 = figwheel.client.format_messages.call(null,inst_29633);
var inst_29635 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29636 = figwheel.client.heads_up.display_error.call(null,inst_29634,inst_29635);
var state_29692__$1 = (function (){var statearr_29730 = state_29692;
(statearr_29730[(9)] = inst_29632);

return statearr_29730;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29692__$1,(17),inst_29636);
} else {
if((state_val_29693 === (30))){
var inst_29666 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29667 = figwheel.client.heads_up.display_warning.call(null,inst_29666);
var state_29692__$1 = state_29692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29692__$1,(33),inst_29667);
} else {
if((state_val_29693 === (10))){
var inst_29626 = (state_29692[(2)]);
var state_29692__$1 = state_29692;
var statearr_29731_29774 = state_29692__$1;
(statearr_29731_29774[(2)] = inst_29626);

(statearr_29731_29774[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (18))){
var inst_29642 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29643 = figwheel.client.format_messages.call(null,inst_29642);
var inst_29644 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29645 = figwheel.client.heads_up.display_error.call(null,inst_29643,inst_29644);
var state_29692__$1 = state_29692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29692__$1,(21),inst_29645);
} else {
if((state_val_29693 === (37))){
var inst_29675 = (state_29692[(2)]);
var state_29692__$1 = state_29692;
var statearr_29732_29775 = state_29692__$1;
(statearr_29732_29775[(2)] = inst_29675);

(statearr_29732_29775[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29693 === (8))){
var inst_29618 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29692__$1 = state_29692;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29692__$1,(11),inst_29618);
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
var statearr_29736 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29736[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18915__auto__);

(statearr_29736[(1)] = (1));

return statearr_29736;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18915__auto____1 = (function (state_29692){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_29692);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e29737){if((e29737 instanceof Object)){
var ex__18918__auto__ = e29737;
var statearr_29738_29776 = state_29692;
(statearr_29738_29776[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29692);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29777 = state_29692;
state_29692 = G__29777;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18915__auto__ = function(state_29692){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18915__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18915__auto____1.call(this,state_29692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18915__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18915__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto__,msg_hist,msg_names,msg))
})();
var state__18937__auto__ = (function (){var statearr_29739 = f__18936__auto__.call(null);
(statearr_29739[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto__);

return statearr_29739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto__,msg_hist,msg_names,msg))
);

return c__18935__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__18935__auto___29840 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___29840,ch){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___29840,ch){
return (function (state_29823){
var state_val_29824 = (state_29823[(1)]);
if((state_val_29824 === (1))){
var state_29823__$1 = state_29823;
var statearr_29825_29841 = state_29823__$1;
(statearr_29825_29841[(2)] = null);

(statearr_29825_29841[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (2))){
var state_29823__$1 = state_29823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29823__$1,(4),ch);
} else {
if((state_val_29824 === (3))){
var inst_29821 = (state_29823[(2)]);
var state_29823__$1 = state_29823;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29823__$1,inst_29821);
} else {
if((state_val_29824 === (4))){
var inst_29811 = (state_29823[(7)]);
var inst_29811__$1 = (state_29823[(2)]);
var state_29823__$1 = (function (){var statearr_29826 = state_29823;
(statearr_29826[(7)] = inst_29811__$1);

return statearr_29826;
})();
if(cljs.core.truth_(inst_29811__$1)){
var statearr_29827_29842 = state_29823__$1;
(statearr_29827_29842[(1)] = (5));

} else {
var statearr_29828_29843 = state_29823__$1;
(statearr_29828_29843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (5))){
var inst_29811 = (state_29823[(7)]);
var inst_29813 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29811);
var state_29823__$1 = state_29823;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29823__$1,(8),inst_29813);
} else {
if((state_val_29824 === (6))){
var state_29823__$1 = state_29823;
var statearr_29829_29844 = state_29823__$1;
(statearr_29829_29844[(2)] = null);

(statearr_29829_29844[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (7))){
var inst_29819 = (state_29823[(2)]);
var state_29823__$1 = state_29823;
var statearr_29830_29845 = state_29823__$1;
(statearr_29830_29845[(2)] = inst_29819);

(statearr_29830_29845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29824 === (8))){
var inst_29815 = (state_29823[(2)]);
var state_29823__$1 = (function (){var statearr_29831 = state_29823;
(statearr_29831[(8)] = inst_29815);

return statearr_29831;
})();
var statearr_29832_29846 = state_29823__$1;
(statearr_29832_29846[(2)] = null);

(statearr_29832_29846[(1)] = (2));


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
});})(c__18935__auto___29840,ch))
;
return ((function (switch__18914__auto__,c__18935__auto___29840,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__18915__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__18915__auto____0 = (function (){
var statearr_29836 = [null,null,null,null,null,null,null,null,null];
(statearr_29836[(0)] = figwheel$client$heads_up_plugin_$_state_machine__18915__auto__);

(statearr_29836[(1)] = (1));

return statearr_29836;
});
var figwheel$client$heads_up_plugin_$_state_machine__18915__auto____1 = (function (state_29823){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_29823);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e29837){if((e29837 instanceof Object)){
var ex__18918__auto__ = e29837;
var statearr_29838_29847 = state_29823;
(statearr_29838_29847[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29823);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29848 = state_29823;
state_29823 = G__29848;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__18915__auto__ = function(state_29823){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__18915__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__18915__auto____1.call(this,state_29823);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__18915__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__18915__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___29840,ch))
})();
var state__18937__auto__ = (function (){var statearr_29839 = f__18936__auto__.call(null);
(statearr_29839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___29840);

return statearr_29839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___29840,ch))
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
return (function (state_29869){
var state_val_29870 = (state_29869[(1)]);
if((state_val_29870 === (1))){
var inst_29864 = cljs.core.async.timeout.call(null,(3000));
var state_29869__$1 = state_29869;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29869__$1,(2),inst_29864);
} else {
if((state_val_29870 === (2))){
var inst_29866 = (state_29869[(2)]);
var inst_29867 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29869__$1 = (function (){var statearr_29871 = state_29869;
(statearr_29871[(7)] = inst_29866);

return statearr_29871;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29869__$1,inst_29867);
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
var statearr_29875 = [null,null,null,null,null,null,null,null];
(statearr_29875[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__18915__auto__);

(statearr_29875[(1)] = (1));

return statearr_29875;
});
var figwheel$client$enforce_project_plugin_$_state_machine__18915__auto____1 = (function (state_29869){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_29869);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e29876){if((e29876 instanceof Object)){
var ex__18918__auto__ = e29876;
var statearr_29877_29879 = state_29869;
(statearr_29877_29879[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29869);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29876;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29880 = state_29869;
state_29869 = G__29880;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__18915__auto__ = function(state_29869){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__18915__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__18915__auto____1.call(this,state_29869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__18915__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__18915__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto__))
})();
var state__18937__auto__ = (function (){var statearr_29878 = f__18936__auto__.call(null);
(statearr_29878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto__);

return statearr_29878;
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
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29881){
var map__29888 = p__29881;
var map__29888__$1 = ((((!((map__29888 == null)))?((((map__29888.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29888.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29888):map__29888);
var ed = map__29888__$1;
var formatted_exception = cljs.core.get.call(null,map__29888__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29888__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29888__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29890_29894 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29891_29895 = null;
var count__29892_29896 = (0);
var i__29893_29897 = (0);
while(true){
if((i__29893_29897 < count__29892_29896)){
var msg_29898 = cljs.core._nth.call(null,chunk__29891_29895,i__29893_29897);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29898);

var G__29899 = seq__29890_29894;
var G__29900 = chunk__29891_29895;
var G__29901 = count__29892_29896;
var G__29902 = (i__29893_29897 + (1));
seq__29890_29894 = G__29899;
chunk__29891_29895 = G__29900;
count__29892_29896 = G__29901;
i__29893_29897 = G__29902;
continue;
} else {
var temp__4425__auto___29903 = cljs.core.seq.call(null,seq__29890_29894);
if(temp__4425__auto___29903){
var seq__29890_29904__$1 = temp__4425__auto___29903;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29890_29904__$1)){
var c__17622__auto___29905 = cljs.core.chunk_first.call(null,seq__29890_29904__$1);
var G__29906 = cljs.core.chunk_rest.call(null,seq__29890_29904__$1);
var G__29907 = c__17622__auto___29905;
var G__29908 = cljs.core.count.call(null,c__17622__auto___29905);
var G__29909 = (0);
seq__29890_29894 = G__29906;
chunk__29891_29895 = G__29907;
count__29892_29896 = G__29908;
i__29893_29897 = G__29909;
continue;
} else {
var msg_29910 = cljs.core.first.call(null,seq__29890_29904__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29910);

var G__29911 = cljs.core.next.call(null,seq__29890_29904__$1);
var G__29912 = null;
var G__29913 = (0);
var G__29914 = (0);
seq__29890_29894 = G__29911;
chunk__29891_29895 = G__29912;
count__29892_29896 = G__29913;
i__29893_29897 = G__29914;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29915){
var map__29918 = p__29915;
var map__29918__$1 = ((((!((map__29918 == null)))?((((map__29918.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29918.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29918):map__29918);
var w = map__29918__$1;
var message = cljs.core.get.call(null,map__29918__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__29926 = cljs.core.seq.call(null,plugins);
var chunk__29927 = null;
var count__29928 = (0);
var i__29929 = (0);
while(true){
if((i__29929 < count__29928)){
var vec__29930 = cljs.core._nth.call(null,chunk__29927,i__29929);
var k = cljs.core.nth.call(null,vec__29930,(0),null);
var plugin = cljs.core.nth.call(null,vec__29930,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29932 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29926,chunk__29927,count__29928,i__29929,pl_29932,vec__29930,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29932.call(null,msg_hist);
});})(seq__29926,chunk__29927,count__29928,i__29929,pl_29932,vec__29930,k,plugin))
);
} else {
}

var G__29933 = seq__29926;
var G__29934 = chunk__29927;
var G__29935 = count__29928;
var G__29936 = (i__29929 + (1));
seq__29926 = G__29933;
chunk__29927 = G__29934;
count__29928 = G__29935;
i__29929 = G__29936;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29926);
if(temp__4425__auto__){
var seq__29926__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29926__$1)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,seq__29926__$1);
var G__29937 = cljs.core.chunk_rest.call(null,seq__29926__$1);
var G__29938 = c__17622__auto__;
var G__29939 = cljs.core.count.call(null,c__17622__auto__);
var G__29940 = (0);
seq__29926 = G__29937;
chunk__29927 = G__29938;
count__29928 = G__29939;
i__29929 = G__29940;
continue;
} else {
var vec__29931 = cljs.core.first.call(null,seq__29926__$1);
var k = cljs.core.nth.call(null,vec__29931,(0),null);
var plugin = cljs.core.nth.call(null,vec__29931,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29941 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29926,chunk__29927,count__29928,i__29929,pl_29941,vec__29931,k,plugin,seq__29926__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29941.call(null,msg_hist);
});})(seq__29926,chunk__29927,count__29928,i__29929,pl_29941,vec__29931,k,plugin,seq__29926__$1,temp__4425__auto__))
);
} else {
}

var G__29942 = cljs.core.next.call(null,seq__29926__$1);
var G__29943 = null;
var G__29944 = (0);
var G__29945 = (0);
seq__29926 = G__29942;
chunk__29927 = G__29943;
count__29928 = G__29944;
i__29929 = G__29945;
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
var args29946 = [];
var len__17877__auto___29949 = arguments.length;
var i__17878__auto___29950 = (0);
while(true){
if((i__17878__auto___29950 < len__17877__auto___29949)){
args29946.push((arguments[i__17878__auto___29950]));

var G__29951 = (i__17878__auto___29950 + (1));
i__17878__auto___29950 = G__29951;
continue;
} else {
}
break;
}

var G__29948 = args29946.length;
switch (G__29948) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29946.length)].join('')));

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
var len__17877__auto___29957 = arguments.length;
var i__17878__auto___29958 = (0);
while(true){
if((i__17878__auto___29958 < len__17877__auto___29957)){
args__17884__auto__.push((arguments[i__17878__auto___29958]));

var G__29959 = (i__17878__auto___29958 + (1));
i__17878__auto___29958 = G__29959;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((0) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17885__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29954){
var map__29955 = p__29954;
var map__29955__$1 = ((((!((map__29955 == null)))?((((map__29955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29955):map__29955);
var opts = map__29955__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29953){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29953));
});

//# sourceMappingURL=client.js.map?rel=1460363595376