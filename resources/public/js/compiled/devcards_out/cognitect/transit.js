// Compiled by ClojureScript 1.7.170 {}
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.eq');
goog.require('goog.math.Long');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;

cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return (this$__$1.uuid === other.uuid);
} else {
if((other instanceof com.cognitect.transit.types.UUID)){
return (this$__$1.uuid === other.toString());
} else {
return false;

}
}
});
cljs.core.UUID.prototype.cljs$core$IComparable$ = true;

cljs.core.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IComparable$_compare$arity$2 = (function (this$,other){
var this$__$1 = this;
if(((other instanceof cljs.core.UUID)) || ((other instanceof com.cognitect.transit.types.UUID))){
return cljs.core.compare.call(null,this$__$1.toString(),other.toString());
} else {
throw (new Error([cljs.core.str("Cannot compare "),cljs.core.str(this$__$1),cljs.core.str(" to "),cljs.core.str(other)].join('')));
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;

goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
if((other instanceof cljs.core.UUID)){
return cljs.core._equiv.call(null,other,this$__$1);
} else {
return this$__$1.equiv(other);
}
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){
var this$__$1 = this;
return this$__$1.equiv(other);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;

goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.hash.call(null,this$__$1.toString());
});

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;

com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){
var this$__$1 = this;
return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$ = true;

com.cognitect.transit.types.UUID.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (uuid,writer,_){
var uuid__$1 = this;
return cljs.core._write.call(null,writer,[cljs.core.str("#uuid \""),cljs.core.str(uuid__$1.toString()),cljs.core.str("\"")].join(''));
});
cognitect.transit.opts_merge = (function cognitect$transit$opts_merge(a,b){
var seq__32135_32139 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));
var chunk__32136_32140 = null;
var count__32137_32141 = (0);
var i__32138_32142 = (0);
while(true){
if((i__32138_32142 < count__32137_32141)){
var k_32143 = cljs.core._nth.call(null,chunk__32136_32140,i__32138_32142);
var v_32144 = (b[k_32143]);
(a[k_32143] = v_32144);

var G__32145 = seq__32135_32139;
var G__32146 = chunk__32136_32140;
var G__32147 = count__32137_32141;
var G__32148 = (i__32138_32142 + (1));
seq__32135_32139 = G__32145;
chunk__32136_32140 = G__32146;
count__32137_32141 = G__32147;
i__32138_32142 = G__32148;
continue;
} else {
var temp__4425__auto___32149 = cljs.core.seq.call(null,seq__32135_32139);
if(temp__4425__auto___32149){
var seq__32135_32150__$1 = temp__4425__auto___32149;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32135_32150__$1)){
var c__17622__auto___32151 = cljs.core.chunk_first.call(null,seq__32135_32150__$1);
var G__32152 = cljs.core.chunk_rest.call(null,seq__32135_32150__$1);
var G__32153 = c__17622__auto___32151;
var G__32154 = cljs.core.count.call(null,c__17622__auto___32151);
var G__32155 = (0);
seq__32135_32139 = G__32152;
chunk__32136_32140 = G__32153;
count__32137_32141 = G__32154;
i__32138_32142 = G__32155;
continue;
} else {
var k_32156 = cljs.core.first.call(null,seq__32135_32150__$1);
var v_32157 = (b[k_32156]);
(a[k_32156] = v_32157);

var G__32158 = cljs.core.next.call(null,seq__32135_32150__$1);
var G__32159 = null;
var G__32160 = (0);
var G__32161 = (0);
seq__32135_32139 = G__32158;
chunk__32136_32140 = G__32159;
count__32137_32141 = G__32160;
i__32138_32142 = G__32161;
continue;
}
} else {
}
}
break;
}

return a;
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){
var self__ = this;
var _ = this;
return cljs.core.assoc_BANG_.call(null,m,k,v);
});

cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,m);
});

cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});

cognitect.transit.MapBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapBuilder.cljs$lang$type = true;

cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";

cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cognitect.transit/MapBuilder");
});

cognitect.transit.__GT_MapBuilder = (function cognitect$transit$__GT_MapBuilder(){
return (new cognitect.transit.MapBuilder());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.prototype.init = (function (node){
var self__ = this;
var _ = this;
return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});

cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){
var self__ = this;
var _ = this;
return cljs.core.conj_BANG_.call(null,v,x);
});

cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){
var self__ = this;
var _ = this;
return cljs.core.persistent_BANG_.call(null,v);
});

cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){
var self__ = this;
var _ = this;
return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});

cognitect.transit.VectorBuilder.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorBuilder.cljs$lang$type = true;

cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";

cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cognitect.transit/VectorBuilder");
});

cognitect.transit.__GT_VectorBuilder = (function cognitect$transit$__GT_VectorBuilder(){
return (new cognitect.transit.VectorBuilder());
});

/**
 * Return a transit reader. type may be either :json or :json-verbose.
 * opts may be a map optionally containing a :handlers entry. The value
 * of :handlers should be map from tag to a decoder function which returns
 * then in-memory representation of the semantic transit value.
 */
cognitect.transit.reader = (function cognitect$transit$reader(var_args){
var args32162 = [];
var len__17877__auto___32165 = arguments.length;
var i__17878__auto___32166 = (0);
while(true){
if((i__17878__auto___32166 < len__17877__auto___32165)){
args32162.push((arguments[i__17878__auto___32166]));

var G__32167 = (i__17878__auto___32166 + (1));
i__17878__auto___32166 = G__32167;
continue;
} else {
}
break;
}

var G__32164 = args32162.length;
switch (G__32164) {
case 1:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32162.length)].join('')));

}
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.reader.call(null,type,null);
});

cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){
return cljs.core.symbol.call(null,v);
}),":",(function (v){
return cljs.core.keyword.call(null,v);
}),"set",(function (v){
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){
return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){
var i = (0);
var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < v.length)){
var G__32169 = (i + (2));
var G__32170 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__32169;
ret = G__32170;
continue;
} else {
return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts))), "mapBuilder": (new cognitect.transit.MapBuilder()), "arrayBuilder": (new cognitect.transit.VectorBuilder()), "prefersStrings": false},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.reader.cljs$lang$maxFixedArity = 2;
/**
 * Read a transit encoded string into ClojureScript values given a 
 * transit reader.
 */
cognitect.transit.read = (function cognitect$transit$read(r,str){
return r.read(str);
});

/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return ":";
});

cognitect.transit.KeywordHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.fqn;
});

cognitect.transit.KeywordHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.KeywordHandler.cljs$lang$type = true;

cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";

cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cognitect.transit/KeywordHandler");
});

cognitect.transit.__GT_KeywordHandler = (function cognitect$transit$__GT_KeywordHandler(){
return (new cognitect.transit.KeywordHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "$";
});

cognitect.transit.SymbolHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return v.str;
});

cognitect.transit.SymbolHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SymbolHandler.cljs$lang$type = true;

cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";

cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cognitect.transit/SymbolHandler");
});

