goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12461 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_12461(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12468 = (function (this$){
var x__5350__auto__ = (((this$ == null))?null:this$);
var m__5351__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5350__auto__)]);
if((!((m__5351__auto__ == null)))){
return (m__5351__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5351__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5351__auto__.call(null,this$));
} else {
var m__5349__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5349__auto__ == null)))){
return (m__5349__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5349__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5349__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_12468(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11854 = coll;
var G__11855 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11854,G__11855) : shadow.dom.lazy_native_coll_seq.call(null,G__11854,G__11855));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5002__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5287__auto__,writer__5288__auto__,opt__5289__auto__){
return cljs.core._write(writer__5288__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__11866 = arguments.length;
switch (G__11866) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__11870 = arguments.length;
switch (G__11870) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__11873 = arguments.length;
switch (G__11873) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__11877 = arguments.length;
switch (G__11877) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__11882 = arguments.length;
switch (G__11882) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__11886 = arguments.length;
switch (G__11886) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e11889){if((e11889 instanceof Object)){
var e = e11889;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11889;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5002__auto__ = (!((typeof document !== 'undefined')));
if(or__5002__auto__){
return or__5002__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__11893 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11894 = null;
var count__11895 = (0);
var i__11896 = (0);
while(true){
if((i__11896 < count__11895)){
var el = chunk__11894.cljs$core$IIndexed$_nth$arity$2(null,i__11896);
var handler_12551__$1 = ((function (seq__11893,chunk__11894,count__11895,i__11896,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11893,chunk__11894,count__11895,i__11896,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12551__$1);


var G__12557 = seq__11893;
var G__12558 = chunk__11894;
var G__12559 = count__11895;
var G__12560 = (i__11896 + (1));
seq__11893 = G__12557;
chunk__11894 = G__12558;
count__11895 = G__12559;
i__11896 = G__12560;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11893);
if(temp__5804__auto__){
var seq__11893__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11893__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11893__$1);
var G__12561 = cljs.core.chunk_rest(seq__11893__$1);
var G__12562 = c__5525__auto__;
var G__12563 = cljs.core.count(c__5525__auto__);
var G__12564 = (0);
seq__11893 = G__12561;
chunk__11894 = G__12562;
count__11895 = G__12563;
i__11896 = G__12564;
continue;
} else {
var el = cljs.core.first(seq__11893__$1);
var handler_12565__$1 = ((function (seq__11893,chunk__11894,count__11895,i__11896,el,seq__11893__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11893,chunk__11894,count__11895,i__11896,el,seq__11893__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12565__$1);


var G__12566 = cljs.core.next(seq__11893__$1);
var G__12567 = null;
var G__12568 = (0);
var G__12569 = (0);
seq__11893 = G__12566;
chunk__11894 = G__12567;
count__11895 = G__12568;
i__11896 = G__12569;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__11900 = arguments.length;
switch (G__11900) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__11902 = cljs.core.seq(events);
var chunk__11903 = null;
var count__11904 = (0);
var i__11905 = (0);
while(true){
if((i__11905 < count__11904)){
var vec__11928 = chunk__11903.cljs$core$IIndexed$_nth$arity$2(null,i__11905);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11928,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11928,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12588 = seq__11902;
var G__12589 = chunk__11903;
var G__12590 = count__11904;
var G__12591 = (i__11905 + (1));
seq__11902 = G__12588;
chunk__11903 = G__12589;
count__11904 = G__12590;
i__11905 = G__12591;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11902);
if(temp__5804__auto__){
var seq__11902__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11902__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11902__$1);
var G__12593 = cljs.core.chunk_rest(seq__11902__$1);
var G__12594 = c__5525__auto__;
var G__12595 = cljs.core.count(c__5525__auto__);
var G__12596 = (0);
seq__11902 = G__12593;
chunk__11903 = G__12594;
count__11904 = G__12595;
i__11905 = G__12596;
continue;
} else {
var vec__11933 = cljs.core.first(seq__11902__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11933,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11933,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12597 = cljs.core.next(seq__11902__$1);
var G__12598 = null;
var G__12599 = (0);
var G__12600 = (0);
seq__11902 = G__12597;
chunk__11903 = G__12598;
count__11904 = G__12599;
i__11905 = G__12600;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__11937 = cljs.core.seq(styles);
var chunk__11938 = null;
var count__11939 = (0);
var i__11940 = (0);
while(true){
if((i__11940 < count__11939)){
var vec__11955 = chunk__11938.cljs$core$IIndexed$_nth$arity$2(null,i__11940);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11955,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11955,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12606 = seq__11937;
var G__12607 = chunk__11938;
var G__12608 = count__11939;
var G__12609 = (i__11940 + (1));
seq__11937 = G__12606;
chunk__11938 = G__12607;
count__11939 = G__12608;
i__11940 = G__12609;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11937);
if(temp__5804__auto__){
var seq__11937__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11937__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11937__$1);
var G__12613 = cljs.core.chunk_rest(seq__11937__$1);
var G__12614 = c__5525__auto__;
var G__12615 = cljs.core.count(c__5525__auto__);
var G__12616 = (0);
seq__11937 = G__12613;
chunk__11938 = G__12614;
count__11939 = G__12615;
i__11940 = G__12616;
continue;
} else {
var vec__11960 = cljs.core.first(seq__11937__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11960,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11960,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12619 = cljs.core.next(seq__11937__$1);
var G__12620 = null;
var G__12621 = (0);
var G__12622 = (0);
seq__11937 = G__12619;
chunk__11938 = G__12620;
count__11939 = G__12621;
i__11940 = G__12622;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__11966_12623 = key;
var G__11966_12624__$1 = (((G__11966_12623 instanceof cljs.core.Keyword))?G__11966_12623.fqn:null);
switch (G__11966_12624__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_12629 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12629,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12629,"aria-");
}
})())){
el.setAttribute(ks_12629,value);
} else {
(el[ks_12629] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11977){
var map__11978 = p__11977;
var map__11978__$1 = cljs.core.__destructure_map(map__11978);
var props = map__11978__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11978__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11979 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11979,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11979,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11979,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11982 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11982,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11982;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11985 = arguments.length;
switch (G__11985) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__11989){
var vec__11991 = p__11989;
var seq__11992 = cljs.core.seq(vec__11991);
var first__11993 = cljs.core.first(seq__11992);
var seq__11992__$1 = cljs.core.next(seq__11992);
var nn = first__11993;
var first__11993__$1 = cljs.core.first(seq__11992__$1);
var seq__11992__$2 = cljs.core.next(seq__11992__$1);
var np = first__11993__$1;
var nc = seq__11992__$2;
var node = vec__11991;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11994 = nn;
var G__11996 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11994,G__11996) : create_fn.call(null,G__11994,G__11996));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11997 = nn;
var G__11998 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11997,G__11998) : create_fn.call(null,G__11997,G__11998));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__12001 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12001,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12001,(1),null);
var seq__12004_12674 = cljs.core.seq(node_children);
var chunk__12005_12675 = null;
var count__12006_12676 = (0);
var i__12007_12677 = (0);
while(true){
if((i__12007_12677 < count__12006_12676)){
var child_struct_12681 = chunk__12005_12675.cljs$core$IIndexed$_nth$arity$2(null,i__12007_12677);
var children_12683 = shadow.dom.dom_node(child_struct_12681);
if(cljs.core.seq_QMARK_(children_12683)){
var seq__12035_12701 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12683));
var chunk__12037_12702 = null;
var count__12038_12703 = (0);
var i__12039_12704 = (0);
while(true){
if((i__12039_12704 < count__12038_12703)){
var child_12705 = chunk__12037_12702.cljs$core$IIndexed$_nth$arity$2(null,i__12039_12704);
if(cljs.core.truth_(child_12705)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12705);


var G__12706 = seq__12035_12701;
var G__12707 = chunk__12037_12702;
var G__12708 = count__12038_12703;
var G__12709 = (i__12039_12704 + (1));
seq__12035_12701 = G__12706;
chunk__12037_12702 = G__12707;
count__12038_12703 = G__12708;
i__12039_12704 = G__12709;
continue;
} else {
var G__12710 = seq__12035_12701;
var G__12711 = chunk__12037_12702;
var G__12712 = count__12038_12703;
var G__12713 = (i__12039_12704 + (1));
seq__12035_12701 = G__12710;
chunk__12037_12702 = G__12711;
count__12038_12703 = G__12712;
i__12039_12704 = G__12713;
continue;
}
} else {
var temp__5804__auto___12714 = cljs.core.seq(seq__12035_12701);
if(temp__5804__auto___12714){
var seq__12035_12715__$1 = temp__5804__auto___12714;
if(cljs.core.chunked_seq_QMARK_(seq__12035_12715__$1)){
var c__5525__auto___12716 = cljs.core.chunk_first(seq__12035_12715__$1);
var G__12719 = cljs.core.chunk_rest(seq__12035_12715__$1);
var G__12720 = c__5525__auto___12716;
var G__12721 = cljs.core.count(c__5525__auto___12716);
var G__12722 = (0);
seq__12035_12701 = G__12719;
chunk__12037_12702 = G__12720;
count__12038_12703 = G__12721;
i__12039_12704 = G__12722;
continue;
} else {
var child_12723 = cljs.core.first(seq__12035_12715__$1);
if(cljs.core.truth_(child_12723)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12723);


var G__12726 = cljs.core.next(seq__12035_12715__$1);
var G__12727 = null;
var G__12728 = (0);
var G__12729 = (0);
seq__12035_12701 = G__12726;
chunk__12037_12702 = G__12727;
count__12038_12703 = G__12728;
i__12039_12704 = G__12729;
continue;
} else {
var G__12730 = cljs.core.next(seq__12035_12715__$1);
var G__12731 = null;
var G__12732 = (0);
var G__12733 = (0);
seq__12035_12701 = G__12730;
chunk__12037_12702 = G__12731;
count__12038_12703 = G__12732;
i__12039_12704 = G__12733;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12683);
}


var G__12734 = seq__12004_12674;
var G__12735 = chunk__12005_12675;
var G__12736 = count__12006_12676;
var G__12737 = (i__12007_12677 + (1));
seq__12004_12674 = G__12734;
chunk__12005_12675 = G__12735;
count__12006_12676 = G__12736;
i__12007_12677 = G__12737;
continue;
} else {
var temp__5804__auto___12738 = cljs.core.seq(seq__12004_12674);
if(temp__5804__auto___12738){
var seq__12004_12739__$1 = temp__5804__auto___12738;
if(cljs.core.chunked_seq_QMARK_(seq__12004_12739__$1)){
var c__5525__auto___12740 = cljs.core.chunk_first(seq__12004_12739__$1);
var G__12741 = cljs.core.chunk_rest(seq__12004_12739__$1);
var G__12742 = c__5525__auto___12740;
var G__12743 = cljs.core.count(c__5525__auto___12740);
var G__12744 = (0);
seq__12004_12674 = G__12741;
chunk__12005_12675 = G__12742;
count__12006_12676 = G__12743;
i__12007_12677 = G__12744;
continue;
} else {
var child_struct_12745 = cljs.core.first(seq__12004_12739__$1);
var children_12746 = shadow.dom.dom_node(child_struct_12745);
if(cljs.core.seq_QMARK_(children_12746)){
var seq__12046_12747 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12746));
var chunk__12048_12748 = null;
var count__12049_12749 = (0);
var i__12050_12750 = (0);
while(true){
if((i__12050_12750 < count__12049_12749)){
var child_12751 = chunk__12048_12748.cljs$core$IIndexed$_nth$arity$2(null,i__12050_12750);
if(cljs.core.truth_(child_12751)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12751);


var G__12752 = seq__12046_12747;
var G__12753 = chunk__12048_12748;
var G__12754 = count__12049_12749;
var G__12755 = (i__12050_12750 + (1));
seq__12046_12747 = G__12752;
chunk__12048_12748 = G__12753;
count__12049_12749 = G__12754;
i__12050_12750 = G__12755;
continue;
} else {
var G__12756 = seq__12046_12747;
var G__12757 = chunk__12048_12748;
var G__12758 = count__12049_12749;
var G__12759 = (i__12050_12750 + (1));
seq__12046_12747 = G__12756;
chunk__12048_12748 = G__12757;
count__12049_12749 = G__12758;
i__12050_12750 = G__12759;
continue;
}
} else {
var temp__5804__auto___12760__$1 = cljs.core.seq(seq__12046_12747);
if(temp__5804__auto___12760__$1){
var seq__12046_12761__$1 = temp__5804__auto___12760__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12046_12761__$1)){
var c__5525__auto___12768 = cljs.core.chunk_first(seq__12046_12761__$1);
var G__12769 = cljs.core.chunk_rest(seq__12046_12761__$1);
var G__12770 = c__5525__auto___12768;
var G__12771 = cljs.core.count(c__5525__auto___12768);
var G__12772 = (0);
seq__12046_12747 = G__12769;
chunk__12048_12748 = G__12770;
count__12049_12749 = G__12771;
i__12050_12750 = G__12772;
continue;
} else {
var child_12773 = cljs.core.first(seq__12046_12761__$1);
if(cljs.core.truth_(child_12773)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12773);


var G__12779 = cljs.core.next(seq__12046_12761__$1);
var G__12780 = null;
var G__12781 = (0);
var G__12782 = (0);
seq__12046_12747 = G__12779;
chunk__12048_12748 = G__12780;
count__12049_12749 = G__12781;
i__12050_12750 = G__12782;
continue;
} else {
var G__12783 = cljs.core.next(seq__12046_12761__$1);
var G__12784 = null;
var G__12785 = (0);
var G__12786 = (0);
seq__12046_12747 = G__12783;
chunk__12048_12748 = G__12784;
count__12049_12749 = G__12785;
i__12050_12750 = G__12786;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12746);
}


var G__12787 = cljs.core.next(seq__12004_12739__$1);
var G__12788 = null;
var G__12789 = (0);
var G__12790 = (0);
seq__12004_12674 = G__12787;
chunk__12005_12675 = G__12788;
count__12006_12676 = G__12789;
i__12007_12677 = G__12790;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__12063 = cljs.core.seq(node);
var chunk__12064 = null;
var count__12065 = (0);
var i__12066 = (0);
while(true){
if((i__12066 < count__12065)){
var n = chunk__12064.cljs$core$IIndexed$_nth$arity$2(null,i__12066);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12798 = seq__12063;
var G__12799 = chunk__12064;
var G__12800 = count__12065;
var G__12801 = (i__12066 + (1));
seq__12063 = G__12798;
chunk__12064 = G__12799;
count__12065 = G__12800;
i__12066 = G__12801;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12063);
if(temp__5804__auto__){
var seq__12063__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12063__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12063__$1);
var G__12802 = cljs.core.chunk_rest(seq__12063__$1);
var G__12803 = c__5525__auto__;
var G__12804 = cljs.core.count(c__5525__auto__);
var G__12805 = (0);
seq__12063 = G__12802;
chunk__12064 = G__12803;
count__12065 = G__12804;
i__12066 = G__12805;
continue;
} else {
var n = cljs.core.first(seq__12063__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12806 = cljs.core.next(seq__12063__$1);
var G__12807 = null;
var G__12808 = (0);
var G__12809 = (0);
seq__12063 = G__12806;
chunk__12064 = G__12807;
count__12065 = G__12808;
i__12066 = G__12809;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__12070 = arguments.length;
switch (G__12070) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__12074 = arguments.length;
switch (G__12074) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__12079 = arguments.length;
switch (G__12079) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5002__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5732__auto__ = [];
var len__5726__auto___12823 = arguments.length;
var i__5727__auto___12824 = (0);
while(true){
if((i__5727__auto___12824 < len__5726__auto___12823)){
args__5732__auto__.push((arguments[i__5727__auto___12824]));

var G__12828 = (i__5727__auto___12824 + (1));
i__5727__auto___12824 = G__12828;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((0) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5733__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__12085_12829 = cljs.core.seq(nodes);
var chunk__12086_12830 = null;
var count__12087_12831 = (0);
var i__12088_12832 = (0);
while(true){
if((i__12088_12832 < count__12087_12831)){
var node_12833 = chunk__12086_12830.cljs$core$IIndexed$_nth$arity$2(null,i__12088_12832);
fragment.appendChild(shadow.dom._to_dom(node_12833));


var G__12834 = seq__12085_12829;
var G__12835 = chunk__12086_12830;
var G__12836 = count__12087_12831;
var G__12837 = (i__12088_12832 + (1));
seq__12085_12829 = G__12834;
chunk__12086_12830 = G__12835;
count__12087_12831 = G__12836;
i__12088_12832 = G__12837;
continue;
} else {
var temp__5804__auto___12839 = cljs.core.seq(seq__12085_12829);
if(temp__5804__auto___12839){
var seq__12085_12841__$1 = temp__5804__auto___12839;
if(cljs.core.chunked_seq_QMARK_(seq__12085_12841__$1)){
var c__5525__auto___12842 = cljs.core.chunk_first(seq__12085_12841__$1);
var G__12843 = cljs.core.chunk_rest(seq__12085_12841__$1);
var G__12844 = c__5525__auto___12842;
var G__12845 = cljs.core.count(c__5525__auto___12842);
var G__12846 = (0);
seq__12085_12829 = G__12843;
chunk__12086_12830 = G__12844;
count__12087_12831 = G__12845;
i__12088_12832 = G__12846;
continue;
} else {
var node_12847 = cljs.core.first(seq__12085_12841__$1);
fragment.appendChild(shadow.dom._to_dom(node_12847));


var G__12848 = cljs.core.next(seq__12085_12841__$1);
var G__12849 = null;
var G__12850 = (0);
var G__12851 = (0);
seq__12085_12829 = G__12848;
chunk__12086_12830 = G__12849;
count__12087_12831 = G__12850;
i__12088_12832 = G__12851;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12084){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12084));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12095_12855 = cljs.core.seq(scripts);
var chunk__12096_12856 = null;
var count__12097_12857 = (0);
var i__12098_12859 = (0);
while(true){
if((i__12098_12859 < count__12097_12857)){
var vec__12105_12860 = chunk__12096_12856.cljs$core$IIndexed$_nth$arity$2(null,i__12098_12859);
var script_tag_12861 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12105_12860,(0),null);
var script_body_12862 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12105_12860,(1),null);
eval(script_body_12862);


var G__12863 = seq__12095_12855;
var G__12864 = chunk__12096_12856;
var G__12865 = count__12097_12857;
var G__12866 = (i__12098_12859 + (1));
seq__12095_12855 = G__12863;
chunk__12096_12856 = G__12864;
count__12097_12857 = G__12865;
i__12098_12859 = G__12866;
continue;
} else {
var temp__5804__auto___12867 = cljs.core.seq(seq__12095_12855);
if(temp__5804__auto___12867){
var seq__12095_12868__$1 = temp__5804__auto___12867;
if(cljs.core.chunked_seq_QMARK_(seq__12095_12868__$1)){
var c__5525__auto___12869 = cljs.core.chunk_first(seq__12095_12868__$1);
var G__12870 = cljs.core.chunk_rest(seq__12095_12868__$1);
var G__12871 = c__5525__auto___12869;
var G__12872 = cljs.core.count(c__5525__auto___12869);
var G__12873 = (0);
seq__12095_12855 = G__12870;
chunk__12096_12856 = G__12871;
count__12097_12857 = G__12872;
i__12098_12859 = G__12873;
continue;
} else {
var vec__12108_12876 = cljs.core.first(seq__12095_12868__$1);
var script_tag_12877 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12108_12876,(0),null);
var script_body_12878 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12108_12876,(1),null);
eval(script_body_12878);


var G__12881 = cljs.core.next(seq__12095_12868__$1);
var G__12882 = null;
var G__12883 = (0);
var G__12884 = (0);
seq__12095_12855 = G__12881;
chunk__12096_12856 = G__12882;
count__12097_12857 = G__12883;
i__12098_12859 = G__12884;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12111){
var vec__12112 = p__12111;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12112,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12112,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__12116 = arguments.length;
switch (G__12116) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__12120 = cljs.core.seq(style_keys);
var chunk__12121 = null;
var count__12122 = (0);
var i__12123 = (0);
while(true){
if((i__12123 < count__12122)){
var it = chunk__12121.cljs$core$IIndexed$_nth$arity$2(null,i__12123);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12912 = seq__12120;
var G__12913 = chunk__12121;
var G__12914 = count__12122;
var G__12915 = (i__12123 + (1));
seq__12120 = G__12912;
chunk__12121 = G__12913;
count__12122 = G__12914;
i__12123 = G__12915;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12120);
if(temp__5804__auto__){
var seq__12120__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12120__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12120__$1);
var G__12916 = cljs.core.chunk_rest(seq__12120__$1);
var G__12917 = c__5525__auto__;
var G__12918 = cljs.core.count(c__5525__auto__);
var G__12919 = (0);
seq__12120 = G__12916;
chunk__12121 = G__12917;
count__12122 = G__12918;
i__12123 = G__12919;
continue;
} else {
var it = cljs.core.first(seq__12120__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__12920 = cljs.core.next(seq__12120__$1);
var G__12921 = null;
var G__12922 = (0);
var G__12923 = (0);
seq__12120 = G__12920;
chunk__12121 = G__12921;
count__12122 = G__12922;
i__12123 = G__12923;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12125,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12129 = k12125;
var G__12129__$1 = (((G__12129 instanceof cljs.core.Keyword))?G__12129.fqn:null);
switch (G__12129__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12125,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12130){
var vec__12131 = p__12130;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12131,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12131,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12124){
var self__ = this;
var G__12124__$1 = this;
return (new cljs.core.RecordIter((0),G__12124__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12126,other12127){
var self__ = this;
var this12126__$1 = this;
return (((!((other12127 == null)))) && ((((this12126__$1.constructor === other12127.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12126__$1.x,other12127.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12126__$1.y,other12127.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12126__$1.__extmap,other12127.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12125){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12145 = k12125;
var G__12145__$1 = (((G__12145 instanceof cljs.core.Keyword))?G__12145.fqn:null);
switch (G__12145__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12125);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12124){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12146 = cljs.core.keyword_identical_QMARK_;
var expr__12147 = k__5309__auto__;
if(cljs.core.truth_((pred__12146.cljs$core$IFn$_invoke$arity$2 ? pred__12146.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12147) : pred__12146.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12147)))){
return (new shadow.dom.Coordinate(G__12124,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12146.cljs$core$IFn$_invoke$arity$2 ? pred__12146.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12147) : pred__12146.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12147)))){
return (new shadow.dom.Coordinate(self__.x,G__12124,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12124),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12124){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12124,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12128){
var extmap__5342__auto__ = (function (){var G__12159 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12128,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12128)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12159);
} else {
return G__12159;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12128),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12128),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5300__auto__,k__5301__auto__){
var self__ = this;
var this__5300__auto____$1 = this;
return this__5300__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5301__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12173,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12179 = k12173;
var G__12179__$1 = (((G__12179 instanceof cljs.core.Keyword))?G__12179.fqn:null);
switch (G__12179__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12173,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12180){
var vec__12181 = p__12180;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12181,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12181,(1),null);
return (f__5321__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5321__auto__.cljs$core$IFn$_invoke$arity$3(ret__5323__auto__,k__5324__auto__,v__5325__auto__) : f__5321__auto__.call(null,ret__5323__auto__,k__5324__auto__,v__5325__auto__));
}),init__5322__auto__,this__5320__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5315__auto__,writer__5316__auto__,opts__5317__auto__){
var self__ = this;
var this__5315__auto____$1 = this;
var pr_pair__5318__auto__ = (function (keyval__5319__auto__){
return cljs.core.pr_sequential_writer(writer__5316__auto__,cljs.core.pr_writer,""," ","",opts__5317__auto__,keyval__5319__auto__);
});
return cljs.core.pr_sequential_writer(writer__5316__auto__,pr_pair__5318__auto__,"#shadow.dom.Size{",", ","}",opts__5317__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12172){
var self__ = this;
var G__12172__$1 = this;
return (new cljs.core.RecordIter((0),G__12172__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5298__auto__){
var self__ = this;
var this__5298__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5295__auto__){
var self__ = this;
var this__5295__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5304__auto__){
var self__ = this;
var this__5304__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5296__auto__){
var self__ = this;
var this__5296__auto____$1 = this;
var h__5111__auto__ = self__.__hash;
if((!((h__5111__auto__ == null)))){
return h__5111__auto__;
} else {
var h__5111__auto____$1 = (function (coll__5297__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5297__auto__));
})(this__5296__auto____$1);
(self__.__hash = h__5111__auto____$1);

return h__5111__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12174,other12175){
var self__ = this;
var this12174__$1 = this;
return (((!((other12175 == null)))) && ((((this12174__$1.constructor === other12175.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12174__$1.w,other12175.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12174__$1.h,other12175.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12174__$1.__extmap,other12175.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5310__auto__,k__5311__auto__){
var self__ = this;
var this__5310__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5311__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5310__auto____$1),self__.__meta),k__5311__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5311__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12173){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12188 = k12173;
var G__12188__$1 = (((G__12188 instanceof cljs.core.Keyword))?G__12188.fqn:null);
switch (G__12188__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12173);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12172){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12190 = cljs.core.keyword_identical_QMARK_;
var expr__12191 = k__5309__auto__;
if(cljs.core.truth_((pred__12190.cljs$core$IFn$_invoke$arity$2 ? pred__12190.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12191) : pred__12190.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12191)))){
return (new shadow.dom.Size(G__12172,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12190.cljs$core$IFn$_invoke$arity$2 ? pred__12190.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12191) : pred__12190.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12191)))){
return (new shadow.dom.Size(self__.w,G__12172,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12172),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12172){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12172,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5305__auto__,entry__5306__auto__){
var self__ = this;
var this__5305__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5306__auto__)){
return this__5305__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5306__auto__,(0)),cljs.core._nth(entry__5306__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5305__auto____$1,entry__5306__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5346__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5346__auto__,writer__5347__auto__){
return cljs.core._write(writer__5347__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12176){
var extmap__5342__auto__ = (function (){var G__12194 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12176,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12176)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12194);
} else {
return G__12194;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12176),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12176),null,cljs.core.not_empty(extmap__5342__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5590__auto__ = opts;
var l__5591__auto__ = a__5590__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5591__auto__)){
var G__13015 = (i + (1));
var G__13016 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13015;
ret = G__13016;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12213){
var vec__12214 = p__12213;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12214,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12214,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12218 = arguments.length;
switch (G__12218) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__13035 = ps;
var G__13036 = (i + (1));
el__$1 = G__13035;
i = G__13036;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__12275 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12275,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12275,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12275,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12279_13052 = cljs.core.seq(props);
var chunk__12280_13053 = null;
var count__12281_13054 = (0);
var i__12282_13055 = (0);
while(true){
if((i__12282_13055 < count__12281_13054)){
var vec__12290_13057 = chunk__12280_13053.cljs$core$IIndexed$_nth$arity$2(null,i__12282_13055);
var k_13058 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12290_13057,(0),null);
var v_13059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12290_13057,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_13058);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13058),v_13059);


var G__13063 = seq__12279_13052;
var G__13064 = chunk__12280_13053;
var G__13065 = count__12281_13054;
var G__13066 = (i__12282_13055 + (1));
seq__12279_13052 = G__13063;
chunk__12280_13053 = G__13064;
count__12281_13054 = G__13065;
i__12282_13055 = G__13066;
continue;
} else {
var temp__5804__auto___13067 = cljs.core.seq(seq__12279_13052);
if(temp__5804__auto___13067){
var seq__12279_13068__$1 = temp__5804__auto___13067;
if(cljs.core.chunked_seq_QMARK_(seq__12279_13068__$1)){
var c__5525__auto___13070 = cljs.core.chunk_first(seq__12279_13068__$1);
var G__13071 = cljs.core.chunk_rest(seq__12279_13068__$1);
var G__13072 = c__5525__auto___13070;
var G__13073 = cljs.core.count(c__5525__auto___13070);
var G__13074 = (0);
seq__12279_13052 = G__13071;
chunk__12280_13053 = G__13072;
count__12281_13054 = G__13073;
i__12282_13055 = G__13074;
continue;
} else {
var vec__12293_13077 = cljs.core.first(seq__12279_13068__$1);
var k_13078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12293_13077,(0),null);
var v_13079 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12293_13077,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_13078);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13078),v_13079);


var G__13081 = cljs.core.next(seq__12279_13068__$1);
var G__13082 = null;
var G__13083 = (0);
var G__13084 = (0);
seq__12279_13052 = G__13081;
chunk__12280_13053 = G__13082;
count__12281_13054 = G__13083;
i__12282_13055 = G__13084;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__12302 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12302,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12302,(1),null);
var seq__12305_13086 = cljs.core.seq(node_children);
var chunk__12307_13087 = null;
var count__12308_13088 = (0);
var i__12309_13089 = (0);
while(true){
if((i__12309_13089 < count__12308_13088)){
var child_struct_13092 = chunk__12307_13087.cljs$core$IIndexed$_nth$arity$2(null,i__12309_13089);
if((!((child_struct_13092 == null)))){
if(typeof child_struct_13092 === 'string'){
var text_13096 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13096),child_struct_13092].join(''));
} else {
var children_13098 = shadow.dom.svg_node(child_struct_13092);
if(cljs.core.seq_QMARK_(children_13098)){
var seq__12353_13100 = cljs.core.seq(children_13098);
var chunk__12355_13101 = null;
var count__12356_13102 = (0);
var i__12357_13103 = (0);
while(true){
if((i__12357_13103 < count__12356_13102)){
var child_13104 = chunk__12355_13101.cljs$core$IIndexed$_nth$arity$2(null,i__12357_13103);
if(cljs.core.truth_(child_13104)){
node.appendChild(child_13104);


var G__13105 = seq__12353_13100;
var G__13106 = chunk__12355_13101;
var G__13107 = count__12356_13102;
var G__13108 = (i__12357_13103 + (1));
seq__12353_13100 = G__13105;
chunk__12355_13101 = G__13106;
count__12356_13102 = G__13107;
i__12357_13103 = G__13108;
continue;
} else {
var G__13109 = seq__12353_13100;
var G__13110 = chunk__12355_13101;
var G__13111 = count__12356_13102;
var G__13112 = (i__12357_13103 + (1));
seq__12353_13100 = G__13109;
chunk__12355_13101 = G__13110;
count__12356_13102 = G__13111;
i__12357_13103 = G__13112;
continue;
}
} else {
var temp__5804__auto___13113 = cljs.core.seq(seq__12353_13100);
if(temp__5804__auto___13113){
var seq__12353_13114__$1 = temp__5804__auto___13113;
if(cljs.core.chunked_seq_QMARK_(seq__12353_13114__$1)){
var c__5525__auto___13115 = cljs.core.chunk_first(seq__12353_13114__$1);
var G__13116 = cljs.core.chunk_rest(seq__12353_13114__$1);
var G__13117 = c__5525__auto___13115;
var G__13118 = cljs.core.count(c__5525__auto___13115);
var G__13119 = (0);
seq__12353_13100 = G__13116;
chunk__12355_13101 = G__13117;
count__12356_13102 = G__13118;
i__12357_13103 = G__13119;
continue;
} else {
var child_13120 = cljs.core.first(seq__12353_13114__$1);
if(cljs.core.truth_(child_13120)){
node.appendChild(child_13120);


var G__13121 = cljs.core.next(seq__12353_13114__$1);
var G__13122 = null;
var G__13123 = (0);
var G__13124 = (0);
seq__12353_13100 = G__13121;
chunk__12355_13101 = G__13122;
count__12356_13102 = G__13123;
i__12357_13103 = G__13124;
continue;
} else {
var G__13125 = cljs.core.next(seq__12353_13114__$1);
var G__13126 = null;
var G__13127 = (0);
var G__13128 = (0);
seq__12353_13100 = G__13125;
chunk__12355_13101 = G__13126;
count__12356_13102 = G__13127;
i__12357_13103 = G__13128;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13098);
}
}


var G__13129 = seq__12305_13086;
var G__13130 = chunk__12307_13087;
var G__13131 = count__12308_13088;
var G__13132 = (i__12309_13089 + (1));
seq__12305_13086 = G__13129;
chunk__12307_13087 = G__13130;
count__12308_13088 = G__13131;
i__12309_13089 = G__13132;
continue;
} else {
var G__13133 = seq__12305_13086;
var G__13134 = chunk__12307_13087;
var G__13135 = count__12308_13088;
var G__13136 = (i__12309_13089 + (1));
seq__12305_13086 = G__13133;
chunk__12307_13087 = G__13134;
count__12308_13088 = G__13135;
i__12309_13089 = G__13136;
continue;
}
} else {
var temp__5804__auto___13137 = cljs.core.seq(seq__12305_13086);
if(temp__5804__auto___13137){
var seq__12305_13138__$1 = temp__5804__auto___13137;
if(cljs.core.chunked_seq_QMARK_(seq__12305_13138__$1)){
var c__5525__auto___13139 = cljs.core.chunk_first(seq__12305_13138__$1);
var G__13141 = cljs.core.chunk_rest(seq__12305_13138__$1);
var G__13142 = c__5525__auto___13139;
var G__13143 = cljs.core.count(c__5525__auto___13139);
var G__13144 = (0);
seq__12305_13086 = G__13141;
chunk__12307_13087 = G__13142;
count__12308_13088 = G__13143;
i__12309_13089 = G__13144;
continue;
} else {
var child_struct_13146 = cljs.core.first(seq__12305_13138__$1);
if((!((child_struct_13146 == null)))){
if(typeof child_struct_13146 === 'string'){
var text_13147 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13147),child_struct_13146].join(''));
} else {
var children_13150 = shadow.dom.svg_node(child_struct_13146);
if(cljs.core.seq_QMARK_(children_13150)){
var seq__12400_13151 = cljs.core.seq(children_13150);
var chunk__12402_13152 = null;
var count__12403_13153 = (0);
var i__12404_13154 = (0);
while(true){
if((i__12404_13154 < count__12403_13153)){
var child_13159 = chunk__12402_13152.cljs$core$IIndexed$_nth$arity$2(null,i__12404_13154);
if(cljs.core.truth_(child_13159)){
node.appendChild(child_13159);


var G__13163 = seq__12400_13151;
var G__13164 = chunk__12402_13152;
var G__13165 = count__12403_13153;
var G__13166 = (i__12404_13154 + (1));
seq__12400_13151 = G__13163;
chunk__12402_13152 = G__13164;
count__12403_13153 = G__13165;
i__12404_13154 = G__13166;
continue;
} else {
var G__13167 = seq__12400_13151;
var G__13168 = chunk__12402_13152;
var G__13169 = count__12403_13153;
var G__13170 = (i__12404_13154 + (1));
seq__12400_13151 = G__13167;
chunk__12402_13152 = G__13168;
count__12403_13153 = G__13169;
i__12404_13154 = G__13170;
continue;
}
} else {
var temp__5804__auto___13176__$1 = cljs.core.seq(seq__12400_13151);
if(temp__5804__auto___13176__$1){
var seq__12400_13178__$1 = temp__5804__auto___13176__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12400_13178__$1)){
var c__5525__auto___13179 = cljs.core.chunk_first(seq__12400_13178__$1);
var G__13180 = cljs.core.chunk_rest(seq__12400_13178__$1);
var G__13181 = c__5525__auto___13179;
var G__13182 = cljs.core.count(c__5525__auto___13179);
var G__13183 = (0);
seq__12400_13151 = G__13180;
chunk__12402_13152 = G__13181;
count__12403_13153 = G__13182;
i__12404_13154 = G__13183;
continue;
} else {
var child_13184 = cljs.core.first(seq__12400_13178__$1);
if(cljs.core.truth_(child_13184)){
node.appendChild(child_13184);


var G__13185 = cljs.core.next(seq__12400_13178__$1);
var G__13186 = null;
var G__13187 = (0);
var G__13188 = (0);
seq__12400_13151 = G__13185;
chunk__12402_13152 = G__13186;
count__12403_13153 = G__13187;
i__12404_13154 = G__13188;
continue;
} else {
var G__13189 = cljs.core.next(seq__12400_13178__$1);
var G__13190 = null;
var G__13191 = (0);
var G__13192 = (0);
seq__12400_13151 = G__13189;
chunk__12402_13152 = G__13190;
count__12403_13153 = G__13191;
i__12404_13154 = G__13192;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13150);
}
}


var G__13193 = cljs.core.next(seq__12305_13138__$1);
var G__13194 = null;
var G__13195 = (0);
var G__13196 = (0);
seq__12305_13086 = G__13193;
chunk__12307_13087 = G__13194;
count__12308_13088 = G__13195;
i__12309_13089 = G__13196;
continue;
} else {
var G__13198 = cljs.core.next(seq__12305_13138__$1);
var G__13199 = null;
var G__13200 = (0);
var G__13201 = (0);
seq__12305_13086 = G__13198;
chunk__12307_13087 = G__13199;
count__12308_13088 = G__13200;
i__12309_13089 = G__13201;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5732__auto__ = [];
var len__5726__auto___13210 = arguments.length;
var i__5727__auto___13211 = (0);
while(true){
if((i__5727__auto___13211 < len__5726__auto___13210)){
args__5732__auto__.push((arguments[i__5727__auto___13211]));

var G__13212 = (i__5727__auto___13211 + (1));
i__5727__auto___13211 = G__13212;
continue;
} else {
}
break;
}

var argseq__5733__auto__ = ((((1) < args__5732__auto__.length))?(new cljs.core.IndexedSeq(args__5732__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5733__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12442){
var G__12443 = cljs.core.first(seq12442);
var seq12442__$1 = cljs.core.next(seq12442);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12443,seq12442__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
