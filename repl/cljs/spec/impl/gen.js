// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__7788__auto__,writer__7789__auto__,opt__7790__auto__){
return cljs.core._write.call(null,writer__7789__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12696 = arguments.length;
var i__8291__auto___12697 = (0);
while(true){
if((i__8291__auto___12697 < len__8290__auto___12696)){
args__8297__auto__.push((arguments[i__8291__auto___12697]));

var G__12698 = (i__8291__auto___12697 + (1));
i__8291__auto___12697 = G__12698;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq12695){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12695));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12700 = arguments.length;
var i__8291__auto___12701 = (0);
while(true){
if((i__8291__auto___12701 < len__8290__auto___12700)){
args__8297__auto__.push((arguments[i__8291__auto___12701]));

var G__12702 = (i__8291__auto___12701 + (1));
i__8291__auto___12701 = G__12702;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq12699){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12699));
});

var g_QMARK__12703 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_12704 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12703){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__12703))
,null));
var mkg_12705 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12703,g_12704){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__12703,g_12704))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__12703,g_12704,mkg_12705){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__12703).call(null,x);
});})(g_QMARK__12703,g_12704,mkg_12705))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__12703,g_12704,mkg_12705){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_12705).call(null,gfn);
});})(g_QMARK__12703,g_12704,mkg_12705))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__12703,g_12704,mkg_12705){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_12704).call(null,generator);
});})(g_QMARK__12703,g_12704,mkg_12705))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__12667__auto___12724 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__12667__auto___12724){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12725 = arguments.length;
var i__8291__auto___12726 = (0);
while(true){
if((i__8291__auto___12726 < len__8290__auto___12725)){
args__8297__auto__.push((arguments[i__8291__auto___12726]));

var G__12727 = (i__8291__auto___12726 + (1));
i__8291__auto___12726 = G__12727;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12667__auto___12724))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12667__auto___12724){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12667__auto___12724),args);
});})(g__12667__auto___12724))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__12667__auto___12724){
return (function (seq12706){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12706));
});})(g__12667__auto___12724))
;


var g__12667__auto___12728 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__12667__auto___12728){
return (function cljs$spec$impl$gen$list(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12729 = arguments.length;
var i__8291__auto___12730 = (0);
while(true){
if((i__8291__auto___12730 < len__8290__auto___12729)){
args__8297__auto__.push((arguments[i__8291__auto___12730]));

var G__12731 = (i__8291__auto___12730 + (1));
i__8291__auto___12730 = G__12731;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12667__auto___12728))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12667__auto___12728){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12667__auto___12728),args);
});})(g__12667__auto___12728))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__12667__auto___12728){
return (function (seq12707){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12707));
});})(g__12667__auto___12728))
;


var g__12667__auto___12732 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__12667__auto___12732){
return (function cljs$spec$impl$gen$map(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12733 = arguments.length;
var i__8291__auto___12734 = (0);
while(true){
if((i__8291__auto___12734 < len__8290__auto___12733)){
args__8297__auto__.push((arguments[i__8291__auto___12734]));

var G__12735 = (i__8291__auto___12734 + (1));
i__8291__auto___12734 = G__12735;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12667__auto___12732))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12667__auto___12732){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12667__auto___12732),args);
});})(g__12667__auto___12732))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__12667__auto___12732){
return (function (seq12708){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12708));
});})(g__12667__auto___12732))
;


var g__12667__auto___12736 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__12667__auto___12736){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12737 = arguments.length;
var i__8291__auto___12738 = (0);
while(true){
if((i__8291__auto___12738 < len__8290__auto___12737)){
args__8297__auto__.push((arguments[i__8291__auto___12738]));

var G__12739 = (i__8291__auto___12738 + (1));
i__8291__auto___12738 = G__12739;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12667__auto___12736))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12667__auto___12736){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12667__auto___12736),args);
});})(g__12667__auto___12736))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__12667__auto___12736){
return (function (seq12709){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12709));
});})(g__12667__auto___12736))
;