cognitect.transit.__GT_SymbolHandler = (function cognitect$transit$__GT_SymbolHandler(){
return (new cognitect.transit.SymbolHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "list";
});

cognitect.transit.ListHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__32171_32175 = cljs.core.seq.call(null,v);
var chunk__32172_32176 = null;
var count__32173_32177 = (0);
var i__32174_32178 = (0);
while(true){
if((i__32174_32178 < count__32173_32177)){
var x_32179 = cljs.core._nth.call(null,chunk__32172_32176,i__32174_32178);
ret.push(x_32179);

var G__32180 = seq__32171_32175;
var G__32181 = chunk__32172_32176;
var G__32182 = count__32173_32177;
var G__32183 = (i__32174_32178 + (1));
seq__32171_32175 = G__32180;
chunk__32172_32176 = G__32181;
count__32173_32177 = G__32182;
i__32174_32178 = G__32183;
continue;
} else {
var temp__4425__auto___32184 = cljs.core.seq.call(null,seq__32171_32175);
if(temp__4425__auto___32184){
var seq__32171_32185__$1 = temp__4425__auto___32184;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32171_32185__$1)){
var c__17622__auto___32186 = cljs.core.chunk_first.call(null,seq__32171_32185__$1);
var G__32187 = cljs.core.chunk_rest.call(null,seq__32171_32185__$1);
var G__32188 = c__17622__auto___32186;
var G__32189 = cljs.core.count.call(null,c__17622__auto___32186);
var G__32190 = (0);
seq__32171_32175 = G__32187;
chunk__32172_32176 = G__32188;
count__32173_32177 = G__32189;
i__32174_32178 = G__32190;
continue;
} else {
var x_32191 = cljs.core.first.call(null,seq__32171_32185__$1);
ret.push(x_32191);

var G__32192 = cljs.core.next.call(null,seq__32171_32185__$1);
var G__32193 = null;
var G__32194 = (0);
var G__32195 = (0);
seq__32171_32175 = G__32192;
chunk__32172_32176 = G__32193;
count__32173_32177 = G__32194;
i__32174_32178 = G__32195;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.ListHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.ListHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.ListHandler.cljs$lang$type = true;

cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";

cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cognitect.transit/ListHandler");
});

cognitect.transit.__GT_ListHandler = (function cognitect$transit$__GT_ListHandler(){
return (new cognitect.transit.ListHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "map";
});

cognitect.transit.MapHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v;
});

cognitect.transit.MapHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.MapHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.MapHandler.cljs$lang$type = true;

cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";

cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cognitect.transit/MapHandler");
});

cognitect.transit.__GT_MapHandler = (function cognitect$transit$__GT_MapHandler(){
return (new cognitect.transit.MapHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "set";
});

cognitect.transit.SetHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__32196_32200 = cljs.core.seq.call(null,v);
var chunk__32197_32201 = null;
var count__32198_32202 = (0);
var i__32199_32203 = (0);
while(true){
if((i__32199_32203 < count__32198_32202)){
var x_32204 = cljs.core._nth.call(null,chunk__32197_32201,i__32199_32203);
ret.push(x_32204);

var G__32205 = seq__32196_32200;
var G__32206 = chunk__32197_32201;
var G__32207 = count__32198_32202;
var G__32208 = (i__32199_32203 + (1));
seq__32196_32200 = G__32205;
chunk__32197_32201 = G__32206;
count__32198_32202 = G__32207;
i__32199_32203 = G__32208;
continue;
} else {
var temp__4425__auto___32209 = cljs.core.seq.call(null,seq__32196_32200);
if(temp__4425__auto___32209){
var seq__32196_32210__$1 = temp__4425__auto___32209;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32196_32210__$1)){
var c__17622__auto___32211 = cljs.core.chunk_first.call(null,seq__32196_32210__$1);
var G__32212 = cljs.core.chunk_rest.call(null,seq__32196_32210__$1);
var G__32213 = c__17622__auto___32211;
var G__32214 = cljs.core.count.call(null,c__17622__auto___32211);
var G__32215 = (0);
seq__32196_32200 = G__32212;
chunk__32197_32201 = G__32213;
count__32198_32202 = G__32214;
i__32199_32203 = G__32215;
continue;
} else {
var x_32216 = cljs.core.first.call(null,seq__32196_32210__$1);
ret.push(x_32216);

var G__32217 = cljs.core.next.call(null,seq__32196_32210__$1);
var G__32218 = null;
var G__32219 = (0);
var G__32220 = (0);
seq__32196_32200 = G__32217;
chunk__32197_32201 = G__32218;
count__32198_32202 = G__32219;
i__32199_32203 = G__32220;
continue;
}
} else {
}
}
break;
}

