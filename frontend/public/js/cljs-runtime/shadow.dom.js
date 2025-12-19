goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = true;

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_12722 = (function (this$){
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
return shadow$dom$IElement$_to_dom$dyn_12722(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_12724 = (function (this$){
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
return shadow$dom$SVGElement$_to_svg$dyn_12724(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__11752 = coll;
var G__11753 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__11752,G__11753) : shadow.dom.lazy_native_coll_seq.call(null,G__11752,G__11753));
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
var G__11769 = arguments.length;
switch (G__11769) {
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
var G__11773 = arguments.length;
switch (G__11773) {
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
var G__11777 = arguments.length;
switch (G__11777) {
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
var G__11779 = arguments.length;
switch (G__11779) {
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
var G__11781 = arguments.length;
switch (G__11781) {
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
var G__11792 = arguments.length;
switch (G__11792) {
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
}catch (e11797){if((e11797 instanceof Object)){
var e = e11797;
return console.log("didnt support attachEvent",el,e);
} else {
throw e11797;

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
var seq__11798 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__11799 = null;
var count__11800 = (0);
var i__11801 = (0);
while(true){
if((i__11801 < count__11800)){
var el = chunk__11799.cljs$core$IIndexed$_nth$arity$2(null,i__11801);
var handler_12757__$1 = ((function (seq__11798,chunk__11799,count__11800,i__11801,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11798,chunk__11799,count__11800,i__11801,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12757__$1);


var G__12758 = seq__11798;
var G__12759 = chunk__11799;
var G__12760 = count__11800;
var G__12761 = (i__11801 + (1));
seq__11798 = G__12758;
chunk__11799 = G__12759;
count__11800 = G__12760;
i__11801 = G__12761;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11798);
if(temp__5804__auto__){
var seq__11798__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11798__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11798__$1);
var G__12764 = cljs.core.chunk_rest(seq__11798__$1);
var G__12765 = c__5525__auto__;
var G__12766 = cljs.core.count(c__5525__auto__);
var G__12767 = (0);
seq__11798 = G__12764;
chunk__11799 = G__12765;
count__11800 = G__12766;
i__11801 = G__12767;
continue;
} else {
var el = cljs.core.first(seq__11798__$1);
var handler_12772__$1 = ((function (seq__11798,chunk__11799,count__11800,i__11801,el,seq__11798__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__11798,chunk__11799,count__11800,i__11801,el,seq__11798__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_12772__$1);


var G__12775 = cljs.core.next(seq__11798__$1);
var G__12776 = null;
var G__12777 = (0);
var G__12778 = (0);
seq__11798 = G__12775;
chunk__11799 = G__12776;
count__11800 = G__12777;
i__11801 = G__12778;
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
var G__11809 = arguments.length;
switch (G__11809) {
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
var seq__11816 = cljs.core.seq(events);
var chunk__11817 = null;
var count__11818 = (0);
var i__11819 = (0);
while(true){
if((i__11819 < count__11818)){
var vec__11832 = chunk__11817.cljs$core$IIndexed$_nth$arity$2(null,i__11819);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11832,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11832,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12789 = seq__11816;
var G__12790 = chunk__11817;
var G__12791 = count__11818;
var G__12792 = (i__11819 + (1));
seq__11816 = G__12789;
chunk__11817 = G__12790;
count__11818 = G__12791;
i__11819 = G__12792;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11816);
if(temp__5804__auto__){
var seq__11816__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11816__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11816__$1);
var G__12795 = cljs.core.chunk_rest(seq__11816__$1);
var G__12796 = c__5525__auto__;
var G__12797 = cljs.core.count(c__5525__auto__);
var G__12798 = (0);
seq__11816 = G__12795;
chunk__11817 = G__12796;
count__11818 = G__12797;
i__11819 = G__12798;
continue;
} else {
var vec__11835 = cljs.core.first(seq__11816__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11835,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11835,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__12799 = cljs.core.next(seq__11816__$1);
var G__12800 = null;
var G__12801 = (0);
var G__12802 = (0);
seq__11816 = G__12799;
chunk__11817 = G__12800;
count__11818 = G__12801;
i__11819 = G__12802;
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
var seq__11838 = cljs.core.seq(styles);
var chunk__11839 = null;
var count__11840 = (0);
var i__11841 = (0);
while(true){
if((i__11841 < count__11840)){
var vec__11850 = chunk__11839.cljs$core$IIndexed$_nth$arity$2(null,i__11841);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11850,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11850,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12806 = seq__11838;
var G__12807 = chunk__11839;
var G__12808 = count__11840;
var G__12809 = (i__11841 + (1));
seq__11838 = G__12806;
chunk__11839 = G__12807;
count__11840 = G__12808;
i__11841 = G__12809;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11838);
if(temp__5804__auto__){
var seq__11838__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11838__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11838__$1);
var G__12811 = cljs.core.chunk_rest(seq__11838__$1);
var G__12812 = c__5525__auto__;
var G__12813 = cljs.core.count(c__5525__auto__);
var G__12814 = (0);
seq__11838 = G__12811;
chunk__11839 = G__12812;
count__11840 = G__12813;
i__11841 = G__12814;
continue;
} else {
var vec__11859 = cljs.core.first(seq__11838__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11859,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11859,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__12818 = cljs.core.next(seq__11838__$1);
var G__12819 = null;
var G__12820 = (0);
var G__12821 = (0);
seq__11838 = G__12818;
chunk__11839 = G__12819;
count__11840 = G__12820;
i__11841 = G__12821;
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
var G__11862_12822 = key;
var G__11862_12823__$1 = (((G__11862_12822 instanceof cljs.core.Keyword))?G__11862_12822.fqn:null);
switch (G__11862_12823__$1) {
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
var ks_12827 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5002__auto__ = goog.string.startsWith(ks_12827,"data-");
if(cljs.core.truth_(or__5002__auto__)){
return or__5002__auto__;
} else {
return goog.string.startsWith(ks_12827,"aria-");
}
})())){
el.setAttribute(ks_12827,value);
} else {
(el[ks_12827] = value);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__11870){
var map__11871 = p__11870;
var map__11871__$1 = cljs.core.__destructure_map(map__11871);
var props = map__11871__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11871__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__11872 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11872,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11872,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11872,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__11887 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__11887,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__11887;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__11889 = arguments.length;
switch (G__11889) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__11906){
var vec__11908 = p__11906;
var seq__11909 = cljs.core.seq(vec__11908);
var first__11910 = cljs.core.first(seq__11909);
var seq__11909__$1 = cljs.core.next(seq__11909);
var nn = first__11910;
var first__11910__$1 = cljs.core.first(seq__11909__$1);
var seq__11909__$2 = cljs.core.next(seq__11909__$1);
var np = first__11910__$1;
var nc = seq__11909__$2;
var node = vec__11908;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11915 = nn;
var G__11916 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11915,G__11916) : create_fn.call(null,G__11915,G__11916));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__11917 = nn;
var G__11918 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__11917,G__11918) : create_fn.call(null,G__11917,G__11918));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__11919 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11919,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__11919,(1),null);
var seq__11922_12848 = cljs.core.seq(node_children);
var chunk__11923_12849 = null;
var count__11924_12850 = (0);
var i__11925_12851 = (0);
while(true){
if((i__11925_12851 < count__11924_12850)){
var child_struct_12852 = chunk__11923_12849.cljs$core$IIndexed$_nth$arity$2(null,i__11925_12851);
var children_12853 = shadow.dom.dom_node(child_struct_12852);
if(cljs.core.seq_QMARK_(children_12853)){
var seq__11945_12854 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12853));
var chunk__11947_12855 = null;
var count__11948_12856 = (0);
var i__11949_12857 = (0);
while(true){
if((i__11949_12857 < count__11948_12856)){
var child_12859 = chunk__11947_12855.cljs$core$IIndexed$_nth$arity$2(null,i__11949_12857);
if(cljs.core.truth_(child_12859)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12859);


var G__12860 = seq__11945_12854;
var G__12861 = chunk__11947_12855;
var G__12862 = count__11948_12856;
var G__12863 = (i__11949_12857 + (1));
seq__11945_12854 = G__12860;
chunk__11947_12855 = G__12861;
count__11948_12856 = G__12862;
i__11949_12857 = G__12863;
continue;
} else {
var G__12865 = seq__11945_12854;
var G__12866 = chunk__11947_12855;
var G__12867 = count__11948_12856;
var G__12868 = (i__11949_12857 + (1));
seq__11945_12854 = G__12865;
chunk__11947_12855 = G__12866;
count__11948_12856 = G__12867;
i__11949_12857 = G__12868;
continue;
}
} else {
var temp__5804__auto___12869 = cljs.core.seq(seq__11945_12854);
if(temp__5804__auto___12869){
var seq__11945_12871__$1 = temp__5804__auto___12869;
if(cljs.core.chunked_seq_QMARK_(seq__11945_12871__$1)){
var c__5525__auto___12872 = cljs.core.chunk_first(seq__11945_12871__$1);
var G__12873 = cljs.core.chunk_rest(seq__11945_12871__$1);
var G__12874 = c__5525__auto___12872;
var G__12875 = cljs.core.count(c__5525__auto___12872);
var G__12876 = (0);
seq__11945_12854 = G__12873;
chunk__11947_12855 = G__12874;
count__11948_12856 = G__12875;
i__11949_12857 = G__12876;
continue;
} else {
var child_12877 = cljs.core.first(seq__11945_12871__$1);
if(cljs.core.truth_(child_12877)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12877);


var G__12879 = cljs.core.next(seq__11945_12871__$1);
var G__12880 = null;
var G__12881 = (0);
var G__12882 = (0);
seq__11945_12854 = G__12879;
chunk__11947_12855 = G__12880;
count__11948_12856 = G__12881;
i__11949_12857 = G__12882;
continue;
} else {
var G__12884 = cljs.core.next(seq__11945_12871__$1);
var G__12885 = null;
var G__12886 = (0);
var G__12887 = (0);
seq__11945_12854 = G__12884;
chunk__11947_12855 = G__12885;
count__11948_12856 = G__12886;
i__11949_12857 = G__12887;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12853);
}


var G__12889 = seq__11922_12848;
var G__12890 = chunk__11923_12849;
var G__12891 = count__11924_12850;
var G__12892 = (i__11925_12851 + (1));
seq__11922_12848 = G__12889;
chunk__11923_12849 = G__12890;
count__11924_12850 = G__12891;
i__11925_12851 = G__12892;
continue;
} else {
var temp__5804__auto___12893 = cljs.core.seq(seq__11922_12848);
if(temp__5804__auto___12893){
var seq__11922_12894__$1 = temp__5804__auto___12893;
if(cljs.core.chunked_seq_QMARK_(seq__11922_12894__$1)){
var c__5525__auto___12895 = cljs.core.chunk_first(seq__11922_12894__$1);
var G__12897 = cljs.core.chunk_rest(seq__11922_12894__$1);
var G__12898 = c__5525__auto___12895;
var G__12899 = cljs.core.count(c__5525__auto___12895);
var G__12900 = (0);
seq__11922_12848 = G__12897;
chunk__11923_12849 = G__12898;
count__11924_12850 = G__12899;
i__11925_12851 = G__12900;
continue;
} else {
var child_struct_12901 = cljs.core.first(seq__11922_12894__$1);
var children_12902 = shadow.dom.dom_node(child_struct_12901);
if(cljs.core.seq_QMARK_(children_12902)){
var seq__11955_12904 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_12902));
var chunk__11957_12905 = null;
var count__11958_12906 = (0);
var i__11959_12907 = (0);
while(true){
if((i__11959_12907 < count__11958_12906)){
var child_12908 = chunk__11957_12905.cljs$core$IIndexed$_nth$arity$2(null,i__11959_12907);
if(cljs.core.truth_(child_12908)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12908);


var G__12909 = seq__11955_12904;
var G__12910 = chunk__11957_12905;
var G__12911 = count__11958_12906;
var G__12912 = (i__11959_12907 + (1));
seq__11955_12904 = G__12909;
chunk__11957_12905 = G__12910;
count__11958_12906 = G__12911;
i__11959_12907 = G__12912;
continue;
} else {
var G__12913 = seq__11955_12904;
var G__12914 = chunk__11957_12905;
var G__12915 = count__11958_12906;
var G__12916 = (i__11959_12907 + (1));
seq__11955_12904 = G__12913;
chunk__11957_12905 = G__12914;
count__11958_12906 = G__12915;
i__11959_12907 = G__12916;
continue;
}
} else {
var temp__5804__auto___12917__$1 = cljs.core.seq(seq__11955_12904);
if(temp__5804__auto___12917__$1){
var seq__11955_12918__$1 = temp__5804__auto___12917__$1;
if(cljs.core.chunked_seq_QMARK_(seq__11955_12918__$1)){
var c__5525__auto___12919 = cljs.core.chunk_first(seq__11955_12918__$1);
var G__12921 = cljs.core.chunk_rest(seq__11955_12918__$1);
var G__12922 = c__5525__auto___12919;
var G__12923 = cljs.core.count(c__5525__auto___12919);
var G__12924 = (0);
seq__11955_12904 = G__12921;
chunk__11957_12905 = G__12922;
count__11958_12906 = G__12923;
i__11959_12907 = G__12924;
continue;
} else {
var child_12925 = cljs.core.first(seq__11955_12918__$1);
if(cljs.core.truth_(child_12925)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_12925);


var G__12927 = cljs.core.next(seq__11955_12918__$1);
var G__12928 = null;
var G__12929 = (0);
var G__12930 = (0);
seq__11955_12904 = G__12927;
chunk__11957_12905 = G__12928;
count__11958_12906 = G__12929;
i__11959_12907 = G__12930;
continue;
} else {
var G__12931 = cljs.core.next(seq__11955_12918__$1);
var G__12932 = null;
var G__12933 = (0);
var G__12934 = (0);
seq__11955_12904 = G__12931;
chunk__11957_12905 = G__12932;
count__11958_12906 = G__12933;
i__11959_12907 = G__12934;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_12902);
}


var G__12939 = cljs.core.next(seq__11922_12894__$1);
var G__12940 = null;
var G__12941 = (0);
var G__12942 = (0);
seq__11922_12848 = G__12939;
chunk__11923_12849 = G__12940;
count__11924_12850 = G__12941;
i__11925_12851 = G__12942;
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
var seq__11982 = cljs.core.seq(node);
var chunk__11983 = null;
var count__11984 = (0);
var i__11985 = (0);
while(true){
if((i__11985 < count__11984)){
var n = chunk__11983.cljs$core$IIndexed$_nth$arity$2(null,i__11985);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12950 = seq__11982;
var G__12951 = chunk__11983;
var G__12952 = count__11984;
var G__12953 = (i__11985 + (1));
seq__11982 = G__12950;
chunk__11983 = G__12951;
count__11984 = G__12952;
i__11985 = G__12953;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__11982);
if(temp__5804__auto__){
var seq__11982__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__11982__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__11982__$1);
var G__12955 = cljs.core.chunk_rest(seq__11982__$1);
var G__12956 = c__5525__auto__;
var G__12958 = cljs.core.count(c__5525__auto__);
var G__12959 = (0);
seq__11982 = G__12955;
chunk__11983 = G__12956;
count__11984 = G__12958;
i__11985 = G__12959;
continue;
} else {
var n = cljs.core.first(seq__11982__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__12961 = cljs.core.next(seq__11982__$1);
var G__12962 = null;
var G__12963 = (0);
var G__12964 = (0);
seq__11982 = G__12961;
chunk__11983 = G__12962;
count__11984 = G__12963;
i__11985 = G__12964;
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
var G__12002 = arguments.length;
switch (G__12002) {
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
var G__12011 = arguments.length;
switch (G__12011) {
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
var G__12033 = arguments.length;
switch (G__12033) {
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
var len__5726__auto___12978 = arguments.length;
var i__5727__auto___12979 = (0);
while(true){
if((i__5727__auto___12979 < len__5726__auto___12978)){
args__5732__auto__.push((arguments[i__5727__auto___12979]));

var G__12980 = (i__5727__auto___12979 + (1));
i__5727__auto___12979 = G__12980;
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
var seq__12071_12981 = cljs.core.seq(nodes);
var chunk__12072_12982 = null;
var count__12073_12983 = (0);
var i__12074_12984 = (0);
while(true){
if((i__12074_12984 < count__12073_12983)){
var node_12985 = chunk__12072_12982.cljs$core$IIndexed$_nth$arity$2(null,i__12074_12984);
fragment.appendChild(shadow.dom._to_dom(node_12985));


var G__12987 = seq__12071_12981;
var G__12988 = chunk__12072_12982;
var G__12989 = count__12073_12983;
var G__12990 = (i__12074_12984 + (1));
seq__12071_12981 = G__12987;
chunk__12072_12982 = G__12988;
count__12073_12983 = G__12989;
i__12074_12984 = G__12990;
continue;
} else {
var temp__5804__auto___12993 = cljs.core.seq(seq__12071_12981);
if(temp__5804__auto___12993){
var seq__12071_12996__$1 = temp__5804__auto___12993;
if(cljs.core.chunked_seq_QMARK_(seq__12071_12996__$1)){
var c__5525__auto___12997 = cljs.core.chunk_first(seq__12071_12996__$1);
var G__13000 = cljs.core.chunk_rest(seq__12071_12996__$1);
var G__13001 = c__5525__auto___12997;
var G__13002 = cljs.core.count(c__5525__auto___12997);
var G__13003 = (0);
seq__12071_12981 = G__13000;
chunk__12072_12982 = G__13001;
count__12073_12983 = G__13002;
i__12074_12984 = G__13003;
continue;
} else {
var node_13005 = cljs.core.first(seq__12071_12996__$1);
fragment.appendChild(shadow.dom._to_dom(node_13005));


var G__13006 = cljs.core.next(seq__12071_12996__$1);
var G__13007 = null;
var G__13008 = (0);
var G__13009 = (0);
seq__12071_12981 = G__13006;
chunk__12072_12982 = G__13007;
count__12073_12983 = G__13008;
i__12074_12984 = G__13009;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq12051){
var self__5712__auto__ = this;
return self__5712__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq12051));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__12088_13011 = cljs.core.seq(scripts);
var chunk__12089_13012 = null;
var count__12090_13013 = (0);
var i__12091_13014 = (0);
while(true){
if((i__12091_13014 < count__12090_13013)){
var vec__12108_13016 = chunk__12089_13012.cljs$core$IIndexed$_nth$arity$2(null,i__12091_13014);
var script_tag_13017 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12108_13016,(0),null);
var script_body_13018 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12108_13016,(1),null);
eval(script_body_13018);


var G__13019 = seq__12088_13011;
var G__13020 = chunk__12089_13012;
var G__13021 = count__12090_13013;
var G__13022 = (i__12091_13014 + (1));
seq__12088_13011 = G__13019;
chunk__12089_13012 = G__13020;
count__12090_13013 = G__13021;
i__12091_13014 = G__13022;
continue;
} else {
var temp__5804__auto___13024 = cljs.core.seq(seq__12088_13011);
if(temp__5804__auto___13024){
var seq__12088_13025__$1 = temp__5804__auto___13024;
if(cljs.core.chunked_seq_QMARK_(seq__12088_13025__$1)){
var c__5525__auto___13027 = cljs.core.chunk_first(seq__12088_13025__$1);
var G__13028 = cljs.core.chunk_rest(seq__12088_13025__$1);
var G__13029 = c__5525__auto___13027;
var G__13030 = cljs.core.count(c__5525__auto___13027);
var G__13031 = (0);
seq__12088_13011 = G__13028;
chunk__12089_13012 = G__13029;
count__12090_13013 = G__13030;
i__12091_13014 = G__13031;
continue;
} else {
var vec__12134_13032 = cljs.core.first(seq__12088_13025__$1);
var script_tag_13033 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12134_13032,(0),null);
var script_body_13034 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12134_13032,(1),null);
eval(script_body_13034);


var G__13036 = cljs.core.next(seq__12088_13025__$1);
var G__13037 = null;
var G__13038 = (0);
var G__13039 = (0);
seq__12088_13011 = G__13036;
chunk__12089_13012 = G__13037;
count__12090_13013 = G__13038;
i__12091_13014 = G__13039;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__12139){
var vec__12145 = p__12139;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12145,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12145,(1),null);
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
var G__12160 = arguments.length;
switch (G__12160) {
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
var seq__12194 = cljs.core.seq(style_keys);
var chunk__12195 = null;
var count__12196 = (0);
var i__12197 = (0);
while(true){
if((i__12197 < count__12196)){
var it = chunk__12195.cljs$core$IIndexed$_nth$arity$2(null,i__12197);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13055 = seq__12194;
var G__13056 = chunk__12195;
var G__13057 = count__12196;
var G__13058 = (i__12197 + (1));
seq__12194 = G__13055;
chunk__12195 = G__13056;
count__12196 = G__13057;
i__12197 = G__13058;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__12194);
if(temp__5804__auto__){
var seq__12194__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__12194__$1)){
var c__5525__auto__ = cljs.core.chunk_first(seq__12194__$1);
var G__13060 = cljs.core.chunk_rest(seq__12194__$1);
var G__13061 = c__5525__auto__;
var G__13062 = cljs.core.count(c__5525__auto__);
var G__13063 = (0);
seq__12194 = G__13060;
chunk__12195 = G__13061;
count__12196 = G__13062;
i__12197 = G__13063;
continue;
} else {
var it = cljs.core.first(seq__12194__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__13065 = cljs.core.next(seq__12194__$1);
var G__13066 = null;
var G__13067 = (0);
var G__13068 = (0);
seq__12194 = G__13065;
chunk__12195 = G__13066;
count__12196 = G__13067;
i__12197 = G__13068;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12224,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12292 = k12224;
var G__12292__$1 = (((G__12292 instanceof cljs.core.Keyword))?G__12292.fqn:null);
switch (G__12292__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12224,else__5303__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12297){
var vec__12298 = p__12297;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12298,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12298,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12223){
var self__ = this;
var G__12223__$1 = this;
return (new cljs.core.RecordIter((0),G__12223__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12225,other12226){
var self__ = this;
var this12225__$1 = this;
return (((!((other12226 == null)))) && ((((this12225__$1.constructor === other12226.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12225__$1.x,other12226.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12225__$1.y,other12226.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12225__$1.__extmap,other12226.__extmap)))))))));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12224){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12359 = k12224;
var G__12359__$1 = (((G__12359 instanceof cljs.core.Keyword))?G__12359.fqn:null);
switch (G__12359__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12224);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12223){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12368 = cljs.core.keyword_identical_QMARK_;
var expr__12369 = k__5309__auto__;
if(cljs.core.truth_((pred__12368.cljs$core$IFn$_invoke$arity$2 ? pred__12368.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__12369) : pred__12368.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__12369)))){
return (new shadow.dom.Coordinate(G__12223,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12368.cljs$core$IFn$_invoke$arity$2 ? pred__12368.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__12369) : pred__12368.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__12369)))){
return (new shadow.dom.Coordinate(self__.x,G__12223,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12223),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12223){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__12223,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__12269){
var extmap__5342__auto__ = (function (){var G__12393 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12269,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__12269)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12393);
} else {
return G__12393;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__12269),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__12269),null,cljs.core.not_empty(extmap__5342__auto__),null));
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5302__auto__,k12411,else__5303__auto__){
var self__ = this;
var this__5302__auto____$1 = this;
var G__12415 = k12411;
var G__12415__$1 = (((G__12415 instanceof cljs.core.Keyword))?G__12415.fqn:null);
switch (G__12415__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k12411,else__5303__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5320__auto__,f__5321__auto__,init__5322__auto__){
var self__ = this;
var this__5320__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5323__auto__,p__12419){
var vec__12420 = p__12419;
var k__5324__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12420,(0),null);
var v__5325__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12420,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__12410){
var self__ = this;
var G__12410__$1 = this;
return (new cljs.core.RecordIter((0),G__12410__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this12412,other12413){
var self__ = this;
var this12412__$1 = this;
return (((!((other12413 == null)))) && ((((this12412__$1.constructor === other12413.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12412__$1.w,other12413.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12412__$1.h,other12413.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this12412__$1.__extmap,other12413.__extmap)))))))));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5307__auto__,k12411){
var self__ = this;
var this__5307__auto____$1 = this;
var G__12439 = k12411;
var G__12439__$1 = (((G__12439 instanceof cljs.core.Keyword))?G__12439.fqn:null);
switch (G__12439__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k12411);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5308__auto__,k__5309__auto__,G__12410){
var self__ = this;
var this__5308__auto____$1 = this;
var pred__12441 = cljs.core.keyword_identical_QMARK_;
var expr__12442 = k__5309__auto__;
if(cljs.core.truth_((pred__12441.cljs$core$IFn$_invoke$arity$2 ? pred__12441.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__12442) : pred__12441.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__12442)))){
return (new shadow.dom.Size(G__12410,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__12441.cljs$core$IFn$_invoke$arity$2 ? pred__12441.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__12442) : pred__12441.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__12442)))){
return (new shadow.dom.Size(self__.w,G__12410,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5309__auto__,G__12410),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5313__auto__){
var self__ = this;
var this__5313__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5299__auto__,G__12410){
var self__ = this;
var this__5299__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__12410,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__12414){
var extmap__5342__auto__ = (function (){var G__12448 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__12414,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__12414)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__12448);
} else {
return G__12448;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__12414),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__12414),null,cljs.core.not_empty(extmap__5342__auto__),null));
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
var G__13156 = (i + (1));
var G__13157 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__13156;
ret = G__13157;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__12475){
var vec__12477 = p__12475;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12477,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12477,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__12486 = arguments.length;
switch (G__12486) {
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
var G__13175 = ps;
var G__13176 = (i + (1));
el__$1 = G__13175;
i = G__13176;
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
var vec__12523 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12523,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12523,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12523,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__12527_13197 = cljs.core.seq(props);
var chunk__12528_13198 = null;
var count__12529_13199 = (0);
var i__12530_13200 = (0);
while(true){
if((i__12530_13200 < count__12529_13199)){
var vec__12548_13202 = chunk__12528_13198.cljs$core$IIndexed$_nth$arity$2(null,i__12530_13200);
var k_13203 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12548_13202,(0),null);
var v_13204 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12548_13202,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_13203);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13203),v_13204);


var G__13208 = seq__12527_13197;
var G__13209 = chunk__12528_13198;
var G__13210 = count__12529_13199;
var G__13211 = (i__12530_13200 + (1));
seq__12527_13197 = G__13208;
chunk__12528_13198 = G__13209;
count__12529_13199 = G__13210;
i__12530_13200 = G__13211;
continue;
} else {
var temp__5804__auto___13212 = cljs.core.seq(seq__12527_13197);
if(temp__5804__auto___13212){
var seq__12527_13213__$1 = temp__5804__auto___13212;
if(cljs.core.chunked_seq_QMARK_(seq__12527_13213__$1)){
var c__5525__auto___13215 = cljs.core.chunk_first(seq__12527_13213__$1);
var G__13216 = cljs.core.chunk_rest(seq__12527_13213__$1);
var G__13217 = c__5525__auto___13215;
var G__13218 = cljs.core.count(c__5525__auto___13215);
var G__13219 = (0);
seq__12527_13197 = G__13216;
chunk__12528_13198 = G__13217;
count__12529_13199 = G__13218;
i__12530_13200 = G__13219;
continue;
} else {
var vec__12563_13221 = cljs.core.first(seq__12527_13213__$1);
var k_13222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12563_13221,(0),null);
var v_13223 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12563_13221,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_13222);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_13222),v_13223);


var G__13232 = cljs.core.next(seq__12527_13213__$1);
var G__13233 = null;
var G__13234 = (0);
var G__13235 = (0);
seq__12527_13197 = G__13232;
chunk__12528_13198 = G__13233;
count__12529_13199 = G__13234;
i__12530_13200 = G__13235;
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
var vec__12573 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12573,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__12573,(1),null);
var seq__12576_13238 = cljs.core.seq(node_children);
var chunk__12578_13239 = null;
var count__12579_13240 = (0);
var i__12580_13241 = (0);
while(true){
if((i__12580_13241 < count__12579_13240)){
var child_struct_13242 = chunk__12578_13239.cljs$core$IIndexed$_nth$arity$2(null,i__12580_13241);
if((!((child_struct_13242 == null)))){
if(typeof child_struct_13242 === 'string'){
var text_13243 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13243),child_struct_13242].join(''));
} else {
var children_13245 = shadow.dom.svg_node(child_struct_13242);
if(cljs.core.seq_QMARK_(children_13245)){
var seq__12642_13246 = cljs.core.seq(children_13245);
var chunk__12644_13247 = null;
var count__12645_13248 = (0);
var i__12646_13249 = (0);
while(true){
if((i__12646_13249 < count__12645_13248)){
var child_13251 = chunk__12644_13247.cljs$core$IIndexed$_nth$arity$2(null,i__12646_13249);
if(cljs.core.truth_(child_13251)){
node.appendChild(child_13251);


var G__13254 = seq__12642_13246;
var G__13255 = chunk__12644_13247;
var G__13256 = count__12645_13248;
var G__13257 = (i__12646_13249 + (1));
seq__12642_13246 = G__13254;
chunk__12644_13247 = G__13255;
count__12645_13248 = G__13256;
i__12646_13249 = G__13257;
continue;
} else {
var G__13259 = seq__12642_13246;
var G__13260 = chunk__12644_13247;
var G__13261 = count__12645_13248;
var G__13262 = (i__12646_13249 + (1));
seq__12642_13246 = G__13259;
chunk__12644_13247 = G__13260;
count__12645_13248 = G__13261;
i__12646_13249 = G__13262;
continue;
}
} else {
var temp__5804__auto___13267 = cljs.core.seq(seq__12642_13246);
if(temp__5804__auto___13267){
var seq__12642_13275__$1 = temp__5804__auto___13267;
if(cljs.core.chunked_seq_QMARK_(seq__12642_13275__$1)){
var c__5525__auto___13277 = cljs.core.chunk_first(seq__12642_13275__$1);
var G__13278 = cljs.core.chunk_rest(seq__12642_13275__$1);
var G__13279 = c__5525__auto___13277;
var G__13280 = cljs.core.count(c__5525__auto___13277);
var G__13281 = (0);
seq__12642_13246 = G__13278;
chunk__12644_13247 = G__13279;
count__12645_13248 = G__13280;
i__12646_13249 = G__13281;
continue;
} else {
var child_13283 = cljs.core.first(seq__12642_13275__$1);
if(cljs.core.truth_(child_13283)){
node.appendChild(child_13283);


var G__13286 = cljs.core.next(seq__12642_13275__$1);
var G__13287 = null;
var G__13288 = (0);
var G__13289 = (0);
seq__12642_13246 = G__13286;
chunk__12644_13247 = G__13287;
count__12645_13248 = G__13288;
i__12646_13249 = G__13289;
continue;
} else {
var G__13290 = cljs.core.next(seq__12642_13275__$1);
var G__13291 = null;
var G__13292 = (0);
var G__13293 = (0);
seq__12642_13246 = G__13290;
chunk__12644_13247 = G__13291;
count__12645_13248 = G__13292;
i__12646_13249 = G__13293;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13245);
}
}


var G__13297 = seq__12576_13238;
var G__13298 = chunk__12578_13239;
var G__13299 = count__12579_13240;
var G__13300 = (i__12580_13241 + (1));
seq__12576_13238 = G__13297;
chunk__12578_13239 = G__13298;
count__12579_13240 = G__13299;
i__12580_13241 = G__13300;
continue;
} else {
var G__13306 = seq__12576_13238;
var G__13307 = chunk__12578_13239;
var G__13308 = count__12579_13240;
var G__13309 = (i__12580_13241 + (1));
seq__12576_13238 = G__13306;
chunk__12578_13239 = G__13307;
count__12579_13240 = G__13308;
i__12580_13241 = G__13309;
continue;
}
} else {
var temp__5804__auto___13319 = cljs.core.seq(seq__12576_13238);
if(temp__5804__auto___13319){
var seq__12576_13322__$1 = temp__5804__auto___13319;
if(cljs.core.chunked_seq_QMARK_(seq__12576_13322__$1)){
var c__5525__auto___13323 = cljs.core.chunk_first(seq__12576_13322__$1);
var G__13326 = cljs.core.chunk_rest(seq__12576_13322__$1);
var G__13328 = c__5525__auto___13323;
var G__13329 = cljs.core.count(c__5525__auto___13323);
var G__13330 = (0);
seq__12576_13238 = G__13326;
chunk__12578_13239 = G__13328;
count__12579_13240 = G__13329;
i__12580_13241 = G__13330;
continue;
} else {
var child_struct_13331 = cljs.core.first(seq__12576_13322__$1);
if((!((child_struct_13331 == null)))){
if(typeof child_struct_13331 === 'string'){
var text_13339 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_13339),child_struct_13331].join(''));
} else {
var children_13341 = shadow.dom.svg_node(child_struct_13331);
if(cljs.core.seq_QMARK_(children_13341)){
var seq__12668_13342 = cljs.core.seq(children_13341);
var chunk__12670_13343 = null;
var count__12671_13344 = (0);
var i__12672_13345 = (0);
while(true){
if((i__12672_13345 < count__12671_13344)){
var child_13346 = chunk__12670_13343.cljs$core$IIndexed$_nth$arity$2(null,i__12672_13345);
if(cljs.core.truth_(child_13346)){
node.appendChild(child_13346);


var G__13347 = seq__12668_13342;
var G__13348 = chunk__12670_13343;
var G__13349 = count__12671_13344;
var G__13350 = (i__12672_13345 + (1));
seq__12668_13342 = G__13347;
chunk__12670_13343 = G__13348;
count__12671_13344 = G__13349;
i__12672_13345 = G__13350;
continue;
} else {
var G__13402 = seq__12668_13342;
var G__13403 = chunk__12670_13343;
var G__13404 = count__12671_13344;
var G__13405 = (i__12672_13345 + (1));
seq__12668_13342 = G__13402;
chunk__12670_13343 = G__13403;
count__12671_13344 = G__13404;
i__12672_13345 = G__13405;
continue;
}
} else {
var temp__5804__auto___13408__$1 = cljs.core.seq(seq__12668_13342);
if(temp__5804__auto___13408__$1){
var seq__12668_13410__$1 = temp__5804__auto___13408__$1;
if(cljs.core.chunked_seq_QMARK_(seq__12668_13410__$1)){
var c__5525__auto___13417 = cljs.core.chunk_first(seq__12668_13410__$1);
var G__13418 = cljs.core.chunk_rest(seq__12668_13410__$1);
var G__13419 = c__5525__auto___13417;
var G__13420 = cljs.core.count(c__5525__auto___13417);
var G__13421 = (0);
seq__12668_13342 = G__13418;
chunk__12670_13343 = G__13419;
count__12671_13344 = G__13420;
i__12672_13345 = G__13421;
continue;
} else {
var child_13423 = cljs.core.first(seq__12668_13410__$1);
if(cljs.core.truth_(child_13423)){
node.appendChild(child_13423);


var G__13424 = cljs.core.next(seq__12668_13410__$1);
var G__13425 = null;
var G__13426 = (0);
var G__13427 = (0);
seq__12668_13342 = G__13424;
chunk__12670_13343 = G__13425;
count__12671_13344 = G__13426;
i__12672_13345 = G__13427;
continue;
} else {
var G__13428 = cljs.core.next(seq__12668_13410__$1);
var G__13429 = null;
var G__13430 = (0);
var G__13431 = (0);
seq__12668_13342 = G__13428;
chunk__12670_13343 = G__13429;
count__12671_13344 = G__13430;
i__12672_13345 = G__13431;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_13341);
}
}


var G__13432 = cljs.core.next(seq__12576_13322__$1);
var G__13433 = null;
var G__13434 = (0);
var G__13435 = (0);
seq__12576_13238 = G__13432;
chunk__12578_13239 = G__13433;
count__12579_13240 = G__13434;
i__12580_13241 = G__13435;
continue;
} else {
var G__13436 = cljs.core.next(seq__12576_13322__$1);
var G__13437 = null;
var G__13438 = (0);
var G__13439 = (0);
seq__12576_13238 = G__13436;
chunk__12578_13239 = G__13437;
count__12579_13240 = G__13438;
i__12580_13241 = G__13439;
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
var len__5726__auto___13445 = arguments.length;
var i__5727__auto___13446 = (0);
while(true){
if((i__5727__auto___13446 < len__5726__auto___13445)){
args__5732__auto__.push((arguments[i__5727__auto___13446]));

var G__13447 = (i__5727__auto___13446 + (1));
i__5727__auto___13446 = G__13447;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq12712){
var G__12713 = cljs.core.first(seq12712);
var seq12712__$1 = cljs.core.next(seq12712);
var self__5711__auto__ = this;
return self__5711__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12713,seq12712__$1);
}));


//# sourceMappingURL=shadow.dom.js.map
