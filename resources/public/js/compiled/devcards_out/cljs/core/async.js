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
var args21980 = [];
var len__17877__auto___21986 = arguments.length;
var i__17878__auto___21987 = (0);
while(true){
if((i__17878__auto___21987 < len__17877__auto___21986)){
args21980.push((arguments[i__17878__auto___21987]));

var G__21988 = (i__17878__auto___21987 + (1));
i__17878__auto___21987 = G__21988;
continue;
} else {
}
break;
}

var G__21982 = args21980.length;
switch (G__21982) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21980.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async21983 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async21983 = (function (f,blockable,meta21984){
this.f = f;
this.blockable = blockable;
this.meta21984 = meta21984;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async21983.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21985,meta21984__$1){
var self__ = this;
var _21985__$1 = this;
return (new cljs.core.async.t_cljs$core$async21983(self__.f,self__.blockable,meta21984__$1));
});

cljs.core.async.t_cljs$core$async21983.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21985){
var self__ = this;
var _21985__$1 = this;
return self__.meta21984;
});

cljs.core.async.t_cljs$core$async21983.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async21983.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async21983.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async21983.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async21983.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta21984","meta21984",-1962420149,null)], null);
});

cljs.core.async.t_cljs$core$async21983.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async21983.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async21983";

cljs.core.async.t_cljs$core$async21983.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async21983");
});

cljs.core.async.__GT_t_cljs$core$async21983 = (function cljs$core$async$__GT_t_cljs$core$async21983(f__$1,blockable__$1,meta21984){
return (new cljs.core.async.t_cljs$core$async21983(f__$1,blockable__$1,meta21984));
});

}

return (new cljs.core.async.t_cljs$core$async21983(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var args21992 = [];
var len__17877__auto___21995 = arguments.length;
var i__17878__auto___21996 = (0);
while(true){
if((i__17878__auto___21996 < len__17877__auto___21995)){
args21992.push((arguments[i__17878__auto___21996]));

var G__21997 = (i__17878__auto___21996 + (1));
i__17878__auto___21996 = G__21997;
continue;
} else {
}
break;
}

var G__21994 = args21992.length;
switch (G__21994) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21992.length)].join('')));

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
var args21999 = [];
var len__17877__auto___22002 = arguments.length;
var i__17878__auto___22003 = (0);
while(true){
if((i__17878__auto___22003 < len__17877__auto___22002)){
args21999.push((arguments[i__17878__auto___22003]));

var G__22004 = (i__17878__auto___22003 + (1));
i__17878__auto___22003 = G__22004;
continue;
} else {
}
break;
}

var G__22001 = args21999.length;
switch (G__22001) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args21999.length)].join('')));

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
var args22006 = [];
var len__17877__auto___22009 = arguments.length;
var i__17878__auto___22010 = (0);
while(true){
if((i__17878__auto___22010 < len__17877__auto___22009)){
args22006.push((arguments[i__17878__auto___22010]));

var G__22011 = (i__17878__auto___22010 + (1));
i__17878__auto___22010 = G__22011;
continue;
} else {
}
break;
}

var G__22008 = args22006.length;
switch (G__22008) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22006.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_22013 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_22013);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_22013,ret){
return (function (){
return fn1.call(null,val_22013);
});})(val_22013,ret))
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
var args22014 = [];
var len__17877__auto___22017 = arguments.length;
var i__17878__auto___22018 = (0);
while(true){
if((i__17878__auto___22018 < len__17877__auto___22017)){
args22014.push((arguments[i__17878__auto___22018]));

var G__22019 = (i__17878__auto___22018 + (1));
i__17878__auto___22018 = G__22019;
continue;
} else {
}
break;
}

var G__22016 = args22014.length;
switch (G__22016) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22014.length)].join('')));

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
var n__17722__auto___22021 = n;
var x_22022 = (0);
while(true){
if((x_22022 < n__17722__auto___22021)){
(a[x_22022] = (0));

var G__22023 = (x_22022 + (1));
x_22022 = G__22023;
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

var G__22024 = (i + (1));
i = G__22024;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async22028 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22028 = (function (alt_flag,flag,meta22029){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22029 = meta22029;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22030,meta22029__$1){
var self__ = this;
var _22030__$1 = this;
return (new cljs.core.async.t_cljs$core$async22028(self__.alt_flag,self__.flag,meta22029__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async22028.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22030){
var self__ = this;
var _22030__$1 = this;
return self__.meta22029;
});})(flag))
;

cljs.core.async.t_cljs$core$async22028.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22028.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async22028.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22028.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async22028.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22029","meta22029",-1605277618,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async22028.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22028.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22028";

cljs.core.async.t_cljs$core$async22028.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async22028");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async22028 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async22028(alt_flag__$1,flag__$1,meta22029){
return (new cljs.core.async.t_cljs$core$async22028(alt_flag__$1,flag__$1,meta22029));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async22028(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async22034 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async22034 = (function (alt_handler,flag,cb,meta22035){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22035 = meta22035;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async22034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22036,meta22035__$1){
var self__ = this;
var _22036__$1 = this;
return (new cljs.core.async.t_cljs$core$async22034(self__.alt_handler,self__.flag,self__.cb,meta22035__$1));
});

cljs.core.async.t_cljs$core$async22034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22036){
var self__ = this;
var _22036__$1 = this;
return self__.meta22035;
});

cljs.core.async.t_cljs$core$async22034.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async22034.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async22034.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async22034.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async22034.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22035","meta22035",-335437701,null)], null);
});

cljs.core.async.t_cljs$core$async22034.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async22034.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async22034";

cljs.core.async.t_cljs$core$async22034.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async22034");
});

cljs.core.async.__GT_t_cljs$core$async22034 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async22034(alt_handler__$1,flag__$1,cb__$1,meta22035){
return (new cljs.core.async.t_cljs$core$async22034(alt_handler__$1,flag__$1,cb__$1,meta22035));
});

}