return com.cognitect.transit.tagged.call(null,"array",ret);
});

cognitect.transit.SetHandler.prototype.stringRep = (function (){
var self__ = this;
var v = this;
return null;
});

cognitect.transit.SetHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.SetHandler.cljs$lang$type = true;

cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";

cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cognitect.transit/SetHandler");
});

cognitect.transit.__GT_SetHandler = (function cognitect$transit$__GT_SetHandler(){
return (new cognitect.transit.SetHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "array";
});

cognitect.transit.VectorHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
var ret = [];
var seq__32221_32225 = cljs.core.seq.call(null,v);
var chunk__32222_32226 = null;
var count__32223_32227 = (0);
var i__32224_32228 = (0);
while(true){
if((i__32224_32228 < count__32223_32227)){
var x_32229 = cljs.core._nth.call(null,chunk__32222_32226,i__32224_32228);
ret.push(x_32229);

var G__32230 = seq__32221_32225;
var G__32231 = chunk__32222_32226;
var G__32232 = count__32223_32227;
var G__32233 = (i__32224_32228 + (1));
seq__32221_32225 = G__32230;
chunk__32222_32226 = G__32231;
count__32223_32227 = G__32232;
i__32224_32228 = G__32233;
continue;
} else {
var temp__4425__auto___32234 = cljs.core.seq.call(null,seq__32221_32225);
if(temp__4425__auto___32234){
var seq__32221_32235__$1 = temp__4425__auto___32234;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32221_32235__$1)){
var c__17622__auto___32236 = cljs.core.chunk_first.call(null,seq__32221_32235__$1);
var G__32237 = cljs.core.chunk_rest.call(null,seq__32221_32235__$1);
var G__32238 = c__17622__auto___32236;
var G__32239 = cljs.core.count.call(null,c__17622__auto___32236);
var G__32240 = (0);
seq__32221_32225 = G__32237;
chunk__32222_32226 = G__32238;
count__32223_32227 = G__32239;
i__32224_32228 = G__32240;
continue;
} else {
var x_32241 = cljs.core.first.call(null,seq__32221_32235__$1);
ret.push(x_32241);

var G__32242 = cljs.core.next.call(null,seq__32221_32235__$1);
var G__32243 = null;
var G__32244 = (0);
var G__32245 = (0);
seq__32221_32225 = G__32242;
chunk__32222_32226 = G__32243;
count__32223_32227 = G__32244;
i__32224_32228 = G__32245;
continue;
}
} else {
}
}
break;
}

return ret;
});

cognitect.transit.VectorHandler.prototype.stringRep = (function (v){
var self__ = this;
var _ = this;
return null;
});

cognitect.transit.VectorHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.VectorHandler.cljs$lang$type = true;

cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";

cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cognitect.transit/VectorHandler");
});

cognitect.transit.__GT_VectorHandler = (function cognitect$transit$__GT_VectorHandler(){
return (new cognitect.transit.VectorHandler());
});


/**
* @constructor
 * @implements {cognitect.transit.Object}
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.prototype.tag = (function (v){
var self__ = this;
var _ = this;
return "u";
});

cognitect.transit.UUIDHandler.prototype.rep = (function (v){
var self__ = this;
var _ = this;
return v.uuid;
});

cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){
var self__ = this;
var this$ = this;
return this$.rep(v);
});

cognitect.transit.UUIDHandler.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

cognitect.transit.UUIDHandler.cljs$lang$type = true;

cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";

cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cognitect.transit/UUIDHandler");
});

cognitect.transit.__GT_UUIDHandler = (function cognitect$transit$__GT_UUIDHandler(){
return (new cognitect.transit.UUIDHandler());
});

/**
 * Return a transit writer. type maybe either :json or :json-verbose.
 *   opts is a map containing a :handlers entry. :handlers is a map of
 *   type constructors to handler instances.
 */
