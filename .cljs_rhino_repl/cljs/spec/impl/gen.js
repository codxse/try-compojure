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

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__7691__auto__,writer__7692__auto__,opt__7693__auto__){
return cljs.core._write.call(null,writer__7692__auto__,"cljs.spec.impl.gen/LazyVar");
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
var args__8200__auto__ = [];
var len__8193__auto___12933 = arguments.length;
var i__8194__auto___12934 = (0);
while(true){
if((i__8194__auto___12934 < len__8193__auto___12933)){
args__8200__auto__.push((arguments[i__8194__auto___12934]));

var G__12935 = (i__8194__auto___12934 + (1));
i__8194__auto___12934 = G__12935;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq12932){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12932));
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
var args__8200__auto__ = [];
var len__8193__auto___12937 = arguments.length;
var i__8194__auto___12938 = (0);
while(true){
if((i__8194__auto___12938 < len__8193__auto___12937)){
args__8200__auto__.push((arguments[i__8194__auto___12938]));

var G__12939 = (i__8194__auto___12938 + (1));
i__8194__auto___12938 = G__12939;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq12936){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12936));
});

var g_QMARK__12940 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_12941 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12940){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__12940))
,null));
var mkg_12942 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__12940,g_12941){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__12940,g_12941))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__12940,g_12941,mkg_12942){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__12940).call(null,x);
});})(g_QMARK__12940,g_12941,mkg_12942))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__12940,g_12941,mkg_12942){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_12942).call(null,gfn);
});})(g_QMARK__12940,g_12941,mkg_12942))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__12940,g_12941,mkg_12942){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_12941).call(null,generator);
});})(g_QMARK__12940,g_12941,mkg_12942))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__9464__auto___12961 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__9464__auto___12961){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__8200__auto__ = [];
var len__8193__auto___12962 = arguments.length;
var i__8194__auto___12963 = (0);
while(true){
if((i__8194__auto___12963 < len__8193__auto___12962)){
args__8200__auto__.push((arguments[i__8194__auto___12963]));

var G__12964 = (i__8194__auto___12963 + (1));
i__8194__auto___12963 = G__12964;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9464__auto___12961))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9464__auto___12961){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9464__auto___12961),args);
});})(g__9464__auto___12961))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__9464__auto___12961){
return (function (seq12943){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12943));
});})(g__9464__auto___12961))
;


var g__9464__auto___12965 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__9464__auto___12965){
return (function cljs$spec$impl$gen$list(var_args){
var args__8200__auto__ = [];
var len__8193__auto___12966 = arguments.length;
var i__8194__auto___12967 = (0);
while(true){
if((i__8194__auto___12967 < len__8193__auto___12966)){
args__8200__auto__.push((arguments[i__8194__auto___12967]));

var G__12968 = (i__8194__auto___12967 + (1));
i__8194__auto___12967 = G__12968;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9464__auto___12965))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9464__auto___12965){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9464__auto___12965),args);
});})(g__9464__auto___12965))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__9464__auto___12965){
return (function (seq12944){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12944));
});})(g__9464__auto___12965))
;


var g__9464__auto___12969 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__9464__auto___12969){
return (function cljs$spec$impl$gen$map(var_args){
var args__8200__auto__ = [];
var len__8193__auto___12970 = arguments.length;
var i__8194__auto___12971 = (0);
while(true){
if((i__8194__auto___12971 < len__8193__auto___12970)){
args__8200__auto__.push((arguments[i__8194__auto___12971]));

var G__12972 = (i__8194__auto___12971 + (1));
i__8194__auto___12971 = G__12972;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9464__auto___12969))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9464__auto___12969){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9464__auto___12969),args);
});})(g__9464__auto___12969))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__9464__auto___12969){
return (function (seq12945){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12945));
});})(g__9464__auto___12969))
;


