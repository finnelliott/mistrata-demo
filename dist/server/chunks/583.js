exports.id = 583;
exports.ids = [583];
exports.modules = {

/***/ 2513:
/***/ ((module) => {

"use strict";
/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */



/**
 * Module variables.
 * @private
 */

var matchHtmlRegExp = /["'&<>]/;

/**
 * Module exports.
 * @public
 */

module.exports = escapeHtml;

/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */

function escapeHtml(string) {
  var str = '' + string;
  var match = matchHtmlRegExp.exec(str);

  if (!match) {
    return str;
  }

  var escape;
  var html = '';
  var index = 0;
  var lastIndex = 0;

  for (index = match.index; index < str.length; index++) {
    switch (str.charCodeAt(index)) {
      case 34: // "
        escape = '&quot;';
        break;
      case 38: // &
        escape = '&amp;';
        break;
      case 39: // '
        escape = '&#39;';
        break;
      case 60: // <
        escape = '&lt;';
        break;
      case 62: // >
        escape = '&gt;';
        break;
      default:
        continue;
    }

    if (lastIndex !== index) {
      html += str.substring(lastIndex, index);
    }

    lastIndex = index + 1;
    html += escape;
  }

  return lastIndex !== index
    ? html + str.substring(lastIndex, index)
    : html;
}


/***/ }),

/***/ 364:
/***/ ((__unused_webpack_module, exports) => {

function n(n){for(var r=arguments.length,t=Array(r>1?r-1:0),e=1;e<r;e++)t[e-1]=arguments[e];throw Error("[Immer] minified error nr: "+n+(t.length?" "+t.map((function(n){return"'"+n+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function r(n){return!!n&&!!n[H]}function t(n){var r;return!!n&&(function(n){if(!n||"object"!=typeof n)return!1;var r=Object.getPrototypeOf(n);if(null===r)return!0;var t=Object.hasOwnProperty.call(r,"constructor")&&r.constructor;return t===Object||"function"==typeof t&&Function.toString.call(t)===Q}(n)||Array.isArray(n)||!!n[G]||!!(null===(r=n.constructor)||void 0===r?void 0:r[G])||c(n)||v(n))}function e(n,r,t){void 0===t&&(t=!1),0===i(n)?(t?Object.keys:T)(n).forEach((function(e){t&&"symbol"==typeof e||r(e,n[e],n)})):n.forEach((function(t,e){return r(e,t,n)}))}function i(n){var r=n[H];return r?r.t>3?r.t-4:r.t:Array.isArray(n)?1:c(n)?2:v(n)?3:0}function u(n,r){return 2===i(n)?n.has(r):Object.prototype.hasOwnProperty.call(n,r)}function o(n,r){return 2===i(n)?n.get(r):n[r]}function f(n,r,t){var e=i(n);2===e?n.set(r,t):3===e?n.add(t):n[r]=t}function a(n,r){return n===r?0!==n||1/n==1/r:n!=n&&r!=r}function c(n){return W&&n instanceof Map}function v(n){return X&&n instanceof Set}function s(n){return n.i||n.u}function p(n){if(Array.isArray(n))return Array.prototype.slice.call(n);var r=U(n);delete r[H];for(var t=T(r),e=0;e<t.length;e++){var i=t[e],u=r[i];!1===u.writable&&(u.writable=!0,u.configurable=!0),(u.get||u.set)&&(r[i]={configurable:!0,writable:!0,enumerable:u.enumerable,value:n[i]})}return Object.create(Object.getPrototypeOf(n),r)}function l(n,u){return void 0===u&&(u=!1),h(n)||r(n)||!t(n)||(i(n)>1&&(n.set=n.add=n.clear=n.delete=d),Object.freeze(n),u&&e(n,(function(n,r){return l(r,!0)}),!0)),n}function d(){n(2)}function h(n){return null==n||"object"!=typeof n||Object.isFrozen(n)}function y(r){var t=V[r];return t||n(18,r),t}function _(n,r){V[n]||(V[n]=r)}function b(){return I}function m(n,r){r&&(y("Patches"),n.o=[],n.v=[],n.s=r)}function j(n){O(n),n.p.forEach(w),n.p=null}function O(n){n===I&&(I=n.l)}function x(n){return I={p:[],l:I,h:n,_:!0,m:0}}function w(n){var r=n[H];0===r.t||1===r.t?r.j():r.O=!0}function S(r,e){e.m=e.p.length;var i=e.p[0],u=void 0!==r&&r!==i;return e.h.S||y("ES5").P(e,r,u),u?(i[H].M&&(j(e),n(4)),t(r)&&(r=P(e,r),e.l||g(e,r)),e.o&&y("Patches").g(i[H].u,r,e.o,e.v)):r=P(e,i,[]),j(e),e.o&&e.s(e.o,e.v),r!==B?r:void 0}function P(n,r,t){if(h(r))return r;var i=r[H];if(!i)return e(r,(function(e,u){return M(n,i,r,e,u,t)}),!0),r;if(i.A!==n)return r;if(!i.M)return g(n,i.u,!0),i.u;if(!i.R){i.R=!0,i.A.m--;var u=4===i.t||5===i.t?i.i=p(i.k):i.i,o=u,f=!1;3===i.t&&(o=new Set(u),u.clear(),f=!0),e(o,(function(r,e){return M(n,i,u,r,e,t,f)})),g(n,u,!1),t&&n.o&&y("Patches").F(i,t,n.o,n.v)}return i.i}function M(n,e,i,o,a,c,v){if(r(a)){var s=P(n,a,c&&e&&3!==e.t&&!u(e.N,o)?c.concat(o):void 0);if(f(i,o,s),!r(s))return;n._=!1}else v&&i.add(a);if(t(a)&&!h(a)){if(!n.h.D&&n.m<1)return;P(n,a),e&&e.A.l||g(n,a)}}function g(n,r,t){void 0===t&&(t=!1),n.h.D&&n._&&l(r,t)}function A(n,r){var t=n[H];return(t?s(t):n)[r]}function z(n,r){if(r in n)for(var t=Object.getPrototypeOf(n);t;){var e=Object.getOwnPropertyDescriptor(t,r);if(e)return e;t=Object.getPrototypeOf(t)}}function E(n){n.M||(n.M=!0,n.l&&E(n.l))}function R(n){n.i||(n.i=p(n.u))}function k(n,r,t){var e=c(r)?y("MapSet").K(r,t):v(r)?y("MapSet").$(r,t):n.S?function(n,r){var t=Array.isArray(n),e={t:t?1:0,A:r?r.A:b(),M:!1,R:!1,N:{},l:r,u:n,k:null,i:null,j:null,C:!1},i=e,u=Y;t&&(i=[e],u=Z);var o=Proxy.revocable(i,u),f=o.revoke,a=o.proxy;return e.k=a,e.j=f,a}(r,t):y("ES5").I(r,t);return(t?t.A:b()).p.push(e),e}function F(u){return r(u)||n(22,u),function n(r){if(!t(r))return r;var u,a=r[H],c=i(r);if(a){if(!a.M&&(a.t<4||!y("ES5").J(a)))return a.u;a.R=!0,u=N(r,c),a.R=!1}else u=N(r,c);return e(u,(function(r,t){a&&o(a.u,r)===t||f(u,r,n(t))})),3===c?new Set(u):u}(u)}function N(n,r){switch(r){case 2:return new Map(n);case 3:return Array.from(n)}return p(n)}function D(){function n(n,r){var t=f[n];return t?t.enumerable=r:f[n]=t={configurable:!0,enumerable:r,get:function(){return Y.get(this[H],n)},set:function(r){Y.set(this[H],n,r)}},t}function t(n){for(var r=n.length-1;r>=0;r--){var t=n[r][H];if(!t.M)switch(t.t){case 5:o(t)&&E(t);break;case 4:i(t)&&E(t)}}}function i(n){for(var r=n.u,t=n.k,e=T(t),i=e.length-1;i>=0;i--){var o=e[i];if(o!==H){var f=r[o];if(void 0===f&&!u(r,o))return!0;var c=t[o],v=c&&c[H];if(v?v.u!==f:!a(c,f))return!0}}var s=!!r[H];return e.length!==T(r).length+(s?0:1)}function o(n){var r=n.k;if(r.length!==n.u.length)return!0;var t=Object.getOwnPropertyDescriptor(r,r.length-1);if(t&&!t.get)return!0;for(var e=0;e<r.length;e++)if(!r.hasOwnProperty(e))return!0;return!1}var f={};_("ES5",{I:function(r,t){var e=Array.isArray(r),i=function(r,t){if(r){for(var e=Array(t.length),i=0;i<t.length;i++)Object.defineProperty(e,""+i,n(i,!0));return e}var u=U(t);delete u[H];for(var o=T(u),f=0;f<o.length;f++){var a=o[f];u[a]=n(a,r||!!u[a].enumerable)}return Object.create(Object.getPrototypeOf(t),u)}(e,r),u={t:e?5:4,A:t?t.A:b(),M:!1,R:!1,N:{},l:t,u:r,k:i,i:null,O:!1,C:!1};return Object.defineProperty(i,H,{value:u,writable:!0}),i},P:function(n,i,f){f?r(i)&&i[H].A===n&&t(n.p):(n.o&&function n(r){if(r&&"object"==typeof r){var t=r[H];if(t){var i=t.u,f=t.k,a=t.N,c=t.t;if(4===c)e(f,(function(r){r!==H&&(void 0!==i[r]||u(i,r)?a[r]||n(f[r]):(a[r]=!0,E(t)))})),e(i,(function(n){void 0!==f[n]||u(f,n)||(a[n]=!1,E(t))}));else if(5===c){if(o(t)&&(E(t),a.length=!0),f.length<i.length)for(var v=f.length;v<i.length;v++)a[v]=!1;else for(var s=i.length;s<f.length;s++)a[s]=!0;for(var p=Math.min(f.length,i.length),l=0;l<p;l++)f.hasOwnProperty(l)||(a[l]=!0),void 0===a[l]&&n(f[l])}}}}(n.p[0]),t(n.p))},J:function(n){return 4===n.t?i(n):o(n)}})}function K(){function f(n){if(!t(n))return n;if(Array.isArray(n))return n.map(f);if(c(n))return new Map(Array.from(n.entries()).map((function(n){return[n[0],f(n[1])]})));if(v(n))return new Set(Array.from(n).map(f));var r=Object.create(Object.getPrototypeOf(n));for(var e in n)r[e]=f(n[e]);return u(n,G)&&(r[G]=n[G]),r}function a(n){return r(n)?f(n):n}var s="add";_("Patches",{W:function(r,t){return t.forEach((function(t){for(var e=t.path,u=t.op,a=r,c=0;c<e.length-1;c++){var v=i(a),p=""+e[c];0!==v&&1!==v||"__proto__"!==p&&"constructor"!==p||n(24),"function"==typeof a&&"prototype"===p&&n(24),"object"!=typeof(a=o(a,p))&&n(15,e.join("/"))}var l=i(a),d=f(t.value),h=e[e.length-1];switch(u){case"replace":switch(l){case 2:return a.set(h,d);case 3:n(16);default:return a[h]=d}case s:switch(l){case 1:return"-"===h?a.push(d):a.splice(h,0,d);case 2:return a.set(h,d);case 3:return a.add(d);default:return a[h]=d}case"remove":switch(l){case 1:return a.splice(h,1);case 2:return a.delete(h);case 3:return a.delete(t.value);default:return delete a[h]}default:n(17,u)}})),r},F:function(n,r,t,i){switch(n.t){case 0:case 4:case 2:return function(n,r,t,i){var f=n.u,c=n.i;e(n.N,(function(n,e){var v=o(f,n),p=o(c,n),l=e?u(f,n)?"replace":s:"remove";if(v!==p||"replace"!==l){var d=r.concat(n);t.push("remove"===l?{op:l,path:d}:{op:l,path:d,value:p}),i.push(l===s?{op:"remove",path:d}:"remove"===l?{op:s,path:d,value:a(v)}:{op:"replace",path:d,value:a(v)})}}))}(n,r,t,i);case 5:case 1:return function(n,r,t,e){var i=n.u,u=n.N,o=n.i;if(o.length<i.length){var f=[o,i];i=f[0],o=f[1];var c=[e,t];t=c[0],e=c[1]}for(var v=0;v<i.length;v++)if(u[v]&&o[v]!==i[v]){var p=r.concat([v]);t.push({op:"replace",path:p,value:a(o[v])}),e.push({op:"replace",path:p,value:a(i[v])})}for(var l=i.length;l<o.length;l++){var d=r.concat([l]);t.push({op:s,path:d,value:a(o[l])})}i.length<o.length&&e.push({op:"replace",path:r.concat(["length"]),value:i.length})}(n,r,t,i);case 3:return function(n,r,t,e){var i=n.u,u=n.i,o=0;i.forEach((function(n){if(!u.has(n)){var i=r.concat([o]);t.push({op:"remove",path:i,value:n}),e.unshift({op:s,path:i,value:n})}o++})),o=0,u.forEach((function(n){if(!i.has(n)){var u=r.concat([o]);t.push({op:s,path:u,value:n}),e.unshift({op:"remove",path:u,value:n})}o++}))}(n,r,t,i)}},g:function(n,r,t,e){t.push({op:"replace",path:[],value:r===B?void 0:r}),e.push({op:"replace",path:[],value:n})}})}function $(){function r(n,r){function t(){this.constructor=n}f(n,r),n.prototype=(t.prototype=r.prototype,new t)}function i(n){n.i||(n.N=new Map,n.i=new Map(n.u))}function u(n){n.i||(n.i=new Set,n.u.forEach((function(r){if(t(r)){var e=k(n.A.h,r,n);n.p.set(r,e),n.i.add(e)}else n.i.add(r)})))}function o(r){r.O&&n(3,JSON.stringify(s(r)))}var f=function(n,r){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var t in r)r.hasOwnProperty(t)&&(n[t]=r[t])})(n,r)},a=function(){function n(n,r){return this[H]={t:2,l:r,A:r?r.A:b(),M:!1,R:!1,i:void 0,N:void 0,u:n,k:this,C:!1,O:!1},this}r(n,Map);var u=n.prototype;return Object.defineProperty(u,"size",{get:function(){return s(this[H]).size}}),u.has=function(n){return s(this[H]).has(n)},u.set=function(n,r){var t=this[H];return o(t),s(t).has(n)&&s(t).get(n)===r||(i(t),E(t),t.N.set(n,!0),t.i.set(n,r),t.N.set(n,!0)),this},u.delete=function(n){if(!this.has(n))return!1;var r=this[H];return o(r),i(r),E(r),r.u.has(n)?r.N.set(n,!1):r.N.delete(n),r.i.delete(n),!0},u.clear=function(){var n=this[H];o(n),s(n).size&&(i(n),E(n),n.N=new Map,e(n.u,(function(r){n.N.set(r,!1)})),n.i.clear())},u.forEach=function(n,r){var t=this;s(this[H]).forEach((function(e,i){n.call(r,t.get(i),i,t)}))},u.get=function(n){var r=this[H];o(r);var e=s(r).get(n);if(r.R||!t(e))return e;if(e!==r.u.get(n))return e;var u=k(r.A.h,e,r);return i(r),r.i.set(n,u),u},u.keys=function(){return s(this[H]).keys()},u.values=function(){var n,r=this,t=this.keys();return(n={})[L]=function(){return r.values()},n.next=function(){var n=t.next();return n.done?n:{done:!1,value:r.get(n.value)}},n},u.entries=function(){var n,r=this,t=this.keys();return(n={})[L]=function(){return r.entries()},n.next=function(){var n=t.next();if(n.done)return n;var e=r.get(n.value);return{done:!1,value:[n.value,e]}},n},u[L]=function(){return this.entries()},n}(),c=function(){function n(n,r){return this[H]={t:3,l:r,A:r?r.A:b(),M:!1,R:!1,i:void 0,u:n,k:this,p:new Map,O:!1,C:!1},this}r(n,Set);var t=n.prototype;return Object.defineProperty(t,"size",{get:function(){return s(this[H]).size}}),t.has=function(n){var r=this[H];return o(r),r.i?!!r.i.has(n)||!(!r.p.has(n)||!r.i.has(r.p.get(n))):r.u.has(n)},t.add=function(n){var r=this[H];return o(r),this.has(n)||(u(r),E(r),r.i.add(n)),this},t.delete=function(n){if(!this.has(n))return!1;var r=this[H];return o(r),u(r),E(r),r.i.delete(n)||!!r.p.has(n)&&r.i.delete(r.p.get(n))},t.clear=function(){var n=this[H];o(n),s(n).size&&(u(n),E(n),n.i.clear())},t.values=function(){var n=this[H];return o(n),u(n),n.i.values()},t.entries=function(){var n=this[H];return o(n),u(n),n.i.entries()},t.keys=function(){return this.values()},t[L]=function(){return this.values()},t.forEach=function(n,r){for(var t=this.values(),e=t.next();!e.done;)n.call(r,e.value,e.value,this),e=t.next()},n}();_("MapSet",{K:function(n,r){return new a(n,r)},$:function(n,r){return new c(n,r)}})}var C;Object.defineProperty(exports, "__esModule", ({value:!0}));var I,J="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),W="undefined"!=typeof Map,X="undefined"!=typeof Set,q="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,B=J?Symbol.for("immer-nothing"):((C={})["immer-nothing"]=!0,C),G=J?Symbol.for("immer-draftable"):"__$immer_draftable",H=J?Symbol.for("immer-state"):"__$immer_state",L="undefined"!=typeof Symbol&&Symbol.iterator||"@@iterator",Q=""+Object.prototype.constructor,T="undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(n){return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n))}:Object.getOwnPropertyNames,U=Object.getOwnPropertyDescriptors||function(n){var r={};return T(n).forEach((function(t){r[t]=Object.getOwnPropertyDescriptor(n,t)})),r},V={},Y={get:function(n,r){if(r===H)return n;var e=s(n);if(!u(e,r))return function(n,r,t){var e,i=z(r,t);return i?"value"in i?i.value:null===(e=i.get)||void 0===e?void 0:e.call(n.k):void 0}(n,e,r);var i=e[r];return n.R||!t(i)?i:i===A(n.u,r)?(R(n),n.i[r]=k(n.A.h,i,n)):i},has:function(n,r){return r in s(n)},ownKeys:function(n){return Reflect.ownKeys(s(n))},set:function(n,r,t){var e=z(s(n),r);if(null==e?void 0:e.set)return e.set.call(n.k,t),!0;if(!n.M){var i=A(s(n),r),o=null==i?void 0:i[H];if(o&&o.u===t)return n.i[r]=t,n.N[r]=!1,!0;if(a(t,i)&&(void 0!==t||u(n.u,r)))return!0;R(n),E(n)}return n.i[r]===t&&(void 0!==t||r in n.i)||Number.isNaN(t)&&Number.isNaN(n.i[r])||(n.i[r]=t,n.N[r]=!0),!0},deleteProperty:function(n,r){return void 0!==A(n.u,r)||r in n.u?(n.N[r]=!1,R(n),E(n)):delete n.N[r],n.i&&delete n.i[r],!0},getOwnPropertyDescriptor:function(n,r){var t=s(n),e=Reflect.getOwnPropertyDescriptor(t,r);return e?{writable:!0,configurable:1!==n.t||"length"!==r,enumerable:e.enumerable,value:t[r]}:e},defineProperty:function(){n(11)},getPrototypeOf:function(n){return Object.getPrototypeOf(n.u)},setPrototypeOf:function(){n(12)}},Z={};e(Y,(function(n,r){Z[n]=function(){return arguments[0]=arguments[0][0],r.apply(this,arguments)}})),Z.deleteProperty=function(n,r){return Z.set.call(this,n,r,void 0)},Z.set=function(n,r,t){return Y.set.call(this,n[0],r,t,n[0])};var nn=function(){function e(r){var e=this;this.S=q,this.D=!0,this.produce=function(r,i,u){if("function"==typeof r&&"function"!=typeof i){var o=i;i=r;var f=e;return function(n){var r=this;void 0===n&&(n=o);for(var t=arguments.length,e=Array(t>1?t-1:0),u=1;u<t;u++)e[u-1]=arguments[u];return f.produce(n,(function(n){var t;return(t=i).call.apply(t,[r,n].concat(e))}))}}var a;if("function"!=typeof i&&n(6),void 0!==u&&"function"!=typeof u&&n(7),t(r)){var c=x(e),v=k(e,r,void 0),s=!0;try{a=i(v),s=!1}finally{s?j(c):O(c)}return"undefined"!=typeof Promise&&a instanceof Promise?a.then((function(n){return m(c,u),S(n,c)}),(function(n){throw j(c),n})):(m(c,u),S(a,c))}if(!r||"object"!=typeof r){if(void 0===(a=i(r))&&(a=r),a===B&&(a=void 0),e.D&&l(a,!0),u){var p=[],d=[];y("Patches").g(r,a,p,d),u(p,d)}return a}n(21,r)},this.produceWithPatches=function(n,r){if("function"==typeof n)return function(r){for(var t=arguments.length,i=Array(t>1?t-1:0),u=1;u<t;u++)i[u-1]=arguments[u];return e.produceWithPatches(r,(function(r){return n.apply(void 0,[r].concat(i))}))};var t,i,u=e.produce(n,r,(function(n,r){t=n,i=r}));return"undefined"!=typeof Promise&&u instanceof Promise?u.then((function(n){return[n,t,i]})):[u,t,i]},"boolean"==typeof(null==r?void 0:r.useProxies)&&this.setUseProxies(r.useProxies),"boolean"==typeof(null==r?void 0:r.autoFreeze)&&this.setAutoFreeze(r.autoFreeze)}var i=e.prototype;return i.createDraft=function(e){t(e)||n(8),r(e)&&(e=F(e));var i=x(this),u=k(this,e,void 0);return u[H].C=!0,O(i),u},i.finishDraft=function(n,r){var t=(n&&n[H]).A;return m(t,r),S(void 0,t)},i.setAutoFreeze=function(n){this.D=n},i.setUseProxies=function(r){r&&!q&&n(20),this.S=r},i.applyPatches=function(n,t){var e;for(e=t.length-1;e>=0;e--){var i=t[e];if(0===i.path.length&&"replace"===i.op){n=i.value;break}}e>-1&&(t=t.slice(e+1));var u=y("Patches").W;return r(n)?u(n,t):this.produce(n,(function(n){return u(n,t)}))},e}(),rn=new nn,tn=rn.produce,en=rn.produceWithPatches.bind(rn),un=rn.setAutoFreeze.bind(rn),on=rn.setUseProxies.bind(rn),fn=rn.applyPatches.bind(rn),an=rn.createDraft.bind(rn),cn=rn.finishDraft.bind(rn);exports.Immer=nn,exports.applyPatches=fn,exports.castDraft=function(n){return n},exports.castImmutable=function(n){return n},exports.createDraft=an,exports.current=F,exports["default"]=tn,exports.enableAllPlugins=function(){D(),$(),K()},exports.enableES5=D,exports.enableMapSet=$,exports.enablePatches=K,exports.finishDraft=cn,exports.freeze=l,exports.immerable=G,exports.isDraft=r,exports.isDraftable=t,exports.nothing=B,exports.original=function(t){return r(t)||n(23,t),t[H].u},exports.produce=tn,exports.produceWithPatches=en,exports.setAutoFreeze=un,exports.setUseProxies=on;
//# sourceMappingURL=immer.cjs.production.min.js.map


/***/ }),

/***/ 2570:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";



if (true) {
  module.exports = __webpack_require__(364)
} else {}


/***/ }),

/***/ 3444:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */

function isObject(o) {
  return Object.prototype.toString.call(o) === '[object Object]';
}

function isPlainObject(o) {
  var ctor,prot;

  if (isObject(o) === false) return false;

  // If has modified constructor
  ctor = o.constructor;
  if (ctor === undefined) return true;

  // If has modified prototype
  prot = ctor.prototype;
  if (isObject(prot) === false) return false;

  // If constructor does not have an Object-specific method
  if (prot.hasOwnProperty('isPrototypeOf') === false) {
    return false;
  }

  // Most likely a plain Object
  return true;
}

exports.isPlainObject = isPlainObject;


/***/ }),

/***/ 6521:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({ value: true });

var isPlainObject = __webpack_require__(3444);
var immer = __webpack_require__(2570);

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var arrayLikeToArray = createCommonjsModule(function (module) {
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(arrayLikeToArray);

var arrayWithoutHoles = createCommonjsModule(function (module) {
function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(arrayWithoutHoles);

var iterableToArray = createCommonjsModule(function (module) {
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

module.exports = _iterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(iterableToArray);

var unsupportedIterableToArray = createCommonjsModule(function (module) {
function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(unsupportedIterableToArray);

var nonIterableSpread = createCommonjsModule(function (module) {
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(nonIterableSpread);

var toConsumableArray = createCommonjsModule(function (module) {
function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _toConsumableArray = unwrapExports(toConsumableArray);

var defineProperty = createCommonjsModule(function (module) {
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _defineProperty = unwrapExports(defineProperty);

var arrayWithHoles = createCommonjsModule(function (module) {
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(arrayWithHoles);

var iterableToArrayLimit = createCommonjsModule(function (module) {
function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(iterableToArrayLimit);

var nonIterableRest = createCommonjsModule(function (module) {
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(nonIterableRest);

var slicedToArray = createCommonjsModule(function (module) {
function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _slicedToArray = unwrapExports(slicedToArray);

var DIRTY_PATHS = new WeakMap();
var DIRTY_PATH_KEYS = new WeakMap();
var FLUSHING = new WeakMap();
var NORMALIZING = new WeakMap();
var PATH_REFS = new WeakMap();
var POINT_REFS = new WeakMap();
var RANGE_REFS = new WeakMap();

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$9(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper$7(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$7(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$7(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$7(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$7(o, minLen); }

function _arrayLikeToArray$7(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var nextEditorId = 0;
/**
 * Create a new Slate `Editor` object.
 */

var createEditor = function createEditor() {
  var editor = {
    children: [],
    operations: [],
    selection: null,
    marks: null,
    id: nextEditorId++,
    isInline: function isInline() {
      return false;
    },
    isVoid: function isVoid() {
      return false;
    },
    markableVoid: function markableVoid() {
      return false;
    },
    onChange: function onChange() {},
    apply: function apply(op) {
      var _iterator = _createForOfIteratorHelper$7(Editor.pathRefs(editor)),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var ref = _step.value;
          PathRef.transform(ref, op);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _iterator2 = _createForOfIteratorHelper$7(Editor.pointRefs(editor)),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _ref = _step2.value;
          PointRef.transform(_ref, op);
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var _iterator3 = _createForOfIteratorHelper$7(Editor.rangeRefs(editor)),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var _ref2 = _step3.value;
          RangeRef.transform(_ref2, op);
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

      var oldDirtyPaths = DIRTY_PATHS.get(editor) || [];
      var oldDirtyPathKeys = DIRTY_PATH_KEYS.get(editor) || new Set();
      var dirtyPaths;
      var dirtyPathKeys;

      var add = function add(path) {
        if (path) {
          var key = path.join(',');

          if (!dirtyPathKeys.has(key)) {
            dirtyPathKeys.add(key);
            dirtyPaths.push(path);
          }
        }
      };

      if (Path.operationCanTransformPath(op)) {
        dirtyPaths = [];
        dirtyPathKeys = new Set();

        var _iterator4 = _createForOfIteratorHelper$7(oldDirtyPaths),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var path = _step4.value;
            var newPath = Path.transform(path, op);
            add(newPath);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      } else {
        dirtyPaths = oldDirtyPaths;
        dirtyPathKeys = oldDirtyPathKeys;
      }

      var newDirtyPaths = editor.getDirtyPaths(op);

      var _iterator5 = _createForOfIteratorHelper$7(newDirtyPaths),
          _step5;

      try {
        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          var _path = _step5.value;
          add(_path);
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      DIRTY_PATHS.set(editor, dirtyPaths);
      DIRTY_PATH_KEYS.set(editor, dirtyPathKeys);
      Transforms.transform(editor, op);
      editor.operations.push(op);
      Editor.normalize(editor); // Clear any formats applied to the cursor if the selection changes.

      if (op.type === 'set_selection') {
        editor.marks = null;
      }

      if (!FLUSHING.get(editor)) {
        FLUSHING.set(editor, true);
        Promise.resolve().then(function () {
          FLUSHING.set(editor, false);
          editor.onChange();
          editor.operations = [];
        });
      }
    },
    addMark: function addMark(key, value) {
      var selection = editor.selection;
          editor.markableVoid;

      if (selection) {
        var match = function match(node, path) {
          if (!Text.isText(node)) {
            return false; // marks can only be applied to text
          }

          var _Editor$parent = Editor.parent(editor, path),
              _Editor$parent2 = _slicedToArray(_Editor$parent, 2),
              parentNode = _Editor$parent2[0];
              _Editor$parent2[1];

          return !editor.isVoid(parentNode) || editor.markableVoid(parentNode);
        };

        var expandedSelection = Range.isExpanded(selection);
        var markAcceptingVoidSelected = false;

        if (!expandedSelection) {
          var _Editor$node = Editor.node(editor, selection),
              _Editor$node2 = _slicedToArray(_Editor$node, 2),
              selectedNode = _Editor$node2[0],
              selectedPath = _Editor$node2[1];

          if (selectedNode && match(selectedNode, selectedPath)) {
            var _Editor$parent3 = Editor.parent(editor, selectedPath),
                _Editor$parent4 = _slicedToArray(_Editor$parent3, 1),
                parentNode = _Editor$parent4[0];

            markAcceptingVoidSelected = parentNode && editor.markableVoid(parentNode);
          }
        }

        if (expandedSelection || markAcceptingVoidSelected) {
          Transforms.setNodes(editor, _defineProperty({}, key, value), {
            match: match,
            split: true,
            voids: true
          });
        } else {
          var marks = _objectSpread$9(_objectSpread$9({}, Editor.marks(editor) || {}), {}, _defineProperty({}, key, value));

          editor.marks = marks;

          if (!FLUSHING.get(editor)) {
            editor.onChange();
          }
        }
      }
    },
    deleteBackward: function deleteBackward(unit) {
      var selection = editor.selection;

      if (selection && Range.isCollapsed(selection)) {
        Transforms["delete"](editor, {
          unit: unit,
          reverse: true
        });
      }
    },
    deleteForward: function deleteForward(unit) {
      var selection = editor.selection;

      if (selection && Range.isCollapsed(selection)) {
        Transforms["delete"](editor, {
          unit: unit
        });
      }
    },
    deleteFragment: function deleteFragment(direction) {
      var selection = editor.selection;

      if (selection && Range.isExpanded(selection)) {
        Transforms["delete"](editor, {
          reverse: direction === 'backward'
        });
      }
    },
    getFragment: function getFragment() {
      var selection = editor.selection;

      if (selection) {
        return Node.fragment(editor, selection);
      }

      return [];
    },
    insertBreak: function insertBreak() {
      Transforms.splitNodes(editor, {
        always: true
      });
    },
    insertSoftBreak: function insertSoftBreak() {
      Transforms.splitNodes(editor, {
        always: true
      });
    },
    insertFragment: function insertFragment(fragment) {
      Transforms.insertFragment(editor, fragment);
    },
    insertNode: function insertNode(node) {
      Transforms.insertNodes(editor, node);
    },
    insertText: function insertText(text) {
      var selection = editor.selection,
          marks = editor.marks;

      if (selection) {
        if (marks) {
          var node = _objectSpread$9({
            text: text
          }, marks);

          Transforms.insertNodes(editor, node);
        } else {
          Transforms.insertText(editor, text);
        }

        editor.marks = null;
      }
    },
    normalizeNode: function normalizeNode(entry) {
      var _entry = _slicedToArray(entry, 2),
          node = _entry[0],
          path = _entry[1]; // There are no core normalizations for text nodes.


      if (Text.isText(node)) {
        return;
      } // Ensure that block and inline nodes have at least one text child.


      if (Element.isElement(node) && node.children.length === 0) {
        var child = {
          text: ''
        };
        Transforms.insertNodes(editor, child, {
          at: path.concat(0),
          voids: true
        });
        return;
      } // Determine whether the node should have block or inline children.


      var shouldHaveInlines = Editor.isEditor(node) ? false : Element.isElement(node) && (editor.isInline(node) || node.children.length === 0 || Text.isText(node.children[0]) || editor.isInline(node.children[0])); // Since we'll be applying operations while iterating, keep track of an
      // index that accounts for any added/removed nodes.

      var n = 0;

      for (var i = 0; i < node.children.length; i++, n++) {
        var currentNode = Node.get(editor, path);
        if (Text.isText(currentNode)) continue;
        var _child = node.children[i];
        var prev = currentNode.children[n - 1];
        var isLast = i === node.children.length - 1;
        var isInlineOrText = Text.isText(_child) || Element.isElement(_child) && editor.isInline(_child); // Only allow block nodes in the top-level children and parent blocks
        // that only contain block nodes. Similarly, only allow inline nodes in
        // other inline nodes, or parent blocks that only contain inlines and
        // text.

        if (isInlineOrText !== shouldHaveInlines) {
          Transforms.removeNodes(editor, {
            at: path.concat(n),
            voids: true
          });
          n--;
        } else if (Element.isElement(_child)) {
          // Ensure that inline nodes are surrounded by text nodes.
          if (editor.isInline(_child)) {
            if (prev == null || !Text.isText(prev)) {
              var newChild = {
                text: ''
              };
              Transforms.insertNodes(editor, newChild, {
                at: path.concat(n),
                voids: true
              });
              n++;
            } else if (isLast) {
              var _newChild = {
                text: ''
              };
              Transforms.insertNodes(editor, _newChild, {
                at: path.concat(n + 1),
                voids: true
              });
              n++;
            }
          }
        } else {
          // Merge adjacent text nodes that are empty or match.
          if (prev != null && Text.isText(prev)) {
            if (Text.equals(_child, prev, {
              loose: true
            })) {
              Transforms.mergeNodes(editor, {
                at: path.concat(n),
                voids: true
              });
              n--;
            } else if (prev.text === '') {
              Transforms.removeNodes(editor, {
                at: path.concat(n - 1),
                voids: true
              });
              n--;
            } else if (_child.text === '') {
              Transforms.removeNodes(editor, {
                at: path.concat(n),
                voids: true
              });
              n--;
            }
          }
        }
      }
    },
    removeMark: function removeMark(key) {
      var selection = editor.selection;

      if (selection) {
        var match = function match(node, path) {
          if (!Text.isText(node)) {
            return false; // marks can only be applied to text
          }

          var _Editor$parent5 = Editor.parent(editor, path),
              _Editor$parent6 = _slicedToArray(_Editor$parent5, 2),
              parentNode = _Editor$parent6[0];
              _Editor$parent6[1];

          return !editor.isVoid(parentNode) || editor.markableVoid(parentNode);
        };

        var expandedSelection = Range.isExpanded(selection);
        var markAcceptingVoidSelected = false;

        if (!expandedSelection) {
          var _Editor$node3 = Editor.node(editor, selection),
              _Editor$node4 = _slicedToArray(_Editor$node3, 2),
              selectedNode = _Editor$node4[0],
              selectedPath = _Editor$node4[1];

          if (selectedNode && match(selectedNode, selectedPath)) {
            var _Editor$parent7 = Editor.parent(editor, selectedPath),
                _Editor$parent8 = _slicedToArray(_Editor$parent7, 1),
                parentNode = _Editor$parent8[0];

            markAcceptingVoidSelected = parentNode && editor.markableVoid(parentNode);
          }
        }

        if (expandedSelection || markAcceptingVoidSelected) {
          Transforms.unsetNodes(editor, key, {
            match: match,
            split: true,
            voids: true
          });
        } else {
          var marks = _objectSpread$9({}, Editor.marks(editor) || {});

          delete marks[key];
          editor.marks = marks;

          if (!FLUSHING.get(editor)) {
            editor.onChange();
          }
        }
      }
    },

    /**
     * Get the "dirty" paths generated from an operation.
     */
    getDirtyPaths: function getDirtyPaths(op) {
      switch (op.type) {
        case 'insert_text':
        case 'remove_text':
        case 'set_node':
          {
            var path = op.path;
            return Path.levels(path);
          }

        case 'insert_node':
          {
            var node = op.node,
                _path2 = op.path;
            var levels = Path.levels(_path2);
            var descendants = Text.isText(node) ? [] : Array.from(Node.nodes(node), function (_ref3) {
              var _ref4 = _slicedToArray(_ref3, 2),
                  p = _ref4[1];

              return _path2.concat(p);
            });
            return [].concat(_toConsumableArray(levels), _toConsumableArray(descendants));
          }

        case 'merge_node':
          {
            var _path3 = op.path;
            var ancestors = Path.ancestors(_path3);
            var previousPath = Path.previous(_path3);
            return [].concat(_toConsumableArray(ancestors), [previousPath]);
          }

        case 'move_node':
          {
            var _path4 = op.path,
                newPath = op.newPath;

            if (Path.equals(_path4, newPath)) {
              return [];
            }

            var oldAncestors = [];
            var newAncestors = [];

            var _iterator6 = _createForOfIteratorHelper$7(Path.ancestors(_path4)),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var ancestor = _step6.value;
                var p = Path.transform(ancestor, op);
                oldAncestors.push(p);
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            var _iterator7 = _createForOfIteratorHelper$7(Path.ancestors(newPath)),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _ancestor = _step7.value;

                var _p = Path.transform(_ancestor, op);

                newAncestors.push(_p);
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
            }

            var newParent = newAncestors[newAncestors.length - 1];
            var newIndex = newPath[newPath.length - 1];
            var resultPath = newParent.concat(newIndex);
            return [].concat(oldAncestors, newAncestors, [resultPath]);
          }

        case 'remove_node':
          {
            var _path5 = op.path;

            var _ancestors = Path.ancestors(_path5);

            return _toConsumableArray(_ancestors);
          }

        case 'split_node':
          {
            var _path6 = op.path;

            var _levels = Path.levels(_path6);

            var nextPath = Path.next(_path6);
            return [].concat(_toConsumableArray(_levels), [nextPath]);
          }

        default:
          {
            return [];
          }
      }
    }
  };
  return editor;
};

var objectWithoutPropertiesLoose = createCommonjsModule(function (module) {
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

unwrapExports(objectWithoutPropertiesLoose);

var objectWithoutProperties = createCommonjsModule(function (module) {
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports["default"] = module.exports, module.exports.__esModule = true;
});

var _objectWithoutProperties = unwrapExports(objectWithoutProperties);

function _createForOfIteratorHelper$6(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$6(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$6(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$6(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$6(o, minLen); }

function _arrayLikeToArray$6(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// Character (grapheme cluster) boundaries are determined according to
// the default grapheme cluster boundary specification, extended grapheme clusters variant[1].
//
// References:
//
// [1] https://www.unicode.org/reports/tr29/#Default_Grapheme_Cluster_Table
// [2] https://www.unicode.org/Public/UCD/latest/ucd/auxiliary/GraphemeBreakProperty.txt
// [3] https://www.unicode.org/Public/UCD/latest/ucd/auxiliary/GraphemeBreakTest.html
// [4] https://www.unicode.org/Public/UCD/latest/ucd/auxiliary/GraphemeBreakTest.txt

/**
 * Get the distance to the end of the first character in a string of text.
 */
var getCharacterDistance = function getCharacterDistance(str) {
  var isRTL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var isLTR = !isRTL;
  var codepoints = isRTL ? codepointsIteratorRTL(str) : str;
  var left = CodepointType.None;
  var right = CodepointType.None;
  var distance = 0; // Evaluation of these conditions are deferred.

  var gb11 = null; // Is GB11 applicable?

  var gb12Or13 = null; // Is GB12 or GB13 applicable?

  var _iterator = _createForOfIteratorHelper$6(codepoints),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _char = _step.value;

      var code = _char.codePointAt(0);

      if (!code) break;
      var type = getCodepointType(_char, code);

      var _ref = isLTR ? [right, type] : [type, left];

      var _ref2 = _slicedToArray(_ref, 2);

      left = _ref2[0];
      right = _ref2[1];

      if (intersects(left, CodepointType.ZWJ) && intersects(right, CodepointType.ExtPict)) {
        if (isLTR) {
          gb11 = endsWithEmojiZWJ(str.substring(0, distance));
        } else {
          gb11 = endsWithEmojiZWJ(str.substring(0, str.length - distance));
        }

        if (!gb11) break;
      }

      if (intersects(left, CodepointType.RI) && intersects(right, CodepointType.RI)) {
        if (gb12Or13 !== null) {
          gb12Or13 = !gb12Or13;
        } else {
          if (isLTR) {
            gb12Or13 = true;
          } else {
            gb12Or13 = endsWithOddNumberOfRIs(str.substring(0, str.length - distance));
          }
        }

        if (!gb12Or13) break;
      }

      if (left !== CodepointType.None && right !== CodepointType.None && isBoundaryPair(left, right)) {
        break;
      }

      distance += _char.length;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return distance || 1;
};
var SPACE = /\s/;
var PUNCTUATION = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
var CHAMELEON = /['\u2018\u2019]/;
/**
 * Get the distance to the end of the first word in a string of text.
 */

var getWordDistance = function getWordDistance(text) {
  var isRTL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var dist = 0;
  var started = false;

  while (text.length > 0) {
    var charDist = getCharacterDistance(text, isRTL);

    var _splitByCharacterDist = splitByCharacterDistance(text, charDist, isRTL),
        _splitByCharacterDist2 = _slicedToArray(_splitByCharacterDist, 2),
        _char2 = _splitByCharacterDist2[0],
        remaining = _splitByCharacterDist2[1];

    if (isWordCharacter(_char2, remaining, isRTL)) {
      started = true;
      dist += charDist;
    } else if (!started) {
      dist += charDist;
    } else {
      break;
    }

    text = remaining;
  }

  return dist;
};
/**
 * Split a string in two parts at a given distance starting from the end when
 * `isRTL` is set to `true`.
 */

var splitByCharacterDistance = function splitByCharacterDistance(str, dist, isRTL) {
  if (isRTL) {
    var at = str.length - dist;
    return [str.slice(at, str.length), str.slice(0, at)];
  }

  return [str.slice(0, dist), str.slice(dist)];
};
/**
 * Check if a character is a word character. The `remaining` argument is used
 * because sometimes you must read subsequent characters to truly determine it.
 */

var isWordCharacter = function isWordCharacter(_char3, remaining) {
  var isRTL = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (SPACE.test(_char3)) {
    return false;
  } // Chameleons count as word characters as long as they're in a word, so
  // recurse to see if the next one is a word character or not.


  if (CHAMELEON.test(_char3)) {
    var charDist = getCharacterDistance(remaining, isRTL);

    var _splitByCharacterDist3 = splitByCharacterDistance(remaining, charDist, isRTL),
        _splitByCharacterDist4 = _slicedToArray(_splitByCharacterDist3, 2),
        nextChar = _splitByCharacterDist4[0],
        nextRemaining = _splitByCharacterDist4[1];

    if (isWordCharacter(nextChar, nextRemaining, isRTL)) {
      return true;
    }
  }

  if (PUNCTUATION.test(_char3)) {
    return false;
  }

  return true;
};
/**
 * Iterate on codepoints from right to left.
 */


var codepointsIteratorRTL = function* codepointsIteratorRTL(str) {
  var end = str.length - 1;

  for (var i = 0; i < str.length; i++) {
    var char1 = str.charAt(end - i);

    if (isLowSurrogate(char1.charCodeAt(0))) {
      var char2 = str.charAt(end - i - 1);

      if (isHighSurrogate(char2.charCodeAt(0))) {
        yield char2 + char1;
        i++;
        continue;
      }
    }

    yield char1;
  }
};
/**
 * Is `charCode` a high surrogate.
 *
 * https://en.wikipedia.org/wiki/Universal_Character_Set_characters#Surrogates
 */

var isHighSurrogate = function isHighSurrogate(charCode) {
  return charCode >= 0xd800 && charCode <= 0xdbff;
};
/**
 * Is `charCode` a low surrogate.
 *
 * https://en.wikipedia.org/wiki/Universal_Character_Set_characters#Surrogates
 */


var isLowSurrogate = function isLowSurrogate(charCode) {
  return charCode >= 0xdc00 && charCode <= 0xdfff;
};

var CodepointType;

(function (CodepointType) {
  CodepointType[CodepointType["None"] = 0] = "None";
  CodepointType[CodepointType["Extend"] = 1] = "Extend";
  CodepointType[CodepointType["ZWJ"] = 2] = "ZWJ";
  CodepointType[CodepointType["RI"] = 4] = "RI";
  CodepointType[CodepointType["Prepend"] = 8] = "Prepend";
  CodepointType[CodepointType["SpacingMark"] = 16] = "SpacingMark";
  CodepointType[CodepointType["L"] = 32] = "L";
  CodepointType[CodepointType["V"] = 64] = "V";
  CodepointType[CodepointType["T"] = 128] = "T";
  CodepointType[CodepointType["LV"] = 256] = "LV";
  CodepointType[CodepointType["LVT"] = 512] = "LVT";
  CodepointType[CodepointType["ExtPict"] = 1024] = "ExtPict";
  CodepointType[CodepointType["Any"] = 2048] = "Any";
})(CodepointType || (CodepointType = {}));

var reExtend = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/;
var rePrepend = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/;
var reSpacingMark = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/;
var reL = /^[\u1100-\u115F\uA960-\uA97C]$/;
var reV = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/;
var reT = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/;
var reLV = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/;
var reLVT = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/;
var reExtPict = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/;

var getCodepointType = function getCodepointType(_char4, code) {
  var type = CodepointType.Any;

  if (_char4.search(reExtend) !== -1) {
    type |= CodepointType.Extend;
  }

  if (code === 0x200d) {
    type |= CodepointType.ZWJ;
  }

  if (code >= 0x1f1e6 && code <= 0x1f1ff) {
    type |= CodepointType.RI;
  }

  if (_char4.search(rePrepend) !== -1) {
    type |= CodepointType.Prepend;
  }

  if (_char4.search(reSpacingMark) !== -1) {
    type |= CodepointType.SpacingMark;
  }

  if (_char4.search(reL) !== -1) {
    type |= CodepointType.L;
  }

  if (_char4.search(reV) !== -1) {
    type |= CodepointType.V;
  }

  if (_char4.search(reT) !== -1) {
    type |= CodepointType.T;
  }

  if (_char4.search(reLV) !== -1) {
    type |= CodepointType.LV;
  }

  if (_char4.search(reLVT) !== -1) {
    type |= CodepointType.LVT;
  }

  if (_char4.search(reExtPict) !== -1) {
    type |= CodepointType.ExtPict;
  }

  return type;
};

function intersects(x, y) {
  return (x & y) !== 0;
}

var NonBoundaryPairs = [// GB6
[CodepointType.L, CodepointType.L | CodepointType.V | CodepointType.LV | CodepointType.LVT], // GB7
[CodepointType.LV | CodepointType.V, CodepointType.V | CodepointType.T], // GB8
[CodepointType.LVT | CodepointType.T, CodepointType.T], // GB9
[CodepointType.Any, CodepointType.Extend | CodepointType.ZWJ], // GB9a
[CodepointType.Any, CodepointType.SpacingMark], // GB9b
[CodepointType.Prepend, CodepointType.Any], // GB11
[CodepointType.ZWJ, CodepointType.ExtPict], // GB12 and GB13
[CodepointType.RI, CodepointType.RI]];

function isBoundaryPair(left, right) {
  return NonBoundaryPairs.findIndex(function (r) {
    return intersects(left, r[0]) && intersects(right, r[1]);
  }) === -1;
}

var endingEmojiZWJ = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1AC0\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDF46-\uDF50]|\uD804[\uDC01\uDC38-\uDC46\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/;

var endsWithEmojiZWJ = function endsWithEmojiZWJ(str) {
  return str.search(endingEmojiZWJ) !== -1;
};

var endingRIs = /(?:\uD83C[\uDDE6-\uDDFF])+$/g;

var endsWithOddNumberOfRIs = function endsWithOddNumberOfRIs(str) {
  var match = str.match(endingRIs);

  if (match === null) {
    return false;
  } else {
    // A RI is represented by a surrogate pair.
    var numRIs = match[0].length / 2;
    return numRIs % 2 === 1;
  }
};

/**
 * Shared the function with isElementType utility
 */

var isElement = function isElement(value) {
  return isPlainObject.isPlainObject(value) && Node.isNodeList(value.children) && !Editor.isEditor(value);
}; // eslint-disable-next-line no-redeclare


var Element = {
  /**
   * Check if a value implements the 'Ancestor' interface.
   */
  isAncestor: function isAncestor(value) {
    return isPlainObject.isPlainObject(value) && Node.isNodeList(value.children);
  },

  /**
   * Check if a value implements the `Element` interface.
   */
  isElement: isElement,

  /**
   * Check if a value is an array of `Element` objects.
   */
  isElementList: function isElementList(value) {
    return Array.isArray(value) && value.every(function (val) {
      return Element.isElement(val);
    });
  },

  /**
   * Check if a set of props is a partial of Element.
   */
  isElementProps: function isElementProps(props) {
    return props.children !== undefined;
  },

  /**
   * Check if a value implements the `Element` interface and has elementKey with selected value.
   * Default it check to `type` key value
   */
  isElementType: function isElementType(value, elementVal) {
    var elementKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'type';
    return isElement(value) && value[elementKey] === elementVal;
  },

  /**
   * Check if an element matches set of properties.
   *
   * Note: this checks custom properties, and it does not ensure that any
   * children are equivalent.
   */
  matches: function matches(element, props) {
    for (var key in props) {
      if (key === 'children') {
        continue;
      }

      if (element[key] !== props[key]) {
        return false;
      }
    }

    return true;
  }
};

var _excluded$4 = ["text"],
    _excluded2$3 = ["text"];

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$8(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper$5(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$5(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$5(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$5(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$5(o, minLen); }

function _arrayLikeToArray$5(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var IS_EDITOR_CACHE = new WeakMap(); // eslint-disable-next-line no-redeclare

var Editor = {
  /**
   * Get the ancestor above a location in the document.
   */
  above: function above(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$voids = options.voids,
        voids = _options$voids === void 0 ? false : _options$voids,
        _options$mode = options.mode,
        mode = _options$mode === void 0 ? 'lowest' : _options$mode,
        _options$at = options.at,
        at = _options$at === void 0 ? editor.selection : _options$at,
        match = options.match;

    if (!at) {
      return;
    }

    var path = Editor.path(editor, at);
    var reverse = mode === 'lowest';

    var _iterator = _createForOfIteratorHelper$5(Editor.levels(editor, {
      at: path,
      voids: voids,
      match: match,
      reverse: reverse
    })),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var _step$value = _slicedToArray(_step.value, 2),
            n = _step$value[0],
            p = _step$value[1];

        if (Text.isText(n)) return;

        if (Range.isRange(at)) {
          if (Path.isAncestor(p, at.anchor.path) && Path.isAncestor(p, at.focus.path)) {
            return [n, p];
          }
        } else {
          if (!Path.equals(path, p)) {
            return [n, p];
          }
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  },

  /**
   * Add a custom property to the leaf text nodes in the current selection.
   *
   * If the selection is currently collapsed, the marks will be added to the
   * `editor.marks` property instead, and applied when text is inserted next.
   */
  addMark: function addMark(editor, key, value) {
    editor.addMark(key, value);
  },

  /**
   * Get the point after a location.
   */
  after: function after(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var anchor = Editor.point(editor, at, {
      edge: 'end'
    });
    var focus = Editor.end(editor, []);
    var range = {
      anchor: anchor,
      focus: focus
    };
    var _options$distance = options.distance,
        distance = _options$distance === void 0 ? 1 : _options$distance;
    var d = 0;
    var target;

    var _iterator2 = _createForOfIteratorHelper$5(Editor.positions(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
      at: range
    }))),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var p = _step2.value;

        if (d > distance) {
          break;
        }

        if (d !== 0) {
          target = p;
        }

        d++;
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    return target;
  },

  /**
   * Get the point before a location.
   */
  before: function before(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var anchor = Editor.start(editor, []);
    var focus = Editor.point(editor, at, {
      edge: 'start'
    });
    var range = {
      anchor: anchor,
      focus: focus
    };
    var _options$distance2 = options.distance,
        distance = _options$distance2 === void 0 ? 1 : _options$distance2;
    var d = 0;
    var target;

    var _iterator3 = _createForOfIteratorHelper$5(Editor.positions(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
      at: range,
      reverse: true
    }))),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var p = _step3.value;

        if (d > distance) {
          break;
        }

        if (d !== 0) {
          target = p;
        }

        d++;
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    return target;
  },

  /**
   * Delete content in the editor backward from the current selection.
   */
  deleteBackward: function deleteBackward(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$unit = options.unit,
        unit = _options$unit === void 0 ? 'character' : _options$unit;
    editor.deleteBackward(unit);
  },

  /**
   * Delete content in the editor forward from the current selection.
   */
  deleteForward: function deleteForward(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$unit2 = options.unit,
        unit = _options$unit2 === void 0 ? 'character' : _options$unit2;
    editor.deleteForward(unit);
  },

  /**
   * Delete the content in the current selection.
   */
  deleteFragment: function deleteFragment(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$direction = options.direction,
        direction = _options$direction === void 0 ? 'forward' : _options$direction;
    editor.deleteFragment(direction);
  },

  /**
   * Get the start and end points of a location.
   */
  edges: function edges(editor, at) {
    return [Editor.start(editor, at), Editor.end(editor, at)];
  },

  /**
   * Get the end point of a location.
   */
  end: function end(editor, at) {
    return Editor.point(editor, at, {
      edge: 'end'
    });
  },

  /**
   * Get the first node at a location.
   */
  first: function first(editor, at) {
    var path = Editor.path(editor, at, {
      edge: 'start'
    });
    return Editor.node(editor, path);
  },

  /**
   * Get the fragment at a location.
   */
  fragment: function fragment(editor, at) {
    var range = Editor.range(editor, at);
    var fragment = Node.fragment(editor, range);
    return fragment;
  },

  /**
   * Check if a node has block children.
   */
  hasBlocks: function hasBlocks(editor, element) {
    return element.children.some(function (n) {
      return Editor.isBlock(editor, n);
    });
  },

  /**
   * Check if a node has inline and text children.
   */
  hasInlines: function hasInlines(editor, element) {
    return element.children.some(function (n) {
      return Text.isText(n) || Editor.isInline(editor, n);
    });
  },

  /**
   * Check if a node has text children.
   */
  hasTexts: function hasTexts(editor, element) {
    return element.children.every(function (n) {
      return Text.isText(n);
    });
  },

  /**
   * Insert a block break at the current selection.
   *
   * If the selection is currently expanded, it will be deleted first.
   */
  insertBreak: function insertBreak(editor) {
    editor.insertBreak();
  },

  /**
   * Insert a soft break at the current selection.
   *
   * If the selection is currently expanded, it will be deleted first.
   */
  insertSoftBreak: function insertSoftBreak(editor) {
    editor.insertSoftBreak();
  },

  /**
   * Insert a fragment at the current selection.
   *
   * If the selection is currently expanded, it will be deleted first.
   */
  insertFragment: function insertFragment(editor, fragment) {
    editor.insertFragment(fragment);
  },

  /**
   * Insert a node at the current selection.
   *
   * If the selection is currently expanded, it will be deleted first.
   */
  insertNode: function insertNode(editor, node) {
    editor.insertNode(node);
  },

  /**
   * Insert text at the current selection.
   *
   * If the selection is currently expanded, it will be deleted first.
   */
  insertText: function insertText(editor, text) {
    editor.insertText(text);
  },

  /**
   * Check if a value is a block `Element` object.
   */
  isBlock: function isBlock(editor, value) {
    return Element.isElement(value) && !editor.isInline(value);
  },

  /**
   * Check if a value is an `Editor` object.
   */
  isEditor: function isEditor(value) {
    var cachedIsEditor = IS_EDITOR_CACHE.get(value);

    if (cachedIsEditor !== undefined) {
      return cachedIsEditor;
    }

    if (!isPlainObject.isPlainObject(value)) {
      return false;
    }

    var isEditor = typeof value.addMark === 'function' && typeof value.apply === 'function' && typeof value.deleteBackward === 'function' && typeof value.deleteForward === 'function' && typeof value.deleteFragment === 'function' && typeof value.insertBreak === 'function' && typeof value.insertSoftBreak === 'function' && typeof value.insertFragment === 'function' && typeof value.insertNode === 'function' && typeof value.insertText === 'function' && typeof value.isInline === 'function' && typeof value.isVoid === 'function' && typeof value.normalizeNode === 'function' && typeof value.onChange === 'function' && typeof value.removeMark === 'function' && typeof value.getDirtyPaths === 'function' && (value.marks === null || isPlainObject.isPlainObject(value.marks)) && (value.selection === null || Range.isRange(value.selection)) && Node.isNodeList(value.children) && Operation.isOperationList(value.operations);
    IS_EDITOR_CACHE.set(value, isEditor);
    return isEditor;
  },

  /**
   * Check if a point is the end point of a location.
   */
  isEnd: function isEnd(editor, point, at) {
    var end = Editor.end(editor, at);
    return Point.equals(point, end);
  },

  /**
   * Check if a point is an edge of a location.
   */
  isEdge: function isEdge(editor, point, at) {
    return Editor.isStart(editor, point, at) || Editor.isEnd(editor, point, at);
  },

  /**
   * Check if an element is empty, accounting for void nodes.
   */
  isEmpty: function isEmpty(editor, element) {
    var children = element.children;

    var _children = _slicedToArray(children, 1),
        first = _children[0];

    return children.length === 0 || children.length === 1 && Text.isText(first) && first.text === '' && !editor.isVoid(element);
  },

  /**
   * Check if a value is an inline `Element` object.
   */
  isInline: function isInline(editor, value) {
    return Element.isElement(value) && editor.isInline(value);
  },

  /**
   * Check if the editor is currently normalizing after each operation.
   */
  isNormalizing: function isNormalizing(editor) {
    var isNormalizing = NORMALIZING.get(editor);
    return isNormalizing === undefined ? true : isNormalizing;
  },

  /**
   * Check if a point is the start point of a location.
   */
  isStart: function isStart(editor, point, at) {
    // PERF: If the offset isn't `0` we know it's not the start.
    if (point.offset !== 0) {
      return false;
    }

    var start = Editor.start(editor, at);
    return Point.equals(point, start);
  },

  /**
   * Check if a value is a void `Element` object.
   */
  isVoid: function isVoid(editor, value) {
    return Element.isElement(value) && editor.isVoid(value);
  },

  /**
   * Get the last node at a location.
   */
  last: function last(editor, at) {
    var path = Editor.path(editor, at, {
      edge: 'end'
    });
    return Editor.node(editor, path);
  },

  /**
   * Get the leaf text node at a location.
   */
  leaf: function leaf(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var path = Editor.path(editor, at, options);
    var node = Node.leaf(editor, path);
    return [node, path];
  },

  /**
   * Iterate through all of the levels at a location.
   */
  levels: function* levels(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$at2 = options.at,
        at = _options$at2 === void 0 ? editor.selection : _options$at2,
        _options$reverse = options.reverse,
        reverse = _options$reverse === void 0 ? false : _options$reverse,
        _options$voids2 = options.voids,
        voids = _options$voids2 === void 0 ? false : _options$voids2;
    var match = options.match;

    if (match == null) {
      match = function match() {
        return true;
      };
    }

    if (!at) {
      return;
    }

    var levels = [];
    var path = Editor.path(editor, at);

    var _iterator4 = _createForOfIteratorHelper$5(Node.levels(editor, path)),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var _step4$value = _slicedToArray(_step4.value, 2),
            n = _step4$value[0],
            p = _step4$value[1];

        if (!match(n, p)) {
          continue;
        }

        levels.push([n, p]);

        if (!voids && Editor.isVoid(editor, n)) {
          break;
        }
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    if (reverse) {
      levels.reverse();
    }

    yield* levels;
  },

  /**
   * Get the marks that would be added to text at the current selection.
   */
  marks: function marks(editor) {
    var marks = editor.marks,
        selection = editor.selection;

    if (!selection) {
      return null;
    }

    if (marks) {
      return marks;
    }

    if (Range.isExpanded(selection)) {
      var _Editor$nodes = Editor.nodes(editor, {
        match: Text.isText
      }),
          _Editor$nodes2 = _slicedToArray(_Editor$nodes, 1),
          match = _Editor$nodes2[0];

      if (match) {
        var _match = _slicedToArray(match, 1),
            _node = _match[0];

        _node.text;
            var _rest = _objectWithoutProperties(_node, _excluded$4);

        return _rest;
      } else {
        return {};
      }
    }

    var anchor = selection.anchor;
    var path = anchor.path;

    var _Editor$leaf = Editor.leaf(editor, path),
        _Editor$leaf2 = _slicedToArray(_Editor$leaf, 1),
        node = _Editor$leaf2[0];

    if (anchor.offset === 0) {
      var prev = Editor.previous(editor, {
        at: path,
        match: Text.isText
      });
      var markedVoid = Editor.above(editor, {
        match: function match(n) {
          return Editor.isVoid(editor, n) && editor.markableVoid(n);
        }
      });

      if (!markedVoid) {
        var block = Editor.above(editor, {
          match: function match(n) {
            return Editor.isBlock(editor, n);
          }
        });

        if (prev && block) {
          var _prev = _slicedToArray(prev, 2),
              prevNode = _prev[0],
              prevPath = _prev[1];

          var _block = _slicedToArray(block, 2),
              blockPath = _block[1];

          if (Path.isAncestor(blockPath, prevPath)) {
            node = prevNode;
          }
        }
      }
    }

    var _node2 = node;
        _node2.text;
        var rest = _objectWithoutProperties(_node2, _excluded2$3);

    return rest;
  },

  /**
   * Get the matching node in the branch of the document after a location.
   */
  next: function next(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$mode2 = options.mode,
        mode = _options$mode2 === void 0 ? 'lowest' : _options$mode2,
        _options$voids3 = options.voids,
        voids = _options$voids3 === void 0 ? false : _options$voids3;
    var match = options.match,
        _options$at3 = options.at,
        at = _options$at3 === void 0 ? editor.selection : _options$at3;

    if (!at) {
      return;
    }

    var pointAfterLocation = Editor.after(editor, at, {
      voids: voids
    });
    if (!pointAfterLocation) return;

    var _Editor$last = Editor.last(editor, []),
        _Editor$last2 = _slicedToArray(_Editor$last, 2),
        to = _Editor$last2[1];

    var span = [pointAfterLocation.path, to];

    if (Path.isPath(at) && at.length === 0) {
      throw new Error("Cannot get the next node from the root node!");
    }

    if (match == null) {
      if (Path.isPath(at)) {
        var _Editor$parent = Editor.parent(editor, at),
            _Editor$parent2 = _slicedToArray(_Editor$parent, 1),
            parent = _Editor$parent2[0];

        match = function match(n) {
          return parent.children.includes(n);
        };
      } else {
        match = function match() {
          return true;
        };
      }
    }

    var _Editor$nodes3 = Editor.nodes(editor, {
      at: span,
      match: match,
      mode: mode,
      voids: voids
    }),
        _Editor$nodes4 = _slicedToArray(_Editor$nodes3, 1),
        next = _Editor$nodes4[0];

    return next;
  },

  /**
   * Get the node at a location.
   */
  node: function node(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var path = Editor.path(editor, at, options);
    var node = Node.get(editor, path);
    return [node, path];
  },

  /**
   * Iterate through all of the nodes in the Editor.
   */
  nodes: function* nodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$at4 = options.at,
        at = _options$at4 === void 0 ? editor.selection : _options$at4,
        _options$mode3 = options.mode,
        mode = _options$mode3 === void 0 ? 'all' : _options$mode3,
        _options$universal = options.universal,
        universal = _options$universal === void 0 ? false : _options$universal,
        _options$reverse2 = options.reverse,
        reverse = _options$reverse2 === void 0 ? false : _options$reverse2,
        _options$voids4 = options.voids,
        voids = _options$voids4 === void 0 ? false : _options$voids4;
    var match = options.match;

    if (!match) {
      match = function match() {
        return true;
      };
    }

    if (!at) {
      return;
    }

    var from;
    var to;

    if (Span.isSpan(at)) {
      from = at[0];
      to = at[1];
    } else {
      var first = Editor.path(editor, at, {
        edge: 'start'
      });
      var last = Editor.path(editor, at, {
        edge: 'end'
      });
      from = reverse ? last : first;
      to = reverse ? first : last;
    }

    var nodeEntries = Node.nodes(editor, {
      reverse: reverse,
      from: from,
      to: to,
      pass: function pass(_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            n = _ref2[0];

        return voids ? false : Editor.isVoid(editor, n);
      }
    });
    var matches = [];
    var hit;

    var _iterator5 = _createForOfIteratorHelper$5(nodeEntries),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var _step5$value = _slicedToArray(_step5.value, 2),
            node = _step5$value[0],
            path = _step5$value[1];

        var isLower = hit && Path.compare(path, hit[1]) === 0; // In highest mode any node lower than the last hit is not a match.

        if (mode === 'highest' && isLower) {
          continue;
        }

        if (!match(node, path)) {
          // If we've arrived at a leaf text node that is not lower than the last
          // hit, then we've found a branch that doesn't include a match, which
          // means the match is not universal.
          if (universal && !isLower && Text.isText(node)) {
            return;
          } else {
            continue;
          }
        } // If there's a match and it's lower than the last, update the hit.


        if (mode === 'lowest' && isLower) {
          hit = [node, path];
          continue;
        } // In lowest mode we emit the last hit, once it's guaranteed lowest.


        var emit = mode === 'lowest' ? hit : [node, path];

        if (emit) {
          if (universal) {
            matches.push(emit);
          } else {
            yield emit;
          }
        }

        hit = [node, path];
      } // Since lowest is always emitting one behind, catch up at the end.

    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }

    if (mode === 'lowest' && hit) {
      if (universal) {
        matches.push(hit);
      } else {
        yield hit;
      }
    } // Universal defers to ensure that the match occurs in every branch, so we
    // yield all of the matches after iterating.


    if (universal) {
      yield* matches;
    }
  },

  /**
   * Normalize any dirty objects in the editor.
   */
  normalize: function normalize(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$force = options.force,
        force = _options$force === void 0 ? false : _options$force;

    var getDirtyPaths = function getDirtyPaths(editor) {
      return DIRTY_PATHS.get(editor) || [];
    };

    var getDirtyPathKeys = function getDirtyPathKeys(editor) {
      return DIRTY_PATH_KEYS.get(editor) || new Set();
    };

    var popDirtyPath = function popDirtyPath(editor) {
      var path = getDirtyPaths(editor).pop();
      var key = path.join(',');
      getDirtyPathKeys(editor)["delete"](key);
      return path;
    };

    if (!Editor.isNormalizing(editor)) {
      return;
    }

    if (force) {
      var allPaths = Array.from(Node.nodes(editor), function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            p = _ref4[1];

        return p;
      });
      var allPathKeys = new Set(allPaths.map(function (p) {
        return p.join(',');
      }));
      DIRTY_PATHS.set(editor, allPaths);
      DIRTY_PATH_KEYS.set(editor, allPathKeys);
    }

    if (getDirtyPaths(editor).length === 0) {
      return;
    }

    Editor.withoutNormalizing(editor, function () {
      /*
        Fix dirty elements with no children.
        editor.normalizeNode() does fix this, but some normalization fixes also require it to work.
        Running an initial pass avoids the catch-22 race condition.
      */
      var _iterator6 = _createForOfIteratorHelper$5(getDirtyPaths(editor)),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var _dirtyPath = _step6.value;

          if (Node.has(editor, _dirtyPath)) {
            var _entry = Editor.node(editor, _dirtyPath);

            var _entry2 = _slicedToArray(_entry, 2),
                node = _entry2[0],
                _ = _entry2[1];
            /*
              The default normalizer inserts an empty text node in this scenario, but it can be customised.
              So there is some risk here.
                         As long as the normalizer only inserts child nodes for this case it is safe to do in any order;
              by definition adding children to an empty node can't cause other paths to change.
            */


            if (Element.isElement(node) && node.children.length === 0) {
              editor.normalizeNode(_entry);
            }
          }
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      var max = getDirtyPaths(editor).length * 42; // HACK: better way?

      var m = 0;

      while (getDirtyPaths(editor).length !== 0) {
        if (m > max) {
          throw new Error("\n            Could not completely normalize the editor after ".concat(max, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state.\n          "));
        }

        var dirtyPath = popDirtyPath(editor); // If the node doesn't exist in the tree, it does not need to be normalized.

        if (Node.has(editor, dirtyPath)) {
          var entry = Editor.node(editor, dirtyPath);
          editor.normalizeNode(entry);
        }

        m++;
      }
    });
  },

  /**
   * Get the parent node of a location.
   */
  parent: function parent(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var path = Editor.path(editor, at, options);
    var parentPath = Path.parent(path);
    var entry = Editor.node(editor, parentPath);
    return entry;
  },

  /**
   * Get the path of a location.
   */
  path: function path(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var depth = options.depth,
        edge = options.edge;

    if (Path.isPath(at)) {
      if (edge === 'start') {
        var _Node$first = Node.first(editor, at),
            _Node$first2 = _slicedToArray(_Node$first, 2),
            firstPath = _Node$first2[1];

        at = firstPath;
      } else if (edge === 'end') {
        var _Node$last = Node.last(editor, at),
            _Node$last2 = _slicedToArray(_Node$last, 2),
            lastPath = _Node$last2[1];

        at = lastPath;
      }
    }

    if (Range.isRange(at)) {
      if (edge === 'start') {
        at = Range.start(at);
      } else if (edge === 'end') {
        at = Range.end(at);
      } else {
        at = Path.common(at.anchor.path, at.focus.path);
      }
    }

    if (Point.isPoint(at)) {
      at = at.path;
    }

    if (depth != null) {
      at = at.slice(0, depth);
    }

    return at;
  },
  hasPath: function hasPath(editor, path) {
    return Node.has(editor, path);
  },

  /**
   * Create a mutable ref for a `Path` object, which will stay in sync as new
   * operations are applied to the editor.
   */
  pathRef: function pathRef(editor, path) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _options$affinity = options.affinity,
        affinity = _options$affinity === void 0 ? 'forward' : _options$affinity;
    var ref = {
      current: path,
      affinity: affinity,
      unref: function unref() {
        var current = ref.current;
        var pathRefs = Editor.pathRefs(editor);
        pathRefs["delete"](ref);
        ref.current = null;
        return current;
      }
    };
    var refs = Editor.pathRefs(editor);
    refs.add(ref);
    return ref;
  },

  /**
   * Get the set of currently tracked path refs of the editor.
   */
  pathRefs: function pathRefs(editor) {
    var refs = PATH_REFS.get(editor);

    if (!refs) {
      refs = new Set();
      PATH_REFS.set(editor, refs);
    }

    return refs;
  },

  /**
   * Get the start or end point of a location.
   */
  point: function point(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _options$edge = options.edge,
        edge = _options$edge === void 0 ? 'start' : _options$edge;

    if (Path.isPath(at)) {
      var path;

      if (edge === 'end') {
        var _Node$last3 = Node.last(editor, at),
            _Node$last4 = _slicedToArray(_Node$last3, 2),
            lastPath = _Node$last4[1];

        path = lastPath;
      } else {
        var _Node$first3 = Node.first(editor, at),
            _Node$first4 = _slicedToArray(_Node$first3, 2),
            firstPath = _Node$first4[1];

        path = firstPath;
      }

      var node = Node.get(editor, path);

      if (!Text.isText(node)) {
        throw new Error("Cannot get the ".concat(edge, " point in the node at path [").concat(at, "] because it has no ").concat(edge, " text node."));
      }

      return {
        path: path,
        offset: edge === 'end' ? node.text.length : 0
      };
    }

    if (Range.isRange(at)) {
      var _Range$edges = Range.edges(at),
          _Range$edges2 = _slicedToArray(_Range$edges, 2),
          start = _Range$edges2[0],
          end = _Range$edges2[1];

      return edge === 'start' ? start : end;
    }

    return at;
  },

  /**
   * Create a mutable ref for a `Point` object, which will stay in sync as new
   * operations are applied to the editor.
   */
  pointRef: function pointRef(editor, point) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _options$affinity2 = options.affinity,
        affinity = _options$affinity2 === void 0 ? 'forward' : _options$affinity2;
    var ref = {
      current: point,
      affinity: affinity,
      unref: function unref() {
        var current = ref.current;
        var pointRefs = Editor.pointRefs(editor);
        pointRefs["delete"](ref);
        ref.current = null;
        return current;
      }
    };
    var refs = Editor.pointRefs(editor);
    refs.add(ref);
    return ref;
  },

  /**
   * Get the set of currently tracked point refs of the editor.
   */
  pointRefs: function pointRefs(editor) {
    var refs = POINT_REFS.get(editor);

    if (!refs) {
      refs = new Set();
      POINT_REFS.set(editor, refs);
    }

    return refs;
  },

  /**
   * Return all the positions in `at` range where a `Point` can be placed.
   *
   * By default, moves forward by individual offsets at a time, but
   * the `unit` option can be used to to move by character, word, line, or block.
   *
   * The `reverse` option can be used to change iteration direction.
   *
   * Note: By default void nodes are treated as a single point and iteration
   * will not happen inside their content unless you pass in true for the
   * `voids` option, then iteration will occur.
   */
  positions: function* positions(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$at5 = options.at,
        at = _options$at5 === void 0 ? editor.selection : _options$at5,
        _options$unit3 = options.unit,
        unit = _options$unit3 === void 0 ? 'offset' : _options$unit3,
        _options$reverse3 = options.reverse,
        reverse = _options$reverse3 === void 0 ? false : _options$reverse3,
        _options$voids5 = options.voids,
        voids = _options$voids5 === void 0 ? false : _options$voids5;

    if (!at) {
      return;
    }
    /**
     * Algorithm notes:
     *
     * Each step `distance` is dynamic depending on the underlying text
     * and the `unit` specified.  Each step, e.g., a line or word, may
     * span multiple text nodes, so we iterate through the text both on
     * two levels in step-sync:
     *
     * `leafText` stores the text on a text leaf level, and is advanced
     * through using the counters `leafTextOffset` and `leafTextRemaining`.
     *
     * `blockText` stores the text on a block level, and is shortened
     * by `distance` every time it is advanced.
     *
     * We only maintain a window of one blockText and one leafText because
     * a block node always appears before all of its leaf nodes.
     */


    var range = Editor.range(editor, at);

    var _Range$edges3 = Range.edges(range),
        _Range$edges4 = _slicedToArray(_Range$edges3, 2),
        start = _Range$edges4[0],
        end = _Range$edges4[1];

    var first = reverse ? end : start;
    var isNewBlock = false;
    var blockText = '';
    var distance = 0; // Distance for leafText to catch up to blockText.

    var leafTextRemaining = 0;
    var leafTextOffset = 0; // Iterate through all nodes in range, grabbing entire textual content
    // of block nodes in blockText, and text nodes in leafText.
    // Exploits the fact that nodes are sequenced in such a way that we first
    // encounter the block node, then all of its text nodes, so when iterating
    // through the blockText and leafText we just need to remember a window of
    // one block node and leaf node, respectively.

    var _iterator7 = _createForOfIteratorHelper$5(Editor.nodes(editor, {
      at: at,
      reverse: reverse,
      voids: voids
    })),
        _step7;

    try {
      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        var _step7$value = _slicedToArray(_step7.value, 2),
            node = _step7$value[0],
            path = _step7$value[1];

        /*
         * ELEMENT NODE - Yield position(s) for voids, collect blockText for blocks
         */
        if (Element.isElement(node)) {
          // Void nodes are a special case, so by default we will always
          // yield their first point. If the `voids` option is set to true,
          // then we will iterate over their content.
          if (!voids && editor.isVoid(node)) {
            yield Editor.start(editor, path);
            continue;
          } // Inline element nodes are ignored as they don't themselves
          // contribute to `blockText` or `leafText` - their parent and
          // children do.


          if (editor.isInline(node)) continue; // Block element node - set `blockText` to its text content.

          if (Editor.hasInlines(editor, node)) {
            // We always exhaust block nodes before encountering a new one:
            //   console.assert(blockText === '',
            //     `blockText='${blockText}' - `+
            //     `not exhausted before new block node`, path)
            // Ensure range considered is capped to `range`, in the
            // start/end edge cases where block extends beyond range.
            // Equivalent to this, but presumably more performant:
            //   blockRange = Editor.range(editor, ...Editor.edges(editor, path))
            //   blockRange = Range.intersection(range, blockRange) // intersect
            //   blockText = Editor.string(editor, blockRange, { voids })
            var e = Path.isAncestor(path, end.path) ? end : Editor.end(editor, path);
            var s = Path.isAncestor(path, start.path) ? start : Editor.start(editor, path);
            blockText = Editor.string(editor, {
              anchor: s,
              focus: e
            }, {
              voids: voids
            });
            isNewBlock = true;
          }
        }
        /*
         * TEXT LEAF NODE - Iterate through text content, yielding
         * positions every `distance` offset according to `unit`.
         */


        if (Text.isText(node)) {
          var isFirst = Path.equals(path, first.path); // Proof that we always exhaust text nodes before encountering a new one:
          //   console.assert(leafTextRemaining <= 0,
          //     `leafTextRemaining=${leafTextRemaining} - `+
          //     `not exhausted before new leaf text node`, path)
          // Reset `leafText` counters for new text node.

          if (isFirst) {
            leafTextRemaining = reverse ? first.offset : node.text.length - first.offset;
            leafTextOffset = first.offset; // Works for reverse too.
          } else {
            leafTextRemaining = node.text.length;
            leafTextOffset = reverse ? leafTextRemaining : 0;
          } // Yield position at the start of node (potentially).


          if (isFirst || isNewBlock || unit === 'offset') {
            yield {
              path: path,
              offset: leafTextOffset
            };
            isNewBlock = false;
          } // Yield positions every (dynamically calculated) `distance` offset.


          while (true) {
            // If `leafText` has caught up with `blockText` (distance=0),
            // and if blockText is exhausted, break to get another block node,
            // otherwise advance blockText forward by the new `distance`.
            if (distance === 0) {
              if (blockText === '') break;
              distance = calcDistance(blockText, unit, reverse); // Split the string at the previously found distance and use the
              // remaining string for the next iteration.

              blockText = splitByCharacterDistance(blockText, distance, reverse)[1];
            } // Advance `leafText` by the current `distance`.


            leafTextOffset = reverse ? leafTextOffset - distance : leafTextOffset + distance;
            leafTextRemaining = leafTextRemaining - distance; // If `leafText` is exhausted, break to get a new leaf node
            // and set distance to the overflow amount, so we'll (maybe)
            // catch up to blockText in the next leaf text node.

            if (leafTextRemaining < 0) {
              distance = -leafTextRemaining;
              break;
            } // Successfully walked `distance` offsets through `leafText`
            // to catch up with `blockText`, so we can reset `distance`
            // and yield this position in this node.


            distance = 0;
            yield {
              path: path,
              offset: leafTextOffset
            };
          }
        }
      } // Proof that upon completion, we've exahusted both leaf and block text:
      //   console.assert(leafTextRemaining <= 0, "leafText wasn't exhausted")
      //   console.assert(blockText === '', "blockText wasn't exhausted")
      // Helper:
      // Return the distance in offsets for a step of size `unit` on given string.

    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }

    function calcDistance(text, unit, reverse) {
      if (unit === 'character') {
        return getCharacterDistance(text, reverse);
      } else if (unit === 'word') {
        return getWordDistance(text, reverse);
      } else if (unit === 'line' || unit === 'block') {
        return text.length;
      }

      return 1;
    }
  },

  /**
   * Get the matching node in the branch of the document before a location.
   */
  previous: function previous(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$mode4 = options.mode,
        mode = _options$mode4 === void 0 ? 'lowest' : _options$mode4,
        _options$voids6 = options.voids,
        voids = _options$voids6 === void 0 ? false : _options$voids6;
    var match = options.match,
        _options$at6 = options.at,
        at = _options$at6 === void 0 ? editor.selection : _options$at6;

    if (!at) {
      return;
    }

    var pointBeforeLocation = Editor.before(editor, at, {
      voids: voids
    });

    if (!pointBeforeLocation) {
      return;
    }

    var _Editor$first = Editor.first(editor, []),
        _Editor$first2 = _slicedToArray(_Editor$first, 2),
        to = _Editor$first2[1]; // The search location is from the start of the document to the path of
    // the point before the location passed in


    var span = [pointBeforeLocation.path, to];

    if (Path.isPath(at) && at.length === 0) {
      throw new Error("Cannot get the previous node from the root node!");
    }

    if (match == null) {
      if (Path.isPath(at)) {
        var _Editor$parent3 = Editor.parent(editor, at),
            _Editor$parent4 = _slicedToArray(_Editor$parent3, 1),
            parent = _Editor$parent4[0];

        match = function match(n) {
          return parent.children.includes(n);
        };
      } else {
        match = function match() {
          return true;
        };
      }
    }

    var _Editor$nodes5 = Editor.nodes(editor, {
      reverse: true,
      at: span,
      match: match,
      mode: mode,
      voids: voids
    }),
        _Editor$nodes6 = _slicedToArray(_Editor$nodes5, 1),
        previous = _Editor$nodes6[0];

    return previous;
  },

  /**
   * Get a range of a location.
   */
  range: function range(editor, at, to) {
    if (Range.isRange(at) && !to) {
      return at;
    }

    var start = Editor.start(editor, at);
    var end = Editor.end(editor, to || at);
    return {
      anchor: start,
      focus: end
    };
  },

  /**
   * Create a mutable ref for a `Range` object, which will stay in sync as new
   * operations are applied to the editor.
   */
  rangeRef: function rangeRef(editor, range) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _options$affinity3 = options.affinity,
        affinity = _options$affinity3 === void 0 ? 'forward' : _options$affinity3;
    var ref = {
      current: range,
      affinity: affinity,
      unref: function unref() {
        var current = ref.current;
        var rangeRefs = Editor.rangeRefs(editor);
        rangeRefs["delete"](ref);
        ref.current = null;
        return current;
      }
    };
    var refs = Editor.rangeRefs(editor);
    refs.add(ref);
    return ref;
  },

  /**
   * Get the set of currently tracked range refs of the editor.
   */
  rangeRefs: function rangeRefs(editor) {
    var refs = RANGE_REFS.get(editor);

    if (!refs) {
      refs = new Set();
      RANGE_REFS.set(editor, refs);
    }

    return refs;
  },

  /**
   * Remove a custom property from all of the leaf text nodes in the current
   * selection.
   *
   * If the selection is currently collapsed, the removal will be stored on
   * `editor.marks` and applied to the text inserted next.
   */
  removeMark: function removeMark(editor, key) {
    editor.removeMark(key);
  },

  /**
   * Manually set if the editor should currently be normalizing.
   *
   * Note: Using this incorrectly can leave the editor in an invalid state.
   *
   */
  setNormalizing: function setNormalizing(editor, isNormalizing) {
    NORMALIZING.set(editor, isNormalizing);
  },

  /**
   * Get the start point of a location.
   */
  start: function start(editor, at) {
    return Editor.point(editor, at, {
      edge: 'start'
    });
  },

  /**
   * Get the text string content of a location.
   *
   * Note: by default the text of void nodes is considered to be an empty
   * string, regardless of content, unless you pass in true for the voids option
   */
  string: function string(editor, at) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _options$voids7 = options.voids,
        voids = _options$voids7 === void 0 ? false : _options$voids7;
    var range = Editor.range(editor, at);

    var _Range$edges5 = Range.edges(range),
        _Range$edges6 = _slicedToArray(_Range$edges5, 2),
        start = _Range$edges6[0],
        end = _Range$edges6[1];

    var text = '';

    var _iterator8 = _createForOfIteratorHelper$5(Editor.nodes(editor, {
      at: range,
      match: Text.isText,
      voids: voids
    })),
        _step8;

    try {
      for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
        var _step8$value = _slicedToArray(_step8.value, 2),
            node = _step8$value[0],
            path = _step8$value[1];

        var t = node.text;

        if (Path.equals(path, end.path)) {
          t = t.slice(0, end.offset);
        }

        if (Path.equals(path, start.path)) {
          t = t.slice(start.offset);
        }

        text += t;
      }
    } catch (err) {
      _iterator8.e(err);
    } finally {
      _iterator8.f();
    }

    return text;
  },

  /**
   * Convert a range into a non-hanging one.
   */
  unhangRange: function unhangRange(editor, range) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _options$voids8 = options.voids,
        voids = _options$voids8 === void 0 ? false : _options$voids8;

    var _Range$edges7 = Range.edges(range),
        _Range$edges8 = _slicedToArray(_Range$edges7, 2),
        start = _Range$edges8[0],
        end = _Range$edges8[1]; // PERF: exit early if we can guarantee that the range isn't hanging.


    if (start.offset !== 0 || end.offset !== 0 || Range.isCollapsed(range) || Path.hasPrevious(end.path)) {
      return range;
    }

    var endBlock = Editor.above(editor, {
      at: end,
      match: function match(n) {
        return Editor.isBlock(editor, n);
      },
      voids: voids
    });
    var blockPath = endBlock ? endBlock[1] : [];
    var first = Editor.start(editor, start);
    var before = {
      anchor: first,
      focus: end
    };
    var skip = true;

    var _iterator9 = _createForOfIteratorHelper$5(Editor.nodes(editor, {
      at: before,
      match: Text.isText,
      reverse: true,
      voids: voids
    })),
        _step9;

    try {
      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
        var _step9$value = _slicedToArray(_step9.value, 2),
            node = _step9$value[0],
            path = _step9$value[1];

        if (skip) {
          skip = false;
          continue;
        }

        if (node.text !== '' || Path.isBefore(path, blockPath)) {
          end = {
            path: path,
            offset: node.text.length
          };
          break;
        }
      }
    } catch (err) {
      _iterator9.e(err);
    } finally {
      _iterator9.f();
    }

    return {
      anchor: start,
      focus: end
    };
  },

  /**
   * Match a void node in the current branch of the editor.
   */
  "void": function _void(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return Editor.above(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
      match: function match(n) {
        return Editor.isVoid(editor, n);
      }
    }));
  },

  /**
   * Call a function, deferring normalization until after it completes.
   */
  withoutNormalizing: function withoutNormalizing(editor, fn) {
    var value = Editor.isNormalizing(editor);
    Editor.setNormalizing(editor, false);

    try {
      fn();
    } finally {
      Editor.setNormalizing(editor, value);
    }

    Editor.normalize(editor);
  }
};

var Location = {
  /**
   * Check if a value implements the `Location` interface.
   */
  isLocation: function isLocation(value) {
    return Path.isPath(value) || Point.isPoint(value) || Range.isRange(value);
  }
}; // eslint-disable-next-line no-redeclare

var Span = {
  /**
   * Check if a value implements the `Span` interface.
   */
  isSpan: function isSpan(value) {
    return Array.isArray(value) && value.length === 2 && value.every(Path.isPath);
  }
};

var _excluded$3 = ["children"],
    _excluded2$2 = ["text"];

function _createForOfIteratorHelper$4(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$4(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$4(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$4(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen); }

function _arrayLikeToArray$4(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var IS_NODE_LIST_CACHE = new WeakMap(); // eslint-disable-next-line no-redeclare

var Node = {
  /**
   * Get the node at a specific path, asserting that it's an ancestor node.
   */
  ancestor: function ancestor(root, path) {
    var node = Node.get(root, path);

    if (Text.isText(node)) {
      throw new Error("Cannot get the ancestor node at path [".concat(path, "] because it refers to a text node instead: ").concat(Scrubber.stringify(node)));
    }

    return node;
  },

  /**
   * Return a generator of all the ancestor nodes above a specific path.
   *
   * By default the order is top-down, from highest to lowest ancestor in
   * the tree, but you can pass the `reverse: true` option to go bottom-up.
   */
  ancestors: function* ancestors(root, path) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var _iterator = _createForOfIteratorHelper$4(Path.ancestors(path, options)),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var p = _step.value;
        var n = Node.ancestor(root, p);
        var entry = [n, p];
        yield entry;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  },

  /**
   * Get the child of a node at a specific index.
   */
  child: function child(root, index) {
    if (Text.isText(root)) {
      throw new Error("Cannot get the child of a text node: ".concat(Scrubber.stringify(root)));
    }

    var c = root.children[index];

    if (c == null) {
      throw new Error("Cannot get child at index `".concat(index, "` in node: ").concat(Scrubber.stringify(root)));
    }

    return c;
  },

  /**
   * Iterate over the children of a node at a specific path.
   */
  children: function* children(root, path) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _options$reverse = options.reverse,
        reverse = _options$reverse === void 0 ? false : _options$reverse;
    var ancestor = Node.ancestor(root, path);
    var children = ancestor.children;
    var index = reverse ? children.length - 1 : 0;

    while (reverse ? index >= 0 : index < children.length) {
      var child = Node.child(ancestor, index);
      var childPath = path.concat(index);
      yield [child, childPath];
      index = reverse ? index - 1 : index + 1;
    }
  },

  /**
   * Get an entry for the common ancesetor node of two paths.
   */
  common: function common(root, path, another) {
    var p = Path.common(path, another);
    var n = Node.get(root, p);
    return [n, p];
  },

  /**
   * Get the node at a specific path, asserting that it's a descendant node.
   */
  descendant: function descendant(root, path) {
    var node = Node.get(root, path);

    if (Editor.isEditor(node)) {
      throw new Error("Cannot get the descendant node at path [".concat(path, "] because it refers to the root editor node instead: ").concat(Scrubber.stringify(node)));
    }

    return node;
  },

  /**
   * Return a generator of all the descendant node entries inside a root node.
   */
  descendants: function* descendants(root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _iterator2 = _createForOfIteratorHelper$4(Node.nodes(root, options)),
        _step2;

    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
        var _step2$value = _slicedToArray(_step2.value, 2),
            node = _step2$value[0],
            path = _step2$value[1];

        if (path.length !== 0) {
          // NOTE: we have to coerce here because checking the path's length does
          // guarantee that `node` is not a `Editor`, but TypeScript doesn't know.
          yield [node, path];
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  },

  /**
   * Return a generator of all the element nodes inside a root node. Each iteration
   * will return an `ElementEntry` tuple consisting of `[Element, Path]`. If the
   * root node is an element it will be included in the iteration as well.
   */
  elements: function* elements(root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _iterator3 = _createForOfIteratorHelper$4(Node.nodes(root, options)),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _step3$value = _slicedToArray(_step3.value, 2),
            node = _step3$value[0],
            path = _step3$value[1];

        if (Element.isElement(node)) {
          yield [node, path];
        }
      }
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
  },

  /**
   * Extract props from a Node.
   */
  extractProps: function extractProps(node) {
    if (Element.isAncestor(node)) {
      node.children;
          var properties = _objectWithoutProperties(node, _excluded$3);

      return properties;
    } else {
      node.text;
          var _properties = _objectWithoutProperties(node, _excluded2$2);

      return _properties;
    }
  },

  /**
   * Get the first node entry in a root node from a path.
   */
  first: function first(root, path) {
    var p = path.slice();
    var n = Node.get(root, p);

    while (n) {
      if (Text.isText(n) || n.children.length === 0) {
        break;
      } else {
        n = n.children[0];
        p.push(0);
      }
    }

    return [n, p];
  },

  /**
   * Get the sliced fragment represented by a range inside a root node.
   */
  fragment: function fragment(root, range) {
    if (Text.isText(root)) {
      throw new Error("Cannot get a fragment starting from a root text node: ".concat(Scrubber.stringify(root)));
    }

    var newRoot = immer.produce({
      children: root.children
    }, function (r) {
      var _Range$edges = Range.edges(range),
          _Range$edges2 = _slicedToArray(_Range$edges, 2),
          start = _Range$edges2[0],
          end = _Range$edges2[1];

      var nodeEntries = Node.nodes(r, {
        reverse: true,
        pass: function pass(_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              path = _ref2[1];

          return !Range.includes(range, path);
        }
      });

      var _iterator4 = _createForOfIteratorHelper$4(nodeEntries),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var _step4$value = _slicedToArray(_step4.value, 2),
              path = _step4$value[1];

          if (!Range.includes(range, path)) {
            var parent = Node.parent(r, path);
            var index = path[path.length - 1];
            parent.children.splice(index, 1);
          }

          if (Path.equals(path, end.path)) {
            var leaf = Node.leaf(r, path);
            leaf.text = leaf.text.slice(0, end.offset);
          }

          if (Path.equals(path, start.path)) {
            var _leaf = Node.leaf(r, path);

            _leaf.text = _leaf.text.slice(start.offset);
          }
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }

      if (Editor.isEditor(r)) {
        r.selection = null;
      }
    });
    return newRoot.children;
  },

  /**
   * Get the descendant node referred to by a specific path. If the path is an
   * empty array, it refers to the root node itself.
   */
  get: function get(root, path) {
    var node = root;

    for (var i = 0; i < path.length; i++) {
      var p = path[i];

      if (Text.isText(node) || !node.children[p]) {
        throw new Error("Cannot find a descendant at path [".concat(path, "] in node: ").concat(Scrubber.stringify(root)));
      }

      node = node.children[p];
    }

    return node;
  },

  /**
   * Check if a descendant node exists at a specific path.
   */
  has: function has(root, path) {
    var node = root;

    for (var i = 0; i < path.length; i++) {
      var p = path[i];

      if (Text.isText(node) || !node.children[p]) {
        return false;
      }

      node = node.children[p];
    }

    return true;
  },

  /**
   * Check if a value implements the `Node` interface.
   */
  isNode: function isNode(value) {
    return Text.isText(value) || Element.isElement(value) || Editor.isEditor(value);
  },

  /**
   * Check if a value is a list of `Node` objects.
   */
  isNodeList: function isNodeList(value) {
    if (!Array.isArray(value)) {
      return false;
    }

    var cachedResult = IS_NODE_LIST_CACHE.get(value);

    if (cachedResult !== undefined) {
      return cachedResult;
    }

    var isNodeList = value.every(function (val) {
      return Node.isNode(val);
    });
    IS_NODE_LIST_CACHE.set(value, isNodeList);
    return isNodeList;
  },

  /**
   * Get the last node entry in a root node from a path.
   */
  last: function last(root, path) {
    var p = path.slice();
    var n = Node.get(root, p);

    while (n) {
      if (Text.isText(n) || n.children.length === 0) {
        break;
      } else {
        var i = n.children.length - 1;
        n = n.children[i];
        p.push(i);
      }
    }

    return [n, p];
  },

  /**
   * Get the node at a specific path, ensuring it's a leaf text node.
   */
  leaf: function leaf(root, path) {
    var node = Node.get(root, path);

    if (!Text.isText(node)) {
      throw new Error("Cannot get the leaf node at path [".concat(path, "] because it refers to a non-leaf node: ").concat(Scrubber.stringify(node)));
    }

    return node;
  },

  /**
   * Return a generator of the in a branch of the tree, from a specific path.
   *
   * By default the order is top-down, from highest to lowest node in the tree,
   * but you can pass the `reverse: true` option to go bottom-up.
   */
  levels: function* levels(root, path) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    var _iterator5 = _createForOfIteratorHelper$4(Path.levels(path, options)),
        _step5;

    try {
      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        var p = _step5.value;
        var n = Node.get(root, p);
        yield [n, p];
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  },

  /**
   * Check if a node matches a set of props.
   */
  matches: function matches(node, props) {
    return Element.isElement(node) && Element.isElementProps(props) && Element.matches(node, props) || Text.isText(node) && Text.isTextProps(props) && Text.matches(node, props);
  },

  /**
   * Return a generator of all the node entries of a root node. Each entry is
   * returned as a `[Node, Path]` tuple, with the path referring to the node's
   * position inside the root node.
   */
  nodes: function* nodes(root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var pass = options.pass,
        _options$reverse2 = options.reverse,
        reverse = _options$reverse2 === void 0 ? false : _options$reverse2;
    var _options$from = options.from,
        from = _options$from === void 0 ? [] : _options$from,
        to = options.to;
    var visited = new Set();
    var p = [];
    var n = root;

    while (true) {
      if (to && (reverse ? Path.isBefore(p, to) : Path.isAfter(p, to))) {
        break;
      }

      if (!visited.has(n)) {
        yield [n, p];
      } // If we're allowed to go downward and we haven't descended yet, do.


      if (!visited.has(n) && !Text.isText(n) && n.children.length !== 0 && (pass == null || pass([n, p]) === false)) {
        visited.add(n);
        var nextIndex = reverse ? n.children.length - 1 : 0;

        if (Path.isAncestor(p, from)) {
          nextIndex = from[p.length];
        }

        p = p.concat(nextIndex);
        n = Node.get(root, p);
        continue;
      } // If we're at the root and we can't go down, we're done.


      if (p.length === 0) {
        break;
      } // If we're going forward...


      if (!reverse) {
        var newPath = Path.next(p);

        if (Node.has(root, newPath)) {
          p = newPath;
          n = Node.get(root, p);
          continue;
        }
      } // If we're going backward...


      if (reverse && p[p.length - 1] !== 0) {
        var _newPath = Path.previous(p);

        p = _newPath;
        n = Node.get(root, p);
        continue;
      } // Otherwise we're going upward...


      p = Path.parent(p);
      n = Node.get(root, p);
      visited.add(n);
    }
  },

  /**
   * Get the parent of a node at a specific path.
   */
  parent: function parent(root, path) {
    var parentPath = Path.parent(path);
    var p = Node.get(root, parentPath);

    if (Text.isText(p)) {
      throw new Error("Cannot get the parent of path [".concat(path, "] because it does not exist in the root."));
    }

    return p;
  },

  /**
   * Get the concatenated text string of a node's content.
   *
   * Note that this will not include spaces or line breaks between block nodes.
   * It is not a user-facing string, but a string for performing offset-related
   * computations for a node.
   */
  string: function string(node) {
    if (Text.isText(node)) {
      return node.text;
    } else {
      return node.children.map(Node.string).join('');
    }
  },

  /**
   * Return a generator of all leaf text nodes in a root node.
   */
  texts: function* texts(root) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var _iterator6 = _createForOfIteratorHelper$4(Node.nodes(root, options)),
        _step6;

    try {
      for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
        var _step6$value = _slicedToArray(_step6.value, 2),
            node = _step6$value[0],
            path = _step6$value[1];

        if (Text.isText(node)) {
          yield [node, path];
        }
      }
    } catch (err) {
      _iterator6.e(err);
    } finally {
      _iterator6.f();
    }
  }
};

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$7(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Operation = {
  /**
   * Check of a value is a `NodeOperation` object.
   */
  isNodeOperation: function isNodeOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith('_node');
  },

  /**
   * Check of a value is an `Operation` object.
   */
  isOperation: function isOperation(value) {
    if (!isPlainObject.isPlainObject(value)) {
      return false;
    }

    switch (value.type) {
      case 'insert_node':
        return Path.isPath(value.path) && Node.isNode(value.node);

      case 'insert_text':
        return typeof value.offset === 'number' && typeof value.text === 'string' && Path.isPath(value.path);

      case 'merge_node':
        return typeof value.position === 'number' && Path.isPath(value.path) && isPlainObject.isPlainObject(value.properties);

      case 'move_node':
        return Path.isPath(value.path) && Path.isPath(value.newPath);

      case 'remove_node':
        return Path.isPath(value.path) && Node.isNode(value.node);

      case 'remove_text':
        return typeof value.offset === 'number' && typeof value.text === 'string' && Path.isPath(value.path);

      case 'set_node':
        return Path.isPath(value.path) && isPlainObject.isPlainObject(value.properties) && isPlainObject.isPlainObject(value.newProperties);

      case 'set_selection':
        return value.properties === null && Range.isRange(value.newProperties) || value.newProperties === null && Range.isRange(value.properties) || isPlainObject.isPlainObject(value.properties) && isPlainObject.isPlainObject(value.newProperties);

      case 'split_node':
        return Path.isPath(value.path) && typeof value.position === 'number' && isPlainObject.isPlainObject(value.properties);

      default:
        return false;
    }
  },

  /**
   * Check if a value is a list of `Operation` objects.
   */
  isOperationList: function isOperationList(value) {
    return Array.isArray(value) && value.every(function (val) {
      return Operation.isOperation(val);
    });
  },

  /**
   * Check of a value is a `SelectionOperation` object.
   */
  isSelectionOperation: function isSelectionOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith('_selection');
  },

  /**
   * Check of a value is a `TextOperation` object.
   */
  isTextOperation: function isTextOperation(value) {
    return Operation.isOperation(value) && value.type.endsWith('_text');
  },

  /**
   * Invert an operation, returning a new operation that will exactly undo the
   * original when applied.
   */
  inverse: function inverse(op) {
    switch (op.type) {
      case 'insert_node':
        {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: 'remove_node'
          });
        }

      case 'insert_text':
        {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: 'remove_text'
          });
        }

      case 'merge_node':
        {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: 'split_node',
            path: Path.previous(op.path)
          });
        }

      case 'move_node':
        {
          var newPath = op.newPath,
              path = op.path; // PERF: in this case the move operation is a no-op anyways.

          if (Path.equals(newPath, path)) {
            return op;
          } // If the move happens completely within a single parent the path and
          // newPath are stable with respect to each other.


          if (Path.isSibling(path, newPath)) {
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              path: newPath,
              newPath: path
            });
          } // If the move does not happen within a single parent it is possible
          // for the move to impact the true path to the location where the node
          // was removed from and where it was inserted. We have to adjust for this
          // and find the original path. We can accomplish this (only in non-sibling)
          // moves by looking at the impact of the move operation on the node
          // after the original move path.


          var inversePath = Path.transform(path, op);
          var inverseNewPath = Path.transform(Path.next(path), op);
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            path: inversePath,
            newPath: inverseNewPath
          });
        }

      case 'remove_node':
        {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: 'insert_node'
          });
        }

      case 'remove_text':
        {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: 'insert_text'
          });
        }

      case 'set_node':
        {
          var properties = op.properties,
              newProperties = op.newProperties;
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            properties: newProperties,
            newProperties: properties
          });
        }

      case 'set_selection':
        {
          var _properties = op.properties,
              _newProperties = op.newProperties;

          if (_properties == null) {
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              properties: _newProperties,
              newProperties: null
            });
          } else if (_newProperties == null) {
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              properties: null,
              newProperties: _properties
            });
          } else {
            return _objectSpread$7(_objectSpread$7({}, op), {}, {
              properties: _newProperties,
              newProperties: _properties
            });
          }
        }

      case 'split_node':
        {
          return _objectSpread$7(_objectSpread$7({}, op), {}, {
            type: 'merge_node',
            path: Path.next(op.path)
          });
        }
    }
  }
};

// eslint-disable-next-line no-redeclare
var Path = {
  /**
   * Get a list of ancestor paths for a given path.
   *
   * The paths are sorted from shallowest to deepest ancestor. However, if the
   * `reverse: true` option is passed, they are reversed.
   */
  ancestors: function ancestors(path) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$reverse = options.reverse,
        reverse = _options$reverse === void 0 ? false : _options$reverse;
    var paths = Path.levels(path, options);

    if (reverse) {
      paths = paths.slice(1);
    } else {
      paths = paths.slice(0, -1);
    }

    return paths;
  },

  /**
   * Get the common ancestor path of two paths.
   */
  common: function common(path, another) {
    var common = [];

    for (var i = 0; i < path.length && i < another.length; i++) {
      var av = path[i];
      var bv = another[i];

      if (av !== bv) {
        break;
      }

      common.push(av);
    }

    return common;
  },

  /**
   * Compare a path to another, returning an integer indicating whether the path
   * was before, at, or after the other.
   *
   * Note: Two paths of unequal length can still receive a `0` result if one is
   * directly above or below the other. If you want exact matching, use
   * [[Path.equals]] instead.
   */
  compare: function compare(path, another) {
    var min = Math.min(path.length, another.length);

    for (var i = 0; i < min; i++) {
      if (path[i] < another[i]) return -1;
      if (path[i] > another[i]) return 1;
    }

    return 0;
  },

  /**
   * Check if a path ends after one of the indexes in another.
   */
  endsAfter: function endsAfter(path, another) {
    var i = path.length - 1;
    var as = path.slice(0, i);
    var bs = another.slice(0, i);
    var av = path[i];
    var bv = another[i];
    return Path.equals(as, bs) && av > bv;
  },

  /**
   * Check if a path ends at one of the indexes in another.
   */
  endsAt: function endsAt(path, another) {
    var i = path.length;
    var as = path.slice(0, i);
    var bs = another.slice(0, i);
    return Path.equals(as, bs);
  },

  /**
   * Check if a path ends before one of the indexes in another.
   */
  endsBefore: function endsBefore(path, another) {
    var i = path.length - 1;
    var as = path.slice(0, i);
    var bs = another.slice(0, i);
    var av = path[i];
    var bv = another[i];
    return Path.equals(as, bs) && av < bv;
  },

  /**
   * Check if a path is exactly equal to another.
   */
  equals: function equals(path, another) {
    return path.length === another.length && path.every(function (n, i) {
      return n === another[i];
    });
  },

  /**
   * Check if the path of previous sibling node exists
   */
  hasPrevious: function hasPrevious(path) {
    return path[path.length - 1] > 0;
  },

  /**
   * Check if a path is after another.
   */
  isAfter: function isAfter(path, another) {
    return Path.compare(path, another) === 1;
  },

  /**
   * Check if a path is an ancestor of another.
   */
  isAncestor: function isAncestor(path, another) {
    return path.length < another.length && Path.compare(path, another) === 0;
  },

  /**
   * Check if a path is before another.
   */
  isBefore: function isBefore(path, another) {
    return Path.compare(path, another) === -1;
  },

  /**
   * Check if a path is a child of another.
   */
  isChild: function isChild(path, another) {
    return path.length === another.length + 1 && Path.compare(path, another) === 0;
  },

  /**
   * Check if a path is equal to or an ancestor of another.
   */
  isCommon: function isCommon(path, another) {
    return path.length <= another.length && Path.compare(path, another) === 0;
  },

  /**
   * Check if a path is a descendant of another.
   */
  isDescendant: function isDescendant(path, another) {
    return path.length > another.length && Path.compare(path, another) === 0;
  },

  /**
   * Check if a path is the parent of another.
   */
  isParent: function isParent(path, another) {
    return path.length + 1 === another.length && Path.compare(path, another) === 0;
  },

  /**
   * Check is a value implements the `Path` interface.
   */
  isPath: function isPath(value) {
    return Array.isArray(value) && (value.length === 0 || typeof value[0] === 'number');
  },

  /**
   * Check if a path is a sibling of another.
   */
  isSibling: function isSibling(path, another) {
    if (path.length !== another.length) {
      return false;
    }

    var as = path.slice(0, -1);
    var bs = another.slice(0, -1);
    var al = path[path.length - 1];
    var bl = another[another.length - 1];
    return al !== bl && Path.equals(as, bs);
  },

  /**
   * Get a list of paths at every level down to a path. Note: this is the same
   * as `Path.ancestors`, but including the path itself.
   *
   * The paths are sorted from shallowest to deepest. However, if the `reverse:
   * true` option is passed, they are reversed.
   */
  levels: function levels(path) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$reverse2 = options.reverse,
        reverse = _options$reverse2 === void 0 ? false : _options$reverse2;
    var list = [];

    for (var i = 0; i <= path.length; i++) {
      list.push(path.slice(0, i));
    }

    if (reverse) {
      list.reverse();
    }

    return list;
  },

  /**
   * Given a path, get the path to the next sibling node.
   */
  next: function next(path) {
    if (path.length === 0) {
      throw new Error("Cannot get the next path of a root path [".concat(path, "], because it has no next index."));
    }

    var last = path[path.length - 1];
    return path.slice(0, -1).concat(last + 1);
  },

  /**
   * Returns whether this operation can affect paths or not. Used as an
   * optimization when updating dirty paths during normalization
   *
   * NOTE: This *must* be kept in sync with the implementation of 'transform'
   * below
   */
  operationCanTransformPath: function operationCanTransformPath(operation) {
    switch (operation.type) {
      case 'insert_node':
      case 'remove_node':
      case 'merge_node':
      case 'split_node':
      case 'move_node':
        return true;

      default:
        return false;
    }
  },

  /**
   * Given a path, return a new path referring to the parent node above it.
   */
  parent: function parent(path) {
    if (path.length === 0) {
      throw new Error("Cannot get the parent path of the root path [".concat(path, "]."));
    }

    return path.slice(0, -1);
  },

  /**
   * Given a path, get the path to the previous sibling node.
   */
  previous: function previous(path) {
    if (path.length === 0) {
      throw new Error("Cannot get the previous path of a root path [".concat(path, "], because it has no previous index."));
    }

    var last = path[path.length - 1];

    if (last <= 0) {
      throw new Error("Cannot get the previous path of a first child path [".concat(path, "] because it would result in a negative index."));
    }

    return path.slice(0, -1).concat(last - 1);
  },

  /**
   * Get a path relative to an ancestor.
   */
  relative: function relative(path, ancestor) {
    if (!Path.isAncestor(ancestor, path) && !Path.equals(path, ancestor)) {
      throw new Error("Cannot get the relative path of [".concat(path, "] inside ancestor [").concat(ancestor, "], because it is not above or equal to the path."));
    }

    return path.slice(ancestor.length);
  },

  /**
   * Transform a path by an operation.
   */
  transform: function transform(path, operation) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    if (!path) return null; // PERF: use destructing instead of immer

    var p = _toConsumableArray(path);

    var _options$affinity = options.affinity,
        affinity = _options$affinity === void 0 ? 'forward' : _options$affinity; // PERF: Exit early if the operation is guaranteed not to have an effect.

    if (path.length === 0) {
      return p;
    }

    switch (operation.type) {
      case 'insert_node':
        {
          var op = operation.path;

          if (Path.equals(op, p) || Path.endsBefore(op, p) || Path.isAncestor(op, p)) {
            p[op.length - 1] += 1;
          }

          break;
        }

      case 'remove_node':
        {
          var _op = operation.path;

          if (Path.equals(_op, p) || Path.isAncestor(_op, p)) {
            return null;
          } else if (Path.endsBefore(_op, p)) {
            p[_op.length - 1] -= 1;
          }

          break;
        }

      case 'merge_node':
        {
          var _op2 = operation.path,
              position = operation.position;

          if (Path.equals(_op2, p) || Path.endsBefore(_op2, p)) {
            p[_op2.length - 1] -= 1;
          } else if (Path.isAncestor(_op2, p)) {
            p[_op2.length - 1] -= 1;
            p[_op2.length] += position;
          }

          break;
        }

      case 'split_node':
        {
          var _op3 = operation.path,
              _position = operation.position;

          if (Path.equals(_op3, p)) {
            if (affinity === 'forward') {
              p[p.length - 1] += 1;
            } else if (affinity === 'backward') ; else {
              return null;
            }
          } else if (Path.endsBefore(_op3, p)) {
            p[_op3.length - 1] += 1;
          } else if (Path.isAncestor(_op3, p) && path[_op3.length] >= _position) {
            p[_op3.length - 1] += 1;
            p[_op3.length] -= _position;
          }

          break;
        }

      case 'move_node':
        {
          var _op4 = operation.path,
              onp = operation.newPath; // If the old and new path are the same, it's a no-op.

          if (Path.equals(_op4, onp)) {
            return p;
          }

          if (Path.isAncestor(_op4, p) || Path.equals(_op4, p)) {
            var copy = onp.slice();

            if (Path.endsBefore(_op4, onp) && _op4.length < onp.length) {
              copy[_op4.length - 1] -= 1;
            }

            return copy.concat(p.slice(_op4.length));
          } else if (Path.isSibling(_op4, onp) && (Path.isAncestor(onp, p) || Path.equals(onp, p))) {
            if (Path.endsBefore(_op4, p)) {
              p[_op4.length - 1] -= 1;
            } else {
              p[_op4.length - 1] += 1;
            }
          } else if (Path.endsBefore(onp, p) || Path.equals(onp, p) || Path.isAncestor(onp, p)) {
            if (Path.endsBefore(_op4, p)) {
              p[_op4.length - 1] -= 1;
            }

            p[onp.length - 1] += 1;
          } else if (Path.endsBefore(_op4, p)) {
            if (Path.equals(onp, p)) {
              p[onp.length - 1] += 1;
            }

            p[_op4.length - 1] -= 1;
          }

          break;
        }
    }

    return p;
  }
};

