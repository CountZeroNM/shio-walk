goog.provide('shio_walk.events');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
var token = localStorage.getItem("token");
var user_str = localStorage.getItem("user");
var user = (cljs.core.truth_((function (){var and__5000__auto__ = token;
if(cljs.core.truth_(and__5000__auto__)){
return user_str;
} else {
return and__5000__auto__;
}
})())?(function (){try{return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(user_str),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}catch (e12405){var ___$2 = e12405;
return null;
}})():null);
var new_db = (function (){var G__12406 = shio_walk.db.default_db;
var G__12406__$1 = (cljs.core.truth_(token)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12406,new cljs.core.Keyword(null,"token","token",-1211463215),token):G__12406);
if(cljs.core.truth_(user)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__12406__$1,new cljs.core.Keyword(null,"user","user",1532431356),user,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)], 0));
} else {
return G__12406__$1;
}
})();
if(cljs.core.truth_(token)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),new_db,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-initial-data","load-initial-data",102882917)], null)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),new_db], null);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-error","set-error",1627685300),(function (db,p__12407){
var vec__12408 = p__12407;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12408,(0),null);
var err = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12408,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"error","error",-978969032),err,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-loading","set-loading",984627975),(function (db,p__12411){
var vec__12412 = p__12411;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12412,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12412,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),v);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-page","set-page",1750905514),(function (db,p__12415){
var vec__12416 = p__12415;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12416,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12416,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"login","login",55217519),(function (p__12420,p__12421){
var map__12422 = p__12420;
var map__12422__$1 = cljs.core.__destructure_map(map__12422);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12422__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12423 = p__12421;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12423,(0),null);
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12423,(1),null);
shio_walk.api.login(credentials,(function (p1__12419_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login-success","login-success",1089283105),p1__12419_SHARP_], null));
}),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"\u30ED\u30B0\u30A4\u30F3\u306B\u5931\u6557\u3057\u307E\u3057\u305F"], null));
}));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"login-success","login-success",1089283105),(function (db,p__12426){
var vec__12427 = p__12426;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12427,(0),null);
var map__12430 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12427,(1),null);
var map__12430__$1 = cljs.core.__destructure_map(map__12430);
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12430__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var user = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12430__$1,new cljs.core.Keyword(null,"user","user",1532431356));
localStorage.setItem("token",token);

localStorage.setItem("user",JSON.stringify(cljs.core.clj__GT_js(user)));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-initial-data","load-initial-data",102882917)], null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"token","token",-1211463215),token,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"user","user",1532431356),user,new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logout","logout",1418564329),(function (_,___$1){
localStorage.removeItem("token");

localStorage.removeItem("user");

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shio_walk.db.default_db,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"login","login",55217519));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-initial-data","load-initial-data",102882917),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-stats","load-stats",-1547139233)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-walks","load-walks",-39699846)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-rewards","load-rewards",1899984700)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-unlocked-rewards","load-unlocked-rewards",2029613175)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-walks","load-walks",-39699846),(function (p__12432,_){
var map__12433 = p__12432;
var map__12433__$1 = cljs.core.__destructure_map(map__12433);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12433__$1,new cljs.core.Keyword(null,"db","db",993250759));
shio_walk.api.get_walks(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(db),(function (p1__12431_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"walks-loaded","walks-loaded",-119042582),p1__12431_SHARP_], null));
}),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"\u30A6\u30A9\u30FC\u30AF\u53D6\u5F97\u5931\u6557"], null));
}));

return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-stats","load-stats",-1547139233),(function (p__12435,_){
var map__12436 = p__12435;
var map__12436__$1 = cljs.core.__destructure_map(map__12436);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12436__$1,new cljs.core.Keyword(null,"db","db",993250759));
shio_walk.api.get_stats(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(db),(function (p1__12434_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stats-loaded","stats-loaded",-1234391985),p1__12434_SHARP_], null));
}),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"\u7D71\u8A08\u60C5\u5831\u306E\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F"], null));
}));

