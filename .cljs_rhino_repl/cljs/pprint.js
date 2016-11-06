// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__8200__auto__ = [];
var len__8193__auto___10456 = arguments.length;
var i__8194__auto___10457 = (0);
while(true){
if((i__8194__auto___10457 < len__8193__auto___10456)){
args__8200__auto__.push((arguments[i__8194__auto___10457]));

var G__10458 = (i__8194__auto___10457 + (1));
i__8194__auto___10457 = G__10458;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

cljs.pprint.print.cljs$lang$applyTo = (function (seq10455){
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10455));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__8200__auto__ = [];
var len__8193__auto___10460 = arguments.length;
var i__8194__auto___10461 = (0);
while(true){
if((i__8194__auto___10461 < len__8193__auto___10460)){
args__8200__auto__.push((arguments[i__8194__auto___10461]));

var G__10462 = (i__8194__auto___10461 + (1));
i__8194__auto___10461 = G__10462;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.print,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

cljs.pprint.println.cljs$lang$applyTo = (function (seq10459){
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10459));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,(function (){var pred__10466 = cljs.core._EQ_;
var expr__10467 = c;
if(cljs.core.truth_(pred__10466.call(null,"\b",expr__10467))){
return "\\backspace";
} else {
if(cljs.core.truth_(pred__10466.call(null,"\t",expr__10467))){
return "\\tab";
} else {
if(cljs.core.truth_(pred__10466.call(null,"\n",expr__10467))){
return "\\newline";
} else {
if(cljs.core.truth_(pred__10466.call(null,"\f",expr__10467))){
return "\\formfeed";
} else {
if(cljs.core.truth_(pred__10466.call(null,"\r",expr__10467))){
return "\\return";
} else {
if(cljs.core.truth_(pred__10466.call(null,"\"",expr__10467))){
return "\\\"";
} else {
if(cljs.core.truth_(pred__10466.call(null,"\\",expr__10467))){
return "\\\\";
} else {
return [cljs.core.str("\\"),cljs.core.str(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__8200__auto__ = [];
var len__8193__auto___10470 = arguments.length;
var i__8194__auto___10471 = (0);
while(true){
if((i__8194__auto___10471 < len__8193__auto___10470)){
args__8200__auto__.push((arguments[i__8194__auto___10471]));

var G__10472 = (i__8194__auto___10471 + (1));
i__8194__auto___10471 = G__10472;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

cljs.pprint.pr.cljs$lang$applyTo = (function (seq10469){
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10469));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__8200__auto__ = [];
var len__8193__auto___10474 = arguments.length;
var i__8194__auto___10475 = (0);
while(true){
if((i__8194__auto___10475 < len__8193__auto___10474)){
args__8200__auto__.push((arguments[i__8194__auto___10475]));

var G__10476 = (i__8194__auto___10475 + (1));
i__8194__auto___10475 = G__10476;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((0) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__8201__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.pr,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

cljs.pprint.prn.cljs$lang$applyTo = (function (seq10473){
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10473));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return (typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10)))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if((typeof c === 'string') && ((c.length === (1)))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first.call(null,lis__$1);
var remainder = cljs.core.next.call(null,lis__$1);
var vec__10480 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.call(null,vec__10480,(0),null);
var new_context = cljs.core.nth.call(null,vec__10480,(1),null);
var G__10483 = new_context;
var G__10484 = remainder;
var G__10485 = cljs.core.conj.call(null,acc,result);
context = G__10483;
lis__$1 = G__10484;
acc = G__10485;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__10489 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__10489,(0),null);
var new_context = cljs.core.nth.call(null,vec__10489,(1),null);
if(cljs.core.not.call(null,result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__10492 = new_context;
var G__10493 = cljs.core.conj.call(null,acc,result);
context = G__10492;
acc = G__10493;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__10497 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__10497,(0),null);
var continue$ = cljs.core.nth.call(null,vec__10497,(1),null);
var new_context = cljs.core.nth.call(null,vec__10497,(2),null);
if(cljs.core.not.call(null,continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__10500 = new_context;
var G__10501 = cljs.core.conj.call(null,acc,result);
context = G__10500;
acc = G__10501;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7868__auto__ = (function cljs$pprint$unzip_map_$_iter__10558(s__10559){
return (new cljs.core.LazySeq(null,(function (){
var s__10559__$1 = s__10559;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10559__$1);
if(temp__4657__auto__){
var s__10559__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10559__$2)){
var c__7866__auto__ = cljs.core.chunk_first.call(null,s__10559__$2);
var size__7867__auto__ = cljs.core.count.call(null,c__7866__auto__);
var b__10561 = cljs.core.chunk_buffer.call(null,size__7867__auto__);
if((function (){var i__10560 = (0);
while(true){
if((i__10560 < size__7867__auto__)){
var vec__10574 = cljs.core._nth.call(null,c__7866__auto__,i__10560);
var k = cljs.core.nth.call(null,vec__10574,(0),null);
var vec__10577 = cljs.core.nth.call(null,vec__10574,(1),null);
var v1 = cljs.core.nth.call(null,vec__10577,(0),null);
var v2 = cljs.core.nth.call(null,vec__10577,(1),null);
cljs.core.chunk_append.call(null,b__10561,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__10614 = (i__10560 + (1));
i__10560 = G__10614;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10561),cljs$pprint$unzip_map_$_iter__10558.call(null,cljs.core.chunk_rest.call(null,s__10559__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10561),null);
}
} else {
var vec__10580 = cljs.core.first.call(null,s__10559__$2);
var k = cljs.core.nth.call(null,vec__10580,(0),null);
var vec__10583 = cljs.core.nth.call(null,vec__10580,(1),null);
var v1 = cljs.core.nth.call(null,vec__10583,(0),null);
var v2 = cljs.core.nth.call(null,vec__10583,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__10558.call(null,cljs.core.rest.call(null,s__10559__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7868__auto__.call(null,m);
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7868__auto__ = (function cljs$pprint$unzip_map_$_iter__10586(s__10587){
return (new cljs.core.LazySeq(null,(function (){
var s__10587__$1 = s__10587;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10587__$1);
if(temp__4657__auto__){
var s__10587__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10587__$2)){
var c__7866__auto__ = cljs.core.chunk_first.call(null,s__10587__$2);
var size__7867__auto__ = cljs.core.count.call(null,c__7866__auto__);
var b__10589 = cljs.core.chunk_buffer.call(null,size__7867__auto__);
if((function (){var i__10588 = (0);
while(true){
if((i__10588 < size__7867__auto__)){
var vec__10602 = cljs.core._nth.call(null,c__7866__auto__,i__10588);
var k = cljs.core.nth.call(null,vec__10602,(0),null);
var vec__10605 = cljs.core.nth.call(null,vec__10602,(1),null);
var v1 = cljs.core.nth.call(null,vec__10605,(0),null);
var v2 = cljs.core.nth.call(null,vec__10605,(1),null);
cljs.core.chunk_append.call(null,b__10589,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__10615 = (i__10588 + (1));
i__10588 = G__10615;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10589),cljs$pprint$unzip_map_$_iter__10586.call(null,cljs.core.chunk_rest.call(null,s__10587__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10589),null);
}
} else {
var vec__10608 = cljs.core.first.call(null,s__10587__$2);
var k = cljs.core.nth.call(null,vec__10608,(0),null);
var vec__10611 = cljs.core.nth.call(null,vec__10608,(1),null);
var v1 = cljs.core.nth.call(null,vec__10611,(0),null);
var v2 = cljs.core.nth.call(null,vec__10611,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__10586.call(null,cljs.core.rest.call(null,s__10587__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7868__auto__.call(null,m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__7868__auto__ = (function cljs$pprint$tuple_map_$_iter__10632(s__10633){
return (new cljs.core.LazySeq(null,(function (){
var s__10633__$1 = s__10633;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__10633__$1);
if(temp__4657__auto__){
var s__10633__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__10633__$2)){
var c__7866__auto__ = cljs.core.chunk_first.call(null,s__10633__$2);
var size__7867__auto__ = cljs.core.count.call(null,c__7866__auto__);
var b__10635 = cljs.core.chunk_buffer.call(null,size__7867__auto__);
if((function (){var i__10634 = (0);
while(true){
if((i__10634 < size__7867__auto__)){
var vec__10642 = cljs.core._nth.call(null,c__7866__auto__,i__10634);
var k = cljs.core.nth.call(null,vec__10642,(0),null);
var v = cljs.core.nth.call(null,vec__10642,(1),null);
cljs.core.chunk_append.call(null,b__10635,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__10648 = (i__10634 + (1));
i__10634 = G__10648;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10635),cljs$pprint$tuple_map_$_iter__10632.call(null,cljs.core.chunk_rest.call(null,s__10633__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__10635),null);
}
} else {
var vec__10645 = cljs.core.first.call(null,s__10633__$2);
var k = cljs.core.nth.call(null,vec__10645,(0),null);
var v = cljs.core.nth.call(null,vec__10645,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__10632.call(null,cljs.core.rest.call(null,s__10633__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7868__auto__.call(null,m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count.call(null,s);
if(((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1))),c))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c))){
return cljs.core.subs.call(null,s,(0),(n + (1)));
} else {
var G__10649 = (n - (1));
n = G__10649;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count.call(null,s);
if(((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(0)),c))){
var n = (0);
while(true){
if((cljs.core._EQ_.call(null,n,len)) || (!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c)))){
return cljs.core.subs.call(null,s,n);
} else {
var G__10650 = (n + (1));
n = G__10650;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_.call(null,val))?cljs.core.set.call(null,val):cljs.core.PersistentHashSet.fromArray([val], true));
var pos = (0);
while(true){
if((cljs.core._EQ_.call(null,pos,cljs.core.count.call(null,aseq))) || (cljs.core.not.call(null,test.call(null,cljs.core.nth.call(null,aseq,pos))))){
return pos;
} else {
var G__10651 = (pos + (1));
pos = G__10651;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null)))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__7748__auto__ = (((pp == null))?null:pp);
var m__7749__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__7748__auto__)]);
if(!((m__7749__auto__ == null))){
return m__7749__auto__.call(null,pp);
} else {
var m__7749__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__7749__auto____$1 == null))){
return m__7749__auto____$1.call(null,pp);
} else {
throw cljs.core.missing_protocol.call(null,"IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
return sym.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599));
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235));
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"max","max",61366548));
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"max","max",61366548),new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",185279322));
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.call(null,c,"\n")){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(0));

cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235)) + (1)));
} else {
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599)) + (1)));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",185279322)),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var args10653 = [];
var len__8193__auto___10662 = arguments.length;
var i__8194__auto___10663 = (0);
while(true){
if((i__8194__auto___10663 < len__8193__auto___10662)){
args10653.push((arguments[i__8194__auto___10663]));

var G__10664 = (i__8194__auto___10663 + (1));
i__8194__auto___10663 = G__10664;
continue;
} else {
}
break;
}

var G__10655 = args10653.length;
switch (G__10655) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10653.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.call(null,writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max","max",61366548),max_columns,new cljs.core.Keyword(null,"cur","cur",1153190599),(0),new cljs.core.Keyword(null,"line","line",212345235),(0),new cljs.core.Keyword(null,"base","base",185279322),writer], null));
if(typeof cljs.pprint.t_cljs$pprint10656 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint10656 = (function (writer,max_columns,fields,meta10657){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta10657 = meta10657;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint10656.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_10658,meta10657__$1){
var self__ = this;
var _10658__$1 = this;
return (new cljs.pprint.t_cljs$pprint10656(self__.writer,self__.max_columns,self__.fields,meta10657__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint10656.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_10658){
var self__ = this;
var _10658__$1 = this;
return self__.meta10657;
});})(fields))
;

cljs.pprint.t_cljs$pprint10656.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint10656.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint10656.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__10659 = cljs.core._EQ_;
var expr__10660 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__10659.call(null,String,expr__10660))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599)) + cljs.core.count.call(null,s)));
} else {
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),((cljs.core.count.call(null,s) - nl) - (1)));

cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235)) + cljs.core.count.call(null,cljs.core.filter.call(null,((function (s,nl,pred__10659,expr__10660,this$__$1,fields){
return (function (p1__10652_SHARP_){
return cljs.core._EQ_.call(null,p1__10652_SHARP_,"\n");
});})(s,nl,pred__10659,expr__10660,this$__$1,fields))
,s))));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"base","base",185279322)),s);
} else {
if(cljs.core.truth_(pred__10659.call(null,Number,expr__10660))){
return cljs.pprint.c_write_char.call(null,this$__$1,x);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10660)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint10656.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta10657","meta10657",1951926364,null)], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint10656.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint10656.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint10656";

cljs.pprint.t_cljs$pprint10656.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__7691__auto__,writer__7692__auto__,opt__7693__auto__){
return cljs.core._write.call(null,writer__7692__auto__,"cljs.pprint/t_cljs$pprint10656");
});})(fields))
;

cljs.pprint.__GT_t_cljs$pprint10656 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint10656(writer__$1,max_columns__$1,fields__$1,meta10657){
return (new cljs.pprint.t_cljs$pprint10656(writer__$1,max_columns__$1,fields__$1,meta10657));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint10656(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
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
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7707__auto__,k__7708__auto__){
var self__ = this;
var this__7707__auto____$1 = this;
return cljs.core._lookup.call(null,this__7707__auto____$1,k__7708__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7709__auto__,k10667,else__7710__auto__){
var self__ = this;
var this__7709__auto____$1 = this;
var G__10669 = (((k10667 instanceof cljs.core.Keyword))?k10667.fqn:null);
switch (G__10669) {
case "suffix":
return self__.suffix;

break;
case "indent":
return self__.indent;

break;
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "done-nl":
return self__.done_nl;

break;
case "start-col":
return self__.start_col;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10667,else__7710__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7721__auto__,writer__7722__auto__,opts__7723__auto__){
var self__ = this;
var this__7721__auto____$1 = this;
var pr_pair__7724__auto__ = ((function (this__7721__auto____$1){
return (function (keyval__7725__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7722__auto__,cljs.core.pr_writer,""," ","",opts__7723__auto__,keyval__7725__auto__);
});})(this__7721__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7722__auto__,pr_pair__7724__auto__,"#cljs.pprint.logical-block{",", ","}",opts__7723__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10666){
var self__ = this;
var G__10666__$1 = this;
return (new cljs.core.RecordIter((0),G__10666__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7705__auto__){
var self__ = this;
var this__7705__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7701__auto__){
var self__ = this;
var this__7701__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7711__auto__){
var self__ = this;
var this__7711__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7702__auto__){
var self__ = this;
var this__7702__auto____$1 = this;
var h__7520__auto__ = self__.__hash;
if(!((h__7520__auto__ == null))){
return h__7520__auto__;
} else {
var h__7520__auto____$1 = cljs.core.hash_imap.call(null,this__7702__auto____$1);
self__.__hash = h__7520__auto____$1;

return h__7520__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7703__auto__,other__7704__auto__){
var self__ = this;
var this__7703__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7073__auto__ = other__7704__auto__;
if(cljs.core.truth_(and__7073__auto__)){
var and__7073__auto____$1 = (this__7703__auto____$1.constructor === other__7704__auto__.constructor);
if(and__7073__auto____$1){
return cljs.core.equiv_map.call(null,this__7703__auto____$1,other__7704__auto__);
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7716__auto__,k__7717__auto__){
var self__ = this;
var this__7716__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"indent","indent",-148200125),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),null,new cljs.core.Keyword(null,"start-col","start-col",668080143),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),null], null), null),k__7717__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7716__auto____$1),self__.__meta),k__7717__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7717__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7714__auto__,k__7715__auto__,G__10666){
var self__ = this;
var this__7714__auto____$1 = this;
var pred__10670 = cljs.core.keyword_identical_QMARK_;
var expr__10671 = k__7715__auto__;
if(cljs.core.truth_(pred__10670.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__10671))){
return (new cljs.pprint.logical_block(G__10666,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10670.call(null,new cljs.core.Keyword(null,"section","section",-300141526),expr__10671))){
return (new cljs.pprint.logical_block(self__.parent,G__10666,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10670.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143),expr__10671))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__10666,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10670.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125),expr__10671))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__10666,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10670.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),expr__10671))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__10666,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10670.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),expr__10671))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__10666,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10670.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__10671))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__10666,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10670.call(null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),expr__10671))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__10666,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10670.call(null,new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__10671))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__10666,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10670.call(null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),expr__10671))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__10666,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7715__auto__,G__10666),null));
}
}
}
}
}
}
}
}
}
}
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7719__auto__){
var self__ = this;
var this__7719__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7706__auto__,G__10666){
var self__ = this;
var this__7706__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__10666,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7712__auto__,entry__7713__auto__){
var self__ = this;
var this__7712__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7713__auto__)){
return cljs.core._assoc.call(null,this__7712__auto____$1,cljs.core._nth.call(null,entry__7713__auto__,(0)),cljs.core._nth.call(null,entry__7713__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7712__auto____$1,entry__7713__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"start-col","start-col",-1986355626,null),new cljs.core.Symbol(null,"indent","indent",1492331402,null),new cljs.core.Symbol(null,"done-nl","done-nl",1259507187,null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",-845608894,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",-1807493956,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",-1041744575,null)], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__7741__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/logical-block");
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__7741__auto__,writer__7742__auto__){
return cljs.core._write.call(null,writer__7742__auto__,"cljs.pprint/logical-block");
});

cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__10668){
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__10668),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(G__10668),new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(G__10668),new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(G__10668),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(G__10668),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(G__10668),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__10668),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(G__10668),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__10668),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(G__10668),null,cljs.core.dissoc.call(null,G__10668,new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__10674 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__10674;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq.call(null,l);
if(l__$1){
return (new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,l__$1)) - new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
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
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7707__auto__,k__7708__auto__){
var self__ = this;
var this__7707__auto____$1 = this;
return cljs.core._lookup.call(null,this__7707__auto____$1,k__7708__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7709__auto__,k10676,else__7710__auto__){
var self__ = this;
var this__7709__auto____$1 = this;
var G__10678 = (((k10676 instanceof cljs.core.Keyword))?k10676.fqn:null);
switch (G__10678) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10676,else__7710__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7721__auto__,writer__7722__auto__,opts__7723__auto__){
var self__ = this;
var this__7721__auto____$1 = this;
var pr_pair__7724__auto__ = ((function (this__7721__auto____$1){
return (function (keyval__7725__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7722__auto__,cljs.core.pr_writer,""," ","",opts__7723__auto__,keyval__7725__auto__);
});})(this__7721__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7722__auto__,pr_pair__7724__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__7723__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10675){
var self__ = this;
var G__10675__$1 = this;
return (new cljs.core.RecordIter((0),G__10675__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7705__auto__){
var self__ = this;
var this__7705__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7701__auto__){
var self__ = this;
var this__7701__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7711__auto__){
var self__ = this;
var this__7711__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7702__auto__){
var self__ = this;
var this__7702__auto____$1 = this;
var h__7520__auto__ = self__.__hash;
if(!((h__7520__auto__ == null))){
return h__7520__auto__;
} else {
var h__7520__auto____$1 = cljs.core.hash_imap.call(null,this__7702__auto____$1);
self__.__hash = h__7520__auto____$1;

return h__7520__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7703__auto__,other__7704__auto__){
var self__ = this;
var this__7703__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7073__auto__ = other__7704__auto__;
if(cljs.core.truth_(and__7073__auto__)){
var and__7073__auto____$1 = (this__7703__auto____$1.constructor === other__7704__auto__.constructor);
if(and__7073__auto____$1){
return cljs.core.equiv_map.call(null,this__7703__auto____$1,other__7704__auto__);
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7716__auto__,k__7717__auto__){
var self__ = this;
var this__7716__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__7717__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7716__auto____$1),self__.__meta),k__7717__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7717__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7714__auto__,k__7715__auto__,G__10675){
var self__ = this;
var this__7714__auto____$1 = this;
var pred__10679 = cljs.core.keyword_identical_QMARK_;
var expr__10680 = k__7715__auto__;
if(cljs.core.truth_(pred__10679.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__10680))){
return (new cljs.pprint.buffer_blob(G__10675,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10679.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__10680))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__10675,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10679.call(null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),expr__10680))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__10675,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10679.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__10680))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__10675,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10679.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__10680))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__10675,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7715__auto__,G__10675),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7719__auto__){
var self__ = this;
var this__7719__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7706__auto__,G__10675){
var self__ = this;
var this__7706__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__10675,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7712__auto__,entry__7713__auto__){
var self__ = this;
var this__7712__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7713__auto__)){
return cljs.core._assoc.call(null,this__7712__auto____$1,cljs.core._nth.call(null,entry__7713__auto__,(0)),cljs.core._nth.call(null,entry__7713__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7712__auto____$1,entry__7713__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",-1158428773,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__7741__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/buffer-blob");
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__7741__auto__,writer__7742__auto__){
return cljs.core._write.call(null,writer__7742__auto__,"cljs.pprint/buffer-blob");
});

cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__10677){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__10677),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__10677),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(G__10677),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__10677),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__10677),null,cljs.core.dissoc.call(null,G__10677,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__8290__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__8290__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
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
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7707__auto__,k__7708__auto__){
var self__ = this;
var this__7707__auto____$1 = this;
return cljs.core._lookup.call(null,this__7707__auto____$1,k__7708__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7709__auto__,k10684,else__7710__auto__){
var self__ = this;
var this__7709__auto____$1 = this;
var G__10686 = (((k10684 instanceof cljs.core.Keyword))?k10684.fqn:null);
switch (G__10686) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10684,else__7710__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7721__auto__,writer__7722__auto__,opts__7723__auto__){
var self__ = this;
var this__7721__auto____$1 = this;
var pr_pair__7724__auto__ = ((function (this__7721__auto____$1){
return (function (keyval__7725__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7722__auto__,cljs.core.pr_writer,""," ","",opts__7723__auto__,keyval__7725__auto__);
});})(this__7721__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7722__auto__,pr_pair__7724__auto__,"#cljs.pprint.nl-t{",", ","}",opts__7723__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10683){
var self__ = this;
var G__10683__$1 = this;
return (new cljs.core.RecordIter((0),G__10683__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7705__auto__){
var self__ = this;
var this__7705__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7701__auto__){
var self__ = this;
var this__7701__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7711__auto__){
var self__ = this;
var this__7711__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7702__auto__){
var self__ = this;
var this__7702__auto____$1 = this;
var h__7520__auto__ = self__.__hash;
if(!((h__7520__auto__ == null))){
return h__7520__auto__;
} else {
var h__7520__auto____$1 = cljs.core.hash_imap.call(null,this__7702__auto____$1);
self__.__hash = h__7520__auto____$1;

return h__7520__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7703__auto__,other__7704__auto__){
var self__ = this;
var this__7703__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7073__auto__ = other__7704__auto__;
if(cljs.core.truth_(and__7073__auto__)){
var and__7073__auto____$1 = (this__7703__auto____$1.constructor === other__7704__auto__.constructor);
if(and__7073__auto____$1){
return cljs.core.equiv_map.call(null,this__7703__auto____$1,other__7704__auto__);
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7716__auto__,k__7717__auto__){
var self__ = this;
var this__7716__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__7717__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7716__auto____$1),self__.__meta),k__7717__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7717__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7714__auto__,k__7715__auto__,G__10683){
var self__ = this;
var this__7714__auto____$1 = this;
var pred__10687 = cljs.core.keyword_identical_QMARK_;
var expr__10688 = k__7715__auto__;
if(cljs.core.truth_(pred__10687.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__10688))){
return (new cljs.pprint.nl_t(G__10683,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10687.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__10688))){
return (new cljs.pprint.nl_t(self__.type_tag,G__10683,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10687.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__10688))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__10683,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10687.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__10688))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__10683,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10687.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__10688))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__10683,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7715__auto__,G__10683),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7719__auto__){
var self__ = this;
var this__7719__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7706__auto__,G__10683){
var self__ = this;
var this__7706__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__10683,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7712__auto__,entry__7713__auto__){
var self__ = this;
var this__7712__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7713__auto__)){
return cljs.core._assoc.call(null,this__7712__auto____$1,cljs.core._nth.call(null,entry__7713__auto__,(0)),cljs.core._nth.call(null,entry__7713__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7712__auto____$1,entry__7713__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__7741__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/nl-t");
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__7741__auto__,writer__7742__auto__){
return cljs.core._write.call(null,writer__7742__auto__,"cljs.pprint/nl-t");
});

cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__10685){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__10685),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__10685),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__10685),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__10685),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__10685),null,cljs.core.dissoc.call(null,G__10685,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__8290__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__8290__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
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
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7707__auto__,k__7708__auto__){
var self__ = this;
var this__7707__auto____$1 = this;
return cljs.core._lookup.call(null,this__7707__auto____$1,k__7708__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7709__auto__,k10692,else__7710__auto__){
var self__ = this;
var this__7709__auto____$1 = this;
var G__10694 = (((k10692 instanceof cljs.core.Keyword))?k10692.fqn:null);
switch (G__10694) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10692,else__7710__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7721__auto__,writer__7722__auto__,opts__7723__auto__){
var self__ = this;
var this__7721__auto____$1 = this;
var pr_pair__7724__auto__ = ((function (this__7721__auto____$1){
return (function (keyval__7725__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7722__auto__,cljs.core.pr_writer,""," ","",opts__7723__auto__,keyval__7725__auto__);
});})(this__7721__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7722__auto__,pr_pair__7724__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__7723__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10691){
var self__ = this;
var G__10691__$1 = this;
return (new cljs.core.RecordIter((0),G__10691__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7705__auto__){
var self__ = this;
var this__7705__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7701__auto__){
var self__ = this;
var this__7701__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7711__auto__){
var self__ = this;
var this__7711__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7702__auto__){
var self__ = this;
var this__7702__auto____$1 = this;
var h__7520__auto__ = self__.__hash;
if(!((h__7520__auto__ == null))){
return h__7520__auto__;
} else {
var h__7520__auto____$1 = cljs.core.hash_imap.call(null,this__7702__auto____$1);
self__.__hash = h__7520__auto____$1;

return h__7520__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7703__auto__,other__7704__auto__){
var self__ = this;
var this__7703__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7073__auto__ = other__7704__auto__;
if(cljs.core.truth_(and__7073__auto__)){
var and__7073__auto____$1 = (this__7703__auto____$1.constructor === other__7704__auto__.constructor);
if(and__7073__auto____$1){
return cljs.core.equiv_map.call(null,this__7703__auto____$1,other__7704__auto__);
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7716__auto__,k__7717__auto__){
var self__ = this;
var this__7716__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__7717__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7716__auto____$1),self__.__meta),k__7717__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7717__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7714__auto__,k__7715__auto__,G__10691){
var self__ = this;
var this__7714__auto____$1 = this;
var pred__10695 = cljs.core.keyword_identical_QMARK_;
var expr__10696 = k__7715__auto__;
if(cljs.core.truth_(pred__10695.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__10696))){
return (new cljs.pprint.start_block_t(G__10691,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10695.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__10696))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__10691,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10695.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__10696))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__10691,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10695.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__10696))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__10691,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7715__auto__,G__10691),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7719__auto__){
var self__ = this;
var this__7719__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7706__auto__,G__10691){
var self__ = this;
var this__7706__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__10691,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7712__auto__,entry__7713__auto__){
var self__ = this;
var this__7712__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7713__auto__)){
return cljs.core._assoc.call(null,this__7712__auto____$1,cljs.core._nth.call(null,entry__7713__auto__,(0)),cljs.core._nth.call(null,entry__7713__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7712__auto____$1,entry__7713__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__7741__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/start-block-t");
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__7741__auto__,writer__7742__auto__){
return cljs.core._write.call(null,writer__7742__auto__,"cljs.pprint/start-block-t");
});

cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__10693){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__10693),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__10693),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__10693),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__10693),null,cljs.core.dissoc.call(null,G__10693,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__8290__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__8290__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
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
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7707__auto__,k__7708__auto__){
var self__ = this;
var this__7707__auto____$1 = this;
return cljs.core._lookup.call(null,this__7707__auto____$1,k__7708__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7709__auto__,k10700,else__7710__auto__){
var self__ = this;
var this__7709__auto____$1 = this;
var G__10702 = (((k10700 instanceof cljs.core.Keyword))?k10700.fqn:null);
switch (G__10702) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10700,else__7710__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7721__auto__,writer__7722__auto__,opts__7723__auto__){
var self__ = this;
var this__7721__auto____$1 = this;
var pr_pair__7724__auto__ = ((function (this__7721__auto____$1){
return (function (keyval__7725__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7722__auto__,cljs.core.pr_writer,""," ","",opts__7723__auto__,keyval__7725__auto__);
});})(this__7721__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7722__auto__,pr_pair__7724__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__7723__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10699){
var self__ = this;
var G__10699__$1 = this;
return (new cljs.core.RecordIter((0),G__10699__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7705__auto__){
var self__ = this;
var this__7705__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7701__auto__){
var self__ = this;
var this__7701__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7711__auto__){
var self__ = this;
var this__7711__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7702__auto__){
var self__ = this;
var this__7702__auto____$1 = this;
var h__7520__auto__ = self__.__hash;
if(!((h__7520__auto__ == null))){
return h__7520__auto__;
} else {
var h__7520__auto____$1 = cljs.core.hash_imap.call(null,this__7702__auto____$1);
self__.__hash = h__7520__auto____$1;

return h__7520__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7703__auto__,other__7704__auto__){
var self__ = this;
var this__7703__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7073__auto__ = other__7704__auto__;
if(cljs.core.truth_(and__7073__auto__)){
var and__7073__auto____$1 = (this__7703__auto____$1.constructor === other__7704__auto__.constructor);
if(and__7073__auto____$1){
return cljs.core.equiv_map.call(null,this__7703__auto____$1,other__7704__auto__);
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7716__auto__,k__7717__auto__){
var self__ = this;
var this__7716__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__7717__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7716__auto____$1),self__.__meta),k__7717__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7717__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7714__auto__,k__7715__auto__,G__10699){
var self__ = this;
var this__7714__auto____$1 = this;
var pred__10703 = cljs.core.keyword_identical_QMARK_;
var expr__10704 = k__7715__auto__;
if(cljs.core.truth_(pred__10703.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__10704))){
return (new cljs.pprint.end_block_t(G__10699,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10703.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__10704))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__10699,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10703.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__10704))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__10699,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10703.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__10704))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__10699,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7715__auto__,G__10699),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7719__auto__){
var self__ = this;
var this__7719__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7706__auto__,G__10699){
var self__ = this;
var this__7706__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__10699,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7712__auto__,entry__7713__auto__){
var self__ = this;
var this__7712__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7713__auto__)){
return cljs.core._assoc.call(null,this__7712__auto____$1,cljs.core._nth.call(null,entry__7713__auto__,(0)),cljs.core._nth.call(null,entry__7713__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7712__auto____$1,entry__7713__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__7741__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/end-block-t");
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__7741__auto__,writer__7742__auto__){
return cljs.core._write.call(null,writer__7742__auto__,"cljs.pprint/end-block-t");
});

cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__10701){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__10701),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__10701),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__10701),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__10701),null,cljs.core.dissoc.call(null,G__10701,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__8290__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__8290__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
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
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7707__auto__,k__7708__auto__){
var self__ = this;
var this__7707__auto____$1 = this;
return cljs.core._lookup.call(null,this__7707__auto____$1,k__7708__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7709__auto__,k10708,else__7710__auto__){
var self__ = this;
var this__7709__auto____$1 = this;
var G__10710 = (((k10708 instanceof cljs.core.Keyword))?k10708.fqn:null);
switch (G__10710) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10708,else__7710__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7721__auto__,writer__7722__auto__,opts__7723__auto__){
var self__ = this;
var this__7721__auto____$1 = this;
var pr_pair__7724__auto__ = ((function (this__7721__auto____$1){
return (function (keyval__7725__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7722__auto__,cljs.core.pr_writer,""," ","",opts__7723__auto__,keyval__7725__auto__);
});})(this__7721__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7722__auto__,pr_pair__7724__auto__,"#cljs.pprint.indent-t{",", ","}",opts__7723__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10707){
var self__ = this;
var G__10707__$1 = this;
return (new cljs.core.RecordIter((0),G__10707__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7705__auto__){
var self__ = this;
var this__7705__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7701__auto__){
var self__ = this;
var this__7701__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7711__auto__){
var self__ = this;
var this__7711__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7702__auto__){
var self__ = this;
var this__7702__auto____$1 = this;
var h__7520__auto__ = self__.__hash;
if(!((h__7520__auto__ == null))){
return h__7520__auto__;
} else {
var h__7520__auto____$1 = cljs.core.hash_imap.call(null,this__7702__auto____$1);
self__.__hash = h__7520__auto____$1;

return h__7520__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7703__auto__,other__7704__auto__){
var self__ = this;
var this__7703__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7073__auto__ = other__7704__auto__;
if(cljs.core.truth_(and__7073__auto__)){
var and__7073__auto____$1 = (this__7703__auto____$1.constructor === other__7704__auto__.constructor);
if(and__7073__auto____$1){
return cljs.core.equiv_map.call(null,this__7703__auto____$1,other__7704__auto__);
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7716__auto__,k__7717__auto__){
var self__ = this;
var this__7716__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__7717__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7716__auto____$1),self__.__meta),k__7717__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7717__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7714__auto__,k__7715__auto__,G__10707){
var self__ = this;
var this__7714__auto____$1 = this;
var pred__10711 = cljs.core.keyword_identical_QMARK_;
var expr__10712 = k__7715__auto__;
if(cljs.core.truth_(pred__10711.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__10712))){
return (new cljs.pprint.indent_t(G__10707,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10711.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__10712))){
return (new cljs.pprint.indent_t(self__.type_tag,G__10707,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10711.call(null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),expr__10712))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__10707,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10711.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__10712))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__10707,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10711.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__10712))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__10707,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10711.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__10712))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__10707,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7715__auto__,G__10707),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7719__auto__){
var self__ = this;
var this__7719__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7706__auto__,G__10707){
var self__ = this;
var this__7706__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__10707,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7712__auto__,entry__7713__auto__){
var self__ = this;
var this__7712__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7713__auto__)){
return cljs.core._assoc.call(null,this__7712__auto____$1,cljs.core._nth.call(null,entry__7713__auto__,(0)),cljs.core._nth.call(null,entry__7713__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7712__auto____$1,entry__7713__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"relative-to","relative-to",1170431476,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__7741__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/indent-t");
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__7741__auto__,writer__7742__auto__){
return cljs.core._write.call(null,writer__7742__auto__,"cljs.pprint/indent-t");
});

cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__10709){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__10709),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__10709),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(G__10709),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__10709),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__10709),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__10709),null,cljs.core.dissoc.call(null,G__10709,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"indent-t","indent-t",528318969),logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__8290__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__8290__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",528318969));
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if(typeof cljs.pprint.write_token !== 'undefined'){
} else {
cljs.pprint.write_token = (function (){var method_table__8013__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8014__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8015__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8017__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","write-token"),((function (method_table__8013__auto__,prefer_table__8014__auto__,method_cache__8015__auto__,cached_hierarchy__8016__auto__,hierarchy__8017__auto__){
return (function (p1__10716_SHARP_,p2__10715_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(p2__10715_SHARP_);
});})(method_table__8013__auto__,prefer_table__8014__auto__,method_cache__8015__auto__,cached_hierarchy__8016__auto__,hierarchy__8017__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8017__auto__,method_table__8013__auto__,prefer_table__8014__auto__,method_cache__8015__auto__,cached_hierarchy__8016__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),(function (this$,token){
var temp__4657__auto___10717 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4657__auto___10717)){
var cb_10718 = temp__4657__auto___10717;
cb_10718.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
} else {
}

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
var temp__4657__auto___10719 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__4657__auto___10719)){
var prefix_10720 = temp__4657__auto___10719;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix_10720);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),(function (this$,token){
var temp__4657__auto___10721 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4657__auto___10721)){
var cb_10722 = temp__4657__auto___10721;
cb_10722.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}

var temp__4657__auto__ = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__4657__auto__)){
var suffix = temp__4657__auto__;
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"indent-t","indent-t",528318969),(function (this$,token){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__10723 = cljs.core._EQ_;
var expr__10724 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(pred__10723.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__10724))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__10723.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__10724))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10724)].join('')));
}
}
})()));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),(function (this$,token){
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),(function (this$,token){
if(cljs.core.truth_((function (){var or__7085__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"mandatory","mandatory",542802336));
if(or__7085__auto__){
return or__7085__auto__;
} else {
var and__7073__auto__ = !(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"fill","fill",883462889)));
if(and__7073__auto__){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__7073__auto__;
}
}
})())){
cljs.pprint.emit_nl.call(null,this$,token);
} else {
var temp__4655__auto___10726 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4655__auto___10726)){
var tws_10727 = temp__4655__auto___10726;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_10727);
} else {
}
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__10732 = cljs.core.seq.call(null,tokens);
var chunk__10733 = null;
var count__10734 = (0);
var i__10735 = (0);
while(true){
if((i__10735 < count__10734)){
var token = cljs.core._nth.call(null,chunk__10733,i__10735);
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114)))){
var temp__4655__auto___10736 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4655__auto___10736)){
var tws_10737 = temp__4655__auto___10736;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_10737);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_10738 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__7073__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__7073__auto__)){
return tws_10738;
} else {
return and__7073__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_10738);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}

var G__10739 = seq__10732;
var G__10740 = chunk__10733;
var G__10741 = count__10734;
var G__10742 = (i__10735 + (1));
seq__10732 = G__10739;
chunk__10733 = G__10740;
count__10734 = G__10741;
i__10735 = G__10742;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__10732);
if(temp__4657__auto__){
var seq__10732__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10732__$1)){
var c__7899__auto__ = cljs.core.chunk_first.call(null,seq__10732__$1);
var G__10743 = cljs.core.chunk_rest.call(null,seq__10732__$1);
var G__10744 = c__7899__auto__;
var G__10745 = cljs.core.count.call(null,c__7899__auto__);
var G__10746 = (0);
seq__10732 = G__10743;
chunk__10733 = G__10744;
count__10734 = G__10745;
i__10735 = G__10746;
continue;
} else {
var token = cljs.core.first.call(null,seq__10732__$1);
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114)))){
var temp__4655__auto___10747 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4655__auto___10747)){
var tws_10748 = temp__4655__auto___10747;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_10748);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_10749 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__7073__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__7073__auto__)){
return tws_10749;
} else {
return and__7073__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_10749);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}

var G__10750 = cljs.core.next.call(null,seq__10732__$1);
var G__10751 = null;
var G__10752 = (0);
var G__10753 = (0);
seq__10732 = G__10750;
chunk__10733 = G__10751;
count__10734 = G__10752;
i__10735 = G__10753;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
return ((maxcol == null)) || (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))) + cljs.pprint.buffer_length.call(null,tokens)) < maxcol));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__7085__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = cljs.pprint.get_miser_width.call(null,this$);
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
var and__7073__auto__ = miser_width;
if(cljs.core.truth_(and__7073__auto__)){
var and__7073__auto____$1 = maxcol;
if(cljs.core.truth_(and__7073__auto____$1)){
var and__7073__auto____$2 = (cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__7073__auto____$2){
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
} else {
return and__7073__auto____$2;
}
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
});
if(typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined'){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__8013__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8014__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8015__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8017__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","emit-nl?"),((function (method_table__8013__auto__,prefer_table__8014__auto__,method_cache__8015__auto__,cached_hierarchy__8016__auto__,hierarchy__8017__auto__){
return (function (t,_,___$1,___$2){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__8013__auto__,prefer_table__8014__auto__,method_cache__8015__auto__,cached_hierarchy__8016__auto__,hierarchy__8017__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8017__auto__,method_table__8013__auto__,prefer_table__8014__auto__,method_cache__8015__auto__,cached_hierarchy__8016__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"linear","linear",872268697),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"miser","miser",-556060186),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"fill","fill",883462889),(function (newl,this$,section,subsection){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
var or__7085__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
var or__7085__auto____$1 = cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,subsection));
if(or__7085__auto____$1){
return or__7085__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}
}
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"mandatory","mandatory",542802336),(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__10754_SHARP_){
return cljs.core.not.call(null,(function (){var and__7073__auto__ = cljs.pprint.nl_t_QMARK_.call(null,p1__10754_SHARP_);
if(cljs.core.truth_(and__7073__auto__)){
return cljs.pprint.ancestor_QMARK_.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__10754_SHARP_),lb);
} else {
return and__7073__auto__;
}
})());
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq.call(null,cljs.core.drop.call(null,(cljs.core.count.call(null,section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__10755_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__10755_SHARP_);
return cljs.core.not.call(null,(function (){var and__7073__auto__ = cljs.pprint.nl_t_QMARK_.call(null,p1__10755_SHARP_);
if(cljs.core.truth_(and__7073__auto__)){
var or__7085__auto__ = cljs.core._EQ_.call(null,nl_lb,lb);
if(or__7085__auto__){
return or__7085__auto__;
} else {
return cljs.pprint.ancestor_QMARK_.call(null,nl_lb,lb);
}
} else {
return and__7073__auto__;
}
})());
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__10756 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__10756;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var istr_10757 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(cljs.core.deref.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count.call(null,prefix))," "));
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),istr_10757);

return cljs.pprint.update_nl_state.call(null,lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq.call(null,cljs.core.take_while.call(null,(function (p1__10758_SHARP_){
return cljs.core.not.call(null,cljs.pprint.nl_t_QMARK_.call(null,p1__10758_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__10765 = cljs.pprint.split_at_newline.call(null,tokens);
var a = cljs.core.nth.call(null,vec__10765,(0),null);
var b = cljs.core.nth.call(null,vec__10765,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens.call(null,this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__10768 = cljs.pprint.get_section.call(null,b);
var section = cljs.core.nth.call(null,vec__10768,(0),null);
var remainder = cljs.core.nth.call(null,vec__10768,(1),null);
var newl = cljs.core.first.call(null,b);
var do_nl = cljs.pprint.emit_nl_QMARK_.call(null,newl,this$,section,cljs.pprint.get_sub_section.call(null,b));
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl.call(null,this$,newl);

return cljs.core.next.call(null,b);
})()
:b);
var long_section = cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = cljs.pprint.write_token_string.call(null,this$,section);
if(cljs.core._EQ_.call(null,rem2,section)){
cljs.pprint.write_tokens.call(null,this$,section,false);

return remainder;
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
while(true){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,buffer))){
var new_buffer = cljs.pprint.write_token_string.call(null,this$,buffer);
if(!((buffer === new_buffer))){
var G__10771 = new_buffer;
buffer = G__10771;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj.call(null,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),token));

if(cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))))){
return cljs.pprint.write_line.call(null,this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line.call(null,this$);

var temp__4655__auto__ = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4655__auto__)){
var buf = temp__4655__auto__;
cljs.pprint.write_tokens.call(null,this$,buf,true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__4657__auto__ = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4657__auto__)){
var tws = temp__4657__auto__;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.call(null,s,"\n",(-1));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,lines),(1))){
return s;
} else {
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))));
var l = cljs.core.first.call(null,lines);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))))){
var oldpos_10780 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_10781 = (oldpos_10780 + cljs.core.count.call(null,l));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_10781);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,l,null,oldpos_10780,newpos_10781));

cljs.pprint.write_buffered_output.call(null,this$);
} else {
cljs.pprint.write_white_space.call(null,this$);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l);
}

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),"\n");

var seq__10776_10782 = cljs.core.seq.call(null,cljs.core.next.call(null,cljs.core.butlast.call(null,lines)));
var chunk__10777_10783 = null;
var count__10778_10784 = (0);
var i__10779_10785 = (0);
while(true){
if((i__10779_10785 < count__10778_10784)){
var l_10786__$1 = cljs.core._nth.call(null,chunk__10777_10783,i__10779_10785);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_10786__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var G__10787 = seq__10776_10782;
var G__10788 = chunk__10777_10783;
var G__10789 = count__10778_10784;
var G__10790 = (i__10779_10785 + (1));
seq__10776_10782 = G__10787;
chunk__10777_10783 = G__10788;
count__10778_10784 = G__10789;
i__10779_10785 = G__10790;
continue;
} else {
var temp__4657__auto___10791 = cljs.core.seq.call(null,seq__10776_10782);
if(temp__4657__auto___10791){
var seq__10776_10792__$1 = temp__4657__auto___10791;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__10776_10792__$1)){
var c__7899__auto___10793 = cljs.core.chunk_first.call(null,seq__10776_10792__$1);
var G__10794 = cljs.core.chunk_rest.call(null,seq__10776_10792__$1);
var G__10795 = c__7899__auto___10793;
var G__10796 = cljs.core.count.call(null,c__7899__auto___10793);
var G__10797 = (0);
seq__10776_10782 = G__10794;
chunk__10777_10783 = G__10795;
count__10778_10784 = G__10796;
i__10779_10785 = G__10797;
continue;
} else {
var l_10798__$1 = cljs.core.first.call(null,seq__10776_10792__$1);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_10798__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var G__10799 = cljs.core.next.call(null,seq__10776_10792__$1);
var G__10800 = null;
var G__10801 = (0);
var G__10802 = (0);
seq__10776_10782 = G__10799;
chunk__10777_10783 = G__10800;
count__10778_10784 = G__10801;
i__10779_10785 = G__10802;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"writing","writing",-1486865108));

return cljs.core.last.call(null,lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),c);
} else {
if(cljs.core._EQ_.call(null,c,"\n")){
return cljs.pprint.write_initial_lines.call(null,this$,"\n");
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,cljs.core.char$.call(null,c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437),new cljs.core.Keyword(null,"buffer-block","buffer-block",-10937307),new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"buffer-level","buffer-level",928864731),new cljs.core.Keyword(null,"buffer","buffer",617295198)],[lb,miser_width,lb,true,null,new cljs.core.Keyword(null,"writing","writing",-1486865108),(0),null,cljs.pprint.column_writer.call(null,writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if(typeof cljs.pprint.t_cljs$pprint10809 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint10809 = (function (writer,max_columns,miser_width,lb,fields,meta10810){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta10810 = meta10810;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint10809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_10811,meta10810__$1){
var self__ = this;
var _10811__$1 = this;
return (new cljs.pprint.t_cljs$pprint10809(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta10810__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint10809.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_10811){
var self__ = this;
var _10811__$1 = this;
return self__.meta10810;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint10809.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint10809.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__10812 = cljs.core._EQ_;
var expr__10813 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__10812.call(null,String,expr__10813))){
var s0 = cljs.pprint.write_initial_lines.call(null,this$__$1,x);
var s = clojure.string.replace_first.call(null,s0,/\s+$/,"");
var white_space = cljs.core.subs.call(null,s0,cljs.core.count.call(null,s));
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
if(cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),s);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),white_space);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
var newpos = (oldpos + cljs.core.count.call(null,s0));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$__$1,cljs.pprint.make_buffer_blob.call(null,s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_(pred__10812.call(null,Number,expr__10813))){
return cljs.pprint.p_write_char.call(null,this$__$1,x);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10813)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint10809.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.pprint._ppflush.call(null,this$__$1);

return cljs.core._flush.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint10809.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint10809.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),new cljs.core.Keyword(null,"buffering","buffering",-876713613))){
cljs.pprint.write_tokens.call(null,this$__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space.call(null,this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint10809.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null),new cljs.core.Symbol(null,"lb","lb",950310490,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta10810","meta10810",447274590,null)], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint10809.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint10809.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint10809";

cljs.pprint.t_cljs$pprint10809.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__7691__auto__,writer__7692__auto__,opt__7693__auto__){
return cljs.core._write.call(null,writer__7692__auto__,"cljs.pprint/t_cljs$pprint10809");
});})(lb,fields))
;

cljs.pprint.__GT_t_cljs$pprint10809 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint10809(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta10810){
return (new cljs.pprint.t_cljs$pprint10809(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta10810));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint10809(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),lb);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