var g__12667__auto___12740 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__12667__auto___12740){
return (function cljs$spec$impl$gen$set(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12741 = arguments.length;
var i__8291__auto___12742 = (0);
while(true){
if((i__8291__auto___12742 < len__8290__auto___12741)){
args__8297__auto__.push((arguments[i__8291__auto___12742]));

var G__12743 = (i__8291__auto___12742 + (1));
i__8291__auto___12742 = G__12743;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12667__auto___12740))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12667__auto___12740){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12667__auto___12740),args);
});})(g__12667__auto___12740))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__12667__auto___12740){
return (function (seq12710){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12710));
});})(g__12667__auto___12740))
;


var g__12667__auto___12744 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__12667__auto___12744){
return (function cljs$spec$impl$gen$vector(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12745 = arguments.length;
var i__8291__auto___12746 = (0);
while(true){
if((i__8291__auto___12746 < len__8290__auto___12745)){
args__8297__auto__.push((arguments[i__8291__auto___12746]));

var G__12747 = (i__8291__auto___12746 + (1));
i__8291__auto___12746 = G__12747;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12667__auto___12744))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12667__auto___12744){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12667__auto___12744),args);
});})(g__12667__auto___12744))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__12667__auto___12744){
return (function (seq12711){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12711));
});})(g__12667__auto___12744))
;


var g__12667__auto___12748 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__12667__auto___12748){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12749 = arguments.length;
var i__8291__auto___12750 = (0);
while(true){
if((i__8291__auto___12750 < len__8290__auto___12749)){
args__8297__auto__.push((arguments[i__8291__auto___12750]));

var G__12751 = (i__8291__auto___12750 + (1));
i__8291__auto___12750 = G__12751;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12667__auto___12748))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12667__auto___12748){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12667__auto___12748),args);
});})(g__12667__auto___12748))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__12667__auto___12748){
return (function (seq12712){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12712));
});})(g__12667__auto___12748))
;


var g__12667__auto___12752 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__12667__auto___12752){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12753 = arguments.length;
var i__8291__auto___12754 = (0);
while(true){
if((i__8291__auto___12754 < len__8290__auto___12753)){
args__8297__auto__.push((arguments[i__8291__auto___12754]));

var G__12755 = (i__8291__auto___12754 + (1));
i__8291__auto___12754 = G__12755;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12667__auto___12752))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12667__auto___12752){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12667__auto___12752),args);
});})(g__12667__auto___12752))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__12667__auto___12752){
return (function (seq12713){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12713));
});})(g__12667__auto___12752))
;


var g__12667__auto___12756 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__12667__auto___12756){
return (function cljs$spec$impl$gen$elements(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12757 = arguments.length;
var i__8291__auto___12758 = (0);
while(true){
if((i__8291__auto___12758 < len__8290__auto___12757)){
args__8297__auto__.push((arguments[i__8291__auto___12758]));

var G__12759 = (i__8291__auto___12758 + (1));
i__8291__auto___12758 = G__12759;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12667__auto___12756))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12667__auto___12756){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12667__auto___12756),args);
});})(g__12667__auto___12756))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__12667__auto___12756){
return (function (seq12714){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12714));
});})(g__12667__auto___12756))
;


var g__12667__auto___12760 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__12667__auto___12760){
return (function cljs$spec$impl$gen$bind(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12761 = arguments.length;
var i__8291__auto___12762 = (0);
while(true){
if((i__8291__auto___12762 < len__8290__auto___12761)){
args__8297__auto__.push((arguments[i__8291__auto___12762]));

var G__12763 = (i__8291__auto___12762 + (1));
i__8291__auto___12762 = G__12763;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12667__auto___12760))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12667__auto___12760){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12667__auto___12760),args);
});})(g__12667__auto___12760))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__12667__auto___12760){
return (function (seq12715){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12715));
});})(g__12667__auto___12760))
;


