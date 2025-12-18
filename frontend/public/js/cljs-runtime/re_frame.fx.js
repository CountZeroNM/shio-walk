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
var _STAR_current_trace_STAR__orig_val__23002 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__23003 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__23003);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___23142 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___23142)){
var new_db_23143 = temp__5804__auto___23142;
var fexpr__23013_23144 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__23013_23144.cljs$core$IFn$_invoke$arity$1 ? fexpr__23013_23144.cljs$core$IFn$_invoke$arity$1(new_db_23143) : fexpr__23013_23144.call(null,new_db_23143));
} else {
}

var seq__23014 = cljs.core.seq(effects_without_db);
var chunk__23015 = null;
var count__23016 = (0);
var i__23017 = (0);
while(true){
if((i__23017 < count__23016)){
var vec__23029 = chunk__23015.cljs$core$IIndexed$_nth$arity$2(null,i__23017);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23029,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23029,(1),null);
var temp__5802__auto___23149 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23149)){
var effect_fn_23150 = temp__5802__auto___23149;
(effect_fn_23150.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23150.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23150.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23151 = seq__23014;
var G__23152 = chunk__23015;
var G__23153 = count__23016;
var G__23154 = (i__23017 + (1));
seq__23014 = G__23151;
chunk__23015 = G__23152;
count__23016 = G__23153;
i__23017 = G__23154;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23014);
if(temp__5804__auto__){
var seq__23014__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23014__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23014__$1);
var G__23155 = cljs.core.chunk_rest(seq__23014__$1);
var G__23156 = c__5525__auto__;
var G__23157 = cljs.core.count(c__5525__auto__);
var G__23158 = (0);
seq__23014 = G__23155;
chunk__23015 = G__23156;
count__23016 = G__23157;
i__23017 = G__23158;
continue;
} else {
var vec__23033 = cljs.core.first(seq__23014__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23033,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23033,(1),null);
var temp__5802__auto___23159 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23159)){
var effect_fn_23160 = temp__5802__auto___23159;
(effect_fn_23160.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23160.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23160.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23161 = cljs.core.next(seq__23014__$1);
var G__23162 = null;
var G__23163 = (0);
var G__23164 = (0);
seq__23014 = G__23161;
chunk__23015 = G__23162;
count__23016 = G__23163;
i__23017 = G__23164;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__22640__auto___23165 = re_frame.interop.now();
var duration__22641__auto___23166 = (end__22640__auto___23165 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22641__auto___23166,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__22640__auto___23165);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__23002);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5804__auto___23167 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5804__auto___23167)){
var new_db_23168 = temp__5804__auto___23167;
var fexpr__23038_23169 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__23038_23169.cljs$core$IFn$_invoke$arity$1 ? fexpr__23038_23169.cljs$core$IFn$_invoke$arity$1(new_db_23168) : fexpr__23038_23169.call(null,new_db_23168));
} else {
}

