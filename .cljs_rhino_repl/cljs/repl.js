// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__11996){
var map__12021 = p__11996;
var map__12021__$1 = ((((!((map__12021 == null)))?((((map__12021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12021.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12021):map__12021);
var m = map__12021__$1;
var n = cljs.core.get.call(null,map__12021__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__12021__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__12023_12045 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12024_12046 = null;
var count__12025_12047 = (0);
var i__12026_12048 = (0);
while(true){
if((i__12026_12048 < count__12025_12047)){
var f_12049 = cljs.core._nth.call(null,chunk__12024_12046,i__12026_12048);
cljs.core.println.call(null,"  ",f_12049);

var G__12050 = seq__12023_12045;
var G__12051 = chunk__12024_12046;
var G__12052 = count__12025_12047;
var G__12053 = (i__12026_12048 + (1));
seq__12023_12045 = G__12050;
chunk__12024_12046 = G__12051;
count__12025_12047 = G__12052;
i__12026_12048 = G__12053;
continue;
} else {
var temp__4657__auto___12054 = cljs.core.seq.call(null,seq__12023_12045);
if(temp__4657__auto___12054){
var seq__12023_12055__$1 = temp__4657__auto___12054;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12023_12055__$1)){
var c__7899__auto___12056 = cljs.core.chunk_first.call(null,seq__12023_12055__$1);
var G__12057 = cljs.core.chunk_rest.call(null,seq__12023_12055__$1);
var G__12058 = c__7899__auto___12056;
var G__12059 = cljs.core.count.call(null,c__7899__auto___12056);
var G__12060 = (0);
seq__12023_12045 = G__12057;
chunk__12024_12046 = G__12058;
count__12025_12047 = G__12059;
i__12026_12048 = G__12060;
continue;
} else {
var f_12061 = cljs.core.first.call(null,seq__12023_12055__$1);
cljs.core.println.call(null,"  ",f_12061);

var G__12062 = cljs.core.next.call(null,seq__12023_12055__$1);
var G__12063 = null;
var G__12064 = (0);
var G__12065 = (0);
seq__12023_12045 = G__12062;
chunk__12024_12046 = G__12063;
count__12025_12047 = G__12064;
i__12026_12048 = G__12065;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_12066 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__7085__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__7085__auto__)){
return or__7085__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_12066);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_12066)))?cljs.core.second.call(null,arglists_12066):arglists_12066));
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
var seq__12027_12067 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__12028_12068 = null;
var count__12029_12069 = (0);
var i__12030_12070 = (0);
while(true){
if((i__12030_12070 < count__12029_12069)){
var vec__12031_12071 = cljs.core._nth.call(null,chunk__12028_12068,i__12030_12070);
var name_12072 = cljs.core.nth.call(null,vec__12031_12071,(0),null);
var map__12034_12073 = cljs.core.nth.call(null,vec__12031_12071,(1),null);
var map__12034_12074__$1 = ((((!((map__12034_12073 == null)))?((((map__12034_12073.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12034_12073.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12034_12073):map__12034_12073);
var doc_12075 = cljs.core.get.call(null,map__12034_12074__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12076 = cljs.core.get.call(null,map__12034_12074__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12072);

cljs.core.println.call(null," ",arglists_12076);

if(cljs.core.truth_(doc_12075)){
cljs.core.println.call(null," ",doc_12075);
} else {
}

var G__12077 = seq__12027_12067;
var G__12078 = chunk__12028_12068;
var G__12079 = count__12029_12069;
var G__12080 = (i__12030_12070 + (1));
seq__12027_12067 = G__12077;
chunk__12028_12068 = G__12078;
count__12029_12069 = G__12079;
i__12030_12070 = G__12080;
continue;
} else {
var temp__4657__auto___12081 = cljs.core.seq.call(null,seq__12027_12067);
if(temp__4657__auto___12081){
var seq__12027_12082__$1 = temp__4657__auto___12081;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12027_12082__$1)){
var c__7899__auto___12083 = cljs.core.chunk_first.call(null,seq__12027_12082__$1);
var G__12084 = cljs.core.chunk_rest.call(null,seq__12027_12082__$1);
var G__12085 = c__7899__auto___12083;
var G__12086 = cljs.core.count.call(null,c__7899__auto___12083);
var G__12087 = (0);
seq__12027_12067 = G__12084;
chunk__12028_12068 = G__12085;
count__12029_12069 = G__12086;
i__12030_12070 = G__12087;
continue;
} else {
var vec__12036_12088 = cljs.core.first.call(null,seq__12027_12082__$1);
var name_12089 = cljs.core.nth.call(null,vec__12036_12088,(0),null);
var map__12039_12090 = cljs.core.nth.call(null,vec__12036_12088,(1),null);
var map__12039_12091__$1 = ((((!((map__12039_12090 == null)))?((((map__12039_12090.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12039_12090.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12039_12090):map__12039_12090);
var doc_12092 = cljs.core.get.call(null,map__12039_12091__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_12093 = cljs.core.get.call(null,map__12039_12091__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_12089);

cljs.core.println.call(null," ",arglists_12093);

if(cljs.core.truth_(doc_12092)){
cljs.core.println.call(null," ",doc_12092);
} else {
}

var G__12094 = cljs.core.next.call(null,seq__12027_12082__$1);
var G__12095 = null;
var G__12096 = (0);
var G__12097 = (0);
seq__12027_12067 = G__12094;
chunk__12028_12068 = G__12095;
count__12029_12069 = G__12096;
i__12030_12070 = G__12097;
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

var seq__12041 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__12042 = null;
var count__12043 = (0);
var i__12044 = (0);
while(true){
if((i__12044 < count__12043)){
var role = cljs.core._nth.call(null,chunk__12042,i__12044);
var temp__4657__auto___12098__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12098__$1)){
var spec_12099 = temp__4657__auto___12098__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_12099));
} else {
}

var G__12100 = seq__12041;
var G__12101 = chunk__12042;
var G__12102 = count__12043;
var G__12103 = (i__12044 + (1));
seq__12041 = G__12100;
chunk__12042 = G__12101;
count__12043 = G__12102;
i__12044 = G__12103;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__12041);
if(temp__4657__auto____$1){
var seq__12041__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12041__$1)){
var c__7899__auto__ = cljs.core.chunk_first.call(null,seq__12041__$1);
var G__12104 = cljs.core.chunk_rest.call(null,seq__12041__$1);
var G__12105 = c__7899__auto__;
var G__12106 = cljs.core.count.call(null,c__7899__auto__);
var G__12107 = (0);
seq__12041 = G__12104;
chunk__12042 = G__12105;
count__12043 = G__12106;
i__12044 = G__12107;
continue;
} else {
var role = cljs.core.first.call(null,seq__12041__$1);
var temp__4657__auto___12108__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___12108__$2)){
var spec_12109 = temp__4657__auto___12108__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_12109));
} else {
}

var G__12110 = cljs.core.next.call(null,seq__12041__$1);
var G__12111 = null;
var G__12112 = (0);
var G__12113 = (0);
seq__12041 = G__12110;
chunk__12042 = G__12111;
count__12043 = G__12112;
i__12044 = G__12113;
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

//# sourceMappingURL=repl.js.map