var g__12667__auto___12764 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__12667__auto___12764){
return (function cljs$spec$impl$gen$choose(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12765 = arguments.length;
var i__8291__auto___12766 = (0);
while(true){
if((i__8291__auto___12766 < len__8290__auto___12765)){
args__8297__auto__.push((arguments[i__8291__auto___12766]));

var G__12767 = (i__8291__auto___12766 + (1));
i__8291__auto___12766 = G__12767;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12667__auto___12764))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12667__auto___12764){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12667__auto___12764),args);
});})(g__12667__auto___12764))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__12667__auto___12764){
return (function (seq12716){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12716));
});})(g__12667__auto___12764))
;


var g__12667__auto___12768 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__12667__auto___12768){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12769 = arguments.length;
var i__8291__auto___12770 = (0);
while(true){
if((i__8291__auto___12770 < len__8290__auto___12769)){
args__8297__auto__.push((arguments[i__8291__auto___12770]));

var G__12771 = (i__8291__auto___12770 + (1));
i__8291__auto___12770 = G__12771;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12667__auto___12768))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12667__auto___12768){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12667__auto___12768),args);
});})(g__12667__auto___12768))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__12667__auto___12768){
return (function (seq12717){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12717));
});})(g__12667__auto___12768))
;


var g__12667__auto___12772 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__12667__auto___12772){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12773 = arguments.length;
var i__8291__auto___12774 = (0);
while(true){
if((i__8291__auto___12774 < len__8290__auto___12773)){
args__8297__auto__.push((arguments[i__8291__auto___12774]));

var G__12775 = (i__8291__auto___12774 + (1));
i__8291__auto___12774 = G__12775;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12667__auto___12772))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12667__auto___12772){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12667__auto___12772),args);
});})(g__12667__auto___12772))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__12667__auto___12772){
return (function (seq12718){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12718));
});})(g__12667__auto___12772))
;


var g__12667__auto___12776 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__12667__auto___12776){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12777 = arguments.length;
var i__8291__auto___12778 = (0);
while(true){
if((i__8291__auto___12778 < len__8290__auto___12777)){
args__8297__auto__.push((arguments[i__8291__auto___12778]));

var G__12779 = (i__8291__auto___12778 + (1));
i__8291__auto___12778 = G__12779;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12667__auto___12776))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12667__auto___12776){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12667__auto___12776),args);
});})(g__12667__auto___12776))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__12667__auto___12776){
return (function (seq12719){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12719));
});})(g__12667__auto___12776))
;


var g__12667__auto___12780 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__12667__auto___12780){
return (function cljs$spec$impl$gen$sample(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12781 = arguments.length;
var i__8291__auto___12782 = (0);
while(true){
if((i__8291__auto___12782 < len__8290__auto___12781)){
args__8297__auto__.push((arguments[i__8291__auto___12782]));

var G__12783 = (i__8291__auto___12782 + (1));
i__8291__auto___12782 = G__12783;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12667__auto___12780))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12667__auto___12780){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12667__auto___12780),args);
});})(g__12667__auto___12780))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__12667__auto___12780){
return (function (seq12720){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12720));
});})(g__12667__auto___12780))
;


var g__12667__auto___12784 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__12667__auto___12784){
return (function cljs$spec$impl$gen$return(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12785 = arguments.length;
var i__8291__auto___12786 = (0);
while(true){
if((i__8291__auto___12786 < len__8290__auto___12785)){
args__8297__auto__.push((arguments[i__8291__auto___12786]));

var G__12787 = (i__8291__auto___12786 + (1));
i__8291__auto___12786 = G__12787;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12667__auto___12784))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12667__auto___12784){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12667__auto___12784),args);
});})(g__12667__auto___12784))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__12667__auto___12784){
return (function (seq12721){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12721));
});})(g__12667__auto___12784))
;