var PathRef = {
  /**
   * Transform the path ref's current value by an operation.
   */
  transform: function transform(ref, op) {
    var current = ref.current,
        affinity = ref.affinity;

    if (current == null) {
      return;
    }

    var path = Path.transform(current, op, {
      affinity: affinity
    });
    ref.current = path;

    if (path == null) {
      ref.unref();
    }
  }
};

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Point = {
  /**
   * Compare a point to another, returning an integer indicating whether the
   * point was before, at, or after the other.
   */
  compare: function compare(point, another) {
    var result = Path.compare(point.path, another.path);

    if (result === 0) {
      if (point.offset < another.offset) return -1;
      if (point.offset > another.offset) return 1;
      return 0;
    }

    return result;
  },

  /**
   * Check if a point is after another.
   */
  isAfter: function isAfter(point, another) {
    return Point.compare(point, another) === 1;
  },

  /**
   * Check if a point is before another.
   */
  isBefore: function isBefore(point, another) {
    return Point.compare(point, another) === -1;
  },

  /**
   * Check if a point is exactly equal to another.
   */
  equals: function equals(point, another) {
    // PERF: ensure the offsets are equal first since they are cheaper to check.
    return point.offset === another.offset && Path.equals(point.path, another.path);
  },

  /**
   * Check if a value implements the `Point` interface.
   */
  isPoint: function isPoint(value) {
    return isPlainObject.isPlainObject(value) && typeof value.offset === 'number' && Path.isPath(value.path);
  },

  /**
   * Transform a point by an operation.
   */
  transform: function transform(point, op) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return immer.produce(point, function (p) {
      if (p === null) {
        return null;
      }

      var _options$affinity = options.affinity,
          affinity = _options$affinity === void 0 ? 'forward' : _options$affinity;
      var path = p.path,
          offset = p.offset;

      switch (op.type) {
        case 'insert_node':
        case 'move_node':
          {
            p.path = Path.transform(path, op, options);
            break;
          }

        case 'insert_text':
          {
            if (Path.equals(op.path, path) && (op.offset < offset || op.offset === offset && affinity === 'forward')) {
              p.offset += op.text.length;
            }

            break;
          }

        case 'merge_node':
          {
            if (Path.equals(op.path, path)) {
              p.offset += op.position;
            }

            p.path = Path.transform(path, op, options);
            break;
          }

        case 'remove_text':
          {
            if (Path.equals(op.path, path) && op.offset <= offset) {
              p.offset -= Math.min(offset - op.offset, op.text.length);
            }

            break;
          }

        case 'remove_node':
          {
            if (Path.equals(op.path, path) || Path.isAncestor(op.path, path)) {
              return null;
            }

            p.path = Path.transform(path, op, options);
            break;
          }

        case 'split_node':
          {
            if (Path.equals(op.path, path)) {
              if (op.position === offset && affinity == null) {
                return null;
              } else if (op.position < offset || op.position === offset && affinity === 'forward') {
                p.offset -= op.position;
                p.path = Path.transform(path, op, _objectSpread$6(_objectSpread$6({}, options), {}, {
                  affinity: 'forward'
                }));
              }
            } else {
              p.path = Path.transform(path, op, options);
            }

            break;
          }
      }
    });
  }
};

