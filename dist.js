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

/**
* FUNCTION: isArray( value )
*	Validates if a value is an array.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating whether value is an array
*/
function isArray$1( value ) {
	return Object.prototype.toString.call( value ) === '[object Array]';
} // end FUNCTION isArray()

// EXPORTS //

var lib$2 = Array.isArray || isArray$1;

// MODULES //

var isArray = lib$2;


// ISOBJECT //

/**
* FUNCTION: isObject( value )
*	Validates if a value is a object; e.g., {}.
*
* @param {*} value - value to be validated
* @returns {Boolean} boolean indicating whether value is a object
*/
function isObject$1( value ) {
	return ( typeof value === 'object' && value !== null && !isArray( value ) );
} // end FUNCTION isObject()


// EXPORTS //

var lib$1 = isObject$1;

/**
*
*	COMPUTE: quantile
*
*
*	DESCRIPTION:
*		- Computes a quantile for a numeric array.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

// MODULES //

var isObject = lib$1;


// FUNCTIONS //

/**
* FUNCTION: ascending( a, b )
*	Comparator function used to sort values in ascending order.
*
* @private
* @param {Number} a
* @param {Number} b
* @returns {Number} difference between `a` and `b`
*/
function ascending( a, b ) {
	return a - b;
} // end FUNCTION ascending()


// QUANTILE //

/**
* FUNCTION: quantile( arr, prob[, opts] )
*	Computes a quantile for a numeric array.
*
* @private
* @param {Array} arr - 1d array
* @param {Number} prob - quantile prob [0,1]
* @param {Object} [opts] - method options:
	`method`: method used to interpolate a quantile value
	`sorted`: boolean flag indicating if the input array is sorted
* @returns {Number} quantile value
*/
function quantile( arr, p, opts ) {
	if ( !Array.isArray( arr ) ) {
		throw new TypeError( 'quantile()::invalid input argument. First argument must be an array.' );
	}
	if ( typeof p !== 'number' || p !== p ) {
		throw new TypeError( 'quantile()::invalid input argument. Quantile probability must be numeric.' );
	}
	if ( p < 0 || p > 1 ) {
		throw new TypeError( 'quantile()::invalid input argument. Quantile probability must be on the interval [0,1].' );
	}
	if ( arguments.length > 2 ) {
		if ( !isObject( opts ) ) {
			throw new TypeError( 'quantile()::invalid input argument. Options must be an object.' );
		}
		if ( opts.hasOwnProperty( 'sorted' ) && typeof opts.sorted !== 'boolean' ) {
			throw new TypeError( 'quantile()::invalid input argument. Sorted flag must be a boolean.' );
		}
		if ( opts.hasOwnProperty( 'method' ) && typeof opts.method !== 'string' ) {
			throw new TypeError( 'quantile()::invalid input argument. Method must be a string.' );
		}
		// TODO: validate that the requested method is supported. list.indexOf( method )
	} else {
		opts = {};
	}
	var len = arr.length,
		id;

	if ( !opts.sorted ) {
		arr = arr.slice();
		arr.sort( ascending );
	}

	// Cases...

	// [0] 0th percentile is the minimum value...
	if ( p === 0.0 ) {
		return arr[ 0 ];
	}
	// [1] 100th percentile is the maximum value...
	if ( p === 1.0 ) {
		return arr[ len-1 ];
	}
	// Calculate the vector index marking the quantile:
	id = ( len*p ) - 1;

	// [2] Is the index an integer?
	if ( id === Math.floor( id ) ) {
		// Value is the average between the value at id and id+1:
		return ( arr[ id ] + arr[ id+1 ] ) / 2.0;
	}
	// [3] Round up to the next index:
	id = Math.ceil( id );
	return arr[ id ];
} // end FUNCTION quantile()


// EXPORTS //