cognitect.transit.writer = (function cognitect$transit$writer(var_args){
var args32246 = [];
var len__17877__auto___32257 = arguments.length;
var i__17878__auto___32258 = (0);
while(true){
if((i__17878__auto___32258 < len__17877__auto___32257)){
args32246.push((arguments[i__17878__auto___32258]));

var G__32259 = (i__17878__auto___32258 + (1));
i__17878__auto___32258 = G__32259;
continue;
} else {
}
break;
}

var G__32248 = args32246.length;
switch (G__32248) {
case 1:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32246.length)].join('')));

}
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1 = (function (type){
return cognitect.transit.writer.call(null,type,null);
});

cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2 = (function (type,opts){
var keyword_handler = (new cognitect.transit.KeywordHandler());
var symbol_handler = (new cognitect.transit.SymbolHandler());
var list_handler = (new cognitect.transit.ListHandler());
var map_handler = (new cognitect.transit.MapHandler());
var set_handler = (new cognitect.transit.SetHandler());
var vector_handler = (new cognitect.transit.VectorHandler());
var uuid_handler = (new cognitect.transit.UUIDHandler());
var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));
return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){
return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){
var G__32249 = obj;
G__32249.push(kfn.call(null,k),vfn.call(null,v));

return G__32249;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x32250 = cljs.core.clone.call(null,handlers);
x32250.forEach = ((function (x32250,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){
var coll = this;
var seq__32251 = cljs.core.seq.call(null,coll);
var chunk__32252 = null;
var count__32253 = (0);
var i__32254 = (0);
while(true){
if((i__32254 < count__32253)){
var vec__32255 = cljs.core._nth.call(null,chunk__32252,i__32254);
var k = cljs.core.nth.call(null,vec__32255,(0),null);
var v = cljs.core.nth.call(null,vec__32255,(1),null);
f.call(null,v,k);

var G__32261 = seq__32251;
var G__32262 = chunk__32252;
var G__32263 = count__32253;
var G__32264 = (i__32254 + (1));
seq__32251 = G__32261;
chunk__32252 = G__32262;
count__32253 = G__32263;
i__32254 = G__32264;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__32251);
if(temp__4425__auto__){
var seq__32251__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32251__$1)){
var c__17622__auto__ = cljs.core.chunk_first.call(null,seq__32251__$1);
var G__32265 = cljs.core.chunk_rest.call(null,seq__32251__$1);
var G__32266 = c__17622__auto__;
var G__32267 = cljs.core.count.call(null,c__17622__auto__);
var G__32268 = (0);
seq__32251 = G__32265;
chunk__32252 = G__32266;
count__32253 = G__32267;
i__32254 = G__32268;
continue;
} else {
var vec__32256 = cljs.core.first.call(null,seq__32251__$1);
var k = cljs.core.nth.call(null,vec__32256,(0),null);
var v = cljs.core.nth.call(null,vec__32256,(1),null);
f.call(null,v,k);

var G__32269 = cljs.core.next.call(null,seq__32251__$1);
var G__32270 = null;
var G__32271 = (0);
var G__32272 = (0);
seq__32251 = G__32269;
chunk__32252 = G__32270;
count__32253 = G__32271;
i__32254 = G__32272;
continue;
}
} else {
return null;
}
}
break;
}
});})(x32250,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;

return x32250;
})(), "unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){
if((x instanceof cljs.core.PersistentArrayMap)){
return x.arr;
} else {
return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});

cognitect.transit.writer.cljs$lang$maxFixedArity = 2;
/**
 * Encode an object into a transit string given a transit writer.
 */
cognitect.transit.write = (function cognitect$transit$write(w,o){
return w.write(o);
});
/**
 * Construct a read handler. Implemented as identity, exists primarily
 * for API compatiblity with transit-clj
 */
cognitect.transit.read_handler = (function cognitect$transit$read_handler(from_rep){
return from_rep;
});
/**
 * Creates a transit write handler whose tag, rep,
 * stringRep, and verboseWriteHandler methods
 * invoke the provided fns.
 */
