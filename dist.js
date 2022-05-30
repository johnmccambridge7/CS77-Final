'use strict';

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var x;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof commonjsGlobal&&commonjsGlobal];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}var y=ca(this);function B(a,b){if(b)a:{var c=y;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e];}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b});}}
B("Symbol",function(a){function b(g){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(g||"")+"_"+e++,g)}function c(g,f){this.g=g;ba(this,"description",{configurable:!0,writable:!0,value:f});}if(a)return a;c.prototype.toString=function(){return this.g};var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
B("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=y[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return da(aa(this))}});}return a});function da(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function C(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}function ea(a){if(!(a instanceof Array)){a=C(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c;}return a}var fa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},ha;
if("function"==typeof Object.setPrototypeOf)ha=Object.setPrototypeOf;else {var ia;a:{var ja={a:!0},ka={};try{ka.__proto__=ja;ia=ka.a;break a}catch(a){}ia=!1;}ha=ia?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null;}var la=ha;
function D(a,b){a.prototype=fa(b.prototype);a.prototype.constructor=a;if(la)la(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d);}else a[c]=b[c];a.ra=b.prototype;}function ma(){this.l=!1;this.i=null;this.h=void 0;this.g=1;this.u=this.o=0;this.j=null;}function na(a){if(a.l)throw new TypeError("Generator is already running");a.l=!0;}ma.prototype.s=function(a){this.h=a;};
function oa(a,b){a.j={fa:b,ga:!0};a.g=a.o||a.u;}ma.prototype.return=function(a){this.j={return:a};this.g=this.u;};function F(a,b,c){a.g=c;return {value:b}}function pa(a){this.g=new ma;this.h=a;}function qa(a,b){na(a.g);var c=a.g.i;if(c)return ra(a,"return"in c?c["return"]:function(d){return {value:d,done:!0}},b,a.g.return);a.g.return(b);return G(a)}
function ra(a,b,c,d){try{var e=b.call(a.g.i,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.l=!1,e;var g=e.value;}catch(f){return a.g.i=null,oa(a.g,f),G(a)}a.g.i=null;d.call(a.g,g);return G(a)}function G(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.l=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,oa(a.g,c);}a.g.l=!1;if(a.g.j){b=a.g.j;a.g.j=null;if(b.ga)throw b.fa;return {value:b.return,done:!0}}return {value:void 0,done:!0}}
function sa(a){this.next=function(b){na(a.g);a.g.i?b=ra(a,a.g.i.next,b,a.g.s):(a.g.s(b),b=G(a));return b};this.throw=function(b){na(a.g);a.g.i?b=ra(a,a.g.i["throw"],b,a.g.s):(oa(a.g,b),b=G(a));return b};this.return=function(b){return qa(a,b)};this[Symbol.iterator]=function(){return this};}function ta(a){function b(d){return a.next(d)}function c(d){return a.throw(d)}return new Promise(function(d,e){function g(f){f.done?d(f.value):Promise.resolve(f.value).then(b,c).then(g,e);}g(a.next());})}
function I(a){return ta(new sa(new pa(a)))}
B("Promise",function(a){function b(f){this.h=0;this.i=void 0;this.g=[];this.s=!1;var h=this.j();try{f(h.resolve,h.reject);}catch(k){h.reject(k);}}function c(){this.g=null;}function d(f){return f instanceof b?f:new b(function(h){h(f);})}if(a)return a;c.prototype.h=function(f){if(null==this.g){this.g=[];var h=this;this.i(function(){h.l();});}this.g.push(f);};var e=y.setTimeout;c.prototype.i=function(f){e(f,0);};c.prototype.l=function(){for(;this.g&&this.g.length;){var f=this.g;this.g=[];for(var h=0;h<f.length;++h){var k=
f[h];f[h]=null;try{k();}catch(l){this.j(l);}}}this.g=null;};c.prototype.j=function(f){this.i(function(){throw f;});};b.prototype.j=function(){function f(l){return function(m){k||(k=!0,l.call(h,m));}}var h=this,k=!1;return {resolve:f(this.D),reject:f(this.l)}};b.prototype.D=function(f){if(f===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(f instanceof b)this.H(f);else {a:switch(typeof f){case "object":var h=null!=f;break a;case "function":h=!0;break a;default:h=!1;}h?this.A(f):this.o(f);}};
b.prototype.A=function(f){var h=void 0;try{h=f.then;}catch(k){this.l(k);return}"function"==typeof h?this.I(h,f):this.o(f);};b.prototype.l=function(f){this.u(2,f);};b.prototype.o=function(f){this.u(1,f);};b.prototype.u=function(f,h){if(0!=this.h)throw Error("Cannot settle("+f+", "+h+"): Promise already settled in state"+this.h);this.h=f;this.i=h;2===this.h&&this.G();this.B();};b.prototype.G=function(){var f=this;e(function(){if(f.C()){var h=y.console;"undefined"!==typeof h&&h.error(f.i);}},1);};b.prototype.C=
function(){if(this.s)return !1;var f=y.CustomEvent,h=y.Event,k=y.dispatchEvent;if("undefined"===typeof k)return !0;"function"===typeof f?f=new f("unhandledrejection",{cancelable:!0}):"function"===typeof h?f=new h("unhandledrejection",{cancelable:!0}):(f=y.document.createEvent("CustomEvent"),f.initCustomEvent("unhandledrejection",!1,!0,f));f.promise=this;f.reason=this.i;return k(f)};b.prototype.B=function(){if(null!=this.g){for(var f=0;f<this.g.length;++f)g.h(this.g[f]);this.g=null;}};var g=new c;b.prototype.H=
function(f){var h=this.j();f.M(h.resolve,h.reject);};b.prototype.I=function(f,h){var k=this.j();try{f.call(h,k.resolve,k.reject);}catch(l){k.reject(l);}};b.prototype.then=function(f,h){function k(p,n){return "function"==typeof p?function(q){try{l(p(q));}catch(t){m(t);}}:n}var l,m,r=new b(function(p,n){l=p;m=n;});this.M(k(f,l),k(h,m));return r};b.prototype.catch=function(f){return this.then(void 0,f)};b.prototype.M=function(f,h){function k(){switch(l.h){case 1:f(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+
l.h);}}var l=this;null==this.g?g.h(k):this.g.push(k);this.s=!0;};b.resolve=d;b.reject=function(f){return new b(function(h,k){k(f);})};b.race=function(f){return new b(function(h,k){for(var l=C(f),m=l.next();!m.done;m=l.next())d(m.value).M(h,k);})};b.all=function(f){var h=C(f),k=h.next();return k.done?d([]):new b(function(l,m){function r(q){return function(t){p[q]=t;n--;0==n&&l(p);}}var p=[],n=0;do p.push(void 0),n++,d(k.value).M(r(p.length-1),m),k=h.next();while(!k.done)})};return b});
function ua(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var g=c++;return {value:b(g,a[g]),done:!1}}d=!0;return {done:!0,value:void 0}}};e[Symbol.iterator]=function(){return e};return e}var va="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e]);}return a};B("Object.assign",function(a){return a||va});
B("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});B("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var g=d[c];if(g===b||Object.is(g,b))return !0}return !1}});
B("String.prototype.includes",function(a){return a?a:function(b,c){if(null==this)throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype.includes must not be a regular expression");return -1!==this.indexOf(b,c||0)}});B("Array.prototype.keys",function(a){return a?a:function(){return ua(this,function(b){return b})}});var wa=this||self;
function J(a,b){a=a.split(".");var c=wa;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b;}function K(){throw Error("Invalid UTF8");}function xa(a,b){b=String.fromCharCode.apply(null,b);return null==a?b:a+b}var ya,za="undefined"!==typeof TextDecoder,Aa,Ba="undefined"!==typeof TextEncoder;var Ca={},L=null;function Da(a){var b;void 0===b&&(b=0);Ea();b=Ca[b];for(var c=Array(Math.floor(a.length/3)),d=b[64]||"",e=0,g=0;e<a.length-2;e+=3){var f=a[e],h=a[e+1],k=a[e+2],l=b[f>>2];f=b[(f&3)<<4|h>>4];h=b[(h&15)<<2|k>>6];k=b[k&63];c[g++]=l+f+h+k;}l=0;k=d;switch(a.length-e){case 2:l=a[e+1],k=b[(l&15)<<2]||d;case 1:a=a[e],c[g]=b[a>>2]+b[(a&3)<<4|l>>4]+k+d;}return c.join("")}
function Fa(a){var b=a.length,c=3*b/4;c%3?c=Math.floor(c):-1!="=.".indexOf(a[b-1])&&(c=-1!="=.".indexOf(a[b-2])?c-2:c-1);var d=new Uint8Array(c),e=0;Ga(a,function(g){d[e++]=g;});return e!==c?d.subarray(0,e):d}
function Ga(a,b){function c(k){for(;d<a.length;){var l=a.charAt(d++),m=L[l];if(null!=m)return m;if(!/^[\s\xa0]*$/.test(l))throw Error("Unknown base64 encoding at char: "+l);}return k}Ea();for(var d=0;;){var e=c(-1),g=c(0),f=c(64),h=c(64);if(64===h&&-1===e)break;b(e<<2|g>>4);64!=f&&(b(g<<4&240|f>>2),64!=h&&b(f<<6&192|h));}}
function Ea(){if(!L){L={};for(var a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),b=["+/=","+/","-_=","-_.","-_"],c=0;5>c;c++){var d=a.concat(b[c].split(""));Ca[c]=d;for(var e=0;e<d.length;e++){var g=d[e];void 0===L[g]&&(L[g]=e);}}}}var Ha="function"===typeof Uint8Array;function Ia(a){return Ha&&null!=a&&a instanceof Uint8Array}var Ja;function Ka(a){this.L=a;if(null!==a&&0===a.length)throw Error("ByteString should be constructed with non-empty values");}var La="function"===typeof Uint8Array.prototype.slice,M=0,N=0;
function Ma(a,b){if(a.constructor===Uint8Array)return a;if(a.constructor===ArrayBuffer)return new Uint8Array(a);if(a.constructor===Array)return new Uint8Array(a);if(a.constructor===String)return Fa(a);if(a.constructor===Ka){if(!b&&(b=a.L)&&b.constructor===Uint8Array)return b;b=a.L;b=null==b||Ia(b)?b:"string"===typeof b?Fa(b):null;return (a=a.L=b)?new Uint8Array(a):Ja||(Ja=new Uint8Array(0))}if(a instanceof Uint8Array)return new Uint8Array(a.buffer,a.byteOffset,a.byteLength);throw Error("Type not convertible to a Uint8Array, expected a Uint8Array, an ArrayBuffer, a base64 encoded string, or Array of numbers");
}function Na(a,b){return Error("Invalid wire type: "+a+" (at position "+b+")")}function Oa(){return Error("Failed to read varint, encoding is invalid.")}function Pa(a,b){b=void 0===b?{}:b;b=void 0===b.v?!1:b.v;this.h=null;this.g=this.i=this.j=0;this.v=b;a&&Qa(this,a);}function Qa(a,b){a.h=Ma(b,a.v);a.j=0;a.i=a.h.length;a.g=a.j;}Pa.prototype.reset=function(){this.g=this.j;};function O(a){if(a.g>a.i)throw Error("Tried to read past the end of the data "+a.g+" > "+a.i);}
function Q(a){var b=a.h,c=b[a.g],d=c&127;if(128>c)return a.g+=1,O(a),d;c=b[a.g+1];d|=(c&127)<<7;if(128>c)return a.g+=2,O(a),d;c=b[a.g+2];d|=(c&127)<<14;if(128>c)return a.g+=3,O(a),d;c=b[a.g+3];d|=(c&127)<<21;if(128>c)return a.g+=4,O(a),d;c=b[a.g+4];a.g+=5;d|=(c&15)<<28;if(128>c)return O(a),d;if(128<=b[a.g++]&&128<=b[a.g++]&&128<=b[a.g++]&&128<=b[a.g++]&&128<=b[a.g++])throw Oa();O(a);return d}var Ra=[];function Sa(){this.g=[];}Sa.prototype.length=function(){return this.g.length};Sa.prototype.end=function(){var a=this.g;this.g=[];return a};function R(a,b){for(;127<b;)a.g.push(b&127|128),b>>>=7;a.g.push(b);}function Ta(a){var b={},c=void 0===b.W?!1:b.W;this.l={v:void 0===b.v?!1:b.v};this.W=c;b=this.l;Ra.length?(c=Ra.pop(),b&&(c.v=b.v),a&&Qa(c,a),a=c):a=new Pa(a,b);this.g=a;this.j=this.g.g;this.h=this.i=-1;}Ta.prototype.reset=function(){this.g.reset();this.j=this.g.g;this.h=this.i=-1;};function Ua(a){var b=a.g;if(b.g==b.i)return !1;a.j=a.g.g;var c=Q(a.g)>>>0;b=c>>>3;c&=7;if(!(0<=c&&5>=c))throw Na(c,a.j);if(1>b)throw Error("Invalid field number: "+b+" (at position "+a.j+")");a.i=b;a.h=c;return !0}
function Va(a){switch(a.h){case 0:if(0!=a.h)Va(a);else a:{a=a.g;for(var b=a.g,c=b+10;b<c;)if(0===(a.h[b++]&128)){a.g=b;O(a);break a}throw Oa();}break;case 1:a=a.g;a.g+=8;O(a);break;case 2:2!=a.h?Va(a):(b=Q(a.g)>>>0,a=a.g,a.g+=b,O(a));break;case 5:a=a.g;a.g+=4;O(a);break;case 3:b=a.i;do{if(!Ua(a))throw Error("Unmatched start-group tag: stream EOF");if(4==a.h){if(a.i!=b)throw Error("Unmatched end-group tag");break}Va(a);}while(1);break;default:throw Na(a.h,a.j);}}var Wa=[];function Xa(){this.i=[];this.h=0;this.g=new Sa;}function S(a,b){0!==b.length&&(a.i.push(b),a.h+=b.length);}function Ya(a,b){if(b=b.ca){S(a,a.g.end());for(var c=0;c<b.length;c++)S(a,b[c]);}}var T="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Za(a,b){Object.isFrozen(a)||(T?a[T]|=b:void 0!==a.N?a.N|=b:Object.defineProperties(a,{N:{value:b,configurable:!0,writable:!0,enumerable:!1}}));}function $a(a){var b;T?b=a[T]:b=a.N;return null==b?0:b}function U(a){Za(a,1);return a}function ab(a){return Array.isArray(a)?!!($a(a)&2):!1}function bb(a){if(!Array.isArray(a))throw Error("cannot mark non-array as immutable");Za(a,2);}function cb(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}var db=Object.freeze(U([]));function eb(a){if(ab(a.m))throw Error("Cannot mutate an immutable Message");}var fb="undefined"!=typeof Symbol&&"undefined"!=typeof Symbol.hasInstance;function gb(a){return {value:a,configurable:!1,writable:!1,enumerable:!1}}function V(a,b,c){return -1===b?null:b>=a.i?a.g?a.g[b]:void 0:(void 0===c?0:c)&&a.g&&(c=a.g[b],null!=c)?c:a.m[b+a.h]}function W(a,b,c,d){d=void 0===d?!1:d;eb(a);b<a.i&&!d?a.m[b+a.h]=c:(a.g||(a.g=a.m[a.i+a.h]={}))[b]=c;}function hb(a,b,c,d){c=void 0===c?!0:c;d=void 0===d?!1:d;var e=V(a,b,d);null==e&&(e=db);if(ab(a.m))c&&(bb(e),Object.freeze(e));else if(e===db||ab(e))e=U(e.slice()),W(a,b,e,d);return e}function X(a,b,c){a=V(a,b);a=null==a?a:+a;return null==a?void 0===c?0:c:a}
function ib(a,b,c,d){a.j||(a.j={});var e=ab(a.m),g=a.j[c];if(!g){d=hb(a,c,!0,void 0===d?!1:d);g=[];e=e||ab(d);for(var f=0;f<d.length;f++)g[f]=new b(d[f]),e&&bb(g[f].m);e&&(bb(g),Object.freeze(g));a.j[c]=g;}return g}function jb(a,b,c,d,e){var g=void 0===g?!1:g;eb(a);g=ib(a,c,b,g);c=d?d:new c;a=hb(a,b);void 0!=e?(g.splice(e,0,c),a.splice(e,0,c.m)):(g.push(c),a.push(c.m));return c}function kb(a,b){a=V(a,b);return null==a?0:a}function lb(a,b){a=V(a,b);return null==a?"":a}function mb(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)){if(Ia(a))return Da(a);if(a instanceof Ka){var b=a.L;b=null==b||"string"===typeof b?b:Ha&&b instanceof Uint8Array?Da(b):null;return (a.L=b)||""}}}return a}function nb(a){var b=ob;b=void 0===b?pb:b;return qb(a,b)}function rb(a,b){if(null!=a){if(Array.isArray(a))a=qb(a,b);else if(cb(a)){var c={},d;for(d in a)c[d]=rb(a[d],b);a=c;}else a=b(a);return a}}function qb(a,b){for(var c=a.slice(),d=0;d<c.length;d++)c[d]=rb(c[d],b);Array.isArray(a)&&$a(a)&1&&U(c);return c}function ob(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=mb(a);return Array.isArray(a)?nb(a):a}function pb(a){return Ia(a)?new Uint8Array(a):a}function sb(a,b,c){a||(a=tb);tb=null;var d=this.constructor.h;a||(a=d?[d]:[]);this.h=(d?0:-1)-(this.constructor.g||0);this.j=void 0;this.m=a;a:{d=this.m.length;a=d-1;if(d&&(d=this.m[a],cb(d))){this.i=a-this.h;this.g=d;break a}void 0!==b&&-1<b?(this.i=Math.max(b,a+1-this.h),this.g=void 0):this.i=Number.MAX_VALUE;}if(c)for(b=0;b<c.length;b++)if(a=c[b],a<this.i)a+=this.h,(d=this.m[a])?Array.isArray(d)&&U(d):this.m[a]=db;else {d=this.g||(this.g=this.m[this.i+this.h]={});var e=d[a];e?Array.isArray(e)&&U(e):
d[a]=db;}}sb.prototype.toJSON=function(){return nb(this.m)};sb.prototype.toString=function(){return this.m.toString()};var tb;function ub(){sb.apply(this,arguments);}D(ub,sb);if(fb){var vb={};Object.defineProperties(ub,(vb[Symbol.hasInstance]=gb(function(){throw Error("Cannot perform instanceof checks for MutableMessage");}),vb));}function wb(a,b,c){if(c){var d={},e;for(e in c){var g=c[e],f=g.ja;f||(d.F=g.pa||g.ha.P,g.ba?(d.U=xb(g.ba),f=function(h){return function(k,l,m){return h.F(k,l,m,h.U)}}(d)):g.da?(d.T=yb(g.X.g,g.da),f=function(h){return function(k,l,m){return h.F(k,l,m,h.T)}}(d)):f=d.F,g.ja=f);f(b,a,g.X);d={F:d.F,U:d.U,T:d.T};}}Ya(b,a);}var zb=Symbol();function Ab(a,b,c){return a[zb]||(a[zb]=function(d,e){return b(d,e,c)})}
function Bb(a){var b=a[zb];if(!b){var c=Cb(a);b=function(d,e){return Db(d,e,c)};a[zb]=b;}return b}function Eb(a){var b=a.ba;if(b)return Bb(b);if(b=a.oa)return Ab(a.X.g,b,a.da)}function Fb(a){var b=Eb(a),c=a.X,d=a.ha.O;return b?function(e,g){return d(e,g,c,b)}:function(e,g){return d(e,g,c)}}
function Gb(a,b,c,d,e,g){a=a();var f=0;a.length&&"number"!==typeof a[0]&&(c(b,a[0]),f++);for(;f<a.length;){c=a[f++];for(var h=f+1;h<a.length&&"number"!==typeof a[h];)h++;var k=a[f++];h-=f;switch(h){case 0:d(b,c,k);break;case 1:d(b,c,k,a[f++]);break;case 2:e(b,c,k,a[f++],a[f++]);break;case 3:h=a[f++];var l=a[f++],m=a[f++];Array.isArray(m)?e(b,c,k,h,l,m):g(b,c,k,h,l,m);break;case 4:g(b,c,k,a[f++],a[f++],a[f++],a[f++]);break;default:throw Error("unexpected number of binary field arguments: "+h);}}return b}
var Hb=Symbol();function xb(a){var b=a[Hb];if(!b){var c=Ib(a);b=function(d,e){return Jb(d,e,c)};a[Hb]=b;}return b}function yb(a,b){var c=a[Hb];c||(c=function(d,e){return wb(d,e,b)},a[Hb]=c);return c}var Kb=Symbol();function Lb(a,b){a.push(b);}function Mb(a,b,c){a.push(b,c.P);}function Nb(a,b,c,d,e){var g=xb(e),f=c.P;a.push(b,function(h,k,l){return f(h,k,l,d,g)});}function Ob(a,b,c,d,e,g){var f=yb(d,g),h=c.P;a.push(b,function(k,l,m){return h(k,l,m,d,f)});}
function Ib(a){var b=a[Kb];return b?b:Gb(a,a[Kb]=[],Lb,Mb,Nb,Ob)}var Pb=Symbol();function Qb(a,b){a[0]=b;}function Rb(a,b,c,d){var e=c.O;a[b]=d?function(g,f,h){return e(g,f,h,d)}:e;}function Sb(a,b,c,d,e,g){var f=c.O,h=Bb(e);a[b]=function(k,l,m){return f(k,l,m,d,h,g)};}function Tb(a,b,c,d,e,g,f){var h=c.O,k=Ab(d,e,g);a[b]=function(l,m,r){return h(l,m,r,d,k,f)};}function Cb(a){var b=a[Pb];return b?b:Gb(a,a[Pb]={},Qb,Rb,Sb,Tb)}
function Db(a,b,c){for(;Ua(b)&&4!=b.h;){var d=b.i,e=c[d];if(!e){var g=c[0];g&&(g=g[d])&&(e=c[d]=Fb(g));}if(!e||!e(b,a,d))if(e=b,d=a,g=e.j,Va(e),!e.W){var f=e.g.h;e=e.g.g;e=g===e?Ja||(Ja=new Uint8Array(0)):La?f.slice(g,e):new Uint8Array(f.subarray(g,e));(g=d.ca)?g.push(e):d.ca=[e];}}return a}
function Ub(a,b,c){if(Wa.length){var d=Wa.pop();a&&(Qa(d.g,a),d.i=-1,d.h=-1);a=d;}else a=new Ta(a);try{return Db(new b,a,Cb(c))}finally{b=a.g,b.h=null,b.j=0,b.i=0,b.g=0,b.v=!1,a.i=-1,a.h=-1,100>Wa.length&&Wa.push(a);}}function Jb(a,b,c){for(var d=c.length,e=1==d%2,g=e?1:0;g<d;g+=2)(0, c[g+1])(b,a,c[g]);wb(a,b,e?c[0]:void 0);}function Vb(a,b){var c=new Xa;Jb(a,c,Ib(b));S(c,c.g.end());a=new Uint8Array(c.h);b=c.i;for(var d=b.length,e=0,g=0;g<d;g++){var f=b[g];a.set(f,e);e+=f.length;}c.i=[a];return a}
function Wb(a,b){return {O:a,P:b}}
var Y=Wb(function(a,b,c){if(5!==a.h)return !1;a=a.g;var d=a.h[a.g];var e=a.h[a.g+1];var g=a.h[a.g+2],f=a.h[a.g+3];a.g+=4;O(a);e=(d<<0|e<<8|g<<16|f<<24)>>>0;a=2*(e>>31)+1;d=e>>>23&255;e&=8388607;W(b,c,255==d?e?NaN:Infinity*a:0==d?a*Math.pow(2,-149)*e:a*Math.pow(2,d-150)*(e+Math.pow(2,23)));return !0},function(a,b,c){b=V(b,c);if(null!=b){R(a.g,8*c+5);a=a.g;var d=b;d=(c=0>d?1:0)?-d:d;0===d?0<1/d?M=N=0:(N=0,M=2147483648):isNaN(d)?(N=0,M=2147483647):3.4028234663852886E38<d?(N=0,M=(c<<31|2139095040)>>>0):
1.1754943508222875E-38>d?(d=Math.round(d/Math.pow(2,-149)),N=0,M=(c<<31|d)>>>0):(b=Math.floor(Math.log(d)/Math.LN2),d*=Math.pow(2,-b),d=Math.round(8388608*d),16777216<=d&&++b,N=0,M=(c<<31|b+127<<23|d&8388607)>>>0);c=M;a.g.push(c>>>0&255);a.g.push(c>>>8&255);a.g.push(c>>>16&255);a.g.push(c>>>24&255);}}),Xb=Wb(function(a,b,c){if(0!==a.h)return !1;for(var d=a.g,e=128,g=0,f=a=0;4>f&&128<=e;f++)e=d.h[d.g++],O(d),g|=(e&127)<<7*f;128<=e&&(e=d.h[d.g++],O(d),g|=(e&127)<<28,a|=(e&127)>>4);if(128<=e)for(f=0;5>
f&&128<=e;f++)e=d.h[d.g++],O(d),a|=(e&127)<<7*f+3;if(128>e){d=g>>>0;e=a>>>0;if(a=e&2147483648)d=~d+1>>>0,e=~e>>>0,0==d&&(e=e+1>>>0);d=4294967296*e+(d>>>0);}else throw Oa();W(b,c,a?-d:d);return !0},function(a,b,c){b=V(b,c);if(null!=b&&null!=b){R(a.g,8*c);a=a.g;var d=b;c=0>d;d=Math.abs(d);b=d>>>0;d=Math.floor((d-b)/4294967296);d>>>=0;c&&(d=~d>>>0,b=(~b>>>0)+1,4294967295<b&&(b=0,d++,4294967295<d&&(d=0)));M=b;N=d;c=M;for(b=N;0<b||127<c;)a.g.push(c&127|128),c=(c>>>7|b<<25)>>>0,b>>>=7;a.g.push(c);}}),Yb=Wb(function(a,
b,c){if(0!==a.h)return !1;W(b,c,Q(a.g));return !0},function(a,b,c){b=V(b,c);if(null!=b&&null!=b)if(R(a.g,8*c),a=a.g,c=b,0<=c)R(a,c);else {for(b=0;9>b;b++)a.g.push(c&127|128),c>>=7;a.g.push(1);}}),Zb=Wb(function(a,b,c){if(2!==a.h)return !1;var d=Q(a.g)>>>0;a=a.g;var e=a.g;a.g+=d;O(a);a=a.h;var g;if(za)(g=ya)||(g=ya=new TextDecoder("utf-8",{fatal:!0})),g=g.decode(a.subarray(e,e+d));else {d=e+d;for(var f=[],h=null,k,l,m;e<d;)k=a[e++],128>k?f.push(k):224>k?e>=d?K():(l=a[e++],194>k||128!==(l&192)?(e--,K()):
f.push((k&31)<<6|l&63)):240>k?e>=d-1?K():(l=a[e++],128!==(l&192)||224===k&&160>l||237===k&&160<=l||128!==((g=a[e++])&192)?(e--,K()):f.push((k&15)<<12|(l&63)<<6|g&63)):244>=k?e>=d-2?K():(l=a[e++],128!==(l&192)||0!==(k<<28)+(l-144)>>30||128!==((g=a[e++])&192)||128!==((m=a[e++])&192)?(e--,K()):(k=(k&7)<<18|(l&63)<<12|(g&63)<<6|m&63,k-=65536,f.push((k>>10&1023)+55296,(k&1023)+56320))):K(),8192<=f.length&&(h=xa(h,f),f.length=0);g=xa(h,f);}W(b,c,g);return !0},function(a,b,c){b=V(b,c);if(null!=b){var d=!1;
d=void 0===d?!1:d;if(Ba){if(d&&/(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])/.test(b))throw Error("Found an unpaired surrogate");b=(Aa||(Aa=new TextEncoder)).encode(b);}else {for(var e=0,g=new Uint8Array(3*b.length),f=0;f<b.length;f++){var h=b.charCodeAt(f);if(128>h)g[e++]=h;else {if(2048>h)g[e++]=h>>6|192;else {if(55296<=h&&57343>=h){if(56319>=h&&f<b.length){var k=b.charCodeAt(++f);if(56320<=k&&57343>=k){h=1024*(h-55296)+k-56320+65536;g[e++]=h>>18|240;g[e++]=h>>12&63|128;
g[e++]=h>>6&63|128;g[e++]=h&63|128;continue}else f--;}if(d)throw Error("Found an unpaired surrogate");h=65533;}g[e++]=h>>12|224;g[e++]=h>>6&63|128;}g[e++]=h&63|128;}}b=g.subarray(0,e);}R(a.g,8*c+2);R(a.g,b.length);S(a,a.g.end());S(a,b);}}),$b=Wb(function(a,b,c,d,e){if(2!==a.h)return !1;b=jb(b,c,d);c=a.g.i;d=Q(a.g)>>>0;var g=a.g.g+d,f=g-c;0>=f&&(a.g.i=g,e(b,a),f=g-a.g.g);if(f)throw Error("Message parsing ended unexpectedly. Expected to read "+(d+" bytes, instead read "+(d-f)+" bytes, either the data ended unexpectedly or the message misreported its own length"));
a.g.g=g;a.g.i=c;return !0},function(a,b,c,d,e){b=ib(b,d,c);if(null!=b)for(d=0;d<b.length;d++){var g=a;R(g.g,8*c+2);var f=g.g.end();S(g,f);f.push(g.h);g=f;e(b[d],a);f=a;var h=g.pop();for(h=f.h+f.g.length()-h;127<h;)g.push(h&127|128),h>>>=7,f.h++;g.push(h);f.h++;}});function Z(){ub.apply(this,arguments);}D(Z,ub);if(fb){var ac={};Object.defineProperties(Z,(ac[Symbol.hasInstance]=gb(Object[Symbol.hasInstance]),ac));}function bc(a){Z.call(this,a);}D(bc,Z);function cc(){return [1,Yb,2,Y,3,Zb,4,Zb]}function dc(a){Z.call(this,a,-1,ec);}D(dc,Z);dc.prototype.addClassification=function(a,b){jb(this,1,bc,a,b);return this};function fc(){return [1,$b,bc,cc]}var ec=[1];function gc(a){Z.call(this,a);}D(gc,Z);function hc(){return [1,Y,2,Y,3,Y,4,Y,5,Y]}function ic(a){Z.call(this,a,-1,jc);}D(ic,Z);function kc(){return [1,$b,gc,hc]}var jc=[1];function lc(a){Z.call(this,a);}D(lc,Z);function mc(){return [1,Y,2,Y,3,Y,4,Y,5,Y,6,Xb]}function nc(a,b,c){c=a.createShader(0===c?a.VERTEX_SHADER:a.FRAGMENT_SHADER);a.shaderSource(c,b);a.compileShader(c);if(!a.getShaderParameter(c,a.COMPILE_STATUS))throw Error("Could not compile WebGL shader.\n\n"+a.getShaderInfoLog(c));return c}function oc(a){return ib(a,bc,1).map(function(b){return {index:kb(b,1),score:X(b,2),label:null!=V(b,3)?lb(b,3):void 0,displayName:null!=V(b,4)?lb(b,4):void 0}})}function pc(a){return {x:X(a,1),y:X(a,2),z:X(a,3),visibility:null!=V(a,4)?X(a,4):void 0}}function qc(a){return a.map(function(b){return ib(Ub(b,ic,kc),gc,1).map(pc)})}function rc(a,b){this.h=a;this.g=b;this.l=0;}
function sc(a,b,c){tc(a,b);if("function"===typeof a.g.canvas.transferToImageBitmap)return Promise.resolve(a.g.canvas.transferToImageBitmap());if(c)return Promise.resolve(a.g.canvas);if("function"===typeof createImageBitmap)return createImageBitmap(a.g.canvas);void 0===a.i&&(a.i=document.createElement("canvas"));return new Promise(function(d){a.i.height=a.g.canvas.height;a.i.width=a.g.canvas.width;a.i.getContext("2d",{}).drawImage(a.g.canvas,0,0,a.g.canvas.width,a.g.canvas.height);d(a.i);})}
function tc(a,b){var c=a.g;if(void 0===a.o){var d=nc(c,"\n  attribute vec2 aVertex;\n  attribute vec2 aTex;\n  varying vec2 vTex;\n  void main(void) {\n    gl_Position = vec4(aVertex, 0.0, 1.0);\n    vTex = aTex;\n  }",0),e=nc(c,"\n  precision mediump float;\n  varying vec2 vTex;\n  uniform sampler2D sampler0;\n  void main(){\n    gl_FragColor = texture2D(sampler0, vTex);\n  }",1),g=c.createProgram();c.attachShader(g,d);c.attachShader(g,e);c.linkProgram(g);if(!c.getProgramParameter(g,c.LINK_STATUS))throw Error("Could not compile WebGL program.\n\n"+
c.getProgramInfoLog(g));d=a.o=g;c.useProgram(d);e=c.getUniformLocation(d,"sampler0");a.j={K:c.getAttribLocation(d,"aVertex"),J:c.getAttribLocation(d,"aTex"),qa:e};a.u=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,a.u);c.enableVertexAttribArray(a.j.K);c.vertexAttribPointer(a.j.K,2,c.FLOAT,!1,0,0);c.bufferData(c.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),c.STATIC_DRAW);c.bindBuffer(c.ARRAY_BUFFER,null);a.s=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,a.s);c.enableVertexAttribArray(a.j.J);c.vertexAttribPointer(a.j.J,
2,c.FLOAT,!1,0,0);c.bufferData(c.ARRAY_BUFFER,new Float32Array([0,1,0,0,1,0,1,1]),c.STATIC_DRAW);c.bindBuffer(c.ARRAY_BUFFER,null);c.uniform1i(e,0);}d=a.j;c.useProgram(a.o);c.canvas.width=b.width;c.canvas.height=b.height;c.viewport(0,0,b.width,b.height);c.activeTexture(c.TEXTURE0);a.h.bindTexture2d(b.glName);c.enableVertexAttribArray(d.K);c.bindBuffer(c.ARRAY_BUFFER,a.u);c.vertexAttribPointer(d.K,2,c.FLOAT,!1,0,0);c.enableVertexAttribArray(d.J);c.bindBuffer(c.ARRAY_BUFFER,a.s);c.vertexAttribPointer(d.J,
2,c.FLOAT,!1,0,0);c.bindFramebuffer(c.DRAW_FRAMEBUFFER?c.DRAW_FRAMEBUFFER:c.FRAMEBUFFER,null);c.clearColor(0,0,0,0);c.clear(c.COLOR_BUFFER_BIT);c.colorMask(!0,!0,!0,!0);c.drawArrays(c.TRIANGLE_FAN,0,4);c.disableVertexAttribArray(d.K);c.disableVertexAttribArray(d.J);c.bindBuffer(c.ARRAY_BUFFER,null);a.h.bindTexture2d(0);}function uc(a){this.g=a;}var vc=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,2,1,0,10,9,1,7,0,65,0,253,15,26,11]);function wc(a,b){return b+a}function xc(a,b){window[a]=b;}function yc(a){var b=document.createElement("script");b.setAttribute("src",a);b.setAttribute("crossorigin","anonymous");return new Promise(function(c){b.addEventListener("load",function(){c();},!1);b.addEventListener("error",function(){c();},!1);document.body.appendChild(b);})}
function zc(){return I(function(a){switch(a.g){case 1:return a.o=2,F(a,WebAssembly.instantiate(vc),4);case 4:a.g=3;a.o=0;break;case 2:return a.o=0,a.j=null,a.return(!1);case 3:return a.return(!0)}})}
function Ac(a){this.g=a;this.listeners={};this.j={};this.H={};this.o={};this.u={};this.I=this.s=this.$=!0;this.D=Promise.resolve();this.Z="";this.C={};this.locateFile=a&&a.locateFile||wc;if("object"===typeof window)var b=window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/";else if("undefined"!==typeof location)b=location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/";else throw Error("solutions can only be loaded on a web page or in a web worker");
this.aa=b;if(a.options){b=C(Object.keys(a.options));for(var c=b.next();!c.done;c=b.next()){c=c.value;var d=a.options[c].default;void 0!==d&&(this.j[c]="function"===typeof d?d():d);}}}x=Ac.prototype;x.close=function(){this.i&&this.i.delete();return Promise.resolve()};
function Bc(a){var b,c,d,e,g,f,h,k,l,m,r;return I(function(p){switch(p.g){case 1:if(!a.$)return p.return();b=void 0===a.g.files?[]:"function"===typeof a.g.files?a.g.files(a.j):a.g.files;return F(p,zc(),2);case 2:c=p.h;if("object"===typeof window)return xc("createMediapipeSolutionsWasm",{locateFile:a.locateFile}),xc("createMediapipeSolutionsPackedAssets",{locateFile:a.locateFile}),f=b.filter(function(n){return void 0!==n.data}),h=b.filter(function(n){return void 0===n.data}),k=Promise.all(f.map(function(n){var q=
Cc(a,n.url);if(void 0!==n.path){var t=n.path;q=q.then(function(w){a.overrideFile(t,w);return Promise.resolve(w)});}return q})),l=Promise.all(h.map(function(n){return void 0===n.simd||n.simd&&c||!n.simd&&!c?yc(a.locateFile(n.url,a.aa)):Promise.resolve()})).then(function(){var n,q,t;return I(function(w){if(1==w.g)return n=window.createMediapipeSolutionsWasm,q=window.createMediapipeSolutionsPackedAssets,t=a,F(w,n(q),2);t.h=w.h;w.g=0;})}),m=function(){return I(function(n){a.g.graph&&a.g.graph.url?n=F(n,
Cc(a,a.g.graph.url),0):(n.g=0,n=void 0);return n})}(),F(p,Promise.all([l,k,m]),7);if("function"!==typeof importScripts)throw Error("solutions can only be loaded on a web page or in a web worker");d=b.filter(function(n){return void 0===n.simd||n.simd&&c||!n.simd&&!c}).map(function(n){return a.locateFile(n.url,a.aa)});importScripts.apply(null,ea(d));e=a;return F(p,createMediapipeSolutionsWasm(Module),6);case 6:e.h=p.h;a.l=new OffscreenCanvas(1,1);a.h.canvas=a.l;g=a.h.GL.createContext(a.l,{antialias:!1,
alpha:!1,na:"undefined"!==typeof WebGL2RenderingContext?2:1});a.h.GL.makeContextCurrent(g);p.g=4;break;case 7:a.l=document.createElement("canvas");r=a.l.getContext("webgl2",{});if(!r&&(r=a.l.getContext("webgl",{}),!r))return alert("Failed to create WebGL canvas context when passing video frame."),p.return();a.G=r;a.h.canvas=a.l;a.h.createContext(a.l,!0,!0,{});case 4:a.i=new a.h.SolutionWasm,a.$=!1,p.g=0;}})}
function Dc(a){var b,c,d,e,g,f,h,k;return I(function(l){if(1==l.g){if(a.g.graph&&a.g.graph.url&&a.Z===a.g.graph.url)return l.return();a.s=!0;if(!a.g.graph||!a.g.graph.url){l.g=2;return}a.Z=a.g.graph.url;return F(l,Cc(a,a.g.graph.url),3)}2!=l.g&&(b=l.h,a.i.loadGraph(b));c=C(Object.keys(a.C));for(d=c.next();!d.done;d=c.next())e=d.value,a.i.overrideFile(e,a.C[e]);a.C={};if(a.g.listeners)for(g=C(a.g.listeners),f=g.next();!f.done;f=g.next())h=f.value,Ec(a,h);k=a.j;a.j={};a.setOptions(k);l.g=0;})}
x.reset=function(){var a=this;return I(function(b){a.i&&(a.i.reset(),a.o={},a.u={});b.g=0;})};
x.setOptions=function(a,b){var c=this;if(b=b||this.g.options){for(var d=[],e=[],g={},f=C(Object.keys(a)),h=f.next();!h.done;g={R:g.R,S:g.S},h=f.next()){var k=h.value;k in this.j&&this.j[k]===a[k]||(this.j[k]=a[k],h=b[k],void 0!==h&&(h.onChange&&(g.R=h.onChange,g.S=a[k],d.push(function(l){return function(){var m;return I(function(r){if(1==r.g)return F(r,l.R(l.S),2);m=r.h;!0===m&&(c.s=!0);r.g=0;})}}(g))),h.graphOptionXref&&(k={valueNumber:1===h.type?a[k]:0,valueBoolean:0===h.type?a[k]:!1,valueString:2===
h.type?a[k]:""},h=Object.assign(Object.assign(Object.assign({},{calculatorName:"",calculatorIndex:0}),h.graphOptionXref),k),e.push(h))));}if(0!==d.length||0!==e.length)this.s=!0,this.B=(void 0===this.B?[]:this.B).concat(e),this.A=(void 0===this.A?[]:this.A).concat(d);}};
function Fc(a){var b,c,d,e,g,f,h;return I(function(k){switch(k.g){case 1:if(!a.s)return k.return();if(!a.A){k.g=2;break}b=C(a.A);c=b.next();case 3:if(c.done){k.g=5;break}d=c.value;return F(k,d(),4);case 4:c=b.next();k.g=3;break;case 5:a.A=void 0;case 2:if(a.B){e=new a.h.GraphOptionChangeRequestList;g=C(a.B);for(f=g.next();!f.done;f=g.next())h=f.value,e.push_back(h);a.i.changeOptions(e);e.delete();a.B=void 0;}a.s=!1;k.g=0;}})}
x.initialize=function(){var a=this;return I(function(b){return 1==b.g?F(b,Bc(a),2):3!=b.g?F(b,Dc(a),3):F(b,Fc(a),0)})};function Cc(a,b){var c,d;return I(function(e){if(b in a.H)return e.return(a.H[b]);c=a.locateFile(b,"");d=fetch(c).then(function(g){return g.arrayBuffer()});a.H[b]=d;return e.return(d)})}x.overrideFile=function(a,b){this.i?this.i.overrideFile(a,b):this.C[a]=b;};x.clearOverriddenFiles=function(){this.C={};this.i&&this.i.clearOverriddenFiles();};
x.send=function(a,b){var c=this,d,e,g,f,h,k,l,m,r;return I(function(p){switch(p.g){case 1:if(!c.g.inputs)return p.return();d=1E3*(void 0===b||null===b?performance.now():b);return F(p,c.D,2);case 2:return F(p,c.initialize(),3);case 3:e=new c.h.PacketDataList;g=C(Object.keys(a));for(f=g.next();!f.done;f=g.next())if(h=f.value,k=c.g.inputs[h]){a:{var n=a[h];switch(k.type){case "video":var q=c.o[k.stream];q||(q=new rc(c.h,c.G),c.o[k.stream]=q);0===q.l&&(q.l=q.h.createTexture());if("undefined"!==typeof HTMLVideoElement&&
n instanceof HTMLVideoElement){var t=n.videoWidth;var w=n.videoHeight;}else "undefined"!==typeof HTMLImageElement&&n instanceof HTMLImageElement?(t=n.naturalWidth,w=n.naturalHeight):(t=n.width,w=n.height);w={glName:q.l,width:t,height:w};t=q.g;t.canvas.width=w.width;t.canvas.height=w.height;t.activeTexture(t.TEXTURE0);q.h.bindTexture2d(q.l);t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,n);q.h.bindTexture2d(0);q=w;break a;case "detections":q=c.o[k.stream];q||(q=new uc(c.h),c.o[k.stream]=q);
q.data||(q.data=new q.g.DetectionListData);q.data.reset(n.length);for(w=0;w<n.length;++w){t=n[w];var v=q.data,A=v.setBoundingBox,H=w;var E=t.ea;var u=new lc;W(u,1,E.ka);W(u,2,E.la);W(u,3,E.height);W(u,4,E.width);W(u,5,E.rotation);W(u,6,E.ia);E=Vb(u,mc);A.call(v,H,E);if(t.Y)for(v=0;v<t.Y.length;++v){u=t.Y[v];var z=u.visibility?!0:!1;A=q.data;H=A.addNormalizedLandmark;E=w;u=Object.assign(Object.assign({},u),{visibility:z?u.visibility:0});z=new gc;W(z,1,u.x);W(z,2,u.y);W(z,3,u.z);u.visibility&&W(z,4,
u.visibility);u=Vb(z,hc);H.call(A,E,u);}if(t.V)for(v=0;v<t.V.length;++v)A=q.data,H=A.addClassification,E=w,u=t.V[v],z=new bc,W(z,2,u.score),u.index&&W(z,1,u.index),u.label&&W(z,3,u.label),u.displayName&&W(z,4,u.displayName),u=Vb(z,cc),H.call(A,E,u);}q=q.data;break a;default:q={};}}l=q;m=k.stream;switch(k.type){case "video":e.pushTexture2d(Object.assign(Object.assign({},l),{stream:m,timestamp:d}));break;case "detections":r=l;r.stream=m;r.timestamp=d;e.pushDetectionList(r);break;default:throw Error("Unknown input config type: '"+
k.type+"'");}}c.i.send(e);return F(p,c.D,4);case 4:e.delete(),p.g=0;}})};
function Gc(a,b,c){var d,e,g,f,h,k,l,m,r,p,n,q,t,w;return I(function(v){switch(v.g){case 1:if(!c)return v.return(b);d={};e=0;g=C(Object.keys(c));for(f=g.next();!f.done;f=g.next())h=f.value,k=c[h],"string"!==typeof k&&"texture"===k.type&&void 0!==b[k.stream]&&++e;1<e&&(a.I=!1);l=C(Object.keys(c));f=l.next();case 2:if(f.done){v.g=4;break}m=f.value;r=c[m];if("string"===typeof r)return t=d,w=m,F(v,Hc(a,m,b[r]),14);p=b[r.stream];if("detection_list"===r.type){if(p){var A=p.getRectList();for(var H=p.getLandmarksList(),
E=p.getClassificationsList(),u=[],z=0;z<A.size();++z){var P=Ub(A.get(z),lc,mc);P={ea:{ka:X(P,1),la:X(P,2),height:X(P,3),width:X(P,4),rotation:X(P,5,0),ia:kb(P,6)},Y:ib(Ub(H.get(z),ic,kc),gc,1).map(pc),V:oc(Ub(E.get(z),dc,fc))};u.push(P);}A=u;}else A=[];d[m]=A;v.g=7;break}if("proto_list"===r.type){if(p){A=Array(p.size());for(H=0;H<p.size();H++)A[H]=p.get(H);p.delete();}else A=[];d[m]=A;v.g=7;break}if(void 0===p){v.g=3;break}if("float_list"===r.type){d[m]=p;v.g=7;break}if("proto"===r.type){d[m]=p;v.g=
7;break}if("texture"!==r.type)throw Error("Unknown output config type: '"+r.type+"'");n=a.u[m];n||(n=new rc(a.h,a.G),a.u[m]=n);return F(v,sc(n,p,a.I),13);case 13:q=v.h,d[m]=q;case 7:r.transform&&d[m]&&(d[m]=r.transform(d[m]));v.g=3;break;case 14:t[w]=v.h;case 3:f=l.next();v.g=2;break;case 4:return v.return(d)}})}
function Hc(a,b,c){var d;return I(function(e){return "number"===typeof c||c instanceof Uint8Array||c instanceof a.h.Uint8BlobList?e.return(c):c instanceof a.h.Texture2dDataOut?(d=a.u[b],d||(d=new rc(a.h,a.G),a.u[b]=d),e.return(sc(d,c,a.I))):e.return(void 0)})}
function Ec(a,b){for(var c=b.name||"$",d=[].concat(ea(b.wants)),e=new a.h.StringList,g=C(b.wants),f=g.next();!f.done;f=g.next())e.push_back(f.value);g=a.h.PacketListener.implement({onResults:function(h){for(var k={},l=0;l<b.wants.length;++l)k[d[l]]=h.get(l);var m=a.listeners[c];m&&(a.D=Gc(a,k,b.outs).then(function(r){r=m(r);for(var p=0;p<b.wants.length;++p){var n=k[d[p]];"object"===typeof n&&n.hasOwnProperty&&n.hasOwnProperty("delete")&&n.delete();}r&&(a.D=r);}));}});a.i.attachMultiListener(e,g);e.delete();}
x.onResults=function(a,b){this.listeners[b||"$"]=a;};J("Solution",Ac);J("OptionType",{BOOL:0,NUMBER:1,ma:2,0:"BOOL",1:"NUMBER",2:"STRING"});function Ic(a){void 0===a&&(a=0);return 1===a?"hand_landmark_full.tflite":"hand_landmark_lite.tflite"}
function Jc(a){var b=this;a=a||{};this.g=new Ac({locateFile:a.locateFile,files:function(c){return [{url:"hands_solution_packed_assets_loader.js"},{simd:!1,url:"hands_solution_wasm_bin.js"},{simd:!0,url:"hands_solution_simd_wasm_bin.js"},{data:!0,url:Ic(c.modelComplexity)}]},graph:{url:"hands.binarypb"},inputs:{image:{type:"video",stream:"input_frames_gpu"}},listeners:[{wants:["multi_hand_landmarks","multi_hand_world_landmarks","image_transformed","multi_handedness"],outs:{image:"image_transformed",
multiHandLandmarks:{type:"proto_list",stream:"multi_hand_landmarks",transform:qc},multiHandWorldLandmarks:{type:"proto_list",stream:"multi_hand_world_landmarks",transform:qc},multiHandedness:{type:"proto_list",stream:"multi_handedness",transform:function(c){return c.map(function(d){return oc(Ub(d,dc,fc))[0]})}}}}],options:{useCpuInference:{type:0,graphOptionXref:{calculatorType:"InferenceCalculator",fieldName:"use_cpu_inference"},default:"object"!==typeof window||void 0===window.navigator?!1:"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||
navigator.userAgent.includes("Mac")&&"ontouchend"in document},selfieMode:{type:0,graphOptionXref:{calculatorType:"GlScalerCalculator",calculatorIndex:1,fieldName:"flip_horizontal"}},maxNumHands:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculator",fieldName:"int_value"}},modelComplexity:{type:1,graphOptionXref:{calculatorType:"ConstantSidePacketCalculator",calculatorName:"ConstantSidePacketCalculatorModelComplexity",fieldName:"int_value"},
onChange:function(c){var d,e,g;return I(function(f){if(1==f.g)return d=Ic(c),e="third_party/mediapipe/modules/hand_landmark/"+d,F(f,Cc(b.g,d),2);g=f.h;b.g.overrideFile(e,g);return f.return(!0)})}},minDetectionConfidence:{type:1,graphOptionXref:{calculatorType:"TensorsToDetectionsCalculator",calculatorName:"handlandmarktrackinggpu__palmdetectiongpu__TensorsToDetectionsCalculator",fieldName:"min_score_thresh"}},minTrackingConfidence:{type:1,graphOptionXref:{calculatorType:"ThresholdingCalculator",calculatorName:"handlandmarktrackinggpu__handlandmarkgpu__ThresholdingCalculator",
fieldName:"threshold"}}}});}x=Jc.prototype;x.close=function(){this.g.close();return Promise.resolve()};x.onResults=function(a){this.g.onResults(a);};x.initialize=function(){var a=this;return I(function(b){return F(b,a.g.initialize(),0)})};x.reset=function(){this.g.reset();};x.send=function(a){var b=this;return I(function(c){return F(c,b.g.send(a),0)})};x.setOptions=function(a){this.g.setOptions(a);};J("Hands",Jc);
J("HAND_CONNECTIONS",[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]]);J("VERSION","0.4.1646424915");}).call(commonjsGlobal);

