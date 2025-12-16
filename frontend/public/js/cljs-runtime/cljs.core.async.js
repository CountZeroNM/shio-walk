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
cljs.core.async.t_cljs$core$async14668 = (function (f,blockable,meta14669){
this.f = f;
this.blockable = blockable;
this.meta14669 = meta14669;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14668.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14670,meta14669__$1){
var self__ = this;
var _14670__$1 = this;
return (new cljs.core.async.t_cljs$core$async14668(self__.f,self__.blockable,meta14669__$1));
}));

(cljs.core.async.t_cljs$core$async14668.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14670){
var self__ = this;
var _14670__$1 = this;
return self__.meta14669;
}));

(cljs.core.async.t_cljs$core$async14668.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14668.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14668.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async14668.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async14668.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta14669","meta14669",683429234,null)], null);
}));

(cljs.core.async.t_cljs$core$async14668.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14668.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14668");

(cljs.core.async.t_cljs$core$async14668.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14668");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14668.
 */
cljs.core.async.__GT_t_cljs$core$async14668 = (function cljs$core$async$__GT_t_cljs$core$async14668(f,blockable,meta14669){
return (new cljs.core.async.t_cljs$core$async14668(f,blockable,meta14669));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__14647 = arguments.length;
switch (G__14647) {
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
return (new cljs.core.async.t_cljs$core$async14668(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14714 = arguments.length;
switch (G__14714) {
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
var G__14732 = arguments.length;
switch (G__14732) {
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
var G__14746 = arguments.length;
switch (G__14746) {
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
var val_16647 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16647) : fn1.call(null,val_16647));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_16647) : fn1.call(null,val_16647));
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
var G__14760 = arguments.length;
switch (G__14760) {
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
var n__5593__auto___16658 = n;
var x_16659 = (0);
while(true){
if((x_16659 < n__5593__auto___16658)){
(a[x_16659] = x_16659);

var G__16662 = (x_16659 + (1));
x_16659 = G__16662;
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
cljs.core.async.t_cljs$core$async14765 = (function (flag,meta14766){
this.flag = flag;
this.meta14766 = meta14766;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14767,meta14766__$1){
var self__ = this;
var _14767__$1 = this;
return (new cljs.core.async.t_cljs$core$async14765(self__.flag,meta14766__$1));
}));

(cljs.core.async.t_cljs$core$async14765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14767){
var self__ = this;
var _14767__$1 = this;
return self__.meta14766;
}));

(cljs.core.async.t_cljs$core$async14765.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14765.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14765.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14765.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async14765.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14766","meta14766",860635932,null)], null);
}));

(cljs.core.async.t_cljs$core$async14765.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14765.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14765");

(cljs.core.async.t_cljs$core$async14765.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14765");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14765.
 */
cljs.core.async.__GT_t_cljs$core$async14765 = (function cljs$core$async$__GT_t_cljs$core$async14765(flag,meta14766){
return (new cljs.core.async.t_cljs$core$async14765(flag,meta14766));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async14765(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14771 = (function (flag,cb,meta14772){
this.flag = flag;
this.cb = cb;
this.meta14772 = meta14772;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async14771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14773,meta14772__$1){
var self__ = this;
var _14773__$1 = this;
return (new cljs.core.async.t_cljs$core$async14771(self__.flag,self__.cb,meta14772__$1));
}));

(cljs.core.async.t_cljs$core$async14771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14773){
var self__ = this;
var _14773__$1 = this;
return self__.meta14772;
}));

(cljs.core.async.t_cljs$core$async14771.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async14771.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async14771.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async14771.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async14771.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14772","meta14772",1973484857,null)], null);
}));

(cljs.core.async.t_cljs$core$async14771.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async14771.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14771");

(cljs.core.async.t_cljs$core$async14771.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async14771");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14771.
 */
cljs.core.async.__GT_t_cljs$core$async14771 = (function cljs$core$async$__GT_t_cljs$core$async14771(flag,cb,meta14772){
return (new cljs.core.async.t_cljs$core$async14771(flag,cb,meta14772));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async14771(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__14776_SHARP_){
var G__14778 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14776_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14778) : fret.call(null,G__14778));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14777_SHARP_){
var G__14779 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14777_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__14779) : fret.call(null,G__14779));
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
var G__16668 = (i + (1));
i = G__16668;
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
var len__5726__auto___16669 = arguments.length;
var i__5727__auto___16670 = (0);
while(true){
if((i__5727__auto___16670 < len__5726__auto___16669)){
args__5732__auto__.push((arguments[i__5727__auto___16670]));

var G__16671 = (i__5727__auto___16670 + (1));
i__5727__auto___16670 = G__16671;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14787){
var map__14788 = p__14787;
var map__14788__$1 = cljs.core.__destructure_map(map__14788);
var opts = map__14788__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14782){
var G__14783 = cljs.core.first(seq14782);
var seq14782__$1 = cljs.core.next(seq14782);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14783,seq14782__$1);
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
var G__14798 = arguments.length;
switch (G__14798) {
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
var c__14547__auto___16683 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14548__auto__ = (function (){var switch__14413__auto__ = (function (state_14832){
var state_val_14833 = (state_14832[(1)]);
if((state_val_14833 === (7))){
var inst_14828 = (state_14832[(2)]);
var state_14832__$1 = state_14832;
var statearr_14836_16684 = state_14832__$1;
(statearr_14836_16684[(2)] = inst_14828);

(statearr_14836_16684[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (1))){
var state_14832__$1 = state_14832;
var statearr_14837_16685 = state_14832__$1;
(statearr_14837_16685[(2)] = null);

(statearr_14837_16685[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (4))){
var inst_14811 = (state_14832[(7)]);
var inst_14811__$1 = (state_14832[(2)]);
var inst_14812 = (inst_14811__$1 == null);
var state_14832__$1 = (function (){var statearr_14840 = state_14832;
(statearr_14840[(7)] = inst_14811__$1);

return statearr_14840;
})();
if(cljs.core.truth_(inst_14812)){
var statearr_14841_16689 = state_14832__$1;
(statearr_14841_16689[(1)] = (5));

} else {
var statearr_14842_16690 = state_14832__$1;
(statearr_14842_16690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (13))){
var state_14832__$1 = state_14832;
var statearr_14843_16691 = state_14832__$1;
(statearr_14843_16691[(2)] = null);

(statearr_14843_16691[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (6))){
var inst_14811 = (state_14832[(7)]);
var state_14832__$1 = state_14832;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14832__$1,(11),to,inst_14811);
} else {
if((state_val_14833 === (3))){
var inst_14830 = (state_14832[(2)]);
var state_14832__$1 = state_14832;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14832__$1,inst_14830);
} else {
if((state_val_14833 === (12))){
var state_14832__$1 = state_14832;
var statearr_14847_16700 = state_14832__$1;
(statearr_14847_16700[(2)] = null);

(statearr_14847_16700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (2))){
var state_14832__$1 = state_14832;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14832__$1,(4),from);
} else {
if((state_val_14833 === (11))){
var inst_14821 = (state_14832[(2)]);
var state_14832__$1 = state_14832;
if(cljs.core.truth_(inst_14821)){
var statearr_14848_16705 = state_14832__$1;
(statearr_14848_16705[(1)] = (12));

} else {
var statearr_14849_16706 = state_14832__$1;
(statearr_14849_16706[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (9))){
var state_14832__$1 = state_14832;
var statearr_14852_16707 = state_14832__$1;
(statearr_14852_16707[(2)] = null);

(statearr_14852_16707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (5))){
var state_14832__$1 = state_14832;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14854_16708 = state_14832__$1;
(statearr_14854_16708[(1)] = (8));

} else {
var statearr_14856_16709 = state_14832__$1;
(statearr_14856_16709[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (14))){
var inst_14826 = (state_14832[(2)]);
var state_14832__$1 = state_14832;
var statearr_14857_16710 = state_14832__$1;
(statearr_14857_16710[(2)] = inst_14826);

(statearr_14857_16710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (10))){
var inst_14818 = (state_14832[(2)]);
var state_14832__$1 = state_14832;
var statearr_14858_16711 = state_14832__$1;
(statearr_14858_16711[(2)] = inst_14818);

(statearr_14858_16711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (8))){
var inst_14815 = cljs.core.async.close_BANG_(to);
var state_14832__$1 = state_14832;
var statearr_14861_16712 = state_14832__$1;
(statearr_14861_16712[(2)] = inst_14815);

(statearr_14861_16712[(1)] = (10));


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
var cljs$core$async$state_machine__14414__auto__ = null;
var cljs$core$async$state_machine__14414__auto____0 = (function (){
var statearr_14863 = [null,null,null,null,null,null,null,null];
(statearr_14863[(0)] = cljs$core$async$state_machine__14414__auto__);

(statearr_14863[(1)] = (1));

return statearr_14863;
});
var cljs$core$async$state_machine__14414__auto____1 = (function (state_14832){
while(true){
var ret_value__14415__auto__ = (function (){try{while(true){
var result__14416__auto__ = switch__14413__auto__(state_14832);
if(cljs.core.keyword_identical_QMARK_(result__14416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14416__auto__;
}
break;
}
}catch (e14865){var ex__14417__auto__ = e14865;
var statearr_14866_16718 = state_14832;
(statearr_14866_16718[(2)] = ex__14417__auto__);


if(cljs.core.seq((state_14832[(4)]))){
var statearr_14867_16719 = state_14832;
(statearr_14867_16719[(1)] = cljs.core.first((state_14832[(4)])));

} else {
throw ex__14417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16720 = state_14832;
state_14832 = G__16720;
continue;
} else {
return ret_value__14415__auto__;
}
break;
}
});
cljs$core$async$state_machine__14414__auto__ = function(state_14832){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14414__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14414__auto____1.call(this,state_14832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14414__auto____0;
cljs$core$async$state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14414__auto____1;
return cljs$core$async$state_machine__14414__auto__;
})()
})();
var state__14549__auto__ = (function (){var statearr_14870 = f__14548__auto__();
(statearr_14870[(6)] = c__14547__auto___16683);

return statearr_14870;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14549__auto__);
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
var process__$1 = (function (p__14873){
var vec__14874 = p__14873;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14874,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14874,(1),null);
var job = vec__14874;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__14547__auto___16721 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14548__auto__ = (function (){var switch__14413__auto__ = (function (state_14882){
var state_val_14883 = (state_14882[(1)]);
if((state_val_14883 === (1))){
var state_14882__$1 = state_14882;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14882__$1,(2),res,v);
} else {
if((state_val_14883 === (2))){
var inst_14878 = (state_14882[(2)]);
var inst_14879 = cljs.core.async.close_BANG_(res);
var state_14882__$1 = (function (){var statearr_14885 = state_14882;
(statearr_14885[(7)] = inst_14878);

return statearr_14885;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_14882__$1,inst_14879);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____0 = (function (){
var statearr_14886 = [null,null,null,null,null,null,null,null];
(statearr_14886[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__);

(statearr_14886[(1)] = (1));

return statearr_14886;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____1 = (function (state_14882){
while(true){
var ret_value__14415__auto__ = (function (){try{while(true){
var result__14416__auto__ = switch__14413__auto__(state_14882);
if(cljs.core.keyword_identical_QMARK_(result__14416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14416__auto__;
}
break;
}
}catch (e14887){var ex__14417__auto__ = e14887;
var statearr_14888_16722 = state_14882;
(statearr_14888_16722[(2)] = ex__14417__auto__);


if(cljs.core.seq((state_14882[(4)]))){
var statearr_14890_16723 = state_14882;
(statearr_14890_16723[(1)] = cljs.core.first((state_14882[(4)])));

} else {
throw ex__14417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16725 = state_14882;
state_14882 = G__16725;
continue;
} else {
return ret_value__14415__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__ = function(state_14882){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____1.call(this,state_14882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__;
})()
})();
var state__14549__auto__ = (function (){var statearr_14893 = f__14548__auto__();
(statearr_14893[(6)] = c__14547__auto___16721);

return statearr_14893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14549__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__14897){
var vec__14898 = p__14897;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14898,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__14898,(1),null);
var job = vec__14898;
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
var n__5593__auto___16726 = n;
var __16727 = (0);
while(true){
if((__16727 < n__5593__auto___16726)){
var G__14901_16728 = type;
var G__14901_16729__$1 = (((G__14901_16728 instanceof cljs.core.Keyword))?G__14901_16728.fqn:null);
switch (G__14901_16729__$1) {
case "compute":
var c__14547__auto___16731 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16727,c__14547__auto___16731,G__14901_16728,G__14901_16729__$1,n__5593__auto___16726,jobs,results,process__$1,async){
return (function (){
var f__14548__auto__ = (function (){var switch__14413__auto__ = ((function (__16727,c__14547__auto___16731,G__14901_16728,G__14901_16729__$1,n__5593__auto___16726,jobs,results,process__$1,async){
return (function (state_14914){
var state_val_14915 = (state_14914[(1)]);
if((state_val_14915 === (1))){
var state_14914__$1 = state_14914;
var statearr_14917_16732 = state_14914__$1;
(statearr_14917_16732[(2)] = null);

(statearr_14917_16732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (2))){
var state_14914__$1 = state_14914;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14914__$1,(4),jobs);
} else {
if((state_val_14915 === (3))){
var inst_14912 = (state_14914[(2)]);
var state_14914__$1 = state_14914;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14914__$1,inst_14912);
} else {
if((state_val_14915 === (4))){
var inst_14904 = (state_14914[(2)]);
var inst_14905 = process__$1(inst_14904);
var state_14914__$1 = state_14914;
if(cljs.core.truth_(inst_14905)){
var statearr_14919_16734 = state_14914__$1;
(statearr_14919_16734[(1)] = (5));

} else {
var statearr_14920_16735 = state_14914__$1;
(statearr_14920_16735[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (5))){
var state_14914__$1 = state_14914;
var statearr_14921_16736 = state_14914__$1;
(statearr_14921_16736[(2)] = null);

(statearr_14921_16736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (6))){
var state_14914__$1 = state_14914;
var statearr_14922_16737 = state_14914__$1;
(statearr_14922_16737[(2)] = null);

(statearr_14922_16737[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14915 === (7))){
var inst_14910 = (state_14914[(2)]);
var state_14914__$1 = state_14914;
var statearr_14923_16742 = state_14914__$1;
(statearr_14923_16742[(2)] = inst_14910);

(statearr_14923_16742[(1)] = (3));


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
});})(__16727,c__14547__auto___16731,G__14901_16728,G__14901_16729__$1,n__5593__auto___16726,jobs,results,process__$1,async))
;
return ((function (__16727,switch__14413__auto__,c__14547__auto___16731,G__14901_16728,G__14901_16729__$1,n__5593__auto___16726,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____0 = (function (){
var statearr_14924 = [null,null,null,null,null,null,null];
(statearr_14924[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__);

(statearr_14924[(1)] = (1));

return statearr_14924;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____1 = (function (state_14914){
while(true){
var ret_value__14415__auto__ = (function (){try{while(true){
var result__14416__auto__ = switch__14413__auto__(state_14914);
if(cljs.core.keyword_identical_QMARK_(result__14416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14416__auto__;
}
break;
}
}catch (e14927){var ex__14417__auto__ = e14927;
var statearr_14928_16751 = state_14914;
(statearr_14928_16751[(2)] = ex__14417__auto__);


if(cljs.core.seq((state_14914[(4)]))){
var statearr_14929_16753 = state_14914;
(statearr_14929_16753[(1)] = cljs.core.first((state_14914[(4)])));

} else {
throw ex__14417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16754 = state_14914;
state_14914 = G__16754;
continue;
} else {
return ret_value__14415__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__ = function(state_14914){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____1.call(this,state_14914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__;
})()
;})(__16727,switch__14413__auto__,c__14547__auto___16731,G__14901_16728,G__14901_16729__$1,n__5593__auto___16726,jobs,results,process__$1,async))
})();
var state__14549__auto__ = (function (){var statearr_14932 = f__14548__auto__();
(statearr_14932[(6)] = c__14547__auto___16731);

return statearr_14932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14549__auto__);
});})(__16727,c__14547__auto___16731,G__14901_16728,G__14901_16729__$1,n__5593__auto___16726,jobs,results,process__$1,async))
);


break;
case "async":
var c__14547__auto___16755 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__16727,c__14547__auto___16755,G__14901_16728,G__14901_16729__$1,n__5593__auto___16726,jobs,results,process__$1,async){
return (function (){
var f__14548__auto__ = (function (){var switch__14413__auto__ = ((function (__16727,c__14547__auto___16755,G__14901_16728,G__14901_16729__$1,n__5593__auto___16726,jobs,results,process__$1,async){
return (function (state_14945){
var state_val_14946 = (state_14945[(1)]);
if((state_val_14946 === (1))){
var state_14945__$1 = state_14945;
var statearr_14948_16757 = state_14945__$1;
(statearr_14948_16757[(2)] = null);

(statearr_14948_16757[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14946 === (2))){
var state_14945__$1 = state_14945;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14945__$1,(4),jobs);
} else {
if((state_val_14946 === (3))){
var inst_14943 = (state_14945[(2)]);
var state_14945__$1 = state_14945;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14945__$1,inst_14943);
} else {
if((state_val_14946 === (4))){
var inst_14935 = (state_14945[(2)]);
var inst_14936 = async(inst_14935);
var state_14945__$1 = state_14945;
if(cljs.core.truth_(inst_14936)){
var statearr_14952_16761 = state_14945__$1;
(statearr_14952_16761[(1)] = (5));

} else {
var statearr_14953_16763 = state_14945__$1;
(statearr_14953_16763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14946 === (5))){
var state_14945__$1 = state_14945;
var statearr_14954_16764 = state_14945__$1;
(statearr_14954_16764[(2)] = null);

(statearr_14954_16764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14946 === (6))){
var state_14945__$1 = state_14945;
var statearr_14955_16765 = state_14945__$1;
(statearr_14955_16765[(2)] = null);

(statearr_14955_16765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14946 === (7))){
var inst_14941 = (state_14945[(2)]);
var state_14945__$1 = state_14945;
var statearr_14956_16766 = state_14945__$1;
(statearr_14956_16766[(2)] = inst_14941);

(statearr_14956_16766[(1)] = (3));


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
});})(__16727,c__14547__auto___16755,G__14901_16728,G__14901_16729__$1,n__5593__auto___16726,jobs,results,process__$1,async))
;
return ((function (__16727,switch__14413__auto__,c__14547__auto___16755,G__14901_16728,G__14901_16729__$1,n__5593__auto___16726,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____0 = (function (){
var statearr_14957 = [null,null,null,null,null,null,null];
(statearr_14957[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__);

(statearr_14957[(1)] = (1));

return statearr_14957;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____1 = (function (state_14945){
while(true){
var ret_value__14415__auto__ = (function (){try{while(true){
var result__14416__auto__ = switch__14413__auto__(state_14945);
if(cljs.core.keyword_identical_QMARK_(result__14416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14416__auto__;
}
break;
}
}catch (e14958){var ex__14417__auto__ = e14958;
var statearr_14959_16770 = state_14945;
(statearr_14959_16770[(2)] = ex__14417__auto__);


if(cljs.core.seq((state_14945[(4)]))){
var statearr_14960_16771 = state_14945;
(statearr_14960_16771[(1)] = cljs.core.first((state_14945[(4)])));

} else {
throw ex__14417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16774 = state_14945;
state_14945 = G__16774;
continue;
} else {
return ret_value__14415__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__ = function(state_14945){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____1.call(this,state_14945);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__;
})()
;})(__16727,switch__14413__auto__,c__14547__auto___16755,G__14901_16728,G__14901_16729__$1,n__5593__auto___16726,jobs,results,process__$1,async))
})();
var state__14549__auto__ = (function (){var statearr_14962 = f__14548__auto__();
(statearr_14962[(6)] = c__14547__auto___16755);

return statearr_14962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14549__auto__);
});})(__16727,c__14547__auto___16755,G__14901_16728,G__14901_16729__$1,n__5593__auto___16726,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__14901_16729__$1)].join('')));

}

var G__16776 = (__16727 + (1));
__16727 = G__16776;
continue;
} else {
}
break;
}

var c__14547__auto___16781 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14548__auto__ = (function (){var switch__14413__auto__ = (function (state_14985){
var state_val_14986 = (state_14985[(1)]);
if((state_val_14986 === (7))){
var inst_14981 = (state_14985[(2)]);
var state_14985__$1 = state_14985;
var statearr_14991_16783 = state_14985__$1;
(statearr_14991_16783[(2)] = inst_14981);

(statearr_14991_16783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14986 === (1))){
var state_14985__$1 = state_14985;
var statearr_14992_16785 = state_14985__$1;
(statearr_14992_16785[(2)] = null);

(statearr_14992_16785[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14986 === (4))){
var inst_14966 = (state_14985[(7)]);
var inst_14966__$1 = (state_14985[(2)]);
var inst_14967 = (inst_14966__$1 == null);
var state_14985__$1 = (function (){var statearr_14993 = state_14985;
(statearr_14993[(7)] = inst_14966__$1);

return statearr_14993;
})();
if(cljs.core.truth_(inst_14967)){
var statearr_14994_16789 = state_14985__$1;
(statearr_14994_16789[(1)] = (5));

} else {
var statearr_14996_16790 = state_14985__$1;
(statearr_14996_16790[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14986 === (6))){
var inst_14966 = (state_14985[(7)]);
var inst_14971 = (state_14985[(8)]);
var inst_14971__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_14972 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14973 = [inst_14966,inst_14971__$1];
var inst_14974 = (new cljs.core.PersistentVector(null,2,(5),inst_14972,inst_14973,null));
var state_14985__$1 = (function (){var statearr_14998 = state_14985;
(statearr_14998[(8)] = inst_14971__$1);

return statearr_14998;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14985__$1,(8),jobs,inst_14974);
} else {
if((state_val_14986 === (3))){
var inst_14983 = (state_14985[(2)]);
var state_14985__$1 = state_14985;
return cljs.core.async.impl.ioc_helpers.return_chan(state_14985__$1,inst_14983);
} else {
if((state_val_14986 === (2))){
var state_14985__$1 = state_14985;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_14985__$1,(4),from);
} else {
if((state_val_14986 === (9))){
var inst_14978 = (state_14985[(2)]);
var state_14985__$1 = (function (){var statearr_15001 = state_14985;
(statearr_15001[(9)] = inst_14978);

return statearr_15001;
})();
var statearr_15002_16795 = state_14985__$1;
(statearr_15002_16795[(2)] = null);

(statearr_15002_16795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14986 === (5))){
var inst_14969 = cljs.core.async.close_BANG_(jobs);
var state_14985__$1 = state_14985;
var statearr_15004_16797 = state_14985__$1;
(statearr_15004_16797[(2)] = inst_14969);

(statearr_15004_16797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14986 === (8))){
var inst_14971 = (state_14985[(8)]);
var inst_14976 = (state_14985[(2)]);
var state_14985__$1 = (function (){var statearr_15006 = state_14985;
(statearr_15006[(10)] = inst_14976);

return statearr_15006;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_14985__$1,(9),results,inst_14971);
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
var cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____0 = (function (){
var statearr_15007 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15007[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__);

(statearr_15007[(1)] = (1));

return statearr_15007;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____1 = (function (state_14985){
while(true){
var ret_value__14415__auto__ = (function (){try{while(true){
var result__14416__auto__ = switch__14413__auto__(state_14985);
if(cljs.core.keyword_identical_QMARK_(result__14416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14416__auto__;
}
break;
}
}catch (e15008){var ex__14417__auto__ = e15008;
var statearr_15009_16801 = state_14985;
(statearr_15009_16801[(2)] = ex__14417__auto__);


if(cljs.core.seq((state_14985[(4)]))){
var statearr_15010_16802 = state_14985;
(statearr_15010_16802[(1)] = cljs.core.first((state_14985[(4)])));

} else {
throw ex__14417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16803 = state_14985;
state_14985 = G__16803;
continue;
} else {
return ret_value__14415__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__ = function(state_14985){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____1.call(this,state_14985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__;
})()
})();
var state__14549__auto__ = (function (){var statearr_15012 = f__14548__auto__();
(statearr_15012[(6)] = c__14547__auto___16781);

return statearr_15012;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14549__auto__);
}));


var c__14547__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14548__auto__ = (function (){var switch__14413__auto__ = (function (state_15051){
var state_val_15052 = (state_15051[(1)]);
if((state_val_15052 === (7))){
var inst_15047 = (state_15051[(2)]);
var state_15051__$1 = state_15051;
var statearr_15057_16805 = state_15051__$1;
(statearr_15057_16805[(2)] = inst_15047);

(statearr_15057_16805[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (20))){
var state_15051__$1 = state_15051;
var statearr_15058_16806 = state_15051__$1;
(statearr_15058_16806[(2)] = null);

(statearr_15058_16806[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (1))){
var state_15051__$1 = state_15051;
var statearr_15059_16807 = state_15051__$1;
(statearr_15059_16807[(2)] = null);

(statearr_15059_16807[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (4))){
var inst_15015 = (state_15051[(7)]);
var inst_15015__$1 = (state_15051[(2)]);
var inst_15016 = (inst_15015__$1 == null);
var state_15051__$1 = (function (){var statearr_15060 = state_15051;
(statearr_15060[(7)] = inst_15015__$1);

return statearr_15060;
})();
if(cljs.core.truth_(inst_15016)){
var statearr_15061_16814 = state_15051__$1;
(statearr_15061_16814[(1)] = (5));

} else {
var statearr_15062_16815 = state_15051__$1;
(statearr_15062_16815[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (15))){
var inst_15028 = (state_15051[(8)]);
var state_15051__$1 = state_15051;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15051__$1,(18),to,inst_15028);
} else {
if((state_val_15052 === (21))){
var inst_15042 = (state_15051[(2)]);
var state_15051__$1 = state_15051;
var statearr_15063_16820 = state_15051__$1;
(statearr_15063_16820[(2)] = inst_15042);

(statearr_15063_16820[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (13))){
var inst_15044 = (state_15051[(2)]);
var state_15051__$1 = (function (){var statearr_15064 = state_15051;
(statearr_15064[(9)] = inst_15044);

return statearr_15064;
})();
var statearr_15065_16822 = state_15051__$1;
(statearr_15065_16822[(2)] = null);

(statearr_15065_16822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (6))){
var inst_15015 = (state_15051[(7)]);
var state_15051__$1 = state_15051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15051__$1,(11),inst_15015);
} else {
if((state_val_15052 === (17))){
var inst_15037 = (state_15051[(2)]);
var state_15051__$1 = state_15051;
if(cljs.core.truth_(inst_15037)){
var statearr_15067_16823 = state_15051__$1;
(statearr_15067_16823[(1)] = (19));

} else {
var statearr_15068_16825 = state_15051__$1;
(statearr_15068_16825[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (3))){
var inst_15049 = (state_15051[(2)]);
var state_15051__$1 = state_15051;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15051__$1,inst_15049);
} else {
if((state_val_15052 === (12))){
var inst_15025 = (state_15051[(10)]);
var state_15051__$1 = state_15051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15051__$1,(14),inst_15025);
} else {
if((state_val_15052 === (2))){
var state_15051__$1 = state_15051;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15051__$1,(4),results);
} else {
if((state_val_15052 === (19))){
var state_15051__$1 = state_15051;
var statearr_15070_16828 = state_15051__$1;
(statearr_15070_16828[(2)] = null);

(statearr_15070_16828[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (11))){
var inst_15025 = (state_15051[(2)]);
var state_15051__$1 = (function (){var statearr_15071 = state_15051;
(statearr_15071[(10)] = inst_15025);

return statearr_15071;
})();
var statearr_15072_16829 = state_15051__$1;
(statearr_15072_16829[(2)] = null);

(statearr_15072_16829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (9))){
var state_15051__$1 = state_15051;
var statearr_15075_16830 = state_15051__$1;
(statearr_15075_16830[(2)] = null);

(statearr_15075_16830[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (5))){
var state_15051__$1 = state_15051;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15079_16831 = state_15051__$1;
(statearr_15079_16831[(1)] = (8));

} else {
var statearr_15080_16832 = state_15051__$1;
(statearr_15080_16832[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (14))){
var inst_15028 = (state_15051[(8)]);
var inst_15031 = (state_15051[(11)]);
var inst_15028__$1 = (state_15051[(2)]);
var inst_15030 = (inst_15028__$1 == null);
var inst_15031__$1 = cljs.core.not(inst_15030);
var state_15051__$1 = (function (){var statearr_15082 = state_15051;
(statearr_15082[(8)] = inst_15028__$1);

(statearr_15082[(11)] = inst_15031__$1);

return statearr_15082;
})();
if(inst_15031__$1){
var statearr_15083_16833 = state_15051__$1;
(statearr_15083_16833[(1)] = (15));

} else {
var statearr_15084_16834 = state_15051__$1;
(statearr_15084_16834[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (16))){
var inst_15031 = (state_15051[(11)]);
var state_15051__$1 = state_15051;
var statearr_15088_16835 = state_15051__$1;
(statearr_15088_16835[(2)] = inst_15031);

(statearr_15088_16835[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (10))){
var inst_15022 = (state_15051[(2)]);
var state_15051__$1 = state_15051;
var statearr_15089_16836 = state_15051__$1;
(statearr_15089_16836[(2)] = inst_15022);

(statearr_15089_16836[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (18))){
var inst_15034 = (state_15051[(2)]);
var state_15051__$1 = state_15051;
var statearr_15090_16837 = state_15051__$1;
(statearr_15090_16837[(2)] = inst_15034);

(statearr_15090_16837[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15052 === (8))){
var inst_15019 = cljs.core.async.close_BANG_(to);
var state_15051__$1 = state_15051;
var statearr_15091_16838 = state_15051__$1;
(statearr_15091_16838[(2)] = inst_15019);

(statearr_15091_16838[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____0 = (function (){
var statearr_15092 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15092[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__);

(statearr_15092[(1)] = (1));

return statearr_15092;
});
var cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____1 = (function (state_15051){
while(true){
var ret_value__14415__auto__ = (function (){try{while(true){
var result__14416__auto__ = switch__14413__auto__(state_15051);
if(cljs.core.keyword_identical_QMARK_(result__14416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14416__auto__;
}
break;
}
}catch (e15093){var ex__14417__auto__ = e15093;
var statearr_15094_16839 = state_15051;
(statearr_15094_16839[(2)] = ex__14417__auto__);


if(cljs.core.seq((state_15051[(4)]))){
var statearr_15095_16840 = state_15051;
(statearr_15095_16840[(1)] = cljs.core.first((state_15051[(4)])));

} else {
throw ex__14417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16841 = state_15051;
state_15051 = G__16841;
continue;
} else {
return ret_value__14415__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__ = function(state_15051){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____1.call(this,state_15051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__14414__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__14414__auto__;
})()
})();
var state__14549__auto__ = (function (){var statearr_15096 = f__14548__auto__();
(statearr_15096[(6)] = c__14547__auto__);

return statearr_15096;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14549__auto__);
}));

return c__14547__auto__;
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
var G__15099 = arguments.length;
switch (G__15099) {
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
var G__15104 = arguments.length;
switch (G__15104) {
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
var G__15106 = arguments.length;
switch (G__15106) {
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
var c__14547__auto___16852 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14548__auto__ = (function (){var switch__14413__auto__ = (function (state_15138){
var state_val_15139 = (state_15138[(1)]);
if((state_val_15139 === (7))){
var inst_15134 = (state_15138[(2)]);
var state_15138__$1 = state_15138;
var statearr_15140_16853 = state_15138__$1;
(statearr_15140_16853[(2)] = inst_15134);

(statearr_15140_16853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15139 === (1))){
var state_15138__$1 = state_15138;
var statearr_15141_16854 = state_15138__$1;
(statearr_15141_16854[(2)] = null);

(statearr_15141_16854[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15139 === (4))){
var inst_15113 = (state_15138[(7)]);
var inst_15113__$1 = (state_15138[(2)]);
var inst_15114 = (inst_15113__$1 == null);
var state_15138__$1 = (function (){var statearr_15142 = state_15138;
(statearr_15142[(7)] = inst_15113__$1);

return statearr_15142;
})();
if(cljs.core.truth_(inst_15114)){
var statearr_15143_16855 = state_15138__$1;
(statearr_15143_16855[(1)] = (5));

} else {
var statearr_15144_16856 = state_15138__$1;
(statearr_15144_16856[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15139 === (13))){
var state_15138__$1 = state_15138;
var statearr_15145_16857 = state_15138__$1;
(statearr_15145_16857[(2)] = null);

(statearr_15145_16857[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15139 === (6))){
var inst_15113 = (state_15138[(7)]);
var inst_15121 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_15113) : p.call(null,inst_15113));
var state_15138__$1 = state_15138;
if(cljs.core.truth_(inst_15121)){
var statearr_15147_16858 = state_15138__$1;
(statearr_15147_16858[(1)] = (9));

} else {
var statearr_15148_16859 = state_15138__$1;
(statearr_15148_16859[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15139 === (3))){
var inst_15136 = (state_15138[(2)]);
var state_15138__$1 = state_15138;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15138__$1,inst_15136);
} else {
if((state_val_15139 === (12))){
var state_15138__$1 = state_15138;
var statearr_15149_16860 = state_15138__$1;
(statearr_15149_16860[(2)] = null);

(statearr_15149_16860[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15139 === (2))){
var state_15138__$1 = state_15138;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15138__$1,(4),ch);
} else {
if((state_val_15139 === (11))){
var inst_15113 = (state_15138[(7)]);
var inst_15125 = (state_15138[(2)]);
var state_15138__$1 = state_15138;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15138__$1,(8),inst_15125,inst_15113);
} else {
if((state_val_15139 === (9))){
var state_15138__$1 = state_15138;
var statearr_15153_16861 = state_15138__$1;
(statearr_15153_16861[(2)] = tc);

(statearr_15153_16861[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15139 === (5))){
var inst_15118 = cljs.core.async.close_BANG_(tc);
var inst_15119 = cljs.core.async.close_BANG_(fc);
var state_15138__$1 = (function (){var statearr_15155 = state_15138;
(statearr_15155[(8)] = inst_15118);

return statearr_15155;
})();
var statearr_15156_16862 = state_15138__$1;
(statearr_15156_16862[(2)] = inst_15119);

(statearr_15156_16862[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15139 === (14))){
var inst_15132 = (state_15138[(2)]);
var state_15138__$1 = state_15138;
var statearr_15158_16863 = state_15138__$1;
(statearr_15158_16863[(2)] = inst_15132);

(statearr_15158_16863[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15139 === (10))){
var state_15138__$1 = state_15138;
var statearr_15159_16864 = state_15138__$1;
(statearr_15159_16864[(2)] = fc);

(statearr_15159_16864[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15139 === (8))){
var inst_15127 = (state_15138[(2)]);
var state_15138__$1 = state_15138;
if(cljs.core.truth_(inst_15127)){
var statearr_15160_16865 = state_15138__$1;
(statearr_15160_16865[(1)] = (12));

} else {
var statearr_15161_16866 = state_15138__$1;
(statearr_15161_16866[(1)] = (13));

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
var cljs$core$async$state_machine__14414__auto__ = null;
var cljs$core$async$state_machine__14414__auto____0 = (function (){
var statearr_15166 = [null,null,null,null,null,null,null,null,null];
(statearr_15166[(0)] = cljs$core$async$state_machine__14414__auto__);

(statearr_15166[(1)] = (1));

return statearr_15166;
});
var cljs$core$async$state_machine__14414__auto____1 = (function (state_15138){
while(true){
var ret_value__14415__auto__ = (function (){try{while(true){
var result__14416__auto__ = switch__14413__auto__(state_15138);
if(cljs.core.keyword_identical_QMARK_(result__14416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14416__auto__;
}
break;
}
}catch (e15167){var ex__14417__auto__ = e15167;
var statearr_15168_16867 = state_15138;
(statearr_15168_16867[(2)] = ex__14417__auto__);


if(cljs.core.seq((state_15138[(4)]))){
var statearr_15169_16868 = state_15138;
(statearr_15169_16868[(1)] = cljs.core.first((state_15138[(4)])));

} else {
throw ex__14417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16873 = state_15138;
state_15138 = G__16873;
continue;
} else {
return ret_value__14415__auto__;
}
break;
}
});
cljs$core$async$state_machine__14414__auto__ = function(state_15138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14414__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14414__auto____1.call(this,state_15138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14414__auto____0;
cljs$core$async$state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14414__auto____1;
return cljs$core$async$state_machine__14414__auto__;
})()
})();
var state__14549__auto__ = (function (){var statearr_15170 = f__14548__auto__();
(statearr_15170[(6)] = c__14547__auto___16852);

return statearr_15170;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14549__auto__);
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
var c__14547__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14548__auto__ = (function (){var switch__14413__auto__ = (function (state_15192){
var state_val_15193 = (state_15192[(1)]);
if((state_val_15193 === (7))){
var inst_15188 = (state_15192[(2)]);
var state_15192__$1 = state_15192;
var statearr_15194_16874 = state_15192__$1;
(statearr_15194_16874[(2)] = inst_15188);

(statearr_15194_16874[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15193 === (1))){
var inst_15171 = init;
var inst_15172 = inst_15171;
var state_15192__$1 = (function (){var statearr_15195 = state_15192;
(statearr_15195[(7)] = inst_15172);

return statearr_15195;
})();
var statearr_15196_16875 = state_15192__$1;
(statearr_15196_16875[(2)] = null);

(statearr_15196_16875[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15193 === (4))){
var inst_15175 = (state_15192[(8)]);
var inst_15175__$1 = (state_15192[(2)]);
var inst_15176 = (inst_15175__$1 == null);
var state_15192__$1 = (function (){var statearr_15197 = state_15192;
(statearr_15197[(8)] = inst_15175__$1);

return statearr_15197;
})();
if(cljs.core.truth_(inst_15176)){
var statearr_15198_16876 = state_15192__$1;
(statearr_15198_16876[(1)] = (5));

} else {
var statearr_15201_16877 = state_15192__$1;
(statearr_15201_16877[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15193 === (6))){
var inst_15175 = (state_15192[(8)]);
var inst_15172 = (state_15192[(7)]);
var inst_15179 = (state_15192[(9)]);
var inst_15179__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_15172,inst_15175) : f.call(null,inst_15172,inst_15175));
var inst_15180 = cljs.core.reduced_QMARK_(inst_15179__$1);
var state_15192__$1 = (function (){var statearr_15204 = state_15192;
(statearr_15204[(9)] = inst_15179__$1);

return statearr_15204;
})();
if(inst_15180){
var statearr_15205_16878 = state_15192__$1;
(statearr_15205_16878[(1)] = (8));

} else {
var statearr_15206_16879 = state_15192__$1;
(statearr_15206_16879[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15193 === (3))){
var inst_15190 = (state_15192[(2)]);
var state_15192__$1 = state_15192;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15192__$1,inst_15190);
} else {
if((state_val_15193 === (2))){
var state_15192__$1 = state_15192;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15192__$1,(4),ch);
} else {
if((state_val_15193 === (9))){
var inst_15179 = (state_15192[(9)]);
var inst_15172 = inst_15179;
var state_15192__$1 = (function (){var statearr_15210 = state_15192;
(statearr_15210[(7)] = inst_15172);

return statearr_15210;
})();
var statearr_15211_16880 = state_15192__$1;
(statearr_15211_16880[(2)] = null);

(statearr_15211_16880[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15193 === (5))){
var inst_15172 = (state_15192[(7)]);
var state_15192__$1 = state_15192;
var statearr_15212_16881 = state_15192__$1;
(statearr_15212_16881[(2)] = inst_15172);

(statearr_15212_16881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15193 === (10))){
var inst_15186 = (state_15192[(2)]);
var state_15192__$1 = state_15192;
var statearr_15214_16882 = state_15192__$1;
(statearr_15214_16882[(2)] = inst_15186);

(statearr_15214_16882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15193 === (8))){
var inst_15179 = (state_15192[(9)]);
var inst_15182 = cljs.core.deref(inst_15179);
var state_15192__$1 = state_15192;
var statearr_15215_16883 = state_15192__$1;
(statearr_15215_16883[(2)] = inst_15182);

(statearr_15215_16883[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__14414__auto__ = null;
var cljs$core$async$reduce_$_state_machine__14414__auto____0 = (function (){
var statearr_15216 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15216[(0)] = cljs$core$async$reduce_$_state_machine__14414__auto__);

(statearr_15216[(1)] = (1));

return statearr_15216;
});
var cljs$core$async$reduce_$_state_machine__14414__auto____1 = (function (state_15192){
while(true){
var ret_value__14415__auto__ = (function (){try{while(true){
var result__14416__auto__ = switch__14413__auto__(state_15192);
if(cljs.core.keyword_identical_QMARK_(result__14416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14416__auto__;
}
break;
}
}catch (e15217){var ex__14417__auto__ = e15217;
var statearr_15218_16887 = state_15192;
(statearr_15218_16887[(2)] = ex__14417__auto__);


if(cljs.core.seq((state_15192[(4)]))){
var statearr_15219_16888 = state_15192;
(statearr_15219_16888[(1)] = cljs.core.first((state_15192[(4)])));

} else {
throw ex__14417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16889 = state_15192;
state_15192 = G__16889;
continue;
} else {
return ret_value__14415__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__14414__auto__ = function(state_15192){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__14414__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__14414__auto____1.call(this,state_15192);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__14414__auto____0;
cljs$core$async$reduce_$_state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__14414__auto____1;
return cljs$core$async$reduce_$_state_machine__14414__auto__;
})()
})();
var state__14549__auto__ = (function (){var statearr_15222 = f__14548__auto__();
(statearr_15222[(6)] = c__14547__auto__);

return statearr_15222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14549__auto__);
}));

return c__14547__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__14547__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14548__auto__ = (function (){var switch__14413__auto__ = (function (state_15231){
var state_val_15232 = (state_15231[(1)]);
if((state_val_15232 === (1))){
var inst_15226 = cljs.core.async.reduce(f__$1,init,ch);
var state_15231__$1 = state_15231;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15231__$1,(2),inst_15226);
} else {
if((state_val_15232 === (2))){
var inst_15228 = (state_15231[(2)]);
var inst_15229 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_15228) : f__$1.call(null,inst_15228));
var state_15231__$1 = state_15231;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15231__$1,inst_15229);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__14414__auto__ = null;
var cljs$core$async$transduce_$_state_machine__14414__auto____0 = (function (){
var statearr_15235 = [null,null,null,null,null,null,null];
(statearr_15235[(0)] = cljs$core$async$transduce_$_state_machine__14414__auto__);

(statearr_15235[(1)] = (1));

return statearr_15235;
});
var cljs$core$async$transduce_$_state_machine__14414__auto____1 = (function (state_15231){
while(true){
var ret_value__14415__auto__ = (function (){try{while(true){
var result__14416__auto__ = switch__14413__auto__(state_15231);
if(cljs.core.keyword_identical_QMARK_(result__14416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14416__auto__;
}
break;
}
}catch (e15236){var ex__14417__auto__ = e15236;
var statearr_15237_16892 = state_15231;
(statearr_15237_16892[(2)] = ex__14417__auto__);


if(cljs.core.seq((state_15231[(4)]))){
var statearr_15238_16894 = state_15231;
(statearr_15238_16894[(1)] = cljs.core.first((state_15231[(4)])));

} else {
throw ex__14417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16895 = state_15231;
state_15231 = G__16895;
continue;
} else {
return ret_value__14415__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__14414__auto__ = function(state_15231){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__14414__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__14414__auto____1.call(this,state_15231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__14414__auto____0;
cljs$core$async$transduce_$_state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__14414__auto____1;
return cljs$core$async$transduce_$_state_machine__14414__auto__;
})()
})();
var state__14549__auto__ = (function (){var statearr_15239 = f__14548__auto__();
(statearr_15239[(6)] = c__14547__auto__);

return statearr_15239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14549__auto__);
}));

return c__14547__auto__;
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
var G__15241 = arguments.length;
switch (G__15241) {
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
var c__14547__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14548__auto__ = (function (){var switch__14413__auto__ = (function (state_15266){
var state_val_15267 = (state_15266[(1)]);
if((state_val_15267 === (7))){
var inst_15248 = (state_15266[(2)]);
var state_15266__$1 = state_15266;
var statearr_15268_16901 = state_15266__$1;
(statearr_15268_16901[(2)] = inst_15248);

(statearr_15268_16901[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (1))){
var inst_15242 = cljs.core.seq(coll);
var inst_15243 = inst_15242;
var state_15266__$1 = (function (){var statearr_15270 = state_15266;
(statearr_15270[(7)] = inst_15243);

return statearr_15270;
})();
var statearr_15271_16902 = state_15266__$1;
(statearr_15271_16902[(2)] = null);

(statearr_15271_16902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (4))){
var inst_15243 = (state_15266[(7)]);
var inst_15246 = cljs.core.first(inst_15243);
var state_15266__$1 = state_15266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15266__$1,(7),ch,inst_15246);
} else {
if((state_val_15267 === (13))){
var inst_15260 = (state_15266[(2)]);
var state_15266__$1 = state_15266;
var statearr_15272_16903 = state_15266__$1;
(statearr_15272_16903[(2)] = inst_15260);

(statearr_15272_16903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (6))){
var inst_15251 = (state_15266[(2)]);
var state_15266__$1 = state_15266;
if(cljs.core.truth_(inst_15251)){
var statearr_15273_16904 = state_15266__$1;
(statearr_15273_16904[(1)] = (8));

} else {
var statearr_15275_16905 = state_15266__$1;
(statearr_15275_16905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (3))){
var inst_15264 = (state_15266[(2)]);
var state_15266__$1 = state_15266;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15266__$1,inst_15264);
} else {
if((state_val_15267 === (12))){
var state_15266__$1 = state_15266;
var statearr_15276_16906 = state_15266__$1;
(statearr_15276_16906[(2)] = null);

(statearr_15276_16906[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (2))){
var inst_15243 = (state_15266[(7)]);
var state_15266__$1 = state_15266;
if(cljs.core.truth_(inst_15243)){
var statearr_15277_16907 = state_15266__$1;
(statearr_15277_16907[(1)] = (4));

} else {
var statearr_15278_16908 = state_15266__$1;
(statearr_15278_16908[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (11))){
var inst_15257 = cljs.core.async.close_BANG_(ch);
var state_15266__$1 = state_15266;
var statearr_15280_16909 = state_15266__$1;
(statearr_15280_16909[(2)] = inst_15257);

(statearr_15280_16909[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (9))){
var state_15266__$1 = state_15266;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15281_16910 = state_15266__$1;
(statearr_15281_16910[(1)] = (11));

} else {
var statearr_15282_16911 = state_15266__$1;
(statearr_15282_16911[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (5))){
var inst_15243 = (state_15266[(7)]);
var state_15266__$1 = state_15266;
var statearr_15286_16912 = state_15266__$1;
(statearr_15286_16912[(2)] = inst_15243);

(statearr_15286_16912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (10))){
var inst_15262 = (state_15266[(2)]);
var state_15266__$1 = state_15266;
var statearr_15287_16913 = state_15266__$1;
(statearr_15287_16913[(2)] = inst_15262);

(statearr_15287_16913[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (8))){
var inst_15243 = (state_15266[(7)]);
var inst_15253 = cljs.core.next(inst_15243);
var inst_15243__$1 = inst_15253;
var state_15266__$1 = (function (){var statearr_15288 = state_15266;
(statearr_15288[(7)] = inst_15243__$1);

return statearr_15288;
})();
var statearr_15289_16915 = state_15266__$1;
(statearr_15289_16915[(2)] = null);

(statearr_15289_16915[(1)] = (2));


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
var cljs$core$async$state_machine__14414__auto__ = null;
var cljs$core$async$state_machine__14414__auto____0 = (function (){
var statearr_15290 = [null,null,null,null,null,null,null,null];
(statearr_15290[(0)] = cljs$core$async$state_machine__14414__auto__);

(statearr_15290[(1)] = (1));

return statearr_15290;
});
var cljs$core$async$state_machine__14414__auto____1 = (function (state_15266){
while(true){
var ret_value__14415__auto__ = (function (){try{while(true){
var result__14416__auto__ = switch__14413__auto__(state_15266);
if(cljs.core.keyword_identical_QMARK_(result__14416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14416__auto__;
}
break;
}
}catch (e15291){var ex__14417__auto__ = e15291;
var statearr_15292_16920 = state_15266;
(statearr_15292_16920[(2)] = ex__14417__auto__);


if(cljs.core.seq((state_15266[(4)]))){
var statearr_15293_16921 = state_15266;
(statearr_15293_16921[(1)] = cljs.core.first((state_15266[(4)])));

} else {
throw ex__14417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16923 = state_15266;
state_15266 = G__16923;
continue;
} else {
return ret_value__14415__auto__;
}
break;
}
});
cljs$core$async$state_machine__14414__auto__ = function(state_15266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14414__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14414__auto____1.call(this,state_15266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14414__auto____0;
cljs$core$async$state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14414__auto____1;
return cljs$core$async$state_machine__14414__auto__;
})()
})();
var state__14549__auto__ = (function (){var statearr_15294 = f__14548__auto__();
(statearr_15294[(6)] = c__14547__auto__);

return statearr_15294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14549__auto__);
}));

return c__14547__auto__;
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
var G__15296 = arguments.length;
switch (G__15296) {
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

var cljs$core$async$Mux$muxch_STAR_$dyn_16926 = (function (_){
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
return cljs$core$async$Mux$muxch_STAR_$dyn_16926(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_16928 = (function (m,ch,close_QMARK_){
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
return cljs$core$async$Mult$tap_STAR_$dyn_16928(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_16930 = (function (m,ch){
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
return cljs$core$async$Mult$untap_STAR_$dyn_16930(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_16932 = (function (m){
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
return cljs$core$async$Mult$untap_all_STAR_$dyn_16932(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15306 = (function (ch,cs,meta15307){
this.ch = ch;
this.cs = cs;
this.meta15307 = meta15307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15308,meta15307__$1){
var self__ = this;
var _15308__$1 = this;
return (new cljs.core.async.t_cljs$core$async15306(self__.ch,self__.cs,meta15307__$1));
}));

(cljs.core.async.t_cljs$core$async15306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15308){
var self__ = this;
var _15308__$1 = this;
return self__.meta15307;
}));

(cljs.core.async.t_cljs$core$async15306.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15306.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15306.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15306.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async15306.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async15306.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async15306.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15307","meta15307",1346972284,null)], null);
}));

(cljs.core.async.t_cljs$core$async15306.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15306.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15306");

(cljs.core.async.t_cljs$core$async15306.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15306");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15306.
 */
cljs.core.async.__GT_t_cljs$core$async15306 = (function cljs$core$async$__GT_t_cljs$core$async15306(ch,cs,meta15307){
return (new cljs.core.async.t_cljs$core$async15306(ch,cs,meta15307));
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
var m = (new cljs.core.async.t_cljs$core$async15306(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__14547__auto___16937 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14548__auto__ = (function (){var switch__14413__auto__ = (function (state_15445){
var state_val_15446 = (state_15445[(1)]);
if((state_val_15446 === (7))){
var inst_15440 = (state_15445[(2)]);
var state_15445__$1 = state_15445;
var statearr_15448_16940 = state_15445__$1;
(statearr_15448_16940[(2)] = inst_15440);

(statearr_15448_16940[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (20))){
var inst_15344 = (state_15445[(7)]);
var inst_15357 = cljs.core.first(inst_15344);
var inst_15358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15357,(0),null);
var inst_15359 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15357,(1),null);
var state_15445__$1 = (function (){var statearr_15449 = state_15445;
(statearr_15449[(8)] = inst_15358);

return statearr_15449;
})();
if(cljs.core.truth_(inst_15359)){
var statearr_15450_16941 = state_15445__$1;
(statearr_15450_16941[(1)] = (22));

} else {
var statearr_15451_16942 = state_15445__$1;
(statearr_15451_16942[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (27))){
var inst_15394 = (state_15445[(9)]);
var inst_15312 = (state_15445[(10)]);
var inst_15389 = (state_15445[(11)]);
var inst_15387 = (state_15445[(12)]);
var inst_15394__$1 = cljs.core._nth(inst_15387,inst_15389);
var inst_15395 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15394__$1,inst_15312,done);
var state_15445__$1 = (function (){var statearr_15452 = state_15445;
(statearr_15452[(9)] = inst_15394__$1);

return statearr_15452;
})();
if(cljs.core.truth_(inst_15395)){
var statearr_15453_16945 = state_15445__$1;
(statearr_15453_16945[(1)] = (30));

} else {
var statearr_15454_16946 = state_15445__$1;
(statearr_15454_16946[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (1))){
var state_15445__$1 = state_15445;
var statearr_15455_16947 = state_15445__$1;
(statearr_15455_16947[(2)] = null);

(statearr_15455_16947[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (24))){
var inst_15344 = (state_15445[(7)]);
var inst_15364 = (state_15445[(2)]);
var inst_15365 = cljs.core.next(inst_15344);
var inst_15321 = inst_15365;
var inst_15322 = null;
var inst_15323 = (0);
var inst_15324 = (0);
var state_15445__$1 = (function (){var statearr_15456 = state_15445;
(statearr_15456[(13)] = inst_15321);

(statearr_15456[(14)] = inst_15323);

(statearr_15456[(15)] = inst_15324);

(statearr_15456[(16)] = inst_15364);

(statearr_15456[(17)] = inst_15322);

return statearr_15456;
})();
var statearr_15457_16950 = state_15445__$1;
(statearr_15457_16950[(2)] = null);

(statearr_15457_16950[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (39))){
var state_15445__$1 = state_15445;
var statearr_15461_16951 = state_15445__$1;
(statearr_15461_16951[(2)] = null);

(statearr_15461_16951[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (4))){
var inst_15312 = (state_15445[(10)]);
var inst_15312__$1 = (state_15445[(2)]);
var inst_15313 = (inst_15312__$1 == null);
var state_15445__$1 = (function (){var statearr_15462 = state_15445;
(statearr_15462[(10)] = inst_15312__$1);

return statearr_15462;
})();
if(cljs.core.truth_(inst_15313)){
var statearr_15463_16954 = state_15445__$1;
(statearr_15463_16954[(1)] = (5));

} else {
var statearr_15464_16956 = state_15445__$1;
(statearr_15464_16956[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (15))){
var inst_15321 = (state_15445[(13)]);
var inst_15323 = (state_15445[(14)]);
var inst_15324 = (state_15445[(15)]);
var inst_15322 = (state_15445[(17)]);
var inst_15340 = (state_15445[(2)]);
var inst_15341 = (inst_15324 + (1));
var tmp15458 = inst_15321;
var tmp15459 = inst_15323;
var tmp15460 = inst_15322;
var inst_15321__$1 = tmp15458;
var inst_15322__$1 = tmp15460;
var inst_15323__$1 = tmp15459;
var inst_15324__$1 = inst_15341;
var state_15445__$1 = (function (){var statearr_15465 = state_15445;
(statearr_15465[(13)] = inst_15321__$1);

(statearr_15465[(14)] = inst_15323__$1);

(statearr_15465[(18)] = inst_15340);

(statearr_15465[(15)] = inst_15324__$1);

(statearr_15465[(17)] = inst_15322__$1);

return statearr_15465;
})();
var statearr_15466_16957 = state_15445__$1;
(statearr_15466_16957[(2)] = null);

(statearr_15466_16957[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (21))){
var inst_15368 = (state_15445[(2)]);
var state_15445__$1 = state_15445;
var statearr_15471_16958 = state_15445__$1;
(statearr_15471_16958[(2)] = inst_15368);

(statearr_15471_16958[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (31))){
var inst_15394 = (state_15445[(9)]);
var inst_15398 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15394);
var state_15445__$1 = state_15445;
var statearr_15472_16964 = state_15445__$1;
(statearr_15472_16964[(2)] = inst_15398);

(statearr_15472_16964[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (32))){
var inst_15386 = (state_15445[(19)]);
var inst_15388 = (state_15445[(20)]);
var inst_15389 = (state_15445[(11)]);
var inst_15387 = (state_15445[(12)]);
var inst_15400 = (state_15445[(2)]);
var inst_15401 = (inst_15389 + (1));
var tmp15468 = inst_15386;
var tmp15469 = inst_15388;
var tmp15470 = inst_15387;
var inst_15386__$1 = tmp15468;
var inst_15387__$1 = tmp15470;
var inst_15388__$1 = tmp15469;
var inst_15389__$1 = inst_15401;
var state_15445__$1 = (function (){var statearr_15477 = state_15445;
(statearr_15477[(19)] = inst_15386__$1);

(statearr_15477[(20)] = inst_15388__$1);

(statearr_15477[(11)] = inst_15389__$1);

(statearr_15477[(21)] = inst_15400);

(statearr_15477[(12)] = inst_15387__$1);

return statearr_15477;
})();
var statearr_15479_16969 = state_15445__$1;
(statearr_15479_16969[(2)] = null);

(statearr_15479_16969[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (40))){
var inst_15413 = (state_15445[(22)]);
var inst_15417 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_15413);
var state_15445__$1 = state_15445;
var statearr_15480_16970 = state_15445__$1;
(statearr_15480_16970[(2)] = inst_15417);

(statearr_15480_16970[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (33))){
var inst_15404 = (state_15445[(23)]);
var inst_15406 = cljs.core.chunked_seq_QMARK_(inst_15404);
var state_15445__$1 = state_15445;
if(inst_15406){
var statearr_15481_16971 = state_15445__$1;
(statearr_15481_16971[(1)] = (36));

} else {
var statearr_15482_16972 = state_15445__$1;
(statearr_15482_16972[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (13))){
var inst_15333 = (state_15445[(24)]);
var inst_15336 = cljs.core.async.close_BANG_(inst_15333);
var state_15445__$1 = state_15445;
var statearr_15485_16974 = state_15445__$1;
(statearr_15485_16974[(2)] = inst_15336);

(statearr_15485_16974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (22))){
var inst_15358 = (state_15445[(8)]);
var inst_15361 = cljs.core.async.close_BANG_(inst_15358);
var state_15445__$1 = state_15445;
var statearr_15486_16975 = state_15445__$1;
(statearr_15486_16975[(2)] = inst_15361);

(statearr_15486_16975[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (36))){
var inst_15404 = (state_15445[(23)]);
var inst_15408 = cljs.core.chunk_first(inst_15404);
var inst_15409 = cljs.core.chunk_rest(inst_15404);
var inst_15410 = cljs.core.count(inst_15408);
var inst_15386 = inst_15409;
var inst_15387 = inst_15408;
var inst_15388 = inst_15410;
var inst_15389 = (0);
var state_15445__$1 = (function (){var statearr_15487 = state_15445;
(statearr_15487[(19)] = inst_15386);

(statearr_15487[(20)] = inst_15388);

(statearr_15487[(11)] = inst_15389);

(statearr_15487[(12)] = inst_15387);

return statearr_15487;
})();
var statearr_15488_16976 = state_15445__$1;
(statearr_15488_16976[(2)] = null);

(statearr_15488_16976[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (41))){
var inst_15404 = (state_15445[(23)]);
var inst_15419 = (state_15445[(2)]);
var inst_15420 = cljs.core.next(inst_15404);
var inst_15386 = inst_15420;
var inst_15387 = null;
var inst_15388 = (0);
var inst_15389 = (0);
var state_15445__$1 = (function (){var statearr_15489 = state_15445;
(statearr_15489[(19)] = inst_15386);

(statearr_15489[(20)] = inst_15388);

(statearr_15489[(25)] = inst_15419);

(statearr_15489[(11)] = inst_15389);

(statearr_15489[(12)] = inst_15387);

return statearr_15489;
})();
var statearr_15490_16983 = state_15445__$1;
(statearr_15490_16983[(2)] = null);

(statearr_15490_16983[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (43))){
var state_15445__$1 = state_15445;
var statearr_15491_16984 = state_15445__$1;
(statearr_15491_16984[(2)] = null);

(statearr_15491_16984[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (29))){
var inst_15428 = (state_15445[(2)]);
var state_15445__$1 = state_15445;
var statearr_15492_16985 = state_15445__$1;
(statearr_15492_16985[(2)] = inst_15428);

(statearr_15492_16985[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (44))){
var inst_15437 = (state_15445[(2)]);
var state_15445__$1 = (function (){var statearr_15493 = state_15445;
(statearr_15493[(26)] = inst_15437);

return statearr_15493;
})();
var statearr_15494_16986 = state_15445__$1;
(statearr_15494_16986[(2)] = null);

(statearr_15494_16986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (6))){
var inst_15378 = (state_15445[(27)]);
var inst_15377 = cljs.core.deref(cs);
var inst_15378__$1 = cljs.core.keys(inst_15377);
var inst_15379 = cljs.core.count(inst_15378__$1);
var inst_15380 = cljs.core.reset_BANG_(dctr,inst_15379);
var inst_15385 = cljs.core.seq(inst_15378__$1);
var inst_15386 = inst_15385;
var inst_15387 = null;
var inst_15388 = (0);
var inst_15389 = (0);
var state_15445__$1 = (function (){var statearr_15496 = state_15445;
(statearr_15496[(28)] = inst_15380);

(statearr_15496[(19)] = inst_15386);

(statearr_15496[(27)] = inst_15378__$1);

(statearr_15496[(20)] = inst_15388);

(statearr_15496[(11)] = inst_15389);

(statearr_15496[(12)] = inst_15387);

return statearr_15496;
})();
var statearr_15497_17000 = state_15445__$1;
(statearr_15497_17000[(2)] = null);

(statearr_15497_17000[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (28))){
var inst_15386 = (state_15445[(19)]);
var inst_15404 = (state_15445[(23)]);
var inst_15404__$1 = cljs.core.seq(inst_15386);
var state_15445__$1 = (function (){var statearr_15498 = state_15445;
(statearr_15498[(23)] = inst_15404__$1);

return statearr_15498;
})();
if(inst_15404__$1){
var statearr_15499_17009 = state_15445__$1;
(statearr_15499_17009[(1)] = (33));

} else {
var statearr_15500_17010 = state_15445__$1;
(statearr_15500_17010[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (25))){
var inst_15388 = (state_15445[(20)]);
var inst_15389 = (state_15445[(11)]);
var inst_15391 = (inst_15389 < inst_15388);
var inst_15392 = inst_15391;
var state_15445__$1 = state_15445;
if(cljs.core.truth_(inst_15392)){
var statearr_15501_17022 = state_15445__$1;
(statearr_15501_17022[(1)] = (27));

} else {
var statearr_15502_17028 = state_15445__$1;
(statearr_15502_17028[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (34))){
var state_15445__$1 = state_15445;
var statearr_15503_17037 = state_15445__$1;
(statearr_15503_17037[(2)] = null);

(statearr_15503_17037[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (17))){
var state_15445__$1 = state_15445;
var statearr_15504_17042 = state_15445__$1;
(statearr_15504_17042[(2)] = null);

(statearr_15504_17042[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (3))){
var inst_15442 = (state_15445[(2)]);
var state_15445__$1 = state_15445;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15445__$1,inst_15442);
} else {
if((state_val_15446 === (12))){
var inst_15373 = (state_15445[(2)]);
var state_15445__$1 = state_15445;
var statearr_15505_17044 = state_15445__$1;
(statearr_15505_17044[(2)] = inst_15373);

(statearr_15505_17044[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (2))){
var state_15445__$1 = state_15445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15445__$1,(4),ch);
} else {
if((state_val_15446 === (23))){
var state_15445__$1 = state_15445;
var statearr_15506_17045 = state_15445__$1;
(statearr_15506_17045[(2)] = null);

(statearr_15506_17045[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (35))){
var inst_15426 = (state_15445[(2)]);
var state_15445__$1 = state_15445;
var statearr_15507_17046 = state_15445__$1;
(statearr_15507_17046[(2)] = inst_15426);

(statearr_15507_17046[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (19))){
var inst_15344 = (state_15445[(7)]);
var inst_15348 = cljs.core.chunk_first(inst_15344);
var inst_15349 = cljs.core.chunk_rest(inst_15344);
var inst_15351 = cljs.core.count(inst_15348);
var inst_15321 = inst_15349;
var inst_15322 = inst_15348;
var inst_15323 = inst_15351;
var inst_15324 = (0);
var state_15445__$1 = (function (){var statearr_15508 = state_15445;
(statearr_15508[(13)] = inst_15321);

(statearr_15508[(14)] = inst_15323);

(statearr_15508[(15)] = inst_15324);

(statearr_15508[(17)] = inst_15322);

return statearr_15508;
})();
var statearr_15510_17051 = state_15445__$1;
(statearr_15510_17051[(2)] = null);

(statearr_15510_17051[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (11))){
var inst_15321 = (state_15445[(13)]);
var inst_15344 = (state_15445[(7)]);
var inst_15344__$1 = cljs.core.seq(inst_15321);
var state_15445__$1 = (function (){var statearr_15512 = state_15445;
(statearr_15512[(7)] = inst_15344__$1);

return statearr_15512;
})();
if(inst_15344__$1){
var statearr_15514_17055 = state_15445__$1;
(statearr_15514_17055[(1)] = (16));

} else {
var statearr_15515_17056 = state_15445__$1;
(statearr_15515_17056[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (9))){
var inst_15375 = (state_15445[(2)]);
var state_15445__$1 = state_15445;
var statearr_15517_17057 = state_15445__$1;
(statearr_15517_17057[(2)] = inst_15375);

(statearr_15517_17057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (5))){
var inst_15319 = cljs.core.deref(cs);
var inst_15320 = cljs.core.seq(inst_15319);
var inst_15321 = inst_15320;
var inst_15322 = null;
var inst_15323 = (0);
var inst_15324 = (0);
var state_15445__$1 = (function (){var statearr_15519 = state_15445;
(statearr_15519[(13)] = inst_15321);

(statearr_15519[(14)] = inst_15323);

(statearr_15519[(15)] = inst_15324);

(statearr_15519[(17)] = inst_15322);

return statearr_15519;
})();
var statearr_15520_17058 = state_15445__$1;
(statearr_15520_17058[(2)] = null);

(statearr_15520_17058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (14))){
var state_15445__$1 = state_15445;
var statearr_15523_17059 = state_15445__$1;
(statearr_15523_17059[(2)] = null);

(statearr_15523_17059[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (45))){
var inst_15434 = (state_15445[(2)]);
var state_15445__$1 = state_15445;
var statearr_15524_17060 = state_15445__$1;
(statearr_15524_17060[(2)] = inst_15434);

(statearr_15524_17060[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (26))){
var inst_15378 = (state_15445[(27)]);
var inst_15430 = (state_15445[(2)]);
var inst_15431 = cljs.core.seq(inst_15378);
var state_15445__$1 = (function (){var statearr_15527 = state_15445;
(statearr_15527[(29)] = inst_15430);

return statearr_15527;
})();
if(inst_15431){
var statearr_15528_17061 = state_15445__$1;
(statearr_15528_17061[(1)] = (42));

} else {
var statearr_15529_17062 = state_15445__$1;
(statearr_15529_17062[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (16))){
var inst_15344 = (state_15445[(7)]);
var inst_15346 = cljs.core.chunked_seq_QMARK_(inst_15344);
var state_15445__$1 = state_15445;
if(inst_15346){
var statearr_15531_17064 = state_15445__$1;
(statearr_15531_17064[(1)] = (19));

} else {
var statearr_15532_17065 = state_15445__$1;
(statearr_15532_17065[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (38))){
var inst_15423 = (state_15445[(2)]);
var state_15445__$1 = state_15445;
var statearr_15533_17069 = state_15445__$1;
(statearr_15533_17069[(2)] = inst_15423);

(statearr_15533_17069[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (30))){
var state_15445__$1 = state_15445;
var statearr_15534_17074 = state_15445__$1;
(statearr_15534_17074[(2)] = null);

(statearr_15534_17074[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (10))){
var inst_15324 = (state_15445[(15)]);
var inst_15322 = (state_15445[(17)]);
var inst_15332 = cljs.core._nth(inst_15322,inst_15324);
var inst_15333 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15332,(0),null);
var inst_15334 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15332,(1),null);
var state_15445__$1 = (function (){var statearr_15535 = state_15445;
(statearr_15535[(24)] = inst_15333);

return statearr_15535;
})();
if(cljs.core.truth_(inst_15334)){
var statearr_15536_17078 = state_15445__$1;
(statearr_15536_17078[(1)] = (13));

} else {
var statearr_15537_17079 = state_15445__$1;
(statearr_15537_17079[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (18))){
var inst_15371 = (state_15445[(2)]);
var state_15445__$1 = state_15445;
var statearr_15538_17081 = state_15445__$1;
(statearr_15538_17081[(2)] = inst_15371);

(statearr_15538_17081[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (42))){
var state_15445__$1 = state_15445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15445__$1,(45),dchan);
} else {
if((state_val_15446 === (37))){
var inst_15413 = (state_15445[(22)]);
var inst_15312 = (state_15445[(10)]);
var inst_15404 = (state_15445[(23)]);
var inst_15413__$1 = cljs.core.first(inst_15404);
var inst_15414 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_15413__$1,inst_15312,done);
var state_15445__$1 = (function (){var statearr_15539 = state_15445;
(statearr_15539[(22)] = inst_15413__$1);

return statearr_15539;
})();
if(cljs.core.truth_(inst_15414)){
var statearr_15540_17083 = state_15445__$1;
(statearr_15540_17083[(1)] = (39));

} else {
var statearr_15541_17084 = state_15445__$1;
(statearr_15541_17084[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15446 === (8))){
var inst_15323 = (state_15445[(14)]);
var inst_15324 = (state_15445[(15)]);
var inst_15326 = (inst_15324 < inst_15323);
var inst_15327 = inst_15326;
var state_15445__$1 = state_15445;
if(cljs.core.truth_(inst_15327)){
var statearr_15542_17085 = state_15445__$1;
(statearr_15542_17085[(1)] = (10));

} else {
var statearr_15543_17086 = state_15445__$1;
(statearr_15543_17086[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__14414__auto__ = null;
var cljs$core$async$mult_$_state_machine__14414__auto____0 = (function (){
var statearr_15545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15545[(0)] = cljs$core$async$mult_$_state_machine__14414__auto__);

(statearr_15545[(1)] = (1));

return statearr_15545;
});
var cljs$core$async$mult_$_state_machine__14414__auto____1 = (function (state_15445){
while(true){
var ret_value__14415__auto__ = (function (){try{while(true){
var result__14416__auto__ = switch__14413__auto__(state_15445);
if(cljs.core.keyword_identical_QMARK_(result__14416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14416__auto__;
}
break;
}
}catch (e15546){var ex__14417__auto__ = e15546;
var statearr_15547_17087 = state_15445;
(statearr_15547_17087[(2)] = ex__14417__auto__);


if(cljs.core.seq((state_15445[(4)]))){
var statearr_15548_17088 = state_15445;
(statearr_15548_17088[(1)] = cljs.core.first((state_15445[(4)])));

} else {
throw ex__14417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17091 = state_15445;
state_15445 = G__17091;
continue;
} else {
return ret_value__14415__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__14414__auto__ = function(state_15445){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__14414__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__14414__auto____1.call(this,state_15445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__14414__auto____0;
cljs$core$async$mult_$_state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__14414__auto____1;
return cljs$core$async$mult_$_state_machine__14414__auto__;
})()
})();
var state__14549__auto__ = (function (){var statearr_15549 = f__14548__auto__();
(statearr_15549[(6)] = c__14547__auto___16937);

return statearr_15549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14549__auto__);
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
var G__15553 = arguments.length;
switch (G__15553) {
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

var cljs$core$async$Mix$admix_STAR_$dyn_17095 = (function (m,ch){
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
return cljs$core$async$Mix$admix_STAR_$dyn_17095(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_17098 = (function (m,ch){
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
return cljs$core$async$Mix$unmix_STAR_$dyn_17098(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_17102 = (function (m){
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
return cljs$core$async$Mix$unmix_all_STAR_$dyn_17102(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_17104 = (function (m,state_map){
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
return cljs$core$async$Mix$toggle_STAR_$dyn_17104(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_17106 = (function (m,mode){
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
return cljs$core$async$Mix$solo_mode_STAR_$dyn_17106(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___17109 = arguments.length;
var i__5727__auto___17110 = (0);
while(true){
if((i__5727__auto___17110 < len__5726__auto___17109)){
args__5732__auto__.push((arguments[i__5727__auto___17110]));

var G__17111 = (i__5727__auto___17110 + (1));
i__5727__auto___17110 = G__17111;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((3) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5733__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15577){
var map__15578 = p__15577;
var map__15578__$1 = cljs.core.__destructure_map(map__15578);
var opts = map__15578__$1;
var statearr_15579_17112 = state;
(statearr_15579_17112[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_15580_17113 = state;
(statearr_15580_17113[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_15581_17114 = state;
(statearr_15581_17114[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15569){
var G__15570 = cljs.core.first(seq15569);
var seq15569__$1 = cljs.core.next(seq15569);
var G__15571 = cljs.core.first(seq15569__$1);
var seq15569__$2 = cljs.core.next(seq15569__$1);
var G__15572 = cljs.core.first(seq15569__$2);
var seq15569__$3 = cljs.core.next(seq15569__$2);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15570,G__15571,G__15572,seq15569__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15596 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15597){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15597 = meta15597;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15598,meta15597__$1){
var self__ = this;
var _15598__$1 = this;
return (new cljs.core.async.t_cljs$core$async15596(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15597__$1));
}));

(cljs.core.async.t_cljs$core$async15596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15598){
var self__ = this;
var _15598__$1 = this;
return self__.meta15597;
}));

(cljs.core.async.t_cljs$core$async15596.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15596.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async15596.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15596.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15596.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15596.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15596.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15596.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async15596.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15597","meta15597",-1119871165,null)], null);
}));

(cljs.core.async.t_cljs$core$async15596.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15596.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15596");

(cljs.core.async.t_cljs$core$async15596.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15596");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15596.
 */
cljs.core.async.__GT_t_cljs$core$async15596 = (function cljs$core$async$__GT_t_cljs$core$async15596(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15597){
return (new cljs.core.async.t_cljs$core$async15596(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15597));
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
var m = (new cljs.core.async.t_cljs$core$async15596(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__14547__auto___17119 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14548__auto__ = (function (){var switch__14413__auto__ = (function (state_15685){
var state_val_15686 = (state_15685[(1)]);
if((state_val_15686 === (7))){
var inst_15643 = (state_15685[(2)]);
var state_15685__$1 = state_15685;
if(cljs.core.truth_(inst_15643)){
var statearr_15689_17121 = state_15685__$1;
(statearr_15689_17121[(1)] = (8));

} else {
var statearr_15690_17122 = state_15685__$1;
(statearr_15690_17122[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15686 === (20))){
var inst_15636 = (state_15685[(7)]);
var state_15685__$1 = state_15685;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15685__$1,(23),out,inst_15636);
} else {
if((state_val_15686 === (1))){
var inst_15619 = calc_state();
var inst_15620 = cljs.core.__destructure_map(inst_15619);
var inst_15621 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15620,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15622 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15620,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15623 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15620,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15624 = inst_15619;
var state_15685__$1 = (function (){var statearr_15691 = state_15685;
(statearr_15691[(8)] = inst_15621);

(statearr_15691[(9)] = inst_15623);

(statearr_15691[(10)] = inst_15624);

(statearr_15691[(11)] = inst_15622);

return statearr_15691;
})();
var statearr_15692_17123 = state_15685__$1;
(statearr_15692_17123[(2)] = null);

(statearr_15692_17123[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15686 === (24))){
var inst_15627 = (state_15685[(12)]);
var inst_15624 = inst_15627;
var state_15685__$1 = (function (){var statearr_15695 = state_15685;
(statearr_15695[(10)] = inst_15624);

return statearr_15695;
})();
var statearr_15696_17125 = state_15685__$1;
(statearr_15696_17125[(2)] = null);

(statearr_15696_17125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15686 === (4))){
var inst_15638 = (state_15685[(13)]);
var inst_15636 = (state_15685[(7)]);
var inst_15635 = (state_15685[(2)]);
var inst_15636__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15635,(0),null);
var inst_15637 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_15635,(1),null);
var inst_15638__$1 = (inst_15636__$1 == null);
var state_15685__$1 = (function (){var statearr_15697 = state_15685;
(statearr_15697[(14)] = inst_15637);

(statearr_15697[(13)] = inst_15638__$1);

(statearr_15697[(7)] = inst_15636__$1);

return statearr_15697;
})();
if(cljs.core.truth_(inst_15638__$1)){
var statearr_15699_17126 = state_15685__$1;
(statearr_15699_17126[(1)] = (5));

} else {
var statearr_15700_17127 = state_15685__$1;
(statearr_15700_17127[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15686 === (15))){
var inst_15628 = (state_15685[(15)]);
var inst_15659 = (state_15685[(16)]);
var inst_15659__$1 = cljs.core.empty_QMARK_(inst_15628);
var state_15685__$1 = (function (){var statearr_15701 = state_15685;
(statearr_15701[(16)] = inst_15659__$1);

return statearr_15701;
})();
if(inst_15659__$1){
var statearr_15702_17133 = state_15685__$1;
(statearr_15702_17133[(1)] = (17));

} else {
var statearr_15703_17134 = state_15685__$1;
(statearr_15703_17134[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15686 === (21))){
var inst_15627 = (state_15685[(12)]);
var inst_15624 = inst_15627;
var state_15685__$1 = (function (){var statearr_15704 = state_15685;
(statearr_15704[(10)] = inst_15624);

return statearr_15704;
})();
var statearr_15705_17135 = state_15685__$1;
(statearr_15705_17135[(2)] = null);

(statearr_15705_17135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15686 === (13))){
var inst_15652 = (state_15685[(2)]);
var inst_15653 = calc_state();
var inst_15624 = inst_15653;
var state_15685__$1 = (function (){var statearr_15707 = state_15685;
(statearr_15707[(10)] = inst_15624);

(statearr_15707[(17)] = inst_15652);

return statearr_15707;
})();
var statearr_15708_17138 = state_15685__$1;
(statearr_15708_17138[(2)] = null);

(statearr_15708_17138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15686 === (22))){
var inst_15679 = (state_15685[(2)]);
var state_15685__$1 = state_15685;
var statearr_15709_17139 = state_15685__$1;
(statearr_15709_17139[(2)] = inst_15679);

(statearr_15709_17139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15686 === (6))){
var inst_15637 = (state_15685[(14)]);
var inst_15641 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_15637,change);
var state_15685__$1 = state_15685;
var statearr_15710_17140 = state_15685__$1;
(statearr_15710_17140[(2)] = inst_15641);

(statearr_15710_17140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15686 === (25))){
var state_15685__$1 = state_15685;
var statearr_15711_17142 = state_15685__$1;
(statearr_15711_17142[(2)] = null);

(statearr_15711_17142[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15686 === (17))){
var inst_15629 = (state_15685[(18)]);
var inst_15637 = (state_15685[(14)]);
var inst_15661 = (inst_15629.cljs$core$IFn$_invoke$arity$1 ? inst_15629.cljs$core$IFn$_invoke$arity$1(inst_15637) : inst_15629.call(null,inst_15637));
var inst_15662 = cljs.core.not(inst_15661);
var state_15685__$1 = state_15685;
var statearr_15714_17143 = state_15685__$1;
(statearr_15714_17143[(2)] = inst_15662);

(statearr_15714_17143[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15686 === (3))){
var inst_15683 = (state_15685[(2)]);
var state_15685__$1 = state_15685;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15685__$1,inst_15683);
} else {
if((state_val_15686 === (12))){
var state_15685__$1 = state_15685;
var statearr_15715_17145 = state_15685__$1;
(statearr_15715_17145[(2)] = null);

(statearr_15715_17145[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15686 === (2))){
var inst_15624 = (state_15685[(10)]);
var inst_15627 = (state_15685[(12)]);
var inst_15627__$1 = cljs.core.__destructure_map(inst_15624);
var inst_15628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15627__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15629 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15627__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15630 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15627__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15685__$1 = (function (){var statearr_15716 = state_15685;
(statearr_15716[(18)] = inst_15629);

(statearr_15716[(15)] = inst_15628);

(statearr_15716[(12)] = inst_15627__$1);

return statearr_15716;
})();
return cljs.core.async.ioc_alts_BANG_(state_15685__$1,(4),inst_15630);
} else {
if((state_val_15686 === (23))){
var inst_15670 = (state_15685[(2)]);
var state_15685__$1 = state_15685;
if(cljs.core.truth_(inst_15670)){
var statearr_15717_17147 = state_15685__$1;
(statearr_15717_17147[(1)] = (24));

} else {
var statearr_15718_17149 = state_15685__$1;
(statearr_15718_17149[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15686 === (19))){
var inst_15665 = (state_15685[(2)]);
var state_15685__$1 = state_15685;
var statearr_15719_17154 = state_15685__$1;
(statearr_15719_17154[(2)] = inst_15665);

(statearr_15719_17154[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15686 === (11))){
var inst_15637 = (state_15685[(14)]);
var inst_15649 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_15637);
var state_15685__$1 = state_15685;
var statearr_15720_17155 = state_15685__$1;
(statearr_15720_17155[(2)] = inst_15649);

(statearr_15720_17155[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15686 === (9))){
var inst_15656 = (state_15685[(19)]);
var inst_15628 = (state_15685[(15)]);
var inst_15637 = (state_15685[(14)]);
var inst_15656__$1 = (inst_15628.cljs$core$IFn$_invoke$arity$1 ? inst_15628.cljs$core$IFn$_invoke$arity$1(inst_15637) : inst_15628.call(null,inst_15637));
var state_15685__$1 = (function (){var statearr_15721 = state_15685;
(statearr_15721[(19)] = inst_15656__$1);

return statearr_15721;
})();
if(cljs.core.truth_(inst_15656__$1)){
var statearr_15722_17157 = state_15685__$1;
(statearr_15722_17157[(1)] = (14));

} else {
var statearr_15723_17158 = state_15685__$1;
(statearr_15723_17158[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15686 === (5))){
var inst_15638 = (state_15685[(13)]);
var state_15685__$1 = state_15685;
var statearr_15724_17159 = state_15685__$1;
(statearr_15724_17159[(2)] = inst_15638);

(statearr_15724_17159[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15686 === (14))){
var inst_15656 = (state_15685[(19)]);
var state_15685__$1 = state_15685;
var statearr_15725_17160 = state_15685__$1;
(statearr_15725_17160[(2)] = inst_15656);

(statearr_15725_17160[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15686 === (26))){
var inst_15675 = (state_15685[(2)]);
var state_15685__$1 = state_15685;
var statearr_15726_17162 = state_15685__$1;
(statearr_15726_17162[(2)] = inst_15675);

(statearr_15726_17162[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15686 === (16))){
var inst_15667 = (state_15685[(2)]);
var state_15685__$1 = state_15685;
if(cljs.core.truth_(inst_15667)){
var statearr_15727_17163 = state_15685__$1;
(statearr_15727_17163[(1)] = (20));

} else {
var statearr_15728_17164 = state_15685__$1;
(statearr_15728_17164[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15686 === (10))){
var inst_15681 = (state_15685[(2)]);
var state_15685__$1 = state_15685;
var statearr_15729_17165 = state_15685__$1;
(statearr_15729_17165[(2)] = inst_15681);

(statearr_15729_17165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15686 === (18))){
var inst_15659 = (state_15685[(16)]);
var state_15685__$1 = state_15685;
var statearr_15730_17167 = state_15685__$1;
(statearr_15730_17167[(2)] = inst_15659);

(statearr_15730_17167[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15686 === (8))){
var inst_15636 = (state_15685[(7)]);
var inst_15647 = (inst_15636 == null);
var state_15685__$1 = state_15685;
if(cljs.core.truth_(inst_15647)){
var statearr_15735_17168 = state_15685__$1;
(statearr_15735_17168[(1)] = (11));

} else {
var statearr_15736_17169 = state_15685__$1;
(statearr_15736_17169[(1)] = (12));

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
var cljs$core$async$mix_$_state_machine__14414__auto__ = null;
var cljs$core$async$mix_$_state_machine__14414__auto____0 = (function (){
var statearr_15739 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15739[(0)] = cljs$core$async$mix_$_state_machine__14414__auto__);

(statearr_15739[(1)] = (1));

return statearr_15739;
});
var cljs$core$async$mix_$_state_machine__14414__auto____1 = (function (state_15685){
while(true){
var ret_value__14415__auto__ = (function (){try{while(true){
var result__14416__auto__ = switch__14413__auto__(state_15685);
if(cljs.core.keyword_identical_QMARK_(result__14416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14416__auto__;
}
break;
}
}catch (e15740){var ex__14417__auto__ = e15740;
var statearr_15741_17171 = state_15685;
(statearr_15741_17171[(2)] = ex__14417__auto__);


if(cljs.core.seq((state_15685[(4)]))){
var statearr_15742_17172 = state_15685;
(statearr_15742_17172[(1)] = cljs.core.first((state_15685[(4)])));

} else {
throw ex__14417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17173 = state_15685;
state_15685 = G__17173;
continue;
} else {
return ret_value__14415__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__14414__auto__ = function(state_15685){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__14414__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__14414__auto____1.call(this,state_15685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__14414__auto____0;
cljs$core$async$mix_$_state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__14414__auto____1;
return cljs$core$async$mix_$_state_machine__14414__auto__;
})()
})();
var state__14549__auto__ = (function (){var statearr_15747 = f__14548__auto__();
(statearr_15747[(6)] = c__14547__auto___17119);

return statearr_15747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14549__auto__);
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

var cljs$core$async$Pub$sub_STAR_$dyn_17175 = (function (p,v,ch,close_QMARK_){
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
return cljs$core$async$Pub$sub_STAR_$dyn_17175(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_17176 = (function (p,v,ch){
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
return cljs$core$async$Pub$unsub_STAR_$dyn_17176(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_17177 = (function() {
var G__17178 = null;
var G__17178__1 = (function (p){
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
var G__17178__2 = (function (p,v){
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
G__17178 = function(p,v){
switch(arguments.length){
case 1:
return G__17178__1.call(this,p);
case 2:
return G__17178__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__17178.cljs$core$IFn$_invoke$arity$1 = G__17178__1;
G__17178.cljs$core$IFn$_invoke$arity$2 = G__17178__2;
return G__17178;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__15761 = arguments.length;
switch (G__15761) {
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
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17177(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_17177(p,v);
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
cljs.core.async.t_cljs$core$async15766 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15767){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15767 = meta15767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async15766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15768,meta15767__$1){
var self__ = this;
var _15768__$1 = this;
return (new cljs.core.async.t_cljs$core$async15766(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15767__$1));
}));

(cljs.core.async.t_cljs$core$async15766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15768){
var self__ = this;
var _15768__$1 = this;
return self__.meta15767;
}));

(cljs.core.async.t_cljs$core$async15766.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15766.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async15766.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async15766.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async15766.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async15766.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async15766.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async15766.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15767","meta15767",-765110917,null)], null);
}));

(cljs.core.async.t_cljs$core$async15766.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async15766.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15766");

(cljs.core.async.t_cljs$core$async15766.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async15766");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async15766.
 */
cljs.core.async.__GT_t_cljs$core$async15766 = (function cljs$core$async$__GT_t_cljs$core$async15766(ch,topic_fn,buf_fn,mults,ensure_mult,meta15767){
return (new cljs.core.async.t_cljs$core$async15766(ch,topic_fn,buf_fn,mults,ensure_mult,meta15767));
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
var G__15764 = arguments.length;
switch (G__15764) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__15762_SHARP_){
if(cljs.core.truth_((p1__15762_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__15762_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__15762_SHARP_.call(null,topic)))){
return p1__15762_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__15762_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async15766(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__14547__auto___17185 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14548__auto__ = (function (){var switch__14413__auto__ = (function (state_15843){
var state_val_15844 = (state_15843[(1)]);
if((state_val_15844 === (7))){
var inst_15839 = (state_15843[(2)]);
var state_15843__$1 = state_15843;
var statearr_15845_17187 = state_15843__$1;
(statearr_15845_17187[(2)] = inst_15839);

(statearr_15845_17187[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15844 === (20))){
var state_15843__$1 = state_15843;
var statearr_15846_17188 = state_15843__$1;
(statearr_15846_17188[(2)] = null);

(statearr_15846_17188[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15844 === (1))){
var state_15843__$1 = state_15843;
var statearr_15847_17189 = state_15843__$1;
(statearr_15847_17189[(2)] = null);

(statearr_15847_17189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15844 === (24))){
var inst_15822 = (state_15843[(7)]);
var inst_15831 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_15822);
var state_15843__$1 = state_15843;
var statearr_15848_17190 = state_15843__$1;
(statearr_15848_17190[(2)] = inst_15831);

(statearr_15848_17190[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15844 === (4))){
var inst_15772 = (state_15843[(8)]);
var inst_15772__$1 = (state_15843[(2)]);
var inst_15773 = (inst_15772__$1 == null);
var state_15843__$1 = (function (){var statearr_15849 = state_15843;
(statearr_15849[(8)] = inst_15772__$1);

return statearr_15849;
})();
if(cljs.core.truth_(inst_15773)){
var statearr_15850_17191 = state_15843__$1;
(statearr_15850_17191[(1)] = (5));

} else {
var statearr_15851_17192 = state_15843__$1;
(statearr_15851_17192[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15844 === (15))){
var inst_15815 = (state_15843[(2)]);
var state_15843__$1 = state_15843;
var statearr_15853_17193 = state_15843__$1;
(statearr_15853_17193[(2)] = inst_15815);

(statearr_15853_17193[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15844 === (21))){
var inst_15836 = (state_15843[(2)]);
var state_15843__$1 = (function (){var statearr_15854 = state_15843;
(statearr_15854[(9)] = inst_15836);

return statearr_15854;
})();
var statearr_15855_17195 = state_15843__$1;
(statearr_15855_17195[(2)] = null);

(statearr_15855_17195[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15844 === (13))){
var inst_15796 = (state_15843[(10)]);
var inst_15798 = cljs.core.chunked_seq_QMARK_(inst_15796);
var state_15843__$1 = state_15843;
if(inst_15798){
var statearr_15858_17196 = state_15843__$1;
(statearr_15858_17196[(1)] = (16));

} else {
var statearr_15859_17197 = state_15843__$1;
(statearr_15859_17197[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15844 === (22))){
var inst_15828 = (state_15843[(2)]);
var state_15843__$1 = state_15843;
if(cljs.core.truth_(inst_15828)){
var statearr_15861_17198 = state_15843__$1;
(statearr_15861_17198[(1)] = (23));

} else {
var statearr_15862_17199 = state_15843__$1;
(statearr_15862_17199[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15844 === (6))){
var inst_15772 = (state_15843[(8)]);
var inst_15822 = (state_15843[(7)]);
var inst_15824 = (state_15843[(11)]);
var inst_15822__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_15772) : topic_fn.call(null,inst_15772));
var inst_15823 = cljs.core.deref(mults);
var inst_15824__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_15823,inst_15822__$1);
var state_15843__$1 = (function (){var statearr_15864 = state_15843;
(statearr_15864[(7)] = inst_15822__$1);

(statearr_15864[(11)] = inst_15824__$1);

return statearr_15864;
})();
if(cljs.core.truth_(inst_15824__$1)){
var statearr_15865_17200 = state_15843__$1;
(statearr_15865_17200[(1)] = (19));

} else {
var statearr_15866_17201 = state_15843__$1;
(statearr_15866_17201[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15844 === (25))){
var inst_15833 = (state_15843[(2)]);
var state_15843__$1 = state_15843;
var statearr_15867_17202 = state_15843__$1;
(statearr_15867_17202[(2)] = inst_15833);

(statearr_15867_17202[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15844 === (17))){
var inst_15796 = (state_15843[(10)]);
var inst_15806 = cljs.core.first(inst_15796);
var inst_15807 = cljs.core.async.muxch_STAR_(inst_15806);
var inst_15808 = cljs.core.async.close_BANG_(inst_15807);
var inst_15809 = cljs.core.next(inst_15796);
var inst_15782 = inst_15809;
var inst_15783 = null;
var inst_15784 = (0);
var inst_15785 = (0);
var state_15843__$1 = (function (){var statearr_15868 = state_15843;
(statearr_15868[(12)] = inst_15782);

(statearr_15868[(13)] = inst_15783);

(statearr_15868[(14)] = inst_15784);

(statearr_15868[(15)] = inst_15808);

(statearr_15868[(16)] = inst_15785);

return statearr_15868;
})();
var statearr_15869_17203 = state_15843__$1;
(statearr_15869_17203[(2)] = null);

(statearr_15869_17203[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15844 === (3))){
var inst_15841 = (state_15843[(2)]);
var state_15843__$1 = state_15843;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15843__$1,inst_15841);
} else {
if((state_val_15844 === (12))){
var inst_15817 = (state_15843[(2)]);
var state_15843__$1 = state_15843;
var statearr_15870_17204 = state_15843__$1;
(statearr_15870_17204[(2)] = inst_15817);

(statearr_15870_17204[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15844 === (2))){
var state_15843__$1 = state_15843;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15843__$1,(4),ch);
} else {
if((state_val_15844 === (23))){
var state_15843__$1 = state_15843;
var statearr_15871_17205 = state_15843__$1;
(statearr_15871_17205[(2)] = null);

(statearr_15871_17205[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15844 === (19))){
var inst_15772 = (state_15843[(8)]);
var inst_15824 = (state_15843[(11)]);
var inst_15826 = cljs.core.async.muxch_STAR_(inst_15824);
var state_15843__$1 = state_15843;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15843__$1,(22),inst_15826,inst_15772);
} else {
if((state_val_15844 === (11))){
var inst_15782 = (state_15843[(12)]);
var inst_15796 = (state_15843[(10)]);
var inst_15796__$1 = cljs.core.seq(inst_15782);
var state_15843__$1 = (function (){var statearr_15873 = state_15843;
(statearr_15873[(10)] = inst_15796__$1);

return statearr_15873;
})();
if(inst_15796__$1){
var statearr_15874_17206 = state_15843__$1;
(statearr_15874_17206[(1)] = (13));

} else {
var statearr_15876_17207 = state_15843__$1;
(statearr_15876_17207[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15844 === (9))){
var inst_15819 = (state_15843[(2)]);
var state_15843__$1 = state_15843;
var statearr_15878_17208 = state_15843__$1;
(statearr_15878_17208[(2)] = inst_15819);

(statearr_15878_17208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15844 === (5))){
var inst_15779 = cljs.core.deref(mults);
var inst_15780 = cljs.core.vals(inst_15779);
var inst_15781 = cljs.core.seq(inst_15780);
var inst_15782 = inst_15781;
var inst_15783 = null;
var inst_15784 = (0);
var inst_15785 = (0);
var state_15843__$1 = (function (){var statearr_15879 = state_15843;
(statearr_15879[(12)] = inst_15782);

(statearr_15879[(13)] = inst_15783);

(statearr_15879[(14)] = inst_15784);

(statearr_15879[(16)] = inst_15785);

return statearr_15879;
})();
var statearr_15880_17209 = state_15843__$1;
(statearr_15880_17209[(2)] = null);

(statearr_15880_17209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15844 === (14))){
var state_15843__$1 = state_15843;
var statearr_15884_17210 = state_15843__$1;
(statearr_15884_17210[(2)] = null);

(statearr_15884_17210[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15844 === (16))){
var inst_15796 = (state_15843[(10)]);
var inst_15800 = cljs.core.chunk_first(inst_15796);
var inst_15801 = cljs.core.chunk_rest(inst_15796);
var inst_15802 = cljs.core.count(inst_15800);
var inst_15782 = inst_15801;
var inst_15783 = inst_15800;
var inst_15784 = inst_15802;
var inst_15785 = (0);
var state_15843__$1 = (function (){var statearr_15885 = state_15843;
(statearr_15885[(12)] = inst_15782);

(statearr_15885[(13)] = inst_15783);

(statearr_15885[(14)] = inst_15784);

(statearr_15885[(16)] = inst_15785);

return statearr_15885;
})();
var statearr_15886_17211 = state_15843__$1;
(statearr_15886_17211[(2)] = null);

(statearr_15886_17211[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15844 === (10))){
var inst_15782 = (state_15843[(12)]);
var inst_15783 = (state_15843[(13)]);
var inst_15784 = (state_15843[(14)]);
var inst_15785 = (state_15843[(16)]);
var inst_15790 = cljs.core._nth(inst_15783,inst_15785);
var inst_15791 = cljs.core.async.muxch_STAR_(inst_15790);
var inst_15792 = cljs.core.async.close_BANG_(inst_15791);
var inst_15793 = (inst_15785 + (1));
var tmp15881 = inst_15782;
var tmp15882 = inst_15783;
var tmp15883 = inst_15784;
var inst_15782__$1 = tmp15881;
var inst_15783__$1 = tmp15882;
var inst_15784__$1 = tmp15883;
var inst_15785__$1 = inst_15793;
var state_15843__$1 = (function (){var statearr_15887 = state_15843;
(statearr_15887[(12)] = inst_15782__$1);

(statearr_15887[(17)] = inst_15792);

(statearr_15887[(13)] = inst_15783__$1);

(statearr_15887[(14)] = inst_15784__$1);

(statearr_15887[(16)] = inst_15785__$1);

return statearr_15887;
})();
var statearr_15892_17212 = state_15843__$1;
(statearr_15892_17212[(2)] = null);

(statearr_15892_17212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15844 === (18))){
var inst_15812 = (state_15843[(2)]);
var state_15843__$1 = state_15843;
var statearr_15897_17213 = state_15843__$1;
(statearr_15897_17213[(2)] = inst_15812);

(statearr_15897_17213[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15844 === (8))){
var inst_15784 = (state_15843[(14)]);
var inst_15785 = (state_15843[(16)]);
var inst_15787 = (inst_15785 < inst_15784);
var inst_15788 = inst_15787;
var state_15843__$1 = state_15843;
if(cljs.core.truth_(inst_15788)){
var statearr_15902_17214 = state_15843__$1;
(statearr_15902_17214[(1)] = (10));

} else {
var statearr_15903_17215 = state_15843__$1;
(statearr_15903_17215[(1)] = (11));

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
var cljs$core$async$state_machine__14414__auto__ = null;
var cljs$core$async$state_machine__14414__auto____0 = (function (){
var statearr_15904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15904[(0)] = cljs$core$async$state_machine__14414__auto__);

(statearr_15904[(1)] = (1));

return statearr_15904;
});
var cljs$core$async$state_machine__14414__auto____1 = (function (state_15843){
while(true){
var ret_value__14415__auto__ = (function (){try{while(true){
var result__14416__auto__ = switch__14413__auto__(state_15843);
if(cljs.core.keyword_identical_QMARK_(result__14416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14416__auto__;
}
break;
}
}catch (e15905){var ex__14417__auto__ = e15905;
var statearr_15906_17216 = state_15843;
(statearr_15906_17216[(2)] = ex__14417__auto__);


if(cljs.core.seq((state_15843[(4)]))){
var statearr_15907_17217 = state_15843;
(statearr_15907_17217[(1)] = cljs.core.first((state_15843[(4)])));

} else {
throw ex__14417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17218 = state_15843;
state_15843 = G__17218;
continue;
} else {
return ret_value__14415__auto__;
}
break;
}
});
cljs$core$async$state_machine__14414__auto__ = function(state_15843){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14414__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14414__auto____1.call(this,state_15843);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14414__auto____0;
cljs$core$async$state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14414__auto____1;
return cljs$core$async$state_machine__14414__auto__;
})()
})();
var state__14549__auto__ = (function (){var statearr_15908 = f__14548__auto__();
(statearr_15908[(6)] = c__14547__auto___17185);

return statearr_15908;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14549__auto__);
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
var G__15910 = arguments.length;
switch (G__15910) {
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
var G__15915 = arguments.length;
switch (G__15915) {
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
var G__15921 = arguments.length;
switch (G__15921) {
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
var c__14547__auto___17229 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14548__auto__ = (function (){var switch__14413__auto__ = (function (state_15968){
var state_val_15969 = (state_15968[(1)]);
if((state_val_15969 === (7))){
var state_15968__$1 = state_15968;
var statearr_15971_17230 = state_15968__$1;
(statearr_15971_17230[(2)] = null);

(statearr_15971_17230[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (1))){
var state_15968__$1 = state_15968;
var statearr_15972_17231 = state_15968__$1;
(statearr_15972_17231[(2)] = null);

(statearr_15972_17231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (4))){
var inst_15929 = (state_15968[(7)]);
var inst_15928 = (state_15968[(8)]);
var inst_15931 = (inst_15929 < inst_15928);
var state_15968__$1 = state_15968;
if(cljs.core.truth_(inst_15931)){
var statearr_15973_17232 = state_15968__$1;
(statearr_15973_17232[(1)] = (6));

} else {
var statearr_15974_17233 = state_15968__$1;
(statearr_15974_17233[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (15))){
var inst_15954 = (state_15968[(9)]);
var inst_15959 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_15954);
var state_15968__$1 = state_15968;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_15968__$1,(17),out,inst_15959);
} else {
if((state_val_15969 === (13))){
var inst_15954 = (state_15968[(9)]);
var inst_15954__$1 = (state_15968[(2)]);
var inst_15955 = cljs.core.some(cljs.core.nil_QMARK_,inst_15954__$1);
var state_15968__$1 = (function (){var statearr_15978 = state_15968;
(statearr_15978[(9)] = inst_15954__$1);

return statearr_15978;
})();
if(cljs.core.truth_(inst_15955)){
var statearr_15979_17235 = state_15968__$1;
(statearr_15979_17235[(1)] = (14));

} else {
var statearr_15981_17236 = state_15968__$1;
(statearr_15981_17236[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (6))){
var state_15968__$1 = state_15968;
var statearr_15982_17237 = state_15968__$1;
(statearr_15982_17237[(2)] = null);

(statearr_15982_17237[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (17))){
var inst_15961 = (state_15968[(2)]);
var state_15968__$1 = (function (){var statearr_15984 = state_15968;
(statearr_15984[(10)] = inst_15961);

return statearr_15984;
})();
var statearr_15985_17238 = state_15968__$1;
(statearr_15985_17238[(2)] = null);

(statearr_15985_17238[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (3))){
var inst_15966 = (state_15968[(2)]);
var state_15968__$1 = state_15968;
return cljs.core.async.impl.ioc_helpers.return_chan(state_15968__$1,inst_15966);
} else {
if((state_val_15969 === (12))){
var _ = (function (){var statearr_15986 = state_15968;
(statearr_15986[(4)] = cljs.core.rest((state_15968[(4)])));

return statearr_15986;
})();
var state_15968__$1 = state_15968;
var ex15983 = (state_15968__$1[(2)]);
var statearr_15987_17243 = state_15968__$1;
(statearr_15987_17243[(5)] = ex15983);


if((ex15983 instanceof Object)){
var statearr_15988_17244 = state_15968__$1;
(statearr_15988_17244[(1)] = (11));

(statearr_15988_17244[(5)] = null);

} else {
throw ex15983;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (2))){
var inst_15927 = cljs.core.reset_BANG_(dctr,cnt);
var inst_15928 = cnt;
var inst_15929 = (0);
var state_15968__$1 = (function (){var statearr_15989 = state_15968;
(statearr_15989[(7)] = inst_15929);

(statearr_15989[(8)] = inst_15928);

(statearr_15989[(11)] = inst_15927);

return statearr_15989;
})();
var statearr_15990_17245 = state_15968__$1;
(statearr_15990_17245[(2)] = null);

(statearr_15990_17245[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (11))){
var inst_15933 = (state_15968[(2)]);
var inst_15934 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_15968__$1 = (function (){var statearr_15991 = state_15968;
(statearr_15991[(12)] = inst_15933);

return statearr_15991;
})();
var statearr_15992_17246 = state_15968__$1;
(statearr_15992_17246[(2)] = inst_15934);

(statearr_15992_17246[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (9))){
var inst_15929 = (state_15968[(7)]);
var _ = (function (){var statearr_15993 = state_15968;
(statearr_15993[(4)] = cljs.core.cons((12),(state_15968[(4)])));

return statearr_15993;
})();
var inst_15940 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_15929) : chs__$1.call(null,inst_15929));
var inst_15941 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_15929) : done.call(null,inst_15929));
var inst_15942 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_15940,inst_15941);
var ___$1 = (function (){var statearr_15994 = state_15968;
(statearr_15994[(4)] = cljs.core.rest((state_15968[(4)])));

return statearr_15994;
})();
var state_15968__$1 = state_15968;
var statearr_15995_17247 = state_15968__$1;
(statearr_15995_17247[(2)] = inst_15942);

(statearr_15995_17247[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (5))){
var inst_15952 = (state_15968[(2)]);
var state_15968__$1 = (function (){var statearr_15996 = state_15968;
(statearr_15996[(13)] = inst_15952);

return statearr_15996;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_15968__$1,(13),dchan);
} else {
if((state_val_15969 === (14))){
var inst_15957 = cljs.core.async.close_BANG_(out);
var state_15968__$1 = state_15968;
var statearr_15997_17248 = state_15968__$1;
(statearr_15997_17248[(2)] = inst_15957);

(statearr_15997_17248[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (16))){
var inst_15964 = (state_15968[(2)]);
var state_15968__$1 = state_15968;
var statearr_15998_17249 = state_15968__$1;
(statearr_15998_17249[(2)] = inst_15964);

(statearr_15998_17249[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (10))){
var inst_15929 = (state_15968[(7)]);
var inst_15945 = (state_15968[(2)]);
var inst_15946 = (inst_15929 + (1));
var inst_15929__$1 = inst_15946;
var state_15968__$1 = (function (){var statearr_15999 = state_15968;
(statearr_15999[(7)] = inst_15929__$1);

(statearr_15999[(14)] = inst_15945);

return statearr_15999;
})();
var statearr_16000_17250 = state_15968__$1;
(statearr_16000_17250[(2)] = null);

(statearr_16000_17250[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15969 === (8))){
var inst_15950 = (state_15968[(2)]);
var state_15968__$1 = state_15968;
var statearr_16001_17251 = state_15968__$1;
(statearr_16001_17251[(2)] = inst_15950);

(statearr_16001_17251[(1)] = (5));


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
var cljs$core$async$state_machine__14414__auto__ = null;
var cljs$core$async$state_machine__14414__auto____0 = (function (){
var statearr_16003 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16003[(0)] = cljs$core$async$state_machine__14414__auto__);

(statearr_16003[(1)] = (1));

return statearr_16003;
});
var cljs$core$async$state_machine__14414__auto____1 = (function (state_15968){
while(true){
var ret_value__14415__auto__ = (function (){try{while(true){
var result__14416__auto__ = switch__14413__auto__(state_15968);
if(cljs.core.keyword_identical_QMARK_(result__14416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14416__auto__;
}
break;
}
}catch (e16005){var ex__14417__auto__ = e16005;
var statearr_16007_17252 = state_15968;
(statearr_16007_17252[(2)] = ex__14417__auto__);


if(cljs.core.seq((state_15968[(4)]))){
var statearr_16008_17253 = state_15968;
(statearr_16008_17253[(1)] = cljs.core.first((state_15968[(4)])));

} else {
throw ex__14417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17254 = state_15968;
state_15968 = G__17254;
continue;
} else {
return ret_value__14415__auto__;
}
break;
}
});
cljs$core$async$state_machine__14414__auto__ = function(state_15968){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14414__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14414__auto____1.call(this,state_15968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14414__auto____0;
cljs$core$async$state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14414__auto____1;
return cljs$core$async$state_machine__14414__auto__;
})()
})();
var state__14549__auto__ = (function (){var statearr_16009 = f__14548__auto__();
(statearr_16009[(6)] = c__14547__auto___17229);

return statearr_16009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14549__auto__);
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
var G__16012 = arguments.length;
switch (G__16012) {
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
var c__14547__auto___17256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14548__auto__ = (function (){var switch__14413__auto__ = (function (state_16044){
var state_val_16045 = (state_16044[(1)]);
if((state_val_16045 === (7))){
var inst_16024 = (state_16044[(7)]);
var inst_16023 = (state_16044[(8)]);
var inst_16023__$1 = (state_16044[(2)]);
var inst_16024__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16023__$1,(0),null);
var inst_16025 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_16023__$1,(1),null);
var inst_16026 = (inst_16024__$1 == null);
var state_16044__$1 = (function (){var statearr_16046 = state_16044;
(statearr_16046[(9)] = inst_16025);

(statearr_16046[(7)] = inst_16024__$1);

(statearr_16046[(8)] = inst_16023__$1);

return statearr_16046;
})();
if(cljs.core.truth_(inst_16026)){
var statearr_16047_17258 = state_16044__$1;
(statearr_16047_17258[(1)] = (8));

} else {
var statearr_16049_17260 = state_16044__$1;
(statearr_16049_17260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16045 === (1))){
var inst_16013 = cljs.core.vec(chs);
var inst_16014 = inst_16013;
var state_16044__$1 = (function (){var statearr_16050 = state_16044;
(statearr_16050[(10)] = inst_16014);

return statearr_16050;
})();
var statearr_16051_17261 = state_16044__$1;
(statearr_16051_17261[(2)] = null);

(statearr_16051_17261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16045 === (4))){
var inst_16014 = (state_16044[(10)]);
var state_16044__$1 = state_16044;
return cljs.core.async.ioc_alts_BANG_(state_16044__$1,(7),inst_16014);
} else {
if((state_val_16045 === (6))){
var inst_16040 = (state_16044[(2)]);
var state_16044__$1 = state_16044;
var statearr_16052_17262 = state_16044__$1;
(statearr_16052_17262[(2)] = inst_16040);

(statearr_16052_17262[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16045 === (3))){
var inst_16042 = (state_16044[(2)]);
var state_16044__$1 = state_16044;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16044__$1,inst_16042);
} else {
if((state_val_16045 === (2))){
var inst_16014 = (state_16044[(10)]);
var inst_16016 = cljs.core.count(inst_16014);
var inst_16017 = (inst_16016 > (0));
var state_16044__$1 = state_16044;
if(cljs.core.truth_(inst_16017)){
var statearr_16055_17263 = state_16044__$1;
(statearr_16055_17263[(1)] = (4));

} else {
var statearr_16056_17264 = state_16044__$1;
(statearr_16056_17264[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16045 === (11))){
var inst_16014 = (state_16044[(10)]);
var inst_16033 = (state_16044[(2)]);
var tmp16053 = inst_16014;
var inst_16014__$1 = tmp16053;
var state_16044__$1 = (function (){var statearr_16058 = state_16044;
(statearr_16058[(11)] = inst_16033);

(statearr_16058[(10)] = inst_16014__$1);

return statearr_16058;
})();
var statearr_16060_17265 = state_16044__$1;
(statearr_16060_17265[(2)] = null);

(statearr_16060_17265[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16045 === (9))){
var inst_16024 = (state_16044[(7)]);
var state_16044__$1 = state_16044;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16044__$1,(11),out,inst_16024);
} else {
if((state_val_16045 === (5))){
var inst_16038 = cljs.core.async.close_BANG_(out);
var state_16044__$1 = state_16044;
var statearr_16061_17267 = state_16044__$1;
(statearr_16061_17267[(2)] = inst_16038);

(statearr_16061_17267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16045 === (10))){
var inst_16036 = (state_16044[(2)]);
var state_16044__$1 = state_16044;
var statearr_16062_17269 = state_16044__$1;
(statearr_16062_17269[(2)] = inst_16036);

(statearr_16062_17269[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16045 === (8))){
var inst_16025 = (state_16044[(9)]);
var inst_16024 = (state_16044[(7)]);
var inst_16023 = (state_16044[(8)]);
var inst_16014 = (state_16044[(10)]);
var inst_16028 = (function (){var cs = inst_16014;
var vec__16019 = inst_16023;
var v = inst_16024;
var c = inst_16025;
return (function (p1__16010_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__16010_SHARP_);
});
})();
var inst_16029 = cljs.core.filterv(inst_16028,inst_16014);
var inst_16014__$1 = inst_16029;
var state_16044__$1 = (function (){var statearr_16063 = state_16044;
(statearr_16063[(10)] = inst_16014__$1);

return statearr_16063;
})();
var statearr_16064_17271 = state_16044__$1;
(statearr_16064_17271[(2)] = null);

(statearr_16064_17271[(1)] = (2));


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
var cljs$core$async$state_machine__14414__auto__ = null;
var cljs$core$async$state_machine__14414__auto____0 = (function (){
var statearr_16065 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16065[(0)] = cljs$core$async$state_machine__14414__auto__);

(statearr_16065[(1)] = (1));

return statearr_16065;
});
var cljs$core$async$state_machine__14414__auto____1 = (function (state_16044){
while(true){
var ret_value__14415__auto__ = (function (){try{while(true){
var result__14416__auto__ = switch__14413__auto__(state_16044);
if(cljs.core.keyword_identical_QMARK_(result__14416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14416__auto__;
}
break;
}
}catch (e16066){var ex__14417__auto__ = e16066;
var statearr_16067_17272 = state_16044;
(statearr_16067_17272[(2)] = ex__14417__auto__);


if(cljs.core.seq((state_16044[(4)]))){
var statearr_16068_17273 = state_16044;
(statearr_16068_17273[(1)] = cljs.core.first((state_16044[(4)])));

} else {
throw ex__14417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17275 = state_16044;
state_16044 = G__17275;
continue;
} else {
return ret_value__14415__auto__;
}
break;
}
});
cljs$core$async$state_machine__14414__auto__ = function(state_16044){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14414__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14414__auto____1.call(this,state_16044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14414__auto____0;
cljs$core$async$state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14414__auto____1;
return cljs$core$async$state_machine__14414__auto__;
})()
})();
var state__14549__auto__ = (function (){var statearr_16069 = f__14548__auto__();
(statearr_16069[(6)] = c__14547__auto___17256);

return statearr_16069;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14549__auto__);
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
var G__16071 = arguments.length;
switch (G__16071) {
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
var c__14547__auto___17278 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14548__auto__ = (function (){var switch__14413__auto__ = (function (state_16096){
var state_val_16097 = (state_16096[(1)]);
if((state_val_16097 === (7))){
var inst_16078 = (state_16096[(7)]);
var inst_16078__$1 = (state_16096[(2)]);
var inst_16079 = (inst_16078__$1 == null);
var inst_16080 = cljs.core.not(inst_16079);
var state_16096__$1 = (function (){var statearr_16098 = state_16096;
(statearr_16098[(7)] = inst_16078__$1);

return statearr_16098;
})();
if(inst_16080){
var statearr_16099_17279 = state_16096__$1;
(statearr_16099_17279[(1)] = (8));

} else {
var statearr_16100_17280 = state_16096__$1;
(statearr_16100_17280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (1))){
var inst_16072 = (0);
var state_16096__$1 = (function (){var statearr_16101 = state_16096;
(statearr_16101[(8)] = inst_16072);

return statearr_16101;
})();
var statearr_16102_17281 = state_16096__$1;
(statearr_16102_17281[(2)] = null);

(statearr_16102_17281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (4))){
var state_16096__$1 = state_16096;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16096__$1,(7),ch);
} else {
if((state_val_16097 === (6))){
var inst_16091 = (state_16096[(2)]);
var state_16096__$1 = state_16096;
var statearr_16103_17282 = state_16096__$1;
(statearr_16103_17282[(2)] = inst_16091);

(statearr_16103_17282[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (3))){
var inst_16093 = (state_16096[(2)]);
var inst_16094 = cljs.core.async.close_BANG_(out);
var state_16096__$1 = (function (){var statearr_16104 = state_16096;
(statearr_16104[(9)] = inst_16093);

return statearr_16104;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16096__$1,inst_16094);
} else {
if((state_val_16097 === (2))){
var inst_16072 = (state_16096[(8)]);
var inst_16075 = (inst_16072 < n);
var state_16096__$1 = state_16096;
if(cljs.core.truth_(inst_16075)){
var statearr_16105_17283 = state_16096__$1;
(statearr_16105_17283[(1)] = (4));

} else {
var statearr_16106_17286 = state_16096__$1;
(statearr_16106_17286[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (11))){
var inst_16072 = (state_16096[(8)]);
var inst_16083 = (state_16096[(2)]);
var inst_16084 = (inst_16072 + (1));
var inst_16072__$1 = inst_16084;
var state_16096__$1 = (function (){var statearr_16107 = state_16096;
(statearr_16107[(8)] = inst_16072__$1);

(statearr_16107[(10)] = inst_16083);

return statearr_16107;
})();
var statearr_16108_17287 = state_16096__$1;
(statearr_16108_17287[(2)] = null);

(statearr_16108_17287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (9))){
var state_16096__$1 = state_16096;
var statearr_16109_17291 = state_16096__$1;
(statearr_16109_17291[(2)] = null);

(statearr_16109_17291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (5))){
var state_16096__$1 = state_16096;
var statearr_16110_17292 = state_16096__$1;
(statearr_16110_17292[(2)] = null);

(statearr_16110_17292[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (10))){
var inst_16088 = (state_16096[(2)]);
var state_16096__$1 = state_16096;
var statearr_16111_17293 = state_16096__$1;
(statearr_16111_17293[(2)] = inst_16088);

(statearr_16111_17293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16097 === (8))){
var inst_16078 = (state_16096[(7)]);
var state_16096__$1 = state_16096;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16096__$1,(11),out,inst_16078);
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
var cljs$core$async$state_machine__14414__auto__ = null;
var cljs$core$async$state_machine__14414__auto____0 = (function (){
var statearr_16112 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16112[(0)] = cljs$core$async$state_machine__14414__auto__);

(statearr_16112[(1)] = (1));

return statearr_16112;
});
var cljs$core$async$state_machine__14414__auto____1 = (function (state_16096){
while(true){
var ret_value__14415__auto__ = (function (){try{while(true){
var result__14416__auto__ = switch__14413__auto__(state_16096);
if(cljs.core.keyword_identical_QMARK_(result__14416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14416__auto__;
}
break;
}
}catch (e16113){var ex__14417__auto__ = e16113;
var statearr_16114_17294 = state_16096;
(statearr_16114_17294[(2)] = ex__14417__auto__);


if(cljs.core.seq((state_16096[(4)]))){
var statearr_16115_17295 = state_16096;
(statearr_16115_17295[(1)] = cljs.core.first((state_16096[(4)])));

} else {
throw ex__14417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17296 = state_16096;
state_16096 = G__17296;
continue;
} else {
return ret_value__14415__auto__;
}
break;
}
});
cljs$core$async$state_machine__14414__auto__ = function(state_16096){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14414__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14414__auto____1.call(this,state_16096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14414__auto____0;
cljs$core$async$state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14414__auto____1;
return cljs$core$async$state_machine__14414__auto__;
})()
})();
var state__14549__auto__ = (function (){var statearr_16120 = f__14548__auto__();
(statearr_16120[(6)] = c__14547__auto___17278);

return statearr_16120;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14549__auto__);
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
cljs.core.async.t_cljs$core$async16135 = (function (f,ch,meta16131,_,fn1,meta16136){
this.f = f;
this.ch = ch;
this.meta16131 = meta16131;
this._ = _;
this.fn1 = fn1;
this.meta16136 = meta16136;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16137,meta16136__$1){
var self__ = this;
var _16137__$1 = this;
return (new cljs.core.async.t_cljs$core$async16135(self__.f,self__.ch,self__.meta16131,self__._,self__.fn1,meta16136__$1));
}));

(cljs.core.async.t_cljs$core$async16135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16137){
var self__ = this;
var _16137__$1 = this;
return self__.meta16136;
}));

(cljs.core.async.t_cljs$core$async16135.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16135.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async16135.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async16135.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__16129_SHARP_){
var G__16138 = (((p1__16129_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__16129_SHARP_) : self__.f.call(null,p1__16129_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__16138) : f1.call(null,G__16138));
});
}));

(cljs.core.async.t_cljs$core$async16135.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16131","meta16131",-1630893665,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16130","cljs.core.async/t_cljs$core$async16130",831824589,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16136","meta16136",-1280763079,null)], null);
}));

(cljs.core.async.t_cljs$core$async16135.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16135.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16135");

(cljs.core.async.t_cljs$core$async16135.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16135");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16135.
 */
cljs.core.async.__GT_t_cljs$core$async16135 = (function cljs$core$async$__GT_t_cljs$core$async16135(f,ch,meta16131,_,fn1,meta16136){
return (new cljs.core.async.t_cljs$core$async16135(f,ch,meta16131,_,fn1,meta16136));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16130 = (function (f,ch,meta16131){
this.f = f;
this.ch = ch;
this.meta16131 = meta16131;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16132,meta16131__$1){
var self__ = this;
var _16132__$1 = this;
return (new cljs.core.async.t_cljs$core$async16130(self__.f,self__.ch,meta16131__$1));
}));

(cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16132){
var self__ = this;
var _16132__$1 = this;
return self__.meta16131;
}));

(cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async16135(self__.f,self__.ch,self__.meta16131,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5000__auto__ = ret;
if(cljs.core.truth_(and__5000__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5000__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__16142 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__16142) : self__.f.call(null,G__16142));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16130.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async16130.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16131","meta16131",-1630893665,null)], null);
}));

(cljs.core.async.t_cljs$core$async16130.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16130.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16130");

(cljs.core.async.t_cljs$core$async16130.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16130");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16130.
 */
cljs.core.async.__GT_t_cljs$core$async16130 = (function cljs$core$async$__GT_t_cljs$core$async16130(f,ch,meta16131){
return (new cljs.core.async.t_cljs$core$async16130(f,ch,meta16131));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16130(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16152 = (function (f,ch,meta16153){
this.f = f;
this.ch = ch;
this.meta16153 = meta16153;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16152.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16154,meta16153__$1){
var self__ = this;
var _16154__$1 = this;
return (new cljs.core.async.t_cljs$core$async16152(self__.f,self__.ch,meta16153__$1));
}));

(cljs.core.async.t_cljs$core$async16152.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16154){
var self__ = this;
var _16154__$1 = this;
return self__.meta16153;
}));

(cljs.core.async.t_cljs$core$async16152.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16152.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16152.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16152.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16152.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16152.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async16152.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16153","meta16153",1263474090,null)], null);
}));

(cljs.core.async.t_cljs$core$async16152.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16152.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16152");

(cljs.core.async.t_cljs$core$async16152.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16152");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16152.
 */
cljs.core.async.__GT_t_cljs$core$async16152 = (function cljs$core$async$__GT_t_cljs$core$async16152(f,ch,meta16153){
return (new cljs.core.async.t_cljs$core$async16152(f,ch,meta16153));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async16152(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16171 = (function (p,ch,meta16172){
this.p = p;
this.ch = ch;
this.meta16172 = meta16172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async16171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16173,meta16172__$1){
var self__ = this;
var _16173__$1 = this;
return (new cljs.core.async.t_cljs$core$async16171(self__.p,self__.ch,meta16172__$1));
}));

(cljs.core.async.t_cljs$core$async16171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16173){
var self__ = this;
var _16173__$1 = this;
return self__.meta16172;
}));

(cljs.core.async.t_cljs$core$async16171.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16171.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16171.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async16171.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16171.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async16171.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async16171.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async16171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16172","meta16172",-171069597,null)], null);
}));

(cljs.core.async.t_cljs$core$async16171.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async16171.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16171");

(cljs.core.async.t_cljs$core$async16171.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"cljs.core.async/t_cljs$core$async16171");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async16171.
 */
cljs.core.async.__GT_t_cljs$core$async16171 = (function cljs$core$async$__GT_t_cljs$core$async16171(p,ch,meta16172){
return (new cljs.core.async.t_cljs$core$async16171(p,ch,meta16172));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async16171(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__16182 = arguments.length;
switch (G__16182) {
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
var c__14547__auto___17341 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14548__auto__ = (function (){var switch__14413__auto__ = (function (state_16205){
var state_val_16206 = (state_16205[(1)]);
if((state_val_16206 === (7))){
var inst_16201 = (state_16205[(2)]);
var state_16205__$1 = state_16205;
var statearr_16207_17342 = state_16205__$1;
(statearr_16207_17342[(2)] = inst_16201);

(statearr_16207_17342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16206 === (1))){
var state_16205__$1 = state_16205;
var statearr_16208_17343 = state_16205__$1;
(statearr_16208_17343[(2)] = null);

(statearr_16208_17343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16206 === (4))){
var inst_16186 = (state_16205[(7)]);
var inst_16186__$1 = (state_16205[(2)]);
var inst_16187 = (inst_16186__$1 == null);
var state_16205__$1 = (function (){var statearr_16209 = state_16205;
(statearr_16209[(7)] = inst_16186__$1);

return statearr_16209;
})();
if(cljs.core.truth_(inst_16187)){
var statearr_16210_17344 = state_16205__$1;
(statearr_16210_17344[(1)] = (5));

} else {
var statearr_16211_17345 = state_16205__$1;
(statearr_16211_17345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16206 === (6))){
var inst_16186 = (state_16205[(7)]);
var inst_16191 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_16186) : p.call(null,inst_16186));
var state_16205__$1 = state_16205;
if(cljs.core.truth_(inst_16191)){
var statearr_16212_17349 = state_16205__$1;
(statearr_16212_17349[(1)] = (8));

} else {
var statearr_16213_17350 = state_16205__$1;
(statearr_16213_17350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16206 === (3))){
var inst_16203 = (state_16205[(2)]);
var state_16205__$1 = state_16205;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16205__$1,inst_16203);
} else {
if((state_val_16206 === (2))){
var state_16205__$1 = state_16205;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16205__$1,(4),ch);
} else {
if((state_val_16206 === (11))){
var inst_16195 = (state_16205[(2)]);
var state_16205__$1 = state_16205;
var statearr_16214_17352 = state_16205__$1;
(statearr_16214_17352[(2)] = inst_16195);

(statearr_16214_17352[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16206 === (9))){
var state_16205__$1 = state_16205;
var statearr_16215_17353 = state_16205__$1;
(statearr_16215_17353[(2)] = null);

(statearr_16215_17353[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16206 === (5))){
var inst_16189 = cljs.core.async.close_BANG_(out);
var state_16205__$1 = state_16205;
var statearr_16218_17354 = state_16205__$1;
(statearr_16218_17354[(2)] = inst_16189);

(statearr_16218_17354[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16206 === (10))){
var inst_16198 = (state_16205[(2)]);
var state_16205__$1 = (function (){var statearr_16220 = state_16205;
(statearr_16220[(8)] = inst_16198);

return statearr_16220;
})();
var statearr_16221_17355 = state_16205__$1;
(statearr_16221_17355[(2)] = null);

(statearr_16221_17355[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16206 === (8))){
var inst_16186 = (state_16205[(7)]);
var state_16205__$1 = state_16205;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16205__$1,(11),out,inst_16186);
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
var cljs$core$async$state_machine__14414__auto__ = null;
var cljs$core$async$state_machine__14414__auto____0 = (function (){
var statearr_16225 = [null,null,null,null,null,null,null,null,null];
(statearr_16225[(0)] = cljs$core$async$state_machine__14414__auto__);

(statearr_16225[(1)] = (1));

return statearr_16225;
});
var cljs$core$async$state_machine__14414__auto____1 = (function (state_16205){
while(true){
var ret_value__14415__auto__ = (function (){try{while(true){
var result__14416__auto__ = switch__14413__auto__(state_16205);
if(cljs.core.keyword_identical_QMARK_(result__14416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14416__auto__;
}
break;
}
}catch (e16226){var ex__14417__auto__ = e16226;
var statearr_16227_17357 = state_16205;
(statearr_16227_17357[(2)] = ex__14417__auto__);


if(cljs.core.seq((state_16205[(4)]))){
var statearr_16228_17358 = state_16205;
(statearr_16228_17358[(1)] = cljs.core.first((state_16205[(4)])));

} else {
throw ex__14417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17359 = state_16205;
state_16205 = G__17359;
continue;
} else {
return ret_value__14415__auto__;
}
break;
}
});
cljs$core$async$state_machine__14414__auto__ = function(state_16205){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14414__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14414__auto____1.call(this,state_16205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14414__auto____0;
cljs$core$async$state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14414__auto____1;
return cljs$core$async$state_machine__14414__auto__;
})()
})();
var state__14549__auto__ = (function (){var statearr_16229 = f__14548__auto__();
(statearr_16229[(6)] = c__14547__auto___17341);

return statearr_16229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14549__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__16233 = arguments.length;
switch (G__16233) {
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
var c__14547__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14548__auto__ = (function (){var switch__14413__auto__ = (function (state_16307){
var state_val_16308 = (state_16307[(1)]);
if((state_val_16308 === (7))){
var inst_16303 = (state_16307[(2)]);
var state_16307__$1 = state_16307;
var statearr_16309_17361 = state_16307__$1;
(statearr_16309_17361[(2)] = inst_16303);

(statearr_16309_17361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (20))){
var inst_16273 = (state_16307[(7)]);
var inst_16284 = (state_16307[(2)]);
var inst_16285 = cljs.core.next(inst_16273);
var inst_16255 = inst_16285;
var inst_16256 = null;
var inst_16257 = (0);
var inst_16258 = (0);
var state_16307__$1 = (function (){var statearr_16311 = state_16307;
(statearr_16311[(8)] = inst_16284);

(statearr_16311[(9)] = inst_16257);

(statearr_16311[(10)] = inst_16258);

(statearr_16311[(11)] = inst_16255);

(statearr_16311[(12)] = inst_16256);

return statearr_16311;
})();
var statearr_16312_17362 = state_16307__$1;
(statearr_16312_17362[(2)] = null);

(statearr_16312_17362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (1))){
var state_16307__$1 = state_16307;
var statearr_16313_17363 = state_16307__$1;
(statearr_16313_17363[(2)] = null);

(statearr_16313_17363[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (4))){
var inst_16240 = (state_16307[(13)]);
var inst_16240__$1 = (state_16307[(2)]);
var inst_16241 = (inst_16240__$1 == null);
var state_16307__$1 = (function (){var statearr_16314 = state_16307;
(statearr_16314[(13)] = inst_16240__$1);

return statearr_16314;
})();
if(cljs.core.truth_(inst_16241)){
var statearr_16315_17364 = state_16307__$1;
(statearr_16315_17364[(1)] = (5));

} else {
var statearr_16316_17366 = state_16307__$1;
(statearr_16316_17366[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (15))){
var state_16307__$1 = state_16307;
var statearr_16324_17367 = state_16307__$1;
(statearr_16324_17367[(2)] = null);

(statearr_16324_17367[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (21))){
var state_16307__$1 = state_16307;
var statearr_16327_17368 = state_16307__$1;
(statearr_16327_17368[(2)] = null);

(statearr_16327_17368[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (13))){
var inst_16257 = (state_16307[(9)]);
var inst_16258 = (state_16307[(10)]);
var inst_16255 = (state_16307[(11)]);
var inst_16256 = (state_16307[(12)]);
var inst_16269 = (state_16307[(2)]);
var inst_16270 = (inst_16258 + (1));
var tmp16319 = inst_16257;
var tmp16320 = inst_16255;
var tmp16321 = inst_16256;
var inst_16255__$1 = tmp16320;
var inst_16256__$1 = tmp16321;
var inst_16257__$1 = tmp16319;
var inst_16258__$1 = inst_16270;
var state_16307__$1 = (function (){var statearr_16331 = state_16307;
(statearr_16331[(9)] = inst_16257__$1);

(statearr_16331[(10)] = inst_16258__$1);

(statearr_16331[(14)] = inst_16269);

(statearr_16331[(11)] = inst_16255__$1);

(statearr_16331[(12)] = inst_16256__$1);

return statearr_16331;
})();
var statearr_16333_17369 = state_16307__$1;
(statearr_16333_17369[(2)] = null);

(statearr_16333_17369[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (22))){
var state_16307__$1 = state_16307;
var statearr_16334_17370 = state_16307__$1;
(statearr_16334_17370[(2)] = null);

(statearr_16334_17370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (6))){
var inst_16240 = (state_16307[(13)]);
var inst_16253 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16240) : f.call(null,inst_16240));
var inst_16254 = cljs.core.seq(inst_16253);
var inst_16255 = inst_16254;
var inst_16256 = null;
var inst_16257 = (0);
var inst_16258 = (0);
var state_16307__$1 = (function (){var statearr_16335 = state_16307;
(statearr_16335[(9)] = inst_16257);

(statearr_16335[(10)] = inst_16258);

(statearr_16335[(11)] = inst_16255);

(statearr_16335[(12)] = inst_16256);

return statearr_16335;
})();
var statearr_16337_17375 = state_16307__$1;
(statearr_16337_17375[(2)] = null);

(statearr_16337_17375[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (17))){
var inst_16273 = (state_16307[(7)]);
var inst_16277 = cljs.core.chunk_first(inst_16273);
var inst_16278 = cljs.core.chunk_rest(inst_16273);
var inst_16279 = cljs.core.count(inst_16277);
var inst_16255 = inst_16278;
var inst_16256 = inst_16277;
var inst_16257 = inst_16279;
var inst_16258 = (0);
var state_16307__$1 = (function (){var statearr_16338 = state_16307;
(statearr_16338[(9)] = inst_16257);

(statearr_16338[(10)] = inst_16258);

(statearr_16338[(11)] = inst_16255);

(statearr_16338[(12)] = inst_16256);

return statearr_16338;
})();
var statearr_16339_17376 = state_16307__$1;
(statearr_16339_17376[(2)] = null);

(statearr_16339_17376[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (3))){
var inst_16305 = (state_16307[(2)]);
var state_16307__$1 = state_16307;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16307__$1,inst_16305);
} else {
if((state_val_16308 === (12))){
var inst_16293 = (state_16307[(2)]);
var state_16307__$1 = state_16307;
var statearr_16340_17377 = state_16307__$1;
(statearr_16340_17377[(2)] = inst_16293);

(statearr_16340_17377[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (2))){
var state_16307__$1 = state_16307;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16307__$1,(4),in$);
} else {
if((state_val_16308 === (23))){
var inst_16301 = (state_16307[(2)]);
var state_16307__$1 = state_16307;
var statearr_16341_17378 = state_16307__$1;
(statearr_16341_17378[(2)] = inst_16301);

(statearr_16341_17378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (19))){
var inst_16288 = (state_16307[(2)]);
var state_16307__$1 = state_16307;
var statearr_16346_17379 = state_16307__$1;
(statearr_16346_17379[(2)] = inst_16288);

(statearr_16346_17379[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (11))){
var inst_16273 = (state_16307[(7)]);
var inst_16255 = (state_16307[(11)]);
var inst_16273__$1 = cljs.core.seq(inst_16255);
var state_16307__$1 = (function (){var statearr_16351 = state_16307;
(statearr_16351[(7)] = inst_16273__$1);

return statearr_16351;
})();
if(inst_16273__$1){
var statearr_16356_17380 = state_16307__$1;
(statearr_16356_17380[(1)] = (14));

} else {
var statearr_16357_17381 = state_16307__$1;
(statearr_16357_17381[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (9))){
var inst_16295 = (state_16307[(2)]);
var inst_16296 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_16307__$1 = (function (){var statearr_16358 = state_16307;
(statearr_16358[(15)] = inst_16295);

return statearr_16358;
})();
if(cljs.core.truth_(inst_16296)){
var statearr_16359_17382 = state_16307__$1;
(statearr_16359_17382[(1)] = (21));

} else {
var statearr_16360_17383 = state_16307__$1;
(statearr_16360_17383[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (5))){
var inst_16243 = cljs.core.async.close_BANG_(out);
var state_16307__$1 = state_16307;
var statearr_16361_17384 = state_16307__$1;
(statearr_16361_17384[(2)] = inst_16243);

(statearr_16361_17384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (14))){
var inst_16273 = (state_16307[(7)]);
var inst_16275 = cljs.core.chunked_seq_QMARK_(inst_16273);
var state_16307__$1 = state_16307;
if(inst_16275){
var statearr_16362_17385 = state_16307__$1;
(statearr_16362_17385[(1)] = (17));

} else {
var statearr_16363_17386 = state_16307__$1;
(statearr_16363_17386[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (16))){
var inst_16291 = (state_16307[(2)]);
var state_16307__$1 = state_16307;
var statearr_16364_17387 = state_16307__$1;
(statearr_16364_17387[(2)] = inst_16291);

(statearr_16364_17387[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16308 === (10))){
var inst_16258 = (state_16307[(10)]);
var inst_16256 = (state_16307[(12)]);
var inst_16267 = cljs.core._nth(inst_16256,inst_16258);
var state_16307__$1 = state_16307;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16307__$1,(13),out,inst_16267);
} else {
if((state_val_16308 === (18))){
var inst_16273 = (state_16307[(7)]);
var inst_16282 = cljs.core.first(inst_16273);
var state_16307__$1 = state_16307;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16307__$1,(20),out,inst_16282);
} else {
if((state_val_16308 === (8))){
var inst_16257 = (state_16307[(9)]);
var inst_16258 = (state_16307[(10)]);
var inst_16260 = (inst_16258 < inst_16257);
var inst_16261 = inst_16260;
var state_16307__$1 = state_16307;
if(cljs.core.truth_(inst_16261)){
var statearr_16366_17388 = state_16307__$1;
(statearr_16366_17388[(1)] = (10));

} else {
var statearr_16367_17389 = state_16307__$1;
(statearr_16367_17389[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__14414__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__14414__auto____0 = (function (){
var statearr_16368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16368[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__14414__auto__);

(statearr_16368[(1)] = (1));

return statearr_16368;
});
var cljs$core$async$mapcat_STAR__$_state_machine__14414__auto____1 = (function (state_16307){
while(true){
var ret_value__14415__auto__ = (function (){try{while(true){
var result__14416__auto__ = switch__14413__auto__(state_16307);
if(cljs.core.keyword_identical_QMARK_(result__14416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14416__auto__;
}
break;
}
}catch (e16369){var ex__14417__auto__ = e16369;
var statearr_16370_17391 = state_16307;
(statearr_16370_17391[(2)] = ex__14417__auto__);


if(cljs.core.seq((state_16307[(4)]))){
var statearr_16371_17392 = state_16307;
(statearr_16371_17392[(1)] = cljs.core.first((state_16307[(4)])));

} else {
throw ex__14417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17393 = state_16307;
state_16307 = G__17393;
continue;
} else {
return ret_value__14415__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__14414__auto__ = function(state_16307){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__14414__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__14414__auto____1.call(this,state_16307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__14414__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__14414__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__14414__auto__;
})()
})();
var state__14549__auto__ = (function (){var statearr_16374 = f__14548__auto__();
(statearr_16374[(6)] = c__14547__auto__);

return statearr_16374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14549__auto__);
}));

return c__14547__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__16379 = arguments.length;
switch (G__16379) {
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
var G__16389 = arguments.length;
switch (G__16389) {
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
var G__16393 = arguments.length;
switch (G__16393) {
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
var c__14547__auto___17399 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14548__auto__ = (function (){var switch__14413__auto__ = (function (state_16421){
var state_val_16422 = (state_16421[(1)]);
if((state_val_16422 === (7))){
var inst_16416 = (state_16421[(2)]);
var state_16421__$1 = state_16421;
var statearr_16425_17400 = state_16421__$1;
(statearr_16425_17400[(2)] = inst_16416);

(statearr_16425_17400[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16422 === (1))){
var inst_16396 = null;
var state_16421__$1 = (function (){var statearr_16429 = state_16421;
(statearr_16429[(7)] = inst_16396);

return statearr_16429;
})();
var statearr_16430_17401 = state_16421__$1;
(statearr_16430_17401[(2)] = null);

(statearr_16430_17401[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16422 === (4))){
var inst_16399 = (state_16421[(8)]);
var inst_16399__$1 = (state_16421[(2)]);
var inst_16400 = (inst_16399__$1 == null);
var inst_16401 = cljs.core.not(inst_16400);
var state_16421__$1 = (function (){var statearr_16434 = state_16421;
(statearr_16434[(8)] = inst_16399__$1);

return statearr_16434;
})();
if(inst_16401){
var statearr_16436_17402 = state_16421__$1;
(statearr_16436_17402[(1)] = (5));

} else {
var statearr_16437_17403 = state_16421__$1;
(statearr_16437_17403[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16422 === (6))){
var state_16421__$1 = state_16421;
var statearr_16438_17404 = state_16421__$1;
(statearr_16438_17404[(2)] = null);

(statearr_16438_17404[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16422 === (3))){
var inst_16418 = (state_16421[(2)]);
var inst_16419 = cljs.core.async.close_BANG_(out);
var state_16421__$1 = (function (){var statearr_16439 = state_16421;
(statearr_16439[(9)] = inst_16418);

return statearr_16439;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_16421__$1,inst_16419);
} else {
if((state_val_16422 === (2))){
var state_16421__$1 = state_16421;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16421__$1,(4),ch);
} else {
if((state_val_16422 === (11))){
var inst_16399 = (state_16421[(8)]);
var inst_16408 = (state_16421[(2)]);
var inst_16396 = inst_16399;
var state_16421__$1 = (function (){var statearr_16443 = state_16421;
(statearr_16443[(10)] = inst_16408);

(statearr_16443[(7)] = inst_16396);

return statearr_16443;
})();
var statearr_16445_17409 = state_16421__$1;
(statearr_16445_17409[(2)] = null);

(statearr_16445_17409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16422 === (9))){
var inst_16399 = (state_16421[(8)]);
var state_16421__$1 = state_16421;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16421__$1,(11),out,inst_16399);
} else {
if((state_val_16422 === (5))){
var inst_16399 = (state_16421[(8)]);
var inst_16396 = (state_16421[(7)]);
var inst_16403 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16399,inst_16396);
var state_16421__$1 = state_16421;
if(inst_16403){
var statearr_16447_17410 = state_16421__$1;
(statearr_16447_17410[(1)] = (8));

} else {
var statearr_16448_17411 = state_16421__$1;
(statearr_16448_17411[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16422 === (10))){
var inst_16411 = (state_16421[(2)]);
var state_16421__$1 = state_16421;
var statearr_16449_17417 = state_16421__$1;
(statearr_16449_17417[(2)] = inst_16411);

(statearr_16449_17417[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16422 === (8))){
var inst_16396 = (state_16421[(7)]);
var tmp16446 = inst_16396;
var inst_16396__$1 = tmp16446;
var state_16421__$1 = (function (){var statearr_16450 = state_16421;
(statearr_16450[(7)] = inst_16396__$1);

return statearr_16450;
})();
var statearr_16451_17418 = state_16421__$1;
(statearr_16451_17418[(2)] = null);

(statearr_16451_17418[(1)] = (2));


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
var cljs$core$async$state_machine__14414__auto__ = null;
var cljs$core$async$state_machine__14414__auto____0 = (function (){
var statearr_16452 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16452[(0)] = cljs$core$async$state_machine__14414__auto__);

(statearr_16452[(1)] = (1));

return statearr_16452;
});
var cljs$core$async$state_machine__14414__auto____1 = (function (state_16421){
while(true){
var ret_value__14415__auto__ = (function (){try{while(true){
var result__14416__auto__ = switch__14413__auto__(state_16421);
if(cljs.core.keyword_identical_QMARK_(result__14416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14416__auto__;
}
break;
}
}catch (e16454){var ex__14417__auto__ = e16454;
var statearr_16455_17419 = state_16421;
(statearr_16455_17419[(2)] = ex__14417__auto__);


if(cljs.core.seq((state_16421[(4)]))){
var statearr_16457_17420 = state_16421;
(statearr_16457_17420[(1)] = cljs.core.first((state_16421[(4)])));

} else {
throw ex__14417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17421 = state_16421;
state_16421 = G__17421;
continue;
} else {
return ret_value__14415__auto__;
}
break;
}
});
cljs$core$async$state_machine__14414__auto__ = function(state_16421){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14414__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14414__auto____1.call(this,state_16421);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14414__auto____0;
cljs$core$async$state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14414__auto____1;
return cljs$core$async$state_machine__14414__auto__;
})()
})();
var state__14549__auto__ = (function (){var statearr_16458 = f__14548__auto__();
(statearr_16458[(6)] = c__14547__auto___17399);

return statearr_16458;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14549__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__16461 = arguments.length;
switch (G__16461) {
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
var c__14547__auto___17424 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14548__auto__ = (function (){var switch__14413__auto__ = (function (state_16500){
var state_val_16501 = (state_16500[(1)]);
if((state_val_16501 === (7))){
var inst_16496 = (state_16500[(2)]);
var state_16500__$1 = state_16500;
var statearr_16504_17425 = state_16500__$1;
(statearr_16504_17425[(2)] = inst_16496);

(statearr_16504_17425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16501 === (1))){
var inst_16462 = (new Array(n));
var inst_16463 = inst_16462;
var inst_16464 = (0);
var state_16500__$1 = (function (){var statearr_16505 = state_16500;
(statearr_16505[(7)] = inst_16463);

(statearr_16505[(8)] = inst_16464);

return statearr_16505;
})();
var statearr_16506_17426 = state_16500__$1;
(statearr_16506_17426[(2)] = null);

(statearr_16506_17426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16501 === (4))){
var inst_16467 = (state_16500[(9)]);
var inst_16467__$1 = (state_16500[(2)]);
var inst_16469 = (inst_16467__$1 == null);
var inst_16470 = cljs.core.not(inst_16469);
var state_16500__$1 = (function (){var statearr_16508 = state_16500;
(statearr_16508[(9)] = inst_16467__$1);

return statearr_16508;
})();
if(inst_16470){
var statearr_16509_17427 = state_16500__$1;
(statearr_16509_17427[(1)] = (5));

} else {
var statearr_16510_17428 = state_16500__$1;
(statearr_16510_17428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16501 === (15))){
var inst_16490 = (state_16500[(2)]);
var state_16500__$1 = state_16500;
var statearr_16511_17429 = state_16500__$1;
(statearr_16511_17429[(2)] = inst_16490);

(statearr_16511_17429[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16501 === (13))){
var state_16500__$1 = state_16500;
var statearr_16512_17430 = state_16500__$1;
(statearr_16512_17430[(2)] = null);

(statearr_16512_17430[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16501 === (6))){
var inst_16464 = (state_16500[(8)]);
var inst_16486 = (inst_16464 > (0));
var state_16500__$1 = state_16500;
if(cljs.core.truth_(inst_16486)){
var statearr_16513_17431 = state_16500__$1;
(statearr_16513_17431[(1)] = (12));

} else {
var statearr_16515_17432 = state_16500__$1;
(statearr_16515_17432[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16501 === (3))){
var inst_16498 = (state_16500[(2)]);
var state_16500__$1 = state_16500;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16500__$1,inst_16498);
} else {
if((state_val_16501 === (12))){
var inst_16463 = (state_16500[(7)]);
var inst_16488 = cljs.core.vec(inst_16463);
var state_16500__$1 = state_16500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16500__$1,(15),out,inst_16488);
} else {
if((state_val_16501 === (2))){
var state_16500__$1 = state_16500;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16500__$1,(4),ch);
} else {
if((state_val_16501 === (11))){
var inst_16480 = (state_16500[(2)]);
var inst_16481 = (new Array(n));
var inst_16463 = inst_16481;
var inst_16464 = (0);
var state_16500__$1 = (function (){var statearr_16516 = state_16500;
(statearr_16516[(7)] = inst_16463);

(statearr_16516[(10)] = inst_16480);

(statearr_16516[(8)] = inst_16464);

return statearr_16516;
})();
var statearr_16517_17436 = state_16500__$1;
(statearr_16517_17436[(2)] = null);

(statearr_16517_17436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16501 === (9))){
var inst_16463 = (state_16500[(7)]);
var inst_16478 = cljs.core.vec(inst_16463);
var state_16500__$1 = state_16500;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16500__$1,(11),out,inst_16478);
} else {
if((state_val_16501 === (5))){
var inst_16463 = (state_16500[(7)]);
var inst_16467 = (state_16500[(9)]);
var inst_16464 = (state_16500[(8)]);
var inst_16473 = (state_16500[(11)]);
var inst_16472 = (inst_16463[inst_16464] = inst_16467);
var inst_16473__$1 = (inst_16464 + (1));
var inst_16474 = (inst_16473__$1 < n);
var state_16500__$1 = (function (){var statearr_16518 = state_16500;
(statearr_16518[(11)] = inst_16473__$1);

(statearr_16518[(12)] = inst_16472);

return statearr_16518;
})();
if(cljs.core.truth_(inst_16474)){
var statearr_16519_17437 = state_16500__$1;
(statearr_16519_17437[(1)] = (8));

} else {
var statearr_16520_17438 = state_16500__$1;
(statearr_16520_17438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16501 === (14))){
var inst_16493 = (state_16500[(2)]);
var inst_16494 = cljs.core.async.close_BANG_(out);
var state_16500__$1 = (function (){var statearr_16522 = state_16500;
(statearr_16522[(13)] = inst_16493);

return statearr_16522;
})();
var statearr_16523_17439 = state_16500__$1;
(statearr_16523_17439[(2)] = inst_16494);

(statearr_16523_17439[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16501 === (10))){
var inst_16484 = (state_16500[(2)]);
var state_16500__$1 = state_16500;
var statearr_16524_17440 = state_16500__$1;
(statearr_16524_17440[(2)] = inst_16484);

(statearr_16524_17440[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16501 === (8))){
var inst_16463 = (state_16500[(7)]);
var inst_16473 = (state_16500[(11)]);
var tmp16521 = inst_16463;
var inst_16463__$1 = tmp16521;
var inst_16464 = inst_16473;
var state_16500__$1 = (function (){var statearr_16525 = state_16500;
(statearr_16525[(7)] = inst_16463__$1);

(statearr_16525[(8)] = inst_16464);

return statearr_16525;
})();
var statearr_16526_17445 = state_16500__$1;
(statearr_16526_17445[(2)] = null);

(statearr_16526_17445[(1)] = (2));


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
var cljs$core$async$state_machine__14414__auto__ = null;
var cljs$core$async$state_machine__14414__auto____0 = (function (){
var statearr_16528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16528[(0)] = cljs$core$async$state_machine__14414__auto__);

(statearr_16528[(1)] = (1));

return statearr_16528;
});
var cljs$core$async$state_machine__14414__auto____1 = (function (state_16500){
while(true){
var ret_value__14415__auto__ = (function (){try{while(true){
var result__14416__auto__ = switch__14413__auto__(state_16500);
if(cljs.core.keyword_identical_QMARK_(result__14416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14416__auto__;
}
break;
}
}catch (e16530){var ex__14417__auto__ = e16530;
var statearr_16531_17446 = state_16500;
(statearr_16531_17446[(2)] = ex__14417__auto__);


if(cljs.core.seq((state_16500[(4)]))){
var statearr_16532_17447 = state_16500;
(statearr_16532_17447[(1)] = cljs.core.first((state_16500[(4)])));

} else {
throw ex__14417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17448 = state_16500;
state_16500 = G__17448;
continue;
} else {
return ret_value__14415__auto__;
}
break;
}
});
cljs$core$async$state_machine__14414__auto__ = function(state_16500){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14414__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14414__auto____1.call(this,state_16500);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14414__auto____0;
cljs$core$async$state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14414__auto____1;
return cljs$core$async$state_machine__14414__auto__;
})()
})();
var state__14549__auto__ = (function (){var statearr_16533 = f__14548__auto__();
(statearr_16533[(6)] = c__14547__auto___17424);

return statearr_16533;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14549__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__16535 = arguments.length;
switch (G__16535) {
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
var c__14547__auto___17450 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__14548__auto__ = (function (){var switch__14413__auto__ = (function (state_16582){
var state_val_16583 = (state_16582[(1)]);
if((state_val_16583 === (7))){
var inst_16578 = (state_16582[(2)]);
var state_16582__$1 = state_16582;
var statearr_16584_17451 = state_16582__$1;
(statearr_16584_17451[(2)] = inst_16578);

(statearr_16584_17451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (1))){
var inst_16538 = [];
var inst_16539 = inst_16538;
var inst_16540 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16582__$1 = (function (){var statearr_16585 = state_16582;
(statearr_16585[(7)] = inst_16540);

(statearr_16585[(8)] = inst_16539);

return statearr_16585;
})();
var statearr_16586_17452 = state_16582__$1;
(statearr_16586_17452[(2)] = null);

(statearr_16586_17452[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (4))){
var inst_16543 = (state_16582[(9)]);
var inst_16543__$1 = (state_16582[(2)]);
var inst_16544 = (inst_16543__$1 == null);
var inst_16545 = cljs.core.not(inst_16544);
var state_16582__$1 = (function (){var statearr_16587 = state_16582;
(statearr_16587[(9)] = inst_16543__$1);

return statearr_16587;
})();
if(inst_16545){
var statearr_16588_17453 = state_16582__$1;
(statearr_16588_17453[(1)] = (5));

} else {
var statearr_16589_17454 = state_16582__$1;
(statearr_16589_17454[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (15))){
var inst_16539 = (state_16582[(8)]);
var inst_16570 = cljs.core.vec(inst_16539);
var state_16582__$1 = state_16582;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16582__$1,(18),out,inst_16570);
} else {
if((state_val_16583 === (13))){
var inst_16565 = (state_16582[(2)]);
var state_16582__$1 = state_16582;
var statearr_16591_17455 = state_16582__$1;
(statearr_16591_17455[(2)] = inst_16565);

(statearr_16591_17455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (6))){
var inst_16539 = (state_16582[(8)]);
var inst_16567 = inst_16539.length;
var inst_16568 = (inst_16567 > (0));
var state_16582__$1 = state_16582;
if(cljs.core.truth_(inst_16568)){
var statearr_16593_17456 = state_16582__$1;
(statearr_16593_17456[(1)] = (15));

} else {
var statearr_16594_17457 = state_16582__$1;
(statearr_16594_17457[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (17))){
var inst_16575 = (state_16582[(2)]);
var inst_16576 = cljs.core.async.close_BANG_(out);
var state_16582__$1 = (function (){var statearr_16595 = state_16582;
(statearr_16595[(10)] = inst_16575);

return statearr_16595;
})();
var statearr_16596_17458 = state_16582__$1;
(statearr_16596_17458[(2)] = inst_16576);

(statearr_16596_17458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (3))){
var inst_16580 = (state_16582[(2)]);
var state_16582__$1 = state_16582;
return cljs.core.async.impl.ioc_helpers.return_chan(state_16582__$1,inst_16580);
} else {
if((state_val_16583 === (12))){
var inst_16539 = (state_16582[(8)]);
var inst_16558 = cljs.core.vec(inst_16539);
var state_16582__$1 = state_16582;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_16582__$1,(14),out,inst_16558);
} else {
if((state_val_16583 === (2))){
var state_16582__$1 = state_16582;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_16582__$1,(4),ch);
} else {
if((state_val_16583 === (11))){
var inst_16547 = (state_16582[(11)]);
var inst_16539 = (state_16582[(8)]);
var inst_16543 = (state_16582[(9)]);
var inst_16555 = inst_16539.push(inst_16543);
var tmp16597 = inst_16539;
var inst_16539__$1 = tmp16597;
var inst_16540 = inst_16547;
var state_16582__$1 = (function (){var statearr_16600 = state_16582;
(statearr_16600[(12)] = inst_16555);

(statearr_16600[(7)] = inst_16540);

(statearr_16600[(8)] = inst_16539__$1);

return statearr_16600;
})();
var statearr_16601_17459 = state_16582__$1;
(statearr_16601_17459[(2)] = null);

(statearr_16601_17459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (9))){
var inst_16540 = (state_16582[(7)]);
var inst_16551 = cljs.core.keyword_identical_QMARK_(inst_16540,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_16582__$1 = state_16582;
var statearr_16602_17460 = state_16582__$1;
(statearr_16602_17460[(2)] = inst_16551);

(statearr_16602_17460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (5))){
var inst_16547 = (state_16582[(11)]);
var inst_16548 = (state_16582[(13)]);
var inst_16540 = (state_16582[(7)]);
var inst_16543 = (state_16582[(9)]);
var inst_16547__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_16543) : f.call(null,inst_16543));
var inst_16548__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_16547__$1,inst_16540);
var state_16582__$1 = (function (){var statearr_16603 = state_16582;
(statearr_16603[(11)] = inst_16547__$1);

(statearr_16603[(13)] = inst_16548__$1);

return statearr_16603;
})();
if(inst_16548__$1){
var statearr_16604_17465 = state_16582__$1;
(statearr_16604_17465[(1)] = (8));

} else {
var statearr_16607_17466 = state_16582__$1;
(statearr_16607_17466[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (14))){
var inst_16547 = (state_16582[(11)]);
var inst_16543 = (state_16582[(9)]);
var inst_16560 = (state_16582[(2)]);
var inst_16561 = [];
var inst_16562 = inst_16561.push(inst_16543);
var inst_16539 = inst_16561;
var inst_16540 = inst_16547;
var state_16582__$1 = (function (){var statearr_16608 = state_16582;
(statearr_16608[(14)] = inst_16562);

(statearr_16608[(15)] = inst_16560);

(statearr_16608[(7)] = inst_16540);

(statearr_16608[(8)] = inst_16539);

return statearr_16608;
})();
var statearr_16609_17467 = state_16582__$1;
(statearr_16609_17467[(2)] = null);

(statearr_16609_17467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (16))){
var state_16582__$1 = state_16582;
var statearr_16610_17468 = state_16582__$1;
(statearr_16610_17468[(2)] = null);

(statearr_16610_17468[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (10))){
var inst_16553 = (state_16582[(2)]);
var state_16582__$1 = state_16582;
if(cljs.core.truth_(inst_16553)){
var statearr_16612_17473 = state_16582__$1;
(statearr_16612_17473[(1)] = (11));

} else {
var statearr_16613_17474 = state_16582__$1;
(statearr_16613_17474[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (18))){
var inst_16572 = (state_16582[(2)]);
var state_16582__$1 = state_16582;
var statearr_16614_17478 = state_16582__$1;
(statearr_16614_17478[(2)] = inst_16572);

(statearr_16614_17478[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16583 === (8))){
var inst_16548 = (state_16582[(13)]);
var state_16582__$1 = state_16582;
var statearr_16615_17483 = state_16582__$1;
(statearr_16615_17483[(2)] = inst_16548);

(statearr_16615_17483[(1)] = (10));


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
var cljs$core$async$state_machine__14414__auto__ = null;
var cljs$core$async$state_machine__14414__auto____0 = (function (){
var statearr_16617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16617[(0)] = cljs$core$async$state_machine__14414__auto__);

(statearr_16617[(1)] = (1));

return statearr_16617;
});
var cljs$core$async$state_machine__14414__auto____1 = (function (state_16582){
while(true){
var ret_value__14415__auto__ = (function (){try{while(true){
var result__14416__auto__ = switch__14413__auto__(state_16582);
if(cljs.core.keyword_identical_QMARK_(result__14416__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__14416__auto__;
}
break;
}
}catch (e16619){var ex__14417__auto__ = e16619;
var statearr_16620_17484 = state_16582;
(statearr_16620_17484[(2)] = ex__14417__auto__);


if(cljs.core.seq((state_16582[(4)]))){
var statearr_16621_17485 = state_16582;
(statearr_16621_17485[(1)] = cljs.core.first((state_16582[(4)])));

} else {
throw ex__14417__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__14415__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17486 = state_16582;
state_16582 = G__17486;
continue;
} else {
return ret_value__14415__auto__;
}
break;
}
});
cljs$core$async$state_machine__14414__auto__ = function(state_16582){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__14414__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__14414__auto____1.call(this,state_16582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__14414__auto____0;
cljs$core$async$state_machine__14414__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__14414__auto____1;
return cljs$core$async$state_machine__14414__auto__;
})()
})();
var state__14549__auto__ = (function (){var statearr_16623 = f__14548__auto__();
(statearr_16623[(6)] = c__14547__auto___17450);

return statearr_16623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__14549__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