var temp__4657__auto___10815 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4657__auto___10815)){
var cb_10816 = temp__4657__auto___10815;
cb_10816.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count.call(null,prefix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_start_block_t.call(null,lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var suffix = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

if(cljs.core.truth_(suffix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
}

var temp__4657__auto___10817 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__4657__auto___10817)){
var cb_10818 = temp__4657__auto___10817;
cb_10818.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}
} else {
var oldpos_10819 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_10820 = (oldpos_10819 + (cljs.core.truth_(suffix)?cljs.core.count.call(null,suffix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_10820);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_end_block_t.call(null,lb,oldpos_10819,newpos_10820));
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"buffering","buffering",-876713613));

var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_nl_t.call(null,type,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__10824 = cljs.core._EQ_;
var expr__10825 = relative_to;
if(cljs.core.truth_(pred__10824.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__10825))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__10824.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__10825))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10825)].join('')));
}
}
})()));
} else {
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_indent_t.call(null,lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if(typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined'){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.write_option_table = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437),new cljs.core.Keyword(null,"right-margin","right-margin",-810413306),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.Keyword(null,"lines","lines",-700165781),new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956),new cljs.core.Keyword(null,"radix","radix",857016463),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"readably","readably",1129599760),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"length","length",588987862),new cljs.core.Keyword(null,"pretty","pretty",-1916372486),new cljs.core.Keyword(null,"base","base",185279322)],[new cljs.core.Var(function(){return cljs.pprint._STAR_print_miser_width_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-miser-width*","cljs.pprint/*print-miser-width*",1588913450,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-miser-width*","*print-miser-width*",1206624211,null),".cljs_rhino_repl/cljs/pprint.cljs",21,1,true,632,637,cljs.core.List.EMPTY,"The column at which to enter miser style. Depending on the dispatch table,\nmiser style add newlines in more places to try to keep lines short allowing for further\nlevels of nesting.",(cljs.core.truth_(cljs.pprint._STAR_print_miser_width_STAR_)?cljs.pprint._STAR_print_miser_width_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_right_margin_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-right-margin*","cljs.pprint/*print-right-margin*",-56183119,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-right-margin*","*print-right-margin*",-437272454,null),".cljs_rhino_repl/cljs/pprint.cljs",22,1,true,625,630,cljs.core.List.EMPTY,"Pretty printing will try to avoid anything going beyond this column.\nSet it to nil to have pprint let the line be arbitrarily long. This will ignore all\nnon-mandatory newlines.",(cljs.core.truth_(cljs.pprint._STAR_print_right_margin_STAR_)?cljs.pprint._STAR_print_right_margin_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_circle_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-circle*","cljs.pprint/*print-circle*",1606185849,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-circle*","*print-circle*",1148404994,null),".cljs_rhino_repl/cljs/pprint.cljs",15,1,true,646,649,cljs.core.List.EMPTY,"Mark circular structures (N.B. This is not yet used)",(cljs.core.truth_(cljs.pprint._STAR_print_circle_STAR_)?cljs.pprint._STAR_print_circle_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_lines_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-lines*","cljs.pprint/*print-lines*",534683484,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-lines*","*print-lines*",75920659,null),".cljs_rhino_repl/cljs/pprint.cljs",14,1,true,640,643,cljs.core.List.EMPTY,"Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)",(cljs.core.truth_(cljs.pprint._STAR_print_lines_STAR_)?cljs.pprint._STAR_print_lines_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_suppress_namespaces_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-suppress-namespaces*","cljs.pprint/*print-suppress-namespaces*",1649488204,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-suppress-namespaces*","*print-suppress-namespaces*",1795828355,null),".cljs_rhino_repl/cljs/pprint.cljs",28,1,true,657,661,cljs.core.List.EMPTY,"Don't print namespaces with symbols. This is particularly useful when\npretty printing the results of macro expansions",(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)?cljs.pprint._STAR_print_suppress_namespaces_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_radix_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-radix*","cljs.pprint/*print-radix*",1558253641,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-radix*","*print-radix*",1168517744,null),".cljs_rhino_repl/cljs/pprint.cljs",14,1,true,665,670,cljs.core.List.EMPTY,"Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,\nor 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the\nradix specifier is in the form #XXr where XX is the decimal value of *print-base* ",(cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?cljs.pprint._STAR_print_radix_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_print_level_STAR_;},new cljs.core.Symbol("cljs.core","*print-level*","cljs.core/*print-level*",65848482,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"*print-level*","*print-level*",-634488505,null),"cljs/core.cljs",(16),(1),true,(121),(132),cljs.core.List.EMPTY,"*print-level* controls how many levels deep the printer will\n  print nested objects. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  level to print. Each argument to print is at level 0; if an argument is a\n  collection, its items are at level 1; and so on. If an object is a\n  collection and is at a level greater than or equal to the value bound to\n  *print-level*, the printer prints '#' to represent it. The root binding\n  is nil indicating no limit.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@type {null|number}"], null),(cljs.core.truth_(cljs.core._STAR_print_level_STAR_)?cljs.core._STAR_print_level_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_print_readably_STAR_;},new cljs.core.Symbol("cljs.core","*print-readably*","cljs.core/*print-readably*",-354670250,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"*print-readably*","*print-readably*",-761361221,null),"cljs/core.cljs",(19),(1),true,(85),(91),cljs.core.List.EMPTY,"When set to logical false, strings and characters will be printed with\n  non-alphanumeric characters converted to the appropriate escape sequences.\n\n  Defaults to true",(cljs.core.truth_(cljs.core._STAR_print_readably_STAR_)?cljs.core._STAR_print_readably_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_pprint_dispatch_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-pprint-dispatch*","cljs.pprint/*print-pprint-dispatch*",-1820734013,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-pprint-dispatch*","*print-pprint-dispatch*",-1709114492,null),".cljs_rhino_repl/cljs/pprint.cljs",25,1,true,619,623,cljs.core.List.EMPTY,"The pretty print dispatch function. Use with-pprint-dispatch or\nset-pprint-dispatch to modify.",(cljs.core.truth_(cljs.pprint._STAR_print_pprint_dispatch_STAR_)?cljs.pprint._STAR_print_pprint_dispatch_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.core._STAR_print_length_STAR_;},new cljs.core.Symbol("cljs.core","*print-length*","cljs.core/*print-length*",-20766927,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"jsdoc","jsdoc",1745183516),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"*print-length*","*print-length*",-687693654,null),"cljs/core.cljs",(17),(1),true,(109),(119),cljs.core.List.EMPTY,"*print-length* controls how many items of each collection the\n  printer will print. If it is bound to logical false, there is no\n  limit. Otherwise, it must be bound to an integer indicating the maximum\n  number of items of each collection to print. If a collection contains\n  more items, the printer will print items up to the limit followed by\n  '...' to represent the remaining items. The root binding is nil\n  indicating no limit.",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@type {null|number}"], null),(cljs.core.truth_(cljs.core._STAR_print_length_STAR_)?cljs.core._STAR_print_length_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_pretty_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-pretty*","cljs.pprint/*print-pretty*",-762636861,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-pretty*","*print-pretty*",726795140,null),".cljs_rhino_repl/cljs/pprint.cljs",16,1,true,615,617,cljs.core.List.EMPTY,"Bind to true if you want write to use pretty printing",(cljs.core.truth_(cljs.pprint._STAR_print_pretty_STAR_)?cljs.pprint._STAR_print_pretty_STAR_.cljs$lang$test:null)])),new cljs.core.Var(function(){return cljs.pprint._STAR_print_base_STAR_;},new cljs.core.Symbol("cljs.pprint","*print-base*","cljs.pprint/*print-base*",1887526790,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"added","added",2057651688),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],["1.2",new cljs.core.Symbol(null,"cljs.pprint","cljs.pprint",-966900911,null),new cljs.core.Symbol(null,"*print-base*","*print-base*",2037937791,null),".cljs_rhino_repl/cljs/pprint.cljs",13,1,true,672,675,cljs.core.List.EMPTY,"The base to use for printing integers and rationals.",(cljs.core.truth_(cljs.pprint._STAR_print_base_STAR_)?cljs.pprint._STAR_print_base_STAR_.cljs$lang$test:null)]))]);
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p1__10827_SHARP_){
var temp__4657__auto__ = cljs.core.get.call(null,t,cljs.core.key.call(null,p1__10827_SHARP_));
if(cljs.core.truth_(temp__4657__auto__)){
var v = temp__4657__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val.call(null,p1__10827_SHARP_)], null);
} else {
return null;
}
}),m));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__7073__auto__ = ((!((x == null)))?((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$)))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x));
if(and__7073__auto__){
return new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,x)));
} else {
return and__7073__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer.call(null,base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__7073__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__7073__auto__)){
var and__7073__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__7073__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
})();
if(cljs.core.not.call(null,cljs.pprint._STAR_print_pretty_STAR_)){
cljs.pprint.pr.call(null,object);
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object);
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__8200__auto__ = [];
var len__8193__auto___10848 = arguments.length;
var i__8194__auto___10849 = (0);
while(true){
if((i__8194__auto___10849 < len__8193__auto___10848)){
args__8200__auto__.push((arguments[i__8194__auto___10849]));

var G__10850 = (i__8194__auto___10849 + (1));
i__8194__auto___10849 = G__10850;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((1) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__8201__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream","stream",1534941648),true], null),cljs.core.apply.call(null,cljs.core.hash_map,kw_args));
var _STAR_print_base_STAR_10834 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_10835 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_10836 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_10837 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_10838 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_10839 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_10840 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_10841 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_10842 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_10843 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_10844 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_10845 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = new cljs.core.Keyword(null,"circle","circle",1903212362).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = new cljs.core.Keyword(null,"radix","radix",857016463).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = new cljs.core.Keyword(null,"right-margin","right-margin",-810413306).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"stream","stream",1534941648)))?new cljs.core.Keyword(null,"stream","stream",1534941648).cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = (((optval === true) || ((optval == null)))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.core.truth_(cljs.pprint._STAR_print_pretty_STAR_)){
var base_writer__8273__auto___10851 = base_writer;
var new_writer__8274__auto___10852 = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__8273__auto___10851));
var _STAR_out_STAR_10846_10853 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__8274__auto___10852)?cljs.pprint.make_pretty_writer.call(null,base_writer__8273__auto___10851,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__8273__auto___10851);

try{cljs.pprint.write_out.call(null,object);

cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_10846_10853;
}} else {
var _STAR_out_STAR_10847_10854 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{cljs.pprint.pr.call(null,object);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_10847_10854;
}}

if(optval === true){
cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str(sb)].join(''));
} else {
}

if((optval == null)){
return [cljs.core.str(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_10845;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_10844;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_10843;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_10842;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_10841;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_10840;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_10839;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_10838;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_10837;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_10836;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_10835;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_10834;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

cljs.pprint.write.cljs$lang$applyTo = (function (seq10832){
var G__10833 = cljs.core.first.call(null,seq10832);
var seq10832__$1 = cljs.core.next.call(null,seq10832);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic(G__10833,seq10832__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var args10855 = [];
var len__8193__auto___10861 = arguments.length;
var i__8194__auto___10862 = (0);
while(true){
if((i__8194__auto___10862 < len__8193__auto___10861)){
args10855.push((arguments[i__8194__auto___10862]));

var G__10863 = (i__8194__auto___10862 + (1));
i__8194__auto___10862 = G__10863;
continue;
} else {
}
break;
}

var G__10857 = args10855.length;
switch (G__10857) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args10855.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_10858 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.call(null,object,cljs.core._STAR_out_STAR_);

return cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str(sb)].join(''));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_10858;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__8273__auto__ = writer;
var new_writer__8274__auto__ = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__8273__auto__));
var _STAR_out_STAR_10859 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__8274__auto__)?cljs.pprint.make_pretty_writer.call(null,base_writer__8273__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__8273__auto__);

try{var _STAR_print_pretty_STAR_10860_10865 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out.call(null,object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_10860_10865;
}
if(!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,cljs.core._STAR_out_STAR_)))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_10859;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not.call(null,choices.call(null,arg))){
throw (new Error([cljs.core.str("Bad argument: "),cljs.core.str(arg),cljs.core.str(". It must be one of "),cljs.core.str(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__7073__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__7073__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__7073__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mandatory","mandatory",542802336),null,new cljs.core.Keyword(null,"miser","miser",-556060186),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"linear","linear",872268697),null], null), null));

return cljs.pprint.nl.call(null,cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg.call(null,relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),null,new cljs.core.Keyword(null,"current","current",-1088038603),null], null), null));

return cljs.pprint.indent.call(null,cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"line-relative","line-relative",1149548219),null,new cljs.core.Keyword(null,"section-relative","section-relative",-658298724),null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__8200__auto__ = [];
var len__8193__auto___10869 = arguments.length;
var i__8194__auto___10870 = (0);
while(true){
if((i__8194__auto___10870 < len__8193__auto___10869)){
args__8200__auto__.push((arguments[i__8194__auto___10870]));

var G__10871 = (i__8194__auto___10870 + (1));
i__8194__auto___10870 = G__10871;
continue;
} else {
}
break;
}

var argseq__8201__auto__ = ((((2) < args__8200__auto__.length))?(new cljs.core.IndexedSeq(args__8200__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__8201__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?cljs.pprint.compile_format.call(null,format_in):format_in);
var navigator = cljs.pprint.init_navigator.call(null,args);
return cljs.pprint.execute_format.call(null,writer,compiled_format,navigator);
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq10866){
var G__10867 = cljs.core.first.call(null,seq10866);
var seq10866__$1 = cljs.core.next.call(null,seq10866);
var G__10868 = cljs.core.first.call(null,seq10866__$1);
var seq10866__$2 = cljs.core.next.call(null,seq10866__$1);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic(G__10867,G__10868,seq10866__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str(message),cljs.core.str("\n"),cljs.core.str(cljs.pprint._STAR_format_str_STAR_),cljs.core.str("\n"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,offset," "))),cljs.core.str("^"),cljs.core.str("\n")].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
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
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7707__auto__,k__7708__auto__){
var self__ = this;
var this__7707__auto____$1 = this;
return cljs.core._lookup.call(null,this__7707__auto____$1,k__7708__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7709__auto__,k10873,else__7710__auto__){
var self__ = this;
var this__7709__auto____$1 = this;
var G__10875 = (((k10873 instanceof cljs.core.Keyword))?k10873.fqn:null);
switch (G__10875) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10873,else__7710__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7721__auto__,writer__7722__auto__,opts__7723__auto__){
var self__ = this;
var this__7721__auto____$1 = this;
var pr_pair__7724__auto__ = ((function (this__7721__auto____$1){
return (function (keyval__7725__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7722__auto__,cljs.core.pr_writer,""," ","",opts__7723__auto__,keyval__7725__auto__);
});})(this__7721__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7722__auto__,pr_pair__7724__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__7723__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10872){
var self__ = this;
var G__10872__$1 = this;
return (new cljs.core.RecordIter((0),G__10872__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7705__auto__){
var self__ = this;
var this__7705__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7701__auto__){
var self__ = this;
var this__7701__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7711__auto__){
var self__ = this;
var this__7711__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7702__auto__){
var self__ = this;
var this__7702__auto____$1 = this;
var h__7520__auto__ = self__.__hash;
if(!((h__7520__auto__ == null))){
return h__7520__auto__;
} else {
var h__7520__auto____$1 = cljs.core.hash_imap.call(null,this__7702__auto____$1);
self__.__hash = h__7520__auto____$1;

return h__7520__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7703__auto__,other__7704__auto__){
var self__ = this;
var this__7703__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7073__auto__ = other__7704__auto__;
if(cljs.core.truth_(and__7073__auto__)){
var and__7073__auto____$1 = (this__7703__auto____$1.constructor === other__7704__auto__.constructor);
if(and__7073__auto____$1){
return cljs.core.equiv_map.call(null,this__7703__auto____$1,other__7704__auto__);
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7716__auto__,k__7717__auto__){
var self__ = this;
var this__7716__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"seq","seq",-1817803783),null,new cljs.core.Keyword(null,"rest","rest",-1241696419),null], null), null),k__7717__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7716__auto____$1),self__.__meta),k__7717__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7717__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7714__auto__,k__7715__auto__,G__10872){
var self__ = this;
var this__7714__auto____$1 = this;
var pred__10876 = cljs.core.keyword_identical_QMARK_;
var expr__10877 = k__7715__auto__;
if(cljs.core.truth_(pred__10876.call(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__10877))){
return (new cljs.pprint.arg_navigator(G__10872,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10876.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419),expr__10877))){
return (new cljs.pprint.arg_navigator(self__.seq,G__10872,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10876.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__10877))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__10872,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7715__auto__,G__10872),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7719__auto__){
var self__ = this;
var this__7719__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7706__auto__,G__10872){
var self__ = this;
var this__7706__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__10872,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7712__auto__,entry__7713__auto__){
var self__ = this;
var this__7712__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7713__auto__)){
return cljs.core._assoc.call(null,this__7712__auto____$1,cljs.core._nth.call(null,entry__7713__auto__,(0)),cljs.core._nth.call(null,entry__7713__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7712__auto____$1,entry__7713__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__7741__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/arg-navigator");
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__7741__auto__,writer__7742__auto__){
return cljs.core._write.call(null,writer__7742__auto__,"cljs.pprint/arg-navigator");
});

cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__10874){
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(G__10874),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(G__10874),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__10874),null,cljs.core.dissoc.call(null,G__10874,new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq.call(null,s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__10883 = cljs.pprint.next_arg.call(null,navigator);
var raw_format = cljs.core.nth.call(null,vec__10883,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__10883,(1),null);
var compiled_format = ((typeof raw_format === 'string')?cljs.pprint.compile_format.call(null,raw_format):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator))){
return cljs.pprint.relative_reposition.call(null,navigator,(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) - position));
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition.call(null,navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
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
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__7707__auto__,k__7708__auto__){
var self__ = this;
var this__7707__auto____$1 = this;
return cljs.core._lookup.call(null,this__7707__auto____$1,k__7708__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__7709__auto__,k10887,else__7710__auto__){
var self__ = this;
var this__7709__auto____$1 = this;
var G__10889 = (((k10887 instanceof cljs.core.Keyword))?k10887.fqn:null);
switch (G__10889) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k10887,else__7710__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__7721__auto__,writer__7722__auto__,opts__7723__auto__){
var self__ = this;
var this__7721__auto____$1 = this;
var pr_pair__7724__auto__ = ((function (this__7721__auto____$1){
return (function (keyval__7725__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__7722__auto__,cljs.core.pr_writer,""," ","",opts__7723__auto__,keyval__7725__auto__);
});})(this__7721__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__7722__auto__,pr_pair__7724__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__7723__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__10886){
var self__ = this;
var G__10886__$1 = this;
return (new cljs.core.RecordIter((0),G__10886__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__7705__auto__){
var self__ = this;
var this__7705__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__7701__auto__){
var self__ = this;
var this__7701__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__7711__auto__){
var self__ = this;
var this__7711__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__7702__auto__){
var self__ = this;
var this__7702__auto____$1 = this;
var h__7520__auto__ = self__.__hash;
if(!((h__7520__auto__ == null))){
return h__7520__auto__;
} else {
var h__7520__auto____$1 = cljs.core.hash_imap.call(null,this__7702__auto____$1);
self__.__hash = h__7520__auto____$1;

return h__7520__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__7703__auto__,other__7704__auto__){
var self__ = this;
var this__7703__auto____$1 = this;
if(cljs.core.truth_((function (){var and__7073__auto__ = other__7704__auto__;
if(cljs.core.truth_(and__7073__auto__)){
var and__7073__auto____$1 = (this__7703__auto____$1.constructor === other__7704__auto__.constructor);
if(and__7073__auto____$1){
return cljs.core.equiv_map.call(null,this__7703__auto____$1,other__7704__auto__);
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
})())){
return true;
} else {
return false;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__7716__auto__,k__7717__auto__){
var self__ = this;
var this__7716__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"func","func",-238706040),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"def","def",-1043430536),null], null), null),k__7717__auto__)){
return cljs.core.dissoc.call(null,cljs.core.with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__7716__auto____$1),self__.__meta),k__7717__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__7717__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__7714__auto__,k__7715__auto__,G__10886){
var self__ = this;
var this__7714__auto____$1 = this;
var pred__10890 = cljs.core.keyword_identical_QMARK_;
var expr__10891 = k__7715__auto__;
if(cljs.core.truth_(pred__10890.call(null,new cljs.core.Keyword(null,"func","func",-238706040),expr__10891))){
return (new cljs.pprint.compiled_directive(G__10886,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10890.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),expr__10891))){
return (new cljs.pprint.compiled_directive(self__.func,G__10886,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10890.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__10891))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__10886,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__10890.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__10891))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__10886,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__7715__auto__,G__10886),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__7719__auto__){
var self__ = this;
var this__7719__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__7706__auto__,G__10886){
var self__ = this;
var this__7706__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__10886,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__7712__auto__,entry__7713__auto__){
var self__ = this;
var this__7712__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__7713__auto__)){
return cljs.core._assoc.call(null,this__7712__auto____$1,cljs.core._nth.call(null,entry__7713__auto__,(0)),cljs.core._nth.call(null,entry__7713__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__7712__auto____$1,entry__7713__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__7741__auto__){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,"cljs.pprint/compiled-directive");
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__7741__auto__,writer__7742__auto__){
return cljs.core._write.call(null,writer__7742__auto__,"cljs.pprint/compiled-directive");
});

cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__10888){
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(G__10888),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(G__10888),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__10888),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__10888),null,cljs.core.dissoc.call(null,G__10888,new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__10894,navigator){
var vec__10904 = p__10894;
var param = cljs.core.nth.call(null,vec__10904,(0),null);
var vec__10907 = cljs.core.nth.call(null,vec__10904,(1),null);
var raw_val = cljs.core.nth.call(null,vec__10907,(0),null);
var offset = cljs.core.nth.call(null,vec__10907,(1),null);
var vec__10910 = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196)))?cljs.pprint.next_arg.call(null,navigator):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.call(null,vec__10910,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__10910,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__10916 = cljs.pprint.map_passing_context.call(null,cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.call(null,vec__10916,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__10916,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_.call(null,n)){
if(cljs.core._EQ_.call(null,cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str(n),cljs.core.str((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__7085__auto__ = cljs.core.get.call(null,cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return [cljs.core.str("#"),cljs.core.str(cljs.pprint._STAR_print_base_STAR_),cljs.core.str("r")].join('');
}
})():null)),cljs.core.str(cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__10922 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__10922,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__10922,(1),null);
var base_output = (function (){var or__7085__auto__ = cljs.pprint.format_simple_number.call(null,arg);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return print_func.call(null,arg);
}
})();
var base_width = base_output.length;
var min_width = (base_width + new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot.call(null,((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params)) + (1)) * new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(width - base_width),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.call(null,[cljs.core.str(chars),cljs.core.str(base_output)].join(''));
} else {
cljs.pprint.print.call(null,[cljs.core.str(base_output),cljs.core.str(chars)].join(''));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_.call(null,x)){
return true;
} else {
if(cljs.pprint.float_QMARK_.call(null,x)){
return cljs.core._EQ_.call(null,x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (p1__10925_SHARP_){
if((p1__10925_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem.call(null,p1__10925_SHARP_,base),cljs.core.quot.call(null,p1__10925_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (xlated_val){
return (function (p1__10926_SHARP_){
if((p1__10926_SHARP_ < (10))){
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"0") + p1__10926_SHARP_));
} else {
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"a") + (p1__10926_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders.call(null,base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str.call(null,base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.reverse.call(null,cljs.core.take.call(null,unit,x))),cljs.core.seq.call(null,cljs.core.drop.call(null,unit,x))], null);
}),cljs.core.reverse.call(null,lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__10931 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__10931,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__10931,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_.call(null,arg))){
var neg_10934 = (arg < (0));
var pos_arg_10935 = ((neg_10934)?(- arg):arg);
var raw_str_10936 = cljs.pprint.opt_base_str.call(null,base,pos_arg_10935);
var group_str_10937 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.call(null,((function (neg_10934,pos_arg_10935,raw_str_10936,vec__10931,arg,arg_navigator__$1){
return (function (p1__10927_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__10927_SHARP_);
});})(neg_10934,pos_arg_10935,raw_str_10936,vec__10931,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_.call(null,new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083).cljs$core$IFn$_invoke$arity$1(params),raw_str_10936));
var commas = cljs.core.repeat.call(null,cljs.core.count.call(null,groups),new cljs.core.Keyword(null,"commachar","commachar",652859327).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.next.call(null,cljs.core.interleave.call(null,commas,groups)));
})():raw_str_10936);
var signed_str_10938 = ((neg_10934)?[cljs.core.str("-"),cljs.core.str(group_str_10937)].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?[cljs.core.str("+"),cljs.core.str(group_str_10937)].join(''):group_str_10937
));
var padded_str_10939 = (((signed_str_10938.length < new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - signed_str_10938.length),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str(signed_str_10938)].join(''):signed_str_10938);
cljs.pprint.print.call(null,padded_str_10939);
} else {
cljs.pprint.format_ascii.call(null,cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"colinc","colinc",-584873385),(1),new cljs.core.Keyword(null,"minpad","minpad",323570901),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [cljs.core.str((((hundreds > (0)))?[cljs.core.str(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds)),cljs.core.str(" hundred")].join(''):null)),cljs.core.str(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
return [cljs.core.str((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count.call(null,parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first.call(null,parts);
var remainder = cljs.core.next.call(null,parts);
while(true){
if((remainder == null)){
return [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",acc))),cljs.core.str((((!(cljs.core.empty_QMARK_.call(null,this$))) && (!(cljs.core.empty_QMARK_.call(null,acc))))?", ":null)),cljs.core.str(this$),cljs.core.str((((!(cljs.core.empty_QMARK_.call(null,this$))) && (((pos + offset) > (0))))?[cljs.core.str(" "),cljs.core.str(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__10940 = ((cljs.core.empty_QMARK_.call(null,this$))?acc:cljs.core.conj.call(null,acc,[cljs.core.str(this$),cljs.core.str(" "),cljs.core.str(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__10941 = (pos - (1));
var G__10942 = cljs.core.first.call(null,remainder);
var G__10943 = cljs.core.next.call(null,remainder);
acc = G__10940;
pos = G__10941;
this$ = G__10942;
remainder = G__10943;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__10947 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__10947,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__10947,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zero");
} else {
var abs_arg_10950 = (((arg < (0)))?(- arg):arg);
var parts_10951 = cljs.pprint.remainders.call(null,(1000),abs_arg_10950);
if((cljs.core.count.call(null,parts_10951) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_10952 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,parts_10951);
var full_str_10953 = cljs.pprint.add_english_scales.call(null,parts_strs_10952,(0));
cljs.pprint.print.call(null,[cljs.core.str((((arg < (0)))?"minus ":null)),cljs.core.str(full_str_10953)].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [cljs.core.str((((hundreds > (0)))?[cljs.core.str(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds)),cljs.core.str(" hundred")].join(''):null)),cljs.core.str(((((hundreds > (0))) && ((tens > (0))))?" ":null)),cljs.core.str((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
if(((ten_digit > (0))) && (!((unit_digit > (0))))){
return cljs.core.nth.call(null,cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str(((((ten_digit > (0))) && ((unit_digit > (0))))?"-":null)),cljs.core.str((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__10957 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__10957,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__10957,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zeroth");
} else {
var abs_arg_10960 = (((arg < (0)))?(- arg):arg);
var parts_10961 = cljs.pprint.remainders.call(null,(1000),abs_arg_10960);
if((cljs.core.count.call(null,parts_10961) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_10962 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,cljs.core.drop_last.call(null,parts_10961));
var head_str_10963 = cljs.pprint.add_english_scales.call(null,parts_strs_10962,(1));
var tail_str_10964 = cljs.pprint.format_simple_ordinal.call(null,cljs.core.last.call(null,parts_10961));
cljs.pprint.print.call(null,[cljs.core.str((((arg < (0)))?"minus ":null)),cljs.core.str((((!(cljs.core.empty_QMARK_.call(null,head_str_10963))) && (!(cljs.core.empty_QMARK_.call(null,tail_str_10964))))?[cljs.core.str(head_str_10963),cljs.core.str(", "),cljs.core.str(tail_str_10964)].join(''):((!(cljs.core.empty_QMARK_.call(null,head_str_10963)))?[cljs.core.str(head_str_10963),cljs.core.str("th")].join(''):tail_str_10964
)))].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));

var low_two_digits_10965 = cljs.core.rem.call(null,arg,(100));
var not_teens_10966 = (((11) < low_two_digits_10965)) || (((19) > low_two_digits_10965));
var low_digit_10967 = cljs.core.rem.call(null,low_two_digits_10965,(10));
cljs.pprint.print.call(null,((((low_digit_10967 === (1))) && (not_teens_10966))?"st":((((low_digit_10967 === (2))) && (not_teens_10966))?"nd":((((low_digit_10967 === (3))) && (not_teens_10966))?"rd":"th"
))));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__10971 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__10971,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__10971,(1),null);
if((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000)))){
var digits_10974 = cljs.pprint.remainders.call(null,(10),arg);
var acc_10975 = cljs.core.PersistentVector.EMPTY;
var pos_10976 = (cljs.core.count.call(null,digits_10974) - (1));
var digits_10977__$1 = digits_10974;
while(true){
if(cljs.core.empty_QMARK_.call(null,digits_10977__$1)){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,acc_10975));
} else {
var digit_10978 = cljs.core.first.call(null,digits_10977__$1);
var G__10979 = ((cljs.core._EQ_.call(null,(0),digit_10978))?acc_10975:cljs.core.conj.call(null,acc_10975,cljs.core.nth.call(null,cljs.core.nth.call(null,table,pos_10976),(digit_10978 - (1)))));
var G__10980 = (pos_10976 - (1));
var G__10981 = cljs.core.next.call(null,digits_10977__$1);
acc_10975 = G__10979;
pos_10976 = G__10980;
digits_10977__$1 = G__10981;
continue;
}
break;
}
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__10985 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__10985,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__10985,(1),null);
var as_int = cljs.pprint.char_code.call(null,c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.call(null,cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.call(null,"Meta-");
} else {
}

cljs.pprint.print.call(null,(cljs.core.truth_(special)?special:(((base_char < (32)))?[cljs.core.str("Control-"),cljs.core.str(cljs.core.char$.call(null,(base_char + (64))))].join(''):((cljs.core._EQ_.call(null,base_char,(127)))?"Control-?":cljs.core.char$.call(null,base_char)
))));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__10994 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__10994,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__10994,(1),null);
var pred__10997_11000 = cljs.core._EQ_;
var expr__10998_11001 = new cljs.core.Keyword(null,"char-format","char-format",-1016499218).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(pred__10997_11000.call(null,"o",expr__10998_11001))){
cljs.pprint.cl_format.call(null,true,"\\o~3, '0o",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__10997_11000.call(null,"u",expr__10998_11001))){
cljs.pprint.cl_format.call(null,true,"\\u~4, '0x",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__10997_11000.call(null,null,expr__10998_11001))){
cljs.pprint.print_char.call(null,c);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__10998_11001)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__11005 = cljs.pprint.next_arg.call(null,navigator);
var char$ = cljs.core.nth.call(null,vec__11005,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__11005,(1),null);
cljs.pprint.print.call(null,char$);

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first.call(null,context);
return (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),token)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),token));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second.call(null,cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_.call(null,context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__11014 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__11014,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__11014,(1),null);
var vec__11017 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__11017,(0),null);
var offsets = cljs.core.nth.call(null,vec__11017,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case.call(null,[cljs.core.str(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str((cljs.core.count.call(null,s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.call(null,s,(0),dotloc)),cljs.core.str(cljs.core.subs.call(null,s,(dotloc + (1))))].join(''),[cljs.core.str((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,(0),exploc),cljs.core.subs.call(null,s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.call(null,s,(0),(1))),cljs.core.str(cljs.core.subs.call(null,s,(2),exploc))].join(''),cljs.core.subs.call(null,s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__11023 = cljs.pprint.float_parts_base.call(null,f);
var m = cljs.core.nth.call(null,vec__11023,(0),null);
var e = cljs.core.nth.call(null,vec__11023,(1),null);
var m1 = cljs.pprint.rtrim.call(null,m,"0");
var m2 = cljs.pprint.ltrim.call(null,m1,"0");
var delta = (cljs.core.count.call(null,m1) - cljs.core.count.call(null,m2));
var e__$1 = ((((cljs.core.count.call(null,e) > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,e,(0)),"+")))?cljs.core.subs.call(null,e,(1)):e);
if(cljs.core.empty_QMARK_.call(null,m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count.call(null,s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.call(null,cljs.core.str,"1",cljs.core.repeat.call(null,(len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.call(null,"9",s.charAt(i))){
var G__11026 = (i - (1));
i = G__11026;
continue;
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.subs.call(null,s,(0),i),cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,s.charAt(i)) + (1))),cljs.core.repeat.call(null,(len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__7085__auto__ = d;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count.call(null,m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__7416__auto__ = (2);
var y__7417__auto__ = w;
return ((x__7416__auto__ > y__7417__auto__) ? x__7416__auto__ : y__7417__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__7416__auto__ = (e + (1));
var y__7417__auto__ = (w__$1 - (1));
return ((x__7416__auto__ > y__7417__auto__) ? x__7416__auto__ : y__7417__auto__);
})():(w__$1 + e)
));
var vec__11030 = ((cljs.core._EQ_.call(null,round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str("0"),cljs.core.str(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.call(null,vec__11030,(0),null);
var e1 = cljs.core.nth.call(null,vec__11030,(1),null);
var round_pos__$1 = cljs.core.nth.call(null,vec__11030,(2),null);
var len__$1 = cljs.core.nth.call(null,vec__11030,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.call(null,m1,round_pos__$1);
var result = cljs.core.subs.call(null,m1,(0),round_pos__$1);
if((cljs.pprint.char_code.call(null,round_char) >= cljs.pprint.char_code.call(null,"5"))){
var round_up_result = cljs.pprint.inc_s.call(null,result);
var expanded = (cljs.core.count.call(null,round_up_result) > cljs.core.count.call(null,result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.call(null,round_up_result,(0),(cljs.core.count.call(null,round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__11036 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((- e) - (1)),"0"))),cljs.core.str(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.call(null,vec__11036,(0),null);
var e1 = cljs.core.nth.call(null,vec__11036,(1),null);
var len = cljs.core.count.call(null,m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str(m1),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [cljs.core.str("."),cljs.core.str(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str(cljs.core.subs.call(null,m,(0),loc)),cljs.core.str("."),cljs.core.str(cljs.core.subs.call(null,m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal.call(null,cljs.pprint.expand_fixed.call(null,m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [cljs.core.str("."),cljs.core.str(m)].join('');
} else {
return [cljs.core.str(cljs.core.subs.call(null,m,(0),k)),cljs.core.str("."),cljs.core.str(cljs.core.subs.call(null,m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var vec__11051 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__11051,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__11051,(1),null);
var vec__11054 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.call(null,vec__11054,(0),null);
var abs = cljs.core.nth.call(null,vec__11054,(1),null);
var abs__$1 = cljs.pprint.convert_ratio.call(null,abs);
var vec__11057 = cljs.pprint.float_parts.call(null,abs__$1);
var mantissa = cljs.core.nth.call(null,vec__11057,(0),null);
var exp = cljs.core.nth.call(null,vec__11057,(1),null);
var scaled_exp = (exp + new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__7085__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = (cljs.core.not.call(null,d)) && (((cljs.core.count.call(null,mantissa) - (1)) <= scaled_exp));
var vec__11060 = cljs.pprint.round_str.call(null,mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.call(null,vec__11060,(0),null);
var scaled_exp__$1 = cljs.core.nth.call(null,vec__11060,(1),null);
var expanded = cljs.core.nth.call(null,vec__11060,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__7073__auto__ = w;
if(cljs.core.truth_(and__7073__auto__)){
var and__7073__auto____$1 = d;
if(cljs.core.truth_(and__7073__auto____$1)){
return ((d >= (1))) && (cljs.core._EQ_.call(null,fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.call(null,fixed_repr.charAt((1)),".")) && ((cljs.core.count.call(null,fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0)))));
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
})())?cljs.core.subs.call(null,fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.call(null,cljs.core.first.call(null,fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_11063 = cljs.core.count.call(null,fixed_repr__$1);
var signed_len_11064 = (cljs.core.truth_(add_sign)?(len_11063 + (1)):len_11063);
var prepend_zero_11065__$1 = (prepend_zero) && (!((signed_len_11064 >= w)));
var append_zero_11066__$1 = (append_zero) && (!((signed_len_11064 >= w)));
var full_len_11067 = (((prepend_zero_11065__$1) || (append_zero_11066__$1))?(signed_len_11064 + (1)):signed_len_11064);
if(cljs.core.truth_((function (){var and__7073__auto__ = (full_len_11067 > w);
if(and__7073__auto__){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__7073__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len_11067),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str(((prepend_zero_11065__$1)?"0":null)),cljs.core.str(fixed_repr__$1),cljs.core.str(((append_zero_11066__$1)?"0":null))].join(''));
}
} else {
cljs.pprint.print.call(null,[cljs.core.str((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str(((prepend_zero)?"0":null)),cljs.core.str(fixed_repr__$1),cljs.core.str(((append_zero)?"0":null))].join(''));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__11084 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__11084,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__11084,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var G__11090_11100 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__11091_11101 = G__11090_11100;
var mantissa_11102 = cljs.core.nth.call(null,vec__11091_11101,(0),null);
var exp_11103 = cljs.core.nth.call(null,vec__11091_11101,(1),null);
var G__11090_11104__$1 = G__11090_11100;
while(true){
var vec__11094_11105 = G__11090_11104__$1;
var mantissa_11106__$1 = cljs.core.nth.call(null,vec__11094_11105,(0),null);
var exp_11107__$1 = cljs.core.nth.call(null,vec__11094_11105,(1),null);
var w_11108 = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d_11109 = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e_11110 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var k_11111 = new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params);
var expchar_11112 = (function (){var or__7085__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return "E";
}
})();
var add_sign_11113 = (function (){var or__7085__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_11114 = (k_11111 <= (0));
var scaled_exp_11115 = (exp_11107__$1 - (k_11111 - (1)));
var scaled_exp_str_11116 = [cljs.core.str(Math.abs(scaled_exp_11115))].join('');
var scaled_exp_str_11117__$1 = [cljs.core.str(expchar_11112),cljs.core.str((((scaled_exp_11115 < (0)))?"-":"+")),cljs.core.str((cljs.core.truth_(e_11110)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(e_11110 - cljs.core.count.call(null,scaled_exp_str_11116)),"0")):null)),cljs.core.str(scaled_exp_str_11116)].join('');
var exp_width_11118 = cljs.core.count.call(null,scaled_exp_str_11117__$1);
var base_mantissa_width_11119 = cljs.core.count.call(null,mantissa_11106__$1);
var scaled_mantissa_11120 = [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(- k_11111),"0"))),cljs.core.str(mantissa_11106__$1),cljs.core.str((cljs.core.truth_(d_11109)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((d_11109 - (base_mantissa_width_11119 - (1))) - (((k_11111 < (0)))?(- k_11111):(0))),"0")):null))].join('');
var w_mantissa_11121 = (cljs.core.truth_(w_11108)?(w_11108 - exp_width_11118):null);
var vec__11097_11122 = cljs.pprint.round_str.call(null,scaled_mantissa_11120,(0),((cljs.core._EQ_.call(null,k_11111,(0)))?(d_11109 - (1)):(((k_11111 > (0)))?d_11109:(((k_11111 < (0)))?(d_11109 - (1)):null))),(cljs.core.truth_(w_mantissa_11121)?(w_mantissa_11121 - (cljs.core.truth_(add_sign_11113)?(1):(0))):null));
var rounded_mantissa_11123 = cljs.core.nth.call(null,vec__11097_11122,(0),null);
var __11124 = cljs.core.nth.call(null,vec__11097_11122,(1),null);
var incr_exp_11125 = cljs.core.nth.call(null,vec__11097_11122,(2),null);
var full_mantissa_11126 = cljs.pprint.insert_scaled_decimal.call(null,rounded_mantissa_11123,k_11111);
var append_zero_11127 = (cljs.core._EQ_.call(null,k_11111,cljs.core.count.call(null,rounded_mantissa_11123))) && ((d_11109 == null));
if(cljs.core.not.call(null,incr_exp_11125)){
if(cljs.core.truth_(w_11108)){
var len_11128 = (cljs.core.count.call(null,full_mantissa_11126) + exp_width_11118);
var signed_len_11129 = (cljs.core.truth_(add_sign_11113)?(len_11128 + (1)):len_11128);
var prepend_zero_11130__$1 = (prepend_zero_11114) && (!(cljs.core._EQ_.call(null,signed_len_11129,w_11108)));
var full_len_11131 = ((prepend_zero_11130__$1)?(signed_len_11129 + (1)):signed_len_11129);
var append_zero_11132__$1 = (append_zero_11127) && ((full_len_11131 < w_11108));
if(cljs.core.truth_((function (){var and__7073__auto__ = (function (){var or__7085__auto__ = (full_len_11131 > w_11108);
if(or__7085__auto__){
return or__7085__auto__;
} else {
var and__7073__auto__ = e_11110;
if(cljs.core.truth_(and__7073__auto__)){
return ((exp_width_11118 - (2)) > e_11110);
} else {
return and__7073__auto__;
}
}
})();
if(cljs.core.truth_(and__7073__auto__)){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__7073__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w_11108,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((w_11108 - full_len_11131) - ((append_zero_11132__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str((cljs.core.truth_(add_sign_11113)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str(((prepend_zero_11130__$1)?"0":null)),cljs.core.str(full_mantissa_11126),cljs.core.str(((append_zero_11132__$1)?"0":null)),cljs.core.str(scaled_exp_str_11117__$1)].join(''));
}
} else {
cljs.pprint.print.call(null,[cljs.core.str((cljs.core.truth_(add_sign_11113)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str(((prepend_zero_11114)?"0":null)),cljs.core.str(full_mantissa_11126),cljs.core.str(((append_zero_11127)?"0":null)),cljs.core.str(scaled_exp_str_11117__$1)].join(''));
}
} else {
var G__11133 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_11123,(exp_11107__$1 + (1))], null);
G__11090_11104__$1 = G__11133;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__11140 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__11140,(0),null);
var _ = cljs.core.nth.call(null,vec__11140,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var vec__11143 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.call(null,vec__11143,(0),null);
var exp = cljs.core.nth.call(null,vec__11143,(1),null);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.call(null,arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__7416__auto__ = cljs.core.count.call(null,mantissa);
var y__7417__auto__ = (function (){var x__7423__auto__ = n;
var y__7424__auto__ = (7);
return ((x__7423__auto__ < y__7424__auto__) ? x__7423__auto__ : y__7424__auto__);
})();
return ((x__7416__auto__ > y__7417__auto__) ? x__7416__auto__ : y__7417__auto__);
})());
var dd = (d__$1 - n);
if((((0) <= dd)) && ((dd <= d__$1))){
var navigator__$1 = cljs.pprint.fixed_float.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"w","w",354169001),ww,new cljs.core.Keyword(null,"d","d",1972142424),dd,new cljs.core.Keyword(null,"k","k",-2146297393),(0),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,ee," ")));

return navigator__$1;
} else {
return cljs.pprint.exponential_float.call(null,params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__11155 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__11155,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__11155,(1),null);
var vec__11158 = cljs.pprint.float_parts.call(null,Math.abs(arg));
var mantissa = cljs.core.nth.call(null,vec__11158,(0),null);
var exp = cljs.core.nth.call(null,vec__11158,(1),null);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__7085__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return (arg < (0));
}
})();
var vec__11161 = cljs.pprint.round_str.call(null,mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.call(null,vec__11161,(0),null);
var scaled_exp = cljs.core.nth.call(null,vec__11161,(1),null);
var expanded = cljs.core.nth.call(null,vec__11161,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - fixed_repr.indexOf(".")),"0"))),cljs.core.str(fixed_repr)].join('');
var full_len = (cljs.core.count.call(null,full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.call(null,[cljs.core.str((cljs.core.truth_((function (){var and__7073__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__7073__auto__)){
return add_sign;
} else {
return and__7073__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str((cljs.core.truth_((function (){var and__7073__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params));
if(and__7073__auto__){
return add_sign;
} else {
return and__7073__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str(full_repr)].join(''));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(params);
var vec__11167 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg.call(null,arg_navigator));
var arg__$1 = cljs.core.nth.call(null,vec__11167,(0),null);
var navigator = cljs.core.nth.call(null,vec__11167,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = ((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count.call(null,clauses))))?cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.call(null,clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__11173 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__11173,(0),null);
var navigator = cljs.core.nth.call(null,vec__11173,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second.call(null,clauses):cljs.core.first.call(null,clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__11179 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__11179,(0),null);
var navigator = cljs.core.nth.call(null,vec__11179,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first.call(null,clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,arg_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__11188 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__11188,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__11188,(1),null);
var vec__11191 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__11191,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__11191,(1),null);
var args = cljs.pprint.init_navigator.call(null,arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1)))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__7085__auto__ = (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(args__$1))) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__7085__auto__){
return or__7085__auto__;
} else {
var and__7073__auto__ = max_count;
if(cljs.core.truth_(and__7073__auto__)){
return (count >= max_count);
} else {
return and__7073__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,args__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__11194 = (count + (1));
var G__11195 = iter_result;
var G__11196 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__11194;
args__$1 = G__11195;
last_pos = G__11196;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__11203 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__11203,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__11203,(1),null);
var vec__11206 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__11206,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__11206,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__7085__auto__ = (cljs.core.empty_QMARK_.call(null,arg_list__$1)) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__7085__auto__){
return or__7085__auto__;
} else {
var and__7073__auto__ = max_count;
if(cljs.core.truth_(and__7073__auto__)){
return (count >= max_count);
} else {
return and__7073__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,cljs.core.first.call(null,arg_list__$1)),cljs.pprint.init_navigator.call(null,cljs.core.next.call(null,arg_list__$1)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__11209 = (count + (1));
var G__11210 = cljs.core.next.call(null,arg_list__$1);
count = G__11209;
arg_list__$1 = G__11210;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__11214 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__11214,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__11214,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1)))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__7085__auto__ = (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__7085__auto__){
return or__7085__auto__;
} else {
var and__7073__auto__ = max_count;
if(cljs.core.truth_(and__7073__auto__)){
return (count >= max_count);
} else {
return and__7073__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return cljs.core.second.call(null,iter_result);
} else {
var G__11217 = (count + (1));
var G__11218 = iter_result;
var G__11219 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__11217;
navigator__$2 = G__11218;
last_pos = G__11219;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__11226 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__11226,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__11226,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__7085__auto__ = (cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && ((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))));
if(or__7085__auto__){
return or__7085__auto__;
} else {
var and__7073__auto__ = max_count;
if(cljs.core.truth_(and__7073__auto__)){
return (count >= max_count);
} else {
return and__7073__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__11229 = cljs.pprint.next_arg_or_nil.call(null,navigator__$2);
var sublist = cljs.core.nth.call(null,vec__11229,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__11229,(1),null);
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,sublist),navigator__$3);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$3;
} else {
var G__11232 = (count + (1));
var G__11233 = navigator__$3;
count = G__11232;
navigator__$2 = G__11233;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))){
return cljs.pprint.format_logical_block.call(null,params,navigator,offsets);
} else {
return cljs.pprint.justify_clauses.call(null,params,navigator,offsets);
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_.call(null,clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first.call(null,clauses__$1);
var vec__11238 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_11241 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format.call(null,clause,navigator__$1,base_navigator),[cljs.core.str(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_11241;
}})();
var iter_result = cljs.core.nth.call(null,vec__11238,(0),null);
var result_str = cljs.core.nth.call(null,vec__11238,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second.call(null,iter_result)], null);
} else {
var G__11242 = cljs.core.next.call(null,clauses__$1);
var G__11243 = cljs.core.conj.call(null,acc,result_str);
var G__11244 = iter_result;
clauses__$1 = G__11242;
acc = G__11243;
navigator__$1 = G__11244;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__11257 = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__4657__auto__)){
var else$ = temp__4657__auto__;
return cljs.pprint.render_clauses.call(null,else$,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__11260 = cljs.core.nth.call(null,vec__11257,(0),null);
var eol_str = cljs.core.nth.call(null,vec__11260,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__11257,(1),null);
var navigator__$1 = (function (){var or__7085__auto__ = new_navigator;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return navigator;
}
})();
var vec__11263 = (function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"else-params","else-params",-832171646).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__4657__auto__)){
var p = temp__4657__auto__;
return cljs.pprint.realize_parameter_list.call(null,p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.call(null,vec__11263,(0),null);
var new_navigator__$1 = cljs.core.nth.call(null,vec__11263,(1),null);
var navigator__$2 = (function (){var or__7085__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__7085__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__7085__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"max-columns","max-columns",1742323262).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return cljs.pprint.get_max_column.call(null,cljs.core._STAR_out_STAR_);
}
})();
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var vec__11266 = cljs.pprint.render_clauses.call(null,clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.call(null,vec__11266,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__11266,(1),null);
var slots = (function (){var x__7416__auto__ = (1);
var y__7417__auto__ = (((cljs.core.count.call(null,strs) - (1)) + (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__7416__auto__ > y__7417__auto__) ? x__7416__auto__ : y__7417__auto__);
})();
var chars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,strs));
var mincol = new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params);
var minpad = new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params);
var colinc = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot.call(null,((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__7416__auto__ = minpad;
var y__7417__auto__ = cljs.core.quot.call(null,total_pad,slots);
return ((x__7416__auto__ > y__7417__auto__) ? x__7416__auto__ : y__7417__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,pad,new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__7073__auto__ = eol_str;
if(cljs.core.truth_(and__7073__auto__)){
return (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__7073__auto__;
}
})())){
cljs.pprint.print.call(null,eol_str);
} else {
}

var slots_11269__$1 = slots;
var extra_pad_11270__$1 = extra_pad;
var strs_11271__$1 = strs;
var pad_only_11272 = (function (){var or__7085__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return (cljs.core._EQ_.call(null,cljs.core.count.call(null,strs_11271__$1),(1))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)));
}
})();
while(true){
if(cljs.core.seq.call(null,strs_11271__$1)){
cljs.pprint.print.call(null,[cljs.core.str(((cljs.core.not.call(null,pad_only_11272))?cljs.core.first.call(null,strs_11271__$1):null)),cljs.core.str((cljs.core.truth_((function (){var or__7085__auto__ = pad_only_11272;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
var or__7085__auto____$1 = cljs.core.next.call(null,strs_11271__$1);
if(or__7085__auto____$1){
return or__7085__auto____$1;
} else {
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str((((extra_pad_11270__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params):null))].join(''));

var G__11273 = (slots_11269__$1 - (1));
var G__11274 = (extra_pad_11270__$1 - (1));
var G__11275 = (cljs.core.truth_(pad_only_11272)?strs_11271__$1:cljs.core.next.call(null,strs_11271__$1));
var G__11276 = false;
slots_11269__$1 = G__11273;
extra_pad_11270__$1 = G__11274;
strs_11271__$1 = G__11275;
pad_only_11272 = G__11276;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint11283 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint11283 = (function (writer,meta11284){
this.writer = writer;
this.meta11284 = meta11284;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint11283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11285,meta11284__$1){
var self__ = this;
var _11285__$1 = this;
return (new cljs.pprint.t_cljs$pprint11283(self__.writer,meta11284__$1));
});

cljs.pprint.t_cljs$pprint11283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11285){
var self__ = this;
var _11285__$1 = this;
return self__.meta11284;
});

cljs.pprint.t_cljs$pprint11283.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint11283.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__11286 = cljs.core._EQ_;
var expr__11287 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__11286.call(null,String,expr__11287))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
} else {
if(cljs.core.truth_(pred__11286.call(null,Number,expr__11287))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11287)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint11283.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta11284","meta11284",-492803315,null)], null);
});

cljs.pprint.t_cljs$pprint11283.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint11283.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint11283";

cljs.pprint.t_cljs$pprint11283.cljs$lang$ctorPrWriter = (function (this__7691__auto__,writer__7692__auto__,opt__7693__auto__){
return cljs.core._write.call(null,writer__7692__auto__,"cljs.pprint/t_cljs$pprint11283");
});

cljs.pprint.__GT_t_cljs$pprint11283 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint11283(writer__$1,meta11284){
return (new cljs.pprint.t_cljs$pprint11283(writer__$1,meta11284));
});

}

return (new cljs.pprint.t_cljs$pprint11283(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if(typeof cljs.pprint.t_cljs$pprint11295 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint11295 = (function (writer,meta11296){
this.writer = writer;
this.meta11296 = meta11296;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint11295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11297,meta11296__$1){
var self__ = this;
var _11297__$1 = this;
return (new cljs.pprint.t_cljs$pprint11295(self__.writer,meta11296__$1));
});

cljs.pprint.t_cljs$pprint11295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11297){
var self__ = this;
var _11297__$1 = this;
return self__.meta11296;
});

cljs.pprint.t_cljs$pprint11295.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint11295.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__11298 = cljs.core._EQ_;
var expr__11299 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__11298.call(null,String,expr__11299))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,s));
} else {
if(cljs.core.truth_(pred__11298.call(null,Number,expr__11299))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11299)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint11295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta11296","meta11296",1791301671,null)], null);
});

cljs.pprint.t_cljs$pprint11295.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint11295.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint11295";

cljs.pprint.t_cljs$pprint11295.cljs$lang$ctorPrWriter = (function (this__7691__auto__,writer__7692__auto__,opt__7693__auto__){
return cljs.core._write.call(null,writer__7692__auto__,"cljs.pprint/t_cljs$pprint11295");
});

cljs.pprint.__GT_t_cljs$pprint11295 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint11295(writer__$1,meta11296){
return (new cljs.pprint.t_cljs$pprint11295(writer__$1,meta11296));
});

}

return (new cljs.pprint.t_cljs$pprint11295(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first.call(null,s);
var s__$1 = (cljs.core.truth_((function (){var and__7073__auto__ = first_QMARK_;
if(cljs.core.truth_(and__7073__auto__)){
var and__7073__auto____$1 = f;
if(cljs.core.truth_(and__7073__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
})())?[cljs.core.str(clojure.string.upper_case.call(null,f)),cljs.core.str(cljs.core.subs.call(null,s,(1)))].join(''):s);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_.call(null,s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__7073__auto__ = m;
if(cljs.core.truth_(and__7073__auto__)){
return (m.index + (1));
} else {
return and__7073__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(cljs.core.subs.call(null,s__$2,(0),offset)),cljs.core.str(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s__$2,offset)))].join(''),cljs.core.subs.call(null,s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.call(null,true);
if(typeof cljs.pprint.t_cljs$pprint11307 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint11307 = (function (writer,last_was_whitespace_QMARK_,meta11308){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta11308 = meta11308;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint11307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_11309,meta11308__$1){
var self__ = this;
var _11309__$1 = this;
return (new cljs.pprint.t_cljs$pprint11307(self__.writer,self__.last_was_whitespace_QMARK_,meta11308__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint11307.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_11309){
var self__ = this;
var _11309__$1 = this;
return self__.meta11308;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint11307.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint11307.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__11310 = cljs.core._EQ_;
var expr__11311 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__11310.call(null,String,expr__11311))){
var s = x;
cljs.core._write.call(null,self__.writer,cljs.pprint.capitalize_string.call(null,s.toLowerCase(),cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1)))));
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__11310.call(null,Number,expr__11311))){
var c = cljs.core.char$.call(null,x);
var mod_c = (cljs.core.truth_(cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_))?clojure.string.upper_case.call(null,c):c);
cljs.core._write.call(null,self__.writer,mod_c);

return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11311)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint11307.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",-1073928093,null),new cljs.core.Symbol(null,"meta11308","meta11308",-809632412,null)], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint11307.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint11307.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint11307";

cljs.pprint.t_cljs$pprint11307.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__7691__auto__,writer__7692__auto__,opt__7693__auto__){
return cljs.core._write.call(null,writer__7692__auto__,"cljs.pprint/t_cljs$pprint11307");
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.__GT_t_cljs$pprint11307 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint11307(writer__$1,last_was_whitespace_QMARK___$1,meta11308){
return (new cljs.pprint.t_cljs$pprint11307(writer__$1,last_was_whitespace_QMARK___$1,meta11308));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint11307(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.call(null,false);
if(typeof cljs.pprint.t_cljs$pprint11319 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint11319 = (function (writer,capped,meta11320){
this.writer = writer;
this.capped = capped;
this.meta11320 = meta11320;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.pprint.t_cljs$pprint11319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_11321,meta11320__$1){
var self__ = this;
var _11321__$1 = this;
return (new cljs.pprint.t_cljs$pprint11319(self__.writer,self__.capped,meta11320__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint11319.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_11321){
var self__ = this;
var _11321__$1 = this;
return self__.meta11320;
});})(capped))
;

cljs.pprint.t_cljs$pprint11319.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint11319.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__11322 = cljs.core._EQ_;
var expr__11323 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__11322.call(null,String,expr__11323))){
var s = clojure.string.lower_case.call(null,x);
if(cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__7073__auto__ = m;
if(cljs.core.truth_(and__7073__auto__)){
return m.index;
} else {
return and__7073__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write.call(null,self__.writer,[cljs.core.str(cljs.core.subs.call(null,s,(0),offset)),cljs.core.str(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s,offset))),cljs.core.str(clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_.call(null,self__.capped,true);
} else {
return cljs.core._write.call(null,self__.writer,s);
}
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
}
} else {
if(cljs.core.truth_(pred__11322.call(null,Number,expr__11323))){
var c = cljs.core.char$.call(null,x);
if(cljs.core.truth_((function (){var and__7073__auto__ = cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped));
if(and__7073__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__7073__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,self__.capped,true);

return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,c));
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,c));
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(expr__11323)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint11319.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"capped","capped",-1650988402,null),new cljs.core.Symbol(null,"meta11320","meta11320",-1464593293,null)], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint11319.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint11319.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint11319";

cljs.pprint.t_cljs$pprint11319.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__7691__auto__,writer__7692__auto__,opt__7693__auto__){
return cljs.core._write.call(null,writer__7692__auto__,"cljs.pprint/t_cljs$pprint11319");
});})(capped))
;

cljs.pprint.__GT_t_cljs$pprint11319 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint11319(writer__$1,capped__$1,meta11320){
return (new cljs.pprint.t_cljs$pprint11319(writer__$1,capped__$1,meta11320));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint11319(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_11326 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = make_writer.call(null,cljs.core._STAR_out_STAR_);

try{return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_11326;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_.call(null,writer))){
return writer;
} else {
return cljs.pprint.pretty_writer.call(null,writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$)))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_))))))){
return cljs.pprint.prn.call(null);
} else {
return null;
}
} else {
return cljs.pprint.prn.call(null);
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_11329 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_11330 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var current_11331 = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_))));
var space_count_11332 = (((current_11331 < colnum_11329))?(colnum_11329 - current_11331):((cljs.core._EQ_.call(null,colinc_11330,(0)))?(0):(colinc_11330 - cljs.core.rem.call(null,(current_11331 - colnum_11329),colinc_11330))
));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_11332," ")));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_11333 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_11334 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var start_col_11335 = (colrel_11333 + cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))));
var offset_11336 = (((colinc_11334 > (0)))?cljs.core.rem.call(null,start_col_11335,colinc_11334):(0));
var space_count_11337 = (colrel_11333 + ((cljs.core._EQ_.call(null,(0),offset_11336))?(0):(colinc_11334 - offset_11336)));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_11337," ")));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count.call(null,clauses);
var prefix = (((clause_count > (1)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.first.call(null,clauses)))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.call(null,clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,clauses,(2))))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__11343 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__11343,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__11343,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11346_11348 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11347_11349 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format.call(null,body,cljs.pprint.init_navigator.call(null,arg),new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11347_11349;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11346_11348;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"current","current",-1088038603):new cljs.core.Keyword(null,"block","block",664686210));
cljs.pprint.pprint_indent.call(null,relative_to,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"mandatory","mandatory",542802336):new cljs.core.Keyword(null,"fill","fill",883462889)):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"miser","miser",-556060186):new cljs.core.Keyword(null,"linear","linear",872268697)));
cljs.pprint.pprint_newline.call(null,kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"A",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__11350_SHARP_,p2__11351_SHARP_,p3__11352_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.print_str,p1__11350_SHARP_,p2__11351_SHARP_,p3__11352_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"S",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__11353_SHARP_,p2__11354_SHARP_,p3__11355_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.pr_str,p1__11353_SHARP_,p2__11354_SHARP_,p3__11355_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"D",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__11356_SHARP_,p2__11357_SHARP_,p3__11358_SHARP_){
return cljs.pprint.format_integer.call(null,(10),p1__11356_SHARP_,p2__11357_SHARP_,p3__11358_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"B",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__11359_SHARP_,p2__11360_SHARP_,p3__11361_SHARP_){
return cljs.pprint.format_integer.call(null,(2),p1__11359_SHARP_,p2__11360_SHARP_,p3__11361_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"O",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__11362_SHARP_,p2__11363_SHARP_,p3__11364_SHARP_){
return cljs.pprint.format_integer.call(null,(8),p1__11362_SHARP_,p2__11363_SHARP_,p3__11364_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"X",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__11365_SHARP_,p2__11366_SHARP_,p3__11367_SHARP_){
return cljs.pprint.format_integer.call(null,(16),p1__11365_SHARP_,p2__11366_SHARP_,p3__11367_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"R",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(cljs.core.first.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__11368_SHARP_,p2__11369_SHARP_,p3__11370_SHARP_){
return cljs.pprint.format_integer.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__11368_SHARP_),p1__11368_SHARP_,p2__11369_SHARP_,p3__11370_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__7073__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__7073__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__7073__auto__;
}
})())){
return (function (p1__11371_SHARP_,p2__11372_SHARP_,p3__11373_SHARP_){
return cljs.pprint.format_old_roman.call(null,p1__11371_SHARP_,p2__11372_SHARP_,p3__11373_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__11374_SHARP_,p2__11375_SHARP_,p3__11376_SHARP_){
return cljs.pprint.format_new_roman.call(null,p1__11374_SHARP_,p2__11375_SHARP_,p3__11376_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__11377_SHARP_,p2__11378_SHARP_,p3__11379_SHARP_){
return cljs.pprint.format_ordinal_english.call(null,p1__11377_SHARP_,p2__11378_SHARP_,p3__11379_SHARP_);
});
} else {
return (function (p1__11380_SHARP_,p2__11381_SHARP_,p3__11382_SHARP_){
return cljs.pprint.format_cardinal_english.call(null,p1__11380_SHARP_,p2__11381_SHARP_,p3__11382_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"P",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition.call(null,navigator,(-1)):navigator);
var strs = (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__11392 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg = cljs.core.nth.call(null,vec__11392,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__11392,(1),null);
cljs.pprint.print.call(null,((cljs.core._EQ_.call(null,arg,(1)))?cljs.core.first.call(null,strs):cljs.core.second.call(null,strs)));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"C",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"char-format","char-format",-1016499218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"F",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"E",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"G",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"$",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"%",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__8003__auto___11410 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_11411 = (0);
while(true){
if((i_11411 < n__8003__auto___11410)){
cljs.pprint.prn.call(null);

var G__11412 = (i_11411 + (1));
i_11411 = G__11412;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"&",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_11413 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_11413 > (0))){
cljs.pprint.fresh_line.call(null);
} else {
}

var n__8003__auto___11414 = (cnt_11413 - (1));
var i_11415 = (0);
while(true){
if((i_11415 < n__8003__auto___11414)){
cljs.pprint.prn.call(null);

var G__11416 = (i_11415 + (1));
i_11415 = G__11416;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"|",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__8003__auto___11417 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_11418 = (0);
while(true){
if((i_11418 < n__8003__auto___11417)){
cljs.pprint.print.call(null,"\f");

var G__11419 = (i_11418 + (1));
i_11418 = G__11419;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"~",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"~")));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"\n",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn.call(null);
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"T",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"colnum","colnum",2023796854),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__11383_SHARP_,p2__11384_SHARP_,p3__11385_SHARP_){
return cljs.pprint.relative_tabulation.call(null,p1__11383_SHARP_,p2__11384_SHARP_,p3__11385_SHARP_);
});
} else {
return (function (p1__11386_SHARP_,p2__11387_SHARP_,p3__11388_SHARP_){
return cljs.pprint.absolute_tabulation.call(null,p1__11386_SHARP_,p2__11387_SHARP_,p3__11388_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"*",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition.call(null,navigator,n);
} else {
return cljs.pprint.relative_reposition.call(null,navigator,(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"?",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__11395 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__11395,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__11395,(1),null);
return cljs.pprint.execute_sub_format.call(null,subformat,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__11398 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__11398,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__11398,(1),null);
var vec__11401 = cljs.pprint.next_arg.call(null,navigator__$1);
var subargs = cljs.core.nth.call(null,vec__11401,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__11401,(1),null);
var sub_navigator = cljs.pprint.init_navigator.call(null,subargs);
cljs.pprint.execute_sub_format.call(null,subformat,sub_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"(",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),")",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),null,new cljs.core.Keyword(null,"else","else",-1508377146),null], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__7073__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__7073__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__7073__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__11389_SHARP_,p2__11390_SHARP_,p3__11391_SHARP_){
return cljs.pprint.modify_case.call(null,mod_case_writer,p1__11389_SHARP_,p2__11390_SHARP_,p3__11391_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),")",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"[",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),"]",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"last","last",1105735132)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),";",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"max-columns","max-columns",1742323262),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator","separator",-1628749125),true], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"]",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"{",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),"}",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),false], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var and__7073__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__7073__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__7073__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"}",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"<",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),">",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"first","first",-644103046)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),">",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"^",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(3),[new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007):new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333));
if(cljs.core.truth_((function (){var and__7073__auto__ = arg1;
if(cljs.core.truth_(and__7073__auto__)){
var and__7073__auto____$1 = arg2;
if(cljs.core.truth_(and__7073__auto____$1)){
return arg3;
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
})())){
if(((arg1 <= arg2)) && ((arg2 <= arg3))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__7073__auto__ = arg1;
if(cljs.core.truth_(and__7073__auto__)){
return arg2;
} else {
return and__7073__auto__;
}
})())){
if(cljs.core._EQ_.call(null,arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.call(null,arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"W",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var or__7085__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"length","length",588987862),null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__11404 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__11404,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__11404,(1),null);
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__11407 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__11407,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__11407,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out.call(null,arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"_",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"I",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335),null,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196),null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__11420){
var vec__11424 = p__11420;
var s = cljs.core.nth.call(null,vec__11424,(0),null);
var offset = cljs.core.nth.call(null,vec__11424,(1),null);
var saw_comma = cljs.core.nth.call(null,vec__11424,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first.call(null,param);
var remainder = cljs.core.subs.call(null,s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.call(null,",",cljs.core.nth.call(null,remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error.call(null,"Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume.call(null,cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__11427){
var vec__11431 = p__11427;
var p = cljs.core.nth.call(null,vec__11431,(0),null);
var offset = cljs.core.nth.call(null,vec__11431,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,p.length,(0)))?null:(((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.call(null,p,(0)))))?new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196):(((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core._EQ_.call(null,"#",cljs.core.nth.call(null,p,(0)))))?new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335):(((cljs.core._EQ_.call(null,p.length,(2))) && (cljs.core._EQ_.call(null,"'",cljs.core.nth.call(null,p,(0)))))?cljs.core.nth.call(null,p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",new cljs.core.Keyword(null,"colon","colon",-965200945),"@",new cljs.core.Keyword(null,"at","at",1476951349)], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume.call(null,(function (p__11438){
var vec__11439 = p__11438;
var s__$1 = cljs.core.nth.call(null,vec__11439,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__11439,(1),null);
var flags = cljs.core.nth.call(null,vec__11439,(2),null);
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.call(null,cljs.pprint.flag_defs,cljs.core.first.call(null,s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_.call(null,flags,flag)){
return cljs.pprint.format_error.call(null,[cljs.core.str("Flag \""),cljs.core.str(cljs.core.first.call(null,s__$1)),cljs.core.str("\" appears more than once in a directive")].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.call(null,flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__7073__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__7073__auto__){
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__7073__auto__;
}
})())){
cljs.pprint.format_error.call(null,[cljs.core.str("\"@\" is an illegal flag for format directive \""),cljs.core.str(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\"")].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__7073__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__7073__auto__){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__7073__auto__;
}
})())){
cljs.pprint.format_error.call(null,[cljs.core.str("\":\" is an illegal flag for format directive \""),cljs.core.str(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\"")].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__7073__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"both","both",-393648840).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__7073__auto__){
var and__7073__auto____$1 = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__7073__auto____$1)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__7073__auto____$1;
}
} else {
return and__7073__auto__;
}
})())){
return cljs.pprint.format_error.call(null,[cljs.core.str("Cannot combine \"@\" and \":\" flags for format directive \""),cljs.core.str(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\"")].join(''),(function (){var x__7423__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__7424__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__7423__auto__ < y__7424__auto__) ? x__7423__auto__ : y__7424__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags.call(null,def,flags);

if((cljs.core.count.call(null,params) > cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error.call(null,cljs.pprint.cl_format.call(null,null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def),cljs.core.count.call(null,params),cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def))),cljs.core.second.call(null,cljs.core.first.call(null,params)));
} else {
}

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__11442_SHARP_,p2__11443_SHARP_){
var val = cljs.core.first.call(null,p1__11442_SHARP_);
if(!(((val == null)) || (cljs.core.contains_QMARK_.call(null,cljs.pprint.special_params,val)) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,cljs.core.second.call(null,p2__11443_SHARP_)),cljs.core.type.call(null,val))))){
return cljs.pprint.format_error.call(null,[cljs.core.str("Parameter "),cljs.core.str(cljs.core.name.call(null,cljs.core.first.call(null,p2__11443_SHARP_))),cljs.core.str(" has bad type in directive \""),cljs.core.str(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),cljs.core.str("\": "),cljs.core.str(cljs.core.type.call(null,val))].join(''),cljs.core.second.call(null,p1__11442_SHARP_));
} else {
return null;
}
}),params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,(function (){var iter__7868__auto__ = (function cljs$pprint$map_params_$_iter__11475(s__11476){
return (new cljs.core.LazySeq(null,(function (){
var s__11476__$1 = s__11476;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11476__$1);
if(temp__4657__auto__){
var s__11476__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11476__$2)){
var c__7866__auto__ = cljs.core.chunk_first.call(null,s__11476__$2);
var size__7867__auto__ = cljs.core.count.call(null,c__7866__auto__);
var b__11478 = cljs.core.chunk_buffer.call(null,size__7867__auto__);
if((function (){var i__11477 = (0);
while(true){
if((i__11477 < size__7867__auto__)){
var vec__11491 = cljs.core._nth.call(null,c__7866__auto__,i__11477);
var name = cljs.core.nth.call(null,vec__11491,(0),null);
var vec__11494 = cljs.core.nth.call(null,vec__11491,(1),null);
var default$ = cljs.core.nth.call(null,vec__11494,(0),null);
cljs.core.chunk_append.call(null,b__11478,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__11503 = (i__11477 + (1));
i__11477 = G__11503;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11478),cljs$pprint$map_params_$_iter__11475.call(null,cljs.core.chunk_rest.call(null,s__11476__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11478),null);
}
} else {
var vec__11497 = cljs.core.first.call(null,s__11476__$2);
var name = cljs.core.nth.call(null,vec__11497,(0),null);
var vec__11500 = cljs.core.nth.call(null,vec__11497,(1),null);
var default$ = cljs.core.nth.call(null,vec__11500,(0),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__11475.call(null,cljs.core.rest.call(null,s__11476__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7868__auto__.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.call(null,(function (p1__11444_SHARP_,p2__11445_SHARP_){
return cljs.core.apply.call(null,cljs.core.assoc,p1__11444_SHARP_,p2__11445_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__11446_SHARP_){
return cljs.core.first.call(null,cljs.core.nth.call(null,p1__11446_SHARP_,(1)));
}),cljs.core.zipmap.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)),params))),flags);
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__11516 = cljs.pprint.extract_params.call(null,s,offset);
var raw_params = cljs.core.nth.call(null,vec__11516,(0),null);
var vec__11519 = cljs.core.nth.call(null,vec__11516,(1),null);
var rest = cljs.core.nth.call(null,vec__11519,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__11519,(1),null);
var vec__11522 = cljs.pprint.extract_flags.call(null,rest,offset__$1);
var _ = cljs.core.nth.call(null,vec__11522,(0),null);
var vec__11525 = cljs.core.nth.call(null,vec__11522,(1),null);
var rest__$1 = cljs.core.nth.call(null,vec__11525,(0),null);
var offset__$2 = cljs.core.nth.call(null,vec__11525,(1),null);
var flags = cljs.core.nth.call(null,vec__11525,(2),null);
var directive = cljs.core.first.call(null,rest__$1);
var def = cljs.core.get.call(null,cljs.pprint.directive_table,clojure.string.upper_case.call(null,directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params.call(null,def,cljs.core.map.call(null,cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not.call(null,directive)){
cljs.pprint.format_error.call(null,"Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not.call(null,def)){
cljs.pprint.format_error.call(null,[cljs.core.str("Directive \""),cljs.core.str(directive),cljs.core.str("\" is undefined")].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656).cljs$core$IFn$_invoke$arity$1(def).call(null,params,offset__$2),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.call(null,rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = (cljs.core._EQ_.call(null,"\n",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params)));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count.call(null,remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.call(null,remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.call(null,s);

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__7073__auto__ = new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__7073__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__7073__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__11531 = cljs.pprint.collect_clauses.call(null,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.call(null,vec__11531,(0),null);
var remainder__$1 = cljs.core.nth.call(null,vec__11531,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map.call(null,subex,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$))),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume.call(null,(function (remainder__$1){
if(cljs.core.empty_QMARK_.call(null,remainder__$1)){
return cljs.pprint.format_error.call(null,"No closing bracket found.",offset);
} else {
var this$ = cljs.core.first.call(null,remainder__$1);
var remainder__$2 = cljs.core.next.call(null,remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket.call(null,this$))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket_info),new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",-1508377146),null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125),null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second.call(null,cljs.pprint.consume.call(null,(function (p__11544){
var vec__11545 = p__11544;
var clause_map = cljs.core.nth.call(null,vec__11545,(0),null);
var saw_else = cljs.core.nth.call(null,vec__11545,(1),null);
var remainder__$1 = cljs.core.nth.call(null,vec__11545,(2),null);
var vec__11548 = cljs.pprint.process_clause.call(null,bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.call(null,vec__11548,(0),null);
var vec__11551 = cljs.core.nth.call(null,vec__11548,(1),null);
var type = cljs.core.nth.call(null,vec__11551,(0),null);
var right_params = cljs.core.nth.call(null,vec__11551,(1),null);
var else_params = cljs.core.nth.call(null,vec__11551,(2),null);
var remainder__$2 = cljs.core.nth.call(null,vec__11551,(3),null);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,cljs.core.PersistentArrayMap.fromArray([(cljs.core.truth_(saw_else)?new cljs.core.Keyword(null,"else","else",-1508377146):new cljs.core.Keyword(null,"clauses","clauses",1454841241)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"right-params","right-params",-1790676237),right_params], true, false)),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"else","else",-1508377146))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error.call(null,"Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause_map)))){
return cljs.pprint.format_error.call(null,"The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"else-params","else-params",-832171646),else_params], null)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"separator","separator",-1628749125))){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error.call(null,"A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (remainder){
var this$ = cljs.core.first.call(null,remainder);
var remainder__$1 = cljs.core.next.call(null,remainder);
var bracket = new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_11559 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (_STAR_format_str_STAR_11559){
return (function (p__11560){
var vec__11561 = p__11560;
var s = cljs.core.nth.call(null,vec__11561,(0),null);
var offset = cljs.core.nth.call(null,vec__11561,(1),null);
if(cljs.core.empty_QMARK_.call(null,s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive.call(null,cljs.core.subs.call(null,s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,cljs.core.subs.call(null,s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_11559))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_11559;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_.call(null,format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__7085__auto__ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1))));
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
var or__7085__auto____$1 = cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
if(cljs.core.truth_(or__7085__auto____$1)){
return or__7085__auto____$1;
} else {
return cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
}
}
})())){
return true;
} else {
var G__11564 = cljs.core.next.call(null,format__$1);
format__$1 = G__11564;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var args11565 = [];
var len__8193__auto___11575 = arguments.length;
var i__8194__auto___11576 = (0);
while(true){
if((i__8194__auto___11576 < len__8193__auto___11575)){
args11565.push((arguments[i__8194__auto___11576]));

var G__11577 = (i__8194__auto___11576 + (1));
i__8194__auto___11576 = G__11577;
continue;
} else {
}
break;
}

var G__11567 = args11565.length;
switch (G__11567) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11565.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = (((cljs.core.not.call(null,stream)) || (stream === true))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__7073__auto__ = cljs.pprint.needs_pretty.call(null,format);
if(cljs.core.truth_(and__7073__auto__)){
return cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,real_stream));
} else {
return and__7073__auto__;
}
})())?cljs.pprint.get_pretty_writer.call(null,real_stream):real_stream);
var _STAR_out_STAR_11568 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.call(null,format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush.call(null,wrapped_stream);
} else {
}
}
if(cljs.core.not.call(null,stream)){
return [cljs.core.str(sb)].join('');
} else {
if(stream === true){
return cljs.core._STAR_print_fn_STAR_.call(null,[cljs.core.str(sb)].join(''));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_11568;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_.call(null,context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__11569 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__11569,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__11569,(1),null);
var vec__11572 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__11572,(0),null);
var offsets = cljs.core.nth.call(null,vec__11572,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;

cljs.pprint.cached_compile = cljs.core.memoize.call(null,cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method.call(null,multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"quote","quote",1377916282,null),"'",new cljs.core.Symbol(null,"var","var",870848730,null),"#'",new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),"@",new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),"~",new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),"@",new cljs.core.Symbol("cljs.core","unquote","cljs.core/unquote",1013085760,null),"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = cljs.pprint.reader_macros.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_((function (){var and__7073__auto__ = macro_char;
if(cljs.core.truth_(and__7073__auto__)){
return cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,alis));
} else {
return and__7073__auto__;
}
})())){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11582_11585 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11583_11586 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

var length_count11584_11587 = (0);
var alis_11588__$1 = cljs.core.seq.call(null,alis);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count11584_11587 < cljs.core._STAR_print_length_STAR_))){
if(alis_11588__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_11588__$1));

if(cljs.core.next.call(null,alis_11588__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__11589 = (length_count11584_11587 + (1));
var G__11590 = cljs.core.next.call(null,alis_11588__$1);
length_count11584_11587 = G__11589;
alis_11588__$1 = G__11590;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11583_11586;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11582_11585;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
return cljs.pprint.pprint_simple_list.call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11594_11597 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11595_11598 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count11596_11599 = (0);
var aseq_11600 = cljs.core.seq.call(null,avec);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count11596_11599 < cljs.core._STAR_print_length_STAR_))){
if(aseq_11600){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,aseq_11600));

if(cljs.core.next.call(null,aseq_11600)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__11601 = (length_count11596_11599 + (1));
var G__11602 = cljs.core.next.call(null,aseq_11600);
length_count11596_11599 = G__11601;
aseq_11600 = G__11602;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11595_11598;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11594_11597;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__8334__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__8335__auto__ = ((typeof format_in__8334__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8334__auto__):format_in__8334__auto__);
return ((function (format_in__8334__auto__,cf__8335__auto__){
return (function() { 
var G__11603__delegate = function (args__8336__auto__){
var navigator__8337__auto__ = cljs.pprint.init_navigator.call(null,args__8336__auto__);
return cljs.pprint.execute_format.call(null,cf__8335__auto__,navigator__8337__auto__);
};
var G__11603 = function (var_args){
var args__8336__auto__ = null;
if (arguments.length > 0) {
var G__11604__i = 0, G__11604__a = new Array(arguments.length -  0);
while (G__11604__i < G__11604__a.length) {G__11604__a[G__11604__i] = arguments[G__11604__i + 0]; ++G__11604__i;}
  args__8336__auto__ = new cljs.core.IndexedSeq(G__11604__a,0);
} 
return G__11603__delegate.call(this,args__8336__auto__);};
G__11603.cljs$lang$maxFixedArity = 0;
G__11603.cljs$lang$applyTo = (function (arglist__11605){
var args__8336__auto__ = cljs.core.seq(arglist__11605);
return G__11603__delegate(args__8336__auto__);
});
G__11603.cljs$core$IFn$_invoke$arity$variadic = G__11603__delegate;
return G__11603;
})()
;
;})(format_in__8334__auto__,cf__8335__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11611_11616 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11612_11617 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"{",null,"}");

var length_count11613_11618 = (0);
var aseq_11619 = cljs.core.seq.call(null,amap);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count11613_11618 < cljs.core._STAR_print_length_STAR_))){
if(aseq_11619){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11614_11620 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11615_11621 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out.call(null,cljs.core.ffirst.call(null,aseq_11619));

cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out.call(null,cljs.core.fnext.call(null,cljs.core.first.call(null,aseq_11619)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11615_11621;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11614_11620;
}}


if(cljs.core.next.call(null,aseq_11619)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__11622 = (length_count11613_11618 + (1));
var G__11623 = cljs.core.next.call(null,aseq_11619);
length_count11613_11618 = G__11622;
aseq_11619 = G__11623;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11612_11617;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11611_11616;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,obj));
});
cljs.pprint.pprint_set = (function (){var format_in__8334__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__8335__auto__ = ((typeof format_in__8334__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8334__auto__):format_in__8334__auto__);
return ((function (format_in__8334__auto__,cf__8335__auto__){
return (function() { 
var G__11624__delegate = function (args__8336__auto__){
var navigator__8337__auto__ = cljs.pprint.init_navigator.call(null,args__8336__auto__);
return cljs.pprint.execute_format.call(null,cf__8335__auto__,navigator__8337__auto__);
};
var G__11624 = function (var_args){
var args__8336__auto__ = null;
if (arguments.length > 0) {
var G__11625__i = 0, G__11625__a = new Array(arguments.length -  0);
while (G__11625__i < G__11625__a.length) {G__11625__a[G__11625__i] = arguments[G__11625__i + 0]; ++G__11625__i;}
  args__8336__auto__ = new cljs.core.IndexedSeq(G__11625__a,0);
} 
return G__11624__delegate.call(this,args__8336__auto__);};
G__11624.cljs$lang$maxFixedArity = 0;
G__11624.cljs$lang$applyTo = (function (arglist__11626){
var args__8336__auto__ = cljs.core.seq(arglist__11626);
return G__11624__delegate(args__8336__auto__);
});
G__11624.cljs$core$IFn$_invoke$arity$variadic = G__11624__delegate;
return G__11624;
})()
;
;})(format_in__8334__auto__,cf__8335__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__7085__auto__ = (function (){var temp__4657__auto__ = cljs.core.re_find.call(null,/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__4657__auto__)){
var match = temp__4657__auto__;
return cljs.pprint.type_map.call(null,match);
} else {
return null;
}
})();
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = [cljs.core.str("#<"),cljs.core.str(cljs.pprint.map_ref_type.call(null,cljs.core.type.call(null,o).name)),cljs.core.str("@"),cljs.core.str(goog.getUid(o)),cljs.core.str(": ")].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11631_11635 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11632_11636 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(- (cljs.core.count.call(null,prefix) - (2))));

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint.write_out.call(null,(((function (){var and__7073__auto__ = ((!((o == null)))?((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$)))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o));
if(and__7073__auto__){
return !(cljs.core._realized_QMARK_.call(null,o));
} else {
return and__7073__auto__;
}
})())?new cljs.core.Keyword(null,"not-delivered","not-delivered",1599158697):cljs.core.deref.call(null,o)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11632_11636;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11631_11635;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__8334__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__8335__auto__ = ((typeof format_in__8334__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8334__auto__):format_in__8334__auto__);
return ((function (format_in__8334__auto__,cf__8335__auto__){
return (function() { 
var G__11637__delegate = function (args__8336__auto__){
var navigator__8337__auto__ = cljs.pprint.init_navigator.call(null,args__8336__auto__);
return cljs.pprint.execute_format.call(null,cf__8335__auto__,navigator__8337__auto__);
};
var G__11637 = function (var_args){
var args__8336__auto__ = null;
if (arguments.length > 0) {
var G__11638__i = 0, G__11638__a = new Array(arguments.length -  0);
while (G__11638__i < G__11638__a.length) {G__11638__a[G__11638__i] = arguments[G__11638__i + 0]; ++G__11638__i;}
  args__8336__auto__ = new cljs.core.IndexedSeq(G__11638__a,0);
} 
return G__11637__delegate.call(this,args__8336__auto__);};
G__11637.cljs$lang$maxFixedArity = 0;
G__11637.cljs$lang$applyTo = (function (arglist__11639){
var args__8336__auto__ = cljs.core.seq(arglist__11639);
return G__11637__delegate(args__8336__auto__);
});
G__11637.cljs$core$IFn$_invoke$arity$variadic = G__11637__delegate;
return G__11637;
})()
;
;})(format_in__8334__auto__,cf__8335__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return new cljs.core.Keyword(null,"queue","queue",1455835879);
} else {
if(((!((obj == null)))?((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$)))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj))){
return new cljs.core.Keyword(null,"deref","deref",-145586795);
} else {
if((obj instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else {
if(cljs.core.seq_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.map_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.vector_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.set_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((obj == null)){
return null;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
}
}
}
}
}
});
if(typeof cljs.pprint.simple_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__8013__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8014__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8015__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8017__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8017__auto__,method_table__8013__auto__,prefer_table__8014__auto__,method_cache__8015__auto__,cached_hierarchy__8016__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_list);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,null));
}));
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_.call(null,form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_.call(null,reference)){
var vec__11658 = cljs.pprint.brackets.call(null,reference);
var start = cljs.core.nth.call(null,vec__11658,(0),null);
var end = cljs.core.nth.call(null,vec__11658,(1),null);
var vec__11661 = reference;
var seq__11662 = cljs.core.seq.call(null,vec__11661);
var first__11663 = cljs.core.first.call(null,seq__11662);
var seq__11662__$1 = cljs.core.next.call(null,seq__11662);
var keyw = first__11663;
var args = seq__11662__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11664_11674 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11665_11675 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__8334__auto__ = "~w~:i";
var cf__8335__auto__ = ((typeof format_in__8334__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8334__auto__):format_in__8334__auto__);
return ((function (format_in__8334__auto__,cf__8335__auto__,_STAR_current_level_STAR_11664_11674,_STAR_current_length_STAR_11665_11675,vec__11658,start,end,vec__11661,seq__11662,first__11663,seq__11662__$1,keyw,args){
return (function() { 
var G__11676__delegate = function (args__8336__auto__){
var navigator__8337__auto__ = cljs.pprint.init_navigator.call(null,args__8336__auto__);
return cljs.pprint.execute_format.call(null,cf__8335__auto__,navigator__8337__auto__);
};
var G__11676 = function (var_args){
var args__8336__auto__ = null;
if (arguments.length > 0) {
var G__11677__i = 0, G__11677__a = new Array(arguments.length -  0);
while (G__11677__i < G__11677__a.length) {G__11677__a[G__11677__i] = arguments[G__11677__i + 0]; ++G__11677__i;}
  args__8336__auto__ = new cljs.core.IndexedSeq(G__11677__a,0);
} 
return G__11676__delegate.call(this,args__8336__auto__);};
G__11676.cljs$lang$maxFixedArity = 0;
G__11676.cljs$lang$applyTo = (function (arglist__11678){
var args__8336__auto__ = cljs.core.seq(arglist__11678);
return G__11676__delegate(args__8336__auto__);
});
G__11676.cljs$core$IFn$_invoke$arity$variadic = G__11676__delegate;
return G__11676;
})()
;
;})(format_in__8334__auto__,cf__8335__auto__,_STAR_current_level_STAR_11664_11674,_STAR_current_length_STAR_11665_11675,vec__11658,start,end,vec__11661,seq__11662,first__11663,seq__11662__$1,keyw,args))
})().call(null,keyw);