(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
function n(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}var q="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,e){if(a==Array.prototype||a==Object.prototype)return a;a[b]=e.value;return a};
function t(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof commonjsGlobal&&commonjsGlobal];for(var b=0;b<a.length;++b){var e=a[b];if(e&&e.Math==Math)return e}throw Error("Cannot find global object");}var u=t(this);function v(a,b){if(b)a:{var e=u;a=a.split(".");for(var f=0;f<a.length-1;f++){var h=a[f];if(!(h in e))break a;e=e[h];}a=a[a.length-1];f=e[a];b=b(f);b!=f&&null!=b&&q(e,a,{configurable:!0,writable:!0,value:b});}}
v("Symbol",function(a){function b(l){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new e(f+(l||"")+"_"+h++,l)}function e(l,c){this.g=l;q(this,"description",{configurable:!0,writable:!0,value:c});}if(a)return a;e.prototype.toString=function(){return this.g};var f="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",h=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),e=0;e<b.length;e++){var f=u[b[e]];"function"===typeof f&&"function"!=typeof f.prototype[a]&&q(f.prototype,a,{configurable:!0,writable:!0,value:function(){return w(n(this))}});}return a});function w(a){a={next:a};a[Symbol.iterator]=function(){return this};return a}
function x(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:n(a)}}function y(){this.i=!1;this.g=null;this.o=void 0;this.j=1;this.m=0;this.h=null;}function z(a){if(a.i)throw new TypeError("Generator is already running");a.i=!0;}y.prototype.l=function(a){this.o=a;};function A(a,b){a.h={F:b,G:!0};a.j=a.m;}y.prototype.return=function(a){this.h={return:a};this.j=this.m;};function B(a){this.g=new y;this.h=a;}
function C(a,b){z(a.g);var e=a.g.g;if(e)return D(a,"return"in e?e["return"]:function(f){return {value:f,done:!0}},b,a.g.return);a.g.return(b);return H(a)}function D(a,b,e,f){try{var h=b.call(a.g.g,e);if(!(h instanceof Object))throw new TypeError("Iterator result "+h+" is not an object");if(!h.done)return a.g.i=!1,h;var l=h.value;}catch(c){return a.g.g=null,A(a.g,c),H(a)}a.g.g=null;f.call(a.g,l);return H(a)}
function H(a){for(;a.g.j;)try{var b=a.h(a.g);if(b)return a.g.i=!1,{value:b.value,done:!1}}catch(e){a.g.o=void 0,A(a.g,e);}a.g.i=!1;if(a.g.h){b=a.g.h;a.g.h=null;if(b.G)throw b.F;return {value:b.return,done:!0}}return {value:void 0,done:!0}}
function I(a){this.next=function(b){z(a.g);a.g.g?b=D(a,a.g.g.next,b,a.g.l):(a.g.l(b),b=H(a));return b};this.throw=function(b){z(a.g);a.g.g?b=D(a,a.g.g["throw"],b,a.g.l):(A(a.g,b),b=H(a));return b};this.return=function(b){return C(a,b)};this[Symbol.iterator]=function(){return this};}function J(a){function b(f){return a.next(f)}function e(f){return a.throw(f)}return new Promise(function(f,h){function l(c){c.done?f(c.value):Promise.resolve(c.value).then(b,e).then(l,h);}l(a.next());})}
v("Promise",function(a){function b(c){this.h=0;this.i=void 0;this.g=[];this.o=!1;var d=this.j();try{c(d.resolve,d.reject);}catch(g){d.reject(g);}}function e(){this.g=null;}function f(c){return c instanceof b?c:new b(function(d){d(c);})}if(a)return a;e.prototype.h=function(c){if(null==this.g){this.g=[];var d=this;this.i(function(){d.l();});}this.g.push(c);};var h=u.setTimeout;e.prototype.i=function(c){h(c,0);};e.prototype.l=function(){for(;this.g&&this.g.length;){var c=this.g;this.g=[];for(var d=0;d<c.length;++d){var g=
c[d];c[d]=null;try{g();}catch(k){this.j(k);}}}this.g=null;};e.prototype.j=function(c){this.i(function(){throw c;});};b.prototype.j=function(){function c(k){return function(m){g||(g=!0,k.call(d,m));}}var d=this,g=!1;return {resolve:c(this.A),reject:c(this.l)}};b.prototype.A=function(c){if(c===this)this.l(new TypeError("A Promise cannot resolve to itself"));else if(c instanceof b)this.C(c);else {a:switch(typeof c){case "object":var d=null!=c;break a;case "function":d=!0;break a;default:d=!1;}d?this.v(c):this.m(c);}};
b.prototype.v=function(c){var d=void 0;try{d=c.then;}catch(g){this.l(g);return}"function"==typeof d?this.D(d,c):this.m(c);};b.prototype.l=function(c){this.u(2,c);};b.prototype.m=function(c){this.u(1,c);};b.prototype.u=function(c,d){if(0!=this.h)throw Error("Cannot settle("+c+", "+d+"): Promise already settled in state"+this.h);this.h=c;this.i=d;2===this.h&&this.B();this.H();};b.prototype.B=function(){var c=this;h(function(){if(c.I()){var d=u.console;"undefined"!==typeof d&&d.error(c.i);}},1);};b.prototype.I=
function(){if(this.o)return !1;var c=u.CustomEvent,d=u.Event,g=u.dispatchEvent;if("undefined"===typeof g)return !0;"function"===typeof c?c=new c("unhandledrejection",{cancelable:!0}):"function"===typeof d?c=new d("unhandledrejection",{cancelable:!0}):(c=u.document.createEvent("CustomEvent"),c.initCustomEvent("unhandledrejection",!1,!0,c));c.promise=this;c.reason=this.i;return g(c)};b.prototype.H=function(){if(null!=this.g){for(var c=0;c<this.g.length;++c)l.h(this.g[c]);this.g=null;}};var l=new e;b.prototype.C=
function(c){var d=this.j();c.s(d.resolve,d.reject);};b.prototype.D=function(c,d){var g=this.j();try{c.call(d,g.resolve,g.reject);}catch(k){g.reject(k);}};b.prototype.then=function(c,d){function g(p,r){return "function"==typeof p?function(E){try{k(p(E));}catch(F){m(F);}}:r}var k,m,G=new b(function(p,r){k=p;m=r;});this.s(g(c,k),g(d,m));return G};b.prototype.catch=function(c){return this.then(void 0,c)};b.prototype.s=function(c,d){function g(){switch(k.h){case 1:c(k.i);break;case 2:d(k.i);break;default:throw Error("Unexpected state: "+
k.h);}}var k=this;null==this.g?l.h(g):this.g.push(g);this.o=!0;};b.resolve=f;b.reject=function(c){return new b(function(d,g){g(c);})};b.race=function(c){return new b(function(d,g){for(var k=x(c),m=k.next();!m.done;m=k.next())f(m.value).s(d,g);})};b.all=function(c){var d=x(c),g=d.next();return g.done?f([]):new b(function(k,m){function G(E){return function(F){p[E]=F;r--;0==r&&k(p);}}var p=[],r=0;do p.push(void 0),r++,f(g.value).s(G(p.length-1),m),g=d.next();while(!g.done)})};return b});
var K="function"==typeof Object.assign?Object.assign:function(a,b){for(var e=1;e<arguments.length;e++){var f=arguments[e];if(f)for(var h in f)Object.prototype.hasOwnProperty.call(f,h)&&(a[h]=f[h]);}return a};v("Object.assign",function(a){return a||K});var L=this||self;var M={facingMode:"user",width:640,height:480};function N(a,b){this.video=a;this.i=0;this.h=Object.assign(Object.assign({},M),b);}N.prototype.stop=function(){var a=this,b,e,f,h;return J(new I(new B(function(l){if(a.g){b=a.g.getTracks();e=x(b);for(f=e.next();!f.done;f=e.next())h=f.value,h.stop();a.g=void 0;}l.j=0;})))};
N.prototype.start=function(){var a=this,b;return J(new I(new B(function(e){navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||alert("No navigator.mediaDevices.getUserMedia exists.");b=a.h;return e.return(navigator.mediaDevices.getUserMedia({video:{facingMode:b.facingMode,width:b.width,height:b.height}}).then(function(f){O(a,f);}).catch(function(f){var h="Failed to acquire camera feed: "+f;console.error(h);alert(h);throw f;}))})))};
function P(a){window.requestAnimationFrame(function(){Q(a);});}function O(a,b){a.g=b;a.video.srcObject=b;a.video.onloadedmetadata=function(){a.video.play();P(a);};}function Q(a){var b=null;a.video.paused||a.video.currentTime===a.i||(a.i=a.video.currentTime,b=a.h.onFrame());b?b.then(function(){P(a);}):P(a);}var R=["Camera"],S=L;R[0]in S||"undefined"==typeof S.execScript||S.execScript("var "+R[0]);
for(var T;R.length&&(T=R.shift());)R.length||void 0===N?S[T]&&S[T]!==Object.prototype[T]?S=S[T]:S=S[T]={}:S[T]=N;}).call(commonjsGlobal);

