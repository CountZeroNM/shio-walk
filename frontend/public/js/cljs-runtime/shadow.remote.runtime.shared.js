goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__17936){
var map__17937 = p__17936;
var map__17937__$1 = cljs.core.__destructure_map(map__17937);
var runtime = map__17937__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17937__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5002__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_18021 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_18021)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__17942 = runtime;
var G__17943 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_18021);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__17942,G__17943) : shadow.remote.runtime.shared.process.call(null,G__17942,G__17943));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__17944,res){
var map__17945 = p__17944;
var map__17945__$1 = cljs.core.__destructure_map(map__17945);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17945__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17945__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__17946 = res;
var G__17946__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17946,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__17946);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__17946__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__17946__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__17948 = arguments.length;
switch (G__17948) {
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

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__17949,msg,handlers,timeout_after_ms){
var map__17950 = p__17949;
var map__17950__$1 = cljs.core.__destructure_map(map__17950);
var runtime = map__17950__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17950__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
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
var len__5726__auto___18026 = arguments.length;
var i__5727__auto___18027 = (0);
while(true){
if((i__5727__auto___18027 < len__5726__auto___18026)){
args__5732__auto__.push((arguments[i__5727__auto___18027]));

var G__18028 = (i__5727__auto___18027 + (1));
i__5727__auto___18027 = G__18028;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((2) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5733__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__17958,ev,args){
var map__17959 = p__17958;
var map__17959__$1 = cljs.core.__destructure_map(map__17959);
var runtime = map__17959__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17959__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__17960 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__17963 = null;
var count__17964 = (0);
var i__17965 = (0);
while(true){
if((i__17965 < count__17964)){
var ext = chunk__17963.cljs$core$IIndexed$_nth$arity$2(null,i__17965);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18029 = seq__17960;
var G__18030 = chunk__17963;
var G__18031 = count__17964;
var G__18032 = (i__17965 + (1));
seq__17960 = G__18029;
chunk__17963 = G__18030;
count__17964 = G__18031;
i__17965 = G__18032;
continue;
} else {
var G__18033 = seq__17960;
var G__18034 = chunk__17963;
var G__18035 = count__17964;
var G__18036 = (i__17965 + (1));
seq__17960 = G__18033;
chunk__17963 = G__18034;
count__17964 = G__18035;
i__17965 = G__18036;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__17960);
if(temp__5804__auto__){
var seq__17960__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__17960__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__17960__$1);
var G__18037 = cljs.core.chunk_rest(seq__17960__$1);
var G__18038 = c__5525__auto__;
var G__18039 = cljs.core.count(c__5525__auto__);
var G__18040 = (0);
seq__17960 = G__18037;
chunk__17963 = G__18038;
count__17964 = G__18039;
i__17965 = G__18040;
continue;
} else {
var ext = cljs.core.first(seq__17960__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__18041 = cljs.core.next(seq__17960__$1);
var G__18042 = null;
var G__18043 = (0);
var G__18044 = (0);
seq__17960 = G__18041;
chunk__17963 = G__18042;
count__17964 = G__18043;
i__17965 = G__18044;
continue;
} else {
var G__18045 = cljs.core.next(seq__17960__$1);
var G__18046 = null;
var G__18047 = (0);
var G__18048 = (0);
seq__17960 = G__18045;
chunk__17963 = G__18046;
count__17964 = G__18047;
i__17965 = G__18048;
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
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq17955){
var G__17956 = cljs.core.first(seq17955);
var seq17955__$1 = cljs.core.next(seq17955);
var G__17957 = cljs.core.first(seq17955__$1);
var seq17955__$2 = cljs.core.next(seq17955__$1);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__17956,G__17957,seq17955__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__17968,p__17969){
var map__17970 = p__17968;
var map__17970__$1 = cljs.core.__destructure_map(map__17970);
var runtime = map__17970__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17970__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__17971 = p__17969;
var map__17971__$1 = cljs.core.__destructure_map(map__17971);
var msg = map__17971__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17971__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"welcome","welcome",-578152123),true], 0));

var map__17972 = cljs.core.deref(state_ref);
var map__17972__$1 = cljs.core.__destructure_map(map__17972);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17972__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17972__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__17973,msg){
var map__17974 = p__17973;
var map__17974__$1 = cljs.core.__destructure_map(map__17974);
var runtime = map__17974__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17974__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__17975,key,p__17976){
var map__17977 = p__17975;
var map__17977__$1 = cljs.core.__destructure_map(map__17977);
var state = map__17977__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17977__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__17978 = p__17976;
var map__17978__$1 = cljs.core.__destructure_map(map__17978);
var spec = map__17978__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17978__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
var transit_write_handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17978__$1,new cljs.core.Keyword(null,"transit-write-handlers","transit-write-handlers",1886308716));
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
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__17979,key,spec){
var map__17980 = p__17979;
var map__17980__$1 = cljs.core.__destructure_map(map__17980);
var runtime = map__17980__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17980__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);

