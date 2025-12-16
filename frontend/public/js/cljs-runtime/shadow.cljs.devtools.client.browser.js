goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21405 = arguments.length;
var i__5727__auto___21406 = (0);
while(true){
if((i__5727__auto___21406 < len__5726__auto___21405)){
args__5732__auto__.push((arguments[i__5727__auto___21406]));

var G__21407 = (i__5727__auto___21406 + (1));
i__5727__auto___21406 = G__21407;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq20964){
var G__20965 = cljs.core.first(seq20964);
var seq20964__$1 = cljs.core.next(seq20964);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20965,seq20964__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__20969 = cljs.core.seq(sources);
var chunk__20970 = null;
var count__20971 = (0);
var i__20972 = (0);
while(true){
if((i__20972 < count__20971)){
var map__20977 = chunk__20970.cljs$core$IIndexed$_nth$arity$2(null,i__20972);
var map__20977__$1 = cljs.core.__destructure_map(map__20977);
var src = map__20977__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20977__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20977__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20977__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20977__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20978){var e_21420 = e20978;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21420);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21420.message)].join('')));
}

var G__21421 = seq__20969;
var G__21422 = chunk__20970;
var G__21423 = count__20971;
var G__21424 = (i__20972 + (1));
seq__20969 = G__21421;
chunk__20970 = G__21422;
count__20971 = G__21423;
i__20972 = G__21424;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20969);
if(temp__5804__auto__){
var seq__20969__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20969__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20969__$1);
var G__21425 = cljs.core.chunk_rest(seq__20969__$1);
var G__21426 = c__5525__auto__;
var G__21427 = cljs.core.count(c__5525__auto__);
var G__21428 = (0);
seq__20969 = G__21425;
chunk__20970 = G__21426;
count__20971 = G__21427;
i__20972 = G__21428;
continue;
} else {
var map__20981 = cljs.core.first(seq__20969__$1);
var map__20981__$1 = cljs.core.__destructure_map(map__20981);
var src = map__20981__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20981__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20981__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20981__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20981__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e20983){var e_21430 = e20983;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21430);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21430.message)].join('')));
}

var G__21431 = cljs.core.next(seq__20969__$1);
var G__21432 = null;
var G__21433 = (0);
var G__21434 = (0);
seq__20969 = G__21431;
chunk__20970 = G__21432;
count__20971 = G__21433;
i__20972 = G__21434;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (next){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (next.cljs$core$IFn$_invoke$arity$0 ? next.cljs$core$IFn$_invoke$arity$0() : next.call(null));
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__20985 = cljs.core.seq(js_requires);
var chunk__20986 = null;
var count__20987 = (0);
var i__20988 = (0);
while(true){
if((i__20988 < count__20987)){
var js_ns = chunk__20986.cljs$core$IIndexed$_nth$arity$2(null,i__20988);
var require_str_21440 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21440);


var G__21441 = seq__20985;
var G__21442 = chunk__20986;
var G__21443 = count__20987;
var G__21444 = (i__20988 + (1));
seq__20985 = G__21441;
chunk__20986 = G__21442;
count__20987 = G__21443;
i__20988 = G__21444;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__20985);
if(temp__5804__auto__){
var seq__20985__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__20985__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__20985__$1);
var G__21445 = cljs.core.chunk_rest(seq__20985__$1);
var G__21446 = c__5525__auto__;
var G__21448 = cljs.core.count(c__5525__auto__);
var G__21449 = (0);
seq__20985 = G__21445;
chunk__20986 = G__21446;
count__20987 = G__21448;
i__20988 = G__21449;
continue;
} else {
var js_ns = cljs.core.first(seq__20985__$1);
var require_str_21451 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21451);