var g__9464__auto___12973 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__9464__auto___12973){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__8200__auto__ = [];
var len__8193__auto___12974 = arguments.length;
var i__8194__auto___12975 = (0);
while(true){
if((i__8194__auto___12975 < len__8193__auto___12974)){
args__8200__auto__.push((arguments[i__8194__auto___12975]));

var G__12976 = (i__8194__auto___12975 + (1));
i__8194__auto___12975 = G__12976;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9464__auto___12973))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9464__auto___12973){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9464__auto___12973),args);
});})(g__9464__auto___12973))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__9464__auto___12973){
return (function (seq12946){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12946));
});})(g__9464__auto___12973))
;


var g__9464__auto___12977 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__9464__auto___12977){
return (function cljs$spec$impl$gen$set(var_args){
var args__8200__auto__ = [];
var len__8193__auto___12978 = arguments.length;
var i__8194__auto___12979 = (0);
while(true){
if((i__8194__auto___12979 < len__8193__auto___12978)){
args__8200__auto__.push((arguments[i__8194__auto___12979]));

var G__12980 = (i__8194__auto___12979 + (1));
i__8194__auto___12979 = G__12980;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9464__auto___12977))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9464__auto___12977){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9464__auto___12977),args);
});})(g__9464__auto___12977))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__9464__auto___12977){
return (function (seq12947){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12947));
});})(g__9464__auto___12977))
;


var g__9464__auto___12981 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__9464__auto___12981){
return (function cljs$spec$impl$gen$vector(var_args){
var args__8200__auto__ = [];
var len__8193__auto___12982 = arguments.length;
var i__8194__auto___12983 = (0);
while(true){
if((i__8194__auto___12983 < len__8193__auto___12982)){
args__8200__auto__.push((arguments[i__8194__auto___12983]));

var G__12984 = (i__8194__auto___12983 + (1));
i__8194__auto___12983 = G__12984;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9464__auto___12981))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9464__auto___12981){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9464__auto___12981),args);
});})(g__9464__auto___12981))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__9464__auto___12981){
return (function (seq12948){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12948));
});})(g__9464__auto___12981))
;


var g__9464__auto___12985 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__9464__auto___12985){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__8200__auto__ = [];
var len__8193__auto___12986 = arguments.length;
var i__8194__auto___12987 = (0);
while(true){
if((i__8194__auto___12987 < len__8193__auto___12986)){
args__8200__auto__.push((arguments[i__8194__auto___12987]));

var G__12988 = (i__8194__auto___12987 + (1));
i__8194__auto___12987 = G__12988;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9464__auto___12985))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9464__auto___12985){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9464__auto___12985),args);
});})(g__9464__auto___12985))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__9464__auto___12985){
return (function (seq12949){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12949));
});})(g__9464__auto___12985))
;


var g__9464__auto___12989 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__9464__auto___12989){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__8200__auto__ = [];
var len__8193__auto___12990 = arguments.length;
var i__8194__auto___12991 = (0);
while(true){
if((i__8194__auto___12991 < len__8193__auto___12990)){
args__8200__auto__.push((arguments[i__8194__auto___12991]));

var G__12992 = (i__8194__auto___12991 + (1));
i__8194__auto___12991 = G__12992;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9464__auto___12989))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9464__auto___12989){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9464__auto___12989),args);
});})(g__9464__auto___12989))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__9464__auto___12989){
return (function (seq12950){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12950));
});})(g__9464__auto___12989))
;


var g__9464__auto___12993 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__9464__auto___12993){
return (function cljs$spec$impl$gen$elements(var_args){
var args__8200__auto__ = [];
var len__8193__auto___12994 = arguments.length;
var i__8194__auto___12995 = (0);
while(true){
if((i__8194__auto___12995 < len__8193__auto___12994)){
args__8200__auto__.push((arguments[i__8194__auto___12995]));

var G__12996 = (i__8194__auto___12995 + (1));
i__8194__auto___12995 = G__12996;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9464__auto___12993))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9464__auto___12993){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9464__auto___12993),args);
});})(g__9464__auto___12993))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__9464__auto___12993){
return (function (seq12951){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12951));
});})(g__9464__auto___12993))
;