var temp__5808__auto___18054 = new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125).cljs$core$IFn$_invoke$arity$1(spec);
if((temp__5808__auto___18054 == null)){
} else {
var on_welcome_18055 = temp__5808__auto___18054;
if(cljs.core.truth_(new cljs.core.Keyword(null,"welcome","welcome",-578152123).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))){
(on_welcome_18055.cljs$core$IFn$_invoke$arity$0 ? on_welcome_18055.cljs$core$IFn$_invoke$arity$0() : on_welcome_18055.call(null));
} else {
}
}

return runtime;
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__17983_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__17983_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__17984_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__17984_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__17985_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__17985_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__17986_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__17986_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__17987_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__17987_SHARP_);
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
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__17988,key){
var map__17989 = p__17988;
var map__17989__$1 = cljs.core.__destructure_map(map__17989);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17989__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__17990,msg){
var map__17991 = p__17990;
var map__17991__$1 = cljs.core.__destructure_map(map__17991);
var runtime = map__17991__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__17991__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__18001,p__18002){
var map__18003 = p__18001;
var map__18003__$1 = cljs.core.__destructure_map(map__18003);
var runtime = map__18003__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18003__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__18004 = p__18002;
var map__18004__$1 = cljs.core.__destructure_map(map__18004);
var msg = map__18004__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18004__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18004__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
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
var seq__18005 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__18007 = null;
var count__18008 = (0);
var i__18009 = (0);
while(true){
if((i__18009 < count__18008)){
var map__18016 = chunk__18007.cljs$core$IIndexed$_nth$arity$2(null,i__18009);
var map__18016__$1 = cljs.core.__destructure_map(map__18016);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18016__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18056 = seq__18005;
var G__18057 = chunk__18007;
var G__18058 = count__18008;
var G__18059 = (i__18009 + (1));
seq__18005 = G__18056;
chunk__18007 = G__18057;
count__18008 = G__18058;
i__18009 = G__18059;
continue;
} else {
var G__18060 = seq__18005;
var G__18061 = chunk__18007;
var G__18062 = count__18008;
var G__18063 = (i__18009 + (1));
seq__18005 = G__18060;
chunk__18007 = G__18061;
count__18008 = G__18062;
i__18009 = G__18063;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__18005);
if(temp__5804__auto__){
var seq__18005__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__18005__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18005__$1);
var G__18064 = cljs.core.chunk_rest(seq__18005__$1);
var G__18065 = c__5525__auto__;
var G__18066 = cljs.core.count(c__5525__auto__);
var G__18067 = (0);
seq__18005 = G__18064;
chunk__18007 = G__18065;
count__18008 = G__18066;
i__18009 = G__18067;
continue;
} else {
var map__18020 = cljs.core.first(seq__18005__$1);
var map__18020__$1 = cljs.core.__destructure_map(map__18020);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18020__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__18068 = cljs.core.next(seq__18005__$1);
var G__18069 = null;
var G__18070 = (0);
var G__18071 = (0);
seq__18005 = G__18068;
chunk__18007 = G__18069;
count__18008 = G__18070;
i__18009 = G__18071;
continue;
} else {
var G__18072 = cljs.core.next(seq__18005__$1);
var G__18073 = null;
var G__18074 = (0);
var G__18075 = (0);
seq__18005 = G__18072;
chunk__18007 = G__18073;
count__18008 = G__18074;
i__18009 = G__18075;
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
