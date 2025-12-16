goog.provide('shio_walk.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
var stored_token = localStorage.getItem("token");
var stored_user = localStorage.getItem("user");
var G__23597 = shio_walk.db.default_db;
var G__23597__$1 = (cljs.core.truth_(stored_token)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23597,new cljs.core.Keyword(null,"token","token",-1211463215),stored_token):G__23597);
var G__23597__$2 = (cljs.core.truth_(stored_user)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23597__$1,new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(stored_user),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))):G__23597__$1);
if(cljs.core.truth_(stored_token)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__23597__$2,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"dashboard","dashboard",-631747508));
} else {
return G__23597__$2;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-error","set-error",1627685300),(function (db,p__23598){
var vec__23599 = p__23598;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23599,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23599,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"error","error",-978969032),error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-error","clear-error",1327354158),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error","error",-978969032),null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-loading","set-loading",984627975),(function (db,p__23602){
var vec__23603 = p__23602;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23603,(0),null);
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23603,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),loading_QMARK_);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-page","set-page",1750905514),(function (db,p__23606){
var vec__23607 = p__23606;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23607,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23607,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"register","register",1968522516),(function (p__23610,p__23611){
var map__23612 = p__23610;
var map__23612__$1 = cljs.core.__destructure_map(map__23612);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23612__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23613 = p__23611;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23613,(0),null);
var user_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23613,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register","register",1968522516),user_data], null)], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"register","register",1968522516),(function (user_data){
return shio_walk.api.register(user_data,(function (p1__23616_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-success","register-success",-938979993),p1__23616_SHARP_], null));
}),(function (p1__23617_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__23617_SHARP_);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "\u767B\u9332\u306B\u5931\u6557\u3057\u307E\u3057\u305F";
}
})()], null));
}));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"register-success","register-success",-938979993),(function (p__23618,p__23619){
var map__23620 = p__23618;
var map__23620__$1 = cljs.core.__destructure_map(map__23620);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23620__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23621 = p__23619;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23621,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23621,(1),null);
localStorage.setItem("token",new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(response));

localStorage.setItem("user",JSON.stringify(cljs.core.clj__GT_js(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(response))));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(response),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(response),new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-initial-data","load-initial-data",102882917)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"login","login",55217519),(function (p__23624,p__23625){
var map__23626 = p__23624;
var map__23626__$1 = cljs.core.__destructure_map(map__23626);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23626__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23627 = p__23625;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23627,(0),null);
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23627,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login","login",55217519),credentials], null)], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"login","login",55217519),(function (credentials){
return shio_walk.api.login(credentials,(function (p1__23630_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login-success","login-success",1089283105),p1__23630_SHARP_], null));
}),(function (p1__23631_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__23631_SHARP_);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "\u30ED\u30B0\u30A4\u30F3\u306B\u5931\u6557\u3057\u307E\u3057\u305F";
}
})()], null));
}));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"login-success","login-success",1089283105),(function (p__23632,p__23633){
var map__23634 = p__23632;
var map__23634__$1 = cljs.core.__destructure_map(map__23634);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23634__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23635 = p__23633;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23635,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23635,(1),null);
localStorage.setItem("token",new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(response));

localStorage.setItem("user",JSON.stringify(cljs.core.clj__GT_js(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(response))));

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(response),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(response),new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-initial-data","load-initial-data",102882917)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logout","logout",1418564329),(function (p__23638,_){
var map__23639 = p__23638;
var map__23639__$1 = cljs.core.__destructure_map(map__23639);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23639__$1,new cljs.core.Keyword(null,"db","db",993250759));
localStorage.removeItem("token");

localStorage.removeItem("user");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shio_walk.db.default_db,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"login","login",55217519))], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"load-initial-data","load-initial-data",102882917),(function (){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-stats","load-stats",-1547139233)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-walks","load-walks",-39699846)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-rewards","load-rewards",1899984700)], null));

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-unlocked-rewards","load-unlocked-rewards",2029613175)], null));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-stats","load-stats",-1547139233),(function (p__23640,_){
var map__23641 = p__23640;
var map__23641__$1 = cljs.core.__destructure_map(map__23641);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23641__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-stats","get-stats",1980302935),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(db)], null)], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"get-stats","get-stats",1980302935),(function (token){
return shio_walk.api.get_stats(token,(function (p1__23642_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stats-loaded","stats-loaded",-1234391985),p1__23642_SHARP_], null));
}),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"\u7D71\u8A08\u60C5\u5831\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F"], null));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stats-loaded","stats-loaded",-1234391985),(function (db,p__23643){
var vec__23644 = p__23643;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23644,(0),null);
var stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23644,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"stats","stats",-85643011),stats);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-walks","load-walks",-39699846),(function (p__23647,_){
var map__23648 = p__23647;
var map__23648__$1 = cljs.core.__destructure_map(map__23648);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23648__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-walks","get-walks",19454675),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(db)], null)], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"get-walks","get-walks",19454675),(function (token){
return shio_walk.api.get_walks(token,(function (p1__23649_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"walks-loaded","walks-loaded",-119042582),p1__23649_SHARP_], null));
}),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"\u30A6\u30A9\u30FC\u30AF\u5C65\u6B74\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F"], null));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"walks-loaded","walks-loaded",-119042582),(function (db,p__23651){
var vec__23652 = p__23651;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23652,(0),null);
var walks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23652,(1),null);
var active_walk = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__23650_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__23650_SHARP_),"active");
}),walks));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"walks","walks",245026620),walks,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-walk","current-walk",1467314027),active_walk], 0));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-rewards","load-rewards",1899984700),(function (p__23655,_){
var map__23656 = p__23655;
var map__23656__$1 = cljs.core.__destructure_map(map__23656);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23656__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-rewards","get-rewards",-1810123007),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(db)], null)], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"get-rewards","get-rewards",-1810123007),(function (token){
return shio_walk.api.get_rewards(token,(function (p1__23657_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rewards-loaded","rewards-loaded",-1962453671),p1__23657_SHARP_], null));
}),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"\u5831\u916C\u4E00\u89A7\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F"], null));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rewards-loaded","rewards-loaded",-1962453671),(function (db,p__23658){
var vec__23659 = p__23658;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23659,(0),null);
var rewards = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23659,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"rewards","rewards",-1173924062),rewards);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-unlocked-rewards","load-unlocked-rewards",2029613175),(function (p__23662,_){
var map__23663 = p__23662;
var map__23663__$1 = cljs.core.__destructure_map(map__23663);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23663__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-unlocked-rewards","get-unlocked-rewards",-150571963),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(db)], null)], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"get-unlocked-rewards","get-unlocked-rewards",-150571963),(function (token){
return shio_walk.api.get_unlocked_rewards(token,(function (p1__23664_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unlocked-rewards-loaded","unlocked-rewards-loaded",370898448),p1__23664_SHARP_], null));
}),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"\u7372\u5F97\u6E08\u307F\u5831\u916C\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F"], null));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unlocked-rewards-loaded","unlocked-rewards-loaded",370898448),(function (db,p__23665){
var vec__23666 = p__23665;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23666,(0),null);
var unlocked_rewards = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23666,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"unlocked-rewards","unlocked-rewards",-1792499677),unlocked_rewards);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-walk","start-walk",-1570484827),(function (p__23669,_){
var map__23670 = p__23669;
var map__23670__$1 = cljs.core.__destructure_map(map__23670);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23670__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-walk-api","start-walk-api",1652972690),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(db)], null)], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"start-walk-api","start-walk-api",1652972690),(function (token){
return shio_walk.api.start_walk(token,(function (p1__23671_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"walk-started","walk-started",-1498819667),p1__23671_SHARP_], null));
}),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"\u30A6\u30A9\u30FC\u30AF\u306E\u958B\u59CB\u306B\u5931\u6557\u3057\u307E\u3057\u305F"], null));
}));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"walk-started","walk-started",-1498819667),(function (p__23672,p__23673){
var map__23674 = p__23672;
var map__23674__$1 = cljs.core.__destructure_map(map__23674);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23674__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23675 = p__23673;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23675,(0),null);
var walk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23675,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"current-walk","current-walk",1467314027),walk,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-walks","load-walks",-39699846)], null)], null)], null);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-walk","update-walk",884292797),(function (p__23678,p__23679){
var map__23680 = p__23678;
var map__23680__$1 = cljs.core.__destructure_map(map__23680);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23680__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23681 = p__23679;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23681,(0),null);
var walk_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23681,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23681,(2),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"update-walk-api","update-walk-api",-2123658372),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(db),walk_id,data], null)], null)], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"update-walk-api","update-walk-api",-2123658372),(function (p__23685){
var vec__23686 = p__23685;
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23686,(0),null);
var walk_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23686,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23686,(2),null);
return shio_walk.api.update_walk(token,walk_id,data,(function (p1__23684_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"walk-updated","walk-updated",1679978321),p1__23684_SHARP_], null));
}),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"\u30A6\u30A9\u30FC\u30AF\u306E\u66F4\u65B0\u306B\u5931\u6557\u3057\u307E\u3057\u305F"], null));
}));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"walk-updated","walk-updated",1679978321),(function (db,p__23689){
var vec__23690 = p__23689;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23690,(0),null);
var walk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23690,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-walk","current-walk",1467314027),walk);
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"complete-walk","complete-walk",913781595),(function (p__23693,p__23694){
var map__23695 = p__23693;
var map__23695__$1 = cljs.core.__destructure_map(map__23695);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23695__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23696 = p__23694;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23696,(0),null);
var walk_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23696,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"complete-walk-api","complete-walk-api",-1658518465),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(db),walk_id], null)], null)], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"complete-walk-api","complete-walk-api",-1658518465),(function (p__23700){
var vec__23701 = p__23700;
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23701,(0),null);
var walk_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23701,(1),null);
return shio_walk.api.complete_walk(token,walk_id,(function (p1__23699_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"walk-completed","walk-completed",1017096734),p1__23699_SHARP_], null));
}),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"\u30A6\u30A9\u30FC\u30AF\u306E\u5B8C\u4E86\u306B\u5931\u6557\u3057\u307E\u3057\u305F"], null));
}));
}));
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"walk-completed","walk-completed",1017096734),(function (p__23704,p__23705){
var map__23706 = p__23704;
var map__23706__$1 = cljs.core.__destructure_map(map__23706);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__23706__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__23707 = p__23705;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23707,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__23707,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"current-walk","current-walk",1467314027),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0)),new cljs.core.Keyword(null,"stats","stats",-85643011),cljs.core.merge,new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(result)),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-walks","load-walks",-39699846)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-unlocked-rewards","load-unlocked-rewards",2029613175)], null),((cljs.core.seq(new cljs.core.Keyword(null,"new-rewards","new-rewards",1986563826).cljs$core$IFn$_invoke$arity$1(result)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"show-rewards","show-rewards",-1236250720),new cljs.core.Keyword(null,"new-rewards","new-rewards",1986563826).cljs$core$IFn$_invoke$arity$1(result)], null):null)], null)], null);
}));
re_frame.core.reg_fx(new cljs.core.Keyword(null,"show-rewards","show-rewards",-1236250720),(function (rewards){
return alert(["\u65B0\u3057\u3044\u5831\u916C\u3092\u7372\u5F97\u3057\u307E\u3057\u305F\uFF01\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"title","title",636505583),rewards))].join(''));
}));

//# sourceMappingURL=shio_walk.events.js.map