var G__21452 = cljs.core.next(seq__20985__$1);
var G__21453 = null;
var G__21454 = (0);
var G__21455 = (0);
seq__20985 = G__21452;
chunk__20986 = G__21453;
count__20987 = G__21454;
i__20988 = G__21455;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__20991){
var map__20992 = p__20991;
var map__20992__$1 = cljs.core.__destructure_map(map__20992);
var msg = map__20992__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20992__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20992__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20994(s__20995){
return (new cljs.core.LazySeq(null,(function (){
var s__20995__$1 = s__20995;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__20995__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21001 = cljs.core.first(xs__6360__auto__);
var map__21001__$1 = cljs.core.__destructure_map(map__21001);
var src = map__21001__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21001__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21001__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__20995__$1,map__21001,map__21001__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20992,map__20992__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20994_$_iter__20996(s__20997){
return (new cljs.core.LazySeq(null,((function (s__20995__$1,map__21001,map__21001__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20992,map__20992__$1,msg,info,reload_info){
return (function (){
var s__20997__$1 = s__20997;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__20997__$1);
if(temp__5804__auto____$1){
var s__20997__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20997__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__20997__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__20999 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__20998 = (0);
while(true){
if((i__20998 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__20998);
cljs.core.chunk_append(b__20999,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21462 = (i__20998 + (1));
i__20998 = G__21462;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20999),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20994_$_iter__20996(cljs.core.chunk_rest(s__20997__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20999),null);
}
} else {
var warning = cljs.core.first(s__20997__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20994_$_iter__20996(cljs.core.rest(s__20997__$2)));
}
} else {
return null;
}
break;
}
});})(s__20995__$1,map__21001,map__21001__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20992,map__20992__$1,msg,info,reload_info))
,null,null));
});})(s__20995__$1,map__21001,map__21001__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__20992,map__20992__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__20994(cljs.core.rest(s__20995__$1)));
} else {
var G__21465 = cljs.core.rest(s__20995__$1);
s__20995__$1 = G__21465;
continue;
}
} else {
var G__21467 = cljs.core.rest(s__20995__$1);
s__20995__$1 = G__21467;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5480__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__21006_21468 = cljs.core.seq(warnings);
var chunk__21007_21469 = null;
var count__21008_21470 = (0);
var i__21009_21471 = (0);
while(true){
if((i__21009_21471 < count__21008_21470)){
var map__21023_21473 = chunk__21007_21469.cljs$core$IIndexed$_nth$arity$2(null,i__21009_21471);
var map__21023_21474__$1 = cljs.core.__destructure_map(map__21023_21473);
var w_21476 = map__21023_21474__$1;
var msg_21477__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21023_21474__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21478 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21023_21474__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21479 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21023_21474__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21480 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21023_21474__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21480)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21478),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21479),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21477__$1)].join(''));


var G__21482 = seq__21006_21468;
var G__21483 = chunk__21007_21469;
var G__21484 = count__21008_21470;
var G__21485 = (i__21009_21471 + (1));
seq__21006_21468 = G__21482;
chunk__21007_21469 = G__21483;
count__21008_21470 = G__21484;
i__21009_21471 = G__21485;
continue;
} else {
var temp__5804__auto___21486 = cljs.core.seq(seq__21006_21468);
if(temp__5804__auto___21486){
var seq__21006_21487__$1 = temp__5804__auto___21486;
if(cljs.core.chunked_seq_QMARK_(seq__21006_21487__$1)){
var c__5525__auto___21488 = cljs.core.chunk_first(seq__21006_21487__$1);
var G__21489 = cljs.core.chunk_rest(seq__21006_21487__$1);
var G__21490 = c__5525__auto___21488;
var G__21491 = cljs.core.count(c__5525__auto___21488);
var G__21492 = (0);
seq__21006_21468 = G__21489;
chunk__21007_21469 = G__21490;
count__21008_21470 = G__21491;
i__21009_21471 = G__21492;
continue;
} else {
var map__21029_21493 = cljs.core.first(seq__21006_21487__$1);
var map__21029_21494__$1 = cljs.core.__destructure_map(map__21029_21493);
var w_21495 = map__21029_21494__$1;
var msg_21496__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21029_21494__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21497 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21029_21494__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21498 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21029_21494__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21499 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21029_21494__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21499)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21497),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21498),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21496__$1)].join(''));