var PointRef = {
  /**
   * Transform the point ref's current value by an operation.
   */
  transform: function transform(ref, op) {
    var current = ref.current,
        affinity = ref.affinity;

    if (current == null) {
      return;
    }

    var point = Point.transform(current, op, {
      affinity: affinity
    });
    ref.current = point;

    if (point == null) {
      ref.unref();
    }
  }
};

var _excluded$2 = ["anchor", "focus"];

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Range = {
  /**
   * Get the start and end points of a range, in the order in which they appear
   * in the document.
   */
  edges: function edges(range) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$reverse = options.reverse,
        reverse = _options$reverse === void 0 ? false : _options$reverse;
    var anchor = range.anchor,
        focus = range.focus;
    return Range.isBackward(range) === reverse ? [anchor, focus] : [focus, anchor];
  },

  /**
   * Get the end point of a range.
   */
  end: function end(range) {
    var _Range$edges = Range.edges(range),
        _Range$edges2 = _slicedToArray(_Range$edges, 2),
        end = _Range$edges2[1];

    return end;
  },

  /**
   * Check if a range is exactly equal to another.
   */
  equals: function equals(range, another) {
    return Point.equals(range.anchor, another.anchor) && Point.equals(range.focus, another.focus);
  },

  /**
   * Check if a range includes a path, a point or part of another range.
   */
  includes: function includes(range, target) {
    if (Range.isRange(target)) {
      if (Range.includes(range, target.anchor) || Range.includes(range, target.focus)) {
        return true;
      }

      var _Range$edges3 = Range.edges(range),
          _Range$edges4 = _slicedToArray(_Range$edges3, 2),
          rs = _Range$edges4[0],
          re = _Range$edges4[1];

      var _Range$edges5 = Range.edges(target),
          _Range$edges6 = _slicedToArray(_Range$edges5, 2),
          ts = _Range$edges6[0],
          te = _Range$edges6[1];

      return Point.isBefore(rs, ts) && Point.isAfter(re, te);
    }

    var _Range$edges7 = Range.edges(range),
        _Range$edges8 = _slicedToArray(_Range$edges7, 2),
        start = _Range$edges8[0],
        end = _Range$edges8[1];

    var isAfterStart = false;
    var isBeforeEnd = false;

    if (Point.isPoint(target)) {
      isAfterStart = Point.compare(target, start) >= 0;
      isBeforeEnd = Point.compare(target, end) <= 0;
    } else {
      isAfterStart = Path.compare(target, start.path) >= 0;
      isBeforeEnd = Path.compare(target, end.path) <= 0;
    }

    return isAfterStart && isBeforeEnd;
  },

  /**
   * Get the intersection of a range with another.
   */
  intersection: function intersection(range, another) {
    range.anchor;
        range.focus;
        var rest = _objectWithoutProperties(range, _excluded$2);

    var _Range$edges9 = Range.edges(range),
        _Range$edges10 = _slicedToArray(_Range$edges9, 2),
        s1 = _Range$edges10[0],
        e1 = _Range$edges10[1];

    var _Range$edges11 = Range.edges(another),
        _Range$edges12 = _slicedToArray(_Range$edges11, 2),
        s2 = _Range$edges12[0],
        e2 = _Range$edges12[1];

    var start = Point.isBefore(s1, s2) ? s2 : s1;
    var end = Point.isBefore(e1, e2) ? e1 : e2;

    if (Point.isBefore(end, start)) {
      return null;
    } else {
      return _objectSpread$5({
        anchor: start,
        focus: end
      }, rest);
    }
  },

  /**
   * Check if a range is backward, meaning that its anchor point appears in the
   * document _after_ its focus point.
   */
  isBackward: function isBackward(range) {
    var anchor = range.anchor,
        focus = range.focus;
    return Point.isAfter(anchor, focus);
  },

  /**
   * Check if a range is collapsed, meaning that both its anchor and focus
   * points refer to the exact same position in the document.
   */
  isCollapsed: function isCollapsed(range) {
    var anchor = range.anchor,
        focus = range.focus;
    return Point.equals(anchor, focus);
  },

  /**
   * Check if a range is expanded.
   *
   * This is the opposite of [[Range.isCollapsed]] and is provided for legibility.
   */
  isExpanded: function isExpanded(range) {
    return !Range.isCollapsed(range);
  },

  /**
   * Check if a range is forward.
   *
   * This is the opposite of [[Range.isBackward]] and is provided for legibility.
   */
  isForward: function isForward(range) {
    return !Range.isBackward(range);
  },

  /**
   * Check if a value implements the [[Range]] interface.
   */
  isRange: function isRange(value) {
    return isPlainObject.isPlainObject(value) && Point.isPoint(value.anchor) && Point.isPoint(value.focus);
  },

  /**
   * Iterate through all of the point entries in a range.
   */
  points: function* points(range) {
    yield [range.anchor, 'anchor'];
    yield [range.focus, 'focus'];
  },

  /**
   * Get the start point of a range.
   */
  start: function start(range) {
    var _Range$edges13 = Range.edges(range),
        _Range$edges14 = _slicedToArray(_Range$edges13, 1),
        start = _Range$edges14[0];

    return start;
  },

  /**
   * Transform a range by an operation.
   */
  transform: function transform(range, op) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    return immer.produce(range, function (r) {
      if (r === null) {
        return null;
      }

      var _options$affinity = options.affinity,
          affinity = _options$affinity === void 0 ? 'inward' : _options$affinity;
      var affinityAnchor;
      var affinityFocus;

      if (affinity === 'inward') {
        // If the range is collapsed, make sure to use the same affinity to
        // avoid the two points passing each other and expanding in the opposite
        // direction
        var isCollapsed = Range.isCollapsed(r);

        if (Range.isForward(r)) {
          affinityAnchor = 'forward';
          affinityFocus = isCollapsed ? affinityAnchor : 'backward';
        } else {
          affinityAnchor = 'backward';
          affinityFocus = isCollapsed ? affinityAnchor : 'forward';
        }
      } else if (affinity === 'outward') {
        if (Range.isForward(r)) {
          affinityAnchor = 'backward';
          affinityFocus = 'forward';
        } else {
          affinityAnchor = 'forward';
          affinityFocus = 'backward';
        }
      } else {
        affinityAnchor = affinity;
        affinityFocus = affinity;
      }

      var anchor = Point.transform(r.anchor, op, {
        affinity: affinityAnchor
      });
      var focus = Point.transform(r.focus, op, {
        affinity: affinityFocus
      });

      if (!anchor || !focus) {
        return null;
      }

      r.anchor = anchor;
      r.focus = focus;
    });
  }
};

