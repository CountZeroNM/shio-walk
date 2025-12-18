goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___21617 = arguments.length;
var i__5727__auto___21618 = (0);
while(true){
if((i__5727__auto___21618 < len__5726__auto___21617)){
args__5732__auto__.push((arguments[i__5727__auto___21618]));

var G__21619 = (i__5727__auto___21618 + (1));
i__5727__auto___21618 = G__21619;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq21169){
var G__21170 = cljs.core.first(seq21169);
var seq21169__$1 = cljs.core.next(seq21169);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__21170,seq21169__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__21173 = cljs.core.seq(sources);
var chunk__21174 = null;
var count__21175 = (0);
var i__21176 = (0);
while(true){
if((i__21176 < count__21175)){
var map__21181 = chunk__21174.cljs$core$IIndexed$_nth$arity$2(null,i__21176);
var map__21181__$1 = cljs.core.__destructure_map(map__21181);
var src = map__21181__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21181__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21181__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21181__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21181__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21182){var e_21620 = e21182;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21620);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21620.message)].join('')));
}

var G__21621 = seq__21173;
var G__21622 = chunk__21174;
var G__21623 = count__21175;
var G__21624 = (i__21176 + (1));
seq__21173 = G__21621;
chunk__21174 = G__21622;
count__21175 = G__21623;
i__21176 = G__21624;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21173);
if(temp__5804__auto__){
var seq__21173__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21173__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21173__$1);
var G__21625 = cljs.core.chunk_rest(seq__21173__$1);
var G__21626 = c__5525__auto__;
var G__21627 = cljs.core.count(c__5525__auto__);
var G__21628 = (0);
seq__21173 = G__21625;
chunk__21174 = G__21626;
count__21175 = G__21627;
i__21176 = G__21628;
continue;
} else {
var map__21185 = cljs.core.first(seq__21173__$1);
var map__21185__$1 = cljs.core.__destructure_map(map__21185);
var src = map__21185__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21185__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21185__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21185__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21185__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e21186){var e_21629 = e21186;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_21629);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_21629.message)].join('')));
}

var G__21630 = cljs.core.next(seq__21173__$1);
var G__21631 = null;
var G__21632 = (0);
var G__21633 = (0);
seq__21173 = G__21630;
chunk__21174 = G__21631;
count__21175 = G__21632;
i__21176 = G__21633;
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
var seq__21187 = cljs.core.seq(js_requires);
var chunk__21188 = null;
var count__21189 = (0);
var i__21190 = (0);
while(true){
if((i__21190 < count__21189)){
var js_ns = chunk__21188.cljs$core$IIndexed$_nth$arity$2(null,i__21190);
var require_str_21634 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21634);


var G__21635 = seq__21187;
var G__21636 = chunk__21188;
var G__21637 = count__21189;
var G__21638 = (i__21190 + (1));
seq__21187 = G__21635;
chunk__21188 = G__21636;
count__21189 = G__21637;
i__21190 = G__21638;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21187);
if(temp__5804__auto__){
var seq__21187__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21187__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21187__$1);
var G__21641 = cljs.core.chunk_rest(seq__21187__$1);
var G__21642 = c__5525__auto__;
var G__21643 = cljs.core.count(c__5525__auto__);
var G__21644 = (0);
seq__21187 = G__21641;
chunk__21188 = G__21642;
count__21189 = G__21643;
i__21190 = G__21644;
continue;
} else {
var js_ns = cljs.core.first(seq__21187__$1);
var require_str_21645 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_21645);