var args_11679__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_11679__$1)){
(function (){var format_in__8334__auto__ = " ";
var cf__8335__auto__ = ((typeof format_in__8334__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8334__auto__):format_in__8334__auto__);
return ((function (args_11679__$1,format_in__8334__auto__,cf__8335__auto__,_STAR_current_level_STAR_11664_11674,_STAR_current_length_STAR_11665_11675,vec__11658,start,end,vec__11661,seq__11662,first__11663,seq__11662__$1,keyw,args){
return (function() { 
var G__11680__delegate = function (args__8336__auto__){
var navigator__8337__auto__ = cljs.pprint.init_navigator.call(null,args__8336__auto__);
return cljs.pprint.execute_format.call(null,cf__8335__auto__,navigator__8337__auto__);
};
var G__11680 = function (var_args){
var args__8336__auto__ = null;
if (arguments.length > 0) {
var G__11681__i = 0, G__11681__a = new Array(arguments.length -  0);
while (G__11681__i < G__11681__a.length) {G__11681__a[G__11681__i] = arguments[G__11681__i + 0]; ++G__11681__i;}
  args__8336__auto__ = new cljs.core.IndexedSeq(G__11681__a,0);
} 
return G__11680__delegate.call(this,args__8336__auto__);};
G__11680.cljs$lang$maxFixedArity = 0;
G__11680.cljs$lang$applyTo = (function (arglist__11682){
var args__8336__auto__ = cljs.core.seq(arglist__11682);
return G__11680__delegate(args__8336__auto__);
});
G__11680.cljs$core$IFn$_invoke$arity$variadic = G__11680__delegate;
return G__11680;
})()
;
;})(args_11679__$1,format_in__8334__auto__,cf__8335__auto__,_STAR_current_level_STAR_11664_11674,_STAR_current_length_STAR_11665_11675,vec__11658,start,end,vec__11661,seq__11662,first__11663,seq__11662__$1,keyw,args))
})().call(null);

var arg_11683 = cljs.core.first.call(null,args_11679__$1);
if(cljs.core.sequential_QMARK_.call(null,arg_11683)){
var vec__11666_11684 = cljs.pprint.brackets.call(null,arg_11683);
var start_11685__$1 = cljs.core.nth.call(null,vec__11666_11684,(0),null);
var end_11686__$1 = cljs.core.nth.call(null,vec__11666_11684,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11669_11687 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11670_11688 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start_11685__$1,null,end_11686__$1);

if((cljs.core._EQ_.call(null,cljs.core.count.call(null,arg_11683),(3))) && ((cljs.core.second.call(null,arg_11683) instanceof cljs.core.Keyword))){
var vec__11671_11689 = arg_11683;
var ns_11690 = cljs.core.nth.call(null,vec__11671_11689,(0),null);
var kw_11691 = cljs.core.nth.call(null,vec__11671_11689,(1),null);
var lis_11692 = cljs.core.nth.call(null,vec__11671_11689,(2),null);
(function (){var format_in__8334__auto__ = "~w ~w ";
var cf__8335__auto__ = ((typeof format_in__8334__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8334__auto__):format_in__8334__auto__);
return ((function (args_11679__$1,format_in__8334__auto__,cf__8335__auto__,vec__11671_11689,ns_11690,kw_11691,lis_11692,_STAR_current_level_STAR_11669_11687,_STAR_current_length_STAR_11670_11688,vec__11666_11684,start_11685__$1,end_11686__$1,arg_11683,_STAR_current_level_STAR_11664_11674,_STAR_current_length_STAR_11665_11675,vec__11658,start,end,vec__11661,seq__11662,first__11663,seq__11662__$1,keyw,args){
return (function() { 
var G__11693__delegate = function (args__8336__auto__){
var navigator__8337__auto__ = cljs.pprint.init_navigator.call(null,args__8336__auto__);
return cljs.pprint.execute_format.call(null,cf__8335__auto__,navigator__8337__auto__);
};
var G__11693 = function (var_args){
var args__8336__auto__ = null;
if (arguments.length > 0) {
var G__11694__i = 0, G__11694__a = new Array(arguments.length -  0);
while (G__11694__i < G__11694__a.length) {G__11694__a[G__11694__i] = arguments[G__11694__i + 0]; ++G__11694__i;}
  args__8336__auto__ = new cljs.core.IndexedSeq(G__11694__a,0);
} 
return G__11693__delegate.call(this,args__8336__auto__);};
G__11693.cljs$lang$maxFixedArity = 0;
G__11693.cljs$lang$applyTo = (function (arglist__11695){
var args__8336__auto__ = cljs.core.seq(arglist__11695);
return G__11693__delegate(args__8336__auto__);
});
G__11693.cljs$core$IFn$_invoke$arity$variadic = G__11693__delegate;
return G__11693;
})()
;
;})(args_11679__$1,format_in__8334__auto__,cf__8335__auto__,vec__11671_11689,ns_11690,kw_11691,lis_11692,_STAR_current_level_STAR_11669_11687,_STAR_current_length_STAR_11670_11688,vec__11666_11684,start_11685__$1,end_11686__$1,arg_11683,_STAR_current_level_STAR_11664_11674,_STAR_current_length_STAR_11665_11675,vec__11658,start,end,vec__11661,seq__11662,first__11663,seq__11662__$1,keyw,args))
})().call(null,ns_11690,kw_11691);

if(cljs.core.sequential_QMARK_.call(null,lis_11692)){
(function (){var format_in__8334__auto__ = ((cljs.core.vector_QMARK_.call(null,lis_11692))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__8335__auto__ = ((typeof format_in__8334__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8334__auto__):format_in__8334__auto__);
return ((function (args_11679__$1,format_in__8334__auto__,cf__8335__auto__,vec__11671_11689,ns_11690,kw_11691,lis_11692,_STAR_current_level_STAR_11669_11687,_STAR_current_length_STAR_11670_11688,vec__11666_11684,start_11685__$1,end_11686__$1,arg_11683,_STAR_current_level_STAR_11664_11674,_STAR_current_length_STAR_11665_11675,vec__11658,start,end,vec__11661,seq__11662,first__11663,seq__11662__$1,keyw,args){
return (function() { 
var G__11696__delegate = function (args__8336__auto__){
var navigator__8337__auto__ = cljs.pprint.init_navigator.call(null,args__8336__auto__);
return cljs.pprint.execute_format.call(null,cf__8335__auto__,navigator__8337__auto__);
};
var G__11696 = function (var_args){
var args__8336__auto__ = null;
if (arguments.length > 0) {
var G__11697__i = 0, G__11697__a = new Array(arguments.length -  0);
while (G__11697__i < G__11697__a.length) {G__11697__a[G__11697__i] = arguments[G__11697__i + 0]; ++G__11697__i;}
  args__8336__auto__ = new cljs.core.IndexedSeq(G__11697__a,0);
} 
return G__11696__delegate.call(this,args__8336__auto__);};
G__11696.cljs$lang$maxFixedArity = 0;
G__11696.cljs$lang$applyTo = (function (arglist__11698){
var args__8336__auto__ = cljs.core.seq(arglist__11698);
return G__11696__delegate(args__8336__auto__);
});
G__11696.cljs$core$IFn$_invoke$arity$variadic = G__11696__delegate;
return G__11696;
})()
;
;})(args_11679__$1,format_in__8334__auto__,cf__8335__auto__,vec__11671_11689,ns_11690,kw_11691,lis_11692,_STAR_current_level_STAR_11669_11687,_STAR_current_length_STAR_11670_11688,vec__11666_11684,start_11685__$1,end_11686__$1,arg_11683,_STAR_current_level_STAR_11664_11674,_STAR_current_length_STAR_11665_11675,vec__11658,start,end,vec__11661,seq__11662,first__11663,seq__11662__$1,keyw,args))
})().call(null,lis_11692);
} else {
cljs.pprint.write_out.call(null,lis_11692);
}
} else {
cljs.core.apply.call(null,(function (){var format_in__8334__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__8335__auto__ = ((typeof format_in__8334__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8334__auto__):format_in__8334__auto__);
return ((function (args_11679__$1,format_in__8334__auto__,cf__8335__auto__,_STAR_current_level_STAR_11669_11687,_STAR_current_length_STAR_11670_11688,vec__11666_11684,start_11685__$1,end_11686__$1,arg_11683,_STAR_current_level_STAR_11664_11674,_STAR_current_length_STAR_11665_11675,vec__11658,start,end,vec__11661,seq__11662,first__11663,seq__11662__$1,keyw,args){
return (function() { 
var G__11699__delegate = function (args__8336__auto__){
var navigator__8337__auto__ = cljs.pprint.init_navigator.call(null,args__8336__auto__);
return cljs.pprint.execute_format.call(null,cf__8335__auto__,navigator__8337__auto__);
};
var G__11699 = function (var_args){
var args__8336__auto__ = null;
if (arguments.length > 0) {
var G__11700__i = 0, G__11700__a = new Array(arguments.length -  0);
while (G__11700__i < G__11700__a.length) {G__11700__a[G__11700__i] = arguments[G__11700__i + 0]; ++G__11700__i;}
  args__8336__auto__ = new cljs.core.IndexedSeq(G__11700__a,0);
} 
return G__11699__delegate.call(this,args__8336__auto__);};
G__11699.cljs$lang$maxFixedArity = 0;
G__11699.cljs$lang$applyTo = (function (arglist__11701){
var args__8336__auto__ = cljs.core.seq(arglist__11701);
return G__11699__delegate(args__8336__auto__);
});
G__11699.cljs$core$IFn$_invoke$arity$variadic = G__11699__delegate;
return G__11699;
})()
;
;})(args_11679__$1,format_in__8334__auto__,cf__8335__auto__,_STAR_current_level_STAR_11669_11687,_STAR_current_length_STAR_11670_11688,vec__11666_11684,start_11685__$1,end_11686__$1,arg_11683,_STAR_current_level_STAR_11664_11674,_STAR_current_length_STAR_11665_11675,vec__11658,start,end,vec__11661,seq__11662,first__11663,seq__11662__$1,keyw,args))
})(),arg_11683);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11670_11688;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11669_11687;
}}


if(cljs.core.next.call(null,args_11679__$1)){
(function (){var format_in__8334__auto__ = "~_";
var cf__8335__auto__ = ((typeof format_in__8334__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8334__auto__):format_in__8334__auto__);
return ((function (args_11679__$1,format_in__8334__auto__,cf__8335__auto__,vec__11666_11684,start_11685__$1,end_11686__$1,arg_11683,_STAR_current_level_STAR_11664_11674,_STAR_current_length_STAR_11665_11675,vec__11658,start,end,vec__11661,seq__11662,first__11663,seq__11662__$1,keyw,args){
return (function() { 
var G__11702__delegate = function (args__8336__auto__){
var navigator__8337__auto__ = cljs.pprint.init_navigator.call(null,args__8336__auto__);
return cljs.pprint.execute_format.call(null,cf__8335__auto__,navigator__8337__auto__);
};
var G__11702 = function (var_args){
var args__8336__auto__ = null;
if (arguments.length > 0) {
var G__11703__i = 0, G__11703__a = new Array(arguments.length -  0);
while (G__11703__i < G__11703__a.length) {G__11703__a[G__11703__i] = arguments[G__11703__i + 0]; ++G__11703__i;}
  args__8336__auto__ = new cljs.core.IndexedSeq(G__11703__a,0);
} 
return G__11702__delegate.call(this,args__8336__auto__);};
G__11702.cljs$lang$maxFixedArity = 0;
G__11702.cljs$lang$applyTo = (function (arglist__11704){
var args__8336__auto__ = cljs.core.seq(arglist__11704);
return G__11702__delegate(args__8336__auto__);
});
G__11702.cljs$core$IFn$_invoke$arity$variadic = G__11702__delegate;
return G__11702;
})()
;
;})(args_11679__$1,format_in__8334__auto__,cf__8335__auto__,vec__11666_11684,start_11685__$1,end_11686__$1,arg_11683,_STAR_current_level_STAR_11664_11674,_STAR_current_length_STAR_11665_11675,vec__11658,start,end,vec__11661,seq__11662,first__11663,seq__11662__$1,keyw,args))
})().call(null);
} else {
}
} else {
cljs.pprint.write_out.call(null,arg_11683);

if(cljs.core.next.call(null,args_11679__$1)){
(function (){var format_in__8334__auto__ = "~:_";
var cf__8335__auto__ = ((typeof format_in__8334__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8334__auto__):format_in__8334__auto__);
return ((function (args_11679__$1,format_in__8334__auto__,cf__8335__auto__,arg_11683,_STAR_current_level_STAR_11664_11674,_STAR_current_length_STAR_11665_11675,vec__11658,start,end,vec__11661,seq__11662,first__11663,seq__11662__$1,keyw,args){
return (function() { 
var G__11705__delegate = function (args__8336__auto__){
var navigator__8337__auto__ = cljs.pprint.init_navigator.call(null,args__8336__auto__);
return cljs.pprint.execute_format.call(null,cf__8335__auto__,navigator__8337__auto__);
};
var G__11705 = function (var_args){
var args__8336__auto__ = null;
if (arguments.length > 0) {
var G__11706__i = 0, G__11706__a = new Array(arguments.length -  0);
while (G__11706__i < G__11706__a.length) {G__11706__a[G__11706__i] = arguments[G__11706__i + 0]; ++G__11706__i;}
  args__8336__auto__ = new cljs.core.IndexedSeq(G__11706__a,0);
} 
return G__11705__delegate.call(this,args__8336__auto__);};
G__11705.cljs$lang$maxFixedArity = 0;
G__11705.cljs$lang$applyTo = (function (arglist__11707){
var args__8336__auto__ = cljs.core.seq(arglist__11707);
return G__11705__delegate(args__8336__auto__);
});
G__11705.cljs$core$IFn$_invoke$arity$variadic = G__11705__delegate;
return G__11705;
})()
;
;})(args_11679__$1,format_in__8334__auto__,cf__8335__auto__,arg_11683,_STAR_current_level_STAR_11664_11674,_STAR_current_length_STAR_11665_11675,vec__11658,start,end,vec__11661,seq__11662,first__11663,seq__11662__$1,keyw,args))
})().call(null);
} else {
}
}

var G__11708 = cljs.core.next.call(null,args_11679__$1);
args_11679__$1 = G__11708;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11665_11675;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11664_11674;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next.call(null,alis)){
var vec__11720 = alis;
var seq__11721 = cljs.core.seq.call(null,vec__11720);
var first__11722 = cljs.core.first.call(null,seq__11721);
var seq__11721__$1 = cljs.core.next.call(null,seq__11721);
var ns_sym = first__11722;
var first__11722__$1 = cljs.core.first.call(null,seq__11721__$1);
var seq__11721__$2 = cljs.core.next.call(null,seq__11721__$1);
var ns_name = first__11722__$1;
var stuff = seq__11721__$2;
var vec__11723 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__11723,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__11723,(1),null);
var vec__11726 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__11726,(0),null);
var references = cljs.core.nth.call(null,vec__11726,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11729_11731 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11730_11732 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__8334__auto__ = "~w ~1I~@_~w";
var cf__8335__auto__ = ((typeof format_in__8334__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8334__auto__):format_in__8334__auto__);
return ((function (format_in__8334__auto__,cf__8335__auto__,_STAR_current_level_STAR_11729_11731,_STAR_current_length_STAR_11730_11732,vec__11720,seq__11721,first__11722,seq__11721__$1,ns_sym,first__11722__$1,seq__11721__$2,ns_name,stuff,vec__11723,doc_str,stuff__$1,vec__11726,attr_map,references){
return (function() { 
var G__11733__delegate = function (args__8336__auto__){
var navigator__8337__auto__ = cljs.pprint.init_navigator.call(null,args__8336__auto__);
return cljs.pprint.execute_format.call(null,cf__8335__auto__,navigator__8337__auto__);
};
var G__11733 = function (var_args){
var args__8336__auto__ = null;
if (arguments.length > 0) {
var G__11734__i = 0, G__11734__a = new Array(arguments.length -  0);
while (G__11734__i < G__11734__a.length) {G__11734__a[G__11734__i] = arguments[G__11734__i + 0]; ++G__11734__i;}
  args__8336__auto__ = new cljs.core.IndexedSeq(G__11734__a,0);
} 
return G__11733__delegate.call(this,args__8336__auto__);};
G__11733.cljs$lang$maxFixedArity = 0;
G__11733.cljs$lang$applyTo = (function (arglist__11735){
var args__8336__auto__ = cljs.core.seq(arglist__11735);
return G__11733__delegate(args__8336__auto__);
});
G__11733.cljs$core$IFn$_invoke$arity$variadic = G__11733__delegate;
return G__11733;
})()
;
;})(format_in__8334__auto__,cf__8335__auto__,_STAR_current_level_STAR_11729_11731,_STAR_current_length_STAR_11730_11732,vec__11720,seq__11721,first__11722,seq__11721__$1,ns_sym,first__11722__$1,seq__11721__$2,ns_name,stuff,vec__11723,doc_str,stuff__$1,vec__11726,attr_map,references))
})().call(null,ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__7085__auto__ = doc_str;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
var or__7085__auto____$1 = attr_map;
if(cljs.core.truth_(or__7085__auto____$1)){
return or__7085__auto____$1;
} else {
return cljs.core.seq.call(null,references);
}
}
})())){
(function (){var format_in__8334__auto__ = "~@:_";
var cf__8335__auto__ = ((typeof format_in__8334__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8334__auto__):format_in__8334__auto__);
return ((function (format_in__8334__auto__,cf__8335__auto__,_STAR_current_level_STAR_11729_11731,_STAR_current_length_STAR_11730_11732,vec__11720,seq__11721,first__11722,seq__11721__$1,ns_sym,first__11722__$1,seq__11721__$2,ns_name,stuff,vec__11723,doc_str,stuff__$1,vec__11726,attr_map,references){
return (function() { 
var G__11736__delegate = function (args__8336__auto__){
var navigator__8337__auto__ = cljs.pprint.init_navigator.call(null,args__8336__auto__);
return cljs.pprint.execute_format.call(null,cf__8335__auto__,navigator__8337__auto__);
};
var G__11736 = function (var_args){
var args__8336__auto__ = null;
if (arguments.length > 0) {
var G__11737__i = 0, G__11737__a = new Array(arguments.length -  0);
while (G__11737__i < G__11737__a.length) {G__11737__a[G__11737__i] = arguments[G__11737__i + 0]; ++G__11737__i;}
  args__8336__auto__ = new cljs.core.IndexedSeq(G__11737__a,0);
} 
return G__11736__delegate.call(this,args__8336__auto__);};
G__11736.cljs$lang$maxFixedArity = 0;
G__11736.cljs$lang$applyTo = (function (arglist__11738){
var args__8336__auto__ = cljs.core.seq(arglist__11738);
return G__11736__delegate(args__8336__auto__);
});
G__11736.cljs$core$IFn$_invoke$arity$variadic = G__11736__delegate;
return G__11736;
})()
;
;})(format_in__8334__auto__,cf__8335__auto__,_STAR_current_level_STAR_11729_11731,_STAR_current_length_STAR_11730_11732,vec__11720,seq__11721,first__11722,seq__11721__$1,ns_sym,first__11722__$1,seq__11721__$2,ns_name,stuff,vec__11723,doc_str,stuff__$1,vec__11726,attr_map,references))
})().call(null);
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.call(null,true,"\"~a\"~:[~;~:@_~]",doc_str,(function (){var or__7085__auto__ = attr_map;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return cljs.core.seq.call(null,references);
}
})());
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__8334__auto__ = "~w~:[~;~:@_~]";
var cf__8335__auto__ = ((typeof format_in__8334__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8334__auto__):format_in__8334__auto__);
return ((function (format_in__8334__auto__,cf__8335__auto__,_STAR_current_level_STAR_11729_11731,_STAR_current_length_STAR_11730_11732,vec__11720,seq__11721,first__11722,seq__11721__$1,ns_sym,first__11722__$1,seq__11721__$2,ns_name,stuff,vec__11723,doc_str,stuff__$1,vec__11726,attr_map,references){
return (function() { 
var G__11739__delegate = function (args__8336__auto__){
var navigator__8337__auto__ = cljs.pprint.init_navigator.call(null,args__8336__auto__);
return cljs.pprint.execute_format.call(null,cf__8335__auto__,navigator__8337__auto__);
};
var G__11739 = function (var_args){
var args__8336__auto__ = null;
if (arguments.length > 0) {
var G__11740__i = 0, G__11740__a = new Array(arguments.length -  0);
while (G__11740__i < G__11740__a.length) {G__11740__a[G__11740__i] = arguments[G__11740__i + 0]; ++G__11740__i;}
  args__8336__auto__ = new cljs.core.IndexedSeq(G__11740__a,0);
} 
return G__11739__delegate.call(this,args__8336__auto__);};
G__11739.cljs$lang$maxFixedArity = 0;
G__11739.cljs$lang$applyTo = (function (arglist__11741){
var args__8336__auto__ = cljs.core.seq(arglist__11741);
return G__11739__delegate(args__8336__auto__);
});
G__11739.cljs$core$IFn$_invoke$arity$variadic = G__11739__delegate;
return G__11739;
})()
;
;})(format_in__8334__auto__,cf__8335__auto__,_STAR_current_level_STAR_11729_11731,_STAR_current_length_STAR_11730_11732,vec__11720,seq__11721,first__11722,seq__11721__$1,ns_sym,first__11722__$1,seq__11721__$2,ns_name,stuff,vec__11723,doc_str,stuff__$1,vec__11726,attr_map,references))
})().call(null,attr_map,cljs.core.seq.call(null,references));
} else {
}

