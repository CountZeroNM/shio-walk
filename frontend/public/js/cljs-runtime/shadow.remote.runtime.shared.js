goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__14456){
var map__14458 = p__14456;
var map__14458__$1 = cljs.core.__destructure_map(map__14458);
var runtime = map__14458__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14458__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_14637 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_14637)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__14459 = runtime;
var G__14460 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_14637);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__14459,G__14460) : shadow.remote.runtime.shared.process.call(null,G__14459,G__14460));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__14466,res){
var map__14467 = p__14466;
var map__14467__$1 = cljs.core.__destructure_map(map__14467);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14467__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14467__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__14468 = res;
var G__14468__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14468,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__14468);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__14468__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__14468__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__14470 = arguments.length;
switch (G__14470) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__14476,msg,handlers,timeout_after_ms){
var map__14477 = p__14476;
var map__14477__$1 = cljs.core.__destructure_map(map__14477);
var runtime = map__14477__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14477__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5732__auto__ = [];
var len__5726__auto___14650 = arguments.length;
var i__5727__auto___14651 = (0);
while(true){
if((i__5727__auto___14651 < len__5726__auto___14650)){
args__5732__auto__.push((arguments[i__5727__auto___14651]));

var G__14652 = (i__5727__auto___14651 + (1));
i__5727__auto___14651 = G__14652;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14481,ev,args){
var map__14482 = p__14481;
var map__14482__$1 = cljs.core.__destructure_map(map__14482);
var runtime = map__14482__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14482__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__14483 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14486 = null;
var count__14487 = (0);
var i__14488 = (0);
while(true){
if((i__14488 < count__14487)){
var ext = chunk__14486.cljs$core$IIndexed$_nth$arity$2(null,i__14488);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14656 = seq__14483;
var G__14657 = chunk__14486;
var G__14658 = count__14487;
var G__14659 = (i__14488 + (1));
seq__14483 = G__14656;
chunk__14486 = G__14657;
count__14487 = G__14658;
i__14488 = G__14659;
continue;
} else {
var G__14660 = seq__14483;
var G__14661 = chunk__14486;
var G__14662 = count__14487;
var G__14663 = (i__14488 + (1));
seq__14483 = G__14660;
chunk__14486 = G__14661;
count__14487 = G__14662;
i__14488 = G__14663;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14483);
if(temp__5804__auto__){
var seq__14483__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14483__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14483__$1);
var G__14666 = cljs.core.chunk_rest(seq__14483__$1);
var G__14667 = c__5525__auto__;
var G__14668 = cljs.core.count(c__5525__auto__);
var G__14669 = (0);
seq__14483 = G__14666;
chunk__14486 = G__14667;
count__14487 = G__14668;
i__14488 = G__14669;
continue;
} else {
var ext = cljs.core.first(seq__14483__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__14672 = cljs.core.next(seq__14483__$1);
var G__14673 = null;
var G__14674 = (0);
var G__14675 = (0);
seq__14483 = G__14672;
chunk__14486 = G__14673;
count__14487 = G__14674;
i__14488 = G__14675;
continue;
} else {
var G__14676 = cljs.core.next(seq__14483__$1);
var G__14678 = null;
var G__14679 = (0);
var G__14680 = (0);
seq__14483 = G__14676;
chunk__14486 = G__14678;
count__14487 = G__14679;
i__14488 = G__14680;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq14478){
var G__14479 = cljs.core.first(seq14478);
var seq14478__$1 = cljs.core.next(seq14478);
var G__14480 = cljs.core.first(seq14478__$1);
var seq14478__$2 = cljs.core.next(seq14478__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__14479,G__14480,seq14478__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__14496,p__14497){
var map__14498 = p__14496;
var map__14498__$1 = cljs.core.__destructure_map(map__14498);
var runtime = map__14498__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14498__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14499 = p__14497;
var map__14499__$1 = cljs.core.__destructure_map(map__14499);
var msg = map__14499__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14499__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__14503 = cljs.core.deref(state_ref);
var map__14503__$1 = cljs.core.__destructure_map(map__14503);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14503__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14503__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__14509,msg){
var map__14510 = p__14509;
var map__14510__$1 = cljs.core.__destructure_map(map__14510);
var runtime = map__14510__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14510__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__14514,key,p__14515){
var map__14516 = p__14514;
var map__14516__$1 = cljs.core.__destructure_map(map__14516);
var state = map__14516__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14516__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__14517 = p__14515;
var map__14517__$1 = cljs.core.__destructure_map(map__14517);
var spec = map__14517__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14517__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14517__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__14529,key,spec){
var map__14535 = p__14529;
var map__14535__$1 = cljs.core.__destructure_map(map__14535);
var runtime = map__14535__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14535__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___14689 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___14689 == null)){
} else {
var on_welcome_14690 = temp__5808__auto___14689;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_14690.cljs$core$IFn$_invoke$arity$0 ? on_welcome_14690.cljs$core$IFn$_invoke$arity$0() : on_welcome_14690.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__14537_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__14537_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__14538_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__14538_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__14539_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__14539_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__14540_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__14540_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__14541_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__14541_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__14550,key){
var map__14551 = p__14550;
var map__14551__$1 = cljs.core.__destructure_map(map__14551);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14551__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__14556,msg){
var map__14557 = p__14556;
var map__14557__$1 = cljs.core.__destructure_map(map__14557);
var runtime = map__14557__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14557__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__14560,p__14561){
var map__14565 = p__14560;
var map__14565__$1 = cljs.core.__destructure_map(map__14565);
var runtime = map__14565__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14565__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__14566 = p__14561;
var map__14566__$1 = cljs.core.__destructure_map(map__14566);
var msg = map__14566__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14566__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14566__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__14576 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__14578 = null;
var count__14579 = (0);
var i__14580 = (0);
while(true){
if((i__14580 < count__14579)){
var map__14613 = chunk__14578.cljs$core$IIndexed$_nth$arity$2(null,i__14580);
var map__14613__$1 = cljs.core.__destructure_map(map__14613);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14613__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14712 = seq__14576;
var G__14713 = chunk__14578;
var G__14714 = count__14579;
var G__14715 = (i__14580 + (1));
seq__14576 = G__14712;
chunk__14578 = G__14713;
count__14579 = G__14714;
i__14580 = G__14715;
continue;
} else {
var G__14716 = seq__14576;
var G__14717 = chunk__14578;
var G__14718 = count__14579;
var G__14719 = (i__14580 + (1));
seq__14576 = G__14716;
chunk__14578 = G__14717;
count__14579 = G__14718;
i__14580 = G__14719;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__14576);
if(temp__5804__auto__){
var seq__14576__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__14576__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__14576__$1);
var G__14721 = cljs.core.chunk_rest(seq__14576__$1);
var G__14722 = c__5525__auto__;
var G__14723 = cljs.core.count(c__5525__auto__);
var G__14724 = (0);
seq__14576 = G__14721;
chunk__14578 = G__14722;
count__14579 = G__14723;
i__14580 = G__14724;
continue;
} else {
var map__14615 = cljs.core.first(seq__14576__$1);
var map__14615__$1 = cljs.core.__destructure_map(map__14615);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__14615__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__14727 = cljs.core.next(seq__14576__$1);
var G__14728 = null;
var G__14729 = (0);
var G__14730 = (0);
seq__14576 = G__14727;
chunk__14578 = G__14728;
count__14579 = G__14729;
i__14580 = G__14730;
continue;
} else {
var G__14731 = cljs.core.next(seq__14576__$1);
var G__14732 = null;
var G__14733 = (0);
var G__14734 = (0);
seq__14576 = G__14731;
chunk__14578 = G__14732;
count__14579 = G__14733;
i__14580 = G__14734;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