var seq__23040 = cljs.core.seq(effects_without_db);
var chunk__23041 = null;
var count__23042 = (0);
var i__23043 = (0);
while(true){
if((i__23043 < count__23042)){
var vec__23061 = chunk__23041.cljs$core$IIndexed$_nth$arity$2(null,i__23043);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23061,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23061,(1),null);
var temp__5802__auto___23170 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23170)){
var effect_fn_23171 = temp__5802__auto___23170;
(effect_fn_23171.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23171.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23171.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23172 = seq__23040;
var G__23173 = chunk__23041;
var G__23174 = count__23042;
var G__23175 = (i__23043 + (1));
seq__23040 = G__23172;
chunk__23041 = G__23173;
count__23042 = G__23174;
i__23043 = G__23175;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23040);
if(temp__5804__auto__){
var seq__23040__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23040__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23040__$1);
var G__23176 = cljs.core.chunk_rest(seq__23040__$1);
var G__23177 = c__5525__auto__;
var G__23178 = cljs.core.count(c__5525__auto__);
var G__23179 = (0);
seq__23040 = G__23176;
chunk__23041 = G__23177;
count__23042 = G__23178;
i__23043 = G__23179;
continue;
} else {
var vec__23081 = cljs.core.first(seq__23040__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23081,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23081,(1),null);
var temp__5802__auto___23180 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23180)){
var effect_fn_23181 = temp__5802__auto___23180;
(effect_fn_23181.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23181.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23181.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__23182 = cljs.core.next(seq__23040__$1);
var G__23183 = null;
var G__23184 = (0);
var G__23185 = (0);
seq__23040 = G__23182;
chunk__23041 = G__23183;
count__23042 = G__23184;
i__23043 = G__23185;
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
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__23089){
var map__23090 = p__23089;
var map__23090__$1 = cljs.core.__destructure_map(map__23090);
var effect = map__23090__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23090__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23090__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
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
var seq__23096 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23097 = null;
var count__23098 = (0);
var i__23099 = (0);
while(true){
if((i__23099 < count__23098)){
var effect = chunk__23097.cljs$core$IIndexed$_nth$arity$2(null,i__23099);
re_frame.fx.dispatch_later(effect);


var G__23191 = seq__23096;
var G__23192 = chunk__23097;
var G__23193 = count__23098;
var G__23194 = (i__23099 + (1));
seq__23096 = G__23191;
chunk__23097 = G__23192;
count__23098 = G__23193;
i__23099 = G__23194;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23096);
if(temp__5804__auto__){
var seq__23096__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23096__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23096__$1);
var G__23195 = cljs.core.chunk_rest(seq__23096__$1);
var G__23196 = c__5525__auto__;
var G__23197 = cljs.core.count(c__5525__auto__);
var G__23198 = (0);
seq__23096 = G__23195;
chunk__23097 = G__23196;
count__23098 = G__23197;
i__23099 = G__23198;
continue;
} else {
var effect = cljs.core.first(seq__23096__$1);
re_frame.fx.dispatch_later(effect);


var G__23200 = cljs.core.next(seq__23096__$1);
var G__23201 = null;
var G__23202 = (0);
var G__23203 = (0);
seq__23096 = G__23200;
chunk__23097 = G__23201;
count__23098 = G__23202;
i__23099 = G__23203;
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
var seq__23110 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__23111 = null;
var count__23112 = (0);
var i__23113 = (0);
while(true){
if((i__23113 < count__23112)){
var vec__23121 = chunk__23111.cljs$core$IIndexed$_nth$arity$2(null,i__23113);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23121,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23121,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___23204 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23204)){
var effect_fn_23205 = temp__5802__auto___23204;
(effect_fn_23205.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23205.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23205.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__23207 = seq__23110;
var G__23208 = chunk__23111;
var G__23209 = count__23112;
var G__23210 = (i__23113 + (1));
seq__23110 = G__23207;
chunk__23111 = G__23208;
count__23112 = G__23209;
i__23113 = G__23210;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23110);
if(temp__5804__auto__){
var seq__23110__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23110__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23110__$1);
var G__23212 = cljs.core.chunk_rest(seq__23110__$1);
var G__23213 = c__5525__auto__;
var G__23214 = cljs.core.count(c__5525__auto__);
var G__23215 = (0);
seq__23110 = G__23212;
chunk__23111 = G__23213;
count__23112 = G__23214;
i__23113 = G__23215;
continue;
} else {
var vec__23124 = cljs.core.first(seq__23110__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23124,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23124,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5802__auto___23216 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5802__auto___23216)){
var effect_fn_23217 = temp__5802__auto___23216;
(effect_fn_23217.cljs$core$IFn$_invoke$arity$1 ? effect_fn_23217.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_23217.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__23218 = cljs.core.next(seq__23110__$1);
var G__23219 = null;
var G__23220 = (0);
var G__23221 = (0);
seq__23110 = G__23218;
chunk__23111 = G__23219;
count__23112 = G__23220;
i__23113 = G__23221;
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
var seq__23128 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__23129 = null;
var count__23130 = (0);
var i__23131 = (0);
while(true){
if((i__23131 < count__23130)){
var event = chunk__23129.cljs$core$IIndexed$_nth$arity$2(null,i__23131);
re_frame.router.dispatch(event);


var G__23223 = seq__23128;
var G__23224 = chunk__23129;
var G__23225 = count__23130;
var G__23226 = (i__23131 + (1));
seq__23128 = G__23223;
chunk__23129 = G__23224;
count__23130 = G__23225;
i__23131 = G__23226;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23128);
if(temp__5804__auto__){
var seq__23128__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23128__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23128__$1);
var G__23227 = cljs.core.chunk_rest(seq__23128__$1);
var G__23228 = c__5525__auto__;
var G__23229 = cljs.core.count(c__5525__auto__);
var G__23230 = (0);
seq__23128 = G__23227;
chunk__23129 = G__23228;
count__23130 = G__23229;
i__23131 = G__23230;
continue;
} else {
var event = cljs.core.first(seq__23128__$1);
re_frame.router.dispatch(event);


var G__23231 = cljs.core.next(seq__23128__$1);
var G__23232 = null;
var G__23233 = (0);
var G__23234 = (0);
seq__23128 = G__23231;
chunk__23129 = G__23232;
count__23130 = G__23233;
i__23131 = G__23234;
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
var seq__23135 = cljs.core.seq(value);
var chunk__23136 = null;
var count__23137 = (0);
var i__23138 = (0);
while(true){
if((i__23138 < count__23137)){
var event = chunk__23136.cljs$core$IIndexed$_nth$arity$2(null,i__23138);
clear_event(event);


var G__23239 = seq__23135;
var G__23240 = chunk__23136;
var G__23241 = count__23137;
var G__23242 = (i__23138 + (1));
seq__23135 = G__23239;
chunk__23136 = G__23240;
count__23137 = G__23241;
i__23138 = G__23242;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__23135);
if(temp__5804__auto__){
var seq__23135__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__23135__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__23135__$1);
var G__23244 = cljs.core.chunk_rest(seq__23135__$1);
var G__23245 = c__5525__auto__;
var G__23246 = cljs.core.count(c__5525__auto__);
var G__23247 = (0);
seq__23135 = G__23244;
chunk__23136 = G__23245;
count__23137 = G__23246;
i__23138 = G__23247;
continue;
} else {
var event = cljs.core.first(seq__23135__$1);
clear_event(event);


var G__23250 = cljs.core.next(seq__23135__$1);
var G__23251 = null;
var G__23252 = (0);
var G__23253 = (0);
seq__23135 = G__23250;
chunk__23136 = G__23251;
count__23137 = G__23252;
i__23138 = G__23253;
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
