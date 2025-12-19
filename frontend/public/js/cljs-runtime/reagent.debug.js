goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__20644__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__20644 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20645__i = 0, G__20645__a = new Array(arguments.length -  0);
while (G__20645__i < G__20645__a.length) {G__20645__a[G__20645__i] = arguments[G__20645__i + 0]; ++G__20645__i;}
  args = new cljs.core.IndexedSeq(G__20645__a,0,null);
} 
return G__20644__delegate.call(this,args);};
G__20644.cljs$lang$maxFixedArity = 0;
G__20644.cljs$lang$applyTo = (function (arglist__20646){
var args = cljs.core.seq(arglist__20646);
return G__20644__delegate(args);
});
G__20644.cljs$core$IFn$_invoke$arity$variadic = G__20644__delegate;
return G__20644;
})()
);

(o.error = (function() { 
var G__20647__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__20647 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20648__i = 0, G__20648__a = new Array(arguments.length -  0);
while (G__20648__i < G__20648__a.length) {G__20648__a[G__20648__i] = arguments[G__20648__i + 0]; ++G__20648__i;}
  args = new cljs.core.IndexedSeq(G__20648__a,0,null);
} 
return G__20647__delegate.call(this,args);};
G__20647.cljs$lang$maxFixedArity = 0;
G__20647.cljs$lang$applyTo = (function (arglist__20649){
var args = cljs.core.seq(arglist__20649);
return G__20647__delegate(args);
});
G__20647.cljs$core$IFn$_invoke$arity$variadic = G__20647__delegate;
return G__20647;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
