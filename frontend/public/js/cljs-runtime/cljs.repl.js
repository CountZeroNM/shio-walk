goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__19596){
var map__19598 = p__19596;
var map__19598__$1 = cljs.core.__destructure_map(map__19598);
var m = map__19598__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19598__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19598__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__19601_19881 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19602_19882 = null;
var count__19603_19883 = (0);
var i__19604_19884 = (0);
while(true){
if((i__19604_19884 < count__19603_19883)){
var f_19885 = chunk__19602_19882.cljs$core$IIndexed$_nth$arity$2(null,i__19604_19884);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19885], 0));


var G__19886 = seq__19601_19881;
var G__19887 = chunk__19602_19882;
var G__19888 = count__19603_19883;
var G__19889 = (i__19604_19884 + (1));
seq__19601_19881 = G__19886;
chunk__19602_19882 = G__19887;
count__19603_19883 = G__19888;
i__19604_19884 = G__19889;
continue;
} else {
var temp__5804__auto___19890 = cljs.core.seq(seq__19601_19881);
if(temp__5804__auto___19890){
var seq__19601_19891__$1 = temp__5804__auto___19890;
if(cljs.core.chunked_seq_QMARK_(seq__19601_19891__$1)){
var c__5525__auto___19892 = cljs.core.chunk_first(seq__19601_19891__$1);
var G__19893 = cljs.core.chunk_rest(seq__19601_19891__$1);
var G__19894 = c__5525__auto___19892;
var G__19895 = cljs.core.count(c__5525__auto___19892);
var G__19896 = (0);
seq__19601_19881 = G__19893;
chunk__19602_19882 = G__19894;
count__19603_19883 = G__19895;
i__19604_19884 = G__19896;
continue;
} else {
var f_19897 = cljs.core.first(seq__19601_19891__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_19897], 0));


var G__19898 = cljs.core.next(seq__19601_19891__$1);
var G__19899 = null;
var G__19900 = (0);
var G__19901 = (0);
seq__19601_19881 = G__19898;
chunk__19602_19882 = G__19899;
count__19603_19883 = G__19900;
i__19604_19884 = G__19901;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_19902 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5002__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_19902], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_19902)))?cljs.core.second(arglists_19902):arglists_19902)], 0));
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
var seq__19619_19904 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__19620_19905 = null;
var count__19621_19906 = (0);
var i__19622_19907 = (0);
while(true){
if((i__19622_19907 < count__19621_19906)){
var vec__19639_19908 = chunk__19620_19905.cljs$core$IIndexed$_nth$arity$2(null,i__19622_19907);
var name_19909 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19639_19908,(0),null);
var map__19642_19910 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19639_19908,(1),null);
var map__19642_19911__$1 = cljs.core.__destructure_map(map__19642_19910);
var doc_19912 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19642_19911__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19913 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19642_19911__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19909], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19913], 0));

if(cljs.core.truth_(doc_19912)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19912], 0));
} else {
}


var G__19914 = seq__19619_19904;
var G__19915 = chunk__19620_19905;
var G__19916 = count__19621_19906;
var G__19917 = (i__19622_19907 + (1));
seq__19619_19904 = G__19914;
chunk__19620_19905 = G__19915;
count__19621_19906 = G__19916;
i__19622_19907 = G__19917;
continue;
} else {
var temp__5804__auto___19918 = cljs.core.seq(seq__19619_19904);
if(temp__5804__auto___19918){
var seq__19619_19919__$1 = temp__5804__auto___19918;
if(cljs.core.chunked_seq_QMARK_(seq__19619_19919__$1)){
var c__5525__auto___19920 = cljs.core.chunk_first(seq__19619_19919__$1);
var G__19921 = cljs.core.chunk_rest(seq__19619_19919__$1);
var G__19922 = c__5525__auto___19920;
var G__19923 = cljs.core.count(c__5525__auto___19920);
var G__19924 = (0);
seq__19619_19904 = G__19921;
chunk__19620_19905 = G__19922;
count__19621_19906 = G__19923;
i__19622_19907 = G__19924;
continue;
} else {
var vec__19647_19925 = cljs.core.first(seq__19619_19919__$1);
var name_19926 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19647_19925,(0),null);
var map__19650_19927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19647_19925,(1),null);
var map__19650_19928__$1 = cljs.core.__destructure_map(map__19650_19927);
var doc_19929 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19650_19928__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_19930 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19650_19928__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_19926], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_19930], 0));