var g__12667__auto___12788 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__12667__auto___12788){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12789 = arguments.length;
var i__8291__auto___12790 = (0);
while(true){
if((i__8291__auto___12790 < len__8290__auto___12789)){
args__8297__auto__.push((arguments[i__8291__auto___12790]));

var G__12791 = (i__8291__auto___12790 + (1));
i__8291__auto___12790 = G__12791;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12667__auto___12788))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12667__auto___12788){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12667__auto___12788),args);
});})(g__12667__auto___12788))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__12667__auto___12788){
return (function (seq12722){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12722));
});})(g__12667__auto___12788))
;


var g__12667__auto___12792 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__12667__auto___12792){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12793 = arguments.length;
var i__8291__auto___12794 = (0);
while(true){
if((i__8291__auto___12794 < len__8290__auto___12793)){
args__8297__auto__.push((arguments[i__8291__auto___12794]));

var G__12795 = (i__8291__auto___12794 + (1));
i__8291__auto___12794 = G__12795;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12667__auto___12792))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12667__auto___12792){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__12667__auto___12792),args);
});})(g__12667__auto___12792))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__12667__auto___12792){
return (function (seq12723){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12723));
});})(g__12667__auto___12792))
;

var g__12680__auto___12817 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__12680__auto___12817){
return (function cljs$spec$impl$gen$any(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12818 = arguments.length;
var i__8291__auto___12819 = (0);
while(true){
if((i__8291__auto___12819 < len__8290__auto___12818)){
args__8297__auto__.push((arguments[i__8291__auto___12819]));

var G__12820 = (i__8291__auto___12819 + (1));
i__8291__auto___12819 = G__12820;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12680__auto___12817))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12680__auto___12817){
return (function (args){
return cljs.core.deref.call(null,g__12680__auto___12817);
});})(g__12680__auto___12817))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__12680__auto___12817){
return (function (seq12796){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12796));
});})(g__12680__auto___12817))
;


var g__12680__auto___12821 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__12680__auto___12821){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12822 = arguments.length;
var i__8291__auto___12823 = (0);
while(true){
if((i__8291__auto___12823 < len__8290__auto___12822)){
args__8297__auto__.push((arguments[i__8291__auto___12823]));

var G__12824 = (i__8291__auto___12823 + (1));
i__8291__auto___12823 = G__12824;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12680__auto___12821))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12680__auto___12821){
return (function (args){
return cljs.core.deref.call(null,g__12680__auto___12821);
});})(g__12680__auto___12821))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__12680__auto___12821){
return (function (seq12797){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12797));
});})(g__12680__auto___12821))
;


var g__12680__auto___12825 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__12680__auto___12825){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12826 = arguments.length;
var i__8291__auto___12827 = (0);
while(true){
if((i__8291__auto___12827 < len__8290__auto___12826)){
args__8297__auto__.push((arguments[i__8291__auto___12827]));

var G__12828 = (i__8291__auto___12827 + (1));
i__8291__auto___12827 = G__12828;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12680__auto___12825))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12680__auto___12825){
return (function (args){
return cljs.core.deref.call(null,g__12680__auto___12825);
});})(g__12680__auto___12825))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__12680__auto___12825){
return (function (seq12798){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12798));
});})(g__12680__auto___12825))
;


var g__12680__auto___12829 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__12680__auto___12829){
return (function cljs$spec$impl$gen$char(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12830 = arguments.length;
var i__8291__auto___12831 = (0);
while(true){
if((i__8291__auto___12831 < len__8290__auto___12830)){
args__8297__auto__.push((arguments[i__8291__auto___12831]));

var G__12832 = (i__8291__auto___12831 + (1));
i__8291__auto___12831 = G__12832;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12680__auto___12829))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12680__auto___12829){
return (function (args){
return cljs.core.deref.call(null,g__12680__auto___12829);
});})(g__12680__auto___12829))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__12680__auto___12829){
return (function (seq12799){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12799));
});})(g__12680__auto___12829))
;


