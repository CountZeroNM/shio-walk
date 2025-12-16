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
var G__21135__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__21135 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21136__i = 0, G__21136__a = new Array(arguments.length -  0);
while (G__21136__i < G__21136__a.length) {G__21136__a[G__21136__i] = arguments[G__21136__i + 0]; ++G__21136__i;}
  args = new cljs.core.IndexedSeq(G__21136__a,0,null);
} 
return G__21135__delegate.call(this,args);};
G__21135.cljs$lang$maxFixedArity = 0;
G__21135.cljs$lang$applyTo = (function (arglist__21137){
var args = cljs.core.seq(arglist__21137);
return G__21135__delegate(args);
});
G__21135.cljs$core$IFn$_invoke$arity$variadic = G__21135__delegate;
return G__21135;
})()
);

(o.error = (function() { 
var G__21138__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__21138 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21139__i = 0, G__21139__a = new Array(arguments.length -  0);
while (G__21139__i < G__21139__a.length) {G__21139__a[G__21139__i] = arguments[G__21139__i + 0]; ++G__21139__i;}
  args = new cljs.core.IndexedSeq(G__21139__a,0,null);
} 
return G__21138__delegate.call(this,args);};
G__21138.cljs$lang$maxFixedArity = 0;
G__21138.cljs$lang$applyTo = (function (arglist__21140){
var args = cljs.core.seq(arglist__21140);
return G__21138__delegate(args);
});
G__21138.cljs$core$IFn$_invoke$arity$variadic = G__21138__delegate;
return G__21138;
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