var references_11742__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference.call(null,cljs.core.first.call(null,references_11742__$1));

var temp__4657__auto___11743 = cljs.core.next.call(null,references_11742__$1);
if(temp__4657__auto___11743){
var references_11744__$2 = temp__4657__auto___11743;
cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__11745 = references_11744__$2;
references_11742__$1 = G__11745;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11730_11732;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11729_11731;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__8334__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__8335__auto__ = ((typeof format_in__8334__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8334__auto__):format_in__8334__auto__);
return ((function (format_in__8334__auto__,cf__8335__auto__){
return (function() { 
var G__11746__delegate = function (args__8336__auto__){
var navigator__8337__auto__ = cljs.pprint.init_navigator.call(null,args__8336__auto__);
return cljs.pprint.execute_format.call(null,cf__8335__auto__,navigator__8337__auto__);
};
var G__11746 = function (var_args){
var args__8336__auto__ = null;
if (arguments.length > 0) {
var G__11747__i = 0, G__11747__a = new Array(arguments.length -  0);
while (G__11747__i < G__11747__a.length) {G__11747__a[G__11747__i] = arguments[G__11747__i + 0]; ++G__11747__i;}
  args__8336__auto__ = new cljs.core.IndexedSeq(G__11747__a,0);
} 
return G__11746__delegate.call(this,args__8336__auto__);};
G__11746.cljs$lang$maxFixedArity = 0;
G__11746.cljs$lang$applyTo = (function (arglist__11748){
var args__8336__auto__ = cljs.core.seq(arglist__11748);
return G__11746__delegate(args__8336__auto__);
});
G__11746.cljs$core$IFn$_invoke$arity$variadic = G__11746__delegate;
return G__11746;
})()
;
;})(format_in__8334__auto__,cf__8335__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
(function (){var format_in__8334__auto__ = " ~_";
var cf__8335__auto__ = ((typeof format_in__8334__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8334__auto__):format_in__8334__auto__);
return ((function (format_in__8334__auto__,cf__8335__auto__){
return (function() { 
var G__11749__delegate = function (args__8336__auto__){
var navigator__8337__auto__ = cljs.pprint.init_navigator.call(null,args__8336__auto__);
return cljs.pprint.execute_format.call(null,cf__8335__auto__,navigator__8337__auto__);
};
var G__11749 = function (var_args){
var args__8336__auto__ = null;
if (arguments.length > 0) {
var G__11750__i = 0, G__11750__a = new Array(arguments.length -  0);
while (G__11750__i < G__11750__a.length) {G__11750__a[G__11750__i] = arguments[G__11750__i + 0]; ++G__11750__i;}
  args__8336__auto__ = new cljs.core.IndexedSeq(G__11750__a,0);
} 
return G__11749__delegate.call(this,args__8336__auto__);};
G__11749.cljs$lang$maxFixedArity = 0;
G__11749.cljs$lang$applyTo = (function (arglist__11751){
var args__8336__auto__ = cljs.core.seq(arglist__11751);
return G__11749__delegate(args__8336__auto__);
});
G__11749.cljs$core$IFn$_invoke$arity$variadic = G__11749__delegate;
return G__11749;
})()
;
;})(format_in__8334__auto__,cf__8335__auto__))
})().call(null);
} else {
(function (){var format_in__8334__auto__ = " ~@_";
var cf__8335__auto__ = ((typeof format_in__8334__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8334__auto__):format_in__8334__auto__);
return ((function (format_in__8334__auto__,cf__8335__auto__){
return (function() { 
var G__11752__delegate = function (args__8336__auto__){
var navigator__8337__auto__ = cljs.pprint.init_navigator.call(null,args__8336__auto__);
return cljs.pprint.execute_format.call(null,cf__8335__auto__,navigator__8337__auto__);
};
var G__11752 = function (var_args){
var args__8336__auto__ = null;
if (arguments.length > 0) {
var G__11753__i = 0, G__11753__a = new Array(arguments.length -  0);
while (G__11753__i < G__11753__a.length) {G__11753__a[G__11753__i] = arguments[G__11753__i + 0]; ++G__11753__i;}
  args__8336__auto__ = new cljs.core.IndexedSeq(G__11753__a,0);
} 
return G__11752__delegate.call(this,args__8336__auto__);};
G__11752.cljs$lang$maxFixedArity = 0;
G__11752.cljs$lang$applyTo = (function (arglist__11754){
var args__8336__auto__ = cljs.core.seq(arglist__11754);
return G__11752__delegate(args__8336__auto__);
});
G__11752.cljs$core$IFn$_invoke$arity$variadic = G__11752__delegate;
return G__11752;
})()
;
;})(format_in__8334__auto__,cf__8335__auto__))
})().call(null);
}

return (function (){var format_in__8334__auto__ = "~{~w~^ ~_~}";
var cf__8335__auto__ = ((typeof format_in__8334__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8334__auto__):format_in__8334__auto__);
return ((function (format_in__8334__auto__,cf__8335__auto__){
return (function() { 
var G__11755__delegate = function (args__8336__auto__){
var navigator__8337__auto__ = cljs.pprint.init_navigator.call(null,args__8336__auto__);
return cljs.pprint.execute_format.call(null,cf__8335__auto__,navigator__8337__auto__);
};
var G__11755 = function (var_args){
var args__8336__auto__ = null;
if (arguments.length > 0) {
var G__11756__i = 0, G__11756__a = new Array(arguments.length -  0);
while (G__11756__i < G__11756__a.length) {G__11756__a[G__11756__i] = arguments[G__11756__i + 0]; ++G__11756__i;}
  args__8336__auto__ = new cljs.core.IndexedSeq(G__11756__a,0);
} 
return G__11755__delegate.call(this,args__8336__auto__);};
G__11755.cljs$lang$maxFixedArity = 0;
G__11755.cljs$lang$applyTo = (function (arglist__11757){
var args__8336__auto__ = cljs.core.seq(arglist__11757);
return G__11755__delegate(args__8336__auto__);
});
G__11755.cljs$core$IFn$_invoke$arity$variadic = G__11755__delegate;
return G__11755;
})()
;
;})(format_in__8334__auto__,cf__8335__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
return (function (){var format_in__8334__auto__ = " ~_~{~w~^ ~_~}";
var cf__8335__auto__ = ((typeof format_in__8334__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8334__auto__):format_in__8334__auto__);
return ((function (format_in__8334__auto__,cf__8335__auto__){
return (function() { 
var G__11758__delegate = function (args__8336__auto__){
var navigator__8337__auto__ = cljs.pprint.init_navigator.call(null,args__8336__auto__);
return cljs.pprint.execute_format.call(null,cf__8335__auto__,navigator__8337__auto__);
};
var G__11758 = function (var_args){
var args__8336__auto__ = null;
if (arguments.length > 0) {
var G__11759__i = 0, G__11759__a = new Array(arguments.length -  0);
while (G__11759__i < G__11759__a.length) {G__11759__a[G__11759__i] = arguments[G__11759__i + 0]; ++G__11759__i;}
  args__8336__auto__ = new cljs.core.IndexedSeq(G__11759__a,0);
} 
return G__11758__delegate.call(this,args__8336__auto__);};
G__11758.cljs$lang$maxFixedArity = 0;
G__11758.cljs$lang$applyTo = (function (arglist__11760){
var args__8336__auto__ = cljs.core.seq(arglist__11760);
return G__11758__delegate(args__8336__auto__);
});
G__11758.cljs$core$IFn$_invoke$arity$variadic = G__11758__delegate;
return G__11758;
})()
;
;})(format_in__8334__auto__,cf__8335__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next.call(null,alis)){
var vec__11772 = alis;
var seq__11773 = cljs.core.seq.call(null,vec__11772);
var first__11774 = cljs.core.first.call(null,seq__11773);
var seq__11773__$1 = cljs.core.next.call(null,seq__11773);
var defn_sym = first__11774;
var first__11774__$1 = cljs.core.first.call(null,seq__11773__$1);
var seq__11773__$2 = cljs.core.next.call(null,seq__11773__$1);
var defn_name = first__11774__$1;
var stuff = seq__11773__$2;
var vec__11775 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__11775,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__11775,(1),null);
var vec__11778 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__11778,(0),null);
var stuff__$2 = cljs.core.nth.call(null,vec__11778,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11781_11783 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11782_11784 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__8334__auto__ = "~w ~1I~@_~w";
var cf__8335__auto__ = ((typeof format_in__8334__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8334__auto__):format_in__8334__auto__);
return ((function (format_in__8334__auto__,cf__8335__auto__,_STAR_current_level_STAR_11781_11783,_STAR_current_length_STAR_11782_11784,vec__11772,seq__11773,first__11774,seq__11773__$1,defn_sym,first__11774__$1,seq__11773__$2,defn_name,stuff,vec__11775,doc_str,stuff__$1,vec__11778,attr_map,stuff__$2){
return (function() { 
var G__11785__delegate = function (args__8336__auto__){
var navigator__8337__auto__ = cljs.pprint.init_navigator.call(null,args__8336__auto__);
return cljs.pprint.execute_format.call(null,cf__8335__auto__,navigator__8337__auto__);
};
var G__11785 = function (var_args){
var args__8336__auto__ = null;
if (arguments.length > 0) {
var G__11786__i = 0, G__11786__a = new Array(arguments.length -  0);
while (G__11786__i < G__11786__a.length) {G__11786__a[G__11786__i] = arguments[G__11786__i + 0]; ++G__11786__i;}
  args__8336__auto__ = new cljs.core.IndexedSeq(G__11786__a,0);
} 
return G__11785__delegate.call(this,args__8336__auto__);};
G__11785.cljs$lang$maxFixedArity = 0;
G__11785.cljs$lang$applyTo = (function (arglist__11787){
var args__8336__auto__ = cljs.core.seq(arglist__11787);
return G__11785__delegate(args__8336__auto__);
});
G__11785.cljs$core$IFn$_invoke$arity$variadic = G__11785__delegate;
return G__11785;
})()
;
;})(format_in__8334__auto__,cf__8335__auto__,_STAR_current_level_STAR_11781_11783,_STAR_current_length_STAR_11782_11784,vec__11772,seq__11773,first__11774,seq__11773__$1,defn_sym,first__11774__$1,seq__11773__$2,defn_name,stuff,vec__11775,doc_str,stuff__$1,vec__11778,attr_map,stuff__$2))
})().call(null,defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__8334__auto__ = " ~_~w";
var cf__8335__auto__ = ((typeof format_in__8334__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8334__auto__):format_in__8334__auto__);
return ((function (format_in__8334__auto__,cf__8335__auto__,_STAR_current_level_STAR_11781_11783,_STAR_current_length_STAR_11782_11784,vec__11772,seq__11773,first__11774,seq__11773__$1,defn_sym,first__11774__$1,seq__11773__$2,defn_name,stuff,vec__11775,doc_str,stuff__$1,vec__11778,attr_map,stuff__$2){
return (function() { 
var G__11788__delegate = function (args__8336__auto__){
var navigator__8337__auto__ = cljs.pprint.init_navigator.call(null,args__8336__auto__);
return cljs.pprint.execute_format.call(null,cf__8335__auto__,navigator__8337__auto__);
};
var G__11788 = function (var_args){
var args__8336__auto__ = null;
if (arguments.length > 0) {
var G__11789__i = 0, G__11789__a = new Array(arguments.length -  0);
while (G__11789__i < G__11789__a.length) {G__11789__a[G__11789__i] = arguments[G__11789__i + 0]; ++G__11789__i;}
  args__8336__auto__ = new cljs.core.IndexedSeq(G__11789__a,0);
} 
return G__11788__delegate.call(this,args__8336__auto__);};
G__11788.cljs$lang$maxFixedArity = 0;
G__11788.cljs$lang$applyTo = (function (arglist__11790){
var args__8336__auto__ = cljs.core.seq(arglist__11790);
return G__11788__delegate(args__8336__auto__);
});
G__11788.cljs$core$IFn$_invoke$arity$variadic = G__11788__delegate;
return G__11788;
})()
;
;})(format_in__8334__auto__,cf__8335__auto__,_STAR_current_level_STAR_11781_11783,_STAR_current_length_STAR_11782_11784,vec__11772,seq__11773,first__11774,seq__11773__$1,defn_sym,first__11774__$1,seq__11773__$2,defn_name,stuff,vec__11775,doc_str,stuff__$1,vec__11778,attr_map,stuff__$2))
})().call(null,doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__8334__auto__ = " ~_~w";
var cf__8335__auto__ = ((typeof format_in__8334__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8334__auto__):format_in__8334__auto__);
return ((function (format_in__8334__auto__,cf__8335__auto__,_STAR_current_level_STAR_11781_11783,_STAR_current_length_STAR_11782_11784,vec__11772,seq__11773,first__11774,seq__11773__$1,defn_sym,first__11774__$1,seq__11773__$2,defn_name,stuff,vec__11775,doc_str,stuff__$1,vec__11778,attr_map,stuff__$2){
return (function() { 
var G__11791__delegate = function (args__8336__auto__){
var navigator__8337__auto__ = cljs.pprint.init_navigator.call(null,args__8336__auto__);
return cljs.pprint.execute_format.call(null,cf__8335__auto__,navigator__8337__auto__);
};
var G__11791 = function (var_args){
var args__8336__auto__ = null;
if (arguments.length > 0) {
var G__11792__i = 0, G__11792__a = new Array(arguments.length -  0);
while (G__11792__i < G__11792__a.length) {G__11792__a[G__11792__i] = arguments[G__11792__i + 0]; ++G__11792__i;}
  args__8336__auto__ = new cljs.core.IndexedSeq(G__11792__a,0);
} 
return G__11791__delegate.call(this,args__8336__auto__);};
G__11791.cljs$lang$maxFixedArity = 0;
G__11791.cljs$lang$applyTo = (function (arglist__11793){
var args__8336__auto__ = cljs.core.seq(arglist__11793);
return G__11791__delegate(args__8336__auto__);
});
G__11791.cljs$core$IFn$_invoke$arity$variadic = G__11791__delegate;
return G__11791;
})()
;
;})(format_in__8334__auto__,cf__8335__auto__,_STAR_current_level_STAR_11781_11783,_STAR_current_length_STAR_11782_11784,vec__11772,seq__11773,first__11774,seq__11773__$1,defn_sym,first__11774__$1,seq__11773__$2,defn_name,stuff,vec__11775,doc_str,stuff__$1,vec__11778,attr_map,stuff__$2))
})().call(null,attr_map);
} else {
}

if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,stuff__$2))){
cljs.pprint.single_defn.call(null,stuff__$2,(function (){var or__7085__auto__ = doc_str;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn.call(null,stuff__$2,(function (){var or__7085__auto__ = doc_str;
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11782_11784;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11781_11783;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11799_11804 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11800_11805 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count11801_11806 = (0);
var binding_11807 = binding_vec;
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count11801_11806 < cljs.core._STAR_print_length_STAR_))){
if(cljs.core.seq.call(null,binding_11807)){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11802_11808 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11803_11809 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,binding_11807));

if(cljs.core.next.call(null,binding_11807)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,binding_11807));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11803_11809;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11802_11808;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,binding_11807))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__11810 = (length_count11801_11806 + (1));
var G__11811 = cljs.core.next.call(null,cljs.core.rest.call(null,binding_11807));
length_count11801_11806 = G__11810;
binding_11807 = G__11811;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11800_11805;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11799_11804;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first.call(null,alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11814_11816 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11815_11817 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

if((cljs.core.next.call(null,alis)) && (cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,alis)))){
(function (){var format_in__8334__auto__ = "~w ~1I~@_";
var cf__8335__auto__ = ((typeof format_in__8334__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8334__auto__):format_in__8334__auto__);
return ((function (format_in__8334__auto__,cf__8335__auto__,_STAR_current_level_STAR_11814_11816,_STAR_current_length_STAR_11815_11817,base_sym){
return (function() { 
var G__11818__delegate = function (args__8336__auto__){
var navigator__8337__auto__ = cljs.pprint.init_navigator.call(null,args__8336__auto__);
return cljs.pprint.execute_format.call(null,cf__8335__auto__,navigator__8337__auto__);
};
var G__11818 = function (var_args){
var args__8336__auto__ = null;
if (arguments.length > 0) {
var G__11819__i = 0, G__11819__a = new Array(arguments.length -  0);
while (G__11819__i < G__11819__a.length) {G__11819__a[G__11819__i] = arguments[G__11819__i + 0]; ++G__11819__i;}
  args__8336__auto__ = new cljs.core.IndexedSeq(G__11819__a,0);
} 
return G__11818__delegate.call(this,args__8336__auto__);};
G__11818.cljs$lang$maxFixedArity = 0;
G__11818.cljs$lang$applyTo = (function (arglist__11820){
var args__8336__auto__ = cljs.core.seq(arglist__11820);
return G__11818__delegate(args__8336__auto__);
});
G__11818.cljs$core$IFn$_invoke$arity$variadic = G__11818__delegate;
return G__11818;
})()
;
;})(format_in__8334__auto__,cf__8335__auto__,_STAR_current_level_STAR_11814_11816,_STAR_current_length_STAR_11815_11817,base_sym))
})().call(null,base_sym);

cljs.pprint.pprint_binding_form.call(null,cljs.core.second.call(null,alis));

(function (){var format_in__8334__auto__ = " ~_~{~w~^ ~_~}";
var cf__8335__auto__ = ((typeof format_in__8334__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8334__auto__):format_in__8334__auto__);
return ((function (format_in__8334__auto__,cf__8335__auto__,_STAR_current_level_STAR_11814_11816,_STAR_current_length_STAR_11815_11817,base_sym){
return (function() { 
var G__11821__delegate = function (args__8336__auto__){
var navigator__8337__auto__ = cljs.pprint.init_navigator.call(null,args__8336__auto__);
return cljs.pprint.execute_format.call(null,cf__8335__auto__,navigator__8337__auto__);
};
var G__11821 = function (var_args){
var args__8336__auto__ = null;
if (arguments.length > 0) {
var G__11822__i = 0, G__11822__a = new Array(arguments.length -  0);
while (G__11822__i < G__11822__a.length) {G__11822__a[G__11822__i] = arguments[G__11822__i + 0]; ++G__11822__i;}
  args__8336__auto__ = new cljs.core.IndexedSeq(G__11822__a,0);
} 
return G__11821__delegate.call(this,args__8336__auto__);};
G__11821.cljs$lang$maxFixedArity = 0;
G__11821.cljs$lang$applyTo = (function (arglist__11823){
var args__8336__auto__ = cljs.core.seq(arglist__11823);
return G__11821__delegate(args__8336__auto__);
});
G__11821.cljs$core$IFn$_invoke$arity$variadic = G__11821__delegate;
return G__11821;
})()
;
;})(format_in__8334__auto__,cf__8335__auto__,_STAR_current_level_STAR_11814_11816,_STAR_current_length_STAR_11815_11817,base_sym))
})().call(null,cljs.core.next.call(null,cljs.core.rest.call(null,alis)));
} else {
cljs.pprint.pprint_simple_code_list.call(null,alis);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11815_11817;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11814_11816;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__8334__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__8335__auto__ = ((typeof format_in__8334__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8334__auto__):format_in__8334__auto__);
return ((function (format_in__8334__auto__,cf__8335__auto__){
return (function() { 
var G__11824__delegate = function (args__8336__auto__){
var navigator__8337__auto__ = cljs.pprint.init_navigator.call(null,args__8336__auto__);
return cljs.pprint.execute_format.call(null,cf__8335__auto__,navigator__8337__auto__);
};
var G__11824 = function (var_args){
var args__8336__auto__ = null;
if (arguments.length > 0) {
var G__11825__i = 0, G__11825__a = new Array(arguments.length -  0);
while (G__11825__i < G__11825__a.length) {G__11825__a[G__11825__i] = arguments[G__11825__i + 0]; ++G__11825__i;}
  args__8336__auto__ = new cljs.core.IndexedSeq(G__11825__a,0);
} 
return G__11824__delegate.call(this,args__8336__auto__);};
G__11824.cljs$lang$maxFixedArity = 0;
G__11824.cljs$lang$applyTo = (function (arglist__11826){
var args__8336__auto__ = cljs.core.seq(arglist__11826);
return G__11824__delegate(args__8336__auto__);
});
G__11824.cljs$core$IFn$_invoke$arity$variadic = G__11824__delegate;
return G__11824;
})()
;
;})(format_in__8334__auto__,cf__8335__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11832_11837 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11833_11838 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis));

if(cljs.core.next.call(null,alis)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var length_count11834_11839 = (0);
var alis_11840__$1 = cljs.core.next.call(null,alis);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count11834_11839 < cljs.core._STAR_print_length_STAR_))){
if(alis_11840__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11835_11841 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11836_11842 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_11840__$1));