var RangeRef = {
  /**
   * Transform the range ref's current value by an operation.
   */
  transform: function transform(ref, op) {
    var current = ref.current,
        affinity = ref.affinity;

    if (current == null) {
      return;
    }

    var path = Range.transform(current, op, {
      affinity: affinity
    });
    ref.current = path;

    if (path == null) {
      ref.unref();
    }
  }
};

var _scrubber = undefined;
/**
 * This interface implements a stringify() function, which is used by Slate
 * internally when generating exceptions containing end user data. Developers
 * using Slate may call Scrubber.setScrubber() to alter the behavior of this
 * stringify() function.
 *
 * For example, to prevent the cleartext logging of 'text' fields within Nodes:
 *
 *    import { Scrubber } from 'slate';
 *    Scrubber.setScrubber((key, val) => {
 *      if (key === 'text') return '...scrubbed...'
 *      return val
 *    });
 *
 */
// eslint-disable-next-line no-redeclare

var Scrubber = {
  setScrubber: function setScrubber(scrubber) {
    _scrubber = scrubber;
  },
  stringify: function stringify(value) {
    return JSON.stringify(value, _scrubber);
  }
};

/*
  Custom deep equal comparison for Slate nodes.

  We don't need general purpose deep equality;
  Slate only supports plain values, Arrays, and nested objects.
  Complex values nested inside Arrays are not supported.

  Slate objects are designed to be serialised, so
  missing keys are deliberately normalised to undefined.
 */