var lib = quantile;

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

  static fromMediapipeVec(v) {
    return new Vector(v.x, v.y, v.z);
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
    this.edgeColor = defaultArg(edgeColor, new Vector(0.0, 0.0, 1.0));

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


// WeightMesh - used to show the weights of the mesh
class WeightShadedTriangleMesh {
  constructor(gl, vertexPositions, weights, indices, shaderProgram, drawFaces, drawEdges, faceColor, edgeColor) {
    this.triangleMesh = new TriangleMesh(gl, vertexPositions, indices, shaderProgram, drawFaces, drawEdges, faceColor, edgeColor);
    this.weightsVbo = createVertexBuffer(gl, weights);
    this.shaderProgram = shaderProgram;
  }

  render(gl, model, view, projection) {
    gl.useProgram(this.shaderProgram);

    gl.bindBuffer(gl.ARRAY_BUFFER, this.weightsVbo);
    var weightAttrib = gl.getAttribLocation(this.shaderProgram, "Weight");
    gl.enableVertexAttribArray(weightAttrib);
    gl.vertexAttribPointer(weightAttrib, 1, gl.FLOAT, false, 0, 0);

    this.triangleMesh.render(gl, model, view, projection);
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
-1.592564,-0.538340,0.127527,
-10.377671,-0.732794,1.232394,
-10.407557,-0.699274,1.225061,
-10.338129,-0.809764,1.188820,
-10.378004,-0.782587,1.228523,
-10.487235,-0.639464,1.046425,
-10.467590,-0.624811,1.091712,
-10.463160,-0.700457,0.968451,
-10.494483,-0.666852,1.009103,
-10.875342,-0.468360,0.766255,
-10.885580,-0.525462,0.767361,
-10.831068,-0.576353,0.738569,
-10.916877,-0.392113,0.545078,
-10.930058,-0.377035,0.589542,
-10.880239,-0.486059,0.476642,
-10.934055,-0.436401,0.508995,
-11.154688,-0.387311,0.028892,
-11.171137,-0.451540,0.048200,
-11.407189,-0.449538,0.003022,
-11.400710,-0.500002,0.018862,
-11.115502,-0.518822,0.051581,
-11.349027,-0.577042,0.020895,
-11.388660,-0.438097,-0.271215,
-11.405242,-0.417124,-0.236963,
-11.135884,-0.375593,-0.251701,
-11.163357,-0.345174,-0.213521,
-11.327913,-0.564005,-0.292158,
-11.379808,-0.487096,-0.290698,
-11.078230,-0.501036,-0.279321,
-11.149159,-0.437867,-0.279484,
-10.897154,-0.449617,-0.694950,
-10.899157,-0.496943,-0.663795,
-11.099079,-0.515719,-0.742410,
-10.851525,-0.553440,-0.637111,
-11.027107,-0.552702,-0.977018,
-10.820251,-0.484305,-0.934597,
-10.850269,-0.451376,-0.912624,
-10.764143,-0.597907,-0.921294,
-10.824867,-0.545001,-0.946629,
-9.518036,-0.575270,-1.069176,
-9.423750,-0.803749,-0.994231,
-9.111853,-0.779621,-0.979140,
-9.279470,-0.421849,-0.960547,
-9.258311,-0.390730,-1.021051,
-9.198390,-0.698376,-0.889623,
-9.235784,-0.626367,-0.880569,
-9.264008,-0.547610,-0.882651,
-9.281413,-0.470544,-0.907952,
-9.482594,-0.925303,-1.272320,
-9.598123,-0.983115,-1.313240,
-9.612247,-0.650844,-1.259513,
-9.728178,-0.709561,-1.300789,
-9.671954,-0.934631,-1.124500,
-9.545888,-0.873421,-1.038588,
-9.743505,-0.797313,-1.122626,
-9.617615,-0.733574,-1.034729,
-8.986328,-0.680545,-1.181035,
-9.029944,-0.743409,-1.107909,
-9.141853,-0.385983,-1.156568,
-9.215002,-0.383887,-1.084079,
-9.095510,-0.336669,-1.085434,
-8.982209,-0.574223,-1.234466,
-9.045276,-0.445658,-1.238678,
-8.848825,-0.348397,-1.139112,
-8.814341,-0.414997,-1.150311,
-8.790890,-0.498644,-1.139832,
-8.796076,-0.581512,-1.103104,
-9.143376,-0.488752,-0.753212,
-9.117434,-0.577377,-0.744645,
-9.071598,-0.647681,-0.757734,
-9.012445,-0.701271,-0.788705,
-9.014688,-0.255100,-1.023587,
-8.913934,-0.288386,-1.092448,
-9.160597,-0.330670,-0.843194,
-8.839342,-0.652357,-1.025425,
-8.912292,-0.718427,-0.949745,
-8.944495,-0.692224,-1.085102,
-8.940647,-0.722716,-0.852714,
-11.086711,-0.498949,-0.816956,
-11.052254,-0.511443,-0.909841,
-10.903240,-0.421626,-0.785411,
-10.876760,-0.425544,-0.827878,
-10.865286,-0.432029,-0.873694,
-10.944498,-0.727588,-0.851669,
-10.976931,-0.705824,-0.730179,
-10.759031,-0.675706,-0.817410,
-10.754492,-0.659162,-0.879917,
-10.808933,-0.655893,-0.684599,
-10.778605,-0.661720,-0.746220,
-11.419303,-0.416329,-0.083419,
-11.419134,-0.425713,-0.031245,
-11.412478,-0.412103,-0.184658,
-11.194374,-0.343720,-0.060702,
-11.177003,-0.353678,-0.010061,
-11.187363,-0.339342,-0.165328,
-11.283363,-0.655321,-0.202157,
-11.293289,-0.659981,-0.061037,
-11.056690,-0.607046,-0.199853,
-11.063633,-0.576393,-0.253847,
-11.084936,-0.617926,-0.034864,
-11.063213,-0.608449,-0.116677,
-11.108310,-0.471991,0.727961,
-11.123304,-0.444468,0.648125,
-10.923752,-0.412787,0.716521,
-10.899920,-0.432308,0.749862,
-10.939259,-0.384358,0.634067,
-10.863051,-0.594070,0.505980,
-10.865923,-0.553273,0.472575,
-10.839229,-0.638373,0.631140,
-10.824972,-0.628466,0.690697,
-10.426982,-0.674406,1.198215,
-10.472095,-0.645097,1.134465,
-10.445156,-0.657223,1.162284,
-10.413305,-0.797198,0.990233,
-10.351553,-0.842432,1.089109,
-10.492967,-0.274483,-0.611791,
-10.489277,-0.236535,-0.666002,
-10.471594,-0.405317,-0.550175,
-10.489021,-0.331185,-0.568680,
-10.428546,-0.315508,-0.857970,
-10.447504,-0.263146,-0.825611,
-10.393099,-0.455387,-0.850330,
-10.409890,-0.381600,-0.871112,
-10.498818,-0.237926,-0.713585,
-10.444024,-0.224919,-0.743672,
-10.478359,-0.250911,-0.791778,
-10.376751,-0.522961,-0.743283,
-10.435501,-0.531736,-0.683637,
-10.412325,-0.500162,-0.607244,
-10.449389,-0.474204,-0.558311,
-9.965851,-0.043259,-0.481719,
-9.949491,-0.002671,-0.545136,
-9.983047,-0.237108,-0.414853,
-9.812549,-0.132981,-0.360469,
-9.968805,-0.125730,-0.433954,
-9.898207,-0.084867,-0.762207,
-9.910229,-0.024457,-0.719139,
-9.879623,-0.272976,-0.760840,
-9.935021,-0.373479,-0.719686,
-9.963954,0.004763,-0.593846,
-9.898655,0.027541,-0.624811,
-9.941153,-0.009022,-0.685765,
-9.906954,-0.381196,-0.635149,
-9.715862,-0.340404,-0.602902,
-9.948396,-0.384700,-0.556898,
-9.953583,-0.363838,-0.494606,
-9.980728,-0.320053,-0.439962,
-10.691746,-0.226001,0.075377,
-10.696874,-0.172473,0.027066,
-10.662111,-0.381317,0.101847,
-10.681324,-0.297085,0.105574,
-10.672964,-0.213713,-0.209766,
-10.684725,-0.164490,-0.157669,
-10.642164,-0.357464,-0.247811,
-10.658213,-0.282012,-0.244881,
-10.716649,-0.162785,-0.021511,
-10.663966,-0.143306,-0.062000,
-10.710697,-0.158826,-0.112050,
-10.602741,-0.462286,-0.160830,
-10.653704,-0.484248,-0.086436,
-10.613346,-0.470511,0.005673,
-10.642700,-0.453574,0.070789,
-10.073728,-0.008942,0.152345,
-9.836468,0.070574,0.178428,
-10.062838,0.049028,0.097496,
-10.087458,-0.233975,0.185438,
-9.885900,-0.146084,0.226986,
-10.078215,-0.108251,0.184011,
-10.053446,0.005738,-0.178356,
-10.053155,0.056542,-0.107424,
-9.807725,0.087714,-0.157944,
-10.058289,-0.199402,-0.227418,
-10.074747,-0.307906,-0.196346,
-10.270467,-0.253449,-0.235785,
-10.094421,0.067520,0.053776,
-10.034616,0.098451,0.009902,
-10.088370,0.072903,-0.054681,
-10.056649,-0.342956,-0.109343,
-10.121262,-0.366225,-0.026888,
-10.067990,-0.350206,0.072495,
-9.895533,-0.321767,0.104158,
-10.096373,-0.323084,0.155848,
-10.471194,-0.332887,0.741811,
-10.482731,-0.278216,0.719490,
-10.449167,-0.464947,0.714348,
-10.459619,-0.397360,0.744080,
-10.513353,-0.255518,0.517539,
-10.509287,-0.229147,0.579754,
-10.500728,-0.370189,0.439648,
-10.511509,-0.302004,0.467701,
-10.507190,-0.258846,0.688617,
-10.476257,-0.234007,0.650698,
-10.519827,-0.235245,0.622685,
-10.459171,-0.465786,0.473553,
-10.482294,-0.500281,0.537895,
-10.434246,-0.512154,0.604703,
-10.443345,-0.515726,0.666193,
-9.940056,-0.160197,0.708259,
-9.935917,-0.099259,0.683397,
-9.938875,-0.330024,0.687896,
-9.805186,-0.291775,0.688325,
-9.948925,-0.239424,0.713258,
-9.990239,-0.076693,0.451555,
-9.976440,-0.052646,0.525797,
-10.015631,-0.228720,0.364858,
-10.024490,-0.327481,0.373670,
-9.969424,-0.074977,0.656884,
-9.928391,-0.037950,0.612724,
-9.986310,-0.049663,0.577491,
-10.001116,-0.379440,0.422133,
-9.992796,-0.401571,0.484232,
-9.968872,-0.408229,0.563550,
-10.002303,-0.413045,0.643079,
-10.105139,-0.563037,1.174367,
-10.127323,-0.514982,1.161938,
-10.076479,-0.666149,1.130901,
-10.086496,-0.616136,1.167084,
-10.204287,-0.465768,0.983663,
-10.189613,-0.453561,1.043114,
-10.197546,-0.547194,0.897824,
-10.208422,-0.496428,0.932281,
-10.156923,-0.497071,1.139157,
-10.145483,-0.464747,1.103130,
-10.186432,-0.467749,1.083210,
-10.140296,-0.636659,0.916502,
-10.135221,-0.684312,0.980314,
-10.082531,-0.692863,1.028615,
-10.076771,-0.701157,1.080312,
-9.731062,-0.338045,1.092360,
-9.739328,-0.279717,1.076619,
-9.728061,-0.489700,1.086394,
-9.726032,-0.411525,1.099314,
-9.842461,-0.234098,0.867166,
-9.815983,-0.223976,0.941107,
-9.855970,-0.369135,0.783292,
-9.854877,-0.443713,0.789184,
-9.766684,-0.260863,1.060973,
-9.763148,-0.223176,1.019601,
-9.811737,-0.230496,0.993298,
-9.809957,-0.488322,0.829907,
-9.803432,-0.537414,0.894079,
-9.751556,-0.546446,0.963756,
-9.641078,-0.511097,0.950641,
-9.742594,-0.546237,1.042863,
-10.377898,-0.105829,0.107435,
-10.368679,-0.281450,0.142980,
-10.295553,-0.271341,0.157810,
-10.359028,-0.092983,-0.182934,
-10.344307,-0.264421,-0.233276,
-10.334602,-0.381327,-0.134723,
-10.345657,-0.389185,0.039138,
-10.876159,-0.457006,0.075729,
-10.846296,-0.437826,-0.260471,
-10.142893,-0.350454,-0.808305,
-9.792458,-0.135414,-0.300992,
-9.853653,-0.139328,-0.241088,
-9.834859,-0.176567,0.278653,
-9.861973,-0.184653,0.331440,
-9.744600,-0.295990,0.722589,
-9.748252,-0.288198,0.757300,
-8.807240,-0.687709,-0.739972,
-8.875376,-0.684005,-0.639660,
-8.892284,-0.694684,-0.784761,
-8.623356,-0.609691,-0.877132,
-8.732620,-0.674394,-0.790467,
-8.737098,-0.626379,-0.946390,
-8.404337,-0.601457,-0.669106,
-8.539795,-0.655047,-0.591040,
-8.506972,-0.595616,-0.782686,
-8.626123,-0.679592,-0.531123,
-8.693642,-0.685580,-0.635188,
-8.627025,-0.213302,-1.006679,
-8.733585,-0.259028,-1.060357,
-8.694762,-0.138294,-0.961404,
-8.346545,-0.085610,-0.829052,
-8.307082,-0.208068,-0.848167,
-8.493687,-0.169469,-0.950187,
-8.541302,-0.423678,-1.004653,
-8.540529,-0.522176,-0.952987,
-8.654768,-0.452446,-1.058055,
-8.285501,-0.368000,-0.806968,
-8.308944,-0.510313,-0.762051,
-8.418407,-0.400864,-0.928416,
-9.493604,-0.179543,-0.710026,
-9.545038,-0.281518,-0.668018,
-9.672003,-0.209869,-0.731680,
-8.624804,-0.394452,1.094032,
-8.632357,-0.297483,1.095752,
-8.311628,-0.368402,1.111982,
-8.111820,-0.314250,1.094886,
-8.320637,-0.259339,1.118595,
-8.587005,-0.648377,-0.191405,
-8.588353,-0.600525,0.021963,
-8.718180,-0.647027,-0.106605,
-8.566961,-0.547535,0.123694,
-8.576569,-0.515548,0.171261,
-8.345398,-0.562709,-0.280866,
-8.351226,-0.524114,-0.057080,
-8.452504,-0.619181,-0.221596,
-8.335882,-0.485548,0.053535,
-8.337980,-0.461018,0.124664,
-9.495152,-0.409137,1.081259,
-9.486365,-0.330616,1.078866,
-9.146789,-0.512437,-0.487768,
-9.179069,-0.418491,-0.527532,
-9.114805,-0.454318,-0.649393,
-9.175724,-0.538211,-0.143588,
-9.210640,-0.496218,-0.106618,
-9.022818,-0.569591,0.101535,
-9.051167,-0.537477,0.127209,
-8.823362,-0.570202,0.147605,
-8.821688,-0.543217,0.183451,
-8.819704,-0.655283,-0.170998,
-8.927481,-0.647587,-0.166113,
-8.838649,-0.675295,-0.356955,
-9.016775,-0.645533,-0.157477,
-9.103577,-0.602175,-0.188401,
-9.014364,-0.640155,-0.350109,
-8.993907,-0.632076,-0.522180,
-9.090305,-0.586009,-0.482535,
-8.866918,-0.684238,-0.484908,
-8.941599,-0.671297,-0.533825,
-8.852395,-0.403920,1.083064,
-8.859512,-0.338093,1.080895,
-9.062148,-0.417682,1.081376,
-9.066557,-0.346736,1.074006,
-8.548136,-0.509355,0.224690,
-8.533804,-0.564283,0.388668,
-8.659063,-0.593129,0.391131,
-8.549910,-0.532893,0.303142,
-8.336550,-0.450593,0.209046,
-8.350546,-0.485394,0.392702,
-8.425521,-0.533359,0.405213,
-9.041086,-0.532939,0.193248,
-9.056097,-0.583970,0.336462,
-9.172360,-0.556500,0.304539,
-9.055058,-0.551409,0.256284,
-8.816073,-0.539903,0.239134,
-8.801350,-0.599930,0.375525,
-8.938868,-0.594893,0.359529,
-8.812663,-0.561579,0.292842,
-9.824874,-0.326885,0.115984,
-9.607984,-0.411888,0.160289,
-9.438981,-0.457708,0.220134,
-9.619825,-0.421117,0.265436,
-9.813412,-0.335213,-0.059626,
-9.601566,-0.393849,0.003485,
-9.606695,-0.405833,0.075902,
-9.782899,-0.318132,-0.264901,
-9.772095,-0.375240,0.330563,
-9.587944,-0.366372,-0.214904,
-9.728977,-0.341879,-0.309460,
-9.585255,-0.343584,-0.421778,
-9.537472,-0.313839,-0.587179,
-8.536755,-0.586250,0.600609,
-8.652820,-0.614219,0.593672,
-8.529764,-0.590094,0.488794,
-8.560039,-0.563495,0.784646,
-8.681613,-0.588567,0.791140,
-8.544557,-0.570804,0.698995,
-8.574379,-0.518082,0.994521,
-8.602122,-0.463588,1.049583,
-8.355416,-0.515220,0.597743,
-8.427663,-0.545435,0.605895,
-8.345465,-0.499967,0.792044,
-8.358952,-0.481370,0.886979,
-8.437342,-0.528539,0.798758,
-8.345420,-0.457048,1.001455,
-8.472213,-0.489746,0.982455,
-9.057354,-0.606845,0.538142,
-9.178423,-0.581598,0.511086,
-9.052916,-0.611833,0.433219,
-9.076629,-0.577116,0.754489,
-9.179817,-0.556143,0.735724,
-9.062864,-0.585586,0.646854,
-9.072087,-0.520241,0.951989,
-9.073366,-0.468830,1.039361,
-9.168906,-0.509545,0.974879,
-8.840709,-0.542691,0.962586,
-8.802803,-0.581070,0.873888,
-8.818830,-0.600038,0.783056,
-8.792410,-0.623641,0.581493,
-8.800197,-0.606261,0.682101,
-9.511775,-0.465702,0.668290,
-9.452067,-0.485694,0.694833,
-9.529795,-0.499349,0.944706,
-9.421484,-0.495470,0.950878,
-9.512362,-0.476097,1.046612,
-9.693651,-0.412229,0.557636,
-9.722333,-0.410647,0.635930,
-9.817425,-0.385649,0.544715,
-9.656122,-0.426693,0.393760,
-9.474407,-0.479872,0.451520,
-9.632645,-0.437073,0.512684,
-8.183804,-0.425785,0.598642,
-8.169208,-0.421128,0.700631,
-8.264320,-0.470100,0.620082,
-8.171633,-0.416374,0.811050,
-8.081778,-0.385892,0.869734,
-8.220894,-0.434314,0.959118,
-8.543439,0.038390,-0.690580,
-8.408656,-0.001791,-0.748564,
-8.638509,-0.025709,-0.823233,
-8.792410,-0.091761,-0.897854,
-8.357649,-0.127507,1.088469,
-8.517523,-0.185915,1.078077,
-9.088388,-0.264605,1.045926,
-8.996517,-0.248191,1.042557,
-8.875476,-0.238359,1.045160,
-8.748861,-0.211599,1.048853,
-8.644856,-0.172576,1.052144,
-8.665912,-0.088793,1.003283,
-9.482489,-0.253436,1.060818,
-8.392746,0.234446,-0.343087,
-8.180462,0.191696,-0.431915,
-8.470922,0.122691,-0.534016,
-8.357700,0.291532,-0.027608,
-8.386852,0.280418,0.127510,
-8.070672,0.336273,-0.031836,
-8.389098,0.272406,0.258581,
-8.381437,0.253683,0.397421,
-8.058067,0.334815,0.291272,
-9.215407,-0.213996,-0.748242,
-9.258677,-0.304546,-0.649600,
-9.356133,-0.177590,-0.717974,
-9.285286,-0.401656,1.086163,
-9.263233,-0.328385,1.074220,
-9.300989,-0.511744,0.270760,
-9.302714,-0.534010,0.370692,
-9.292696,-0.483672,0.099008,
-9.301660,-0.493399,0.177110,
-9.277026,-0.373651,-0.484206,
-9.306117,-0.409642,-0.320389,
-9.391136,-0.336851,-0.490689,
-9.296182,-0.448512,-0.162558,
-9.291042,-0.462783,-0.009477,
-9.298853,-0.506637,0.950124,
-9.308074,-0.520102,0.835097,
-9.323449,-0.527630,0.721072,
-9.330944,-0.527694,0.604671,
-9.314520,-0.535495,0.484811,
-9.246174,-0.256370,1.046436,
-9.354101,-0.246661,1.048267,
-7.869781,0.375712,0.285074,
-7.726363,0.409624,0.299310,
-7.867268,0.377939,0.159431,
-7.887678,0.370768,-0.020957,
-7.891270,0.341348,-0.210886,
-7.956358,0.238669,-0.392244,
-8.015648,0.110203,-0.550944,
-7.932016,-0.029889,1.022088,
-7.735535,0.007710,0.936076,
-7.931108,0.116470,0.932026,
-7.997494,-0.337995,0.544560,
-7.805101,-0.280881,0.535100,
-7.899733,-0.311229,0.692327,
-7.919326,-0.318636,0.809105,
-7.957161,-0.320609,0.957893,
-8.033192,-0.347781,0.225208,
-7.868380,-0.300047,0.231731,
-8.037434,-0.343140,0.367773,
-8.038602,-0.369203,0.003841,
-8.071053,-0.366428,0.107795,
-8.211643,-0.428613,0.017467,
-8.029517,-0.431837,-0.427033,
-8.050894,-0.387313,-0.188274,
-8.215465,-0.481811,-0.384952,
-7.967430,-0.284247,-0.644779,
-8.000576,-0.428974,-0.565843,
-8.156797,-0.337443,-0.710091,
-8.013145,0.009404,-0.629945,
-7.961894,-0.105233,-0.657080,
-8.184521,-0.026562,-0.698069,
-7.909654,-0.252031,1.015710,
-7.926289,-0.169086,1.039434,
-8.374508,0.228489,0.558620,
-8.367092,0.174147,0.717325,
-8.085459,0.288279,0.584391,
-8.364861,0.103648,0.877333,
-8.316607,0.023232,1.010409,
-8.134473,0.158063,0.889601,
-7.876942,0.333373,0.542469,
-7.720350,0.360909,0.537687,
-7.853255,0.364285,0.408582,
-7.924998,0.208272,0.816204,
-7.748728,0.227221,0.779643,
-7.899265,0.278217,0.677785,
-9.657294,0.061685,-0.298029,
-9.694927,0.082444,-0.227254,
-9.726442,0.018748,0.321895,
-9.747108,0.050916,0.260619,
-9.627398,0.181627,0.103742,
-9.609520,0.196263,0.043911,
-9.599528,0.193890,-0.025179,
-9.600103,0.183331,-0.083316,
-9.625570,0.146620,-0.146521,
-9.691962,0.121532,0.202916,
-9.336033,0.199126,0.146399,
-9.336706,0.210664,0.050253,
-9.316820,0.210821,-0.032033,
-9.334469,0.191649,-0.110467,
-9.432653,0.165104,-0.203204,
-9.505054,0.123803,0.281304,
-9.574803,0.137761,0.239959,
-9.552142,0.144244,-0.600616,
-9.529520,0.091791,-0.663833,
-9.583525,0.144944,-0.499483,
-9.561403,0.151407,-0.537221,
-9.499382,0.006547,-0.721251,
-9.488499,-0.071185,-0.734893,
-9.629717,0.100720,-0.403246,
-9.627153,0.062551,-0.348370,
-9.304195,0.205634,-0.387314,
-9.347437,0.189148,-0.349493,
-9.276587,0.179257,-0.486978,
-9.258785,0.135422,-0.558985,
-9.214659,0.040816,-0.631258,
-9.085419,0.011531,-0.670209,
-9.172577,-0.100650,-0.744535,
-9.347267,0.173269,-0.268017,
-8.951493,0.074925,-0.611343,
-8.912237,-0.050718,-0.781812,
-9.696874,0.055296,0.549099,
-9.690277,0.054172,0.494697,
-9.676916,0.022502,0.635275,
-9.418489,0.070133,0.580718,
-9.378783,0.043920,0.611350,
-9.431816,0.122829,0.481343,
-9.476125,0.114539,0.436266,
-9.695932,0.033357,0.421222,
-9.699329,0.008298,0.358976,
-9.427541,0.119952,0.353753,
-9.412366,0.130114,0.295878,
-9.574596,-0.089234,0.917578,
-9.558817,-0.099220,0.946146,
-9.542536,-0.123519,0.984751,
-9.515339,-0.150333,1.011427,
-9.315571,-0.065900,0.905123,
-9.294224,-0.094861,0.940811,
-9.316163,-0.007432,0.803623,
-9.377823,0.001861,0.761103,
-9.359458,0.028267,0.663127,
-9.457546,-0.183316,1.026041,
-8.984422,0.207346,0.189454,
-9.007368,0.224775,0.075117,
-9.188593,0.204638,0.161716,
-8.972793,0.225867,0.001083,
-8.696811,0.256335,-0.024912,
-9.000815,0.232168,-0.103480,
-8.954295,0.190516,-0.397558,
-8.980302,0.223345,-0.266075,
-8.689485,0.228185,-0.310163,
-8.939123,0.130262,0.493027,
-8.949821,0.094948,0.631282,
-8.703077,0.158814,0.534732,
-9.142546,0.224835,-0.209289,
-9.152174,0.164520,0.353727,
-9.229563,-0.113806,0.949714,
-8.690315,-0.025579,0.930115,
-8.944979,-0.092055,0.928283,
-8.904636,-0.146410,0.981319,
-9.102043,0.061689,0.668513,
-8.932834,0.065457,0.732603,
-8.969373,0.010304,0.803727,
-9.023872,-0.059418,0.885155,
-9.632040,-0.113666,0.786942,
-9.664967,-0.093154,0.722490,
-7.616690,0.445918,0.305010,
-7.599159,0.430854,0.402058,
-7.626507,0.442074,0.013345,
-7.620637,0.412041,-0.158029,
-7.742595,0.403393,-0.014098,
-7.647091,0.317299,-0.322380,
-7.682917,0.195656,-0.453332,
-7.780718,0.271530,-0.377820,
-7.610051,0.032662,0.862150,
-7.599463,-0.097706,0.887178,
-7.675448,-0.230658,0.520737,
-7.701271,-0.239679,0.356458,
-7.638551,-0.220537,0.748922,
-7.624276,-0.197841,0.812652,
-7.750202,-0.259779,0.784048,
-7.725259,-0.251886,0.227358,
-7.733111,-0.261182,0.118357,
-7.732413,-0.269021,-0.036213,
-7.870860,-0.324887,-0.062575,
-7.722511,-0.265991,-0.220466,
-7.689424,-0.271736,-0.343702,
-7.816838,-0.381407,-0.411219,
-7.663660,-0.279551,-0.442602,
-7.647961,-0.136443,-0.501043,
-7.766821,-0.215585,-0.572587,
-7.680521,0.091951,-0.510626,
-7.661011,-0.002938,-0.520938,
-7.823423,0.038716,-0.581224,
-7.605501,-0.158933,0.848438,
-7.605927,0.394555,0.515090,
-7.476192,0.416819,0.498725,
-7.622396,0.259671,0.728175,
-7.481519,0.282096,0.690600,
-7.616259,0.337324,0.622278,
-7.206374,0.480750,0.301450,
-7.175806,0.485207,0.183965,
-7.492269,0.476263,0.292669,
-7.179111,0.478238,0.025474,
-7.185016,0.431609,-0.120618,
-7.497770,0.470861,0.031514,
-7.195297,0.343166,-0.257939,
-7.201614,0.242796,-0.361035,
-7.499628,0.349942,-0.266464,
-7.183391,0.065544,0.800771,
-7.483638,0.058563,0.813114,
-7.182268,-0.039702,0.807872,
-7.196647,-0.189362,0.495476,
-7.531251,-0.201119,0.499348,
-7.218079,-0.197633,0.382508,
-7.183034,-0.170563,0.692622,
-7.184607,-0.177480,0.614394,
-7.241829,-0.199176,0.290967,
-7.567663,-0.214572,0.248089,
-7.251699,-0.200086,0.138136,
-7.208502,-0.202201,-0.075927,
-7.533892,-0.225077,-0.055038,
-7.315317,-0.197596,-0.241229,
-7.187736,-0.199447,-0.348796,
-7.517231,-0.207312,-0.329082,
-7.202844,-0.085603,-0.442948,
-7.211335,-0.180275,-0.409137,
-7.519753,-0.084140,-0.458612,
-7.196160,0.156498,-0.411753,
-7.194477,0.051761,-0.432668,
-7.522446,0.145024,-0.440100,
-7.184262,-0.103295,0.790029,
-7.182250,-0.144212,0.742770,
-7.212658,0.410546,0.509601,
-6.972654,0.410067,0.499605,
-7.095800,0.445975,0.399884,
-7.183494,0.275508,0.694062,
-6.981088,0.280751,0.684809,
-7.183848,0.351856,0.604009,
-11.067522,-0.583464,0.024234,
-10.884100,-0.414384,-0.734972,
-10.805838,-0.613667,-0.638841,
-9.160189,-0.756360,-0.920152,
-9.084381,-0.249888,-0.909009,
-8.930338,-0.164904,-0.938522,
-9.124060,-0.244223,-0.798237,
-11.415648,-0.417399,-0.134176,
-11.157808,-0.330324,-0.109886,
-10.905261,-0.389572,0.673586,
-10.827863,-0.606892,0.563762,
-10.384029,-0.515954,-0.808395,
-9.894052,-0.171889,-0.786422,
-10.626580,-0.432252,-0.221020,
-10.047174,-0.073427,-0.221053,
-9.877651,-0.312649,-0.110431,
-10.486304,-0.436731,0.437041,
-9.994591,-0.127011,0.394419,
-10.177663,-0.601946,0.886072,
-9.847715,-0.281344,0.812424,
-8.316303,-0.574750,-0.549201,
-8.588100,-0.674330,-0.414181,
-8.746191,-0.684686,-0.493215,
-8.563892,-0.297679,-1.015440,
-8.323213,-0.432193,1.067922,
-9.177143,-0.543299,-0.317175,
-9.006611,-0.607330,0.012956,
-8.821380,-0.613131,0.039865,
-8.843077,-0.470673,1.045525,
-8.210641,-0.405858,0.222035,
-8.335909,-0.454595,0.315398,
-8.264537,-0.441542,0.454186,
-8.792343,-0.630711,0.478715,
-9.588554,-0.374017,-0.078307,
-9.408969,-0.401473,-0.173765,
-8.551769,-0.539434,0.892686,
-8.354391,-0.504481,0.701570,
-8.937889,-0.619082,0.563596,
-8.958351,-0.594705,0.770199,
-9.066356,-0.565510,0.861370,
-8.967810,-0.534818,0.966869,
-9.559684,-0.491531,0.852169,
-8.149748,-0.389342,0.522554,
-8.760735,0.085367,-0.603588,
-8.157970,-0.087464,1.084543,
-8.432630,0.280626,-0.166676,
-8.737196,0.220687,0.239853,
-9.290113,-0.470289,1.046702,
-8.586514,0.040335,0.859444,
-9.616290,0.162097,0.161981,
-9.382158,0.163479,0.229923,
-9.184347,0.216742,-0.012947,
-9.350639,0.169955,-0.200598,
-9.591567,0.136317,-0.459089,
-9.354665,0.049850,-0.656927,
-9.272288,0.198738,-0.416689,
-8.957603,0.153396,-0.493377,
-9.704075,0.046690,0.590631,
-9.379337,0.105473,0.519154,
-9.595908,-0.097284,0.865281,
-9.285802,-0.022017,0.834599,
-8.997015,0.180647,0.309153,
-9.001444,0.154553,0.409371,
-9.059231,-0.116625,0.946007,
-8.773532,0.031590,0.811897,
-7.629347,0.458127,0.185792,
-7.626126,0.159782,0.816827,
-7.653835,-0.214250,0.644812,
-6.965493,0.473420,0.304777,
-6.966128,0.474680,0.056802,
-6.981132,0.355525,-0.231952,
-6.982718,0.083339,0.800362,
-7.184096,0.183565,0.760948,
-6.969084,-0.191002,0.530162,
-7.012814,-0.199814,0.338619,
-7.031421,-0.193542,-0.014889,
-6.982768,-0.062784,-0.441073,
-6.986862,0.169221,-0.402501,
-8.762217,-0.346225,-1.108308,
-9.010939,-0.309821,-1.092937,
-10.536314,-0.263377,-0.762582,
-10.378016,-0.213643,-0.787887,
-10.065908,-0.065368,-0.547553,
-10.064190,-0.039832,-0.581596,
-9.888981,-0.192894,-0.387052,
-10.016790,-0.095267,-0.759085,
-10.026566,-0.061915,-0.737346,
-9.783483,-0.299960,-0.722689,
-9.825998,-0.351361,-0.695292,
-10.060059,-0.042118,-0.637211,
-10.021610,-0.024279,-0.653852,
-9.813124,0.038540,-0.676886,
-9.786298,0.017059,-0.699878,
-9.809765,-0.359509,-0.618338,
-9.832618,-0.364877,-0.572367,
-10.065004,-0.376857,-0.502622,
-10.788952,-0.244199,0.050685,
-10.768090,-0.178302,-0.071929,
-10.600490,-0.121409,-0.120203,
-10.560049,-0.458579,-0.065516,
-10.712799,-0.498875,0.017711,
-9.949163,0.031236,0.166100,
-9.940228,0.066519,0.138591,
-9.978132,-0.197197,0.202574,
-9.969463,-0.126003,0.203517,
-9.924298,0.077902,-0.131758,
-9.925906,0.045850,-0.169335,
-10.179313,-0.284278,-0.221635,
-10.174480,-0.223706,-0.230435,
-10.206777,0.028878,0.015818,
-10.170830,0.051510,-0.006632,
-9.946590,0.112804,-0.066966,
-9.916813,0.105813,-0.098005,
-9.961798,-0.338199,-0.049938,
-10.003286,-0.351840,-0.014937,
-9.985477,-0.324452,0.137369,
-10.040024,-0.155064,0.701591,
-10.042761,-0.121466,0.690071,
-10.085424,-0.098192,0.500623,
-10.066557,-0.074128,0.546168,
-10.039200,-0.075223,0.623005,
-9.881154,-0.011160,0.552130,
-9.871453,-0.018759,0.510531,
-9.909418,-0.375724,0.429081,
-9.904482,-0.398789,0.635725,
-8.515587,-0.630137,-0.681474,
-8.400230,-0.176392,-0.903961,
-8.428245,-0.124704,-0.891092,
-8.353891,-0.453369,-0.853040,
-8.351688,-0.387831,-0.870375,
-9.579971,-0.189167,-0.720024,
-8.214205,-0.343351,1.108355,
-8.215158,-0.293453,1.118767,
-8.580547,-0.623928,-0.073410,
-8.655249,-0.629709,-0.044903,
-8.350698,-0.543135,-0.160511,
-8.401447,-0.574429,-0.128791,
-9.225813,-0.479204,-0.198198,
-8.881453,-0.662907,-0.266161,
-8.829399,-0.668401,-0.272185,
-9.054845,-0.626729,-0.257250,
-9.012182,-0.646291,-0.255442,
-9.523499,-0.434634,0.190145,
-9.525706,-0.440657,0.241189,
-9.668341,-0.350393,-0.366720,
-9.584025,-0.354841,-0.317917,
-9.616826,-0.313836,-0.637515,
-9.561244,-0.453401,0.423280,
-8.532356,-0.010286,-0.787390,
-8.723363,-0.057910,-0.861479,
-8.671934,-0.078994,-0.896215,
-8.424376,-0.217701,1.102514,
-8.270414,0.220550,-0.377700,
-8.317579,0.157528,-0.481578,
-8.436760,0.178020,-0.443731,
-8.211433,0.311953,0.056390,
-8.205141,0.312708,-0.032632,
-8.211390,0.298438,0.337141,
-8.212333,0.303912,0.268365,
-9.333018,-0.373182,-0.410703,
-9.383162,-0.508014,0.409784,
-7.799046,0.394045,0.232417,
-7.886164,0.362810,-0.118152,
-7.972063,0.346200,-0.121017,
-7.966877,0.353960,-0.024667,
-7.991094,0.172453,-0.480452,
-8.097689,0.153663,-0.497779,
-8.059480,0.218390,-0.401449,
-7.830110,-0.007397,0.977478,
-7.830979,0.062792,0.943973,
-7.896533,-0.307592,0.538807,
-7.858690,-0.298635,0.620115,
-8.009343,-0.354796,0.833273,
-7.949460,-0.319290,0.295516,
-8.131449,-0.398051,0.011178,
-8.042614,-0.408825,-0.311776,
-8.138925,-0.434972,-0.282406,
-8.127034,-0.454664,-0.414493,
-8.081766,-0.397314,-0.640819,
-8.063250,-0.310086,-0.677557,
-8.071115,-0.061004,-0.683892,
-8.103162,-0.005953,-0.657337,
-8.012404,-0.249056,1.074539,
-8.026554,-0.201839,1.079367,
-8.224219,0.238198,0.643114,
-8.218351,0.261954,0.566616,
-8.242511,0.098784,0.951164,
-8.242893,0.137937,0.878798,
-7.780164,0.366811,0.474270,
-7.822356,0.256844,0.733180,
-9.520359,0.193327,0.089150,
-9.714886,0.121896,-0.151757,
-9.410614,-0.029182,-0.727103,
-9.200469,-0.028479,-0.692256,
-8.933195,0.013483,-0.695936,
-8.998446,-0.019951,-0.723920,
-9.293003,0.079989,0.570374,
-9.266609,0.064017,0.593613,
-9.367410,0.142850,0.408586,
-9.520760,0.092122,0.347097,
-9.513385,0.096298,0.319428,
-9.276085,0.025755,0.708344,
-9.478628,0.011284,0.668294,
-9.485107,0.021190,0.629858,
-9.092407,0.215596,0.120995,
-9.097030,0.205783,0.172480,
-8.844172,0.239252,0.000356,
-8.851616,0.245206,-0.053977,
-8.837812,0.226752,-0.286845,
-8.838019,0.202538,-0.363578,
-8.826072,0.121600,0.593555,
-8.830661,0.143002,0.508597,
-8.603924,-0.032573,0.969131,
-7.681488,0.413881,-0.091868,
-7.664375,0.257526,-0.392211,
-7.755583,-0.258723,0.441744,
-7.797101,-0.295969,-0.139617,
-7.732466,-0.268909,-0.127829,
-7.729882,-0.337428,-0.419904,
-7.341784,0.484953,0.247159,
-7.358570,0.479514,0.302545,
-7.345658,0.458116,-0.046705,
-7.342497,0.476004,0.025160,
-7.356218,0.296946,-0.318000,
-7.352362,0.347450,-0.260015,
-7.336660,0.064327,0.802589,
-7.337855,0.003114,0.812018,
-7.369096,-0.192884,0.493469,
-7.379681,-0.197906,0.432908,
-7.041806,-0.166705,0.670202,
-7.040153,-0.178137,0.620482,
-7.408925,-0.204308,0.264684,
-7.416139,-0.206765,0.197646,
-7.384276,-0.211289,-0.069518,
-7.406363,-0.209049,-0.151224,
-7.245935,-0.199483,-0.168447,
-7.397155,-0.200824,-0.294699,
-7.366533,-0.197763,-0.346425,
-7.373985,-0.137362,-0.433371,
-7.366149,-0.081800,-0.446810,
-7.361490,0.102963,-0.435307,
-7.361178,0.152701,-0.421264,
-7.035329,-0.104404,0.772873,
-7.066800,-0.135266,0.745973,
-7.049217,0.406401,0.509334,
-7.051639,0.272584,0.694380,
-7.048933,0.312930,0.650965,
-8.817273,-0.272063,-1.082898,
-8.731546,-0.428558,-1.106723,
-10.406805,-0.195436,-0.677725,
-9.870815,-0.036077,-0.419797,
-9.852511,-0.067481,-0.390626,
-9.899324,-0.295096,-0.400590,
-9.768062,-0.132057,-0.772632,
-9.788285,-0.089988,-0.763473,
-9.777997,-0.185166,-0.762515,
-9.774714,-0.240584,-0.745331,
-9.843113,0.057710,-0.550639,
-9.829453,0.046152,-0.511552,
-10.047372,-0.049922,-0.686431,
-9.800947,-0.353462,-0.654166,
-9.854589,-0.347214,-0.486241,
-9.850129,-0.366089,-0.525590,
-10.608837,-0.127060,0.007430,
-10.700684,-0.487360,-0.196215,
-9.955458,-0.014159,0.194962,
-9.960043,-0.067168,0.204556,
-10.203535,-0.303190,0.159937,
-10.201225,-0.248652,0.170186,
-9.927336,-0.034582,-0.227920,
-9.927492,0.008063,-0.208427,
-9.936319,-0.096695,-0.231190,
-9.946629,-0.167423,-0.224323,
-9.954521,0.106423,0.089480,
-9.926079,0.097905,0.115175,
-10.203304,0.031867,-0.041999,
-9.969023,-0.310985,-0.157744,
-9.958832,-0.325596,-0.103834,
-9.967054,-0.342054,0.025607,
-9.890951,-0.087797,0.372976,
-9.905323,-0.063808,0.404979,
-9.856344,-0.047152,0.664076,
-9.829992,-0.068505,0.677144,
-9.899998,-0.393532,0.508284,
-8.514128,-0.558533,-0.874480,
-8.301270,-0.553378,-0.659606,
-8.292082,-0.003987,-0.717778,
-8.267043,-0.054805,-0.763690,
-8.495043,-0.348308,-0.983806,
-8.227115,-0.267301,-0.784162,
-8.236656,-0.413498,1.064340,
-8.515494,-0.653078,-0.326378,
-8.586823,-0.663827,-0.309647,
-8.268901,-0.531981,-0.470011,
-8.283901,-0.521901,-0.333439,
-8.334171,-0.575659,-0.418125,
-8.285737,-0.472585,-0.017559,
-9.137379,-0.561167,-0.410055,
-8.770815,-0.634221,-0.035332,
-8.824844,-0.634543,-0.056106,
-8.966235,-0.628364,-0.064272,
-8.959600,-0.650854,-0.433399,
-8.936905,-0.665842,-0.440753,
-9.514064,-0.407366,0.000306,
-9.732073,-0.350161,-0.210370,
-9.497349,-0.388320,-0.120096,
-9.493240,-0.382349,-0.188309,
-9.478630,-0.338442,-0.465752,
-8.882484,-0.601405,0.726159,
-9.728514,-0.412124,0.478836,
-8.629576,0.098893,-0.578147,
-8.500397,0.078876,-0.614289,
-8.646418,0.060301,-0.648551,
-8.916004,-0.109718,-0.867516,
-8.253236,-0.030391,1.057380,
-8.256926,-0.107091,1.091210,
-8.543404,0.257036,-0.237878,
-8.384327,0.268961,-0.252592,
-8.548956,0.230410,-0.326817,
-8.543425,0.273824,-0.084138,
-8.536067,0.272223,-0.020739,
-8.568357,0.250648,0.185051,
-8.568834,0.242649,0.251406,
-9.211910,-0.362622,-0.591521,
-9.252154,-0.554952,0.556603,
-7.945134,0.354225,0.345148,
-7.951331,0.356966,0.280075,
-7.807691,0.391492,0.074943,
-7.890398,0.372432,0.073814,
-7.831509,0.312406,-0.301676,
-7.919297,0.297370,-0.300090,
-8.040741,-0.133069,1.074317,
-8.044536,-0.058362,1.057968,
-8.105362,-0.367669,0.448410,
-7.826767,-0.288057,0.746977,
-8.133944,-0.382578,0.162511,
-8.127732,-0.377045,0.225200,
-7.956871,-0.352801,-0.116209,
-7.951936,-0.345907,-0.019796,
-8.047682,-0.377640,-0.082916,
-7.908429,-0.418711,-0.482143,
-7.921978,-0.407168,-0.417990,
-7.857406,-0.163494,-0.618989,
-7.864084,-0.251557,-0.607509,
-7.921209,0.071748,-0.579732,
-7.911586,0.023351,-0.602900,
-8.024886,-0.322568,1.036331,
-8.012984,-0.284890,1.059823,
-8.553305,0.206753,0.464002,
-8.538090,0.190351,0.550528,
-8.494967,0.106277,0.792530,
-8.476116,0.066165,0.873064,
-7.984418,0.291311,0.625755,
-7.971060,0.315049,0.554972,
-8.033051,0.149537,0.911218,
-8.024767,0.190766,0.844968,
-9.714763,0.152438,0.143754,
-9.726311,0.163752,0.110973,
-9.705898,0.187812,0.034315,
-9.712133,0.183553,-0.011955,
-9.693032,0.170050,-0.079997,
-9.710267,0.150165,-0.112013,
-9.290484,0.185631,0.198744,
-9.432758,0.145845,-0.253866,
-9.433060,0.147359,-0.287922,
-8.865129,0.118853,-0.549137,
-8.865562,0.081629,-0.608647,
-9.497427,0.095239,0.543941,
-9.518935,0.100080,0.525733,
-9.379579,-0.040764,0.876791,
-9.394787,-0.034509,0.861704,
-8.872688,0.198093,0.280726,
-8.865831,0.212244,0.213673,
-9.089916,0.222126,0.028217,
-9.090150,0.218662,-0.012889,
-8.869320,0.151284,-0.488471,
-8.857806,0.175722,-0.431034,
-8.877522,0.173911,0.384491,
-8.833920,0.162995,0.430964,
-8.681839,0.036598,0.832530,
-8.875849,0.022802,0.802539,
-7.585046,0.467993,0.108992,
-7.630853,0.371091,-0.243588,
-7.607985,-0.204681,0.569605,
-7.648078,-0.242666,0.037332,
-7.639894,-0.245440,-0.040891,
-7.623638,-0.236762,-0.282942,
-7.618493,-0.231945,-0.338254,
-7.041797,0.476237,0.297531,
-7.036877,0.481455,0.112740,
-7.040261,0.474641,0.035784,
-7.050903,0.391664,-0.184347,
-7.056452,0.343719,-0.251409,
-7.052413,0.126353,0.785948,
-7.051871,0.069839,0.801460,
-7.043706,-0.183671,0.566888,
-7.048220,-0.191140,0.510229,
-7.361845,-0.176571,0.710929,
-7.324018,-0.164382,0.750968,
-7.080854,-0.199664,0.358320,
-7.095716,-0.197915,0.314771,
-7.105285,-0.195328,0.061718,
-7.233042,-0.201646,0.032909,
-7.082316,-0.195915,-0.060456,
-7.376770,-0.183869,-0.409278,
-7.357826,-0.198698,-0.384805,
-7.055746,-0.011060,-0.437365,
-7.058578,-0.081124,-0.440777,
-7.061872,0.200758,-0.387749,
-7.058629,0.158713,-0.407204,
-7.339905,-0.096033,0.802841,
-7.337317,-0.052717,0.816031,
-7.338725,0.388376,0.552345,
-7.355089,0.414821,0.504663,
-7.336532,0.235755,0.727971,
-7.336442,0.280183,0.690226,
-11.194179,-0.541142,0.033220,
-11.170561,-0.527449,-0.276671,
-9.107521,-0.296839,-1.007542,
-8.909499,-0.220018,-1.029610,
-10.403082,-0.215703,-0.620507,
-10.396733,-0.333321,-0.538745,
-10.349603,-0.249656,-0.824990,
-10.316286,-0.384344,-0.846527,
-9.842765,0.002720,-0.455666,
-10.076517,-0.226285,-0.445698,
-10.071970,-0.155913,-0.465979,
-9.774452,-0.043067,-0.732163,
-10.024013,-0.316302,-0.775075,
-9.985373,-0.260102,-0.793958,
-9.813526,0.067473,-0.556626,
-9.788005,0.070210,-0.603354,
-10.045718,-0.065805,-0.722548,
-10.028236,-0.406725,-0.625991,
-9.864574,-0.317307,-0.434179,
-10.594708,-0.162434,0.061873,
-10.576624,-0.308217,0.116432,
-10.579179,-0.152108,-0.174949,
-10.554497,-0.288753,-0.240942,
-10.725143,-0.496082,-0.166439,
-10.194747,-0.021442,0.106369,
-10.196807,0.013521,0.078895,
-10.198537,-0.197036,0.176393,
-10.195061,-0.134214,0.161291,
-9.982841,-0.265437,0.193475,
-10.179602,-0.008906,-0.147844,
-10.187384,0.019874,-0.111565,
-10.169776,-0.167310,-0.235385,
-9.954994,-0.233800,-0.213893,
-9.969286,-0.285506,-0.199431,
-10.186605,-0.327302,-0.206860,
-9.927899,0.123522,0.073534,
-9.911631,0.137753,0.016510,
-10.207022,0.021864,-0.084948,
-10.198643,-0.358656,-0.122016,
-10.166315,-0.345727,-0.160920,
-10.182320,-0.357040,0.100610,
-10.207825,-0.341716,0.143033,
-9.989254,-0.307276,0.176485,
-9.832911,-0.127792,0.693450,
-10.030816,-0.312404,0.709862,
-9.882763,-0.048442,0.442874,
-10.111527,-0.291631,0.379180,
-9.837015,-0.034532,0.648428,
-10.092793,-0.403799,0.463316,
-10.073303,-0.420315,0.537704,
-10.059378,-0.434033,0.595891,
-9.756529,-0.182131,0.877835,
-8.399851,-0.556541,-0.777941,
-8.422947,-0.634014,-0.559617,
-8.535989,-0.670362,-0.494850,
-8.599960,-0.146001,-0.954989,
-8.456795,-0.077241,-0.861566,
-8.241964,-0.109128,-0.794260,
-8.229319,-0.179263,-0.800801,
-8.472489,-0.463340,-0.950511,
-8.352488,-0.311039,-0.882797,
-8.230781,-0.433512,-0.720610,
-9.585007,-0.131887,-0.734274,
-8.400462,-0.342073,1.113861,
-8.227059,-0.240887,1.121822,
-8.657193,-0.670076,-0.286853,
-8.720976,-0.666963,-0.234314,
-8.511913,-0.615693,-0.089377,
-8.717335,-0.628245,-0.002190,
-8.396836,-0.614314,-0.371280,
-8.450881,-0.638869,-0.344458,
-8.295556,-0.505854,-0.197528,
-8.454758,-0.599562,-0.100243,
-9.108458,-0.540375,-0.577757,
-9.192902,-0.488424,-0.388370,
-9.205061,-0.447012,-0.413108,
-9.157843,-0.375724,-0.627670,
-8.775154,-0.671518,-0.272807,
-8.872704,-0.633798,-0.067003,
-8.916723,-0.629956,-0.064158,
-8.928193,-0.660627,-0.261252,
-8.968946,-0.659848,-0.253313,
-9.533896,-0.447454,0.296376,
-9.509256,-0.422771,0.061801,
-9.494278,-0.370355,-0.271401,
-9.493118,-0.353454,-0.376597,
-9.685144,-0.353902,-0.164715,
-9.739263,-0.334948,-0.401991,
-9.672167,-0.344021,-0.465827,
-9.646301,-0.330752,-0.542247,
-8.755550,-0.552182,0.929524,
-8.740339,-0.600398,0.738717,
-9.552500,-0.450735,0.359612,
-8.103020,-0.392790,0.961595,
-8.672701,0.021002,-0.718640,
-8.395054,0.056769,-0.651155,
-8.327152,0.035796,-0.677191,
-8.488235,-0.038945,-0.820258,
-8.785091,-0.042712,-0.818926,
-8.248242,-0.178589,1.113451,
-8.453262,-0.082245,1.051730,
-8.702964,-0.246882,1.070537,
-8.573619,0.190221,-0.415702,
-8.609162,0.138994,-0.503584,
-8.228559,0.275795,-0.272863,
-8.130919,0.256157,-0.321964,
-8.218098,0.128915,-0.528430,
-8.350987,0.099854,-0.572277,
-8.203988,0.307943,-0.115904,
-8.072692,0.328690,-0.122954,
-8.541169,0.267344,0.045641,
-8.561666,0.258164,0.115102,
-8.213339,0.307413,0.141245,
-8.065549,0.336564,0.065488,
-8.211452,0.306192,0.205288,
-8.570587,0.232703,0.315967,
-8.565708,0.220476,0.384885,
-8.208178,0.290317,0.409611,
-9.272291,-0.143933,-0.746476,
-9.326157,-0.323044,-0.575182,
-9.246960,-0.424189,-0.385060,
-9.396523,-0.506031,0.531971,
-7.962013,0.355614,0.219087,
-7.955940,0.356754,0.157997,
-7.782503,0.389718,0.350785,
-7.970406,0.354337,0.073053,
-7.809214,0.379633,-0.117166,
-7.983809,0.326795,-0.210307,
-8.018614,0.281036,-0.300489,
-7.895941,0.188423,-0.472039,
-7.918715,0.123823,-0.539918,
-8.128474,0.093406,-0.575701,
-8.035321,0.022137,1.025437,
-8.030655,0.099473,0.969063,
-7.821301,-0.075262,0.995347,
-7.836270,0.126221,0.904625,
-8.054717,-0.360828,0.631126,
-7.999180,-0.345237,0.697306,
-7.925426,-0.312163,0.451262,
-7.828837,-0.284275,0.445980,
-8.011459,-0.352823,0.757613,
-7.824545,-0.278229,0.845037,
-7.847836,-0.282168,0.909608,
-8.052935,-0.360055,1.004566,
-8.128284,-0.373394,0.288398,
-8.127515,-0.371150,0.362235,
-7.945040,-0.327340,0.165649,
-7.942428,-0.314639,0.365349,
-8.136809,-0.404890,-0.055321,
-7.947533,-0.337822,0.061542,
-7.971657,-0.337976,0.112093,
-8.115423,-0.469043,-0.530027,
-8.201809,-0.492981,-0.516026,
-7.941753,-0.384817,-0.333362,
-7.955454,-0.361617,-0.221764,
-8.145096,-0.415156,-0.155405,
-8.227770,-0.465289,-0.247468,
-8.053420,-0.217873,-0.703569,
-8.146611,-0.243887,-0.741055,
-7.883843,-0.338506,-0.580441,
-7.901425,-0.403457,-0.534961,
-8.100711,-0.460264,-0.598402,
-8.131843,0.043957,-0.625269,
-7.894346,-0.027238,-0.616647,
-7.868343,-0.084910,-0.620582,
-8.053290,-0.127505,-0.703116,
-7.809428,-0.191032,0.982281,
-7.830551,-0.146250,1.006434,
-7.816079,-0.239132,0.945826,
-8.210609,0.280217,0.487981,
-8.530570,0.169602,0.636254,
-8.517988,0.140346,0.715370,
-8.229500,0.209589,0.718921,
-8.239863,0.175937,0.799263,
-8.123175,0.198611,0.812030,
-8.461667,0.024435,0.950527,
-8.424530,-0.010820,1.011174,
-8.223491,0.051221,1.011519,
-7.955365,0.333904,0.482578,
-7.942755,0.346554,0.412030,
-7.804747,0.322551,0.603813,
-8.010417,0.230289,0.769822,
-7.994823,0.262971,0.695035,
-7.837495,0.174604,0.856212,
-9.750165,0.031423,-0.274620,
-9.728352,0.176906,0.072548,
-9.709488,0.174072,-0.053396,
-9.597918,0.028905,-0.707719,
-9.591176,-0.031876,-0.737638,
-9.577124,-0.078196,-0.744445,
-9.350235,0.160106,-0.528528,
-9.273415,-0.020512,-0.687559,
-9.159704,0.099566,-0.561117,
-9.101208,0.085143,-0.577335,
-9.061278,-0.062923,-0.755197,
-9.047560,0.114955,-0.548306,
-8.863732,0.035675,-0.676329,
-9.522402,0.032234,0.621230,
-9.330785,0.154245,0.281559,
-9.268286,0.044852,0.635753,
-9.117828,0.190752,0.225714,
-8.853895,0.224582,0.145904,
-8.875593,0.231339,0.087915,
-9.119040,0.220328,0.069688,
-9.108019,0.213989,-0.057829,
-9.118073,0.217849,-0.097707,
-8.844154,0.234785,0.053250,
-8.872698,0.244544,-0.116395,
-8.713234,0.194360,-0.395022,
-9.051455,0.198487,-0.380957,
-8.864790,0.238167,-0.205937,
-9.067415,0.103389,0.536511,
-9.077348,0.086456,0.600235,
-8.814821,0.103322,0.670776,
-8.688046,0.136930,0.624802,
-8.777628,-0.027663,0.898362,
-9.048151,0.044052,0.745129,
-8.806520,0.087665,0.722519,
-9.088699,-0.024045,0.828675,
-7.733096,0.409759,0.080779,
-7.570279,0.445756,-0.057755,
-7.740175,0.395649,-0.110972,
-7.755777,0.330542,-0.295613,
-7.608830,0.222347,-0.413580,
-7.809957,0.205591,-0.459586,
-7.624278,-0.217089,0.434249,
-7.662574,-0.236915,0.173732,
-7.651743,-0.246909,-0.120397,
-7.806243,-0.291601,0.046467,
-7.868531,-0.327265,-0.161912,
-7.611300,-0.231696,-0.385651,
-7.774100,-0.306090,-0.301707,
-7.727353,-0.329102,-0.470376,
-7.670861,-0.149566,0.901629,
-7.354692,0.469222,0.354181,
-7.055745,0.483600,0.244607,
-7.041104,0.483212,0.184799,
-7.331060,0.488608,0.181643,
-7.334667,0.488054,0.099622,
-7.041476,0.460736,-0.040823,
-7.044916,0.432700,-0.113000,
-7.344504,0.432995,-0.121962,
-7.347669,0.393749,-0.194461,
-7.061438,0.292305,-0.311460,
-7.063790,0.243201,-0.357459,
-7.359293,0.244882,-0.365883,
-7.038098,0.016404,0.810149,
-7.069725,-0.030399,0.810069,
-7.335783,0.126221,0.785582,
-7.054484,-0.196325,0.450816,
-7.065804,-0.199206,0.399813,
-7.376655,-0.185565,0.549499,
-7.387670,-0.200072,0.369923,
-7.367454,-0.176300,0.657104,
-7.332777,-0.179116,0.608079,
-7.107402,-0.196157,0.259741,
-7.114573,-0.194980,0.174351,
-7.398348,-0.201939,0.321085,
-7.411645,-0.209594,0.118766,
-7.080335,-0.194744,-0.173407,
-7.146887,-0.195002,-0.246964,
-7.384031,-0.211874,0.021731,
-7.454121,-0.207256,-0.226053,
-7.068088,-0.194139,-0.309816,
-7.362913,-0.019354,-0.448938,
-7.050626,-0.143808,-0.435232,
-7.082822,-0.182943,-0.418138,
-7.359338,0.199914,-0.398354,
-7.055193,0.113807,-0.419474,
-7.053823,0.058100,-0.428123,
-7.360010,0.048147,-0.442093,
-7.361990,-0.136584,0.775017,
-7.356363,0.435537,0.452527,
-7.282279,0.450374,0.399934,
-7.066835,0.381015,0.558707,
-7.335896,0.321565,0.647392,
-7.333890,0.357692,0.600055,
-7.051975,0.229581,0.732827,
-7.053932,0.349082,0.604549,
-10.503597,-0.381688,-0.880407,
-10.076570,-0.109750,-0.514334,
-10.085175,-0.302092,-0.449209,
-10.017334,-0.148515,-0.780348,
-10.002999,-0.203541,-0.804129,
-10.075559,-0.047298,-0.604097,
-9.789601,0.049633,-0.655052,
-10.005170,-0.408611,-0.684047,
-10.053658,-0.397176,-0.553196,
-10.781257,-0.291172,0.079590,
-10.746685,-0.443647,0.079736,
-10.760298,-0.278465,-0.234170,
-10.727649,-0.424844,-0.244186,
-10.702967,-0.502597,-0.034993,
-10.206822,-0.068398,0.125422,
-10.185495,-0.047985,-0.174081,
-10.167698,-0.106003,-0.215391,
-10.215018,0.015815,0.053671,
-9.922497,0.127804,-0.042080,
-10.209623,-0.366535,0.053008,
-10.050503,-0.204431,0.710292,
-10.071796,-0.363682,0.687398,
-10.083935,-0.150456,0.409096,
-10.094933,-0.130346,0.442194,
-9.853201,-0.004263,0.559143,
-8.411559,-0.411253,1.095401,
-8.983641,-0.651868,-0.620215,
-9.699220,-0.388247,0.104216,
-9.692076,-0.366950,-0.050049,
-8.185466,-0.395151,0.434445,
-8.120743,-0.385115,0.617145,
-8.583872,0.268004,-0.150054,
-8.255486,0.297379,-0.185246,
-9.369701,-0.452551,0.060697,
-8.622925,0.078699,0.782179,
-8.555649,-0.002974,0.938945,
-9.528173,0.179241,0.142893,
-9.189480,0.177510,-0.453989,
-9.274812,0.090661,0.553446,
-9.282586,0.113441,0.495231,
-9.446009,-0.001733,0.732988,
-9.121693,0.177924,0.275834,
-8.869559,0.185693,0.340738,
-9.047561,0.174197,-0.441878,
-9.091233,0.115117,0.493474,
-9.100835,0.134823,0.443302,
-7.585737,-0.199465,0.684188,
-7.052498,0.181729,0.763097,
-7.335807,0.186448,0.760332,
-7.032633,-0.148795,0.713230,
-7.023406,-0.193929,-0.136086,
-7.038109,-0.193326,0.111306,
-7.038383,-0.194610,-0.378603,
-7.037776,-0.065919,0.798411,
-8.351530,0.199506,-0.410393,
-8.463392,0.250194,-0.289487,
-8.522572,0.157454,-0.474869,
-8.647120,0.253775,0.065104,
-8.309477,0.287883,0.221750,
-8.669913,0.212046,0.334912,
-8.305500,0.275249,0.356747,
-8.300585,0.254836,0.512485,
-7.284408,-0.186462,0.528768,
-7.267954,-0.173848,0.669348,
-7.293819,-0.206776,-0.021351,
-7.262693,-0.124810,0.780464,
-7.381965,0.453768,0.398999,
-8.630884,0.211822,-0.362791,
-8.445890,0.279326,0.023619,
-8.468210,0.265724,0.165436,
-8.481167,0.256979,0.254831,
-8.468462,0.252706,0.296694,
-8.473765,0.236488,0.391090,
-8.456159,0.230275,0.440753,
-7.320621,-0.205370,0.077331,
-8.306565,0.294628,0.088418,
-8.308947,0.282370,0.304701,
-7.252172,0.465838,-0.020569,
-7.280543,-0.194545,0.440375,
-7.318297,-0.202202,0.240766,
-8.468132,0.263301,0.214418,
-8.453224,0.221306,0.502064,
-8.675243,0.169990,-0.447562,
-8.482826,0.211958,-0.380157,
-8.306738,0.256186,-0.306902,
-8.465734,0.245955,0.348101,
-8.119947,0.313657,0.378806,
-8.441715,0.199469,0.602963,
-8.439970,0.177544,0.667531,
-8.773503,0.241488,-0.223026,
-7.489662,-0.218182,0.062636,
-7.191289,0.447874,0.400442,
-8.638590,0.250209,-0.227289,
-8.309861,0.295334,-0.109439,
-8.309013,0.290721,0.174601,
-8.664805,0.242693,0.150513,
-8.667824,0.222393,0.286491,
-8.303942,0.263755,0.451206,
-8.660271,0.195177,0.426957,
-7.256289,0.407741,-0.166576,
-7.267801,0.008242,-0.440308
    ];
    

    var armIndices = [
        160,855,856,
158,178,176,
857,166,858,
158,180,162,
161,177,179,
859,161,860,
159,181,177,
167,861,862,
183,178,187,
191,176,183,
179,185,188,
177,192,185,
202,863,864,
196,212,194,
865,202,864,
216,194,212,
197,213,215,
866,197,867,
195,217,213,
203,868,869,
219,214,222,
225,212,219,
215,221,223,
213,226,221,
236,870,871,
872,246,873,
874,236,871,
875,228,873,
231,876,877,
878,231,879,
229,880,881,
237,882,883,
253,248,256,
259,246,253,
249,255,257,
247,260,255,
270,884,885,
264,886,262,
887,270,885,
284,262,280,
265,888,283,
889,265,890,
263,285,281,
271,891,892,
287,282,290,
293,280,287,
283,289,291,
281,294,289,
297,318,316,
318,893,316,
296,319,309,
319,303,313,
314,330,332,
330,315,332,
308,332,331,
332,307,331,
296,333,317,
326,316,333,
317,894,303,
333,301,329,
337,296,309,
297,338,310,
326,335,339,
297,339,336,
341,895,337,
338,896,897,
339,898,899,
336,900,901,
313,343,347,
347,320,324,
304,902,346,
346,903,323,
302,904,312,
345,905,348,
312,344,301,
348,321,344,
334,906,349,
349,907,329,
321,908,344,
344,909,301,
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
299,910,360,
337,365,911,
338,366,359,
912,913,914,
299,915,342,
342,916,300,
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
917,1572,918,
919,403,920,
404,921,922,
405,923,924,
925,926,1573,
682,927,298,
928,929,930,
407,931,929,
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
282,932,423,
423,933,283,
934,420,935,
936,273,890,
267,937,285,
424,938,284,
275,939,940,
421,941,942,
290,423,427,
423,291,427,
294,424,429,
424,293,429,
291,425,427,
425,290,427,
294,425,289,
429,287,425,
230,943,944,
945,231,877,
238,946,947,
948,239,879,
233,949,251,
437,950,250,
241,951,952,
434,953,954,
256,436,439,
436,257,439,
260,437,441,
437,259,441,
257,438,439,
438,256,439,
260,438,255,
438,259,253,
196,955,214,
448,956,215,
204,957,958,
959,205,867,
199,449,217,
449,198,216,
207,960,961,
962,206,963,
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
168,964,856,
458,965,966,
181,457,462,
462,162,180,
163,967,457,
457,968,162,
187,461,465,
461,188,465,
192,462,466,
462,191,466,
188,463,465,
463,187,465,
185,466,463,
463,191,183,
472,969,970,
473,971,972,
973,471,974,
975,468,976,
474,977,1574,
979,1575,974,
980,430,981,
470,982,983,
477,1576,1577,
986,1578,988,
1579,478,1580,
1581,295,1582,
482,1583,1584,
1585,662,1586,
1587,997,1588,
479,1589,1000,
488,1590,1002,
489,1003,1004,
1005,487,1006,
1007,484,1008,
490,1009,1591,
1011,1592,1006,
1012,442,1593,
486,1594,1015,
1595,1017,1596,
1597,1020,1598,
1024,1600,1599,
1027,1602,1601,
498,1603,1604,
1605,677,1606,
1607,440,1608,
1033,1034,1609,
504,1036,1037,
505,1038,1039,
1040,503,1041,
1042,500,1043,
506,1044,1045,
1046,210,1041,
1047,455,1048,
502,1049,1050,
509,1610,1611,
1053,1054,1055,
1612,510,1613,
1058,227,1059,
514,1060,1614,
1615,664,1616,
1063,1617,1064,
1065,224,1618,
520,1067,1068,
521,1069,1070,
1071,519,1072,
1073,516,1074,
522,1075,1076,
1077,174,1072,
1078,467,1079,
518,1080,1081,
525,1082,1083,
524,1084,1085,
1086,526,1087,
1088,193,1089,
530,1090,1091,
1092,189,1087,
1093,609,1094,
1095,1096,1097,
243,532,533,
533,1098,493,
242,535,532,
1099,495,1100,
497,1101,494,
537,244,534,
234,536,235,
537,1102,536,
435,533,538,
538,493,498,
435,534,244,
538,494,534,
235,539,442,
536,1103,539,
245,539,535,
535,1104,495,
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
561,1105,489,
484,559,487,
556,239,559,
484,1106,556,
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
577,1107,576,
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
254,1108,1109,
220,1110,1111,
1112,193,1113,
1114,1115,1116,
1117,1118,1119,
1120,1121,1619,
1123,1124,1121,
1125,1126,1127,
1130,1621,1620,
1131,1132,1133,
1136,1623,1622,
1137,1138,1624,
596,1140,1141,
1625,1143,1626,
1627,1146,1628,
1148,616,1149,
1629,1151,1630,
1153,619,1154,
182,1155,1156,
1157,1158,1159,
638,1160,1631,
1162,624,1163,
624,1164,1165,
1168,1633,1632,
1171,1635,1634,
1172,1171,1173,
1174,1175,1115,
1176,596,1177,
628,1178,1179,
616,1180,1149,
1181,1182,1183,
619,1184,1154,
632,1185,1186,
624,1187,1163,
1188,1189,1190,
613,1191,1165,
1192,1193,1194,
258,1195,640,
1636,1197,1637,
440,1199,641,
641,1200,1201,
292,1202,261,
227,640,1203,
1206,1639,1638,
1207,997,1640,
1208,1209,1210,
1211,1212,1213,
1214,644,1215,
1216,650,1217,
1218,1219,1220,
1221,1222,1219,
1223,1224,1225,
1226,1227,1228,
1229,1230,1231,
1232,657,1233,
1234,1212,1233,
1235,1209,1236,
193,660,661,
1237,652,1238,
1239,1240,1241,
661,609,193,
1242,1243,1244,
1245,1641,1247,
1248,1249,1250,
1251,1252,1253,
1254,1255,1642,
1643,1256,1644,
1258,1259,1645,
1260,1179,1261,
1262,1177,1263,
1264,1265,1263,
621,1266,1156,
1646,1647,2243,
1272,1650,1649,
1275,1652,1651,
1276,1277,1278,
621,1279,1280,
1281,1189,1282,
636,1283,1284,
1285,1286,1653,
1288,1161,1289,
1290,1240,1291,
1292,1238,1293,
1294,1246,1654,
1295,1296,1280,
1297,1298,1655,
1656,1657,1658,
1659,1660,1661,
1662,1305,1663,
1664,1308,1665,
1310,1311,1666,
1312,1313,1667,
1315,1316,1668,
1669,1670,1671,
1323,1673,1672,
1326,1675,1674,
597,1676,1677,
1331,1679,1678,
1334,1681,1680,
1335,1336,1682,
1338,1339,1683,
701,1341,1342,
1343,704,1344,
1345,1684,1346,
1347,707,1348,
1349,1342,1685,
1350,1017,1344,
1351,727,1352,
1353,728,1354,
707,1355,701,
1356,705,1357,
1358,709,1359,
1360,708,1361,
1362,1686,1363,
702,1364,1365,
711,1366,1367,
1368,713,1369,
1370,1371,1687,
1373,711,1367,
1688,1375,1689,
1376,715,1377,
716,1378,665,
718,1690,1691,
1381,719,1692,
1383,703,1384,
703,1693,1694,
721,1387,1388,
722,1389,1390,
723,1391,1392,
1393,725,1695,
716,1696,1697,
186,1396,1390,
1399,1699,1698,
1700,1401,1701,
1405,1703,1702,
1408,1705,1704,
728,1409,711,
717,1410,719,
671,723,1411,
669,1706,1265,
1413,672,1414,
1415,1416,1407,
729,1417,1418,
184,1419,1420,
184,665,218,
1421,1298,1422,
1423,1424,1707,
1426,1708,1428,
1429,1305,1430,
1431,1308,1709,
1433,1434,1435,
1436,1313,1437,
1440,1711,1710,
1441,1442,1712,
1444,1443,1445,
1446,1447,1448,
1449,764,1430,
1450,1451,1422,
1452,1453,1454,
1457,1714,1713,
1460,1716,1715,
1463,1718,1717,
1719,1465,1720,
1721,1468,1722,
779,1723,1724,
1725,1473,1726,
1727,1728,1729,
1479,1731,1730,
1482,1733,1732,
1485,1735,1734,
780,1736,1737,
1488,1738,1490,
1739,1492,1740,
166,855,858,
158,160,178,
162,170,857,
158,176,180,
161,159,177,
167,862,859,
159,163,181,
167,171,861,
183,176,178,
191,180,176,
179,177,185,
177,181,192,
196,863,958,
196,214,212,
198,963,865,
216,198,194,
197,195,213,
203,869,866,
195,199,217,
199,868,961,
219,212,214,
225,216,212,
215,213,221,
213,217,226,
230,870,947,
230,944,872,
232,1494,874,
250,232,875,
247,876,881,
237,883,878,
229,233,880,
233,882,952,
253,246,248,
259,250,246,
249,247,255,
247,251,260,
264,884,1495,
264,282,886,
266,1496,887,
284,266,262,
265,263,888,
271,892,889,
263,267,285,
267,891,940,
287,280,282,
293,284,280,
283,281,289,
281,285,294,
297,310,318,
318,312,893,
296,317,319,
319,317,303,
314,306,330,
330,305,315,
308,314,332,
332,315,307,
296,326,333,
326,297,316,
317,333,894,
333,316,301,
337,335,296,
297,336,338,
326,296,335,
297,326,339,
335,895,1497,
298,896,901,
340,898,1497,
327,900,899,
313,303,343,
347,343,320,
304,313,902,
346,347,903,
302,345,904,
345,322,905,
312,348,344,
348,325,321,
334,320,906,
349,343,907,
321,334,908,
344,349,909,
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
930,911,910,
337,358,365,
897,311,913,
300,361,912,
299,360,915,
342,362,916,
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
926,1741,917,
918,1742,919,
404,1159,921,
327,923,922,
1498,1499,925,
1500,1498,927,
920,1119,928,
1116,924,931,
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
282,264,932,
423,418,933,
264,1495,934,
418,935,936,
267,419,937,
424,419,938,
419,939,942,
266,941,1496,
290,282,423,
423,283,291,
294,285,424,
424,284,293,
291,289,425,
425,287,290,
294,429,425,
429,293,287,
436,943,1501,
436,1501,945,
431,946,1502,
431,1502,948,
233,432,949,
437,432,950,
432,951,954,
232,953,1494,
256,248,436,
436,249,257,
260,251,437,
437,250,259,
257,255,438,
438,253,256,
260,441,438,
438,441,259,
196,443,955,
448,443,956,
443,957,1503,
443,1503,959,
199,444,449,
449,444,198,
444,960,1504,
444,1504,962,
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
456,964,966,
161,965,860,
181,163,457,
462,457,162,
163,171,967,
457,459,968,
187,178,461,
461,179,188,
192,181,462,
462,180,191,
188,185,463,
463,183,187,
185,192,466,
463,466,191,
276,969,972,
279,971,983,
268,976,973,
269,1505,975,
277,1743,970,
474,1574,979,
469,1505,980,
430,982,981,
286,1744,1745,
292,986,1746,
288,1747,1748,
1749,1139,1750,
663,1751,1752,
482,1584,1753,
295,1754,1582,
428,1755,1756,
242,1001,1004,
245,1003,1015,
234,1008,1005,
235,1507,1007,
243,1757,1002,
490,1591,1011,
485,1507,1758,
442,1014,1593,
252,1759,1760,
1100,1761,1762,
254,1763,1764,
1765,1109,1766,
680,1767,1768,
498,1604,1769,
1770,1509,1771,
440,1772,1608,
208,1036,1039,
211,1038,1050,
200,1043,1040,
201,1510,1042,
209,1044,1037,
506,1045,1046,
501,1510,1047,
455,1049,1048,
218,1051,1055,
224,1053,1618,
220,1773,1774,
1511,1111,1058,
665,1775,1776,
514,1614,1062,
512,1059,1063,
1064,1777,1065,
172,1067,1070,
175,1069,1081,
164,1074,1071,
165,1512,1073,
173,1075,1068,
522,1076,1077,
517,1512,1078,
467,1080,1079,
182,1082,1085,
190,1084,1097,
184,1513,1086,
1513,1113,1088,
186,1090,1083,
530,1091,1092,
528,1089,1093,
609,1095,1094,
243,242,532,
533,532,1098,
242,245,535,
532,535,1099,
497,537,1101,
537,234,244,
234,537,536,
496,1102,1027,
435,243,533,
538,533,493,
435,538,534,
538,498,494,
235,536,539,
536,496,1103,
245,442,539,
535,539,1104,
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
561,558,1105,
484,556,559,
556,237,239,
484,485,1106,
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
577,481,1107,
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
292,1108,987,
258,1110,1020,
218,1054,1112,
1118,1124,1114,
1132,1778,1117,
1135,1779,1120,
1515,1516,1123,
1130,1517,1125,
1780,1326,1781,
1517,1782,1131,
1129,1783,1134,
1363,1278,1137,
644,1140,1215,
598,1142,1784,
1515,1785,1786,
612,1146,1148,
1787,1788,1789,
1151,1790,1153,
645,1155,1241,
1173,1791,1157,
1519,1170,1160,
622,1520,1162,
612,1164,1521,
1792,1521,1793,
1167,1794,1169,
626,1795,1796,
1516,1168,1174,
647,1522,1176,
647,1178,1230,
631,1180,1183,
1186,1210,1181,
1523,1524,1184,
1524,1525,1185,
683,1187,1190,
1193,1225,1188,
634,1191,1194,
1182,1526,1192,
258,1034,1195,
636,1196,1201,
440,1509,1199,
637,1797,1527,
642,1202,1798,
227,258,640,
1528,1799,1800,
1287,1801,1207,
1217,1213,1208,
1220,1529,1211,
1529,1222,1214,
1250,1530,1216,
650,1530,1218,
1253,1518,1221,
1531,1228,1223,
1532,1533,1226,
1533,1534,1229,
1522,1534,1232,
1532,1802,1234,
1531,1526,1235,
193,224,1243,
661,660,1237,
1096,1535,1239,
661,653,1535,
453,1803,1242,
1203,1198,1245,
1525,1536,1248,
666,1251,1249,
1804,1805,1806,
1499,1807,1257,
1538,1808,1809,
672,671,1260,
1414,1261,1262,
1141,1259,1264,
1296,1396,1266,
1810,1811,2244,
1813,1401,1814,
1815,1540,1816,
1372,1500,1276,
646,1279,1541,
1197,1284,1281,
684,1283,1289,
1277,1817,1285,
1528,1286,1288,
1231,1541,1290,
1227,1291,1292,
1224,1818,1294,
628,671,1295,
1275,1819,1820,
1299,1821,1822,
1301,1823,1824,
1538,1825,1826,
1536,1827,1307,
1309,1828,1310,
1523,1829,1830,
1831,1832,1833,
1834,1442,1835,
1836,1445,1837,
1838,1448,1839,
1143,1840,1841,
1842,1408,1843,
1844,1542,1845,
1331,1846,1847,
1334,1848,1849,
286,1341,1365,
220,1384,1343,
680,1850,1851,
673,1852,1853,
677,1854,1855,
1357,1543,1350,
1544,1856,1351,
1352,1545,1353,
1354,1546,1355,
1386,1544,1356,
426,1361,1358,
663,1547,1360,
1359,1548,1362,
663,1364,1547,
708,1366,1549,
708,1549,1368,
1548,1369,1370,
702,1857,1858,
1859,1537,1860,
451,1551,1376,
451,1378,1551,
714,1379,1861,
714,1861,1862,
664,1377,1383,
719,1385,1692,
189,1387,1553,
464,1389,1388,
721,1391,1863,
721,1863,1864,
725,1395,1695,
1411,723,1392,
1865,1540,1866,
1545,1867,1868,
685,1869,1870,
681,1871,1872,
1402,1404,1409,
1556,1555,1410,
671,672,1557,
1542,1873,1412,
1418,1557,1413,
718,725,1415,
1558,1416,1874,
720,1419,1553,
184,1420,665,
1457,1559,1421,
1559,1875,1423,
1424,1463,1876,
1465,1560,1429,
1468,1877,1431,
692,1561,1433,
1473,1432,1436,
1476,1878,1879,
1479,1880,1881,
1447,1482,1444,
1427,1485,1446,
694,1434,1449,
1336,1454,1450,
1339,1560,1452,
1490,1562,1882,
1883,1563,1884,
1885,1564,1886,
1565,1887,1888,
1567,1889,1890,
766,1891,1892,
1568,1893,1894,
1895,1896,1897,
772,1898,1899,
1900,1570,1901,
1902,1571,1903,
764,1904,1905,
1451,1906,1907,
1453,1908,1909,
855,168,856,
168,855,166,
162,857,158,
858,158,857,
167,859,169,
860,169,859,
861,159,862,
159,861,163,
863,196,864,
194,864,196,
198,864,194,
864,198,865,
203,866,205,
867,205,866,
868,199,869,
195,869,199,
870,230,871,
228,871,230,
230,872,228,
873,228,872,
232,1910,228,
871,1910,874,
250,875,246,
873,246,875,
876,249,877,
249,876,247,
237,878,239,
879,239,878,
880,247,881,
247,880,251,
882,233,1911,
229,883,1911,
884,262,885,
262,884,264,
886,280,262,
266,887,262,
885,262,887,
888,281,283,
271,889,273,
890,273,889,
891,267,892,
263,892,267,
893,301,316,
894,329,303,
895,335,337,
896,311,897,
311,896,298,
898,327,899,
327,898,340,
900,298,901,
298,900,327,
902,347,346,
903,324,323,
904,348,312,
905,325,348,
906,343,349,
907,303,329,
908,349,344,
909,329,301,
910,365,360,
337,911,341,
300,912,914,
912,366,913,
914,913,311,
915,362,342,
916,361,300,
300,917,342,
918,342,917,
342,919,299,
920,299,919,
921,327,922,
327,921,298,
923,340,924,
340,923,327,
311,1912,914,
925,1913,926,
914,1573,300,
927,311,298,
299,928,930,
928,407,929,
930,929,341,
931,341,929,
341,931,340,
932,418,423,
933,265,283,
264,934,418,
935,418,934,
418,936,265,
890,265,936,
937,424,285,
938,266,284,
939,267,940,
267,939,419,
941,419,942,
419,941,266,
943,248,944,
248,943,436,
436,945,249,
877,249,945,
946,230,947,
230,946,431,
431,948,231,
879,231,948,
949,437,251,
950,232,250,
951,233,952,
233,951,432,
953,432,954,
432,953,232,
955,448,214,
956,197,215,
957,196,958,
196,957,443,
443,959,197,
867,197,959,
960,199,961,
199,960,444,
444,962,198,
963,198,962,
964,160,856,
160,964,456,
965,456,966,
456,965,161,
967,459,457,
968,170,162,
969,1914,970,
277,1914,276,
971,1915,972,
276,1915,279,
268,973,1916,
974,278,1916,
269,975,1917,
976,268,1917,
977,1743,978,
422,978,277,
474,979,471,
974,471,979,
469,981,475,
981,469,980,
982,279,983,
279,982,430,
1744,286,1918,
1752,985,1918,
476,1919,1920,
986,292,1578,
988,987,1745,
1921,990,1586,
1921,288,1748,
481,1922,480,
1922,481,1923,
1751,663,1924,
1925,994,1924,
1753,995,1926,
1580,478,1926,
483,1927,998,
996,1754,1587,
998,1588,1756,
1928,292,1746,
1928,999,1755,
1001,1929,1002,
243,1929,242,
1003,1930,1004,
242,1930,245,
234,1005,1931,
1006,244,1931,
235,1007,1932,
1008,234,1932,
1009,1757,1010,
435,1010,243,
490,1011,487,
1006,487,1011,
485,1933,491,
1933,485,1758,
1014,245,1015,
245,1014,442,
493,1934,1935,
1016,1759,1595,
1018,1596,1768,
492,1936,1937,
1019,1938,1597,
1021,1598,1760,
1764,1022,1600,
1939,494,1940,
1599,1023,1606,
1941,1025,1602,
1942,261,1943,
1601,1026,1944,
1767,680,1945,
1946,1029,1945,
1769,1030,1947,
1940,494,1947,
496,1948,499,
1948,496,1949,
495,1950,1951,
1033,1772,1034,
1035,1609,1952,
1036,209,1037,
209,1036,208,
1038,208,1039,
208,1038,211,
200,1040,210,
1041,210,1040,
201,1042,200,
1043,200,1042,
1044,209,1045,
447,1045,209,
506,1046,503,
1041,503,1046,
501,1048,507,
1048,501,1047,
1049,211,1050,
211,1049,455,
1051,218,1953,
1776,1052,1953,
508,1954,1055,
1053,224,1054,
1055,1054,218,
1955,1057,1616,
1955,220,1774,
513,1058,1956,
1059,512,1956,
1775,665,1957,
451,1061,1957,
514,1062,510,
1057,1613,1062,
512,1063,1958,
1064,515,1958,
1959,1065,1960,
1066,511,1960,
1067,173,1068,
173,1067,172,
1069,172,1070,
172,1069,175,
164,1071,174,
1072,174,1071,
165,1073,164,
1074,164,1073,
1075,173,1076,
460,1076,173,
522,1077,519,
1072,519,1077,
517,1078,523,
1079,523,1078,
1080,175,1081,
175,1080,467,
1082,182,1083,
186,1083,182,
1084,190,1085,
182,1085,190,
184,1086,1961,
1087,189,1961,
529,1088,528,
1089,528,1088,
1090,186,1091,
464,1091,186,
530,1092,526,
1087,526,1092,
528,1093,531,
1094,531,1093,
527,1095,1097,
1095,609,1096,
1097,1096,190,
1098,492,493,
532,1099,492,
1100,492,1099,
1101,534,494,
1102,496,536,
1103,499,539,
1104,499,495,
1105,486,489,
1106,557,556,
1107,480,576,
1108,292,1109,
261,1109,292,
1110,227,1111,
227,1110,258,
218,1112,184,
1113,184,1112,
407,1114,1116,
1114,599,1115,
1116,1115,405,
403,1117,1119,
1117,600,1118,
1119,1118,407,
601,1962,1122,
1120,1963,1121,
1122,1619,600,
603,1964,1121,
1123,599,1124,
1121,1124,600,
605,1965,1127,
1125,402,1126,
1127,1126,401,
1966,1128,1621,
1967,608,1968,
1130,1620,606,
402,1131,1133,
1131,1969,1132,
1133,1132,403,
1970,1134,1623,
1134,1971,1135,
1136,1622,601,
1972,1137,1624,
1137,610,1138,
1139,1138,295,
1140,611,1141,
611,1140,644,
611,1973,1144,
1142,598,1625,
1144,1626,1974,
604,1975,1976,
1145,1977,1627,
1147,1628,1978,
612,1148,613,
1149,613,1148,
603,1979,1980,
1150,1981,1629,
1152,1630,1982,
617,1153,616,
1154,616,1153,
1155,621,1156,
621,1155,645,
404,1983,1159,
1984,638,1985,
1159,1158,1986,
1160,622,1161,
684,1161,622,
622,1162,684,
1163,684,1162,
1164,613,1165,
613,1164,612,
1987,1166,1633,
1988,625,1989,
1632,1167,1990,
1991,1169,1635,
1169,622,1170,
1171,1634,623,
404,1172,1173,
1172,1795,1171,
1173,1171,623,
599,1174,1115,
1174,626,1796,
1115,1175,405,
647,1176,627,
1177,627,1176,
1178,627,1179,
627,1178,647,
1180,613,1149,
613,1180,631,
632,1181,1183,
1181,614,1182,
1183,1182,631,
1184,616,1154,
616,1184,632,
1185,615,1186,
615,1185,620,
1187,683,1163,
684,1163,683,
634,1188,1190,
1188,630,1189,
1190,1189,683,
1191,624,1165,
624,1191,634,
631,1192,1194,
1192,629,1193,
1194,1193,634,
1195,641,640,
640,1196,1198,
1196,636,1636,
1198,1637,1992,
1199,642,641,
1200,1993,1201,
1993,1200,1797,
1202,642,261,
227,1203,453,
1994,1639,1995,
1996,642,1798,
1638,1997,1998,
610,1207,1138,
1207,1999,997,
1138,1640,295,
615,1208,1210,
1208,648,1209,
1210,1209,614,
650,1211,1213,
1211,649,1212,
1213,1212,648,
649,1214,643,
1215,643,1214,
620,1216,615,
1217,615,1216,
650,1218,1220,
1218,658,1219,
1220,1219,651,
658,1221,1219,
1221,644,1222,
1219,1222,651,
629,1223,1225,
1223,654,1224,
1225,1224,630,
656,1226,1228,
1226,655,1227,
1228,1227,654,
655,1229,1231,
1229,647,1230,
1231,1230,646,
643,1232,2000,
1233,649,2000,
657,1234,1233,
1234,2001,1212,
1233,1212,649,
656,1235,1236,
1235,614,1209,
1236,1209,648,
661,1238,653,
1238,661,1237,
190,1239,1241,
1239,653,1240,
1241,1240,645,
453,1242,1244,
1242,660,1243,
1244,1243,224,
453,1245,1803,
1245,2002,1641,
1247,1246,652,
620,1248,1250,
1248,666,1249,
1250,1249,659,
658,1251,1253,
1251,666,1252,
1253,1252,2003,
667,2004,1256,
2005,607,2006,
1642,1255,2007,
401,1257,1127,
1257,2008,1643,
1127,1644,605,
597,2009,1974,
1258,2010,1259,
1144,1645,611,
672,1260,1261,
1260,628,1179,
1261,1179,627,
730,1262,1263,
1262,627,1177,
1263,1177,596,
596,2011,1263,
1264,669,1265,
1263,1265,730,
1266,182,1156,
182,1266,186,
2012,1648,2245,
2014,2015,1646,
1647,2016,2017,
2018,1650,2019,
2020,2246,2021,
1649,2022,2023,
2024,2247,1652,
2025,2248,2026,
1651,2249,2027,
668,2028,1278,
1276,682,1277,
1278,1277,610,
1279,628,1280,
628,1279,646,
635,1281,1282,
1281,683,1189,
1282,1189,630,
1283,683,1284,
683,1283,684,
610,2029,1287,
1285,2030,1286,
1287,1653,639,
637,1288,1289,
1288,638,1631,
1289,1161,684,
655,1290,1291,
1290,645,1240,
1291,1240,653,
654,1292,1293,
1292,653,1238,
1293,1238,652,
630,1294,1282,
1294,2031,1246,
1282,1654,635,
628,1295,1280,
1295,686,1296,
1280,1296,621,
675,2032,2033,
1297,2034,1298,
1299,1655,688,
2035,1658,2023,
1300,2036,1656,
1657,2037,2019,
2038,1661,2015,
2039,2040,1659,
1660,2041,2016,
670,2042,2043,
1304,2044,1662,
1306,1663,2045,
666,2046,2047,
2048,2049,1664,
1309,1665,692,
2050,1310,1666,
2051,694,2052,
598,2003,2053,
633,2054,2055,
1312,2056,1313,
1314,1667,2057,
2058,1315,1668,
2059,732,2060,
1317,1316,619,
2061,1671,2062,
2063,2064,1669,
1670,2065,2066,
2067,1673,2068,
2069,696,2070,
1672,1322,2071,
2072,1324,1675,
2073,697,2074,
1674,1325,2075,
2076,691,2077,
2076,1327,2078,
2079,2250,1679,
2080,700,2081,
1678,1330,2082,
2083,1681,2084,
2085,669,2086,
1680,1333,2087,
676,2088,2089,
1335,2090,1336,
1337,1682,731,
698,2091,2092,
1338,2093,1339,
1340,1683,699,
1341,2094,1342,
254,2094,286,
220,1343,252,
1344,252,1343,
1851,1345,2095,
1852,673,2095,
1853,1347,2096,
1854,677,2096,
1855,1349,1685,
1349,701,1342,
1024,1342,254,
704,1350,1344,
1350,680,1017,
1344,1017,252,
705,1351,706,
1352,706,1351,
706,1353,707,
1354,707,1353,
1355,702,701,
703,1356,704,
1357,704,1356,
426,1358,662,
1359,662,1358,
663,1360,426,
1361,426,1360,
2097,1362,2098,
2099,288,2098,
1364,663,1365,
286,1365,663,
1366,710,1367,
710,1366,708,
708,2100,709,
1369,2100,1368,
2101,1370,1687,
2102,713,2103,
1372,1371,2104,
702,1858,710,
1367,710,1373,
713,2105,2103,
1374,2106,1688,
1371,1689,2104,
451,1376,664,
1377,664,1376,
1378,451,665,
2107,716,1697,
716,2107,714,
714,1382,715,
1382,714,1862,
664,1384,220,
1384,664,1383,
1385,719,1386,
726,2108,719,
1387,464,1388,
464,1387,189,
1389,186,1390,
186,1389,464,
1391,722,1392,
722,1391,721,
721,1394,720,
1394,721,1864,
1395,725,2109,
1691,1380,2109,
686,722,1396,
1390,1396,722,
2110,1397,1699,
2111,679,2112,
1698,1398,2113,
728,2114,2115,
1400,2116,1700,
1402,1701,2117,
1870,1703,2118,
1403,2119,1404,
1702,1404,2120,
1872,1406,1705,
2121,718,2122,
1704,2123,2124,
1409,712,711,
1410,726,719,
671,1411,686,
1412,730,1265,
730,1412,2125,
729,1414,730,
1414,729,1413,
718,1415,2122,
1415,724,2126,
700,2123,2127,
1417,724,2128,
723,1418,2128,
1419,716,1420,
716,1419,720,
761,1421,1422,
1421,688,1298,
1422,1298,731,
688,1423,2129,
1423,2130,1424,
1425,1707,2131,
689,1426,2132,
1427,1708,2133,
1428,1427,2134,
764,1429,1430,
1429,687,1305,
1430,1305,691,
762,2135,1432,
1431,692,1308,
1709,1308,2049,
692,1433,1435,
1433,766,1434,
1435,1434,694,
767,2136,1437,
1436,693,1313,
1437,1313,732,
2137,1438,1711,
1438,2138,1439,
1710,1439,2139,
772,2140,1443,
1441,2141,1442,
1443,1712,2142,
697,1444,1445,
1444,772,1443,
1445,1443,2142,
690,1446,1448,
1446,771,1447,
1448,1447,697,
694,1449,2143,
1430,691,2143,
731,1450,1422,
1450,768,1451,
1422,1451,761,
699,1452,1454,
1452,770,1453,
1454,1453,768,
2144,1455,1714,
2145,787,2146,
1713,1456,2147,
2148,1458,1716,
2149,783,2150,
1715,1459,2151,
2152,1461,1718,
2153,777,2154,
1717,1462,2155,
778,2156,2157,
1464,2158,1719,
1466,1720,1905,
776,2159,2160,
1467,2251,1721,
1469,1722,2162,
2163,765,2164,
2163,2252,1891,
781,2165,2166,
1472,2167,1725,
1474,1726,2168,
2169,1729,2170,
1475,2253,1727,
1477,1728,2172,
1899,1478,1731,
2173,788,2170,
1730,1477,2172,
2174,1480,1733,
2175,786,2176,
1732,1481,1898,
2177,1483,1735,
2178,785,2179,
1734,1484,2180,
2181,766,1892,
2181,2254,1904,
761,2182,2255,
1488,2184,1738,
1490,1489,775,
768,2185,2186,
1491,2187,1739,
1493,1740,2188,
160,158,855,
858,855,158,
857,170,166,
862,159,859,
161,859,159,
861,171,163,
202,204,863,
958,863,204,
963,206,865,
202,865,206,
869,197,866,
197,869,195,
203,207,868,
961,868,207,
236,238,870,
947,870,238,
944,248,872,
246,872,248,
1494,240,874,
236,874,240,
875,232,228,
231,229,876,
881,876,229,
883,231,878,
231,883,229,
880,233,251,
237,241,882,
952,882,241,
270,272,884,
1495,884,272,
886,282,280,
1496,274,887,
270,887,274,
888,263,281,
892,265,889,
265,892,263,
271,275,891,
940,891,275,
893,312,301,
894,333,329,
341,340,895,
1497,895,340,
338,336,896,
901,896,336,
339,335,898,
1497,898,335,
336,339,900,
899,900,339,
902,313,347,
903,347,324,
904,345,348,
905,322,325,
906,320,343,
907,343,303,
908,334,349,
909,349,329,
299,930,910,
930,341,911,
910,911,365,
338,913,366,
913,338,897,
912,361,366,
915,360,362,
916,362,361,
300,926,917,
926,401,1741,
917,1126,1572,
342,918,919,
918,402,1742,
919,1133,403,
1159,682,921,
298,921,682,
405,404,923,
922,923,404,
311,1498,1912,
1498,406,1499,
925,1499,1913,
682,1500,927,
1500,406,1498,
927,1498,311,
299,920,928,
920,403,1119,
928,1119,407,
407,1116,931,
1116,405,924,
931,924,340,
932,264,418,
933,418,265,
1495,272,934,
420,934,272,
935,420,936,
273,936,420,
937,419,424,
938,419,266,
275,421,939,
942,939,421,
421,274,941,
1496,941,274,
230,431,943,
1501,943,431,
1501,431,945,
231,945,431,
238,1502,946,
1502,238,433,
1502,239,948,
239,1502,433,
949,432,437,
950,432,232,
241,434,951,
954,951,434,
434,240,953,
1494,953,240,
955,443,448,
956,443,197,
204,1503,957,
1503,204,445,
1503,205,959,
205,1503,445,
207,446,960,
1504,960,446,
1504,446,962,
206,962,446,
168,458,964,
966,964,458,
458,169,965,
860,965,169,
967,171,459,
968,459,170,
472,473,969,
972,969,473,
473,470,971,
983,971,470,
976,468,2189,
471,973,2189,
1505,469,975,
468,975,469,
474,472,977,
970,977,472,
978,278,1575,
278,978,422,
1505,269,980,
430,980,269,
470,981,982,
981,470,475,
477,2190,1576,
988,2190,1920,
986,1919,2191,
1000,986,2191,
2192,478,1579,
2192,1506,2193,
481,2193,1923,
1506,1747,1749,
991,1750,1581,
993,1583,2194,
477,1577,2194,
2195,662,1585,
2195,994,1925,
996,1927,2196,
992,996,2196,
999,1589,2197,
998,999,2197,
1001,1590,2198,
1004,1001,2198,
489,486,2199,
1015,1003,2199,
1008,484,2200,
487,1005,2200,
1507,485,2201,
484,1007,2201,
490,488,1009,
1002,1009,488,
1010,244,1592,
244,1010,435,
1507,235,1012,
442,1012,235,
1014,1594,2202,
1013,1014,2202,
493,2203,1934,
1021,2203,1937,
1019,1936,1762,
1035,1761,1951,
258,1938,1952,
2204,494,1939,
2204,1508,2205,
497,2205,1941,
1508,1763,1765,
1025,1766,1942,
1028,1603,2206,
493,1935,2206,
2207,677,1605,
2207,1029,1946,
496,1944,1949,
1026,1943,1770,
1031,1771,1607,
495,2208,1950,
1032,2208,499,
504,505,1036,
1039,1036,505,
505,502,1038,
1050,1038,502,
1043,500,1040,
503,1040,500,
1510,501,1042,
500,1042,501,
506,504,1044,
1037,1044,504,
1045,210,1046,
210,1045,447,
1510,201,1047,
455,1047,201,
502,507,1049,
1048,1049,507,
509,2209,1610,
1055,2209,508,
508,2210,1954,
1066,2210,511,
2211,513,2212,
1612,1056,2212,
513,2211,1058,
1511,1773,1111,
1058,1111,227,
514,509,1060,
1052,1060,1611,
2213,664,1615,
664,2213,451,
1059,227,1063,
453,1617,227,
515,1064,1959,
1064,453,1777,
1065,1244,224,
520,521,1067,
1070,1067,521,
521,518,1069,
1081,1069,518,
1074,516,1071,
519,1071,516,
1512,517,1073,
516,1073,517,
522,520,1075,
1068,1075,520,
1076,174,1077,
174,1076,460,
1512,165,1078,
467,1078,165,
518,523,1080,
1079,1080,523,
525,1085,1082,
1085,525,524,
524,1097,1084,
1097,524,527,
1513,529,1086,
526,1086,529,
529,1513,1088,
1513,184,1113,
1088,1113,193,
530,525,1090,
1083,1090,525,
1091,189,1092,
189,1091,464,
1089,193,1093,
609,1093,193,
527,1094,1095,
1094,527,531,
1098,532,492,
1099,535,495,
1101,537,534,
537,497,1102,
1027,1102,497,
1103,496,499,
1104,539,499,
1105,558,486,
1106,485,557,
1107,481,480,
254,286,1108,
987,1108,286,
220,1020,1110,
1020,220,252,
1054,193,1112,
193,1054,224,
407,1118,1114,
1118,600,1124,
1114,1124,599,
403,1132,1117,
1132,601,1778,
1117,1122,600,
601,1135,1962,
1135,602,1779,
1120,1514,1963,
603,1515,1964,
1515,604,1516,
1123,1516,599,
605,1130,1965,
1130,606,1517,
1125,1517,402,
605,2007,1966,
1255,2006,1780,
1128,1781,1967,
402,1517,1131,
1517,606,1782,
1131,1136,1969,
606,1129,1970,
1968,2068,1783,
1134,1323,1971,
288,2099,1972,
1363,668,1278,
1137,1278,610,
596,643,1140,
1215,1140,643,
1142,1973,2214,
1518,1142,2214,
1145,1975,1786,
1152,1785,1980,
617,1977,1982,
1146,617,1148,
616,1148,617,
1150,1979,1789,
1320,1787,2062,
1788,2066,1981,
617,1151,1153,
1151,618,1790,
1153,1317,619,
182,1241,1155,
1241,182,190,
404,1173,1983,
1173,623,1791,
1157,1519,1984,
638,1519,1160,
1519,623,1170,
1160,1170,622,
1520,625,1162,
624,1162,625,
624,625,1164,
1521,1164,625,
604,1976,1987,
1147,1978,1792,
1166,1793,1988,
626,1990,1991,
1167,1989,1794,
1169,1520,622,
404,405,2215,
1175,1172,2215,
599,1516,1174,
1516,604,1168,
1174,1168,626,
1522,643,1176,
596,1176,643,
628,646,1178,
1230,1178,646,
616,632,1180,
1183,1180,632,
632,1186,1181,
1186,615,1210,
1181,1210,614,
619,1523,1184,
1523,633,1524,
1184,1524,632,
632,1524,1185,
1524,633,1525,
1185,1525,620,
624,634,1187,
1190,1187,634,
634,1193,1188,
1193,629,1225,
1188,1225,630,
613,631,1191,
1194,1191,631,
631,1182,1192,
1182,614,1526,
1192,1526,629,
1034,440,1195,
641,1195,440,
640,641,2216,
1201,1196,2216,
1509,642,1199,
642,1509,261,
641,642,2217,
1527,1200,2217,
292,1205,1202,
1205,292,1997,
1204,1994,1800,
1528,637,1799,
1204,1527,1996,
610,1287,1207,
1206,1801,1995,
428,1999,1998,
615,1217,1208,
1217,650,1213,
1208,1213,648,
650,1220,1211,
1220,651,1529,
1211,1529,649,
649,1529,1214,
1529,651,1222,
1214,1222,644,
620,1250,1216,
1250,659,1530,
1216,1530,650,
1530,659,1218,
658,1218,659,
658,1253,1221,
1253,598,1784,
1221,1518,644,
629,1531,1223,
1531,656,1228,
1223,1228,654,
656,1532,1226,
1532,657,1533,
1226,1533,655,
655,1533,1229,
1533,657,1534,
1229,1534,647,
643,1522,1232,
1522,647,1534,
1232,1534,657,
657,1532,1234,
1532,656,1802,
1234,1236,2001,
656,1531,1235,
1531,629,1526,
1235,1526,614,
193,1243,660,
1237,660,652,
190,1096,1239,
1096,609,1535,
1239,1535,653,
661,1535,609,
1247,660,1242,
660,1247,652,
453,1203,1245,
1203,640,1198,
635,2002,1992,
620,1525,1248,
1525,633,2218,
1248,1536,2219,
658,659,1251,
1249,1251,659,
1254,2004,1806,
1269,1804,2013,
1805,2017,2005,
401,1499,1257,
1499,406,1807,
1257,1375,2008,
1258,2009,1809,
1333,1808,2087,
669,2010,2086,
1260,671,628,
730,1414,1262,
1414,672,1261,
1262,1261,627,
596,1141,2011,
1141,611,1259,
1264,1259,669,
621,1296,1266,
1296,686,1396,
1266,1396,186,
2118,2256,2012,
1539,1810,2220,
1811,2221,2014,
674,2221,2018,
1539,2220,1813,
1270,1814,2257,
675,2022,2024,
1271,2021,2258,
1273,2259,2260,
668,1372,2028,
1372,406,1500,
1276,1500,682,
621,645,1279,
1541,1279,645,
635,1197,1281,
1197,636,1284,
1281,1284,683,
636,2222,1283,
1289,2222,637,
610,1277,2029,
1158,1817,1986,
638,2030,1985,
637,1528,1288,
1528,639,1286,
1288,1286,638,
655,1231,1290,
1231,646,1541,
1290,1541,645,
654,1227,1292,
1227,655,1291,
1292,1291,653,
630,1224,1294,
1224,654,1818,
1294,1293,2031,
1295,671,686,
1297,2032,1820,
1337,1819,2089,
1297,1337,2034,
2033,1822,2035,
1425,1821,2129,
689,2036,2131,
2037,1824,2038,
1428,1823,2132,
690,2039,2134,
1304,2042,1826,
1328,1825,1677,
691,2044,2077,
666,2219,2046,
2218,2055,1827,
693,2048,2057,
666,2047,2050,
1309,692,1828,
1310,1435,2051,
1312,2054,1830,
1523,619,1829,
732,2056,2060,
2065,1833,2058,
2064,2139,1831,
1315,1832,2059,
602,2071,2061,
1322,2070,1834,
1318,1835,2063,
608,2075,2067,
1325,2074,1836,
1321,1837,2069,
607,2041,2072,
1303,2040,1838,
1324,1839,2073,
1327,1676,1841,
1311,1840,2053,
694,2078,2052,
676,2027,2079,
1274,2261,2262,
1843,2124,2080,
698,2082,2083,
2081,2223,1844,
1845,2224,2085,
1335,2088,1847,
1340,1846,2092,
1335,1340,2090,
2084,1849,2091,
1306,1848,2043,
687,2093,2045,
701,702,1341,
1365,1341,702,
1384,703,1343,
704,1343,703,
1543,705,2225,
1684,1345,2225,
1346,706,1347,
707,1347,706,
1348,701,1349,
701,1348,707,
704,1357,1350,
1357,705,1543,
1350,1543,1850,
705,1544,1351,
1544,726,1856,
1351,1399,727,
706,1352,1353,
1352,727,1545,
1353,1545,728,
707,1354,1355,
1354,728,1546,
1355,1546,1857,
703,1694,1356,
1386,2108,1544,
1356,1544,705,
1361,708,1358,
709,1358,708,
1547,710,1360,
708,1360,710,
662,1359,2097,
1359,709,1548,
1362,1548,1686,
702,1547,1364,
1547,702,710,
711,1549,1366,
1549,711,712,
1549,2226,1368,
713,2226,712,
668,1548,2101,
1548,709,1369,
1370,1369,2102,
1546,711,1373,
711,1546,728,
713,1550,2105,
1550,1869,1859,
1374,1860,2106,
1551,714,1376,
715,1376,714,
716,714,1378,
1551,1378,714,
718,2227,1690,
1552,2227,2228,
1552,719,1381,
719,1552,2228,
1377,715,1383,
703,1383,715,
703,1382,1693,
1382,703,715,
721,720,1387,
1553,1387,720,
722,721,1389,
1388,1389,721,
723,1554,1391,
1554,723,724,
1554,725,1393,
725,1554,724,
1395,1696,2229,
1394,1395,2229,
686,1392,722,
1392,686,1411,
726,2230,2110,
1555,2231,1865,
1397,1866,2111,
1400,2114,1868,
1398,1867,2113,
679,2116,2112,
1550,713,2232,
2119,1403,2232,
2233,718,2121,
2233,1556,2234,
728,2115,1409,
2117,678,2120,
1409,1404,712,
717,2234,1410,
1871,681,2231,
1410,1555,2230,
671,1557,723,
669,2224,1706,
1542,2223,1873,
1412,1558,2125,
729,1418,1413,
1418,723,1557,
1413,1557,672,
1415,725,724,
729,1558,1874,
1558,700,2127,
1417,1416,2126,
184,189,1419,
1553,1419,189,
1420,716,665,
761,1457,1421,
1457,773,1559,
1421,1559,688,
688,1559,1423,
1559,773,1875,
1423,1460,2130,
689,1424,1876,
1424,769,1463,
1426,1463,763,
764,1465,1429,
1465,770,1560,
1429,1560,687,
762,1468,2135,
1468,765,1877,
1431,1561,692,
1561,765,2235,
766,1433,2235,
767,1473,2136,
1473,762,1432,
1436,1432,693,
1438,2137,1879,
1476,767,1878,
1438,1437,2138,
1441,2140,1881,
1479,774,1880,
1441,1440,2141,
697,1447,1444,
1447,771,1482,
1444,1482,772,
690,1427,1446,
1427,2133,1485,
1446,1485,771,
1434,766,1449,
764,1449,766,
731,1336,1450,
1336,699,1454,
1450,1454,768,
699,1339,1452,
1339,687,1560,
1452,1560,770,
761,2255,2144,
1490,775,1562,
1455,1882,2145,
773,2147,2148,
1456,2146,1883,
1458,1884,2149,
769,2151,2152,
1459,2150,1885,
1461,1886,2153,
1464,2156,1888,
1566,1887,2236,
770,2158,2237,
1467,2159,1890,
1471,1889,1724,
765,2161,2164,
1470,1723,2238,
780,1737,2238,
1472,2165,1894,
1469,1893,2160,
762,2167,2162,
2239,1897,2169,
2240,2166,1895,
1896,2263,2171,
2176,786,2241,
2173,1478,2241,
771,2180,2174,
1484,2179,1900,
1480,1901,2175,
763,2155,2177,
1462,2154,1902,
1483,1903,2178,
1486,1736,2242,
778,2157,2242,
1488,2182,1907,
1493,1906,2186,
782,2184,2188,
1491,2185,1909,
1566,1908,2237,
784,2187,2236,
1572,402,918,
925,1573,914,
1574,977,978,
1575,278,974,
1576,985,1577,
985,1576,984,
1578,987,988,
989,1580,990,
1580,989,1579,
991,1582,992,
1582,991,1581,
1583,993,1584,
994,1584,993,
995,1585,990,
1586,990,1585,
996,1588,998,
1588,996,1587,
1589,999,1000,
1590,1001,1002,
1591,1009,1010,
1592,244,1006,
1012,1593,1013,
1594,1014,1015,
1016,1595,1018,
1596,1018,1595,
1019,1597,1021,
1598,1021,1597,
1022,1023,1600,
1599,1600,1023,
1025,1026,1602,
1601,1602,1026,
1603,1028,1604,
1029,1604,1028,
1030,1605,1023,
1606,1023,1605,
1031,1608,1032,
1608,1031,1607,
1033,1609,1035,
1610,1051,1611,
1052,1611,1051,
1056,1612,1057,
1613,1057,1612,
1614,1060,1061,
1062,1615,1057,
1616,1057,1615,
1617,453,1064,
1065,1618,1066,
1120,1619,1122,
1128,1620,1621,
1620,1128,1129,
1134,1622,1623,
1622,1134,1135,
1624,1138,1139,
1142,1626,1144,
1626,1142,1625,
1145,1627,1147,
1628,1147,1627,
1150,1629,1152,
1630,1152,1629,
1631,1160,1161,
1166,1632,1633,
1632,1166,1167,
1169,1634,1635,
1634,1169,1170,
1196,1637,1198,
1637,1196,1636,
1204,1205,1639,
1638,1639,1205,
1207,1640,1138,
1641,1246,1247,
1254,1642,1256,
1257,1644,1127,
1644,1257,1643,
1258,1645,1144,
1267,1646,2243,
1646,1268,1647,
1648,1647,1269,
1270,1649,1650,
1649,1270,2264,
1273,2265,1652,
1651,2265,2249,
1285,1653,1287,
1294,1654,1282,
1297,1655,1299,
1300,1656,1658,
1656,1301,1657,
1658,1657,1272,
1302,1659,1661,
1659,1303,1660,
1661,1660,1268,
1304,1663,1306,
1663,1304,1662,
1307,1664,1309,
1665,1309,1664,
1666,1311,1252,
1312,1667,1314,
1668,1316,1317,
1318,1669,1671,
1669,1319,1670,
1671,1670,1320,
1321,1672,1673,
1672,1321,1322,
1324,1674,1675,
1674,1324,1325,
1676,1328,1677,
1328,1676,1327,
1329,1678,1679,
1678,1329,1330,
1332,1680,1681,
1680,1332,1333,
1335,1682,1337,
1338,1683,1340,
1684,706,1346,
1685,1342,1024,
1686,668,1363,
1687,1371,1372,
1374,1688,1371,
1689,1371,1688,
1690,1380,1691,
1380,1690,1379,
1381,1692,1382,
1693,1385,1694,
1386,1694,1385,
1393,1695,1394,
1696,1380,1697,
1380,1696,1395,
1397,1698,1699,
1698,1397,1398,
1400,1701,1402,
1701,1400,1700,
1403,1702,1703,
1702,1403,1404,
1406,1704,1705,
1704,1406,1407,
1706,1412,1265,
1423,1707,1425,
1708,1427,1428,
1431,1709,1432,
1438,1710,1711,
1710,1438,1439,
1441,1712,1443,
1455,1713,1714,
1713,1455,1456,
1458,2266,1716,
1715,2266,1459,
1461,1717,1718,
1717,1461,1462,
1464,1720,1466,
1720,1464,1719,
1467,1721,2267,
1722,1469,2267,
1723,1471,1724,
1471,1723,1470,
1472,2268,1474,
1726,2268,1725,
1475,1727,1729,
1727,1476,1728,
1729,1728,1477,
1478,1477,1731,
1730,1731,1477,
1480,1732,1733,
1732,1480,1481,
1483,1734,1735,
1734,1483,1484,
1736,1486,1737,
1487,1737,1486,
1738,1489,1490,
1491,1740,1493,
1740,1491,1739,
1741,1126,917,
1742,1133,919,
1743,977,970,
1574,978,979,
1744,988,1745,
988,1744,984,
1746,986,1000,
1747,1506,1748,
989,1748,1506,
1506,1749,991,
1750,991,1749,
1751,985,1752,
985,1751,993,
1584,995,1753,
995,1584,994,
1754,996,1582,
992,1582,996,
1755,999,1756,
998,1756,999,
1757,1009,1002,
1591,1010,1011,
1758,1507,1012,
1593,1014,1013,
1759,1016,1760,
1021,1760,1016,
1761,1035,1762,
1019,1762,1035,
1763,1022,1764,
1022,1763,1508,
1508,1766,1025,
1766,1508,1765,
1767,1018,1768,
1018,1767,1028,
1604,1030,1769,
1030,1604,1029,
1026,1770,1031,
1771,1031,1770,
1772,1033,1608,
1032,1608,1033,
1618,1053,1066,
1773,1511,1774,
1056,1774,1511,
1775,1052,1776,
1052,1775,1060,
1614,1061,1062,
1777,1244,1065,
1778,1122,1117,
1779,1514,1120,
1255,1780,1128,
1781,1128,1780,
1782,1136,1131,
1783,1323,1134,
1784,1142,1518,
1785,1145,1786,
1145,1785,1152,
1514,1787,1789,
1787,1320,1788,
1789,1788,1150,
1790,1317,1153,
1791,1519,1157,
1147,1793,1166,
1793,1147,1792,
1794,1520,1169,
1795,1175,1796,
1175,1795,1172,
1797,1200,1527,
1798,1202,1205,
1799,1204,1800,
1204,1799,1527,
1801,1206,1207,
1802,1236,1234,
1803,1247,1242,
1537,1804,1806,
1804,1269,1805,
1806,1805,1254,
1807,1375,1257,
1808,1258,1809,
1258,1808,1333,
1405,1810,1812,
1810,1539,1811,
1812,2244,1267,
1539,1814,1270,
1814,1539,1813,
2258,1815,2269,
2259,1273,2269,
1817,1158,1285,
1818,1293,1294,
1819,1297,1820,
1297,1819,1337,
1821,1300,1822,
1300,1821,1425,
1823,1428,1824,
1302,1824,1428,
1825,1304,1826,
1304,1825,1328,
1827,1314,1307,
1828,1435,1310,
1829,1312,1830,
1312,1829,1316,
1319,1831,1833,
1831,1439,1832,
1833,1832,1315,
1322,1834,1318,
1835,1318,1834,
1325,1836,1321,
1837,1321,1836,
1303,1838,1324,
1839,1324,1838,
1840,1311,1841,
1327,1841,1311,
2262,1842,2270,
1843,1329,2270,
1330,1844,1332,
1845,1332,1844,
1846,1335,1847,
1335,1846,1340,
1848,1306,1849,
1338,1849,1306,
1850,1345,1851,
1345,1850,1543,
1852,1346,1853,
1347,1853,1346,
1854,1349,1855,
1349,1854,1348,
1856,1399,1351,
1857,1373,1858,
1373,1857,1546,
1550,1859,1374,
1860,1374,1859,
1861,1379,1552,
1861,1381,1862,
1381,1861,1552,
1692,1385,1382,
1863,1391,1554,
1863,1393,1864,
1393,1863,1554,
1695,1395,1394,
1555,1865,1397,
1866,1397,1865,
1867,1400,1868,
1400,1867,1398,
1869,1550,1870,
1403,1870,1550,
1871,1406,1872,
1406,1871,1556,
1873,1558,1412,
1874,1416,1417,
1875,1460,1423,
1876,1463,1426,
1877,1561,1431,
1878,1438,1879,
1438,1878,1437,
1880,1441,1881,
1441,1880,1440,
1490,1882,1455,
1456,1883,1458,
1884,1458,1883,
1459,1885,1461,
1886,1461,1885,
1887,1464,1888,
1464,1887,1566,
1889,1467,1890,
1467,1889,1471,
1891,1470,1892,
1487,1892,1470,
1893,1469,1894,
1472,1894,1469,
1569,1895,1897,
1895,1474,1896,
1897,1896,1475,
1898,1481,1899,
1478,1899,1481,
1484,1900,1480,
1901,1480,1900,
1462,1902,1483,
1903,1483,1902,
1904,1486,1905,
1466,1905,1486,
1906,1488,1907,
1488,1906,1493,
1908,1491,1909,
1491,1908,1566,
1910,871,228,
1910,232,874,
882,1911,883,
229,1911,233,
1912,925,914,
1913,401,926,
1573,926,300,
1914,277,970,
1914,969,276,
1915,276,972,
1915,971,279,
268,1916,278,
974,1916,973,
269,1917,268,
976,1917,975,
1743,277,978,
984,1918,985,
1918,984,1744,
663,1918,286,
1918,663,1752,
1919,986,1920,
988,1920,986,
1578,292,987,
1745,987,286,
288,1921,662,
1586,662,1921,
990,1921,989,
1748,989,1921,
1922,992,480,
992,1923,991,
1923,992,1922,
993,1751,994,
1924,994,1751,
426,1924,663,
1924,426,1925,
482,1926,478,
1926,482,1753,
990,1580,995,
1926,995,1580,
1927,996,998,
1754,997,1587,
997,1754,295,
1588,428,1756,
428,1588,997,
999,1928,1000,
1746,1000,1928,
292,1928,428,
1755,428,1928,
1929,243,1002,
1929,1001,242,
1930,242,1004,
1930,1003,245,
234,1931,244,
1006,1931,1005,
235,1932,234,
1008,1932,1007,
1757,243,1010,
1933,1013,491,
1013,1758,1012,
1758,1013,1933,
1934,1016,1935,
1018,1935,1016,
1759,252,1595,
1017,1595,252,
1596,1017,1768,
680,1768,1017,
1936,1019,1937,
1021,1937,1019,
1938,258,1597,
1020,1597,258,
1598,1020,1760,
252,1760,1020,
254,1600,1024,
1600,254,1764,
1022,1939,1023,
1940,1023,1939,
1024,1606,677,
1606,1024,1599,
497,1602,1027,
1602,497,1941,
1025,1943,1026,
1943,1025,1942,
1027,1601,496,
1944,496,1601,
1028,1767,1029,
1945,1029,1767,
673,1945,680,
1945,673,1946,
498,1947,494,
1947,498,1769,
1023,1940,1030,
1947,1030,1940,
1948,1032,499,
1032,1949,1031,
1949,1032,1948,
1950,1035,1951,
1035,1950,1033,
1772,440,1034,
1609,258,1952,
258,1609,1034,
1051,1953,1052,
665,1953,218,
1953,665,1776,
1954,1053,1055,
220,1955,664,
1616,664,1955,
1057,1955,1056,
1774,1056,1955,
513,1956,512,
1059,1956,1058,
1060,1775,1061,
1957,1061,1775,
451,1957,665,
1613,510,1062,
512,1958,515,
1064,1958,1063,
515,1960,511,
1960,515,1959,
1066,1960,1065,
184,1961,189,
1087,1961,1086,
1962,1120,1122,
1963,603,1121,
1619,1121,600,
1964,1123,1121,
1965,1125,1127,
605,1966,1130,
1621,1130,1966,
1128,1967,1129,
1968,1129,1967,
1620,1129,606,
1969,601,1132,
606,1970,1136,
1623,1136,1970,
1971,602,1135,
1622,1135,601,
288,1972,1139,
1624,1139,1972,
1973,1142,1144,
1625,598,1143,
1626,597,1974,
597,1626,1143,
1975,1145,1976,
1147,1976,1145,
1977,1146,1627,
1146,1977,617,
1628,1146,1978,
612,1978,1146,
1979,1150,1980,
1152,1980,1150,
1981,1151,1629,
1151,1981,618,
1630,1151,1982,
617,1982,1151,
1983,1157,1159,
1157,1985,1158,
1985,1157,1984,
1159,1986,682,
604,1987,1168,
1633,1168,1987,
1166,1988,1167,
1989,1167,1988,
1168,1632,626,
1990,626,1632,
626,1991,1171,
1635,1171,1991,
1634,1170,623,
1795,626,1171,
1174,1796,1175,
1636,636,1197,
1637,1197,1992,
635,1992,1197,
1993,636,1201,
636,1993,637,
1797,637,1993,
639,1994,1995,
1994,1204,1639,
1995,1639,1206,
1204,1798,1205,
1798,1204,1996,
1206,1638,1998,
1638,1205,1997,
1998,1997,428,
1999,428,997,
1640,997,295,
643,2000,649,
1233,2000,1232,
2001,648,1212,
1803,1245,1247,
2002,1246,1641,
1246,2002,635,
1253,2003,598,
2004,1254,1256,
1254,2005,1255,
2006,1255,2005,
1256,1642,605,
2007,605,1642,
2008,667,1643,
1256,1643,667,
1644,1256,605,
2009,1144,1974,
1144,2009,1258,
2010,669,1259,
1645,1259,611,
2011,1264,1263,
685,2271,2013,
2012,2272,1648,
2013,2245,1269,
1267,2273,1646,
2014,674,2015,
1646,2015,1268,
1269,1647,2017,
1647,1268,2016,
2017,2016,607,
674,2018,2019,
2018,1270,1650,
2019,1650,1272,
1270,2257,1271,
2021,1271,2020,
1272,1649,2023,
1649,2264,2022,
2023,2022,675,
675,2024,1275,
1652,1275,2024,
2260,2025,2274,
2261,1274,2274,
1275,1651,2275,
2027,676,2275,
2028,1276,1278,
2029,1285,1287,
2030,638,1286,
1653,1286,639,
1288,1631,1161,
2031,652,1246,
1654,1246,635,
2032,1299,2033,
1299,2032,1297,
2034,731,1298,
1655,1298,688,
675,2035,2023,
2035,1300,1658,
2023,1658,1272,
2036,1301,1656,
1301,2036,689,
1272,1657,2019,
1657,1301,2037,
2019,2037,674,
674,2038,2015,
2038,1302,1661,
2015,1661,1268,
1302,2039,1659,
2039,690,2040,
1659,2040,1303,
1268,1660,2016,
1660,1303,2041,
2016,2041,607,
2042,1306,2043,
1306,2042,1304,
2044,1305,1662,
1305,2044,691,
1663,687,2045,
687,1663,1305,
2046,1307,2047,
1309,2047,1307,
1307,2048,1664,
2048,693,2049,
1664,2049,1308,
1665,1308,692,
666,2050,1252,
1666,1252,2050,
1310,2052,1311,
2052,1310,2051,
1252,2053,2003,
2053,1252,1311,
2054,1314,2055,
1314,2054,1312,
2056,732,1313,
1667,693,2057,
693,1667,1313,
618,2058,1317,
1668,1317,2058,
1315,2060,1316,
2060,1315,2059,
602,2061,2062,
2061,1318,1671,
2062,1671,1320,
1318,2063,1669,
2063,695,2064,
1669,2064,1319,
1320,1670,2066,
1670,1319,2065,
2066,2065,618,
608,2067,2068,
2067,1321,1673,
2068,1673,1323,
1321,2069,1322,
2070,1322,2069,
1323,1672,602,
2071,602,1672,
607,2072,1326,
1675,1326,2072,
1324,2073,1325,
2074,1325,2073,
1326,1674,608,
2075,608,1674,
1327,2076,1328,
2077,1328,2076,
691,2076,694,
2078,694,2076,
676,2079,1331,
1679,1331,2079,
2276,2080,2277,
2081,1330,2277,
1331,1678,698,
2082,698,1678,
698,2083,2084,
2083,1332,1681,
2084,1681,1334,
1332,2085,1333,
2086,1333,2085,
1334,1680,670,
2087,670,1680,
2088,1337,2089,
1337,2088,1335,
2090,699,1336,
1682,1336,731,
2091,1338,2092,
1340,2092,1338,
2093,687,1339,
1683,1339,699,
2094,254,1342,
2094,1341,286,
680,2095,673,
2095,680,1851,
1346,1852,1345,
2095,1345,1852,
673,2096,677,
2096,673,1853,
1348,1854,1347,
2096,1347,1854,
677,1685,1024,
1685,677,1855,
662,2098,288,
2098,662,2097,
1363,2098,1362,
2098,1363,2099,
2100,1369,709,
2100,708,1368,
668,2101,1372,
1687,1372,2101,
1370,2103,1371,
2103,1370,2102,
1372,2104,406,
1858,1373,710,
2105,1374,2103,
1371,2103,1374,
2106,1375,1688,
1375,2106,667,
1689,1375,2104,
406,2104,1375,
1379,1697,1380,
1697,1379,2107,
2107,1379,714,
1382,1862,1381,
2108,1386,719,
1394,1864,1393,
1395,2109,1380,
718,1691,725,
2109,725,1691,
726,2110,1399,
1699,1399,2110,
1397,2112,1398,
2112,1397,2111,
1399,2113,727,
2113,1399,1698,
2114,1402,2115,
1402,2114,1400,
2116,679,1700,
1401,1700,679,
1701,678,2117,
678,1701,1401,
685,1870,2118,
1870,1403,1703,
2118,1703,1405,
2119,712,1404,
1405,1702,2278,
2120,678,2278,
681,1872,1408,
1705,1408,1872,
1406,2121,1407,
2122,1407,2121,
1408,1704,2124,
1704,1407,2123,
2124,2123,700,
730,2125,729,
2122,1415,1407,
1415,2126,1416,
1407,1416,2123,
2127,2123,1416,
1417,2128,1418,
723,2128,724,
2129,1423,1425,
2130,769,1424,
1707,1424,2131,
689,2131,1424,
2132,1426,1428,
1426,2133,1708,
2133,1426,763,
2134,1427,690,
2135,1431,1432,
1432,1709,693,
2049,693,1709,
2136,1436,1437,
774,2137,1440,
1711,1440,2137,
2138,732,1439,
1440,1710,695,
2139,695,1710,
2140,1441,1443,
2141,695,1442,
1712,1442,2142,
696,2142,1442,
1445,2142,696,
694,2143,691,
1430,2143,1449,
761,2144,1457,
1714,1457,2144,
1455,2145,1456,
2146,1456,2145,
1457,1713,773,
2147,773,1713,
773,2148,1460,
1716,1460,2148,
1458,2149,1459,
2150,1459,2149,
1460,1715,769,
2151,769,1715,
769,2152,1463,
1718,1463,2152,
1461,2153,1462,
2154,1462,2153,
1463,1717,763,
2155,763,1717,
2156,1464,2157,
1466,2157,1464,
2158,1465,1719,
1465,2158,770,
1720,764,1905,
764,1720,1465,
2159,1467,2160,
1469,2160,1467,
2161,1468,1721,
1468,2161,765,
1722,762,2162,
762,1722,1468,
1470,2164,1471,
2164,1470,2252,
765,2163,766,
1891,766,2163,
2165,1472,2166,
1474,2166,1472,
2167,762,1725,
1473,1725,762,
1726,767,2168,
767,1726,1473,
788,2169,2170,
2169,1475,1729,
2170,1729,1477,
2171,1476,1727,
1476,2171,2279,
1728,774,2172,
774,1728,1476,
772,1899,1479,
1731,1479,1899,
1478,2170,1477,
2170,1478,2173,
1479,2172,774,
2172,1479,1730,
771,2174,1482,
1733,1482,2174,
1480,2176,1481,
2176,1480,2175,
1482,1732,772,
1898,772,1732,
763,2177,1485,
1735,1485,2177,
1483,2178,1484,
2179,1484,2178,
1485,1734,771,
2180,771,1734,
1486,1892,1487,
1892,1486,2254,
766,2181,764,
1904,764,2181,
2182,1488,2183,
1490,2280,1488,
2184,1489,1738,
1489,2184,782,
2185,1493,2186,
1493,2185,1491,
2187,1492,1739,
1492,2187,784,
1740,782,2188,
782,1740,1492,
1741,401,1126,
1572,1126,402,
1742,402,1133,
1912,1498,925,
1913,1499,401,
976,2189,973,
471,2189,468,
978,1575,979,
2190,984,1576,
984,2190,988,
2190,476,1920,
476,2190,477,
476,2191,1919,
2191,476,479,
1000,2191,479,
1506,2192,989,
1579,989,2192,
478,2192,481,
2193,481,2192,
2193,1506,1923,
991,1923,1506,
1747,1139,1749,
1139,1747,288,
1750,295,1581,
295,1750,1139,
482,2194,1583,
2194,482,477,
985,993,1577,
2194,1577,993,
994,1585,995,
1585,994,2195,
662,2195,426,
1925,426,2195,
483,2196,1927,
2196,483,480,
992,2196,480,
479,2197,1589,
2197,479,483,
998,2197,483,
488,2198,1590,
2198,488,489,
1004,2198,489,
489,2199,1003,
1015,2199,486,
1008,2200,1005,
487,2200,484,
1507,2201,1007,
484,2201,485,
1010,1592,1011,
486,2202,1594,
2202,486,491,
1013,2202,491,
2203,1016,1934,
1016,2203,1021,
2203,492,1937,
492,2203,493,
492,1100,1936,
1762,1936,1100,
1100,495,1761,
1951,1761,495,
1019,1952,1938,
1952,1019,1035,
1508,2204,1022,
1939,1022,2204,
494,2204,497,
2205,497,2204,
2205,1025,1941,
1025,2205,1508,
1763,1109,1765,
1109,1763,254,
1766,261,1942,
261,1766,1109,
498,2206,1603,
2206,498,493,
1018,1028,1935,
2206,1935,1028,
1029,1605,1030,
1605,1029,2207,
677,2207,673,
1946,673,2207,
1944,1026,1949,
1031,1949,1026,
1943,261,1770,
1509,1770,261,
1771,1509,1607,
440,1607,1509,
2208,1032,1950,
1033,1950,1032,
2208,495,499,
2209,1051,1610,
1051,2209,1055,
2209,509,508,
2210,1066,1954,
1053,1954,1066,
2210,508,511,
1511,2212,1056,
2212,1511,2211,
510,2212,513,
2212,510,1612,
2211,1511,1058,
1773,220,1111,
1611,1060,509,
1061,1615,1062,
1615,1061,2213,
2213,1061,451,
1617,1063,227,
1959,1064,1065,
1777,453,1244,
1778,601,1122,
1962,1135,1120,
1779,602,1514,
1963,1514,603,
1964,1515,1123,
1965,1130,1125,
2007,1255,1966,
1128,1966,1255,
2006,607,1780,
1326,1780,607,
1781,1326,1967,
608,1967,1326,
1782,606,1136,
1969,1136,601,
1970,1129,1134,
1129,1968,1783,
1968,608,2068,
1783,2068,1323,
1971,1323,602,
2099,1363,1972,
1137,1972,1363,
611,2214,1973,
2214,611,644,
1518,2214,644,
604,1515,1975,
1786,1975,1515,
1515,603,1785,
1980,1785,603,
1145,1152,1977,
1982,1977,1152,
603,1789,1979,
1789,603,1514,
1514,2062,1787,
2062,1514,602,
1150,1788,1981,
1788,1320,2066,
1981,2066,618,
1790,618,1317,
1983,1173,1157,
1791,623,1519,
1984,1519,638,
1976,1166,1987,
1166,1976,1147,
1978,1521,1792,
1521,1978,612,
1793,1521,1988,
625,1988,1521,
1990,1167,1991,
1169,1991,1167,
1989,625,1794,
1520,1794,625,
404,2215,1172,
1175,2215,405,
640,2216,1196,
1201,2216,641,
641,2217,1200,
1527,2217,642,
1997,292,428,
639,1528,1994,
1800,1994,1528,
1799,637,1527,
1996,1527,642,
1287,1995,1801,
1995,1287,639,
1207,1206,1999,
1998,1999,1206,
1253,1784,1518,
1802,656,1236,
2001,1236,648,
1245,1198,2002,
1992,2002,1198,
1525,2218,1536,
1248,2219,666,
667,1537,2004,
1806,2004,1537,
1537,685,1804,
2013,1804,685,
1254,1805,2005,
1805,1269,2017,
2005,2017,607,
1807,406,1375,
2008,1375,667,
597,1538,2009,
1809,2009,1538,
1538,670,1808,
2087,1808,670,
1258,2086,2010,
2086,1258,1333,
2011,1141,1264,
685,2118,2271,
2118,1405,2256,
2012,1812,2272,
1405,2281,1810,
2220,2281,678,
1267,1811,2273,
1811,1539,2221,
2014,2221,674,
2221,2282,2018,
1270,2282,1539,
2220,1401,1813,
1401,2220,678,
1814,1401,2020,
679,2246,1401,
2022,1271,2283,
2247,2024,2283,
2021,679,2284,
1540,1815,2284,
1816,1540,2285,
2248,2025,2285,
2028,1372,1276,
2222,1289,1283,
2222,636,637,
2029,1277,1285,
1277,1986,1817,
1986,1277,682,
1285,1985,2030,
1985,1285,1158,
1818,654,1293,
2031,1293,652,
675,1275,2032,
1820,2032,1275,
1275,676,1819,
2089,1819,676,
2034,1337,731,
675,2033,2035,
2033,1299,1822,
2035,1822,1300,
1299,688,1821,
2129,1821,688,
1300,1425,2036,
2131,2036,1425,
674,2037,2038,
2037,1301,1824,
2038,1824,1302,
1301,689,1823,
2132,1823,689,
1302,2134,2039,
2134,1302,1428,
670,1826,2042,
1826,670,1538,
1538,597,1825,
1677,1825,597,
1304,1328,2044,
2077,2044,1328,
2219,1536,2046,
1307,2046,1536,
1536,2218,1827,
2218,633,2055,
1827,2055,1314,
1307,1314,2048,
2057,2048,1314,
2047,1309,2050,
1310,2050,1309,
1828,692,1435,
2051,1435,694,
633,1523,2054,
1830,2054,1523,
1829,619,1316,
1312,2060,2056,
2060,1312,1316,
618,2065,2058,
2065,1319,1833,
2058,1833,1315,
1319,2064,1831,
2064,695,2139,
1831,2139,1439,
1832,1439,2059,
732,2059,1439,
2071,1322,2061,
1318,2061,1322,
2070,696,1834,
1442,1834,696,
1835,1442,2063,
695,2063,1442,
2075,1325,2067,
1321,2067,1325,
2074,697,1836,
1445,1836,697,
1837,696,2069,
696,1837,1445,
2041,1324,2072,
1324,2041,1303,
2040,690,1838,
1448,1838,690,
1839,1448,2073,
697,2073,1448,
597,1143,1676,
1841,1676,1143,
1143,2053,1840,
2053,1143,598,
1327,2052,2078,
2052,1327,1311,
2027,1274,2286,
2250,2079,2286,
2026,681,2287,
1408,1842,2287,
1329,1843,2276,
1843,1408,2124,
2080,2124,700,
2082,1330,2083,
1332,2083,1330,
1330,2081,1844,
2081,700,2223,
1844,2223,1542,
1332,1845,2085,
1845,1542,2224,
2085,2224,669,
676,1847,2088,
1847,676,1331,
1331,2092,1846,
2092,1331,698,
2090,1340,699,
698,2084,2091,
2084,1334,1849,
2091,1849,1338,
1334,2043,1848,
2043,1334,670,
1338,1306,2093,
2045,2093,1306,
1543,2225,1345,
706,2225,705,
2225,706,1684,
1350,1850,680,
1856,726,1399,
1355,1857,702,
1694,1386,1356,
2108,726,1544,
2097,1359,1362,
1686,1548,668,
2226,713,1368,
2226,1549,712,
2101,1548,1370,
2102,1369,713,
2105,1550,1374,
1869,685,1859,
1537,1859,685,
1860,1537,2106,
667,2106,1537,
2227,1552,1690,
1379,1690,1552,
2227,717,2228,
717,2227,718,
719,2228,717,
1693,1382,1385,
716,2229,1696,
2229,716,720,
1394,2229,720,
2230,1555,2110,
1397,2110,1555,
2231,681,1865,
1540,1865,681,
1866,1540,2111,
679,2111,1540,
728,1545,2114,
1868,2114,1545,
1545,2113,1867,
2113,1545,727,
1400,2112,2116,
2112,1400,1398,
1550,2232,1403,
712,2232,713,
2232,712,2119,
1556,2121,1406,
2121,1556,2233,
718,2233,717,
2234,717,2233,
2115,1402,1409,
1402,2120,1404,
2120,1402,2117,
2234,1556,1410,
1556,1871,1555,
2231,1555,1871,
1410,2230,726,
2224,1542,1706,
1412,1706,1542,
2223,700,1873,
1558,1873,700,
2125,1558,729,
729,1874,1417,
1558,2127,1416,
1417,2126,724,
1875,773,1460,
2130,1460,769,
689,1876,1426,
2135,1468,1431,
1877,765,1561,
1561,2235,1433,
766,2235,765,
2136,1473,1436,
774,1476,2137,
1879,2137,1476,
1878,767,1437,
2138,1437,732,
772,1479,2140,
1881,2140,1479,
1880,774,1440,
2141,1440,695,
2133,763,1485,
2183,1455,2144,
1455,2183,2280,
1882,1562,2145,
787,2145,1562,
2147,1456,2148,
1458,2148,1456,
2146,787,1883,
1563,1883,787,
1884,1563,2149,
783,2149,1563,
2151,1459,2288,
1461,2152,2288,
2150,783,1885,
1564,1885,783,
1886,1564,2153,
777,2153,1564,
778,1565,2156,
1888,2156,1565,
1565,784,1887,
2236,1887,784,
1464,1566,2158,
2237,2158,1566,
776,1890,2159,
1890,776,1567,
1567,779,1889,
1724,1889,779,
1467,2164,2251,
2164,1467,1471,
779,780,1723,
2238,1723,780,
1487,1470,1737,
2238,1737,1470,
781,1894,2165,
1894,781,1568,
1568,2160,1893,
2160,1568,776,
1472,2162,2167,
2162,1472,1469,
788,2239,2169,
2239,1569,1897,
2169,1897,1475,
1569,2240,1895,
2240,781,2166,
1895,2166,1474,
1475,1896,2253,
1896,1474,2263,
2171,2168,2279,
1481,2176,1478,
2241,1478,2176,
788,2241,786,
2241,788,2173,
2180,1484,2289,
1480,2174,2289,
2179,785,1900,
1570,1900,785,
1901,1570,2175,
786,2175,1570,
2155,1462,2177,
1483,2177,1462,
2154,777,1902,
1571,1902,777,
1903,1571,2178,
785,2178,1571,
780,2242,1736,
2242,780,778,
1466,1486,2157,
2242,2157,1486,
761,1451,2182,
1907,2182,1451,
1451,768,1906,
2186,1906,768,
1488,1493,2184,
2188,2184,1493,
768,1453,2185,
1909,2185,1453,
1453,770,1908,
2237,1908,770,
1491,1566,2187,
2236,2187,1566,
2243,1647,1648,
1810,2244,1812,
2012,2245,2013,
2246,679,2021,
2247,1273,1652,
2248,681,2026,
2249,1274,2027,
2250,1329,1679,
2251,2161,1721,
2252,1470,1891,
2253,2171,1727,
2254,1486,1904,
2255,2182,2183,
2256,1812,2012,
2257,1814,2020,
2258,2021,1815,
2259,1816,2260,
2025,2260,1816,
2261,1842,2262,
1842,2261,2026,
2255,2183,2144,
2263,2168,2171,
1267,2243,1648,
2264,1270,1271,
2265,1651,1652,
2265,1274,2249,
1274,2265,1273,
2266,1715,1716,
2266,1458,1459,
1467,2267,1469,
1722,2267,1721,
2268,1726,1474,
2268,1472,1725,
2244,1811,1267,
1271,2269,1273,
2269,1271,2258,
1816,2269,1815,
2269,1816,2259,
1274,2270,1329,
2270,1274,2262,
1843,2270,1842,
2271,2012,2013,
2272,1267,1648,
2245,1648,1269,
2273,2014,1646,
2257,2020,1271,
2264,1271,2022,
1273,2274,1274,
2274,1273,2260,
2026,2274,2025,
2274,2026,2261,
1275,2275,676,
2027,2275,1651,
1329,2277,1330,
2277,1329,2276,
2081,2277,2080,
1405,2278,678,
2120,2278,1702,
2164,2252,2163,
1476,2279,767,
1892,2254,2181,
2280,2183,1488,
2271,2118,2012,
2256,1405,1812,
2272,1812,1267,
2281,2220,1810,
2281,1405,678,
2273,1811,2014,
2282,1270,2018,
2282,2221,1539,
2246,2020,1401,
2022,2283,2024,
1273,2283,1271,
2283,1273,2247,
2021,2284,1815,
1540,2284,679,
1816,2285,2025,
681,2285,1540,
2285,681,2248,
2027,2286,2079,
1329,2286,1274,
2286,1329,2250,
2026,2287,1842,
1408,2287,681,
2276,1843,2080,
1455,2280,1490,
2151,2288,2152,
1461,2288,1459,
2251,2164,2161,
2253,1896,2171,
2263,1474,2168,
2279,2168,767,
2180,2289,2174,
1480,2289,1484
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
		return new Vector(this.mOriginalPositions[idx * 3], this.mOriginalPositions[idx * 3 + 1], this.mOriginalPositions[idx * 3 + 2]);
	}

	// Helper method to set a transformed vertex into the correct location.
	setTransformedVertex(idx, vtx) {
		this.mTransformedPositions[idx * 3] = vtx.x;
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
		this.linearBlendSkinning();

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
		Math.max.apply(Math, armPositions);
		Math.min.apply(Math, armPositions);

		console.log(armPositions);

		for (var i = 0; i < armPositions.length; i++) {
			// need to convert these between -10 and 6
			// let xNew = (armPositions[i] - xMinOld) / (xMaxOld - xMinOld) * (xMaxNew - xMinNew) + xMinNew;

			// convert armPosition[i] between 6 and -10.0
			// console.log(xNew);

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
			var i0 = this.mIndices[i * 3];
			var i1 = this.mIndices[i * 3 + 1];
			var i2 = this.mIndices[i * 3 + 2];

			this.newIndices.push(i0);
			this.newIndices.push(i1);
			this.newIndices.push(i1);
			this.newIndices.push(i2);
			this.newIndices.push(i2);
			this.newIndices.push(i0);
		}

		this.mesh = new TriangleMesh(this.gl, this.mTransformedPositions, this.newIndices, this.shader, false, false);
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
      false,
      false,
      new Vector(1.0, 0.0, 0.0),
      new Vector(1.0, 0.0, 0.0)
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

    // keep track of longest recorded hand (at middle finger) from mediapipe (for scaling)
    this.handLengths = [];

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

  updatePose(positions) {
    if (positions.length > 0) {
      // x: right
      // y: up
      // z: towards camera

      // left to right from mediapipe, goes up and down (x, y)

      // normalize hand
      const mediapipeWrist = Vector.fromMediapipeVec(positions[0]);
      const mediapipeMiddleFinger = Vector.fromMediapipeVec(positions[12]);
      const handLength = mediapipeWrist.subtract(mediapipeMiddleFinger).length();
      this.handLengths.push(handLength);
      const renderedWrist = this.skeleton.getJoint(2).mOriginPosition;
      const bindingPoseHandLength = landmarks[12].subtract(renderedWrist).length();

      if (this.handLengths.length > 200) this.handLengths.shift();
      const scaleFactor = bindingPoseHandLength / lib(this.handLengths, 0.95);

      // transform from mediapipe to world space
      const transformPos = (pos) => {
        const xRot = Matrix.rotate(-90, 1, 0, 0);
        const yRot = Matrix.rotate(90, 0, 1, 0);
        const scale = Matrix.scale(scaleFactor, scaleFactor, scaleFactor * 1.5);

        // -2, 0, 0.25
        // -0.5 offsets the wrist to the center of screen
        // more negative x, moves the hand to the right
        // var wristVector =  new Vector(4.0*(pos.x) - 2.0, 4.0*(pos.y), 4.0*(pos.z)); // new Vector(4.0*(pos.x) + 0.5, 4.0*(pos.y) - 2.0, 4.0*(pos.z));
        // var rotWristVector = this.transformVector(xRot.m, wristVector); // wristVector.multiply(Matrix.rotate(0, 1, 1, 1)); // .multiply(Matrix.rotate(180, 0, 1, 0));
        // var yRotWrist = this.transformVector(yRot.m, rotWristVector);
        // var finalWrist = this.transformVector(zRot.m, yRotWrist);

        // return yRotWrist;

        let vec = Vector.fromMediapipeVec(pos);
        // back to origin;
        vec = vec.subtract(mediapipeWrist);
        // rotate
        vec = this.transformVector(xRot.m, vec);
        vec = this.transformVector(yRot.m, vec);
        // scale
        vec = this.transformVector(scale.m, vec);
        // move to render wrist
        vec = vec.add(renderedWrist);

        return vec;
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
          // this.skin.showJointWeights(id);
        });
        v1s.forEach(id => {
          // update joint end
          this.skeleton.getJoint(id).setJointEnd(pos);
        });
      });
    }
  }

  render(gl, w, h) {
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    var projection = Matrix.perspective(60, w / h, 0.1, 100);
    var view = Matrix.translate(-8, 0, -6).multiply(
      Matrix.rotate(this.pitch, 1, 0, 0)).multiply(
        Matrix.rotate(this.yaw, 0, 1, 0)).multiply(
          Matrix.translate(8, 0, 0)).multiply(
            Matrix.rotate(90, 0, 0, 1)).multiply(
              Matrix.rotate(270, 1, 0, 0)
            );

    if (this.skin) {
      this.skin.render(gl, view, projection, true);
    }

    if (this.skeleton) {
      gl.clear(gl.DEPTH_BUFFER_BIT);

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
  maxNumHands: 1,
  modelComplexity: 1,
  minDetectionConfidence: 0.7,
  minTrackingConfidence: 0.7
});

function setupTask(canvasId, taskFunction) {
  const videoElement = document.getElementsByClassName('input_video')[0];
  // const canvasElement = document.getElementsByClassName('output_canvas')[0];
  // const canvasCtx = canvasElement.getContext('2d');

  var renderLoop;

  // canvasCtx.save();
  // canvasCtx.clearRect(0, 0, canvasElement.width, canvasElement.height);

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
    task.render(gl, renderWidth, renderHeight);
    setTimeout(() => window.requestAnimationFrame(renderLoop), 5);
  };

  window.requestAnimationFrame(renderLoop);

  hands.onResults((results) => {
    if (results.multiHandLandmarks && results.multiHandLandmarks.length > 0) {
      positions = results.multiHandLandmarks[0];
      // update skeleton
      task.updatePose(positions);
    } else {
      positions = [];
    }

    // canvasCtx.restore();

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
    width: 480,
    height: 360
  });

  camera.start();
}

// entrypoint
function initialize(canvasId) {
  setupTask(canvasId, HandRenderer);
}

// ref initialize to keep in bundle
console.log(initialize);
