goog.provide('shio_walk.core');
shio_walk.core.mount_root = (function shio_walk$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_();

var root_el = document.getElementById("app");
reagent.dom.unmount_component_at_node(root_el);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shio_walk.views.main.main_panel], null),root_el);
});
shio_walk.core.init = (function shio_walk$core$init(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

return shio_walk.core.mount_root();
});

//# sourceMappingURL=shio_walk.core.js.map
