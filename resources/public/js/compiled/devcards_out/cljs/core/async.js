// Compiled by ClojureScript 1.7.170 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var args25465 = [];
var len__17877__auto___25471 = arguments.length;
var i__17878__auto___25472 = (0);
while(true){
if((i__17878__auto___25472 < len__17877__auto___25471)){
args25465.push((arguments[i__17878__auto___25472]));

var G__25473 = (i__17878__auto___25472 + (1));
i__17878__auto___25472 = G__25473;
continue;
} else {
}
break;
}

var G__25467 = args25465.length;
switch (G__25467) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25465.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async25468 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25468 = (function (f,blockable,meta25469){
this.f = f;
this.blockable = blockable;
this.meta25469 = meta25469;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25470,meta25469__$1){
var self__ = this;
var _25470__$1 = this;
return (new cljs.core.async.t_cljs$core$async25468(self__.f,self__.blockable,meta25469__$1));
});

cljs.core.async.t_cljs$core$async25468.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25470){
var self__ = this;
var _25470__$1 = this;
return self__.meta25469;
});

cljs.core.async.t_cljs$core$async25468.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25468.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25468.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async25468.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async25468.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta25469","meta25469",1071236569,null)], null);
});

cljs.core.async.t_cljs$core$async25468.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25468.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25468";

cljs.core.async.t_cljs$core$async25468.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async25468");
});

cljs.core.async.__GT_t_cljs$core$async25468 = (function cljs$core$async$__GT_t_cljs$core$async25468(f__$1,blockable__$1,meta25469){
return (new cljs.core.async.t_cljs$core$async25468(f__$1,blockable__$1,meta25469));
});

}

return (new cljs.core.async.t_cljs$core$async25468(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args25477 = [];
var len__17877__auto___25480 = arguments.length;
var i__17878__auto___25481 = (0);
while(true){
if((i__17878__auto___25481 < len__17877__auto___25480)){
args25477.push((arguments[i__17878__auto___25481]));

var G__25482 = (i__17878__auto___25481 + (1));
i__17878__auto___25481 = G__25482;
continue;
} else {
}
break;
}

var G__25479 = args25477.length;
switch (G__25479) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25477.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var args25484 = [];
var len__17877__auto___25487 = arguments.length;
var i__17878__auto___25488 = (0);
while(true){
if((i__17878__auto___25488 < len__17877__auto___25487)){
args25484.push((arguments[i__17878__auto___25488]));

var G__25489 = (i__17878__auto___25488 + (1));
i__17878__auto___25488 = G__25489;
continue;
} else {
}
break;
}

var G__25486 = args25484.length;
switch (G__25486) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25484.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args25491 = [];
var len__17877__auto___25494 = arguments.length;
var i__17878__auto___25495 = (0);
while(true){
if((i__17878__auto___25495 < len__17877__auto___25494)){
args25491.push((arguments[i__17878__auto___25495]));

var G__25496 = (i__17878__auto___25495 + (1));
i__17878__auto___25495 = G__25496;
continue;
} else {
}
break;
}

var G__25493 = args25491.length;
switch (G__25493) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25491.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_25498 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_25498);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_25498,ret){
return (function (){
return fn1.call(null,val_25498);
});})(val_25498,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args25499 = [];
var len__17877__auto___25502 = arguments.length;
var i__17878__auto___25503 = (0);
while(true){
if((i__17878__auto___25503 < len__17877__auto___25502)){
args25499.push((arguments[i__17878__auto___25503]));

var G__25504 = (i__17878__auto___25503 + (1));
i__17878__auto___25503 = G__25504;
continue;
} else {
}
break;
}

var G__25501 = args25499.length;
switch (G__25501) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25499.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17722__auto___25506 = n;
var x_25507 = (0);
while(true){
if((x_25507 < n__17722__auto___25506)){
(a[x_25507] = (0));

var G__25508 = (x_25507 + (1));
x_25507 = G__25508;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__25509 = (i + (1));
i = G__25509;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async25513 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25513 = (function (alt_flag,flag,meta25514){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta25514 = meta25514;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_25515,meta25514__$1){
var self__ = this;
var _25515__$1 = this;
return (new cljs.core.async.t_cljs$core$async25513(self__.alt_flag,self__.flag,meta25514__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async25513.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_25515){
var self__ = this;
var _25515__$1 = this;
return self__.meta25514;
});})(flag))
;

cljs.core.async.t_cljs$core$async25513.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25513.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async25513.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25513.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async25513.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta25514","meta25514",-46823211,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async25513.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25513.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25513";

cljs.core.async.t_cljs$core$async25513.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async25513");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async25513 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async25513(alt_flag__$1,flag__$1,meta25514){
return (new cljs.core.async.t_cljs$core$async25513(alt_flag__$1,flag__$1,meta25514));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async25513(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async25519 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async25519 = (function (alt_handler,flag,cb,meta25520){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta25520 = meta25520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async25519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_25521,meta25520__$1){
var self__ = this;
var _25521__$1 = this;
return (new cljs.core.async.t_cljs$core$async25519(self__.alt_handler,self__.flag,self__.cb,meta25520__$1));
});

cljs.core.async.t_cljs$core$async25519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_25521){
var self__ = this;
var _25521__$1 = this;
return self__.meta25520;
});

cljs.core.async.t_cljs$core$async25519.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async25519.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async25519.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async25519.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async25519.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta25520","meta25520",1568815776,null)], null);
});

cljs.core.async.t_cljs$core$async25519.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async25519.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async25519";

cljs.core.async.t_cljs$core$async25519.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async25519");
});

cljs.core.async.__GT_t_cljs$core$async25519 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async25519(alt_handler__$1,flag__$1,cb__$1,meta25520){
return (new cljs.core.async.t_cljs$core$async25519(alt_handler__$1,flag__$1,cb__$1,meta25520));
});

}