var G__21646 = cljs.core.next(seq__21187__$1);
var G__21647 = null;
var G__21648 = (0);
var G__21649 = (0);
seq__21187 = G__21646;
chunk__21188 = G__21647;
count__21189 = G__21648;
i__21190 = G__21649;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__21196){
var map__21197 = p__21196;
var map__21197__$1 = cljs.core.__destructure_map(map__21197);
var msg = map__21197__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21197__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21197__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5480__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21198(s__21199){
return (new cljs.core.LazySeq(null,(function (){
var s__21199__$1 = s__21199;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__21199__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__21206 = cljs.core.first(xs__6360__auto__);
var map__21206__$1 = cljs.core.__destructure_map(map__21206);
var src = map__21206__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21206__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21206__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5476__auto__ = ((function (s__21199__$1,map__21206,map__21206__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21197,map__21197__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21198_$_iter__21200(s__21201){
return (new cljs.core.LazySeq(null,((function (s__21199__$1,map__21206,map__21206__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21197,map__21197__$1,msg,info,reload_info){
return (function (){
var s__21201__$1 = s__21201;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__21201__$1);
if(temp__5804__auto____$1){
var s__21201__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__21201__$2)){
var c__5478__auto__ = cljs.core.chunk_first(s__21201__$2);
var size__5479__auto__ = cljs.core.count(c__5478__auto__);
var b__21203 = cljs.core.chunk_buffer(size__5479__auto__);
if((function (){var i__21202 = (0);
while(true){
if((i__21202 < size__5479__auto__)){
var warning = cljs.core._nth(c__5478__auto__,i__21202);
cljs.core.chunk_append(b__21203,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__21653 = (i__21202 + (1));
i__21202 = G__21653;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__21203),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21198_$_iter__21200(cljs.core.chunk_rest(s__21201__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__21203),null);
}
} else {
var warning = cljs.core.first(s__21201__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21198_$_iter__21200(cljs.core.rest(s__21201__$2)));
}
} else {
return null;
}
break;
}
});})(s__21199__$1,map__21206,map__21206__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21197,map__21197__$1,msg,info,reload_info))
,null,null));
});})(s__21199__$1,map__21206,map__21206__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__21197,map__21197__$1,msg,info,reload_info))
;
var fs__5477__auto__ = cljs.core.seq(iterys__5476__auto__(warnings));
if(fs__5477__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5477__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__21198(cljs.core.rest(s__21199__$1)));
} else {
var G__21654 = cljs.core.rest(s__21199__$1);
s__21199__$1 = G__21654;
continue;
}
} else {
var G__21655 = cljs.core.rest(s__21199__$1);
s__21199__$1 = G__21655;
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
var seq__21207_21656 = cljs.core.seq(warnings);
var chunk__21208_21657 = null;
var count__21209_21658 = (0);
var i__21210_21659 = (0);
while(true){
if((i__21210_21659 < count__21209_21658)){
var map__21213_21660 = chunk__21208_21657.cljs$core$IIndexed$_nth$arity$2(null,i__21210_21659);
var map__21213_21661__$1 = cljs.core.__destructure_map(map__21213_21660);
var w_21662 = map__21213_21661__$1;
var msg_21663__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21213_21661__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21664 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21213_21661__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21665 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21213_21661__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21666 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21213_21661__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21666)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21664),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21665),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21663__$1)].join(''));


var G__21667 = seq__21207_21656;
var G__21668 = chunk__21208_21657;
var G__21669 = count__21209_21658;
var G__21670 = (i__21210_21659 + (1));
seq__21207_21656 = G__21667;
chunk__21208_21657 = G__21668;
count__21209_21658 = G__21669;
i__21210_21659 = G__21670;
continue;
} else {
var temp__5804__auto___21671 = cljs.core.seq(seq__21207_21656);
if(temp__5804__auto___21671){
var seq__21207_21672__$1 = temp__5804__auto___21671;
if(cljs.core.chunked_seq_QMARK_(seq__21207_21672__$1)){
var c__5525__auto___21673 = cljs.core.chunk_first(seq__21207_21672__$1);
var G__21674 = cljs.core.chunk_rest(seq__21207_21672__$1);
var G__21675 = c__5525__auto___21673;
var G__21676 = cljs.core.count(c__5525__auto___21673);
var G__21677 = (0);
seq__21207_21656 = G__21674;
chunk__21208_21657 = G__21675;
count__21209_21658 = G__21676;
i__21210_21659 = G__21677;
continue;
} else {
var map__21214_21678 = cljs.core.first(seq__21207_21672__$1);
var map__21214_21679__$1 = cljs.core.__destructure_map(map__21214_21678);
var w_21680 = map__21214_21679__$1;
var msg_21681__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21214_21679__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_21682 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21214_21679__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_21683 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21214_21679__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_21684 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21214_21679__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_21684)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_21682),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_21683),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_21681__$1)].join(''));


var G__21686 = cljs.core.next(seq__21207_21672__$1);
var G__21687 = null;
var G__21688 = (0);
var G__21689 = (0);
seq__21207_21656 = G__21686;
chunk__21208_21657 = G__21687;
count__21209_21658 = G__21688;
i__21210_21659 = G__21689;
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

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__21194_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__21194_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
return cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var G__21216 = node_uri;
G__21216.setQuery(null);

