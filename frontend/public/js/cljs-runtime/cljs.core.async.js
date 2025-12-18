goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14451 = (function (f,blockable,meta14452){
this.f = f;
this.blockable = blockable;
this.meta14452 = meta14452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14453,meta14452__$1){
var self__ = this;
var _14453__$1 = this;
return (new cljs.core.async.t_cljs$core$async14451(self__.f,self__.blockable,meta14452__$1));
}));

(cljs.core.async.t_cljs$core$async14451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14453){
var self__ = this;
var _14453__$1 = this;
return self__.meta14452;
}));

(cljs.core.async.t_cljs$core$async14451.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14451.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14451.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14451.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14451.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14452","meta14452",-1153217992,null)], null);
}));

(cljs.core.async.t_cljs$core$async14451.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14451.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14451");

(cljs.core.async.t_cljs$core$async14451.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14451");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14451.
 */
cljs.core.async.__GT_t_cljs$core$async14451 = (function cljs$core$async$__GT_t_cljs$core$async14451(f,blockable,meta14452){
return (new cljs.core.async.t_cljs$core$async14451(f,blockable,meta14452));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14450 = arguments.length;
switch (G__14450) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async14451(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__14492 = arguments.length;
switch (G__14492) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__14513 = arguments.length;
switch (G__14513) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
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
var G__14536 = arguments.length;
switch (G__14536) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_17693 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17693) : fn1.call(null,val_17693));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_17693) : fn1.call(null,val_17693));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__14559 = arguments.length;
switch (G__14559) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5593__auto___17706 = n;
var x_17707 = (0);
while(true){
if((x_17707 < n__5593__auto___17706)){
(a[x_17707] = x_17707);

var G__17708 = (x_17707 + (1));
x_17707 = G__17708;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14617 = (function (flag,meta14618){
this.flag = flag;
this.meta14618 = meta14618;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14617.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14619,meta14618__$1){
var self__ = this;
var _14619__$1 = this;
return (new cljs.core.async.t_cljs$core$async14617(self__.flag,meta14618__$1));
}));

(cljs.core.async.t_cljs$core$async14617.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14619){
var self__ = this;
var _14619__$1 = this;
return self__.meta14618;
}));

(cljs.core.async.t_cljs$core$async14617.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14617.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14617.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14617.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14617.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14618","meta14618",2022909197,null)], null);
}));

(cljs.core.async.t_cljs$core$async14617.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14617.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14617");

(cljs.core.async.t_cljs$core$async14617.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14617");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14617.
 */
cljs.core.async.__GT_t_cljs$core$async14617 = (function cljs$core$async$__GT_t_cljs$core$async14617(flag,meta14618){
return (new cljs.core.async.t_cljs$core$async14617(flag,meta14618));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14617(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14646 = (function (flag,cb,meta14647){
this.flag = flag;
this.cb = cb;
this.meta14647 = meta14647;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14648,meta14647__$1){
var self__ = this;
var _14648__$1 = this;
return (new cljs.core.async.t_cljs$core$async14646(self__.flag,self__.cb,meta14647__$1));
}));

(cljs.core.async.t_cljs$core$async14646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14648){
var self__ = this;
var _14648__$1 = this;
return self__.meta14647;
}));

(cljs.core.async.t_cljs$core$async14646.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14646.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14646.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14646.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14646.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14647","meta14647",-1863372000,null)], null);
}));