var g__12680__auto___12833 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__12680__auto___12833){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12834 = arguments.length;
var i__8291__auto___12835 = (0);
while(true){
if((i__8291__auto___12835 < len__8290__auto___12834)){
args__8297__auto__.push((arguments[i__8291__auto___12835]));

var G__12836 = (i__8291__auto___12835 + (1));
i__8291__auto___12835 = G__12836;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12680__auto___12833))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12680__auto___12833){
return (function (args){
return cljs.core.deref.call(null,g__12680__auto___12833);
});})(g__12680__auto___12833))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__12680__auto___12833){
return (function (seq12800){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12800));
});})(g__12680__auto___12833))
;


var g__12680__auto___12837 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__12680__auto___12837){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12838 = arguments.length;
var i__8291__auto___12839 = (0);
while(true){
if((i__8291__auto___12839 < len__8290__auto___12838)){
args__8297__auto__.push((arguments[i__8291__auto___12839]));

var G__12840 = (i__8291__auto___12839 + (1));
i__8291__auto___12839 = G__12840;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12680__auto___12837))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12680__auto___12837){
return (function (args){
return cljs.core.deref.call(null,g__12680__auto___12837);
});})(g__12680__auto___12837))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__12680__auto___12837){
return (function (seq12801){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12801));
});})(g__12680__auto___12837))
;


var g__12680__auto___12841 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__12680__auto___12841){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12842 = arguments.length;
var i__8291__auto___12843 = (0);
while(true){
if((i__8291__auto___12843 < len__8290__auto___12842)){
args__8297__auto__.push((arguments[i__8291__auto___12843]));

var G__12844 = (i__8291__auto___12843 + (1));
i__8291__auto___12843 = G__12844;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12680__auto___12841))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12680__auto___12841){
return (function (args){
return cljs.core.deref.call(null,g__12680__auto___12841);
});})(g__12680__auto___12841))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__12680__auto___12841){
return (function (seq12802){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12802));
});})(g__12680__auto___12841))
;


var g__12680__auto___12845 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__12680__auto___12845){
return (function cljs$spec$impl$gen$double(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12846 = arguments.length;
var i__8291__auto___12847 = (0);
while(true){
if((i__8291__auto___12847 < len__8290__auto___12846)){
args__8297__auto__.push((arguments[i__8291__auto___12847]));

var G__12848 = (i__8291__auto___12847 + (1));
i__8291__auto___12847 = G__12848;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12680__auto___12845))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12680__auto___12845){
return (function (args){
return cljs.core.deref.call(null,g__12680__auto___12845);
});})(g__12680__auto___12845))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__12680__auto___12845){
return (function (seq12803){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12803));
});})(g__12680__auto___12845))
;


var g__12680__auto___12849 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__12680__auto___12849){
return (function cljs$spec$impl$gen$int(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12850 = arguments.length;
var i__8291__auto___12851 = (0);
while(true){
if((i__8291__auto___12851 < len__8290__auto___12850)){
args__8297__auto__.push((arguments[i__8291__auto___12851]));

var G__12852 = (i__8291__auto___12851 + (1));
i__8291__auto___12851 = G__12852;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12680__auto___12849))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12680__auto___12849){
return (function (args){
return cljs.core.deref.call(null,g__12680__auto___12849);
});})(g__12680__auto___12849))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__12680__auto___12849){
return (function (seq12804){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12804));
});})(g__12680__auto___12849))
;


var g__12680__auto___12853 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__12680__auto___12853){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12854 = arguments.length;
var i__8291__auto___12855 = (0);
while(true){
if((i__8291__auto___12855 < len__8290__auto___12854)){
args__8297__auto__.push((arguments[i__8291__auto___12855]));

var G__12856 = (i__8291__auto___12855 + (1));
i__8291__auto___12855 = G__12856;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12680__auto___12853))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12680__auto___12853){
return (function (args){
return cljs.core.deref.call(null,g__12680__auto___12853);
});})(g__12680__auto___12853))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__12680__auto___12853){
return (function (seq12805){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12805));
});})(g__12680__auto___12853))
;