var g__9464__auto___12997 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__9464__auto___12997){
return (function cljs$spec$impl$gen$bind(var_args){
var args__8200__auto__ = [];
var len__8193__auto___12998 = arguments.length;
var i__8194__auto___12999 = (0);
while(true){
if((i__8194__auto___12999 < len__8193__auto___12998)){
args__8200__auto__.push((arguments[i__8194__auto___12999]));

var G__13000 = (i__8194__auto___12999 + (1));
i__8194__auto___12999 = G__13000;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9464__auto___12997))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9464__auto___12997){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9464__auto___12997),args);
});})(g__9464__auto___12997))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__9464__auto___12997){
return (function (seq12952){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12952));
});})(g__9464__auto___12997))
;


var g__9464__auto___13001 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__9464__auto___13001){
return (function cljs$spec$impl$gen$choose(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13002 = arguments.length;
var i__8194__auto___13003 = (0);
while(true){
if((i__8194__auto___13003 < len__8193__auto___13002)){
args__8200__auto__.push((arguments[i__8194__auto___13003]));

var G__13004 = (i__8194__auto___13003 + (1));
i__8194__auto___13003 = G__13004;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9464__auto___13001))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9464__auto___13001){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9464__auto___13001),args);
});})(g__9464__auto___13001))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__9464__auto___13001){
return (function (seq12953){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12953));
});})(g__9464__auto___13001))
;


var g__9464__auto___13005 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__9464__auto___13005){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13006 = arguments.length;
var i__8194__auto___13007 = (0);
while(true){
if((i__8194__auto___13007 < len__8193__auto___13006)){
args__8200__auto__.push((arguments[i__8194__auto___13007]));

var G__13008 = (i__8194__auto___13007 + (1));
i__8194__auto___13007 = G__13008;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9464__auto___13005))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9464__auto___13005){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9464__auto___13005),args);
});})(g__9464__auto___13005))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__9464__auto___13005){
return (function (seq12954){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12954));
});})(g__9464__auto___13005))
;


var g__9464__auto___13009 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__9464__auto___13009){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13010 = arguments.length;
var i__8194__auto___13011 = (0);
while(true){
if((i__8194__auto___13011 < len__8193__auto___13010)){
args__8200__auto__.push((arguments[i__8194__auto___13011]));

var G__13012 = (i__8194__auto___13011 + (1));
i__8194__auto___13011 = G__13012;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9464__auto___13009))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9464__auto___13009){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9464__auto___13009),args);
});})(g__9464__auto___13009))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__9464__auto___13009){
return (function (seq12955){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12955));
});})(g__9464__auto___13009))
;


var g__9464__auto___13013 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__9464__auto___13013){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13014 = arguments.length;
var i__8194__auto___13015 = (0);
while(true){
if((i__8194__auto___13015 < len__8193__auto___13014)){
args__8200__auto__.push((arguments[i__8194__auto___13015]));

var G__13016 = (i__8194__auto___13015 + (1));
i__8194__auto___13015 = G__13016;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9464__auto___13013))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9464__auto___13013){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9464__auto___13013),args);
});})(g__9464__auto___13013))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__9464__auto___13013){
return (function (seq12956){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12956));
});})(g__9464__auto___13013))
;


var g__9464__auto___13017 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__9464__auto___13017){
return (function cljs$spec$impl$gen$sample(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13018 = arguments.length;
var i__8194__auto___13019 = (0);
while(true){
if((i__8194__auto___13019 < len__8193__auto___13018)){
args__8200__auto__.push((arguments[i__8194__auto___13019]));

var G__13020 = (i__8194__auto___13019 + (1));
i__8194__auto___13019 = G__13020;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9464__auto___13017))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9464__auto___13017){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9464__auto___13017),args);
});})(g__9464__auto___13017))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__9464__auto___13017){
return (function (seq12957){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12957));
});})(g__9464__auto___13017))
;


var g__9464__auto___13021 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__9464__auto___13021){
return (function cljs$spec$impl$gen$return(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13022 = arguments.length;
var i__8194__auto___13023 = (0);
while(true){
if((i__8194__auto___13023 < len__8193__auto___13022)){
args__8200__auto__.push((arguments[i__8194__auto___13023]));

var G__13024 = (i__8194__auto___13023 + (1));
i__8194__auto___13023 = G__13024;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9464__auto___13021))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9464__auto___13021){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9464__auto___13021),args);
});})(g__9464__auto___13021))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__9464__auto___13021){
return (function (seq12958){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12958));
});})(g__9464__auto___13021))
;