G__21216.setPath(new$);

return G__21216;
})());
} else {
return and__5000__auto____$1;
}
} else {
return and__5000__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__21217){
var map__21221 = p__21217;
var map__21221__$1 = cljs.core.__destructure_map(map__21221);
var msg = map__21221__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21221__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21221__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__21223 = cljs.core.seq(updates);
var chunk__21225 = null;
var count__21226 = (0);
var i__21227 = (0);
while(true){
if((i__21227 < count__21226)){
var path = chunk__21225.cljs$core$IIndexed$_nth$arity$2(null,i__21227);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21373_21691 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21377_21692 = null;
var count__21378_21693 = (0);
var i__21379_21694 = (0);
while(true){
if((i__21379_21694 < count__21378_21693)){
var node_21695 = chunk__21377_21692.cljs$core$IIndexed$_nth$arity$2(null,i__21379_21694);
if(cljs.core.not(node_21695.shadow$old)){
var path_match_21696 = shadow.cljs.devtools.client.browser.match_paths(node_21695.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21696)){
var new_link_21697 = (function (){var G__21420 = node_21695.cloneNode(true);
G__21420.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21696),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21420;
})();
(node_21695.shadow$old = true);

(new_link_21697.onload = ((function (seq__21373_21691,chunk__21377_21692,count__21378_21693,i__21379_21694,seq__21223,chunk__21225,count__21226,i__21227,new_link_21697,path_match_21696,node_21695,path,map__21221,map__21221__$1,msg,updates,reload_info){
return (function (e){
var seq__21421_21698 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21423_21699 = null;
var count__21424_21700 = (0);
var i__21425_21701 = (0);
while(true){
if((i__21425_21701 < count__21424_21700)){
var map__21431_21702 = chunk__21423_21699.cljs$core$IIndexed$_nth$arity$2(null,i__21425_21701);
var map__21431_21703__$1 = cljs.core.__destructure_map(map__21431_21702);
var task_21704 = map__21431_21703__$1;
var fn_str_21705 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21431_21703__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21706 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21431_21703__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21707 = goog.getObjectByName(fn_str_21705,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21706)].join(''));

(fn_obj_21707.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21707.cljs$core$IFn$_invoke$arity$2(path,new_link_21697) : fn_obj_21707.call(null,path,new_link_21697));


var G__21708 = seq__21421_21698;
var G__21709 = chunk__21423_21699;
var G__21710 = count__21424_21700;
var G__21711 = (i__21425_21701 + (1));
seq__21421_21698 = G__21708;
chunk__21423_21699 = G__21709;
count__21424_21700 = G__21710;
i__21425_21701 = G__21711;
continue;
} else {
var temp__5804__auto___21712 = cljs.core.seq(seq__21421_21698);
if(temp__5804__auto___21712){
var seq__21421_21713__$1 = temp__5804__auto___21712;
if(cljs.core.chunked_seq_QMARK_(seq__21421_21713__$1)){
var c__5525__auto___21714 = cljs.core.chunk_first(seq__21421_21713__$1);
var G__21715 = cljs.core.chunk_rest(seq__21421_21713__$1);
var G__21716 = c__5525__auto___21714;
var G__21717 = cljs.core.count(c__5525__auto___21714);
var G__21718 = (0);
seq__21421_21698 = G__21715;
chunk__21423_21699 = G__21716;
count__21424_21700 = G__21717;
i__21425_21701 = G__21718;
continue;
} else {
var map__21432_21719 = cljs.core.first(seq__21421_21713__$1);
var map__21432_21720__$1 = cljs.core.__destructure_map(map__21432_21719);
var task_21721 = map__21432_21720__$1;
var fn_str_21722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21432_21720__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21432_21720__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21725 = goog.getObjectByName(fn_str_21722,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21723)].join(''));

(fn_obj_21725.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21725.cljs$core$IFn$_invoke$arity$2(path,new_link_21697) : fn_obj_21725.call(null,path,new_link_21697));


var G__21726 = cljs.core.next(seq__21421_21713__$1);
var G__21727 = null;
var G__21728 = (0);
var G__21729 = (0);
seq__21421_21698 = G__21726;
chunk__21423_21699 = G__21727;
count__21424_21700 = G__21728;
i__21425_21701 = G__21729;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21695);
});})(seq__21373_21691,chunk__21377_21692,count__21378_21693,i__21379_21694,seq__21223,chunk__21225,count__21226,i__21227,new_link_21697,path_match_21696,node_21695,path,map__21221,map__21221__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21696], 0));

goog.dom.insertSiblingAfter(new_link_21697,node_21695);


var G__21731 = seq__21373_21691;
var G__21732 = chunk__21377_21692;
var G__21733 = count__21378_21693;
var G__21734 = (i__21379_21694 + (1));
seq__21373_21691 = G__21731;
chunk__21377_21692 = G__21732;
count__21378_21693 = G__21733;
i__21379_21694 = G__21734;
continue;
} else {
var G__21735 = seq__21373_21691;
var G__21736 = chunk__21377_21692;
var G__21737 = count__21378_21693;
var G__21738 = (i__21379_21694 + (1));
seq__21373_21691 = G__21735;
chunk__21377_21692 = G__21736;
count__21378_21693 = G__21737;
i__21379_21694 = G__21738;
continue;
}
} else {
var G__21739 = seq__21373_21691;
var G__21740 = chunk__21377_21692;
var G__21741 = count__21378_21693;
var G__21742 = (i__21379_21694 + (1));
seq__21373_21691 = G__21739;
chunk__21377_21692 = G__21740;
count__21378_21693 = G__21741;
i__21379_21694 = G__21742;
continue;
}
} else {
var temp__5804__auto___21744 = cljs.core.seq(seq__21373_21691);
if(temp__5804__auto___21744){
var seq__21373_21745__$1 = temp__5804__auto___21744;
if(cljs.core.chunked_seq_QMARK_(seq__21373_21745__$1)){
var c__5525__auto___21746 = cljs.core.chunk_first(seq__21373_21745__$1);
var G__21747 = cljs.core.chunk_rest(seq__21373_21745__$1);
var G__21748 = c__5525__auto___21746;
var G__21749 = cljs.core.count(c__5525__auto___21746);
var G__21750 = (0);
seq__21373_21691 = G__21747;
chunk__21377_21692 = G__21748;
count__21378_21693 = G__21749;
i__21379_21694 = G__21750;
continue;
} else {
var node_21752 = cljs.core.first(seq__21373_21745__$1);
if(cljs.core.not(node_21752.shadow$old)){
var path_match_21754 = shadow.cljs.devtools.client.browser.match_paths(node_21752.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21754)){
var new_link_21756 = (function (){var G__21433 = node_21752.cloneNode(true);
G__21433.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21754),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21433;
})();
(node_21752.shadow$old = true);

(new_link_21756.onload = ((function (seq__21373_21691,chunk__21377_21692,count__21378_21693,i__21379_21694,seq__21223,chunk__21225,count__21226,i__21227,new_link_21756,path_match_21754,node_21752,seq__21373_21745__$1,temp__5804__auto___21744,path,map__21221,map__21221__$1,msg,updates,reload_info){
return (function (e){
var seq__21434_21759 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21436_21760 = null;
var count__21437_21761 = (0);
var i__21438_21762 = (0);
while(true){
if((i__21438_21762 < count__21437_21761)){
var map__21442_21763 = chunk__21436_21760.cljs$core$IIndexed$_nth$arity$2(null,i__21438_21762);
var map__21442_21764__$1 = cljs.core.__destructure_map(map__21442_21763);
var task_21765 = map__21442_21764__$1;
var fn_str_21766 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21442_21764__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21767 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21442_21764__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21768 = goog.getObjectByName(fn_str_21766,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21767)].join(''));

(fn_obj_21768.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21768.cljs$core$IFn$_invoke$arity$2(path,new_link_21756) : fn_obj_21768.call(null,path,new_link_21756));


var G__21769 = seq__21434_21759;
var G__21770 = chunk__21436_21760;
var G__21771 = count__21437_21761;
var G__21772 = (i__21438_21762 + (1));
seq__21434_21759 = G__21769;
chunk__21436_21760 = G__21770;
count__21437_21761 = G__21771;
i__21438_21762 = G__21772;
continue;
} else {
var temp__5804__auto___21773__$1 = cljs.core.seq(seq__21434_21759);
if(temp__5804__auto___21773__$1){
var seq__21434_21774__$1 = temp__5804__auto___21773__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21434_21774__$1)){
var c__5525__auto___21775 = cljs.core.chunk_first(seq__21434_21774__$1);
var G__21776 = cljs.core.chunk_rest(seq__21434_21774__$1);
var G__21777 = c__5525__auto___21775;
var G__21778 = cljs.core.count(c__5525__auto___21775);
var G__21779 = (0);
seq__21434_21759 = G__21776;
chunk__21436_21760 = G__21777;
count__21437_21761 = G__21778;
i__21438_21762 = G__21779;
continue;
} else {
var map__21443_21780 = cljs.core.first(seq__21434_21774__$1);
var map__21443_21781__$1 = cljs.core.__destructure_map(map__21443_21780);
var task_21782 = map__21443_21781__$1;
var fn_str_21783 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21443_21781__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21784 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21443_21781__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21785 = goog.getObjectByName(fn_str_21783,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21784)].join(''));

(fn_obj_21785.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21785.cljs$core$IFn$_invoke$arity$2(path,new_link_21756) : fn_obj_21785.call(null,path,new_link_21756));


var G__21786 = cljs.core.next(seq__21434_21774__$1);
var G__21787 = null;
var G__21788 = (0);
var G__21789 = (0);
seq__21434_21759 = G__21786;
chunk__21436_21760 = G__21787;
count__21437_21761 = G__21788;
i__21438_21762 = G__21789;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21752);
});})(seq__21373_21691,chunk__21377_21692,count__21378_21693,i__21379_21694,seq__21223,chunk__21225,count__21226,i__21227,new_link_21756,path_match_21754,node_21752,seq__21373_21745__$1,temp__5804__auto___21744,path,map__21221,map__21221__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21754], 0));

goog.dom.insertSiblingAfter(new_link_21756,node_21752);


var G__21790 = cljs.core.next(seq__21373_21745__$1);
var G__21791 = null;
var G__21792 = (0);
var G__21793 = (0);
seq__21373_21691 = G__21790;
chunk__21377_21692 = G__21791;
count__21378_21693 = G__21792;
i__21379_21694 = G__21793;
continue;
} else {
var G__21794 = cljs.core.next(seq__21373_21745__$1);
var G__21795 = null;
var G__21796 = (0);
var G__21797 = (0);
seq__21373_21691 = G__21794;
chunk__21377_21692 = G__21795;
count__21378_21693 = G__21796;
i__21379_21694 = G__21797;
continue;
}
} else {
var G__21800 = cljs.core.next(seq__21373_21745__$1);
var G__21801 = null;
var G__21802 = (0);
var G__21803 = (0);
seq__21373_21691 = G__21800;
chunk__21377_21692 = G__21801;
count__21378_21693 = G__21802;
i__21379_21694 = G__21803;
continue;
}
}
} else {
}
}
break;
}


