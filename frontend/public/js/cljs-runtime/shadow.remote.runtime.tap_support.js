goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__20375,p__20376){
var map__20377 = p__20375;
var map__20377__$1 = cljs.core.__destructure_map(map__20377);
var svc = map__20377__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20377__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20377__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20377__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20378 = p__20376;
var map__20378__$1 = cljs.core.__destructure_map(map__20378);
var msg = map__20378__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20378__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20378__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20378__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20378__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__20387,p__20388){
var map__20393 = p__20387;
var map__20393__$1 = cljs.core.__destructure_map(map__20393);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20393__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__20394 = p__20388;
var map__20394__$1 = cljs.core.__destructure_map(map__20394);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20394__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__20395,p__20396){
var map__20397 = p__20395;
var map__20397__$1 = cljs.core.__destructure_map(map__20397);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20397__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20397__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__20398 = p__20396;
var map__20398__$1 = cljs.core.__destructure_map(map__20398);
var msg = map__20398__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20398__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__20409,tid){
var map__20410 = p__20409;
var map__20410__$1 = cljs.core.__destructure_map(map__20410);
var svc = map__20410__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20410__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__20422 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__20423 = null;
var count__20424 = (0);
var i__20425 = (0);
while(true){
if((i__20425 < count__20424)){
var vec__20442 = chunk__20423.cljs$core$IIndexed$_nth$arity$2(null,i__20425);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20442,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20442,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20457 = seq__20422;
var G__20458 = chunk__20423;
var G__20459 = count__20424;
var G__20460 = (i__20425 + (1));
seq__20422 = G__20457;
chunk__20423 = G__20458;
count__20424 = G__20459;
i__20425 = G__20460;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20422);
if(temp__5804__auto__){
var seq__20422__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20422__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20422__$1);
var G__20461 = cljs.core.chunk_rest(seq__20422__$1);
var G__20462 = c__5525__auto__;
var G__20463 = cljs.core.count(c__5525__auto__);
var G__20464 = (0);
seq__20422 = G__20461;
chunk__20423 = G__20462;
count__20424 = G__20463;
i__20425 = G__20464;
continue;
} else {
var vec__20445 = cljs.core.first(seq__20422__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20445,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20445,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__20465 = cljs.core.next(seq__20422__$1);
var G__20466 = null;
var G__20467 = (0);
var G__20468 = (0);
seq__20422 = G__20465;
chunk__20423 = G__20466;
count__20424 = G__20467;
i__20425 = G__20468;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__20413_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__20413_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__20418_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__20418_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__20419_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__20419_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__20420_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__20420_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__20454){
var map__20455 = p__20454;
var map__20455__$1 = cljs.core.__destructure_map(map__20455);
var svc = map__20455__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20455__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20455__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