(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
function h(a){var c=0;return function(){return c<a.length?{done:!1,value:a[c++]}:{done:!0}}}var l="function"==typeof Object.defineProperties?Object.defineProperty:function(a,c,b){if(a==Array.prototype||a==Object.prototype)return a;a[c]=b.value;return a};
function m(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof commonjsGlobal&&commonjsGlobal];for(var c=0;c<a.length;++c){var b=a[c];if(b&&b.Math==Math)return b}throw Error("Cannot find global object");}var n=m(this);function p(a,c){if(c)a:{var b=n;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in b))break a;b=b[e];}a=a[a.length-1];d=b[a];c=c(d);c!=d&&null!=c&&l(b,a,{configurable:!0,writable:!0,value:c});}}
function q(a){var c="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return c?c.call(a):{next:h(a)}}var r="function"==typeof Object.assign?Object.assign:function(a,c){for(var b=1;b<arguments.length;b++){var d=arguments[b];if(d)for(var e in d)Object.prototype.hasOwnProperty.call(d,e)&&(a[e]=d[e]);}return a};p("Object.assign",function(a){return a||r});
p("Array.prototype.fill",function(a){return a?a:function(c,b,d){var e=this.length||0;0>b&&(b=Math.max(0,e+b));if(null==d||d>e)d=e;d=Number(d);0>d&&(d=Math.max(0,e+d));for(b=Number(b||0);b<d;b++)this[b]=c;return this}});function t(a){return a?a:Array.prototype.fill}p("Int8Array.prototype.fill",t);p("Uint8Array.prototype.fill",t);p("Uint8ClampedArray.prototype.fill",t);p("Int16Array.prototype.fill",t);p("Uint16Array.prototype.fill",t);p("Int32Array.prototype.fill",t);
p("Uint32Array.prototype.fill",t);p("Float32Array.prototype.fill",t);p("Float64Array.prototype.fill",t);var u=this||self;function v(a,c){a=a.split(".");var b=u;a[0]in b||"undefined"==typeof b.execScript||b.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===c?b[d]&&b[d]!==Object.prototype[d]?b=b[d]:b=b[d]={}:b[d]=c;}var w={color:"white",lineWidth:4,radius:6,visibilityMin:.5};function x(a){a=a||{};return Object.assign(Object.assign(Object.assign({},w),{fillColor:a.color}),a)}function y(a,c){return a instanceof Function?a(c):a}function z(a,c,b){return Math.max(Math.min(c,b),Math.min(Math.max(c,b),a))}v("clamp",z);
v("drawLandmarks",function(a,c,b){if(c){b=x(b);a.save();var d=a.canvas,e=0;c=q(c);for(var f=c.next();!f.done;f=c.next())if(f=f.value,void 0!==f&&(void 0===f.visibility||f.visibility>b.visibilityMin)){a.fillStyle=y(b.fillColor,{index:e,from:f});a.strokeStyle=y(b.color,{index:e,from:f});a.lineWidth=y(b.lineWidth,{index:e,from:f});var g=new Path2D;g.arc(f.x*d.width,f.y*d.height,y(b.radius,{index:e,from:f}),0,2*Math.PI);a.fill(g);a.stroke(g);++e;}a.restore();}});
v("drawConnectors",function(a,c,b,d){if(c&&b){d=x(d);a.save();var e=a.canvas,f=0;b=q(b);for(var g=b.next();!g.done;g=b.next()){var k=g.value;a.beginPath();g=c[k[0]];k=c[k[1]];g&&k&&(void 0===g.visibility||g.visibility>d.visibilityMin)&&(void 0===k.visibility||k.visibility>d.visibilityMin)&&(a.strokeStyle=y(d.color,{index:f,from:g,to:k}),a.lineWidth=y(d.lineWidth,{index:f,from:g,to:k}),a.moveTo(g.x*e.width,g.y*e.height),a.lineTo(k.x*e.width,k.y*e.height));++f;a.stroke();}a.restore();}});
v("drawRectangle",function(a,c,b){b=x(b);a.save();var d=a.canvas;a.beginPath();a.lineWidth=y(b.lineWidth,{});a.strokeStyle=y(b.color,{});a.fillStyle=y(b.fillColor,{});a.translate(c.xCenter*d.width,c.yCenter*d.height);a.rotate(c.rotation*Math.PI/180);a.rect(-c.width/2*d.width,-c.height/2*d.height,c.width*d.width,c.height*d.height);a.translate(-c.xCenter*d.width,-c.yCenter*d.height);a.stroke();a.fill();a.restore();});v("lerp",function(a,c,b,d,e){return z(d*(1-(a-c)/(b-c))+e*(1-(b-a)/(b-c)),d,e)});}).call(commonjsGlobal);

function defaultArg(a,b) {
  return "undefined" == typeof a ? b : a;
}
function isString(v) {
  return (typeof v == "string") || (v instanceof String);
}
function stripClass(node, className) {
  node.className = node.className.replace(new RegExp('(?:^|\\s)' + className + '(?!\\S)'), '');
}
function addClass(node, className) {
  if (node.className.indexOf(className) == -1)
    node.className += " " + className;
}
function createElement(type, args) {
  var element = document.createElement(type);
  for (var i = 0; i < args.length; ++i) {
    if (isString(args[i]))
      addClass(element, args[i]);
    else
      element.appendChild(args[i]);
  }
  return element;
}
function  div(...args) { return createElement( "div", args); }

class ButtonGroup {
  constructor(targetId, labels, selectionCallback) {
    this.selectionCallback = selectionCallback;
    this.selectedButton = 0;

    var target = isString(targetId) ? document.getElementById(targetId) : targetId;
    if (!target)
      return;

    this.group = document.createElement("div");
    this.group.className = "button-group-horz";
    this.buttons = [];

    for (var i = 0; i < labels.length; ++i) {
      var button = document.createElement("div");
      button.className = "button-horz";
      button.appendChild(document.createTextNode(labels[i]));

      this.buttons.push(button);
      this.group.appendChild(button);

      button.addEventListener("click", function (idx, event) {
        this.select(idx);
      }.bind(this, i));
    }
    this.select(0);

    target.parentNode.replaceChild(this.group, target);
  }

  getActiveButton() {
    return this.selectedButton;
  }

  select(idx) {
    if (idx < 0 || idx >= this.buttons.length)
      return;

    stripClass(this.buttons[this.selectedButton], "active");
    addClass(this.buttons[idx], "active");

    if (this.selectedButton != idx && this.selectionCallback)
      this.selectionCallback(idx);
    this.selectedButton = idx;
  }
}

/*
  lightgl.js vector class
  https://github.com/evanw/lightgl.js/

  Copyright (C) 2011 by Evan Wallace

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/

// Provides a simple 3D vector class. Vector operations can be done using member
// functions, which return new vectors, or static functions, which reuse
// existing vectors to avoid generating garbage.
class Vector {
  constructor(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
  }

  negative() {
    return new Vector(-this.x, -this.y, -this.z);
  }

  add(v) {
    if (v instanceof Vector)
      return new Vector(this.x + v.x, this.y + v.y, this.z + v.z);
    else
      return new Vector(this.x + v, this.y + v, this.z + v);
  }

  subtract(v) {
    if (v instanceof Vector)
      return new Vector(this.x - v.x, this.y - v.y, this.z - v.z);
    else
      return new Vector(this.x - v, this.y - v, this.z - v);
  }

  multiply(v) {
    if (v instanceof Vector)
      return new Vector(this.x * v.x, this.y * v.y, this.z * v.z);
    else
      return new Vector(this.x * v, this.y * v, this.z * v);
  }

  divide(v) {
    if (v instanceof Vector)
      return new Vector(this.x / v.x, this.y / v.y, this.z / v.z);
    else
      return new Vector(this.x / v, this.y / v, this.z / v);
  }

  equals(v) {
    return this.x == v.x && this.y == v.y && this.z == v.z;
  }

  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  cross(v) {
    return new Vector(
      this.y * v.z - this.z * v.y,
      this.z * v.x - this.x * v.z,
      this.x * v.y - this.y * v.x
    );
  }

  length() {
    return Math.sqrt(this.dot(this));
  }

  unit() {
    return this.divide(this.length());
  }

  min() {
    return Math.min(Math.min(this.x, this.y), this.z);
  }

  max() {
    return Math.max(Math.max(this.x, this.y), this.z);
  }

  toAngles() {
    return {
      theta: Math.atan2(this.z, this.x),
      phi: Math.asin(this.y / this.length())
    };
  }

  angleTo(a) {
    return Math.acos(this.dot(a) / (this.length() * a.length()));
  }

  toArray(n) {
    return [this.x, this.y, this.z].slice(0, n || 3);
  }

  clone() {
    return new Vector(this.x, this.y, this.z);
  }

  init(x, y, z) {
    this.x = x; this.y = y; this.z = z;
    return this;
  }

  // `Vector.randomDirection()` returns a vector with a length of 1 and a
  // statistically uniform direction. `Vector.lerp()` performs linear
  // interpolation between two vectors.
  static negative(a, b) {
    b.x = -a.x; b.y = -a.y; b.z = -a.z;
    return b;
  }

  static add(a, b, c) {
    if (b instanceof Vector) { c.x = a.x + b.x; c.y = a.y + b.y; c.z = a.z + b.z; }
    else { c.x = a.x + b; c.y = a.y + b; c.z = a.z + b; }
    return c;
  }

  static subtract(a, b, c) {
    if (b instanceof Vector) { c.x = a.x - b.x; c.y = a.y - b.y; c.z = a.z - b.z; }
    else { c.x = a.x - b; c.y = a.y - b; c.z = a.z - b; }
    return c;
  }

  static multiply(a, b, c) {
    if (b instanceof Vector) { c.x = a.x * b.x; c.y = a.y * b.y; c.z = a.z * b.z; }
    else { c.x = a.x * b; c.y = a.y * b; c.z = a.z * b; }
    return c;
  }

  static divide(a, b, c) {
    if (b instanceof Vector) { c.x = a.x / b.x; c.y = a.y / b.y; c.z = a.z / b.z; }
    else { c.x = a.x / b; c.y = a.y / b; c.z = a.z / b; }
    return c;
  }

  static cross(a, b, c) {
    c.x = a.y * b.z - a.z * b.y;
    c.y = a.z * b.x - a.x * b.z;
    c.z = a.x * b.y - a.y * b.x;
    return c;
  }

  static unit(a, b) {
    var length = a.length();
    b.x = a.x / length;
    b.y = a.y / length;
    b.z = a.z / length;
    return b;
  }

  static fromAngles(theta, phi) {
    return new Vector(Math.cos(theta) * Math.cos(phi), Math.sin(phi), Math.sin(theta) * Math.cos(phi));
  }

  static randomDirection() {
    return Vector.fromAngles(Math.random() * Math.PI * 2, Math.asin(Math.random() * 2 - 1));
  }

  static min(a, b) {
    return new Vector(Math.min(a.x, b.x), Math.min(a.y, b.y), Math.min(a.z, b.z));
  }

  static max(a, b) {
    return new Vector(Math.max(a.x, b.x), Math.max(a.y, b.y), Math.max(a.z, b.z));
  }

  static lerp(a, b, fraction) {
    return b.subtract(a).multiply(fraction).add(a);
  }

  static fromArray(a) {
    return new Vector(a[0], a[1], a[2]);
  }

  static angleBetween(a, b) {
    return a.angleTo(b);
  }
}

/*
  lightgl.js matrix class
  https://github.com/evanw/lightgl.js/

  Copyright (C) 2011 by Evan Wallace

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
*/