var G__21501 = cljs.core.next(seq__21006_21487__$1);
var G__21502 = null;
var G__21503 = (0);
var G__21504 = (0);
seq__21006_21468 = G__21501;
chunk__21007_21469 = G__21502;
count__21008_21470 = G__21503;
i__21009_21471 = G__21504;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__20990_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__20990_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5000__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5000__auto__){
var and__5000__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5000__auto____$1){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21053 = node_uri;
G__21053.setQuery(null);

G__21053.setPath(new$);

return G__21053;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21063){
var map__21066 = p__21063;
var map__21066__$1 = cljs.core.__destructure_map(map__21066);
var msg = map__21066__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21066__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21066__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21067 = cljs.core.seq(updates);
var chunk__21069 = null;
var count__21070 = (0);
var i__21071 = (0);
while(true){
if((i__21071 < count__21070)){
var path = chunk__21069.cljs$core$IIndexed$_nth$arity$2(null,i__21071);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21226_21511 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21230_21512 = null;
var count__21231_21513 = (0);
var i__21232_21514 = (0);
while(true){
if((i__21232_21514 < count__21231_21513)){
var node_21518 = chunk__21230_21512.cljs$core$IIndexed$_nth$arity$2(null,i__21232_21514);
if(cljs.core.not(node_21518.shadow$old)){
var path_match_21519 = shadow.cljs.devtools.client.browser.match_paths(node_21518.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21519)){
var new_link_21521 = (function (){var G__21263 = node_21518.cloneNode(true);
G__21263.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21519),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21263;
})();
(node_21518.shadow$old = true);

(new_link_21521.onload = ((function (seq__21226_21511,chunk__21230_21512,count__21231_21513,i__21232_21514,seq__21067,chunk__21069,count__21070,i__21071,new_link_21521,path_match_21519,node_21518,path,map__21066,map__21066__$1,msg,updates,reload_info){
return (function (e){
var seq__21264_21523 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21266_21524 = null;
var count__21267_21525 = (0);
var i__21268_21526 = (0);
while(true){
if((i__21268_21526 < count__21267_21525)){
var map__21277_21527 = chunk__21266_21524.cljs$core$IIndexed$_nth$arity$2(null,i__21268_21526);
var map__21277_21528__$1 = cljs.core.__destructure_map(map__21277_21527);
var task_21529 = map__21277_21528__$1;
var fn_str_21530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21277_21528__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21531 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21277_21528__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21532 = goog.getObjectByName(fn_str_21530,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21531)].join(''));

(fn_obj_21532.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21532.cljs$core$IFn$_invoke$arity$2(path,new_link_21521) : fn_obj_21532.call(null,path,new_link_21521));


var G__21533 = seq__21264_21523;
var G__21534 = chunk__21266_21524;
var G__21535 = count__21267_21525;
var G__21536 = (i__21268_21526 + (1));
seq__21264_21523 = G__21533;
chunk__21266_21524 = G__21534;
count__21267_21525 = G__21535;
i__21268_21526 = G__21536;
continue;
} else {
var temp__5804__auto___21537 = cljs.core.seq(seq__21264_21523);
if(temp__5804__auto___21537){
var seq__21264_21538__$1 = temp__5804__auto___21537;
if(cljs.core.chunked_seq_QMARK_(seq__21264_21538__$1)){
var c__5525__auto___21539 = cljs.core.chunk_first(seq__21264_21538__$1);
var G__21540 = cljs.core.chunk_rest(seq__21264_21538__$1);
var G__21541 = c__5525__auto___21539;
var G__21542 = cljs.core.count(c__5525__auto___21539);
var G__21543 = (0);
seq__21264_21523 = G__21540;
chunk__21266_21524 = G__21541;
count__21267_21525 = G__21542;
i__21268_21526 = G__21543;
continue;
} else {
var map__21278_21544 = cljs.core.first(seq__21264_21538__$1);
var map__21278_21545__$1 = cljs.core.__destructure_map(map__21278_21544);
var task_21546 = map__21278_21545__$1;
var fn_str_21547 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21278_21545__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21548 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21278_21545__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21549 = goog.getObjectByName(fn_str_21547,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21548)].join(''));

(fn_obj_21549.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21549.cljs$core$IFn$_invoke$arity$2(path,new_link_21521) : fn_obj_21549.call(null,path,new_link_21521));


var G__21551 = cljs.core.next(seq__21264_21538__$1);
var G__21552 = null;
var G__21553 = (0);
var G__21554 = (0);
seq__21264_21523 = G__21551;
chunk__21266_21524 = G__21552;
count__21267_21525 = G__21553;
i__21268_21526 = G__21554;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21518);
});})(seq__21226_21511,chunk__21230_21512,count__21231_21513,i__21232_21514,seq__21067,chunk__21069,count__21070,i__21071,new_link_21521,path_match_21519,node_21518,path,map__21066,map__21066__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21519], 0));

goog.dom.insertSiblingAfter(new_link_21521,node_21518);


var G__21556 = seq__21226_21511;
var G__21557 = chunk__21230_21512;
var G__21558 = count__21231_21513;
var G__21559 = (i__21232_21514 + (1));
seq__21226_21511 = G__21556;
chunk__21230_21512 = G__21557;
count__21231_21513 = G__21558;
i__21232_21514 = G__21559;
continue;
} else {
var G__21560 = seq__21226_21511;
var G__21561 = chunk__21230_21512;
var G__21562 = count__21231_21513;
var G__21563 = (i__21232_21514 + (1));
seq__21226_21511 = G__21560;
chunk__21230_21512 = G__21561;
count__21231_21513 = G__21562;
i__21232_21514 = G__21563;
continue;
}
} else {
var G__21564 = seq__21226_21511;
var G__21565 = chunk__21230_21512;
var G__21566 = count__21231_21513;
var G__21567 = (i__21232_21514 + (1));
seq__21226_21511 = G__21564;
chunk__21230_21512 = G__21565;
count__21231_21513 = G__21566;
i__21232_21514 = G__21567;
continue;
}
} else {
var temp__5804__auto___21568 = cljs.core.seq(seq__21226_21511);
if(temp__5804__auto___21568){
var seq__21226_21569__$1 = temp__5804__auto___21568;
if(cljs.core.chunked_seq_QMARK_(seq__21226_21569__$1)){
var c__5525__auto___21570 = cljs.core.chunk_first(seq__21226_21569__$1);
var G__21571 = cljs.core.chunk_rest(seq__21226_21569__$1);
var G__21572 = c__5525__auto___21570;
var G__21573 = cljs.core.count(c__5525__auto___21570);
var G__21574 = (0);
seq__21226_21511 = G__21571;
chunk__21230_21512 = G__21572;
count__21231_21513 = G__21573;
i__21232_21514 = G__21574;
continue;
} else {
var node_21575 = cljs.core.first(seq__21226_21569__$1);
if(cljs.core.not(node_21575.shadow$old)){
var path_match_21576 = shadow.cljs.devtools.client.browser.match_paths(node_21575.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21576)){
var new_link_21577 = (function (){var G__21279 = node_21575.cloneNode(true);
G__21279.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21576),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21279;
})();
(node_21575.shadow$old = true);

(new_link_21577.onload = ((function (seq__21226_21511,chunk__21230_21512,count__21231_21513,i__21232_21514,seq__21067,chunk__21069,count__21070,i__21071,new_link_21577,path_match_21576,node_21575,seq__21226_21569__$1,temp__5804__auto___21568,path,map__21066,map__21066__$1,msg,updates,reload_info){
return (function (e){
var seq__21280_21580 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21282_21581 = null;
var count__21283_21582 = (0);
var i__21284_21583 = (0);
while(true){
if((i__21284_21583 < count__21283_21582)){
var map__21290_21586 = chunk__21282_21581.cljs$core$IIndexed$_nth$arity$2(null,i__21284_21583);
var map__21290_21587__$1 = cljs.core.__destructure_map(map__21290_21586);
var task_21588 = map__21290_21587__$1;
var fn_str_21589 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21290_21587__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21590 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21290_21587__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21591 = goog.getObjectByName(fn_str_21589,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21590)].join(''));

(fn_obj_21591.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21591.cljs$core$IFn$_invoke$arity$2(path,new_link_21577) : fn_obj_21591.call(null,path,new_link_21577));


var G__21592 = seq__21280_21580;
var G__21593 = chunk__21282_21581;
var G__21594 = count__21283_21582;
var G__21595 = (i__21284_21583 + (1));
seq__21280_21580 = G__21592;
chunk__21282_21581 = G__21593;
count__21283_21582 = G__21594;
i__21284_21583 = G__21595;
continue;
} else {
var temp__5804__auto___21596__$1 = cljs.core.seq(seq__21280_21580);
if(temp__5804__auto___21596__$1){
var seq__21280_21597__$1 = temp__5804__auto___21596__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21280_21597__$1)){
var c__5525__auto___21598 = cljs.core.chunk_first(seq__21280_21597__$1);
var G__21599 = cljs.core.chunk_rest(seq__21280_21597__$1);
var G__21600 = c__5525__auto___21598;
var G__21601 = cljs.core.count(c__5525__auto___21598);
var G__21602 = (0);
seq__21280_21580 = G__21599;
chunk__21282_21581 = G__21600;
count__21283_21582 = G__21601;
i__21284_21583 = G__21602;
continue;
} else {
var map__21291_21603 = cljs.core.first(seq__21280_21597__$1);
var map__21291_21604__$1 = cljs.core.__destructure_map(map__21291_21603);
var task_21605 = map__21291_21604__$1;
var fn_str_21606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21291_21604__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21291_21604__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21608 = goog.getObjectByName(fn_str_21606,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21607)].join(''));

(fn_obj_21608.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21608.cljs$core$IFn$_invoke$arity$2(path,new_link_21577) : fn_obj_21608.call(null,path,new_link_21577));


var G__21609 = cljs.core.next(seq__21280_21597__$1);
var G__21610 = null;
var G__21611 = (0);
var G__21612 = (0);
seq__21280_21580 = G__21609;
chunk__21282_21581 = G__21610;
count__21283_21582 = G__21611;
i__21284_21583 = G__21612;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21575);
});})(seq__21226_21511,chunk__21230_21512,count__21231_21513,i__21232_21514,seq__21067,chunk__21069,count__21070,i__21071,new_link_21577,path_match_21576,node_21575,seq__21226_21569__$1,temp__5804__auto___21568,path,map__21066,map__21066__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21576], 0));

goog.dom.insertSiblingAfter(new_link_21577,node_21575);


var G__21613 = cljs.core.next(seq__21226_21569__$1);
var G__21614 = null;
var G__21615 = (0);
var G__21616 = (0);
seq__21226_21511 = G__21613;
chunk__21230_21512 = G__21614;
count__21231_21513 = G__21615;
i__21232_21514 = G__21616;
continue;
} else {
var G__21617 = cljs.core.next(seq__21226_21569__$1);
var G__21618 = null;
var G__21619 = (0);
var G__21620 = (0);
seq__21226_21511 = G__21617;
chunk__21230_21512 = G__21618;
count__21231_21513 = G__21619;
i__21232_21514 = G__21620;
continue;
}
} else {
var G__21621 = cljs.core.next(seq__21226_21569__$1);
var G__21622 = null;
var G__21623 = (0);
var G__21624 = (0);
seq__21226_21511 = G__21621;
chunk__21230_21512 = G__21622;
count__21231_21513 = G__21623;
i__21232_21514 = G__21624;
continue;
}
}
} else {
}
}
break;
}