if(cljs.core.truth_(doc_19929)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_19929], 0));
} else {
}


var G__19931 = cljs.core.next(seq__19619_19919__$1);
var G__19932 = null;
var G__19933 = (0);
var G__19934 = (0);
seq__19619_19904 = G__19931;
chunk__19620_19905 = G__19932;
count__19621_19906 = G__19933;
i__19622_19907 = G__19934;
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

var seq__19713 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__19714 = null;
var count__19715 = (0);
var i__19716 = (0);
while(true){
if((i__19716 < count__19715)){
var role = chunk__19714.cljs$core$IIndexed$_nth$arity$2(null,i__19716);
var temp__5804__auto___19940__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19940__$1)){
var spec_19941 = temp__5804__auto___19940__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19941)], 0));
} else {
}


var G__19943 = seq__19713;
var G__19944 = chunk__19714;
var G__19945 = count__19715;
var G__19946 = (i__19716 + (1));
seq__19713 = G__19943;
chunk__19714 = G__19944;
count__19715 = G__19945;
i__19716 = G__19946;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__19713);
if(temp__5804__auto____$1){
var seq__19713__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__19713__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__19713__$1);
var G__19947 = cljs.core.chunk_rest(seq__19713__$1);
var G__19948 = c__5525__auto__;
var G__19949 = cljs.core.count(c__5525__auto__);
var G__19950 = (0);
seq__19713 = G__19947;
chunk__19714 = G__19948;
count__19715 = G__19949;
i__19716 = G__19950;
continue;
} else {
var role = cljs.core.first(seq__19713__$1);
var temp__5804__auto___19951__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___19951__$2)){
var spec_19952 = temp__5804__auto___19951__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_19952)], 0));
} else {
}