cognitect.transit.write_handler = (function cognitect$transit$write_handler(var_args){
var args32273 = [];
var len__17877__auto___32279 = arguments.length;
var i__17878__auto___32280 = (0);
while(true){
if((i__17878__auto___32280 < len__17877__auto___32279)){
args32273.push((arguments[i__17878__auto___32280]));

var G__32281 = (i__17878__auto___32280 + (1));
i__17878__auto___32280 = G__32281;
continue;
} else {
}
break;
}

var G__32275 = args32273.length;
switch (G__32275) {
case 2:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32273.length)].join('')));

}
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$2 = (function (tag_fn,rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,null,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$3 = (function (tag_fn,rep_fn,str_rep_fn){
return cognitect.transit.write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});

cognitect.transit.write_handler.cljs$core$IFn$_invoke$arity$4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
if(typeof cognitect.transit.t_cognitect$transit32276 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cognitect.transit.Object}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cognitect.transit.t_cognitect$transit32276 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,meta32277){
this.tag_fn = tag_fn;
this.rep_fn = rep_fn;
this.str_rep_fn = str_rep_fn;
this.verbose_handler_fn = verbose_handler_fn;
this.meta32277 = meta32277;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cognitect.transit.t_cognitect$transit32276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32278,meta32277__$1){
var self__ = this;
var _32278__$1 = this;
return (new cognitect.transit.t_cognitect$transit32276(self__.tag_fn,self__.rep_fn,self__.str_rep_fn,self__.verbose_handler_fn,meta32277__$1));
});

cognitect.transit.t_cognitect$transit32276.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32278){
var self__ = this;
var _32278__$1 = this;
return self__.meta32277;
});

cognitect.transit.t_cognitect$transit32276.prototype.tag = (function (o){
var self__ = this;
var _ = this;
return self__.tag_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit32276.prototype.rep = (function (o){
var self__ = this;
var _ = this;
return self__.rep_fn.call(null,o);
});

cognitect.transit.t_cognitect$transit32276.prototype.stringRep = (function (o){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.str_rep_fn)){
return self__.str_rep_fn.call(null,o);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit32276.prototype.getVerboseHandler = (function (){
var self__ = this;
var _ = this;
if(cljs.core.truth_(self__.verbose_handler_fn)){
return self__.verbose_handler_fn.call(null);
} else {
return null;
}
});

cognitect.transit.t_cognitect$transit32276.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"tag-fn","tag-fn",242055482,null),new cljs.core.Symbol(null,"rep-fn","rep-fn",-1724891035,null),new cljs.core.Symbol(null,"str-rep-fn","str-rep-fn",-1179615016,null),new cljs.core.Symbol(null,"verbose-handler-fn","verbose-handler-fn",547340594,null),new cljs.core.Symbol(null,"meta32277","meta32277",2034016159,null)], null);
});

cognitect.transit.t_cognitect$transit32276.cljs$lang$type = true;

cognitect.transit.t_cognitect$transit32276.cljs$lang$ctorStr = "cognitect.transit/t_cognitect$transit32276";

cognitect.transit.t_cognitect$transit32276.cljs$lang$ctorPrWriter = (function (this__17417__auto__,writer__17418__auto__,opt__17419__auto__){
return cljs.core._write.call(null,writer__17418__auto__,"cognitect.transit/t_cognitect$transit32276");
});

cognitect.transit.__GT_t_cognitect$transit32276 = (function cognitect$transit$__GT_t_cognitect$transit32276(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta32277){
return (new cognitect.transit.t_cognitect$transit32276(tag_fn__$1,rep_fn__$1,str_rep_fn__$1,verbose_handler_fn__$1,meta32277));
});

}

return (new cognitect.transit.t_cognitect$transit32276(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn,cljs.core.PersistentArrayMap.EMPTY));
});

cognitect.transit.write_handler.cljs$lang$maxFixedArity = 4;
/**
 * Construct a tagged value. tag must be a string and rep can
 * be any transit encodeable value.
 */