if(cljs.core.next.call(null,alis_11840__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_11840__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11836_11842;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11835_11841;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_11840__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__11843 = (length_count11834_11839 + (1));
var G__11844 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_11840__$1));
length_count11834_11839 = G__11843;
alis_11840__$1 = G__11844;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11833_11838;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11832_11837;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count.call(null,alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11850_11855 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11851_11856 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.core.apply.call(null,(function (){var format_in__8334__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__8335__auto__ = ((typeof format_in__8334__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8334__auto__):format_in__8334__auto__);
return ((function (format_in__8334__auto__,cf__8335__auto__,_STAR_current_level_STAR_11850_11855,_STAR_current_length_STAR_11851_11856){
return (function() { 
var G__11857__delegate = function (args__8336__auto__){
var navigator__8337__auto__ = cljs.pprint.init_navigator.call(null,args__8336__auto__);
return cljs.pprint.execute_format.call(null,cf__8335__auto__,navigator__8337__auto__);
};
var G__11857 = function (var_args){
var args__8336__auto__ = null;
if (arguments.length > 0) {
var G__11858__i = 0, G__11858__a = new Array(arguments.length -  0);
while (G__11858__i < G__11858__a.length) {G__11858__a[G__11858__i] = arguments[G__11858__i + 0]; ++G__11858__i;}
  args__8336__auto__ = new cljs.core.IndexedSeq(G__11858__a,0);
} 
return G__11857__delegate.call(this,args__8336__auto__);};
G__11857.cljs$lang$maxFixedArity = 0;
G__11857.cljs$lang$applyTo = (function (arglist__11859){
var args__8336__auto__ = cljs.core.seq(arglist__11859);
return G__11857__delegate(args__8336__auto__);
});
G__11857.cljs$core$IFn$_invoke$arity$variadic = G__11857__delegate;
return G__11857;
})()
;
;})(format_in__8334__auto__,cf__8335__auto__,_STAR_current_level_STAR_11850_11855,_STAR_current_length_STAR_11851_11856))
})(),alis);

var length_count11852_11860 = (0);
var alis_11861__$1 = cljs.core.seq.call(null,cljs.core.drop.call(null,(3),alis));
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count11852_11860 < cljs.core._STAR_print_length_STAR_))){
if(alis_11861__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11853_11862 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11854_11863 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_11861__$1));

