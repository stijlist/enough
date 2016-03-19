// Compiled by ClojureScript 1.7.170 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__4423__auto__ = goog.global.document;
if(cljs.core.truth_(temp__4423__auto__)){
var doc = temp__4423__auto__;
return (doc["write"]);
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return !((goog.nodeGlobalRequire == null));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__17779__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_24074_24076 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_24075_24077 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_24074_24076,_STAR_print_fn_STAR_24075_24077,sb__17779__auto__){
return (function (x__17780__auto__){
return sb__17779__auto__.append(x__17780__auto__);
});})(_STAR_print_newline_STAR_24074_24076,_STAR_print_fn_STAR_24075_24077,sb__17779__auto__))
;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24075_24077;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24074_24076;
}
return [cljs.core.str(sb__17779__auto__)].join('');
}catch (e24072){if((e24072 instanceof Error)){
var e1 = e24072;
try{return obj.toString();
}catch (e24073){if((e24073 instanceof Error)){
var e2 = e24073;
return [cljs.core.str("<<Un-printable Type>>")].join('');
} else {
throw e24073;

}
}} else {
throw e24072;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR_24079 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = cljs.pprint.code_dispatch;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_24079;
}});

//# sourceMappingURL=utils.js.map?rel=1457416898585