var g__9464__auto___13025 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__9464__auto___13025){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13026 = arguments.length;
var i__8194__auto___13027 = (0);
while(true){
if((i__8194__auto___13027 < len__8193__auto___13026)){
args__8200__auto__.push((arguments[i__8194__auto___13027]));

var G__13028 = (i__8194__auto___13027 + (1));
i__8194__auto___13027 = G__13028;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9464__auto___13025))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9464__auto___13025){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9464__auto___13025),args);
});})(g__9464__auto___13025))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__9464__auto___13025){
return (function (seq12959){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12959));
});})(g__9464__auto___13025))
;


var g__9464__auto___13029 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__9464__auto___13029){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13030 = arguments.length;
var i__8194__auto___13031 = (0);
while(true){
if((i__8194__auto___13031 < len__8193__auto___13030)){
args__8200__auto__.push((arguments[i__8194__auto___13031]));

var G__13032 = (i__8194__auto___13031 + (1));
i__8194__auto___13031 = G__13032;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9464__auto___13029))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9464__auto___13029){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__9464__auto___13029),args);
});})(g__9464__auto___13029))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__9464__auto___13029){
return (function (seq12960){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq12960));
});})(g__9464__auto___13029))
;

var g__9477__auto___13054 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__9477__auto___13054){
return (function cljs$spec$impl$gen$any(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13055 = arguments.length;
var i__8194__auto___13056 = (0);
while(true){
if((i__8194__auto___13056 < len__8193__auto___13055)){
args__8200__auto__.push((arguments[i__8194__auto___13056]));

var G__13057 = (i__8194__auto___13056 + (1));
i__8194__auto___13056 = G__13057;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9477__auto___13054))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9477__auto___13054){
return (function (args){
return cljs.core.deref.call(null,g__9477__auto___13054);
});})(g__9477__auto___13054))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__9477__auto___13054){
return (function (seq13033){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13033));
});})(g__9477__auto___13054))
;


var g__9477__auto___13058 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__9477__auto___13058){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13059 = arguments.length;
var i__8194__auto___13060 = (0);
while(true){
if((i__8194__auto___13060 < len__8193__auto___13059)){
args__8200__auto__.push((arguments[i__8194__auto___13060]));

var G__13061 = (i__8194__auto___13060 + (1));
i__8194__auto___13060 = G__13061;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9477__auto___13058))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9477__auto___13058){
return (function (args){
return cljs.core.deref.call(null,g__9477__auto___13058);
});})(g__9477__auto___13058))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__9477__auto___13058){
return (function (seq13034){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13034));
});})(g__9477__auto___13058))
;


var g__9477__auto___13062 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__9477__auto___13062){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13063 = arguments.length;
var i__8194__auto___13064 = (0);
while(true){
if((i__8194__auto___13064 < len__8193__auto___13063)){
args__8200__auto__.push((arguments[i__8194__auto___13064]));

var G__13065 = (i__8194__auto___13064 + (1));
i__8194__auto___13064 = G__13065;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9477__auto___13062))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9477__auto___13062){
return (function (args){
return cljs.core.deref.call(null,g__9477__auto___13062);
});})(g__9477__auto___13062))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__9477__auto___13062){
return (function (seq13035){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13035));
});})(g__9477__auto___13062))
;


var g__9477__auto___13066 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__9477__auto___13066){
return (function cljs$spec$impl$gen$char(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13067 = arguments.length;
var i__8194__auto___13068 = (0);
while(true){
if((i__8194__auto___13068 < len__8193__auto___13067)){
args__8200__auto__.push((arguments[i__8194__auto___13068]));

var G__13069 = (i__8194__auto___13068 + (1));
i__8194__auto___13068 = G__13069;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9477__auto___13066))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9477__auto___13066){
return (function (args){
return cljs.core.deref.call(null,g__9477__auto___13066);
});})(g__9477__auto___13066))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__9477__auto___13066){
return (function (seq13036){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13036));
});})(g__9477__auto___13066))
;