var g__12680__auto___12857 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__12680__auto___12857){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12858 = arguments.length;
var i__8291__auto___12859 = (0);
while(true){
if((i__8291__auto___12859 < len__8290__auto___12858)){
args__8297__auto__.push((arguments[i__8291__auto___12859]));

var G__12860 = (i__8291__auto___12859 + (1));
i__8291__auto___12859 = G__12860;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12680__auto___12857))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12680__auto___12857){
return (function (args){
return cljs.core.deref.call(null,g__12680__auto___12857);
});})(g__12680__auto___12857))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__12680__auto___12857){
return (function (seq12806){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12806));
});})(g__12680__auto___12857))
;


var g__12680__auto___12861 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__12680__auto___12861){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12862 = arguments.length;
var i__8291__auto___12863 = (0);
while(true){
if((i__8291__auto___12863 < len__8290__auto___12862)){
args__8297__auto__.push((arguments[i__8291__auto___12863]));

var G__12864 = (i__8291__auto___12863 + (1));
i__8291__auto___12863 = G__12864;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12680__auto___12861))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12680__auto___12861){
return (function (args){
return cljs.core.deref.call(null,g__12680__auto___12861);
});})(g__12680__auto___12861))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__12680__auto___12861){
return (function (seq12807){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12807));
});})(g__12680__auto___12861))
;


var g__12680__auto___12865 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__12680__auto___12865){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12866 = arguments.length;
var i__8291__auto___12867 = (0);
while(true){
if((i__8291__auto___12867 < len__8290__auto___12866)){
args__8297__auto__.push((arguments[i__8291__auto___12867]));

var G__12868 = (i__8291__auto___12867 + (1));
i__8291__auto___12867 = G__12868;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12680__auto___12865))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12680__auto___12865){
return (function (args){
return cljs.core.deref.call(null,g__12680__auto___12865);
});})(g__12680__auto___12865))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__12680__auto___12865){
return (function (seq12808){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12808));
});})(g__12680__auto___12865))
;


var g__12680__auto___12869 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__12680__auto___12869){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12870 = arguments.length;
var i__8291__auto___12871 = (0);
while(true){
if((i__8291__auto___12871 < len__8290__auto___12870)){
args__8297__auto__.push((arguments[i__8291__auto___12871]));

var G__12872 = (i__8291__auto___12871 + (1));
i__8291__auto___12871 = G__12872;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12680__auto___12869))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12680__auto___12869){
return (function (args){
return cljs.core.deref.call(null,g__12680__auto___12869);
});})(g__12680__auto___12869))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__12680__auto___12869){
return (function (seq12809){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12809));
});})(g__12680__auto___12869))
;


var g__12680__auto___12873 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__12680__auto___12873){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12874 = arguments.length;
var i__8291__auto___12875 = (0);
while(true){
if((i__8291__auto___12875 < len__8290__auto___12874)){
args__8297__auto__.push((arguments[i__8291__auto___12875]));

var G__12876 = (i__8291__auto___12875 + (1));
i__8291__auto___12875 = G__12876;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12680__auto___12873))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12680__auto___12873){
return (function (args){
return cljs.core.deref.call(null,g__12680__auto___12873);
});})(g__12680__auto___12873))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__12680__auto___12873){
return (function (seq12810){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12810));
});})(g__12680__auto___12873))
;


var g__12680__auto___12877 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__12680__auto___12877){
return (function cljs$spec$impl$gen$string(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12878 = arguments.length;
var i__8291__auto___12879 = (0);
while(true){
if((i__8291__auto___12879 < len__8290__auto___12878)){
args__8297__auto__.push((arguments[i__8291__auto___12879]));

var G__12880 = (i__8291__auto___12879 + (1));
i__8291__auto___12879 = G__12880;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12680__auto___12877))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12680__auto___12877){
return (function (args){
return cljs.core.deref.call(null,g__12680__auto___12877);
});})(g__12680__auto___12877))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__12680__auto___12877){
return (function (seq12811){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12811));
});})(g__12680__auto___12877))
;