(cljs.core.async.t_cljs$core$async14646.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14646.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14646");

(cljs.core.async.t_cljs$core$async14646.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14646");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14646.
 */
cljs.core.async.__GT_t_cljs$core$async14646 = (function cljs$core$async$__GT_t_cljs$core$async14646(flag,cb,meta14647){
return (new cljs.core.async.t_cljs$core$async14646(flag,cb,meta14647));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14646(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14687_SHARP_){
var G__14696 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14687_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14696) : fret.call(null,G__14696));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14688_SHARP_){
var G__14700 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14688_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14700) : fret.call(null,G__14700));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5002__auto__ = wport;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return port;
}
})()], null));
} else {
var G__17710 = (i + (1));
i = G__17710;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5002__auto__ = ret;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5000__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5000__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5000__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__5732__auto__ = [];
var len__5726__auto___17711 = arguments.length;
var i__5727__auto___17712 = (0);
while(true){
if((i__5727__auto___17712 < len__5726__auto___17711)){
args__5732__auto__.push((arguments[i__5727__auto___17712]));

var G__17713 = (i__5727__auto___17712 + (1));
i__5727__auto___17712 = G__17713;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14735){
var map__14736 = p__14735;
var map__14736__$1 = cljs.core.__destructure_map(map__14736);
var opts = map__14736__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14725){
var G__14726 = cljs.core.first(seq14725);
var seq14725__$1 = cljs.core.next(seq14725);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14726,seq14725__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
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
var G__14773 = arguments.length;
switch (G__14773) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__14350__auto___17715 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14352__auto__ = (function (){var switch__14101__auto__ = (function (state_14904){
var state_val_14906 = (state_14904[(1)]);
if((state_val_14906 === (7))){
var inst_14896 = (state_14904[(2)]);
var state_14904__$1 = state_14904;
var statearr_14930_17720 = state_14904__$1;
(statearr_14930_17720[(2)] = inst_14896);

(statearr_14930_17720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14906 === (1))){
var state_14904__$1 = state_14904;
var statearr_14938_17721 = state_14904__$1;
(statearr_14938_17721[(2)] = null);

(statearr_14938_17721[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14906 === (4))){
var inst_14873 = (state_14904[(7)]);
var inst_14873__$1 = (state_14904[(2)]);
var inst_14876 = (inst_14873__$1 == null);
var state_14904__$1 = (function (){var statearr_14942 = state_14904;
(statearr_14942[(7)] = inst_14873__$1);

return statearr_14942;
})();
if(cljs.core.truth_(inst_14876)){
var statearr_14946_17722 = state_14904__$1;
(statearr_14946_17722[(1)] = (5));

} else {
var statearr_14949_17723 = state_14904__$1;
(statearr_14949_17723[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14906 === (13))){
var state_14904__$1 = state_14904;
var statearr_14954_17724 = state_14904__$1;
(statearr_14954_17724[(2)] = null);

(statearr_14954_17724[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14906 === (6))){
var inst_14873 = (state_14904[(7)]);
var state_14904__$1 = state_14904;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14904__$1,(11),to,inst_14873);
} else {
if((state_val_14906 === (3))){
var inst_14898 = (state_14904[(2)]);
var state_14904__$1 = state_14904;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14904__$1,inst_14898);
} else {
if((state_val_14906 === (12))){
var state_14904__$1 = state_14904;
var statearr_14978_17725 = state_14904__$1;
(statearr_14978_17725[(2)] = null);

(statearr_14978_17725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14906 === (2))){
var state_14904__$1 = state_14904;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14904__$1,(4),from);
} else {
if((state_val_14906 === (11))){
var inst_14888 = (state_14904[(2)]);
var state_14904__$1 = state_14904;
if(cljs.core.truth_(inst_14888)){
var statearr_14987_17727 = state_14904__$1;
(statearr_14987_17727[(1)] = (12));

} else {
var statearr_14993_17728 = state_14904__$1;
(statearr_14993_17728[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14906 === (9))){
var state_14904__$1 = state_14904;
var statearr_14995_17729 = state_14904__$1;
(statearr_14995_17729[(2)] = null);

(statearr_14995_17729[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14906 === (5))){
var state_14904__$1 = state_14904;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14998_17730 = state_14904__$1;
(statearr_14998_17730[(1)] = (8));

} else {
var statearr_14999_17731 = state_14904__$1;
(statearr_14999_17731[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14906 === (14))){
var inst_14894 = (state_14904[(2)]);
var state_14904__$1 = state_14904;
var statearr_15000_17732 = state_14904__$1;
(statearr_15000_17732[(2)] = inst_14894);

(statearr_15000_17732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14906 === (10))){
var inst_14884 = (state_14904[(2)]);
var state_14904__$1 = state_14904;
var statearr_15008_17738 = state_14904__$1;
(statearr_15008_17738[(2)] = inst_14884);

(statearr_15008_17738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14906 === (8))){
var inst_14881 = cljs.core.async.close_BANG_(to);
var state_14904__$1 = state_14904;
var statearr_15009_17739 = state_14904__$1;
(statearr_15009_17739[(2)] = inst_14881);

(statearr_15009_17739[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__14102__auto__ = null;
var cljs$core$async$state_machine__14102__auto____0 = (function (){
var statearr_15011 = [null,null,null,null,null,null,null,null];
(statearr_15011[(0)] = cljs$core$async$state_machine__14102__auto__);

(statearr_15011[(1)] = (1));

return statearr_15011;
});
var cljs$core$async$state_machine__14102__auto____1 = (function (state_14904){
while(true){
var ret_value__14103__auto__ = (function (){try{while(true){
var result__14104__auto__ = switch__14101__auto__(state_14904);
if(cljs.core.keyword_identical_QMARK_(result__14104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14104__auto__;
}
break;
}
}catch (e15012){var ex__14105__auto__ = e15012;
var statearr_15013_17740 = state_14904;
(statearr_15013_17740[(2)] = ex__14105__auto__);


if(cljs.core.seq((state_14904[(4)]))){
var statearr_15014_17741 = state_14904;
(statearr_15014_17741[(1)] = cljs.core.first((state_14904[(4)])));

} else {
throw ex__14105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17742 = state_14904;
state_14904 = G__17742;
continue;
} else {
return ret_value__14103__auto__;
}
break;
}
});
cljs$core$async$state_machine__14102__auto__ = function(state_14904){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14102__auto____1.call(this,state_14904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14102__auto____0;
cljs$core$async$state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14102__auto____1;
return cljs$core$async$state_machine__14102__auto__;
})()
})();
var state__14353__auto__ = (function (){var statearr_15015 = f__14352__auto__();
(statearr_15015[(6)] = c__14350__auto___17715);

return statearr_15015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14353__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__15020){
var vec__15022 = p__15020;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15022,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15022,(1),null);
var job = vec__15022;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14350__auto___17746 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14352__auto__ = (function (){var switch__14101__auto__ = (function (state_15030){
var state_val_15031 = (state_15030[(1)]);
if((state_val_15031 === (1))){
var state_15030__$1 = state_15030;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15030__$1,(2),res,v);
} else {
if((state_val_15031 === (2))){
var inst_15027 = (state_15030[(2)]);
var inst_15028 = cljs.core.async.close_BANG_(res);
var state_15030__$1 = (function (){var statearr_15033 = state_15030;
(statearr_15033[(7)] = inst_15027);

return statearr_15033;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_15030__$1,inst_15028);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____0 = (function (){
var statearr_15035 = [null,null,null,null,null,null,null,null];
(statearr_15035[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__);

(statearr_15035[(1)] = (1));

return statearr_15035;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____1 = (function (state_15030){
while(true){
var ret_value__14103__auto__ = (function (){try{while(true){
var result__14104__auto__ = switch__14101__auto__(state_15030);
if(cljs.core.keyword_identical_QMARK_(result__14104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14104__auto__;
}
break;
}
}catch (e15039){var ex__14105__auto__ = e15039;
var statearr_15040_17748 = state_15030;
(statearr_15040_17748[(2)] = ex__14105__auto__);


if(cljs.core.seq((state_15030[(4)]))){
var statearr_15041_17752 = state_15030;
(statearr_15041_17752[(1)] = cljs.core.first((state_15030[(4)])));

} else {
throw ex__14105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17757 = state_15030;
state_15030 = G__17757;
continue;
} else {
return ret_value__14103__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__ = function(state_15030){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____1.call(this,state_15030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__;
})()
})();
var state__14353__auto__ = (function (){var statearr_15049 = f__14352__auto__();
(statearr_15049[(6)] = c__14350__auto___17746);

return statearr_15049;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14353__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__15053){
var vec__15054 = p__15053;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15054,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__15054,(1),null);
var job = vec__15054;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5593__auto___17758 = n;
var __17759 = (0);
while(true){
if((__17759 < n__5593__auto___17758)){
var G__15064_17760 = type;
var G__15064_17761__$1 = (((G__15064_17760 instanceof cljs.core.Keyword))?G__15064_17760.fqn:null);
switch (G__15064_17761__$1) {
case "compute":
var c__14350__auto___17763 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17759,c__14350__auto___17763,G__15064_17760,G__15064_17761__$1,n__5593__auto___17758,jobs,results,process__$1,async){
return (function (){
var f__14352__auto__ = (function (){var switch__14101__auto__ = ((function (__17759,c__14350__auto___17763,G__15064_17760,G__15064_17761__$1,n__5593__auto___17758,jobs,results,process__$1,async){
return (function (state_15080){
var state_val_15082 = (state_15080[(1)]);
if((state_val_15082 === (1))){
var state_15080__$1 = state_15080;
var statearr_15087_17764 = state_15080__$1;
(statearr_15087_17764[(2)] = null);

(statearr_15087_17764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (2))){
var state_15080__$1 = state_15080;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15080__$1,(4),jobs);
} else {
if((state_val_15082 === (3))){
var inst_15076 = (state_15080[(2)]);
var state_15080__$1 = state_15080;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15080__$1,inst_15076);
} else {
if((state_val_15082 === (4))){
var inst_15068 = (state_15080[(2)]);
var inst_15069 = process__$1(inst_15068);
var state_15080__$1 = state_15080;
if(cljs.core.truth_(inst_15069)){
var statearr_15090_17765 = state_15080__$1;
(statearr_15090_17765[(1)] = (5));

} else {
var statearr_15095_17766 = state_15080__$1;
(statearr_15095_17766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (5))){
var state_15080__$1 = state_15080;
var statearr_15096_17767 = state_15080__$1;
(statearr_15096_17767[(2)] = null);

(statearr_15096_17767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (6))){
var state_15080__$1 = state_15080;
var statearr_15097_17768 = state_15080__$1;
(statearr_15097_17768[(2)] = null);

(statearr_15097_17768[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15082 === (7))){
var inst_15074 = (state_15080[(2)]);
var state_15080__$1 = state_15080;
var statearr_15101_17769 = state_15080__$1;
(statearr_15101_17769[(2)] = inst_15074);

(statearr_15101_17769[(1)] = (3));


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
});})(__17759,c__14350__auto___17763,G__15064_17760,G__15064_17761__$1,n__5593__auto___17758,jobs,results,process__$1,async))
;
return ((function (__17759,switch__14101__auto__,c__14350__auto___17763,G__15064_17760,G__15064_17761__$1,n__5593__auto___17758,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____0 = (function (){
var statearr_15102 = [null,null,null,null,null,null,null];
(statearr_15102[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__);

(statearr_15102[(1)] = (1));

return statearr_15102;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____1 = (function (state_15080){
while(true){
var ret_value__14103__auto__ = (function (){try{while(true){
var result__14104__auto__ = switch__14101__auto__(state_15080);
if(cljs.core.keyword_identical_QMARK_(result__14104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14104__auto__;
}
break;
}
}catch (e15103){var ex__14105__auto__ = e15103;
var statearr_15105_17778 = state_15080;
(statearr_15105_17778[(2)] = ex__14105__auto__);


if(cljs.core.seq((state_15080[(4)]))){
var statearr_15107_17779 = state_15080;
(statearr_15107_17779[(1)] = cljs.core.first((state_15080[(4)])));

} else {
throw ex__14105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17784 = state_15080;
state_15080 = G__17784;
continue;
} else {
return ret_value__14103__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__ = function(state_15080){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____1.call(this,state_15080);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__;
})()
;})(__17759,switch__14101__auto__,c__14350__auto___17763,G__15064_17760,G__15064_17761__$1,n__5593__auto___17758,jobs,results,process__$1,async))
})();
var state__14353__auto__ = (function (){var statearr_15115 = f__14352__auto__();
(statearr_15115[(6)] = c__14350__auto___17763);

return statearr_15115;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14353__auto__);
});})(__17759,c__14350__auto___17763,G__15064_17760,G__15064_17761__$1,n__5593__auto___17758,jobs,results,process__$1,async))
);


break;
case "async":
var c__14350__auto___17785 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__17759,c__14350__auto___17785,G__15064_17760,G__15064_17761__$1,n__5593__auto___17758,jobs,results,process__$1,async){
return (function (){
var f__14352__auto__ = (function (){var switch__14101__auto__ = ((function (__17759,c__14350__auto___17785,G__15064_17760,G__15064_17761__$1,n__5593__auto___17758,jobs,results,process__$1,async){
return (function (state_15128){
var state_val_15129 = (state_15128[(1)]);
if((state_val_15129 === (1))){
var state_15128__$1 = state_15128;
var statearr_15140_17799 = state_15128__$1;
(statearr_15140_17799[(2)] = null);

(statearr_15140_17799[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (2))){
var state_15128__$1 = state_15128;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15128__$1,(4),jobs);
} else {
if((state_val_15129 === (3))){
var inst_15126 = (state_15128[(2)]);
var state_15128__$1 = state_15128;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15128__$1,inst_15126);
} else {
if((state_val_15129 === (4))){
var inst_15118 = (state_15128[(2)]);
var inst_15119 = async(inst_15118);
var state_15128__$1 = state_15128;
if(cljs.core.truth_(inst_15119)){
var statearr_15144_17806 = state_15128__$1;
(statearr_15144_17806[(1)] = (5));

} else {
var statearr_15145_17808 = state_15128__$1;
(statearr_15145_17808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (5))){
var state_15128__$1 = state_15128;
var statearr_15152_17809 = state_15128__$1;
(statearr_15152_17809[(2)] = null);

(statearr_15152_17809[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (6))){
var state_15128__$1 = state_15128;
var statearr_15153_17810 = state_15128__$1;
(statearr_15153_17810[(2)] = null);

(statearr_15153_17810[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15129 === (7))){
var inst_15124 = (state_15128[(2)]);
var state_15128__$1 = state_15128;
var statearr_15158_17816 = state_15128__$1;
(statearr_15158_17816[(2)] = inst_15124);

(statearr_15158_17816[(1)] = (3));


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
});})(__17759,c__14350__auto___17785,G__15064_17760,G__15064_17761__$1,n__5593__auto___17758,jobs,results,process__$1,async))
;
return ((function (__17759,switch__14101__auto__,c__14350__auto___17785,G__15064_17760,G__15064_17761__$1,n__5593__auto___17758,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____0 = (function (){
var statearr_15159 = [null,null,null,null,null,null,null];
(statearr_15159[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__);

(statearr_15159[(1)] = (1));

return statearr_15159;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____1 = (function (state_15128){
while(true){
var ret_value__14103__auto__ = (function (){try{while(true){
var result__14104__auto__ = switch__14101__auto__(state_15128);
if(cljs.core.keyword_identical_QMARK_(result__14104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14104__auto__;
}
break;
}
}catch (e15161){var ex__14105__auto__ = e15161;
var statearr_15162_17817 = state_15128;
(statearr_15162_17817[(2)] = ex__14105__auto__);


if(cljs.core.seq((state_15128[(4)]))){
var statearr_15163_17819 = state_15128;
(statearr_15163_17819[(1)] = cljs.core.first((state_15128[(4)])));

} else {
throw ex__14105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17827 = state_15128;
state_15128 = G__17827;
continue;
} else {
return ret_value__14103__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__ = function(state_15128){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____1.call(this,state_15128);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__;
})()
;})(__17759,switch__14101__auto__,c__14350__auto___17785,G__15064_17760,G__15064_17761__$1,n__5593__auto___17758,jobs,results,process__$1,async))
})();
var state__14353__auto__ = (function (){var statearr_15170 = f__14352__auto__();
(statearr_15170[(6)] = c__14350__auto___17785);

return statearr_15170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14353__auto__);
});})(__17759,c__14350__auto___17785,G__15064_17760,G__15064_17761__$1,n__5593__auto___17758,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15064_17761__$1)].join('')));

}

var G__17828 = (__17759 + (1));
__17759 = G__17828;
continue;
} else {
}
break;
}

var c__14350__auto___17835 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14352__auto__ = (function (){var switch__14101__auto__ = (function (state_15198){
var state_val_15199 = (state_15198[(1)]);
if((state_val_15199 === (7))){
var inst_15194 = (state_15198[(2)]);
var state_15198__$1 = state_15198;
var statearr_15208_17836 = state_15198__$1;
(statearr_15208_17836[(2)] = inst_15194);

(statearr_15208_17836[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15199 === (1))){
var state_15198__$1 = state_15198;
var statearr_15209_17842 = state_15198__$1;
(statearr_15209_17842[(2)] = null);

(statearr_15209_17842[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15199 === (4))){
var inst_15173 = (state_15198[(7)]);
var inst_15173__$1 = (state_15198[(2)]);
var inst_15174 = (inst_15173__$1 == null);
var state_15198__$1 = (function (){var statearr_15213 = state_15198;
(statearr_15213[(7)] = inst_15173__$1);

return statearr_15213;
})();
if(cljs.core.truth_(inst_15174)){
var statearr_15214_17843 = state_15198__$1;
(statearr_15214_17843[(1)] = (5));

} else {
var statearr_15216_17844 = state_15198__$1;
(statearr_15216_17844[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15199 === (6))){
var inst_15173 = (state_15198[(7)]);
var inst_15184 = (state_15198[(8)]);
var inst_15184__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_15185 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15186 = [inst_15173,inst_15184__$1];
var inst_15187 = (new cljs.core.PersistentVector(null,2,(5),inst_15185,inst_15186,null));
var state_15198__$1 = (function (){var statearr_15217 = state_15198;
(statearr_15217[(8)] = inst_15184__$1);

return statearr_15217;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15198__$1,(8),jobs,inst_15187);
} else {
if((state_val_15199 === (3))){
var inst_15196 = (state_15198[(2)]);
var state_15198__$1 = state_15198;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15198__$1,inst_15196);
} else {
if((state_val_15199 === (2))){
var state_15198__$1 = state_15198;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15198__$1,(4),from);
} else {
if((state_val_15199 === (9))){
var inst_15191 = (state_15198[(2)]);
var state_15198__$1 = (function (){var statearr_15218 = state_15198;
(statearr_15218[(9)] = inst_15191);

return statearr_15218;
})();
var statearr_15219_17845 = state_15198__$1;
(statearr_15219_17845[(2)] = null);

(statearr_15219_17845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15199 === (5))){
var inst_15176 = cljs.core.async.close_BANG_(jobs);
var state_15198__$1 = state_15198;
var statearr_15220_17846 = state_15198__$1;
(statearr_15220_17846[(2)] = inst_15176);

(statearr_15220_17846[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15199 === (8))){
var inst_15184 = (state_15198[(8)]);
var inst_15189 = (state_15198[(2)]);
var state_15198__$1 = (function (){var statearr_15222 = state_15198;
(statearr_15222[(10)] = inst_15189);

return statearr_15222;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15198__$1,(9),results,inst_15184);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____0 = (function (){
var statearr_15223 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15223[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__);

(statearr_15223[(1)] = (1));

return statearr_15223;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____1 = (function (state_15198){
while(true){
var ret_value__14103__auto__ = (function (){try{while(true){
var result__14104__auto__ = switch__14101__auto__(state_15198);
if(cljs.core.keyword_identical_QMARK_(result__14104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14104__auto__;
}
break;
}
}catch (e15224){var ex__14105__auto__ = e15224;
var statearr_15225_17856 = state_15198;
(statearr_15225_17856[(2)] = ex__14105__auto__);


if(cljs.core.seq((state_15198[(4)]))){
var statearr_15227_17860 = state_15198;
(statearr_15227_17860[(1)] = cljs.core.first((state_15198[(4)])));

} else {
throw ex__14105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17861 = state_15198;
state_15198 = G__17861;
continue;
} else {
return ret_value__14103__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__ = function(state_15198){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____1.call(this,state_15198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__;
})()
})();
var state__14353__auto__ = (function (){var statearr_15228 = f__14352__auto__();
(statearr_15228[(6)] = c__14350__auto___17835);

return statearr_15228;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14353__auto__);
}));


var c__14350__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14352__auto__ = (function (){var switch__14101__auto__ = (function (state_15267){
var state_val_15268 = (state_15267[(1)]);
if((state_val_15268 === (7))){
var inst_15263 = (state_15267[(2)]);
var state_15267__$1 = state_15267;
var statearr_15270_17863 = state_15267__$1;
(statearr_15270_17863[(2)] = inst_15263);

(statearr_15270_17863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15268 === (20))){
var state_15267__$1 = state_15267;
var statearr_15271_17878 = state_15267__$1;
(statearr_15271_17878[(2)] = null);

(statearr_15271_17878[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15268 === (1))){
var state_15267__$1 = state_15267;
var statearr_15272_17880 = state_15267__$1;
(statearr_15272_17880[(2)] = null);

(statearr_15272_17880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15268 === (4))){
var inst_15231 = (state_15267[(7)]);
var inst_15231__$1 = (state_15267[(2)]);
var inst_15232 = (inst_15231__$1 == null);
var state_15267__$1 = (function (){var statearr_15273 = state_15267;
(statearr_15273[(7)] = inst_15231__$1);

return statearr_15273;
})();
if(cljs.core.truth_(inst_15232)){
var statearr_15274_17881 = state_15267__$1;
(statearr_15274_17881[(1)] = (5));

} else {
var statearr_15275_17882 = state_15267__$1;
(statearr_15275_17882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15268 === (15))){
var inst_15245 = (state_15267[(8)]);
var state_15267__$1 = state_15267;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15267__$1,(18),to,inst_15245);
} else {
if((state_val_15268 === (21))){
var inst_15258 = (state_15267[(2)]);
var state_15267__$1 = state_15267;
var statearr_15279_17883 = state_15267__$1;
(statearr_15279_17883[(2)] = inst_15258);

(statearr_15279_17883[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15268 === (13))){
var inst_15260 = (state_15267[(2)]);
var state_15267__$1 = (function (){var statearr_15283 = state_15267;
(statearr_15283[(9)] = inst_15260);

return statearr_15283;
})();
var statearr_15284_17894 = state_15267__$1;
(statearr_15284_17894[(2)] = null);

(statearr_15284_17894[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15268 === (6))){
var inst_15231 = (state_15267[(7)]);
var state_15267__$1 = state_15267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15267__$1,(11),inst_15231);
} else {
if((state_val_15268 === (17))){
var inst_15253 = (state_15267[(2)]);
var state_15267__$1 = state_15267;
if(cljs.core.truth_(inst_15253)){
var statearr_15286_17897 = state_15267__$1;
(statearr_15286_17897[(1)] = (19));

} else {
var statearr_15288_17899 = state_15267__$1;
(statearr_15288_17899[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15268 === (3))){
var inst_15265 = (state_15267[(2)]);
var state_15267__$1 = state_15267;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15267__$1,inst_15265);
} else {
if((state_val_15268 === (12))){
var inst_15242 = (state_15267[(10)]);
var state_15267__$1 = state_15267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15267__$1,(14),inst_15242);
} else {
if((state_val_15268 === (2))){
var state_15267__$1 = state_15267;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15267__$1,(4),results);
} else {
if((state_val_15268 === (19))){
var state_15267__$1 = state_15267;
var statearr_15295_17923 = state_15267__$1;
(statearr_15295_17923[(2)] = null);

(statearr_15295_17923[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15268 === (11))){
var inst_15242 = (state_15267[(2)]);
var state_15267__$1 = (function (){var statearr_15296 = state_15267;
(statearr_15296[(10)] = inst_15242);

return statearr_15296;
})();
var statearr_15297_17928 = state_15267__$1;
(statearr_15297_17928[(2)] = null);

(statearr_15297_17928[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15268 === (9))){
var state_15267__$1 = state_15267;
var statearr_15298_17935 = state_15267__$1;
(statearr_15298_17935[(2)] = null);

(statearr_15298_17935[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15268 === (5))){
var state_15267__$1 = state_15267;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15299_17941 = state_15267__$1;
(statearr_15299_17941[(1)] = (8));

} else {
var statearr_15303_17945 = state_15267__$1;
(statearr_15303_17945[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15268 === (14))){
var inst_15247 = (state_15267[(11)]);
var inst_15245 = (state_15267[(8)]);
var inst_15245__$1 = (state_15267[(2)]);
var inst_15246 = (inst_15245__$1 == null);
var inst_15247__$1 = cljs.core.not(inst_15246);
var state_15267__$1 = (function (){var statearr_15304 = state_15267;
(statearr_15304[(11)] = inst_15247__$1);

(statearr_15304[(8)] = inst_15245__$1);

return statearr_15304;
})();
if(inst_15247__$1){
var statearr_15305_17946 = state_15267__$1;
(statearr_15305_17946[(1)] = (15));

} else {
var statearr_15306_17947 = state_15267__$1;
(statearr_15306_17947[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15268 === (16))){
var inst_15247 = (state_15267[(11)]);
var state_15267__$1 = state_15267;
var statearr_15308_17950 = state_15267__$1;
(statearr_15308_17950[(2)] = inst_15247);

(statearr_15308_17950[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15268 === (10))){
var inst_15239 = (state_15267[(2)]);
var state_15267__$1 = state_15267;
var statearr_15314_17953 = state_15267__$1;
(statearr_15314_17953[(2)] = inst_15239);

(statearr_15314_17953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15268 === (18))){
var inst_15250 = (state_15267[(2)]);
var state_15267__$1 = state_15267;
var statearr_15316_17954 = state_15267__$1;
(statearr_15316_17954[(2)] = inst_15250);

(statearr_15316_17954[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15268 === (8))){
var inst_15235 = cljs.core.async.close_BANG_(to);
var state_15267__$1 = state_15267;
var statearr_15317_17957 = state_15267__$1;
(statearr_15317_17957[(2)] = inst_15235);

(statearr_15317_17957[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____0 = (function (){
var statearr_15318 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15318[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__);

(statearr_15318[(1)] = (1));

return statearr_15318;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____1 = (function (state_15267){
while(true){
var ret_value__14103__auto__ = (function (){try{while(true){
var result__14104__auto__ = switch__14101__auto__(state_15267);
if(cljs.core.keyword_identical_QMARK_(result__14104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14104__auto__;
}
break;
}
}catch (e15319){var ex__14105__auto__ = e15319;
var statearr_15321_17964 = state_15267;
(statearr_15321_17964[(2)] = ex__14105__auto__);


if(cljs.core.seq((state_15267[(4)]))){
var statearr_15326_17965 = state_15267;
(statearr_15326_17965[(1)] = cljs.core.first((state_15267[(4)])));

} else {
throw ex__14105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17969 = state_15267;
state_15267 = G__17969;
continue;
} else {
return ret_value__14103__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__ = function(state_15267){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____1.call(this,state_15267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14102__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14102__auto__;
})()
})();
var state__14353__auto__ = (function (){var statearr_15327 = f__14352__auto__();
(statearr_15327[(6)] = c__14350__auto__);

return statearr_15327;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14353__auto__);
}));

return c__14350__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__15333 = arguments.length;
switch (G__15333) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

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
var G__15336 = arguments.length;
switch (G__15336) {
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
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

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
var G__15339 = arguments.length;
switch (G__15339) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__14350__auto___18002 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14352__auto__ = (function (){var switch__14101__auto__ = (function (state_15369){
var state_val_15370 = (state_15369[(1)]);
if((state_val_15370 === (7))){
var inst_15365 = (state_15369[(2)]);
var state_15369__$1 = state_15369;
var statearr_15375_18003 = state_15369__$1;
(statearr_15375_18003[(2)] = inst_15365);

(statearr_15375_18003[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (1))){
var state_15369__$1 = state_15369;
var statearr_15376_18004 = state_15369__$1;
(statearr_15376_18004[(2)] = null);

(statearr_15376_18004[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (4))){
var inst_15346 = (state_15369[(7)]);
var inst_15346__$1 = (state_15369[(2)]);
var inst_15347 = (inst_15346__$1 == null);
var state_15369__$1 = (function (){var statearr_15377 = state_15369;
(statearr_15377[(7)] = inst_15346__$1);

return statearr_15377;
})();
if(cljs.core.truth_(inst_15347)){
var statearr_15378_18011 = state_15369__$1;
(statearr_15378_18011[(1)] = (5));

} else {
var statearr_15379_18012 = state_15369__$1;
(statearr_15379_18012[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (13))){
var state_15369__$1 = state_15369;
var statearr_15380_18016 = state_15369__$1;
(statearr_15380_18016[(2)] = null);

(statearr_15380_18016[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (6))){
var inst_15346 = (state_15369[(7)]);
var inst_15352 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15346) : p.call(null,inst_15346));
var state_15369__$1 = state_15369;
if(cljs.core.truth_(inst_15352)){
var statearr_15381_18017 = state_15369__$1;
(statearr_15381_18017[(1)] = (9));

} else {
var statearr_15383_18018 = state_15369__$1;
(statearr_15383_18018[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (3))){
var inst_15367 = (state_15369[(2)]);
var state_15369__$1 = state_15369;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15369__$1,inst_15367);
} else {
if((state_val_15370 === (12))){
var state_15369__$1 = state_15369;
var statearr_15384_18019 = state_15369__$1;
(statearr_15384_18019[(2)] = null);

(statearr_15384_18019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (2))){
var state_15369__$1 = state_15369;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15369__$1,(4),ch);
} else {
if((state_val_15370 === (11))){
var inst_15346 = (state_15369[(7)]);
var inst_15356 = (state_15369[(2)]);
var state_15369__$1 = state_15369;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15369__$1,(8),inst_15356,inst_15346);
} else {
if((state_val_15370 === (9))){
var state_15369__$1 = state_15369;
var statearr_15385_18024 = state_15369__$1;
(statearr_15385_18024[(2)] = tc);

(statearr_15385_18024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (5))){
var inst_15349 = cljs.core.async.close_BANG_(tc);
var inst_15350 = cljs.core.async.close_BANG_(fc);
var state_15369__$1 = (function (){var statearr_15386 = state_15369;
(statearr_15386[(8)] = inst_15349);

return statearr_15386;
})();
var statearr_15387_18025 = state_15369__$1;
(statearr_15387_18025[(2)] = inst_15350);

(statearr_15387_18025[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (14))){
var inst_15363 = (state_15369[(2)]);
var state_15369__$1 = state_15369;
var statearr_15389_18040 = state_15369__$1;
(statearr_15389_18040[(2)] = inst_15363);

(statearr_15389_18040[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (10))){
var state_15369__$1 = state_15369;
var statearr_15391_18041 = state_15369__$1;
(statearr_15391_18041[(2)] = fc);

(statearr_15391_18041[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15370 === (8))){
var inst_15358 = (state_15369[(2)]);
var state_15369__$1 = state_15369;
if(cljs.core.truth_(inst_15358)){
var statearr_15392_18060 = state_15369__$1;
(statearr_15392_18060[(1)] = (12));

} else {
var statearr_15393_18066 = state_15369__$1;
(statearr_15393_18066[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__14102__auto__ = null;
var cljs$core$async$state_machine__14102__auto____0 = (function (){
var statearr_15394 = [null,null,null,null,null,null,null,null,null];
(statearr_15394[(0)] = cljs$core$async$state_machine__14102__auto__);

(statearr_15394[(1)] = (1));

return statearr_15394;
});
var cljs$core$async$state_machine__14102__auto____1 = (function (state_15369){
while(true){
var ret_value__14103__auto__ = (function (){try{while(true){
var result__14104__auto__ = switch__14101__auto__(state_15369);
if(cljs.core.keyword_identical_QMARK_(result__14104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14104__auto__;
}
break;
}
}catch (e15395){var ex__14105__auto__ = e15395;
var statearr_15396_18069 = state_15369;
(statearr_15396_18069[(2)] = ex__14105__auto__);


if(cljs.core.seq((state_15369[(4)]))){
var statearr_15399_18072 = state_15369;
(statearr_15399_18072[(1)] = cljs.core.first((state_15369[(4)])));

} else {
throw ex__14105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18073 = state_15369;
state_15369 = G__18073;
continue;
} else {
return ret_value__14103__auto__;
}
break;
}
});
cljs$core$async$state_machine__14102__auto__ = function(state_15369){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14102__auto____1.call(this,state_15369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14102__auto____0;
cljs$core$async$state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14102__auto____1;
return cljs$core$async$state_machine__14102__auto__;
})()
})();
var state__14353__auto__ = (function (){var statearr_15403 = f__14352__auto__();
(statearr_15403[(6)] = c__14350__auto___18002);

return statearr_15403;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14353__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__14350__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14352__auto__ = (function (){var switch__14101__auto__ = (function (state_15426){
var state_val_15427 = (state_15426[(1)]);
if((state_val_15427 === (7))){
var inst_15422 = (state_15426[(2)]);
var state_15426__$1 = state_15426;
var statearr_15433_18076 = state_15426__$1;
(statearr_15433_18076[(2)] = inst_15422);

(statearr_15433_18076[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15427 === (1))){
var inst_15404 = init;
var inst_15405 = inst_15404;
var state_15426__$1 = (function (){var statearr_15434 = state_15426;
(statearr_15434[(7)] = inst_15405);

return statearr_15434;
})();
var statearr_15435_18078 = state_15426__$1;
(statearr_15435_18078[(2)] = null);

(statearr_15435_18078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15427 === (4))){
var inst_15408 = (state_15426[(8)]);
var inst_15408__$1 = (state_15426[(2)]);
var inst_15410 = (inst_15408__$1 == null);
var state_15426__$1 = (function (){var statearr_15436 = state_15426;
(statearr_15436[(8)] = inst_15408__$1);

return statearr_15436;
})();
if(cljs.core.truth_(inst_15410)){
var statearr_15437_18080 = state_15426__$1;
(statearr_15437_18080[(1)] = (5));

} else {
var statearr_15438_18081 = state_15426__$1;
(statearr_15438_18081[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15427 === (6))){
var inst_15413 = (state_15426[(9)]);
var inst_15408 = (state_15426[(8)]);
var inst_15405 = (state_15426[(7)]);
var inst_15413__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15405,inst_15408) : f.call(null,inst_15405,inst_15408));
var inst_15414 = cljs.core.reduced_QMARK_(inst_15413__$1);
var state_15426__$1 = (function (){var statearr_15443 = state_15426;
(statearr_15443[(9)] = inst_15413__$1);

return statearr_15443;
})();
if(inst_15414){
var statearr_15445_18093 = state_15426__$1;
(statearr_15445_18093[(1)] = (8));

} else {
var statearr_15446_18094 = state_15426__$1;
(statearr_15446_18094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15427 === (3))){
var inst_15424 = (state_15426[(2)]);
var state_15426__$1 = state_15426;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15426__$1,inst_15424);
} else {
if((state_val_15427 === (2))){
var state_15426__$1 = state_15426;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15426__$1,(4),ch);
} else {
if((state_val_15427 === (9))){
var inst_15413 = (state_15426[(9)]);
var inst_15405 = inst_15413;
var state_15426__$1 = (function (){var statearr_15447 = state_15426;
(statearr_15447[(7)] = inst_15405);

return statearr_15447;
})();
var statearr_15448_18118 = state_15426__$1;
(statearr_15448_18118[(2)] = null);

(statearr_15448_18118[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15427 === (5))){
var inst_15405 = (state_15426[(7)]);
var state_15426__$1 = state_15426;
var statearr_15450_18125 = state_15426__$1;
(statearr_15450_18125[(2)] = inst_15405);

(statearr_15450_18125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15427 === (10))){
var inst_15420 = (state_15426[(2)]);
var state_15426__$1 = state_15426;
var statearr_15451_18126 = state_15426__$1;
(statearr_15451_18126[(2)] = inst_15420);

(statearr_15451_18126[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15427 === (8))){
var inst_15413 = (state_15426[(9)]);
var inst_15416 = cljs.core.deref(inst_15413);
var state_15426__$1 = state_15426;
var statearr_15452_18127 = state_15426__$1;
(statearr_15452_18127[(2)] = inst_15416);

(statearr_15452_18127[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__14102__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14102__auto____0 = (function (){
var statearr_15453 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15453[(0)] = cljs$core$async$reduce_$_state_machine__14102__auto__);

(statearr_15453[(1)] = (1));

return statearr_15453;
});
var cljs$core$async$reduce_$_state_machine__14102__auto____1 = (function (state_15426){
while(true){
var ret_value__14103__auto__ = (function (){try{while(true){
var result__14104__auto__ = switch__14101__auto__(state_15426);
if(cljs.core.keyword_identical_QMARK_(result__14104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14104__auto__;
}
break;
}
}catch (e15455){var ex__14105__auto__ = e15455;
var statearr_15456_18128 = state_15426;
(statearr_15456_18128[(2)] = ex__14105__auto__);


if(cljs.core.seq((state_15426[(4)]))){
var statearr_15457_18129 = state_15426;
(statearr_15457_18129[(1)] = cljs.core.first((state_15426[(4)])));

} else {
throw ex__14105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18130 = state_15426;
state_15426 = G__18130;
continue;
} else {
return ret_value__14103__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14102__auto__ = function(state_15426){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14102__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14102__auto____1.call(this,state_15426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14102__auto____0;
cljs$core$async$reduce_$_state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14102__auto____1;
return cljs$core$async$reduce_$_state_machine__14102__auto__;
})()
})();
var state__14353__auto__ = (function (){var statearr_15459 = f__14352__auto__();
(statearr_15459[(6)] = c__14350__auto__);

return statearr_15459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14353__auto__);
}));

return c__14350__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14350__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14352__auto__ = (function (){var switch__14101__auto__ = (function (state_15470){
var state_val_15471 = (state_15470[(1)]);
if((state_val_15471 === (1))){
var inst_15465 = cljs.core.async.reduce(f__$1,init,ch);
var state_15470__$1 = state_15470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15470__$1,(2),inst_15465);
} else {
if((state_val_15471 === (2))){
var inst_15467 = (state_15470[(2)]);
var inst_15468 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15467) : f__$1.call(null,inst_15467));
var state_15470__$1 = state_15470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15470__$1,inst_15468);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14102__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14102__auto____0 = (function (){
var statearr_15477 = [null,null,null,null,null,null,null];
(statearr_15477[(0)] = cljs$core$async$transduce_$_state_machine__14102__auto__);

(statearr_15477[(1)] = (1));

return statearr_15477;
});
var cljs$core$async$transduce_$_state_machine__14102__auto____1 = (function (state_15470){
while(true){
var ret_value__14103__auto__ = (function (){try{while(true){
var result__14104__auto__ = switch__14101__auto__(state_15470);
if(cljs.core.keyword_identical_QMARK_(result__14104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14104__auto__;
}
break;
}
}catch (e15478){var ex__14105__auto__ = e15478;
var statearr_15479_18138 = state_15470;
(statearr_15479_18138[(2)] = ex__14105__auto__);


if(cljs.core.seq((state_15470[(4)]))){
var statearr_15480_18139 = state_15470;
(statearr_15480_18139[(1)] = cljs.core.first((state_15470[(4)])));

} else {
throw ex__14105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18140 = state_15470;
state_15470 = G__18140;
continue;
} else {
return ret_value__14103__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14102__auto__ = function(state_15470){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14102__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14102__auto____1.call(this,state_15470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14102__auto____0;
cljs$core$async$transduce_$_state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14102__auto____1;
return cljs$core$async$transduce_$_state_machine__14102__auto__;
})()
})();
var state__14353__auto__ = (function (){var statearr_15482 = f__14352__auto__();
(statearr_15482[(6)] = c__14350__auto__);

return statearr_15482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14353__auto__);
}));

return c__14350__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__15485 = arguments.length;
switch (G__15485) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__14350__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14352__auto__ = (function (){var switch__14101__auto__ = (function (state_15518){
var state_val_15519 = (state_15518[(1)]);
if((state_val_15519 === (7))){
var inst_15499 = (state_15518[(2)]);
var state_15518__$1 = state_15518;
var statearr_15525_18148 = state_15518__$1;
(statearr_15525_18148[(2)] = inst_15499);

(statearr_15525_18148[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15519 === (1))){
var inst_15491 = cljs.core.seq(coll);
var inst_15492 = inst_15491;
var state_15518__$1 = (function (){var statearr_15526 = state_15518;
(statearr_15526[(7)] = inst_15492);

return statearr_15526;
})();
var statearr_15527_18150 = state_15518__$1;
(statearr_15527_18150[(2)] = null);

(statearr_15527_18150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15519 === (4))){
var inst_15492 = (state_15518[(7)]);
var inst_15497 = cljs.core.first(inst_15492);
var state_15518__$1 = state_15518;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15518__$1,(7),ch,inst_15497);
} else {
if((state_val_15519 === (13))){
var inst_15512 = (state_15518[(2)]);
var state_15518__$1 = state_15518;
var statearr_15530_18152 = state_15518__$1;
(statearr_15530_18152[(2)] = inst_15512);

(statearr_15530_18152[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15519 === (6))){
var inst_15502 = (state_15518[(2)]);
var state_15518__$1 = state_15518;
if(cljs.core.truth_(inst_15502)){
var statearr_15531_18153 = state_15518__$1;
(statearr_15531_18153[(1)] = (8));

} else {
var statearr_15532_18154 = state_15518__$1;
(statearr_15532_18154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15519 === (3))){
var inst_15516 = (state_15518[(2)]);
var state_15518__$1 = state_15518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15518__$1,inst_15516);
} else {
if((state_val_15519 === (12))){
var state_15518__$1 = state_15518;
var statearr_15534_18155 = state_15518__$1;
(statearr_15534_18155[(2)] = null);

(statearr_15534_18155[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15519 === (2))){
var inst_15492 = (state_15518[(7)]);
var state_15518__$1 = state_15518;
if(cljs.core.truth_(inst_15492)){
var statearr_15535_18156 = state_15518__$1;
(statearr_15535_18156[(1)] = (4));

} else {
var statearr_15536_18157 = state_15518__$1;
(statearr_15536_18157[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15519 === (11))){
var inst_15509 = cljs.core.async.close_BANG_(ch);
var state_15518__$1 = state_15518;
var statearr_15538_18158 = state_15518__$1;
(statearr_15538_18158[(2)] = inst_15509);

(statearr_15538_18158[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15519 === (9))){
var state_15518__$1 = state_15518;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15541_18159 = state_15518__$1;
(statearr_15541_18159[(1)] = (11));

} else {
var statearr_15542_18160 = state_15518__$1;
(statearr_15542_18160[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15519 === (5))){
var inst_15492 = (state_15518[(7)]);
var state_15518__$1 = state_15518;
var statearr_15544_18165 = state_15518__$1;
(statearr_15544_18165[(2)] = inst_15492);

(statearr_15544_18165[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15519 === (10))){
var inst_15514 = (state_15518[(2)]);
var state_15518__$1 = state_15518;
var statearr_15545_18166 = state_15518__$1;
(statearr_15545_18166[(2)] = inst_15514);

(statearr_15545_18166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15519 === (8))){
var inst_15492 = (state_15518[(7)]);
var inst_15505 = cljs.core.next(inst_15492);
var inst_15492__$1 = inst_15505;
var state_15518__$1 = (function (){var statearr_15547 = state_15518;
(statearr_15547[(7)] = inst_15492__$1);

return statearr_15547;
})();
var statearr_15548_18171 = state_15518__$1;
(statearr_15548_18171[(2)] = null);

(statearr_15548_18171[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__14102__auto__ = null;
var cljs$core$async$state_machine__14102__auto____0 = (function (){
var statearr_15551 = [null,null,null,null,null,null,null,null];
(statearr_15551[(0)] = cljs$core$async$state_machine__14102__auto__);

(statearr_15551[(1)] = (1));

return statearr_15551;
});
var cljs$core$async$state_machine__14102__auto____1 = (function (state_15518){
while(true){
var ret_value__14103__auto__ = (function (){try{while(true){
var result__14104__auto__ = switch__14101__auto__(state_15518);
if(cljs.core.keyword_identical_QMARK_(result__14104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14104__auto__;
}
break;
}
}catch (e15553){var ex__14105__auto__ = e15553;
var statearr_15556_18172 = state_15518;
(statearr_15556_18172[(2)] = ex__14105__auto__);


if(cljs.core.seq((state_15518[(4)]))){
var statearr_15558_18173 = state_15518;
(statearr_15558_18173[(1)] = cljs.core.first((state_15518[(4)])));

} else {
throw ex__14105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18178 = state_15518;
state_15518 = G__18178;
continue;
} else {
return ret_value__14103__auto__;
}
break;
}
});
cljs$core$async$state_machine__14102__auto__ = function(state_15518){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14102__auto____1.call(this,state_15518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14102__auto____0;
cljs$core$async$state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14102__auto____1;
return cljs$core$async$state_machine__14102__auto__;
})()
})();
var state__14353__auto__ = (function (){var statearr_15562 = f__14352__auto__();
(statearr_15562[(6)] = c__14350__auto__);

return statearr_15562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14353__auto__);
}));

return c__14350__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__15569 = arguments.length;
switch (G__15569) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_18184 = (function (_){
var x__5350__auto__ = (((_ == null))?null:_);
var m__5351__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5351__auto__.call(null,_));
} else {
var m__5349__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5349__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_18184(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_18188 = (function (m,ch,close_QMARK_){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5351__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5349__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_18188(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_18194 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_18194(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_18200 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_18200(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15605 = (function (ch,cs,meta15606){
this.ch = ch;
this.cs = cs;
this.meta15606 = meta15606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15607,meta15606__$1){
var self__ = this;
var _15607__$1 = this;
return (new cljs.core.async.t_cljs$core$async15605(self__.ch,self__.cs,meta15606__$1));
}));

(cljs.core.async.t_cljs$core$async15605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15607){
var self__ = this;
var _15607__$1 = this;
return self__.meta15606;
}));

(cljs.core.async.t_cljs$core$async15605.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15605.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15605.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15605.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15605.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15605.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15606","meta15606",762634741,null)], null);
}));

(cljs.core.async.t_cljs$core$async15605.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15605");

(cljs.core.async.t_cljs$core$async15605.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15605");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15605.
 */
cljs.core.async.__GT_t_cljs$core$async15605 = (function cljs$core$async$__GT_t_cljs$core$async15605(ch,cs,meta15606){
return (new cljs.core.async.t_cljs$core$async15605(ch,cs,meta15606));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async15605(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14350__auto___18216 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14352__auto__ = (function (){var switch__14101__auto__ = (function (state_15785){
var state_val_15786 = (state_15785[(1)]);
if((state_val_15786 === (7))){
var inst_15779 = (state_15785[(2)]);
var state_15785__$1 = state_15785;
var statearr_15795_18217 = state_15785__$1;
(statearr_15795_18217[(2)] = inst_15779);

(statearr_15795_18217[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (20))){
var inst_15681 = (state_15785[(7)]);
var inst_15693 = cljs.core.first(inst_15681);
var inst_15694 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15693,(0),null);
var inst_15695 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15693,(1),null);
var state_15785__$1 = (function (){var statearr_15803 = state_15785;
(statearr_15803[(8)] = inst_15694);

return statearr_15803;
})();
if(cljs.core.truth_(inst_15695)){
var statearr_15804_18221 = state_15785__$1;
(statearr_15804_18221[(1)] = (22));

} else {
var statearr_15805_18222 = state_15785__$1;
(statearr_15805_18222[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (27))){
var inst_15723 = (state_15785[(9)]);
var inst_15725 = (state_15785[(10)]);
var inst_15647 = (state_15785[(11)]);
var inst_15730 = (state_15785[(12)]);
var inst_15730__$1 = cljs.core._nth(inst_15723,inst_15725);
var inst_15731 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15730__$1,inst_15647,done);
var state_15785__$1 = (function (){var statearr_15809 = state_15785;
(statearr_15809[(12)] = inst_15730__$1);

return statearr_15809;
})();
if(cljs.core.truth_(inst_15731)){
var statearr_15813_18224 = state_15785__$1;
(statearr_15813_18224[(1)] = (30));

} else {
var statearr_15814_18225 = state_15785__$1;
(statearr_15814_18225[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (1))){
var state_15785__$1 = state_15785;
var statearr_15821_18226 = state_15785__$1;
(statearr_15821_18226[(2)] = null);

(statearr_15821_18226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (24))){
var inst_15681 = (state_15785[(7)]);
var inst_15700 = (state_15785[(2)]);
var inst_15701 = cljs.core.next(inst_15681);
var inst_15656 = inst_15701;
var inst_15657 = null;
var inst_15658 = (0);
var inst_15659 = (0);
var state_15785__$1 = (function (){var statearr_15824 = state_15785;
(statearr_15824[(13)] = inst_15656);

(statearr_15824[(14)] = inst_15658);

(statearr_15824[(15)] = inst_15659);

(statearr_15824[(16)] = inst_15700);

(statearr_15824[(17)] = inst_15657);

return statearr_15824;
})();
var statearr_15825_18227 = state_15785__$1;
(statearr_15825_18227[(2)] = null);

(statearr_15825_18227[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (39))){
var state_15785__$1 = state_15785;
var statearr_15835_18229 = state_15785__$1;
(statearr_15835_18229[(2)] = null);

(statearr_15835_18229[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (4))){
var inst_15647 = (state_15785[(11)]);
var inst_15647__$1 = (state_15785[(2)]);
var inst_15648 = (inst_15647__$1 == null);
var state_15785__$1 = (function (){var statearr_15837 = state_15785;
(statearr_15837[(11)] = inst_15647__$1);

return statearr_15837;
})();
if(cljs.core.truth_(inst_15648)){
var statearr_15839_18231 = state_15785__$1;
(statearr_15839_18231[(1)] = (5));

} else {
var statearr_15840_18232 = state_15785__$1;
(statearr_15840_18232[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (15))){
var inst_15656 = (state_15785[(13)]);
var inst_15658 = (state_15785[(14)]);
var inst_15659 = (state_15785[(15)]);
var inst_15657 = (state_15785[(17)]);
var inst_15675 = (state_15785[(2)]);
var inst_15676 = (inst_15659 + (1));
var tmp15828 = inst_15656;
var tmp15829 = inst_15658;
var tmp15830 = inst_15657;
var inst_15656__$1 = tmp15828;
var inst_15657__$1 = tmp15830;
var inst_15658__$1 = tmp15829;
var inst_15659__$1 = inst_15676;
var state_15785__$1 = (function (){var statearr_15843 = state_15785;
(statearr_15843[(13)] = inst_15656__$1);

(statearr_15843[(14)] = inst_15658__$1);

(statearr_15843[(18)] = inst_15675);

(statearr_15843[(15)] = inst_15659__$1);

(statearr_15843[(17)] = inst_15657__$1);

return statearr_15843;
})();
var statearr_15844_18236 = state_15785__$1;
(statearr_15844_18236[(2)] = null);

(statearr_15844_18236[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (21))){
var inst_15704 = (state_15785[(2)]);
var state_15785__$1 = state_15785;
var statearr_15850_18237 = state_15785__$1;
(statearr_15850_18237[(2)] = inst_15704);

(statearr_15850_18237[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (31))){
var inst_15730 = (state_15785[(12)]);
var inst_15734 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15730);
var state_15785__$1 = state_15785;
var statearr_15852_18238 = state_15785__$1;
(statearr_15852_18238[(2)] = inst_15734);

(statearr_15852_18238[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (32))){
var inst_15723 = (state_15785[(9)]);
var inst_15724 = (state_15785[(19)]);
var inst_15725 = (state_15785[(10)]);
var inst_15722 = (state_15785[(20)]);
var inst_15736 = (state_15785[(2)]);
var inst_15737 = (inst_15725 + (1));
var tmp15846 = inst_15723;
var tmp15847 = inst_15724;
var tmp15848 = inst_15722;
var inst_15722__$1 = tmp15848;
var inst_15723__$1 = tmp15846;
var inst_15724__$1 = tmp15847;
var inst_15725__$1 = inst_15737;
var state_15785__$1 = (function (){var statearr_15857 = state_15785;
(statearr_15857[(9)] = inst_15723__$1);

(statearr_15857[(19)] = inst_15724__$1);

(statearr_15857[(10)] = inst_15725__$1);

(statearr_15857[(20)] = inst_15722__$1);

(statearr_15857[(21)] = inst_15736);

return statearr_15857;
})();
var statearr_15859_18239 = state_15785__$1;
(statearr_15859_18239[(2)] = null);

(statearr_15859_18239[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (40))){
var inst_15751 = (state_15785[(22)]);
var inst_15755 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15751);
var state_15785__$1 = state_15785;
var statearr_15860_18240 = state_15785__$1;
(statearr_15860_18240[(2)] = inst_15755);

(statearr_15860_18240[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (33))){
var inst_15741 = (state_15785[(23)]);
var inst_15743 = cljs.core.chunked_seq_QMARK_(inst_15741);
var state_15785__$1 = state_15785;
if(inst_15743){
var statearr_15861_18241 = state_15785__$1;
(statearr_15861_18241[(1)] = (36));

} else {
var statearr_15862_18242 = state_15785__$1;
(statearr_15862_18242[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (13))){
var inst_15669 = (state_15785[(24)]);
var inst_15672 = cljs.core.async.close_BANG_(inst_15669);
var state_15785__$1 = state_15785;
var statearr_15863_18243 = state_15785__$1;
(statearr_15863_18243[(2)] = inst_15672);

(statearr_15863_18243[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (22))){
var inst_15694 = (state_15785[(8)]);
var inst_15697 = cljs.core.async.close_BANG_(inst_15694);
var state_15785__$1 = state_15785;
var statearr_15864_18246 = state_15785__$1;
(statearr_15864_18246[(2)] = inst_15697);

(statearr_15864_18246[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (36))){
var inst_15741 = (state_15785[(23)]);
var inst_15746 = cljs.core.chunk_first(inst_15741);
var inst_15747 = cljs.core.chunk_rest(inst_15741);
var inst_15748 = cljs.core.count(inst_15746);
var inst_15722 = inst_15747;
var inst_15723 = inst_15746;
var inst_15724 = inst_15748;
var inst_15725 = (0);
var state_15785__$1 = (function (){var statearr_15866 = state_15785;
(statearr_15866[(9)] = inst_15723);

(statearr_15866[(19)] = inst_15724);

(statearr_15866[(10)] = inst_15725);

(statearr_15866[(20)] = inst_15722);

return statearr_15866;
})();
var statearr_15867_18248 = state_15785__$1;
(statearr_15867_18248[(2)] = null);

(statearr_15867_18248[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (41))){
var inst_15741 = (state_15785[(23)]);
var inst_15757 = (state_15785[(2)]);
var inst_15758 = cljs.core.next(inst_15741);
var inst_15722 = inst_15758;
var inst_15723 = null;
var inst_15724 = (0);
var inst_15725 = (0);
var state_15785__$1 = (function (){var statearr_15871 = state_15785;
(statearr_15871[(9)] = inst_15723);

(statearr_15871[(19)] = inst_15724);

(statearr_15871[(10)] = inst_15725);

(statearr_15871[(20)] = inst_15722);

(statearr_15871[(25)] = inst_15757);

return statearr_15871;
})();
var statearr_15872_18253 = state_15785__$1;
(statearr_15872_18253[(2)] = null);

(statearr_15872_18253[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (43))){
var state_15785__$1 = state_15785;
var statearr_15874_18258 = state_15785__$1;
(statearr_15874_18258[(2)] = null);

(statearr_15874_18258[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (29))){
var inst_15767 = (state_15785[(2)]);
var state_15785__$1 = state_15785;
var statearr_15876_18263 = state_15785__$1;
(statearr_15876_18263[(2)] = inst_15767);

(statearr_15876_18263[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (44))){
var inst_15776 = (state_15785[(2)]);
var state_15785__$1 = (function (){var statearr_15877 = state_15785;
(statearr_15877[(26)] = inst_15776);

return statearr_15877;
})();
var statearr_15878_18266 = state_15785__$1;
(statearr_15878_18266[(2)] = null);

(statearr_15878_18266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (6))){
var inst_15714 = (state_15785[(27)]);
var inst_15713 = cljs.core.deref(cs);
var inst_15714__$1 = cljs.core.keys(inst_15713);
var inst_15715 = cljs.core.count(inst_15714__$1);
var inst_15716 = cljs.core.reset_BANG_(dctr,inst_15715);
var inst_15721 = cljs.core.seq(inst_15714__$1);
var inst_15722 = inst_15721;
var inst_15723 = null;
var inst_15724 = (0);
var inst_15725 = (0);
var state_15785__$1 = (function (){var statearr_15879 = state_15785;
(statearr_15879[(27)] = inst_15714__$1);

(statearr_15879[(9)] = inst_15723);

(statearr_15879[(19)] = inst_15724);

(statearr_15879[(10)] = inst_15725);

(statearr_15879[(28)] = inst_15716);

(statearr_15879[(20)] = inst_15722);

return statearr_15879;
})();
var statearr_15880_18273 = state_15785__$1;
(statearr_15880_18273[(2)] = null);

(statearr_15880_18273[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (28))){
var inst_15722 = (state_15785[(20)]);
var inst_15741 = (state_15785[(23)]);
var inst_15741__$1 = cljs.core.seq(inst_15722);
var state_15785__$1 = (function (){var statearr_15882 = state_15785;
(statearr_15882[(23)] = inst_15741__$1);

return statearr_15882;
})();
if(inst_15741__$1){
var statearr_15883_18275 = state_15785__$1;
(statearr_15883_18275[(1)] = (33));

} else {
var statearr_15884_18276 = state_15785__$1;
(statearr_15884_18276[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (25))){
var inst_15724 = (state_15785[(19)]);
var inst_15725 = (state_15785[(10)]);
var inst_15727 = (inst_15725 < inst_15724);
var inst_15728 = inst_15727;
var state_15785__$1 = state_15785;
if(cljs.core.truth_(inst_15728)){
var statearr_15885_18277 = state_15785__$1;
(statearr_15885_18277[(1)] = (27));

} else {
var statearr_15886_18278 = state_15785__$1;
(statearr_15886_18278[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (34))){
var state_15785__$1 = state_15785;
var statearr_15887_18279 = state_15785__$1;
(statearr_15887_18279[(2)] = null);

(statearr_15887_18279[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (17))){
var state_15785__$1 = state_15785;
var statearr_15890_18280 = state_15785__$1;
(statearr_15890_18280[(2)] = null);

(statearr_15890_18280[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (3))){
var inst_15781 = (state_15785[(2)]);
var state_15785__$1 = state_15785;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15785__$1,inst_15781);
} else {
if((state_val_15786 === (12))){
var inst_15709 = (state_15785[(2)]);
var state_15785__$1 = state_15785;
var statearr_15891_18281 = state_15785__$1;
(statearr_15891_18281[(2)] = inst_15709);

(statearr_15891_18281[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (2))){
var state_15785__$1 = state_15785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15785__$1,(4),ch);
} else {
if((state_val_15786 === (23))){
var state_15785__$1 = state_15785;
var statearr_15893_18284 = state_15785__$1;
(statearr_15893_18284[(2)] = null);

(statearr_15893_18284[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (35))){
var inst_15764 = (state_15785[(2)]);
var state_15785__$1 = state_15785;
var statearr_15895_18285 = state_15785__$1;
(statearr_15895_18285[(2)] = inst_15764);

(statearr_15895_18285[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (19))){
var inst_15681 = (state_15785[(7)]);
var inst_15685 = cljs.core.chunk_first(inst_15681);
var inst_15686 = cljs.core.chunk_rest(inst_15681);
var inst_15687 = cljs.core.count(inst_15685);
var inst_15656 = inst_15686;
var inst_15657 = inst_15685;
var inst_15658 = inst_15687;
var inst_15659 = (0);
var state_15785__$1 = (function (){var statearr_15896 = state_15785;
(statearr_15896[(13)] = inst_15656);

(statearr_15896[(14)] = inst_15658);

(statearr_15896[(15)] = inst_15659);

(statearr_15896[(17)] = inst_15657);

return statearr_15896;
})();
var statearr_15897_18287 = state_15785__$1;
(statearr_15897_18287[(2)] = null);

(statearr_15897_18287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (11))){
var inst_15656 = (state_15785[(13)]);
var inst_15681 = (state_15785[(7)]);
var inst_15681__$1 = cljs.core.seq(inst_15656);
var state_15785__$1 = (function (){var statearr_15898 = state_15785;
(statearr_15898[(7)] = inst_15681__$1);

return statearr_15898;
})();
if(inst_15681__$1){
var statearr_15899_18292 = state_15785__$1;
(statearr_15899_18292[(1)] = (16));

} else {
var statearr_15900_18293 = state_15785__$1;
(statearr_15900_18293[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (9))){
var inst_15711 = (state_15785[(2)]);
var state_15785__$1 = state_15785;
var statearr_15901_18294 = state_15785__$1;
(statearr_15901_18294[(2)] = inst_15711);

(statearr_15901_18294[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (5))){
var inst_15654 = cljs.core.deref(cs);
var inst_15655 = cljs.core.seq(inst_15654);
var inst_15656 = inst_15655;
var inst_15657 = null;
var inst_15658 = (0);
var inst_15659 = (0);
var state_15785__$1 = (function (){var statearr_15903 = state_15785;
(statearr_15903[(13)] = inst_15656);

(statearr_15903[(14)] = inst_15658);

(statearr_15903[(15)] = inst_15659);

(statearr_15903[(17)] = inst_15657);

return statearr_15903;
})();
var statearr_15904_18298 = state_15785__$1;
(statearr_15904_18298[(2)] = null);

(statearr_15904_18298[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (14))){
var state_15785__$1 = state_15785;
var statearr_15905_18299 = state_15785__$1;
(statearr_15905_18299[(2)] = null);

(statearr_15905_18299[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (45))){
var inst_15773 = (state_15785[(2)]);
var state_15785__$1 = state_15785;
var statearr_15906_18300 = state_15785__$1;
(statearr_15906_18300[(2)] = inst_15773);

(statearr_15906_18300[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (26))){
var inst_15714 = (state_15785[(27)]);
var inst_15769 = (state_15785[(2)]);
var inst_15770 = cljs.core.seq(inst_15714);
var state_15785__$1 = (function (){var statearr_15910 = state_15785;
(statearr_15910[(29)] = inst_15769);

return statearr_15910;
})();
if(inst_15770){
var statearr_15911_18303 = state_15785__$1;
(statearr_15911_18303[(1)] = (42));

} else {
var statearr_15917_18305 = state_15785__$1;
(statearr_15917_18305[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (16))){
var inst_15681 = (state_15785[(7)]);
var inst_15683 = cljs.core.chunked_seq_QMARK_(inst_15681);
var state_15785__$1 = state_15785;
if(inst_15683){
var statearr_15923_18306 = state_15785__$1;
(statearr_15923_18306[(1)] = (19));

} else {
var statearr_15924_18307 = state_15785__$1;
(statearr_15924_18307[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (38))){
var inst_15761 = (state_15785[(2)]);
var state_15785__$1 = state_15785;
var statearr_15925_18309 = state_15785__$1;
(statearr_15925_18309[(2)] = inst_15761);

(statearr_15925_18309[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (30))){
var state_15785__$1 = state_15785;
var statearr_15930_18310 = state_15785__$1;
(statearr_15930_18310[(2)] = null);

(statearr_15930_18310[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (10))){
var inst_15659 = (state_15785[(15)]);
var inst_15657 = (state_15785[(17)]);
var inst_15668 = cljs.core._nth(inst_15657,inst_15659);
var inst_15669 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15668,(0),null);
var inst_15670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15668,(1),null);
var state_15785__$1 = (function (){var statearr_15933 = state_15785;
(statearr_15933[(24)] = inst_15669);

return statearr_15933;
})();
if(cljs.core.truth_(inst_15670)){
var statearr_15934_18311 = state_15785__$1;
(statearr_15934_18311[(1)] = (13));

} else {
var statearr_15935_18312 = state_15785__$1;
(statearr_15935_18312[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (18))){
var inst_15707 = (state_15785[(2)]);
var state_15785__$1 = state_15785;
var statearr_15936_18313 = state_15785__$1;
(statearr_15936_18313[(2)] = inst_15707);

(statearr_15936_18313[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (42))){
var state_15785__$1 = state_15785;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15785__$1,(45),dchan);
} else {
if((state_val_15786 === (37))){
var inst_15647 = (state_15785[(11)]);
var inst_15741 = (state_15785[(23)]);
var inst_15751 = (state_15785[(22)]);
var inst_15751__$1 = cljs.core.first(inst_15741);
var inst_15752 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15751__$1,inst_15647,done);
var state_15785__$1 = (function (){var statearr_15945 = state_15785;
(statearr_15945[(22)] = inst_15751__$1);

return statearr_15945;
})();
if(cljs.core.truth_(inst_15752)){
var statearr_15946_18321 = state_15785__$1;
(statearr_15946_18321[(1)] = (39));

} else {
var statearr_15947_18322 = state_15785__$1;
(statearr_15947_18322[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15786 === (8))){
var inst_15658 = (state_15785[(14)]);
var inst_15659 = (state_15785[(15)]);
var inst_15661 = (inst_15659 < inst_15658);
var inst_15662 = inst_15661;
var state_15785__$1 = state_15785;
if(cljs.core.truth_(inst_15662)){
var statearr_15948_18323 = state_15785__$1;
(statearr_15948_18323[(1)] = (10));

} else {
var statearr_15949_18324 = state_15785__$1;
(statearr_15949_18324[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__14102__auto__ = null;
var cljs$core$async$mult_$_state_machine__14102__auto____0 = (function (){
var statearr_15950 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15950[(0)] = cljs$core$async$mult_$_state_machine__14102__auto__);

(statearr_15950[(1)] = (1));

return statearr_15950;
});
var cljs$core$async$mult_$_state_machine__14102__auto____1 = (function (state_15785){
while(true){
var ret_value__14103__auto__ = (function (){try{while(true){
var result__14104__auto__ = switch__14101__auto__(state_15785);
if(cljs.core.keyword_identical_QMARK_(result__14104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14104__auto__;
}
break;
}
}catch (e15951){var ex__14105__auto__ = e15951;
var statearr_15952_18327 = state_15785;
(statearr_15952_18327[(2)] = ex__14105__auto__);


if(cljs.core.seq((state_15785[(4)]))){
var statearr_15953_18328 = state_15785;
(statearr_15953_18328[(1)] = cljs.core.first((state_15785[(4)])));

} else {
throw ex__14105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18329 = state_15785;
state_15785 = G__18329;
continue;
} else {
return ret_value__14103__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14102__auto__ = function(state_15785){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14102__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14102__auto____1.call(this,state_15785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14102__auto____0;
cljs$core$async$mult_$_state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14102__auto____1;
return cljs$core$async$mult_$_state_machine__14102__auto__;
})()
})();
var state__14353__auto__ = (function (){var statearr_15957 = f__14352__auto__();
(statearr_15957[(6)] = c__14350__auto___18216);

return statearr_15957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14353__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__15967 = arguments.length;
switch (G__15967) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_18339 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_18339(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_18340 = (function (m,ch){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5351__auto__.call(null,m,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5349__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_18340(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_18343 = (function (m){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5351__auto__.call(null,m));
} else {
var m__5349__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5349__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_18343(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_18344 = (function (m,state_map){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5351__auto__.call(null,m,state_map));
} else {
var m__5349__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5349__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_18344(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_18345 = (function (m,mode){
var x__5350__auto__ = (((m == null))?null:m);
var m__5351__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5351__auto__.call(null,m,mode));
} else {
var m__5349__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5349__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_18345(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___18346 = arguments.length;
var i__5727__auto___18347 = (0);
while(true){
if((i__5727__auto___18347 < len__5726__auto___18346)){
args__5732__auto__.push((arguments[i__5727__auto___18347]));

var G__18348 = (i__5727__auto___18347 + (1));
i__5727__auto___18347 = G__18348;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__16017){
var map__16018 = p__16017;
var map__16018__$1 = cljs.core.__destructure_map(map__16018);
var opts = map__16018__$1;
var statearr_16021_18352 = state;
(statearr_16021_18352[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_16024_18354 = state;
(statearr_16024_18354[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_16025_18355 = state;
(statearr_16025_18355[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq16012){
var G__16013 = cljs.core.first(seq16012);
var seq16012__$1 = cljs.core.next(seq16012);
var G__16014 = cljs.core.first(seq16012__$1);
var seq16012__$2 = cljs.core.next(seq16012__$1);
var G__16015 = cljs.core.first(seq16012__$2);
var seq16012__$3 = cljs.core.next(seq16012__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__16013,G__16014,G__16015,seq16012__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16040 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16041){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta16041 = meta16041;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16040.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16042,meta16041__$1){
var self__ = this;
var _16042__$1 = this;
return (new cljs.core.async.t_cljs$core$async16040(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16041__$1));
}));

(cljs.core.async.t_cljs$core$async16040.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16042){
var self__ = this;
var _16042__$1 = this;
return self__.meta16041;
}));

(cljs.core.async.t_cljs$core$async16040.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16040.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async16040.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16040.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16040.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16040.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16040.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16040.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async16040.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta16041","meta16041",1359747004,null)], null);
}));

(cljs.core.async.t_cljs$core$async16040.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16040.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16040");

(cljs.core.async.t_cljs$core$async16040.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16040");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16040.
 */
cljs.core.async.__GT_t_cljs$core$async16040 = (function cljs$core$async$__GT_t_cljs$core$async16040(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16041){
return (new cljs.core.async.t_cljs$core$async16040(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16041));
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
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async16040(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14350__auto___18400 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14352__auto__ = (function (){var switch__14101__auto__ = (function (state_16159){
var state_val_16160 = (state_16159[(1)]);
if((state_val_16160 === (7))){
var inst_16113 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
if(cljs.core.truth_(inst_16113)){
var statearr_16167_18401 = state_16159__$1;
(statearr_16167_18401[(1)] = (8));

} else {
var statearr_16168_18402 = state_16159__$1;
(statearr_16168_18402[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16160 === (20))){
var inst_16103 = (state_16159[(7)]);
var state_16159__$1 = state_16159;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16159__$1,(23),out,inst_16103);
} else {
if((state_val_16160 === (1))){
var inst_16072 = calc_state();
var inst_16073 = cljs.core.__destructure_map(inst_16072);
var inst_16074 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16073,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16076 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16073,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16077 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16073,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_16078 = inst_16072;
var state_16159__$1 = (function (){var statearr_16176 = state_16159;
(statearr_16176[(8)] = inst_16077);

(statearr_16176[(9)] = inst_16076);

(statearr_16176[(10)] = inst_16078);

(statearr_16176[(11)] = inst_16074);

return statearr_16176;
})();
var statearr_16177_18406 = state_16159__$1;
(statearr_16177_18406[(2)] = null);

(statearr_16177_18406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16160 === (24))){
var inst_16084 = (state_16159[(12)]);
var inst_16078 = inst_16084;
var state_16159__$1 = (function (){var statearr_16181 = state_16159;
(statearr_16181[(10)] = inst_16078);

return statearr_16181;
})();
var statearr_16183_18410 = state_16159__$1;
(statearr_16183_18410[(2)] = null);

(statearr_16183_18410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16160 === (4))){
var inst_16103 = (state_16159[(7)]);
var inst_16106 = (state_16159[(13)]);
var inst_16101 = (state_16159[(2)]);
var inst_16103__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16101,(0),null);
var inst_16105 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16101,(1),null);
var inst_16106__$1 = (inst_16103__$1 == null);
var state_16159__$1 = (function (){var statearr_16189 = state_16159;
(statearr_16189[(7)] = inst_16103__$1);

(statearr_16189[(13)] = inst_16106__$1);

(statearr_16189[(14)] = inst_16105);

return statearr_16189;
})();
if(cljs.core.truth_(inst_16106__$1)){
var statearr_16192_18411 = state_16159__$1;
(statearr_16192_18411[(1)] = (5));

} else {
var statearr_16194_18412 = state_16159__$1;
(statearr_16194_18412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16160 === (15))){
var inst_16085 = (state_16159[(15)]);
var inst_16130 = (state_16159[(16)]);
var inst_16130__$1 = cljs.core.empty_QMARK_(inst_16085);
var state_16159__$1 = (function (){var statearr_16200 = state_16159;
(statearr_16200[(16)] = inst_16130__$1);

return statearr_16200;
})();
if(inst_16130__$1){
var statearr_16202_18414 = state_16159__$1;
(statearr_16202_18414[(1)] = (17));

} else {
var statearr_16203_18415 = state_16159__$1;
(statearr_16203_18415[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16160 === (21))){
var inst_16084 = (state_16159[(12)]);
var inst_16078 = inst_16084;
var state_16159__$1 = (function (){var statearr_16206 = state_16159;
(statearr_16206[(10)] = inst_16078);

return statearr_16206;
})();
var statearr_16209_18416 = state_16159__$1;
(statearr_16209_18416[(2)] = null);

(statearr_16209_18416[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16160 === (13))){
var inst_16122 = (state_16159[(2)]);
var inst_16123 = calc_state();
var inst_16078 = inst_16123;
var state_16159__$1 = (function (){var statearr_16211 = state_16159;
(statearr_16211[(17)] = inst_16122);

(statearr_16211[(10)] = inst_16078);

return statearr_16211;
})();
var statearr_16214_18417 = state_16159__$1;
(statearr_16214_18417[(2)] = null);

(statearr_16214_18417[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16160 === (22))){
var inst_16150 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
var statearr_16222_18418 = state_16159__$1;
(statearr_16222_18418[(2)] = inst_16150);

(statearr_16222_18418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16160 === (6))){
var inst_16105 = (state_16159[(14)]);
var inst_16111 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16105,change);
var state_16159__$1 = state_16159;
var statearr_16227_18422 = state_16159__$1;
(statearr_16227_18422[(2)] = inst_16111);

(statearr_16227_18422[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16160 === (25))){
var state_16159__$1 = state_16159;
var statearr_16234_18423 = state_16159__$1;
(statearr_16234_18423[(2)] = null);

(statearr_16234_18423[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16160 === (17))){
var inst_16086 = (state_16159[(18)]);
var inst_16105 = (state_16159[(14)]);
var inst_16132 = (inst_16086.cljs$core$IFn$_invoke$arity$1 ? inst_16086.cljs$core$IFn$_invoke$arity$1(inst_16105) : inst_16086.call(null,inst_16105));
var inst_16133 = cljs.core.not(inst_16132);
var state_16159__$1 = state_16159;
var statearr_16243_18424 = state_16159__$1;
(statearr_16243_18424[(2)] = inst_16133);

(statearr_16243_18424[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16160 === (3))){
var inst_16154 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16159__$1,inst_16154);
} else {
if((state_val_16160 === (12))){
var state_16159__$1 = state_16159;
var statearr_16254_18425 = state_16159__$1;
(statearr_16254_18425[(2)] = null);

(statearr_16254_18425[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16160 === (2))){
var inst_16084 = (state_16159[(12)]);
var inst_16078 = (state_16159[(10)]);
var inst_16084__$1 = cljs.core.__destructure_map(inst_16078);
var inst_16085 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16084__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_16086 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16084__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_16088 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16084__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_16159__$1 = (function (){var statearr_16270 = state_16159;
(statearr_16270[(18)] = inst_16086);

(statearr_16270[(12)] = inst_16084__$1);

(statearr_16270[(15)] = inst_16085);

return statearr_16270;
})();
return cljs.core.async.ioc_alts_BANG_(state_16159__$1,(4),inst_16088);
} else {
if((state_val_16160 === (23))){
var inst_16141 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
if(cljs.core.truth_(inst_16141)){
var statearr_16279_18426 = state_16159__$1;
(statearr_16279_18426[(1)] = (24));

} else {
var statearr_16284_18427 = state_16159__$1;
(statearr_16284_18427[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16160 === (19))){
var inst_16136 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
var statearr_16290_18428 = state_16159__$1;
(statearr_16290_18428[(2)] = inst_16136);

(statearr_16290_18428[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16160 === (11))){
var inst_16105 = (state_16159[(14)]);
var inst_16118 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_16105);
var state_16159__$1 = state_16159;
var statearr_16297_18430 = state_16159__$1;
(statearr_16297_18430[(2)] = inst_16118);

(statearr_16297_18430[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16160 === (9))){
var inst_16126 = (state_16159[(19)]);
var inst_16085 = (state_16159[(15)]);
var inst_16105 = (state_16159[(14)]);
var inst_16126__$1 = (inst_16085.cljs$core$IFn$_invoke$arity$1 ? inst_16085.cljs$core$IFn$_invoke$arity$1(inst_16105) : inst_16085.call(null,inst_16105));
var state_16159__$1 = (function (){var statearr_16301 = state_16159;
(statearr_16301[(19)] = inst_16126__$1);

return statearr_16301;
})();
if(cljs.core.truth_(inst_16126__$1)){
var statearr_16303_18434 = state_16159__$1;
(statearr_16303_18434[(1)] = (14));

} else {
var statearr_16304_18435 = state_16159__$1;
(statearr_16304_18435[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16160 === (5))){
var inst_16106 = (state_16159[(13)]);
var state_16159__$1 = state_16159;
var statearr_16321_18436 = state_16159__$1;
(statearr_16321_18436[(2)] = inst_16106);

(statearr_16321_18436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16160 === (14))){
var inst_16126 = (state_16159[(19)]);
var state_16159__$1 = state_16159;
var statearr_16324_18437 = state_16159__$1;
(statearr_16324_18437[(2)] = inst_16126);

(statearr_16324_18437[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16160 === (26))){
var inst_16146 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
var statearr_16325_18438 = state_16159__$1;
(statearr_16325_18438[(2)] = inst_16146);

(statearr_16325_18438[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16160 === (16))){
var inst_16138 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
if(cljs.core.truth_(inst_16138)){
var statearr_16327_18439 = state_16159__$1;
(statearr_16327_18439[(1)] = (20));

} else {
var statearr_16329_18440 = state_16159__$1;
(statearr_16329_18440[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16160 === (10))){
var inst_16152 = (state_16159[(2)]);
var state_16159__$1 = state_16159;
var statearr_16330_18441 = state_16159__$1;
(statearr_16330_18441[(2)] = inst_16152);

(statearr_16330_18441[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16160 === (18))){
var inst_16130 = (state_16159[(16)]);
var state_16159__$1 = state_16159;
var statearr_16333_18442 = state_16159__$1;
(statearr_16333_18442[(2)] = inst_16130);

(statearr_16333_18442[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16160 === (8))){
var inst_16103 = (state_16159[(7)]);
var inst_16115 = (inst_16103 == null);
var state_16159__$1 = state_16159;
if(cljs.core.truth_(inst_16115)){
var statearr_16339_18443 = state_16159__$1;
(statearr_16339_18443[(1)] = (11));

} else {
var statearr_16340_18444 = state_16159__$1;
(statearr_16340_18444[(1)] = (12));

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
});
return (function() {
var cljs$core$async$mix_$_state_machine__14102__auto__ = null;
var cljs$core$async$mix_$_state_machine__14102__auto____0 = (function (){
var statearr_16343 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16343[(0)] = cljs$core$async$mix_$_state_machine__14102__auto__);

(statearr_16343[(1)] = (1));

return statearr_16343;
});
var cljs$core$async$mix_$_state_machine__14102__auto____1 = (function (state_16159){
while(true){
var ret_value__14103__auto__ = (function (){try{while(true){
var result__14104__auto__ = switch__14101__auto__(state_16159);
if(cljs.core.keyword_identical_QMARK_(result__14104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14104__auto__;
}
break;
}
}catch (e16358){var ex__14105__auto__ = e16358;
var statearr_16359_18445 = state_16159;
(statearr_16359_18445[(2)] = ex__14105__auto__);


if(cljs.core.seq((state_16159[(4)]))){
var statearr_16366_18446 = state_16159;
(statearr_16366_18446[(1)] = cljs.core.first((state_16159[(4)])));

} else {
throw ex__14105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18447 = state_16159;
state_16159 = G__18447;
continue;
} else {
return ret_value__14103__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14102__auto__ = function(state_16159){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14102__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14102__auto____1.call(this,state_16159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14102__auto____0;
cljs$core$async$mix_$_state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14102__auto____1;
return cljs$core$async$mix_$_state_machine__14102__auto__;
})()
})();
var state__14353__auto__ = (function (){var statearr_16382 = f__14352__auto__();
(statearr_16382[(6)] = c__14350__auto___18400);

return statearr_16382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14353__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
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
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_18448 = (function (p,v,ch,close_QMARK_){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5351__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5349__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5349__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_18448(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_18453 = (function (p,v,ch){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5351__auto__.call(null,p,v,ch));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5349__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_18453(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_18456 = (function() {
var G__18457 = null;
var G__18457__1 = (function (p){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5351__auto__.call(null,p));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5349__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__18457__2 = (function (p,v){
var x__5350__auto__ = (((p == null))?null:p);
var m__5351__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5351__auto__.call(null,p,v));
} else {
var m__5349__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5349__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__18457 = function(p,v){
switch(arguments.length){
case 1:
return G__18457__1.call(this,p);
case 2:
return G__18457__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__18457.cljs$core$IFn$_invoke$arity$1 = G__18457__1;
G__18457.cljs$core$IFn$_invoke$arity$2 = G__18457__2;
return G__18457;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__16419 = arguments.length;
switch (G__16419) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18456(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_18456(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16442 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16443){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16443 = meta16443;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16442.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16444,meta16443__$1){
var self__ = this;
var _16444__$1 = this;
return (new cljs.core.async.t_cljs$core$async16442(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16443__$1));
}));

(cljs.core.async.t_cljs$core$async16442.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16444){
var self__ = this;
var _16444__$1 = this;
return self__.meta16443;
}));

(cljs.core.async.t_cljs$core$async16442.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16442.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async16442.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16442.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async16442.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async16442.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async16442.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async16442.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16443","meta16443",-1659473467,null)], null);
}));

(cljs.core.async.t_cljs$core$async16442.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16442.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16442");

(cljs.core.async.t_cljs$core$async16442.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16442");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16442.
 */
cljs.core.async.__GT_t_cljs$core$async16442 = (function cljs$core$async$__GT_t_cljs$core$async16442(ch,topic_fn,buf_fn,mults,ensure_mult,meta16443){
return (new cljs.core.async.t_cljs$core$async16442(ch,topic_fn,buf_fn,mults,ensure_mult,meta16443));
});


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
var G__16429 = arguments.length;
switch (G__16429) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5002__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__16423_SHARP_){
if(cljs.core.truth_((p1__16423_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__16423_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__16423_SHARP_.call(null,topic)))){
return p1__16423_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__16423_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async16442(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14350__auto___18463 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14352__auto__ = (function (){var switch__14101__auto__ = (function (state_16538){
var state_val_16539 = (state_16538[(1)]);
if((state_val_16539 === (7))){
var inst_16530 = (state_16538[(2)]);
var state_16538__$1 = state_16538;
var statearr_16543_18464 = state_16538__$1;
(statearr_16543_18464[(2)] = inst_16530);

(statearr_16543_18464[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (20))){
var state_16538__$1 = state_16538;
var statearr_16544_18465 = state_16538__$1;
(statearr_16544_18465[(2)] = null);

(statearr_16544_18465[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (1))){
var state_16538__$1 = state_16538;
var statearr_16548_18467 = state_16538__$1;
(statearr_16548_18467[(2)] = null);

(statearr_16548_18467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (24))){
var inst_16512 = (state_16538[(7)]);
var inst_16521 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_16512);
var state_16538__$1 = state_16538;
var statearr_16550_18469 = state_16538__$1;
(statearr_16550_18469[(2)] = inst_16521);

(statearr_16550_18469[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (4))){
var inst_16452 = (state_16538[(8)]);
var inst_16452__$1 = (state_16538[(2)]);
var inst_16453 = (inst_16452__$1 == null);
var state_16538__$1 = (function (){var statearr_16551 = state_16538;
(statearr_16551[(8)] = inst_16452__$1);

return statearr_16551;
})();
if(cljs.core.truth_(inst_16453)){
var statearr_16552_18471 = state_16538__$1;
(statearr_16552_18471[(1)] = (5));

} else {
var statearr_16553_18472 = state_16538__$1;
(statearr_16553_18472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (15))){
var inst_16504 = (state_16538[(2)]);
var state_16538__$1 = state_16538;
var statearr_16554_18473 = state_16538__$1;
(statearr_16554_18473[(2)] = inst_16504);

(statearr_16554_18473[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (21))){
var inst_16526 = (state_16538[(2)]);
var state_16538__$1 = (function (){var statearr_16558 = state_16538;
(statearr_16558[(9)] = inst_16526);

return statearr_16558;
})();
var statearr_16559_18474 = state_16538__$1;
(statearr_16559_18474[(2)] = null);

(statearr_16559_18474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (13))){
var inst_16484 = (state_16538[(10)]);
var inst_16486 = cljs.core.chunked_seq_QMARK_(inst_16484);
var state_16538__$1 = state_16538;
if(inst_16486){
var statearr_16561_18475 = state_16538__$1;
(statearr_16561_18475[(1)] = (16));

} else {
var statearr_16562_18476 = state_16538__$1;
(statearr_16562_18476[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (22))){
var inst_16518 = (state_16538[(2)]);
var state_16538__$1 = state_16538;
if(cljs.core.truth_(inst_16518)){
var statearr_16563_18477 = state_16538__$1;
(statearr_16563_18477[(1)] = (23));

} else {
var statearr_16564_18478 = state_16538__$1;
(statearr_16564_18478[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (6))){
var inst_16452 = (state_16538[(8)]);
var inst_16512 = (state_16538[(7)]);
var inst_16514 = (state_16538[(11)]);
var inst_16512__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_16452) : topic_fn.call(null,inst_16452));
var inst_16513 = cljs.core.deref(mults);
var inst_16514__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_16513,inst_16512__$1);
var state_16538__$1 = (function (){var statearr_16565 = state_16538;
(statearr_16565[(7)] = inst_16512__$1);

(statearr_16565[(11)] = inst_16514__$1);

return statearr_16565;
})();
if(cljs.core.truth_(inst_16514__$1)){
var statearr_16567_18482 = state_16538__$1;
(statearr_16567_18482[(1)] = (19));

} else {
var statearr_16568_18483 = state_16538__$1;
(statearr_16568_18483[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (25))){
var inst_16523 = (state_16538[(2)]);
var state_16538__$1 = state_16538;
var statearr_16570_18484 = state_16538__$1;
(statearr_16570_18484[(2)] = inst_16523);

(statearr_16570_18484[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (17))){
var inst_16484 = (state_16538[(10)]);
var inst_16495 = cljs.core.first(inst_16484);
var inst_16496 = cljs.core.async.muxch_STAR_(inst_16495);
var inst_16497 = cljs.core.async.close_BANG_(inst_16496);
var inst_16498 = cljs.core.next(inst_16484);
var inst_16462 = inst_16498;
var inst_16463 = null;
var inst_16464 = (0);
var inst_16465 = (0);
var state_16538__$1 = (function (){var statearr_16573 = state_16538;
(statearr_16573[(12)] = inst_16462);

(statearr_16573[(13)] = inst_16497);

(statearr_16573[(14)] = inst_16463);

(statearr_16573[(15)] = inst_16464);

(statearr_16573[(16)] = inst_16465);

return statearr_16573;
})();
var statearr_16574_18485 = state_16538__$1;
(statearr_16574_18485[(2)] = null);

(statearr_16574_18485[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (3))){
var inst_16533 = (state_16538[(2)]);
var state_16538__$1 = state_16538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16538__$1,inst_16533);
} else {
if((state_val_16539 === (12))){
var inst_16506 = (state_16538[(2)]);
var state_16538__$1 = state_16538;
var statearr_16575_18490 = state_16538__$1;
(statearr_16575_18490[(2)] = inst_16506);

(statearr_16575_18490[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (2))){
var state_16538__$1 = state_16538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16538__$1,(4),ch);
} else {
if((state_val_16539 === (23))){
var state_16538__$1 = state_16538;
var statearr_16580_18492 = state_16538__$1;
(statearr_16580_18492[(2)] = null);

(statearr_16580_18492[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (19))){
var inst_16452 = (state_16538[(8)]);
var inst_16514 = (state_16538[(11)]);
var inst_16516 = cljs.core.async.muxch_STAR_(inst_16514);
var state_16538__$1 = state_16538;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16538__$1,(22),inst_16516,inst_16452);
} else {
if((state_val_16539 === (11))){
var inst_16462 = (state_16538[(12)]);
var inst_16484 = (state_16538[(10)]);
var inst_16484__$1 = cljs.core.seq(inst_16462);
var state_16538__$1 = (function (){var statearr_16613 = state_16538;
(statearr_16613[(10)] = inst_16484__$1);

return statearr_16613;
})();
if(inst_16484__$1){
var statearr_16615_18493 = state_16538__$1;
(statearr_16615_18493[(1)] = (13));

} else {
var statearr_16616_18494 = state_16538__$1;
(statearr_16616_18494[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (9))){
var inst_16508 = (state_16538[(2)]);
var state_16538__$1 = state_16538;
var statearr_16620_18495 = state_16538__$1;
(statearr_16620_18495[(2)] = inst_16508);

(statearr_16620_18495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (5))){
var inst_16459 = cljs.core.deref(mults);
var inst_16460 = cljs.core.vals(inst_16459);
var inst_16461 = cljs.core.seq(inst_16460);
var inst_16462 = inst_16461;
var inst_16463 = null;
var inst_16464 = (0);
var inst_16465 = (0);
var state_16538__$1 = (function (){var statearr_16624 = state_16538;
(statearr_16624[(12)] = inst_16462);

(statearr_16624[(14)] = inst_16463);

(statearr_16624[(15)] = inst_16464);

(statearr_16624[(16)] = inst_16465);

return statearr_16624;
})();
var statearr_16628_18496 = state_16538__$1;
(statearr_16628_18496[(2)] = null);

(statearr_16628_18496[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (14))){
var state_16538__$1 = state_16538;
var statearr_16635_18497 = state_16538__$1;
(statearr_16635_18497[(2)] = null);

(statearr_16635_18497[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (16))){
var inst_16484 = (state_16538[(10)]);
var inst_16490 = cljs.core.chunk_first(inst_16484);
var inst_16491 = cljs.core.chunk_rest(inst_16484);
var inst_16492 = cljs.core.count(inst_16490);
var inst_16462 = inst_16491;
var inst_16463 = inst_16490;
var inst_16464 = inst_16492;
var inst_16465 = (0);
var state_16538__$1 = (function (){var statearr_16636 = state_16538;
(statearr_16636[(12)] = inst_16462);

(statearr_16636[(14)] = inst_16463);

(statearr_16636[(15)] = inst_16464);

(statearr_16636[(16)] = inst_16465);

return statearr_16636;
})();
var statearr_16637_18498 = state_16538__$1;
(statearr_16637_18498[(2)] = null);

(statearr_16637_18498[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (10))){
var inst_16462 = (state_16538[(12)]);
var inst_16463 = (state_16538[(14)]);
var inst_16464 = (state_16538[(15)]);
var inst_16465 = (state_16538[(16)]);
var inst_16475 = cljs.core._nth(inst_16463,inst_16465);
var inst_16476 = cljs.core.async.muxch_STAR_(inst_16475);
var inst_16477 = cljs.core.async.close_BANG_(inst_16476);
var inst_16478 = (inst_16465 + (1));
var tmp16632 = inst_16462;
var tmp16633 = inst_16463;
var tmp16634 = inst_16464;
var inst_16462__$1 = tmp16632;
var inst_16463__$1 = tmp16633;
var inst_16464__$1 = tmp16634;
var inst_16465__$1 = inst_16478;
var state_16538__$1 = (function (){var statearr_16638 = state_16538;
(statearr_16638[(12)] = inst_16462__$1);

(statearr_16638[(14)] = inst_16463__$1);

(statearr_16638[(15)] = inst_16464__$1);

(statearr_16638[(16)] = inst_16465__$1);

(statearr_16638[(17)] = inst_16477);

return statearr_16638;
})();
var statearr_16640_18499 = state_16538__$1;
(statearr_16640_18499[(2)] = null);

(statearr_16640_18499[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (18))){
var inst_16501 = (state_16538[(2)]);
var state_16538__$1 = state_16538;
var statearr_16644_18501 = state_16538__$1;
(statearr_16644_18501[(2)] = inst_16501);

(statearr_16644_18501[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16539 === (8))){
var inst_16464 = (state_16538[(15)]);
var inst_16465 = (state_16538[(16)]);
var inst_16472 = (inst_16465 < inst_16464);
var inst_16473 = inst_16472;
var state_16538__$1 = state_16538;
if(cljs.core.truth_(inst_16473)){
var statearr_16651_18502 = state_16538__$1;
(statearr_16651_18502[(1)] = (10));

} else {
var statearr_16652_18503 = state_16538__$1;
(statearr_16652_18503[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__14102__auto__ = null;
var cljs$core$async$state_machine__14102__auto____0 = (function (){
var statearr_16655 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16655[(0)] = cljs$core$async$state_machine__14102__auto__);

(statearr_16655[(1)] = (1));

return statearr_16655;
});
var cljs$core$async$state_machine__14102__auto____1 = (function (state_16538){
while(true){
var ret_value__14103__auto__ = (function (){try{while(true){
var result__14104__auto__ = switch__14101__auto__(state_16538);
if(cljs.core.keyword_identical_QMARK_(result__14104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14104__auto__;
}
break;
}
}catch (e16656){var ex__14105__auto__ = e16656;
var statearr_16657_18510 = state_16538;
(statearr_16657_18510[(2)] = ex__14105__auto__);


if(cljs.core.seq((state_16538[(4)]))){
var statearr_16658_18511 = state_16538;
(statearr_16658_18511[(1)] = cljs.core.first((state_16538[(4)])));

} else {
throw ex__14105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18512 = state_16538;
state_16538 = G__18512;
continue;
} else {
return ret_value__14103__auto__;
}
break;
}
});
cljs$core$async$state_machine__14102__auto__ = function(state_16538){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14102__auto____1.call(this,state_16538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14102__auto____0;
cljs$core$async$state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14102__auto____1;
return cljs$core$async$state_machine__14102__auto__;
})()
})();
var state__14353__auto__ = (function (){var statearr_16660 = f__14352__auto__();
(statearr_16660[(6)] = c__14350__auto___18463);

return statearr_16660;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14353__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__16664 = arguments.length;
switch (G__16664) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__16668 = arguments.length;
switch (G__16668) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

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
var G__16680 = arguments.length;
switch (G__16680) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__14350__auto___18525 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14352__auto__ = (function (){var switch__14101__auto__ = (function (state_16731){
var state_val_16732 = (state_16731[(1)]);
if((state_val_16732 === (7))){
var state_16731__$1 = state_16731;
var statearr_16733_18526 = state_16731__$1;
(statearr_16733_18526[(2)] = null);

(statearr_16733_18526[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (1))){
var state_16731__$1 = state_16731;
var statearr_16734_18527 = state_16731__$1;
(statearr_16734_18527[(2)] = null);

(statearr_16734_18527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (4))){
var inst_16690 = (state_16731[(7)]);
var inst_16691 = (state_16731[(8)]);
var inst_16693 = (inst_16691 < inst_16690);
var state_16731__$1 = state_16731;
if(cljs.core.truth_(inst_16693)){
var statearr_16735_18528 = state_16731__$1;
(statearr_16735_18528[(1)] = (6));

} else {
var statearr_16736_18529 = state_16731__$1;
(statearr_16736_18529[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (15))){
var inst_16716 = (state_16731[(9)]);
var inst_16721 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_16716);
var state_16731__$1 = state_16731;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16731__$1,(17),out,inst_16721);
} else {
if((state_val_16732 === (13))){
var inst_16716 = (state_16731[(9)]);
var inst_16716__$1 = (state_16731[(2)]);
var inst_16717 = cljs.core.some(cljs.core.nil_QMARK_,inst_16716__$1);
var state_16731__$1 = (function (){var statearr_16738 = state_16731;
(statearr_16738[(9)] = inst_16716__$1);

return statearr_16738;
})();
if(cljs.core.truth_(inst_16717)){
var statearr_16739_18530 = state_16731__$1;
(statearr_16739_18530[(1)] = (14));

} else {
var statearr_16740_18531 = state_16731__$1;
(statearr_16740_18531[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (6))){
var state_16731__$1 = state_16731;
var statearr_16741_18532 = state_16731__$1;
(statearr_16741_18532[(2)] = null);

(statearr_16741_18532[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (17))){
var inst_16723 = (state_16731[(2)]);
var state_16731__$1 = (function (){var statearr_16743 = state_16731;
(statearr_16743[(10)] = inst_16723);

return statearr_16743;
})();
var statearr_16744_18533 = state_16731__$1;
(statearr_16744_18533[(2)] = null);

(statearr_16744_18533[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (3))){
var inst_16729 = (state_16731[(2)]);
var state_16731__$1 = state_16731;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16731__$1,inst_16729);
} else {
if((state_val_16732 === (12))){
var _ = (function (){var statearr_16745 = state_16731;
(statearr_16745[(4)] = cljs.core.rest((state_16731[(4)])));

return statearr_16745;
})();
var state_16731__$1 = state_16731;
var ex16742 = (state_16731__$1[(2)]);
var statearr_16746_18534 = state_16731__$1;
(statearr_16746_18534[(5)] = ex16742);


if((ex16742 instanceof Object)){
var statearr_16747_18535 = state_16731__$1;
(statearr_16747_18535[(1)] = (11));

(statearr_16747_18535[(5)] = null);

} else {
throw ex16742;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (2))){
var inst_16689 = cljs.core.reset_BANG_(dctr,cnt);
var inst_16690 = cnt;
var inst_16691 = (0);
var state_16731__$1 = (function (){var statearr_16748 = state_16731;
(statearr_16748[(7)] = inst_16690);

(statearr_16748[(8)] = inst_16691);

(statearr_16748[(11)] = inst_16689);

return statearr_16748;
})();
var statearr_16749_18536 = state_16731__$1;
(statearr_16749_18536[(2)] = null);

(statearr_16749_18536[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (11))){
var inst_16695 = (state_16731[(2)]);
var inst_16696 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_16731__$1 = (function (){var statearr_16750 = state_16731;
(statearr_16750[(12)] = inst_16695);

return statearr_16750;
})();
var statearr_16751_18543 = state_16731__$1;
(statearr_16751_18543[(2)] = inst_16696);

(statearr_16751_18543[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (9))){
var inst_16691 = (state_16731[(8)]);
var _ = (function (){var statearr_16753 = state_16731;
(statearr_16753[(4)] = cljs.core.cons((12),(state_16731[(4)])));

return statearr_16753;
})();
var inst_16702 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_16691) : chs__$1.call(null,inst_16691));
var inst_16703 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_16691) : done.call(null,inst_16691));
var inst_16704 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_16702,inst_16703);
var ___$1 = (function (){var statearr_16757 = state_16731;
(statearr_16757[(4)] = cljs.core.rest((state_16731[(4)])));

return statearr_16757;
})();
var state_16731__$1 = state_16731;
var statearr_16758_18551 = state_16731__$1;
(statearr_16758_18551[(2)] = inst_16704);

(statearr_16758_18551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (5))){
var inst_16714 = (state_16731[(2)]);
var state_16731__$1 = (function (){var statearr_16760 = state_16731;
(statearr_16760[(13)] = inst_16714);

return statearr_16760;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16731__$1,(13),dchan);
} else {
if((state_val_16732 === (14))){
var inst_16719 = cljs.core.async.close_BANG_(out);
var state_16731__$1 = state_16731;
var statearr_16764_18553 = state_16731__$1;
(statearr_16764_18553[(2)] = inst_16719);

(statearr_16764_18553[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (16))){
var inst_16727 = (state_16731[(2)]);
var state_16731__$1 = state_16731;
var statearr_16765_18556 = state_16731__$1;
(statearr_16765_18556[(2)] = inst_16727);

(statearr_16765_18556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (10))){
var inst_16691 = (state_16731[(8)]);
var inst_16707 = (state_16731[(2)]);
var inst_16708 = (inst_16691 + (1));
var inst_16691__$1 = inst_16708;
var state_16731__$1 = (function (){var statearr_16766 = state_16731;
(statearr_16766[(14)] = inst_16707);

(statearr_16766[(8)] = inst_16691__$1);

return statearr_16766;
})();
var statearr_16767_18557 = state_16731__$1;
(statearr_16767_18557[(2)] = null);

(statearr_16767_18557[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16732 === (8))){
var inst_16712 = (state_16731[(2)]);
var state_16731__$1 = state_16731;
var statearr_16768_18558 = state_16731__$1;
(statearr_16768_18558[(2)] = inst_16712);

(statearr_16768_18558[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__14102__auto__ = null;
var cljs$core$async$state_machine__14102__auto____0 = (function (){
var statearr_16769 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16769[(0)] = cljs$core$async$state_machine__14102__auto__);

(statearr_16769[(1)] = (1));

return statearr_16769;
});
var cljs$core$async$state_machine__14102__auto____1 = (function (state_16731){
while(true){
var ret_value__14103__auto__ = (function (){try{while(true){
var result__14104__auto__ = switch__14101__auto__(state_16731);
if(cljs.core.keyword_identical_QMARK_(result__14104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14104__auto__;
}
break;
}
}catch (e16770){var ex__14105__auto__ = e16770;
var statearr_16771_18561 = state_16731;
(statearr_16771_18561[(2)] = ex__14105__auto__);


if(cljs.core.seq((state_16731[(4)]))){
var statearr_16774_18562 = state_16731;
(statearr_16774_18562[(1)] = cljs.core.first((state_16731[(4)])));

} else {
throw ex__14105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18563 = state_16731;
state_16731 = G__18563;
continue;
} else {
return ret_value__14103__auto__;
}
break;
}
});
cljs$core$async$state_machine__14102__auto__ = function(state_16731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14102__auto____1.call(this,state_16731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14102__auto____0;
cljs$core$async$state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14102__auto____1;
return cljs$core$async$state_machine__14102__auto__;
})()
})();
var state__14353__auto__ = (function (){var statearr_16775 = f__14352__auto__();
(statearr_16775[(6)] = c__14350__auto___18525);

return statearr_16775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14353__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__16778 = arguments.length;
switch (G__16778) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14350__auto___18568 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14352__auto__ = (function (){var switch__14101__auto__ = (function (state_16818){
var state_val_16819 = (state_16818[(1)]);
if((state_val_16819 === (7))){
var inst_16797 = (state_16818[(7)]);
var inst_16798 = (state_16818[(8)]);
var inst_16797__$1 = (state_16818[(2)]);
var inst_16798__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16797__$1,(0),null);
var inst_16799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16797__$1,(1),null);
var inst_16800 = (inst_16798__$1 == null);
var state_16818__$1 = (function (){var statearr_16826 = state_16818;
(statearr_16826[(9)] = inst_16799);

(statearr_16826[(7)] = inst_16797__$1);

(statearr_16826[(8)] = inst_16798__$1);

return statearr_16826;
})();
if(cljs.core.truth_(inst_16800)){
var statearr_16831_18569 = state_16818__$1;
(statearr_16831_18569[(1)] = (8));

} else {
var statearr_16832_18570 = state_16818__$1;
(statearr_16832_18570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (1))){
var inst_16785 = cljs.core.vec(chs);
var inst_16786 = inst_16785;
var state_16818__$1 = (function (){var statearr_16833 = state_16818;
(statearr_16833[(10)] = inst_16786);

return statearr_16833;
})();
var statearr_16834_18579 = state_16818__$1;
(statearr_16834_18579[(2)] = null);

(statearr_16834_18579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (4))){
var inst_16786 = (state_16818[(10)]);
var state_16818__$1 = state_16818;
return cljs.core.async.ioc_alts_BANG_(state_16818__$1,(7),inst_16786);
} else {
if((state_val_16819 === (6))){
var inst_16814 = (state_16818[(2)]);
var state_16818__$1 = state_16818;
var statearr_16835_18587 = state_16818__$1;
(statearr_16835_18587[(2)] = inst_16814);

(statearr_16835_18587[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (3))){
var inst_16816 = (state_16818[(2)]);
var state_16818__$1 = state_16818;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16818__$1,inst_16816);
} else {
if((state_val_16819 === (2))){
var inst_16786 = (state_16818[(10)]);
var inst_16788 = cljs.core.count(inst_16786);
var inst_16789 = (inst_16788 > (0));
var state_16818__$1 = state_16818;
if(cljs.core.truth_(inst_16789)){
var statearr_16840_18588 = state_16818__$1;
(statearr_16840_18588[(1)] = (4));

} else {
var statearr_16841_18589 = state_16818__$1;
(statearr_16841_18589[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (11))){
var inst_16786 = (state_16818[(10)]);
var inst_16807 = (state_16818[(2)]);
var tmp16839 = inst_16786;
var inst_16786__$1 = tmp16839;
var state_16818__$1 = (function (){var statearr_16842 = state_16818;
(statearr_16842[(11)] = inst_16807);

(statearr_16842[(10)] = inst_16786__$1);

return statearr_16842;
})();
var statearr_16843_18592 = state_16818__$1;
(statearr_16843_18592[(2)] = null);

(statearr_16843_18592[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (9))){
var inst_16798 = (state_16818[(8)]);
var state_16818__$1 = state_16818;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16818__$1,(11),out,inst_16798);
} else {
if((state_val_16819 === (5))){
var inst_16812 = cljs.core.async.close_BANG_(out);
var state_16818__$1 = state_16818;
var statearr_16844_18596 = state_16818__$1;
(statearr_16844_18596[(2)] = inst_16812);

(statearr_16844_18596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (10))){
var inst_16810 = (state_16818[(2)]);
var state_16818__$1 = state_16818;
var statearr_16846_18597 = state_16818__$1;
(statearr_16846_18597[(2)] = inst_16810);

(statearr_16846_18597[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16819 === (8))){
var inst_16799 = (state_16818[(9)]);
var inst_16786 = (state_16818[(10)]);
var inst_16797 = (state_16818[(7)]);
var inst_16798 = (state_16818[(8)]);
var inst_16802 = (function (){var cs = inst_16786;
var vec__16792 = inst_16797;
var v = inst_16798;
var c = inst_16799;
return (function (p1__16776_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16776_SHARP_);
});
})();
var inst_16803 = cljs.core.filterv(inst_16802,inst_16786);
var inst_16786__$1 = inst_16803;
var state_16818__$1 = (function (){var statearr_16850 = state_16818;
(statearr_16850[(10)] = inst_16786__$1);

return statearr_16850;
})();
var statearr_16851_18603 = state_16818__$1;
(statearr_16851_18603[(2)] = null);

(statearr_16851_18603[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__14102__auto__ = null;
var cljs$core$async$state_machine__14102__auto____0 = (function (){
var statearr_16853 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16853[(0)] = cljs$core$async$state_machine__14102__auto__);

(statearr_16853[(1)] = (1));

return statearr_16853;
});
var cljs$core$async$state_machine__14102__auto____1 = (function (state_16818){
while(true){
var ret_value__14103__auto__ = (function (){try{while(true){
var result__14104__auto__ = switch__14101__auto__(state_16818);
if(cljs.core.keyword_identical_QMARK_(result__14104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14104__auto__;
}
break;
}
}catch (e16857){var ex__14105__auto__ = e16857;
var statearr_16858_18609 = state_16818;
(statearr_16858_18609[(2)] = ex__14105__auto__);


if(cljs.core.seq((state_16818[(4)]))){
var statearr_16859_18610 = state_16818;
(statearr_16859_18610[(1)] = cljs.core.first((state_16818[(4)])));

} else {
throw ex__14105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18611 = state_16818;
state_16818 = G__18611;
continue;
} else {
return ret_value__14103__auto__;
}
break;
}
});
cljs$core$async$state_machine__14102__auto__ = function(state_16818){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14102__auto____1.call(this,state_16818);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14102__auto____0;
cljs$core$async$state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14102__auto____1;
return cljs$core$async$state_machine__14102__auto__;
})()
})();
var state__14353__auto__ = (function (){var statearr_16860 = f__14352__auto__();
(statearr_16860[(6)] = c__14350__auto___18568);

return statearr_16860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14353__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__16864 = arguments.length;
switch (G__16864) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14350__auto___18613 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14352__auto__ = (function (){var switch__14101__auto__ = (function (state_16889){
var state_val_16890 = (state_16889[(1)]);
if((state_val_16890 === (7))){
var inst_16871 = (state_16889[(7)]);
var inst_16871__$1 = (state_16889[(2)]);
var inst_16872 = (inst_16871__$1 == null);
var inst_16873 = cljs.core.not(inst_16872);
var state_16889__$1 = (function (){var statearr_16895 = state_16889;
(statearr_16895[(7)] = inst_16871__$1);

return statearr_16895;
})();
if(inst_16873){
var statearr_16896_18639 = state_16889__$1;
(statearr_16896_18639[(1)] = (8));

} else {
var statearr_16897_18643 = state_16889__$1;
(statearr_16897_18643[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16890 === (1))){
var inst_16865 = (0);
var state_16889__$1 = (function (){var statearr_16898 = state_16889;
(statearr_16898[(8)] = inst_16865);

return statearr_16898;
})();
var statearr_16908_18644 = state_16889__$1;
(statearr_16908_18644[(2)] = null);

(statearr_16908_18644[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16890 === (4))){
var state_16889__$1 = state_16889;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16889__$1,(7),ch);
} else {
if((state_val_16890 === (6))){
var inst_16884 = (state_16889[(2)]);
var state_16889__$1 = state_16889;
var statearr_16914_18659 = state_16889__$1;
(statearr_16914_18659[(2)] = inst_16884);

(statearr_16914_18659[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16890 === (3))){
var inst_16886 = (state_16889[(2)]);
var inst_16887 = cljs.core.async.close_BANG_(out);
var state_16889__$1 = (function (){var statearr_16923 = state_16889;
(statearr_16923[(9)] = inst_16886);

return statearr_16923;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16889__$1,inst_16887);
} else {
if((state_val_16890 === (2))){
var inst_16865 = (state_16889[(8)]);
var inst_16867 = (inst_16865 < n);
var state_16889__$1 = state_16889;
if(cljs.core.truth_(inst_16867)){
var statearr_16925_18690 = state_16889__$1;
(statearr_16925_18690[(1)] = (4));

} else {
var statearr_16926_18691 = state_16889__$1;
(statearr_16926_18691[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16890 === (11))){
var inst_16865 = (state_16889[(8)]);
var inst_16876 = (state_16889[(2)]);
var inst_16877 = (inst_16865 + (1));
var inst_16865__$1 = inst_16877;
var state_16889__$1 = (function (){var statearr_16932 = state_16889;
(statearr_16932[(8)] = inst_16865__$1);

(statearr_16932[(10)] = inst_16876);

return statearr_16932;
})();
var statearr_16945_18703 = state_16889__$1;
(statearr_16945_18703[(2)] = null);

(statearr_16945_18703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16890 === (9))){
var state_16889__$1 = state_16889;
var statearr_16952_18719 = state_16889__$1;
(statearr_16952_18719[(2)] = null);

(statearr_16952_18719[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16890 === (5))){
var state_16889__$1 = state_16889;
var statearr_16953_18725 = state_16889__$1;
(statearr_16953_18725[(2)] = null);

(statearr_16953_18725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16890 === (10))){
var inst_16881 = (state_16889[(2)]);
var state_16889__$1 = state_16889;
var statearr_16958_18734 = state_16889__$1;
(statearr_16958_18734[(2)] = inst_16881);

(statearr_16958_18734[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16890 === (8))){
var inst_16871 = (state_16889[(7)]);
var state_16889__$1 = state_16889;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16889__$1,(11),out,inst_16871);
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
});
return (function() {
var cljs$core$async$state_machine__14102__auto__ = null;
var cljs$core$async$state_machine__14102__auto____0 = (function (){
var statearr_16968 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16968[(0)] = cljs$core$async$state_machine__14102__auto__);

(statearr_16968[(1)] = (1));

return statearr_16968;
});
var cljs$core$async$state_machine__14102__auto____1 = (function (state_16889){
while(true){
var ret_value__14103__auto__ = (function (){try{while(true){
var result__14104__auto__ = switch__14101__auto__(state_16889);
if(cljs.core.keyword_identical_QMARK_(result__14104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14104__auto__;
}
break;
}
}catch (e16969){var ex__14105__auto__ = e16969;
var statearr_16970_18739 = state_16889;
(statearr_16970_18739[(2)] = ex__14105__auto__);


if(cljs.core.seq((state_16889[(4)]))){
var statearr_16973_18740 = state_16889;
(statearr_16973_18740[(1)] = cljs.core.first((state_16889[(4)])));

} else {
throw ex__14105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18742 = state_16889;
state_16889 = G__18742;
continue;
} else {
return ret_value__14103__auto__;
}
break;
}
});
cljs$core$async$state_machine__14102__auto__ = function(state_16889){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14102__auto____1.call(this,state_16889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14102__auto____0;
cljs$core$async$state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14102__auto____1;
return cljs$core$async$state_machine__14102__auto__;
})()
})();
var state__14353__auto__ = (function (){var statearr_16974 = f__14352__auto__();
(statearr_16974[(6)] = c__14350__auto___18613);

return statearr_16974;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14353__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17000 = (function (f,ch,meta16986,_,fn1,meta17001){
this.f = f;
this.ch = ch;
this.meta16986 = meta16986;
this._ = _;
this.fn1 = fn1;
this.meta17001 = meta17001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17002,meta17001__$1){
var self__ = this;
var _17002__$1 = this;
return (new cljs.core.async.t_cljs$core$async17000(self__.f,self__.ch,self__.meta16986,self__._,self__.fn1,meta17001__$1));
}));

(cljs.core.async.t_cljs$core$async17000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17002){
var self__ = this;
var _17002__$1 = this;
return self__.meta17001;
}));

(cljs.core.async.t_cljs$core$async17000.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17000.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async17000.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async17000.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16983_SHARP_){
var G__17020 = (((p1__16983_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16983_SHARP_) : self__.f.call(null,p1__16983_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__17020) : f1.call(null,G__17020));
});
}));

(cljs.core.async.t_cljs$core$async17000.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16986","meta16986",-619046709,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16985","cljs.core.async/t_cljs$core$async16985",45803176,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta17001","meta17001",-2075649397,null)], null);
}));

(cljs.core.async.t_cljs$core$async17000.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17000");

(cljs.core.async.t_cljs$core$async17000.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17000");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17000.
 */
cljs.core.async.__GT_t_cljs$core$async17000 = (function cljs$core$async$__GT_t_cljs$core$async17000(f,ch,meta16986,_,fn1,meta17001){
return (new cljs.core.async.t_cljs$core$async17000(f,ch,meta16986,_,fn1,meta17001));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16985 = (function (f,ch,meta16986){
this.f = f;
this.ch = ch;
this.meta16986 = meta16986;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16987,meta16986__$1){
var self__ = this;
var _16987__$1 = this;
return (new cljs.core.async.t_cljs$core$async16985(self__.f,self__.ch,meta16986__$1));
}));

(cljs.core.async.t_cljs$core$async16985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16987){
var self__ = this;
var _16987__$1 = this;
return self__.meta16986;
}));

(cljs.core.async.t_cljs$core$async16985.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16985.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16985.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16985.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16985.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async17000(self__.f,self__.ch,self__.meta16986,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__17025 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__17025) : self__.f.call(null,G__17025));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16985.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16985.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16985.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16986","meta16986",-619046709,null)], null);
}));

(cljs.core.async.t_cljs$core$async16985.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16985.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16985");

(cljs.core.async.t_cljs$core$async16985.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16985");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16985.
 */
cljs.core.async.__GT_t_cljs$core$async16985 = (function cljs$core$async$__GT_t_cljs$core$async16985(f,ch,meta16986){
return (new cljs.core.async.t_cljs$core$async16985(f,ch,meta16986));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16985(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17038 = (function (f,ch,meta17039){
this.f = f;
this.ch = ch;
this.meta17039 = meta17039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17040,meta17039__$1){
var self__ = this;
var _17040__$1 = this;
return (new cljs.core.async.t_cljs$core$async17038(self__.f,self__.ch,meta17039__$1));
}));

(cljs.core.async.t_cljs$core$async17038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17040){
var self__ = this;
var _17040__$1 = this;
return self__.meta17039;
}));

(cljs.core.async.t_cljs$core$async17038.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17038.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17038.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17038.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17038.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17038.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async17038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17039","meta17039",-2140809496,null)], null);
}));

(cljs.core.async.t_cljs$core$async17038.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17038.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17038");

(cljs.core.async.t_cljs$core$async17038.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17038");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17038.
 */
cljs.core.async.__GT_t_cljs$core$async17038 = (function cljs$core$async$__GT_t_cljs$core$async17038(f,ch,meta17039){
return (new cljs.core.async.t_cljs$core$async17038(f,ch,meta17039));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async17038(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async17056 = (function (p,ch,meta17057){
this.p = p;
this.ch = ch;
this.meta17057 = meta17057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_17058,meta17057__$1){
var self__ = this;
var _17058__$1 = this;
return (new cljs.core.async.t_cljs$core$async17056(self__.p,self__.ch,meta17057__$1));
}));

(cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_17058){
var self__ = this;
var _17058__$1 = this;
return self__.meta17057;
}));

(cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async17056.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async17056.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta17057","meta17057",159444811,null)], null);
}));

(cljs.core.async.t_cljs$core$async17056.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async17056.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async17056");

(cljs.core.async.t_cljs$core$async17056.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async17056");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async17056.
 */
cljs.core.async.__GT_t_cljs$core$async17056 = (function cljs$core$async$__GT_t_cljs$core$async17056(p,ch,meta17057){
return (new cljs.core.async.t_cljs$core$async17056(p,ch,meta17057));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async17056(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__17077 = arguments.length;
switch (G__17077) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14350__auto___18816 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14352__auto__ = (function (){var switch__14101__auto__ = (function (state_17101){
var state_val_17102 = (state_17101[(1)]);
if((state_val_17102 === (7))){
var inst_17097 = (state_17101[(2)]);
var state_17101__$1 = state_17101;
var statearr_17103_18817 = state_17101__$1;
(statearr_17103_18817[(2)] = inst_17097);

(statearr_17103_18817[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17102 === (1))){
var state_17101__$1 = state_17101;
var statearr_17104_18818 = state_17101__$1;
(statearr_17104_18818[(2)] = null);

(statearr_17104_18818[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17102 === (4))){
var inst_17081 = (state_17101[(7)]);
var inst_17081__$1 = (state_17101[(2)]);
var inst_17082 = (inst_17081__$1 == null);
var state_17101__$1 = (function (){var statearr_17108 = state_17101;
(statearr_17108[(7)] = inst_17081__$1);

return statearr_17108;
})();
if(cljs.core.truth_(inst_17082)){
var statearr_17109_18842 = state_17101__$1;
(statearr_17109_18842[(1)] = (5));

} else {
var statearr_17110_18843 = state_17101__$1;
(statearr_17110_18843[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17102 === (6))){
var inst_17081 = (state_17101[(7)]);
var inst_17088 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_17081) : p.call(null,inst_17081));
var state_17101__$1 = state_17101;
if(cljs.core.truth_(inst_17088)){
var statearr_17111_18846 = state_17101__$1;
(statearr_17111_18846[(1)] = (8));

} else {
var statearr_17112_18847 = state_17101__$1;
(statearr_17112_18847[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17102 === (3))){
var inst_17099 = (state_17101[(2)]);
var state_17101__$1 = state_17101;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17101__$1,inst_17099);
} else {
if((state_val_17102 === (2))){
var state_17101__$1 = state_17101;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17101__$1,(4),ch);
} else {
if((state_val_17102 === (11))){
var inst_17091 = (state_17101[(2)]);
var state_17101__$1 = state_17101;
var statearr_17113_18849 = state_17101__$1;
(statearr_17113_18849[(2)] = inst_17091);

(statearr_17113_18849[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17102 === (9))){
var state_17101__$1 = state_17101;
var statearr_17115_18854 = state_17101__$1;
(statearr_17115_18854[(2)] = null);

(statearr_17115_18854[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17102 === (5))){
var inst_17085 = cljs.core.async.close_BANG_(out);
var state_17101__$1 = state_17101;
var statearr_17116_18862 = state_17101__$1;
(statearr_17116_18862[(2)] = inst_17085);

(statearr_17116_18862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17102 === (10))){
var inst_17094 = (state_17101[(2)]);
var state_17101__$1 = (function (){var statearr_17117 = state_17101;
(statearr_17117[(8)] = inst_17094);

return statearr_17117;
})();
var statearr_17118_18880 = state_17101__$1;
(statearr_17118_18880[(2)] = null);

(statearr_17118_18880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17102 === (8))){
var inst_17081 = (state_17101[(7)]);
var state_17101__$1 = state_17101;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17101__$1,(11),out,inst_17081);
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
});
return (function() {
var cljs$core$async$state_machine__14102__auto__ = null;
var cljs$core$async$state_machine__14102__auto____0 = (function (){
var statearr_17119 = [null,null,null,null,null,null,null,null,null];
(statearr_17119[(0)] = cljs$core$async$state_machine__14102__auto__);

(statearr_17119[(1)] = (1));

return statearr_17119;
});
var cljs$core$async$state_machine__14102__auto____1 = (function (state_17101){
while(true){
var ret_value__14103__auto__ = (function (){try{while(true){
var result__14104__auto__ = switch__14101__auto__(state_17101);
if(cljs.core.keyword_identical_QMARK_(result__14104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14104__auto__;
}
break;
}
}catch (e17120){var ex__14105__auto__ = e17120;
var statearr_17121_18881 = state_17101;
(statearr_17121_18881[(2)] = ex__14105__auto__);


if(cljs.core.seq((state_17101[(4)]))){
var statearr_17122_18882 = state_17101;
(statearr_17122_18882[(1)] = cljs.core.first((state_17101[(4)])));

} else {
throw ex__14105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18883 = state_17101;
state_17101 = G__18883;
continue;
} else {
return ret_value__14103__auto__;
}
break;
}
});
cljs$core$async$state_machine__14102__auto__ = function(state_17101){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14102__auto____1.call(this,state_17101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14102__auto____0;
cljs$core$async$state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14102__auto____1;
return cljs$core$async$state_machine__14102__auto__;
})()
})();
var state__14353__auto__ = (function (){var statearr_17123 = f__14352__auto__();
(statearr_17123[(6)] = c__14350__auto___18816);

return statearr_17123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14353__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__17125 = arguments.length;
switch (G__17125) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__14350__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14352__auto__ = (function (){var switch__14101__auto__ = (function (state_17194){
var state_val_17196 = (state_17194[(1)]);
if((state_val_17196 === (7))){
var inst_17188 = (state_17194[(2)]);
var state_17194__$1 = state_17194;
var statearr_17197_18911 = state_17194__$1;
(statearr_17197_18911[(2)] = inst_17188);

(statearr_17197_18911[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (20))){
var inst_17156 = (state_17194[(7)]);
var inst_17169 = (state_17194[(2)]);
var inst_17170 = cljs.core.next(inst_17156);
var inst_17139 = inst_17170;
var inst_17140 = null;
var inst_17141 = (0);
var inst_17142 = (0);
var state_17194__$1 = (function (){var statearr_17198 = state_17194;
(statearr_17198[(8)] = inst_17169);

(statearr_17198[(9)] = inst_17140);

(statearr_17198[(10)] = inst_17139);

(statearr_17198[(11)] = inst_17142);

(statearr_17198[(12)] = inst_17141);

return statearr_17198;
})();
var statearr_17201_18919 = state_17194__$1;
(statearr_17201_18919[(2)] = null);

(statearr_17201_18919[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (1))){
var state_17194__$1 = state_17194;
var statearr_17202_18920 = state_17194__$1;
(statearr_17202_18920[(2)] = null);

(statearr_17202_18920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (4))){
var inst_17128 = (state_17194[(13)]);
var inst_17128__$1 = (state_17194[(2)]);
var inst_17129 = (inst_17128__$1 == null);
var state_17194__$1 = (function (){var statearr_17203 = state_17194;
(statearr_17203[(13)] = inst_17128__$1);

return statearr_17203;
})();
if(cljs.core.truth_(inst_17129)){
var statearr_17204_18929 = state_17194__$1;
(statearr_17204_18929[(1)] = (5));

} else {
var statearr_17205_18930 = state_17194__$1;
(statearr_17205_18930[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (15))){
var state_17194__$1 = state_17194;
var statearr_17209_18933 = state_17194__$1;
(statearr_17209_18933[(2)] = null);

(statearr_17209_18933[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (21))){
var state_17194__$1 = state_17194;
var statearr_17210_18936 = state_17194__$1;
(statearr_17210_18936[(2)] = null);

(statearr_17210_18936[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (13))){
var inst_17140 = (state_17194[(9)]);
var inst_17139 = (state_17194[(10)]);
var inst_17142 = (state_17194[(11)]);
var inst_17141 = (state_17194[(12)]);
var inst_17152 = (state_17194[(2)]);
var inst_17153 = (inst_17142 + (1));
var tmp17206 = inst_17140;
var tmp17207 = inst_17139;
var tmp17208 = inst_17141;
var inst_17139__$1 = tmp17207;
var inst_17140__$1 = tmp17206;
var inst_17141__$1 = tmp17208;
var inst_17142__$1 = inst_17153;
var state_17194__$1 = (function (){var statearr_17211 = state_17194;
(statearr_17211[(9)] = inst_17140__$1);

(statearr_17211[(10)] = inst_17139__$1);

(statearr_17211[(11)] = inst_17142__$1);

(statearr_17211[(14)] = inst_17152);

(statearr_17211[(12)] = inst_17141__$1);

return statearr_17211;
})();
var statearr_17212_18942 = state_17194__$1;
(statearr_17212_18942[(2)] = null);

(statearr_17212_18942[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (22))){
var state_17194__$1 = state_17194;
var statearr_17214_18943 = state_17194__$1;
(statearr_17214_18943[(2)] = null);

(statearr_17214_18943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (6))){
var inst_17128 = (state_17194[(13)]);
var inst_17137 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17128) : f.call(null,inst_17128));
var inst_17138 = cljs.core.seq(inst_17137);
var inst_17139 = inst_17138;
var inst_17140 = null;
var inst_17141 = (0);
var inst_17142 = (0);
var state_17194__$1 = (function (){var statearr_17215 = state_17194;
(statearr_17215[(9)] = inst_17140);

(statearr_17215[(10)] = inst_17139);

(statearr_17215[(11)] = inst_17142);

(statearr_17215[(12)] = inst_17141);

return statearr_17215;
})();
var statearr_17216_18944 = state_17194__$1;
(statearr_17216_18944[(2)] = null);

(statearr_17216_18944[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (17))){
var inst_17156 = (state_17194[(7)]);
var inst_17160 = cljs.core.chunk_first(inst_17156);
var inst_17161 = cljs.core.chunk_rest(inst_17156);
var inst_17164 = cljs.core.count(inst_17160);
var inst_17139 = inst_17161;
var inst_17140 = inst_17160;
var inst_17141 = inst_17164;
var inst_17142 = (0);
var state_17194__$1 = (function (){var statearr_17220 = state_17194;
(statearr_17220[(9)] = inst_17140);

(statearr_17220[(10)] = inst_17139);

(statearr_17220[(11)] = inst_17142);

(statearr_17220[(12)] = inst_17141);

return statearr_17220;
})();
var statearr_17221_18945 = state_17194__$1;
(statearr_17221_18945[(2)] = null);

(statearr_17221_18945[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (3))){
var inst_17190 = (state_17194[(2)]);
var state_17194__$1 = state_17194;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17194__$1,inst_17190);
} else {
if((state_val_17196 === (12))){
var inst_17178 = (state_17194[(2)]);
var state_17194__$1 = state_17194;
var statearr_17229_18946 = state_17194__$1;
(statearr_17229_18946[(2)] = inst_17178);

(statearr_17229_18946[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (2))){
var state_17194__$1 = state_17194;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17194__$1,(4),in$);
} else {
if((state_val_17196 === (23))){
var inst_17186 = (state_17194[(2)]);
var state_17194__$1 = state_17194;
var statearr_17230_18947 = state_17194__$1;
(statearr_17230_18947[(2)] = inst_17186);

(statearr_17230_18947[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (19))){
var inst_17173 = (state_17194[(2)]);
var state_17194__$1 = state_17194;
var statearr_17231_18948 = state_17194__$1;
(statearr_17231_18948[(2)] = inst_17173);

(statearr_17231_18948[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (11))){
var inst_17156 = (state_17194[(7)]);
var inst_17139 = (state_17194[(10)]);
var inst_17156__$1 = cljs.core.seq(inst_17139);
var state_17194__$1 = (function (){var statearr_17233 = state_17194;
(statearr_17233[(7)] = inst_17156__$1);

return statearr_17233;
})();
if(inst_17156__$1){
var statearr_17234_18953 = state_17194__$1;
(statearr_17234_18953[(1)] = (14));

} else {
var statearr_17235_18954 = state_17194__$1;
(statearr_17235_18954[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (9))){
var inst_17180 = (state_17194[(2)]);
var inst_17181 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_17194__$1 = (function (){var statearr_17236 = state_17194;
(statearr_17236[(15)] = inst_17180);

return statearr_17236;
})();
if(cljs.core.truth_(inst_17181)){
var statearr_17245_18958 = state_17194__$1;
(statearr_17245_18958[(1)] = (21));

} else {
var statearr_17252_18959 = state_17194__$1;
(statearr_17252_18959[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (5))){
var inst_17131 = cljs.core.async.close_BANG_(out);
var state_17194__$1 = state_17194;
var statearr_17261_18961 = state_17194__$1;
(statearr_17261_18961[(2)] = inst_17131);

(statearr_17261_18961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (14))){
var inst_17156 = (state_17194[(7)]);
var inst_17158 = cljs.core.chunked_seq_QMARK_(inst_17156);
var state_17194__$1 = state_17194;
if(inst_17158){
var statearr_17262_18963 = state_17194__$1;
(statearr_17262_18963[(1)] = (17));

} else {
var statearr_17263_18967 = state_17194__$1;
(statearr_17263_18967[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (16))){
var inst_17176 = (state_17194[(2)]);
var state_17194__$1 = state_17194;
var statearr_17281_18968 = state_17194__$1;
(statearr_17281_18968[(2)] = inst_17176);

(statearr_17281_18968[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17196 === (10))){
var inst_17140 = (state_17194[(9)]);
var inst_17142 = (state_17194[(11)]);
var inst_17150 = cljs.core._nth(inst_17140,inst_17142);
var state_17194__$1 = state_17194;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17194__$1,(13),out,inst_17150);
} else {
if((state_val_17196 === (18))){
var inst_17156 = (state_17194[(7)]);
var inst_17167 = cljs.core.first(inst_17156);
var state_17194__$1 = state_17194;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17194__$1,(20),out,inst_17167);
} else {
if((state_val_17196 === (8))){
var inst_17142 = (state_17194[(11)]);
var inst_17141 = (state_17194[(12)]);
var inst_17144 = (inst_17142 < inst_17141);
var inst_17145 = inst_17144;
var state_17194__$1 = state_17194;
if(cljs.core.truth_(inst_17145)){
var statearr_17291_18969 = state_17194__$1;
(statearr_17291_18969[(1)] = (10));

} else {
var statearr_17294_18970 = state_17194__$1;
(statearr_17294_18970[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__14102__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14102__auto____0 = (function (){
var statearr_17296 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17296[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14102__auto__);

(statearr_17296[(1)] = (1));

return statearr_17296;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14102__auto____1 = (function (state_17194){
while(true){
var ret_value__14103__auto__ = (function (){try{while(true){
var result__14104__auto__ = switch__14101__auto__(state_17194);
if(cljs.core.keyword_identical_QMARK_(result__14104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14104__auto__;
}
break;
}
}catch (e17297){var ex__14105__auto__ = e17297;
var statearr_17301_18973 = state_17194;
(statearr_17301_18973[(2)] = ex__14105__auto__);


if(cljs.core.seq((state_17194[(4)]))){
var statearr_17302_18974 = state_17194;
(statearr_17302_18974[(1)] = cljs.core.first((state_17194[(4)])));

} else {
throw ex__14105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18977 = state_17194;
state_17194 = G__18977;
continue;
} else {
return ret_value__14103__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14102__auto__ = function(state_17194){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14102__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14102__auto____1.call(this,state_17194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14102__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14102__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14102__auto__;
})()
})();
var state__14353__auto__ = (function (){var statearr_17303 = f__14352__auto__();
(statearr_17303[(6)] = c__14350__auto__);

return statearr_17303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14353__auto__);
}));

return c__14350__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__17305 = arguments.length;
switch (G__17305) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__17310 = arguments.length;
switch (G__17310) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__17323 = arguments.length;
switch (G__17323) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14350__auto___18985 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14352__auto__ = (function (){var switch__14101__auto__ = (function (state_17372){
var state_val_17373 = (state_17372[(1)]);
if((state_val_17373 === (7))){
var inst_17364 = (state_17372[(2)]);
var state_17372__$1 = state_17372;
var statearr_17375_18986 = state_17372__$1;
(statearr_17375_18986[(2)] = inst_17364);

(statearr_17375_18986[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17373 === (1))){
var inst_17327 = null;
var state_17372__$1 = (function (){var statearr_17376 = state_17372;
(statearr_17376[(7)] = inst_17327);

return statearr_17376;
})();
var statearr_17377_18987 = state_17372__$1;
(statearr_17377_18987[(2)] = null);

(statearr_17377_18987[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17373 === (4))){
var inst_17330 = (state_17372[(8)]);
var inst_17330__$1 = (state_17372[(2)]);
var inst_17341 = (inst_17330__$1 == null);
var inst_17348 = cljs.core.not(inst_17341);
var state_17372__$1 = (function (){var statearr_17381 = state_17372;
(statearr_17381[(8)] = inst_17330__$1);

return statearr_17381;
})();
if(inst_17348){
var statearr_17382_18995 = state_17372__$1;
(statearr_17382_18995[(1)] = (5));

} else {
var statearr_17383_18998 = state_17372__$1;
(statearr_17383_18998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17373 === (6))){
var state_17372__$1 = state_17372;
var statearr_17384_19000 = state_17372__$1;
(statearr_17384_19000[(2)] = null);

(statearr_17384_19000[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17373 === (3))){
var inst_17369 = (state_17372[(2)]);
var inst_17370 = cljs.core.async.close_BANG_(out);
var state_17372__$1 = (function (){var statearr_17387 = state_17372;
(statearr_17387[(9)] = inst_17369);

return statearr_17387;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_17372__$1,inst_17370);
} else {
if((state_val_17373 === (2))){
var state_17372__$1 = state_17372;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17372__$1,(4),ch);
} else {
if((state_val_17373 === (11))){
var inst_17330 = (state_17372[(8)]);
var inst_17358 = (state_17372[(2)]);
var inst_17327 = inst_17330;
var state_17372__$1 = (function (){var statearr_17388 = state_17372;
(statearr_17388[(7)] = inst_17327);

(statearr_17388[(10)] = inst_17358);

return statearr_17388;
})();
var statearr_17389_19003 = state_17372__$1;
(statearr_17389_19003[(2)] = null);

(statearr_17389_19003[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17373 === (9))){
var inst_17330 = (state_17372[(8)]);
var state_17372__$1 = state_17372;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17372__$1,(11),out,inst_17330);
} else {
if((state_val_17373 === (5))){
var inst_17327 = (state_17372[(7)]);
var inst_17330 = (state_17372[(8)]);
var inst_17351 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17330,inst_17327);
var state_17372__$1 = state_17372;
if(inst_17351){
var statearr_17392_19004 = state_17372__$1;
(statearr_17392_19004[(1)] = (8));

} else {
var statearr_17393_19005 = state_17372__$1;
(statearr_17393_19005[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17373 === (10))){
var inst_17361 = (state_17372[(2)]);
var state_17372__$1 = state_17372;
var statearr_17394_19008 = state_17372__$1;
(statearr_17394_19008[(2)] = inst_17361);

(statearr_17394_19008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17373 === (8))){
var inst_17327 = (state_17372[(7)]);
var tmp17390 = inst_17327;
var inst_17327__$1 = tmp17390;
var state_17372__$1 = (function (){var statearr_17396 = state_17372;
(statearr_17396[(7)] = inst_17327__$1);

return statearr_17396;
})();
var statearr_17397_19010 = state_17372__$1;
(statearr_17397_19010[(2)] = null);

(statearr_17397_19010[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__14102__auto__ = null;
var cljs$core$async$state_machine__14102__auto____0 = (function (){
var statearr_17398 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17398[(0)] = cljs$core$async$state_machine__14102__auto__);

(statearr_17398[(1)] = (1));

return statearr_17398;
});
var cljs$core$async$state_machine__14102__auto____1 = (function (state_17372){
while(true){
var ret_value__14103__auto__ = (function (){try{while(true){
var result__14104__auto__ = switch__14101__auto__(state_17372);
if(cljs.core.keyword_identical_QMARK_(result__14104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14104__auto__;
}
break;
}
}catch (e17401){var ex__14105__auto__ = e17401;
var statearr_17402_19012 = state_17372;
(statearr_17402_19012[(2)] = ex__14105__auto__);


if(cljs.core.seq((state_17372[(4)]))){
var statearr_17403_19014 = state_17372;
(statearr_17403_19014[(1)] = cljs.core.first((state_17372[(4)])));

} else {
throw ex__14105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19017 = state_17372;
state_17372 = G__19017;
continue;
} else {
return ret_value__14103__auto__;
}
break;
}
});
cljs$core$async$state_machine__14102__auto__ = function(state_17372){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14102__auto____1.call(this,state_17372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14102__auto____0;
cljs$core$async$state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14102__auto____1;
return cljs$core$async$state_machine__14102__auto__;
})()
})();
var state__14353__auto__ = (function (){var statearr_17405 = f__14352__auto__();
(statearr_17405[(6)] = c__14350__auto___18985);

return statearr_17405;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14353__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__17411 = arguments.length;
switch (G__17411) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14350__auto___19020 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14352__auto__ = (function (){var switch__14101__auto__ = (function (state_17452){
var state_val_17453 = (state_17452[(1)]);
if((state_val_17453 === (7))){
var inst_17448 = (state_17452[(2)]);
var state_17452__$1 = state_17452;
var statearr_17457_19026 = state_17452__$1;
(statearr_17457_19026[(2)] = inst_17448);

(statearr_17457_19026[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17453 === (1))){
var inst_17414 = (new Array(n));
var inst_17415 = inst_17414;
var inst_17416 = (0);
var state_17452__$1 = (function (){var statearr_17458 = state_17452;
(statearr_17458[(7)] = inst_17415);

(statearr_17458[(8)] = inst_17416);

return statearr_17458;
})();
var statearr_17459_19043 = state_17452__$1;
(statearr_17459_19043[(2)] = null);

(statearr_17459_19043[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17453 === (4))){
var inst_17419 = (state_17452[(9)]);
var inst_17419__$1 = (state_17452[(2)]);
var inst_17420 = (inst_17419__$1 == null);
var inst_17421 = cljs.core.not(inst_17420);
var state_17452__$1 = (function (){var statearr_17460 = state_17452;
(statearr_17460[(9)] = inst_17419__$1);

return statearr_17460;
})();
if(inst_17421){
var statearr_17461_19049 = state_17452__$1;
(statearr_17461_19049[(1)] = (5));

} else {
var statearr_17462_19050 = state_17452__$1;
(statearr_17462_19050[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17453 === (15))){
var inst_17442 = (state_17452[(2)]);
var state_17452__$1 = state_17452;
var statearr_17464_19051 = state_17452__$1;
(statearr_17464_19051[(2)] = inst_17442);

(statearr_17464_19051[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17453 === (13))){
var state_17452__$1 = state_17452;
var statearr_17465_19052 = state_17452__$1;
(statearr_17465_19052[(2)] = null);

(statearr_17465_19052[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17453 === (6))){
var inst_17416 = (state_17452[(8)]);
var inst_17438 = (inst_17416 > (0));
var state_17452__$1 = state_17452;
if(cljs.core.truth_(inst_17438)){
var statearr_17467_19057 = state_17452__$1;
(statearr_17467_19057[(1)] = (12));

} else {
var statearr_17468_19059 = state_17452__$1;
(statearr_17468_19059[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17453 === (3))){
var inst_17450 = (state_17452[(2)]);
var state_17452__$1 = state_17452;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17452__$1,inst_17450);
} else {
if((state_val_17453 === (12))){
var inst_17415 = (state_17452[(7)]);
var inst_17440 = cljs.core.vec(inst_17415);
var state_17452__$1 = state_17452;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17452__$1,(15),out,inst_17440);
} else {
if((state_val_17453 === (2))){
var state_17452__$1 = state_17452;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17452__$1,(4),ch);
} else {
if((state_val_17453 === (11))){
var inst_17432 = (state_17452[(2)]);
var inst_17433 = (new Array(n));
var inst_17415 = inst_17433;
var inst_17416 = (0);
var state_17452__$1 = (function (){var statearr_17472 = state_17452;
(statearr_17472[(10)] = inst_17432);

(statearr_17472[(7)] = inst_17415);

(statearr_17472[(8)] = inst_17416);

return statearr_17472;
})();
var statearr_17473_19062 = state_17452__$1;
(statearr_17473_19062[(2)] = null);

(statearr_17473_19062[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17453 === (9))){
var inst_17415 = (state_17452[(7)]);
var inst_17430 = cljs.core.vec(inst_17415);
var state_17452__$1 = state_17452;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17452__$1,(11),out,inst_17430);
} else {
if((state_val_17453 === (5))){
var inst_17415 = (state_17452[(7)]);
var inst_17419 = (state_17452[(9)]);
var inst_17425 = (state_17452[(11)]);
var inst_17416 = (state_17452[(8)]);
var inst_17424 = (inst_17415[inst_17416] = inst_17419);
var inst_17425__$1 = (inst_17416 + (1));
var inst_17426 = (inst_17425__$1 < n);
var state_17452__$1 = (function (){var statearr_17474 = state_17452;
(statearr_17474[(12)] = inst_17424);

(statearr_17474[(11)] = inst_17425__$1);

return statearr_17474;
})();
if(cljs.core.truth_(inst_17426)){
var statearr_17478_19063 = state_17452__$1;
(statearr_17478_19063[(1)] = (8));

} else {
var statearr_17482_19064 = state_17452__$1;
(statearr_17482_19064[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17453 === (14))){
var inst_17445 = (state_17452[(2)]);
var inst_17446 = cljs.core.async.close_BANG_(out);
var state_17452__$1 = (function (){var statearr_17500 = state_17452;
(statearr_17500[(13)] = inst_17445);

return statearr_17500;
})();
var statearr_17501_19066 = state_17452__$1;
(statearr_17501_19066[(2)] = inst_17446);

(statearr_17501_19066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17453 === (10))){
var inst_17436 = (state_17452[(2)]);
var state_17452__$1 = state_17452;
var statearr_17505_19067 = state_17452__$1;
(statearr_17505_19067[(2)] = inst_17436);

(statearr_17505_19067[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17453 === (8))){
var inst_17415 = (state_17452[(7)]);
var inst_17425 = (state_17452[(11)]);
var tmp17495 = inst_17415;
var inst_17415__$1 = tmp17495;
var inst_17416 = inst_17425;
var state_17452__$1 = (function (){var statearr_17506 = state_17452;
(statearr_17506[(7)] = inst_17415__$1);

(statearr_17506[(8)] = inst_17416);

return statearr_17506;
})();
var statearr_17508_19072 = state_17452__$1;
(statearr_17508_19072[(2)] = null);

(statearr_17508_19072[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__14102__auto__ = null;
var cljs$core$async$state_machine__14102__auto____0 = (function (){
var statearr_17514 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17514[(0)] = cljs$core$async$state_machine__14102__auto__);

(statearr_17514[(1)] = (1));

return statearr_17514;
});
var cljs$core$async$state_machine__14102__auto____1 = (function (state_17452){
while(true){
var ret_value__14103__auto__ = (function (){try{while(true){
var result__14104__auto__ = switch__14101__auto__(state_17452);
if(cljs.core.keyword_identical_QMARK_(result__14104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14104__auto__;
}
break;
}
}catch (e17518){var ex__14105__auto__ = e17518;
var statearr_17519_19079 = state_17452;
(statearr_17519_19079[(2)] = ex__14105__auto__);


if(cljs.core.seq((state_17452[(4)]))){
var statearr_17523_19084 = state_17452;
(statearr_17523_19084[(1)] = cljs.core.first((state_17452[(4)])));

} else {
throw ex__14105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19085 = state_17452;
state_17452 = G__19085;
continue;
} else {
return ret_value__14103__auto__;
}
break;
}
});
cljs$core$async$state_machine__14102__auto__ = function(state_17452){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14102__auto____1.call(this,state_17452);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14102__auto____0;
cljs$core$async$state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14102__auto____1;
return cljs$core$async$state_machine__14102__auto__;
})()
})();
var state__14353__auto__ = (function (){var statearr_17524 = f__14352__auto__();
(statearr_17524[(6)] = c__14350__auto___19020);

return statearr_17524;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14353__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__17536 = arguments.length;
switch (G__17536) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__14350__auto___19091 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14352__auto__ = (function (){var switch__14101__auto__ = (function (state_17590){
var state_val_17591 = (state_17590[(1)]);
if((state_val_17591 === (7))){
var inst_17586 = (state_17590[(2)]);
var state_17590__$1 = state_17590;
var statearr_17592_19092 = state_17590__$1;
(statearr_17592_19092[(2)] = inst_17586);

(statearr_17592_19092[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (1))){
var inst_17544 = [];
var inst_17545 = inst_17544;
var inst_17546 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17590__$1 = (function (){var statearr_17593 = state_17590;
(statearr_17593[(7)] = inst_17546);

(statearr_17593[(8)] = inst_17545);

return statearr_17593;
})();
var statearr_17594_19097 = state_17590__$1;
(statearr_17594_19097[(2)] = null);

(statearr_17594_19097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (4))){
var inst_17549 = (state_17590[(9)]);
var inst_17549__$1 = (state_17590[(2)]);
var inst_17550 = (inst_17549__$1 == null);
var inst_17551 = cljs.core.not(inst_17550);
var state_17590__$1 = (function (){var statearr_17595 = state_17590;
(statearr_17595[(9)] = inst_17549__$1);

return statearr_17595;
})();
if(inst_17551){
var statearr_17596_19102 = state_17590__$1;
(statearr_17596_19102[(1)] = (5));

} else {
var statearr_17597_19103 = state_17590__$1;
(statearr_17597_19103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (15))){
var inst_17545 = (state_17590[(8)]);
var inst_17578 = cljs.core.vec(inst_17545);
var state_17590__$1 = state_17590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17590__$1,(18),out,inst_17578);
} else {
if((state_val_17591 === (13))){
var inst_17573 = (state_17590[(2)]);
var state_17590__$1 = state_17590;
var statearr_17614_19105 = state_17590__$1;
(statearr_17614_19105[(2)] = inst_17573);

(statearr_17614_19105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (6))){
var inst_17545 = (state_17590[(8)]);
var inst_17575 = inst_17545.length;
var inst_17576 = (inst_17575 > (0));
var state_17590__$1 = state_17590;
if(cljs.core.truth_(inst_17576)){
var statearr_17615_19106 = state_17590__$1;
(statearr_17615_19106[(1)] = (15));

} else {
var statearr_17616_19107 = state_17590__$1;
(statearr_17616_19107[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (17))){
var inst_17583 = (state_17590[(2)]);
var inst_17584 = cljs.core.async.close_BANG_(out);
var state_17590__$1 = (function (){var statearr_17617 = state_17590;
(statearr_17617[(10)] = inst_17583);

return statearr_17617;
})();
var statearr_17618_19108 = state_17590__$1;
(statearr_17618_19108[(2)] = inst_17584);

(statearr_17618_19108[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (3))){
var inst_17588 = (state_17590[(2)]);
var state_17590__$1 = state_17590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_17590__$1,inst_17588);
} else {
if((state_val_17591 === (12))){
var inst_17545 = (state_17590[(8)]);
var inst_17566 = cljs.core.vec(inst_17545);
var state_17590__$1 = state_17590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_17590__$1,(14),out,inst_17566);
} else {
if((state_val_17591 === (2))){
var state_17590__$1 = state_17590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_17590__$1,(4),ch);
} else {
if((state_val_17591 === (11))){
var inst_17549 = (state_17590[(9)]);
var inst_17545 = (state_17590[(8)]);
var inst_17553 = (state_17590[(11)]);
var inst_17563 = inst_17545.push(inst_17549);
var tmp17622 = inst_17545;
var inst_17545__$1 = tmp17622;
var inst_17546 = inst_17553;
var state_17590__$1 = (function (){var statearr_17628 = state_17590;
(statearr_17628[(12)] = inst_17563);

(statearr_17628[(7)] = inst_17546);

(statearr_17628[(8)] = inst_17545__$1);

return statearr_17628;
})();
var statearr_17631_19125 = state_17590__$1;
(statearr_17631_19125[(2)] = null);

(statearr_17631_19125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (9))){
var inst_17546 = (state_17590[(7)]);
var inst_17559 = cljs.core.keyword_identical_QMARK_(inst_17546,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_17590__$1 = state_17590;
var statearr_17633_19126 = state_17590__$1;
(statearr_17633_19126[(2)] = inst_17559);

(statearr_17633_19126[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (5))){
var inst_17549 = (state_17590[(9)]);
var inst_17546 = (state_17590[(7)]);
var inst_17553 = (state_17590[(11)]);
var inst_17556 = (state_17590[(13)]);
var inst_17553__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_17549) : f.call(null,inst_17549));
var inst_17556__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_17553__$1,inst_17546);
var state_17590__$1 = (function (){var statearr_17644 = state_17590;
(statearr_17644[(11)] = inst_17553__$1);

(statearr_17644[(13)] = inst_17556__$1);

return statearr_17644;
})();
if(inst_17556__$1){
var statearr_17645_19135 = state_17590__$1;
(statearr_17645_19135[(1)] = (8));

} else {
var statearr_17646_19136 = state_17590__$1;
(statearr_17646_19136[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (14))){
var inst_17549 = (state_17590[(9)]);
var inst_17553 = (state_17590[(11)]);
var inst_17568 = (state_17590[(2)]);
var inst_17569 = [];
var inst_17570 = inst_17569.push(inst_17549);
var inst_17545 = inst_17569;
var inst_17546 = inst_17553;
var state_17590__$1 = (function (){var statearr_17647 = state_17590;
(statearr_17647[(14)] = inst_17568);

(statearr_17647[(15)] = inst_17570);

(statearr_17647[(7)] = inst_17546);

(statearr_17647[(8)] = inst_17545);

return statearr_17647;
})();
var statearr_17648_19141 = state_17590__$1;
(statearr_17648_19141[(2)] = null);

(statearr_17648_19141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (16))){
var state_17590__$1 = state_17590;
var statearr_17650_19142 = state_17590__$1;
(statearr_17650_19142[(2)] = null);

(statearr_17650_19142[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (10))){
var inst_17561 = (state_17590[(2)]);
var state_17590__$1 = state_17590;
if(cljs.core.truth_(inst_17561)){
var statearr_17651_19143 = state_17590__$1;
(statearr_17651_19143[(1)] = (11));

} else {
var statearr_17653_19144 = state_17590__$1;
(statearr_17653_19144[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (18))){
var inst_17580 = (state_17590[(2)]);
var state_17590__$1 = state_17590;
var statearr_17654_19151 = state_17590__$1;
(statearr_17654_19151[(2)] = inst_17580);

(statearr_17654_19151[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17591 === (8))){
var inst_17556 = (state_17590[(13)]);
var state_17590__$1 = state_17590;
var statearr_17655_19152 = state_17590__$1;
(statearr_17655_19152[(2)] = inst_17556);

(statearr_17655_19152[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__14102__auto__ = null;
var cljs$core$async$state_machine__14102__auto____0 = (function (){
var statearr_17656 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17656[(0)] = cljs$core$async$state_machine__14102__auto__);

(statearr_17656[(1)] = (1));

return statearr_17656;
});
var cljs$core$async$state_machine__14102__auto____1 = (function (state_17590){
while(true){
var ret_value__14103__auto__ = (function (){try{while(true){
var result__14104__auto__ = switch__14101__auto__(state_17590);
if(cljs.core.keyword_identical_QMARK_(result__14104__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14104__auto__;
}
break;
}
}catch (e17657){var ex__14105__auto__ = e17657;
var statearr_17658_19162 = state_17590;
(statearr_17658_19162[(2)] = ex__14105__auto__);


if(cljs.core.seq((state_17590[(4)]))){
var statearr_17659_19168 = state_17590;
(statearr_17659_19168[(1)] = cljs.core.first((state_17590[(4)])));

} else {
throw ex__14105__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14103__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__19169 = state_17590;
state_17590 = G__19169;
continue;
} else {
return ret_value__14103__auto__;
}
break;
}
});
cljs$core$async$state_machine__14102__auto__ = function(state_17590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14102__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14102__auto____1.call(this,state_17590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14102__auto____0;
cljs$core$async$state_machine__14102__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14102__auto____1;
return cljs$core$async$state_machine__14102__auto__;
})()
})();
var state__14353__auto__ = (function (){var statearr_17661 = f__14352__auto__();
(statearr_17661[(6)] = c__14350__auto___19091);

return statearr_17661;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14353__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