var G__21804 = seq__21223;
var G__21805 = chunk__21225;
var G__21806 = count__21226;
var G__21807 = (i__21227 + (1));
seq__21223 = G__21804;
chunk__21225 = G__21805;
count__21226 = G__21806;
i__21227 = G__21807;
continue;
} else {
var G__21809 = seq__21223;
var G__21810 = chunk__21225;
var G__21811 = count__21226;
var G__21812 = (i__21227 + (1));
seq__21223 = G__21809;
chunk__21225 = G__21810;
count__21226 = G__21811;
i__21227 = G__21812;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__21223);
if(temp__5804__auto__){
var seq__21223__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__21223__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__21223__$1);
var G__21813 = cljs.core.chunk_rest(seq__21223__$1);
var G__21814 = c__5525__auto__;
var G__21815 = cljs.core.count(c__5525__auto__);
var G__21816 = (0);
seq__21223 = G__21813;
chunk__21225 = G__21814;
count__21226 = G__21815;
i__21227 = G__21816;
continue;
} else {
var path = cljs.core.first(seq__21223__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__21444_21817 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__21448_21818 = null;
var count__21449_21819 = (0);
var i__21450_21820 = (0);
while(true){
if((i__21450_21820 < count__21449_21819)){
var node_21821 = chunk__21448_21818.cljs$core$IIndexed$_nth$arity$2(null,i__21450_21820);
if(cljs.core.not(node_21821.shadow$old)){
var path_match_21822 = shadow.cljs.devtools.client.browser.match_paths(node_21821.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21822)){
var new_link_21823 = (function (){var G__21489 = node_21821.cloneNode(true);
G__21489.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21822),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21489;
})();
(node_21821.shadow$old = true);

(new_link_21823.onload = ((function (seq__21444_21817,chunk__21448_21818,count__21449_21819,i__21450_21820,seq__21223,chunk__21225,count__21226,i__21227,new_link_21823,path_match_21822,node_21821,path,seq__21223__$1,temp__5804__auto__,map__21221,map__21221__$1,msg,updates,reload_info){
return (function (e){
var seq__21490_21824 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21492_21825 = null;
var count__21493_21826 = (0);
var i__21494_21827 = (0);
while(true){
if((i__21494_21827 < count__21493_21826)){
var map__21508_21828 = chunk__21492_21825.cljs$core$IIndexed$_nth$arity$2(null,i__21494_21827);
var map__21508_21829__$1 = cljs.core.__destructure_map(map__21508_21828);
var task_21830 = map__21508_21829__$1;
var fn_str_21831 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21508_21829__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21832 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21508_21829__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21834 = goog.getObjectByName(fn_str_21831,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21832)].join(''));

(fn_obj_21834.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21834.cljs$core$IFn$_invoke$arity$2(path,new_link_21823) : fn_obj_21834.call(null,path,new_link_21823));


var G__21835 = seq__21490_21824;
var G__21836 = chunk__21492_21825;
var G__21837 = count__21493_21826;
var G__21838 = (i__21494_21827 + (1));
seq__21490_21824 = G__21835;
chunk__21492_21825 = G__21836;
count__21493_21826 = G__21837;
i__21494_21827 = G__21838;
continue;
} else {
var temp__5804__auto___21839__$1 = cljs.core.seq(seq__21490_21824);
if(temp__5804__auto___21839__$1){
var seq__21490_21840__$1 = temp__5804__auto___21839__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21490_21840__$1)){
var c__5525__auto___21841 = cljs.core.chunk_first(seq__21490_21840__$1);
var G__21842 = cljs.core.chunk_rest(seq__21490_21840__$1);
var G__21843 = c__5525__auto___21841;
var G__21844 = cljs.core.count(c__5525__auto___21841);
var G__21845 = (0);
seq__21490_21824 = G__21842;
chunk__21492_21825 = G__21843;
count__21493_21826 = G__21844;
i__21494_21827 = G__21845;
continue;
} else {
var map__21510_21846 = cljs.core.first(seq__21490_21840__$1);
var map__21510_21847__$1 = cljs.core.__destructure_map(map__21510_21846);
var task_21848 = map__21510_21847__$1;
var fn_str_21849 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21510_21847__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21850 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21510_21847__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21851 = goog.getObjectByName(fn_str_21849,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21850)].join(''));

(fn_obj_21851.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21851.cljs$core$IFn$_invoke$arity$2(path,new_link_21823) : fn_obj_21851.call(null,path,new_link_21823));


var G__21855 = cljs.core.next(seq__21490_21840__$1);
var G__21856 = null;
var G__21857 = (0);
var G__21858 = (0);
seq__21490_21824 = G__21855;
chunk__21492_21825 = G__21856;
count__21493_21826 = G__21857;
i__21494_21827 = G__21858;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21821);
});})(seq__21444_21817,chunk__21448_21818,count__21449_21819,i__21450_21820,seq__21223,chunk__21225,count__21226,i__21227,new_link_21823,path_match_21822,node_21821,path,seq__21223__$1,temp__5804__auto__,map__21221,map__21221__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21822], 0));

goog.dom.insertSiblingAfter(new_link_21823,node_21821);


var G__21859 = seq__21444_21817;
var G__21860 = chunk__21448_21818;
var G__21861 = count__21449_21819;
var G__21862 = (i__21450_21820 + (1));
seq__21444_21817 = G__21859;
chunk__21448_21818 = G__21860;
count__21449_21819 = G__21861;
i__21450_21820 = G__21862;
continue;
} else {
var G__21863 = seq__21444_21817;
var G__21864 = chunk__21448_21818;
var G__21865 = count__21449_21819;
var G__21866 = (i__21450_21820 + (1));
seq__21444_21817 = G__21863;
chunk__21448_21818 = G__21864;
count__21449_21819 = G__21865;
i__21450_21820 = G__21866;
continue;
}
} else {
var G__21867 = seq__21444_21817;
var G__21868 = chunk__21448_21818;
var G__21869 = count__21449_21819;
var G__21870 = (i__21450_21820 + (1));
seq__21444_21817 = G__21867;
chunk__21448_21818 = G__21868;
count__21449_21819 = G__21869;
i__21450_21820 = G__21870;
continue;
}
} else {
var temp__5804__auto___21871__$1 = cljs.core.seq(seq__21444_21817);
if(temp__5804__auto___21871__$1){
var seq__21444_21872__$1 = temp__5804__auto___21871__$1;
if(cljs.core.chunked_seq_QMARK_(seq__21444_21872__$1)){
var c__5525__auto___21873 = cljs.core.chunk_first(seq__21444_21872__$1);
var G__21874 = cljs.core.chunk_rest(seq__21444_21872__$1);
var G__21875 = c__5525__auto___21873;
var G__21876 = cljs.core.count(c__5525__auto___21873);
var G__21877 = (0);
seq__21444_21817 = G__21874;
chunk__21448_21818 = G__21875;
count__21449_21819 = G__21876;
i__21450_21820 = G__21877;
continue;
} else {
var node_21878 = cljs.core.first(seq__21444_21872__$1);
if(cljs.core.not(node_21878.shadow$old)){
var path_match_21879 = shadow.cljs.devtools.client.browser.match_paths(node_21878.getAttribute("href"),path);
if(cljs.core.truth_(path_match_21879)){
var new_link_21880 = (function (){var G__21515 = node_21878.cloneNode(true);
G__21515.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_21879),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__21515;
})();
(node_21878.shadow$old = true);

(new_link_21880.onload = ((function (seq__21444_21817,chunk__21448_21818,count__21449_21819,i__21450_21820,seq__21223,chunk__21225,count__21226,i__21227,new_link_21880,path_match_21879,node_21878,seq__21444_21872__$1,temp__5804__auto___21871__$1,path,seq__21223__$1,temp__5804__auto__,map__21221,map__21221__$1,msg,updates,reload_info){
return (function (e){
var seq__21516_21881 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__21518_21882 = null;
var count__21519_21883 = (0);
var i__21520_21884 = (0);
while(true){
if((i__21520_21884 < count__21519_21883)){
var map__21525_21885 = chunk__21518_21882.cljs$core$IIndexed$_nth$arity$2(null,i__21520_21884);
var map__21525_21886__$1 = cljs.core.__destructure_map(map__21525_21885);
var task_21887 = map__21525_21886__$1;
var fn_str_21888 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21525_21886__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21889 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21525_21886__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21890 = goog.getObjectByName(fn_str_21888,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21889)].join(''));

(fn_obj_21890.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21890.cljs$core$IFn$_invoke$arity$2(path,new_link_21880) : fn_obj_21890.call(null,path,new_link_21880));


var G__21891 = seq__21516_21881;
var G__21892 = chunk__21518_21882;
var G__21893 = count__21519_21883;
var G__21894 = (i__21520_21884 + (1));
seq__21516_21881 = G__21891;
chunk__21518_21882 = G__21892;
count__21519_21883 = G__21893;
i__21520_21884 = G__21894;
continue;
} else {
var temp__5804__auto___21895__$2 = cljs.core.seq(seq__21516_21881);
if(temp__5804__auto___21895__$2){
var seq__21516_21896__$1 = temp__5804__auto___21895__$2;
if(cljs.core.chunked_seq_QMARK_(seq__21516_21896__$1)){
var c__5525__auto___21897 = cljs.core.chunk_first(seq__21516_21896__$1);
var G__21898 = cljs.core.chunk_rest(seq__21516_21896__$1);
var G__21899 = c__5525__auto___21897;
var G__21900 = cljs.core.count(c__5525__auto___21897);
var G__21901 = (0);
seq__21516_21881 = G__21898;
chunk__21518_21882 = G__21899;
count__21519_21883 = G__21900;
i__21520_21884 = G__21901;
continue;
} else {
var map__21559_21902 = cljs.core.first(seq__21516_21896__$1);
var map__21559_21903__$1 = cljs.core.__destructure_map(map__21559_21902);
var task_21904 = map__21559_21903__$1;
var fn_str_21905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21559_21903__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_21906 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21559_21903__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_21907 = goog.getObjectByName(fn_str_21905,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_21906)].join(''));

(fn_obj_21907.cljs$core$IFn$_invoke$arity$2 ? fn_obj_21907.cljs$core$IFn$_invoke$arity$2(path,new_link_21880) : fn_obj_21907.call(null,path,new_link_21880));


var G__21908 = cljs.core.next(seq__21516_21896__$1);
var G__21909 = null;
var G__21910 = (0);
var G__21911 = (0);
seq__21516_21881 = G__21908;
chunk__21518_21882 = G__21909;
count__21519_21883 = G__21910;
i__21520_21884 = G__21911;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_21878);
});})(seq__21444_21817,chunk__21448_21818,count__21449_21819,i__21450_21820,seq__21223,chunk__21225,count__21226,i__21227,new_link_21880,path_match_21879,node_21878,seq__21444_21872__$1,temp__5804__auto___21871__$1,path,seq__21223__$1,temp__5804__auto__,map__21221,map__21221__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_21879], 0));

goog.dom.insertSiblingAfter(new_link_21880,node_21878);


var G__21912 = cljs.core.next(seq__21444_21872__$1);
var G__21913 = null;
var G__21914 = (0);
var G__21915 = (0);
seq__21444_21817 = G__21912;
chunk__21448_21818 = G__21913;
count__21449_21819 = G__21914;
i__21450_21820 = G__21915;
continue;
} else {
var G__21916 = cljs.core.next(seq__21444_21872__$1);
var G__21917 = null;
var G__21918 = (0);
var G__21919 = (0);
seq__21444_21817 = G__21916;
chunk__21448_21818 = G__21917;
count__21449_21819 = G__21918;
i__21450_21820 = G__21919;
continue;
}
} else {
var G__21920 = cljs.core.next(seq__21444_21872__$1);
var G__21921 = null;
var G__21922 = (0);
var G__21923 = (0);
seq__21444_21817 = G__21920;
chunk__21448_21818 = G__21921;
count__21449_21819 = G__21922;
i__21450_21820 = G__21923;
continue;
}
}
} else {
}
}
break;
}


