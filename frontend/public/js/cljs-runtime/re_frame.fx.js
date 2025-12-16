goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__22946 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__22947 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__22947);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___23061 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___23061)){
var new_db_23062 = temp__5804__auto___23061;
var fexpr__22952_23063 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__22952_23063.cljs$core$IFn$_invoke$arity$1 ? fexpr__22952_23063.cljs$core$IFn$_invoke$arity$1(new_db_23062) : fexpr__22952_23063.call(null,new_db_23062));
} else {
}

var seq__22953 = cljs.core.seq(effects_without_db);
var chunk__22954 = null;
var count__22955 = (0);
var i__22956 = (0);
while(true){
if((i__22956 < count__22955)){
var vec__22965 = chunk__22954.cljs$core$IIndexed$_nth$arity$2(null,i__22956);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22965,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22965,(1),null);
var temp__5802__auto___23066 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23066)){
var effect_fn_23067 = temp__5802__auto___23066;
(effect_fn_23067.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23067.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23067.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23068 = seq__22953;
var G__23069 = chunk__22954;
var G__23070 = count__22955;
var G__23071 = (i__22956 + (1));
seq__22953 = G__23068;
chunk__22954 = G__23069;
count__22955 = G__23070;
i__22956 = G__23071;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22953);
if(temp__5804__auto__){
var seq__22953__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22953__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22953__$1);
var G__23072 = cljs.core.chunk_rest(seq__22953__$1);
var G__23073 = c__5525__auto__;
var G__23074 = cljs.core.count(c__5525__auto__);
var G__23075 = (0);
seq__22953 = G__23072;
chunk__22954 = G__23073;
count__22955 = G__23074;
i__22956 = G__23075;
continue;
} else {
var vec__22970 = cljs.core.first(seq__22953__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22970,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22970,(1),null);
var temp__5802__auto___23076 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23076)){
var effect_fn_23077 = temp__5802__auto___23076;
(effect_fn_23077.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23077.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23077.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23078 = cljs.core.next(seq__22953__$1);
var G__23079 = null;
var G__23080 = (0);
var G__23081 = (0);
seq__22953 = G__23078;
chunk__22954 = G__23079;
count__22955 = G__23080;
i__22956 = G__23081;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22646__auto___23082 = re_frame.interop.now();
var duration__22647__auto___23083 = (end__22646__auto___23082 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22647__auto___23083,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22646__auto___23082);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__22946);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___23084 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___23084)){
var new_db_23085 = temp__5804__auto___23084;
var fexpr__22973_23086 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__22973_23086.cljs$core$IFn$_invoke$arity$1 ? fexpr__22973_23086.cljs$core$IFn$_invoke$arity$1(new_db_23085) : fexpr__22973_23086.call(null,new_db_23085));
} else {
}