return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stats-loaded","stats-loaded",-1234391985),(function (db,p__12437){
var vec__12438 = p__12437;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12438,(0),null);
var stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12438,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"stats","stats",-85643011),stats);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-rewards","load-rewards",1899984700),(function (p__12442,_){
var map__12443 = p__12442;
var map__12443__$1 = cljs.core.__destructure_map(map__12443);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12443__$1,new cljs.core.Keyword(null,"db","db",993250759));
shio_walk.api.get_rewards(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(db),(function (p1__12441_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rewards-loaded","rewards-loaded",-1962453671),p1__12441_SHARP_], null));
}),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"\u5831\u916C\u4E00\u89A7\u306E\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F"], null));
}));

return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rewards-loaded","rewards-loaded",-1962453671),(function (db,p__12444){
var vec__12445 = p__12444;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12445,(0),null);
var rewards = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12445,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"rewards","rewards",-1173924062),rewards);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-unlocked-rewards","load-unlocked-rewards",2029613175),(function (p__12449,_){
var map__12450 = p__12449;
var map__12450__$1 = cljs.core.__destructure_map(map__12450);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12450__$1,new cljs.core.Keyword(null,"db","db",993250759));
shio_walk.api.get_unlocked_rewards(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(db),(function (p1__12448_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unlocked-rewards-loaded","unlocked-rewards-loaded",370898448),p1__12448_SHARP_], null));
}),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"\u7372\u5F97\u6E08\u307F\u5831\u916C\u306E\u53D6\u5F97\u306B\u5931\u6557\u3057\u307E\u3057\u305F"], null));
}));

return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unlocked-rewards-loaded","unlocked-rewards-loaded",370898448),(function (db,p__12451){
var vec__12452 = p__12451;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12452,(0),null);
var rewards = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12452,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"unlocked-rewards","unlocked-rewards",-1792499677),rewards);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"walks-loaded","walks-loaded",-119042582),(function (db,p__12456){
var vec__12457 = p__12456;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12457,(0),null);
var walks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12457,(1),null);
var active = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__12455_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__12455_SHARP_),"active");
}),walks));
var G__12460 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"walks","walks",245026620),walks,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
if(cljs.core.truth_(active)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__12460,new cljs.core.Keyword(null,"current-walk","current-walk",1467314027),active);
} else {
return G__12460;
}
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-walk","start-walk",-1570484827),(function (p__12461,_){
var map__12462 = p__12461;
var map__12462__$1 = cljs.core.__destructure_map(map__12462);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12462__$1,new cljs.core.Keyword(null,"db","db",993250759));
shio_walk.api.start_walk(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(db),(function (p__12463){
var map__12464 = p__12463;
var map__12464__$1 = cljs.core.__destructure_map(map__12464);
var walk = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12464__$1,new cljs.core.Keyword(null,"walk","walk",32921637));
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"walk-started","walk-started",-1498819667),walk], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-walks","load-walks",-39699846)], null));
}),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"\u958B\u59CB\u5931\u6557"], null));
}));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-walk","update-walk",884292797),(function (p__12465,p__12466){
var map__12467 = p__12465;
var map__12467__$1 = cljs.core.__destructure_map(map__12467);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12467__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12468 = p__12466;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12468,(0),null);
var walk_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12468,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12468,(2),null);
shio_walk.api.update_walk(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(db),walk_id,data,(function (___$1){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-walks","load-walks",-39699846)], null));
}),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"\u66F4\u65B0\u5931\u6557"], null));
}));

return cljs.core.PersistentArrayMap.EMPTY;
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"complete-walk","complete-walk",913781595),(function (p__12471,p__12472){
var map__12473 = p__12471;
var map__12473__$1 = cljs.core.__destructure_map(map__12473);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__12473__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__12474 = p__12472;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12474,(0),null);
var walk_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12474,(1),null);
shio_walk.api.complete_walk(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(db),walk_id,(function (___$1){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-walks","load-walks",-39699846)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-unlocked-rewards","load-unlocked-rewards",2029613175)], null));
}),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"\u5B8C\u4E86\u5931\u6557"], null));
}));

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"walk-started","walk-started",-1498819667),(function (db,p__12477){
var vec__12478 = p__12477;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12478,(0),null);
var walk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12478,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-walk","current-walk",1467314027),walk),new cljs.core.Keyword(null,"loading?","loading?",1905707049),false);
}));

//# sourceMappingURL=shio_walk.events.js.map