var isDeepEqual = function isDeepEqual(node, another) {
  for (var key in node) {
    var a = node[key];
    var b = another[key];

    if (isPlainObject.isPlainObject(a) && isPlainObject.isPlainObject(b)) {
      if (!isDeepEqual(a, b)) return false;
    } else if (Array.isArray(a) && Array.isArray(b)) {
      if (a.length !== b.length) return false;

      for (var i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
      }
    } else if (a !== b) {
      return false;
    }
  }
  /*
    Deep object equality is only necessary in one direction; in the reverse direction
    we are only looking for keys that are missing.
    As above, undefined keys are normalised to missing.
  */


  for (var _key in another) {
    if (node[_key] === undefined && another[_key] !== undefined) {
      return false;
    }
  }

  return true;
};

var _excluded$1 = ["text"],
    _excluded2$1 = ["anchor", "focus"];

function _createForOfIteratorHelper$3(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$3(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$3(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen); }

function _arrayLikeToArray$3(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Text = {
  /**
   * Check if two text nodes are equal.
   *
   * When loose is set, the text is not compared. This is
   * used to check whether sibling text nodes can be merged.
   */
  equals: function equals(text, another) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var _options$loose = options.loose,
        loose = _options$loose === void 0 ? false : _options$loose;

    function omitText(obj) {
      obj.text;
          var rest = _objectWithoutProperties(obj, _excluded$1);

      return rest;
    }

    return isDeepEqual(loose ? omitText(text) : text, loose ? omitText(another) : another);
  },

  /**
   * Check if a value implements the `Text` interface.
   */
  isText: function isText(value) {
    return isPlainObject.isPlainObject(value) && typeof value.text === 'string';
  },

  /**
   * Check if a value is a list of `Text` objects.
   */
  isTextList: function isTextList(value) {
    return Array.isArray(value) && value.every(function (val) {
      return Text.isText(val);
    });
  },

  /**
   * Check if some props are a partial of Text.
   */
  isTextProps: function isTextProps(props) {
    return props.text !== undefined;
  },

  /**
   * Check if an text matches set of properties.
   *
   * Note: this is for matching custom properties, and it does not ensure that
   * the `text` property are two nodes equal.
   */
  matches: function matches(text, props) {
    for (var key in props) {
      if (key === 'text') {
        continue;
      }

      if (!text.hasOwnProperty(key) || text[key] !== props[key]) {
        return false;
      }
    }

    return true;
  },

  /**
   * Get the leaves for a text node given decorations.
   */
  decorations: function decorations(node, _decorations) {
    var leaves = [_objectSpread$4({}, node)];

    var _iterator = _createForOfIteratorHelper$3(_decorations),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var dec = _step.value;

        var anchor = dec.anchor,
            focus = dec.focus,
            rest = _objectWithoutProperties(dec, _excluded2$1);

        var _Range$edges = Range.edges(dec),
            _Range$edges2 = _slicedToArray(_Range$edges, 2),
            start = _Range$edges2[0],
            end = _Range$edges2[1];

        var next = [];
        var leafEnd = 0;
        var decorationStart = start.offset;
        var decorationEnd = end.offset;

        var _iterator2 = _createForOfIteratorHelper$3(leaves),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var leaf = _step2.value;
            var length = leaf.text.length;
            var leafStart = leafEnd;
            leafEnd += length; // If the range encompasses the entire leaf, add the range.

            if (decorationStart <= leafStart && leafEnd <= decorationEnd) {
              Object.assign(leaf, rest);
              next.push(leaf);
              continue;
            } // If the range expanded and match the leaf, or starts after, or ends before it, continue.


            if (decorationStart !== decorationEnd && (decorationStart === leafEnd || decorationEnd === leafStart) || decorationStart > leafEnd || decorationEnd < leafStart || decorationEnd === leafStart && leafStart !== 0) {
              next.push(leaf);
              continue;
            } // Otherwise we need to split the leaf, at the start, end, or both,
            // and add the range to the middle intersecting section. Do the end
            // split first since we don't need to update the offset that way.


            var middle = leaf;
            var before = void 0;
            var after = void 0;

            if (decorationEnd < leafEnd) {
              var off = decorationEnd - leafStart;
              after = _objectSpread$4(_objectSpread$4({}, middle), {}, {
                text: middle.text.slice(off)
              });
              middle = _objectSpread$4(_objectSpread$4({}, middle), {}, {
                text: middle.text.slice(0, off)
              });
            }

            if (decorationStart > leafStart) {
              var _off = decorationStart - leafStart;

              before = _objectSpread$4(_objectSpread$4({}, middle), {}, {
                text: middle.text.slice(0, _off)
              });
              middle = _objectSpread$4(_objectSpread$4({}, middle), {}, {
                text: middle.text.slice(_off)
              });
            }

            Object.assign(middle, rest);

            if (before) {
              next.push(before);
            }

            next.push(middle);

            if (after) {
              next.push(after);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        leaves = next;
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return leaves;
  }
};

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper$2(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }

function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var applyToDraft = function applyToDraft(editor, selection, op) {
  switch (op.type) {
    case 'insert_node':
      {
        var path = op.path,
            node = op.node;
        var parent = Node.parent(editor, path);
        var index = path[path.length - 1];

        if (index > parent.children.length) {
          throw new Error("Cannot apply an \"insert_node\" operation at path [".concat(path, "] because the destination is past the end of the node."));
        }

        parent.children.splice(index, 0, node);

        if (selection) {
          var _iterator = _createForOfIteratorHelper$2(Range.points(selection)),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var _step$value = _slicedToArray(_step.value, 2),
                  point = _step$value[0],
                  key = _step$value[1];

              selection[key] = Point.transform(point, op);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        }

        break;
      }

    case 'insert_text':
      {
        var _path = op.path,
            offset = op.offset,
            text = op.text;
        if (text.length === 0) break;

        var _node = Node.leaf(editor, _path);

        var before = _node.text.slice(0, offset);

        var after = _node.text.slice(offset);

        _node.text = before + text + after;

        if (selection) {
          var _iterator2 = _createForOfIteratorHelper$2(Range.points(selection)),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _step2$value = _slicedToArray(_step2.value, 2),
                  _point = _step2$value[0],
                  _key = _step2$value[1];

              selection[_key] = Point.transform(_point, op);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }

        break;
      }

    case 'merge_node':
      {
        var _path2 = op.path;

        var _node2 = Node.get(editor, _path2);

        var prevPath = Path.previous(_path2);
        var prev = Node.get(editor, prevPath);

        var _parent = Node.parent(editor, _path2);

        var _index = _path2[_path2.length - 1];

        if (Text.isText(_node2) && Text.isText(prev)) {
          prev.text += _node2.text;
        } else if (!Text.isText(_node2) && !Text.isText(prev)) {
          var _prev$children;

          (_prev$children = prev.children).push.apply(_prev$children, _toConsumableArray(_node2.children));
        } else {
          throw new Error("Cannot apply a \"merge_node\" operation at path [".concat(_path2, "] to nodes of different interfaces: ").concat(Scrubber.stringify(_node2), " ").concat(Scrubber.stringify(prev)));
        }

        _parent.children.splice(_index, 1);

        if (selection) {
          var _iterator3 = _createForOfIteratorHelper$2(Range.points(selection)),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var _step3$value = _slicedToArray(_step3.value, 2),
                  _point2 = _step3$value[0],
                  _key2 = _step3$value[1];

              selection[_key2] = Point.transform(_point2, op);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        }

        break;
      }

    case 'move_node':
      {
        var _path3 = op.path,
            newPath = op.newPath;

        if (Path.isAncestor(_path3, newPath)) {
          throw new Error("Cannot move a path [".concat(_path3, "] to new path [").concat(newPath, "] because the destination is inside itself."));
        }

        var _node3 = Node.get(editor, _path3);

        var _parent2 = Node.parent(editor, _path3);

        var _index2 = _path3[_path3.length - 1]; // This is tricky, but since the `path` and `newPath` both refer to
        // the same snapshot in time, there's a mismatch. After either
        // removing the original position, the second step's path can be out
        // of date. So instead of using the `op.newPath` directly, we
        // transform `op.path` to ascertain what the `newPath` would be after
        // the operation was applied.

        _parent2.children.splice(_index2, 1);

        var truePath = Path.transform(_path3, op);
        var newParent = Node.get(editor, Path.parent(truePath));
        var newIndex = truePath[truePath.length - 1];
        newParent.children.splice(newIndex, 0, _node3);

        if (selection) {
          var _iterator4 = _createForOfIteratorHelper$2(Range.points(selection)),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var _step4$value = _slicedToArray(_step4.value, 2),
                  _point3 = _step4$value[0],
                  _key3 = _step4$value[1];

              selection[_key3] = Point.transform(_point3, op);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }

        break;
      }

    case 'remove_node':
      {
        var _path4 = op.path;
        var _index3 = _path4[_path4.length - 1];

        var _parent3 = Node.parent(editor, _path4);

        _parent3.children.splice(_index3, 1); // Transform all of the points in the value, but if the point was in the
        // node that was removed we need to update the range or remove it.


        if (selection) {
          var _iterator5 = _createForOfIteratorHelper$2(Range.points(selection)),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var _step5$value = _slicedToArray(_step5.value, 2),
                  _point4 = _step5$value[0],
                  _key4 = _step5$value[1];

              var result = Point.transform(_point4, op);

              if (selection != null && result != null) {
                selection[_key4] = result;
              } else {
                var _prev = void 0;

                var next = void 0;

                var _iterator6 = _createForOfIteratorHelper$2(Node.texts(editor)),
                    _step6;

                try {
                  for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                    var _step6$value = _slicedToArray(_step6.value, 2),
                        n = _step6$value[0],
                        p = _step6$value[1];

                    if (Path.compare(p, _path4) === -1) {
                      _prev = [n, p];
                    } else {
                      next = [n, p];
                      break;
                    }
                  }
                } catch (err) {
                  _iterator6.e(err);
                } finally {
                  _iterator6.f();
                }

                var preferNext = false;

                if (_prev && next) {
                  if (Path.equals(next[1], _path4)) {
                    preferNext = !Path.hasPrevious(next[1]);
                  } else {
                    preferNext = Path.common(_prev[1], _path4).length < Path.common(next[1], _path4).length;
                  }
                }

                if (_prev && !preferNext) {
                  _point4.path = _prev[1];
                  _point4.offset = _prev[0].text.length;
                } else if (next) {
                  _point4.path = next[1];
                  _point4.offset = 0;
                } else {
                  selection = null;
                }
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }

        break;
      }

    case 'remove_text':
      {
        var _path5 = op.path,
            _offset = op.offset,
            _text = op.text;
        if (_text.length === 0) break;

        var _node4 = Node.leaf(editor, _path5);

        var _before = _node4.text.slice(0, _offset);

        var _after = _node4.text.slice(_offset + _text.length);

        _node4.text = _before + _after;

        if (selection) {
          var _iterator7 = _createForOfIteratorHelper$2(Range.points(selection)),
              _step7;

          try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              var _step7$value = _slicedToArray(_step7.value, 2),
                  _point5 = _step7$value[0],
                  _key5 = _step7$value[1];

              selection[_key5] = Point.transform(_point5, op);
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
          }
        }

        break;
      }

    case 'set_node':
      {
        var _path6 = op.path,
            properties = op.properties,
            newProperties = op.newProperties;

        if (_path6.length === 0) {
          throw new Error("Cannot set properties on the root node!");
        }

        var _node5 = Node.get(editor, _path6);

        for (var _key6 in newProperties) {
          if (_key6 === 'children' || _key6 === 'text') {
            throw new Error("Cannot set the \"".concat(_key6, "\" property of nodes!"));
          }

          var value = newProperties[_key6];

          if (value == null) {
            delete _node5[_key6];
          } else {
            _node5[_key6] = value;
          }
        } // properties that were previously defined, but are now missing, must be deleted


        for (var _key7 in properties) {
          if (!newProperties.hasOwnProperty(_key7)) {
            delete _node5[_key7];
          }
        }

        break;
      }

    case 'set_selection':
      {
        var _newProperties = op.newProperties;

        if (_newProperties == null) {
          selection = _newProperties;
        } else {
          if (selection == null) {
            if (!Range.isRange(_newProperties)) {
              throw new Error("Cannot apply an incomplete \"set_selection\" operation properties ".concat(Scrubber.stringify(_newProperties), " when there is no current selection."));
            }

            selection = _objectSpread$3({}, _newProperties);
          }

          for (var _key8 in _newProperties) {
            var _value = _newProperties[_key8];

            if (_value == null) {
              if (_key8 === 'anchor' || _key8 === 'focus') {
                throw new Error("Cannot remove the \"".concat(_key8, "\" selection property"));
              }

              delete selection[_key8];
            } else {
              selection[_key8] = _value;
            }
          }
        }

        break;
      }

    case 'split_node':
      {
        var _path7 = op.path,
            position = op.position,
            _properties = op.properties;

        if (_path7.length === 0) {
          throw new Error("Cannot apply a \"split_node\" operation at path [".concat(_path7, "] because the root node cannot be split."));
        }

        var _node6 = Node.get(editor, _path7);

        var _parent4 = Node.parent(editor, _path7);

        var _index4 = _path7[_path7.length - 1];
        var newNode;

        if (Text.isText(_node6)) {
          var _before2 = _node6.text.slice(0, position);

          var _after2 = _node6.text.slice(position);

          _node6.text = _before2;
          newNode = _objectSpread$3(_objectSpread$3({}, _properties), {}, {
            text: _after2
          });
        } else {
          var _before3 = _node6.children.slice(0, position);

          var _after3 = _node6.children.slice(position);

          _node6.children = _before3;
          newNode = _objectSpread$3(_objectSpread$3({}, _properties), {}, {
            children: _after3
          });
        }

        _parent4.children.splice(_index4 + 1, 0, newNode);

        if (selection) {
          var _iterator8 = _createForOfIteratorHelper$2(Range.points(selection)),
              _step8;

          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var _step8$value = _slicedToArray(_step8.value, 2),
                  _point6 = _step8$value[0],
                  _key9 = _step8$value[1];

              selection[_key9] = Point.transform(_point6, op);
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
        }

        break;
      }
  }

  return selection;
}; // eslint-disable-next-line no-redeclare


var GeneralTransforms = {
  /**
   * Transform the editor by an operation.
   */
  transform: function transform(editor, op) {
    editor.children = immer.createDraft(editor.children);
    var selection = editor.selection && immer.createDraft(editor.selection);

    try {
      selection = applyToDraft(editor, selection, op);
    } finally {
      editor.children = immer.finishDraft(editor.children);

      if (selection) {
        editor.selection = immer.isDraft(selection) ? immer.finishDraft(selection) : selection;
      } else {
        editor.selection = null;
      }
    }
  }
};

var _excluded = ["text"],
    _excluded2 = ["children"];

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createForOfIteratorHelper$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var NodeTransforms = {
  /**
   * Insert nodes at a specific location in the Editor.
   */
  insertNodes: function insertNodes(editor, nodes) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Editor.withoutNormalizing(editor, function () {
      var _options$hanging = options.hanging,
          hanging = _options$hanging === void 0 ? false : _options$hanging,
          _options$voids = options.voids,
          voids = _options$voids === void 0 ? false : _options$voids,
          _options$mode = options.mode,
          mode = _options$mode === void 0 ? 'lowest' : _options$mode;
      var at = options.at,
          match = options.match,
          select = options.select;

      if (Node.isNode(nodes)) {
        nodes = [nodes];
      }

      if (nodes.length === 0) {
        return;
      }

      var _nodes = nodes,
          _nodes2 = _slicedToArray(_nodes, 1),
          node = _nodes2[0]; // By default, use the selection as the target location. But if there is
      // no selection, insert at the end of the document since that is such a
      // common use case when inserting from a non-selected state.


      if (!at) {
        if (editor.selection) {
          at = editor.selection;
        } else if (editor.children.length > 0) {
          at = Editor.end(editor, []);
        } else {
          at = [0];
        }

        select = true;
      }

      if (select == null) {
        select = false;
      }

      if (Range.isRange(at)) {
        if (!hanging) {
          at = Editor.unhangRange(editor, at, {
            voids: voids
          });
        }

        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var _Range$edges = Range.edges(at),
              _Range$edges2 = _slicedToArray(_Range$edges, 2),
              end = _Range$edges2[1];

          var pointRef = Editor.pointRef(editor, end);
          Transforms["delete"](editor, {
            at: at
          });
          at = pointRef.unref();
        }
      }

      if (Point.isPoint(at)) {
        if (match == null) {
          if (Text.isText(node)) {
            match = function match(n) {
              return Text.isText(n);
            };
          } else if (editor.isInline(node)) {
            match = function match(n) {
              return Text.isText(n) || Editor.isInline(editor, n);
            };
          } else {
            match = function match(n) {
              return Editor.isBlock(editor, n);
            };
          }
        }

        var _Editor$nodes = Editor.nodes(editor, {
          at: at.path,
          match: match,
          mode: mode,
          voids: voids
        }),
            _Editor$nodes2 = _slicedToArray(_Editor$nodes, 1),
            entry = _Editor$nodes2[0];

        if (entry) {
          var _entry = _slicedToArray(entry, 2),
              _matchPath = _entry[1];

          var pathRef = Editor.pathRef(editor, _matchPath);
          var isAtEnd = Editor.isEnd(editor, at, _matchPath);
          Transforms.splitNodes(editor, {
            at: at,
            match: match,
            mode: mode,
            voids: voids
          });
          var path = pathRef.unref();
          at = isAtEnd ? Path.next(path) : path;
        } else {
          return;
        }
      }

      var parentPath = Path.parent(at);
      var index = at[at.length - 1];

      if (!voids && Editor["void"](editor, {
        at: parentPath
      })) {
        return;
      }

      var _iterator = _createForOfIteratorHelper$1(nodes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var _node = _step.value;

          var _path = parentPath.concat(index);

          index++;
          editor.apply({
            type: 'insert_node',
            path: _path,
            node: _node
          });
          at = Path.next(at);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      at = Path.previous(at);

      if (select) {
        var point = Editor.end(editor, at);

        if (point) {
          Transforms.select(editor, point);
        }
      }
    });
  },

  /**
   * Lift nodes at a specific location upwards in the document tree, splitting
   * their parent in two if necessary.
   */
  liftNodes: function liftNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, function () {
      var _options$at = options.at,
          at = _options$at === void 0 ? editor.selection : _options$at,
          _options$mode2 = options.mode,
          mode = _options$mode2 === void 0 ? 'lowest' : _options$mode2,
          _options$voids2 = options.voids,
          voids = _options$voids2 === void 0 ? false : _options$voids2;
      var match = options.match;

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : function (n) {
          return Editor.isBlock(editor, n);
        };
      }

      if (!at) {
        return;
      }

      var matches = Editor.nodes(editor, {
        at: at,
        match: match,
        mode: mode,
        voids: voids
      });
      var pathRefs = Array.from(matches, function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            p = _ref2[1];

        return Editor.pathRef(editor, p);
      });

      for (var _i = 0, _pathRefs = pathRefs; _i < _pathRefs.length; _i++) {
        var pathRef = _pathRefs[_i];
        var path = pathRef.unref();

        if (path.length < 2) {
          throw new Error("Cannot lift node at a path [".concat(path, "] because it has a depth of less than `2`."));
        }

        var parentNodeEntry = Editor.node(editor, Path.parent(path));

        var _parentNodeEntry = _slicedToArray(parentNodeEntry, 2),
            parent = _parentNodeEntry[0],
            parentPath = _parentNodeEntry[1];

        var index = path[path.length - 1];
        var length = parent.children.length;

        if (length === 1) {
          var toPath = Path.next(parentPath);
          Transforms.moveNodes(editor, {
            at: path,
            to: toPath,
            voids: voids
          });
          Transforms.removeNodes(editor, {
            at: parentPath,
            voids: voids
          });
        } else if (index === 0) {
          Transforms.moveNodes(editor, {
            at: path,
            to: parentPath,
            voids: voids
          });
        } else if (index === length - 1) {
          var _toPath = Path.next(parentPath);

          Transforms.moveNodes(editor, {
            at: path,
            to: _toPath,
            voids: voids
          });
        } else {
          var splitPath = Path.next(path);

          var _toPath2 = Path.next(parentPath);

          Transforms.splitNodes(editor, {
            at: splitPath,
            voids: voids
          });
          Transforms.moveNodes(editor, {
            at: path,
            to: _toPath2,
            voids: voids
          });
        }
      }
    });
  },

  /**
   * Merge a node at a location with the previous node of the same depth,
   * removing any empty containing nodes after the merge if necessary.
   */
  mergeNodes: function mergeNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, function () {
      var match = options.match,
          _options$at2 = options.at,
          at = _options$at2 === void 0 ? editor.selection : _options$at2;
      var _options$hanging2 = options.hanging,
          hanging = _options$hanging2 === void 0 ? false : _options$hanging2,
          _options$voids3 = options.voids,
          voids = _options$voids3 === void 0 ? false : _options$voids3,
          _options$mode3 = options.mode,
          mode = _options$mode3 === void 0 ? 'lowest' : _options$mode3;

      if (!at) {
        return;
      }

      if (match == null) {
        if (Path.isPath(at)) {
          var _Editor$parent = Editor.parent(editor, at),
              _Editor$parent2 = _slicedToArray(_Editor$parent, 1),
              parent = _Editor$parent2[0];

          match = function match(n) {
            return parent.children.includes(n);
          };
        } else {
          match = function match(n) {
            return Editor.isBlock(editor, n);
          };
        }
      }

      if (!hanging && Range.isRange(at)) {
        at = Editor.unhangRange(editor, at, {
          voids: voids
        });
      }

      if (Range.isRange(at)) {
        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var _Range$edges3 = Range.edges(at),
              _Range$edges4 = _slicedToArray(_Range$edges3, 2),
              end = _Range$edges4[1];

          var pointRef = Editor.pointRef(editor, end);
          Transforms["delete"](editor, {
            at: at
          });
          at = pointRef.unref();

          if (options.at == null) {
            Transforms.select(editor, at);
          }
        }
      }

      var _Editor$nodes3 = Editor.nodes(editor, {
        at: at,
        match: match,
        voids: voids,
        mode: mode
      }),
          _Editor$nodes4 = _slicedToArray(_Editor$nodes3, 1),
          current = _Editor$nodes4[0];

      var prev = Editor.previous(editor, {
        at: at,
        match: match,
        voids: voids,
        mode: mode
      });

      if (!current || !prev) {
        return;
      }

      var _current = _slicedToArray(current, 2),
          node = _current[0],
          path = _current[1];

      var _prev = _slicedToArray(prev, 2),
          prevNode = _prev[0],
          prevPath = _prev[1];

      if (path.length === 0 || prevPath.length === 0) {
        return;
      }

      var newPath = Path.next(prevPath);
      var commonPath = Path.common(path, prevPath);
      var isPreviousSibling = Path.isSibling(path, prevPath);
      var levels = Array.from(Editor.levels(editor, {
        at: path
      }), function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
            n = _ref4[0];

        return n;
      }).slice(commonPath.length).slice(0, -1); // Determine if the merge will leave an ancestor of the path empty as a
      // result, in which case we'll want to remove it after merging.

      var emptyAncestor = Editor.above(editor, {
        at: path,
        mode: 'highest',
        match: function match(n) {
          return levels.includes(n) && hasSingleChildNest(editor, n);
        }
      });
      var emptyRef = emptyAncestor && Editor.pathRef(editor, emptyAncestor[1]);
      var properties;
      var position; // Ensure that the nodes are equivalent, and figure out what the position
      // and extra properties of the merge will be.

      if (Text.isText(node) && Text.isText(prevNode)) {
        node.text;
            var rest = _objectWithoutProperties(node, _excluded);

        position = prevNode.text.length;
        properties = rest;
      } else if (Element.isElement(node) && Element.isElement(prevNode)) {
        node.children;
            var _rest = _objectWithoutProperties(node, _excluded2);

        position = prevNode.children.length;
        properties = _rest;
      } else {
        throw new Error("Cannot merge the node at path [".concat(path, "] with the previous sibling because it is not the same kind: ").concat(Scrubber.stringify(node), " ").concat(Scrubber.stringify(prevNode)));
      } // If the node isn't already the next sibling of the previous node, move
      // it so that it is before merging.


      if (!isPreviousSibling) {
        Transforms.moveNodes(editor, {
          at: path,
          to: newPath,
          voids: voids
        });
      } // If there was going to be an empty ancestor of the node that was merged,
      // we remove it from the tree.


      if (emptyRef) {
        Transforms.removeNodes(editor, {
          at: emptyRef.current,
          voids: voids
        });
      } // If the target node that we're merging with is empty, remove it instead
      // of merging the two. This is a common rich text editor behavior to
      // prevent losing formatting when deleting entire nodes when you have a
      // hanging selection.
      // if prevNode is first child in parent,don't remove it.


      if (Element.isElement(prevNode) && Editor.isEmpty(editor, prevNode) || Text.isText(prevNode) && prevNode.text === '' && prevPath[prevPath.length - 1] !== 0) {
        Transforms.removeNodes(editor, {
          at: prevPath,
          voids: voids
        });
      } else {
        editor.apply({
          type: 'merge_node',
          path: newPath,
          position: position,
          properties: properties
        });
      }

      if (emptyRef) {
        emptyRef.unref();
      }
    });
  },

  /**
   * Move the nodes at a location to a new location.
   */
  moveNodes: function moveNodes(editor, options) {
    Editor.withoutNormalizing(editor, function () {
      var to = options.to,
          _options$at3 = options.at,
          at = _options$at3 === void 0 ? editor.selection : _options$at3,
          _options$mode4 = options.mode,
          mode = _options$mode4 === void 0 ? 'lowest' : _options$mode4,
          _options$voids4 = options.voids,
          voids = _options$voids4 === void 0 ? false : _options$voids4;
      var match = options.match;

      if (!at) {
        return;
      }

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : function (n) {
          return Editor.isBlock(editor, n);
        };
      }

      var toRef = Editor.pathRef(editor, to);
      var targets = Editor.nodes(editor, {
        at: at,
        match: match,
        mode: mode,
        voids: voids
      });
      var pathRefs = Array.from(targets, function (_ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            p = _ref6[1];

        return Editor.pathRef(editor, p);
      });

      for (var _i2 = 0, _pathRefs2 = pathRefs; _i2 < _pathRefs2.length; _i2++) {
        var pathRef = _pathRefs2[_i2];
        var path = pathRef.unref();
        var newPath = toRef.current;

        if (path.length !== 0) {
          editor.apply({
            type: 'move_node',
            path: path,
            newPath: newPath
          });
        }

        if (toRef.current && Path.isSibling(newPath, path) && Path.isAfter(newPath, path)) {
          // When performing a sibling move to a later index, the path at the destination is shifted
          // to before the insertion point instead of after. To ensure our group of nodes are inserted
          // in the correct order we increment toRef to account for that
          toRef.current = Path.next(toRef.current);
        }
      }

      toRef.unref();
    });
  },

  /**
   * Remove the nodes at a specific location in the document.
   */
  removeNodes: function removeNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, function () {
      var _options$hanging3 = options.hanging,
          hanging = _options$hanging3 === void 0 ? false : _options$hanging3,
          _options$voids5 = options.voids,
          voids = _options$voids5 === void 0 ? false : _options$voids5,
          _options$mode5 = options.mode,
          mode = _options$mode5 === void 0 ? 'lowest' : _options$mode5;
      var _options$at4 = options.at,
          at = _options$at4 === void 0 ? editor.selection : _options$at4,
          match = options.match;

      if (!at) {
        return;
      }

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : function (n) {
          return Editor.isBlock(editor, n);
        };
      }

      if (!hanging && Range.isRange(at)) {
        at = Editor.unhangRange(editor, at, {
          voids: voids
        });
      }

      var depths = Editor.nodes(editor, {
        at: at,
        match: match,
        mode: mode,
        voids: voids
      });
      var pathRefs = Array.from(depths, function (_ref7) {
        var _ref8 = _slicedToArray(_ref7, 2),
            p = _ref8[1];

        return Editor.pathRef(editor, p);
      });

      for (var _i3 = 0, _pathRefs3 = pathRefs; _i3 < _pathRefs3.length; _i3++) {
        var pathRef = _pathRefs3[_i3];
        var path = pathRef.unref();

        if (path) {
          var _Editor$node = Editor.node(editor, path),
              _Editor$node2 = _slicedToArray(_Editor$node, 1),
              node = _Editor$node2[0];

          editor.apply({
            type: 'remove_node',
            path: path,
            node: node
          });
        }
      }
    });
  },

  /**
   * Set new properties on the nodes at a location.
   */
  setNodes: function setNodes(editor, props) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Editor.withoutNormalizing(editor, function () {
      var match = options.match,
          _options$at5 = options.at,
          at = _options$at5 === void 0 ? editor.selection : _options$at5,
          compare = options.compare,
          merge = options.merge;
      var _options$hanging4 = options.hanging,
          hanging = _options$hanging4 === void 0 ? false : _options$hanging4,
          _options$mode6 = options.mode,
          mode = _options$mode6 === void 0 ? 'lowest' : _options$mode6,
          _options$split = options.split,
          split = _options$split === void 0 ? false : _options$split,
          _options$voids6 = options.voids,
          voids = _options$voids6 === void 0 ? false : _options$voids6;

      if (!at) {
        return;
      }

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : function (n) {
          return Editor.isBlock(editor, n);
        };
      }

      if (!hanging && Range.isRange(at)) {
        at = Editor.unhangRange(editor, at, {
          voids: voids
        });
      }

      if (split && Range.isRange(at)) {
        if (Range.isCollapsed(at) && Editor.leaf(editor, at.anchor)[0].text.length > 0) {
          // If the range is collapsed in a non-empty node and 'split' is true, there's nothing to
          // set that won't get normalized away
          return;
        }

        var rangeRef = Editor.rangeRef(editor, at, {
          affinity: 'inward'
        });

        var _Range$edges5 = Range.edges(at),
            _Range$edges6 = _slicedToArray(_Range$edges5, 2),
            start = _Range$edges6[0],
            end = _Range$edges6[1];

        var splitMode = mode === 'lowest' ? 'lowest' : 'highest';
        var endAtEndOfNode = Editor.isEnd(editor, end, end.path);
        Transforms.splitNodes(editor, {
          at: end,
          match: match,
          mode: splitMode,
          voids: voids,
          always: !endAtEndOfNode
        });
        var startAtStartOfNode = Editor.isStart(editor, start, start.path);
        Transforms.splitNodes(editor, {
          at: start,
          match: match,
          mode: splitMode,
          voids: voids,
          always: !startAtStartOfNode
        });
        at = rangeRef.unref();

        if (options.at == null) {
          Transforms.select(editor, at);
        }
      }

      if (!compare) {
        compare = function compare(prop, nodeProp) {
          return prop !== nodeProp;
        };
      }

      var _iterator2 = _createForOfIteratorHelper$1(Editor.nodes(editor, {
        at: at,
        match: match,
        mode: mode,
        voids: voids
      })),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _step2$value = _slicedToArray(_step2.value, 2),
              node = _step2$value[0],
              path = _step2$value[1];

          var properties = {};
          var newProperties = {}; // You can't set properties on the editor node.

          if (path.length === 0) {
            continue;
          }

          var hasChanges = false;

          for (var k in props) {
            if (k === 'children' || k === 'text') {
              continue;
            }

            if (compare(props[k], node[k])) {
              hasChanges = true; // Omit new properties from the old properties list

              if (node.hasOwnProperty(k)) properties[k] = node[k]; // Omit properties that have been removed from the new properties list

              if (merge) {
                if (props[k] != null) newProperties[k] = merge(node[k], props[k]);
              } else {
                if (props[k] != null) newProperties[k] = props[k];
              }
            }
          }

          if (hasChanges) {
            editor.apply({
              type: 'set_node',
              path: path,
              properties: properties,
              newProperties: newProperties
            });
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    });
  },

  /**
   * Split the nodes at a specific location.
   */
  splitNodes: function splitNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, function () {
      var _options$mode7 = options.mode,
          mode = _options$mode7 === void 0 ? 'lowest' : _options$mode7,
          _options$voids7 = options.voids,
          voids = _options$voids7 === void 0 ? false : _options$voids7;
      var match = options.match,
          _options$at6 = options.at,
          at = _options$at6 === void 0 ? editor.selection : _options$at6,
          _options$height = options.height,
          height = _options$height === void 0 ? 0 : _options$height,
          _options$always = options.always,
          always = _options$always === void 0 ? false : _options$always;

      if (match == null) {
        match = function match(n) {
          return Editor.isBlock(editor, n);
        };
      }

      if (Range.isRange(at)) {
        at = deleteRange(editor, at);
      } // If the target is a path, the default height-skipping and position
      // counters need to account for us potentially splitting at a non-leaf.


      if (Path.isPath(at)) {
        var path = at;
        var point = Editor.point(editor, path);

        var _Editor$parent3 = Editor.parent(editor, path),
            _Editor$parent4 = _slicedToArray(_Editor$parent3, 1),
            parent = _Editor$parent4[0];

        match = function match(n) {
          return n === parent;
        };

        height = point.path.length - path.length + 1;
        at = point;
        always = true;
      }

      if (!at) {
        return;
      }

      var beforeRef = Editor.pointRef(editor, at, {
        affinity: 'backward'
      });
      var afterRef;

      try {
        var _Editor$nodes5 = Editor.nodes(editor, {
          at: at,
          match: match,
          mode: mode,
          voids: voids
        }),
            _Editor$nodes6 = _slicedToArray(_Editor$nodes5, 1),
            highest = _Editor$nodes6[0];

        if (!highest) {
          return;
        }

        var voidMatch = Editor["void"](editor, {
          at: at,
          mode: 'highest'
        });
        var nudge = 0;

        if (!voids && voidMatch) {
          var _voidMatch = _slicedToArray(voidMatch, 2),
              voidNode = _voidMatch[0],
              voidPath = _voidMatch[1];

          if (Element.isElement(voidNode) && editor.isInline(voidNode)) {
            var after = Editor.after(editor, voidPath);

            if (!after) {
              var text = {
                text: ''
              };
              var afterPath = Path.next(voidPath);
              Transforms.insertNodes(editor, text, {
                at: afterPath,
                voids: voids
              });
              after = Editor.point(editor, afterPath);
            }

            at = after;
            always = true;
          }

          var siblingHeight = at.path.length - voidPath.length;
          height = siblingHeight + 1;
          always = true;
        }

        afterRef = Editor.pointRef(editor, at);
        var depth = at.path.length - height;

        var _highest = _slicedToArray(highest, 2),
            highestPath = _highest[1];

        var lowestPath = at.path.slice(0, depth);
        var position = height === 0 ? at.offset : at.path[depth] + nudge;

        var _iterator3 = _createForOfIteratorHelper$1(Editor.levels(editor, {
          at: lowestPath,
          reverse: true,
          voids: voids
        })),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _step3$value = _slicedToArray(_step3.value, 2),
                node = _step3$value[0],
                _path2 = _step3$value[1];

            var split = false;

            if (_path2.length < highestPath.length || _path2.length === 0 || !voids && Editor.isVoid(editor, node)) {
              break;
            }

            var _point2 = beforeRef.current;
            var isEnd = Editor.isEnd(editor, _point2, _path2);

            if (always || !beforeRef || !Editor.isEdge(editor, _point2, _path2)) {
              split = true;
              var properties = Node.extractProps(node);
              editor.apply({
                type: 'split_node',
                path: _path2,
                position: position,
                properties: properties
              });
            }

            position = _path2[_path2.length - 1] + (split || isEnd ? 1 : 0);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }

        if (options.at == null) {
          var _point = afterRef.current || Editor.end(editor, []);

          Transforms.select(editor, _point);
        }
      } finally {
        var _afterRef;

        beforeRef.unref();
        (_afterRef = afterRef) === null || _afterRef === void 0 ? void 0 : _afterRef.unref();
      }
    });
  },

  /**
   * Unset properties on the nodes at a location.
   */
  unsetNodes: function unsetNodes(editor, props) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (!Array.isArray(props)) {
      props = [props];
    }

    var obj = {};

    var _iterator4 = _createForOfIteratorHelper$1(props),
        _step4;

    try {
      for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
        var key = _step4.value;
        obj[key] = null;
      }
    } catch (err) {
      _iterator4.e(err);
    } finally {
      _iterator4.f();
    }

    Transforms.setNodes(editor, obj, options);
  },

  /**
   * Unwrap the nodes at a location from a parent node, splitting the parent if
   * necessary to ensure that only the content in the range is unwrapped.
   */
  unwrapNodes: function unwrapNodes(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, function () {
      var _options$mode8 = options.mode,
          mode = _options$mode8 === void 0 ? 'lowest' : _options$mode8,
          _options$split2 = options.split,
          split = _options$split2 === void 0 ? false : _options$split2,
          _options$voids8 = options.voids,
          voids = _options$voids8 === void 0 ? false : _options$voids8;
      var _options$at7 = options.at,
          at = _options$at7 === void 0 ? editor.selection : _options$at7,
          match = options.match;

      if (!at) {
        return;
      }

      if (match == null) {
        match = Path.isPath(at) ? matchPath(editor, at) : function (n) {
          return Editor.isBlock(editor, n);
        };
      }

      if (Path.isPath(at)) {
        at = Editor.range(editor, at);
      }

      var rangeRef = Range.isRange(at) ? Editor.rangeRef(editor, at) : null;
      var matches = Editor.nodes(editor, {
        at: at,
        match: match,
        mode: mode,
        voids: voids
      });
      var pathRefs = Array.from(matches, function (_ref9) {
        var _ref10 = _slicedToArray(_ref9, 2),
            p = _ref10[1];

        return Editor.pathRef(editor, p);
      } // unwrapNode will call liftNode which does not support splitting the node when nested.
      // If we do not reverse the order and call it from top to the bottom, it will remove all blocks
      // that wrap target node. So we reverse the order.
      ).reverse();

      var _iterator5 = _createForOfIteratorHelper$1(pathRefs),
          _step5;

      try {
        var _loop = function _loop() {
          var pathRef = _step5.value;
          var path = pathRef.unref();

          var _Editor$node3 = Editor.node(editor, path),
              _Editor$node4 = _slicedToArray(_Editor$node3, 1),
              node = _Editor$node4[0];

          var range = Editor.range(editor, path);

          if (split && rangeRef) {
            range = Range.intersection(rangeRef.current, range);
          }

          Transforms.liftNodes(editor, {
            at: range,
            match: function match(n) {
              return Element.isAncestor(node) && node.children.includes(n);
            },
            voids: voids
          });
        };

        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }

      if (rangeRef) {
        rangeRef.unref();
      }
    });
  },

  /**
   * Wrap the nodes at a location in a new container node, splitting the edges
   * of the range first to ensure that only the content in the range is wrapped.
   */
  wrapNodes: function wrapNodes(editor, element) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Editor.withoutNormalizing(editor, function () {
      var _options$mode9 = options.mode,
          mode = _options$mode9 === void 0 ? 'lowest' : _options$mode9,
          _options$split3 = options.split,
          split = _options$split3 === void 0 ? false : _options$split3,
          _options$voids9 = options.voids,
          voids = _options$voids9 === void 0 ? false : _options$voids9;
      var match = options.match,
          _options$at8 = options.at,
          at = _options$at8 === void 0 ? editor.selection : _options$at8;

      if (!at) {
        return;
      }

      if (match == null) {
        if (Path.isPath(at)) {
          match = matchPath(editor, at);
        } else if (editor.isInline(element)) {
          match = function match(n) {
            return Editor.isInline(editor, n) || Text.isText(n);
          };
        } else {
          match = function match(n) {
            return Editor.isBlock(editor, n);
          };
        }
      }

      if (split && Range.isRange(at)) {
        var _Range$edges7 = Range.edges(at),
            _Range$edges8 = _slicedToArray(_Range$edges7, 2),
            start = _Range$edges8[0],
            end = _Range$edges8[1];

        var rangeRef = Editor.rangeRef(editor, at, {
          affinity: 'inward'
        });
        Transforms.splitNodes(editor, {
          at: end,
          match: match,
          voids: voids
        });
        Transforms.splitNodes(editor, {
          at: start,
          match: match,
          voids: voids
        });
        at = rangeRef.unref();

        if (options.at == null) {
          Transforms.select(editor, at);
        }
      }

      var roots = Array.from(Editor.nodes(editor, {
        at: at,
        match: editor.isInline(element) ? function (n) {
          return Editor.isBlock(editor, n);
        } : function (n) {
          return Editor.isEditor(n);
        },
        mode: 'lowest',
        voids: voids
      }));

      for (var _i4 = 0, _roots = roots; _i4 < _roots.length; _i4++) {
        var _roots$_i = _slicedToArray(_roots[_i4], 2),
            rootPath = _roots$_i[1];

        var a = Range.isRange(at) ? Range.intersection(at, Editor.range(editor, rootPath)) : at;

        if (!a) {
          continue;
        }

        var matches = Array.from(Editor.nodes(editor, {
          at: a,
          match: match,
          mode: mode,
          voids: voids
        }));

        if (matches.length > 0) {
          var _ret = function () {
            var _matches = _slicedToArray(matches, 1),
                first = _matches[0];

            var last = matches[matches.length - 1];

            var _first = _slicedToArray(first, 2),
                firstPath = _first[1];

            var _last = _slicedToArray(last, 2),
                lastPath = _last[1];

            if (firstPath.length === 0 && lastPath.length === 0) {
              // if there's no matching parent - usually means the node is an editor - don't do anything
              return "continue";
            }

            var commonPath = Path.equals(firstPath, lastPath) ? Path.parent(firstPath) : Path.common(firstPath, lastPath);
            var range = Editor.range(editor, firstPath, lastPath);
            var commonNodeEntry = Editor.node(editor, commonPath);

            var _commonNodeEntry = _slicedToArray(commonNodeEntry, 1),
                commonNode = _commonNodeEntry[0];

            var depth = commonPath.length + 1;
            var wrapperPath = Path.next(lastPath.slice(0, depth));

            var wrapper = _objectSpread$2(_objectSpread$2({}, element), {}, {
              children: []
            });

            Transforms.insertNodes(editor, wrapper, {
              at: wrapperPath,
              voids: voids
            });
            Transforms.moveNodes(editor, {
              at: range,
              match: function match(n) {
                return Element.isAncestor(commonNode) && commonNode.children.includes(n);
              },
              to: wrapperPath.concat(0),
              voids: voids
            });
          }();

          if (_ret === "continue") continue;
        }
      }
    });
  }
};