var G__21625 = seq__21067;
var G__21626 = chunk__21069;
var G__21627 = count__21070;
var G__21628 = (i__21071 + (1));
seq__21067 = G__21625;
chunk__21069 = G__21626;
count__21070 = G__21627;
i__21071 = G__21628;
continue;
} else {
var G__21629 = seq__21067;
var G__21630 = chunk__21069;
var G__21631 = count__21070;
var G__21632 = (i__21071 + (1));
seq__21067 = G__21629;
chunk__21069 = G__21630;
count__21070 = G__21631;
i__21071 = G__21632;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21067);
if(temp__5804__auto__){
var seq__21067__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21067__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21067__$1);
var G__21633 = cljs.core.chunk_rest(seq__21067__$1);
var G__21634 = c__5525__auto__;
var G__21635 = cljs.core.count(c__5525__auto__);
var G__21636 = (0);
seq__21067 = G__21633;
chunk__21069 = G__21634;
count__21070 = G__21635;
i__21071 = G__21636;
continue;
} else {
var path = cljs.core.first(seq__21067__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21292_21637 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21296_21638 = null;
var count__21297_21639 = (0);
var i__21298_21640 = (0);
while(true){
if((i__21298_21640 < count__21297_21639)){
var node_21641 = chunk__21296_21638.cljs$core$IIndexed$_nth$arity$2(null,i__21298_21640);
if(cljs.core.not(node_21641.shadow$old)){
var path_match_21642 = shadow.cljs.devtools.client.browser.match_paths(node_21641.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21642)){
var new_link_21643 = (function (){var G__21332 = node_21641.cloneNode(true);
G__21332.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21642),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21332;
})();
(node_21641.shadow$old = true);

(new_link_21643.onload = ((function (seq__21292_21637,chunk__21296_21638,count__21297_21639,i__21298_21640,seq__21067,chunk__21069,count__21070,i__21071,new_link_21643,path_match_21642,node_21641,path,seq__21067__$1,temp__5804__auto__,map__21066,map__21066__$1,msg,updates,reload_info){
return (function (e){
var seq__21333_21644 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21335_21645 = null;
var count__21336_21646 = (0);
var i__21337_21647 = (0);
while(true){
if((i__21337_21647 < count__21336_21646)){
var map__21341_21648 = chunk__21335_21645.cljs$core$IIndexed$_nth$arity$2(null,i__21337_21647);
var map__21341_21649__$1 = cljs.core.__destructure_map(map__21341_21648);
var task_21650 = map__21341_21649__$1;
var fn_str_21651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21341_21649__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21652 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21341_21649__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21653 = goog.getObjectByName(fn_str_21651,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21652)].join(''));

(fn_obj_21653.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21653.cljs$core$IFn$_invoke$arity$2(path,new_link_21643) : fn_obj_21653.call(null,path,new_link_21643));


var G__21654 = seq__21333_21644;
var G__21655 = chunk__21335_21645;
var G__21656 = count__21336_21646;
var G__21657 = (i__21337_21647 + (1));
seq__21333_21644 = G__21654;
chunk__21335_21645 = G__21655;
count__21336_21646 = G__21656;
i__21337_21647 = G__21657;
continue;
} else {
var temp__5804__auto___21658__$1 = cljs.core.seq(seq__21333_21644);
if(temp__5804__auto___21658__$1){
var seq__21333_21659__$1 = temp__5804__auto___21658__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21333_21659__$1)){
var c__5525__auto___21660 = cljs.core.chunk_first(seq__21333_21659__$1);
var G__21661 = cljs.core.chunk_rest(seq__21333_21659__$1);
var G__21662 = c__5525__auto___21660;
var G__21663 = cljs.core.count(c__5525__auto___21660);
var G__21664 = (0);
seq__21333_21644 = G__21661;
chunk__21335_21645 = G__21662;
count__21336_21646 = G__21663;
i__21337_21647 = G__21664;
continue;
} else {
var map__21343_21665 = cljs.core.first(seq__21333_21659__$1);
var map__21343_21666__$1 = cljs.core.__destructure_map(map__21343_21665);
var task_21667 = map__21343_21666__$1;
var fn_str_21668 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21343_21666__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21669 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21343_21666__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21670 = goog.getObjectByName(fn_str_21668,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21669)].join(''));

(fn_obj_21670.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21670.cljs$core$IFn$_invoke$arity$2(path,new_link_21643) : fn_obj_21670.call(null,path,new_link_21643));


var G__21671 = cljs.core.next(seq__21333_21659__$1);
var G__21672 = null;
var G__21673 = (0);
var G__21674 = (0);
seq__21333_21644 = G__21671;
chunk__21335_21645 = G__21672;
count__21336_21646 = G__21673;
i__21337_21647 = G__21674;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21641);
});})(seq__21292_21637,chunk__21296_21638,count__21297_21639,i__21298_21640,seq__21067,chunk__21069,count__21070,i__21071,new_link_21643,path_match_21642,node_21641,path,seq__21067__$1,temp__5804__auto__,map__21066,map__21066__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21642], 0));

goog.dom.insertSiblingAfter(new_link_21643,node_21641);


var G__21675 = seq__21292_21637;
var G__21676 = chunk__21296_21638;
var G__21677 = count__21297_21639;
var G__21678 = (i__21298_21640 + (1));
seq__21292_21637 = G__21675;
chunk__21296_21638 = G__21676;
count__21297_21639 = G__21677;
i__21298_21640 = G__21678;
continue;
} else {
var G__21679 = seq__21292_21637;
var G__21680 = chunk__21296_21638;
var G__21681 = count__21297_21639;
var G__21682 = (i__21298_21640 + (1));
seq__21292_21637 = G__21679;
chunk__21296_21638 = G__21680;
count__21297_21639 = G__21681;
i__21298_21640 = G__21682;
continue;
}
} else {
var G__21683 = seq__21292_21637;
var G__21684 = chunk__21296_21638;
var G__21685 = count__21297_21639;
var G__21686 = (i__21298_21640 + (1));
seq__21292_21637 = G__21683;
chunk__21296_21638 = G__21684;
count__21297_21639 = G__21685;
i__21298_21640 = G__21686;
continue;
}
} else {
var temp__5804__auto___21687__$1 = cljs.core.seq(seq__21292_21637);
if(temp__5804__auto___21687__$1){
var seq__21292_21688__$1 = temp__5804__auto___21687__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21292_21688__$1)){
var c__5525__auto___21689 = cljs.core.chunk_first(seq__21292_21688__$1);
var G__21690 = cljs.core.chunk_rest(seq__21292_21688__$1);
var G__21691 = c__5525__auto___21689;
var G__21692 = cljs.core.count(c__5525__auto___21689);
var G__21693 = (0);
seq__21292_21637 = G__21690;
chunk__21296_21638 = G__21691;
count__21297_21639 = G__21692;
i__21298_21640 = G__21693;
continue;
} else {
var node_21694 = cljs.core.first(seq__21292_21688__$1);
if(cljs.core.not(node_21694.shadow$old)){
var path_match_21695 = shadow.cljs.devtools.client.browser.match_paths(node_21694.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21695)){
var new_link_21696 = (function (){var G__21344 = node_21694.cloneNode(true);
G__21344.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21695),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21344;
})();
(node_21694.shadow$old = true);

(new_link_21696.onload = ((function (seq__21292_21637,chunk__21296_21638,count__21297_21639,i__21298_21640,seq__21067,chunk__21069,count__21070,i__21071,new_link_21696,path_match_21695,node_21694,seq__21292_21688__$1,temp__5804__auto___21687__$1,path,seq__21067__$1,temp__5804__auto__,map__21066,map__21066__$1,msg,updates,reload_info){
return (function (e){
var seq__21345_21699 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21347_21700 = null;
var count__21348_21701 = (0);
var i__21349_21702 = (0);
while(true){
if((i__21349_21702 < count__21348_21701)){
var map__21354_21703 = chunk__21347_21700.cljs$core$IIndexed$_nth$arity$2(null,i__21349_21702);
var map__21354_21704__$1 = cljs.core.__destructure_map(map__21354_21703);
var task_21705 = map__21354_21704__$1;
var fn_str_21706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21354_21704__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21707 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21354_21704__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21708 = goog.getObjectByName(fn_str_21706,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21707)].join(''));

(fn_obj_21708.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21708.cljs$core$IFn$_invoke$arity$2(path,new_link_21696) : fn_obj_21708.call(null,path,new_link_21696));


var G__21709 = seq__21345_21699;
var G__21710 = chunk__21347_21700;
var G__21711 = count__21348_21701;
var G__21712 = (i__21349_21702 + (1));
seq__21345_21699 = G__21709;
chunk__21347_21700 = G__21710;
count__21348_21701 = G__21711;
i__21349_21702 = G__21712;
continue;
} else {
var temp__5804__auto___21713__$2 = cljs.core.seq(seq__21345_21699);
if(temp__5804__auto___21713__$2){
var seq__21345_21714__$1 = temp__5804__auto___21713__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21345_21714__$1)){
var c__5525__auto___21715 = cljs.core.chunk_first(seq__21345_21714__$1);
var G__21716 = cljs.core.chunk_rest(seq__21345_21714__$1);
var G__21717 = c__5525__auto___21715;
var G__21718 = cljs.core.count(c__5525__auto___21715);
var G__21719 = (0);
seq__21345_21699 = G__21716;
chunk__21347_21700 = G__21717;
count__21348_21701 = G__21718;
i__21349_21702 = G__21719;
continue;
} else {
var map__21356_21720 = cljs.core.first(seq__21345_21714__$1);
var map__21356_21721__$1 = cljs.core.__destructure_map(map__21356_21720);
var task_21722 = map__21356_21721__$1;
var fn_str_21723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21356_21721__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21724 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21356_21721__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21725 = goog.getObjectByName(fn_str_21723,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21724)].join(''));

(fn_obj_21725.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21725.cljs$core$IFn$_invoke$arity$2(path,new_link_21696) : fn_obj_21725.call(null,path,new_link_21696));


var G__21726 = cljs.core.next(seq__21345_21714__$1);
var G__21727 = null;
var G__21728 = (0);
var G__21729 = (0);
seq__21345_21699 = G__21726;
chunk__21347_21700 = G__21727;
count__21348_21701 = G__21728;
i__21349_21702 = G__21729;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21694);
});})(seq__21292_21637,chunk__21296_21638,count__21297_21639,i__21298_21640,seq__21067,chunk__21069,count__21070,i__21071,new_link_21696,path_match_21695,node_21694,seq__21292_21688__$1,temp__5804__auto___21687__$1,path,seq__21067__$1,temp__5804__auto__,map__21066,map__21066__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21695], 0));

