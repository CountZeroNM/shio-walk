goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18593){
var map__18594 = p__18593;
var map__18594__$1 = cljs.core.__destructure_map(map__18594);
var m = map__18594__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18594__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18594__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18692_19191 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18693_19192 = null;
var count__18694_19193 = (0);
var i__18695_19194 = (0);
while(true){
if((i__18695_19194 < count__18694_19193)){
var f_19195 = chunk__18693_19192.cljs$core$IIndexed$_nth$arity$2(null,i__18695_19194);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19195], 0));


var G__19196 = seq__18692_19191;
var G__19197 = chunk__18693_19192;
var G__19198 = count__18694_19193;
var G__19199 = (i__18695_19194 + (1));
seq__18692_19191 = G__19196;
chunk__18693_19192 = G__19197;
count__18694_19193 = G__19198;
i__18695_19194 = G__19199;
continue;
} else {
var temp__5804__auto___19200 = cljs.core.seq(seq__18692_19191);
if(temp__5804__auto___19200){
var seq__18692_19201__$1 = temp__5804__auto___19200;
if(cljs.core.chunked_seq_QMARK_(seq__18692_19201__$1)){
var c__5525__auto___19202 = cljs.core.chunk_first(seq__18692_19201__$1);
var G__19203 = cljs.core.chunk_rest(seq__18692_19201__$1);
var G__19204 = c__5525__auto___19202;
var G__19205 = cljs.core.count(c__5525__auto___19202);
var G__19206 = (0);
seq__18692_19191 = G__19203;
chunk__18693_19192 = G__19204;
count__18694_19193 = G__19205;
i__18695_19194 = G__19206;
continue;
} else {
var f_19207 = cljs.core.first(seq__18692_19201__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19207], 0));


var G__19209 = cljs.core.next(seq__18692_19201__$1);
var G__19210 = null;
var G__19211 = (0);
var G__19212 = (0);
seq__18692_19191 = G__19209;
chunk__18693_19192 = G__19210;
count__18694_19193 = G__19211;
i__18695_19194 = G__19212;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19213 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19213], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19213)))?cljs.core.second(arglists_19213):arglists_19213)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18804_19226 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18805_19227 = null;
var count__18806_19228 = (0);
var i__18807_19229 = (0);
while(true){
if((i__18807_19229 < count__18806_19228)){
var vec__18863_19230 = chunk__18805_19227.cljs$core$IIndexed$_nth$arity$2(null,i__18807_19229);
var name_19231 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18863_19230,(0),null);
var map__18866_19232 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18863_19230,(1),null);
var map__18866_19233__$1 = cljs.core.__destructure_map(map__18866_19232);
var doc_19234 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18866_19233__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19235 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18866_19233__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19231], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19235], 0));

if(cljs.core.truth_(doc_19234)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19234], 0));
} else {
}


var G__19244 = seq__18804_19226;
var G__19245 = chunk__18805_19227;
var G__19246 = count__18806_19228;
var G__19247 = (i__18807_19229 + (1));
seq__18804_19226 = G__19244;
chunk__18805_19227 = G__19245;
count__18806_19228 = G__19246;
i__18807_19229 = G__19247;
continue;
} else {
var temp__5804__auto___19252 = cljs.core.seq(seq__18804_19226);
if(temp__5804__auto___19252){
var seq__18804_19253__$1 = temp__5804__auto___19252;
if(cljs.core.chunked_seq_QMARK_(seq__18804_19253__$1)){
var c__5525__auto___19254 = cljs.core.chunk_first(seq__18804_19253__$1);
var G__19255 = cljs.core.chunk_rest(seq__18804_19253__$1);
var G__19256 = c__5525__auto___19254;
var G__19257 = cljs.core.count(c__5525__auto___19254);
var G__19258 = (0);
seq__18804_19226 = G__19255;
chunk__18805_19227 = G__19256;
count__18806_19228 = G__19257;
i__18807_19229 = G__19258;
continue;
} else {
var vec__18872_19262 = cljs.core.first(seq__18804_19253__$1);
var name_19263 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18872_19262,(0),null);
var map__18875_19264 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__18872_19262,(1),null);
var map__18875_19265__$1 = cljs.core.__destructure_map(map__18875_19264);
var doc_19266 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18875_19265__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19267 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18875_19265__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19263], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19267], 0));

if(cljs.core.truth_(doc_19266)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19266], 0));
} else {
}


var G__19269 = cljs.core.next(seq__18804_19253__$1);
var G__19270 = null;
var G__19271 = (0);
var G__19272 = (0);
seq__18804_19226 = G__19269;
chunk__18805_19227 = G__19270;
count__18806_19228 = G__19271;
i__18807_19229 = G__19272;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__18884 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18885 = null;
var count__18886 = (0);
var i__18887 = (0);
while(true){
if((i__18887 < count__18886)){
var role = chunk__18885.cljs$core$IIndexed$_nth$arity$2(null,i__18887);
var temp__5804__auto___19279__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19279__$1)){
var spec_19280 = temp__5804__auto___19279__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19280)], 0));
} else {
}