if(cljs.core.next.call(null,alis_11861__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_11861__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11854_11863;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11853_11862;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_11861__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__11864 = (length_count11852_11860 + (1));
var G__11865 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_11861__$1));
length_count11852_11860 = G__11864;
alis_11861__$1 = G__11865;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11851_11856;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11850_11855;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second.call(null,alis);
var nlis = cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,alis)));
if(cljs.core.vector_QMARK_.call(null,args)){
var _STAR_symbol_map_STAR_11869 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args)))?cljs.core.PersistentArrayMap.fromArray([cljs.core.first.call(null,args),"%"], true, false):cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (_STAR_symbol_map_STAR_11869,args,nlis){
return (function (p1__11866_SHARP_,p2__11867_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__11866_SHARP_,[cljs.core.str("%"),cljs.core.str(p2__11867_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_11869,args,nlis))
,args,cljs.core.range.call(null,(1),(cljs.core.count.call(null,args) + (1))))));

try{return (function (){var format_in__8334__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__8335__auto__ = ((typeof format_in__8334__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__8334__auto__):format_in__8334__auto__);
return ((function (format_in__8334__auto__,cf__8335__auto__,_STAR_symbol_map_STAR_11869,args,nlis){
return (function() { 
var G__11870__delegate = function (args__8336__auto__){
var navigator__8337__auto__ = cljs.pprint.init_navigator.call(null,args__8336__auto__);
return cljs.pprint.execute_format.call(null,cf__8335__auto__,navigator__8337__auto__);
};
var G__11870 = function (var_args){
var args__8336__auto__ = null;
if (arguments.length > 0) {
var G__11871__i = 0, G__11871__a = new Array(arguments.length -  0);
while (G__11871__i < G__11871__a.length) {G__11871__a[G__11871__i] = arguments[G__11871__i + 0]; ++G__11871__i;}
  args__8336__auto__ = new cljs.core.IndexedSeq(G__11871__a,0);
} 
return G__11870__delegate.call(this,args__8336__auto__);};
G__11870.cljs$lang$maxFixedArity = 0;
G__11870.cljs$lang$applyTo = (function (arglist__11872){
var args__8336__auto__ = cljs.core.seq(arglist__11872);
return G__11870__delegate(args__8336__auto__);
});
G__11870.cljs$core$IFn$_invoke$arity$variadic = G__11870__delegate;
return G__11870;
})()
;
;})(format_in__8334__auto__,cf__8335__auto__,_STAR_symbol_map_STAR_11869,args,nlis))
})().call(null,nlis);
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_11869;
}} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_11876_11879 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_11877_11880 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

var length_count11878_11881 = (0);
var alis_11882__$1 = cljs.core.seq.call(null,alis);
while(true){
if((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count11878_11881 < cljs.core._STAR_print_length_STAR_))){
if(alis_11882__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_11882__$1));

if(cljs.core.next.call(null,alis_11882__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__11883 = (length_count11878_11881 + (1));
var G__11884 = cljs.core.next.call(null,alis_11882__$1);
length_count11878_11881 = G__11883;
alis_11882__$1 = G__11884;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_11877_11880;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_11876_11879;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__7868__auto__ = (function cljs$pprint$two_forms_$_iter__11889(s__11890){
return (new cljs.core.LazySeq(null,(function (){
var s__11890__$1 = s__11890;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11890__$1);
if(temp__4657__auto__){
var s__11890__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11890__$2)){
var c__7866__auto__ = cljs.core.chunk_first.call(null,s__11890__$2);
var size__7867__auto__ = cljs.core.count.call(null,c__7866__auto__);
var b__11892 = cljs.core.chunk_buffer.call(null,size__7867__auto__);
if((function (){var i__11891 = (0);
while(true){
if((i__11891 < size__7867__auto__)){
var x = cljs.core._nth.call(null,c__7866__auto__,i__11891);
cljs.core.chunk_append.call(null,b__11892,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null));

var G__11893 = (i__11891 + (1));
i__11891 = G__11893;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11892),cljs$pprint$two_forms_$_iter__11889.call(null,cljs.core.chunk_rest.call(null,s__11890__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11892),null);
}
} else {
var x = cljs.core.first.call(null,s__11890__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null),cljs$pprint$two_forms_$_iter__11889.call(null,cljs.core.rest.call(null,s__11890__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__7868__auto__.call(null,amap);
})()));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (core){
return (function (p1__11894_SHARP_){
var vec__11898 = p1__11894_SHARP_;
var s = cljs.core.nth.call(null,vec__11898,(0),null);
var f = cljs.core.nth.call(null,vec__11898,(1),null);
if(cljs.core.not.call(null,(function (){var or__7085__auto__ = cljs.core.namespace.call(null,s);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return cljs.core.special_symbol_QMARK_.call(null,s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,core,cljs.core.name.call(null,s)),f], null);
} else {
return p1__11894_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms.call(null,cljs.pprint.add_core_ns.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"struct","struct",325972931,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),new cljs.core.Symbol(null,"locking","locking",1542862874,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"struct-map","struct-map",-1387540878,null)],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
var temp__4655__auto__ = cljs.pprint._STAR_code_table_STAR_.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_(temp__4655__auto__)){
var special_form = temp__4655__auto__;
return special_form.call(null,alis);
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__4655__auto__ = sym.call(null,cljs.pprint._STAR_symbol_map_STAR_);
if(cljs.core.truth_(temp__4655__auto__)){
var arg_num = temp__4655__auto__;
return cljs.pprint.print.call(null,arg_num);
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.call(null,cljs.core.name.call(null,sym));
} else {
return cljs.pprint.pr.call(null,sym);
}
}
});
if(typeof cljs.pprint.code_dispatch !== 'undefined'){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__8013__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__8014__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__8015__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__8016__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__8017__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__8017__auto__,method_table__8013__auto__,prefer_table__8014__auto__,method_cache__8015__auto__,cached_hierarchy__8016__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_code_list);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.pprint.pprint_pqueue);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"deref","deref",-145586795),cljs.pprint.pprint_ideref);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__7416__auto__ = (0);
var y__7417__auto__ = (width - cljs.core.count.call(null,s));
return ((x__7416__auto__ > y__7417__auto__) ? x__7416__auto__ : y__7417__auto__);
})();
return cljs.core.apply.call(null,cljs.core.str,clojure.string.join.call(null,cljs.core.repeat.call(null,padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var args11904 = [];
var len__8193__auto___11928 = arguments.length;
var i__8194__auto___11929 = (0);
while(true){
if((i__8194__auto___11929 < len__8193__auto___11928)){
args11904.push((arguments[i__8194__auto___11929]));

var G__11930 = (i__8194__auto___11929 + (1));
i__8194__auto___11929 = G__11930;
continue;
} else {
}
break;
}

var G__11906 = args11904.length;
switch (G__11906) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11904.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_11907 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq.call(null,rows)){
var widths = cljs.core.map.call(null,((function (_STAR_print_newline_STAR_11907){
return (function (k){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.count.call(null,[cljs.core.str(k)].join('')),cljs.core.map.call(null,((function (_STAR_print_newline_STAR_11907){
return (function (p1__11901_SHARP_){
return cljs.core.count.call(null,[cljs.core.str(cljs.core.get.call(null,p1__11901_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_11907))
,rows));
});})(_STAR_print_newline_STAR_11907))
,ks);
var spacers = cljs.core.map.call(null,((function (widths,_STAR_print_newline_STAR_11907){
return (function (p1__11902_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,p1__11902_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_11907))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_11907){
return (function (leader,divider,trailer,row){
return [cljs.core.str(leader),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,divider,(function (){var iter__7868__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_11907){
return (function cljs$pprint$iter__11908(s__11909){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_11907){
return (function (){
var s__11909__$1 = s__11909;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__11909__$1);
if(temp__4657__auto__){
var s__11909__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__11909__$2)){
var c__7866__auto__ = cljs.core.chunk_first.call(null,s__11909__$2);
var size__7867__auto__ = cljs.core.count.call(null,c__7866__auto__);
var b__11911 = cljs.core.chunk_buffer.call(null,size__7867__auto__);
if((function (){var i__11910 = (0);
while(true){
if((i__11910 < size__7867__auto__)){
var vec__11918 = cljs.core._nth.call(null,c__7866__auto__,i__11910);
var col = cljs.core.nth.call(null,vec__11918,(0),null);
var width = cljs.core.nth.call(null,vec__11918,(1),null);
cljs.core.chunk_append.call(null,b__11911,cljs.pprint.add_padding.call(null,width,[cljs.core.str(col)].join('')));

var G__11932 = (i__11910 + (1));
i__11910 = G__11932;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11911),cljs$pprint$iter__11908.call(null,cljs.core.chunk_rest.call(null,s__11909__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11911),null);
}
} else {
var vec__11921 = cljs.core.first.call(null,s__11909__$2);
var col = cljs.core.nth.call(null,vec__11921,(0),null);
var width = cljs.core.nth.call(null,vec__11921,(1),null);
return cljs.core.cons.call(null,cljs.pprint.add_padding.call(null,width,[cljs.core.str(col)].join('')),cljs$pprint$iter__11908.call(null,cljs.core.rest.call(null,s__11909__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_11907))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_11907))
;
return iter__7868__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,((function (iter__7868__auto__,widths,spacers,_STAR_print_newline_STAR_11907){
return (function (p1__11903_SHARP_){
return cljs.core.get.call(null,row,p1__11903_SHARP_);
});})(iter__7868__auto__,widths,spacers,_STAR_print_newline_STAR_11907))
,ks),widths));
})()))),cljs.core.str(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_11907))
;
cljs.core.println.call(null);

cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",cljs.core.zipmap.call(null,ks,ks)));

cljs.core.println.call(null,fmt_row.call(null,"|-","-+-","-|",cljs.core.zipmap.call(null,ks,spacers)));

var seq__11924 = cljs.core.seq.call(null,rows);
var chunk__11925 = null;
var count__11926 = (0);
var i__11927 = (0);
while(true){
if((i__11927 < count__11926)){
var row = cljs.core._nth.call(null,chunk__11925,i__11927);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));

var G__11933 = seq__11924;
var G__11934 = chunk__11925;
var G__11935 = count__11926;
var G__11936 = (i__11927 + (1));
seq__11924 = G__11933;
chunk__11925 = G__11934;
count__11926 = G__11935;
i__11927 = G__11936;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__11924);
if(temp__4657__auto__){
var seq__11924__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__11924__$1)){
var c__7899__auto__ = cljs.core.chunk_first.call(null,seq__11924__$1);
var G__11937 = cljs.core.chunk_rest.call(null,seq__11924__$1);
var G__11938 = c__7899__auto__;
var G__11939 = cljs.core.count.call(null,c__7899__auto__);
var G__11940 = (0);
seq__11924 = G__11937;
chunk__11925 = G__11938;
count__11926 = G__11939;
i__11927 = G__11940;
continue;
} else {
var row = cljs.core.first.call(null,seq__11924__$1);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));

var G__11941 = cljs.core.next.call(null,seq__11924__$1);
var G__11942 = null;
var G__11943 = (0);
var G__11944 = (0);
seq__11924 = G__11941;
chunk__11925 = G__11942;
count__11926 = G__11943;
i__11927 = G__11944;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_11907;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=pprint.js.map