var G__21924 = cljs.core.next(seq__21223__$1);
var G__21925 = null;
var G__21926 = (0);
var G__21927 = (0);
seq__21223 = G__21924;
chunk__21225 = G__21925;
count__21226 = G__21926;
i__21227 = G__21927;
continue;
} else {
var G__21928 = cljs.core.next(seq__21223__$1);
var G__21929 = null;
var G__21930 = (0);
var G__21931 = (0);
seq__21223 = G__21928;
chunk__21225 = G__21929;
count__21226 = G__21930;
i__21227 = G__21931;
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
try{var G__21595 = shadow.cljs.devtools.client.browser.global_eval(code);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21595) : success.call(null,G__21595));
}catch (e21594){var e = e21594;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$5 = (function (this$,ns,p__21596,success,fail){
var map__21597 = p__21596;
var map__21597__$1 = cljs.core.__destructure_map(map__21597);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21597__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
try{var G__21600 = shadow.cljs.devtools.client.browser.global_eval(js);
return (success.cljs$core$IFn$_invoke$arity$1 ? success.cljs$core$IFn$_invoke$arity$1(G__21600) : success.call(null,G__21600));
}catch (e21599){var e = e21599;
return (fail.cljs$core$IFn$_invoke$arity$1 ? fail.cljs$core$IFn$_invoke$arity$1(e) : fail.call(null,e));
}}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__21601,done,error){
var map__21602 = p__21601;
var map__21602__$1 = cljs.core.__destructure_map(map__21602);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21602__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__21603,done,error){
var map__21604 = p__21603;
var map__21604__$1 = cljs.core.__destructure_map(map__21604);
var msg = map__21604__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21604__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21604__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21604__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__21605){
var map__21606 = p__21605;
var map__21606__$1 = cljs.core.__destructure_map(map__21606);
var src = map__21606__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21606__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5000__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5000__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5000__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__21607 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__21607) : done.call(null,G__21607));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__21608){
var map__21609 = p__21608;
var map__21609__$1 = cljs.core.__destructure_map(map__21609);
var msg__$1 = map__21609__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21609__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e21610){var ex = e21610;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__21611){
var map__21612 = p__21611;
var map__21612__$1 = cljs.core.__destructure_map(map__21612);
var env = map__21612__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21612__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
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
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__21613){
var map__21614 = p__21613;
var map__21614__$1 = cljs.core.__destructure_map(map__21614);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21614__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21614__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
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
}),(function (p__21615){
var map__21616 = p__21615;
var map__21616__$1 = cljs.core.__destructure_map(map__21616);
var svc = map__21616__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21616__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
