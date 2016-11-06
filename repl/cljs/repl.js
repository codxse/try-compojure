// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__14022){
var map__14047 = p__14022;
var map__14047__$1 = ((((!((map__14047 == null)))?((((map__14047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14047.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14047):map__14047);
var m = map__14047__$1;
var n = cljs.core.get.call(null,map__14047__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__14047__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__14049_14071 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14050_14072 = null;
var count__14051_14073 = (0);
var i__14052_14074 = (0);
while(true){
if((i__14052_14074 < count__14051_14073)){
var f_14075 = cljs.core._nth.call(null,chunk__14050_14072,i__14052_14074);
cljs.core.println.call(null,"  ",f_14075);

var G__14076 = seq__14049_14071;
var G__14077 = chunk__14050_14072;
var G__14078 = count__14051_14073;
var G__14079 = (i__14052_14074 + (1));
seq__14049_14071 = G__14076;
chunk__14050_14072 = G__14077;
count__14051_14073 = G__14078;
i__14052_14074 = G__14079;
continue;
} else {
var temp__4657__auto___14080 = cljs.core.seq.call(null,seq__14049_14071);
if(temp__4657__auto___14080){
var seq__14049_14081__$1 = temp__4657__auto___14080;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14049_14081__$1)){
var c__7996__auto___14082 = cljs.core.chunk_first.call(null,seq__14049_14081__$1);
var G__14083 = cljs.core.chunk_rest.call(null,seq__14049_14081__$1);
var G__14084 = c__7996__auto___14082;
var G__14085 = cljs.core.count.call(null,c__7996__auto___14082);
var G__14086 = (0);
seq__14049_14071 = G__14083;
chunk__14050_14072 = G__14084;
count__14051_14073 = G__14085;
i__14052_14074 = G__14086;
continue;
} else {
var f_14087 = cljs.core.first.call(null,seq__14049_14081__$1);
cljs.core.println.call(null,"  ",f_14087);

var G__14088 = cljs.core.next.call(null,seq__14049_14081__$1);
var G__14089 = null;
var G__14090 = (0);
var G__14091 = (0);
seq__14049_14071 = G__14088;
chunk__14050_14072 = G__14089;
count__14051_14073 = G__14090;
i__14052_14074 = G__14091;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_14092 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7182__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7182__auto__)){
return or__7182__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_14092);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_14092)))?cljs.core.second.call(null,arglists_14092):arglists_14092));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__14053_14093 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__14054_14094 = null;
var count__14055_14095 = (0);
var i__14056_14096 = (0);
while(true){
if((i__14056_14096 < count__14055_14095)){
var vec__14057_14097 = cljs.core._nth.call(null,chunk__14054_14094,i__14056_14096);
var name_14098 = cljs.core.nth.call(null,vec__14057_14097,(0),null);
var map__14060_14099 = cljs.core.nth.call(null,vec__14057_14097,(1),null);
var map__14060_14100__$1 = ((((!((map__14060_14099 == null)))?((((map__14060_14099.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14060_14099.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14060_14099):map__14060_14099);
var doc_14101 = cljs.core.get.call(null,map__14060_14100__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14102 = cljs.core.get.call(null,map__14060_14100__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14098);

cljs.core.println.call(null," ",arglists_14102);

if(cljs.core.truth_(doc_14101)){
cljs.core.println.call(null," ",doc_14101);
} else {
}

var G__14103 = seq__14053_14093;
var G__14104 = chunk__14054_14094;
var G__14105 = count__14055_14095;
var G__14106 = (i__14056_14096 + (1));
seq__14053_14093 = G__14103;
chunk__14054_14094 = G__14104;
count__14055_14095 = G__14105;
i__14056_14096 = G__14106;
continue;
} else {
var temp__4657__auto___14107 = cljs.core.seq.call(null,seq__14053_14093);
if(temp__4657__auto___14107){
var seq__14053_14108__$1 = temp__4657__auto___14107;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14053_14108__$1)){
var c__7996__auto___14109 = cljs.core.chunk_first.call(null,seq__14053_14108__$1);
var G__14110 = cljs.core.chunk_rest.call(null,seq__14053_14108__$1);
var G__14111 = c__7996__auto___14109;
var G__14112 = cljs.core.count.call(null,c__7996__auto___14109);
var G__14113 = (0);
seq__14053_14093 = G__14110;
chunk__14054_14094 = G__14111;
count__14055_14095 = G__14112;
i__14056_14096 = G__14113;
continue;
} else {
var vec__14062_14114 = cljs.core.first.call(null,seq__14053_14108__$1);
var name_14115 = cljs.core.nth.call(null,vec__14062_14114,(0),null);
var map__14065_14116 = cljs.core.nth.call(null,vec__14062_14114,(1),null);
var map__14065_14117__$1 = ((((!((map__14065_14116 == null)))?((((map__14065_14116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14065_14116.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14065_14116):map__14065_14116);
var doc_14118 = cljs.core.get.call(null,map__14065_14117__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_14119 = cljs.core.get.call(null,map__14065_14117__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_14115);

cljs.core.println.call(null," ",arglists_14119);

if(cljs.core.truth_(doc_14118)){
cljs.core.println.call(null," ",doc_14118);
} else {
}

var G__14120 = cljs.core.next.call(null,seq__14053_14108__$1);
var G__14121 = null;
var G__14122 = (0);
var G__14123 = (0);
seq__14053_14093 = G__14120;
chunk__14054_14094 = G__14121;
count__14055_14095 = G__14122;
i__14056_14096 = G__14123;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__14067 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__14068 = null;
var count__14069 = (0);
var i__14070 = (0);
while(true){
if((i__14070 < count__14069)){
var role = cljs.core._nth.call(null,chunk__14068,i__14070);
var temp__4657__auto___14124__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___14124__$1)){
var spec_14125 = temp__4657__auto___14124__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_14125));
} else {
}

var G__14126 = seq__14067;
var G__14127 = chunk__14068;
var G__14128 = count__14069;
var G__14129 = (i__14070 + (1));
seq__14067 = G__14126;
chunk__14068 = G__14127;
count__14069 = G__14128;
i__14070 = G__14129;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__14067);
if(temp__4657__auto____$1){
var seq__14067__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14067__$1)){
var c__7996__auto__ = cljs.core.chunk_first.call(null,seq__14067__$1);
var G__14130 = cljs.core.chunk_rest.call(null,seq__14067__$1);
var G__14131 = c__7996__auto__;
var G__14132 = cljs.core.count.call(null,c__7996__auto__);
var G__14133 = (0);
seq__14067 = G__14130;
chunk__14068 = G__14131;
count__14069 = G__14132;
i__14070 = G__14133;
continue;
} else {
var role = cljs.core.first.call(null,seq__14067__$1);
var temp__4657__auto___14134__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___14134__$2)){
var spec_14135 = temp__4657__auto___14134__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_14135));
} else {
}

var G__14136 = cljs.core.next.call(null,seq__14067__$1);
var G__14137 = null;
var G__14138 = (0);
var G__14139 = (0);
seq__14067 = G__14136;
chunk__14068 = G__14137;
count__14069 = G__14138;
i__14070 = G__14139;
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
} else {
return null;
}
}
});