var hasSingleChildNest = function hasSingleChildNest(editor, node) {
  if (Element.isElement(node)) {
    var element = node;

    if (Editor.isVoid(editor, node)) {
      return true;
    } else if (element.children.length === 1) {
      return hasSingleChildNest(editor, element.children[0]);
    } else {
      return false;
    }
  } else if (Editor.isEditor(node)) {
    return false;
  } else {
    return true;
  }
};
/**
 * Convert a range into a point by deleting it's content.
 */


var deleteRange = function deleteRange(editor, range) {
  if (Range.isCollapsed(range)) {
    return range.anchor;
  } else {
    var _Range$edges9 = Range.edges(range),
        _Range$edges10 = _slicedToArray(_Range$edges9, 2),
        end = _Range$edges10[1];

    var pointRef = Editor.pointRef(editor, end);
    Transforms["delete"](editor, {
      at: range
    });
    return pointRef.unref();
  }
};

var matchPath = function matchPath(editor, path) {
  var _Editor$node5 = Editor.node(editor, path),
      _Editor$node6 = _slicedToArray(_Editor$node5, 1),
      node = _Editor$node6[0];

  return function (n) {
    return n === node;
  };
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var SelectionTransforms = {
  /**
   * Collapse the selection.
   */
  collapse: function collapse(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _options$edge = options.edge,
        edge = _options$edge === void 0 ? 'anchor' : _options$edge;
    var selection = editor.selection;

    if (!selection) {
      return;
    } else if (edge === 'anchor') {
      Transforms.select(editor, selection.anchor);
    } else if (edge === 'focus') {
      Transforms.select(editor, selection.focus);
    } else if (edge === 'start') {
      var _Range$edges = Range.edges(selection),
          _Range$edges2 = _slicedToArray(_Range$edges, 1),
          start = _Range$edges2[0];

      Transforms.select(editor, start);
    } else if (edge === 'end') {
      var _Range$edges3 = Range.edges(selection),
          _Range$edges4 = _slicedToArray(_Range$edges3, 2),
          end = _Range$edges4[1];

      Transforms.select(editor, end);
    }
  },

  /**
   * Unset the selection.
   */
  deselect: function deselect(editor) {
    var selection = editor.selection;

    if (selection) {
      editor.apply({
        type: 'set_selection',
        properties: selection,
        newProperties: null
      });
    }
  },

  /**
   * Move the selection's point forward or backward.
   */
  move: function move(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var selection = editor.selection;
    var _options$distance = options.distance,
        distance = _options$distance === void 0 ? 1 : _options$distance,
        _options$unit = options.unit,
        unit = _options$unit === void 0 ? 'character' : _options$unit,
        _options$reverse = options.reverse,
        reverse = _options$reverse === void 0 ? false : _options$reverse;
    var _options$edge2 = options.edge,
        edge = _options$edge2 === void 0 ? null : _options$edge2;

    if (!selection) {
      return;
    }

    if (edge === 'start') {
      edge = Range.isBackward(selection) ? 'focus' : 'anchor';
    }

    if (edge === 'end') {
      edge = Range.isBackward(selection) ? 'anchor' : 'focus';
    }

    var anchor = selection.anchor,
        focus = selection.focus;
    var opts = {
      distance: distance,
      unit: unit
    };
    var props = {};

    if (edge == null || edge === 'anchor') {
      var point = reverse ? Editor.before(editor, anchor, opts) : Editor.after(editor, anchor, opts);

      if (point) {
        props.anchor = point;
      }
    }

    if (edge == null || edge === 'focus') {
      var _point = reverse ? Editor.before(editor, focus, opts) : Editor.after(editor, focus, opts);

      if (_point) {
        props.focus = _point;
      }
    }

    Transforms.setSelection(editor, props);
  },

  /**
   * Set the selection to a new value.
   */
  select: function select(editor, target) {
    var selection = editor.selection;
    target = Editor.range(editor, target);

    if (selection) {
      Transforms.setSelection(editor, target);
      return;
    }

    if (!Range.isRange(target)) {
      throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(Scrubber.stringify(target)));
    }

    editor.apply({
      type: 'set_selection',
      properties: selection,
      newProperties: target
    });
  },

  /**
   * Set new properties on one of the selection's points.
   */
  setPoint: function setPoint(editor, props) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var selection = editor.selection;
    var _options$edge3 = options.edge,
        edge = _options$edge3 === void 0 ? 'both' : _options$edge3;

    if (!selection) {
      return;
    }

    if (edge === 'start') {
      edge = Range.isBackward(selection) ? 'focus' : 'anchor';
    }

    if (edge === 'end') {
      edge = Range.isBackward(selection) ? 'anchor' : 'focus';
    }

    var anchor = selection.anchor,
        focus = selection.focus;
    var point = edge === 'anchor' ? anchor : focus;
    Transforms.setSelection(editor, _defineProperty({}, edge === 'anchor' ? 'anchor' : 'focus', _objectSpread$1(_objectSpread$1({}, point), props)));
  },

  /**
   * Set new properties on the selection.
   */
  setSelection: function setSelection(editor, props) {
    var selection = editor.selection;
    var oldProps = {};
    var newProps = {};

    if (!selection) {
      return;
    }

    for (var k in props) {
      if (k === 'anchor' && props.anchor != null && !Point.equals(props.anchor, selection.anchor) || k === 'focus' && props.focus != null && !Point.equals(props.focus, selection.focus) || k !== 'anchor' && k !== 'focus' && props[k] !== selection[k]) {
        oldProps[k] = selection[k];
        newProps[k] = props[k];
      }
    }

    if (Object.keys(oldProps).length > 0) {
      editor.apply({
        type: 'set_selection',
        properties: oldProps,
        newProperties: newProps
      });
    }
  }
};

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var TextTransforms = {
  /**
   * Delete content in the editor.
   */
  "delete": function _delete(editor) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    Editor.withoutNormalizing(editor, function () {
      var _options$reverse = options.reverse,
          reverse = _options$reverse === void 0 ? false : _options$reverse,
          _options$unit = options.unit,
          unit = _options$unit === void 0 ? 'character' : _options$unit,
          _options$distance = options.distance,
          distance = _options$distance === void 0 ? 1 : _options$distance,
          _options$voids = options.voids,
          voids = _options$voids === void 0 ? false : _options$voids;
      var _options$at = options.at,
          at = _options$at === void 0 ? editor.selection : _options$at,
          _options$hanging = options.hanging,
          hanging = _options$hanging === void 0 ? false : _options$hanging;

      if (!at) {
        return;
      }

      var isCollapsed = false;

      if (Range.isRange(at) && Range.isCollapsed(at)) {
        isCollapsed = true;
        at = at.anchor;
      }

      if (Point.isPoint(at)) {
        var furthestVoid = Editor["void"](editor, {
          at: at,
          mode: 'highest'
        });

        if (!voids && furthestVoid) {
          var _furthestVoid = _slicedToArray(furthestVoid, 2),
              voidPath = _furthestVoid[1];

          at = voidPath;
        } else {
          var opts = {
            unit: unit,
            distance: distance
          };
          var target = reverse ? Editor.before(editor, at, opts) || Editor.start(editor, []) : Editor.after(editor, at, opts) || Editor.end(editor, []);
          at = {
            anchor: at,
            focus: target
          };
          hanging = true;
        }
      }

      if (Path.isPath(at)) {
        Transforms.removeNodes(editor, {
          at: at,
          voids: voids
        });
        return;
      }

      if (Range.isCollapsed(at)) {
        return;
      }

      if (!hanging) {
        var _Range$edges = Range.edges(at),
            _Range$edges2 = _slicedToArray(_Range$edges, 2),
            _end = _Range$edges2[1];

        var endOfDoc = Editor.end(editor, []);

        if (!Point.equals(_end, endOfDoc)) {
          at = Editor.unhangRange(editor, at, {
            voids: voids
          });
        }
      }

      var _Range$edges3 = Range.edges(at),
          _Range$edges4 = _slicedToArray(_Range$edges3, 2),
          start = _Range$edges4[0],
          end = _Range$edges4[1];

      var startBlock = Editor.above(editor, {
        match: function match(n) {
          return Editor.isBlock(editor, n);
        },
        at: start,
        voids: voids
      });
      var endBlock = Editor.above(editor, {
        match: function match(n) {
          return Editor.isBlock(editor, n);
        },
        at: end,
        voids: voids
      });
      var isAcrossBlocks = startBlock && endBlock && !Path.equals(startBlock[1], endBlock[1]);
      var isSingleText = Path.equals(start.path, end.path);
      var startVoid = voids ? null : Editor["void"](editor, {
        at: start,
        mode: 'highest'
      });
      var endVoid = voids ? null : Editor["void"](editor, {
        at: end,
        mode: 'highest'
      }); // If the start or end points are inside an inline void, nudge them out.

      if (startVoid) {
        var before = Editor.before(editor, start);

        if (before && startBlock && Path.isAncestor(startBlock[1], before.path)) {
          start = before;
        }
      }

      if (endVoid) {
        var after = Editor.after(editor, end);

        if (after && endBlock && Path.isAncestor(endBlock[1], after.path)) {
          end = after;
        }
      } // Get the highest nodes that are completely inside the range, as well as
      // the start and end nodes.


      var matches = [];
      var lastPath;

      var _iterator = _createForOfIteratorHelper(Editor.nodes(editor, {
        at: at,
        voids: voids
      })),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var entry = _step.value;

          var _entry = _slicedToArray(entry, 2),
              _node2 = _entry[0],
              _path2 = _entry[1];

          if (lastPath && Path.compare(_path2, lastPath) === 0) {
            continue;
          }

          if (!voids && Editor.isVoid(editor, _node2) || !Path.isCommon(_path2, start.path) && !Path.isCommon(_path2, end.path)) {
            matches.push(entry);
            lastPath = _path2;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var pathRefs = Array.from(matches, function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            p = _ref2[1];

        return Editor.pathRef(editor, p);
      });
      var startRef = Editor.pointRef(editor, start);
      var endRef = Editor.pointRef(editor, end);
      var removedText = '';

      if (!isSingleText && !startVoid) {
        var _point = startRef.current;

        var _Editor$leaf = Editor.leaf(editor, _point),
            _Editor$leaf2 = _slicedToArray(_Editor$leaf, 1),
            node = _Editor$leaf2[0];

        var path = _point.path;
        var _start = start,
            offset = _start.offset;
        var text = node.text.slice(offset);

        if (text.length > 0) {
          editor.apply({
            type: 'remove_text',
            path: path,
            offset: offset,
            text: text
          });
          removedText = text;
        }
      }

      pathRefs.reverse().map(function (r) {
        return r.unref();
      }).filter(function (r) {
        return r !== null;
      }).forEach(function (p) {
        return Transforms.removeNodes(editor, {
          at: p,
          voids: voids
        });
      });

      if (!endVoid) {
        var _point2 = endRef.current;

        var _Editor$leaf3 = Editor.leaf(editor, _point2),
            _Editor$leaf4 = _slicedToArray(_Editor$leaf3, 1),
            _node = _Editor$leaf4[0];

        var _path = _point2.path;

        var _offset = isSingleText ? start.offset : 0;

        var _text = _node.text.slice(_offset, end.offset);

        if (_text.length > 0) {
          editor.apply({
            type: 'remove_text',
            path: _path,
            offset: _offset,
            text: _text
          });
          removedText = _text;
        }
      }

      if (!isSingleText && isAcrossBlocks && endRef.current && startRef.current) {
        Transforms.mergeNodes(editor, {
          at: endRef.current,
          hanging: true,
          voids: voids
        });
      } // For Thai script, deleting N character(s) backward should delete
      // N code point(s) instead of an entire grapheme cluster.
      // Therefore, the remaining code points should be inserted back.


      if (isCollapsed && reverse && unit === 'character' && removedText.length > 1 && removedText.match(/[\u0E00-\u0E7F]+/)) {
        Transforms.insertText(editor, removedText.slice(0, removedText.length - distance));
      }

      var startUnref = startRef.unref();
      var endUnref = endRef.unref();
      var point = reverse ? startUnref || endUnref : endUnref || startUnref;

      if (options.at == null && point) {
        Transforms.select(editor, point);
      }
    });
  },

  /**
   * Insert a fragment at a specific location in the editor.
   */
  insertFragment: function insertFragment(editor, fragment) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Editor.withoutNormalizing(editor, function () {
      var _options$hanging2 = options.hanging,
          hanging = _options$hanging2 === void 0 ? false : _options$hanging2,
          _options$voids2 = options.voids,
          voids = _options$voids2 === void 0 ? false : _options$voids2;
      var _options$at2 = options.at,
          at = _options$at2 === void 0 ? editor.selection : _options$at2;

      if (!fragment.length) {
        return;
      }

      if (!at) {
        return;
      } else if (Range.isRange(at)) {
        if (!hanging) {
          at = Editor.unhangRange(editor, at, {
            voids: voids
          });
        }

        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var _Range$edges5 = Range.edges(at),
              _Range$edges6 = _slicedToArray(_Range$edges5, 2),
              end = _Range$edges6[1];

          if (!voids && Editor["void"](editor, {
            at: end
          })) {
            return;
          }

          var pointRef = Editor.pointRef(editor, end);
          Transforms["delete"](editor, {
            at: at
          });
          at = pointRef.unref();
        }
      } else if (Path.isPath(at)) {
        at = Editor.start(editor, at);
      }

      if (!voids && Editor["void"](editor, {
        at: at
      })) {
        return;
      } // If the insert point is at the edge of an inline node, move it outside
      // instead since it will need to be split otherwise.


      var inlineElementMatch = Editor.above(editor, {
        at: at,
        match: function match(n) {
          return Editor.isInline(editor, n);
        },
        mode: 'highest',
        voids: voids
      });

      if (inlineElementMatch) {
        var _inlineElementMatch = _slicedToArray(inlineElementMatch, 2),
            _inlinePath = _inlineElementMatch[1];

        if (Editor.isEnd(editor, at, _inlinePath)) {
          var after = Editor.after(editor, _inlinePath);
          at = after;
        } else if (Editor.isStart(editor, at, _inlinePath)) {
          var before = Editor.before(editor, _inlinePath);
          at = before;
        }
      }

      var blockMatch = Editor.above(editor, {
        match: function match(n) {
          return Editor.isBlock(editor, n);
        },
        at: at,
        voids: voids
      });

      var _blockMatch = _slicedToArray(blockMatch, 2),
          blockPath = _blockMatch[1];

      var isBlockStart = Editor.isStart(editor, at, blockPath);
      var isBlockEnd = Editor.isEnd(editor, at, blockPath);
      var isBlockEmpty = isBlockStart && isBlockEnd;
      var mergeStart = !isBlockStart || isBlockStart && isBlockEnd;
      var mergeEnd = !isBlockEnd;

      var _Node$first = Node.first({
        children: fragment
      }, []),
          _Node$first2 = _slicedToArray(_Node$first, 2),
          firstPath = _Node$first2[1];

      var _Node$last = Node.last({
        children: fragment
      }, []),
          _Node$last2 = _slicedToArray(_Node$last, 2),
          lastPath = _Node$last2[1];

      var matches = [];

      var matcher = function matcher(_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            n = _ref4[0],
            p = _ref4[1];

        var isRoot = p.length === 0;

        if (isRoot) {
          return false;
        }

        if (isBlockEmpty) {
          return true;
        }

        if (mergeStart && Path.isAncestor(p, firstPath) && Element.isElement(n) && !editor.isVoid(n) && !editor.isInline(n)) {
          return false;
        }

        if (mergeEnd && Path.isAncestor(p, lastPath) && Element.isElement(n) && !editor.isVoid(n) && !editor.isInline(n)) {
          return false;
        }

        return true;
      };

      var _iterator2 = _createForOfIteratorHelper(Node.nodes({
        children: fragment
      }, {
        pass: matcher
      })),
          _step2;

      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var entry = _step2.value;

          if (matcher(entry)) {
            matches.push(entry);
          }
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }

      var starts = [];
      var middles = [];
      var ends = [];
      var starting = true;
      var hasBlocks = false;

      for (var _i = 0, _matches = matches; _i < _matches.length; _i++) {
        var _matches$_i = _slicedToArray(_matches[_i], 1),
            node = _matches$_i[0];

        if (Element.isElement(node) && !editor.isInline(node)) {
          starting = false;
          hasBlocks = true;
          middles.push(node);
        } else if (starting) {
          starts.push(node);
        } else {
          ends.push(node);
        }
      }

      var _Editor$nodes = Editor.nodes(editor, {
        at: at,
        match: function match(n) {
          return Text.isText(n) || Editor.isInline(editor, n);
        },
        mode: 'highest',
        voids: voids
      }),
          _Editor$nodes2 = _slicedToArray(_Editor$nodes, 1),
          inlineMatch = _Editor$nodes2[0];

      var _inlineMatch = _slicedToArray(inlineMatch, 2),
          inlinePath = _inlineMatch[1];

      var isInlineStart = Editor.isStart(editor, at, inlinePath);
      var isInlineEnd = Editor.isEnd(editor, at, inlinePath);
      var middleRef = Editor.pathRef(editor, isBlockEnd && !ends.length ? Path.next(blockPath) : blockPath);
      var endRef = Editor.pathRef(editor, isInlineEnd ? Path.next(inlinePath) : inlinePath);
      Transforms.splitNodes(editor, {
        at: at,
        match: function match(n) {
          return hasBlocks ? Editor.isBlock(editor, n) : Text.isText(n) || Editor.isInline(editor, n);
        },
        mode: hasBlocks ? 'lowest' : 'highest',
        always: hasBlocks && (!isBlockStart || starts.length > 0) && (!isBlockEnd || ends.length > 0),
        voids: voids
      });
      var startRef = Editor.pathRef(editor, !isInlineStart || isInlineStart && isInlineEnd ? Path.next(inlinePath) : inlinePath);
      Transforms.insertNodes(editor, starts, {
        at: startRef.current,
        match: function match(n) {
          return Text.isText(n) || Editor.isInline(editor, n);
        },
        mode: 'highest',
        voids: voids
      });

      if (isBlockEmpty && !starts.length && middles.length && !ends.length) {
        Transforms["delete"](editor, {
          at: blockPath,
          voids: voids
        });
      }

      Transforms.insertNodes(editor, middles, {
        at: middleRef.current,
        match: function match(n) {
          return Editor.isBlock(editor, n);
        },
        mode: 'lowest',
        voids: voids
      });
      Transforms.insertNodes(editor, ends, {
        at: endRef.current,
        match: function match(n) {
          return Text.isText(n) || Editor.isInline(editor, n);
        },
        mode: 'highest',
        voids: voids
      });

      if (!options.at) {
        var path;

        if (ends.length > 0 && endRef.current) {
          path = Path.previous(endRef.current);
        } else if (middles.length > 0 && middleRef.current) {
          path = Path.previous(middleRef.current);
        } else if (startRef.current) {
          path = Path.previous(startRef.current);
        }

        if (path) {
          var _end2 = Editor.end(editor, path);

          Transforms.select(editor, _end2);
        }
      }

      startRef.unref();
      middleRef.unref();
      endRef.unref();
    });
  },

  /**
   * Insert a string of text in the Editor.
   */
  insertText: function insertText(editor, text) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    Editor.withoutNormalizing(editor, function () {
      var _options$voids3 = options.voids,
          voids = _options$voids3 === void 0 ? false : _options$voids3;
      var _options$at3 = options.at,
          at = _options$at3 === void 0 ? editor.selection : _options$at3;

      if (!at) {
        return;
      }

      if (Path.isPath(at)) {
        at = Editor.range(editor, at);
      }

      if (Range.isRange(at)) {
        if (Range.isCollapsed(at)) {
          at = at.anchor;
        } else {
          var end = Range.end(at);

          if (!voids && Editor["void"](editor, {
            at: end
          })) {
            return;
          }

          var start = Range.start(at);
          var startRef = Editor.pointRef(editor, start);
          var endRef = Editor.pointRef(editor, end);
          Transforms["delete"](editor, {
            at: at,
            voids: voids
          });
          var startPoint = startRef.unref();
          var endPoint = endRef.unref();
          at = startPoint || endPoint;
          Transforms.setSelection(editor, {
            anchor: at,
            focus: at
          });
        }
      }

      if (!voids && Editor["void"](editor, {
        at: at
      })) {
        return;
      }

      var _at = at,
          path = _at.path,
          offset = _at.offset;
      if (text.length > 0) editor.apply({
        type: 'insert_text',
        path: path,
        offset: offset,
        text: text
      });
    });
  }
};

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }
var Transforms = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, GeneralTransforms), NodeTransforms), SelectionTransforms), TextTransforms);

