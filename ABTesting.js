!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.ABTesting=n():t.ABTesting=n()}(this,function(){return function(t){function n(e){if(r[e])return r[e].exports;var o=r[e]={exports:{},id:e,loaded:!1};return t[e].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var r={};return n.m=t,n.c=r,n.p="/dist/",n(0)}([function(t,n,r){"use strict";function e(t){return t&&t.__esModule?t:{"default":t}}function o(t){return t.buckets.min!==t.buckets.max}function u(t){return!o(t)}function i(t,n,r,e){var o=t.match,u=!0,i=!0,c=!0,f=!1;return o.hasOwnProperty("userAgent")&&(u=new RegExp(o.userAgent,"i").test(n)),o.hasOwnProperty("lang")&&(i=r.some(function(t){return new RegExp(o.lang,"i").test(t)})),o.hasOwnProperty("country")&&(c=new RegExp(o.country,"i").test(e)),f=(0,p["default"])(o).some(function(t){return-1===["userAgent","lang","country"].indexOf(t)}),u&&i&&c&&!f}function c(t,n){var r=parseInt(n.deviceID,16),e=r%100;console.log("User Bucket is:",e);var o=parseInt(t.buckets.min,10),u=parseInt(t.buckets.max,10);return e>=o&&u>e}function f(t,n,r,e,o){return c(t,n)&&i(t,r,e,o)}function a(t,n){if(!n)return null;var r=n.filter(function(n){return n.name===t});return 0===r.length?null:r[0]}Object.defineProperty(n,"__esModule",{value:!0});var s=r(1),p=e(s);n.isEnabled=o,n.isDisabled=u,n.matches=i,n.isActive=c,n.isActivatedFeature=f,n.getFeature=a},function(t,n,r){t.exports={"default":r(2),__esModule:!0}},function(t,n,r){r(3),t.exports=r(23).Object.keys},function(t,n,r){var e=r(4),o=r(6);r(21)("keys",function(){return function(t){return o(e(t))}})},function(t,n,r){var e=r(5);t.exports=function(t){return Object(e(t))}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,r){var e=r(7),o=r(20);t.exports=Object.keys||function(t){return e(t,o)}},function(t,n,r){var e=r(8),o=r(9),u=r(12)(!1),i=r(16)("IE_PROTO");t.exports=function(t,n){var r,c=o(t),f=0,a=[];for(r in c)r!=i&&e(c,r)&&a.push(r);for(;n.length>f;)e(c,r=n[f++])&&(~u(a,r)||a.push(r));return a}},function(t,n){var r={}.hasOwnProperty;t.exports=function(t,n){return r.call(t,n)}},function(t,n,r){var e=r(10),o=r(5);t.exports=function(t){return e(o(t))}},function(t,n,r){var e=r(11);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==e(t)?t.split(""):Object(t)}},function(t,n){var r={}.toString;t.exports=function(t){return r.call(t).slice(8,-1)}},function(t,n,r){var e=r(9),o=r(13),u=r(15);t.exports=function(t){return function(n,r,i){var c,f=e(n),a=o(f.length),s=u(i,a);if(t&&r!=r){for(;a>s;)if(c=f[s++],c!=c)return!0}else for(;a>s;s++)if((t||s in f)&&f[s]===r)return t||s||0;return!t&&-1}}},function(t,n,r){var e=r(14),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},function(t,n){var r=Math.ceil,e=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?e:r)(t)}},function(t,n,r){var e=r(14),o=Math.max,u=Math.min;t.exports=function(t,n){return t=e(t),0>t?o(t+n,0):u(t,n)}},function(t,n,r){var e=r(17)("keys"),o=r(19);t.exports=function(t){return e[t]||(e[t]=o(t))}},function(t,n,r){var e=r(18),o="__core-js_shared__",u=e[o]||(e[o]={});t.exports=function(t){return u[t]||(u[t]={})}},function(t,n){var r=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=r)},function(t,n){var r=0,e=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++r+e).toString(36))}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,r){var e=r(22),o=r(23),u=r(32);t.exports=function(t,n){var r=(o.Object||{})[t]||Object[t],i={};i[t]=n(r),e(e.S+e.F*u(function(){r(1)}),"Object",i)}},function(t,n,r){var e=r(18),o=r(23),u=r(24),i=r(26),c="prototype",f=function(t,n,r){var a,s,p,l=t&f.F,v=t&f.G,x=t&f.S,y=t&f.P,d=t&f.B,h=t&f.W,b=v?o:o[n]||(o[n]={}),g=b[c],m=v?e:x?e[n]:(e[n]||{})[c];v&&(r=n);for(a in r)s=!l&&m&&void 0!==m[a],s&&a in b||(p=s?m[a]:r[a],b[a]=v&&"function"!=typeof m[a]?r[a]:d&&s?u(p,e):h&&m[a]==p?function(t){var n=function(n,r,e){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,r)}return new t(n,r,e)}return t.apply(this,arguments)};return n[c]=t[c],n}(p):y&&"function"==typeof p?u(Function.call,p):p,y&&((b.virtual||(b.virtual={}))[a]=p,t&f.R&&g&&!g[a]&&i(g,a,p)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,n){var r=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=r)},function(t,n,r){var e=r(25);t.exports=function(t,n,r){if(e(t),void 0===n)return t;switch(r){case 1:return function(r){return t.call(n,r)};case 2:return function(r,e){return t.call(n,r,e)};case 3:return function(r,e,o){return t.call(n,r,e,o)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,r){var e=r(27),o=r(35);t.exports=r(31)?function(t,n,r){return e.f(t,n,o(1,r))}:function(t,n,r){return t[n]=r,t}},function(t,n,r){var e=r(28),o=r(30),u=r(34),i=Object.defineProperty;n.f=r(31)?Object.defineProperty:function(t,n,r){if(e(t),n=u(n,!0),e(r),o)try{return i(t,n,r)}catch(c){}if("get"in r||"set"in r)throw TypeError("Accessors not supported!");return"value"in r&&(t[n]=r.value),t}},function(t,n,r){var e=r(29);t.exports=function(t){if(!e(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n,r){t.exports=!r(31)&&!r(32)(function(){return 7!=Object.defineProperty(r(33)("div"),"a",{get:function(){return 7}}).a})},function(t,n,r){t.exports=!r(32)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n,r){var e=r(29),o=r(18).document,u=e(o)&&e(o.createElement);t.exports=function(t){return u?o.createElement(t):{}}},function(t,n,r){var e=r(29);t.exports=function(t,n){if(!e(t))return t;var r,o;if(n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;if("function"==typeof(r=t.valueOf)&&!e(o=r.call(t)))return o;if(!n&&"function"==typeof(r=t.toString)&&!e(o=r.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}}])});
//# sourceMappingURL=ABTesting.js.map