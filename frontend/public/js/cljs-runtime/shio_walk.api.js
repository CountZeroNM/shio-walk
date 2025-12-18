goog.provide('shio_walk.api');
shio_walk.api.api_base_url = "http://localhost:3000/api";
shio_walk.api.auth_header = (function shio_walk$api$auth_header(token){
if(cljs.core.truth_(token)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"Authorization","Authorization",-1017527462),["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token)].join('')], null);
} else {
return null;
}
});
shio_walk.api.register = (function shio_walk$api$register(user,success_fn,error_fn){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic([shio_walk.api.api_base_url,"/auth/register"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"params","params",710516235),user,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),success_fn,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),error_fn], null)], 0));
});
shio_walk.api.login = (function shio_walk$api$login(credentials,success_fn,error_fn){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic([shio_walk.api.api_base_url,"/auth/login"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"params","params",710516235),credentials,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),success_fn,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),error_fn], null)], 0));
});
shio_walk.api.get_profile = (function shio_walk$api$get_profile(token,success_fn,error_fn){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic([shio_walk.api.api_base_url,"/user/profile"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"headers","headers",-835030129),shio_walk.api.auth_header(token),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),success_fn,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),error_fn], null)], 0));
});
shio_walk.api.get_stats = (function shio_walk$api$get_stats(token,success_fn,error_fn){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic([shio_walk.api.api_base_url,"/stats"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"headers","headers",-835030129),shio_walk.api.auth_header(token),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),success_fn,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),error_fn], null)], 0));
});
shio_walk.api.start_walk = (function shio_walk$api$start_walk(token,success_fn,error_fn){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic([shio_walk.api.api_base_url,"/walks/start"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"headers","headers",-835030129),shio_walk.api.auth_header(token),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),(function (resp){
console.log("API start-walk response (raw):",resp);

console.log("as clj:",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resp], 0)));

return (success_fn.cljs$core$IFn$_invoke$arity$1 ? success_fn.cljs$core$IFn$_invoke$arity$1(resp) : success_fn.call(null,resp));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),error_fn], null)], 0));
});
shio_walk.api.update_walk = (function shio_walk$api$update_walk(token,walk_id,data,success_fn,error_fn){
return ajax.core.PUT.cljs$core$IFn$_invoke$arity$variadic([shio_walk.api.api_base_url,"/walks/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(walk_id)].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"headers","headers",-835030129),shio_walk.api.auth_header(token),new cljs.core.Keyword(null,"params","params",710516235),data,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),success_fn,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),error_fn], null)], 0));
});
shio_walk.api.complete_walk = (function shio_walk$api$complete_walk(token,walk_id,success_fn,error_fn){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic([shio_walk.api.api_base_url,"/walks/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(walk_id),"/complete"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"headers","headers",-835030129),shio_walk.api.auth_header(token),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),success_fn,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),error_fn], null)], 0));
});
shio_walk.api.get_walks = (function shio_walk$api$get_walks(token,success_fn,error_fn){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic([shio_walk.api.api_base_url,"/walks"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"headers","headers",-835030129),shio_walk.api.auth_header(token),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),success_fn,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),error_fn], null)], 0));
});
shio_walk.api.get_rewards = (function shio_walk$api$get_rewards(token,success_fn,error_fn){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic([shio_walk.api.api_base_url,"/rewards"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"headers","headers",-835030129),shio_walk.api.auth_header(token),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),success_fn,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),error_fn], null)], 0));
});
shio_walk.api.get_unlocked_rewards = (function shio_walk$api$get_unlocked_rewards(token,success_fn,error_fn){
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic([shio_walk.api.api_base_url,"/rewards/unlocked"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"headers","headers",-835030129),shio_walk.api.auth_header(token),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true,new cljs.core.Keyword(null,"handler","handler",-195596612),success_fn,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),error_fn], null)], 0));
});

//# sourceMappingURL=shio_walk.api.js.map