goog.dom.insertSiblingAfter(new_link_21696,node_21694);


var G__21730 = cljs.core.next(seq__21292_21688__$1);
var G__21731 = null;
var G__21732 = (0);
var G__21733 = (0);
seq__21292_21637 = G__21730;
chunk__21296_21638 = G__21731;
count__21297_21639 = G__21732;
i__21298_21640 = G__21733;
continue;
} else {
var G__21734 = cljs.core.next(seq__21292_21688__$1);
var G__21735 = null;
var G__21736 = (0);
var G__21737 = (0);
seq__21292_21637 = G__21734;
chunk__21296_21638 = G__21735;
count__21297_21639 = G__21736;
i__21298_21640 = G__21737;
continue;
}
} else {
var G__21738 = cljs.core.next(seq__21292_21688__$1);
var G__21739 = null;
var G__21740 = (0);
var G__21741 = (0);
seq__21292_21637 = G__21738;
chunk__21296_21638 = G__21739;
count__21297_21639 = G__21740;
i__21298_21640 = G__21741;
continue;
}
}
} else {
}
}
break;
}


var G__21742 = cljs.core.next(seq__21067__$1);
var G__21743 = null;
var G__21744 = (0);
var G__21745 = (0);
seq__21067 = G__21742;
chunk__21069 = G__21743;
count__21070 = G__21744;
i__21071 = G__21745;
continue;
} else {
var G__21746 = cljs.core.next(seq__21067__$1);
var G__21747 = null;
var G__21748 = (0);
var G__21749 = (0);
seq__21067 = G__21746;
chunk__21069 = G__21747;
count__21070 = G__21748;
i__21071 = G__21749;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$4 = (function (this$,code,success,fail){
var this$__$1 = this;
try{var G__21372 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21372) : success.call(null,G__21372));
}catch (e21371){var e = e21371;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21373,success,fail){
var map__21374 = p__21373;
var map__21374__$1 = cljs.core.__destructure_map(map__21374);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21374__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21376 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21376) : success.call(null,G__21376));
}catch (e21375){var e = e21375;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21377,done,error){
var map__21378 = p__21377;
var map__21378__$1 = cljs.core.__destructure_map(map__21378);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21378__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21379,done,error){
var map__21380 = p__21379;
var map__21380__$1 = cljs.core.__destructure_map(map__21380);
var msg = map__21380__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21380__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21380__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21380__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21381){
var map__21382 = p__21381;
var map__21382__$1 = cljs.core.__destructure_map(map__21382);
var src = map__21382__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21382__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21387 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21387) : done.call(null,G__21387));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21388){
var map__21389 = p__21388;
var map__21389__$1 = cljs.core.__destructure_map(map__21389);
var msg__$1 = map__21389__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21389__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21390){var ex = e21390;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21391){
var map__21392 = p__21391;
var map__21392__$1 = cljs.core.__destructure_map(map__21392);
var env = map__21392__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21392__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21397){
var map__21398 = p__21397;
var map__21398__$1 = cljs.core.__destructure_map(map__21398);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21398__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21398__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__21399){
var map__21400 = p__21399;
var map__21400__$1 = cljs.core.__destructure_map(map__21400);
var svc = map__21400__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21400__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