var g__12680__auto___12881 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__12680__auto___12881){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12882 = arguments.length;
var i__8291__auto___12883 = (0);
while(true){
if((i__8291__auto___12883 < len__8290__auto___12882)){
args__8297__auto__.push((arguments[i__8291__auto___12883]));

var G__12884 = (i__8291__auto___12883 + (1));
i__8291__auto___12883 = G__12884;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12680__auto___12881))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12680__auto___12881){
return (function (args){
return cljs.core.deref.call(null,g__12680__auto___12881);
});})(g__12680__auto___12881))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__12680__auto___12881){
return (function (seq12812){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12812));
});})(g__12680__auto___12881))
;


var g__12680__auto___12885 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__12680__auto___12885){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12886 = arguments.length;
var i__8291__auto___12887 = (0);
while(true){
if((i__8291__auto___12887 < len__8290__auto___12886)){
args__8297__auto__.push((arguments[i__8291__auto___12887]));

var G__12888 = (i__8291__auto___12887 + (1));
i__8291__auto___12887 = G__12888;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12680__auto___12885))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12680__auto___12885){
return (function (args){
return cljs.core.deref.call(null,g__12680__auto___12885);
});})(g__12680__auto___12885))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__12680__auto___12885){
return (function (seq12813){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12813));
});})(g__12680__auto___12885))
;


var g__12680__auto___12889 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__12680__auto___12889){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12890 = arguments.length;
var i__8291__auto___12891 = (0);
while(true){
if((i__8291__auto___12891 < len__8290__auto___12890)){
args__8297__auto__.push((arguments[i__8291__auto___12891]));

var G__12892 = (i__8291__auto___12891 + (1));
i__8291__auto___12891 = G__12892;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12680__auto___12889))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12680__auto___12889){
return (function (args){
return cljs.core.deref.call(null,g__12680__auto___12889);
});})(g__12680__auto___12889))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__12680__auto___12889){
return (function (seq12814){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12814));
});})(g__12680__auto___12889))
;


var g__12680__auto___12893 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__12680__auto___12893){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12894 = arguments.length;
var i__8291__auto___12895 = (0);
while(true){
if((i__8291__auto___12895 < len__8290__auto___12894)){
args__8297__auto__.push((arguments[i__8291__auto___12895]));

var G__12896 = (i__8291__auto___12895 + (1));
i__8291__auto___12895 = G__12896;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12680__auto___12893))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12680__auto___12893){
return (function (args){
return cljs.core.deref.call(null,g__12680__auto___12893);
});})(g__12680__auto___12893))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__12680__auto___12893){
return (function (seq12815){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12815));
});})(g__12680__auto___12893))
;


var g__12680__auto___12897 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__12680__auto___12897){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12898 = arguments.length;
var i__8291__auto___12899 = (0);
while(true){
if((i__8291__auto___12899 < len__8290__auto___12898)){
args__8297__auto__.push((arguments[i__8291__auto___12899]));

var G__12900 = (i__8291__auto___12899 + (1));
i__8291__auto___12899 = G__12900;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});})(g__12680__auto___12897))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__12680__auto___12897){
return (function (args){
return cljs.core.deref.call(null,g__12680__auto___12897);
});})(g__12680__auto___12897))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__12680__auto___12897){
return (function (seq12816){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12816));
});})(g__12680__auto___12897))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__8297__auto__ = [];
var len__8290__auto___12903 = arguments.length;
var i__8291__auto___12904 = (0);
while(true){
if((i__8291__auto___12904 < len__8290__auto___12903)){
args__8297__auto__.push((arguments[i__8291__auto___12904]));

var G__12905 = (i__8291__auto___12904 + (1));
i__8291__auto___12904 = G__12905;
continue;
} else {
}
break;
}

var argseq__8298__auto__ = ((((0) < args__8297__auto__.length))?(new cljs.core.IndexedSeq(args__8297__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8298__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__12901_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__12901_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq12902){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12902));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__12906_SHARP_){
return (new Date(p1__12906_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});