var g__9477__auto___13070 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__9477__auto___13070){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13071 = arguments.length;
var i__8194__auto___13072 = (0);
while(true){
if((i__8194__auto___13072 < len__8193__auto___13071)){
args__8200__auto__.push((arguments[i__8194__auto___13072]));

var G__13073 = (i__8194__auto___13072 + (1));
i__8194__auto___13072 = G__13073;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9477__auto___13070))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9477__auto___13070){
return (function (args){
return cljs.core.deref.call(null,g__9477__auto___13070);
});})(g__9477__auto___13070))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__9477__auto___13070){
return (function (seq13037){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13037));
});})(g__9477__auto___13070))
;


var g__9477__auto___13074 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__9477__auto___13074){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13075 = arguments.length;
var i__8194__auto___13076 = (0);
while(true){
if((i__8194__auto___13076 < len__8193__auto___13075)){
args__8200__auto__.push((arguments[i__8194__auto___13076]));

var G__13077 = (i__8194__auto___13076 + (1));
i__8194__auto___13076 = G__13077;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9477__auto___13074))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9477__auto___13074){
return (function (args){
return cljs.core.deref.call(null,g__9477__auto___13074);
});})(g__9477__auto___13074))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__9477__auto___13074){
return (function (seq13038){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13038));
});})(g__9477__auto___13074))
;


var g__9477__auto___13078 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__9477__auto___13078){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13079 = arguments.length;
var i__8194__auto___13080 = (0);
while(true){
if((i__8194__auto___13080 < len__8193__auto___13079)){
args__8200__auto__.push((arguments[i__8194__auto___13080]));

var G__13081 = (i__8194__auto___13080 + (1));
i__8194__auto___13080 = G__13081;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9477__auto___13078))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9477__auto___13078){
return (function (args){
return cljs.core.deref.call(null,g__9477__auto___13078);
});})(g__9477__auto___13078))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__9477__auto___13078){
return (function (seq13039){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13039));
});})(g__9477__auto___13078))
;


var g__9477__auto___13082 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__9477__auto___13082){
return (function cljs$spec$impl$gen$double(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13083 = arguments.length;
var i__8194__auto___13084 = (0);
while(true){
if((i__8194__auto___13084 < len__8193__auto___13083)){
args__8200__auto__.push((arguments[i__8194__auto___13084]));

var G__13085 = (i__8194__auto___13084 + (1));
i__8194__auto___13084 = G__13085;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9477__auto___13082))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9477__auto___13082){
return (function (args){
return cljs.core.deref.call(null,g__9477__auto___13082);
});})(g__9477__auto___13082))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__9477__auto___13082){
return (function (seq13040){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13040));
});})(g__9477__auto___13082))
;


var g__9477__auto___13086 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__9477__auto___13086){
return (function cljs$spec$impl$gen$int(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13087 = arguments.length;
var i__8194__auto___13088 = (0);
while(true){
if((i__8194__auto___13088 < len__8193__auto___13087)){
args__8200__auto__.push((arguments[i__8194__auto___13088]));

var G__13089 = (i__8194__auto___13088 + (1));
i__8194__auto___13088 = G__13089;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9477__auto___13086))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9477__auto___13086){
return (function (args){
return cljs.core.deref.call(null,g__9477__auto___13086);
});})(g__9477__auto___13086))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__9477__auto___13086){
return (function (seq13041){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13041));
});})(g__9477__auto___13086))
;


var g__9477__auto___13090 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__9477__auto___13090){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13091 = arguments.length;
var i__8194__auto___13092 = (0);
while(true){
if((i__8194__auto___13092 < len__8193__auto___13091)){
args__8200__auto__.push((arguments[i__8194__auto___13092]));

var G__13093 = (i__8194__auto___13092 + (1));
i__8194__auto___13092 = G__13093;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9477__auto___13090))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9477__auto___13090){
return (function (args){
return cljs.core.deref.call(null,g__9477__auto___13090);
});})(g__9477__auto___13090))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__9477__auto___13090){
return (function (seq13042){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13042));
});})(g__9477__auto___13090))
;


