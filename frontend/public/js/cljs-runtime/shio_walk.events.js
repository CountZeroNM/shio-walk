goog.provide('shio_walk.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
var stored_token = localStorage.getItem("token");
var stored_user = localStorage.getItem("user");
var G__13026 = shio_walk.db.default_db;
var G__13026__$1 = (cljs.core.truth_(stored_token)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13026,new cljs.core.Keyword(null,"token","token",-1211463215),stored_token):G__13026);
var G__13026__$2 = (cljs.core.truth_(stored_user)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13026__$1,new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(JSON.parse(stored_user),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0))):G__13026__$1);
if(cljs.core.truth_(stored_token)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__13026__$2,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"dashboard","dashboard",-631747508));
} else {
return G__13026__$2;
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-error","set-error",1627685300),(function (db,p__13027){
var vec__13028 = p__13027;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13028,(0),null);
var error = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13028,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"error","error",-978969032),error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"clear-error","clear-error",1327354158),(function (db,_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"error","error",-978969032),null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-loading","set-loading",984627975),(function (db,p__13031){
var vec__13032 = p__13031;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13032,(0),null);
var loading_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13032,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),loading_QMARK_);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-page","set-page",1750905514),(function (db,p__13035){
var vec__13036 = p__13035;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13036,(0),null);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13036,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"current-page","current-page",-101294180),page,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"register","register",1968522516),(function (db,p__13041){
var vec__13042 = p__13041;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13042,(0),null);
var user_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13042,(1),null);
shio_walk.api.register(user_data,(function (p1__13039_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"register-success","register-success",-938979993),p1__13039_SHARP_], null));
}),(function (p1__13040_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__13040_SHARP_);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "\u767B\u9332\u306B\u5931\u6557\u3057\u307E\u3057\u305F";
}
})()], null));
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"register-success","register-success",-938979993),(function (db,p__13045){
var vec__13046 = p__13045;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13046,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13046,(1),null);
localStorage.setItem("token",new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(response));

localStorage.setItem("user",JSON.stringify(cljs.core.clj__GT_js(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(response))));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-initial-data","load-initial-data",102882917)], null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(response),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(response),new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"login","login",55217519),(function (db,p__13051){
var vec__13052 = p__13051;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13052,(0),null);
var credentials = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13052,(1),null);
shio_walk.api.login(credentials,(function (p1__13049_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"login-success","login-success",1089283105),p1__13049_SHARP_], null));
}),(function (p1__13050_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),(function (){var or__5002__auto__ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__13050_SHARP_);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return "\u30ED\u30B0\u30A4\u30F3\u306B\u5931\u6557\u3057\u307E\u3057\u305F";
}
})()], null));
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"error","error",-978969032),null], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"login-success","login-success",1089283105),(function (db,p__13055){
var vec__13056 = p__13055;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13056,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13056,(1),null);
localStorage.setItem("token",new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(response));

localStorage.setItem("user",JSON.stringify(cljs.core.clj__GT_js(new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(response))));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-initial-data","load-initial-data",102882917)], null));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(response),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"user","user",1532431356),new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(response),new cljs.core.Keyword(null,"loading?","loading?",1905707049),false,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"logout","logout",1418564329),(function (_,___$1){
localStorage.removeItem("token");

localStorage.removeItem("user");

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shio_walk.db.default_db,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"login","login",55217519));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-initial-data","load-initial-data",102882917),(function (db,_){
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-stats","load-stats",-1547139233)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-walks","load-walks",-39699846)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-rewards","load-rewards",1899984700)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-unlocked-rewards","load-unlocked-rewards",2029613175)], null));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-stats","load-stats",-1547139233),(function (db,_){
var token = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(db);
shio_walk.api.get_stats(token,(function (p1__13059_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"stats-loaded","stats-loaded",-1234391985),p1__13059_SHARP_], null));
}),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"\u7D71\u8A08\u60C5\u5831\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F"], null));
}));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stats-loaded","stats-loaded",-1234391985),(function (db,p__13060){
var vec__13061 = p__13060;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13061,(0),null);
var stats = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13061,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"stats","stats",-85643011),stats);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-walks","load-walks",-39699846),(function (db,_){
var token = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(db);
shio_walk.api.get_walks(token,(function (p1__13064_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"walks-loaded","walks-loaded",-119042582),p1__13064_SHARP_], null));
}),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"\u30A6\u30A9\u30FC\u30AF\u5C65\u6B74\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F"], null));
}));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"walks-loaded","walks-loaded",-119042582),(function (db,p__13066){
var vec__13067 = p__13066;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13067,(0),null);
var walks = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13067,(1),null);
var active_walk = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__13065_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__13065_SHARP_),"active");
}),walks));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"walks","walks",245026620),walks,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current-walk","current-walk",1467314027),active_walk], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-rewards","load-rewards",1899984700),(function (db,_){
var token = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(db);
shio_walk.api.get_rewards(token,(function (p1__13070_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rewards-loaded","rewards-loaded",-1962453671),p1__13070_SHARP_], null));
}),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"\u5831\u916C\u4E00\u89A7\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F"], null));
}));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rewards-loaded","rewards-loaded",-1962453671),(function (db,p__13071){
var vec__13072 = p__13071;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13072,(0),null);
var rewards = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13072,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"rewards","rewards",-1173924062),rewards);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"load-unlocked-rewards","load-unlocked-rewards",2029613175),(function (db,_){
var token = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(db);
shio_walk.api.get_unlocked_rewards(token,(function (p1__13075_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unlocked-rewards-loaded","unlocked-rewards-loaded",370898448),p1__13075_SHARP_], null));
}),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"\u7372\u5F97\u6E08\u307F\u5831\u916C\u306E\u8AAD\u307F\u8FBC\u307F\u306B\u5931\u6557\u3057\u307E\u3057\u305F"], null));
}));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"unlocked-rewards-loaded","unlocked-rewards-loaded",370898448),(function (db,p__13076){
var vec__13077 = p__13076;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13077,(0),null);
var unlocked_rewards = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13077,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"unlocked-rewards","unlocked-rewards",-1792499677),unlocked_rewards);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-walk","start-walk",-1570484827),(function (db,_){
var token = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(db);
shio_walk.api.start_walk(token,(function (p1__13080_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"walk-started","walk-started",-1498819667),p1__13080_SHARP_], null));
}),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"\u30A6\u30A9\u30FC\u30AF\u306E\u958B\u59CB\u306B\u5931\u6557\u3057\u307E\u3057\u305F"], null));
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"walk-started","walk-started",-1498819667),(function (db,p__13081){
var vec__13082 = p__13081;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13082,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13082,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"current-walk","current-walk",1467314027),new cljs.core.Keyword(null,"walk","walk",32921637).cljs$core$IFn$_invoke$arity$1(response),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-walk","update-walk",884292797),(function (db,p__13086){
var vec__13087 = p__13086;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13087,(0),null);
var walk_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13087,(1),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13087,(2),null);
var token = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(db);
shio_walk.api.update_walk(token,walk_id,data,(function (p1__13085_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"walk-updated","walk-updated",1679978321),p1__13085_SHARP_], null));
}),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"\u30A6\u30A9\u30FC\u30AF\u306E\u66F4\u65B0\u306B\u5931\u6557\u3057\u307E\u3057\u305F"], null));
}));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"walk-updated","walk-updated",1679978321),(function (db,p__13090){
var vec__13091 = p__13090;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13091,(0),null);
var walk = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13091,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-walk","current-walk",1467314027),walk);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"complete-walk","complete-walk",913781595),(function (db,p__13095){
var vec__13096 = p__13095;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13096,(0),null);
var walk_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13096,(1),null);
var token = new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(db);
shio_walk.api.complete_walk(token,walk_id,(function (p1__13094_SHARP_){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"walk-completed","walk-completed",1017096734),p1__13094_SHARP_], null));
}),(function (){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-error","set-error",1627685300),"\u30A6\u30A9\u30FC\u30AF\u306E\u5B8C\u4E86\u306B\u5931\u6557\u3057\u307E\u3057\u305F"], null));
}));

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"loading?","loading?",1905707049),true);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"walk-completed","walk-completed",1017096734),(function (db,p__13099){
var vec__13100 = p__13099;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13100,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13100,(1),null);
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-walks","load-walks",-39699846)], null));

re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-unlocked-rewards","load-unlocked-rewards",2029613175)], null));

if(cljs.core.seq(new cljs.core.Keyword(null,"new-rewards","new-rewards",1986563826).cljs$core$IFn$_invoke$arity$1(result))){
alert(["\u65B0\u3057\u3044\u5831\u916C\u3092\u7372\u5F97\u3057\u307E\u3057\u305F\uFF01\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"new-rewards","new-rewards",1986563826).cljs$core$IFn$_invoke$arity$1(result)))].join(''));
} else {
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(db,new cljs.core.Keyword(null,"current-walk","current-walk",1467314027),null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading?","loading?",1905707049),false], 0)),new cljs.core.Keyword(null,"stats","stats",-85643011),cljs.core.merge,new cljs.core.Keyword(null,"stats","stats",-85643011).cljs$core$IFn$_invoke$arity$1(result));
}));

//# sourceMappingURL=shio_walk.events.js.map
