goog.provide('shio_walk.core');
if((typeof shio_walk !== 'undefined') && (typeof shio_walk.core !== 'undefined') && (typeof shio_walk.core.root !== 'undefined')){
} else {
shio_walk.core.root = reagent.dom.client.create_root(document.getElementById("app"));
}
shio_walk.core.mount_root = (function shio_walk$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

return reagent.dom.client.render.cljs$core$IFn$_invoke$arity$2(shio_walk.core.root,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shio_walk.views.main.main_panel], null));
});
shio_walk.core.init = (function shio_walk$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return shio_walk.core.mount_root();
});
shio_walk.core.reload = (function shio_walk$core$reload(){
return shio_walk.core.mount_root();
});

//# sourceMappingURL=shio_walk.core.js.map