var hasFloat32Array = (typeof Float32Array != 'undefined');

// ### new GL.Matrix([elements])
//
// This constructor takes 16 arguments in row-major order, which can be passed
// individually, as a list, or even as four lists, one for each row. If the
// arguments are omitted then the identity matrix is constructed instead.
class Matrix {
  constructor() {
    var m = Array.prototype.concat.apply([], arguments);
    if (!m.length) {
      m = [
        1, 0, 0, 0,
        0, 1, 0, 0,
        0, 0, 1, 0,
        0, 0, 0, 1
      ];
    }
    this.m = hasFloat32Array ? new Float32Array(m) : m;
  }

  // ### .inverse()
  //
  // Returns the matrix that when multiplied with this matrix results in the
  // identity matrix.
  inverse() {
    return Matrix.inverse(this, new Matrix());
  }

  // ### .transpose()
  //
  // Returns this matrix, exchanging columns for rows.
  transpose() {
    return Matrix.transpose(this, new Matrix());
  }

  // ### .multiply(matrix)
  //
  // Returns the concatenation of the transforms for this matrix and `matrix`.
  // This emulates the OpenGL function `glMultMatrix()`.
  multiply(matrix) {
    return Matrix.multiply(this, matrix, new Matrix());
  }

  // ### .transformPoint(point)
  //
  // Transforms the vector as a point with a w coordinate of 1. This
  // means translations will have an effect, for example.
  transformPoint(v) {
    var m = this.m;
    return new Vector(
      m[0] * v.x + m[1] * v.y + m[2] * v.z + m[3],
      m[4] * v.x + m[5] * v.y + m[6] * v.z + m[7],
      m[8] * v.x + m[9] * v.y + m[10] * v.z + m[11]
    ).divide(m[12] * v.x + m[13] * v.y + m[14] * v.z + m[15]);
  }

  // ### .transformPoint(vector)
  //
  // Transforms the vector as a vector with a w coordinate of 0. This
  // means translations will have no effect, for example.
  transformVector(v) {
    var m = this.m;
    return new Vector(
      m[0] * v.x + m[1] * v.y + m[2] * v.z,
      m[4] * v.x + m[5] * v.y + m[6] * v.z,
      m[8] * v.x + m[9] * v.y + m[10] * v.z
    );
  }

  // ### GL.Matrix.inverse(matrix[, result])
  //
  // Returns the matrix that when multiplied with `matrix` results in the
  // identity matrix. You can optionally pass an existing matrix in `result`
  // to avoid allocating a new matrix. This implementation is from the Mesa
  // OpenGL function `__gluInvertMatrixd()` found in `project.c`.
  static inverse(matrix, result) {
    result = result || new Matrix();
    var m = matrix.m, r = result.m;

    r[0] = m[5] * m[10] * m[15] - m[5] * m[14] * m[11] - m[6] * m[9] * m[15] + m[6] * m[13] * m[11] + m[7] * m[9] * m[14] - m[7] * m[13] * m[10];
    r[1] = -m[1] * m[10] * m[15] + m[1] * m[14] * m[11] + m[2] * m[9] * m[15] - m[2] * m[13] * m[11] - m[3] * m[9] * m[14] + m[3] * m[13] * m[10];
    r[2] = m[1] * m[6] * m[15] - m[1] * m[14] * m[7] - m[2] * m[5] * m[15] + m[2] * m[13] * m[7] + m[3] * m[5] * m[14] - m[3] * m[13] * m[6];
    r[3] = -m[1] * m[6] * m[11] + m[1] * m[10] * m[7] + m[2] * m[5] * m[11] - m[2] * m[9] * m[7] - m[3] * m[5] * m[10] + m[3] * m[9] * m[6];

    r[4] = -m[4] * m[10] * m[15] + m[4] * m[14] * m[11] + m[6] * m[8] * m[15] - m[6] * m[12] * m[11] - m[7] * m[8] * m[14] + m[7] * m[12] * m[10];
    r[5] = m[0] * m[10] * m[15] - m[0] * m[14] * m[11] - m[2] * m[8] * m[15] + m[2] * m[12] * m[11] + m[3] * m[8] * m[14] - m[3] * m[12] * m[10];
    r[6] = -m[0] * m[6] * m[15] + m[0] * m[14] * m[7] + m[2] * m[4] * m[15] - m[2] * m[12] * m[7] - m[3] * m[4] * m[14] + m[3] * m[12] * m[6];
    r[7] = m[0] * m[6] * m[11] - m[0] * m[10] * m[7] - m[2] * m[4] * m[11] + m[2] * m[8] * m[7] + m[3] * m[4] * m[10] - m[3] * m[8] * m[6];

    r[8] = m[4] * m[9] * m[15] - m[4] * m[13] * m[11] - m[5] * m[8] * m[15] + m[5] * m[12] * m[11] + m[7] * m[8] * m[13] - m[7] * m[12] * m[9];
    r[9] = -m[0] * m[9] * m[15] + m[0] * m[13] * m[11] + m[1] * m[8] * m[15] - m[1] * m[12] * m[11] - m[3] * m[8] * m[13] + m[3] * m[12] * m[9];
    r[10] = m[0] * m[5] * m[15] - m[0] * m[13] * m[7] - m[1] * m[4] * m[15] + m[1] * m[12] * m[7] + m[3] * m[4] * m[13] - m[3] * m[12] * m[5];
    r[11] = -m[0] * m[5] * m[11] + m[0] * m[9] * m[7] + m[1] * m[4] * m[11] - m[1] * m[8] * m[7] - m[3] * m[4] * m[9] + m[3] * m[8] * m[5];

    r[12] = -m[4] * m[9] * m[14] + m[4] * m[13] * m[10] + m[5] * m[8] * m[14] - m[5] * m[12] * m[10] - m[6] * m[8] * m[13] + m[6] * m[12] * m[9];
    r[13] = m[0] * m[9] * m[14] - m[0] * m[13] * m[10] - m[1] * m[8] * m[14] + m[1] * m[12] * m[10] + m[2] * m[8] * m[13] - m[2] * m[12] * m[9];
    r[14] = -m[0] * m[5] * m[14] + m[0] * m[13] * m[6] + m[1] * m[4] * m[14] - m[1] * m[12] * m[6] - m[2] * m[4] * m[13] + m[2] * m[12] * m[5];
    r[15] = m[0] * m[5] * m[10] - m[0] * m[9] * m[6] - m[1] * m[4] * m[10] + m[1] * m[8] * m[6] + m[2] * m[4] * m[9] - m[2] * m[8] * m[5];

    var det = m[0] * r[0] + m[1] * r[4] + m[2] * r[8] + m[3] * r[12];
    for (var i = 0; i < 16; i++)
      r[i] /= det;
    return result;
  }

  // ### GL.Matrix.transpose(matrix[, result])
  //
  // Returns `matrix`, exchanging columns for rows. You can optionally pass an
  // existing matrix in `result` to avoid allocating a new matrix.
  static transpose(matrix, result) {
    result = result || new Matrix();
    var m = matrix.m, r = result.m;
    r[0] = m[0]; r[1] = m[4]; r[2] = m[8]; r[3] = m[12];
    r[4] = m[1]; r[5] = m[5]; r[6] = m[9]; r[7] = m[13];
    r[8] = m[2]; r[9] = m[6]; r[10] = m[10]; r[11] = m[14];
    r[12] = m[3]; r[13] = m[7]; r[14] = m[11]; r[15] = m[15];
    return result;
  }

  // ### GL.Matrix.multiply(left, right[, result])
  //
  // Returns the concatenation of the transforms for `left` and `right`. You can
  // optionally pass an existing matrix in `result` to avoid allocating a new
  // matrix. This emulates the OpenGL function `glMultMatrix()`.
  static multiply(left, right, result) {
    result = result || new Matrix();
    var a = left.m, b = right.m, r = result.m;

    r[0] = a[0] * b[0] + a[1] * b[4] + a[2] * b[8] + a[3] * b[12];
    r[1] = a[0] * b[1] + a[1] * b[5] + a[2] * b[9] + a[3] * b[13];
    r[2] = a[0] * b[2] + a[1] * b[6] + a[2] * b[10] + a[3] * b[14];
    r[3] = a[0] * b[3] + a[1] * b[7] + a[2] * b[11] + a[3] * b[15];

    r[4] = a[4] * b[0] + a[5] * b[4] + a[6] * b[8] + a[7] * b[12];
    r[5] = a[4] * b[1] + a[5] * b[5] + a[6] * b[9] + a[7] * b[13];
    r[6] = a[4] * b[2] + a[5] * b[6] + a[6] * b[10] + a[7] * b[14];
    r[7] = a[4] * b[3] + a[5] * b[7] + a[6] * b[11] + a[7] * b[15];

    r[8] = a[8] * b[0] + a[9] * b[4] + a[10] * b[8] + a[11] * b[12];
    r[9] = a[8] * b[1] + a[9] * b[5] + a[10] * b[9] + a[11] * b[13];
    r[10] = a[8] * b[2] + a[9] * b[6] + a[10] * b[10] + a[11] * b[14];
    r[11] = a[8] * b[3] + a[9] * b[7] + a[10] * b[11] + a[11] * b[15];

    r[12] = a[12] * b[0] + a[13] * b[4] + a[14] * b[8] + a[15] * b[12];
    r[13] = a[12] * b[1] + a[13] * b[5] + a[14] * b[9] + a[15] * b[13];
    r[14] = a[12] * b[2] + a[13] * b[6] + a[14] * b[10] + a[15] * b[14];
    r[15] = a[12] * b[3] + a[13] * b[7] + a[14] * b[11] + a[15] * b[15];

    return result;
  }

  // ### GL.Matrix.identity([result])
  //
  // Returns an identity matrix. You can optionally pass an existing matrix in
  // `result` to avoid allocating a new matrix. This emulates the OpenGL function
  // `glLoadIdentity()`.
  static identity(result) {
    result = result || new Matrix();
    var m = result.m;
    m[0] = m[5] = m[10] = m[15] = 1;
    m[1] = m[2] = m[3] = m[4] = m[6] = m[7] = m[8] = m[9] = m[11] = m[12] = m[13] = m[14] = 0;
    return result;
  }

  // ### GL.Matrix.perspective(fov, aspect, near, far[, result])
  //
  // Returns a perspective transform matrix, which makes far away objects appear
  // smaller than nearby objects. The `aspect` argument should be the width
  // divided by the height of your viewport and `fov` is the top-to-bottom angle
  // of the field of view in degrees. You can optionally pass an existing matrix
  // in `result` to avoid allocating a new matrix. This emulates the OpenGL
  // function `gluPerspective()`.
  static perspective(fov, aspect, near, far, result) {
    var y = Math.tan(fov * Math.PI / 360) * near;
    var x = y * aspect;
    return Matrix.frustum(-x, x, -y, y, near, far, result);
  }

  // ### GL.Matrix.frustum(left, right, bottom, top, near, far[, result])
  //
  // Sets up a viewing frustum, which is shaped like a truncated pyramid with the
  // camera where the point of the pyramid would be. You can optionally pass an
  // existing matrix in `result` to avoid allocating a new matrix. This emulates
  // the OpenGL function `glFrustum()`.
  static frustum(l, r, b, t, n, f, result) {
    result = result || new Matrix();
    var m = result.m;

    m[0] = 2 * n / (r - l);
    m[1] = 0;
    m[2] = (r + l) / (r - l);
    m[3] = 0;

    m[4] = 0;
    m[5] = 2 * n / (t - b);
    m[6] = (t + b) / (t - b);
    m[7] = 0;

    m[8] = 0;
    m[9] = 0;
    m[10] = -(f + n) / (f - n);
    m[11] = -2 * f * n / (f - n);

    m[12] = 0;
    m[13] = 0;
    m[14] = -1;
    m[15] = 0;

    return result;
  }

  // ### GL.Matrix.ortho(left, right, bottom, top, near, far[, result])
  //
  // Returns an orthographic projection, in which objects are the same size no
  // matter how far away or nearby they are. You can optionally pass an existing
  // matrix in `result` to avoid allocating a new matrix. This emulates the OpenGL
  // function `glOrtho()`.
  static ortho(l, r, b, t, n, f, result) {
    result = result || new Matrix();
    var m = result.m;

    m[0] = 2 / (r - l);
    m[1] = 0;
    m[2] = 0;
    m[3] = -(r + l) / (r - l);

    m[4] = 0;
    m[5] = 2 / (t - b);
    m[6] = 0;
    m[7] = -(t + b) / (t - b);

    m[8] = 0;
    m[9] = 0;
    m[10] = -2 / (f - n);
    m[11] = -(f + n) / (f - n);

    m[12] = 0;
    m[13] = 0;
    m[14] = 0;
    m[15] = 1;

    return result;
  }

  // ### GL.Matrix.scale(x, y, z[, result])
  //
  // This emulates the OpenGL function `glScale()`. You can optionally pass an
  // existing matrix in `result` to avoid allocating a new matrix.
  static scale(x, y, z, result) {
    result = result || new Matrix();
    var m = result.m;

    m[0] = x;
    m[1] = 0;
    m[2] = 0;
    m[3] = 0;

    m[4] = 0;
    m[5] = y;
    m[6] = 0;
    m[7] = 0;

    m[8] = 0;
    m[9] = 0;
    m[10] = z;
    m[11] = 0;

    m[12] = 0;
    m[13] = 0;
    m[14] = 0;
    m[15] = 1;

    return result;
  }

  // ### GL.Matrix.translate(x, y, z[, result])
  //
  // This emulates the OpenGL function `glTranslate()`. You can optionally pass
  // an existing matrix in `result` to avoid allocating a new matrix.
  static translate(x, y, z, result) {
    result = result || new Matrix();
    var m = result.m;

    m[0] = 1;
    m[1] = 0;
    m[2] = 0;
    m[3] = x;

    m[4] = 0;
    m[5] = 1;
    m[6] = 0;
    m[7] = y;

    m[8] = 0;
    m[9] = 0;
    m[10] = 1;
    m[11] = z;

    m[12] = 0;
    m[13] = 0;
    m[14] = 0;
    m[15] = 1;

    return result;
  }

  // ### GL.Matrix.rotate(a, x, y, z[, result])
  //
  // Returns a matrix that rotates by `a` degrees around the vector `x, y, z`.
  // You can optionally pass an existing matrix in `result` to avoid allocating
  // a new matrix. This emulates the OpenGL function `glRotate()`.
  static rotate(a, x, y, z, result) {
    if (!a || (!x && !y && !z)) {
      return Matrix.identity(result);
    }

    result = result || new Matrix();
    var m = result.m;

    var d = Math.sqrt(x * x + y * y + z * z);
    a *= Math.PI / 180; x /= d; y /= d; z /= d;
    var c = Math.cos(a), s = Math.sin(a), t = 1 - c;

    m[0] = x * x * t + c;
    m[1] = x * y * t - z * s;
    m[2] = x * z * t + y * s;
    m[3] = 0;

    m[4] = y * x * t + z * s;
    m[5] = y * y * t + c;
    m[6] = y * z * t - x * s;
    m[7] = 0;

    m[8] = z * x * t - y * s;
    m[9] = z * y * t + x * s;
    m[10] = z * z * t + c;
    m[11] = 0;

    m[12] = 0;
    m[13] = 0;
    m[14] = 0;
    m[15] = 1;

    return result;
  }
}

// Some common shaders
var SolidVertexSource = `
  uniform mat4 ModelViewProjection;

  attribute vec3 Position;

  void main() {
    gl_Position = ModelViewProjection*vec4(Position, 1.0);
  }
`;

var SolidFragmentSource = `
  precision highp float;

  uniform vec4 Color;

  void main() {
    gl_FragColor = Color;
  }
`;

var WeightVertexSource = `
  uniform mat4 ModelViewProjection;

  attribute vec3 Position;
	attribute float Weight;

	varying float vWeight;
  void main() {
    gl_Position = ModelViewProjection*vec4(Position, 1.0);
    vWeight = Weight;
  }
`;

var WeightFragmentSource = `
  precision highp float;

  uniform float EdgeWeight;
  uniform vec4 Color;

	varying float vWeight;
    void main() {
		gl_FragColor = mix(mix(vec4(1.0, 0.0, 0.0, 1.0), vec4(1.0, 1.0, 1.0, 1.0), vWeight), Color, EdgeWeight*0.5);
  }
`;

function createVertexBuffer(gl, vertexData) {
  var vbo = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vbo);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertexData), gl.STATIC_DRAW);
  return vbo;
}

function createIndexBuffer(gl, indexData) {
  var ibo = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, ibo);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indexData), gl.STATIC_DRAW);
  return ibo;
}

function createShaderObject(gl, shaderSource, shaderType) {
  var shaderObject = gl.createShader(shaderType);
  gl.shaderSource(shaderObject, shaderSource);
  gl.compileShader(shaderObject);

  if (!gl.getShaderParameter(shaderObject, gl.COMPILE_STATUS)) {
    var lines = shaderSource.split("\n");
    for (var i = 0; i < lines.length; ++i)
      lines[i] = ("   " + (i + 1)).slice(-4) + " | " + lines[i];
    shaderSource = lines.join("\n");

    throw new Error(
        (shaderType == gl.FRAGMENT_SHADER ? "Fragment" : "Vertex") + " shader compilation error for shader '" + name + "':\n\n    " +
        gl.getShaderInfoLog(shaderObject).split("\n").join("\n    ") +
        "\nThe shader source code was:\n\n" +
        shaderSource);
  }
  return shaderObject;
}

function createShaderProgram(gl, vertexSource, fragmentSource) {
  var vertexShader = createShaderObject(gl, vertexSource, gl.VERTEX_SHADER);
  var fragmentShader = createShaderObject(gl, fragmentSource, gl.FRAGMENT_SHADER);
  var program = gl.createProgram();
  gl.attachShader(program,   vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  return program;
}

class TriangleMesh {
  constructor(gl, vertexPositions, indices, shaderProgram, drawFaces, drawEdges, faceColor, edgeColor) {
    this.drawFaces = defaultArg(drawFaces, true);
    this.drawEdges = defaultArg(drawEdges, true);
    this.faceColor = defaultArg(faceColor, new Vector(1, 1, 1));
    this.edgeColor = defaultArg(edgeColor, new Vector(0.5, 0.5, 0.5));

    this.positionVbo = createVertexBuffer(gl, vertexPositions);
    if (this.drawFaces) {
      this.indexCount = indices.length;
      this.indexIbo = createIndexBuffer(gl, indices);
    }
    if (this.drawEdges) {
      var edgeIndices = [];
      for (var i = 0; i < indices.length; i += 3) {
        edgeIndices.push(indices[i + 0], indices[i + 1]);
        edgeIndices.push(indices[i + 1], indices[i + 2]);
        edgeIndices.push(indices[i + 2], indices[i + 0]);
      }
      this.edgeIndexCount = edgeIndices.length;
      this.edgeIndexIbo = createIndexBuffer(gl, edgeIndices);
    }
    this.shaderProgram = shaderProgram;
  }

  render(gl, model, view, projection) {
    var modelViewProjection = projection.multiply(view).multiply(model);

    gl.useProgram(this.shaderProgram);
    gl.uniformMatrix4fv(gl.getUniformLocation(this.shaderProgram, "ModelViewProjection"), false, modelViewProjection.transpose().m);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.positionVbo);

    var positionAttrib = gl.getAttribLocation(this.shaderProgram, "Position");
    gl.enableVertexAttribArray(positionAttrib);
    gl.vertexAttribPointer(positionAttrib, 3, gl.FLOAT, false, 0, 0);

    if (this.drawFaces) {
      gl.uniformMatrix4fv(gl.getUniformLocation(this.shaderProgram, "ModelViewProjection"), false, modelViewProjection.transpose().m);
      gl.uniform1f(gl.getUniformLocation(this.shaderProgram, "EdgeWeight"), 0);
      gl.uniform4f(gl.getUniformLocation(this.shaderProgram, "Color"), this.faceColor.x, this.faceColor.y, this.faceColor.z, 1);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexIbo);
      gl.drawElements(gl.TRIANGLES, this.indexCount, gl.UNSIGNED_SHORT, 0);
    }

    if (this.drawEdges) {
      gl.lineWidth(2.0);

      modelViewProjection = Matrix.translate(0, 0, -1e-4).multiply(modelViewProjection);
      gl.uniformMatrix4fv(gl.getUniformLocation(this.shaderProgram, "ModelViewProjection"), false, modelViewProjection.transpose().m);
      gl.uniform1f(gl.getUniformLocation(this.shaderProgram, "EdgeWeight"), 1);
      gl.uniform4f(gl.getUniformLocation(this.shaderProgram, "Color"), this.edgeColor.x, this.edgeColor.y, this.edgeColor.z, 1);
      gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.edgeIndexIbo);
      gl.drawElements(gl.LINES, this.edgeIndexCount, gl.UNSIGNED_SHORT, 0);
    }
  }
}