__webpack_unused_export__ = Editor;
__webpack_unused_export__ = Element;
__webpack_unused_export__ = Location;
__webpack_unused_export__ = Node;
__webpack_unused_export__ = Operation;
__webpack_unused_export__ = Path;
__webpack_unused_export__ = PathRef;
__webpack_unused_export__ = Point;
__webpack_unused_export__ = PointRef;
__webpack_unused_export__ = Range;
__webpack_unused_export__ = RangeRef;
__webpack_unused_export__ = Scrubber;
__webpack_unused_export__ = Span;
exports.xv = Text;
__webpack_unused_export__ = Transforms;
__webpack_unused_export__ = createEditor;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 7784:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ Le)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _utils_match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8118);
/* harmony import */ var _utils_render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1147);
/* harmony import */ var _hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1464);
/* harmony import */ var _hooks_use_id_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6304);
/* harmony import */ var _keyboard_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1550);
/* harmony import */ var _utils_bugs_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5410);
/* harmony import */ var _internal_open_closed_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7844);
/* harmony import */ var _hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(986);
/* harmony import */ var _utils_owner_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1506);
/* harmony import */ var _hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2264);
var J=(l=>(l[l.Open=0]="Open",l[l.Closed=1]="Closed",l))(J||{}),Q=(t=>(t[t.ToggleDisclosure=0]="ToggleDisclosure",t[t.CloseDisclosure=1]="CloseDisclosure",t[t.SetButtonId=2]="SetButtonId",t[t.SetPanelId=3]="SetPanelId",t[t.LinkPanel=4]="LinkPanel",t[t.UnlinkPanel=5]="UnlinkPanel",t))(Q||{});let V={[0]:e=>({...e,disclosureState:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__/* .match */ .E)(e.disclosureState,{[0]:1,[1]:0})}),[1]:e=>e.disclosureState===1?e:{...e,disclosureState:1},[4](e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},[5](e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},[2](e,n){return e.buttonId===n.buttonId?e:{...e,buttonId:n.buttonId}},[3](e,n){return e.panelId===n.panelId?e:{...e,panelId:n.panelId}}},B=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);B.displayName="DisclosureContext";function v(e){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(B);if(n===null){let l=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,v),l}return n}let h=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);h.displayName="DisclosureAPIContext";function K(e){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(h);if(n===null){let l=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(l,K),l}return n}let H=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);H.displayName="DisclosurePanelContext";function X(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(H)}function Y(e,n){return (0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__/* .match */ .E)(n.type,V,e,n)}let Z=react__WEBPACK_IMPORTED_MODULE_0__.Fragment,ee=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__/* .forwardRefWithAs */ .yV)(function(n,l){let{defaultOpen:y=!1,...u}=n,T=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),t=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__/* .useSyncRefs */ .T)(l,(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__/* .optionalRef */ .h)(a=>{T.current=a},n.as===void 0||n.as===react__WEBPACK_IMPORTED_MODULE_0__.Fragment)),o=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),f=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),s=(0,react__WEBPACK_IMPORTED_MODULE_0__.useReducer)(Y,{disclosureState:y?0:1,linkedPanel:!1,buttonRef:f,panelRef:o,buttonId:null,panelId:null}),[{disclosureState:i,buttonId:p},D]=s,d=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__/* .useEvent */ .z)(a=>{D({type:1});let r=(0,_utils_owner_js__WEBPACK_IMPORTED_MODULE_5__/* .getOwnerDocument */ .r)(T);if(!r||!p)return;let c=(()=>a?a instanceof HTMLElement?a:a.current instanceof HTMLElement?a.current:r.getElementById(p):r.getElementById(p))();c==null||c.focus()}),P=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({close:d}),[d]),A=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:i===0,close:d}),[i,d]),S={ref:t};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(B.Provider,{value:s},react__WEBPACK_IMPORTED_MODULE_0__.createElement(h.Provider,{value:P},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_6__/* .OpenClosedProvider */ .up,{value:(0,_utils_match_js__WEBPACK_IMPORTED_MODULE_1__/* .match */ .E)(i,{[0]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_6__/* .State.Open */ .ZM.Open,[1]:_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_6__/* .State.Closed */ .ZM.Closed})},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__/* .render */ .sY)({ourProps:S,theirProps:u,slot:A,defaultTag:Z,name:"Disclosure"}))))}),te="button",ne=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__/* .forwardRefWithAs */ .yV)(function(n,l){let y=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_7__/* .useId */ .M)(),{id:u=`headlessui-disclosure-button-${y}`,...T}=n,[t,o]=v("Disclosure.Button"),f=X(),s=f===null?!1:f===t.panelId,i=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),p=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__/* .useSyncRefs */ .T)(i,l,s?null:t.buttonRef);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{if(!s)return o({type:2,buttonId:u}),()=>{o({type:2,buttonId:null})}},[u,o,s]);let D=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__/* .useEvent */ .z)(r=>{var c;if(s){if(t.disclosureState===1)return;switch(r.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__/* .Keys.Space */ .R.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__/* .Keys.Enter */ .R.Enter:r.preventDefault(),r.stopPropagation(),o({type:0}),(c=t.buttonRef.current)==null||c.focus();break}}else switch(r.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__/* .Keys.Space */ .R.Space:case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__/* .Keys.Enter */ .R.Enter:r.preventDefault(),r.stopPropagation(),o({type:0});break}}),d=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__/* .useEvent */ .z)(r=>{switch(r.key){case _keyboard_js__WEBPACK_IMPORTED_MODULE_8__/* .Keys.Space */ .R.Space:r.preventDefault();break}}),P=(0,_hooks_use_event_js__WEBPACK_IMPORTED_MODULE_4__/* .useEvent */ .z)(r=>{var c;(0,_utils_bugs_js__WEBPACK_IMPORTED_MODULE_9__/* .isDisabledReactIssue7711 */ .P)(r.currentTarget)||n.disabled||(s?(o({type:0}),(c=t.buttonRef.current)==null||c.focus()):o({type:0}))}),A=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:t.disclosureState===0}),[t]),S=(0,_hooks_use_resolve_button_type_js__WEBPACK_IMPORTED_MODULE_10__/* .useResolveButtonType */ .f)(n,i),a=s?{ref:p,type:S,onKeyDown:D,onClick:P}:{ref:p,id:u,type:S,"aria-expanded":n.disabled?void 0:t.disclosureState===0,"aria-controls":t.linkedPanel?t.panelId:void 0,onKeyDown:D,onKeyUp:d,onClick:P};return (0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__/* .render */ .sY)({ourProps:a,theirProps:T,slot:A,defaultTag:te,name:"Disclosure.Button"})}),le="div",re=_utils_render_js__WEBPACK_IMPORTED_MODULE_2__/* .Features.RenderStrategy */ .AN.RenderStrategy|_utils_render_js__WEBPACK_IMPORTED_MODULE_2__/* .Features.Static */ .AN.Static,oe=(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__/* .forwardRefWithAs */ .yV)(function(n,l){let y=(0,_hooks_use_id_js__WEBPACK_IMPORTED_MODULE_7__/* .useId */ .M)(),{id:u=`headlessui-disclosure-panel-${y}`,...T}=n,[t,o]=v("Disclosure.Panel"),{close:f}=K("Disclosure.Panel"),s=(0,_hooks_use_sync_refs_js__WEBPACK_IMPORTED_MODULE_3__/* .useSyncRefs */ .T)(l,t.panelRef,P=>{o({type:P?4:5})});(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>(o({type:3,panelId:u}),()=>{o({type:3,panelId:null})}),[u,o]);let i=(0,_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_6__/* .useOpenClosed */ .oJ)(),p=(()=>i!==null?i===_internal_open_closed_js__WEBPACK_IMPORTED_MODULE_6__/* .State.Open */ .ZM.Open:t.disclosureState===0)(),D=(0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({open:t.disclosureState===0,close:f}),[t,f]),d={ref:s,id:u};return react__WEBPACK_IMPORTED_MODULE_0__.createElement(H.Provider,{value:t.panelId},(0,_utils_render_js__WEBPACK_IMPORTED_MODULE_2__/* .render */ .sY)({ourProps:d,theirProps:T,slot:D,defaultTag:le,features:re,visible:p,name:"Disclosure.Panel"}))}),Le=Object.assign(ee,{Button:ne,Panel:oe});