cognitect.transit.tagged_value = (function cognitect$transit$tagged_value(tag,rep){
return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
 * Returns true if x is a transit tagged value, false otherwise.
 */
cognitect.transit.tagged_value_QMARK_ = (function cognitect$transit$tagged_value_QMARK_(x){
return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
 * Construct a transit integer value. Returns JavaScript number if
 *   in the 53bit integer range, a goog.math.Long instance if above. s
 *   may be a string or a JavaScript number.
 */
cognitect.transit.integer = (function cognitect$transit$integer(s){
return com.cognitect.transit.types.intValue.call(null,s);
});
/**
 * Returns true if x is an integer value between the 53bit and 64bit
 *   range, false otherwise.
 */
cognitect.transit.integer_QMARK_ = (function cognitect$transit$integer_QMARK_(x){
return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
 * Construct a big integer from a string.
 */
cognitect.transit.bigint = (function cognitect$transit$bigint(s){
return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
 * Returns true if x is a transit big integer value, false otherwise.
 */
cognitect.transit.bigint_QMARK_ = (function cognitect$transit$bigint_QMARK_(x){
return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
 * Construct a big decimal from a string.
 */
cognitect.transit.bigdec = (function cognitect$transit$bigdec(s){
return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
 * Returns true if x is a transit big decimal value, false otherwise.
 */
cognitect.transit.bigdec_QMARK_ = (function cognitect$transit$bigdec_QMARK_(x){
return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
 * Construct a URI from a string.
 */
cognitect.transit.uri = (function cognitect$transit$uri(s){
return com.cognitect.transit.types.uri.call(null,s);
});
/**
 * Returns true if x is a transit URI value, false otherwise.
 */
cognitect.transit.uri_QMARK_ = (function cognitect$transit$uri_QMARK_(x){
return com.cognitect.transit.types.isURI.call(null,x);
});
/**
 * Construct a UUID from a string.
 */
cognitect.transit.uuid = (function cognitect$transit$uuid(s){
return com.cognitect.transit.types.uuid.call(null,s);
});
/**
 * Returns true if x is a transit UUID value, false otherwise.
 */
cognitect.transit.uuid_QMARK_ = (function cognitect$transit$uuid_QMARK_(x){
var or__16819__auto__ = com.cognitect.transit.types.isUUID.call(null,x);
if(cljs.core.truth_(or__16819__auto__)){
return or__16819__auto__;
} else {
return (x instanceof cljs.core.UUID);
}
});
/**
 * Construct a transit binary value. s should be base64 encoded
 * string.
 */
cognitect.transit.binary = (function cognitect$transit$binary(s){
return com.cognitect.transit.types.binary.call(null,s);
});
/**
 * Returns true if x is a transit binary value, false otherwise.
 */
cognitect.transit.binary_QMARK_ = (function cognitect$transit$binary_QMARK_(x){
return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
 * Construct a quoted transit value. x should be a transit
 * encodeable value.
 */
cognitect.transit.quoted = (function cognitect$transit$quoted(x){
return com.cognitect.transit.types.quoted.call(null,x);
});
/**
 * Returns true if x is a transit quoted value, false otherwise.
 */
cognitect.transit.quoted_QMARK_ = (function cognitect$transit$quoted_QMARK_(x){
return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
 * Construct a transit link value. x should be an IMap instance
 * containing at a minimum the following keys: :href, :rel. It
 * may optionall include :name, :render, and :prompt. :href must
 * be a transit URI, all other values are strings, and :render must
 * be either :image or :link.
 */
cognitect.transit.link = (function cognitect$transit$link(x){
return com.cognitect.transit.types.link.call(null,x);
});
/**
 * Returns true if x a transit link value, false if otherwise.
 */
cognitect.transit.link_QMARK_ = (function cognitect$transit$link_QMARK_(x){
return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map?rel=1460338562410