var G__19284 = seq__18884;
var G__19285 = chunk__18885;
var G__19286 = count__18886;
var G__19287 = (i__18887 + (1));
seq__18884 = G__19284;
chunk__18885 = G__19285;
count__18886 = G__19286;
i__18887 = G__19287;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__18884);
if(temp__5804__auto____$1){
var seq__18884__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__18884__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__18884__$1);
var G__19288 = cljs.core.chunk_rest(seq__18884__$1);
var G__19289 = c__5525__auto__;
var G__19290 = cljs.core.count(c__5525__auto__);
var G__19291 = (0);
seq__18884 = G__19288;
chunk__18885 = G__19289;
count__18886 = G__19290;
i__18887 = G__19291;
continue;
} else {
var role = cljs.core.first(seq__18884__$1);
var temp__5804__auto___19292__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19292__$2)){
var spec_19293 = temp__5804__auto___19292__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19293)], 0));
} else {
}


var G__19294 = cljs.core.next(seq__18884__$1);
var G__19295 = null;
var G__19296 = (0);
var G__19297 = (0);
seq__18884 = G__19294;
chunk__18885 = G__19295;
count__18886 = G__19296;
i__18887 = G__19297;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
return cljs.core.Throwable__GT_map(o);
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18923 = datafied_throwable;
var map__18923__$1 = cljs.core.__destructure_map(map__18923);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18923__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18923__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__18923__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18924 = cljs.core.last(via);
var map__18924__$1 = cljs.core.__destructure_map(map__18924);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18924__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18924__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18924__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18925 = data;
var map__18925__$1 = cljs.core.__destructure_map(map__18925);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18925__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18925__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18925__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18926 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__18926__$1 = cljs.core.__destructure_map(map__18926);
var top_data = map__18926__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18926__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__18955 = phase;
var G__18955__$1 = (((G__18955 instanceof cljs.core.Keyword))?G__18955.fqn:null);
switch (G__18955__$1) {
case "read-source":
var map__18971 = data;
var map__18971__$1 = cljs.core.__destructure_map(map__18971);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18971__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__18971__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18988 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__18988__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18988,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18988);
var G__18988__$2 = (cljs.core.truth_((function (){var fexpr__19001 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19001.cljs$core$IFn$_invoke$arity$1 ? fexpr__19001.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19001.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__18988__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18988__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__18988__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18988__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19007 = top_data;
var G__19007__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19007,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19007);
var G__19007__$2 = (cljs.core.truth_((function (){var fexpr__19009 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19009.cljs$core$IFn$_invoke$arity$1 ? fexpr__19009.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19009.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19007__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19007__$1);
var G__19007__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19007__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19007__$2);
var G__19007__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19007__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19007__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19007__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19007__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19013 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19013,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19013,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19013,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19013,(3),null);
var G__19022 = top_data;
var G__19022__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19022,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19022);
var G__19022__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19022__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19022__$1);
var G__19022__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19022__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19022__$2);
var G__19022__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19022__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19022__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19022__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19022__$4;
}

break;
case "execution":
var vec__19036 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19036,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19036,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19036,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19036,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__18922_SHARP_){
var or__5002__auto__ = (p1__18922_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__19048 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19048.cljs$core$IFn$_invoke$arity$1 ? fexpr__19048.cljs$core$IFn$_invoke$arity$1(p1__18922_SHARP_) : fexpr__19048.call(null,p1__18922_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__19060 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19060__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19060,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19060);
var G__19060__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19060__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19060__$1);
var G__19060__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19060__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19060__$2);
var G__19060__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19060__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19060__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19060__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19060__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18955__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19074){
var map__19078 = p__19074;
var map__19078__$1 = cljs.core.__destructure_map(map__19078);
var triage_data = map__19078__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19078__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19078__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19078__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19078__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19078__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19078__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19078__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19078__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = source;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5002__auto__ = line;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5002__auto__ = class$;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__19090 = phase;
var G__19090__$1 = (((G__19090 instanceof cljs.core.Keyword))?G__19090.fqn:null);
switch (G__19090__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19093 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19094 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19095 = loc;
var G__19096 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19098_19328 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19099_19329 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19100_19330 = true;
var _STAR_print_fn_STAR__temp_val__19101_19331 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19100_19330);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19101_19331);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19071_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19071_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19099_19329);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19098_19328);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19093,G__19094,G__19095,G__19096) : format.call(null,G__19093,G__19094,G__19095,G__19096));

break;
case "macroexpansion":
var G__19109 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19110 = cause_type;
var G__19111 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19112 = loc;
var G__19113 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19109,G__19110,G__19111,G__19112,G__19113) : format.call(null,G__19109,G__19110,G__19111,G__19112,G__19113));

break;
case "compile-syntax-check":
var G__19114 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19115 = cause_type;
var G__19116 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19117 = loc;
var G__19118 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19114,G__19115,G__19116,G__19117,G__19118) : format.call(null,G__19114,G__19115,G__19116,G__19117,G__19118));

break;
case "compilation":
var G__19120 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19121 = cause_type;
var G__19122 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19123 = loc;
var G__19124 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19120,G__19121,G__19122,G__19123,G__19124) : format.call(null,G__19120,G__19121,G__19122,G__19123,G__19124));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19127 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19128 = symbol;
var G__19129 = loc;
var G__19130 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19137_19340 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19138_19341 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19139_19342 = true;
var _STAR_print_fn_STAR__temp_val__19140_19343 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19139_19342);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19140_19343);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19073_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19073_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19138_19341);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19137_19340);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19127,G__19128,G__19129,G__19130) : format.call(null,G__19127,G__19128,G__19129,G__19130));
} else {
var G__19163 = "Execution error%s at %s(%s).\n%s\n";
var G__19164 = cause_type;
var G__19165 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19166 = loc;
var G__19167 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19163,G__19164,G__19165,G__19166,G__19167) : format.call(null,G__19163,G__19164,G__19165,G__19166,G__19167));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19090__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