var g__9477__auto___13094 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__9477__auto___13094){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13095 = arguments.length;
var i__8194__auto___13096 = (0);
while(true){
if((i__8194__auto___13096 < len__8193__auto___13095)){
args__8200__auto__.push((arguments[i__8194__auto___13096]));

var G__13097 = (i__8194__auto___13096 + (1));
i__8194__auto___13096 = G__13097;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9477__auto___13094))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9477__auto___13094){
return (function (args){
return cljs.core.deref.call(null,g__9477__auto___13094);
});})(g__9477__auto___13094))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__9477__auto___13094){
return (function (seq13043){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13043));
});})(g__9477__auto___13094))
;


var g__9477__auto___13098 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__9477__auto___13098){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13099 = arguments.length;
var i__8194__auto___13100 = (0);
while(true){
if((i__8194__auto___13100 < len__8193__auto___13099)){
args__8200__auto__.push((arguments[i__8194__auto___13100]));

var G__13101 = (i__8194__auto___13100 + (1));
i__8194__auto___13100 = G__13101;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9477__auto___13098))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9477__auto___13098){
return (function (args){
return cljs.core.deref.call(null,g__9477__auto___13098);
});})(g__9477__auto___13098))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__9477__auto___13098){
return (function (seq13044){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13044));
});})(g__9477__auto___13098))
;


var g__9477__auto___13102 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__9477__auto___13102){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13103 = arguments.length;
var i__8194__auto___13104 = (0);
while(true){
if((i__8194__auto___13104 < len__8193__auto___13103)){
args__8200__auto__.push((arguments[i__8194__auto___13104]));

var G__13105 = (i__8194__auto___13104 + (1));
i__8194__auto___13104 = G__13105;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9477__auto___13102))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9477__auto___13102){
return (function (args){
return cljs.core.deref.call(null,g__9477__auto___13102);
});})(g__9477__auto___13102))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__9477__auto___13102){
return (function (seq13045){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13045));
});})(g__9477__auto___13102))
;


var g__9477__auto___13106 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__9477__auto___13106){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13107 = arguments.length;
var i__8194__auto___13108 = (0);
while(true){
if((i__8194__auto___13108 < len__8193__auto___13107)){
args__8200__auto__.push((arguments[i__8194__auto___13108]));

var G__13109 = (i__8194__auto___13108 + (1));
i__8194__auto___13108 = G__13109;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9477__auto___13106))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9477__auto___13106){
return (function (args){
return cljs.core.deref.call(null,g__9477__auto___13106);
});})(g__9477__auto___13106))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__9477__auto___13106){
return (function (seq13046){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13046));
});})(g__9477__auto___13106))
;


var g__9477__auto___13110 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__9477__auto___13110){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13111 = arguments.length;
var i__8194__auto___13112 = (0);
while(true){
if((i__8194__auto___13112 < len__8193__auto___13111)){
args__8200__auto__.push((arguments[i__8194__auto___13112]));

var G__13113 = (i__8194__auto___13112 + (1));
i__8194__auto___13112 = G__13113;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9477__auto___13110))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9477__auto___13110){
return (function (args){
return cljs.core.deref.call(null,g__9477__auto___13110);
});})(g__9477__auto___13110))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__9477__auto___13110){
return (function (seq13047){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13047));
});})(g__9477__auto___13110))
;


var g__9477__auto___13114 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__9477__auto___13114){
return (function cljs$spec$impl$gen$string(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13115 = arguments.length;
var i__8194__auto___13116 = (0);
while(true){
if((i__8194__auto___13116 < len__8193__auto___13115)){
args__8200__auto__.push((arguments[i__8194__auto___13116]));

var G__13117 = (i__8194__auto___13116 + (1));
i__8194__auto___13116 = G__13117;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9477__auto___13114))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9477__auto___13114){
return (function (args){
return cljs.core.deref.call(null,g__9477__auto___13114);
});})(g__9477__auto___13114))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__9477__auto___13114){
return (function (seq13048){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13048));
});})(g__9477__auto___13114))
;