return (new cljs.core.async.t_cljs$core$async25519(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25522_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25522_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__25523_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__25523_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16819__auto__ = wport;
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return port;
}
})()], null));
} else {
var G__25524 = (i + (1));
i = G__25524;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16819__auto__ = ret;
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16807__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16807__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16807__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17884__auto__ = [];
var len__17877__auto___25530 = arguments.length;
var i__17878__auto___25531 = (0);
while(true){
if((i__17878__auto___25531 < len__17877__auto___25530)){
args__17884__auto__.push((arguments[i__17878__auto___25531]));

var G__25532 = (i__17878__auto___25531 + (1));
i__17878__auto___25531 = G__25532;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((1) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17885__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__25527){
var map__25528 = p__25527;
var map__25528__$1 = ((((!((map__25528 == null)))?((((map__25528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__25528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25528):map__25528);
var opts = map__25528__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq25525){
var G__25526 = cljs.core.first.call(null,seq25525);
var seq25525__$1 = cljs.core.next.call(null,seq25525);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25526,seq25525__$1);
});
/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args25533 = [];
var len__17877__auto___25583 = arguments.length;
var i__17878__auto___25584 = (0);
while(true){
if((i__17878__auto___25584 < len__17877__auto___25583)){
args25533.push((arguments[i__17878__auto___25584]));

var G__25585 = (i__17878__auto___25584 + (1));
i__17878__auto___25584 = G__25585;
continue;
} else {
}
break;
}

var G__25535 = args25533.length;
switch (G__25535) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args25533.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18935__auto___25587 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___25587){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___25587){
return (function (state_25559){
var state_val_25560 = (state_25559[(1)]);
if((state_val_25560 === (7))){
var inst_25555 = (state_25559[(2)]);
var state_25559__$1 = state_25559;
var statearr_25561_25588 = state_25559__$1;
(statearr_25561_25588[(2)] = inst_25555);

(statearr_25561_25588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (1))){
var state_25559__$1 = state_25559;
var statearr_25562_25589 = state_25559__$1;
(statearr_25562_25589[(2)] = null);

(statearr_25562_25589[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (4))){
var inst_25538 = (state_25559[(7)]);
var inst_25538__$1 = (state_25559[(2)]);
var inst_25539 = (inst_25538__$1 == null);
var state_25559__$1 = (function (){var statearr_25563 = state_25559;
(statearr_25563[(7)] = inst_25538__$1);

return statearr_25563;
})();
if(cljs.core.truth_(inst_25539)){
var statearr_25564_25590 = state_25559__$1;
(statearr_25564_25590[(1)] = (5));

} else {
var statearr_25565_25591 = state_25559__$1;
(statearr_25565_25591[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (13))){
var state_25559__$1 = state_25559;
var statearr_25566_25592 = state_25559__$1;
(statearr_25566_25592[(2)] = null);

(statearr_25566_25592[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (6))){
var inst_25538 = (state_25559[(7)]);
var state_25559__$1 = state_25559;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25559__$1,(11),to,inst_25538);
} else {
if((state_val_25560 === (3))){
var inst_25557 = (state_25559[(2)]);
var state_25559__$1 = state_25559;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25559__$1,inst_25557);
} else {
if((state_val_25560 === (12))){
var state_25559__$1 = state_25559;
var statearr_25567_25593 = state_25559__$1;
(statearr_25567_25593[(2)] = null);

(statearr_25567_25593[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (2))){
var state_25559__$1 = state_25559;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25559__$1,(4),from);
} else {
if((state_val_25560 === (11))){
var inst_25548 = (state_25559[(2)]);
var state_25559__$1 = state_25559;
if(cljs.core.truth_(inst_25548)){
var statearr_25568_25594 = state_25559__$1;
(statearr_25568_25594[(1)] = (12));

} else {
var statearr_25569_25595 = state_25559__$1;
(statearr_25569_25595[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (9))){
var state_25559__$1 = state_25559;
var statearr_25570_25596 = state_25559__$1;
(statearr_25570_25596[(2)] = null);

(statearr_25570_25596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (5))){
var state_25559__$1 = state_25559;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25571_25597 = state_25559__$1;
(statearr_25571_25597[(1)] = (8));

} else {
var statearr_25572_25598 = state_25559__$1;
(statearr_25572_25598[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (14))){
var inst_25553 = (state_25559[(2)]);
var state_25559__$1 = state_25559;
var statearr_25573_25599 = state_25559__$1;
(statearr_25573_25599[(2)] = inst_25553);

(statearr_25573_25599[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (10))){
var inst_25545 = (state_25559[(2)]);
var state_25559__$1 = state_25559;
var statearr_25574_25600 = state_25559__$1;
(statearr_25574_25600[(2)] = inst_25545);

(statearr_25574_25600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25560 === (8))){
var inst_25542 = cljs.core.async.close_BANG_.call(null,to);
var state_25559__$1 = state_25559;
var statearr_25575_25601 = state_25559__$1;
(statearr_25575_25601[(2)] = inst_25542);

(statearr_25575_25601[(1)] = (10));


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
});})(c__18935__auto___25587))
;
return ((function (switch__18914__auto__,c__18935__auto___25587){
return (function() {
var cljs$core$async$state_machine__18915__auto__ = null;
var cljs$core$async$state_machine__18915__auto____0 = (function (){
var statearr_25579 = [null,null,null,null,null,null,null,null];
(statearr_25579[(0)] = cljs$core$async$state_machine__18915__auto__);

(statearr_25579[(1)] = (1));

return statearr_25579;
});
var cljs$core$async$state_machine__18915__auto____1 = (function (state_25559){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_25559);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e25580){if((e25580 instanceof Object)){
var ex__18918__auto__ = e25580;
var statearr_25581_25602 = state_25559;
(statearr_25581_25602[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25559);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25603 = state_25559;
state_25559 = G__25603;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$state_machine__18915__auto__ = function(state_25559){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18915__auto____1.call(this,state_25559);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18915__auto____0;
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18915__auto____1;
return cljs$core$async$state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___25587))
})();
var state__18937__auto__ = (function (){var statearr_25582 = f__18936__auto__.call(null);
(statearr_25582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___25587);

return statearr_25582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___25587))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__25787){
var vec__25788 = p__25787;
var v = cljs.core.nth.call(null,vec__25788,(0),null);
var p = cljs.core.nth.call(null,vec__25788,(1),null);
var job = vec__25788;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18935__auto___25970 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___25970,res,vec__25788,v,p,job,jobs,results){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___25970,res,vec__25788,v,p,job,jobs,results){
return (function (state_25793){
var state_val_25794 = (state_25793[(1)]);
if((state_val_25794 === (1))){
var state_25793__$1 = state_25793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25793__$1,(2),res,v);
} else {
if((state_val_25794 === (2))){
var inst_25790 = (state_25793[(2)]);
var inst_25791 = cljs.core.async.close_BANG_.call(null,res);
var state_25793__$1 = (function (){var statearr_25795 = state_25793;
(statearr_25795[(7)] = inst_25790);

return statearr_25795;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25793__$1,inst_25791);
} else {
return null;
}
}
});})(c__18935__auto___25970,res,vec__25788,v,p,job,jobs,results))
;
return ((function (switch__18914__auto__,c__18935__auto___25970,res,vec__25788,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0 = (function (){
var statearr_25799 = [null,null,null,null,null,null,null,null];
(statearr_25799[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__);

(statearr_25799[(1)] = (1));

return statearr_25799;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1 = (function (state_25793){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_25793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e25800){if((e25800 instanceof Object)){
var ex__18918__auto__ = e25800;
var statearr_25801_25971 = state_25793;
(statearr_25801_25971[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25800;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25972 = state_25793;
state_25793 = G__25972;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__ = function(state_25793){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1.call(this,state_25793);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___25970,res,vec__25788,v,p,job,jobs,results))
})();
var state__18937__auto__ = (function (){var statearr_25802 = f__18936__auto__.call(null);
(statearr_25802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___25970);

return statearr_25802;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___25970,res,vec__25788,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__25803){
var vec__25804 = p__25803;
var v = cljs.core.nth.call(null,vec__25804,(0),null);
var p = cljs.core.nth.call(null,vec__25804,(1),null);
var job = vec__25804;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17722__auto___25973 = n;
var __25974 = (0);
while(true){
if((__25974 < n__17722__auto___25973)){
var G__25805_25975 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__25805_25975) {
case "compute":
var c__18935__auto___25977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25974,c__18935__auto___25977,G__25805_25975,n__17722__auto___25973,jobs,results,process,async){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (__25974,c__18935__auto___25977,G__25805_25975,n__17722__auto___25973,jobs,results,process,async){
return (function (state_25818){
var state_val_25819 = (state_25818[(1)]);
if((state_val_25819 === (1))){
var state_25818__$1 = state_25818;
var statearr_25820_25978 = state_25818__$1;
(statearr_25820_25978[(2)] = null);

(statearr_25820_25978[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (2))){
var state_25818__$1 = state_25818;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25818__$1,(4),jobs);
} else {
if((state_val_25819 === (3))){
var inst_25816 = (state_25818[(2)]);
var state_25818__$1 = state_25818;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25818__$1,inst_25816);
} else {
if((state_val_25819 === (4))){
var inst_25808 = (state_25818[(2)]);
var inst_25809 = process.call(null,inst_25808);
var state_25818__$1 = state_25818;
if(cljs.core.truth_(inst_25809)){
var statearr_25821_25979 = state_25818__$1;
(statearr_25821_25979[(1)] = (5));

} else {
var statearr_25822_25980 = state_25818__$1;
(statearr_25822_25980[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (5))){
var state_25818__$1 = state_25818;
var statearr_25823_25981 = state_25818__$1;
(statearr_25823_25981[(2)] = null);

(statearr_25823_25981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (6))){
var state_25818__$1 = state_25818;
var statearr_25824_25982 = state_25818__$1;
(statearr_25824_25982[(2)] = null);

(statearr_25824_25982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25819 === (7))){
var inst_25814 = (state_25818[(2)]);
var state_25818__$1 = state_25818;
var statearr_25825_25983 = state_25818__$1;
(statearr_25825_25983[(2)] = inst_25814);

(statearr_25825_25983[(1)] = (3));


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
});})(__25974,c__18935__auto___25977,G__25805_25975,n__17722__auto___25973,jobs,results,process,async))
;
return ((function (__25974,switch__18914__auto__,c__18935__auto___25977,G__25805_25975,n__17722__auto___25973,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0 = (function (){
var statearr_25829 = [null,null,null,null,null,null,null];
(statearr_25829[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__);

(statearr_25829[(1)] = (1));

return statearr_25829;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1 = (function (state_25818){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_25818);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e25830){if((e25830 instanceof Object)){
var ex__18918__auto__ = e25830;
var statearr_25831_25984 = state_25818;
(statearr_25831_25984[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25818);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25830;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25985 = state_25818;
state_25818 = G__25985;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__ = function(state_25818){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1.call(this,state_25818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__;
})()
;})(__25974,switch__18914__auto__,c__18935__auto___25977,G__25805_25975,n__17722__auto___25973,jobs,results,process,async))
})();
var state__18937__auto__ = (function (){var statearr_25832 = f__18936__auto__.call(null);
(statearr_25832[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___25977);

return statearr_25832;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(__25974,c__18935__auto___25977,G__25805_25975,n__17722__auto___25973,jobs,results,process,async))
);


break;
case "async":
var c__18935__auto___25986 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__25974,c__18935__auto___25986,G__25805_25975,n__17722__auto___25973,jobs,results,process,async){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (__25974,c__18935__auto___25986,G__25805_25975,n__17722__auto___25973,jobs,results,process,async){
return (function (state_25845){
var state_val_25846 = (state_25845[(1)]);
if((state_val_25846 === (1))){
var state_25845__$1 = state_25845;
var statearr_25847_25987 = state_25845__$1;
(statearr_25847_25987[(2)] = null);

(statearr_25847_25987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25846 === (2))){
var state_25845__$1 = state_25845;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25845__$1,(4),jobs);
} else {
if((state_val_25846 === (3))){
var inst_25843 = (state_25845[(2)]);
var state_25845__$1 = state_25845;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25845__$1,inst_25843);
} else {
if((state_val_25846 === (4))){
var inst_25835 = (state_25845[(2)]);
var inst_25836 = async.call(null,inst_25835);
var state_25845__$1 = state_25845;
if(cljs.core.truth_(inst_25836)){
var statearr_25848_25988 = state_25845__$1;
(statearr_25848_25988[(1)] = (5));

} else {
var statearr_25849_25989 = state_25845__$1;
(statearr_25849_25989[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25846 === (5))){
var state_25845__$1 = state_25845;
var statearr_25850_25990 = state_25845__$1;
(statearr_25850_25990[(2)] = null);

(statearr_25850_25990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25846 === (6))){
var state_25845__$1 = state_25845;
var statearr_25851_25991 = state_25845__$1;
(statearr_25851_25991[(2)] = null);

(statearr_25851_25991[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25846 === (7))){
var inst_25841 = (state_25845[(2)]);
var state_25845__$1 = state_25845;
var statearr_25852_25992 = state_25845__$1;
(statearr_25852_25992[(2)] = inst_25841);

(statearr_25852_25992[(1)] = (3));


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
});})(__25974,c__18935__auto___25986,G__25805_25975,n__17722__auto___25973,jobs,results,process,async))
;
return ((function (__25974,switch__18914__auto__,c__18935__auto___25986,G__25805_25975,n__17722__auto___25973,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0 = (function (){
var statearr_25856 = [null,null,null,null,null,null,null];
(statearr_25856[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__);

(statearr_25856[(1)] = (1));

return statearr_25856;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1 = (function (state_25845){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_25845);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e25857){if((e25857 instanceof Object)){
var ex__18918__auto__ = e25857;
var statearr_25858_25993 = state_25845;
(statearr_25858_25993[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25845);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__25994 = state_25845;
state_25845 = G__25994;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__ = function(state_25845){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1.call(this,state_25845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__;
})()
;})(__25974,switch__18914__auto__,c__18935__auto___25986,G__25805_25975,n__17722__auto___25973,jobs,results,process,async))
})();
var state__18937__auto__ = (function (){var statearr_25859 = f__18936__auto__.call(null);
(statearr_25859[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___25986);

return statearr_25859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(__25974,c__18935__auto___25986,G__25805_25975,n__17722__auto___25973,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__25995 = (__25974 + (1));
__25974 = G__25995;
continue;
} else {
}
break;
}

var c__18935__auto___25996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___25996,jobs,results,process,async){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___25996,jobs,results,process,async){
return (function (state_25881){
var state_val_25882 = (state_25881[(1)]);
if((state_val_25882 === (1))){
var state_25881__$1 = state_25881;
var statearr_25883_25997 = state_25881__$1;
(statearr_25883_25997[(2)] = null);

(statearr_25883_25997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (2))){
var state_25881__$1 = state_25881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25881__$1,(4),from);
} else {
if((state_val_25882 === (3))){
var inst_25879 = (state_25881[(2)]);
var state_25881__$1 = state_25881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25881__$1,inst_25879);
} else {
if((state_val_25882 === (4))){
var inst_25862 = (state_25881[(7)]);
var inst_25862__$1 = (state_25881[(2)]);
var inst_25863 = (inst_25862__$1 == null);
var state_25881__$1 = (function (){var statearr_25884 = state_25881;
(statearr_25884[(7)] = inst_25862__$1);

return statearr_25884;
})();
if(cljs.core.truth_(inst_25863)){
var statearr_25885_25998 = state_25881__$1;
(statearr_25885_25998[(1)] = (5));

} else {
var statearr_25886_25999 = state_25881__$1;
(statearr_25886_25999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (5))){
var inst_25865 = cljs.core.async.close_BANG_.call(null,jobs);
var state_25881__$1 = state_25881;
var statearr_25887_26000 = state_25881__$1;
(statearr_25887_26000[(2)] = inst_25865);

(statearr_25887_26000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (6))){
var inst_25867 = (state_25881[(8)]);
var inst_25862 = (state_25881[(7)]);
var inst_25867__$1 = cljs.core.async.chan.call(null,(1));
var inst_25868 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_25869 = [inst_25862,inst_25867__$1];
var inst_25870 = (new cljs.core.PersistentVector(null,2,(5),inst_25868,inst_25869,null));
var state_25881__$1 = (function (){var statearr_25888 = state_25881;
(statearr_25888[(8)] = inst_25867__$1);

return statearr_25888;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25881__$1,(8),jobs,inst_25870);
} else {
if((state_val_25882 === (7))){
var inst_25877 = (state_25881[(2)]);
var state_25881__$1 = state_25881;
var statearr_25889_26001 = state_25881__$1;
(statearr_25889_26001[(2)] = inst_25877);

(statearr_25889_26001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25882 === (8))){
var inst_25867 = (state_25881[(8)]);
var inst_25872 = (state_25881[(2)]);
var state_25881__$1 = (function (){var statearr_25890 = state_25881;
(statearr_25890[(9)] = inst_25872);

return statearr_25890;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25881__$1,(9),results,inst_25867);
} else {
if((state_val_25882 === (9))){
var inst_25874 = (state_25881[(2)]);
var state_25881__$1 = (function (){var statearr_25891 = state_25881;
(statearr_25891[(10)] = inst_25874);

return statearr_25891;
})();
var statearr_25892_26002 = state_25881__$1;
(statearr_25892_26002[(2)] = null);

(statearr_25892_26002[(1)] = (2));


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
});})(c__18935__auto___25996,jobs,results,process,async))
;
return ((function (switch__18914__auto__,c__18935__auto___25996,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0 = (function (){
var statearr_25896 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_25896[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__);

(statearr_25896[(1)] = (1));

return statearr_25896;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1 = (function (state_25881){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_25881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e25897){if((e25897 instanceof Object)){
var ex__18918__auto__ = e25897;
var statearr_25898_26003 = state_25881;
(statearr_25898_26003[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26004 = state_25881;
state_25881 = G__26004;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__ = function(state_25881){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1.call(this,state_25881);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___25996,jobs,results,process,async))
})();
var state__18937__auto__ = (function (){var statearr_25899 = f__18936__auto__.call(null);
(statearr_25899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___25996);

return statearr_25899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___25996,jobs,results,process,async))
);


var c__18935__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto__,jobs,results,process,async){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto__,jobs,results,process,async){
return (function (state_25937){
var state_val_25938 = (state_25937[(1)]);
if((state_val_25938 === (7))){
var inst_25933 = (state_25937[(2)]);
var state_25937__$1 = state_25937;
var statearr_25939_26005 = state_25937__$1;
(statearr_25939_26005[(2)] = inst_25933);

(statearr_25939_26005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25938 === (20))){
var state_25937__$1 = state_25937;
var statearr_25940_26006 = state_25937__$1;
(statearr_25940_26006[(2)] = null);

(statearr_25940_26006[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25938 === (1))){
var state_25937__$1 = state_25937;
var statearr_25941_26007 = state_25937__$1;
(statearr_25941_26007[(2)] = null);

(statearr_25941_26007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25938 === (4))){
var inst_25902 = (state_25937[(7)]);
var inst_25902__$1 = (state_25937[(2)]);
var inst_25903 = (inst_25902__$1 == null);
var state_25937__$1 = (function (){var statearr_25942 = state_25937;
(statearr_25942[(7)] = inst_25902__$1);

return statearr_25942;
})();
if(cljs.core.truth_(inst_25903)){
var statearr_25943_26008 = state_25937__$1;
(statearr_25943_26008[(1)] = (5));

} else {
var statearr_25944_26009 = state_25937__$1;
(statearr_25944_26009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25938 === (15))){
var inst_25915 = (state_25937[(8)]);
var state_25937__$1 = state_25937;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25937__$1,(18),to,inst_25915);
} else {
if((state_val_25938 === (21))){
var inst_25928 = (state_25937[(2)]);
var state_25937__$1 = state_25937;
var statearr_25945_26010 = state_25937__$1;
(statearr_25945_26010[(2)] = inst_25928);

(statearr_25945_26010[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25938 === (13))){
var inst_25930 = (state_25937[(2)]);
var state_25937__$1 = (function (){var statearr_25946 = state_25937;
(statearr_25946[(9)] = inst_25930);

return statearr_25946;
})();
var statearr_25947_26011 = state_25937__$1;
(statearr_25947_26011[(2)] = null);

(statearr_25947_26011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25938 === (6))){
var inst_25902 = (state_25937[(7)]);
var state_25937__$1 = state_25937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25937__$1,(11),inst_25902);
} else {
if((state_val_25938 === (17))){
var inst_25923 = (state_25937[(2)]);
var state_25937__$1 = state_25937;
if(cljs.core.truth_(inst_25923)){
var statearr_25948_26012 = state_25937__$1;
(statearr_25948_26012[(1)] = (19));

} else {
var statearr_25949_26013 = state_25937__$1;
(statearr_25949_26013[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25938 === (3))){
var inst_25935 = (state_25937[(2)]);
var state_25937__$1 = state_25937;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25937__$1,inst_25935);
} else {
if((state_val_25938 === (12))){
var inst_25912 = (state_25937[(10)]);
var state_25937__$1 = state_25937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25937__$1,(14),inst_25912);
} else {
if((state_val_25938 === (2))){
var state_25937__$1 = state_25937;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25937__$1,(4),results);
} else {
if((state_val_25938 === (19))){
var state_25937__$1 = state_25937;
var statearr_25950_26014 = state_25937__$1;
(statearr_25950_26014[(2)] = null);

(statearr_25950_26014[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25938 === (11))){
var inst_25912 = (state_25937[(2)]);
var state_25937__$1 = (function (){var statearr_25951 = state_25937;
(statearr_25951[(10)] = inst_25912);

return statearr_25951;
})();
var statearr_25952_26015 = state_25937__$1;
(statearr_25952_26015[(2)] = null);

(statearr_25952_26015[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25938 === (9))){
var state_25937__$1 = state_25937;
var statearr_25953_26016 = state_25937__$1;
(statearr_25953_26016[(2)] = null);

(statearr_25953_26016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25938 === (5))){
var state_25937__$1 = state_25937;
if(cljs.core.truth_(close_QMARK_)){
var statearr_25954_26017 = state_25937__$1;
(statearr_25954_26017[(1)] = (8));

} else {
var statearr_25955_26018 = state_25937__$1;
(statearr_25955_26018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25938 === (14))){
var inst_25917 = (state_25937[(11)]);
var inst_25915 = (state_25937[(8)]);
var inst_25915__$1 = (state_25937[(2)]);
var inst_25916 = (inst_25915__$1 == null);
var inst_25917__$1 = cljs.core.not.call(null,inst_25916);
var state_25937__$1 = (function (){var statearr_25956 = state_25937;
(statearr_25956[(11)] = inst_25917__$1);

(statearr_25956[(8)] = inst_25915__$1);

return statearr_25956;
})();
if(inst_25917__$1){
var statearr_25957_26019 = state_25937__$1;
(statearr_25957_26019[(1)] = (15));

} else {
var statearr_25958_26020 = state_25937__$1;
(statearr_25958_26020[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25938 === (16))){
var inst_25917 = (state_25937[(11)]);
var state_25937__$1 = state_25937;
var statearr_25959_26021 = state_25937__$1;
(statearr_25959_26021[(2)] = inst_25917);

(statearr_25959_26021[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25938 === (10))){
var inst_25909 = (state_25937[(2)]);
var state_25937__$1 = state_25937;
var statearr_25960_26022 = state_25937__$1;
(statearr_25960_26022[(2)] = inst_25909);

(statearr_25960_26022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25938 === (18))){
var inst_25920 = (state_25937[(2)]);
var state_25937__$1 = state_25937;
var statearr_25961_26023 = state_25937__$1;
(statearr_25961_26023[(2)] = inst_25920);

(statearr_25961_26023[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_25938 === (8))){
var inst_25906 = cljs.core.async.close_BANG_.call(null,to);
var state_25937__$1 = state_25937;
var statearr_25962_26024 = state_25937__$1;
(statearr_25962_26024[(2)] = inst_25906);

(statearr_25962_26024[(1)] = (10));


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
}
}
}
}
});})(c__18935__auto__,jobs,results,process,async))
;
return ((function (switch__18914__auto__,c__18935__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0 = (function (){
var statearr_25966 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_25966[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__);

(statearr_25966[(1)] = (1));

return statearr_25966;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1 = (function (state_25937){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_25937);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e25967){if((e25967 instanceof Object)){
var ex__18918__auto__ = e25967;
var statearr_25968_26025 = state_25937;
(statearr_25968_26025[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25937);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e25967;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26026 = state_25937;
state_25937 = G__26026;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__ = function(state_25937){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1.call(this,state_25937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto__,jobs,results,process,async))
})();
var state__18937__auto__ = (function (){var statearr_25969 = f__18936__auto__.call(null);
(statearr_25969[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto__);

return statearr_25969;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto__,jobs,results,process,async))
);

return c__18935__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args26027 = [];
var len__17877__auto___26030 = arguments.length;
var i__17878__auto___26031 = (0);
while(true){
if((i__17878__auto___26031 < len__17877__auto___26030)){
args26027.push((arguments[i__17878__auto___26031]));

var G__26032 = (i__17878__auto___26031 + (1));
i__17878__auto___26031 = G__26032;
continue;
} else {
}
break;
}

var G__26029 = args26027.length;
switch (G__26029) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26027.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args26034 = [];
var len__17877__auto___26037 = arguments.length;
var i__17878__auto___26038 = (0);
while(true){
if((i__17878__auto___26038 < len__17877__auto___26037)){
args26034.push((arguments[i__17878__auto___26038]));

var G__26039 = (i__17878__auto___26038 + (1));
i__17878__auto___26038 = G__26039;
continue;
} else {
}
break;
}

var G__26036 = args26034.length;
switch (G__26036) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26034.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args26041 = [];
var len__17877__auto___26094 = arguments.length;
var i__17878__auto___26095 = (0);
while(true){
if((i__17878__auto___26095 < len__17877__auto___26094)){
args26041.push((arguments[i__17878__auto___26095]));

var G__26096 = (i__17878__auto___26095 + (1));
i__17878__auto___26095 = G__26096;
continue;
} else {
}
break;
}

var G__26043 = args26041.length;
switch (G__26043) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26041.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18935__auto___26098 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___26098,tc,fc){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___26098,tc,fc){
return (function (state_26069){
var state_val_26070 = (state_26069[(1)]);
if((state_val_26070 === (7))){
var inst_26065 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
var statearr_26071_26099 = state_26069__$1;
(statearr_26071_26099[(2)] = inst_26065);

(statearr_26071_26099[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (1))){
var state_26069__$1 = state_26069;
var statearr_26072_26100 = state_26069__$1;
(statearr_26072_26100[(2)] = null);

(statearr_26072_26100[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (4))){
var inst_26046 = (state_26069[(7)]);
var inst_26046__$1 = (state_26069[(2)]);
var inst_26047 = (inst_26046__$1 == null);
var state_26069__$1 = (function (){var statearr_26073 = state_26069;
(statearr_26073[(7)] = inst_26046__$1);

return statearr_26073;
})();
if(cljs.core.truth_(inst_26047)){
var statearr_26074_26101 = state_26069__$1;
(statearr_26074_26101[(1)] = (5));

} else {
var statearr_26075_26102 = state_26069__$1;
(statearr_26075_26102[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (13))){
var state_26069__$1 = state_26069;
var statearr_26076_26103 = state_26069__$1;
(statearr_26076_26103[(2)] = null);

(statearr_26076_26103[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (6))){
var inst_26046 = (state_26069[(7)]);
var inst_26052 = p.call(null,inst_26046);
var state_26069__$1 = state_26069;
if(cljs.core.truth_(inst_26052)){
var statearr_26077_26104 = state_26069__$1;
(statearr_26077_26104[(1)] = (9));

} else {
var statearr_26078_26105 = state_26069__$1;
(statearr_26078_26105[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (3))){
var inst_26067 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26069__$1,inst_26067);
} else {
if((state_val_26070 === (12))){
var state_26069__$1 = state_26069;
var statearr_26079_26106 = state_26069__$1;
(statearr_26079_26106[(2)] = null);

(statearr_26079_26106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (2))){
var state_26069__$1 = state_26069;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26069__$1,(4),ch);
} else {
if((state_val_26070 === (11))){
var inst_26046 = (state_26069[(7)]);
var inst_26056 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26069__$1,(8),inst_26056,inst_26046);
} else {
if((state_val_26070 === (9))){
var state_26069__$1 = state_26069;
var statearr_26080_26107 = state_26069__$1;
(statearr_26080_26107[(2)] = tc);

(statearr_26080_26107[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (5))){
var inst_26049 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26050 = cljs.core.async.close_BANG_.call(null,fc);
var state_26069__$1 = (function (){var statearr_26081 = state_26069;
(statearr_26081[(8)] = inst_26049);

return statearr_26081;
})();
var statearr_26082_26108 = state_26069__$1;
(statearr_26082_26108[(2)] = inst_26050);

(statearr_26082_26108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (14))){
var inst_26063 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
var statearr_26083_26109 = state_26069__$1;
(statearr_26083_26109[(2)] = inst_26063);

(statearr_26083_26109[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (10))){
var state_26069__$1 = state_26069;
var statearr_26084_26110 = state_26069__$1;
(statearr_26084_26110[(2)] = fc);

(statearr_26084_26110[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26070 === (8))){
var inst_26058 = (state_26069[(2)]);
var state_26069__$1 = state_26069;
if(cljs.core.truth_(inst_26058)){
var statearr_26085_26111 = state_26069__$1;
(statearr_26085_26111[(1)] = (12));

} else {
var statearr_26086_26112 = state_26069__$1;
(statearr_26086_26112[(1)] = (13));

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
});})(c__18935__auto___26098,tc,fc))
;
return ((function (switch__18914__auto__,c__18935__auto___26098,tc,fc){
return (function() {
var cljs$core$async$state_machine__18915__auto__ = null;
var cljs$core$async$state_machine__18915__auto____0 = (function (){
var statearr_26090 = [null,null,null,null,null,null,null,null,null];
(statearr_26090[(0)] = cljs$core$async$state_machine__18915__auto__);

(statearr_26090[(1)] = (1));

return statearr_26090;
});
var cljs$core$async$state_machine__18915__auto____1 = (function (state_26069){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_26069);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e26091){if((e26091 instanceof Object)){
var ex__18918__auto__ = e26091;
var statearr_26092_26113 = state_26069;
(statearr_26092_26113[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26091;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26114 = state_26069;
state_26069 = G__26114;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$state_machine__18915__auto__ = function(state_26069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18915__auto____1.call(this,state_26069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18915__auto____0;
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18915__auto____1;
return cljs$core$async$state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___26098,tc,fc))
})();
var state__18937__auto__ = (function (){var statearr_26093 = f__18936__auto__.call(null);
(statearr_26093[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___26098);

return statearr_26093;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___26098,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__18935__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto__){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto__){
return (function (state_26178){
var state_val_26179 = (state_26178[(1)]);
if((state_val_26179 === (7))){
var inst_26174 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
var statearr_26180_26201 = state_26178__$1;
(statearr_26180_26201[(2)] = inst_26174);

(statearr_26180_26201[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (1))){
var inst_26158 = init;
var state_26178__$1 = (function (){var statearr_26181 = state_26178;
(statearr_26181[(7)] = inst_26158);

return statearr_26181;
})();
var statearr_26182_26202 = state_26178__$1;
(statearr_26182_26202[(2)] = null);

(statearr_26182_26202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (4))){
var inst_26161 = (state_26178[(8)]);
var inst_26161__$1 = (state_26178[(2)]);
var inst_26162 = (inst_26161__$1 == null);
var state_26178__$1 = (function (){var statearr_26183 = state_26178;
(statearr_26183[(8)] = inst_26161__$1);

return statearr_26183;
})();
if(cljs.core.truth_(inst_26162)){
var statearr_26184_26203 = state_26178__$1;
(statearr_26184_26203[(1)] = (5));

} else {
var statearr_26185_26204 = state_26178__$1;
(statearr_26185_26204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (6))){
var inst_26161 = (state_26178[(8)]);
var inst_26158 = (state_26178[(7)]);
var inst_26165 = (state_26178[(9)]);
var inst_26165__$1 = f.call(null,inst_26158,inst_26161);
var inst_26166 = cljs.core.reduced_QMARK_.call(null,inst_26165__$1);
var state_26178__$1 = (function (){var statearr_26186 = state_26178;
(statearr_26186[(9)] = inst_26165__$1);

return statearr_26186;
})();
if(inst_26166){
var statearr_26187_26205 = state_26178__$1;
(statearr_26187_26205[(1)] = (8));

} else {
var statearr_26188_26206 = state_26178__$1;
(statearr_26188_26206[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (3))){
var inst_26176 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26178__$1,inst_26176);
} else {
if((state_val_26179 === (2))){
var state_26178__$1 = state_26178;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26178__$1,(4),ch);
} else {
if((state_val_26179 === (9))){
var inst_26165 = (state_26178[(9)]);
var inst_26158 = inst_26165;
var state_26178__$1 = (function (){var statearr_26189 = state_26178;
(statearr_26189[(7)] = inst_26158);

return statearr_26189;
})();
var statearr_26190_26207 = state_26178__$1;
(statearr_26190_26207[(2)] = null);

(statearr_26190_26207[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (5))){
var inst_26158 = (state_26178[(7)]);
var state_26178__$1 = state_26178;
var statearr_26191_26208 = state_26178__$1;
(statearr_26191_26208[(2)] = inst_26158);

(statearr_26191_26208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (10))){
var inst_26172 = (state_26178[(2)]);
var state_26178__$1 = state_26178;
var statearr_26192_26209 = state_26178__$1;
(statearr_26192_26209[(2)] = inst_26172);

(statearr_26192_26209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26179 === (8))){
var inst_26165 = (state_26178[(9)]);
var inst_26168 = cljs.core.deref.call(null,inst_26165);
var state_26178__$1 = state_26178;
var statearr_26193_26210 = state_26178__$1;
(statearr_26193_26210[(2)] = inst_26168);

(statearr_26193_26210[(1)] = (10));


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
});})(c__18935__auto__))
;
return ((function (switch__18914__auto__,c__18935__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__18915__auto__ = null;
var cljs$core$async$reduce_$_state_machine__18915__auto____0 = (function (){
var statearr_26197 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26197[(0)] = cljs$core$async$reduce_$_state_machine__18915__auto__);

(statearr_26197[(1)] = (1));

return statearr_26197;
});
var cljs$core$async$reduce_$_state_machine__18915__auto____1 = (function (state_26178){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_26178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e26198){if((e26198 instanceof Object)){
var ex__18918__auto__ = e26198;
var statearr_26199_26211 = state_26178;
(statearr_26199_26211[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26198;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26212 = state_26178;
state_26178 = G__26212;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18915__auto__ = function(state_26178){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18915__auto____1.call(this,state_26178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18915__auto____0;
cljs$core$async$reduce_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18915__auto____1;
return cljs$core$async$reduce_$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto__))
})();
var state__18937__auto__ = (function (){var statearr_26200 = f__18936__auto__.call(null);
(statearr_26200[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto__);

return statearr_26200;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto__))
);

return c__18935__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args26213 = [];
var len__17877__auto___26265 = arguments.length;
var i__17878__auto___26266 = (0);
while(true){
if((i__17878__auto___26266 < len__17877__auto___26265)){
args26213.push((arguments[i__17878__auto___26266]));

var G__26267 = (i__17878__auto___26266 + (1));
i__17878__auto___26266 = G__26267;
continue;
} else {
}
break;
}

var G__26215 = args26213.length;
switch (G__26215) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26213.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__18935__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto__){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto__){
return (function (state_26240){
var state_val_26241 = (state_26240[(1)]);
if((state_val_26241 === (7))){
var inst_26222 = (state_26240[(2)]);
var state_26240__$1 = state_26240;
var statearr_26242_26269 = state_26240__$1;
(statearr_26242_26269[(2)] = inst_26222);

(statearr_26242_26269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26241 === (1))){
var inst_26216 = cljs.core.seq.call(null,coll);
var inst_26217 = inst_26216;
var state_26240__$1 = (function (){var statearr_26243 = state_26240;
(statearr_26243[(7)] = inst_26217);

return statearr_26243;
})();
var statearr_26244_26270 = state_26240__$1;
(statearr_26244_26270[(2)] = null);

(statearr_26244_26270[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26241 === (4))){
var inst_26217 = (state_26240[(7)]);
var inst_26220 = cljs.core.first.call(null,inst_26217);
var state_26240__$1 = state_26240;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26240__$1,(7),ch,inst_26220);
} else {
if((state_val_26241 === (13))){
var inst_26234 = (state_26240[(2)]);
var state_26240__$1 = state_26240;
var statearr_26245_26271 = state_26240__$1;
(statearr_26245_26271[(2)] = inst_26234);

(statearr_26245_26271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26241 === (6))){
var inst_26225 = (state_26240[(2)]);
var state_26240__$1 = state_26240;
if(cljs.core.truth_(inst_26225)){
var statearr_26246_26272 = state_26240__$1;
(statearr_26246_26272[(1)] = (8));

} else {
var statearr_26247_26273 = state_26240__$1;
(statearr_26247_26273[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26241 === (3))){
var inst_26238 = (state_26240[(2)]);
var state_26240__$1 = state_26240;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26240__$1,inst_26238);
} else {
if((state_val_26241 === (12))){
var state_26240__$1 = state_26240;
var statearr_26248_26274 = state_26240__$1;
(statearr_26248_26274[(2)] = null);

(statearr_26248_26274[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26241 === (2))){
var inst_26217 = (state_26240[(7)]);
var state_26240__$1 = state_26240;
if(cljs.core.truth_(inst_26217)){
var statearr_26249_26275 = state_26240__$1;
(statearr_26249_26275[(1)] = (4));

} else {
var statearr_26250_26276 = state_26240__$1;
(statearr_26250_26276[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26241 === (11))){
var inst_26231 = cljs.core.async.close_BANG_.call(null,ch);
var state_26240__$1 = state_26240;
var statearr_26251_26277 = state_26240__$1;
(statearr_26251_26277[(2)] = inst_26231);

(statearr_26251_26277[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26241 === (9))){
var state_26240__$1 = state_26240;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26252_26278 = state_26240__$1;
(statearr_26252_26278[(1)] = (11));

} else {
var statearr_26253_26279 = state_26240__$1;
(statearr_26253_26279[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26241 === (5))){
var inst_26217 = (state_26240[(7)]);
var state_26240__$1 = state_26240;
var statearr_26254_26280 = state_26240__$1;
(statearr_26254_26280[(2)] = inst_26217);

(statearr_26254_26280[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26241 === (10))){
var inst_26236 = (state_26240[(2)]);
var state_26240__$1 = state_26240;
var statearr_26255_26281 = state_26240__$1;
(statearr_26255_26281[(2)] = inst_26236);

(statearr_26255_26281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26241 === (8))){
var inst_26217 = (state_26240[(7)]);
var inst_26227 = cljs.core.next.call(null,inst_26217);
var inst_26217__$1 = inst_26227;
var state_26240__$1 = (function (){var statearr_26256 = state_26240;
(statearr_26256[(7)] = inst_26217__$1);

return statearr_26256;
})();
var statearr_26257_26282 = state_26240__$1;
(statearr_26257_26282[(2)] = null);

(statearr_26257_26282[(1)] = (2));


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
});})(c__18935__auto__))
;
return ((function (switch__18914__auto__,c__18935__auto__){
return (function() {
var cljs$core$async$state_machine__18915__auto__ = null;
var cljs$core$async$state_machine__18915__auto____0 = (function (){
var statearr_26261 = [null,null,null,null,null,null,null,null];
(statearr_26261[(0)] = cljs$core$async$state_machine__18915__auto__);

(statearr_26261[(1)] = (1));

return statearr_26261;
});
var cljs$core$async$state_machine__18915__auto____1 = (function (state_26240){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_26240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e26262){if((e26262 instanceof Object)){
var ex__18918__auto__ = e26262;
var statearr_26263_26283 = state_26240;
(statearr_26263_26283[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26262;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26284 = state_26240;
state_26240 = G__26284;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$state_machine__18915__auto__ = function(state_26240){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18915__auto____1.call(this,state_26240);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18915__auto____0;
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18915__auto____1;
return cljs$core$async$state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto__))
})();
var state__18937__auto__ = (function (){var statearr_26264 = f__18936__auto__.call(null);
(statearr_26264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto__);

return statearr_26264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto__))
);

return c__18935__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__17474__auto__ = (((_ == null))?null:_);
var m__17475__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,_);
} else {
var m__17475__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17475__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,ch);
} else {
var m__17475__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m);
} else {
var m__17475__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26506 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26506 = (function (mult,ch,cs,meta26507){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta26507 = meta26507;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26506.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26508,meta26507__$1){
var self__ = this;
var _26508__$1 = this;
return (new cljs.core.async.t_cljs$core$async26506(self__.mult,self__.ch,self__.cs,meta26507__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26506.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26508){
var self__ = this;
var _26508__$1 = this;
return self__.meta26507;
});})(cs))
;

cljs.core.async.t_cljs$core$async26506.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26506.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26506.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async26506.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26506.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26506.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26506.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26507","meta26507",-1510608774,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26506.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26506.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26506";

cljs.core.async.t_cljs$core$async26506.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async26506");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async26506 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26506(mult__$1,ch__$1,cs__$1,meta26507){
return (new cljs.core.async.t_cljs$core$async26506(mult__$1,ch__$1,cs__$1,meta26507));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26506(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__18935__auto___26727 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___26727,cs,m,dchan,dctr,done){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___26727,cs,m,dchan,dctr,done){
return (function (state_26639){
var state_val_26640 = (state_26639[(1)]);
if((state_val_26640 === (7))){
var inst_26635 = (state_26639[(2)]);
var state_26639__$1 = state_26639;
var statearr_26641_26728 = state_26639__$1;
(statearr_26641_26728[(2)] = inst_26635);

(statearr_26641_26728[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (20))){
var inst_26540 = (state_26639[(7)]);
var inst_26550 = cljs.core.first.call(null,inst_26540);
var inst_26551 = cljs.core.nth.call(null,inst_26550,(0),null);
var inst_26552 = cljs.core.nth.call(null,inst_26550,(1),null);
var state_26639__$1 = (function (){var statearr_26642 = state_26639;
(statearr_26642[(8)] = inst_26551);

return statearr_26642;
})();
if(cljs.core.truth_(inst_26552)){
var statearr_26643_26729 = state_26639__$1;
(statearr_26643_26729[(1)] = (22));

} else {
var statearr_26644_26730 = state_26639__$1;
(statearr_26644_26730[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (27))){
var inst_26580 = (state_26639[(9)]);
var inst_26511 = (state_26639[(10)]);
var inst_26587 = (state_26639[(11)]);
var inst_26582 = (state_26639[(12)]);
var inst_26587__$1 = cljs.core._nth.call(null,inst_26580,inst_26582);
var inst_26588 = cljs.core.async.put_BANG_.call(null,inst_26587__$1,inst_26511,done);
var state_26639__$1 = (function (){var statearr_26645 = state_26639;
(statearr_26645[(11)] = inst_26587__$1);

return statearr_26645;
})();
if(cljs.core.truth_(inst_26588)){
var statearr_26646_26731 = state_26639__$1;
(statearr_26646_26731[(1)] = (30));

} else {
var statearr_26647_26732 = state_26639__$1;
(statearr_26647_26732[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (1))){
var state_26639__$1 = state_26639;
var statearr_26648_26733 = state_26639__$1;
(statearr_26648_26733[(2)] = null);

(statearr_26648_26733[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (24))){
var inst_26540 = (state_26639[(7)]);
var inst_26557 = (state_26639[(2)]);
var inst_26558 = cljs.core.next.call(null,inst_26540);
var inst_26520 = inst_26558;
var inst_26521 = null;
var inst_26522 = (0);
var inst_26523 = (0);
var state_26639__$1 = (function (){var statearr_26649 = state_26639;
(statearr_26649[(13)] = inst_26521);

(statearr_26649[(14)] = inst_26522);

(statearr_26649[(15)] = inst_26557);

(statearr_26649[(16)] = inst_26520);

(statearr_26649[(17)] = inst_26523);

return statearr_26649;
})();
var statearr_26650_26734 = state_26639__$1;
(statearr_26650_26734[(2)] = null);

(statearr_26650_26734[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (39))){
var state_26639__$1 = state_26639;
var statearr_26654_26735 = state_26639__$1;
(statearr_26654_26735[(2)] = null);

(statearr_26654_26735[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (4))){
var inst_26511 = (state_26639[(10)]);
var inst_26511__$1 = (state_26639[(2)]);
var inst_26512 = (inst_26511__$1 == null);
var state_26639__$1 = (function (){var statearr_26655 = state_26639;
(statearr_26655[(10)] = inst_26511__$1);

return statearr_26655;
})();
if(cljs.core.truth_(inst_26512)){
var statearr_26656_26736 = state_26639__$1;
(statearr_26656_26736[(1)] = (5));

} else {
var statearr_26657_26737 = state_26639__$1;
(statearr_26657_26737[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (15))){
var inst_26521 = (state_26639[(13)]);
var inst_26522 = (state_26639[(14)]);
var inst_26520 = (state_26639[(16)]);
var inst_26523 = (state_26639[(17)]);
var inst_26536 = (state_26639[(2)]);
var inst_26537 = (inst_26523 + (1));
var tmp26651 = inst_26521;
var tmp26652 = inst_26522;
var tmp26653 = inst_26520;
var inst_26520__$1 = tmp26653;
var inst_26521__$1 = tmp26651;
var inst_26522__$1 = tmp26652;
var inst_26523__$1 = inst_26537;
var state_26639__$1 = (function (){var statearr_26658 = state_26639;
(statearr_26658[(18)] = inst_26536);

(statearr_26658[(13)] = inst_26521__$1);

(statearr_26658[(14)] = inst_26522__$1);

(statearr_26658[(16)] = inst_26520__$1);

(statearr_26658[(17)] = inst_26523__$1);

return statearr_26658;
})();
var statearr_26659_26738 = state_26639__$1;
(statearr_26659_26738[(2)] = null);

(statearr_26659_26738[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (21))){
var inst_26561 = (state_26639[(2)]);
var state_26639__$1 = state_26639;
var statearr_26663_26739 = state_26639__$1;
(statearr_26663_26739[(2)] = inst_26561);

(statearr_26663_26739[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (31))){
var inst_26587 = (state_26639[(11)]);
var inst_26591 = done.call(null,null);
var inst_26592 = cljs.core.async.untap_STAR_.call(null,m,inst_26587);
var state_26639__$1 = (function (){var statearr_26664 = state_26639;
(statearr_26664[(19)] = inst_26591);

return statearr_26664;
})();
var statearr_26665_26740 = state_26639__$1;
(statearr_26665_26740[(2)] = inst_26592);

(statearr_26665_26740[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (32))){
var inst_26580 = (state_26639[(9)]);
var inst_26579 = (state_26639[(20)]);
var inst_26581 = (state_26639[(21)]);
var inst_26582 = (state_26639[(12)]);
var inst_26594 = (state_26639[(2)]);
var inst_26595 = (inst_26582 + (1));
var tmp26660 = inst_26580;
var tmp26661 = inst_26579;
var tmp26662 = inst_26581;
var inst_26579__$1 = tmp26661;
var inst_26580__$1 = tmp26660;
var inst_26581__$1 = tmp26662;
var inst_26582__$1 = inst_26595;
var state_26639__$1 = (function (){var statearr_26666 = state_26639;
(statearr_26666[(9)] = inst_26580__$1);

(statearr_26666[(22)] = inst_26594);

(statearr_26666[(20)] = inst_26579__$1);

(statearr_26666[(21)] = inst_26581__$1);

(statearr_26666[(12)] = inst_26582__$1);

return statearr_26666;
})();
var statearr_26667_26741 = state_26639__$1;
(statearr_26667_26741[(2)] = null);

(statearr_26667_26741[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (40))){
var inst_26607 = (state_26639[(23)]);
var inst_26611 = done.call(null,null);
var inst_26612 = cljs.core.async.untap_STAR_.call(null,m,inst_26607);
var state_26639__$1 = (function (){var statearr_26668 = state_26639;
(statearr_26668[(24)] = inst_26611);

return statearr_26668;
})();
var statearr_26669_26742 = state_26639__$1;
(statearr_26669_26742[(2)] = inst_26612);

(statearr_26669_26742[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (33))){
var inst_26598 = (state_26639[(25)]);
var inst_26600 = cljs.core.chunked_seq_QMARK_.call(null,inst_26598);
var state_26639__$1 = state_26639;
if(inst_26600){
var statearr_26670_26743 = state_26639__$1;
(statearr_26670_26743[(1)] = (36));

} else {
var statearr_26671_26744 = state_26639__$1;
(statearr_26671_26744[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (13))){
var inst_26530 = (state_26639[(26)]);
var inst_26533 = cljs.core.async.close_BANG_.call(null,inst_26530);
var state_26639__$1 = state_26639;
var statearr_26672_26745 = state_26639__$1;
(statearr_26672_26745[(2)] = inst_26533);

(statearr_26672_26745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (22))){
var inst_26551 = (state_26639[(8)]);
var inst_26554 = cljs.core.async.close_BANG_.call(null,inst_26551);
var state_26639__$1 = state_26639;
var statearr_26673_26746 = state_26639__$1;
(statearr_26673_26746[(2)] = inst_26554);

(statearr_26673_26746[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (36))){
var inst_26598 = (state_26639[(25)]);
var inst_26602 = cljs.core.chunk_first.call(null,inst_26598);
var inst_26603 = cljs.core.chunk_rest.call(null,inst_26598);
var inst_26604 = cljs.core.count.call(null,inst_26602);
var inst_26579 = inst_26603;
var inst_26580 = inst_26602;
var inst_26581 = inst_26604;
var inst_26582 = (0);
var state_26639__$1 = (function (){var statearr_26674 = state_26639;
(statearr_26674[(9)] = inst_26580);

(statearr_26674[(20)] = inst_26579);

(statearr_26674[(21)] = inst_26581);

(statearr_26674[(12)] = inst_26582);

return statearr_26674;
})();
var statearr_26675_26747 = state_26639__$1;
(statearr_26675_26747[(2)] = null);

(statearr_26675_26747[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (41))){
var inst_26598 = (state_26639[(25)]);
var inst_26614 = (state_26639[(2)]);
var inst_26615 = cljs.core.next.call(null,inst_26598);
var inst_26579 = inst_26615;
var inst_26580 = null;
var inst_26581 = (0);
var inst_26582 = (0);
var state_26639__$1 = (function (){var statearr_26676 = state_26639;
(statearr_26676[(9)] = inst_26580);

(statearr_26676[(27)] = inst_26614);

(statearr_26676[(20)] = inst_26579);

(statearr_26676[(21)] = inst_26581);

(statearr_26676[(12)] = inst_26582);

return statearr_26676;
})();
var statearr_26677_26748 = state_26639__$1;
(statearr_26677_26748[(2)] = null);

(statearr_26677_26748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (43))){
var state_26639__$1 = state_26639;
var statearr_26678_26749 = state_26639__$1;
(statearr_26678_26749[(2)] = null);

(statearr_26678_26749[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (29))){
var inst_26623 = (state_26639[(2)]);
var state_26639__$1 = state_26639;
var statearr_26679_26750 = state_26639__$1;
(statearr_26679_26750[(2)] = inst_26623);

(statearr_26679_26750[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (44))){
var inst_26632 = (state_26639[(2)]);
var state_26639__$1 = (function (){var statearr_26680 = state_26639;
(statearr_26680[(28)] = inst_26632);

return statearr_26680;
})();
var statearr_26681_26751 = state_26639__$1;
(statearr_26681_26751[(2)] = null);

(statearr_26681_26751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (6))){
var inst_26571 = (state_26639[(29)]);
var inst_26570 = cljs.core.deref.call(null,cs);
var inst_26571__$1 = cljs.core.keys.call(null,inst_26570);
var inst_26572 = cljs.core.count.call(null,inst_26571__$1);
var inst_26573 = cljs.core.reset_BANG_.call(null,dctr,inst_26572);
var inst_26578 = cljs.core.seq.call(null,inst_26571__$1);
var inst_26579 = inst_26578;
var inst_26580 = null;
var inst_26581 = (0);
var inst_26582 = (0);
var state_26639__$1 = (function (){var statearr_26682 = state_26639;
(statearr_26682[(9)] = inst_26580);

(statearr_26682[(30)] = inst_26573);

(statearr_26682[(29)] = inst_26571__$1);

(statearr_26682[(20)] = inst_26579);

(statearr_26682[(21)] = inst_26581);

(statearr_26682[(12)] = inst_26582);

return statearr_26682;
})();
var statearr_26683_26752 = state_26639__$1;
(statearr_26683_26752[(2)] = null);

(statearr_26683_26752[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (28))){
var inst_26598 = (state_26639[(25)]);
var inst_26579 = (state_26639[(20)]);
var inst_26598__$1 = cljs.core.seq.call(null,inst_26579);
var state_26639__$1 = (function (){var statearr_26684 = state_26639;
(statearr_26684[(25)] = inst_26598__$1);

return statearr_26684;
})();
if(inst_26598__$1){
var statearr_26685_26753 = state_26639__$1;
(statearr_26685_26753[(1)] = (33));

} else {
var statearr_26686_26754 = state_26639__$1;
(statearr_26686_26754[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (25))){
var inst_26581 = (state_26639[(21)]);
var inst_26582 = (state_26639[(12)]);
var inst_26584 = (inst_26582 < inst_26581);
var inst_26585 = inst_26584;
var state_26639__$1 = state_26639;
if(cljs.core.truth_(inst_26585)){
var statearr_26687_26755 = state_26639__$1;
(statearr_26687_26755[(1)] = (27));

} else {
var statearr_26688_26756 = state_26639__$1;
(statearr_26688_26756[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (34))){
var state_26639__$1 = state_26639;
var statearr_26689_26757 = state_26639__$1;
(statearr_26689_26757[(2)] = null);

(statearr_26689_26757[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (17))){
var state_26639__$1 = state_26639;
var statearr_26690_26758 = state_26639__$1;
(statearr_26690_26758[(2)] = null);

(statearr_26690_26758[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (3))){
var inst_26637 = (state_26639[(2)]);
var state_26639__$1 = state_26639;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26639__$1,inst_26637);
} else {
if((state_val_26640 === (12))){
var inst_26566 = (state_26639[(2)]);
var state_26639__$1 = state_26639;
var statearr_26691_26759 = state_26639__$1;
(statearr_26691_26759[(2)] = inst_26566);

(statearr_26691_26759[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (2))){
var state_26639__$1 = state_26639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26639__$1,(4),ch);
} else {
if((state_val_26640 === (23))){
var state_26639__$1 = state_26639;
var statearr_26692_26760 = state_26639__$1;
(statearr_26692_26760[(2)] = null);

(statearr_26692_26760[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (35))){
var inst_26621 = (state_26639[(2)]);
var state_26639__$1 = state_26639;
var statearr_26693_26761 = state_26639__$1;
(statearr_26693_26761[(2)] = inst_26621);

(statearr_26693_26761[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (19))){
var inst_26540 = (state_26639[(7)]);
var inst_26544 = cljs.core.chunk_first.call(null,inst_26540);
var inst_26545 = cljs.core.chunk_rest.call(null,inst_26540);
var inst_26546 = cljs.core.count.call(null,inst_26544);
var inst_26520 = inst_26545;
var inst_26521 = inst_26544;
var inst_26522 = inst_26546;
var inst_26523 = (0);
var state_26639__$1 = (function (){var statearr_26694 = state_26639;
(statearr_26694[(13)] = inst_26521);

(statearr_26694[(14)] = inst_26522);

(statearr_26694[(16)] = inst_26520);

(statearr_26694[(17)] = inst_26523);

return statearr_26694;
})();
var statearr_26695_26762 = state_26639__$1;
(statearr_26695_26762[(2)] = null);

(statearr_26695_26762[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (11))){
var inst_26540 = (state_26639[(7)]);
var inst_26520 = (state_26639[(16)]);
var inst_26540__$1 = cljs.core.seq.call(null,inst_26520);
var state_26639__$1 = (function (){var statearr_26696 = state_26639;
(statearr_26696[(7)] = inst_26540__$1);

return statearr_26696;
})();
if(inst_26540__$1){
var statearr_26697_26763 = state_26639__$1;
(statearr_26697_26763[(1)] = (16));

} else {
var statearr_26698_26764 = state_26639__$1;
(statearr_26698_26764[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (9))){
var inst_26568 = (state_26639[(2)]);
var state_26639__$1 = state_26639;
var statearr_26699_26765 = state_26639__$1;
(statearr_26699_26765[(2)] = inst_26568);

(statearr_26699_26765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (5))){
var inst_26518 = cljs.core.deref.call(null,cs);
var inst_26519 = cljs.core.seq.call(null,inst_26518);
var inst_26520 = inst_26519;
var inst_26521 = null;
var inst_26522 = (0);
var inst_26523 = (0);
var state_26639__$1 = (function (){var statearr_26700 = state_26639;
(statearr_26700[(13)] = inst_26521);

(statearr_26700[(14)] = inst_26522);

(statearr_26700[(16)] = inst_26520);

(statearr_26700[(17)] = inst_26523);

return statearr_26700;
})();
var statearr_26701_26766 = state_26639__$1;
(statearr_26701_26766[(2)] = null);

(statearr_26701_26766[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (14))){
var state_26639__$1 = state_26639;
var statearr_26702_26767 = state_26639__$1;
(statearr_26702_26767[(2)] = null);

(statearr_26702_26767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (45))){
var inst_26629 = (state_26639[(2)]);
var state_26639__$1 = state_26639;
var statearr_26703_26768 = state_26639__$1;
(statearr_26703_26768[(2)] = inst_26629);

(statearr_26703_26768[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (26))){
var inst_26571 = (state_26639[(29)]);
var inst_26625 = (state_26639[(2)]);
var inst_26626 = cljs.core.seq.call(null,inst_26571);
var state_26639__$1 = (function (){var statearr_26704 = state_26639;
(statearr_26704[(31)] = inst_26625);

return statearr_26704;
})();
if(inst_26626){
var statearr_26705_26769 = state_26639__$1;
(statearr_26705_26769[(1)] = (42));

} else {
var statearr_26706_26770 = state_26639__$1;
(statearr_26706_26770[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (16))){
var inst_26540 = (state_26639[(7)]);
var inst_26542 = cljs.core.chunked_seq_QMARK_.call(null,inst_26540);
var state_26639__$1 = state_26639;
if(inst_26542){
var statearr_26707_26771 = state_26639__$1;
(statearr_26707_26771[(1)] = (19));

} else {
var statearr_26708_26772 = state_26639__$1;
(statearr_26708_26772[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (38))){
var inst_26618 = (state_26639[(2)]);
var state_26639__$1 = state_26639;
var statearr_26709_26773 = state_26639__$1;
(statearr_26709_26773[(2)] = inst_26618);

(statearr_26709_26773[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (30))){
var state_26639__$1 = state_26639;
var statearr_26710_26774 = state_26639__$1;
(statearr_26710_26774[(2)] = null);

(statearr_26710_26774[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (10))){
var inst_26521 = (state_26639[(13)]);
var inst_26523 = (state_26639[(17)]);
var inst_26529 = cljs.core._nth.call(null,inst_26521,inst_26523);
var inst_26530 = cljs.core.nth.call(null,inst_26529,(0),null);
var inst_26531 = cljs.core.nth.call(null,inst_26529,(1),null);
var state_26639__$1 = (function (){var statearr_26711 = state_26639;
(statearr_26711[(26)] = inst_26530);

return statearr_26711;
})();
if(cljs.core.truth_(inst_26531)){
var statearr_26712_26775 = state_26639__$1;
(statearr_26712_26775[(1)] = (13));

} else {
var statearr_26713_26776 = state_26639__$1;
(statearr_26713_26776[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (18))){
var inst_26564 = (state_26639[(2)]);
var state_26639__$1 = state_26639;
var statearr_26714_26777 = state_26639__$1;
(statearr_26714_26777[(2)] = inst_26564);

(statearr_26714_26777[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (42))){
var state_26639__$1 = state_26639;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26639__$1,(45),dchan);
} else {
if((state_val_26640 === (37))){
var inst_26607 = (state_26639[(23)]);
var inst_26511 = (state_26639[(10)]);
var inst_26598 = (state_26639[(25)]);
var inst_26607__$1 = cljs.core.first.call(null,inst_26598);
var inst_26608 = cljs.core.async.put_BANG_.call(null,inst_26607__$1,inst_26511,done);
var state_26639__$1 = (function (){var statearr_26715 = state_26639;
(statearr_26715[(23)] = inst_26607__$1);

return statearr_26715;
})();
if(cljs.core.truth_(inst_26608)){
var statearr_26716_26778 = state_26639__$1;
(statearr_26716_26778[(1)] = (39));

} else {
var statearr_26717_26779 = state_26639__$1;
(statearr_26717_26779[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26640 === (8))){
var inst_26522 = (state_26639[(14)]);
var inst_26523 = (state_26639[(17)]);
var inst_26525 = (inst_26523 < inst_26522);
var inst_26526 = inst_26525;
var state_26639__$1 = state_26639;
if(cljs.core.truth_(inst_26526)){
var statearr_26718_26780 = state_26639__$1;
(statearr_26718_26780[(1)] = (10));

} else {
var statearr_26719_26781 = state_26639__$1;
(statearr_26719_26781[(1)] = (11));

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
});})(c__18935__auto___26727,cs,m,dchan,dctr,done))
;
return ((function (switch__18914__auto__,c__18935__auto___26727,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18915__auto__ = null;
var cljs$core$async$mult_$_state_machine__18915__auto____0 = (function (){
var statearr_26723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26723[(0)] = cljs$core$async$mult_$_state_machine__18915__auto__);

(statearr_26723[(1)] = (1));

return statearr_26723;
});
var cljs$core$async$mult_$_state_machine__18915__auto____1 = (function (state_26639){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_26639);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e26724){if((e26724 instanceof Object)){
var ex__18918__auto__ = e26724;
var statearr_26725_26782 = state_26639;
(statearr_26725_26782[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26639);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26724;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26783 = state_26639;
state_26639 = G__26783;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18915__auto__ = function(state_26639){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18915__auto____1.call(this,state_26639);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18915__auto____0;
cljs$core$async$mult_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18915__auto____1;
return cljs$core$async$mult_$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___26727,cs,m,dchan,dctr,done))
})();
var state__18937__auto__ = (function (){var statearr_26726 = f__18936__auto__.call(null);
(statearr_26726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___26727);

return statearr_26726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___26727,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args26784 = [];
var len__17877__auto___26787 = arguments.length;
var i__17878__auto___26788 = (0);
while(true){
if((i__17878__auto___26788 < len__17877__auto___26787)){
args26784.push((arguments[i__17878__auto___26788]));

var G__26789 = (i__17878__auto___26788 + (1));
i__17878__auto___26788 = G__26789;
continue;
} else {
}
break;
}

var G__26786 = args26784.length;
switch (G__26786) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26784.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,ch);
} else {
var m__17475__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,ch);
} else {
var m__17475__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m);
} else {
var m__17475__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,state_map);
} else {
var m__17475__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__17474__auto__ = (((m == null))?null:m);
var m__17475__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,m,mode);
} else {
var m__17475__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17884__auto__ = [];
var len__17877__auto___26801 = arguments.length;
var i__17878__auto___26802 = (0);
while(true){
if((i__17878__auto___26802 < len__17877__auto___26801)){
args__17884__auto__.push((arguments[i__17878__auto___26802]));

var G__26803 = (i__17878__auto___26802 + (1));
i__17878__auto___26802 = G__26803;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((3) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17885__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26795){
var map__26796 = p__26795;
var map__26796__$1 = ((((!((map__26796 == null)))?((((map__26796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26796):map__26796);
var opts = map__26796__$1;
var statearr_26798_26804 = state;
(statearr_26798_26804[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__26796,map__26796__$1,opts){
return (function (val){
var statearr_26799_26805 = state;
(statearr_26799_26805[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26796,map__26796__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_26800_26806 = state;
(statearr_26800_26806[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26791){
var G__26792 = cljs.core.first.call(null,seq26791);
var seq26791__$1 = cljs.core.next.call(null,seq26791);
var G__26793 = cljs.core.first.call(null,seq26791__$1);
var seq26791__$2 = cljs.core.next.call(null,seq26791__$1);
var G__26794 = cljs.core.first.call(null,seq26791__$2);
var seq26791__$3 = cljs.core.next.call(null,seq26791__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26792,G__26793,G__26794,seq26791__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async26970 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26970 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta26971){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta26971 = meta26971;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26970.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26972,meta26971__$1){
var self__ = this;
var _26972__$1 = this;
return (new cljs.core.async.t_cljs$core$async26970(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta26971__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26970.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26972){
var self__ = this;
var _26972__$1 = this;
return self__.meta26971;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26970.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async26970.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26970.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async26970.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26970.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26970.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26970.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26970.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26970.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta26971","meta26971",-414209342,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26970.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26970.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26970";

cljs.core.async.t_cljs$core$async26970.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async26970");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async26970 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26970(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26971){
return (new cljs.core.async.t_cljs$core$async26970(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta26971));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26970(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18935__auto___27133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___27133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___27133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27070){
var state_val_27071 = (state_27070[(1)]);
if((state_val_27071 === (7))){
var inst_26988 = (state_27070[(2)]);
var state_27070__$1 = state_27070;
var statearr_27072_27134 = state_27070__$1;
(statearr_27072_27134[(2)] = inst_26988);

(statearr_27072_27134[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (20))){
var inst_27000 = (state_27070[(7)]);
var state_27070__$1 = state_27070;
var statearr_27073_27135 = state_27070__$1;
(statearr_27073_27135[(2)] = inst_27000);

(statearr_27073_27135[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (27))){
var state_27070__$1 = state_27070;
var statearr_27074_27136 = state_27070__$1;
(statearr_27074_27136[(2)] = null);

(statearr_27074_27136[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (1))){
var inst_26976 = (state_27070[(8)]);
var inst_26976__$1 = calc_state.call(null);
var inst_26978 = (inst_26976__$1 == null);
var inst_26979 = cljs.core.not.call(null,inst_26978);
var state_27070__$1 = (function (){var statearr_27075 = state_27070;
(statearr_27075[(8)] = inst_26976__$1);

return statearr_27075;
})();
if(inst_26979){
var statearr_27076_27137 = state_27070__$1;
(statearr_27076_27137[(1)] = (2));

} else {
var statearr_27077_27138 = state_27070__$1;
(statearr_27077_27138[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (24))){
var inst_27023 = (state_27070[(9)]);
var inst_27030 = (state_27070[(10)]);
var inst_27044 = (state_27070[(11)]);
var inst_27044__$1 = inst_27023.call(null,inst_27030);
var state_27070__$1 = (function (){var statearr_27078 = state_27070;
(statearr_27078[(11)] = inst_27044__$1);

return statearr_27078;
})();
if(cljs.core.truth_(inst_27044__$1)){
var statearr_27079_27139 = state_27070__$1;
(statearr_27079_27139[(1)] = (29));

} else {
var statearr_27080_27140 = state_27070__$1;
(statearr_27080_27140[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (4))){
var inst_26991 = (state_27070[(2)]);
var state_27070__$1 = state_27070;
if(cljs.core.truth_(inst_26991)){
var statearr_27081_27141 = state_27070__$1;
(statearr_27081_27141[(1)] = (8));

} else {
var statearr_27082_27142 = state_27070__$1;
(statearr_27082_27142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (15))){
var inst_27017 = (state_27070[(2)]);
var state_27070__$1 = state_27070;
if(cljs.core.truth_(inst_27017)){
var statearr_27083_27143 = state_27070__$1;
(statearr_27083_27143[(1)] = (19));

} else {
var statearr_27084_27144 = state_27070__$1;
(statearr_27084_27144[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (21))){
var inst_27022 = (state_27070[(12)]);
var inst_27022__$1 = (state_27070[(2)]);
var inst_27023 = cljs.core.get.call(null,inst_27022__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27024 = cljs.core.get.call(null,inst_27022__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27025 = cljs.core.get.call(null,inst_27022__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27070__$1 = (function (){var statearr_27085 = state_27070;
(statearr_27085[(9)] = inst_27023);

(statearr_27085[(13)] = inst_27024);

(statearr_27085[(12)] = inst_27022__$1);

return statearr_27085;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27070__$1,(22),inst_27025);
} else {
if((state_val_27071 === (31))){
var inst_27052 = (state_27070[(2)]);
var state_27070__$1 = state_27070;
if(cljs.core.truth_(inst_27052)){
var statearr_27086_27145 = state_27070__$1;
(statearr_27086_27145[(1)] = (32));

} else {
var statearr_27087_27146 = state_27070__$1;
(statearr_27087_27146[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (32))){
var inst_27029 = (state_27070[(14)]);
var state_27070__$1 = state_27070;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27070__$1,(35),out,inst_27029);
} else {
if((state_val_27071 === (33))){
var inst_27022 = (state_27070[(12)]);
var inst_27000 = inst_27022;
var state_27070__$1 = (function (){var statearr_27088 = state_27070;
(statearr_27088[(7)] = inst_27000);

return statearr_27088;
})();
var statearr_27089_27147 = state_27070__$1;
(statearr_27089_27147[(2)] = null);

(statearr_27089_27147[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (13))){
var inst_27000 = (state_27070[(7)]);
var inst_27007 = inst_27000.cljs$lang$protocol_mask$partition0$;
var inst_27008 = (inst_27007 & (64));
var inst_27009 = inst_27000.cljs$core$ISeq$;
var inst_27010 = (inst_27008) || (inst_27009);
var state_27070__$1 = state_27070;
if(cljs.core.truth_(inst_27010)){
var statearr_27090_27148 = state_27070__$1;
(statearr_27090_27148[(1)] = (16));

} else {
var statearr_27091_27149 = state_27070__$1;
(statearr_27091_27149[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (22))){
var inst_27030 = (state_27070[(10)]);
var inst_27029 = (state_27070[(14)]);
var inst_27028 = (state_27070[(2)]);
var inst_27029__$1 = cljs.core.nth.call(null,inst_27028,(0),null);
var inst_27030__$1 = cljs.core.nth.call(null,inst_27028,(1),null);
var inst_27031 = (inst_27029__$1 == null);
var inst_27032 = cljs.core._EQ_.call(null,inst_27030__$1,change);
var inst_27033 = (inst_27031) || (inst_27032);
var state_27070__$1 = (function (){var statearr_27092 = state_27070;
(statearr_27092[(10)] = inst_27030__$1);

(statearr_27092[(14)] = inst_27029__$1);

return statearr_27092;
})();
if(cljs.core.truth_(inst_27033)){
var statearr_27093_27150 = state_27070__$1;
(statearr_27093_27150[(1)] = (23));

} else {
var statearr_27094_27151 = state_27070__$1;
(statearr_27094_27151[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (36))){
var inst_27022 = (state_27070[(12)]);
var inst_27000 = inst_27022;
var state_27070__$1 = (function (){var statearr_27095 = state_27070;
(statearr_27095[(7)] = inst_27000);

return statearr_27095;
})();
var statearr_27096_27152 = state_27070__$1;
(statearr_27096_27152[(2)] = null);

(statearr_27096_27152[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (29))){
var inst_27044 = (state_27070[(11)]);
var state_27070__$1 = state_27070;
var statearr_27097_27153 = state_27070__$1;
(statearr_27097_27153[(2)] = inst_27044);

(statearr_27097_27153[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (6))){
var state_27070__$1 = state_27070;
var statearr_27098_27154 = state_27070__$1;
(statearr_27098_27154[(2)] = false);

(statearr_27098_27154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (28))){
var inst_27040 = (state_27070[(2)]);
var inst_27041 = calc_state.call(null);
var inst_27000 = inst_27041;
var state_27070__$1 = (function (){var statearr_27099 = state_27070;
(statearr_27099[(15)] = inst_27040);

(statearr_27099[(7)] = inst_27000);

return statearr_27099;
})();
var statearr_27100_27155 = state_27070__$1;
(statearr_27100_27155[(2)] = null);

(statearr_27100_27155[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (25))){
var inst_27066 = (state_27070[(2)]);
var state_27070__$1 = state_27070;
var statearr_27101_27156 = state_27070__$1;
(statearr_27101_27156[(2)] = inst_27066);

(statearr_27101_27156[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (34))){
var inst_27064 = (state_27070[(2)]);
var state_27070__$1 = state_27070;
var statearr_27102_27157 = state_27070__$1;
(statearr_27102_27157[(2)] = inst_27064);

(statearr_27102_27157[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (17))){
var state_27070__$1 = state_27070;
var statearr_27103_27158 = state_27070__$1;
(statearr_27103_27158[(2)] = false);

(statearr_27103_27158[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (3))){
var state_27070__$1 = state_27070;
var statearr_27104_27159 = state_27070__$1;
(statearr_27104_27159[(2)] = false);

(statearr_27104_27159[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (12))){
var inst_27068 = (state_27070[(2)]);
var state_27070__$1 = state_27070;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27070__$1,inst_27068);
} else {
if((state_val_27071 === (2))){
var inst_26976 = (state_27070[(8)]);
var inst_26981 = inst_26976.cljs$lang$protocol_mask$partition0$;
var inst_26982 = (inst_26981 & (64));
var inst_26983 = inst_26976.cljs$core$ISeq$;
var inst_26984 = (inst_26982) || (inst_26983);
var state_27070__$1 = state_27070;
if(cljs.core.truth_(inst_26984)){
var statearr_27105_27160 = state_27070__$1;
(statearr_27105_27160[(1)] = (5));

} else {
var statearr_27106_27161 = state_27070__$1;
(statearr_27106_27161[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (23))){
var inst_27029 = (state_27070[(14)]);
var inst_27035 = (inst_27029 == null);
var state_27070__$1 = state_27070;
if(cljs.core.truth_(inst_27035)){
var statearr_27107_27162 = state_27070__$1;
(statearr_27107_27162[(1)] = (26));

} else {
var statearr_27108_27163 = state_27070__$1;
(statearr_27108_27163[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (35))){
var inst_27055 = (state_27070[(2)]);
var state_27070__$1 = state_27070;
if(cljs.core.truth_(inst_27055)){
var statearr_27109_27164 = state_27070__$1;
(statearr_27109_27164[(1)] = (36));

} else {
var statearr_27110_27165 = state_27070__$1;
(statearr_27110_27165[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (19))){
var inst_27000 = (state_27070[(7)]);
var inst_27019 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27000);
var state_27070__$1 = state_27070;
var statearr_27111_27166 = state_27070__$1;
(statearr_27111_27166[(2)] = inst_27019);

(statearr_27111_27166[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (11))){
var inst_27000 = (state_27070[(7)]);
var inst_27004 = (inst_27000 == null);
var inst_27005 = cljs.core.not.call(null,inst_27004);
var state_27070__$1 = state_27070;
if(inst_27005){
var statearr_27112_27167 = state_27070__$1;
(statearr_27112_27167[(1)] = (13));

} else {
var statearr_27113_27168 = state_27070__$1;
(statearr_27113_27168[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (9))){
var inst_26976 = (state_27070[(8)]);
var state_27070__$1 = state_27070;
var statearr_27114_27169 = state_27070__$1;
(statearr_27114_27169[(2)] = inst_26976);

(statearr_27114_27169[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (5))){
var state_27070__$1 = state_27070;
var statearr_27115_27170 = state_27070__$1;
(statearr_27115_27170[(2)] = true);

(statearr_27115_27170[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (14))){
var state_27070__$1 = state_27070;
var statearr_27116_27171 = state_27070__$1;
(statearr_27116_27171[(2)] = false);

(statearr_27116_27171[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (26))){
var inst_27030 = (state_27070[(10)]);
var inst_27037 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27030);
var state_27070__$1 = state_27070;
var statearr_27117_27172 = state_27070__$1;
(statearr_27117_27172[(2)] = inst_27037);

(statearr_27117_27172[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (16))){
var state_27070__$1 = state_27070;
var statearr_27118_27173 = state_27070__$1;
(statearr_27118_27173[(2)] = true);

(statearr_27118_27173[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (38))){
var inst_27060 = (state_27070[(2)]);
var state_27070__$1 = state_27070;
var statearr_27119_27174 = state_27070__$1;
(statearr_27119_27174[(2)] = inst_27060);

(statearr_27119_27174[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (30))){
var inst_27023 = (state_27070[(9)]);
var inst_27030 = (state_27070[(10)]);
var inst_27024 = (state_27070[(13)]);
var inst_27047 = cljs.core.empty_QMARK_.call(null,inst_27023);
var inst_27048 = inst_27024.call(null,inst_27030);
var inst_27049 = cljs.core.not.call(null,inst_27048);
var inst_27050 = (inst_27047) && (inst_27049);
var state_27070__$1 = state_27070;
var statearr_27120_27175 = state_27070__$1;
(statearr_27120_27175[(2)] = inst_27050);

(statearr_27120_27175[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (10))){
var inst_26976 = (state_27070[(8)]);
var inst_26996 = (state_27070[(2)]);
var inst_26997 = cljs.core.get.call(null,inst_26996,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26998 = cljs.core.get.call(null,inst_26996,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26999 = cljs.core.get.call(null,inst_26996,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27000 = inst_26976;
var state_27070__$1 = (function (){var statearr_27121 = state_27070;
(statearr_27121[(16)] = inst_26998);

(statearr_27121[(17)] = inst_26997);

(statearr_27121[(18)] = inst_26999);

(statearr_27121[(7)] = inst_27000);

return statearr_27121;
})();
var statearr_27122_27176 = state_27070__$1;
(statearr_27122_27176[(2)] = null);

(statearr_27122_27176[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (18))){
var inst_27014 = (state_27070[(2)]);
var state_27070__$1 = state_27070;
var statearr_27123_27177 = state_27070__$1;
(statearr_27123_27177[(2)] = inst_27014);

(statearr_27123_27177[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (37))){
var state_27070__$1 = state_27070;
var statearr_27124_27178 = state_27070__$1;
(statearr_27124_27178[(2)] = null);

(statearr_27124_27178[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27071 === (8))){
var inst_26976 = (state_27070[(8)]);
var inst_26993 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26976);
var state_27070__$1 = state_27070;
var statearr_27125_27179 = state_27070__$1;
(statearr_27125_27179[(2)] = inst_26993);

(statearr_27125_27179[(1)] = (10));


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
});})(c__18935__auto___27133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18914__auto__,c__18935__auto___27133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18915__auto__ = null;
var cljs$core$async$mix_$_state_machine__18915__auto____0 = (function (){
var statearr_27129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27129[(0)] = cljs$core$async$mix_$_state_machine__18915__auto__);

(statearr_27129[(1)] = (1));

return statearr_27129;
});
var cljs$core$async$mix_$_state_machine__18915__auto____1 = (function (state_27070){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_27070);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e27130){if((e27130 instanceof Object)){
var ex__18918__auto__ = e27130;
var statearr_27131_27180 = state_27070;
(statearr_27131_27180[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27070);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27181 = state_27070;
state_27070 = G__27181;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18915__auto__ = function(state_27070){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18915__auto____1.call(this,state_27070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18915__auto____0;
cljs$core$async$mix_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18915__auto____1;
return cljs$core$async$mix_$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___27133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18937__auto__ = (function (){var statearr_27132 = f__18936__auto__.call(null);
(statearr_27132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___27133);

return statearr_27132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___27133,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__17474__auto__ = (((p == null))?null:p);
var m__17475__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17475__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__17474__auto__ = (((p == null))?null:p);
var m__17475__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,p,v,ch);
} else {
var m__17475__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args27182 = [];
var len__17877__auto___27185 = arguments.length;
var i__17878__auto___27186 = (0);
while(true){
if((i__17878__auto___27186 < len__17877__auto___27185)){
args27182.push((arguments[i__17878__auto___27186]));

var G__27187 = (i__17878__auto___27186 + (1));
i__17878__auto___27186 = G__27187;
continue;
} else {
}
break;
}

var G__27184 = args27182.length;
switch (G__27184) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27182.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17474__auto__ = (((p == null))?null:p);
var m__17475__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,p);
} else {
var m__17475__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__17474__auto__ = (((p == null))?null:p);
var m__17475__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17474__auto__)]);
if(!((m__17475__auto__ == null))){
return m__17475__auto__.call(null,p,v);
} else {
var m__17475__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17475__auto____$1 == null))){
return m__17475__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args27190 = [];
var len__17877__auto___27315 = arguments.length;
var i__17878__auto___27316 = (0);
while(true){
if((i__17878__auto___27316 < len__17877__auto___27315)){
args27190.push((arguments[i__17878__auto___27316]));

var G__27317 = (i__17878__auto___27316 + (1));
i__17878__auto___27316 = G__27317;
continue;
} else {
}
break;
}

var G__27192 = args27190.length;
switch (G__27192) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27190.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16819__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16819__auto__,mults){
return (function (p1__27189_SHARP_){
if(cljs.core.truth_(p1__27189_SHARP_.call(null,topic))){
return p1__27189_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27189_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16819__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27193 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27193 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27194){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27194 = meta27194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27195,meta27194__$1){
var self__ = this;
var _27195__$1 = this;
return (new cljs.core.async.t_cljs$core$async27193(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27194__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27193.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27195){
var self__ = this;
var _27195__$1 = this;
return self__.meta27194;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27193.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27193.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27193.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async27193.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27193.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27193.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27193.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27193.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27194","meta27194",321104739,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27193.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27193.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27193";

cljs.core.async.t_cljs$core$async27193.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async27193");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async27193 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27193(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27194){
return (new cljs.core.async.t_cljs$core$async27193(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27194));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27193(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18935__auto___27319 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___27319,mults,ensure_mult,p){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___27319,mults,ensure_mult,p){
return (function (state_27267){
var state_val_27268 = (state_27267[(1)]);
if((state_val_27268 === (7))){
var inst_27263 = (state_27267[(2)]);
var state_27267__$1 = state_27267;
var statearr_27269_27320 = state_27267__$1;
(statearr_27269_27320[(2)] = inst_27263);

(statearr_27269_27320[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (20))){
var state_27267__$1 = state_27267;
var statearr_27270_27321 = state_27267__$1;
(statearr_27270_27321[(2)] = null);

(statearr_27270_27321[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (1))){
var state_27267__$1 = state_27267;
var statearr_27271_27322 = state_27267__$1;
(statearr_27271_27322[(2)] = null);

(statearr_27271_27322[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (24))){
var inst_27246 = (state_27267[(7)]);
var inst_27255 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27246);
var state_27267__$1 = state_27267;
var statearr_27272_27323 = state_27267__$1;
(statearr_27272_27323[(2)] = inst_27255);

(statearr_27272_27323[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (4))){
var inst_27198 = (state_27267[(8)]);
var inst_27198__$1 = (state_27267[(2)]);
var inst_27199 = (inst_27198__$1 == null);
var state_27267__$1 = (function (){var statearr_27273 = state_27267;
(statearr_27273[(8)] = inst_27198__$1);

return statearr_27273;
})();
if(cljs.core.truth_(inst_27199)){
var statearr_27274_27324 = state_27267__$1;
(statearr_27274_27324[(1)] = (5));

} else {
var statearr_27275_27325 = state_27267__$1;
(statearr_27275_27325[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (15))){
var inst_27240 = (state_27267[(2)]);
var state_27267__$1 = state_27267;
var statearr_27276_27326 = state_27267__$1;
(statearr_27276_27326[(2)] = inst_27240);

(statearr_27276_27326[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (21))){
var inst_27260 = (state_27267[(2)]);
var state_27267__$1 = (function (){var statearr_27277 = state_27267;
(statearr_27277[(9)] = inst_27260);

return statearr_27277;
})();
var statearr_27278_27327 = state_27267__$1;
(statearr_27278_27327[(2)] = null);

(statearr_27278_27327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (13))){
var inst_27222 = (state_27267[(10)]);
var inst_27224 = cljs.core.chunked_seq_QMARK_.call(null,inst_27222);
var state_27267__$1 = state_27267;
if(inst_27224){
var statearr_27279_27328 = state_27267__$1;
(statearr_27279_27328[(1)] = (16));

} else {
var statearr_27280_27329 = state_27267__$1;
(statearr_27280_27329[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (22))){
var inst_27252 = (state_27267[(2)]);
var state_27267__$1 = state_27267;
if(cljs.core.truth_(inst_27252)){
var statearr_27281_27330 = state_27267__$1;
(statearr_27281_27330[(1)] = (23));

} else {
var statearr_27282_27331 = state_27267__$1;
(statearr_27282_27331[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (6))){
var inst_27248 = (state_27267[(11)]);
var inst_27198 = (state_27267[(8)]);
var inst_27246 = (state_27267[(7)]);
var inst_27246__$1 = topic_fn.call(null,inst_27198);
var inst_27247 = cljs.core.deref.call(null,mults);
var inst_27248__$1 = cljs.core.get.call(null,inst_27247,inst_27246__$1);
var state_27267__$1 = (function (){var statearr_27283 = state_27267;
(statearr_27283[(11)] = inst_27248__$1);

(statearr_27283[(7)] = inst_27246__$1);

return statearr_27283;
})();
if(cljs.core.truth_(inst_27248__$1)){
var statearr_27284_27332 = state_27267__$1;
(statearr_27284_27332[(1)] = (19));

} else {
var statearr_27285_27333 = state_27267__$1;
(statearr_27285_27333[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (25))){
var inst_27257 = (state_27267[(2)]);
var state_27267__$1 = state_27267;
var statearr_27286_27334 = state_27267__$1;
(statearr_27286_27334[(2)] = inst_27257);

(statearr_27286_27334[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (17))){
var inst_27222 = (state_27267[(10)]);
var inst_27231 = cljs.core.first.call(null,inst_27222);
var inst_27232 = cljs.core.async.muxch_STAR_.call(null,inst_27231);
var inst_27233 = cljs.core.async.close_BANG_.call(null,inst_27232);
var inst_27234 = cljs.core.next.call(null,inst_27222);
var inst_27208 = inst_27234;
var inst_27209 = null;
var inst_27210 = (0);
var inst_27211 = (0);
var state_27267__$1 = (function (){var statearr_27287 = state_27267;
(statearr_27287[(12)] = inst_27209);

(statearr_27287[(13)] = inst_27233);

(statearr_27287[(14)] = inst_27211);

(statearr_27287[(15)] = inst_27208);

(statearr_27287[(16)] = inst_27210);

return statearr_27287;
})();
var statearr_27288_27335 = state_27267__$1;
(statearr_27288_27335[(2)] = null);

(statearr_27288_27335[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (3))){
var inst_27265 = (state_27267[(2)]);
var state_27267__$1 = state_27267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27267__$1,inst_27265);
} else {
if((state_val_27268 === (12))){
var inst_27242 = (state_27267[(2)]);
var state_27267__$1 = state_27267;
var statearr_27289_27336 = state_27267__$1;
(statearr_27289_27336[(2)] = inst_27242);

(statearr_27289_27336[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (2))){
var state_27267__$1 = state_27267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27267__$1,(4),ch);
} else {
if((state_val_27268 === (23))){
var state_27267__$1 = state_27267;
var statearr_27290_27337 = state_27267__$1;
(statearr_27290_27337[(2)] = null);

(statearr_27290_27337[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (19))){
var inst_27248 = (state_27267[(11)]);
var inst_27198 = (state_27267[(8)]);
var inst_27250 = cljs.core.async.muxch_STAR_.call(null,inst_27248);
var state_27267__$1 = state_27267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27267__$1,(22),inst_27250,inst_27198);
} else {
if((state_val_27268 === (11))){
var inst_27222 = (state_27267[(10)]);
var inst_27208 = (state_27267[(15)]);
var inst_27222__$1 = cljs.core.seq.call(null,inst_27208);
var state_27267__$1 = (function (){var statearr_27291 = state_27267;
(statearr_27291[(10)] = inst_27222__$1);

return statearr_27291;
})();
if(inst_27222__$1){
var statearr_27292_27338 = state_27267__$1;
(statearr_27292_27338[(1)] = (13));

} else {
var statearr_27293_27339 = state_27267__$1;
(statearr_27293_27339[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (9))){
var inst_27244 = (state_27267[(2)]);
var state_27267__$1 = state_27267;
var statearr_27294_27340 = state_27267__$1;
(statearr_27294_27340[(2)] = inst_27244);

(statearr_27294_27340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (5))){
var inst_27205 = cljs.core.deref.call(null,mults);
var inst_27206 = cljs.core.vals.call(null,inst_27205);
var inst_27207 = cljs.core.seq.call(null,inst_27206);
var inst_27208 = inst_27207;
var inst_27209 = null;
var inst_27210 = (0);
var inst_27211 = (0);
var state_27267__$1 = (function (){var statearr_27295 = state_27267;
(statearr_27295[(12)] = inst_27209);

(statearr_27295[(14)] = inst_27211);

(statearr_27295[(15)] = inst_27208);

(statearr_27295[(16)] = inst_27210);

return statearr_27295;
})();
var statearr_27296_27341 = state_27267__$1;
(statearr_27296_27341[(2)] = null);

(statearr_27296_27341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (14))){
var state_27267__$1 = state_27267;
var statearr_27300_27342 = state_27267__$1;
(statearr_27300_27342[(2)] = null);

(statearr_27300_27342[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (16))){
var inst_27222 = (state_27267[(10)]);
var inst_27226 = cljs.core.chunk_first.call(null,inst_27222);
var inst_27227 = cljs.core.chunk_rest.call(null,inst_27222);
var inst_27228 = cljs.core.count.call(null,inst_27226);
var inst_27208 = inst_27227;
var inst_27209 = inst_27226;
var inst_27210 = inst_27228;
var inst_27211 = (0);
var state_27267__$1 = (function (){var statearr_27301 = state_27267;
(statearr_27301[(12)] = inst_27209);

(statearr_27301[(14)] = inst_27211);

(statearr_27301[(15)] = inst_27208);

(statearr_27301[(16)] = inst_27210);

return statearr_27301;
})();
var statearr_27302_27343 = state_27267__$1;
(statearr_27302_27343[(2)] = null);

(statearr_27302_27343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (10))){
var inst_27209 = (state_27267[(12)]);
var inst_27211 = (state_27267[(14)]);
var inst_27208 = (state_27267[(15)]);
var inst_27210 = (state_27267[(16)]);
var inst_27216 = cljs.core._nth.call(null,inst_27209,inst_27211);
var inst_27217 = cljs.core.async.muxch_STAR_.call(null,inst_27216);
var inst_27218 = cljs.core.async.close_BANG_.call(null,inst_27217);
var inst_27219 = (inst_27211 + (1));
var tmp27297 = inst_27209;
var tmp27298 = inst_27208;
var tmp27299 = inst_27210;
var inst_27208__$1 = tmp27298;
var inst_27209__$1 = tmp27297;
var inst_27210__$1 = tmp27299;
var inst_27211__$1 = inst_27219;
var state_27267__$1 = (function (){var statearr_27303 = state_27267;
(statearr_27303[(17)] = inst_27218);

(statearr_27303[(12)] = inst_27209__$1);

(statearr_27303[(14)] = inst_27211__$1);

(statearr_27303[(15)] = inst_27208__$1);

(statearr_27303[(16)] = inst_27210__$1);

return statearr_27303;
})();
var statearr_27304_27344 = state_27267__$1;
(statearr_27304_27344[(2)] = null);

(statearr_27304_27344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (18))){
var inst_27237 = (state_27267[(2)]);
var state_27267__$1 = state_27267;
var statearr_27305_27345 = state_27267__$1;
(statearr_27305_27345[(2)] = inst_27237);

(statearr_27305_27345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27268 === (8))){
var inst_27211 = (state_27267[(14)]);
var inst_27210 = (state_27267[(16)]);
var inst_27213 = (inst_27211 < inst_27210);
var inst_27214 = inst_27213;
var state_27267__$1 = state_27267;
if(cljs.core.truth_(inst_27214)){
var statearr_27306_27346 = state_27267__$1;
(statearr_27306_27346[(1)] = (10));

} else {
var statearr_27307_27347 = state_27267__$1;
(statearr_27307_27347[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__18935__auto___27319,mults,ensure_mult,p))
;
return ((function (switch__18914__auto__,c__18935__auto___27319,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18915__auto__ = null;
var cljs$core$async$state_machine__18915__auto____0 = (function (){
var statearr_27311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27311[(0)] = cljs$core$async$state_machine__18915__auto__);

(statearr_27311[(1)] = (1));

return statearr_27311;
});
var cljs$core$async$state_machine__18915__auto____1 = (function (state_27267){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_27267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e27312){if((e27312 instanceof Object)){
var ex__18918__auto__ = e27312;
var statearr_27313_27348 = state_27267;
(statearr_27313_27348[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27349 = state_27267;
state_27267 = G__27349;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$state_machine__18915__auto__ = function(state_27267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18915__auto____1.call(this,state_27267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18915__auto____0;
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18915__auto____1;
return cljs$core$async$state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___27319,mults,ensure_mult,p))
})();
var state__18937__auto__ = (function (){var statearr_27314 = f__18936__auto__.call(null);
(statearr_27314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___27319);

return statearr_27314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___27319,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args27350 = [];
var len__17877__auto___27353 = arguments.length;
var i__17878__auto___27354 = (0);
while(true){
if((i__17878__auto___27354 < len__17877__auto___27353)){
args27350.push((arguments[i__17878__auto___27354]));

var G__27355 = (i__17878__auto___27354 + (1));
i__17878__auto___27354 = G__27355;
continue;
} else {
}
break;
}

var G__27352 = args27350.length;
switch (G__27352) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27350.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args27357 = [];
var len__17877__auto___27360 = arguments.length;
var i__17878__auto___27361 = (0);
while(true){
if((i__17878__auto___27361 < len__17877__auto___27360)){
args27357.push((arguments[i__17878__auto___27361]));

var G__27362 = (i__17878__auto___27361 + (1));
i__17878__auto___27361 = G__27362;
continue;
} else {
}
break;
}

var G__27359 = args27357.length;
switch (G__27359) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27357.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args27364 = [];
var len__17877__auto___27435 = arguments.length;
var i__17878__auto___27436 = (0);
while(true){
if((i__17878__auto___27436 < len__17877__auto___27435)){
args27364.push((arguments[i__17878__auto___27436]));

var G__27437 = (i__17878__auto___27436 + (1));
i__17878__auto___27436 = G__27437;
continue;
} else {
}
break;
}

var G__27366 = args27364.length;
switch (G__27366) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27364.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__18935__auto___27439 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___27439,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___27439,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27405){
var state_val_27406 = (state_27405[(1)]);
if((state_val_27406 === (7))){
var state_27405__$1 = state_27405;
var statearr_27407_27440 = state_27405__$1;
(statearr_27407_27440[(2)] = null);

(statearr_27407_27440[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27406 === (1))){
var state_27405__$1 = state_27405;
var statearr_27408_27441 = state_27405__$1;
(statearr_27408_27441[(2)] = null);

(statearr_27408_27441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27406 === (4))){
var inst_27369 = (state_27405[(7)]);
var inst_27371 = (inst_27369 < cnt);
var state_27405__$1 = state_27405;
if(cljs.core.truth_(inst_27371)){
var statearr_27409_27442 = state_27405__$1;
(statearr_27409_27442[(1)] = (6));

} else {
var statearr_27410_27443 = state_27405__$1;
(statearr_27410_27443[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27406 === (15))){
var inst_27401 = (state_27405[(2)]);
var state_27405__$1 = state_27405;
var statearr_27411_27444 = state_27405__$1;
(statearr_27411_27444[(2)] = inst_27401);

(statearr_27411_27444[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27406 === (13))){
var inst_27394 = cljs.core.async.close_BANG_.call(null,out);
var state_27405__$1 = state_27405;
var statearr_27412_27445 = state_27405__$1;
(statearr_27412_27445[(2)] = inst_27394);

(statearr_27412_27445[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27406 === (6))){
var state_27405__$1 = state_27405;
var statearr_27413_27446 = state_27405__$1;
(statearr_27413_27446[(2)] = null);

(statearr_27413_27446[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27406 === (3))){
var inst_27403 = (state_27405[(2)]);
var state_27405__$1 = state_27405;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27405__$1,inst_27403);
} else {
if((state_val_27406 === (12))){
var inst_27391 = (state_27405[(8)]);
var inst_27391__$1 = (state_27405[(2)]);
var inst_27392 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27391__$1);
var state_27405__$1 = (function (){var statearr_27414 = state_27405;
(statearr_27414[(8)] = inst_27391__$1);

return statearr_27414;
})();
if(cljs.core.truth_(inst_27392)){
var statearr_27415_27447 = state_27405__$1;
(statearr_27415_27447[(1)] = (13));

} else {
var statearr_27416_27448 = state_27405__$1;
(statearr_27416_27448[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27406 === (2))){
var inst_27368 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27369 = (0);
var state_27405__$1 = (function (){var statearr_27417 = state_27405;
(statearr_27417[(9)] = inst_27368);

(statearr_27417[(7)] = inst_27369);

return statearr_27417;
})();
var statearr_27418_27449 = state_27405__$1;
(statearr_27418_27449[(2)] = null);

(statearr_27418_27449[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27406 === (11))){
var inst_27369 = (state_27405[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27405,(10),Object,null,(9));
var inst_27378 = chs__$1.call(null,inst_27369);
var inst_27379 = done.call(null,inst_27369);
var inst_27380 = cljs.core.async.take_BANG_.call(null,inst_27378,inst_27379);
var state_27405__$1 = state_27405;
var statearr_27419_27450 = state_27405__$1;
(statearr_27419_27450[(2)] = inst_27380);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27405__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27406 === (9))){
var inst_27369 = (state_27405[(7)]);
var inst_27382 = (state_27405[(2)]);
var inst_27383 = (inst_27369 + (1));
var inst_27369__$1 = inst_27383;
var state_27405__$1 = (function (){var statearr_27420 = state_27405;
(statearr_27420[(10)] = inst_27382);

(statearr_27420[(7)] = inst_27369__$1);

return statearr_27420;
})();
var statearr_27421_27451 = state_27405__$1;
(statearr_27421_27451[(2)] = null);

(statearr_27421_27451[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27406 === (5))){
var inst_27389 = (state_27405[(2)]);
var state_27405__$1 = (function (){var statearr_27422 = state_27405;
(statearr_27422[(11)] = inst_27389);

return statearr_27422;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27405__$1,(12),dchan);
} else {
if((state_val_27406 === (14))){
var inst_27391 = (state_27405[(8)]);
var inst_27396 = cljs.core.apply.call(null,f,inst_27391);
var state_27405__$1 = state_27405;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27405__$1,(16),out,inst_27396);
} else {
if((state_val_27406 === (16))){
var inst_27398 = (state_27405[(2)]);
var state_27405__$1 = (function (){var statearr_27423 = state_27405;
(statearr_27423[(12)] = inst_27398);

return statearr_27423;
})();
var statearr_27424_27452 = state_27405__$1;
(statearr_27424_27452[(2)] = null);

(statearr_27424_27452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27406 === (10))){
var inst_27373 = (state_27405[(2)]);
var inst_27374 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27405__$1 = (function (){var statearr_27425 = state_27405;
(statearr_27425[(13)] = inst_27373);

return statearr_27425;
})();
var statearr_27426_27453 = state_27405__$1;
(statearr_27426_27453[(2)] = inst_27374);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27405__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27406 === (8))){
var inst_27387 = (state_27405[(2)]);
var state_27405__$1 = state_27405;
var statearr_27427_27454 = state_27405__$1;
(statearr_27427_27454[(2)] = inst_27387);

(statearr_27427_27454[(1)] = (5));


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
});})(c__18935__auto___27439,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18914__auto__,c__18935__auto___27439,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18915__auto__ = null;
var cljs$core$async$state_machine__18915__auto____0 = (function (){
var statearr_27431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27431[(0)] = cljs$core$async$state_machine__18915__auto__);

(statearr_27431[(1)] = (1));

return statearr_27431;
});
var cljs$core$async$state_machine__18915__auto____1 = (function (state_27405){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_27405);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e27432){if((e27432 instanceof Object)){
var ex__18918__auto__ = e27432;
var statearr_27433_27455 = state_27405;
(statearr_27433_27455[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27405);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27432;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27456 = state_27405;
state_27405 = G__27456;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$state_machine__18915__auto__ = function(state_27405){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18915__auto____1.call(this,state_27405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18915__auto____0;
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18915__auto____1;
return cljs$core$async$state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___27439,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18937__auto__ = (function (){var statearr_27434 = f__18936__auto__.call(null);
(statearr_27434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___27439);

return statearr_27434;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___27439,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args27458 = [];
var len__17877__auto___27514 = arguments.length;
var i__17878__auto___27515 = (0);
while(true){
if((i__17878__auto___27515 < len__17877__auto___27514)){
args27458.push((arguments[i__17878__auto___27515]));

var G__27516 = (i__17878__auto___27515 + (1));
i__17878__auto___27515 = G__27516;
continue;
} else {
}
break;
}

var G__27460 = args27458.length;
switch (G__27460) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27458.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18935__auto___27518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___27518,out){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___27518,out){
return (function (state_27490){
var state_val_27491 = (state_27490[(1)]);
if((state_val_27491 === (7))){
var inst_27470 = (state_27490[(7)]);
var inst_27469 = (state_27490[(8)]);
var inst_27469__$1 = (state_27490[(2)]);
var inst_27470__$1 = cljs.core.nth.call(null,inst_27469__$1,(0),null);
var inst_27471 = cljs.core.nth.call(null,inst_27469__$1,(1),null);
var inst_27472 = (inst_27470__$1 == null);
var state_27490__$1 = (function (){var statearr_27492 = state_27490;
(statearr_27492[(9)] = inst_27471);

(statearr_27492[(7)] = inst_27470__$1);

(statearr_27492[(8)] = inst_27469__$1);

return statearr_27492;
})();
if(cljs.core.truth_(inst_27472)){
var statearr_27493_27519 = state_27490__$1;
(statearr_27493_27519[(1)] = (8));

} else {
var statearr_27494_27520 = state_27490__$1;
(statearr_27494_27520[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (1))){
var inst_27461 = cljs.core.vec.call(null,chs);
var inst_27462 = inst_27461;
var state_27490__$1 = (function (){var statearr_27495 = state_27490;
(statearr_27495[(10)] = inst_27462);

return statearr_27495;
})();
var statearr_27496_27521 = state_27490__$1;
(statearr_27496_27521[(2)] = null);

(statearr_27496_27521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (4))){
var inst_27462 = (state_27490[(10)]);
var state_27490__$1 = state_27490;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27490__$1,(7),inst_27462);
} else {
if((state_val_27491 === (6))){
var inst_27486 = (state_27490[(2)]);
var state_27490__$1 = state_27490;
var statearr_27497_27522 = state_27490__$1;
(statearr_27497_27522[(2)] = inst_27486);

(statearr_27497_27522[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (3))){
var inst_27488 = (state_27490[(2)]);
var state_27490__$1 = state_27490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27490__$1,inst_27488);
} else {
if((state_val_27491 === (2))){
var inst_27462 = (state_27490[(10)]);
var inst_27464 = cljs.core.count.call(null,inst_27462);
var inst_27465 = (inst_27464 > (0));
var state_27490__$1 = state_27490;
if(cljs.core.truth_(inst_27465)){
var statearr_27499_27523 = state_27490__$1;
(statearr_27499_27523[(1)] = (4));

} else {
var statearr_27500_27524 = state_27490__$1;
(statearr_27500_27524[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (11))){
var inst_27462 = (state_27490[(10)]);
var inst_27479 = (state_27490[(2)]);
var tmp27498 = inst_27462;
var inst_27462__$1 = tmp27498;
var state_27490__$1 = (function (){var statearr_27501 = state_27490;
(statearr_27501[(10)] = inst_27462__$1);

(statearr_27501[(11)] = inst_27479);

return statearr_27501;
})();
var statearr_27502_27525 = state_27490__$1;
(statearr_27502_27525[(2)] = null);

(statearr_27502_27525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (9))){
var inst_27470 = (state_27490[(7)]);
var state_27490__$1 = state_27490;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27490__$1,(11),out,inst_27470);
} else {
if((state_val_27491 === (5))){
var inst_27484 = cljs.core.async.close_BANG_.call(null,out);
var state_27490__$1 = state_27490;
var statearr_27503_27526 = state_27490__$1;
(statearr_27503_27526[(2)] = inst_27484);

(statearr_27503_27526[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (10))){
var inst_27482 = (state_27490[(2)]);
var state_27490__$1 = state_27490;
var statearr_27504_27527 = state_27490__$1;
(statearr_27504_27527[(2)] = inst_27482);

(statearr_27504_27527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27491 === (8))){
var inst_27471 = (state_27490[(9)]);
var inst_27462 = (state_27490[(10)]);
var inst_27470 = (state_27490[(7)]);
var inst_27469 = (state_27490[(8)]);
var inst_27474 = (function (){var cs = inst_27462;
var vec__27467 = inst_27469;
var v = inst_27470;
var c = inst_27471;
return ((function (cs,vec__27467,v,c,inst_27471,inst_27462,inst_27470,inst_27469,state_val_27491,c__18935__auto___27518,out){
return (function (p1__27457_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27457_SHARP_);
});
;})(cs,vec__27467,v,c,inst_27471,inst_27462,inst_27470,inst_27469,state_val_27491,c__18935__auto___27518,out))
})();
var inst_27475 = cljs.core.filterv.call(null,inst_27474,inst_27462);
var inst_27462__$1 = inst_27475;
var state_27490__$1 = (function (){var statearr_27505 = state_27490;
(statearr_27505[(10)] = inst_27462__$1);

return statearr_27505;
})();
var statearr_27506_27528 = state_27490__$1;
(statearr_27506_27528[(2)] = null);

(statearr_27506_27528[(1)] = (2));


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
});})(c__18935__auto___27518,out))
;
return ((function (switch__18914__auto__,c__18935__auto___27518,out){
return (function() {
var cljs$core$async$state_machine__18915__auto__ = null;
var cljs$core$async$state_machine__18915__auto____0 = (function (){
var statearr_27510 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27510[(0)] = cljs$core$async$state_machine__18915__auto__);

(statearr_27510[(1)] = (1));

return statearr_27510;
});
var cljs$core$async$state_machine__18915__auto____1 = (function (state_27490){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_27490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e27511){if((e27511 instanceof Object)){
var ex__18918__auto__ = e27511;
var statearr_27512_27529 = state_27490;
(statearr_27512_27529[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27530 = state_27490;
state_27490 = G__27530;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$state_machine__18915__auto__ = function(state_27490){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18915__auto____1.call(this,state_27490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18915__auto____0;
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18915__auto____1;
return cljs$core$async$state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___27518,out))
})();
var state__18937__auto__ = (function (){var statearr_27513 = f__18936__auto__.call(null);
(statearr_27513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___27518);

return statearr_27513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___27518,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args27531 = [];
var len__17877__auto___27580 = arguments.length;
var i__17878__auto___27581 = (0);
while(true){
if((i__17878__auto___27581 < len__17877__auto___27580)){
args27531.push((arguments[i__17878__auto___27581]));

var G__27582 = (i__17878__auto___27581 + (1));
i__17878__auto___27581 = G__27582;
continue;
} else {
}
break;
}

var G__27533 = args27531.length;
switch (G__27533) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27531.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18935__auto___27584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___27584,out){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___27584,out){
return (function (state_27557){
var state_val_27558 = (state_27557[(1)]);
if((state_val_27558 === (7))){
var inst_27539 = (state_27557[(7)]);
var inst_27539__$1 = (state_27557[(2)]);
var inst_27540 = (inst_27539__$1 == null);
var inst_27541 = cljs.core.not.call(null,inst_27540);
var state_27557__$1 = (function (){var statearr_27559 = state_27557;
(statearr_27559[(7)] = inst_27539__$1);

return statearr_27559;
})();
if(inst_27541){
var statearr_27560_27585 = state_27557__$1;
(statearr_27560_27585[(1)] = (8));

} else {
var statearr_27561_27586 = state_27557__$1;
(statearr_27561_27586[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (1))){
var inst_27534 = (0);
var state_27557__$1 = (function (){var statearr_27562 = state_27557;
(statearr_27562[(8)] = inst_27534);

return statearr_27562;
})();
var statearr_27563_27587 = state_27557__$1;
(statearr_27563_27587[(2)] = null);

(statearr_27563_27587[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (4))){
var state_27557__$1 = state_27557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27557__$1,(7),ch);
} else {
if((state_val_27558 === (6))){
var inst_27552 = (state_27557[(2)]);
var state_27557__$1 = state_27557;
var statearr_27564_27588 = state_27557__$1;
(statearr_27564_27588[(2)] = inst_27552);

(statearr_27564_27588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (3))){
var inst_27554 = (state_27557[(2)]);
var inst_27555 = cljs.core.async.close_BANG_.call(null,out);
var state_27557__$1 = (function (){var statearr_27565 = state_27557;
(statearr_27565[(9)] = inst_27554);

return statearr_27565;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27557__$1,inst_27555);
} else {
if((state_val_27558 === (2))){
var inst_27534 = (state_27557[(8)]);
var inst_27536 = (inst_27534 < n);
var state_27557__$1 = state_27557;
if(cljs.core.truth_(inst_27536)){
var statearr_27566_27589 = state_27557__$1;
(statearr_27566_27589[(1)] = (4));

} else {
var statearr_27567_27590 = state_27557__$1;
(statearr_27567_27590[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (11))){
var inst_27534 = (state_27557[(8)]);
var inst_27544 = (state_27557[(2)]);
var inst_27545 = (inst_27534 + (1));
var inst_27534__$1 = inst_27545;
var state_27557__$1 = (function (){var statearr_27568 = state_27557;
(statearr_27568[(10)] = inst_27544);

(statearr_27568[(8)] = inst_27534__$1);

return statearr_27568;
})();
var statearr_27569_27591 = state_27557__$1;
(statearr_27569_27591[(2)] = null);

(statearr_27569_27591[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (9))){
var state_27557__$1 = state_27557;
var statearr_27570_27592 = state_27557__$1;
(statearr_27570_27592[(2)] = null);

(statearr_27570_27592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (5))){
var state_27557__$1 = state_27557;
var statearr_27571_27593 = state_27557__$1;
(statearr_27571_27593[(2)] = null);

(statearr_27571_27593[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (10))){
var inst_27549 = (state_27557[(2)]);
var state_27557__$1 = state_27557;
var statearr_27572_27594 = state_27557__$1;
(statearr_27572_27594[(2)] = inst_27549);

(statearr_27572_27594[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27558 === (8))){
var inst_27539 = (state_27557[(7)]);
var state_27557__$1 = state_27557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27557__$1,(11),out,inst_27539);
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
});})(c__18935__auto___27584,out))
;
return ((function (switch__18914__auto__,c__18935__auto___27584,out){
return (function() {
var cljs$core$async$state_machine__18915__auto__ = null;
var cljs$core$async$state_machine__18915__auto____0 = (function (){
var statearr_27576 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27576[(0)] = cljs$core$async$state_machine__18915__auto__);

(statearr_27576[(1)] = (1));

return statearr_27576;
});
var cljs$core$async$state_machine__18915__auto____1 = (function (state_27557){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_27557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e27577){if((e27577 instanceof Object)){
var ex__18918__auto__ = e27577;
var statearr_27578_27595 = state_27557;
(statearr_27578_27595[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27577;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27596 = state_27557;
state_27557 = G__27596;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$state_machine__18915__auto__ = function(state_27557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18915__auto____1.call(this,state_27557);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18915__auto____0;
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18915__auto____1;
return cljs$core$async$state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___27584,out))
})();
var state__18937__auto__ = (function (){var statearr_27579 = f__18936__auto__.call(null);
(statearr_27579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___27584);

return statearr_27579;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___27584,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27604 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27604 = (function (map_LT_,f,ch,meta27605){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27605 = meta27605;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27606,meta27605__$1){
var self__ = this;
var _27606__$1 = this;
return (new cljs.core.async.t_cljs$core$async27604(self__.map_LT_,self__.f,self__.ch,meta27605__$1));
});

cljs.core.async.t_cljs$core$async27604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27606){
var self__ = this;
var _27606__$1 = this;
return self__.meta27605;
});

cljs.core.async.t_cljs$core$async27604.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27604.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27604.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27604.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27604.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27607 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27607 = (function (map_LT_,f,ch,meta27605,_,fn1,meta27608){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta27605 = meta27605;
this._ = _;
this.fn1 = fn1;
this.meta27608 = meta27608;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27607.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27609,meta27608__$1){
var self__ = this;
var _27609__$1 = this;
return (new cljs.core.async.t_cljs$core$async27607(self__.map_LT_,self__.f,self__.ch,self__.meta27605,self__._,self__.fn1,meta27608__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27607.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27609){
var self__ = this;
var _27609__$1 = this;
return self__.meta27608;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27607.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async27607.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27607.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27607.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27597_SHARP_){
return f1.call(null,(((p1__27597_SHARP_ == null))?null:self__.f.call(null,p1__27597_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27607.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27605","meta27605",-1442063931,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27604","cljs.core.async/t_cljs$core$async27604",456239946,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27608","meta27608",1096295181,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27607.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27607.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27607";

cljs.core.async.t_cljs$core$async27607.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async27607");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async27607 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27607(map_LT___$1,f__$1,ch__$1,meta27605__$1,___$2,fn1__$1,meta27608){
return (new cljs.core.async.t_cljs$core$async27607(map_LT___$1,f__$1,ch__$1,meta27605__$1,___$2,fn1__$1,meta27608));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27607(self__.map_LT_,self__.f,self__.ch,self__.meta27605,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16807__auto__ = ret;
if(cljs.core.truth_(and__16807__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16807__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async27604.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27604.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27604.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27605","meta27605",-1442063931,null)], null);
});

cljs.core.async.t_cljs$core$async27604.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27604.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27604";

cljs.core.async.t_cljs$core$async27604.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async27604");
});

cljs.core.async.__GT_t_cljs$core$async27604 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27604(map_LT___$1,f__$1,ch__$1,meta27605){
return (new cljs.core.async.t_cljs$core$async27604(map_LT___$1,f__$1,ch__$1,meta27605));
});

}

return (new cljs.core.async.t_cljs$core$async27604(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27613 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27613 = (function (map_GT_,f,ch,meta27614){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta27614 = meta27614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27615,meta27614__$1){
var self__ = this;
var _27615__$1 = this;
return (new cljs.core.async.t_cljs$core$async27613(self__.map_GT_,self__.f,self__.ch,meta27614__$1));
});

cljs.core.async.t_cljs$core$async27613.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27615){
var self__ = this;
var _27615__$1 = this;
return self__.meta27614;
});

cljs.core.async.t_cljs$core$async27613.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27613.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27613.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27613.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27613.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27613.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27613.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27614","meta27614",-476269838,null)], null);
});

cljs.core.async.t_cljs$core$async27613.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27613";

cljs.core.async.t_cljs$core$async27613.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async27613");
});

cljs.core.async.__GT_t_cljs$core$async27613 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27613(map_GT___$1,f__$1,ch__$1,meta27614){
return (new cljs.core.async.t_cljs$core$async27613(map_GT___$1,f__$1,ch__$1,meta27614));
});

}

return (new cljs.core.async.t_cljs$core$async27613(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27619 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27619 = (function (filter_GT_,p,ch,meta27620){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta27620 = meta27620;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27621,meta27620__$1){
var self__ = this;
var _27621__$1 = this;
return (new cljs.core.async.t_cljs$core$async27619(self__.filter_GT_,self__.p,self__.ch,meta27620__$1));
});

cljs.core.async.t_cljs$core$async27619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27621){
var self__ = this;
var _27621__$1 = this;
return self__.meta27620;
});

cljs.core.async.t_cljs$core$async27619.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async27619.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27619.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27619.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async27619.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27619.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async27619.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27619.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27620","meta27620",1323470441,null)], null);
});

cljs.core.async.t_cljs$core$async27619.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27619.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27619";

cljs.core.async.t_cljs$core$async27619.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async27619");
});

cljs.core.async.__GT_t_cljs$core$async27619 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27619(filter_GT___$1,p__$1,ch__$1,meta27620){
return (new cljs.core.async.t_cljs$core$async27619(filter_GT___$1,p__$1,ch__$1,meta27620));
});

}

return (new cljs.core.async.t_cljs$core$async27619(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args27622 = [];
var len__17877__auto___27666 = arguments.length;
var i__17878__auto___27667 = (0);
while(true){
if((i__17878__auto___27667 < len__17877__auto___27666)){
args27622.push((arguments[i__17878__auto___27667]));

var G__27668 = (i__17878__auto___27667 + (1));
i__17878__auto___27667 = G__27668;
continue;
} else {
}
break;
}

var G__27624 = args27622.length;
switch (G__27624) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27622.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18935__auto___27670 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___27670,out){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___27670,out){
return (function (state_27645){
var state_val_27646 = (state_27645[(1)]);
if((state_val_27646 === (7))){
var inst_27641 = (state_27645[(2)]);
var state_27645__$1 = state_27645;
var statearr_27647_27671 = state_27645__$1;
(statearr_27647_27671[(2)] = inst_27641);

(statearr_27647_27671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (1))){
var state_27645__$1 = state_27645;
var statearr_27648_27672 = state_27645__$1;
(statearr_27648_27672[(2)] = null);

(statearr_27648_27672[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (4))){
var inst_27627 = (state_27645[(7)]);
var inst_27627__$1 = (state_27645[(2)]);
var inst_27628 = (inst_27627__$1 == null);
var state_27645__$1 = (function (){var statearr_27649 = state_27645;
(statearr_27649[(7)] = inst_27627__$1);

return statearr_27649;
})();
if(cljs.core.truth_(inst_27628)){
var statearr_27650_27673 = state_27645__$1;
(statearr_27650_27673[(1)] = (5));

} else {
var statearr_27651_27674 = state_27645__$1;
(statearr_27651_27674[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (6))){
var inst_27627 = (state_27645[(7)]);
var inst_27632 = p.call(null,inst_27627);
var state_27645__$1 = state_27645;
if(cljs.core.truth_(inst_27632)){
var statearr_27652_27675 = state_27645__$1;
(statearr_27652_27675[(1)] = (8));

} else {
var statearr_27653_27676 = state_27645__$1;
(statearr_27653_27676[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (3))){
var inst_27643 = (state_27645[(2)]);
var state_27645__$1 = state_27645;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27645__$1,inst_27643);
} else {
if((state_val_27646 === (2))){
var state_27645__$1 = state_27645;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27645__$1,(4),ch);
} else {
if((state_val_27646 === (11))){
var inst_27635 = (state_27645[(2)]);
var state_27645__$1 = state_27645;
var statearr_27654_27677 = state_27645__$1;
(statearr_27654_27677[(2)] = inst_27635);

(statearr_27654_27677[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (9))){
var state_27645__$1 = state_27645;
var statearr_27655_27678 = state_27645__$1;
(statearr_27655_27678[(2)] = null);

(statearr_27655_27678[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (5))){
var inst_27630 = cljs.core.async.close_BANG_.call(null,out);
var state_27645__$1 = state_27645;
var statearr_27656_27679 = state_27645__$1;
(statearr_27656_27679[(2)] = inst_27630);

(statearr_27656_27679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (10))){
var inst_27638 = (state_27645[(2)]);
var state_27645__$1 = (function (){var statearr_27657 = state_27645;
(statearr_27657[(8)] = inst_27638);

return statearr_27657;
})();
var statearr_27658_27680 = state_27645__$1;
(statearr_27658_27680[(2)] = null);

(statearr_27658_27680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27646 === (8))){
var inst_27627 = (state_27645[(7)]);
var state_27645__$1 = state_27645;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27645__$1,(11),out,inst_27627);
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
});})(c__18935__auto___27670,out))
;
return ((function (switch__18914__auto__,c__18935__auto___27670,out){
return (function() {
var cljs$core$async$state_machine__18915__auto__ = null;
var cljs$core$async$state_machine__18915__auto____0 = (function (){
var statearr_27662 = [null,null,null,null,null,null,null,null,null];
(statearr_27662[(0)] = cljs$core$async$state_machine__18915__auto__);

(statearr_27662[(1)] = (1));

return statearr_27662;
});
var cljs$core$async$state_machine__18915__auto____1 = (function (state_27645){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_27645);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e27663){if((e27663 instanceof Object)){
var ex__18918__auto__ = e27663;
var statearr_27664_27681 = state_27645;
(statearr_27664_27681[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27645);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27663;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27682 = state_27645;
state_27645 = G__27682;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$state_machine__18915__auto__ = function(state_27645){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18915__auto____1.call(this,state_27645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18915__auto____0;
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18915__auto____1;
return cljs$core$async$state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___27670,out))
})();
var state__18937__auto__ = (function (){var statearr_27665 = f__18936__auto__.call(null);
(statearr_27665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___27670);

return statearr_27665;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___27670,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args27683 = [];
var len__17877__auto___27686 = arguments.length;
var i__17878__auto___27687 = (0);
while(true){
if((i__17878__auto___27687 < len__17877__auto___27686)){
args27683.push((arguments[i__17878__auto___27687]));

var G__27688 = (i__17878__auto___27687 + (1));
i__17878__auto___27687 = G__27688;
continue;
} else {
}
break;
}

var G__27685 = args27683.length;
switch (G__27685) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27683.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__18935__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto__){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto__){
return (function (state_27855){
var state_val_27856 = (state_27855[(1)]);
if((state_val_27856 === (7))){
var inst_27851 = (state_27855[(2)]);
var state_27855__$1 = state_27855;
var statearr_27857_27898 = state_27855__$1;
(statearr_27857_27898[(2)] = inst_27851);

(statearr_27857_27898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (20))){
var inst_27821 = (state_27855[(7)]);
var inst_27832 = (state_27855[(2)]);
var inst_27833 = cljs.core.next.call(null,inst_27821);
var inst_27807 = inst_27833;
var inst_27808 = null;
var inst_27809 = (0);
var inst_27810 = (0);
var state_27855__$1 = (function (){var statearr_27858 = state_27855;
(statearr_27858[(8)] = inst_27810);

(statearr_27858[(9)] = inst_27832);

(statearr_27858[(10)] = inst_27807);

(statearr_27858[(11)] = inst_27809);

(statearr_27858[(12)] = inst_27808);

return statearr_27858;
})();
var statearr_27859_27899 = state_27855__$1;
(statearr_27859_27899[(2)] = null);

(statearr_27859_27899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (1))){
var state_27855__$1 = state_27855;
var statearr_27860_27900 = state_27855__$1;
(statearr_27860_27900[(2)] = null);

(statearr_27860_27900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (4))){
var inst_27796 = (state_27855[(13)]);
var inst_27796__$1 = (state_27855[(2)]);
var inst_27797 = (inst_27796__$1 == null);
var state_27855__$1 = (function (){var statearr_27861 = state_27855;
(statearr_27861[(13)] = inst_27796__$1);

return statearr_27861;
})();
if(cljs.core.truth_(inst_27797)){
var statearr_27862_27901 = state_27855__$1;
(statearr_27862_27901[(1)] = (5));

} else {
var statearr_27863_27902 = state_27855__$1;
(statearr_27863_27902[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (15))){
var state_27855__$1 = state_27855;
var statearr_27867_27903 = state_27855__$1;
(statearr_27867_27903[(2)] = null);

(statearr_27867_27903[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (21))){
var state_27855__$1 = state_27855;
var statearr_27868_27904 = state_27855__$1;
(statearr_27868_27904[(2)] = null);

(statearr_27868_27904[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (13))){
var inst_27810 = (state_27855[(8)]);
var inst_27807 = (state_27855[(10)]);
var inst_27809 = (state_27855[(11)]);
var inst_27808 = (state_27855[(12)]);
var inst_27817 = (state_27855[(2)]);
var inst_27818 = (inst_27810 + (1));
var tmp27864 = inst_27807;
var tmp27865 = inst_27809;
var tmp27866 = inst_27808;
var inst_27807__$1 = tmp27864;
var inst_27808__$1 = tmp27866;
var inst_27809__$1 = tmp27865;
var inst_27810__$1 = inst_27818;
var state_27855__$1 = (function (){var statearr_27869 = state_27855;
(statearr_27869[(14)] = inst_27817);

(statearr_27869[(8)] = inst_27810__$1);

(statearr_27869[(10)] = inst_27807__$1);

(statearr_27869[(11)] = inst_27809__$1);

(statearr_27869[(12)] = inst_27808__$1);

return statearr_27869;
})();
var statearr_27870_27905 = state_27855__$1;
(statearr_27870_27905[(2)] = null);

(statearr_27870_27905[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (22))){
var state_27855__$1 = state_27855;
var statearr_27871_27906 = state_27855__$1;
(statearr_27871_27906[(2)] = null);

(statearr_27871_27906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (6))){
var inst_27796 = (state_27855[(13)]);
var inst_27805 = f.call(null,inst_27796);
var inst_27806 = cljs.core.seq.call(null,inst_27805);
var inst_27807 = inst_27806;
var inst_27808 = null;
var inst_27809 = (0);
var inst_27810 = (0);
var state_27855__$1 = (function (){var statearr_27872 = state_27855;
(statearr_27872[(8)] = inst_27810);

(statearr_27872[(10)] = inst_27807);

(statearr_27872[(11)] = inst_27809);

(statearr_27872[(12)] = inst_27808);

return statearr_27872;
})();
var statearr_27873_27907 = state_27855__$1;
(statearr_27873_27907[(2)] = null);

(statearr_27873_27907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (17))){
var inst_27821 = (state_27855[(7)]);
var inst_27825 = cljs.core.chunk_first.call(null,inst_27821);
var inst_27826 = cljs.core.chunk_rest.call(null,inst_27821);
var inst_27827 = cljs.core.count.call(null,inst_27825);
var inst_27807 = inst_27826;
var inst_27808 = inst_27825;
var inst_27809 = inst_27827;
var inst_27810 = (0);
var state_27855__$1 = (function (){var statearr_27874 = state_27855;
(statearr_27874[(8)] = inst_27810);

(statearr_27874[(10)] = inst_27807);

(statearr_27874[(11)] = inst_27809);

(statearr_27874[(12)] = inst_27808);

return statearr_27874;
})();
var statearr_27875_27908 = state_27855__$1;
(statearr_27875_27908[(2)] = null);

(statearr_27875_27908[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (3))){
var inst_27853 = (state_27855[(2)]);
var state_27855__$1 = state_27855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27855__$1,inst_27853);
} else {
if((state_val_27856 === (12))){
var inst_27841 = (state_27855[(2)]);
var state_27855__$1 = state_27855;
var statearr_27876_27909 = state_27855__$1;
(statearr_27876_27909[(2)] = inst_27841);

(statearr_27876_27909[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (2))){
var state_27855__$1 = state_27855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27855__$1,(4),in$);
} else {
if((state_val_27856 === (23))){
var inst_27849 = (state_27855[(2)]);
var state_27855__$1 = state_27855;
var statearr_27877_27910 = state_27855__$1;
(statearr_27877_27910[(2)] = inst_27849);

(statearr_27877_27910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (19))){
var inst_27836 = (state_27855[(2)]);
var state_27855__$1 = state_27855;
var statearr_27878_27911 = state_27855__$1;
(statearr_27878_27911[(2)] = inst_27836);

(statearr_27878_27911[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (11))){
var inst_27821 = (state_27855[(7)]);
var inst_27807 = (state_27855[(10)]);
var inst_27821__$1 = cljs.core.seq.call(null,inst_27807);
var state_27855__$1 = (function (){var statearr_27879 = state_27855;
(statearr_27879[(7)] = inst_27821__$1);

return statearr_27879;
})();
if(inst_27821__$1){
var statearr_27880_27912 = state_27855__$1;
(statearr_27880_27912[(1)] = (14));

} else {
var statearr_27881_27913 = state_27855__$1;
(statearr_27881_27913[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (9))){
var inst_27843 = (state_27855[(2)]);
var inst_27844 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27855__$1 = (function (){var statearr_27882 = state_27855;
(statearr_27882[(15)] = inst_27843);

return statearr_27882;
})();
if(cljs.core.truth_(inst_27844)){
var statearr_27883_27914 = state_27855__$1;
(statearr_27883_27914[(1)] = (21));

} else {
var statearr_27884_27915 = state_27855__$1;
(statearr_27884_27915[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (5))){
var inst_27799 = cljs.core.async.close_BANG_.call(null,out);
var state_27855__$1 = state_27855;
var statearr_27885_27916 = state_27855__$1;
(statearr_27885_27916[(2)] = inst_27799);

(statearr_27885_27916[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (14))){
var inst_27821 = (state_27855[(7)]);
var inst_27823 = cljs.core.chunked_seq_QMARK_.call(null,inst_27821);
var state_27855__$1 = state_27855;
if(inst_27823){
var statearr_27886_27917 = state_27855__$1;
(statearr_27886_27917[(1)] = (17));

} else {
var statearr_27887_27918 = state_27855__$1;
(statearr_27887_27918[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (16))){
var inst_27839 = (state_27855[(2)]);
var state_27855__$1 = state_27855;
var statearr_27888_27919 = state_27855__$1;
(statearr_27888_27919[(2)] = inst_27839);

(statearr_27888_27919[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27856 === (10))){
var inst_27810 = (state_27855[(8)]);
var inst_27808 = (state_27855[(12)]);
var inst_27815 = cljs.core._nth.call(null,inst_27808,inst_27810);
var state_27855__$1 = state_27855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27855__$1,(13),out,inst_27815);
} else {
if((state_val_27856 === (18))){
var inst_27821 = (state_27855[(7)]);
var inst_27830 = cljs.core.first.call(null,inst_27821);
var state_27855__$1 = state_27855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27855__$1,(20),out,inst_27830);
} else {
if((state_val_27856 === (8))){
var inst_27810 = (state_27855[(8)]);
var inst_27809 = (state_27855[(11)]);
var inst_27812 = (inst_27810 < inst_27809);
var inst_27813 = inst_27812;
var state_27855__$1 = state_27855;
if(cljs.core.truth_(inst_27813)){
var statearr_27889_27920 = state_27855__$1;
(statearr_27889_27920[(1)] = (10));

} else {
var statearr_27890_27921 = state_27855__$1;
(statearr_27890_27921[(1)] = (11));

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
}
}
}
}
}
}
});})(c__18935__auto__))
;
return ((function (switch__18914__auto__,c__18935__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__18915__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__18915__auto____0 = (function (){
var statearr_27894 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27894[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18915__auto__);

(statearr_27894[(1)] = (1));

return statearr_27894;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18915__auto____1 = (function (state_27855){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_27855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e27895){if((e27895 instanceof Object)){
var ex__18918__auto__ = e27895;
var statearr_27896_27922 = state_27855;
(statearr_27896_27922[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27923 = state_27855;
state_27855 = G__27923;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18915__auto__ = function(state_27855){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18915__auto____1.call(this,state_27855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18915__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18915__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto__))
})();
var state__18937__auto__ = (function (){var statearr_27897 = f__18936__auto__.call(null);
(statearr_27897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto__);

return statearr_27897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto__))
);

return c__18935__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args27924 = [];
var len__17877__auto___27927 = arguments.length;
var i__17878__auto___27928 = (0);
while(true){
if((i__17878__auto___27928 < len__17877__auto___27927)){
args27924.push((arguments[i__17878__auto___27928]));

var G__27929 = (i__17878__auto___27928 + (1));
i__17878__auto___27928 = G__27929;
continue;
} else {
}
break;
}

var G__27926 = args27924.length;
switch (G__27926) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27924.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args27931 = [];
var len__17877__auto___27934 = arguments.length;
var i__17878__auto___27935 = (0);
while(true){
if((i__17878__auto___27935 < len__17877__auto___27934)){
args27931.push((arguments[i__17878__auto___27935]));

var G__27936 = (i__17878__auto___27935 + (1));
i__17878__auto___27935 = G__27936;
continue;
} else {
}
break;
}

var G__27933 = args27931.length;
switch (G__27933) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27931.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args27938 = [];
var len__17877__auto___27989 = arguments.length;
var i__17878__auto___27990 = (0);
while(true){
if((i__17878__auto___27990 < len__17877__auto___27989)){
args27938.push((arguments[i__17878__auto___27990]));

var G__27991 = (i__17878__auto___27990 + (1));
i__17878__auto___27990 = G__27991;
continue;
} else {
}
break;
}

var G__27940 = args27938.length;
switch (G__27940) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27938.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18935__auto___27993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___27993,out){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___27993,out){
return (function (state_27964){
var state_val_27965 = (state_27964[(1)]);
if((state_val_27965 === (7))){
var inst_27959 = (state_27964[(2)]);
var state_27964__$1 = state_27964;
var statearr_27966_27994 = state_27964__$1;
(statearr_27966_27994[(2)] = inst_27959);

(statearr_27966_27994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27965 === (1))){
var inst_27941 = null;
var state_27964__$1 = (function (){var statearr_27967 = state_27964;
(statearr_27967[(7)] = inst_27941);

return statearr_27967;
})();
var statearr_27968_27995 = state_27964__$1;
(statearr_27968_27995[(2)] = null);

(statearr_27968_27995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27965 === (4))){
var inst_27944 = (state_27964[(8)]);
var inst_27944__$1 = (state_27964[(2)]);
var inst_27945 = (inst_27944__$1 == null);
var inst_27946 = cljs.core.not.call(null,inst_27945);
var state_27964__$1 = (function (){var statearr_27969 = state_27964;
(statearr_27969[(8)] = inst_27944__$1);

return statearr_27969;
})();
if(inst_27946){
var statearr_27970_27996 = state_27964__$1;
(statearr_27970_27996[(1)] = (5));

} else {
var statearr_27971_27997 = state_27964__$1;
(statearr_27971_27997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27965 === (6))){
var state_27964__$1 = state_27964;
var statearr_27972_27998 = state_27964__$1;
(statearr_27972_27998[(2)] = null);

(statearr_27972_27998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27965 === (3))){
var inst_27961 = (state_27964[(2)]);
var inst_27962 = cljs.core.async.close_BANG_.call(null,out);
var state_27964__$1 = (function (){var statearr_27973 = state_27964;
(statearr_27973[(9)] = inst_27961);

return statearr_27973;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27964__$1,inst_27962);
} else {
if((state_val_27965 === (2))){
var state_27964__$1 = state_27964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27964__$1,(4),ch);
} else {
if((state_val_27965 === (11))){
var inst_27944 = (state_27964[(8)]);
var inst_27953 = (state_27964[(2)]);
var inst_27941 = inst_27944;
var state_27964__$1 = (function (){var statearr_27974 = state_27964;
(statearr_27974[(7)] = inst_27941);

(statearr_27974[(10)] = inst_27953);

return statearr_27974;
})();
var statearr_27975_27999 = state_27964__$1;
(statearr_27975_27999[(2)] = null);

(statearr_27975_27999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27965 === (9))){
var inst_27944 = (state_27964[(8)]);
var state_27964__$1 = state_27964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27964__$1,(11),out,inst_27944);
} else {
if((state_val_27965 === (5))){
var inst_27944 = (state_27964[(8)]);
var inst_27941 = (state_27964[(7)]);
var inst_27948 = cljs.core._EQ_.call(null,inst_27944,inst_27941);
var state_27964__$1 = state_27964;
if(inst_27948){
var statearr_27977_28000 = state_27964__$1;
(statearr_27977_28000[(1)] = (8));

} else {
var statearr_27978_28001 = state_27964__$1;
(statearr_27978_28001[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27965 === (10))){
var inst_27956 = (state_27964[(2)]);
var state_27964__$1 = state_27964;
var statearr_27979_28002 = state_27964__$1;
(statearr_27979_28002[(2)] = inst_27956);

(statearr_27979_28002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27965 === (8))){
var inst_27941 = (state_27964[(7)]);
var tmp27976 = inst_27941;
var inst_27941__$1 = tmp27976;
var state_27964__$1 = (function (){var statearr_27980 = state_27964;
(statearr_27980[(7)] = inst_27941__$1);

return statearr_27980;
})();
var statearr_27981_28003 = state_27964__$1;
(statearr_27981_28003[(2)] = null);

(statearr_27981_28003[(1)] = (2));


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
});})(c__18935__auto___27993,out))
;
return ((function (switch__18914__auto__,c__18935__auto___27993,out){
return (function() {
var cljs$core$async$state_machine__18915__auto__ = null;
var cljs$core$async$state_machine__18915__auto____0 = (function (){
var statearr_27985 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27985[(0)] = cljs$core$async$state_machine__18915__auto__);

(statearr_27985[(1)] = (1));

return statearr_27985;
});
var cljs$core$async$state_machine__18915__auto____1 = (function (state_27964){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_27964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e27986){if((e27986 instanceof Object)){
var ex__18918__auto__ = e27986;
var statearr_27987_28004 = state_27964;
(statearr_27987_28004[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28005 = state_27964;
state_27964 = G__28005;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$state_machine__18915__auto__ = function(state_27964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18915__auto____1.call(this,state_27964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18915__auto____0;
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18915__auto____1;
return cljs$core$async$state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___27993,out))
})();
var state__18937__auto__ = (function (){var statearr_27988 = f__18936__auto__.call(null);
(statearr_27988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___27993);

return statearr_27988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___27993,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args28006 = [];
var len__17877__auto___28076 = arguments.length;
var i__17878__auto___28077 = (0);
while(true){
if((i__17878__auto___28077 < len__17877__auto___28076)){
args28006.push((arguments[i__17878__auto___28077]));

var G__28078 = (i__17878__auto___28077 + (1));
i__17878__auto___28077 = G__28078;
continue;
} else {
}
break;
}

var G__28008 = args28006.length;
switch (G__28008) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28006.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18935__auto___28080 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___28080,out){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___28080,out){
return (function (state_28046){
var state_val_28047 = (state_28046[(1)]);
if((state_val_28047 === (7))){
var inst_28042 = (state_28046[(2)]);
var state_28046__$1 = state_28046;
var statearr_28048_28081 = state_28046__$1;
(statearr_28048_28081[(2)] = inst_28042);

(statearr_28048_28081[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (1))){
var inst_28009 = (new Array(n));
var inst_28010 = inst_28009;
var inst_28011 = (0);
var state_28046__$1 = (function (){var statearr_28049 = state_28046;
(statearr_28049[(7)] = inst_28011);

(statearr_28049[(8)] = inst_28010);

return statearr_28049;
})();
var statearr_28050_28082 = state_28046__$1;
(statearr_28050_28082[(2)] = null);

(statearr_28050_28082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (4))){
var inst_28014 = (state_28046[(9)]);
var inst_28014__$1 = (state_28046[(2)]);
var inst_28015 = (inst_28014__$1 == null);
var inst_28016 = cljs.core.not.call(null,inst_28015);
var state_28046__$1 = (function (){var statearr_28051 = state_28046;
(statearr_28051[(9)] = inst_28014__$1);

return statearr_28051;
})();
if(inst_28016){
var statearr_28052_28083 = state_28046__$1;
(statearr_28052_28083[(1)] = (5));

} else {
var statearr_28053_28084 = state_28046__$1;
(statearr_28053_28084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (15))){
var inst_28036 = (state_28046[(2)]);
var state_28046__$1 = state_28046;
var statearr_28054_28085 = state_28046__$1;
(statearr_28054_28085[(2)] = inst_28036);

(statearr_28054_28085[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (13))){
var state_28046__$1 = state_28046;
var statearr_28055_28086 = state_28046__$1;
(statearr_28055_28086[(2)] = null);

(statearr_28055_28086[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (6))){
var inst_28011 = (state_28046[(7)]);
var inst_28032 = (inst_28011 > (0));
var state_28046__$1 = state_28046;
if(cljs.core.truth_(inst_28032)){
var statearr_28056_28087 = state_28046__$1;
(statearr_28056_28087[(1)] = (12));

} else {
var statearr_28057_28088 = state_28046__$1;
(statearr_28057_28088[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (3))){
var inst_28044 = (state_28046[(2)]);
var state_28046__$1 = state_28046;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28046__$1,inst_28044);
} else {
if((state_val_28047 === (12))){
var inst_28010 = (state_28046[(8)]);
var inst_28034 = cljs.core.vec.call(null,inst_28010);
var state_28046__$1 = state_28046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28046__$1,(15),out,inst_28034);
} else {
if((state_val_28047 === (2))){
var state_28046__$1 = state_28046;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28046__$1,(4),ch);
} else {
if((state_val_28047 === (11))){
var inst_28026 = (state_28046[(2)]);
var inst_28027 = (new Array(n));
var inst_28010 = inst_28027;
var inst_28011 = (0);
var state_28046__$1 = (function (){var statearr_28058 = state_28046;
(statearr_28058[(7)] = inst_28011);

(statearr_28058[(8)] = inst_28010);

(statearr_28058[(10)] = inst_28026);

return statearr_28058;
})();
var statearr_28059_28089 = state_28046__$1;
(statearr_28059_28089[(2)] = null);

(statearr_28059_28089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (9))){
var inst_28010 = (state_28046[(8)]);
var inst_28024 = cljs.core.vec.call(null,inst_28010);
var state_28046__$1 = state_28046;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28046__$1,(11),out,inst_28024);
} else {
if((state_val_28047 === (5))){
var inst_28019 = (state_28046[(11)]);
var inst_28011 = (state_28046[(7)]);
var inst_28010 = (state_28046[(8)]);
var inst_28014 = (state_28046[(9)]);
var inst_28018 = (inst_28010[inst_28011] = inst_28014);
var inst_28019__$1 = (inst_28011 + (1));
var inst_28020 = (inst_28019__$1 < n);
var state_28046__$1 = (function (){var statearr_28060 = state_28046;
(statearr_28060[(12)] = inst_28018);

(statearr_28060[(11)] = inst_28019__$1);

return statearr_28060;
})();
if(cljs.core.truth_(inst_28020)){
var statearr_28061_28090 = state_28046__$1;
(statearr_28061_28090[(1)] = (8));

} else {
var statearr_28062_28091 = state_28046__$1;
(statearr_28062_28091[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (14))){
var inst_28039 = (state_28046[(2)]);
var inst_28040 = cljs.core.async.close_BANG_.call(null,out);
var state_28046__$1 = (function (){var statearr_28064 = state_28046;
(statearr_28064[(13)] = inst_28039);

return statearr_28064;
})();
var statearr_28065_28092 = state_28046__$1;
(statearr_28065_28092[(2)] = inst_28040);

(statearr_28065_28092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (10))){
var inst_28030 = (state_28046[(2)]);
var state_28046__$1 = state_28046;
var statearr_28066_28093 = state_28046__$1;
(statearr_28066_28093[(2)] = inst_28030);

(statearr_28066_28093[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28047 === (8))){
var inst_28019 = (state_28046[(11)]);
var inst_28010 = (state_28046[(8)]);
var tmp28063 = inst_28010;
var inst_28010__$1 = tmp28063;
var inst_28011 = inst_28019;
var state_28046__$1 = (function (){var statearr_28067 = state_28046;
(statearr_28067[(7)] = inst_28011);

(statearr_28067[(8)] = inst_28010__$1);

return statearr_28067;
})();
var statearr_28068_28094 = state_28046__$1;
(statearr_28068_28094[(2)] = null);

(statearr_28068_28094[(1)] = (2));


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
});})(c__18935__auto___28080,out))
;
return ((function (switch__18914__auto__,c__18935__auto___28080,out){
return (function() {
var cljs$core$async$state_machine__18915__auto__ = null;
var cljs$core$async$state_machine__18915__auto____0 = (function (){
var statearr_28072 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28072[(0)] = cljs$core$async$state_machine__18915__auto__);

(statearr_28072[(1)] = (1));

return statearr_28072;
});
var cljs$core$async$state_machine__18915__auto____1 = (function (state_28046){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_28046);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e28073){if((e28073 instanceof Object)){
var ex__18918__auto__ = e28073;
var statearr_28074_28095 = state_28046;
(statearr_28074_28095[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28046);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28073;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28096 = state_28046;
state_28046 = G__28096;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$state_machine__18915__auto__ = function(state_28046){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18915__auto____1.call(this,state_28046);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18915__auto____0;
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18915__auto____1;
return cljs$core$async$state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___28080,out))
})();
var state__18937__auto__ = (function (){var statearr_28075 = f__18936__auto__.call(null);
(statearr_28075[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___28080);

return statearr_28075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___28080,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args28097 = [];
var len__17877__auto___28171 = arguments.length;
var i__17878__auto___28172 = (0);
while(true){
if((i__17878__auto___28172 < len__17877__auto___28171)){
args28097.push((arguments[i__17878__auto___28172]));

var G__28173 = (i__17878__auto___28172 + (1));
i__17878__auto___28172 = G__28173;
continue;
} else {
}
break;
}

var G__28099 = args28097.length;
switch (G__28099) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28097.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18935__auto___28175 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___28175,out){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___28175,out){
return (function (state_28141){
var state_val_28142 = (state_28141[(1)]);
if((state_val_28142 === (7))){
var inst_28137 = (state_28141[(2)]);
var state_28141__$1 = state_28141;
var statearr_28143_28176 = state_28141__$1;
(statearr_28143_28176[(2)] = inst_28137);

(statearr_28143_28176[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28142 === (1))){
var inst_28100 = [];
var inst_28101 = inst_28100;
var inst_28102 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_28141__$1 = (function (){var statearr_28144 = state_28141;
(statearr_28144[(7)] = inst_28102);

(statearr_28144[(8)] = inst_28101);

return statearr_28144;
})();
var statearr_28145_28177 = state_28141__$1;
(statearr_28145_28177[(2)] = null);

(statearr_28145_28177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28142 === (4))){
var inst_28105 = (state_28141[(9)]);
var inst_28105__$1 = (state_28141[(2)]);
var inst_28106 = (inst_28105__$1 == null);
var inst_28107 = cljs.core.not.call(null,inst_28106);
var state_28141__$1 = (function (){var statearr_28146 = state_28141;
(statearr_28146[(9)] = inst_28105__$1);

return statearr_28146;
})();
if(inst_28107){
var statearr_28147_28178 = state_28141__$1;
(statearr_28147_28178[(1)] = (5));

} else {
var statearr_28148_28179 = state_28141__$1;
(statearr_28148_28179[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28142 === (15))){
var inst_28131 = (state_28141[(2)]);
var state_28141__$1 = state_28141;
var statearr_28149_28180 = state_28141__$1;
(statearr_28149_28180[(2)] = inst_28131);

(statearr_28149_28180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28142 === (13))){
var state_28141__$1 = state_28141;
var statearr_28150_28181 = state_28141__$1;
(statearr_28150_28181[(2)] = null);

(statearr_28150_28181[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28142 === (6))){
var inst_28101 = (state_28141[(8)]);
var inst_28126 = inst_28101.length;
var inst_28127 = (inst_28126 > (0));
var state_28141__$1 = state_28141;
if(cljs.core.truth_(inst_28127)){
var statearr_28151_28182 = state_28141__$1;
(statearr_28151_28182[(1)] = (12));

} else {
var statearr_28152_28183 = state_28141__$1;
(statearr_28152_28183[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28142 === (3))){
var inst_28139 = (state_28141[(2)]);
var state_28141__$1 = state_28141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28141__$1,inst_28139);
} else {
if((state_val_28142 === (12))){
var inst_28101 = (state_28141[(8)]);
var inst_28129 = cljs.core.vec.call(null,inst_28101);
var state_28141__$1 = state_28141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28141__$1,(15),out,inst_28129);
} else {
if((state_val_28142 === (2))){
var state_28141__$1 = state_28141;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28141__$1,(4),ch);
} else {
if((state_val_28142 === (11))){
var inst_28109 = (state_28141[(10)]);
var inst_28105 = (state_28141[(9)]);
var inst_28119 = (state_28141[(2)]);
var inst_28120 = [];
var inst_28121 = inst_28120.push(inst_28105);
var inst_28101 = inst_28120;
var inst_28102 = inst_28109;
var state_28141__$1 = (function (){var statearr_28153 = state_28141;
(statearr_28153[(7)] = inst_28102);

(statearr_28153[(8)] = inst_28101);

(statearr_28153[(11)] = inst_28121);

(statearr_28153[(12)] = inst_28119);

return statearr_28153;
})();
var statearr_28154_28184 = state_28141__$1;
(statearr_28154_28184[(2)] = null);

(statearr_28154_28184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28142 === (9))){
var inst_28101 = (state_28141[(8)]);
var inst_28117 = cljs.core.vec.call(null,inst_28101);
var state_28141__$1 = state_28141;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28141__$1,(11),out,inst_28117);
} else {
if((state_val_28142 === (5))){
var inst_28102 = (state_28141[(7)]);
var inst_28109 = (state_28141[(10)]);
var inst_28105 = (state_28141[(9)]);
var inst_28109__$1 = f.call(null,inst_28105);
var inst_28110 = cljs.core._EQ_.call(null,inst_28109__$1,inst_28102);
var inst_28111 = cljs.core.keyword_identical_QMARK_.call(null,inst_28102,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_28112 = (inst_28110) || (inst_28111);
var state_28141__$1 = (function (){var statearr_28155 = state_28141;
(statearr_28155[(10)] = inst_28109__$1);

return statearr_28155;
})();
if(cljs.core.truth_(inst_28112)){
var statearr_28156_28185 = state_28141__$1;
(statearr_28156_28185[(1)] = (8));

} else {
var statearr_28157_28186 = state_28141__$1;
(statearr_28157_28186[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28142 === (14))){
var inst_28134 = (state_28141[(2)]);
var inst_28135 = cljs.core.async.close_BANG_.call(null,out);
var state_28141__$1 = (function (){var statearr_28159 = state_28141;
(statearr_28159[(13)] = inst_28134);

return statearr_28159;
})();
var statearr_28160_28187 = state_28141__$1;
(statearr_28160_28187[(2)] = inst_28135);

(statearr_28160_28187[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28142 === (10))){
var inst_28124 = (state_28141[(2)]);
var state_28141__$1 = state_28141;
var statearr_28161_28188 = state_28141__$1;
(statearr_28161_28188[(2)] = inst_28124);

(statearr_28161_28188[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28142 === (8))){
var inst_28101 = (state_28141[(8)]);
var inst_28109 = (state_28141[(10)]);
var inst_28105 = (state_28141[(9)]);
var inst_28114 = inst_28101.push(inst_28105);
var tmp28158 = inst_28101;
var inst_28101__$1 = tmp28158;
var inst_28102 = inst_28109;
var state_28141__$1 = (function (){var statearr_28162 = state_28141;
(statearr_28162[(7)] = inst_28102);

(statearr_28162[(8)] = inst_28101__$1);

(statearr_28162[(14)] = inst_28114);

return statearr_28162;
})();
var statearr_28163_28189 = state_28141__$1;
(statearr_28163_28189[(2)] = null);

(statearr_28163_28189[(1)] = (2));


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
});})(c__18935__auto___28175,out))
;
return ((function (switch__18914__auto__,c__18935__auto___28175,out){
return (function() {
var cljs$core$async$state_machine__18915__auto__ = null;
var cljs$core$async$state_machine__18915__auto____0 = (function (){
var statearr_28167 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28167[(0)] = cljs$core$async$state_machine__18915__auto__);

(statearr_28167[(1)] = (1));

return statearr_28167;
});
var cljs$core$async$state_machine__18915__auto____1 = (function (state_28141){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_28141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e28168){if((e28168 instanceof Object)){
var ex__18918__auto__ = e28168;
var statearr_28169_28190 = state_28141;
(statearr_28169_28190[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28168;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28191 = state_28141;
state_28141 = G__28191;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$state_machine__18915__auto__ = function(state_28141){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18915__auto____1.call(this,state_28141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18915__auto____0;
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18915__auto____1;
return cljs$core$async$state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___28175,out))
})();
var state__18937__auto__ = (function (){var statearr_28170 = f__18936__auto__.call(null);
(statearr_28170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___28175);

return statearr_28170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___28175,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1460338554706