var armPositions = [
3.285786,0.983086,-0.719792,
3.361667,0.600166,-0.849336,
3.970051,0.471189,-0.965664,
3.843879,1.028818,-0.820271,
2.880685,0.969881,-0.620851,
2.824011,0.818443,-0.693346,
2.164222,0.866940,-0.473053,
2.608588,1.067587,-0.388495,
2.395500,1.147728,0.012708,
1.794184,1.006382,0.012604,
1.902094,0.892513,0.603183,
2.436246,1.086315,0.421303,
2.785828,0.777985,0.858090,
3.001498,1.027588,0.719387,
3.571950,1.067820,0.931515,
3.405657,0.680107,1.045666,
3.845397,0.533602,1.201814,
4.032486,1.029572,1.184660,
4.545118,0.862465,1.333334,
4.227777,0.272585,1.301368,
4.366973,0.522734,-1.146742,
4.346056,1.012835,-0.928936,
2.987155,1.236357,0.446197,
2.957790,1.332544,0.013616,
3.124862,1.217840,-0.435947,
3.753986,1.424662,-0.611662,
3.706306,1.588476,0.018286,
3.659272,1.427153,0.595650,
4.264765,1.668257,0.020981,
4.213798,1.455423,0.676674,
4.328912,1.574659,-0.615154,
4.832087,1.666803,0.078085,
4.911745,1.554289,-0.541981,
4.763757,1.446417,0.779367,
5.402690,1.567581,0.103616,
5.351954,1.413210,0.885441,
5.511296,1.466881,-0.427781,
5.892619,1.403770,0.135490,
5.904227,1.310272,-0.453282,
5.847911,1.217951,0.893784,
4.595569,-0.023012,1.384322,
5.067237,0.686838,1.357445,
4.981455,-0.373199,1.460968,
5.504485,0.529930,1.413635,
2.435910,0.892948,0.697815,
2.620660,1.004713,0.614637,
4.631836,0.578699,-1.228776,
4.748588,0.953018,-1.021238,
4.824440,0.293308,-1.441958,
5.092680,0.784321,-1.165955,
5.091770,-0.178921,-1.867684,
5.365629,0.523891,-1.520689,
-1.132419,0.744129,0.008103,
-1.112922,0.662859,0.503012,
-1.127108,0.592413,-0.428693,
-0.419589,0.890081,0.006313,
0.210844,0.965618,0.001357,
0.914735,1.002371,-0.003552,
-0.410709,0.745991,0.494352,
0.215841,0.800232,0.502258,
0.942858,0.837709,0.550289,
-0.375487,0.709009,-0.452938,
0.304067,0.765844,-0.452210,
1.165285,0.832256,-0.451369,
2.404073,0.474806,-0.804593,
1.215743,0.422943,-0.799167,
0.329480,0.396740,-0.782079,
-0.363857,0.355715,-0.756246,
-1.127463,0.276424,-0.629093,
-1.218553,-0.420662,-0.479752,
-0.458480,-0.505505,-0.590100,
0.233697,-0.592667,-0.625731,
1.100577,-0.639088,-0.665268,
2.275226,-0.683544,-0.631908,
2.236281,0.509754,0.937943,
0.997575,0.486992,0.946021,
0.248793,0.452066,0.933904,
-0.364568,0.398319,0.869583,
-1.014456,0.312288,0.871027,
-0.981174,-0.342337,0.935790,
-0.348197,-0.306643,0.970033,
0.251433,-0.319948,1.039800,
0.995216,-0.329428,1.020825,
2.028274,-0.368567,1.040500,
1.030918,-0.637035,0.755122,
2.121492,-0.710878,0.807515,
0.250176,-0.590122,0.747476,
-0.365821,-0.529156,0.699017,
-1.005975,-0.520401,0.647048,
-0.404412,-0.094219,-0.751309,
-1.169172,-0.120192,-0.642166,
0.290909,-0.091612,-0.809046,
1.160680,-0.102629,-0.868480,
2.361063,-0.104874,-0.925896,
-0.970303,-0.011909,1.006518,
-0.332771,0.040724,1.007873,
0.258070,0.071093,1.084303,
0.978632,0.078951,1.075460,
1.957703,0.055052,1.076477,
3.447902,-0.564238,-0.553419,
3.447511,-0.112675,-0.900249,
4.095822,-0.061749,-0.774396,
4.116982,-0.411453,-0.519012,
-0.463300,-0.610941,-0.152621,
-0.414712,-0.597450,0.306247,
-1.192170,-0.559748,-0.126533,
-1.081695,-0.560209,0.252222,
0.228512,-0.729170,-0.144190,
0.245536,-0.708788,0.330050,
1.057177,-0.828278,-0.149776,
1.052096,-0.795607,0.341269,
2.158752,-0.895451,-0.120873,
2.156819,-0.868681,0.390452,
3.374055,-0.395876,0.979720,
3.258518,-0.047194,1.077264,
3.442849,-0.636351,0.780137,
3.448064,-0.729401,-0.082042,
3.447770,-0.783792,0.488303,
4.070347,-0.541885,-0.016139,
3.218295,0.318214,1.062284,
4.828296,-0.551390,-1.778666,
4.597123,-0.781889,-1.502898,
4.583179,0.040178,-1.387388,
4.414131,-0.107578,-1.149927,
3.727138,-0.225225,1.010199,
3.735708,0.107918,1.116418,
3.937251,-0.597513,0.728496,
4.004911,-0.634161,0.397780,
3.738369,-0.419981,0.909452,
4.501517,-0.707230,0.019684,
4.425058,-0.814087,0.299742,
4.417570,-0.929991,0.582349,
4.593915,-0.584166,-0.337196,
4.857629,-1.197760,0.079550,
4.821776,-1.227100,0.267113,
5.089587,-1.582796,0.481204,
5.096001,-1.421522,-0.083537,
4.561491,-0.255299,-0.773540,
4.684996,-1.172232,-0.932992,
3.964771,-0.507275,0.985932,
4.217827,-0.931786,1.039900,
4.529206,-1.608887,1.244579,
4.033982,-0.195391,1.189006,
4.349251,-0.571060,1.283239,
4.830524,-1.044323,1.362206,
-1.459218,0.667101,0.026514,
-1.474253,0.598263,0.479012,
-1.454755,0.530144,-0.367980,
-1.462068,0.244427,-0.558100,
-1.495899,0.242329,0.874465,
-1.581901,-0.413916,0.910882,
-1.545343,-0.556797,0.587257,
-1.486542,-0.100214,-0.588935,
-1.446617,-0.367502,-0.439974,
-1.536162,-0.060614,1.015953,
-1.453546,-0.516676,-0.100483,
-1.504361,-0.563757,0.200242,
-10.453400,-0.816544,1.249580,
-10.568598,-0.703981,1.029307,
-10.488125,-0.748690,1.244547,
-10.560873,-0.677650,1.105493,
-10.413530,-0.885799,1.153705,
-10.507763,-0.793564,0.973311,
-10.115963,-0.435863,0.911611,
-10.090780,-0.545788,0.865673,
-10.291660,-0.738413,1.206367,
-10.409069,-0.623463,0.981330,
-10.334913,-0.650028,1.209824,
-10.404478,-0.581995,1.076566,
-10.269196,-0.814177,1.117549,
-10.365749,-0.719494,0.932299,
-9.992289,-0.557447,1.150455,
-10.030954,-0.451653,1.140104,
-10.092802,-0.391016,1.020983,
-9.987535,-0.647461,1.064874,
-10.567608,-0.861525,1.275434,
-10.674316,-0.757391,1.071697,
-10.595549,-0.805260,1.278948,
-10.672369,-0.730331,1.132322,
-10.516068,-0.917780,1.181391,
-10.602331,-0.833460,1.016495,
-9.595282,-0.346098,1.075462,
-10.659027,-0.874395,1.272367,
-9.738861,-0.192724,0.766510,
-10.734480,-0.800821,1.128435,
-9.596043,-0.205589,1.049040,
-10.670149,-0.832621,1.285660,
-10.733984,-0.770395,1.163907,
-9.684513,-0.140596,0.908084,
-9.619846,-0.504053,1.048380,
-10.602633,-0.916647,1.201104,
-10.668930,-0.851923,1.074512,
-9.752934,-0.399515,0.745029,
-10.989691,-0.551962,0.777876,
-11.038256,-0.462662,0.518800,
-11.013887,-0.471413,0.758659,
-11.044609,-0.415030,0.595107,
-10.928507,-0.660151,0.695136,
-10.968325,-0.587027,0.483017,
-10.383009,-0.255526,0.457980,
-10.365387,-0.393959,0.427269,
-10.763435,-0.497831,0.757818,
-10.813154,-0.406563,0.493068,
-10.795837,-0.390985,0.743688,
-10.825310,-0.336952,0.586974,
-10.728489,-0.609224,0.678360,
-10.769384,-0.534109,0.460461,
-10.330318,-0.352491,0.739102,
-10.348871,-0.229645,0.709344,
-10.375246,-0.181341,0.569213,
-10.321381,-0.474974,0.662253,
-11.146938,-0.579615,0.786595,
-11.191936,-0.497023,0.547001,
-11.168150,-0.511059,0.778651,
-11.200550,-0.451611,0.606206,
-11.069239,-0.674255,0.706729,
-11.105627,-0.607422,0.512840,
-9.779282,-0.189367,0.711397,
-11.265383,-0.581200,0.768015,
-9.824362,-0.063774,0.354838,
-11.297216,-0.522852,0.598772,
-11.271858,-0.529108,0.774735,
-11.298771,-0.479748,0.631555,
-9.813831,-0.375870,0.642433,
-11.184736,-0.655035,0.710713,
-11.212561,-0.603737,0.561844,
-9.876331,-0.292557,0.325162,
-11.297705,-0.483273,0.037229,
-11.275583,-0.469572,-0.291312,
-11.317057,-0.400637,-0.021253,
-11.303082,-0.391979,-0.228675,
-11.208471,-0.627533,0.007214,
-11.190388,-0.616344,-0.261822,
-10.496099,-0.220423,-0.232278,
-10.470493,-0.384846,-0.208457,
-11.022816,-0.417360,0.065545,
-11.000387,-0.403339,-0.270295,
-11.050812,-0.304531,-0.000106,
-11.037514,-0.296204,-0.199056,
-10.963621,-0.564642,0.033134,
-10.945183,-0.553143,-0.243293,
-10.519464,-0.236177,0.124387,
-10.528183,-0.108198,0.040107,
-10.516546,-0.100315,-0.137956,
-10.489933,-0.398001,0.089608,
-11.485611,-0.520155,0.008407,
-11.465061,-0.507490,-0.295383,
-11.505266,-0.447144,-0.032446,
-11.490471,-0.438013,-0.251094,
-11.376987,-0.647444,-0.018523,
-11.360394,-0.637218,-0.264380,
-9.856876,-0.018785,0.228495,
-11.612673,-0.534992,-0.047047,
-9.822958,0.004681,-0.230608,
-11.598114,-0.526045,-0.261633,
-11.620857,-0.474800,-0.061407,
-11.608547,-0.467224,-0.242939,
-9.895676,-0.289347,0.196383,
-11.506699,-0.631512,-0.056564,
-11.493921,-0.623653,-0.245287,
-9.871223,-0.270134,-0.206918,
-11.002764,-0.531742,-0.685992,
-10.928263,-0.579929,-0.969604,
-11.010073,-0.470455,-0.757953,
-10.963026,-0.500874,-0.937000,
-10.918129,-0.661293,-0.665103,
-10.857086,-0.700779,-0.897360,
-10.266603,-0.316044,-0.845244,
-10.248520,-0.455687,-0.784675,
-10.779766,-0.457981,-0.633493,
-10.703655,-0.507229,-0.923323,
-10.794548,-0.371593,-0.719759,
-10.749479,-0.400761,-0.891480,
-10.722256,-0.591890,-0.618993,
-10.659668,-0.632450,-0.857579,
-10.346947,-0.265303,-0.537632,
-10.340113,-0.168726,-0.639598,
-10.299976,-0.194107,-0.793235,
-10.315514,-0.413294,-0.527847,
-11.156736,-0.576714,-0.732661,
-11.087744,-0.621273,-0.994904,
-11.167063,-0.520651,-0.787267,
-11.117395,-0.552713,-0.976003,
-11.056585,-0.689997,-0.709856,
-11.000795,-0.726076,-0.922115,
-9.775547,-0.022572,-0.368879,
-11.264244,-0.604641,-0.800072,
-9.673109,-0.092024,-0.753586,
-11.215363,-0.636116,-0.985258,
-11.267994,-0.554562,-0.826765,
-11.226685,-0.581184,-0.983435,
-9.817701,-0.270428,-0.359991,
-11.168694,-0.687658,-0.769207,
-11.125925,-0.715342,-0.932144,
-9.713875,-0.315605,-0.684928,
-9.283291,-0.798574,-1.010223,
-9.392895,-0.559212,-0.998119,
-9.218063,-0.427301,-0.842925,
-8.909595,-0.616489,-1.173908,
-9.025045,-0.353790,-1.161035,
-9.565218,-0.644140,-1.024548,
-9.541262,-0.664728,-1.310149,
-9.449953,-0.890926,-1.036018,
-9.449753,-0.858620,-1.319402,
-9.871912,-0.830009,-1.271120,
-9.778614,-1.025391,-1.279765,
-9.882799,-0.835081,-1.426191,
-9.790159,-1.028179,-1.434792,
-9.225037,-0.839115,-1.108569,
-9.387136,-0.486214,-1.090317,
-9.182863,-0.337921,-0.987667,
-9.575193,-0.597742,-1.164570,
-9.420563,-0.927073,-1.180118,
-9.792332,-1.040709,-1.355218,
-9.892977,-0.830494,-1.345900,
-9.452177,-0.590630,-1.006352,
-9.342094,-0.829180,-1.018017,
-9.456690,-0.526119,-1.110638,
-9.296032,-0.872587,-1.127823,
-9.678858,-1.016378,-1.187519,
-9.802532,-0.755861,-1.175891,
-9.764118,-0.739162,-1.364742,
-9.643057,-0.992813,-1.376229,
-9.654045,-1.043602,-1.280165,
-9.808973,-0.718100,-1.265525,
-9.346752,-0.682911,-0.982504,
-9.170668,-0.590652,-0.812463,
-9.483713,-0.755693,-1.344919,
-9.515907,-0.771601,-0.994628,
-9.841825,-0.935789,-1.278611,
-9.857357,-0.941721,-1.440456,
-9.867216,-0.947500,-1.363734,
-9.404613,-0.713413,-0.984602,
-9.761387,-0.896479,-1.159307,
-9.223528,-0.777248,-0.966003,
-9.339626,-0.521160,-0.952852,
-9.154627,-0.815744,-1.073422,
-9.325304,-0.440393,-1.053442,
-9.294561,-0.655376,-0.935236,
-9.084753,-0.729929,-0.855095,
-8.998722,-0.755386,-1.008924,
-8.934391,-0.469305,-1.221797,
-9.566401,-0.967009,-1.108171,
-9.694902,-0.694342,-1.095800,
-9.641291,-0.719187,-1.339180,
-9.552240,-0.906681,-1.347873,
-9.535465,-0.989494,-1.218111,
-9.693739,-0.654779,-1.202751,
-9.648615,-0.839647,-1.072114,
-9.564123,-0.796442,-1.359174,
-9.199606,-0.808353,-1.208851,
-9.349092,-0.484015,-1.191717,
-9.438705,-0.617586,-1.306584,
-9.352154,-0.801823,-1.315667,
-9.402184,-0.518957,-1.208553,
-9.257208,-0.831173,-1.224464,
-9.393204,-0.708483,-1.331124,
-9.141327,-0.783802,-1.190880,
-9.294273,-0.449465,-1.172588,
-9.028566,-0.657349,-1.244118,
-9.130903,-0.431301,-1.230738,
-9.060221,-0.533922,-1.266778,
-9.449026,-0.567528,-1.237996,
-9.321287,-0.840511,-1.251462,
-9.071508,-0.736658,-1.178472,
-9.215769,-0.418413,-1.160400,
-9.163223,-0.461367,-1.250532,
-9.101500,-0.555592,-1.278766,
-9.070070,-0.666039,-1.262486,
-9.271048,-0.461992,-1.217057,
-9.218214,-0.441853,-1.205989,
-9.089552,-0.724384,-1.222095,
-9.136105,-0.756512,-1.233324,
-9.324091,-0.493988,-1.234923,
-9.191559,-0.781219,-1.250250,
-9.353926,-0.687868,-1.327933,
-9.314644,-0.774517,-1.314618,
-9.395239,-0.602463,-1.305987,
-9.247370,-0.802380,-1.261680,
-9.294813,-0.811171,-1.273564,
-9.410612,-0.563244,-1.261107,
-9.374681,-0.528351,-1.247561,
-9.220900,-0.493967,-1.270408,
-9.162813,-0.587797,-1.299245,
-9.128920,-0.694595,-1.281693,
-9.277716,-0.529051,-1.294986,
-9.189127,-0.720783,-1.305365,
-9.253292,-0.747021,-1.308258,
-9.290092,-0.654331,-1.323792,
-9.336973,-0.567148,-1.298904,
-9.223946,-0.619862,-1.324582,
-9.582424,-0.899313,-1.369806,
-9.600336,-0.814533,-1.366988,
-9.654366,-0.748158,-1.362839,
-9.651766,-0.962837,-1.395495,
-9.746626,-0.764223,-1.386494,
-9.866661,-0.837849,-1.449863,
-9.835247,-0.930538,-1.461693,
-9.782558,-1.013098,-1.457692,
-9.695406,-0.861364,-1.397825,
-8.806478,-0.188782,-1.021971,
-8.679891,-0.353477,-1.072210,
-8.665176,-0.545471,-1.017885,
-9.080536,-0.568558,-0.649776,
-8.963563,-0.684763,-0.701331,
-9.043503,-0.136209,-0.831019,
-8.817747,-0.687881,-0.866276,
-9.738035,-1.029570,-1.237072,
-9.849636,-0.795309,-1.226681,
-9.844563,-0.775393,-1.404529,
-9.720348,-1.034779,-1.416152,
-9.726332,-1.062735,-1.324420,
-9.868813,-0.764454,-1.311127,
-9.811621,-0.921272,-1.218702,
-9.726309,-1.007050,-1.437329,
-9.827059,-0.796770,-1.427890,
-9.781591,-0.904068,-1.441610,
-10.988272,-0.478016,-0.849454,
-10.877111,-0.697567,-0.775012,
-10.775555,-0.374546,-0.808869,
-10.684443,-0.629009,-0.733146,
-10.321499,-0.168203,-0.719348,
-11.143936,-0.529814,-0.883454,
-11.016432,-0.722113,-0.809751,
-11.253742,-0.622963,-0.896059,
-9.704128,0.108894,-0.586251,
-11.251934,-0.567001,-0.906558,
-9.756546,-0.344786,-0.494278,
-11.148935,-0.704929,-0.850434,
-10.278582,-0.465538,-0.652450,
-11.311987,-0.387615,-0.124680,
-11.187691,-0.641174,-0.127301,
-11.048080,-0.287100,-0.099232,
-10.947407,-0.578173,-0.105437,
-10.523962,-0.089298,-0.048302,
-11.499781,-0.434765,-0.141527,
-11.354712,-0.658937,-0.141157,
-11.620245,-0.532606,-0.155577,
-11.619766,-0.469755,-0.152495,
-9.895096,-0.330444,-0.004869,
-11.501003,-0.631424,-0.151156,
-10.476480,-0.424990,-0.060665,
-11.030369,-0.436264,0.679874,
-10.939558,-0.638954,0.581212,
-10.813147,-0.353348,0.670097,
-10.743935,-0.587112,0.562222,
-10.362589,-0.193659,0.644101,
-11.185509,-0.475080,0.695147,
-11.076660,-0.654083,0.602384,
-11.294361,-0.553717,0.685290,
-9.767588,0.022928,0.600212,
-11.289566,-0.503431,0.704380,
-9.821411,-0.387722,0.453721,
-11.199997,-0.632425,0.635325,
-10.341492,-0.457476,0.535313,
-10.525627,-0.707966,1.178713,
-10.453926,-0.850134,1.053401,
-10.372019,-0.608189,1.149123,
-10.313515,-0.778139,1.016038,
-10.062742,-0.412127,1.086511,
-10.635090,-0.763142,1.209005,
-10.551146,-0.884127,1.089241,
-10.705441,-0.840923,1.203391,
-9.645445,-0.153461,0.993916,
-10.705042,-0.801397,1.226531,
-10.636213,-0.886782,1.136557,
-10.036673,-0.624077,0.951949,
-10.550850,-0.444374,-0.895331,
-10.517815,-0.573662,-0.831965,
-10.581793,-0.532478,-0.587561,
-10.593365,-0.330217,-0.857226,
-10.636642,-0.302397,-0.692149,
-10.628323,-0.394548,-0.599661,
-10.618071,-0.304058,-0.777928,
-10.544556,-0.574364,-0.705133,
-10.165363,-0.188679,-0.487800,
-10.146444,-0.084009,-0.596040,
-10.105259,-0.110886,-0.755723,
-10.151201,-0.363216,-0.477176,
-10.080194,-0.407583,-0.753372,
-10.080273,-0.241379,-0.816262,
-10.126413,-0.079594,-0.678514,
-10.114235,-0.421484,-0.612669,
-10.817043,-0.340946,-0.256392,
-10.774446,-0.494795,-0.230538,
-10.793232,-0.506590,0.052890,
-10.850401,-0.226559,-0.176994,
-10.863083,-0.234568,0.014013,
-10.839792,-0.355274,0.086446,
-10.860155,-0.216600,-0.081071,
-10.777990,-0.524590,-0.089485,
-10.296421,-0.162086,0.156007,
-10.291027,-0.024483,0.067104,
-10.279417,-0.016735,-0.119100,
-10.287506,-0.355389,0.123353,
-10.266872,-0.340433,-0.205843,
-10.270868,-0.144548,-0.227870,
-10.285599,-0.000719,-0.024545,
-10.275932,-0.387192,-0.042155,
-10.637930,-0.347366,0.478262,
-10.606171,-0.478502,0.446591,
-10.564116,-0.555771,0.670746,
-10.642923,-0.273762,0.580219,
-10.614803,-0.325329,0.729788,
-10.587042,-0.440771,0.749201,
-10.630833,-0.288324,0.659886,
-10.581501,-0.535353,0.550679,
-10.119286,-0.289885,0.727975,
-10.124691,-0.158209,0.696716,
-10.152719,-0.107883,0.548675,
-10.130970,-0.439899,0.654375,
-10.177540,-0.353605,0.392588,
-10.173885,-0.186287,0.423113,
-10.138067,-0.117546,0.628557,
-10.153765,-0.425610,0.511372,
-10.298004,-0.554712,0.954066,
-10.262411,-0.655453,0.906872,
-10.163536,-0.752562,1.096933,
-10.287975,-0.510527,1.056165,
-10.221489,-0.575638,1.183760,
-10.178333,-0.672043,1.183892,
-10.256721,-0.534746,1.126009,
-10.209539,-0.720943,0.991486,
-9.835014,-0.469952,1.118318,
-9.864498,-0.354237,1.105818,
-9.929523,-0.291355,0.979216,
-9.843044,-0.588350,1.033853,
-9.954086,-0.479458,0.814191,
-9.964975,-0.340754,0.857192,
-9.896629,-0.309008,1.051359,
-9.897465,-0.566660,0.908251,
-10.415716,-0.197506,0.138727,
-10.418486,-0.059023,0.051790,
-10.406967,-0.051165,-0.127493,
-10.394905,-0.363804,0.104717,
-10.374992,-0.349854,-0.205142,
-10.391556,-0.180922,-0.228562,
-10.413803,-0.037216,-0.036875,
-10.382273,-0.392006,-0.051338,
-10.232038,-0.320854,0.735361,
-10.245489,-0.191679,0.704900,
-10.272257,-0.142948,0.562938,
-10.234922,-0.450472,0.663413,
-10.280268,-0.366545,0.417681,
-10.285629,-0.221031,0.444539,
-10.258951,-0.154072,0.639366,
-10.257355,-0.432940,0.530901,
-10.728571,-0.377855,0.485812,
-10.693493,-0.503904,0.451772,
-10.652119,-0.579956,0.672394,
-10.738304,-0.300123,0.588216,
-10.709438,-0.353052,0.741727,
-10.678345,-0.470055,0.753251,
-10.726326,-0.314684,0.670531,
-10.668932,-0.557789,0.554369,
-10.912374,-0.373154,-0.263397,
-10.864891,-0.515945,-0.236649,
-10.883471,-0.527573,0.042709,
-10.949541,-0.256599,-0.188529,
-10.962574,-0.264788,0.007016,
-10.934933,-0.387302,0.075365,
-10.959921,-0.246037,-0.090338,
-10.867956,-0.541029,-0.097383,
-10.631823,-0.477257,-0.909477,
-10.594564,-0.597786,-0.845003,
-10.657700,-0.556959,-0.604002,
-10.676918,-0.361101,-0.875384,
-10.721228,-0.332474,-0.706475,
-10.708448,-0.427729,-0.617230,
-10.702520,-0.333813,-0.794193,
-10.620518,-0.594500,-0.719592,
-10.263309,-0.226589,-0.515857,
-10.251221,-0.123440,-0.620786,
-10.211126,-0.149000,-0.774966,
-10.238989,-0.377556,-0.505827,
-10.170433,-0.420689,-0.770033,
-10.181147,-0.278074,-0.831390,
-10.232239,-0.120792,-0.700650,
-10.202089,-0.431686,-0.634516,
-9.917048,-0.513262,1.137620,
-9.951729,-0.399557,1.126684,
-10.014280,-0.338640,1.005647,
-9.919312,-0.611710,1.058331,
-10.025795,-0.506641,0.852178,
-10.043554,-0.388483,0.889446,
-9.983297,-0.357523,1.073590,
-9.970945,-0.589281,0.942754,
-10.355833,-0.590282,0.969394,
-10.316092,-0.686607,0.927096,
-10.218529,-0.782316,1.114380,
-10.353489,-0.541265,1.072571,
-10.285276,-0.608015,1.203336,
-10.237465,-0.706240,1.196450,
-10.322268,-0.565565,1.144810,
-10.263639,-0.747341,1.012415,
-8.749235,-0.319824,1.084815,
-8.128213,-0.223722,1.115500,
-8.145498,-0.396139,1.047074,
-8.790420,-0.674938,-0.595675,
-8.626392,-0.663074,-0.712918,
-8.418264,-0.504248,-0.878298,
-8.189922,-0.488667,-0.627671,
-8.450964,-0.652651,-0.459659,
-8.726656,-0.681395,-0.360085,
-8.561100,-0.085262,-0.891411,
-8.428516,-0.266209,-0.944202,
-8.247301,0.073023,-0.610687,
-8.142112,-0.150730,-0.756150,
-9.681305,-0.491152,0.866438,
-9.385181,-0.277033,-0.650221,
-8.484000,-0.302031,1.111291,
-8.713686,-0.608723,0.075381,
-8.698721,-0.528120,0.198990,
-8.645007,-0.624935,0.494411,
-8.432451,-0.552162,0.504730,
-8.452601,-0.484240,0.145912,
-8.454668,-0.577208,0.005787,
-8.232959,-0.448750,-0.121383,
-8.230181,-0.419935,0.099583,
-8.278729,-0.477831,0.512007,
-9.375143,-0.332420,1.080775,
-9.099173,-0.604097,-0.029118,
-9.097775,-0.599104,-0.336851,
-8.932804,-0.538429,0.166644,
-8.911841,-0.609615,0.030678,
-8.928499,-0.666836,-0.351916,
-8.958355,-0.335167,1.078188,
-9.166248,-0.334349,1.075436,
-8.936740,-0.626301,0.460544,
-9.172646,-0.585976,0.400975,
-8.676040,-0.554035,0.294651,
-8.436638,-0.500273,0.309533,
-8.214492,-0.400560,0.351321,
-8.940804,-0.559715,0.277143,
-9.443624,-0.475033,0.325484,
-9.439285,-0.448301,0.126370,
-9.426727,-0.417139,-0.043894,
-9.232195,-0.467987,-0.297761,
-9.403904,-0.370872,-0.328868,
-9.765968,-0.367201,0.206191,
-9.757984,-0.370117,0.041528,
-9.750299,-0.344587,-0.124703,
-8.713269,-0.480383,1.031986,
-8.489231,-0.458921,1.066661,
-9.403715,-0.467089,1.060034,
-9.183998,-0.461086,1.054549,
-8.961706,-0.472557,1.054636,
-8.661212,-0.597151,0.693162,
-8.671830,-0.566587,0.882687,
-8.440107,-0.539522,0.704391,
-8.437898,-0.510366,0.894562,
-9.472919,-0.479471,0.576246,
-9.444475,-0.495619,0.820235,
-9.178431,-0.566914,0.623204,
-9.178764,-0.541502,0.847392,
-8.944260,-0.598734,0.666767,
-8.944570,-0.584887,0.870359,
-8.266850,-0.452013,0.875985,
-8.264269,-0.464689,0.702362,
-9.611845,-0.441462,0.645849,
-9.590811,-0.448326,0.729862,
-9.683989,0.063629,-0.678779,
-9.729303,0.094780,-0.493655,
-9.785133,0.016708,0.508675,
-9.753391,-0.040300,0.676847,
-8.092777,-0.379574,0.702799,
-8.780087,0.001707,-0.738968,
-9.332733,-0.076702,-0.730831,
-8.526383,-0.048279,1.009447,
-8.130467,0.069401,1.009083,
-9.151382,-0.185467,1.002436,
-9.010840,-0.171091,0.991056,
-9.808960,0.171606,0.023038,
-8.095409,0.309198,-0.210995,
-8.054961,0.334463,0.158614,
-8.055634,0.321598,0.432614,
-9.805580,0.144190,-0.089690,
-8.729986,0.256939,-0.142194,
-8.730383,0.241899,0.098543,
-9.818014,0.135578,0.128837,
-8.740546,0.193745,0.371867,
-9.141071,-0.341845,-0.712238,
-9.173687,-0.529900,0.223671,
-9.166830,-0.513729,0.056189,
-8.755405,0.151802,-0.477238,
-9.312723,-0.164267,0.997440,
-7.754459,0.130484,0.883339,
-7.708155,0.417442,0.170726,
-7.739694,0.377035,-0.208160,
-7.833693,0.138670,-0.529313,
-7.744905,-0.120382,0.964661,
-7.734460,-0.260330,0.689259,
-7.845115,-0.285364,0.357630,
-7.742354,-0.236099,0.869286,
-7.859097,-0.334042,-0.259452,
-7.808306,-0.369579,-0.509119,
-7.782717,-0.064110,-0.586591,
-8.103672,0.235188,0.728267,
-7.740610,0.304087,0.660651,
-8.669494,0.112131,0.709942,
-9.552980,0.133055,-0.220135,
-9.516323,0.125153,-0.315468,
-9.604197,0.067722,0.350148,
-9.632696,0.092999,0.273324,
-9.456707,0.168770,0.198371,
-9.441864,0.204609,0.052267,
-9.437485,0.188023,-0.092462,
-9.431841,0.174786,-0.492084,
-9.408895,0.130676,-0.622158,
-9.458191,0.166803,-0.409323,
-9.225767,0.212578,-0.269191,
-9.133001,0.214516,-0.352489,
-9.113111,0.147001,-0.496150,
-9.593710,0.080212,0.561439,
-9.608561,0.076136,0.484728,
-9.582079,-0.006969,0.667501,
-9.194338,0.125412,0.458942,
-9.175392,0.081598,0.574088,
-9.292557,0.158405,0.387959,
-9.502838,-0.042601,0.819664,
-9.462088,-0.061571,0.907852,
-9.431221,-0.114147,0.969950,
-9.155153,-0.085016,0.911814,
-9.140160,0.017309,0.766334,
-9.209131,0.034157,0.685581,
-9.239695,0.174519,0.256583,
-9.216219,0.215910,0.075465,
-9.217398,0.204479,-0.111524,
-8.864262,-0.028397,0.870987,
-8.792404,-0.129271,0.994478,
-7.705925,0.398312,0.413330,
-7.874503,-0.312704,0.110210,
-3.250014,0.668446,0.626469,
-2.889745,-0.744261,0.389687,
-2.979284,-0.659508,0.631549,
-3.098471,-0.511730,0.878783,
-2.610450,-0.800213,-0.062925,
-3.316629,0.101208,1.029484,
-2.693787,-0.467258,-0.546014,
-3.166225,0.826839,0.238463,
-2.559015,-0.720152,-0.334552,
-4.775009,0.730469,0.455357,
-4.730906,-0.614338,0.227937,
-4.792500,0.408476,-0.534157,
-4.736206,-0.172899,0.966796,
-4.728778,-0.538284,0.588425,
-4.732197,-0.396191,0.812978,
-4.736074,-0.581911,-0.065757,
-4.760088,0.505701,0.735050,
-4.792263,0.695534,-0.238937,
-4.743699,0.184006,0.951132,
-4.795734,0.069143,-0.575587,
-4.764894,-0.280846,-0.603170,
-4.791905,0.804075,0.127699,
-4.747350,-0.476072,-0.372389,
-2.985497,0.518717,-0.528982,
-3.213621,-0.254662,1.037233,
-3.334045,0.359539,0.896398,
-2.953352,0.827253,-0.217430,
-2.989922,0.075260,-0.566618,
-6.214531,0.536572,0.412289,
-5.558678,0.616058,0.415082,
-6.144983,-0.279396,0.326662,
-5.528644,-0.456224,0.243078,
-6.191887,0.283281,-0.421638,
-5.531787,0.337610,-0.475487,
-6.227369,-0.039801,0.901379,
-5.565833,-0.125683,0.888172,
-6.184882,-0.238298,0.632569,
-5.543335,-0.399067,0.561788,
-6.211026,-0.174274,0.803634,
-5.555511,-0.298611,0.759666,
-6.132206,-0.280905,0.081921,
-5.521969,-0.439806,-0.006811,
-6.222461,0.417078,0.644948,
-5.564576,0.440592,0.660782,
-6.200254,0.512573,-0.146798,
-5.539380,0.590977,-0.196445,
-6.230820,0.213957,0.845713,
-5.569304,0.171932,0.860626,
-6.179954,0.060181,-0.496747,
-5.524631,0.061621,-0.566012,
-6.163859,-0.221416,-0.461340,
-5.526094,-0.244062,-0.528287,
-6.207775,0.575954,0.169917,
-5.550115,0.679480,0.137435,
-6.137404,-0.263981,-0.223886,
-5.520213,-0.373331,-0.296754,
-7.477325,0.454020,0.396692,
-7.545562,-0.206738,0.360123,
-7.511987,0.242197,-0.379042,
-7.483638,-0.066917,0.827223,
-7.505701,-0.183798,0.606349,
-7.491562,-0.179054,0.754547,
-7.569101,-0.223618,0.112405,
-7.479160,0.361441,0.597916,
-7.491523,0.434097,-0.124150,
-7.480321,0.187056,0.766336,
-7.516621,0.042368,-0.458514,
-7.534834,-0.192852,-0.419869,
-7.480923,0.488937,0.171730,
-7.561538,-0.225901,-0.200022,
-6.968001,0.448540,0.400839,
-6.981194,-0.202101,0.421468,
-6.990243,0.253605,-0.347674,
-6.980983,-0.018099,0.813077,
-6.965505,-0.173046,0.628825,
-6.975727,-0.126511,0.747388,
-7.039221,-0.193779,0.222661,
-6.977604,0.355265,0.593537,
-6.970282,0.440390,-0.090042,
-6.983107,0.191675,0.758781,
-6.981764,0.076061,-0.425148,
-6.987985,-0.180927,-0.425341,
-6.964863,0.481501,0.196930,
-7.013213,-0.192854,-0.249561,
-2.825427,0.036827,1.095564,
-2.790334,-0.178299,1.107539,
-2.531612,-0.262445,1.048284,
-2.617930,0.167456,1.016868,
-2.565050,0.841904,0.258509,
-2.433616,0.850534,-0.217911,
-2.158005,-0.425154,-0.488788,
-2.543401,0.090462,-0.503835,
-2.519650,0.530952,-0.530695,
-1.996737,-0.626896,-0.332858,
-2.023939,-0.692430,-0.062589,
-2.308866,-0.668213,0.352993,
-2.452198,-0.609247,0.650582,
-2.678777,0.615942,0.680693,
-2.250240,0.604797,0.649625,
-2.199286,0.180555,0.975192,
-2.163202,-0.548248,0.655901,
-2.191184,-0.211933,1.012131,
-2.216952,0.805529,0.238299,
-2.023602,-0.586891,0.354247,
-1.798676,-0.597607,-0.062373,
-1.773049,-0.528524,-0.332263,
-1.934285,-0.355495,-0.564485,
-2.163007,0.823437,-0.219085,
-2.265148,0.520582,-0.530231,
-2.285517,0.102448,-0.523033,
-4.229278,0.461582,-0.528332,
-3.625514,0.480692,-0.524172,
-4.277646,-0.207865,0.988767,
-3.772463,-0.249100,1.012513,
-4.314876,0.468403,0.788200,
-3.842964,0.410601,0.842155,
-4.228992,0.757246,-0.230871,
-3.617643,0.781851,-0.221015,
-4.216702,0.084255,-0.535842,
-3.605602,0.067001,-0.536385,
-3.334778,-0.663513,-0.351825,
-4.082163,-0.552853,-0.366407,
-3.736560,0.826122,0.198816,
-4.274115,0.840096,0.158919,
-3.431244,-0.423277,-0.589305,
-4.133559,-0.326593,-0.597119,
-3.836329,0.117685,1.003064,
-4.308306,0.157389,0.976943,
-3.370252,-0.761034,-0.063077,
-4.094114,-0.659735,-0.064196,
-3.697831,-0.498280,0.855373,
-4.242486,-0.447018,0.833205,
-3.616906,-0.651890,0.616849,
-4.203146,-0.585081,0.602150,
-3.546289,-0.740952,0.331577,
-4.167483,-0.664324,0.275320,
-3.794414,0.692924,0.567995,
-4.298059,0.729359,0.509781,
-1.688828,0.292471,-0.508644,
-1.710769,-0.044903,-0.558439,
-1.589922,-0.340397,-0.438202,
-1.551465,-0.488022,-0.147313,
-1.656581,0.569798,-0.297305,
-1.674017,0.656801,0.090873,
-1.693051,0.556564,0.505821,
-1.694010,0.210285,0.859389,
-1.718976,-0.097750,0.964616,
-1.742314,-0.422388,0.798531,
-1.680341,-0.529181,0.499762,
-1.592564,-0.538340,0.127527
];