return (new cljs.core.async.t_cljs$core$async22034(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__22037_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22037_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22038_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22038_SHARP_,port], null));
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
var G__22039 = (i + (1));
i = G__22039;
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
var len__17877__auto___22045 = arguments.length;
var i__17878__auto___22046 = (0);
while(true){
if((i__17878__auto___22046 < len__17877__auto___22045)){
args__17884__auto__.push((arguments[i__17878__auto___22046]));

var G__22047 = (i__17878__auto___22046 + (1));
i__17878__auto___22046 = G__22047;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((1) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17885__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22042){
var map__22043 = p__22042;
var map__22043__$1 = ((((!((map__22043 == null)))?((((map__22043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__22043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__22043):map__22043);
var opts = map__22043__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22040){
var G__22041 = cljs.core.first.call(null,seq22040);
var seq22040__$1 = cljs.core.next.call(null,seq22040);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22041,seq22040__$1);
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
var args22048 = [];
var len__17877__auto___22098 = arguments.length;
var i__17878__auto___22099 = (0);
while(true){
if((i__17878__auto___22099 < len__17877__auto___22098)){
args22048.push((arguments[i__17878__auto___22099]));

var G__22100 = (i__17878__auto___22099 + (1));
i__17878__auto___22099 = G__22100;
continue;
} else {
}
break;
}

var G__22050 = args22048.length;
switch (G__22050) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22048.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__18935__auto___22102 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___22102){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___22102){
return (function (state_22074){
var state_val_22075 = (state_22074[(1)]);
if((state_val_22075 === (7))){
var inst_22070 = (state_22074[(2)]);
var state_22074__$1 = state_22074;
var statearr_22076_22103 = state_22074__$1;
(statearr_22076_22103[(2)] = inst_22070);

(statearr_22076_22103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22075 === (1))){
var state_22074__$1 = state_22074;
var statearr_22077_22104 = state_22074__$1;
(statearr_22077_22104[(2)] = null);

(statearr_22077_22104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22075 === (4))){
var inst_22053 = (state_22074[(7)]);
var inst_22053__$1 = (state_22074[(2)]);
var inst_22054 = (inst_22053__$1 == null);
var state_22074__$1 = (function (){var statearr_22078 = state_22074;
(statearr_22078[(7)] = inst_22053__$1);

return statearr_22078;
})();
if(cljs.core.truth_(inst_22054)){
var statearr_22079_22105 = state_22074__$1;
(statearr_22079_22105[(1)] = (5));

} else {
var statearr_22080_22106 = state_22074__$1;
(statearr_22080_22106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22075 === (13))){
var state_22074__$1 = state_22074;
var statearr_22081_22107 = state_22074__$1;
(statearr_22081_22107[(2)] = null);

(statearr_22081_22107[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22075 === (6))){
var inst_22053 = (state_22074[(7)]);
var state_22074__$1 = state_22074;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22074__$1,(11),to,inst_22053);
} else {
if((state_val_22075 === (3))){
var inst_22072 = (state_22074[(2)]);
var state_22074__$1 = state_22074;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22074__$1,inst_22072);
} else {
if((state_val_22075 === (12))){
var state_22074__$1 = state_22074;
var statearr_22082_22108 = state_22074__$1;
(statearr_22082_22108[(2)] = null);

(statearr_22082_22108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22075 === (2))){
var state_22074__$1 = state_22074;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22074__$1,(4),from);
} else {
if((state_val_22075 === (11))){
var inst_22063 = (state_22074[(2)]);
var state_22074__$1 = state_22074;
if(cljs.core.truth_(inst_22063)){
var statearr_22083_22109 = state_22074__$1;
(statearr_22083_22109[(1)] = (12));

} else {
var statearr_22084_22110 = state_22074__$1;
(statearr_22084_22110[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22075 === (9))){
var state_22074__$1 = state_22074;
var statearr_22085_22111 = state_22074__$1;
(statearr_22085_22111[(2)] = null);

(statearr_22085_22111[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22075 === (5))){
var state_22074__$1 = state_22074;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22086_22112 = state_22074__$1;
(statearr_22086_22112[(1)] = (8));

} else {
var statearr_22087_22113 = state_22074__$1;
(statearr_22087_22113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22075 === (14))){
var inst_22068 = (state_22074[(2)]);
var state_22074__$1 = state_22074;
var statearr_22088_22114 = state_22074__$1;
(statearr_22088_22114[(2)] = inst_22068);

(statearr_22088_22114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22075 === (10))){
var inst_22060 = (state_22074[(2)]);
var state_22074__$1 = state_22074;
var statearr_22089_22115 = state_22074__$1;
(statearr_22089_22115[(2)] = inst_22060);

(statearr_22089_22115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22075 === (8))){
var inst_22057 = cljs.core.async.close_BANG_.call(null,to);
var state_22074__$1 = state_22074;
var statearr_22090_22116 = state_22074__$1;
(statearr_22090_22116[(2)] = inst_22057);

(statearr_22090_22116[(1)] = (10));


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
});})(c__18935__auto___22102))
;
return ((function (switch__18914__auto__,c__18935__auto___22102){
return (function() {
var cljs$core$async$state_machine__18915__auto__ = null;
var cljs$core$async$state_machine__18915__auto____0 = (function (){
var statearr_22094 = [null,null,null,null,null,null,null,null];
(statearr_22094[(0)] = cljs$core$async$state_machine__18915__auto__);

(statearr_22094[(1)] = (1));

return statearr_22094;
});
var cljs$core$async$state_machine__18915__auto____1 = (function (state_22074){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_22074);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e22095){if((e22095 instanceof Object)){
var ex__18918__auto__ = e22095;
var statearr_22096_22117 = state_22074;
(statearr_22096_22117[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22074);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22095;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22118 = state_22074;
state_22074 = G__22118;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$state_machine__18915__auto__ = function(state_22074){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18915__auto____1.call(this,state_22074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18915__auto____0;
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18915__auto____1;
return cljs$core$async$state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___22102))
})();
var state__18937__auto__ = (function (){var statearr_22097 = f__18936__auto__.call(null);
(statearr_22097[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___22102);

return statearr_22097;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___22102))
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
return (function (p__22302){
var vec__22303 = p__22302;
var v = cljs.core.nth.call(null,vec__22303,(0),null);
var p = cljs.core.nth.call(null,vec__22303,(1),null);
var job = vec__22303;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__18935__auto___22485 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___22485,res,vec__22303,v,p,job,jobs,results){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___22485,res,vec__22303,v,p,job,jobs,results){
return (function (state_22308){
var state_val_22309 = (state_22308[(1)]);
if((state_val_22309 === (1))){
var state_22308__$1 = state_22308;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22308__$1,(2),res,v);
} else {
if((state_val_22309 === (2))){
var inst_22305 = (state_22308[(2)]);
var inst_22306 = cljs.core.async.close_BANG_.call(null,res);
var state_22308__$1 = (function (){var statearr_22310 = state_22308;
(statearr_22310[(7)] = inst_22305);

return statearr_22310;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22308__$1,inst_22306);
} else {
return null;
}
}
});})(c__18935__auto___22485,res,vec__22303,v,p,job,jobs,results))
;
return ((function (switch__18914__auto__,c__18935__auto___22485,res,vec__22303,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0 = (function (){
var statearr_22314 = [null,null,null,null,null,null,null,null];
(statearr_22314[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__);

(statearr_22314[(1)] = (1));

return statearr_22314;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1 = (function (state_22308){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_22308);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e22315){if((e22315 instanceof Object)){
var ex__18918__auto__ = e22315;
var statearr_22316_22486 = state_22308;
(statearr_22316_22486[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22308);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22315;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22487 = state_22308;
state_22308 = G__22487;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__ = function(state_22308){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1.call(this,state_22308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___22485,res,vec__22303,v,p,job,jobs,results))
})();
var state__18937__auto__ = (function (){var statearr_22317 = f__18936__auto__.call(null);
(statearr_22317[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___22485);

return statearr_22317;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___22485,res,vec__22303,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22318){
var vec__22319 = p__22318;
var v = cljs.core.nth.call(null,vec__22319,(0),null);
var p = cljs.core.nth.call(null,vec__22319,(1),null);
var job = vec__22319;
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
var n__17722__auto___22488 = n;
var __22489 = (0);
while(true){
if((__22489 < n__17722__auto___22488)){
var G__22320_22490 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22320_22490) {
case "compute":
var c__18935__auto___22492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22489,c__18935__auto___22492,G__22320_22490,n__17722__auto___22488,jobs,results,process,async){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (__22489,c__18935__auto___22492,G__22320_22490,n__17722__auto___22488,jobs,results,process,async){
return (function (state_22333){
var state_val_22334 = (state_22333[(1)]);
if((state_val_22334 === (1))){
var state_22333__$1 = state_22333;
var statearr_22335_22493 = state_22333__$1;
(statearr_22335_22493[(2)] = null);

(statearr_22335_22493[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22334 === (2))){
var state_22333__$1 = state_22333;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22333__$1,(4),jobs);
} else {
if((state_val_22334 === (3))){
var inst_22331 = (state_22333[(2)]);
var state_22333__$1 = state_22333;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22333__$1,inst_22331);
} else {
if((state_val_22334 === (4))){
var inst_22323 = (state_22333[(2)]);
var inst_22324 = process.call(null,inst_22323);
var state_22333__$1 = state_22333;
if(cljs.core.truth_(inst_22324)){
var statearr_22336_22494 = state_22333__$1;
(statearr_22336_22494[(1)] = (5));

} else {
var statearr_22337_22495 = state_22333__$1;
(statearr_22337_22495[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22334 === (5))){
var state_22333__$1 = state_22333;
var statearr_22338_22496 = state_22333__$1;
(statearr_22338_22496[(2)] = null);

(statearr_22338_22496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22334 === (6))){
var state_22333__$1 = state_22333;
var statearr_22339_22497 = state_22333__$1;
(statearr_22339_22497[(2)] = null);

(statearr_22339_22497[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22334 === (7))){
var inst_22329 = (state_22333[(2)]);
var state_22333__$1 = state_22333;
var statearr_22340_22498 = state_22333__$1;
(statearr_22340_22498[(2)] = inst_22329);

(statearr_22340_22498[(1)] = (3));


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
});})(__22489,c__18935__auto___22492,G__22320_22490,n__17722__auto___22488,jobs,results,process,async))
;
return ((function (__22489,switch__18914__auto__,c__18935__auto___22492,G__22320_22490,n__17722__auto___22488,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0 = (function (){
var statearr_22344 = [null,null,null,null,null,null,null];
(statearr_22344[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__);

(statearr_22344[(1)] = (1));

return statearr_22344;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1 = (function (state_22333){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_22333);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e22345){if((e22345 instanceof Object)){
var ex__18918__auto__ = e22345;
var statearr_22346_22499 = state_22333;
(statearr_22346_22499[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22333);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22345;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22500 = state_22333;
state_22333 = G__22500;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__ = function(state_22333){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1.call(this,state_22333);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__;
})()
;})(__22489,switch__18914__auto__,c__18935__auto___22492,G__22320_22490,n__17722__auto___22488,jobs,results,process,async))
})();
var state__18937__auto__ = (function (){var statearr_22347 = f__18936__auto__.call(null);
(statearr_22347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___22492);

return statearr_22347;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(__22489,c__18935__auto___22492,G__22320_22490,n__17722__auto___22488,jobs,results,process,async))
);


break;
case "async":
var c__18935__auto___22501 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__22489,c__18935__auto___22501,G__22320_22490,n__17722__auto___22488,jobs,results,process,async){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (__22489,c__18935__auto___22501,G__22320_22490,n__17722__auto___22488,jobs,results,process,async){
return (function (state_22360){
var state_val_22361 = (state_22360[(1)]);
if((state_val_22361 === (1))){
var state_22360__$1 = state_22360;
var statearr_22362_22502 = state_22360__$1;
(statearr_22362_22502[(2)] = null);

(statearr_22362_22502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (2))){
var state_22360__$1 = state_22360;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22360__$1,(4),jobs);
} else {
if((state_val_22361 === (3))){
var inst_22358 = (state_22360[(2)]);
var state_22360__$1 = state_22360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22360__$1,inst_22358);
} else {
if((state_val_22361 === (4))){
var inst_22350 = (state_22360[(2)]);
var inst_22351 = async.call(null,inst_22350);
var state_22360__$1 = state_22360;
if(cljs.core.truth_(inst_22351)){
var statearr_22363_22503 = state_22360__$1;
(statearr_22363_22503[(1)] = (5));

} else {
var statearr_22364_22504 = state_22360__$1;
(statearr_22364_22504[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (5))){
var state_22360__$1 = state_22360;
var statearr_22365_22505 = state_22360__$1;
(statearr_22365_22505[(2)] = null);

(statearr_22365_22505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (6))){
var state_22360__$1 = state_22360;
var statearr_22366_22506 = state_22360__$1;
(statearr_22366_22506[(2)] = null);

(statearr_22366_22506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22361 === (7))){
var inst_22356 = (state_22360[(2)]);
var state_22360__$1 = state_22360;
var statearr_22367_22507 = state_22360__$1;
(statearr_22367_22507[(2)] = inst_22356);

(statearr_22367_22507[(1)] = (3));


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
});})(__22489,c__18935__auto___22501,G__22320_22490,n__17722__auto___22488,jobs,results,process,async))
;
return ((function (__22489,switch__18914__auto__,c__18935__auto___22501,G__22320_22490,n__17722__auto___22488,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0 = (function (){
var statearr_22371 = [null,null,null,null,null,null,null];
(statearr_22371[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__);

(statearr_22371[(1)] = (1));

return statearr_22371;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1 = (function (state_22360){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_22360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e22372){if((e22372 instanceof Object)){
var ex__18918__auto__ = e22372;
var statearr_22373_22508 = state_22360;
(statearr_22373_22508[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22509 = state_22360;
state_22360 = G__22509;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__ = function(state_22360){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1.call(this,state_22360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__;
})()
;})(__22489,switch__18914__auto__,c__18935__auto___22501,G__22320_22490,n__17722__auto___22488,jobs,results,process,async))
})();
var state__18937__auto__ = (function (){var statearr_22374 = f__18936__auto__.call(null);
(statearr_22374[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___22501);

return statearr_22374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(__22489,c__18935__auto___22501,G__22320_22490,n__17722__auto___22488,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22510 = (__22489 + (1));
__22489 = G__22510;
continue;
} else {
}
break;
}

var c__18935__auto___22511 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___22511,jobs,results,process,async){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___22511,jobs,results,process,async){
return (function (state_22396){
var state_val_22397 = (state_22396[(1)]);
if((state_val_22397 === (1))){
var state_22396__$1 = state_22396;
var statearr_22398_22512 = state_22396__$1;
(statearr_22398_22512[(2)] = null);

(statearr_22398_22512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22397 === (2))){
var state_22396__$1 = state_22396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22396__$1,(4),from);
} else {
if((state_val_22397 === (3))){
var inst_22394 = (state_22396[(2)]);
var state_22396__$1 = state_22396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22396__$1,inst_22394);
} else {
if((state_val_22397 === (4))){
var inst_22377 = (state_22396[(7)]);
var inst_22377__$1 = (state_22396[(2)]);
var inst_22378 = (inst_22377__$1 == null);
var state_22396__$1 = (function (){var statearr_22399 = state_22396;
(statearr_22399[(7)] = inst_22377__$1);

return statearr_22399;
})();
if(cljs.core.truth_(inst_22378)){
var statearr_22400_22513 = state_22396__$1;
(statearr_22400_22513[(1)] = (5));

} else {
var statearr_22401_22514 = state_22396__$1;
(statearr_22401_22514[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22397 === (5))){
var inst_22380 = cljs.core.async.close_BANG_.call(null,jobs);
var state_22396__$1 = state_22396;
var statearr_22402_22515 = state_22396__$1;
(statearr_22402_22515[(2)] = inst_22380);

(statearr_22402_22515[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22397 === (6))){
var inst_22382 = (state_22396[(8)]);
var inst_22377 = (state_22396[(7)]);
var inst_22382__$1 = cljs.core.async.chan.call(null,(1));
var inst_22383 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22384 = [inst_22377,inst_22382__$1];
var inst_22385 = (new cljs.core.PersistentVector(null,2,(5),inst_22383,inst_22384,null));
var state_22396__$1 = (function (){var statearr_22403 = state_22396;
(statearr_22403[(8)] = inst_22382__$1);

return statearr_22403;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22396__$1,(8),jobs,inst_22385);
} else {
if((state_val_22397 === (7))){
var inst_22392 = (state_22396[(2)]);
var state_22396__$1 = state_22396;
var statearr_22404_22516 = state_22396__$1;
(statearr_22404_22516[(2)] = inst_22392);

(statearr_22404_22516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22397 === (8))){
var inst_22382 = (state_22396[(8)]);
var inst_22387 = (state_22396[(2)]);
var state_22396__$1 = (function (){var statearr_22405 = state_22396;
(statearr_22405[(9)] = inst_22387);

return statearr_22405;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22396__$1,(9),results,inst_22382);
} else {
if((state_val_22397 === (9))){
var inst_22389 = (state_22396[(2)]);
var state_22396__$1 = (function (){var statearr_22406 = state_22396;
(statearr_22406[(10)] = inst_22389);

return statearr_22406;
})();
var statearr_22407_22517 = state_22396__$1;
(statearr_22407_22517[(2)] = null);

(statearr_22407_22517[(1)] = (2));


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
});})(c__18935__auto___22511,jobs,results,process,async))
;
return ((function (switch__18914__auto__,c__18935__auto___22511,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0 = (function (){
var statearr_22411 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22411[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__);

(statearr_22411[(1)] = (1));

return statearr_22411;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1 = (function (state_22396){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_22396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e22412){if((e22412 instanceof Object)){
var ex__18918__auto__ = e22412;
var statearr_22413_22518 = state_22396;
(statearr_22413_22518[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22412;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22519 = state_22396;
state_22396 = G__22519;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__ = function(state_22396){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1.call(this,state_22396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___22511,jobs,results,process,async))
})();
var state__18937__auto__ = (function (){var statearr_22414 = f__18936__auto__.call(null);
(statearr_22414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___22511);

return statearr_22414;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___22511,jobs,results,process,async))
);


var c__18935__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto__,jobs,results,process,async){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto__,jobs,results,process,async){
return (function (state_22452){
var state_val_22453 = (state_22452[(1)]);
if((state_val_22453 === (7))){
var inst_22448 = (state_22452[(2)]);
var state_22452__$1 = state_22452;
var statearr_22454_22520 = state_22452__$1;
(statearr_22454_22520[(2)] = inst_22448);

(statearr_22454_22520[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22453 === (20))){
var state_22452__$1 = state_22452;
var statearr_22455_22521 = state_22452__$1;
(statearr_22455_22521[(2)] = null);

(statearr_22455_22521[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22453 === (1))){
var state_22452__$1 = state_22452;
var statearr_22456_22522 = state_22452__$1;
(statearr_22456_22522[(2)] = null);

(statearr_22456_22522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22453 === (4))){
var inst_22417 = (state_22452[(7)]);
var inst_22417__$1 = (state_22452[(2)]);
var inst_22418 = (inst_22417__$1 == null);
var state_22452__$1 = (function (){var statearr_22457 = state_22452;
(statearr_22457[(7)] = inst_22417__$1);

return statearr_22457;
})();
if(cljs.core.truth_(inst_22418)){
var statearr_22458_22523 = state_22452__$1;
(statearr_22458_22523[(1)] = (5));

} else {
var statearr_22459_22524 = state_22452__$1;
(statearr_22459_22524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22453 === (15))){
var inst_22430 = (state_22452[(8)]);
var state_22452__$1 = state_22452;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22452__$1,(18),to,inst_22430);
} else {
if((state_val_22453 === (21))){
var inst_22443 = (state_22452[(2)]);
var state_22452__$1 = state_22452;
var statearr_22460_22525 = state_22452__$1;
(statearr_22460_22525[(2)] = inst_22443);

(statearr_22460_22525[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22453 === (13))){
var inst_22445 = (state_22452[(2)]);
var state_22452__$1 = (function (){var statearr_22461 = state_22452;
(statearr_22461[(9)] = inst_22445);

return statearr_22461;
})();
var statearr_22462_22526 = state_22452__$1;
(statearr_22462_22526[(2)] = null);

(statearr_22462_22526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22453 === (6))){
var inst_22417 = (state_22452[(7)]);
var state_22452__$1 = state_22452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22452__$1,(11),inst_22417);
} else {
if((state_val_22453 === (17))){
var inst_22438 = (state_22452[(2)]);
var state_22452__$1 = state_22452;
if(cljs.core.truth_(inst_22438)){
var statearr_22463_22527 = state_22452__$1;
(statearr_22463_22527[(1)] = (19));

} else {
var statearr_22464_22528 = state_22452__$1;
(statearr_22464_22528[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22453 === (3))){
var inst_22450 = (state_22452[(2)]);
var state_22452__$1 = state_22452;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22452__$1,inst_22450);
} else {
if((state_val_22453 === (12))){
var inst_22427 = (state_22452[(10)]);
var state_22452__$1 = state_22452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22452__$1,(14),inst_22427);
} else {
if((state_val_22453 === (2))){
var state_22452__$1 = state_22452;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22452__$1,(4),results);
} else {
if((state_val_22453 === (19))){
var state_22452__$1 = state_22452;
var statearr_22465_22529 = state_22452__$1;
(statearr_22465_22529[(2)] = null);

(statearr_22465_22529[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22453 === (11))){
var inst_22427 = (state_22452[(2)]);
var state_22452__$1 = (function (){var statearr_22466 = state_22452;
(statearr_22466[(10)] = inst_22427);

return statearr_22466;
})();
var statearr_22467_22530 = state_22452__$1;
(statearr_22467_22530[(2)] = null);

(statearr_22467_22530[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22453 === (9))){
var state_22452__$1 = state_22452;
var statearr_22468_22531 = state_22452__$1;
(statearr_22468_22531[(2)] = null);

(statearr_22468_22531[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22453 === (5))){
var state_22452__$1 = state_22452;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22469_22532 = state_22452__$1;
(statearr_22469_22532[(1)] = (8));

} else {
var statearr_22470_22533 = state_22452__$1;
(statearr_22470_22533[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22453 === (14))){
var inst_22430 = (state_22452[(8)]);
var inst_22432 = (state_22452[(11)]);
var inst_22430__$1 = (state_22452[(2)]);
var inst_22431 = (inst_22430__$1 == null);
var inst_22432__$1 = cljs.core.not.call(null,inst_22431);
var state_22452__$1 = (function (){var statearr_22471 = state_22452;
(statearr_22471[(8)] = inst_22430__$1);

(statearr_22471[(11)] = inst_22432__$1);

return statearr_22471;
})();
if(inst_22432__$1){
var statearr_22472_22534 = state_22452__$1;
(statearr_22472_22534[(1)] = (15));

} else {
var statearr_22473_22535 = state_22452__$1;
(statearr_22473_22535[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22453 === (16))){
var inst_22432 = (state_22452[(11)]);
var state_22452__$1 = state_22452;
var statearr_22474_22536 = state_22452__$1;
(statearr_22474_22536[(2)] = inst_22432);

(statearr_22474_22536[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22453 === (10))){
var inst_22424 = (state_22452[(2)]);
var state_22452__$1 = state_22452;
var statearr_22475_22537 = state_22452__$1;
(statearr_22475_22537[(2)] = inst_22424);

(statearr_22475_22537[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22453 === (18))){
var inst_22435 = (state_22452[(2)]);
var state_22452__$1 = state_22452;
var statearr_22476_22538 = state_22452__$1;
(statearr_22476_22538[(2)] = inst_22435);

(statearr_22476_22538[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22453 === (8))){
var inst_22421 = cljs.core.async.close_BANG_.call(null,to);
var state_22452__$1 = state_22452;
var statearr_22477_22539 = state_22452__$1;
(statearr_22477_22539[(2)] = inst_22421);

(statearr_22477_22539[(1)] = (10));


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
var statearr_22481 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22481[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__);

(statearr_22481[(1)] = (1));

return statearr_22481;
});
var cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1 = (function (state_22452){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_22452);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e22482){if((e22482 instanceof Object)){
var ex__18918__auto__ = e22482;
var statearr_22483_22540 = state_22452;
(statearr_22483_22540[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22452);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22482;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22541 = state_22452;
state_22452 = G__22541;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__ = function(state_22452){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1.call(this,state_22452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__18915__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto__,jobs,results,process,async))
})();
var state__18937__auto__ = (function (){var statearr_22484 = f__18936__auto__.call(null);
(statearr_22484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto__);

return statearr_22484;
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
var args22542 = [];
var len__17877__auto___22545 = arguments.length;
var i__17878__auto___22546 = (0);
while(true){
if((i__17878__auto___22546 < len__17877__auto___22545)){
args22542.push((arguments[i__17878__auto___22546]));

var G__22547 = (i__17878__auto___22546 + (1));
i__17878__auto___22546 = G__22547;
continue;
} else {
}
break;
}

var G__22544 = args22542.length;
switch (G__22544) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22542.length)].join('')));

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
var args22549 = [];
var len__17877__auto___22552 = arguments.length;
var i__17878__auto___22553 = (0);
while(true){
if((i__17878__auto___22553 < len__17877__auto___22552)){
args22549.push((arguments[i__17878__auto___22553]));

var G__22554 = (i__17878__auto___22553 + (1));
i__17878__auto___22553 = G__22554;
continue;
} else {
}
break;
}

var G__22551 = args22549.length;
switch (G__22551) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22549.length)].join('')));

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
var args22556 = [];
var len__17877__auto___22609 = arguments.length;
var i__17878__auto___22610 = (0);
while(true){
if((i__17878__auto___22610 < len__17877__auto___22609)){
args22556.push((arguments[i__17878__auto___22610]));

var G__22611 = (i__17878__auto___22610 + (1));
i__17878__auto___22610 = G__22611;
continue;
} else {
}
break;
}

var G__22558 = args22556.length;
switch (G__22558) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22556.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__18935__auto___22613 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___22613,tc,fc){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___22613,tc,fc){
return (function (state_22584){
var state_val_22585 = (state_22584[(1)]);
if((state_val_22585 === (7))){
var inst_22580 = (state_22584[(2)]);
var state_22584__$1 = state_22584;
var statearr_22586_22614 = state_22584__$1;
(statearr_22586_22614[(2)] = inst_22580);

(statearr_22586_22614[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22585 === (1))){
var state_22584__$1 = state_22584;
var statearr_22587_22615 = state_22584__$1;
(statearr_22587_22615[(2)] = null);

(statearr_22587_22615[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22585 === (4))){
var inst_22561 = (state_22584[(7)]);
var inst_22561__$1 = (state_22584[(2)]);
var inst_22562 = (inst_22561__$1 == null);
var state_22584__$1 = (function (){var statearr_22588 = state_22584;
(statearr_22588[(7)] = inst_22561__$1);

return statearr_22588;
})();
if(cljs.core.truth_(inst_22562)){
var statearr_22589_22616 = state_22584__$1;
(statearr_22589_22616[(1)] = (5));

} else {
var statearr_22590_22617 = state_22584__$1;
(statearr_22590_22617[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22585 === (13))){
var state_22584__$1 = state_22584;
var statearr_22591_22618 = state_22584__$1;
(statearr_22591_22618[(2)] = null);

(statearr_22591_22618[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22585 === (6))){
var inst_22561 = (state_22584[(7)]);
var inst_22567 = p.call(null,inst_22561);
var state_22584__$1 = state_22584;
if(cljs.core.truth_(inst_22567)){
var statearr_22592_22619 = state_22584__$1;
(statearr_22592_22619[(1)] = (9));

} else {
var statearr_22593_22620 = state_22584__$1;
(statearr_22593_22620[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22585 === (3))){
var inst_22582 = (state_22584[(2)]);
var state_22584__$1 = state_22584;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22584__$1,inst_22582);
} else {
if((state_val_22585 === (12))){
var state_22584__$1 = state_22584;
var statearr_22594_22621 = state_22584__$1;
(statearr_22594_22621[(2)] = null);

(statearr_22594_22621[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22585 === (2))){
var state_22584__$1 = state_22584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22584__$1,(4),ch);
} else {
if((state_val_22585 === (11))){
var inst_22561 = (state_22584[(7)]);
var inst_22571 = (state_22584[(2)]);
var state_22584__$1 = state_22584;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22584__$1,(8),inst_22571,inst_22561);
} else {
if((state_val_22585 === (9))){
var state_22584__$1 = state_22584;
var statearr_22595_22622 = state_22584__$1;
(statearr_22595_22622[(2)] = tc);

(statearr_22595_22622[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22585 === (5))){
var inst_22564 = cljs.core.async.close_BANG_.call(null,tc);
var inst_22565 = cljs.core.async.close_BANG_.call(null,fc);
var state_22584__$1 = (function (){var statearr_22596 = state_22584;
(statearr_22596[(8)] = inst_22564);

return statearr_22596;
})();
var statearr_22597_22623 = state_22584__$1;
(statearr_22597_22623[(2)] = inst_22565);

(statearr_22597_22623[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22585 === (14))){
var inst_22578 = (state_22584[(2)]);
var state_22584__$1 = state_22584;
var statearr_22598_22624 = state_22584__$1;
(statearr_22598_22624[(2)] = inst_22578);

(statearr_22598_22624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22585 === (10))){
var state_22584__$1 = state_22584;
var statearr_22599_22625 = state_22584__$1;
(statearr_22599_22625[(2)] = fc);

(statearr_22599_22625[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22585 === (8))){
var inst_22573 = (state_22584[(2)]);
var state_22584__$1 = state_22584;
if(cljs.core.truth_(inst_22573)){
var statearr_22600_22626 = state_22584__$1;
(statearr_22600_22626[(1)] = (12));

} else {
var statearr_22601_22627 = state_22584__$1;
(statearr_22601_22627[(1)] = (13));

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
});})(c__18935__auto___22613,tc,fc))
;
return ((function (switch__18914__auto__,c__18935__auto___22613,tc,fc){
return (function() {
var cljs$core$async$state_machine__18915__auto__ = null;
var cljs$core$async$state_machine__18915__auto____0 = (function (){
var statearr_22605 = [null,null,null,null,null,null,null,null,null];
(statearr_22605[(0)] = cljs$core$async$state_machine__18915__auto__);

(statearr_22605[(1)] = (1));

return statearr_22605;
});
var cljs$core$async$state_machine__18915__auto____1 = (function (state_22584){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_22584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e22606){if((e22606 instanceof Object)){
var ex__18918__auto__ = e22606;
var statearr_22607_22628 = state_22584;
(statearr_22607_22628[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22606;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22629 = state_22584;
state_22584 = G__22629;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$state_machine__18915__auto__ = function(state_22584){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18915__auto____1.call(this,state_22584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18915__auto____0;
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18915__auto____1;
return cljs$core$async$state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___22613,tc,fc))
})();
var state__18937__auto__ = (function (){var statearr_22608 = f__18936__auto__.call(null);
(statearr_22608[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___22613);

return statearr_22608;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___22613,tc,fc))
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
return (function (state_22693){
var state_val_22694 = (state_22693[(1)]);
if((state_val_22694 === (7))){
var inst_22689 = (state_22693[(2)]);
var state_22693__$1 = state_22693;
var statearr_22695_22716 = state_22693__$1;
(statearr_22695_22716[(2)] = inst_22689);

(statearr_22695_22716[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22694 === (1))){
var inst_22673 = init;
var state_22693__$1 = (function (){var statearr_22696 = state_22693;
(statearr_22696[(7)] = inst_22673);

return statearr_22696;
})();
var statearr_22697_22717 = state_22693__$1;
(statearr_22697_22717[(2)] = null);

(statearr_22697_22717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22694 === (4))){
var inst_22676 = (state_22693[(8)]);
var inst_22676__$1 = (state_22693[(2)]);
var inst_22677 = (inst_22676__$1 == null);
var state_22693__$1 = (function (){var statearr_22698 = state_22693;
(statearr_22698[(8)] = inst_22676__$1);

return statearr_22698;
})();
if(cljs.core.truth_(inst_22677)){
var statearr_22699_22718 = state_22693__$1;
(statearr_22699_22718[(1)] = (5));

} else {
var statearr_22700_22719 = state_22693__$1;
(statearr_22700_22719[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22694 === (6))){
var inst_22680 = (state_22693[(9)]);
var inst_22673 = (state_22693[(7)]);
var inst_22676 = (state_22693[(8)]);
var inst_22680__$1 = f.call(null,inst_22673,inst_22676);
var inst_22681 = cljs.core.reduced_QMARK_.call(null,inst_22680__$1);
var state_22693__$1 = (function (){var statearr_22701 = state_22693;
(statearr_22701[(9)] = inst_22680__$1);

return statearr_22701;
})();
if(inst_22681){
var statearr_22702_22720 = state_22693__$1;
(statearr_22702_22720[(1)] = (8));

} else {
var statearr_22703_22721 = state_22693__$1;
(statearr_22703_22721[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22694 === (3))){
var inst_22691 = (state_22693[(2)]);
var state_22693__$1 = state_22693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22693__$1,inst_22691);
} else {
if((state_val_22694 === (2))){
var state_22693__$1 = state_22693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22693__$1,(4),ch);
} else {
if((state_val_22694 === (9))){
var inst_22680 = (state_22693[(9)]);
var inst_22673 = inst_22680;
var state_22693__$1 = (function (){var statearr_22704 = state_22693;
(statearr_22704[(7)] = inst_22673);

return statearr_22704;
})();
var statearr_22705_22722 = state_22693__$1;
(statearr_22705_22722[(2)] = null);

(statearr_22705_22722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22694 === (5))){
var inst_22673 = (state_22693[(7)]);
var state_22693__$1 = state_22693;
var statearr_22706_22723 = state_22693__$1;
(statearr_22706_22723[(2)] = inst_22673);

(statearr_22706_22723[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22694 === (10))){
var inst_22687 = (state_22693[(2)]);
var state_22693__$1 = state_22693;
var statearr_22707_22724 = state_22693__$1;
(statearr_22707_22724[(2)] = inst_22687);

(statearr_22707_22724[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22694 === (8))){
var inst_22680 = (state_22693[(9)]);
var inst_22683 = cljs.core.deref.call(null,inst_22680);
var state_22693__$1 = state_22693;
var statearr_22708_22725 = state_22693__$1;
(statearr_22708_22725[(2)] = inst_22683);

(statearr_22708_22725[(1)] = (10));


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
var statearr_22712 = [null,null,null,null,null,null,null,null,null,null];
(statearr_22712[(0)] = cljs$core$async$reduce_$_state_machine__18915__auto__);

(statearr_22712[(1)] = (1));

return statearr_22712;
});
var cljs$core$async$reduce_$_state_machine__18915__auto____1 = (function (state_22693){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_22693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e22713){if((e22713 instanceof Object)){
var ex__18918__auto__ = e22713;
var statearr_22714_22726 = state_22693;
(statearr_22714_22726[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22727 = state_22693;
state_22693 = G__22727;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__18915__auto__ = function(state_22693){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__18915__auto____1.call(this,state_22693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__18915__auto____0;
cljs$core$async$reduce_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__18915__auto____1;
return cljs$core$async$reduce_$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto__))
})();
var state__18937__auto__ = (function (){var statearr_22715 = f__18936__auto__.call(null);
(statearr_22715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto__);

return statearr_22715;
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
var args22728 = [];
var len__17877__auto___22780 = arguments.length;
var i__17878__auto___22781 = (0);
while(true){
if((i__17878__auto___22781 < len__17877__auto___22780)){
args22728.push((arguments[i__17878__auto___22781]));

var G__22782 = (i__17878__auto___22781 + (1));
i__17878__auto___22781 = G__22782;
continue;
} else {
}
break;
}

var G__22730 = args22728.length;
switch (G__22730) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args22728.length)].join('')));

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
return (function (state_22755){
var state_val_22756 = (state_22755[(1)]);
if((state_val_22756 === (7))){
var inst_22737 = (state_22755[(2)]);
var state_22755__$1 = state_22755;
var statearr_22757_22784 = state_22755__$1;
(statearr_22757_22784[(2)] = inst_22737);

(statearr_22757_22784[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22756 === (1))){
var inst_22731 = cljs.core.seq.call(null,coll);
var inst_22732 = inst_22731;
var state_22755__$1 = (function (){var statearr_22758 = state_22755;
(statearr_22758[(7)] = inst_22732);

return statearr_22758;
})();
var statearr_22759_22785 = state_22755__$1;
(statearr_22759_22785[(2)] = null);

(statearr_22759_22785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22756 === (4))){
var inst_22732 = (state_22755[(7)]);
var inst_22735 = cljs.core.first.call(null,inst_22732);
var state_22755__$1 = state_22755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_22755__$1,(7),ch,inst_22735);
} else {
if((state_val_22756 === (13))){
var inst_22749 = (state_22755[(2)]);
var state_22755__$1 = state_22755;
var statearr_22760_22786 = state_22755__$1;
(statearr_22760_22786[(2)] = inst_22749);

(statearr_22760_22786[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22756 === (6))){
var inst_22740 = (state_22755[(2)]);
var state_22755__$1 = state_22755;
if(cljs.core.truth_(inst_22740)){
var statearr_22761_22787 = state_22755__$1;
(statearr_22761_22787[(1)] = (8));

} else {
var statearr_22762_22788 = state_22755__$1;
(statearr_22762_22788[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22756 === (3))){
var inst_22753 = (state_22755[(2)]);
var state_22755__$1 = state_22755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22755__$1,inst_22753);
} else {
if((state_val_22756 === (12))){
var state_22755__$1 = state_22755;
var statearr_22763_22789 = state_22755__$1;
(statearr_22763_22789[(2)] = null);

(statearr_22763_22789[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22756 === (2))){
var inst_22732 = (state_22755[(7)]);
var state_22755__$1 = state_22755;
if(cljs.core.truth_(inst_22732)){
var statearr_22764_22790 = state_22755__$1;
(statearr_22764_22790[(1)] = (4));

} else {
var statearr_22765_22791 = state_22755__$1;
(statearr_22765_22791[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22756 === (11))){
var inst_22746 = cljs.core.async.close_BANG_.call(null,ch);
var state_22755__$1 = state_22755;
var statearr_22766_22792 = state_22755__$1;
(statearr_22766_22792[(2)] = inst_22746);

(statearr_22766_22792[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22756 === (9))){
var state_22755__$1 = state_22755;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22767_22793 = state_22755__$1;
(statearr_22767_22793[(1)] = (11));

} else {
var statearr_22768_22794 = state_22755__$1;
(statearr_22768_22794[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22756 === (5))){
var inst_22732 = (state_22755[(7)]);
var state_22755__$1 = state_22755;
var statearr_22769_22795 = state_22755__$1;
(statearr_22769_22795[(2)] = inst_22732);

(statearr_22769_22795[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22756 === (10))){
var inst_22751 = (state_22755[(2)]);
var state_22755__$1 = state_22755;
var statearr_22770_22796 = state_22755__$1;
(statearr_22770_22796[(2)] = inst_22751);

(statearr_22770_22796[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_22756 === (8))){
var inst_22732 = (state_22755[(7)]);
var inst_22742 = cljs.core.next.call(null,inst_22732);
var inst_22732__$1 = inst_22742;
var state_22755__$1 = (function (){var statearr_22771 = state_22755;
(statearr_22771[(7)] = inst_22732__$1);

return statearr_22771;
})();
var statearr_22772_22797 = state_22755__$1;
(statearr_22772_22797[(2)] = null);

(statearr_22772_22797[(1)] = (2));


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
var statearr_22776 = [null,null,null,null,null,null,null,null];
(statearr_22776[(0)] = cljs$core$async$state_machine__18915__auto__);

(statearr_22776[(1)] = (1));

return statearr_22776;
});
var cljs$core$async$state_machine__18915__auto____1 = (function (state_22755){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_22755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e22777){if((e22777 instanceof Object)){
var ex__18918__auto__ = e22777;
var statearr_22778_22798 = state_22755;
(statearr_22778_22798[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e22777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__22799 = state_22755;
state_22755 = G__22799;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$state_machine__18915__auto__ = function(state_22755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18915__auto____1.call(this,state_22755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18915__auto____0;
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18915__auto____1;
return cljs$core$async$state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto__))
})();
var state__18937__auto__ = (function (){var statearr_22779 = f__18936__auto__.call(null);
(statearr_22779[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto__);

return statearr_22779;
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
if(typeof cljs.core.async.t_cljs$core$async23021 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23021 = (function (mult,ch,cs,meta23022){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23022 = meta23022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23023,meta23022__$1){
var self__ = this;
var _23023__$1 = this;
return (new cljs.core.async.t_cljs$core$async23021(self__.mult,self__.ch,self__.cs,meta23022__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async23021.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23023){
var self__ = this;
var _23023__$1 = this;
return self__.meta23022;
});})(cs))
;

cljs.core.async.t_cljs$core$async23021.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23021.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async23021.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async23021.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23021.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23021.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async23021.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23022","meta23022",580499189,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async23021.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23021.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23021";

cljs.core.async.t_cljs$core$async23021.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async23021");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async23021 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async23021(mult__$1,ch__$1,cs__$1,meta23022){
return (new cljs.core.async.t_cljs$core$async23021(mult__$1,ch__$1,cs__$1,meta23022));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async23021(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__18935__auto___23242 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___23242,cs,m,dchan,dctr,done){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___23242,cs,m,dchan,dctr,done){
return (function (state_23154){
var state_val_23155 = (state_23154[(1)]);
if((state_val_23155 === (7))){
var inst_23150 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
var statearr_23156_23243 = state_23154__$1;
(statearr_23156_23243[(2)] = inst_23150);

(statearr_23156_23243[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (20))){
var inst_23055 = (state_23154[(7)]);
var inst_23065 = cljs.core.first.call(null,inst_23055);
var inst_23066 = cljs.core.nth.call(null,inst_23065,(0),null);
var inst_23067 = cljs.core.nth.call(null,inst_23065,(1),null);
var state_23154__$1 = (function (){var statearr_23157 = state_23154;
(statearr_23157[(8)] = inst_23066);

return statearr_23157;
})();
if(cljs.core.truth_(inst_23067)){
var statearr_23158_23244 = state_23154__$1;
(statearr_23158_23244[(1)] = (22));

} else {
var statearr_23159_23245 = state_23154__$1;
(statearr_23159_23245[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (27))){
var inst_23102 = (state_23154[(9)]);
var inst_23095 = (state_23154[(10)]);
var inst_23026 = (state_23154[(11)]);
var inst_23097 = (state_23154[(12)]);
var inst_23102__$1 = cljs.core._nth.call(null,inst_23095,inst_23097);
var inst_23103 = cljs.core.async.put_BANG_.call(null,inst_23102__$1,inst_23026,done);
var state_23154__$1 = (function (){var statearr_23160 = state_23154;
(statearr_23160[(9)] = inst_23102__$1);

return statearr_23160;
})();
if(cljs.core.truth_(inst_23103)){
var statearr_23161_23246 = state_23154__$1;
(statearr_23161_23246[(1)] = (30));

} else {
var statearr_23162_23247 = state_23154__$1;
(statearr_23162_23247[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (1))){
var state_23154__$1 = state_23154;
var statearr_23163_23248 = state_23154__$1;
(statearr_23163_23248[(2)] = null);

(statearr_23163_23248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (24))){
var inst_23055 = (state_23154[(7)]);
var inst_23072 = (state_23154[(2)]);
var inst_23073 = cljs.core.next.call(null,inst_23055);
var inst_23035 = inst_23073;
var inst_23036 = null;
var inst_23037 = (0);
var inst_23038 = (0);
var state_23154__$1 = (function (){var statearr_23164 = state_23154;
(statearr_23164[(13)] = inst_23038);

(statearr_23164[(14)] = inst_23072);

(statearr_23164[(15)] = inst_23035);

(statearr_23164[(16)] = inst_23037);

(statearr_23164[(17)] = inst_23036);

return statearr_23164;
})();
var statearr_23165_23249 = state_23154__$1;
(statearr_23165_23249[(2)] = null);

(statearr_23165_23249[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (39))){
var state_23154__$1 = state_23154;
var statearr_23169_23250 = state_23154__$1;
(statearr_23169_23250[(2)] = null);

(statearr_23169_23250[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (4))){
var inst_23026 = (state_23154[(11)]);
var inst_23026__$1 = (state_23154[(2)]);
var inst_23027 = (inst_23026__$1 == null);
var state_23154__$1 = (function (){var statearr_23170 = state_23154;
(statearr_23170[(11)] = inst_23026__$1);

return statearr_23170;
})();
if(cljs.core.truth_(inst_23027)){
var statearr_23171_23251 = state_23154__$1;
(statearr_23171_23251[(1)] = (5));

} else {
var statearr_23172_23252 = state_23154__$1;
(statearr_23172_23252[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (15))){
var inst_23038 = (state_23154[(13)]);
var inst_23035 = (state_23154[(15)]);
var inst_23037 = (state_23154[(16)]);
var inst_23036 = (state_23154[(17)]);
var inst_23051 = (state_23154[(2)]);
var inst_23052 = (inst_23038 + (1));
var tmp23166 = inst_23035;
var tmp23167 = inst_23037;
var tmp23168 = inst_23036;
var inst_23035__$1 = tmp23166;
var inst_23036__$1 = tmp23168;
var inst_23037__$1 = tmp23167;
var inst_23038__$1 = inst_23052;
var state_23154__$1 = (function (){var statearr_23173 = state_23154;
(statearr_23173[(13)] = inst_23038__$1);

(statearr_23173[(15)] = inst_23035__$1);

(statearr_23173[(18)] = inst_23051);

(statearr_23173[(16)] = inst_23037__$1);

(statearr_23173[(17)] = inst_23036__$1);

return statearr_23173;
})();
var statearr_23174_23253 = state_23154__$1;
(statearr_23174_23253[(2)] = null);

(statearr_23174_23253[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (21))){
var inst_23076 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
var statearr_23178_23254 = state_23154__$1;
(statearr_23178_23254[(2)] = inst_23076);

(statearr_23178_23254[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (31))){
var inst_23102 = (state_23154[(9)]);
var inst_23106 = done.call(null,null);
var inst_23107 = cljs.core.async.untap_STAR_.call(null,m,inst_23102);
var state_23154__$1 = (function (){var statearr_23179 = state_23154;
(statearr_23179[(19)] = inst_23106);

return statearr_23179;
})();
var statearr_23180_23255 = state_23154__$1;
(statearr_23180_23255[(2)] = inst_23107);

(statearr_23180_23255[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (32))){
var inst_23096 = (state_23154[(20)]);
var inst_23094 = (state_23154[(21)]);
var inst_23095 = (state_23154[(10)]);
var inst_23097 = (state_23154[(12)]);
var inst_23109 = (state_23154[(2)]);
var inst_23110 = (inst_23097 + (1));
var tmp23175 = inst_23096;
var tmp23176 = inst_23094;
var tmp23177 = inst_23095;
var inst_23094__$1 = tmp23176;
var inst_23095__$1 = tmp23177;
var inst_23096__$1 = tmp23175;
var inst_23097__$1 = inst_23110;
var state_23154__$1 = (function (){var statearr_23181 = state_23154;
(statearr_23181[(20)] = inst_23096__$1);

(statearr_23181[(21)] = inst_23094__$1);

(statearr_23181[(10)] = inst_23095__$1);

(statearr_23181[(12)] = inst_23097__$1);

(statearr_23181[(22)] = inst_23109);

return statearr_23181;
})();
var statearr_23182_23256 = state_23154__$1;
(statearr_23182_23256[(2)] = null);

(statearr_23182_23256[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (40))){
var inst_23122 = (state_23154[(23)]);
var inst_23126 = done.call(null,null);
var inst_23127 = cljs.core.async.untap_STAR_.call(null,m,inst_23122);
var state_23154__$1 = (function (){var statearr_23183 = state_23154;
(statearr_23183[(24)] = inst_23126);

return statearr_23183;
})();
var statearr_23184_23257 = state_23154__$1;
(statearr_23184_23257[(2)] = inst_23127);

(statearr_23184_23257[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (33))){
var inst_23113 = (state_23154[(25)]);
var inst_23115 = cljs.core.chunked_seq_QMARK_.call(null,inst_23113);
var state_23154__$1 = state_23154;
if(inst_23115){
var statearr_23185_23258 = state_23154__$1;
(statearr_23185_23258[(1)] = (36));

} else {
var statearr_23186_23259 = state_23154__$1;
(statearr_23186_23259[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (13))){
var inst_23045 = (state_23154[(26)]);
var inst_23048 = cljs.core.async.close_BANG_.call(null,inst_23045);
var state_23154__$1 = state_23154;
var statearr_23187_23260 = state_23154__$1;
(statearr_23187_23260[(2)] = inst_23048);

(statearr_23187_23260[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (22))){
var inst_23066 = (state_23154[(8)]);
var inst_23069 = cljs.core.async.close_BANG_.call(null,inst_23066);
var state_23154__$1 = state_23154;
var statearr_23188_23261 = state_23154__$1;
(statearr_23188_23261[(2)] = inst_23069);

(statearr_23188_23261[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (36))){
var inst_23113 = (state_23154[(25)]);
var inst_23117 = cljs.core.chunk_first.call(null,inst_23113);
var inst_23118 = cljs.core.chunk_rest.call(null,inst_23113);
var inst_23119 = cljs.core.count.call(null,inst_23117);
var inst_23094 = inst_23118;
var inst_23095 = inst_23117;
var inst_23096 = inst_23119;
var inst_23097 = (0);
var state_23154__$1 = (function (){var statearr_23189 = state_23154;
(statearr_23189[(20)] = inst_23096);

(statearr_23189[(21)] = inst_23094);

(statearr_23189[(10)] = inst_23095);

(statearr_23189[(12)] = inst_23097);

return statearr_23189;
})();
var statearr_23190_23262 = state_23154__$1;
(statearr_23190_23262[(2)] = null);

(statearr_23190_23262[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (41))){
var inst_23113 = (state_23154[(25)]);
var inst_23129 = (state_23154[(2)]);
var inst_23130 = cljs.core.next.call(null,inst_23113);
var inst_23094 = inst_23130;
var inst_23095 = null;
var inst_23096 = (0);
var inst_23097 = (0);
var state_23154__$1 = (function (){var statearr_23191 = state_23154;
(statearr_23191[(20)] = inst_23096);

(statearr_23191[(21)] = inst_23094);

(statearr_23191[(10)] = inst_23095);

(statearr_23191[(12)] = inst_23097);

(statearr_23191[(27)] = inst_23129);

return statearr_23191;
})();
var statearr_23192_23263 = state_23154__$1;
(statearr_23192_23263[(2)] = null);

(statearr_23192_23263[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (43))){
var state_23154__$1 = state_23154;
var statearr_23193_23264 = state_23154__$1;
(statearr_23193_23264[(2)] = null);

(statearr_23193_23264[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (29))){
var inst_23138 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
var statearr_23194_23265 = state_23154__$1;
(statearr_23194_23265[(2)] = inst_23138);

(statearr_23194_23265[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (44))){
var inst_23147 = (state_23154[(2)]);
var state_23154__$1 = (function (){var statearr_23195 = state_23154;
(statearr_23195[(28)] = inst_23147);

return statearr_23195;
})();
var statearr_23196_23266 = state_23154__$1;
(statearr_23196_23266[(2)] = null);

(statearr_23196_23266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (6))){
var inst_23086 = (state_23154[(29)]);
var inst_23085 = cljs.core.deref.call(null,cs);
var inst_23086__$1 = cljs.core.keys.call(null,inst_23085);
var inst_23087 = cljs.core.count.call(null,inst_23086__$1);
var inst_23088 = cljs.core.reset_BANG_.call(null,dctr,inst_23087);
var inst_23093 = cljs.core.seq.call(null,inst_23086__$1);
var inst_23094 = inst_23093;
var inst_23095 = null;
var inst_23096 = (0);
var inst_23097 = (0);
var state_23154__$1 = (function (){var statearr_23197 = state_23154;
(statearr_23197[(29)] = inst_23086__$1);

(statearr_23197[(20)] = inst_23096);

(statearr_23197[(21)] = inst_23094);

(statearr_23197[(10)] = inst_23095);

(statearr_23197[(12)] = inst_23097);

(statearr_23197[(30)] = inst_23088);

return statearr_23197;
})();
var statearr_23198_23267 = state_23154__$1;
(statearr_23198_23267[(2)] = null);

(statearr_23198_23267[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (28))){
var inst_23113 = (state_23154[(25)]);
var inst_23094 = (state_23154[(21)]);
var inst_23113__$1 = cljs.core.seq.call(null,inst_23094);
var state_23154__$1 = (function (){var statearr_23199 = state_23154;
(statearr_23199[(25)] = inst_23113__$1);

return statearr_23199;
})();
if(inst_23113__$1){
var statearr_23200_23268 = state_23154__$1;
(statearr_23200_23268[(1)] = (33));

} else {
var statearr_23201_23269 = state_23154__$1;
(statearr_23201_23269[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (25))){
var inst_23096 = (state_23154[(20)]);
var inst_23097 = (state_23154[(12)]);
var inst_23099 = (inst_23097 < inst_23096);
var inst_23100 = inst_23099;
var state_23154__$1 = state_23154;
if(cljs.core.truth_(inst_23100)){
var statearr_23202_23270 = state_23154__$1;
(statearr_23202_23270[(1)] = (27));

} else {
var statearr_23203_23271 = state_23154__$1;
(statearr_23203_23271[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (34))){
var state_23154__$1 = state_23154;
var statearr_23204_23272 = state_23154__$1;
(statearr_23204_23272[(2)] = null);

(statearr_23204_23272[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (17))){
var state_23154__$1 = state_23154;
var statearr_23205_23273 = state_23154__$1;
(statearr_23205_23273[(2)] = null);

(statearr_23205_23273[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (3))){
var inst_23152 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23154__$1,inst_23152);
} else {
if((state_val_23155 === (12))){
var inst_23081 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
var statearr_23206_23274 = state_23154__$1;
(statearr_23206_23274[(2)] = inst_23081);

(statearr_23206_23274[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (2))){
var state_23154__$1 = state_23154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23154__$1,(4),ch);
} else {
if((state_val_23155 === (23))){
var state_23154__$1 = state_23154;
var statearr_23207_23275 = state_23154__$1;
(statearr_23207_23275[(2)] = null);

(statearr_23207_23275[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (35))){
var inst_23136 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
var statearr_23208_23276 = state_23154__$1;
(statearr_23208_23276[(2)] = inst_23136);

(statearr_23208_23276[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (19))){
var inst_23055 = (state_23154[(7)]);
var inst_23059 = cljs.core.chunk_first.call(null,inst_23055);
var inst_23060 = cljs.core.chunk_rest.call(null,inst_23055);
var inst_23061 = cljs.core.count.call(null,inst_23059);
var inst_23035 = inst_23060;
var inst_23036 = inst_23059;
var inst_23037 = inst_23061;
var inst_23038 = (0);
var state_23154__$1 = (function (){var statearr_23209 = state_23154;
(statearr_23209[(13)] = inst_23038);

(statearr_23209[(15)] = inst_23035);

(statearr_23209[(16)] = inst_23037);

(statearr_23209[(17)] = inst_23036);

return statearr_23209;
})();
var statearr_23210_23277 = state_23154__$1;
(statearr_23210_23277[(2)] = null);

(statearr_23210_23277[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (11))){
var inst_23055 = (state_23154[(7)]);
var inst_23035 = (state_23154[(15)]);
var inst_23055__$1 = cljs.core.seq.call(null,inst_23035);
var state_23154__$1 = (function (){var statearr_23211 = state_23154;
(statearr_23211[(7)] = inst_23055__$1);

return statearr_23211;
})();
if(inst_23055__$1){
var statearr_23212_23278 = state_23154__$1;
(statearr_23212_23278[(1)] = (16));

} else {
var statearr_23213_23279 = state_23154__$1;
(statearr_23213_23279[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (9))){
var inst_23083 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
var statearr_23214_23280 = state_23154__$1;
(statearr_23214_23280[(2)] = inst_23083);

(statearr_23214_23280[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (5))){
var inst_23033 = cljs.core.deref.call(null,cs);
var inst_23034 = cljs.core.seq.call(null,inst_23033);
var inst_23035 = inst_23034;
var inst_23036 = null;
var inst_23037 = (0);
var inst_23038 = (0);
var state_23154__$1 = (function (){var statearr_23215 = state_23154;
(statearr_23215[(13)] = inst_23038);

(statearr_23215[(15)] = inst_23035);

(statearr_23215[(16)] = inst_23037);

(statearr_23215[(17)] = inst_23036);

return statearr_23215;
})();
var statearr_23216_23281 = state_23154__$1;
(statearr_23216_23281[(2)] = null);

(statearr_23216_23281[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (14))){
var state_23154__$1 = state_23154;
var statearr_23217_23282 = state_23154__$1;
(statearr_23217_23282[(2)] = null);

(statearr_23217_23282[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (45))){
var inst_23144 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
var statearr_23218_23283 = state_23154__$1;
(statearr_23218_23283[(2)] = inst_23144);

(statearr_23218_23283[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (26))){
var inst_23086 = (state_23154[(29)]);
var inst_23140 = (state_23154[(2)]);
var inst_23141 = cljs.core.seq.call(null,inst_23086);
var state_23154__$1 = (function (){var statearr_23219 = state_23154;
(statearr_23219[(31)] = inst_23140);

return statearr_23219;
})();
if(inst_23141){
var statearr_23220_23284 = state_23154__$1;
(statearr_23220_23284[(1)] = (42));

} else {
var statearr_23221_23285 = state_23154__$1;
(statearr_23221_23285[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (16))){
var inst_23055 = (state_23154[(7)]);
var inst_23057 = cljs.core.chunked_seq_QMARK_.call(null,inst_23055);
var state_23154__$1 = state_23154;
if(inst_23057){
var statearr_23222_23286 = state_23154__$1;
(statearr_23222_23286[(1)] = (19));

} else {
var statearr_23223_23287 = state_23154__$1;
(statearr_23223_23287[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (38))){
var inst_23133 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
var statearr_23224_23288 = state_23154__$1;
(statearr_23224_23288[(2)] = inst_23133);

(statearr_23224_23288[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (30))){
var state_23154__$1 = state_23154;
var statearr_23225_23289 = state_23154__$1;
(statearr_23225_23289[(2)] = null);

(statearr_23225_23289[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (10))){
var inst_23038 = (state_23154[(13)]);
var inst_23036 = (state_23154[(17)]);
var inst_23044 = cljs.core._nth.call(null,inst_23036,inst_23038);
var inst_23045 = cljs.core.nth.call(null,inst_23044,(0),null);
var inst_23046 = cljs.core.nth.call(null,inst_23044,(1),null);
var state_23154__$1 = (function (){var statearr_23226 = state_23154;
(statearr_23226[(26)] = inst_23045);

return statearr_23226;
})();
if(cljs.core.truth_(inst_23046)){
var statearr_23227_23290 = state_23154__$1;
(statearr_23227_23290[(1)] = (13));

} else {
var statearr_23228_23291 = state_23154__$1;
(statearr_23228_23291[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (18))){
var inst_23079 = (state_23154[(2)]);
var state_23154__$1 = state_23154;
var statearr_23229_23292 = state_23154__$1;
(statearr_23229_23292[(2)] = inst_23079);

(statearr_23229_23292[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (42))){
var state_23154__$1 = state_23154;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23154__$1,(45),dchan);
} else {
if((state_val_23155 === (37))){
var inst_23113 = (state_23154[(25)]);
var inst_23026 = (state_23154[(11)]);
var inst_23122 = (state_23154[(23)]);
var inst_23122__$1 = cljs.core.first.call(null,inst_23113);
var inst_23123 = cljs.core.async.put_BANG_.call(null,inst_23122__$1,inst_23026,done);
var state_23154__$1 = (function (){var statearr_23230 = state_23154;
(statearr_23230[(23)] = inst_23122__$1);

return statearr_23230;
})();
if(cljs.core.truth_(inst_23123)){
var statearr_23231_23293 = state_23154__$1;
(statearr_23231_23293[(1)] = (39));

} else {
var statearr_23232_23294 = state_23154__$1;
(statearr_23232_23294[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23155 === (8))){
var inst_23038 = (state_23154[(13)]);
var inst_23037 = (state_23154[(16)]);
var inst_23040 = (inst_23038 < inst_23037);
var inst_23041 = inst_23040;
var state_23154__$1 = state_23154;
if(cljs.core.truth_(inst_23041)){
var statearr_23233_23295 = state_23154__$1;
(statearr_23233_23295[(1)] = (10));

} else {
var statearr_23234_23296 = state_23154__$1;
(statearr_23234_23296[(1)] = (11));

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
});})(c__18935__auto___23242,cs,m,dchan,dctr,done))
;
return ((function (switch__18914__auto__,c__18935__auto___23242,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__18915__auto__ = null;
var cljs$core$async$mult_$_state_machine__18915__auto____0 = (function (){
var statearr_23238 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23238[(0)] = cljs$core$async$mult_$_state_machine__18915__auto__);

(statearr_23238[(1)] = (1));

return statearr_23238;
});
var cljs$core$async$mult_$_state_machine__18915__auto____1 = (function (state_23154){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_23154);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e23239){if((e23239 instanceof Object)){
var ex__18918__auto__ = e23239;
var statearr_23240_23297 = state_23154;
(statearr_23240_23297[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23154);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23239;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23298 = state_23154;
state_23154 = G__23298;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__18915__auto__ = function(state_23154){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__18915__auto____1.call(this,state_23154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__18915__auto____0;
cljs$core$async$mult_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__18915__auto____1;
return cljs$core$async$mult_$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___23242,cs,m,dchan,dctr,done))
})();
var state__18937__auto__ = (function (){var statearr_23241 = f__18936__auto__.call(null);
(statearr_23241[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___23242);

return statearr_23241;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___23242,cs,m,dchan,dctr,done))
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
var args23299 = [];
var len__17877__auto___23302 = arguments.length;
var i__17878__auto___23303 = (0);
while(true){
if((i__17878__auto___23303 < len__17877__auto___23302)){
args23299.push((arguments[i__17878__auto___23303]));

var G__23304 = (i__17878__auto___23303 + (1));
i__17878__auto___23303 = G__23304;
continue;
} else {
}
break;
}

var G__23301 = args23299.length;
switch (G__23301) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23299.length)].join('')));

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
var len__17877__auto___23316 = arguments.length;
var i__17878__auto___23317 = (0);
while(true){
if((i__17878__auto___23317 < len__17877__auto___23316)){
args__17884__auto__.push((arguments[i__17878__auto___23317]));

var G__23318 = (i__17878__auto___23317 + (1));
i__17878__auto___23317 = G__23318;
continue;
} else {
}
break;
}

var argseq__17885__auto__ = ((((3) < args__17884__auto__.length))?(new cljs.core.IndexedSeq(args__17884__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17885__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23310){
var map__23311 = p__23310;
var map__23311__$1 = ((((!((map__23311 == null)))?((((map__23311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23311):map__23311);
var opts = map__23311__$1;
var statearr_23313_23319 = state;
(statearr_23313_23319[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__23311,map__23311__$1,opts){
return (function (val){
var statearr_23314_23320 = state;
(statearr_23314_23320[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__23311,map__23311__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_23315_23321 = state;
(statearr_23315_23321[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23306){
var G__23307 = cljs.core.first.call(null,seq23306);
var seq23306__$1 = cljs.core.next.call(null,seq23306);
var G__23308 = cljs.core.first.call(null,seq23306__$1);
var seq23306__$2 = cljs.core.next.call(null,seq23306__$1);
var G__23309 = cljs.core.first.call(null,seq23306__$2);
var seq23306__$3 = cljs.core.next.call(null,seq23306__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23307,G__23308,G__23309,seq23306__$3);
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
if(typeof cljs.core.async.t_cljs$core$async23485 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23485 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23486){
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
this.meta23486 = meta23486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23487,meta23486__$1){
var self__ = this;
var _23487__$1 = this;
return (new cljs.core.async.t_cljs$core$async23485(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23486__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23485.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23487){
var self__ = this;
var _23487__$1 = this;
return self__.meta23486;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23485.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23485.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23485.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async23485.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23485.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23485.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23485.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23485.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async23485.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23486","meta23486",1079854477,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async23485.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23485.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23485";

cljs.core.async.t_cljs$core$async23485.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async23485");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async23485 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async23485(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23486){
return (new cljs.core.async.t_cljs$core$async23485(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23486));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async23485(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18935__auto___23648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___23648,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___23648,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23585){
var state_val_23586 = (state_23585[(1)]);
if((state_val_23586 === (7))){
var inst_23503 = (state_23585[(2)]);
var state_23585__$1 = state_23585;
var statearr_23587_23649 = state_23585__$1;
(statearr_23587_23649[(2)] = inst_23503);

(statearr_23587_23649[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (20))){
var inst_23515 = (state_23585[(7)]);
var state_23585__$1 = state_23585;
var statearr_23588_23650 = state_23585__$1;
(statearr_23588_23650[(2)] = inst_23515);

(statearr_23588_23650[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (27))){
var state_23585__$1 = state_23585;
var statearr_23589_23651 = state_23585__$1;
(statearr_23589_23651[(2)] = null);

(statearr_23589_23651[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (1))){
var inst_23491 = (state_23585[(8)]);
var inst_23491__$1 = calc_state.call(null);
var inst_23493 = (inst_23491__$1 == null);
var inst_23494 = cljs.core.not.call(null,inst_23493);
var state_23585__$1 = (function (){var statearr_23590 = state_23585;
(statearr_23590[(8)] = inst_23491__$1);

return statearr_23590;
})();
if(inst_23494){
var statearr_23591_23652 = state_23585__$1;
(statearr_23591_23652[(1)] = (2));

} else {
var statearr_23592_23653 = state_23585__$1;
(statearr_23592_23653[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (24))){
var inst_23538 = (state_23585[(9)]);
var inst_23545 = (state_23585[(10)]);
var inst_23559 = (state_23585[(11)]);
var inst_23559__$1 = inst_23538.call(null,inst_23545);
var state_23585__$1 = (function (){var statearr_23593 = state_23585;
(statearr_23593[(11)] = inst_23559__$1);

return statearr_23593;
})();
if(cljs.core.truth_(inst_23559__$1)){
var statearr_23594_23654 = state_23585__$1;
(statearr_23594_23654[(1)] = (29));

} else {
var statearr_23595_23655 = state_23585__$1;
(statearr_23595_23655[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (4))){
var inst_23506 = (state_23585[(2)]);
var state_23585__$1 = state_23585;
if(cljs.core.truth_(inst_23506)){
var statearr_23596_23656 = state_23585__$1;
(statearr_23596_23656[(1)] = (8));

} else {
var statearr_23597_23657 = state_23585__$1;
(statearr_23597_23657[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (15))){
var inst_23532 = (state_23585[(2)]);
var state_23585__$1 = state_23585;
if(cljs.core.truth_(inst_23532)){
var statearr_23598_23658 = state_23585__$1;
(statearr_23598_23658[(1)] = (19));

} else {
var statearr_23599_23659 = state_23585__$1;
(statearr_23599_23659[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (21))){
var inst_23537 = (state_23585[(12)]);
var inst_23537__$1 = (state_23585[(2)]);
var inst_23538 = cljs.core.get.call(null,inst_23537__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23539 = cljs.core.get.call(null,inst_23537__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23540 = cljs.core.get.call(null,inst_23537__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_23585__$1 = (function (){var statearr_23600 = state_23585;
(statearr_23600[(12)] = inst_23537__$1);

(statearr_23600[(9)] = inst_23538);

(statearr_23600[(13)] = inst_23539);

return statearr_23600;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_23585__$1,(22),inst_23540);
} else {
if((state_val_23586 === (31))){
var inst_23567 = (state_23585[(2)]);
var state_23585__$1 = state_23585;
if(cljs.core.truth_(inst_23567)){
var statearr_23601_23660 = state_23585__$1;
(statearr_23601_23660[(1)] = (32));

} else {
var statearr_23602_23661 = state_23585__$1;
(statearr_23602_23661[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (32))){
var inst_23544 = (state_23585[(14)]);
var state_23585__$1 = state_23585;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23585__$1,(35),out,inst_23544);
} else {
if((state_val_23586 === (33))){
var inst_23537 = (state_23585[(12)]);
var inst_23515 = inst_23537;
var state_23585__$1 = (function (){var statearr_23603 = state_23585;
(statearr_23603[(7)] = inst_23515);

return statearr_23603;
})();
var statearr_23604_23662 = state_23585__$1;
(statearr_23604_23662[(2)] = null);

(statearr_23604_23662[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (13))){
var inst_23515 = (state_23585[(7)]);
var inst_23522 = inst_23515.cljs$lang$protocol_mask$partition0$;
var inst_23523 = (inst_23522 & (64));
var inst_23524 = inst_23515.cljs$core$ISeq$;
var inst_23525 = (inst_23523) || (inst_23524);
var state_23585__$1 = state_23585;
if(cljs.core.truth_(inst_23525)){
var statearr_23605_23663 = state_23585__$1;
(statearr_23605_23663[(1)] = (16));

} else {
var statearr_23606_23664 = state_23585__$1;
(statearr_23606_23664[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (22))){
var inst_23544 = (state_23585[(14)]);
var inst_23545 = (state_23585[(10)]);
var inst_23543 = (state_23585[(2)]);
var inst_23544__$1 = cljs.core.nth.call(null,inst_23543,(0),null);
var inst_23545__$1 = cljs.core.nth.call(null,inst_23543,(1),null);
var inst_23546 = (inst_23544__$1 == null);
var inst_23547 = cljs.core._EQ_.call(null,inst_23545__$1,change);
var inst_23548 = (inst_23546) || (inst_23547);
var state_23585__$1 = (function (){var statearr_23607 = state_23585;
(statearr_23607[(14)] = inst_23544__$1);

(statearr_23607[(10)] = inst_23545__$1);

return statearr_23607;
})();
if(cljs.core.truth_(inst_23548)){
var statearr_23608_23665 = state_23585__$1;
(statearr_23608_23665[(1)] = (23));

} else {
var statearr_23609_23666 = state_23585__$1;
(statearr_23609_23666[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (36))){
var inst_23537 = (state_23585[(12)]);
var inst_23515 = inst_23537;
var state_23585__$1 = (function (){var statearr_23610 = state_23585;
(statearr_23610[(7)] = inst_23515);

return statearr_23610;
})();
var statearr_23611_23667 = state_23585__$1;
(statearr_23611_23667[(2)] = null);

(statearr_23611_23667[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (29))){
var inst_23559 = (state_23585[(11)]);
var state_23585__$1 = state_23585;
var statearr_23612_23668 = state_23585__$1;
(statearr_23612_23668[(2)] = inst_23559);

(statearr_23612_23668[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (6))){
var state_23585__$1 = state_23585;
var statearr_23613_23669 = state_23585__$1;
(statearr_23613_23669[(2)] = false);

(statearr_23613_23669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (28))){
var inst_23555 = (state_23585[(2)]);
var inst_23556 = calc_state.call(null);
var inst_23515 = inst_23556;
var state_23585__$1 = (function (){var statearr_23614 = state_23585;
(statearr_23614[(15)] = inst_23555);

(statearr_23614[(7)] = inst_23515);

return statearr_23614;
})();
var statearr_23615_23670 = state_23585__$1;
(statearr_23615_23670[(2)] = null);

(statearr_23615_23670[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (25))){
var inst_23581 = (state_23585[(2)]);
var state_23585__$1 = state_23585;
var statearr_23616_23671 = state_23585__$1;
(statearr_23616_23671[(2)] = inst_23581);

(statearr_23616_23671[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (34))){
var inst_23579 = (state_23585[(2)]);
var state_23585__$1 = state_23585;
var statearr_23617_23672 = state_23585__$1;
(statearr_23617_23672[(2)] = inst_23579);

(statearr_23617_23672[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (17))){
var state_23585__$1 = state_23585;
var statearr_23618_23673 = state_23585__$1;
(statearr_23618_23673[(2)] = false);

(statearr_23618_23673[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (3))){
var state_23585__$1 = state_23585;
var statearr_23619_23674 = state_23585__$1;
(statearr_23619_23674[(2)] = false);

(statearr_23619_23674[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (12))){
var inst_23583 = (state_23585[(2)]);
var state_23585__$1 = state_23585;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23585__$1,inst_23583);
} else {
if((state_val_23586 === (2))){
var inst_23491 = (state_23585[(8)]);
var inst_23496 = inst_23491.cljs$lang$protocol_mask$partition0$;
var inst_23497 = (inst_23496 & (64));
var inst_23498 = inst_23491.cljs$core$ISeq$;
var inst_23499 = (inst_23497) || (inst_23498);
var state_23585__$1 = state_23585;
if(cljs.core.truth_(inst_23499)){
var statearr_23620_23675 = state_23585__$1;
(statearr_23620_23675[(1)] = (5));

} else {
var statearr_23621_23676 = state_23585__$1;
(statearr_23621_23676[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (23))){
var inst_23544 = (state_23585[(14)]);
var inst_23550 = (inst_23544 == null);
var state_23585__$1 = state_23585;
if(cljs.core.truth_(inst_23550)){
var statearr_23622_23677 = state_23585__$1;
(statearr_23622_23677[(1)] = (26));

} else {
var statearr_23623_23678 = state_23585__$1;
(statearr_23623_23678[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (35))){
var inst_23570 = (state_23585[(2)]);
var state_23585__$1 = state_23585;
if(cljs.core.truth_(inst_23570)){
var statearr_23624_23679 = state_23585__$1;
(statearr_23624_23679[(1)] = (36));

} else {
var statearr_23625_23680 = state_23585__$1;
(statearr_23625_23680[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (19))){
var inst_23515 = (state_23585[(7)]);
var inst_23534 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23515);
var state_23585__$1 = state_23585;
var statearr_23626_23681 = state_23585__$1;
(statearr_23626_23681[(2)] = inst_23534);

(statearr_23626_23681[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (11))){
var inst_23515 = (state_23585[(7)]);
var inst_23519 = (inst_23515 == null);
var inst_23520 = cljs.core.not.call(null,inst_23519);
var state_23585__$1 = state_23585;
if(inst_23520){
var statearr_23627_23682 = state_23585__$1;
(statearr_23627_23682[(1)] = (13));

} else {
var statearr_23628_23683 = state_23585__$1;
(statearr_23628_23683[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (9))){
var inst_23491 = (state_23585[(8)]);
var state_23585__$1 = state_23585;
var statearr_23629_23684 = state_23585__$1;
(statearr_23629_23684[(2)] = inst_23491);

(statearr_23629_23684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (5))){
var state_23585__$1 = state_23585;
var statearr_23630_23685 = state_23585__$1;
(statearr_23630_23685[(2)] = true);

(statearr_23630_23685[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (14))){
var state_23585__$1 = state_23585;
var statearr_23631_23686 = state_23585__$1;
(statearr_23631_23686[(2)] = false);

(statearr_23631_23686[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (26))){
var inst_23545 = (state_23585[(10)]);
var inst_23552 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_23545);
var state_23585__$1 = state_23585;
var statearr_23632_23687 = state_23585__$1;
(statearr_23632_23687[(2)] = inst_23552);

(statearr_23632_23687[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (16))){
var state_23585__$1 = state_23585;
var statearr_23633_23688 = state_23585__$1;
(statearr_23633_23688[(2)] = true);

(statearr_23633_23688[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (38))){
var inst_23575 = (state_23585[(2)]);
var state_23585__$1 = state_23585;
var statearr_23634_23689 = state_23585__$1;
(statearr_23634_23689[(2)] = inst_23575);

(statearr_23634_23689[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (30))){
var inst_23538 = (state_23585[(9)]);
var inst_23545 = (state_23585[(10)]);
var inst_23539 = (state_23585[(13)]);
var inst_23562 = cljs.core.empty_QMARK_.call(null,inst_23538);
var inst_23563 = inst_23539.call(null,inst_23545);
var inst_23564 = cljs.core.not.call(null,inst_23563);
var inst_23565 = (inst_23562) && (inst_23564);
var state_23585__$1 = state_23585;
var statearr_23635_23690 = state_23585__$1;
(statearr_23635_23690[(2)] = inst_23565);

(statearr_23635_23690[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (10))){
var inst_23491 = (state_23585[(8)]);
var inst_23511 = (state_23585[(2)]);
var inst_23512 = cljs.core.get.call(null,inst_23511,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_23513 = cljs.core.get.call(null,inst_23511,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_23514 = cljs.core.get.call(null,inst_23511,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_23515 = inst_23491;
var state_23585__$1 = (function (){var statearr_23636 = state_23585;
(statearr_23636[(16)] = inst_23514);

(statearr_23636[(17)] = inst_23512);

(statearr_23636[(7)] = inst_23515);

(statearr_23636[(18)] = inst_23513);

return statearr_23636;
})();
var statearr_23637_23691 = state_23585__$1;
(statearr_23637_23691[(2)] = null);

(statearr_23637_23691[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (18))){
var inst_23529 = (state_23585[(2)]);
var state_23585__$1 = state_23585;
var statearr_23638_23692 = state_23585__$1;
(statearr_23638_23692[(2)] = inst_23529);

(statearr_23638_23692[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (37))){
var state_23585__$1 = state_23585;
var statearr_23639_23693 = state_23585__$1;
(statearr_23639_23693[(2)] = null);

(statearr_23639_23693[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23586 === (8))){
var inst_23491 = (state_23585[(8)]);
var inst_23508 = cljs.core.apply.call(null,cljs.core.hash_map,inst_23491);
var state_23585__$1 = state_23585;
var statearr_23640_23694 = state_23585__$1;
(statearr_23640_23694[(2)] = inst_23508);

(statearr_23640_23694[(1)] = (10));


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
});})(c__18935__auto___23648,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__18914__auto__,c__18935__auto___23648,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__18915__auto__ = null;
var cljs$core$async$mix_$_state_machine__18915__auto____0 = (function (){
var statearr_23644 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23644[(0)] = cljs$core$async$mix_$_state_machine__18915__auto__);

(statearr_23644[(1)] = (1));

return statearr_23644;
});
var cljs$core$async$mix_$_state_machine__18915__auto____1 = (function (state_23585){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_23585);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e23645){if((e23645 instanceof Object)){
var ex__18918__auto__ = e23645;
var statearr_23646_23695 = state_23585;
(statearr_23646_23695[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23585);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23645;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23696 = state_23585;
state_23585 = G__23696;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__18915__auto__ = function(state_23585){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__18915__auto____1.call(this,state_23585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__18915__auto____0;
cljs$core$async$mix_$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__18915__auto____1;
return cljs$core$async$mix_$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___23648,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__18937__auto__ = (function (){var statearr_23647 = f__18936__auto__.call(null);
(statearr_23647[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___23648);

return statearr_23647;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___23648,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args23697 = [];
var len__17877__auto___23700 = arguments.length;
var i__17878__auto___23701 = (0);
while(true){
if((i__17878__auto___23701 < len__17877__auto___23700)){
args23697.push((arguments[i__17878__auto___23701]));

var G__23702 = (i__17878__auto___23701 + (1));
i__17878__auto___23701 = G__23702;
continue;
} else {
}
break;
}

var G__23699 = args23697.length;
switch (G__23699) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23697.length)].join('')));

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
var args23705 = [];
var len__17877__auto___23830 = arguments.length;
var i__17878__auto___23831 = (0);
while(true){
if((i__17878__auto___23831 < len__17877__auto___23830)){
args23705.push((arguments[i__17878__auto___23831]));

var G__23832 = (i__17878__auto___23831 + (1));
i__17878__auto___23831 = G__23832;
continue;
} else {
}
break;
}

var G__23707 = args23705.length;
switch (G__23707) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23705.length)].join('')));

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
return (function (p1__23704_SHARP_){
if(cljs.core.truth_(p1__23704_SHARP_.call(null,topic))){
return p1__23704_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__23704_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16819__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async23708 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async23708 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23709){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23709 = meta23709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async23708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23710,meta23709__$1){
var self__ = this;
var _23710__$1 = this;
return (new cljs.core.async.t_cljs$core$async23708(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23709__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23708.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23710){
var self__ = this;
var _23710__$1 = this;
return self__.meta23709;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23708.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async23708.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23708.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async23708.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23708.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async23708.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23708.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23708.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23709","meta23709",-1963182274,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async23708.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async23708.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async23708";

cljs.core.async.t_cljs$core$async23708.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async23708");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async23708 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async23708(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23709){
return (new cljs.core.async.t_cljs$core$async23708(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23709));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async23708(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__18935__auto___23834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___23834,mults,ensure_mult,p){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___23834,mults,ensure_mult,p){
return (function (state_23782){
var state_val_23783 = (state_23782[(1)]);
if((state_val_23783 === (7))){
var inst_23778 = (state_23782[(2)]);
var state_23782__$1 = state_23782;
var statearr_23784_23835 = state_23782__$1;
(statearr_23784_23835[(2)] = inst_23778);

(statearr_23784_23835[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23783 === (20))){
var state_23782__$1 = state_23782;
var statearr_23785_23836 = state_23782__$1;
(statearr_23785_23836[(2)] = null);

(statearr_23785_23836[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23783 === (1))){
var state_23782__$1 = state_23782;
var statearr_23786_23837 = state_23782__$1;
(statearr_23786_23837[(2)] = null);

(statearr_23786_23837[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23783 === (24))){
var inst_23761 = (state_23782[(7)]);
var inst_23770 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_23761);
var state_23782__$1 = state_23782;
var statearr_23787_23838 = state_23782__$1;
(statearr_23787_23838[(2)] = inst_23770);

(statearr_23787_23838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23783 === (4))){
var inst_23713 = (state_23782[(8)]);
var inst_23713__$1 = (state_23782[(2)]);
var inst_23714 = (inst_23713__$1 == null);
var state_23782__$1 = (function (){var statearr_23788 = state_23782;
(statearr_23788[(8)] = inst_23713__$1);

return statearr_23788;
})();
if(cljs.core.truth_(inst_23714)){
var statearr_23789_23839 = state_23782__$1;
(statearr_23789_23839[(1)] = (5));

} else {
var statearr_23790_23840 = state_23782__$1;
(statearr_23790_23840[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23783 === (15))){
var inst_23755 = (state_23782[(2)]);
var state_23782__$1 = state_23782;
var statearr_23791_23841 = state_23782__$1;
(statearr_23791_23841[(2)] = inst_23755);

(statearr_23791_23841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23783 === (21))){
var inst_23775 = (state_23782[(2)]);
var state_23782__$1 = (function (){var statearr_23792 = state_23782;
(statearr_23792[(9)] = inst_23775);

return statearr_23792;
})();
var statearr_23793_23842 = state_23782__$1;
(statearr_23793_23842[(2)] = null);

(statearr_23793_23842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23783 === (13))){
var inst_23737 = (state_23782[(10)]);
var inst_23739 = cljs.core.chunked_seq_QMARK_.call(null,inst_23737);
var state_23782__$1 = state_23782;
if(inst_23739){
var statearr_23794_23843 = state_23782__$1;
(statearr_23794_23843[(1)] = (16));

} else {
var statearr_23795_23844 = state_23782__$1;
(statearr_23795_23844[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23783 === (22))){
var inst_23767 = (state_23782[(2)]);
var state_23782__$1 = state_23782;
if(cljs.core.truth_(inst_23767)){
var statearr_23796_23845 = state_23782__$1;
(statearr_23796_23845[(1)] = (23));

} else {
var statearr_23797_23846 = state_23782__$1;
(statearr_23797_23846[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23783 === (6))){
var inst_23761 = (state_23782[(7)]);
var inst_23763 = (state_23782[(11)]);
var inst_23713 = (state_23782[(8)]);
var inst_23761__$1 = topic_fn.call(null,inst_23713);
var inst_23762 = cljs.core.deref.call(null,mults);
var inst_23763__$1 = cljs.core.get.call(null,inst_23762,inst_23761__$1);
var state_23782__$1 = (function (){var statearr_23798 = state_23782;
(statearr_23798[(7)] = inst_23761__$1);

(statearr_23798[(11)] = inst_23763__$1);

return statearr_23798;
})();
if(cljs.core.truth_(inst_23763__$1)){
var statearr_23799_23847 = state_23782__$1;
(statearr_23799_23847[(1)] = (19));

} else {
var statearr_23800_23848 = state_23782__$1;
(statearr_23800_23848[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23783 === (25))){
var inst_23772 = (state_23782[(2)]);
var state_23782__$1 = state_23782;
var statearr_23801_23849 = state_23782__$1;
(statearr_23801_23849[(2)] = inst_23772);

(statearr_23801_23849[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23783 === (17))){
var inst_23737 = (state_23782[(10)]);
var inst_23746 = cljs.core.first.call(null,inst_23737);
var inst_23747 = cljs.core.async.muxch_STAR_.call(null,inst_23746);
var inst_23748 = cljs.core.async.close_BANG_.call(null,inst_23747);
var inst_23749 = cljs.core.next.call(null,inst_23737);
var inst_23723 = inst_23749;
var inst_23724 = null;
var inst_23725 = (0);
var inst_23726 = (0);
var state_23782__$1 = (function (){var statearr_23802 = state_23782;
(statearr_23802[(12)] = inst_23725);

(statearr_23802[(13)] = inst_23724);

(statearr_23802[(14)] = inst_23726);

(statearr_23802[(15)] = inst_23748);

(statearr_23802[(16)] = inst_23723);

return statearr_23802;
})();
var statearr_23803_23850 = state_23782__$1;
(statearr_23803_23850[(2)] = null);

(statearr_23803_23850[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23783 === (3))){
var inst_23780 = (state_23782[(2)]);
var state_23782__$1 = state_23782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23782__$1,inst_23780);
} else {
if((state_val_23783 === (12))){
var inst_23757 = (state_23782[(2)]);
var state_23782__$1 = state_23782;
var statearr_23804_23851 = state_23782__$1;
(statearr_23804_23851[(2)] = inst_23757);

(statearr_23804_23851[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23783 === (2))){
var state_23782__$1 = state_23782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23782__$1,(4),ch);
} else {
if((state_val_23783 === (23))){
var state_23782__$1 = state_23782;
var statearr_23805_23852 = state_23782__$1;
(statearr_23805_23852[(2)] = null);

(statearr_23805_23852[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23783 === (19))){
var inst_23763 = (state_23782[(11)]);
var inst_23713 = (state_23782[(8)]);
var inst_23765 = cljs.core.async.muxch_STAR_.call(null,inst_23763);
var state_23782__$1 = state_23782;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23782__$1,(22),inst_23765,inst_23713);
} else {
if((state_val_23783 === (11))){
var inst_23737 = (state_23782[(10)]);
var inst_23723 = (state_23782[(16)]);
var inst_23737__$1 = cljs.core.seq.call(null,inst_23723);
var state_23782__$1 = (function (){var statearr_23806 = state_23782;
(statearr_23806[(10)] = inst_23737__$1);

return statearr_23806;
})();
if(inst_23737__$1){
var statearr_23807_23853 = state_23782__$1;
(statearr_23807_23853[(1)] = (13));

} else {
var statearr_23808_23854 = state_23782__$1;
(statearr_23808_23854[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23783 === (9))){
var inst_23759 = (state_23782[(2)]);
var state_23782__$1 = state_23782;
var statearr_23809_23855 = state_23782__$1;
(statearr_23809_23855[(2)] = inst_23759);

(statearr_23809_23855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23783 === (5))){
var inst_23720 = cljs.core.deref.call(null,mults);
var inst_23721 = cljs.core.vals.call(null,inst_23720);
var inst_23722 = cljs.core.seq.call(null,inst_23721);
var inst_23723 = inst_23722;
var inst_23724 = null;
var inst_23725 = (0);
var inst_23726 = (0);
var state_23782__$1 = (function (){var statearr_23810 = state_23782;
(statearr_23810[(12)] = inst_23725);

(statearr_23810[(13)] = inst_23724);

(statearr_23810[(14)] = inst_23726);

(statearr_23810[(16)] = inst_23723);

return statearr_23810;
})();
var statearr_23811_23856 = state_23782__$1;
(statearr_23811_23856[(2)] = null);

(statearr_23811_23856[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23783 === (14))){
var state_23782__$1 = state_23782;
var statearr_23815_23857 = state_23782__$1;
(statearr_23815_23857[(2)] = null);

(statearr_23815_23857[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23783 === (16))){
var inst_23737 = (state_23782[(10)]);
var inst_23741 = cljs.core.chunk_first.call(null,inst_23737);
var inst_23742 = cljs.core.chunk_rest.call(null,inst_23737);
var inst_23743 = cljs.core.count.call(null,inst_23741);
var inst_23723 = inst_23742;
var inst_23724 = inst_23741;
var inst_23725 = inst_23743;
var inst_23726 = (0);
var state_23782__$1 = (function (){var statearr_23816 = state_23782;
(statearr_23816[(12)] = inst_23725);

(statearr_23816[(13)] = inst_23724);

(statearr_23816[(14)] = inst_23726);

(statearr_23816[(16)] = inst_23723);

return statearr_23816;
})();
var statearr_23817_23858 = state_23782__$1;
(statearr_23817_23858[(2)] = null);

(statearr_23817_23858[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23783 === (10))){
var inst_23725 = (state_23782[(12)]);
var inst_23724 = (state_23782[(13)]);
var inst_23726 = (state_23782[(14)]);
var inst_23723 = (state_23782[(16)]);
var inst_23731 = cljs.core._nth.call(null,inst_23724,inst_23726);
var inst_23732 = cljs.core.async.muxch_STAR_.call(null,inst_23731);
var inst_23733 = cljs.core.async.close_BANG_.call(null,inst_23732);
var inst_23734 = (inst_23726 + (1));
var tmp23812 = inst_23725;
var tmp23813 = inst_23724;
var tmp23814 = inst_23723;
var inst_23723__$1 = tmp23814;
var inst_23724__$1 = tmp23813;
var inst_23725__$1 = tmp23812;
var inst_23726__$1 = inst_23734;
var state_23782__$1 = (function (){var statearr_23818 = state_23782;
(statearr_23818[(12)] = inst_23725__$1);

(statearr_23818[(17)] = inst_23733);

(statearr_23818[(13)] = inst_23724__$1);

(statearr_23818[(14)] = inst_23726__$1);

(statearr_23818[(16)] = inst_23723__$1);

return statearr_23818;
})();
var statearr_23819_23859 = state_23782__$1;
(statearr_23819_23859[(2)] = null);

(statearr_23819_23859[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23783 === (18))){
var inst_23752 = (state_23782[(2)]);
var state_23782__$1 = state_23782;
var statearr_23820_23860 = state_23782__$1;
(statearr_23820_23860[(2)] = inst_23752);

(statearr_23820_23860[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23783 === (8))){
var inst_23725 = (state_23782[(12)]);
var inst_23726 = (state_23782[(14)]);
var inst_23728 = (inst_23726 < inst_23725);
var inst_23729 = inst_23728;
var state_23782__$1 = state_23782;
if(cljs.core.truth_(inst_23729)){
var statearr_23821_23861 = state_23782__$1;
(statearr_23821_23861[(1)] = (10));

} else {
var statearr_23822_23862 = state_23782__$1;
(statearr_23822_23862[(1)] = (11));

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
});})(c__18935__auto___23834,mults,ensure_mult,p))
;
return ((function (switch__18914__auto__,c__18935__auto___23834,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__18915__auto__ = null;
var cljs$core$async$state_machine__18915__auto____0 = (function (){
var statearr_23826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23826[(0)] = cljs$core$async$state_machine__18915__auto__);

(statearr_23826[(1)] = (1));

return statearr_23826;
});
var cljs$core$async$state_machine__18915__auto____1 = (function (state_23782){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_23782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e23827){if((e23827 instanceof Object)){
var ex__18918__auto__ = e23827;
var statearr_23828_23863 = state_23782;
(statearr_23828_23863[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23864 = state_23782;
state_23782 = G__23864;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$state_machine__18915__auto__ = function(state_23782){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18915__auto____1.call(this,state_23782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18915__auto____0;
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18915__auto____1;
return cljs$core$async$state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___23834,mults,ensure_mult,p))
})();
var state__18937__auto__ = (function (){var statearr_23829 = f__18936__auto__.call(null);
(statearr_23829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___23834);

return statearr_23829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___23834,mults,ensure_mult,p))
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
var args23865 = [];
var len__17877__auto___23868 = arguments.length;
var i__17878__auto___23869 = (0);
while(true){
if((i__17878__auto___23869 < len__17877__auto___23868)){
args23865.push((arguments[i__17878__auto___23869]));

var G__23870 = (i__17878__auto___23869 + (1));
i__17878__auto___23869 = G__23870;
continue;
} else {
}
break;
}

var G__23867 = args23865.length;
switch (G__23867) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23865.length)].join('')));

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
var args23872 = [];
var len__17877__auto___23875 = arguments.length;
var i__17878__auto___23876 = (0);
while(true){
if((i__17878__auto___23876 < len__17877__auto___23875)){
args23872.push((arguments[i__17878__auto___23876]));

var G__23877 = (i__17878__auto___23876 + (1));
i__17878__auto___23876 = G__23877;
continue;
} else {
}
break;
}

var G__23874 = args23872.length;
switch (G__23874) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23872.length)].join('')));

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
var args23879 = [];
var len__17877__auto___23950 = arguments.length;
var i__17878__auto___23951 = (0);
while(true){
if((i__17878__auto___23951 < len__17877__auto___23950)){
args23879.push((arguments[i__17878__auto___23951]));

var G__23952 = (i__17878__auto___23951 + (1));
i__17878__auto___23951 = G__23952;
continue;
} else {
}
break;
}

var G__23881 = args23879.length;
switch (G__23881) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23879.length)].join('')));

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
var c__18935__auto___23954 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___23954,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___23954,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_23920){
var state_val_23921 = (state_23920[(1)]);
if((state_val_23921 === (7))){
var state_23920__$1 = state_23920;
var statearr_23922_23955 = state_23920__$1;
(statearr_23922_23955[(2)] = null);

(statearr_23922_23955[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (1))){
var state_23920__$1 = state_23920;
var statearr_23923_23956 = state_23920__$1;
(statearr_23923_23956[(2)] = null);

(statearr_23923_23956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (4))){
var inst_23884 = (state_23920[(7)]);
var inst_23886 = (inst_23884 < cnt);
var state_23920__$1 = state_23920;
if(cljs.core.truth_(inst_23886)){
var statearr_23924_23957 = state_23920__$1;
(statearr_23924_23957[(1)] = (6));

} else {
var statearr_23925_23958 = state_23920__$1;
(statearr_23925_23958[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (15))){
var inst_23916 = (state_23920[(2)]);
var state_23920__$1 = state_23920;
var statearr_23926_23959 = state_23920__$1;
(statearr_23926_23959[(2)] = inst_23916);

(statearr_23926_23959[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (13))){
var inst_23909 = cljs.core.async.close_BANG_.call(null,out);
var state_23920__$1 = state_23920;
var statearr_23927_23960 = state_23920__$1;
(statearr_23927_23960[(2)] = inst_23909);

(statearr_23927_23960[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (6))){
var state_23920__$1 = state_23920;
var statearr_23928_23961 = state_23920__$1;
(statearr_23928_23961[(2)] = null);

(statearr_23928_23961[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (3))){
var inst_23918 = (state_23920[(2)]);
var state_23920__$1 = state_23920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23920__$1,inst_23918);
} else {
if((state_val_23921 === (12))){
var inst_23906 = (state_23920[(8)]);
var inst_23906__$1 = (state_23920[(2)]);
var inst_23907 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_23906__$1);
var state_23920__$1 = (function (){var statearr_23929 = state_23920;
(statearr_23929[(8)] = inst_23906__$1);

return statearr_23929;
})();
if(cljs.core.truth_(inst_23907)){
var statearr_23930_23962 = state_23920__$1;
(statearr_23930_23962[(1)] = (13));

} else {
var statearr_23931_23963 = state_23920__$1;
(statearr_23931_23963[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (2))){
var inst_23883 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_23884 = (0);
var state_23920__$1 = (function (){var statearr_23932 = state_23920;
(statearr_23932[(9)] = inst_23883);

(statearr_23932[(7)] = inst_23884);

return statearr_23932;
})();
var statearr_23933_23964 = state_23920__$1;
(statearr_23933_23964[(2)] = null);

(statearr_23933_23964[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (11))){
var inst_23884 = (state_23920[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_23920,(10),Object,null,(9));
var inst_23893 = chs__$1.call(null,inst_23884);
var inst_23894 = done.call(null,inst_23884);
var inst_23895 = cljs.core.async.take_BANG_.call(null,inst_23893,inst_23894);
var state_23920__$1 = state_23920;
var statearr_23934_23965 = state_23920__$1;
(statearr_23934_23965[(2)] = inst_23895);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23920__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (9))){
var inst_23884 = (state_23920[(7)]);
var inst_23897 = (state_23920[(2)]);
var inst_23898 = (inst_23884 + (1));
var inst_23884__$1 = inst_23898;
var state_23920__$1 = (function (){var statearr_23935 = state_23920;
(statearr_23935[(10)] = inst_23897);

(statearr_23935[(7)] = inst_23884__$1);

return statearr_23935;
})();
var statearr_23936_23966 = state_23920__$1;
(statearr_23936_23966[(2)] = null);

(statearr_23936_23966[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (5))){
var inst_23904 = (state_23920[(2)]);
var state_23920__$1 = (function (){var statearr_23937 = state_23920;
(statearr_23937[(11)] = inst_23904);

return statearr_23937;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23920__$1,(12),dchan);
} else {
if((state_val_23921 === (14))){
var inst_23906 = (state_23920[(8)]);
var inst_23911 = cljs.core.apply.call(null,f,inst_23906);
var state_23920__$1 = state_23920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_23920__$1,(16),out,inst_23911);
} else {
if((state_val_23921 === (16))){
var inst_23913 = (state_23920[(2)]);
var state_23920__$1 = (function (){var statearr_23938 = state_23920;
(statearr_23938[(12)] = inst_23913);

return statearr_23938;
})();
var statearr_23939_23967 = state_23920__$1;
(statearr_23939_23967[(2)] = null);

(statearr_23939_23967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (10))){
var inst_23888 = (state_23920[(2)]);
var inst_23889 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_23920__$1 = (function (){var statearr_23940 = state_23920;
(statearr_23940[(13)] = inst_23888);

return statearr_23940;
})();
var statearr_23941_23968 = state_23920__$1;
(statearr_23941_23968[(2)] = inst_23889);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23920__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_23921 === (8))){
var inst_23902 = (state_23920[(2)]);
var state_23920__$1 = state_23920;
var statearr_23942_23969 = state_23920__$1;
(statearr_23942_23969[(2)] = inst_23902);

(statearr_23942_23969[(1)] = (5));


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
});})(c__18935__auto___23954,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__18914__auto__,c__18935__auto___23954,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__18915__auto__ = null;
var cljs$core$async$state_machine__18915__auto____0 = (function (){
var statearr_23946 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23946[(0)] = cljs$core$async$state_machine__18915__auto__);

(statearr_23946[(1)] = (1));

return statearr_23946;
});
var cljs$core$async$state_machine__18915__auto____1 = (function (state_23920){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_23920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e23947){if((e23947 instanceof Object)){
var ex__18918__auto__ = e23947;
var statearr_23948_23970 = state_23920;
(statearr_23948_23970[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e23947;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__23971 = state_23920;
state_23920 = G__23971;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$state_machine__18915__auto__ = function(state_23920){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18915__auto____1.call(this,state_23920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18915__auto____0;
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18915__auto____1;
return cljs$core$async$state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___23954,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__18937__auto__ = (function (){var statearr_23949 = f__18936__auto__.call(null);
(statearr_23949[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___23954);

return statearr_23949;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___23954,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args23973 = [];
var len__17877__auto___24029 = arguments.length;
var i__17878__auto___24030 = (0);
while(true){
if((i__17878__auto___24030 < len__17877__auto___24029)){
args23973.push((arguments[i__17878__auto___24030]));

var G__24031 = (i__17878__auto___24030 + (1));
i__17878__auto___24030 = G__24031;
continue;
} else {
}
break;
}

var G__23975 = args23973.length;
switch (G__23975) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args23973.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18935__auto___24033 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___24033,out){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___24033,out){
return (function (state_24005){
var state_val_24006 = (state_24005[(1)]);
if((state_val_24006 === (7))){
var inst_23984 = (state_24005[(7)]);
var inst_23985 = (state_24005[(8)]);
var inst_23984__$1 = (state_24005[(2)]);
var inst_23985__$1 = cljs.core.nth.call(null,inst_23984__$1,(0),null);
var inst_23986 = cljs.core.nth.call(null,inst_23984__$1,(1),null);
var inst_23987 = (inst_23985__$1 == null);
var state_24005__$1 = (function (){var statearr_24007 = state_24005;
(statearr_24007[(9)] = inst_23986);

(statearr_24007[(7)] = inst_23984__$1);

(statearr_24007[(8)] = inst_23985__$1);

return statearr_24007;
})();
if(cljs.core.truth_(inst_23987)){
var statearr_24008_24034 = state_24005__$1;
(statearr_24008_24034[(1)] = (8));

} else {
var statearr_24009_24035 = state_24005__$1;
(statearr_24009_24035[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24006 === (1))){
var inst_23976 = cljs.core.vec.call(null,chs);
var inst_23977 = inst_23976;
var state_24005__$1 = (function (){var statearr_24010 = state_24005;
(statearr_24010[(10)] = inst_23977);

return statearr_24010;
})();
var statearr_24011_24036 = state_24005__$1;
(statearr_24011_24036[(2)] = null);

(statearr_24011_24036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24006 === (4))){
var inst_23977 = (state_24005[(10)]);
var state_24005__$1 = state_24005;
return cljs.core.async.ioc_alts_BANG_.call(null,state_24005__$1,(7),inst_23977);
} else {
if((state_val_24006 === (6))){
var inst_24001 = (state_24005[(2)]);
var state_24005__$1 = state_24005;
var statearr_24012_24037 = state_24005__$1;
(statearr_24012_24037[(2)] = inst_24001);

(statearr_24012_24037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24006 === (3))){
var inst_24003 = (state_24005[(2)]);
var state_24005__$1 = state_24005;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24005__$1,inst_24003);
} else {
if((state_val_24006 === (2))){
var inst_23977 = (state_24005[(10)]);
var inst_23979 = cljs.core.count.call(null,inst_23977);
var inst_23980 = (inst_23979 > (0));
var state_24005__$1 = state_24005;
if(cljs.core.truth_(inst_23980)){
var statearr_24014_24038 = state_24005__$1;
(statearr_24014_24038[(1)] = (4));

} else {
var statearr_24015_24039 = state_24005__$1;
(statearr_24015_24039[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24006 === (11))){
var inst_23977 = (state_24005[(10)]);
var inst_23994 = (state_24005[(2)]);
var tmp24013 = inst_23977;
var inst_23977__$1 = tmp24013;
var state_24005__$1 = (function (){var statearr_24016 = state_24005;
(statearr_24016[(10)] = inst_23977__$1);

(statearr_24016[(11)] = inst_23994);

return statearr_24016;
})();
var statearr_24017_24040 = state_24005__$1;
(statearr_24017_24040[(2)] = null);

(statearr_24017_24040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24006 === (9))){
var inst_23985 = (state_24005[(8)]);
var state_24005__$1 = state_24005;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24005__$1,(11),out,inst_23985);
} else {
if((state_val_24006 === (5))){
var inst_23999 = cljs.core.async.close_BANG_.call(null,out);
var state_24005__$1 = state_24005;
var statearr_24018_24041 = state_24005__$1;
(statearr_24018_24041[(2)] = inst_23999);

(statearr_24018_24041[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24006 === (10))){
var inst_23997 = (state_24005[(2)]);
var state_24005__$1 = state_24005;
var statearr_24019_24042 = state_24005__$1;
(statearr_24019_24042[(2)] = inst_23997);

(statearr_24019_24042[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24006 === (8))){
var inst_23986 = (state_24005[(9)]);
var inst_23984 = (state_24005[(7)]);
var inst_23977 = (state_24005[(10)]);
var inst_23985 = (state_24005[(8)]);
var inst_23989 = (function (){var cs = inst_23977;
var vec__23982 = inst_23984;
var v = inst_23985;
var c = inst_23986;
return ((function (cs,vec__23982,v,c,inst_23986,inst_23984,inst_23977,inst_23985,state_val_24006,c__18935__auto___24033,out){
return (function (p1__23972_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__23972_SHARP_);
});
;})(cs,vec__23982,v,c,inst_23986,inst_23984,inst_23977,inst_23985,state_val_24006,c__18935__auto___24033,out))
})();
var inst_23990 = cljs.core.filterv.call(null,inst_23989,inst_23977);
var inst_23977__$1 = inst_23990;
var state_24005__$1 = (function (){var statearr_24020 = state_24005;
(statearr_24020[(10)] = inst_23977__$1);

return statearr_24020;
})();
var statearr_24021_24043 = state_24005__$1;
(statearr_24021_24043[(2)] = null);

(statearr_24021_24043[(1)] = (2));


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
});})(c__18935__auto___24033,out))
;
return ((function (switch__18914__auto__,c__18935__auto___24033,out){
return (function() {
var cljs$core$async$state_machine__18915__auto__ = null;
var cljs$core$async$state_machine__18915__auto____0 = (function (){
var statearr_24025 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24025[(0)] = cljs$core$async$state_machine__18915__auto__);

(statearr_24025[(1)] = (1));

return statearr_24025;
});
var cljs$core$async$state_machine__18915__auto____1 = (function (state_24005){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_24005);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e24026){if((e24026 instanceof Object)){
var ex__18918__auto__ = e24026;
var statearr_24027_24044 = state_24005;
(statearr_24027_24044[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24005);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24026;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24045 = state_24005;
state_24005 = G__24045;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$state_machine__18915__auto__ = function(state_24005){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18915__auto____1.call(this,state_24005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18915__auto____0;
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18915__auto____1;
return cljs$core$async$state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___24033,out))
})();
var state__18937__auto__ = (function (){var statearr_24028 = f__18936__auto__.call(null);
(statearr_24028[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___24033);

return statearr_24028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___24033,out))
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
var args24046 = [];
var len__17877__auto___24095 = arguments.length;
var i__17878__auto___24096 = (0);
while(true){
if((i__17878__auto___24096 < len__17877__auto___24095)){
args24046.push((arguments[i__17878__auto___24096]));

var G__24097 = (i__17878__auto___24096 + (1));
i__17878__auto___24096 = G__24097;
continue;
} else {
}
break;
}

var G__24048 = args24046.length;
switch (G__24048) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24046.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18935__auto___24099 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___24099,out){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___24099,out){
return (function (state_24072){
var state_val_24073 = (state_24072[(1)]);
if((state_val_24073 === (7))){
var inst_24054 = (state_24072[(7)]);
var inst_24054__$1 = (state_24072[(2)]);
var inst_24055 = (inst_24054__$1 == null);
var inst_24056 = cljs.core.not.call(null,inst_24055);
var state_24072__$1 = (function (){var statearr_24074 = state_24072;
(statearr_24074[(7)] = inst_24054__$1);

return statearr_24074;
})();
if(inst_24056){
var statearr_24075_24100 = state_24072__$1;
(statearr_24075_24100[(1)] = (8));

} else {
var statearr_24076_24101 = state_24072__$1;
(statearr_24076_24101[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24073 === (1))){
var inst_24049 = (0);
var state_24072__$1 = (function (){var statearr_24077 = state_24072;
(statearr_24077[(8)] = inst_24049);

return statearr_24077;
})();
var statearr_24078_24102 = state_24072__$1;
(statearr_24078_24102[(2)] = null);

(statearr_24078_24102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24073 === (4))){
var state_24072__$1 = state_24072;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24072__$1,(7),ch);
} else {
if((state_val_24073 === (6))){
var inst_24067 = (state_24072[(2)]);
var state_24072__$1 = state_24072;
var statearr_24079_24103 = state_24072__$1;
(statearr_24079_24103[(2)] = inst_24067);

(statearr_24079_24103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24073 === (3))){
var inst_24069 = (state_24072[(2)]);
var inst_24070 = cljs.core.async.close_BANG_.call(null,out);
var state_24072__$1 = (function (){var statearr_24080 = state_24072;
(statearr_24080[(9)] = inst_24069);

return statearr_24080;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24072__$1,inst_24070);
} else {
if((state_val_24073 === (2))){
var inst_24049 = (state_24072[(8)]);
var inst_24051 = (inst_24049 < n);
var state_24072__$1 = state_24072;
if(cljs.core.truth_(inst_24051)){
var statearr_24081_24104 = state_24072__$1;
(statearr_24081_24104[(1)] = (4));

} else {
var statearr_24082_24105 = state_24072__$1;
(statearr_24082_24105[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24073 === (11))){
var inst_24049 = (state_24072[(8)]);
var inst_24059 = (state_24072[(2)]);
var inst_24060 = (inst_24049 + (1));
var inst_24049__$1 = inst_24060;
var state_24072__$1 = (function (){var statearr_24083 = state_24072;
(statearr_24083[(10)] = inst_24059);

(statearr_24083[(8)] = inst_24049__$1);

return statearr_24083;
})();
var statearr_24084_24106 = state_24072__$1;
(statearr_24084_24106[(2)] = null);

(statearr_24084_24106[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24073 === (9))){
var state_24072__$1 = state_24072;
var statearr_24085_24107 = state_24072__$1;
(statearr_24085_24107[(2)] = null);

(statearr_24085_24107[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24073 === (5))){
var state_24072__$1 = state_24072;
var statearr_24086_24108 = state_24072__$1;
(statearr_24086_24108[(2)] = null);

(statearr_24086_24108[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24073 === (10))){
var inst_24064 = (state_24072[(2)]);
var state_24072__$1 = state_24072;
var statearr_24087_24109 = state_24072__$1;
(statearr_24087_24109[(2)] = inst_24064);

(statearr_24087_24109[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24073 === (8))){
var inst_24054 = (state_24072[(7)]);
var state_24072__$1 = state_24072;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24072__$1,(11),out,inst_24054);
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
});})(c__18935__auto___24099,out))
;
return ((function (switch__18914__auto__,c__18935__auto___24099,out){
return (function() {
var cljs$core$async$state_machine__18915__auto__ = null;
var cljs$core$async$state_machine__18915__auto____0 = (function (){
var statearr_24091 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24091[(0)] = cljs$core$async$state_machine__18915__auto__);

(statearr_24091[(1)] = (1));

return statearr_24091;
});
var cljs$core$async$state_machine__18915__auto____1 = (function (state_24072){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_24072);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e24092){if((e24092 instanceof Object)){
var ex__18918__auto__ = e24092;
var statearr_24093_24110 = state_24072;
(statearr_24093_24110[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24072);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24111 = state_24072;
state_24072 = G__24111;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$state_machine__18915__auto__ = function(state_24072){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18915__auto____1.call(this,state_24072);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18915__auto____0;
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18915__auto____1;
return cljs$core$async$state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___24099,out))
})();
var state__18937__auto__ = (function (){var statearr_24094 = f__18936__auto__.call(null);
(statearr_24094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___24099);

return statearr_24094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___24099,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24119 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24119 = (function (map_LT_,f,ch,meta24120){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24120 = meta24120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24121,meta24120__$1){
var self__ = this;
var _24121__$1 = this;
return (new cljs.core.async.t_cljs$core$async24119(self__.map_LT_,self__.f,self__.ch,meta24120__$1));
});

cljs.core.async.t_cljs$core$async24119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24121){
var self__ = this;
var _24121__$1 = this;
return self__.meta24120;
});

cljs.core.async.t_cljs$core$async24119.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24119.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24119.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24119.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24119.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async24122 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24122 = (function (map_LT_,f,ch,meta24120,_,fn1,meta24123){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24120 = meta24120;
this._ = _;
this.fn1 = fn1;
this.meta24123 = meta24123;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24122.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24124,meta24123__$1){
var self__ = this;
var _24124__$1 = this;
return (new cljs.core.async.t_cljs$core$async24122(self__.map_LT_,self__.f,self__.ch,self__.meta24120,self__._,self__.fn1,meta24123__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async24122.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24124){
var self__ = this;
var _24124__$1 = this;
return self__.meta24123;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24122.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async24122.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24122.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async24122.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24112_SHARP_){
return f1.call(null,(((p1__24112_SHARP_ == null))?null:self__.f.call(null,p1__24112_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async24122.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24120","meta24120",-1907823860,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async24119","cljs.core.async/t_cljs$core$async24119",-900284107,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24123","meta24123",-46999360,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async24122.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24122.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24122";

cljs.core.async.t_cljs$core$async24122.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async24122");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async24122 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24122(map_LT___$1,f__$1,ch__$1,meta24120__$1,___$2,fn1__$1,meta24123){
return (new cljs.core.async.t_cljs$core$async24122(map_LT___$1,f__$1,ch__$1,meta24120__$1,___$2,fn1__$1,meta24123));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async24122(self__.map_LT_,self__.f,self__.ch,self__.meta24120,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async24119.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24119.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async24119.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24120","meta24120",-1907823860,null)], null);
});

cljs.core.async.t_cljs$core$async24119.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24119";

cljs.core.async.t_cljs$core$async24119.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async24119");
});

cljs.core.async.__GT_t_cljs$core$async24119 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async24119(map_LT___$1,f__$1,ch__$1,meta24120){
return (new cljs.core.async.t_cljs$core$async24119(map_LT___$1,f__$1,ch__$1,meta24120));
});

}

return (new cljs.core.async.t_cljs$core$async24119(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async24128 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24128 = (function (map_GT_,f,ch,meta24129){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24129 = meta24129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24130,meta24129__$1){
var self__ = this;
var _24130__$1 = this;
return (new cljs.core.async.t_cljs$core$async24128(self__.map_GT_,self__.f,self__.ch,meta24129__$1));
});

cljs.core.async.t_cljs$core$async24128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24130){
var self__ = this;
var _24130__$1 = this;
return self__.meta24129;
});

cljs.core.async.t_cljs$core$async24128.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24128.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24128.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24128.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24128.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24128.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async24128.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24129","meta24129",1460325584,null)], null);
});

cljs.core.async.t_cljs$core$async24128.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24128";

cljs.core.async.t_cljs$core$async24128.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async24128");
});

cljs.core.async.__GT_t_cljs$core$async24128 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async24128(map_GT___$1,f__$1,ch__$1,meta24129){
return (new cljs.core.async.t_cljs$core$async24128(map_GT___$1,f__$1,ch__$1,meta24129));
});

}

return (new cljs.core.async.t_cljs$core$async24128(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async24134 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async24134 = (function (filter_GT_,p,ch,meta24135){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24135 = meta24135;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async24134.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24136,meta24135__$1){
var self__ = this;
var _24136__$1 = this;
return (new cljs.core.async.t_cljs$core$async24134(self__.filter_GT_,self__.p,self__.ch,meta24135__$1));
});

cljs.core.async.t_cljs$core$async24134.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24136){
var self__ = this;
var _24136__$1 = this;
return self__.meta24135;
});

cljs.core.async.t_cljs$core$async24134.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async24134.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24134.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async24134.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async24134.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async24134.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async24134.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async24134.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24135","meta24135",1064358144,null)], null);
});

cljs.core.async.t_cljs$core$async24134.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async24134.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async24134";

cljs.core.async.t_cljs$core$async24134.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cljs.core.async/t_cljs$core$async24134");
});

cljs.core.async.__GT_t_cljs$core$async24134 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async24134(filter_GT___$1,p__$1,ch__$1,meta24135){
return (new cljs.core.async.t_cljs$core$async24134(filter_GT___$1,p__$1,ch__$1,meta24135));
});

}

return (new cljs.core.async.t_cljs$core$async24134(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args24137 = [];
var len__17877__auto___24181 = arguments.length;
var i__17878__auto___24182 = (0);
while(true){
if((i__17878__auto___24182 < len__17877__auto___24181)){
args24137.push((arguments[i__17878__auto___24182]));

var G__24183 = (i__17878__auto___24182 + (1));
i__17878__auto___24182 = G__24183;
continue;
} else {
}
break;
}

var G__24139 = args24137.length;
switch (G__24139) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24137.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18935__auto___24185 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___24185,out){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___24185,out){
return (function (state_24160){
var state_val_24161 = (state_24160[(1)]);
if((state_val_24161 === (7))){
var inst_24156 = (state_24160[(2)]);
var state_24160__$1 = state_24160;
var statearr_24162_24186 = state_24160__$1;
(statearr_24162_24186[(2)] = inst_24156);

(statearr_24162_24186[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (1))){
var state_24160__$1 = state_24160;
var statearr_24163_24187 = state_24160__$1;
(statearr_24163_24187[(2)] = null);

(statearr_24163_24187[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (4))){
var inst_24142 = (state_24160[(7)]);
var inst_24142__$1 = (state_24160[(2)]);
var inst_24143 = (inst_24142__$1 == null);
var state_24160__$1 = (function (){var statearr_24164 = state_24160;
(statearr_24164[(7)] = inst_24142__$1);

return statearr_24164;
})();
if(cljs.core.truth_(inst_24143)){
var statearr_24165_24188 = state_24160__$1;
(statearr_24165_24188[(1)] = (5));

} else {
var statearr_24166_24189 = state_24160__$1;
(statearr_24166_24189[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (6))){
var inst_24142 = (state_24160[(7)]);
var inst_24147 = p.call(null,inst_24142);
var state_24160__$1 = state_24160;
if(cljs.core.truth_(inst_24147)){
var statearr_24167_24190 = state_24160__$1;
(statearr_24167_24190[(1)] = (8));

} else {
var statearr_24168_24191 = state_24160__$1;
(statearr_24168_24191[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (3))){
var inst_24158 = (state_24160[(2)]);
var state_24160__$1 = state_24160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24160__$1,inst_24158);
} else {
if((state_val_24161 === (2))){
var state_24160__$1 = state_24160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24160__$1,(4),ch);
} else {
if((state_val_24161 === (11))){
var inst_24150 = (state_24160[(2)]);
var state_24160__$1 = state_24160;
var statearr_24169_24192 = state_24160__$1;
(statearr_24169_24192[(2)] = inst_24150);

(statearr_24169_24192[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (9))){
var state_24160__$1 = state_24160;
var statearr_24170_24193 = state_24160__$1;
(statearr_24170_24193[(2)] = null);

(statearr_24170_24193[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (5))){
var inst_24145 = cljs.core.async.close_BANG_.call(null,out);
var state_24160__$1 = state_24160;
var statearr_24171_24194 = state_24160__$1;
(statearr_24171_24194[(2)] = inst_24145);

(statearr_24171_24194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (10))){
var inst_24153 = (state_24160[(2)]);
var state_24160__$1 = (function (){var statearr_24172 = state_24160;
(statearr_24172[(8)] = inst_24153);

return statearr_24172;
})();
var statearr_24173_24195 = state_24160__$1;
(statearr_24173_24195[(2)] = null);

(statearr_24173_24195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24161 === (8))){
var inst_24142 = (state_24160[(7)]);
var state_24160__$1 = state_24160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24160__$1,(11),out,inst_24142);
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
});})(c__18935__auto___24185,out))
;
return ((function (switch__18914__auto__,c__18935__auto___24185,out){
return (function() {
var cljs$core$async$state_machine__18915__auto__ = null;
var cljs$core$async$state_machine__18915__auto____0 = (function (){
var statearr_24177 = [null,null,null,null,null,null,null,null,null];
(statearr_24177[(0)] = cljs$core$async$state_machine__18915__auto__);

(statearr_24177[(1)] = (1));

return statearr_24177;
});
var cljs$core$async$state_machine__18915__auto____1 = (function (state_24160){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_24160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e24178){if((e24178 instanceof Object)){
var ex__18918__auto__ = e24178;
var statearr_24179_24196 = state_24160;
(statearr_24179_24196[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24178;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24197 = state_24160;
state_24160 = G__24197;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$state_machine__18915__auto__ = function(state_24160){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18915__auto____1.call(this,state_24160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18915__auto____0;
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18915__auto____1;
return cljs$core$async$state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___24185,out))
})();
var state__18937__auto__ = (function (){var statearr_24180 = f__18936__auto__.call(null);
(statearr_24180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___24185);

return statearr_24180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___24185,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args24198 = [];
var len__17877__auto___24201 = arguments.length;
var i__17878__auto___24202 = (0);
while(true){
if((i__17878__auto___24202 < len__17877__auto___24201)){
args24198.push((arguments[i__17878__auto___24202]));

var G__24203 = (i__17878__auto___24202 + (1));
i__17878__auto___24202 = G__24203;
continue;
} else {
}
break;
}

var G__24200 = args24198.length;
switch (G__24200) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24198.length)].join('')));

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
return (function (state_24370){
var state_val_24371 = (state_24370[(1)]);
if((state_val_24371 === (7))){
var inst_24366 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
var statearr_24372_24413 = state_24370__$1;
(statearr_24372_24413[(2)] = inst_24366);

(statearr_24372_24413[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (20))){
var inst_24336 = (state_24370[(7)]);
var inst_24347 = (state_24370[(2)]);
var inst_24348 = cljs.core.next.call(null,inst_24336);
var inst_24322 = inst_24348;
var inst_24323 = null;
var inst_24324 = (0);
var inst_24325 = (0);
var state_24370__$1 = (function (){var statearr_24373 = state_24370;
(statearr_24373[(8)] = inst_24324);

(statearr_24373[(9)] = inst_24325);

(statearr_24373[(10)] = inst_24347);

(statearr_24373[(11)] = inst_24322);

(statearr_24373[(12)] = inst_24323);

return statearr_24373;
})();
var statearr_24374_24414 = state_24370__$1;
(statearr_24374_24414[(2)] = null);

(statearr_24374_24414[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (1))){
var state_24370__$1 = state_24370;
var statearr_24375_24415 = state_24370__$1;
(statearr_24375_24415[(2)] = null);

(statearr_24375_24415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (4))){
var inst_24311 = (state_24370[(13)]);
var inst_24311__$1 = (state_24370[(2)]);
var inst_24312 = (inst_24311__$1 == null);
var state_24370__$1 = (function (){var statearr_24376 = state_24370;
(statearr_24376[(13)] = inst_24311__$1);

return statearr_24376;
})();
if(cljs.core.truth_(inst_24312)){
var statearr_24377_24416 = state_24370__$1;
(statearr_24377_24416[(1)] = (5));

} else {
var statearr_24378_24417 = state_24370__$1;
(statearr_24378_24417[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (15))){
var state_24370__$1 = state_24370;
var statearr_24382_24418 = state_24370__$1;
(statearr_24382_24418[(2)] = null);

(statearr_24382_24418[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (21))){
var state_24370__$1 = state_24370;
var statearr_24383_24419 = state_24370__$1;
(statearr_24383_24419[(2)] = null);

(statearr_24383_24419[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (13))){
var inst_24324 = (state_24370[(8)]);
var inst_24325 = (state_24370[(9)]);
var inst_24322 = (state_24370[(11)]);
var inst_24323 = (state_24370[(12)]);
var inst_24332 = (state_24370[(2)]);
var inst_24333 = (inst_24325 + (1));
var tmp24379 = inst_24324;
var tmp24380 = inst_24322;
var tmp24381 = inst_24323;
var inst_24322__$1 = tmp24380;
var inst_24323__$1 = tmp24381;
var inst_24324__$1 = tmp24379;
var inst_24325__$1 = inst_24333;
var state_24370__$1 = (function (){var statearr_24384 = state_24370;
(statearr_24384[(8)] = inst_24324__$1);

(statearr_24384[(9)] = inst_24325__$1);

(statearr_24384[(14)] = inst_24332);

(statearr_24384[(11)] = inst_24322__$1);

(statearr_24384[(12)] = inst_24323__$1);

return statearr_24384;
})();
var statearr_24385_24420 = state_24370__$1;
(statearr_24385_24420[(2)] = null);

(statearr_24385_24420[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (22))){
var state_24370__$1 = state_24370;
var statearr_24386_24421 = state_24370__$1;
(statearr_24386_24421[(2)] = null);

(statearr_24386_24421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (6))){
var inst_24311 = (state_24370[(13)]);
var inst_24320 = f.call(null,inst_24311);
var inst_24321 = cljs.core.seq.call(null,inst_24320);
var inst_24322 = inst_24321;
var inst_24323 = null;
var inst_24324 = (0);
var inst_24325 = (0);
var state_24370__$1 = (function (){var statearr_24387 = state_24370;
(statearr_24387[(8)] = inst_24324);

(statearr_24387[(9)] = inst_24325);

(statearr_24387[(11)] = inst_24322);

(statearr_24387[(12)] = inst_24323);

return statearr_24387;
})();
var statearr_24388_24422 = state_24370__$1;
(statearr_24388_24422[(2)] = null);

(statearr_24388_24422[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (17))){
var inst_24336 = (state_24370[(7)]);
var inst_24340 = cljs.core.chunk_first.call(null,inst_24336);
var inst_24341 = cljs.core.chunk_rest.call(null,inst_24336);
var inst_24342 = cljs.core.count.call(null,inst_24340);
var inst_24322 = inst_24341;
var inst_24323 = inst_24340;
var inst_24324 = inst_24342;
var inst_24325 = (0);
var state_24370__$1 = (function (){var statearr_24389 = state_24370;
(statearr_24389[(8)] = inst_24324);

(statearr_24389[(9)] = inst_24325);

(statearr_24389[(11)] = inst_24322);

(statearr_24389[(12)] = inst_24323);

return statearr_24389;
})();
var statearr_24390_24423 = state_24370__$1;
(statearr_24390_24423[(2)] = null);

(statearr_24390_24423[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (3))){
var inst_24368 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24370__$1,inst_24368);
} else {
if((state_val_24371 === (12))){
var inst_24356 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
var statearr_24391_24424 = state_24370__$1;
(statearr_24391_24424[(2)] = inst_24356);

(statearr_24391_24424[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (2))){
var state_24370__$1 = state_24370;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24370__$1,(4),in$);
} else {
if((state_val_24371 === (23))){
var inst_24364 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
var statearr_24392_24425 = state_24370__$1;
(statearr_24392_24425[(2)] = inst_24364);

(statearr_24392_24425[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (19))){
var inst_24351 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
var statearr_24393_24426 = state_24370__$1;
(statearr_24393_24426[(2)] = inst_24351);

(statearr_24393_24426[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (11))){
var inst_24336 = (state_24370[(7)]);
var inst_24322 = (state_24370[(11)]);
var inst_24336__$1 = cljs.core.seq.call(null,inst_24322);
var state_24370__$1 = (function (){var statearr_24394 = state_24370;
(statearr_24394[(7)] = inst_24336__$1);

return statearr_24394;
})();
if(inst_24336__$1){
var statearr_24395_24427 = state_24370__$1;
(statearr_24395_24427[(1)] = (14));

} else {
var statearr_24396_24428 = state_24370__$1;
(statearr_24396_24428[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (9))){
var inst_24358 = (state_24370[(2)]);
var inst_24359 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_24370__$1 = (function (){var statearr_24397 = state_24370;
(statearr_24397[(15)] = inst_24358);

return statearr_24397;
})();
if(cljs.core.truth_(inst_24359)){
var statearr_24398_24429 = state_24370__$1;
(statearr_24398_24429[(1)] = (21));

} else {
var statearr_24399_24430 = state_24370__$1;
(statearr_24399_24430[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (5))){
var inst_24314 = cljs.core.async.close_BANG_.call(null,out);
var state_24370__$1 = state_24370;
var statearr_24400_24431 = state_24370__$1;
(statearr_24400_24431[(2)] = inst_24314);

(statearr_24400_24431[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (14))){
var inst_24336 = (state_24370[(7)]);
var inst_24338 = cljs.core.chunked_seq_QMARK_.call(null,inst_24336);
var state_24370__$1 = state_24370;
if(inst_24338){
var statearr_24401_24432 = state_24370__$1;
(statearr_24401_24432[(1)] = (17));

} else {
var statearr_24402_24433 = state_24370__$1;
(statearr_24402_24433[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (16))){
var inst_24354 = (state_24370[(2)]);
var state_24370__$1 = state_24370;
var statearr_24403_24434 = state_24370__$1;
(statearr_24403_24434[(2)] = inst_24354);

(statearr_24403_24434[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24371 === (10))){
var inst_24325 = (state_24370[(9)]);
var inst_24323 = (state_24370[(12)]);
var inst_24330 = cljs.core._nth.call(null,inst_24323,inst_24325);
var state_24370__$1 = state_24370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24370__$1,(13),out,inst_24330);
} else {
if((state_val_24371 === (18))){
var inst_24336 = (state_24370[(7)]);
var inst_24345 = cljs.core.first.call(null,inst_24336);
var state_24370__$1 = state_24370;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24370__$1,(20),out,inst_24345);
} else {
if((state_val_24371 === (8))){
var inst_24324 = (state_24370[(8)]);
var inst_24325 = (state_24370[(9)]);
var inst_24327 = (inst_24325 < inst_24324);
var inst_24328 = inst_24327;
var state_24370__$1 = state_24370;
if(cljs.core.truth_(inst_24328)){
var statearr_24404_24435 = state_24370__$1;
(statearr_24404_24435[(1)] = (10));

} else {
var statearr_24405_24436 = state_24370__$1;
(statearr_24405_24436[(1)] = (11));

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
var statearr_24409 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24409[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__18915__auto__);

(statearr_24409[(1)] = (1));

return statearr_24409;
});
var cljs$core$async$mapcat_STAR__$_state_machine__18915__auto____1 = (function (state_24370){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_24370);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e24410){if((e24410 instanceof Object)){
var ex__18918__auto__ = e24410;
var statearr_24411_24437 = state_24370;
(statearr_24411_24437[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24370);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24410;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24438 = state_24370;
state_24370 = G__24438;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__18915__auto__ = function(state_24370){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__18915__auto____1.call(this,state_24370);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__18915__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__18915__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto__))
})();
var state__18937__auto__ = (function (){var statearr_24412 = f__18936__auto__.call(null);
(statearr_24412[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto__);

return statearr_24412;
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
var args24439 = [];
var len__17877__auto___24442 = arguments.length;
var i__17878__auto___24443 = (0);
while(true){
if((i__17878__auto___24443 < len__17877__auto___24442)){
args24439.push((arguments[i__17878__auto___24443]));

var G__24444 = (i__17878__auto___24443 + (1));
i__17878__auto___24443 = G__24444;
continue;
} else {
}
break;
}

var G__24441 = args24439.length;
switch (G__24441) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24439.length)].join('')));

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
var args24446 = [];
var len__17877__auto___24449 = arguments.length;
var i__17878__auto___24450 = (0);
while(true){
if((i__17878__auto___24450 < len__17877__auto___24449)){
args24446.push((arguments[i__17878__auto___24450]));

var G__24451 = (i__17878__auto___24450 + (1));
i__17878__auto___24450 = G__24451;
continue;
} else {
}
break;
}

var G__24448 = args24446.length;
switch (G__24448) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24446.length)].join('')));

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
var args24453 = [];
var len__17877__auto___24504 = arguments.length;
var i__17878__auto___24505 = (0);
while(true){
if((i__17878__auto___24505 < len__17877__auto___24504)){
args24453.push((arguments[i__17878__auto___24505]));

var G__24506 = (i__17878__auto___24505 + (1));
i__17878__auto___24505 = G__24506;
continue;
} else {
}
break;
}

var G__24455 = args24453.length;
switch (G__24455) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24453.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18935__auto___24508 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___24508,out){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___24508,out){
return (function (state_24479){
var state_val_24480 = (state_24479[(1)]);
if((state_val_24480 === (7))){
var inst_24474 = (state_24479[(2)]);
var state_24479__$1 = state_24479;
var statearr_24481_24509 = state_24479__$1;
(statearr_24481_24509[(2)] = inst_24474);

(statearr_24481_24509[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24480 === (1))){
var inst_24456 = null;
var state_24479__$1 = (function (){var statearr_24482 = state_24479;
(statearr_24482[(7)] = inst_24456);

return statearr_24482;
})();
var statearr_24483_24510 = state_24479__$1;
(statearr_24483_24510[(2)] = null);

(statearr_24483_24510[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24480 === (4))){
var inst_24459 = (state_24479[(8)]);
var inst_24459__$1 = (state_24479[(2)]);
var inst_24460 = (inst_24459__$1 == null);
var inst_24461 = cljs.core.not.call(null,inst_24460);
var state_24479__$1 = (function (){var statearr_24484 = state_24479;
(statearr_24484[(8)] = inst_24459__$1);

return statearr_24484;
})();
if(inst_24461){
var statearr_24485_24511 = state_24479__$1;
(statearr_24485_24511[(1)] = (5));

} else {
var statearr_24486_24512 = state_24479__$1;
(statearr_24486_24512[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24480 === (6))){
var state_24479__$1 = state_24479;
var statearr_24487_24513 = state_24479__$1;
(statearr_24487_24513[(2)] = null);

(statearr_24487_24513[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24480 === (3))){
var inst_24476 = (state_24479[(2)]);
var inst_24477 = cljs.core.async.close_BANG_.call(null,out);
var state_24479__$1 = (function (){var statearr_24488 = state_24479;
(statearr_24488[(9)] = inst_24476);

return statearr_24488;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24479__$1,inst_24477);
} else {
if((state_val_24480 === (2))){
var state_24479__$1 = state_24479;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24479__$1,(4),ch);
} else {
if((state_val_24480 === (11))){
var inst_24459 = (state_24479[(8)]);
var inst_24468 = (state_24479[(2)]);
var inst_24456 = inst_24459;
var state_24479__$1 = (function (){var statearr_24489 = state_24479;
(statearr_24489[(7)] = inst_24456);

(statearr_24489[(10)] = inst_24468);

return statearr_24489;
})();
var statearr_24490_24514 = state_24479__$1;
(statearr_24490_24514[(2)] = null);

(statearr_24490_24514[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24480 === (9))){
var inst_24459 = (state_24479[(8)]);
var state_24479__$1 = state_24479;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24479__$1,(11),out,inst_24459);
} else {
if((state_val_24480 === (5))){
var inst_24456 = (state_24479[(7)]);
var inst_24459 = (state_24479[(8)]);
var inst_24463 = cljs.core._EQ_.call(null,inst_24459,inst_24456);
var state_24479__$1 = state_24479;
if(inst_24463){
var statearr_24492_24515 = state_24479__$1;
(statearr_24492_24515[(1)] = (8));

} else {
var statearr_24493_24516 = state_24479__$1;
(statearr_24493_24516[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24480 === (10))){
var inst_24471 = (state_24479[(2)]);
var state_24479__$1 = state_24479;
var statearr_24494_24517 = state_24479__$1;
(statearr_24494_24517[(2)] = inst_24471);

(statearr_24494_24517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24480 === (8))){
var inst_24456 = (state_24479[(7)]);
var tmp24491 = inst_24456;
var inst_24456__$1 = tmp24491;
var state_24479__$1 = (function (){var statearr_24495 = state_24479;
(statearr_24495[(7)] = inst_24456__$1);

return statearr_24495;
})();
var statearr_24496_24518 = state_24479__$1;
(statearr_24496_24518[(2)] = null);

(statearr_24496_24518[(1)] = (2));


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
});})(c__18935__auto___24508,out))
;
return ((function (switch__18914__auto__,c__18935__auto___24508,out){
return (function() {
var cljs$core$async$state_machine__18915__auto__ = null;
var cljs$core$async$state_machine__18915__auto____0 = (function (){
var statearr_24500 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24500[(0)] = cljs$core$async$state_machine__18915__auto__);

(statearr_24500[(1)] = (1));

return statearr_24500;
});
var cljs$core$async$state_machine__18915__auto____1 = (function (state_24479){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_24479);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e24501){if((e24501 instanceof Object)){
var ex__18918__auto__ = e24501;
var statearr_24502_24519 = state_24479;
(statearr_24502_24519[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24479);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24520 = state_24479;
state_24479 = G__24520;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$state_machine__18915__auto__ = function(state_24479){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18915__auto____1.call(this,state_24479);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18915__auto____0;
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18915__auto____1;
return cljs$core$async$state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___24508,out))
})();
var state__18937__auto__ = (function (){var statearr_24503 = f__18936__auto__.call(null);
(statearr_24503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___24508);

return statearr_24503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___24508,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args24521 = [];
var len__17877__auto___24591 = arguments.length;
var i__17878__auto___24592 = (0);
while(true){
if((i__17878__auto___24592 < len__17877__auto___24591)){
args24521.push((arguments[i__17878__auto___24592]));

var G__24593 = (i__17878__auto___24592 + (1));
i__17878__auto___24592 = G__24593;
continue;
} else {
}
break;
}

var G__24523 = args24521.length;
switch (G__24523) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24521.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18935__auto___24595 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___24595,out){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___24595,out){
return (function (state_24561){
var state_val_24562 = (state_24561[(1)]);
if((state_val_24562 === (7))){
var inst_24557 = (state_24561[(2)]);
var state_24561__$1 = state_24561;
var statearr_24563_24596 = state_24561__$1;
(statearr_24563_24596[(2)] = inst_24557);

(statearr_24563_24596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (1))){
var inst_24524 = (new Array(n));
var inst_24525 = inst_24524;
var inst_24526 = (0);
var state_24561__$1 = (function (){var statearr_24564 = state_24561;
(statearr_24564[(7)] = inst_24525);

(statearr_24564[(8)] = inst_24526);

return statearr_24564;
})();
var statearr_24565_24597 = state_24561__$1;
(statearr_24565_24597[(2)] = null);

(statearr_24565_24597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (4))){
var inst_24529 = (state_24561[(9)]);
var inst_24529__$1 = (state_24561[(2)]);
var inst_24530 = (inst_24529__$1 == null);
var inst_24531 = cljs.core.not.call(null,inst_24530);
var state_24561__$1 = (function (){var statearr_24566 = state_24561;
(statearr_24566[(9)] = inst_24529__$1);

return statearr_24566;
})();
if(inst_24531){
var statearr_24567_24598 = state_24561__$1;
(statearr_24567_24598[(1)] = (5));

} else {
var statearr_24568_24599 = state_24561__$1;
(statearr_24568_24599[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (15))){
var inst_24551 = (state_24561[(2)]);
var state_24561__$1 = state_24561;
var statearr_24569_24600 = state_24561__$1;
(statearr_24569_24600[(2)] = inst_24551);

(statearr_24569_24600[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (13))){
var state_24561__$1 = state_24561;
var statearr_24570_24601 = state_24561__$1;
(statearr_24570_24601[(2)] = null);

(statearr_24570_24601[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (6))){
var inst_24526 = (state_24561[(8)]);
var inst_24547 = (inst_24526 > (0));
var state_24561__$1 = state_24561;
if(cljs.core.truth_(inst_24547)){
var statearr_24571_24602 = state_24561__$1;
(statearr_24571_24602[(1)] = (12));

} else {
var statearr_24572_24603 = state_24561__$1;
(statearr_24572_24603[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (3))){
var inst_24559 = (state_24561[(2)]);
var state_24561__$1 = state_24561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24561__$1,inst_24559);
} else {
if((state_val_24562 === (12))){
var inst_24525 = (state_24561[(7)]);
var inst_24549 = cljs.core.vec.call(null,inst_24525);
var state_24561__$1 = state_24561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24561__$1,(15),out,inst_24549);
} else {
if((state_val_24562 === (2))){
var state_24561__$1 = state_24561;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24561__$1,(4),ch);
} else {
if((state_val_24562 === (11))){
var inst_24541 = (state_24561[(2)]);
var inst_24542 = (new Array(n));
var inst_24525 = inst_24542;
var inst_24526 = (0);
var state_24561__$1 = (function (){var statearr_24573 = state_24561;
(statearr_24573[(7)] = inst_24525);

(statearr_24573[(10)] = inst_24541);

(statearr_24573[(8)] = inst_24526);

return statearr_24573;
})();
var statearr_24574_24604 = state_24561__$1;
(statearr_24574_24604[(2)] = null);

(statearr_24574_24604[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (9))){
var inst_24525 = (state_24561[(7)]);
var inst_24539 = cljs.core.vec.call(null,inst_24525);
var state_24561__$1 = state_24561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24561__$1,(11),out,inst_24539);
} else {
if((state_val_24562 === (5))){
var inst_24525 = (state_24561[(7)]);
var inst_24529 = (state_24561[(9)]);
var inst_24526 = (state_24561[(8)]);
var inst_24534 = (state_24561[(11)]);
var inst_24533 = (inst_24525[inst_24526] = inst_24529);
var inst_24534__$1 = (inst_24526 + (1));
var inst_24535 = (inst_24534__$1 < n);
var state_24561__$1 = (function (){var statearr_24575 = state_24561;
(statearr_24575[(11)] = inst_24534__$1);

(statearr_24575[(12)] = inst_24533);

return statearr_24575;
})();
if(cljs.core.truth_(inst_24535)){
var statearr_24576_24605 = state_24561__$1;
(statearr_24576_24605[(1)] = (8));

} else {
var statearr_24577_24606 = state_24561__$1;
(statearr_24577_24606[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (14))){
var inst_24554 = (state_24561[(2)]);
var inst_24555 = cljs.core.async.close_BANG_.call(null,out);
var state_24561__$1 = (function (){var statearr_24579 = state_24561;
(statearr_24579[(13)] = inst_24554);

return statearr_24579;
})();
var statearr_24580_24607 = state_24561__$1;
(statearr_24580_24607[(2)] = inst_24555);

(statearr_24580_24607[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (10))){
var inst_24545 = (state_24561[(2)]);
var state_24561__$1 = state_24561;
var statearr_24581_24608 = state_24561__$1;
(statearr_24581_24608[(2)] = inst_24545);

(statearr_24581_24608[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24562 === (8))){
var inst_24525 = (state_24561[(7)]);
var inst_24534 = (state_24561[(11)]);
var tmp24578 = inst_24525;
var inst_24525__$1 = tmp24578;
var inst_24526 = inst_24534;
var state_24561__$1 = (function (){var statearr_24582 = state_24561;
(statearr_24582[(7)] = inst_24525__$1);

(statearr_24582[(8)] = inst_24526);

return statearr_24582;
})();
var statearr_24583_24609 = state_24561__$1;
(statearr_24583_24609[(2)] = null);

(statearr_24583_24609[(1)] = (2));


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
});})(c__18935__auto___24595,out))
;
return ((function (switch__18914__auto__,c__18935__auto___24595,out){
return (function() {
var cljs$core$async$state_machine__18915__auto__ = null;
var cljs$core$async$state_machine__18915__auto____0 = (function (){
var statearr_24587 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24587[(0)] = cljs$core$async$state_machine__18915__auto__);

(statearr_24587[(1)] = (1));

return statearr_24587;
});
var cljs$core$async$state_machine__18915__auto____1 = (function (state_24561){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_24561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e24588){if((e24588 instanceof Object)){
var ex__18918__auto__ = e24588;
var statearr_24589_24610 = state_24561;
(statearr_24589_24610[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24611 = state_24561;
state_24561 = G__24611;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$state_machine__18915__auto__ = function(state_24561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18915__auto____1.call(this,state_24561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18915__auto____0;
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18915__auto____1;
return cljs$core$async$state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___24595,out))
})();
var state__18937__auto__ = (function (){var statearr_24590 = f__18936__auto__.call(null);
(statearr_24590[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___24595);

return statearr_24590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___24595,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args24612 = [];
var len__17877__auto___24686 = arguments.length;
var i__17878__auto___24687 = (0);
while(true){
if((i__17878__auto___24687 < len__17877__auto___24686)){
args24612.push((arguments[i__17878__auto___24687]));

var G__24688 = (i__17878__auto___24687 + (1));
i__17878__auto___24687 = G__24688;
continue;
} else {
}
break;
}

var G__24614 = args24612.length;
switch (G__24614) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args24612.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__18935__auto___24690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__18935__auto___24690,out){
return (function (){
var f__18936__auto__ = (function (){var switch__18914__auto__ = ((function (c__18935__auto___24690,out){
return (function (state_24656){
var state_val_24657 = (state_24656[(1)]);
if((state_val_24657 === (7))){
var inst_24652 = (state_24656[(2)]);
var state_24656__$1 = state_24656;
var statearr_24658_24691 = state_24656__$1;
(statearr_24658_24691[(2)] = inst_24652);

(statearr_24658_24691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24657 === (1))){
var inst_24615 = [];
var inst_24616 = inst_24615;
var inst_24617 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_24656__$1 = (function (){var statearr_24659 = state_24656;
(statearr_24659[(7)] = inst_24617);

(statearr_24659[(8)] = inst_24616);

return statearr_24659;
})();
var statearr_24660_24692 = state_24656__$1;
(statearr_24660_24692[(2)] = null);

(statearr_24660_24692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24657 === (4))){
var inst_24620 = (state_24656[(9)]);
var inst_24620__$1 = (state_24656[(2)]);
var inst_24621 = (inst_24620__$1 == null);
var inst_24622 = cljs.core.not.call(null,inst_24621);
var state_24656__$1 = (function (){var statearr_24661 = state_24656;
(statearr_24661[(9)] = inst_24620__$1);

return statearr_24661;
})();
if(inst_24622){
var statearr_24662_24693 = state_24656__$1;
(statearr_24662_24693[(1)] = (5));

} else {
var statearr_24663_24694 = state_24656__$1;
(statearr_24663_24694[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24657 === (15))){
var inst_24646 = (state_24656[(2)]);
var state_24656__$1 = state_24656;
var statearr_24664_24695 = state_24656__$1;
(statearr_24664_24695[(2)] = inst_24646);

(statearr_24664_24695[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24657 === (13))){
var state_24656__$1 = state_24656;
var statearr_24665_24696 = state_24656__$1;
(statearr_24665_24696[(2)] = null);

(statearr_24665_24696[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24657 === (6))){
var inst_24616 = (state_24656[(8)]);
var inst_24641 = inst_24616.length;
var inst_24642 = (inst_24641 > (0));
var state_24656__$1 = state_24656;
if(cljs.core.truth_(inst_24642)){
var statearr_24666_24697 = state_24656__$1;
(statearr_24666_24697[(1)] = (12));

} else {
var statearr_24667_24698 = state_24656__$1;
(statearr_24667_24698[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24657 === (3))){
var inst_24654 = (state_24656[(2)]);
var state_24656__$1 = state_24656;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24656__$1,inst_24654);
} else {
if((state_val_24657 === (12))){
var inst_24616 = (state_24656[(8)]);
var inst_24644 = cljs.core.vec.call(null,inst_24616);
var state_24656__$1 = state_24656;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24656__$1,(15),out,inst_24644);
} else {
if((state_val_24657 === (2))){
var state_24656__$1 = state_24656;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24656__$1,(4),ch);
} else {
if((state_val_24657 === (11))){
var inst_24624 = (state_24656[(10)]);
var inst_24620 = (state_24656[(9)]);
var inst_24634 = (state_24656[(2)]);
var inst_24635 = [];
var inst_24636 = inst_24635.push(inst_24620);
var inst_24616 = inst_24635;
var inst_24617 = inst_24624;
var state_24656__$1 = (function (){var statearr_24668 = state_24656;
(statearr_24668[(11)] = inst_24636);

(statearr_24668[(7)] = inst_24617);

(statearr_24668[(12)] = inst_24634);

(statearr_24668[(8)] = inst_24616);

return statearr_24668;
})();
var statearr_24669_24699 = state_24656__$1;
(statearr_24669_24699[(2)] = null);

(statearr_24669_24699[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24657 === (9))){
var inst_24616 = (state_24656[(8)]);
var inst_24632 = cljs.core.vec.call(null,inst_24616);
var state_24656__$1 = state_24656;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24656__$1,(11),out,inst_24632);
} else {
if((state_val_24657 === (5))){
var inst_24617 = (state_24656[(7)]);
var inst_24624 = (state_24656[(10)]);
var inst_24620 = (state_24656[(9)]);
var inst_24624__$1 = f.call(null,inst_24620);
var inst_24625 = cljs.core._EQ_.call(null,inst_24624__$1,inst_24617);
var inst_24626 = cljs.core.keyword_identical_QMARK_.call(null,inst_24617,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_24627 = (inst_24625) || (inst_24626);
var state_24656__$1 = (function (){var statearr_24670 = state_24656;
(statearr_24670[(10)] = inst_24624__$1);

return statearr_24670;
})();
if(cljs.core.truth_(inst_24627)){
var statearr_24671_24700 = state_24656__$1;
(statearr_24671_24700[(1)] = (8));

} else {
var statearr_24672_24701 = state_24656__$1;
(statearr_24672_24701[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24657 === (14))){
var inst_24649 = (state_24656[(2)]);
var inst_24650 = cljs.core.async.close_BANG_.call(null,out);
var state_24656__$1 = (function (){var statearr_24674 = state_24656;
(statearr_24674[(13)] = inst_24649);

return statearr_24674;
})();
var statearr_24675_24702 = state_24656__$1;
(statearr_24675_24702[(2)] = inst_24650);

(statearr_24675_24702[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24657 === (10))){
var inst_24639 = (state_24656[(2)]);
var state_24656__$1 = state_24656;
var statearr_24676_24703 = state_24656__$1;
(statearr_24676_24703[(2)] = inst_24639);

(statearr_24676_24703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24657 === (8))){
var inst_24624 = (state_24656[(10)]);
var inst_24616 = (state_24656[(8)]);
var inst_24620 = (state_24656[(9)]);
var inst_24629 = inst_24616.push(inst_24620);
var tmp24673 = inst_24616;
var inst_24616__$1 = tmp24673;
var inst_24617 = inst_24624;
var state_24656__$1 = (function (){var statearr_24677 = state_24656;
(statearr_24677[(7)] = inst_24617);

(statearr_24677[(14)] = inst_24629);

(statearr_24677[(8)] = inst_24616__$1);

return statearr_24677;
})();
var statearr_24678_24704 = state_24656__$1;
(statearr_24678_24704[(2)] = null);

(statearr_24678_24704[(1)] = (2));


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
});})(c__18935__auto___24690,out))
;
return ((function (switch__18914__auto__,c__18935__auto___24690,out){
return (function() {
var cljs$core$async$state_machine__18915__auto__ = null;
var cljs$core$async$state_machine__18915__auto____0 = (function (){
var statearr_24682 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24682[(0)] = cljs$core$async$state_machine__18915__auto__);

(statearr_24682[(1)] = (1));

return statearr_24682;
});
var cljs$core$async$state_machine__18915__auto____1 = (function (state_24656){
while(true){
var ret_value__18916__auto__ = (function (){try{while(true){
var result__18917__auto__ = switch__18914__auto__.call(null,state_24656);
if(cljs.core.keyword_identical_QMARK_.call(null,result__18917__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__18917__auto__;
}
break;
}
}catch (e24683){if((e24683 instanceof Object)){
var ex__18918__auto__ = e24683;
var statearr_24684_24705 = state_24656;
(statearr_24684_24705[(5)] = ex__18918__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24656);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__18916__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24706 = state_24656;
state_24656 = G__24706;
continue;
} else {
return ret_value__18916__auto__;
}
break;
}
});
cljs$core$async$state_machine__18915__auto__ = function(state_24656){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__18915__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__18915__auto____1.call(this,state_24656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__18915__auto____0;
cljs$core$async$state_machine__18915__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__18915__auto____1;
return cljs$core$async$state_machine__18915__auto__;
})()
;})(switch__18914__auto__,c__18935__auto___24690,out))
})();
var state__18937__auto__ = (function (){var statearr_24685 = f__18936__auto__.call(null);
(statearr_24685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__18935__auto___24690);

return statearr_24685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__18937__auto__);
});})(c__18935__auto___24690,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1460363585140