var G__19953 = cljs.core.next(seq__19713__$1);
var G__19954 = null;
var G__19955 = (0);
var G__19956 = (0);
seq__19713 = G__19953;
chunk__19714 = G__19954;
count__19715 = G__19955;
i__19716 = G__19956;
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
var map__19780 = datafied_throwable;
var map__19780__$1 = cljs.core.__destructure_map(map__19780);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19780__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19780__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19780__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__19781 = cljs.core.last(via);
var map__19781__$1 = cljs.core.__destructure_map(map__19781);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19781__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19781__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19781__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__19782 = data;
var map__19782__$1 = cljs.core.__destructure_map(map__19782);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19782__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19782__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19782__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__19783 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__19783__$1 = cljs.core.__destructure_map(map__19783);
var top_data = map__19783__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19783__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__19784 = phase;
var G__19784__$1 = (((G__19784 instanceof cljs.core.Keyword))?G__19784.fqn:null);
switch (G__19784__$1) {
case "read-source":
var map__19786 = data;
var map__19786__$1 = cljs.core.__destructure_map(map__19786);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19786__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19786__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__19788 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__19788__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19788,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19788);
var G__19788__$2 = (cljs.core.truth_((function (){var fexpr__19790 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19790.cljs$core$IFn$_invoke$arity$1 ? fexpr__19790.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19790.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19788__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19788__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19788__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19788__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__19795 = top_data;
var G__19795__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19795,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__19795);
var G__19795__$2 = (cljs.core.truth_((function (){var fexpr__19802 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19802.cljs$core$IFn$_invoke$arity$1 ? fexpr__19802.cljs$core$IFn$_invoke$arity$1(source) : fexpr__19802.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__19795__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__19795__$1);
var G__19795__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19795__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19795__$2);
var G__19795__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19795__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19795__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19795__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19795__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__19804 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19804,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19804,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19804,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19804,(3),null);
var G__19807 = top_data;
var G__19807__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19807,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__19807);
var G__19807__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19807__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__19807__$1);
var G__19807__$3 = (cljs.core.truth_((function (){var and__5000__auto__ = source__$1;
if(cljs.core.truth_(and__5000__auto__)){
return method;
} else {
return and__5000__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19807__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__19807__$2);
var G__19807__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19807__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__19807__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19807__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__19807__$4;
}

break;
case "execution":
var vec__19809 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19809,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19809,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19809,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19809,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__19772_SHARP_){
var or__5002__auto__ = (p1__19772_SHARP_ == null);
if(or__5002__auto__){
return or__5002__auto__;
} else {
var fexpr__19813 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__19813.cljs$core$IFn$_invoke$arity$1 ? fexpr__19813.cljs$core$IFn$_invoke$arity$1(p1__19772_SHARP_) : fexpr__19813.call(null,p1__19772_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5002__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return line;
}
})();
var G__19814 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__19814__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19814,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__19814);
var G__19814__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19814__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__19814__$1);
var G__19814__$3 = (cljs.core.truth_((function (){var or__5002__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19814__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5002__auto__ = fn;
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__19814__$2);
var G__19814__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19814__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__19814__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__19814__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__19814__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19784__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__19831){
var map__19832 = p__19831;
var map__19832__$1 = cljs.core.__destructure_map(map__19832);
var triage_data = map__19832__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19832__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19832__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19832__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19832__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19832__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19832__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19832__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19832__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__19833 = phase;
var G__19833__$1 = (((G__19833 instanceof cljs.core.Keyword))?G__19833.fqn:null);
switch (G__19833__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__19834 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__19835 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19836 = loc;
var G__19837 = (cljs.core.truth_(spec)?(function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19838_19973 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19839_19974 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19840_19975 = true;
var _STAR_print_fn_STAR__temp_val__19841_19976 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19840_19975);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19841_19976);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19825_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19825_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19839_19974);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19838_19973);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19834,G__19835,G__19836,G__19837) : format.call(null,G__19834,G__19835,G__19836,G__19837));

break;
case "macroexpansion":
var G__19844 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__19845 = cause_type;
var G__19846 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19847 = loc;
var G__19848 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19844,G__19845,G__19846,G__19847,G__19848) : format.call(null,G__19844,G__19845,G__19846,G__19847,G__19848));

break;
case "compile-syntax-check":
var G__19849 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__19850 = cause_type;
var G__19851 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19852 = loc;
var G__19853 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19849,G__19850,G__19851,G__19852,G__19853) : format.call(null,G__19849,G__19850,G__19851,G__19852,G__19853));

break;
case "compilation":
var G__19854 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__19855 = cause_type;
var G__19856 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19857 = loc;
var G__19858 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19854,G__19855,G__19856,G__19857,G__19858) : format.call(null,G__19854,G__19855,G__19856,G__19857,G__19858));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__19859 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__19860 = symbol;
var G__19861 = loc;
var G__19862 = (function (){var sb__5647__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__19863_19983 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__19864_19984 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__19865_19985 = true;
var _STAR_print_fn_STAR__temp_val__19866_19986 = (function (x__5648__auto__){
return sb__5647__auto__.append(x__5648__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__19865_19985);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__19866_19986);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__19826_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__19826_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__19864_19984);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__19863_19983);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5647__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__19859,G__19860,G__19861,G__19862) : format.call(null,G__19859,G__19860,G__19861,G__19862));
} else {
var G__19869 = "Execution error%s at %s(%s).\n%s\n";
var G__19870 = cause_type;
var G__19871 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__19872 = loc;
var G__19873 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__19869,G__19870,G__19871,G__19872,G__19873) : format.call(null,G__19869,G__19870,G__19871,G__19872,G__19873));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19833__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