var armIndices = [
4,2,1,
1,6,5,
6,8,5,
7,9,8,
10,12,9,
14,16,15,
15,17,18,
17,19,18,
3,22,21,
12,24,9,
8,24,25,
25,27,26,
23,27,24,
27,30,29,
26,29,31,
29,33,31,
30,32,29,
34,35,32,
33,35,37,
37,38,39,
36,38,35,
19,41,42,
41,44,42,
1,26,4,
4,31,22,
5,25,1,
15,30,28,
18,34,30,
45,12,11,
13,46,45,
14,28,23,
46,23,12,
42,34,19,
22,47,21,
22,33,48,
47,50,49,
37,48,33,
49,52,51,
42,40,36,
39,50,37,
10,61,11,
58,60,61,
56,60,57,
53,59,56,
64,10,7,
63,58,64,
62,57,63,
62,53,56,
7,66,64,
64,67,63,
62,67,68,
55,68,69,
11,76,75,
61,77,76,
60,78,77,
59,79,78,
84,85,86,
83,87,85,
81,87,82,
80,88,81,
75,45,11,
65,6,2,
90,69,68,
71,91,90,
92,68,67,
72,90,92,
93,67,66,
73,92,93,
94,66,65,
74,93,94,
79,96,78,
95,81,96,
96,77,78,
96,82,97,
77,98,76,
82,98,97,
76,99,75,
83,99,98,
94,100,74,
101,103,100,
101,65,2,
3,101,2,
104,70,71,
104,107,106,
105,89,107,
72,104,71,
108,105,104,
109,88,105,
110,72,73,
110,109,108,
85,109,111,
112,73,74,
112,111,110,
86,111,113,
84,115,99,
86,114,84,
113,117,118,
86,118,116,
75,115,120,
13,120,16,
74,117,112,
100,119,117,
21,124,3,
123,122,124,
51,123,49,
47,123,21,
115,126,120,
118,127,116,
116,129,114,
114,125,115,
120,17,16,
117,128,118,
119,131,128,
128,132,127,
119,133,130,
131,134,135,
135,137,136,
133,134,130,
135,132,131,
122,138,124,
139,133,138,
138,103,102,
124,102,3,
127,141,140,
132,142,141,
129,140,125,
143,41,20,
140,144,143,
144,43,41,
141,145,144,
125,143,126,
126,20,17,
54,146,147,
53,148,146,
69,148,55,
79,147,150,
89,151,152,
91,149,69,
91,154,153,
95,150,155,
80,155,151,
106,154,70,
106,157,156,
107,152,157,
160,166,168,
158,178,176,
162,166,158,
158,180,162,
161,177,179,
167,161,169,
159,181,177,
167,163,159,
183,178,187,
191,176,183,
179,185,188,
177,192,185,
202,196,194,
196,212,194,
198,202,194,
216,194,212,
197,213,215,
203,197,205,
195,217,213,
203,199,195,
219,214,222,
225,212,219,
215,221,223,
213,226,221,
236,230,228,
230,246,228,
232,236,228,
250,228,246,
231,247,249,
237,231,239,
229,251,247,
237,233,229,
253,248,256,
259,246,253,
249,255,257,
247,260,255,
270,264,262,
264,280,262,
266,270,262,
284,262,280,
265,281,283,
271,265,273,
263,285,281,
271,267,263,
287,282,290,
293,280,287,
283,289,291,
281,294,289,
297,318,316,
318,301,316,
296,319,309,
319,303,313,
314,330,332,
330,315,332,
308,332,331,
332,307,331,
296,333,317,
326,316,333,
317,329,303,
333,301,329,
337,296,309,
297,338,310,
326,335,339,
297,339,336,
341,335,337,
338,298,311,
339,340,327,
336,327,298,
313,343,347,
347,320,324,
304,347,346,
346,324,323,
302,348,312,
345,325,348,
312,344,301,
348,321,344,
334,343,349,
349,303,329,
321,349,344,
344,329,301,
350,302,328,
350,304,346,
310,355,318,
302,363,353,
318,363,312,
356,309,319,
319,364,356,
304,364,313,
302,357,328,
328,354,304,
358,309,351,
359,310,338,
299,365,360,
337,365,341,
338,366,359,
300,366,311,
299,362,342,
342,361,300,
362,367,361,
360,368,362,
371,359,366,
361,371,366,
372,360,365,
358,372,365,
370,352,359,
375,358,351,
357,377,354,
378,357,353,
380,356,364,
354,380,364,
379,351,356,
381,353,363,
355,381,363,
352,382,355,
368,383,367,
369,384,368,
383,371,367,
385,372,373,
386,370,383,
387,373,375,
376,388,377,
378,389,376,
388,380,377,
388,375,379,
390,381,382,
374,390,382,
384,386,383,
385,391,384,
389,387,388,
390,391,389,
392,350,346,
350,394,345,
323,392,346,
394,322,345,
397,331,307,
331,399,308,
400,392,395,
400,394,393,
300,402,342,
342,403,299,
404,298,327,
405,327,340,
311,401,300,
682,311,298,
299,407,341,
407,340,341,
324,408,412,
412,306,314,
323,412,411,
411,314,308,
322,413,325,
410,315,413,
325,409,321,
413,305,409,
306,414,330,
408,334,414,
305,414,409,
409,334,321,
308,415,411,
411,395,323,
396,410,322,
416,307,410,
399,417,415,
417,395,415,
397,417,398,
416,400,417,
282,418,423,
423,265,283,
264,420,418,
418,273,265,
267,424,285,
424,266,284,
275,419,267,
421,266,419,
290,423,427,
423,291,427,
294,424,429,
424,293,429,
291,425,427,
425,290,427,
294,425,289,
429,287,425,
230,436,248,
436,231,249,
238,431,230,
431,239,231,
233,437,251,
437,232,250,
241,432,233,
434,232,432,
256,436,439,
436,257,439,
260,437,441,
437,259,441,
257,438,439,
438,256,439,
260,438,255,
438,259,253,
196,448,214,
448,197,215,
204,443,196,
443,205,197,
199,449,217,
449,198,216,
207,444,199,
444,206,198,
222,448,452,
448,223,452,
226,449,454,
449,225,454,
223,450,452,
450,222,452,
221,454,450,
450,225,219,
160,461,178,
456,179,461,
168,456,160,
458,161,456,
181,457,462,
462,162,180,
163,459,457,
457,170,162,
187,461,465,
461,188,465,
192,462,466,
462,191,466,
188,463,465,
463,187,465,
185,466,463,
463,191,183,
472,276,277,
473,279,276,
268,471,278,
269,468,268,
474,277,422,
474,278,471,
469,430,475,
470,430,279,
477,286,663,
476,292,286,
288,478,662,
481,295,480,
482,663,426,
482,662,478,
483,295,428,
479,428,292,
488,242,243,
489,245,242,
234,487,244,
235,484,234,
490,243,435,
490,244,487,
485,442,491,
486,442,245,
493,252,680,
492,258,252,
254,494,677,
497,261,496,
498,680,673,
498,677,494,
496,440,499,
495,440,258,
504,208,209,
505,211,208,
200,503,210,
201,500,200,
506,209,447,
506,210,503,
501,455,507,
502,455,211,
509,218,665,
508,224,218,
220,510,664,
513,227,512,
514,665,451,
514,664,510,
512,453,515,
515,224,511,
520,172,173,
521,175,172,
164,519,174,
165,516,164,
522,173,460,
522,174,519,
517,467,523,
518,467,175,
525,182,186,
524,190,182,
184,526,189,
529,193,528,
530,186,464,
530,189,526,
528,609,531,
527,609,190,
243,532,533,
533,492,493,
242,535,532,
532,495,492,
497,534,494,
537,244,534,
234,536,235,
537,496,536,
435,533,538,
538,493,498,
435,534,244,
538,494,534,
235,539,442,
536,499,539,
245,539,535,
535,499,495,
209,540,541,
541,508,509,
208,543,540,
540,511,508,
513,542,510,
545,210,542,
200,544,201,
545,512,544,
447,541,546,
546,509,514,
447,542,210,
546,510,542,
201,547,455,
544,515,547,
211,547,543,
543,515,511,
204,553,552,
552,505,504,
202,550,553,
553,502,505,
500,551,503,
548,205,551,
501,548,500,
549,203,548,
445,552,554,
554,504,506,
445,551,205,
551,506,503,
207,555,446,
555,501,507,
446,550,206,
550,507,502,
238,561,560,
560,489,488,
236,558,561,
561,486,489,
484,559,487,
556,239,559,
484,557,556,
557,237,556,
433,560,562,
562,488,490,
433,559,239,
562,487,559,
241,563,434,
563,485,491,
240,563,558,
558,491,486,
272,569,568,
568,473,472,
270,566,569,
569,470,473,
468,567,471,
564,273,567,
469,564,468,
565,271,564,
272,570,420,
570,472,474,
420,567,273,
570,471,567,
421,565,571,
565,475,571,
274,571,566,
566,475,470,
277,572,573,
573,476,477,
276,575,572,
572,479,476,
481,574,478,
577,278,574,
268,576,269,
577,480,576,
422,573,578,
578,477,482,
422,574,278,
578,478,574,
269,579,430,
576,483,579,
279,579,575,
575,483,479,
173,580,581,
581,524,525,
172,583,580,
580,527,524,
529,582,526,
585,174,582,
164,584,165,
585,528,584,
460,581,586,
586,525,530,
460,582,174,
582,530,526,
165,587,467,
584,531,587,
175,587,583,
587,527,583,
168,593,592,
592,521,520,
166,590,593,
593,518,521,
516,591,519,
588,169,591,
517,588,516,
589,167,588,
458,592,594,
594,520,522,
458,591,169,
591,522,519,
459,589,595,
589,523,595,
170,595,590,
595,518,590,
254,292,261,
220,258,227,
218,193,184,
407,599,405,
403,600,407,
601,603,600,
603,599,600,
605,402,401,
605,608,606,
402,601,403,
606,602,601,
288,610,295,
596,644,611,
611,598,597,
604,617,612,
612,616,613,
603,618,617,
617,619,616,
182,645,621,
404,638,682,
638,622,684,
622,624,684,
624,612,613,
604,625,626,
626,622,623,
404,626,623,
599,626,405,
647,596,627,
628,647,627,
616,631,613,
632,614,631,
619,632,616,
632,620,615,
624,683,684,
634,630,683,
613,634,624,
631,629,634,
258,641,640,
640,636,635,
440,642,641,
641,637,636,
292,642,261,
227,640,453,
639,642,428,
610,428,295,
615,648,614,
650,649,648,
649,644,643,
620,650,615,
650,658,651,
658,644,651,
629,654,630,
656,655,654,
655,647,646,
643,657,649,
657,648,649,
656,614,648,
193,660,661,
661,652,653,
190,653,645,
661,609,193,
453,660,224,
453,635,652,
620,666,659,
658,666,598,
667,607,605,
401,667,605,
597,669,611,
672,628,627,
730,627,596,
596,669,730,
621,186,182,
685,674,607,
674,679,675,
675,681,676,
668,682,610,
621,646,628,
635,683,630,
636,684,683,
610,638,639,
637,638,684,
655,645,653,
654,653,652,
630,652,635,
628,686,621,
675,731,688,
675,689,674,
674,690,607,
670,691,687,
666,693,692,
666,694,598,
633,732,693,
618,732,619,
602,695,618,
608,696,602,
607,697,608,
597,694,691,
676,700,698,
698,669,670,
676,699,731,
698,687,699,
701,286,254,
220,704,252,
680,706,673,
673,707,677,
677,701,254,
704,680,252,
705,727,706,
706,728,707,
707,702,701,
703,705,704,
426,709,662,
663,708,426,
662,668,288,
702,663,286,
711,708,710,
708,713,709,
668,713,406,
702,711,710,
713,667,406,
451,715,664,
716,451,665,
718,714,716,
714,719,715,
664,703,220,
703,719,726,
721,189,464,
722,464,186,
723,721,722,
721,725,720,
716,725,718,
686,722,186,
726,679,727,
728,679,678,
685,712,678,
681,718,700,
728,712,711,
717,726,719,
671,723,686,
669,729,730,
729,672,730,
718,724,700,
729,724,723,
184,720,716,
184,665,218,
762,785,761,
786,777,785,
778,765,777,
767,780,779,
763,770,769,
769,772,771,
773,764,763,
787,774,773,
783,788,787,
782,783,781,
766,781,765,
771,768,767,
761,776,762,
776,779,780,
789,688,731,
688,797,689,
689,791,690,
792,687,691,
790,692,693,
692,794,694,
795,693,732,
802,732,695,
800,695,696,
697,800,696,
690,799,697,
694,792,691,
731,796,789,
699,798,796,
742,786,762,
754,778,786,
778,744,766,
768,751,780,
764,746,770,
770,747,772,
774,743,764,
788,748,774,
753,788,784,
752,784,782,
766,752,782,
772,745,768,
762,749,742,
749,780,751,
789,815,801,
801,811,797,
797,805,791,
806,798,792,
804,793,790,
807,794,793,
809,790,795,
816,795,802,
800,816,802,
799,814,800,
791,813,799,
808,792,794,
789,810,803,
796,812,810,
761,815,803,
785,811,815,
777,805,811,
806,779,812,
804,769,807,
807,771,808,
809,763,804,
816,773,809,
814,787,816,
781,814,813,
765,813,805,
808,767,806,
803,775,761,
775,812,779,
757,817,738,
818,820,817,
817,758,738,
736,818,757,
759,821,822,
739,824,823,
756,824,760,
759,825,756,
741,823,826,
741,827,737,
737,828,734,
734,829,735,
740,830,821,
829,736,735,
758,830,733,
820,831,830,
829,834,819,
821,831,835,
828,833,829,
827,836,828,
826,837,827,
826,839,838,
822,841,825,
825,842,824,
823,842,839,
822,835,840,
819,832,820,
742,856,754,
870,855,856,
733,855,869,
754,849,750,
855,849,856,
740,850,855,
750,843,744,
849,844,843,
850,756,844,
745,860,751,
845,859,860,
846,738,859,
743,866,746,
868,865,866,
867,735,865,
746,864,747,
866,863,864,
865,736,863,
748,868,743,
862,867,868,
861,734,867,
854,748,755,
854,861,862,
853,737,861,
858,755,753,
857,854,858,
739,853,857,
851,753,752,
852,858,851,
760,857,852,
744,851,752,
844,851,843,
844,760,852,
747,845,745,
864,846,845,
863,757,846,
869,758,733,
869,847,848,
870,749,847,
758,859,738,
848,860,859,
847,751,860,
872,149,153,
842,871,872,
873,153,154,
839,872,873,
874,154,156,
838,873,874,
871,148,149,
841,875,871,
875,146,148,
840,876,875,
876,147,146,
835,877,876,
877,150,147,
831,878,877,
878,155,150,
832,879,878,
879,151,155,
834,880,879,
880,152,151,
833,881,880,
881,157,152,
836,882,881,
882,156,157,
837,874,882,
4,3,2,
1,2,6,
6,7,8,
7,10,9,
10,11,12,
14,13,16,
15,16,17,
17,20,19,
3,4,22,
12,23,24,
8,9,24,
25,24,27,
23,28,27,
27,28,30,
26,27,29,
29,32,33,
30,34,32,
34,36,35,
33,32,35,
37,35,38,
36,40,38,
19,20,41,
41,43,44,
1,25,26,
4,26,31,
5,8,25,
15,18,30,
18,19,34,
45,46,12,
13,14,46,
14,15,28,
46,14,23,
42,36,34,
22,48,47,
22,31,33,
47,48,50,
37,50,48,
49,50,52,
42,44,40,
39,52,50,
10,58,61,
58,57,60,
56,59,60,
53,54,59,
64,58,10,
63,57,58,
62,56,57,
62,55,53,
7,65,66,
64,66,67,
62,63,67,
55,62,68,
11,61,76,
61,60,77,
60,59,78,
59,54,79,
84,83,85,
83,82,87,
81,88,87,
80,89,88,
75,13,45,
65,7,6,
90,91,69,
71,70,91,
92,90,68,
72,71,90,
93,92,67,
73,72,92,
94,93,66,
74,73,93,
79,95,96,
95,80,81,
96,97,77,
96,81,82,
77,97,98,
82,83,98,
76,98,99,
83,84,99,
94,101,100,
101,102,103,
101,94,65,
3,102,101,
104,106,70,
104,105,107,
105,88,89,
72,108,104,
108,109,105,
109,87,88,
110,108,72,
110,111,109,
85,87,109,
112,110,73,
112,113,111,
86,85,111,
84,114,115,
86,116,114,
113,112,117,
86,113,118,
75,99,115,
13,75,120,
74,100,117,
100,103,119,
21,123,124,
123,121,122,
51,121,123,
47,49,123,
115,125,126,
118,128,127,
116,127,129,
114,129,125,
120,126,17,
117,119,128,
119,130,131,
128,131,132,
119,103,133,
131,130,134,
135,134,137,
133,137,134,
135,136,132,
122,139,138,
139,137,133,
138,133,103,
124,138,102,
127,132,141,
132,136,142,
129,127,140,
143,144,41,
140,141,144,
144,145,43,
141,142,145,
125,140,143,
126,143,20,
54,53,146,
53,55,148,
69,149,148,
79,54,147,
89,80,151,
91,153,149,
91,70,154,
95,79,150,
80,95,155,
106,156,154,
106,107,157,
107,89,152,
160,158,166,
158,160,178,
162,170,166,
158,176,180,
161,159,177,
167,159,161,
159,163,181,
167,171,163,
183,176,178,
191,180,176,
179,177,185,
177,181,192,
202,204,196,
196,214,212,
198,206,202,
216,198,194,
197,195,213,
203,195,197,
195,199,217,
203,207,199,
219,212,214,
225,216,212,
215,213,221,
213,217,226,
236,238,230,
230,248,246,
232,240,236,
250,232,228,
231,229,247,
237,229,231,
229,233,251,
237,241,233,
253,246,248,
259,250,246,
249,247,255,
247,251,260,
270,272,264,
264,282,280,
266,274,270,
284,266,262,
265,263,281,
271,263,265,
263,267,285,
271,275,267,
287,280,282,
293,284,280,
283,281,289,
281,285,294,
297,310,318,
318,312,301,
296,317,319,
319,317,303,
314,306,330,
330,305,315,
308,314,332,
332,315,307,
296,326,333,
326,297,316,
317,333,329,
333,316,301,
337,335,296,
297,336,338,
326,296,335,
297,326,339,
341,340,335,
338,336,298,
339,335,340,
336,339,327,
313,303,343,
347,343,320,
304,313,347,
346,347,324,
302,345,348,
345,322,325,
312,348,344,
348,325,321,
334,320,343,
349,343,303,
321,334,349,
344,349,329,
350,345,302,
350,328,304,
310,352,355,
302,312,363,
318,355,363,
356,351,309,
319,313,364,
304,354,364,
302,353,357,
328,357,354,
358,337,309,
359,352,310,
299,341,365,
337,358,365,
338,311,366,
300,361,366,
299,360,362,
342,362,361,
362,368,367,
360,369,368,
371,370,359,
361,367,371,
372,369,360,
358,373,372,
370,374,352,
375,373,358,
357,376,377,
378,376,357,
380,379,356,
354,377,380,
379,375,351,
381,378,353,
355,382,381,
352,374,382,
368,384,383,
369,385,384,
383,370,371,
385,369,372,
386,374,370,
387,385,373,
376,389,388,
378,390,389,
388,379,380,
388,387,375,
390,378,381,
374,386,390,
384,391,386,
385,387,391,
389,391,387,
390,386,391,
392,393,350,
350,393,394,
323,395,392,
394,396,322,
397,398,331,
331,398,399,
400,393,392,
400,396,394,
300,401,402,
342,402,403,
404,682,298,
405,404,327,
311,406,401,
682,406,311,
299,403,407,
407,405,340,
324,320,408,
412,408,306,
323,324,412,
411,412,314,
322,410,413,
410,307,315,
325,413,409,
413,315,305,
306,408,414,
408,320,334,
305,330,414,
409,414,334,
308,399,415,
411,415,395,
396,416,410,
416,397,307,
399,398,417,
417,400,395,
397,416,417,
416,396,400,
282,264,418,
423,418,265,
264,272,420,
418,420,273,
267,419,424,
424,419,266,
275,421,419,
421,274,266,
290,282,423,
423,283,291,
294,285,424,
424,284,293,
291,289,425,
425,287,290,
294,429,425,
429,293,287,
230,431,436,
436,431,231,
238,433,431,
431,433,239,
233,432,437,
437,432,232,
241,434,432,
434,240,232,
256,248,436,
436,249,257,
260,251,437,
437,250,259,
257,255,438,
438,253,256,
260,441,438,
438,441,259,
196,443,448,
448,443,197,
204,445,443,
443,445,205,
199,444,449,
449,444,198,
207,446,444,
444,446,206,
222,214,448,
448,215,223,
226,217,449,
449,216,225,
223,221,450,
450,219,222,
221,226,454,
450,454,225,
160,456,461,
456,161,179,
168,458,456,
458,169,161,
181,163,457,
462,457,162,
163,171,459,
457,459,170,
187,178,461,
461,179,188,
192,181,462,
462,180,191,
188,185,463,
463,183,187,
185,192,466,
463,466,191,
472,473,276,
473,470,279,
268,468,471,
269,469,468,
474,472,277,
474,422,278,
469,269,430,
470,475,430,
477,476,286,
476,479,292,
288,481,478,
481,288,295,
482,477,663,
482,426,662,
483,480,295,
479,483,428,
488,489,242,
489,486,245,
234,484,487,
235,485,484,
490,488,243,
490,435,244,
485,235,442,
486,491,442,
493,492,252,
492,495,258,
254,497,494,
497,254,261,
498,493,680,
498,673,677,
496,261,440,
495,499,440,
504,505,208,
505,502,211,
200,500,503,
201,501,500,
506,504,209,
506,447,210,
501,201,455,
502,507,455,
509,508,218,
508,511,224,
220,513,510,
513,220,227,
514,509,665,
514,451,664,
512,227,453,
515,453,224,
520,521,172,
521,518,175,
164,516,519,
165,517,516,
522,520,173,
522,460,174,
517,165,467,
518,523,467,
525,524,182,
524,527,190,
184,529,526,
529,184,193,
530,525,186,
530,464,189,
528,193,609,
527,531,609,
243,242,532,
533,532,492,
242,245,535,
532,535,495,
497,537,534,
537,234,244,
234,537,536,
537,497,496,
435,243,533,
538,533,493,
435,538,534,
538,498,494,
235,536,539,
536,496,499,
245,442,539,
535,539,499,
209,208,540,
541,540,508,
208,211,543,
540,543,511,
513,545,542,
545,200,210,
200,545,544,
545,513,512,
447,209,541,
546,541,509,
447,546,542,
546,514,510,
201,544,547,
544,512,515,
211,455,547,
543,547,515,
204,202,553,
552,553,505,
202,206,550,
553,550,502,
500,548,551,
548,203,205,
501,549,548,
549,207,203,
445,204,552,
554,552,504,
445,554,551,
551,554,506,
207,549,555,
555,549,501,
446,555,550,
550,555,507,
238,236,561,
560,561,489,
236,240,558,
561,558,486,
484,556,559,
556,237,239,
484,485,557,
557,241,237,
433,238,560,
562,560,488,
433,562,559,
562,490,487,
241,557,563,
563,557,485,
240,434,563,
558,563,491,
272,270,569,
568,569,473,
270,274,566,
569,566,470,
468,564,567,
564,271,273,
469,565,564,
565,275,271,
272,568,570,
570,568,472,
420,570,567,
570,474,471,
421,275,565,
565,469,475,
274,421,571,
566,571,475,
277,276,572,
573,572,476,
276,279,575,
572,575,479,
481,577,574,
577,268,278,
268,577,576,
577,481,480,
422,277,573,
578,573,477,
422,578,574,
578,482,478,
269,576,579,
576,480,483,
279,430,579,
575,579,483,
173,172,580,
581,580,524,
172,175,583,
580,583,527,
529,585,582,
585,164,174,
164,585,584,
585,529,528,
460,173,581,
586,581,525,
460,586,582,
582,586,530,
165,584,587,
584,528,531,
175,467,587,
587,531,527,
168,166,593,
592,593,521,
166,170,590,
593,590,518,
516,588,591,
588,167,169,
517,589,588,
589,171,167,
458,168,592,
594,592,520,
458,594,591,
591,594,522,
459,171,589,
589,517,523,
170,459,595,
595,523,518,
254,286,292,
220,252,258,
218,224,193,
407,600,599,
403,601,600,
601,602,603,
603,604,599,
605,606,402,
605,607,608,
402,606,601,
606,608,602,
288,668,610,
596,643,644,
611,644,598,
604,603,617,
612,617,616,
603,602,618,
617,618,619,
182,190,645,
404,623,638,
638,623,622,
622,625,624,
624,625,612,
604,612,625,
626,625,622,
404,405,626,
599,604,626,
647,643,596,
628,646,647,
616,632,631,
632,615,614,
619,633,632,
632,633,620,
624,634,683,
634,629,630,
613,631,634,
631,614,629,
258,440,641,
640,641,636,
440,261,642,
641,642,637,
292,428,642,
227,258,640,
639,637,642,
610,639,428,
615,650,648,
650,651,649,
649,651,644,
620,659,650,
650,659,658,
658,598,644,
629,656,654,
656,657,655,
655,657,647,
643,647,657,
657,656,648,
656,629,614,
193,224,660,
661,660,652,
190,609,653,
661,653,609,
453,652,660,
453,640,635,
620,633,666,
658,659,666,
667,685,607,
401,406,667,
597,670,669,
672,671,628,
730,672,627,
596,611,669,
621,686,186,
685,678,674,
674,678,679,
675,679,681,
668,406,682,
621,645,646,
635,636,683,
636,637,684,
610,682,638,
637,639,638,
655,646,645,
654,655,653,
630,654,652,
628,671,686,
675,676,731,
675,688,689,
674,689,690,
670,597,691,
666,633,693,
666,692,694,
633,619,732,
618,695,732,
602,696,695,
608,697,696,
607,690,697,
597,598,694,
676,681,700,
698,700,669,
676,698,699,
698,670,687,
701,702,286,
220,703,704,
680,705,706,
673,706,707,
677,707,701,
704,705,680,
705,726,727,
706,727,728,
707,728,702,
703,726,705,
426,708,709,
663,710,708,
662,709,668,
702,710,663,
711,712,708,
708,712,713,
668,709,713,
702,728,711,
713,685,667,
451,714,715,
716,714,451,
718,717,714,
714,717,719,
664,715,703,
703,715,719,
721,720,189,
722,721,464,
723,724,721,
721,724,725,
716,720,725,
686,723,722,
726,681,679,
728,727,679,
685,713,712,
681,717,718,
728,678,712,
717,681,726,
671,672,723,
669,700,729,
729,723,672,
718,725,724,
729,700,724,
184,189,720,
184,716,665,
762,786,785,
786,778,777,
778,766,765,
767,768,780,
763,764,770,
769,770,772,
773,774,764,
787,788,774,
783,784,788,
782,784,783,
766,782,781,
771,772,768,
761,775,776,
776,775,779,
789,801,688,
688,801,797,
689,797,791,
792,798,687,
790,793,692,
692,793,794,
795,790,693,
802,795,732,
800,802,695,
697,799,800,
690,791,799,
694,794,792,
731,699,796,
699,687,798,
742,754,786,
754,750,778,
778,750,744,
768,745,751,
764,743,746,
770,746,747,
774,748,743,
788,755,748,
753,755,788,
752,753,784,
766,744,752,
772,747,745,
762,776,749,
749,776,780,
789,803,815,
801,815,811,
797,811,805,
806,812,798,
804,807,793,
807,808,794,
809,804,790,
816,809,795,
800,814,816,
799,813,814,
791,805,813,
808,806,792,
789,796,810,
796,798,812,
761,785,815,
785,777,811,
777,765,805,
806,767,779,
804,763,769,
807,769,771,
809,773,763,
816,787,773,
814,783,787,
781,783,814,
765,781,813,
808,771,767,
803,810,775,
775,810,812,
757,818,817,
818,819,820,
817,820,758,
736,819,818,
759,740,821,
739,760,824,
756,825,824,
759,822,825,
741,739,823,
741,826,827,
737,827,828,
734,828,829,
740,733,830,
829,819,736,
758,820,830,
820,832,831,
829,833,834,
821,830,831,
828,836,833,
827,837,836,
826,838,837,
826,823,839,
822,840,841,
825,841,842,
823,824,842,
822,821,835,
819,834,832,
742,870,856,
870,869,855,
733,740,855,
754,856,849,
855,850,849,
740,759,850,
750,849,843,
849,850,844,
850,759,756,
745,845,860,
845,846,859,
846,757,738,
743,868,866,
868,867,865,
867,734,735,
746,866,864,
866,865,863,
865,735,736,
748,862,868,
862,861,867,
861,737,734,
854,862,748,
854,853,861,
853,741,737,
858,854,755,
857,853,854,
739,741,853,
851,858,753,
852,857,858,
760,739,857,
744,843,851,
844,852,851,
844,756,760,
747,864,845,
864,863,846,
863,736,757,
869,848,758,
869,870,847,
870,742,749,
758,848,859,
848,847,860,
847,749,751,
872,871,149,
842,841,871,
873,872,153,
839,842,872,
874,873,154,
838,839,873,
871,875,148,
841,840,875,
875,876,146,
840,835,876,
876,877,147,
835,831,877,
877,878,150,
831,832,878,
878,879,155,
832,834,879,
879,880,151,
834,833,880,
880,881,152,
833,836,881,
881,882,157,
836,837,882,
882,874,156,
837,838,874
];