var g__9477__auto___13118 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__9477__auto___13118){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13119 = arguments.length;
var i__8194__auto___13120 = (0);
while(true){
if((i__8194__auto___13120 < len__8193__auto___13119)){
args__8200__auto__.push((arguments[i__8194__auto___13120]));

var G__13121 = (i__8194__auto___13120 + (1));
i__8194__auto___13120 = G__13121;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9477__auto___13118))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9477__auto___13118){
return (function (args){
return cljs.core.deref.call(null,g__9477__auto___13118);
});})(g__9477__auto___13118))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__9477__auto___13118){
return (function (seq13049){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13049));
});})(g__9477__auto___13118))
;


var g__9477__auto___13122 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__9477__auto___13122){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13123 = arguments.length;
var i__8194__auto___13124 = (0);
while(true){
if((i__8194__auto___13124 < len__8193__auto___13123)){
args__8200__auto__.push((arguments[i__8194__auto___13124]));

var G__13125 = (i__8194__auto___13124 + (1));
i__8194__auto___13124 = G__13125;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9477__auto___13122))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9477__auto___13122){
return (function (args){
return cljs.core.deref.call(null,g__9477__auto___13122);
});})(g__9477__auto___13122))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__9477__auto___13122){
return (function (seq13050){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13050));
});})(g__9477__auto___13122))
;


var g__9477__auto___13126 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__9477__auto___13126){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13127 = arguments.length;
var i__8194__auto___13128 = (0);
while(true){
if((i__8194__auto___13128 < len__8193__auto___13127)){
args__8200__auto__.push((arguments[i__8194__auto___13128]));

var G__13129 = (i__8194__auto___13128 + (1));
i__8194__auto___13128 = G__13129;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9477__auto___13126))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9477__auto___13126){
return (function (args){
return cljs.core.deref.call(null,g__9477__auto___13126);
});})(g__9477__auto___13126))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__9477__auto___13126){
return (function (seq13051){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13051));
});})(g__9477__auto___13126))
;


var g__9477__auto___13130 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__9477__auto___13130){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13131 = arguments.length;
var i__8194__auto___13132 = (0);
while(true){
if((i__8194__auto___13132 < len__8193__auto___13131)){
args__8200__auto__.push((arguments[i__8194__auto___13132]));

var G__13133 = (i__8194__auto___13132 + (1));
i__8194__auto___13132 = G__13133;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9477__auto___13130))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9477__auto___13130){
return (function (args){
return cljs.core.deref.call(null,g__9477__auto___13130);
});})(g__9477__auto___13130))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__9477__auto___13130){
return (function (seq13052){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13052));
});})(g__9477__auto___13130))
;


var g__9477__auto___13134 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__9477__auto___13134){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13135 = arguments.length;
var i__8194__auto___13136 = (0);
while(true){
if((i__8194__auto___13136 < len__8193__auto___13135)){
args__8200__auto__.push((arguments[i__8194__auto___13136]));

var G__13137 = (i__8194__auto___13136 + (1));
i__8194__auto___13136 = G__13137;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});})(g__9477__auto___13134))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__9477__auto___13134){
return (function (args){
return cljs.core.deref.call(null,g__9477__auto___13134);
});})(g__9477__auto___13134))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__9477__auto___13134){
return (function (seq13053){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13053));
});})(g__9477__auto___13134))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__8200__auto__ = [];
var len__8193__auto___13140 = arguments.length;
var i__8194__auto___13141 = (0);
while(true){
if((i__8194__auto___13141 < len__8193__auto___13140)){
args__8200__auto__.push((arguments[i__8194__auto___13141]));

var G__13142 = (i__8194__auto___13141 + (1));
i__8194__auto___13141 = G__13142;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__13138_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__13138_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq13139){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13139));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__13143_SHARP_){
return (new Date(p1__13143_SHARP_));
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

//# sourceMappingURL=gen.js.map