/***/ }),

/***/ 8737:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function ArrowLongLeftIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z",
    clipRule: "evenodd"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowLongLeftIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 4040:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function ArrowLongRightIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z",
    clipRule: "evenodd"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowLongRightIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 2774:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function MinusCircleIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(MinusCircleIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 8618:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function PlusCircleIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    strokeWidth: 1.5,
    stroke: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PlusCircleIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 2935:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function StarIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    fillRule: "evenodd",
    d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z",
    clipRule: "evenodd"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(StarIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 3143:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function ArrowDownIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowDownIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 8775:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function ArrowLeftIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowLeftIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 3521:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function ArrowRightIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowRightIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 1676:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function ArrowUpIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowUpIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 3322:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function BuildingStorefrontIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(BuildingStorefrontIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 4451:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function CalendarDaysIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CalendarDaysIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 9601:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function CalendarIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CalendarIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 8575:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function ChatBubbleBottomCenterTextIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChatBubbleBottomCenterTextIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 5360:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function CheckIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4.5 12.75l6 6 9-13.5"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CheckIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 1761:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function ChevronDownIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronDownIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 6491:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function ChevronLeftIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15.75 19.5L8.25 12l7.5-7.5"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronLeftIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 8902:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function ChevronRightIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M8.25 4.5l7.5 7.5-7.5 7.5"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronRightIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 381:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function ChevronUpIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M4.5 15.75l7.5-7.5 7.5 7.5"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronUpIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 8864:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function CreditCardIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CreditCardIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 4038:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function DocumentTextIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(DocumentTextIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 9730:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function EnvelopeIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(EnvelopeIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 4599:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function FaceFrownIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(FaceFrownIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 9310:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function FaceSmileIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(FaceSmileIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 7033:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function FireIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(FireIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 5313:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function GlobeAltIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(GlobeAltIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 92:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function HandThumbUpIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(HandThumbUpIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 6688:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function HeartIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(HeartIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 2448:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function LinkIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(LinkIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 691:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function MapPinIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(MapPinIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 7454:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function PhoneIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PhoneIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 2489:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function PlusIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M12 4.5v15m7.5-7.5h-15"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PlusIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 7428:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function StarIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(StarIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 5238:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function UserIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        strokeWidth: 1.5,
        stroke: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        strokeLinecap: "round",
        strokeLinejoin: "round",
        d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(UserIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 5949:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function StarIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        fill: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        fillRule: "evenodd",
        d: "M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z",
        clipRule: "evenodd"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(StarIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ })

};
;