function computeDistanceToLine(pt, vertex0, vertex1) {
	var v0 = new Vector(vertex0.x, vertex0.y, vertex0.z);
	var v1 = new Vector(vertex1.x, vertex1.y, vertex1.z);

	var resultant = v1.subtract(v0);
	var normalVector = resultant.unit();
	var deltaVector = pt.subtract(v0);

	var projectionLength = normalVector.dot(deltaVector);

	if (projectionLength < 0.0) {
		return v0.subtract(pt).length();
	} else if (projectionLength > resultant.length()) {
		return v1.subtract(pt).length();
	} else {
		return Math.abs(resultant.cross(deltaVector).length() / resultant.length());
	}
}

// SkinMesh represents a triangle mesh that will be skinned with a skeleton.
class SkinMesh {
	constructor(gl) {
		// Original (undeformed) mesh data
		this.mOriginalPositions = new Array();
		this.mIndices = new Array();

		// The transformed (skinned) vertex positions
		this.mTransformedPositions = new Array();

		// Weights for each vertex and bone combination
		this.mWeights = new Array();

		// The skin does not have a skeleton initially bound to it.
		// Once the skin has a skeleton bound to it, the corresponding
		// binding matrices for each joint have to be computed.
		this.mSkeleton = null;

		this.gl = gl;

		// Flag to toggle weight display 
		this.mShowWeights = false;

		// The current selected joint for showing weights.
		// This is set by selecting the appropriate joint button in the UI.
		this.mWeightJoint = null;

		// An array that is used to store the weights of the selected joint
		this.mSelectedJointWeights = null;

		// The mesh that draws the weights of the selected joint.
		this.mWeightMesh = null;

		// The actual mesh of the transformed skin.
		this.mMesh = null;

		// Stores the current skinning mode
		this.mSkinMode = null;

		// Various shaders
		this.shader = createShaderProgram(gl, SolidVertexSource, SolidFragmentSource);
		this.wShader = createShaderProgram(gl, WeightVertexSource, WeightFragmentSource);
	}

	// Helper function to retrieve the weight of a vertex with respect to a particular joint
	getVertexWeight(idx, joint) {
		var numJoints = this.mSkeleton.getNumJoints();
		return this.mWeights[idx * numJoints + joint];
	}

	// Helper function to set the weight of a vertex with respect to a particular joint
	setVertexWeight(idx, joint, weight) {
		var numJoints = this.mSkeleton.getNumJoints();
		this.mWeights[idx * numJoints + joint] = weight;
	}

	// Helper function to return the number of vertices in the current mesh
	getNumVertices() {
		return this.mOriginalPositions.length / 3;
	}

	// Helper method to get a vertex with 'id'
	getVertex(idx) {
		return new Vector(this.mOriginalPositions[idx * 3 + 0], this.mOriginalPositions[idx * 3 + 1], this.mOriginalPositions[idx * 3 + 2]);
	}

	// Helper method to set a transformed vertex into the correct location.
	setTransformedVertex(idx, vtx) {
		this.mTransformedPositions[idx * 3 + 0] = vtx.x;
		this.mTransformedPositions[idx * 3 + 1] = vtx.y;
		this.mTransformedPositions[idx * 3 + 2] = vtx.z;
	}

	// Returns the joint for which the vertex has a weight 1.
	// Essentially returning the rigid joint.
	getRigidlyAttachedJoint(id) {
		var numJoints = this.mSkeleton.getNumJoints();
		for (var b = 0; b < numJoints; b++)
			if (this.mWeights[id * numJoints + b] == 1)
				return this.mSkeleton.getJoint(b);
	}

	// NOTE: This function computes fixed weights only for the cylinder mesh
	//       Don't use this function for other meshes. It assumes there are only two joints
	// 		 as indicated in the assignment.
	computeRigidWeights() {
		if (this.mSkeleton) {
			for (var i = 0; i < this.getNumVertices(); i++) {
				var pos = this.getVertex(i);

				if (pos.x < 0.0) {
					// Give full weight to joint #0
					this.setVertexWeight(i, 0, 1.0);
					this.setVertexWeight(i, 1, 0.0);
				} else {
					// Give full weight to joint #1
					this.setVertexWeight(i, 0, 0.0);
					this.setVertexWeight(i, 1, 1.0);
				}
			}
		} else {
			console.log("No skeleton bound to skin");
		}
	}

	// TODO: Task 1 - Subtask 2
	// Implement rigid skinning
	rigidSkinning() {
		for (var i = 0; i < this.getNumVertices(); i++) {
			var pos = this.getVertex(i);
			var joint = this.getRigidlyAttachedJoint(i);
			var boneTransform = joint.getWorldMatrix().multiply(joint.getBindingMatrix());
			var transformedPos = boneTransform.transformPoint(pos);
			this.setTransformedVertex(i, transformedPos);
		}
	}

	// TODO: Task 2 - Subtask 2
	//
	// Compute smoothly blended vertex weights
	computeLinearBlendedWeights() {
		for (var i = 0; i < this.getNumVertices(); i++) {
			var sum = 0.0;
			for (var j = 0; j < this.mSkeleton.getNumJoints(); j++) {
				var joint = this.mSkeleton.getJoint(j);
				var { v0, v1 } = joint.getJointEndPoints();
				var distance = computeDistanceToLine(this.getVertex(i), v0, v1);
				this.setVertexWeight(i, j, 1 / Math.pow(distance, 4.0));
				sum += this.getVertexWeight(i, j);
			}
			for (var j = 0; j < this.mSkeleton.getNumJoints(); j++) {
				this.setVertexWeight(i, j, this.getVertexWeight(i, j) / sum);
			}
		}
	}