var seq__22974 = cljs.core.seq(effects_without_db);
var chunk__22975 = null;
var count__22976 = (0);
var i__22977 = (0);
while(true){
if((i__22977 < count__22976)){
var vec__22987 = chunk__22975.cljs$core$IIndexed$_nth$arity$2(null,i__22977);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22987,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22987,(1),null);
var temp__5802__auto___23087 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23087)){
var effect_fn_23089 = temp__5802__auto___23087;
(effect_fn_23089.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23089.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23089.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23090 = seq__22974;
var G__23091 = chunk__22975;
var G__23092 = count__22976;
var G__23093 = (i__22977 + (1));
seq__22974 = G__23090;
chunk__22975 = G__23091;
count__22976 = G__23092;
i__22977 = G__23093;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__22974);
if(temp__5804__auto__){
var seq__22974__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__22974__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__22974__$1);
var G__23094 = cljs.core.chunk_rest(seq__22974__$1);
var G__23095 = c__5525__auto__;
var G__23096 = cljs.core.count(c__5525__auto__);
var G__23097 = (0);
seq__22974 = G__23094;
chunk__22975 = G__23095;
count__22976 = G__23096;
i__22977 = G__23097;
continue;
} else {
var vec__22995 = cljs.core.first(seq__22974__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22995,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22995,(1),null);
var temp__5802__auto___23098 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23098)){
var effect_fn_23099 = temp__5802__auto___23098;
(effect_fn_23099.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23099.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23099.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23101 = cljs.core.next(seq__22974__$1);
var G__23102 = null;
var G__23103 = (0);
var G__23104 = (0);
seq__22974 = G__23101;
chunk__22975 = G__23102;
count__22976 = G__23103;
i__22977 = G__23104;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__22999){
var map__23000 = p__22999;
var map__23000__$1 = cljs.core.__destructure_map(map__23000);
var effect = map__23000__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23000__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23000__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__23001 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23002 = null;
var count__23003 = (0);
var i__23004 = (0);
while(true){
if((i__23004 < count__23003)){
var effect = chunk__23002.cljs$core$IIndexed$_nth$arity$2(null,i__23004);
re_frame.fx.dispatch_later(effect);


var G__23105 = seq__23001;
var G__23106 = chunk__23002;
var G__23107 = count__23003;
var G__23108 = (i__23004 + (1));
seq__23001 = G__23105;
chunk__23002 = G__23106;
count__23003 = G__23107;
i__23004 = G__23108;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23001);
if(temp__5804__auto__){
var seq__23001__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23001__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23001__$1);
var G__23109 = cljs.core.chunk_rest(seq__23001__$1);
var G__23110 = c__5525__auto__;
var G__23111 = cljs.core.count(c__5525__auto__);
var G__23112 = (0);
seq__23001 = G__23109;
chunk__23002 = G__23110;
count__23003 = G__23111;
i__23004 = G__23112;
continue;
} else {
var effect = cljs.core.first(seq__23001__$1);
re_frame.fx.dispatch_later(effect);


var G__23115 = cljs.core.next(seq__23001__$1);
var G__23116 = null;
var G__23117 = (0);
var G__23118 = (0);
seq__23001 = G__23115;
chunk__23002 = G__23116;
count__23003 = G__23117;
i__23004 = G__23118;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__23022 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__23023 = null;
var count__23024 = (0);
var i__23025 = (0);
while(true){
if((i__23025 < count__23024)){
var vec__23035 = chunk__23023.cljs$core$IIndexed$_nth$arity$2(null,i__23025);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23035,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23035,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___23119 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23119)){
var effect_fn_23120 = temp__5802__auto___23119;
(effect_fn_23120.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23120.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23120.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__23121 = seq__23022;
var G__23122 = chunk__23023;
var G__23123 = count__23024;
var G__23124 = (i__23025 + (1));
seq__23022 = G__23121;
chunk__23023 = G__23122;
count__23024 = G__23123;
i__23025 = G__23124;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23022);
if(temp__5804__auto__){
var seq__23022__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23022__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23022__$1);
var G__23125 = cljs.core.chunk_rest(seq__23022__$1);
var G__23126 = c__5525__auto__;
var G__23127 = cljs.core.count(c__5525__auto__);
var G__23128 = (0);
seq__23022 = G__23125;
chunk__23023 = G__23126;
count__23024 = G__23127;
i__23025 = G__23128;
continue;
} else {
var vec__23040 = cljs.core.first(seq__23022__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23040,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23040,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___23129 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23129)){
var effect_fn_23130 = temp__5802__auto___23129;
(effect_fn_23130.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23130.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23130.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__23133 = cljs.core.next(seq__23022__$1);
var G__23134 = null;
var G__23135 = (0);
var G__23136 = (0);
seq__23022 = G__23133;
chunk__23023 = G__23134;
count__23024 = G__23135;
i__23025 = G__23136;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__23048 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23049 = null;
var count__23050 = (0);
var i__23051 = (0);
while(true){
if((i__23051 < count__23050)){
var event = chunk__23049.cljs$core$IIndexed$_nth$arity$2(null,i__23051);
re_frame.router.dispatch(event);


var G__23137 = seq__23048;
var G__23138 = chunk__23049;
var G__23139 = count__23050;
var G__23140 = (i__23051 + (1));
seq__23048 = G__23137;
chunk__23049 = G__23138;
count__23050 = G__23139;
i__23051 = G__23140;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23048);
if(temp__5804__auto__){
var seq__23048__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23048__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23048__$1);
var G__23141 = cljs.core.chunk_rest(seq__23048__$1);
var G__23142 = c__5525__auto__;
var G__23143 = cljs.core.count(c__5525__auto__);
var G__23144 = (0);
seq__23048 = G__23141;
chunk__23049 = G__23142;
count__23050 = G__23143;
i__23051 = G__23144;
continue;
} else {
var event = cljs.core.first(seq__23048__$1);
re_frame.router.dispatch(event);


var G__23145 = cljs.core.next(seq__23048__$1);
var G__23146 = null;
var G__23147 = (0);
var G__23148 = (0);
seq__23048 = G__23145;
chunk__23049 = G__23146;
count__23050 = G__23147;
i__23051 = G__23148;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__23057 = cljs.core.seq(value);
var chunk__23058 = null;
var count__23059 = (0);
var i__23060 = (0);
while(true){
if((i__23060 < count__23059)){
var event = chunk__23058.cljs$core$IIndexed$_nth$arity$2(null,i__23060);
clear_event(event);


var G__23149 = seq__23057;
var G__23150 = chunk__23058;
var G__23151 = count__23059;
var G__23152 = (i__23060 + (1));
seq__23057 = G__23149;
chunk__23058 = G__23150;
count__23059 = G__23151;
i__23060 = G__23152;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23057);
if(temp__5804__auto__){
var seq__23057__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23057__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23057__$1);
var G__23153 = cljs.core.chunk_rest(seq__23057__$1);
var G__23154 = c__5525__auto__;
var G__23155 = cljs.core.count(c__5525__auto__);
var G__23156 = (0);
seq__23057 = G__23153;
chunk__23058 = G__23154;
count__23059 = G__23155;
i__23060 = G__23156;
continue;
} else {
var event = cljs.core.first(seq__23057__$1);
clear_event(event);


var G__23159 = cljs.core.next(seq__23057__$1);
var G__23160 = null;
var G__23161 = (0);
var G__23162 = (0);
seq__23057 = G__23159;
chunk__23058 = G__23160;
count__23059 = G__23161;
i__23060 = G__23162;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