	// TODO: Task 2 - Subtask 3
	// Implement linear blended skinning
	linearBlendSkinning() {
		for (var i = 0; i < this.getNumVertices(); i++) {
			var transformedPos = new Vector();
			for (var j = 0; j < this.mSkeleton.getNumJoints(); j++) {
				var weight = this.getVertexWeight(i, j);
				var joint = this.mSkeleton.getJoint(j);
				var boneTransform = joint.getWorldMatrix().multiply(joint.getBindingMatrix());
				var transformedVertex = boneTransform.transformPoint(this.getVertex(i));
				transformedPos = transformedPos.add(transformedVertex.multiply(weight));
			}
			this.setTransformedVertex(i, transformedPos);
		}
	}

	// Update skin called whenever a change is detected in the joint.
	// Typically caused by the UI angle change
	// However in case of animations, you can use this function to do the same functionality.
	updateSkin() {
		if (this.mSkinMode == "rigid") {
			this.rigidSkinning();

		}
		else if (this.mSkinMode == "linear") {
			this.linearBlendSkinning();
		}

		if (!this.mShowWeights)
			this.mesh = new TriangleMesh(this.gl, this.mTransformedPositions, this.mIndices, this.shader);

		else
			this.mWeightMesh = new WeightShadedTriangleMesh(this.gl, this.mTransformedPositions, this.mSelectedJointWeights, this.mIndices, this.wShader);
	}

	// Creates a cylinder mesh along the x-axis
	createCylinderSkinX(rad) {
		// Create a cylinder from [-2 : 2]
		var startX = -2.0;
		var endX = 2.0;
		var numXSegments = 16;
		var numThetaBands = 16;
		var factor = (endX - startX) / numXSegments;

		var radius = 1.0;
		if (rad)
			radius = rad;

		// Fill in the position data
		for (var i = 0; i <= numXSegments; i++) {
			for (var j = 0; j < numThetaBands; j++) {
				var theta = 2 * Math.PI * j / numThetaBands;

				var y = radius * Math.sin(theta);
				var z = radius * Math.cos(theta);

				this.mOriginalPositions.push(startX);
				this.mOriginalPositions.push(y);
				this.mOriginalPositions.push(z);

				this.mTransformedPositions.push(startX);
				this.mTransformedPositions.push(y);
				this.mTransformedPositions.push(z);

				// for every band
				if (i < numXSegments) {
					var i0 = i, i1 = i + 1;
					var j0 = j, j1 = (j + 1) % numThetaBands;
					this.mIndices.push(i0 * numThetaBands + j0);
					this.mIndices.push(i0 * numThetaBands + j1);
					this.mIndices.push(i1 * numThetaBands + j1);
					this.mIndices.push(i0 * numThetaBands + j0);
					this.mIndices.push(i1 * numThetaBands + j1);
					this.mIndices.push(i1 * numThetaBands + j0);
				}
			}
			startX = startX + factor;
		}

		// create the mesh
		this.mesh = new TriangleMesh(this.gl, this.mTransformedPositions, this.mIndices, this.shader);
	}

	createArmSkin() {
		for (var i = 0; i < armPositions.length; i++) {
			this.mOriginalPositions.push(armPositions[i]);
			this.mTransformedPositions.push(armPositions[i]);

			// Flip it around the x-axis and offset it a little bit
			if ((i % 3) == 0) {
				this.mOriginalPositions[i] = -10.0 - this.mOriginalPositions[i];
				this.mTransformedPositions[i] = -10.0 - this.mTransformedPositions[i];
			}
		}

		// Do zero offsetting for obj file using a '1'-indexing scheme
		for (var i = 0; i < armIndices.length; i++) {
			this.mIndices.push(armIndices[i] - 1);
		}

		// compute only edge segments
		this.newIndices = new Array();

		for (var i = 0; i < armIndices.length / 3; i++) {
			var i0 = this.mIndices[i * 3 + 0];
			var i1 = this.mIndices[i * 3 + 1];
			var i2 = this.mIndices[i * 3 + 2];

			this.newIndices.push(i0);
			this.newIndices.push(i1);
			this.newIndices.push(i1);
			this.newIndices.push(i2);
			this.newIndices.push(i2);
			this.newIndices.push(i0);
		}

		this.mesh = new TriangleMesh(this.gl, this.mTransformedPositions, this.newIndices, this.shader);
	}

	// Attaches ("binds") a skeleton to the skin.
	// Also computes binding matrices and vertex weights.
	setSkeleton(val, mode) {
		this.mSkeleton = val;

		if (this.mSkeleton)
			this.mSkeleton.computeBindingMatrices();

		this.mWeights = new Array(this.getNumVertices() * this.mSkeleton.getNumJoints());

		// We have a skeleton now.
		// We can compute weights for each vertex
		this.mSkinMode = mode;
		if (mode == "linear") {
			this.computeLinearBlendedWeights();
		}

		else {
			this.computeRigidWeights();
		}
	}

	// Generates the mesh that displays the vertex weights of the selected joint
	showJointWeights(id) {
		this.mShowWeights = id >= 0;
		this.mWeightJoint = id;

		if (this.mShowWeights && this.mSkeleton) {
			// weights was toggled
			// create a new mesh with the correct weights
			this.mSelectedJointWeights = new Array();
			this.mSkeleton.getNumJoints();

			for (var i = 0; i < this.mOriginalPositions.length / 3; i++) {
				// get only weights for the joint selected
				//var temp = this.mWeights[i * numJoints + this.mWeightJoint];
				var temp = this.getVertexWeight(i, this.mWeightJoint);
				this.mSelectedJointWeights.push(temp);
			}

			this.mWeightMesh = new WeightShadedTriangleMesh(this.gl, this.mTransformedPositions, this.mSelectedJointWeights, this.mIndices, this.wShader);
		}

		else {
			console.log("No skeleton bound to compute weights");
		}
	}

	// Renders a skin mesh with the selected options.
	render(gl, view, projection, drawWireFrame) {
		if (!this.mShowWeights) {
			if (this.mesh) {
				this.mesh.render(gl, new Matrix(), view, projection, drawWireFrame);
			}
		}

		else {
			if (this.mWeightMesh && this.mSkeleton) {
				this.mWeightMesh.render(gl, new Matrix(), view, projection);
			}
		}
	}
}

// Skeleton class contains all the bones in an array
// Hierarchies are established through the bones themselves.
class Skeleton {
	constructor(_gl) {
		this.mJoints = new Array();
	}

	// Add a joint to the skeleton list.
	addJoint(val) {
		this.mJoints.push(val);
	}

	// Given an index into the skeleton hierarchy, return the actual joint.
	getJoint(index) {
		if (index < this.mJoints.length)
			return this.mJoints[index];
		else
			return null;
	}

	// Return the number of joints within the skeleton
	getNumJoints() {
		return this.mJoints.length;
	}

	getJointName(index) {
		if (index < this.mJoints.length)
			return this.mJoints[index].mName;
		else
			return null;
	}

	computeBindingMatrices() {
		for (var i = 0; i < this.mJoints.length; i++)
			this.mJoints[i].computeBindingMatrix();
	}

	// Iterates through all the joints in the skeleton
	// and renders them as a wireframe mesh.
	render(gl, view, projection) {
		for (var i = 0; i < this.mJoints.length; i++)
			this.mJoints[i].render(gl, view, projection);
	}
}

var CubePositions = [
  -0.5, -0.5,  0.5,
   0.5, -0.5,  0.5,
   0.5,  0.5,  0.5,
  -0.5,  0.5,  0.5,
  -0.5, -0.5, -0.5,
  -0.5,  0.5, -0.5,
   0.5,  0.5, -0.5,
   0.5, -0.5, -0.5,
  -0.5,  0.5, -0.5,
  -0.5,  0.5,  0.5,
   0.5,  0.5,  0.5,
   0.5,  0.5, -0.5,
  -0.5, -0.5, -0.5,
   0.5, -0.5, -0.5,
   0.5, -0.5,  0.5,
  -0.5, -0.5,  0.5,
   0.5, -0.5, -0.5,
   0.5,  0.5, -0.5,
   0.5,  0.5,  0.5,
   0.5, -0.5,  0.5,
  -0.5, -0.5, -0.5,
  -0.5, -0.5,  0.5,
  -0.5,  0.5,  0.5,
  -0.5,  0.5, -0.5,
];

var CubeIndices = [
   0,  1,  2,  0,  2,  3,
   4,  5,  6,  4,  6,  7,
   8,  9, 10,  8, 10, 11,
  12, 13, 14, 12, 14, 15,
  16, 17, 18, 16, 18, 19,
  20, 21, 22, 20, 22, 23,
];

class Joint {
  /**
   * 
   * @param {*} v0 - origin in world coords
   * @param {*} v1 - end in world coords
   */
  constructor(parent, v0, v1, name, gl) {
    this.mParent = parent;
    this.mOriginPosition = v0;
    this.mEndPosition = v1;
    this.mName = name;
    this.mLength = v1.subtract(v0).length();
    this.mBindingMatrix = null;
    this.gl = gl;

    let shader = createShaderProgram(gl, SolidVertexSource, SolidFragmentSource);
    this.mesh = new TriangleMesh(
      gl,
      CubePositions,
      CubeIndices,
      shader,
      true,
      true,
      new Vector(0.4, 0.7, 0.4),
      new Vector(0.5, 1, 0.5)
    );

    this.mJointAngle = null;
    this.mJointAxis = null;

    recomputeJointAngleAndAxis(this);
  }

  setJointOrigin(v0) {
    this.mOriginPosition = v0;
    recomputeJointAngleAndAxis(this);
  }

  setJointEnd(v1) {
    this.mEndPosition = v1;
    recomputeJointAngleAndAxis(this);
  }

  setJointEndpoints(v0, v1) {
    this.setJointOrigin(v0);
    this.setJointEnd(v1);
  }

  getJointEndPoints() {
    return {
      v0: this.mOriginPosition,
      v1: this.mEndPosition
    };
  }

  // NOTE: if the skeleton has not been attached to the skin yet, this returns null
  getBindingMatrix() {
    return this.mBindingMatrix;
  }

  getName() {
    return this.mName;
  }

  getLocalMatrix() {
    // Returns the local transform of the current joint
    var localMatrix = new Matrix();
    var rotateMatrix = Matrix.rotate(this.mJointAngle, this.mJointAxis.x, this.mJointAxis.y, this.mJointAxis.z);
    var translateMatrix = Matrix.translate(this.mOriginPosition.x, this.mOriginPosition.y, this.mOriginPosition.z);
    return localMatrix.multiply(translateMatrix).multiply(rotateMatrix);
  }

  getWorldMatrix() {
    // Returns the world transform of the current joint.
    // since we are not using a hierarchy, this is the same as the local transform
    return this.getLocalMatrix();
  }

  computeBindingMatrix() {
    // Returns the end points of the joint in world space
    // Can be used to compute the distance to the line segment
    // The returned values are 'v0' and 'v1'
    this.mBindingMatrix = new Matrix();
    this.mBindingMatrix = this.getWorldMatrix().inverse();
    return this.mBindingMatrix;
  }

  // Computes the model matrix used to draw the joint.
  computeModelMatrix() {
    var pose = this.getWorldMatrix();
    // Do a scaling about the origin of the cube for the correct size
    var sMatrix = Matrix.scale(this.mLength, 0.1, 0.1);
    // And then offset it to coincide with the joint
    var tMatrix = Matrix.translate(this.mLength / 2, 0, 0);
    return pose.multiply(tMatrix.multiply(sMatrix));
  }

  // Renders the joint as a cube
  render(gl, view, projection) {
    this.mModelMatrix = this.computeModelMatrix();
    this.mesh.render(gl, this.mModelMatrix, view, projection);
  }
}

// helpers
const recomputeJointAngleAndAxis = function(joint) {
  const pv0 = joint.mOriginPosition.subtract(new Vector(1, 0, 0));
  const pv1 = joint.mOriginPosition;
  const v0 = joint.mOriginPosition;
  const v1 = joint.mEndPosition;

  // calculate joint angle based on parent endpoints and current endpoints
  let b1 = pv0.subtract(pv1);
  let b2 = v1.subtract(v0);

  let dot = b1.dot(b2);
  let angle = -Math.acos(-dot / (b1.length() * b2.length()));

  let jointAxis = b1.cross(b2).unit();
  // set some default axis if angle is zero
  if (!jointAxis.length()) jointAxis.x = 1;

  joint.mJointAngle = angle * (180 / Math.PI);
  joint.mJointAxis = jointAxis;
};

// set wrist anchor
const wrist = new Vector(-2, 0, 0.25);

// set initial landmark positions (numbered according to fig 2 of https://google.github.io/mediapipe/solutions/hands.html)
const landmarks = {
  '-2': new Vector(-15, 0, 0),
  '-1': new Vector(-8.4, 0, 0.15),
  '0': wrist,
  '1': wrist.add(new Vector(0, -0.1, -0.75)),
  '2': wrist.add(new Vector(0.8, -0.45, -1.15)),
  '3': wrist.add(new Vector(1.4, -0.7, -1.4)),
  '4': wrist.add(new Vector(1.8, -0.9, -1.55)),
  5: wrist.add(new Vector(1.7, -0.1, -0.85)),
  6: wrist.add(new Vector(2.4, -0.35, -0.95)),
  7: wrist.add(new Vector(2.8, -0.525, -1)),
  8: wrist.add(new Vector(3.1, -0.65, -1.08)),
  9: wrist.add(new Vector(1.8, -0.1, -0.25)),
  10: wrist.add(new Vector(2.6, -0.3, -0.3)),
  11: wrist.add(new Vector(3.1, -0.48, -0.35)),
  12: wrist.add(new Vector(3.5, -0.55, -0.4)),
  13: wrist.add(new Vector(1.75, -0.15, 0.25)),
  14: wrist.add(new Vector(2.4, -0.38, 0.3)),
  15: wrist.add(new Vector(2.85, -0.5, 0.35)),
  16: wrist.add(new Vector(3.18, -0.58, 0.38)),
  17: wrist.add(new Vector(1.55, -0.25, 0.65)),
  18: wrist.add(new Vector(2.1, -0.55, 0.78)),
  19: wrist.add(new Vector(2.35, -0.7, 0.84)),
  20: wrist.add(new Vector(2.68, -0.85, 0.93)),
};
const joints = [
  // arm
  { v0: '-2', v1: '-1', name: 'upper arm' },
  { v0: '-1', v1: '0',  name: 'lower arm' },
  // thumb
  { v0: '0', v1: '1', name: 'thumb 1' },
  { v0: '1', v1: '2', name: 'thumb 2' },
  { v0: '2', v1: '3', name: 'thumb 3' },
  { v0: '3', v1: '4', name: 'thumb 4' },
  // palm
  { v0: '0',  v1: '5',  name: 'palm 1' },
  { v0: '0',  v1: '17', name: 'palm 2' },
  { v0: '5',  v1: '9',  name: 'palm 3' },
  { v0: '9',  v1: '13', name: 'palm 4' },
  { v0: '13', v1: '17', name: 'palm 5' },
  // index
  { v0: '5', v1: '6', name: 'index 1' },
  { v0: '6', v1: '7', name: 'index 2' },
  { v0: '7', v1: '8', name: 'index 3' },
  // middle
  { v0: '9',  v1: '10', name: 'middle 1' },
  { v0: '10', v1: '11', name: 'middle 2' },
  { v0: '11', v1: '12', name: 'middle 3' },
  // ring
  { v0: '13', v1: '14', name: 'ring 1' },
  { v0: '14', v1: '15', name: 'ring 2' },
  { v0: '15', v1: '16', name: 'ring 3' },
  // pinky
  { v0: '17', v1: '18', name: 'pinky 1' },
  { v0: '18', v1: '19', name: 'pinky 2' },
  { v0: '19', v1: '20', name: 'pinky 3' }
];

class HandRenderer {
  constructor(gl) {
    // set camera pose
    this.pitch = 0;
    this.yaw = 0;

    // Create a skin mesh
    this.skin = new SkinMesh(gl);
    this.skin.createArmSkin();

    // Create an empty skeleton for now.
    this.skeleton = new Skeleton();

    // helper
    const addSeparation = (v0, v1) => {
      const sep = 0.075; // 7.5%
      return [
        v0.add(v1.subtract(v0).multiply(sep)),
        v1.add(v0.subtract(v1).multiply(sep))
      ]
    };

    // pass joints to skeleton
    Object.values(joints).map(j => {
      const v0 = landmarks[j.v0];
      const v1 = landmarks[j.v1];
      this.skeleton.addJoint(new Joint(
        null,
        ...addSeparation(v0, v1),
        j.name,
        gl
      ));
    });

    // pass skeleton to skin
    this.skin.setSkeleton(this.skeleton, 'linear');

    gl.enable(gl.DEPTH_TEST);
  }

  /* 
  1  0  0  0 | 1
  0  1  0  0 | 1
  0  0  1  0 | 1
  0  0  0  1 | 1
  */  

  transformVector(m, v) {
    return new Vector(
      m[0] * v.x + m[1] * v.y + m[2] * v.z,
      m[4] * v.x + m[5] * v.y + m[6] * v.z,
      m[8] * v.x + m[9] * v.y + m[10] * v.z
    );
  }

  render(gl, w, h, positions) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    var projection = Matrix.perspective(60, w / h, 0.1, 100);
    var view = Matrix.translate(-8, 0, -5).multiply(
      Matrix.rotate(this.pitch, 1, 0, 0)).multiply(
        Matrix.rotate(this.yaw, 0, 1, 0)).multiply(
          Matrix.translate(8, 0, 0)).multiply(
            Matrix.rotate(30, 1, 0, 0));

    if (this.skin) {
      this.skin.render(gl, view, projection, false);
    }

    if (this.skeleton) {
      gl.clear(gl.DEPTH_BUFFER_BIT);

      // loop over every position in the new hand positions
      // for (var i = 2; i < positions.length; i++) {
        // get the position

      if (positions.length > 0) {
        // x: right
        // y: up
        // z: towards camera

        // left to right from mediapipe, goes up and down (x, y)

        // transform from mediapipe to world space
        const transformPos = (pos) => {
          var xRot = Matrix.rotate(270, 1, 0, 0);
          var yRot = Matrix.rotate(-270, 0, 1, 0);

          // -2, 0, 0.25
          // -0.5 offsets the wrist to the center of screen
          // more negative x, moves the hand to the right
          var wristVector =  new Vector(4.0*(pos.x) - 2.0, 4.0*(pos.y), 4.0*(pos.z)); // new Vector(4.0*(pos.x) + 0.5, 4.0*(pos.y) - 2.0, 4.0*(pos.z));
          var rotWristVector = this.transformVector(xRot.m, wristVector); // wristVector.multiply(Matrix.rotate(0, 1, 1, 1)); // .multiply(Matrix.rotate(180, 0, 1, 0));
          var yRotWrist = this.transformVector(yRot.m, rotWristVector);
          // var finalWrist = this.transformVector(zRot.m, yRotWrist);

          return yRotWrist;
        };

        // for each position, update all joints that use the landmark
        positions.forEach((position, idx) => {
          // find all joints that use this
          const { v0s, v1s } = joints.reduce((acc, j, id) => {
            if (j.v0 === idx.toString()) acc.v0s.push(id);
            if (j.v1 === idx.toString()) acc.v1s.push(id);
            return acc;
          }, { v0s: [], v1s: [] });

          // get new pos in world space
          const pos = transformPos(position);

          v0s.forEach(id => {
            // update joint origin
            this.skeleton.getJoint(id).setJointOrigin(pos);
          });
          v1s.forEach(id => {
            // update joint end
            this.skeleton.getJoint(id).setJointEnd(pos);
          });
        });
      }

      this.skeleton.render(gl, view, projection);
      this.skin.updateSkin();
    }
  }

  // setJointEndpoints(id, v0, v1) {
  //   if (this.skeleton && id < this.skeleton.getNumJoints()) {
  //     this.skeleton.getJoint(id).setJointEndpoints(v0, v1);
  //     this.skin.updateSkin();
  //   }
  // }

  dragCamera(dx, dy) {
    this.pitch = Math.min(Math.max(this.pitch + dy * 0.5, -180), 180);
    this.yaw = this.yaw + dx * 0.5;
  }
}

// why does mediapipe mount this here? no idea
const { Hands, Camera, drawLandmarks } = window;

const hands = new Hands({
  locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/hands/${file}`;
  }
});

hands.setOptions({
  maxNumHands: 2,
  modelComplexity: 1,
  minDetectionConfidence: 0.7,
  minTrackingConfidence: 0.7
});

function setupTask(canvasId, taskFunction) {
  const videoElement = document.getElementsByClassName('input_video')[0];
  const canvasElement = document.getElementsByClassName('output_canvas')[0];
  const canvasCtx = canvasElement.getContext('2d');

  var renderLoop;

  canvasCtx.save();
  canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

  var canvas = document.getElementById(canvasId);
  if (!canvas) {
    console.log("Could not find canvas with id", canvasId);
    return;
  }

  try {
    var gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
  } catch (e) {}
  if (!gl) {
    console.log("Could not initialise WebGL");
    return;
  }

  var renderWidth, renderHeight;
  function computeCanvasSize() {
    renderWidth = Math.min(canvas.parentNode.clientWidth - 20, 820);
    renderHeight = Math.floor(renderWidth * 9.0 / 16.0);
    canvas.width = renderWidth;
    canvas.height = renderHeight;
    gl.viewport(0, 0, renderWidth, renderHeight);
  }

  window.addEventListener('resize', computeCanvasSize);
  computeCanvasSize();

  var task = new taskFunction(gl);

  var mouseDown = false;
  var lastMouseX, lastMouseY;
  var positions = [];

  var mouseMoveListener = function(event) {
    task.dragCamera(event.screenX - lastMouseX, event.screenY - lastMouseY);
    lastMouseX = event.screenX;
    lastMouseY = event.screenY;
  };
  canvas.addEventListener('mousedown', function(event) {
    if (!mouseDown && event.button == 0) {
      mouseDown = true;
      lastMouseX = event.screenX;
      lastMouseY = event.screenY;
      document.addEventListener('mousemove', mouseMoveListener);
    }
    event.preventDefault();
  });
  document.addEventListener('mouseup', function(event) {
    if (mouseDown && event.button == 0) {
      mouseDown = false;
      document.removeEventListener('mousemove', mouseMoveListener);
    }
  });

  var uiContainer = div();
  var groupTarget = div();
  var weightSelector = ["Hide Weights"];

  uiContainer.appendChild(div('button-group-container', groupTarget));
  new ButtonGroup(groupTarget, weightSelector, function(idx) {
    task.showJointWeights(idx - 1);
  });
  canvas.parentNode.appendChild(uiContainer);

  renderLoop = function() {
    task.render(gl, renderWidth, renderHeight, positions);
    setTimeout(() => window.requestAnimationFrame(renderLoop), 1000 / 60);
  };

  window.requestAnimationFrame(renderLoop);

  hands.onResults((results) => {

    canvasCtx.save();
    canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasCtx.drawImage(
        results.image, 0, 0, canvasElement.width, canvasElement.height);
    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
      positions = results.multiHandLandmarks[0];

      /* for (const landmarks of results.multiHandLandmarks) {
        drawConnectors(canvasCtx, landmarks, HAND_CONNECTIONS,
                      {color: '#00FF00', lineWidth: 5});
      } */
      // drawLandmarks(canvasCtx, [positions[8]], {color: '#FF0000', lineWidth: 2});

    } else {
      positions = [];
    }

    canvasCtx.restore();

    /* if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {

      canvasCtx.drawImage(results.image, 0, 0, canvasElement.width, canvasElement.height);
      window.requestAnimationFrame(renderLoop);
    } else {
      positions = [];
    }*/
  });

  const camera = new Camera(videoElement, {
    onFrame: async () => {
      await hands.send({ image: videoElement });
    },
    width: 662,
    height: 372
  });

  camera.start();
}

// entrypoint
function initialize(canvasId) {
  setupTask(canvasId, HandRenderer);
}

// ref initialize to keep in bundle
console.log(initialize);
