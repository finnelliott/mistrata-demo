exports.id = 29;
exports.ids = [29];
exports.modules = {

/***/ 4432:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _asyncToGenerator;
    }
}));
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _asyncToGenerator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}


/***/ }),

/***/ 7688:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _extends;
    }
}));
function extends_() {
    extends_ = Object.assign || function(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source){
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
    return extends_.apply(this, arguments);
}
function _extends() {
    return extends_.apply(this, arguments);
}


/***/ }),

/***/ 6356:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _interopRequireDefault;
    }
}));
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}


/***/ }),

/***/ 1644:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _interopRequireWildcard;
    }
}));
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interopRequireWildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {};
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}


/***/ }),

/***/ 2495:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
Object.defineProperty(exports, "Z", ({
    enumerable: true,
    get: function() {
        return _objectWithoutPropertiesLoose;
    }
}));
function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


/***/ }),

/***/ 5506:
/***/ ((module) => {

// Exports
module.exports = {
	"style": {"fontFamily":"'__Inter_9c9965', '__Inter_Fallback_9c9965'","fontStyle":"normal"},
	"className": "__className_9c9965"
};


/***/ }),

/***/ 4230:
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
 */ var matchHtmlRegExp = /["'&<>]/;
/**
 * Module exports.
 * @public
 */ module.exports = escapeHtml;
/**
 * Escape special characters in the given string of html.
 *
 * @param  {string} string The string to escape for inserting into HTML
 * @return {string}
 * @public
 */ function escapeHtml(string) {
    var str = "" + string;
    var match = matchHtmlRegExp.exec(str);
    if (!match) {
        return str;
    }
    var escape;
    var html = "";
    var index = 0;
    var lastIndex = 0;
    for(index = match.index; index < str.length; index++){
        switch(str.charCodeAt(index)){
            case 34:
                escape = "&quot;";
                break;
            case 38:
                escape = "&amp;";
                break;
            case 39:
                escape = "&#39;";
                break;
            case 60:
                escape = "&lt;";
                break;
            case 62:
                escape = "&gt;";
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
    return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
}


/***/ }),

/***/ 4353:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createProxy = createProxy;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ // Modified from https://github.com/facebook/react/blob/main/packages/react-server-dom-webpack/src/ReactFlightWebpackNodeRegister.js
const MODULE_REFERENCE = Symbol.for("react.module.reference");
const PROMISE_PROTOTYPE = Promise.prototype;
const proxyHandlers = {
    get: function(target, name, _receiver) {
        switch(name){
            // These names are read by the Flight runtime if you end up using the exports object.
            case "$$typeof":
                // These names are a little too common. We should probably have a way to
                // have the Flight runtime extract the inner target instead.
                return target.$$typeof;
            case "filepath":
                return target.filepath;
            case "name":
                return target.name;
            case "async":
                return target.async;
            // We need to special case this because createElement reads it if we pass this
            // reference.
            case "defaultProps":
                return undefined;
            case "__esModule":
                // Something is conditionally checking which export to use. We'll pretend to be
                // an ESM compat module but then we'll check again on the client.
                target.default = {
                    $$typeof: MODULE_REFERENCE,
                    filepath: target.filepath,
                    // This a placeholder value that tells the client to conditionally use the
                    // whole object or just the default export.
                    name: "",
                    async: target.async
                };
                return true;
            case "then":
                if (!target.async) {
                    // If this module is expected to return a Promise (such as an AsyncModule) then
                    // we should resolve that with a client reference that unwraps the Promise on
                    // the client.
                    const then = function then(resolve, _reject) {
                        const moduleReference = {
                            $$typeof: MODULE_REFERENCE,
                            filepath: target.filepath,
                            name: "*",
                            async: true
                        };
                        return Promise.resolve(resolve(new Proxy(moduleReference, proxyHandlers)));
                    };
                    // If this is not used as a Promise but is treated as a reference to a `.then`
                    // export then we should treat it as a reference to that name.
                    then.$$typeof = MODULE_REFERENCE;
                    then.filepath = target.filepath;
                    // then.name is conveniently already "then" which is the export name we need.
                    // This will break if it's minified though.
                    return then;
                }
                break;
            default:
                break;
        }
        let cachedReference = target[name];
        if (!cachedReference) {
            cachedReference = target[name] = {
                $$typeof: MODULE_REFERENCE,
                filepath: target.filepath,
                name: name,
                async: target.async
            };
        }
        return cachedReference;
    },
    getPrototypeOf (_target) {
        // Pretend to be a Promise in case anyone asks.
        return PROMISE_PROTOTYPE;
    },
    set: function() {
        throw new Error("Cannot assign to a client module from a server module.");
    }
};
function createProxy(moduleId) {
    const moduleReference = {
        $$typeof: MODULE_REFERENCE,
        filepath: moduleId,
        name: "*",
        async: false
    };
    return new Proxy(moduleReference, proxyHandlers);
} //# sourceMappingURL=module-proxy.js.map


/***/ }),

/***/ 2315:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__ */ 
const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("/Users/f/Documents/Code/2022/December/mistrata-demo/node_modules/next/dist/client/components/app-router.js");
 //# sourceMappingURL=app-router.js.map


/***/ }),

/***/ 415:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.bailoutToClientRendering = bailoutToClientRendering;
var _dynamicNoSsr = __webpack_require__(7311);
var _staticGenerationAsyncStorage = __webpack_require__(683);
function bailoutToClientRendering() {
    const staticGenerationStore = _staticGenerationAsyncStorage.staticGenerationAsyncStorage && "getStore" in _staticGenerationAsyncStorage.staticGenerationAsyncStorage ? _staticGenerationAsyncStorage.staticGenerationAsyncStorage == null ? void 0 : _staticGenerationAsyncStorage.staticGenerationAsyncStorage.getStore() : _staticGenerationAsyncStorage.staticGenerationAsyncStorage;
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        (0, _dynamicNoSsr).suspense();
    }
    return false;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bailout-to-client-rendering.js.map


/***/ }),

/***/ 9505:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__ */ 
const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("/Users/f/Documents/Code/2022/December/mistrata-demo/node_modules/next/dist/client/components/error-boundary.js");
 //# sourceMappingURL=error-boundary.js.map


/***/ }),

/***/ 5746:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.DYNAMIC_ERROR_CODE = void 0;
const DYNAMIC_ERROR_CODE = "DYNAMIC_SERVER_USAGE";
exports.DYNAMIC_ERROR_CODE = DYNAMIC_ERROR_CODE;
class DynamicServerError extends Error {
    constructor(type){
        super(`Dynamic server usage: ${type}`);
        this.digest = DYNAMIC_ERROR_CODE;
    }
}
exports.DynamicServerError = DynamicServerError;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map


/***/ }),

/***/ 2333:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__ */ 
const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("/Users/f/Documents/Code/2022/December/mistrata-demo/node_modules/next/dist/client/components/layout-router.js");
 //# sourceMappingURL=layout-router.js.map


/***/ }),

/***/ 9509:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useSearchParams = useSearchParams;
exports.usePathname = usePathname;
Object.defineProperty(exports, "ServerInsertedHTMLContext", ({
    enumerable: true,
    get: function() {
        return _serverInsertedHtml.ServerInsertedHTMLContext;
    }
}));
Object.defineProperty(exports, "useServerInsertedHTML", ({
    enumerable: true,
    get: function() {
        return _serverInsertedHtml.useServerInsertedHTML;
    }
}));
exports.useRouter = useRouter;
exports.useSelectedLayoutSegments = useSelectedLayoutSegments;
exports.useSelectedLayoutSegment = useSelectedLayoutSegment;
Object.defineProperty(exports, "redirect", ({
    enumerable: true,
    get: function() {
        return _redirect.redirect;
    }
}));
Object.defineProperty(exports, "notFound", ({
    enumerable: true,
    get: function() {
        return _notFound.notFound;
    }
}));
var _react = __webpack_require__(5468);
var _appRouterContext = __webpack_require__(4056);
var _hooksClientContext = __webpack_require__(698);
var _bailoutToClientRendering = __webpack_require__(415);
var _serverInsertedHtml = __webpack_require__(5350);
var _redirect = __webpack_require__(4615);
var _notFound = __webpack_require__(3164);
const INTERNAL_URLSEARCHPARAMS_INSTANCE = Symbol("internal for urlsearchparams readonly");
function readonlyURLSearchParamsError() {
    return new Error("ReadonlyURLSearchParams cannot be modified");
}
class ReadonlyURLSearchParams {
    [Symbol.iterator]() {
        return this[INTERNAL_URLSEARCHPARAMS_INSTANCE][Symbol.iterator]();
    }
    append() {
        throw readonlyURLSearchParamsError();
    }
    delete() {
        throw readonlyURLSearchParamsError();
    }
    set() {
        throw readonlyURLSearchParamsError();
    }
    sort() {
        throw readonlyURLSearchParamsError();
    }
    constructor(urlSearchParams){
        // Since `new Headers` uses `this.append()` to fill the headers object ReadonlyHeaders can't extend from Headers directly as it would throw.
        this[INTERNAL_URLSEARCHPARAMS_INSTANCE] = urlSearchParams;
        this.entries = urlSearchParams.entries.bind(urlSearchParams);
        this.forEach = urlSearchParams.forEach.bind(urlSearchParams);
        this.get = urlSearchParams.get.bind(urlSearchParams);
        this.getAll = urlSearchParams.getAll.bind(urlSearchParams);
        this.has = urlSearchParams.has.bind(urlSearchParams);
        this.keys = urlSearchParams.keys.bind(urlSearchParams);
        this.values = urlSearchParams.values.bind(urlSearchParams);
        this.toString = urlSearchParams.toString.bind(urlSearchParams);
    }
}
function useSearchParams() {
    const searchParams = (0, _react).useContext(_hooksClientContext.SearchParamsContext);
    const readonlySearchParams = (0, _react).useMemo(()=>{
        return new ReadonlyURLSearchParams(searchParams || new URLSearchParams());
    }, [
        searchParams
    ]);
    if ((0, _bailoutToClientRendering).bailoutToClientRendering()) {
        // TODO-APP: handle dynamic = 'force-static' here and on the client
        return readonlySearchParams;
    }
    if (!searchParams) {
        throw new Error("invariant expected search params to be mounted");
    }
    return readonlySearchParams;
}
function usePathname() {
    return (0, _react).useContext(_hooksClientContext.PathnameContext);
}
function useRouter() {
    const router = (0, _react).useContext(_appRouterContext.AppRouterContext);
    if (router === null) {
        throw new Error("invariant expected app router to be mounted");
    }
    return router;
}
// TODO-APP: handle parallel routes
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first = true, segmentPath = []) {
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        var _children;
        node = (_children = parallelRoutes.children) != null ? _children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    const segmentValue = Array.isArray(segment) ? segment[1] : segment;
    if (!segmentValue) return segmentPath;
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
function useSelectedLayoutSegments(parallelRouteKey = "children") {
    const { tree  } = (0, _react).useContext(_appRouterContext.LayoutRouterContext);
    return getSelectedLayoutSegmentPath(tree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey = "children") {
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (selectedLayoutSegments.length === 0) {
        return null;
    }
    return selectedLayoutSegments[0];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map


/***/ }),

/***/ 3164:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.notFound = notFound;
exports.NOT_FOUND_ERROR_CODE = void 0;
const NOT_FOUND_ERROR_CODE = "NEXT_NOT_FOUND";
exports.NOT_FOUND_ERROR_CODE = NOT_FOUND_ERROR_CODE;
function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(NOT_FOUND_ERROR_CODE);
    error.digest = NOT_FOUND_ERROR_CODE;
    throw error;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map


/***/ }),

/***/ 4615:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.redirect = redirect;
exports.REDIRECT_ERROR_CODE = void 0;
const REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
exports.REDIRECT_ERROR_CODE = REDIRECT_ERROR_CODE;
function redirect(url) {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(REDIRECT_ERROR_CODE);
    error.digest = REDIRECT_ERROR_CODE + ";" + url;
    throw error;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map


/***/ }),

/***/ 2885:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__ */ 
const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("/Users/f/Documents/Code/2022/December/mistrata-demo/node_modules/next/dist/client/components/render-from-template-context.js");
 //# sourceMappingURL=render-from-template-context.js.map


/***/ }),

/***/ 3269:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.requestAsyncStorage = void 0;
let requestAsyncStorage = {};
exports.requestAsyncStorage = requestAsyncStorage;
// @ts-expect-error we provide this on globalThis in
// the edge and node runtime
if (globalThis.AsyncLocalStorage) {
    exports.requestAsyncStorage = requestAsyncStorage = new globalThis.AsyncLocalStorage();
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-async-storage.js.map


/***/ }),

/***/ 3372:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__ */ 
const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("/Users/f/Documents/Code/2022/December/mistrata-demo/node_modules/next/dist/client/image.js");
 //# sourceMappingURL=image.js.map


/***/ }),

/***/ 6259:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__ */ 
const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("/Users/f/Documents/Code/2022/December/mistrata-demo/node_modules/next/dist/client/link.js");
 //# sourceMappingURL=link.js.map


/***/ }),

/***/ 1393:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react-dom-server-rendering-stub.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var b = {
    usingClientEntryPoint: !1,
    Events: null,
    Dispatcher: {
        current: null
    }
};
function d(a) {
    for(var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)e += "&args[]=" + encodeURIComponent(arguments[c]);
    return "Minified React error #" + a + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = b;
exports.createPortal = function() {
    throw Error(d(448));
};
exports.flushSync = function() {
    throw Error(d(449));
};
exports.preinit = function() {
    var a = b.Dispatcher.current;
    a && a.preinit.apply(this, arguments);
};
exports.preload = function() {
    var a = b.Dispatcher.current;
    a && a.preload.apply(this, arguments);
};
exports.version = "18.3.0-next-3ba7add60-20221201";


/***/ }),

/***/ 3402:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    module.exports = __webpack_require__(1393);
} else {}


/***/ }),

/***/ 8208:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

/******/ (()=>{
    /******/ "use strict";
    /******/ var __webpack_modules__ = {
        /***/ 915: /***/ (__unused_webpack_module, exports, __nccwpck_require__)=>{
            /**
 * @license React
 * react-server-dom-webpack-server.browser.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ if (false) {}
        /***/ },
        /***/ 630: /***/ (__unused_webpack_module, exports, __nccwpck_require__)=>{
            /**
 * @license React
 * react-server-dom-webpack-server.browser.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ea = __nccwpck_require__(522);
            var e = "function" === typeof AsyncLocalStorage, fa = e ? new AsyncLocalStorage : null, m = null, n = 0;
            function p(a, b) {
                if (0 !== b.length) if (512 < b.length) 0 < n && (a.enqueue(new Uint8Array(m.buffer, 0, n)), m = new Uint8Array(512), n = 0), a.enqueue(b);
                else {
                    var d = m.length - n;
                    d < b.length && (0 === d ? a.enqueue(m) : (m.set(b.subarray(0, d), n), a.enqueue(m), b = b.subarray(d)), m = new Uint8Array(512), n = 0);
                    m.set(b, n);
                    n += b.length;
                }
                return !0;
            }
            var q = new TextEncoder;
            function r(a) {
                return q.encode(a);
            }
            function ha(a, b) {
                "function" === typeof a.error ? a.error(b) : a.close();
            }
            var t = JSON.stringify, u = Symbol.for("react.module.reference"), v = Symbol.for("react.element"), ia = Symbol.for("react.fragment"), ja = Symbol.for("react.provider"), ka = Symbol.for("react.server_context"), la = Symbol.for("react.forward_ref"), ma = Symbol.for("react.suspense"), na = Symbol.for("react.suspense_list"), oa = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), pa = Symbol.for("react.default_value"), qa = Symbol.for("react.memo_cache_sentinel");
            function x(a, b, d, c, f, g, h) {
                this.acceptsBooleans = 2 === b || 3 === b || 4 === b;
                this.attributeName = c;
                this.attributeNamespace = f;
                this.mustUseProperty = d;
                this.propertyName = a;
                this.type = b;
                this.sanitizeURL = g;
                this.removeEmptyString = h;
            }
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
                new x(a, 0, !1, a, null, !1, !1);
            });
            [
                [
                    "acceptCharset",
                    "accept-charset"
                ],
                [
                    "className",
                    "class"
                ],
                [
                    "htmlFor",
                    "for"
                ],
                [
                    "httpEquiv",
                    "http-equiv"
                ]
            ].forEach(function(a) {
                new x(a[0], 1, !1, a[1], null, !1, !1);
            });
            [
                "contentEditable",
                "draggable",
                "spellCheck",
                "value"
            ].forEach(function(a) {
                new x(a, 2, !1, a.toLowerCase(), null, !1, !1);
            });
            [
                "autoReverse",
                "externalResourcesRequired",
                "focusable",
                "preserveAlpha"
            ].forEach(function(a) {
                new x(a, 2, !1, a, null, !1, !1);
            });
            "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
                new x(a, 3, !1, a.toLowerCase(), null, !1, !1);
            });
            [
                "checked",
                "multiple",
                "muted",
                "selected"
            ].forEach(function(a) {
                new x(a, 3, !0, a, null, !1, !1);
            });
            [
                "capture",
                "download"
            ].forEach(function(a) {
                new x(a, 4, !1, a, null, !1, !1);
            });
            [
                "cols",
                "rows",
                "size",
                "span"
            ].forEach(function(a) {
                new x(a, 6, !1, a, null, !1, !1);
            });
            [
                "rowSpan",
                "start"
            ].forEach(function(a) {
                new x(a, 5, !1, a.toLowerCase(), null, !1, !1);
            });
            var z = /[\-:]([a-z])/g;
            function A(a) {
                return a[1].toUpperCase();
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
                var b = a.replace(z, A);
                new x(b, 1, !1, a, null, !1, !1);
            });
            "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
                var b = a.replace(z, A);
                new x(b, 1, !1, a, "http://www.w3.org/1999/xlink", !1, !1);
            });
            [
                "xml:base",
                "xml:lang",
                "xml:space"
            ].forEach(function(a) {
                var b = a.replace(z, A);
                new x(b, 1, !1, a, "http://www.w3.org/XML/1998/namespace", !1, !1);
            });
            [
                "tabIndex",
                "crossOrigin"
            ].forEach(function(a) {
                new x(a, 1, !1, a.toLowerCase(), null, !1, !1);
            });
            new x("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
            [
                "src",
                "href",
                "action",
                "formAction"
            ].forEach(function(a) {
                new x(a, 1, !1, a.toLowerCase(), null, !0, !0);
            });
            var B = {
                animationIterationCount: !0,
                aspectRatio: !0,
                borderImageOutset: !0,
                borderImageSlice: !0,
                borderImageWidth: !0,
                boxFlex: !0,
                boxFlexGroup: !0,
                boxOrdinalGroup: !0,
                columnCount: !0,
                columns: !0,
                flex: !0,
                flexGrow: !0,
                flexPositive: !0,
                flexShrink: !0,
                flexNegative: !0,
                flexOrder: !0,
                gridArea: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowSpan: !0,
                gridRowStart: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnSpan: !0,
                gridColumnStart: !0,
                fontWeight: !0,
                lineClamp: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                tabSize: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0,
                fillOpacity: !0,
                floodOpacity: !0,
                stopOpacity: !0,
                strokeDasharray: !0,
                strokeDashoffset: !0,
                strokeMiterlimit: !0,
                strokeOpacity: !0,
                strokeWidth: !0
            }, ra = [
                "Webkit",
                "ms",
                "Moz",
                "O"
            ];
            Object.keys(B).forEach(function(a) {
                ra.forEach(function(b) {
                    b = b + a.charAt(0).toUpperCase() + a.substring(1);
                    B[b] = B[a];
                });
            });
            var sa = Array.isArray;
            r('"></template>');
            r("<script>");
            r("</script>");
            r('<script src="');
            r('<script type="module" src="');
            r('" integrity="');
            r('" async=""></script>');
            r("<!-- -->");
            r(' style="');
            r(":");
            r(";");
            r(" ");
            r('="');
            r('"');
            r('=""');
            r(">");
            r("/>");
            r(' selected=""');
            r("\n");
            r("<!DOCTYPE html>");
            r("</");
            r(">");
            r('<template id="');
            r('"></template>');
            r("<!--$-->");
            r('<!--$?--><template id="');
            r('"></template>');
            r("<!--$!-->");
            r("<!--/$-->");
            r("<template");
            r('"');
            r(' data-dgst="');
            r(' data-msg="');
            r(' data-stck="');
            r("></template>");
            r('<div hidden id="');
            r('">');
            r("</div>");
            r('<svg aria-hidden="true" style="display:none" id="');
            r('">');
            r("</svg>");
            r('<math aria-hidden="true" style="display:none" id="');
            r('">');
            r("</math>");
            r('<table hidden id="');
            r('">');
            r("</table>");
            r('<table hidden><tbody id="');
            r('">');
            r("</tbody></table>");
            r('<table hidden><tr id="');
            r('">');
            r("</tr></table>");
            r('<table hidden><colgroup id="');
            r('">');
            r("</colgroup></table>");
            r('$RS=function(a,b){a=document.getElementById(a);b=document.getElementById(b);for(a.parentNode.removeChild(a);a.firstChild;)b.parentNode.insertBefore(a.firstChild,b);b.parentNode.removeChild(b)};;$RS("');
            r('$RS("');
            r('","');
            r('")</script>');
            r('<template data-rsi="" data-sid="');
            r('" data-pid="');
            r('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};;$RC("');
            r('$RC("');
            r('$RC=function(b,c,e){c=document.getElementById(c);c.parentNode.removeChild(c);var a=document.getElementById(b);if(a){b=a.previousSibling;if(e)b.data="$!",a.setAttribute("data-dgst",e);else{e=b.parentNode;a=b.nextSibling;var f=0;do{if(a&&8===a.nodeType){var d=a.data;if("/$"===d)if(0===f)break;else f--;else"$"!==d&&"$?"!==d&&"$!"!==d||f++}d=a.nextSibling;e.removeChild(a);a=d}while(a);for(;c.firstChild;)e.insertBefore(c.firstChild,a);b.data="$"}b._reactRetry&&b._reactRetry()}};;$RM=new Map;\n$RR=function(p,q,v){function r(l){this.s=l}for(var t=$RC,u=$RM,m=new Map,n=document,g,e,f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;e=f[d++];)m.set(e.dataset.precedence,g=e);e=0;f=[];for(var c,h,b,a;c=v[e++];){var k=0;h=c[k++];if(b=u.get(h))"l"!==b.s&&f.push(b);else{a=n.createElement("link");a.href=h;a.rel="stylesheet";for(a.dataset.precedence=d=c[k++];b=c[k++];)a.setAttribute(b,c[k++]);b=a._p=new Promise(function(l,w){a.onload=l;a.onerror=w});b.then(r.bind(b,\n"l"),r.bind(b,"e"));u.set(h,b);f.push(b);c=m.get(d)||g;c===g&&(g=a);m.set(d,a);c?c.parentNode.insertBefore(a,c.nextSibling):(d=n.head,d.insertBefore(a,d.firstChild))}}Promise.all(f).then(t.bind(null,p,q,""),t.bind(null,p,q,"Resource failed to load"))};;$RR("');
            r('$RM=new Map;\n$RR=function(p,q,v){function r(l){this.s=l}for(var t=$RC,u=$RM,m=new Map,n=document,g,e,f=n.querySelectorAll("link[data-precedence],style[data-precedence]"),d=0;e=f[d++];)m.set(e.dataset.precedence,g=e);e=0;f=[];for(var c,h,b,a;c=v[e++];){var k=0;h=c[k++];if(b=u.get(h))"l"!==b.s&&f.push(b);else{a=n.createElement("link");a.href=h;a.rel="stylesheet";for(a.dataset.precedence=d=c[k++];b=c[k++];)a.setAttribute(b,c[k++]);b=a._p=new Promise(function(l,w){a.onload=l;a.onerror=w});b.then(r.bind(b,\n"l"),r.bind(b,"e"));u.set(h,b);f.push(b);c=m.get(d)||g;c===g&&(g=a);m.set(d,a);c?c.parentNode.insertBefore(a,c.nextSibling):(d=n.head,d.insertBefore(a,d.firstChild))}}Promise.all(f).then(t.bind(null,p,q,""),t.bind(null,p,q,"Resource failed to load"))};;$RR("');
            r('$RR("');
            r('","');
            r('",');
            r('"');
            r(")</script>");
            r('<template data-rci="" data-bid="');
            r('<template data-rri="" data-bid="');
            r('" data-sid="');
            r('" data-sty="');
            r('$RX=function(b,c,d,e){var a=document.getElementById(b);a&&(b=a.previousSibling,b.data="$!",a=a.dataset,c&&(a.dgst=c),d&&(a.msg=d),e&&(a.stck=e),b._reactRetry&&b._reactRetry())};;$RX("');
            r('$RX("');
            r('"');
            r(",");
            r(")</script>");
            r('<template data-rxi="" data-bid="');
            r('" data-dgst="');
            r('" data-msg="');
            r('" data-stck="');
            r('<style data-precedence="');
            r('"></style>');
            r("[");
            r(",[");
            r(",");
            r("]");
            var C = null;
            function D(a, b) {
                if (a !== b) {
                    a.context._currentValue = a.parentValue;
                    a = a.parent;
                    var d = b.parent;
                    if (null === a) {
                        if (null !== d) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
                    } else {
                        if (null === d) throw Error("The stacks must reach the root at the same time. This is a bug in React.");
                        D(a, d);
                        b.context._currentValue = b.value;
                    }
                }
            }
            function ta(a) {
                a.context._currentValue = a.parentValue;
                a = a.parent;
                null !== a && ta(a);
            }
            function ua(a) {
                var b = a.parent;
                null !== b && ua(b);
                a.context._currentValue = a.value;
            }
            function va(a, b) {
                a.context._currentValue = a.parentValue;
                a = a.parent;
                if (null === a) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
                a.depth === b.depth ? D(a, b) : va(a, b);
            }
            function wa(a, b) {
                var d = b.parent;
                if (null === d) throw Error("The depth must equal at least at zero before reaching the root. This is a bug in React.");
                a.depth === d.depth ? D(a, d) : wa(a, d);
                b.context._currentValue = b.value;
            }
            function G(a) {
                var b = C;
                b !== a && (null === b ? ua(a) : null === a ? ta(b) : b.depth === a.depth ? D(b, a) : b.depth > a.depth ? va(b, a) : wa(b, a), C = a);
            }
            function xa(a, b) {
                var d = a._currentValue;
                a._currentValue = b;
                var c = C;
                return C = a = {
                    parent: c,
                    depth: null === c ? 0 : c.depth + 1,
                    context: a,
                    parentValue: d,
                    value: b
                };
            }
            var H = Error("Suspense Exception: This is not a real error! It's an implementation detail of `use` to interrupt the current render. You must either rethrow it immediately, or move the `use` call outside of the `try/catch` block. Capturing without rethrowing will lead to unexpected behavior.\n\nTo handle async errors, wrap your component in an error boundary, or call the promise's `.catch` method and pass the result to `use`");
            function ya() {}
            function za(a, b, d) {
                d = a[d];
                void 0 === d ? a.push(b) : d !== b && (b.then(ya, ya), b = d);
                switch(b.status){
                    case "fulfilled":
                        return b.value;
                    case "rejected":
                        throw b.reason;
                    default:
                        if ("string" !== typeof b.status) switch(a = b, a.status = "pending", a.then(function(a) {
                            if ("pending" === b.status) {
                                var c = b;
                                c.status = "fulfilled";
                                c.value = a;
                            }
                        }, function(a) {
                            if ("pending" === b.status) {
                                var c = b;
                                c.status = "rejected";
                                c.reason = a;
                            }
                        }), b.status){
                            case "fulfilled":
                                return b.value;
                            case "rejected":
                                throw b.reason;
                        }
                        I = b;
                        throw H;
                }
            }
            var I = null;
            function Aa() {
                if (null === I) throw Error("Expected a suspended thenable. This is a bug in React. Please file an issue.");
                var a = I;
                I = null;
                return a;
            }
            var J = null, K = 0, L = null;
            function Ba() {
                var a = L;
                L = null;
                return a;
            }
            function Ca(a) {
                return a._currentValue;
            }
            var Ha = {
                useMemo: function(a) {
                    return a();
                },
                useCallback: function(a) {
                    return a;
                },
                useDebugValue: function() {},
                useDeferredValue: M,
                useTransition: M,
                readContext: Ca,
                useContext: Ca,
                useReducer: M,
                useRef: M,
                useState: M,
                useInsertionEffect: M,
                useLayoutEffect: M,
                useImperativeHandle: M,
                useEffect: M,
                useId: Da,
                useMutableSource: M,
                useSyncExternalStore: M,
                useCacheRefresh: function() {
                    return Fa;
                },
                useMemoCache: function(a) {
                    for(var b = Array(a), d = 0; d < a; d++)b[d] = qa;
                    return b;
                },
                use: Ga
            };
            function M() {
                throw Error("This Hook is not supported in Server Components.");
            }
            function Fa() {
                throw Error("Refreshing the cache is not supported in Server Components.");
            }
            function Da() {
                if (null === J) throw Error("useId can only be used while React is rendering");
                var a = J.identifierCount++;
                return ":" + J.identifierPrefix + "S" + a.toString(32) + ":";
            }
            function Ga(a) {
                if (null !== a && "object" === typeof a) {
                    if ("function" === typeof a.then) {
                        var b = K;
                        K += 1;
                        null === L && (L = []);
                        return za(L, a, b);
                    }
                    if (a.$$typeof === ka) return a._currentValue;
                }
                throw Error("An unsupported type was passed to use(): " + String(a));
            }
            function N() {
                return (new AbortController).signal;
            }
            function Ia() {
                if (O) return O;
                if (e) {
                    var a = fa.getStore();
                    if (a) return a;
                }
                return new Map;
            }
            var Ja = {
                getCacheSignal: function() {
                    var a = Ia(), b = a.get(N);
                    void 0 === b && (b = N(), a.set(N, b));
                    return b;
                },
                getCacheForType: function(a) {
                    var b = Ia(), d = b.get(a);
                    void 0 === d && (d = a(), b.set(a, d));
                    return d;
                }
            }, O = null, P = ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Q = P.ContextRegistry, R = P.ReactCurrentDispatcher, S = P.ReactCurrentCache;
            function Ka(a) {
                console.error(a);
            }
            function La(a, b, d, c, f) {
                if (null !== S.current && S.current !== Ja) throw Error("Currently React only supports one RSC renderer at a time.");
                S.current = Ja;
                var g = new Set, h = [], k = {
                    status: 0,
                    fatalError: null,
                    destination: null,
                    bundlerConfig: b,
                    cache: new Map,
                    nextChunkId: 0,
                    pendingChunks: 0,
                    abortableTasks: g,
                    pingedTasks: h,
                    completedModuleChunks: [],
                    completedJSONChunks: [],
                    completedErrorChunks: [],
                    writtenSymbols: new Map,
                    writtenModules: new Map,
                    writtenProviders: new Map,
                    identifierPrefix: f || "",
                    identifierCount: 1,
                    onError: void 0 === d ? Ka : d,
                    toJSON: function(a, b) {
                        return Ma(k, this, a, b);
                    }
                };
                k.pendingChunks++;
                b = Na(c);
                a = Oa(k, a, b, g);
                h.push(a);
                return k;
            }
            var Pa = {};
            function Qa(a) {
                if ("fulfilled" === a.status) return a.value;
                if ("rejected" === a.status) throw a.reason;
                throw a;
            }
            function Ra(a) {
                switch(a.status){
                    case "fulfilled":
                    case "rejected":
                        break;
                    default:
                        "string" !== typeof a.status && (a.status = "pending", a.then(function(b) {
                            "pending" === a.status && (a.status = "fulfilled", a.value = b);
                        }, function(b) {
                            "pending" === a.status && (a.status = "rejected", a.reason = b);
                        }));
                }
                return {
                    $$typeof: w,
                    _payload: a,
                    _init: Qa
                };
            }
            function T(a, b, d, c, f) {
                if (null !== d && void 0 !== d) throw Error("Refs cannot be used in Server Components, nor passed to Client Components.");
                if ("function" === typeof a) {
                    if (a.$$typeof === u) return [
                        v,
                        a,
                        b,
                        c
                    ];
                    K = 0;
                    L = f;
                    c = a(c);
                    return "object" === typeof c && null !== c && "function" === typeof c.then ? Ra(c) : c;
                }
                if ("string" === typeof a) return [
                    v,
                    a,
                    b,
                    c
                ];
                if ("symbol" === typeof a) return a === ia ? c.children : [
                    v,
                    a,
                    b,
                    c
                ];
                if (null != a && "object" === typeof a) {
                    if (a.$$typeof === u) return [
                        v,
                        a,
                        b,
                        c
                    ];
                    switch(a.$$typeof){
                        case w:
                            var g = a._init;
                            a = g(a._payload);
                            return T(a, b, d, c, f);
                        case la:
                            return b = a.render, K = 0, L = f, b(c, void 0);
                        case oa:
                            return T(a.type, b, d, c, f);
                        case ja:
                            return xa(a._context, c.value), [
                                v,
                                a,
                                b,
                                {
                                    value: c.value,
                                    children: c.children,
                                    __pop: Pa
                                }
                            ];
                    }
                }
                throw Error("Unsupported Server Component type: " + U(a));
            }
            function Oa(a, b, d, c) {
                var f = {
                    id: a.nextChunkId++,
                    status: 0,
                    model: b,
                    context: d,
                    ping: function() {
                        var b = a.pingedTasks;
                        b.push(f);
                        1 === b.length && V(a);
                    },
                    thenableState: null
                };
                c.add(f);
                return f;
            }
            function Sa(a, b, d, c) {
                var f = c.filepath + "#" + c.name + (c.async ? "#async" : ""), g = a.writtenModules, h = g.get(f);
                if (void 0 !== h) return b[0] === v && "1" === d ? "@" + h.toString(16) : "$" + h.toString(16);
                try {
                    var k = a.bundlerConfig[c.filepath][c.name];
                    var l = c.async ? {
                        id: k.id,
                        chunks: k.chunks,
                        name: k.name,
                        async: !0
                    } : k;
                    a.pendingChunks++;
                    var y = a.nextChunkId++, aa = t(l), ba = "M" + y.toString(16) + ":" + aa + "\n";
                    var ca = q.encode(ba);
                    a.completedModuleChunks.push(ca);
                    g.set(f, y);
                    return b[0] === v && "1" === d ? "@" + y.toString(16) : "$" + y.toString(16);
                } catch (da) {
                    return a.pendingChunks++, b = a.nextChunkId++, d = W(a, da), X(a, b, d), "$" + b.toString(16);
                }
            }
            function Ta(a) {
                return Object.prototype.toString.call(a).replace(/^\[object (.*)\]$/, function(a, d) {
                    return d;
                });
            }
            function U(a) {
                switch(typeof a){
                    case "string":
                        return JSON.stringify(10 >= a.length ? a : a.substr(0, 10) + "...");
                    case "object":
                        if (sa(a)) return "[...]";
                        a = Ta(a);
                        return "Object" === a ? "{...}" : a;
                    case "function":
                        return "function";
                    default:
                        return String(a);
                }
            }
            function Y(a) {
                if ("string" === typeof a) return a;
                switch(a){
                    case ma:
                        return "Suspense";
                    case na:
                        return "SuspenseList";
                }
                if ("object" === typeof a) switch(a.$$typeof){
                    case la:
                        return Y(a.render);
                    case oa:
                        return Y(a.type);
                    case w:
                        var b = a._payload;
                        a = a._init;
                        try {
                            return Y(a(b));
                        } catch (d) {}
                }
                return "";
            }
            function Z(a, b) {
                var d = Ta(a);
                if ("Object" !== d && "Array" !== d) return d;
                d = -1;
                var c = 0;
                if (sa(a)) {
                    var f = "[";
                    for(var g = 0; g < a.length; g++){
                        0 < g && (f += ", ");
                        var h = a[g];
                        h = "object" === typeof h && null !== h ? Z(h) : U(h);
                        "" + g === b ? (d = f.length, c = h.length, f += h) : f = 10 > h.length && 40 > f.length + h.length ? f + h : f + "...";
                    }
                    f += "]";
                } else if (a.$$typeof === v) f = "<" + Y(a.type) + "/>";
                else {
                    f = "{";
                    g = Object.keys(a);
                    for(h = 0; h < g.length; h++){
                        0 < h && (f += ", ");
                        var k = g[h], l = JSON.stringify(k);
                        f += ('"' + k + '"' === l ? k : l) + ": ";
                        l = a[k];
                        l = "object" === typeof l && null !== l ? Z(l) : U(l);
                        k === b ? (d = f.length, c = l.length, f += l) : f = 10 > l.length && 40 > f.length + l.length ? f + l : f + "...";
                    }
                    f += "}";
                }
                return void 0 === b ? f : -1 < d && 0 < c ? (a = " ".repeat(d) + "^".repeat(c), "\n  " + f + "\n  " + a) : "\n  " + f;
            }
            function Ma(a, b, d, c) {
                switch(c){
                    case v:
                        return "$";
                }
                for(; "object" === typeof c && null !== c && (c.$$typeof === v || c.$$typeof === w);)try {
                    switch(c.$$typeof){
                        case v:
                            var f = c;
                            c = T(f.type, f.key, f.ref, f.props, null);
                            break;
                        case w:
                            var g = c._init;
                            c = g(c._payload);
                    }
                } catch (h) {
                    d = h === H ? Aa() : h;
                    if ("object" === typeof d && null !== d && "function" === typeof d.then) return a.pendingChunks++, a = Oa(a, c, C, a.abortableTasks), c = a.ping, d.then(c, c), a.thenableState = Ba(), "@" + a.id.toString(16);
                    a.pendingChunks++;
                    c = a.nextChunkId++;
                    d = W(a, d);
                    X(a, c, d);
                    return "@" + c.toString(16);
                }
                if (null === c) return null;
                if ("object" === typeof c) {
                    if (c.$$typeof === u) return Sa(a, b, d, c);
                    if (c.$$typeof === ja) return f = c._context._globalName, b = a.writtenProviders, c = b.get(d), void 0 === c && (a.pendingChunks++, c = a.nextChunkId++, b.set(f, c), d = "P" + c.toString(16) + ":" + f + "\n", d = q.encode(d), a.completedJSONChunks.push(d)), "$" + c.toString(16);
                    if (c === Pa) {
                        a = C;
                        if (null === a) throw Error("Tried to pop a Context at the root of the app. This is a bug in React.");
                        c = a.parentValue;
                        a.context._currentValue = c === pa ? a.context._defaultValue : c;
                        C = a.parent;
                        return;
                    }
                    return c;
                }
                if ("string" === typeof c) return a = "$" === c[0] || "@" === c[0] ? "$" + c : c, a;
                if ("boolean" === typeof c || "number" === typeof c || "undefined" === typeof c) return c;
                if ("function" === typeof c) {
                    if (c.$$typeof === u) return Sa(a, b, d, c);
                    if (/^on[A-Z]/.test(d)) throw Error("Event handlers cannot be passed to Client Component props." + Z(b, d) + "\nIf you need interactivity, consider converting part of this to a Client Component.");
                    throw Error("Functions cannot be passed directly to Client Components because they're not serializable." + Z(b, d));
                }
                if ("symbol" === typeof c) {
                    f = a.writtenSymbols;
                    g = f.get(c);
                    if (void 0 !== g) return "$" + g.toString(16);
                    g = c.description;
                    if (Symbol.for(g) !== c) throw Error("Only global symbols received from Symbol.for(...) can be passed to Client Components. The symbol Symbol.for(" + (c.description + ") cannot be found among global symbols.") + Z(b, d));
                    a.pendingChunks++;
                    d = a.nextChunkId++;
                    b = t(g);
                    b = "S" + d.toString(16) + ":" + b + "\n";
                    b = q.encode(b);
                    a.completedModuleChunks.push(b);
                    f.set(c, d);
                    return "$" + d.toString(16);
                }
                if ("bigint" === typeof c) throw Error("BigInt (" + c + ") is not yet supported in Client Component props." + Z(b, d));
                throw Error("Type " + typeof c + " is not supported in Client Component props." + Z(b, d));
            }
            function W(a, b) {
                a = a.onError;
                b = a(b);
                if (null != b && "string" !== typeof b) throw Error('onError returned something with a type other than "string". onError should return a string and may return null or undefined but must not return anything else. It received something of type "' + typeof b + '" instead');
                return b || "";
            }
            function Ua(a, b) {
                null !== a.destination ? (a.status = 2, ha(a.destination, b)) : (a.status = 1, a.fatalError = b);
            }
            function X(a, b, d) {
                d = {
                    digest: d
                };
                b = "E" + b.toString(16) + ":" + t(d) + "\n";
                b = q.encode(b);
                a.completedErrorChunks.push(b);
            }
            function V(a) {
                var b = R.current, d = O;
                R.current = Ha;
                O = a.cache;
                J = a;
                try {
                    var c = a.pingedTasks;
                    a.pingedTasks = [];
                    for(var f = 0; f < c.length; f++){
                        var g = c[f];
                        var h = a;
                        if (0 === g.status) {
                            G(g.context);
                            try {
                                var k = g.model;
                                if ("object" === typeof k && null !== k && k.$$typeof === v) {
                                    var l = k, y = g.thenableState;
                                    g.model = k;
                                    k = T(l.type, l.key, l.ref, l.props, y);
                                    for(g.thenableState = null; "object" === typeof k && null !== k && k.$$typeof === v;)l = k, g.model = k, k = T(l.type, l.key, l.ref, l.props, null);
                                }
                                var aa = g.id, ba = t(k, h.toJSON), ca = "J" + aa.toString(16) + ":" + ba + "\n";
                                var da = q.encode(ca);
                                h.completedJSONChunks.push(da);
                                h.abortableTasks.delete(g);
                                g.status = 1;
                            } catch (E) {
                                var F = E === H ? Aa() : E;
                                if ("object" === typeof F && null !== F && "function" === typeof F.then) {
                                    var Ea = g.ping;
                                    F.then(Ea, Ea);
                                    g.thenableState = Ba();
                                } else {
                                    h.abortableTasks.delete(g);
                                    g.status = 4;
                                    var Xa = W(h, F);
                                    X(h, g.id, Xa);
                                }
                            }
                        }
                    }
                    null !== a.destination && Va(a, a.destination);
                } catch (E1) {
                    W(a, E1), Ua(a, E1);
                } finally{
                    R.current = b, O = d, J = null;
                }
            }
            function Va(a, b) {
                m = new Uint8Array(512);
                n = 0;
                try {
                    for(var d = a.completedModuleChunks, c = 0; c < d.length; c++)if (a.pendingChunks--, !p(b, d[c])) {
                        a.destination = null;
                        c++;
                        break;
                    }
                    d.splice(0, c);
                    var f = a.completedJSONChunks;
                    for(c = 0; c < f.length; c++)if (a.pendingChunks--, !p(b, f[c])) {
                        a.destination = null;
                        c++;
                        break;
                    }
                    f.splice(0, c);
                    var g = a.completedErrorChunks;
                    for(c = 0; c < g.length; c++)if (a.pendingChunks--, !p(b, g[c])) {
                        a.destination = null;
                        c++;
                        break;
                    }
                    g.splice(0, c);
                } finally{
                    m && 0 < n && (b.enqueue(new Uint8Array(m.buffer, 0, n)), m = null, n = 0);
                }
                0 === a.pendingChunks && b.close();
            }
            function Wa(a, b) {
                try {
                    var d = a.abortableTasks;
                    if (0 < d.size) {
                        var c = W(a, void 0 === b ? Error("The render was aborted by the server without a reason.") : b);
                        a.pendingChunks++;
                        var f = a.nextChunkId++;
                        X(a, f, c);
                        d.forEach(function(b) {
                            b.status = 3;
                            var c = "$" + f.toString(16);
                            b = b.id;
                            c = t(c);
                            c = "J" + b.toString(16) + ":" + c + "\n";
                            c = q.encode(c);
                            a.completedErrorChunks.push(c);
                        });
                        d.clear();
                    }
                    null !== a.destination && Va(a, a.destination);
                } catch (g) {
                    W(a, g), Ua(a, g);
                }
            }
            function Na(a) {
                if (a) {
                    var b = C;
                    G(null);
                    for(var d = 0; d < a.length; d++){
                        var c = a[d], f = c[0];
                        c = c[1];
                        Q[f] || (Q[f] = ea.createServerContext(f, pa));
                        xa(Q[f], c);
                    }
                    a = C;
                    G(b);
                    return a;
                }
                return null;
            }
            exports.renderToReadableStream = function(a, b, d) {
                var c = La(a, b, d ? d.onError : void 0, d ? d.context : void 0, d ? d.identifierPrefix : void 0);
                if (d && d.signal) {
                    var f = d.signal;
                    if (f.aborted) Wa(c, f.reason);
                    else {
                        var g = function() {
                            Wa(c, f.reason);
                            f.removeEventListener("abort", g);
                        };
                        f.addEventListener("abort", g);
                    }
                }
                return new ReadableStream({
                    type: "bytes",
                    start: function() {
                        e ? fa.run(c.cache, V, c) : V(c);
                    },
                    pull: function(a) {
                        if (1 === c.status) c.status = 2, ha(a, c.fatalError);
                        else if (2 !== c.status && null === c.destination) {
                            c.destination = a;
                            try {
                                Va(c, a);
                            } catch (k) {
                                W(c, k), Ua(c, k);
                            }
                        }
                    },
                    cancel: function() {}
                }, {
                    highWaterMark: 0
                });
            };
        /***/ },
        /***/ 793: /***/ (module1, __unused_webpack_exports, __nccwpck_require__)=>{
            if (true) {
                module1.exports = __nccwpck_require__(630);
            } else {}
        /***/ },
        /***/ 522: /***/ (module1)=>{
            module1.exports = __webpack_require__(5468);
        /***/ },
        /***/ 255: /***/ (module1)=>{
            module1.exports = __webpack_require__(3402);
        /***/ }
    };
    /************************************************************************/ /******/ // The module cache
    /******/ var __webpack_module_cache__ = {};
    /******/ /******/ // The require function
    /******/ function __nccwpck_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/ var cachedModule = __webpack_module_cache__[moduleId];
        /******/ if (cachedModule !== undefined) {
            /******/ return cachedModule.exports;
        /******/ }
        /******/ // Create a new module (and put it into the cache)
        /******/ var module1 = __webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/ exports: {}
        };
        /******/ /******/ // Execute the module function
        /******/ var threw = true;
        /******/ try {
            /******/ __webpack_modules__[moduleId](module1, module1.exports, __nccwpck_require__);
            /******/ threw = false;
        /******/ } finally{
            /******/ if (threw) delete __webpack_module_cache__[moduleId];
        /******/ }
        /******/ /******/ // Return the exports of the module
        /******/ return module1.exports;
    /******/ }
    /******/ /************************************************************************/ /******/ /* webpack/runtime/compat */ /******/ /******/ if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = __dirname + "/";
    /******/ /************************************************************************/ /******/ /******/ // startup
    /******/ // Load entry module and return exports
    /******/ // This entry module used 'module' so it can't be inlined
    /******/ var __webpack_exports__ = __nccwpck_require__(793);
    /******/ module.exports = __webpack_exports__;
/******/ /******/ })();


/***/ }),

/***/ 5505:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var f = __webpack_require__(5468), k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m = Object.prototype.hasOwnProperty, n = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function q(c, a, g) {
    var b, d = {}, e = null, h = null;
    void 0 !== g && (e = "" + g);
    void 0 !== a.key && (e = "" + a.key);
    void 0 !== a.ref && (h = a.ref);
    for(b in a)m.call(a, b) && !p.hasOwnProperty(b) && (d[b] = a[b]);
    if (c && c.defaultProps) for(b in a = c.defaultProps, a)void 0 === d[b] && (d[b] = a[b]);
    return {
        $$typeof: k,
        type: c,
        key: e,
        ref: h,
        props: d,
        _owner: n.current
    };
}
exports.Fragment = l;
exports.jsx = q;
exports.jsxs = q;


/***/ }),

/***/ 5045:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/**
 * @license React
 * react.shared-subset.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 
var m = Object.assign, n = {
    current: null
};
function p() {
    return new Map;
}
if ("function" === typeof fetch) {
    var q = fetch, r = function(a, b) {
        var d = n.current;
        if (!d || b && b.signal && b.signal !== d.getCacheSignal()) return q(a, b);
        if ("string" !== typeof a || b) {
            var c = new Request(a, b);
            if ("GET" !== c.method && "HEAD" !== c.method || c.keepalive) return q(a, b);
            var e = JSON.stringify([
                c.method,
                Array.from(c.headers.entries()),
                c.mode,
                c.redirect,
                c.credentials,
                c.referrer,
                c.referrerPolicy,
                c.integrity
            ]);
            c = c.url;
        } else e = '["GET",[],null,"follow",null,null,null,null]', c = a;
        var f = d.getCacheForType(p);
        d = f.get(c);
        if (void 0 === d) a = q(a, b), f.set(c, [
            e,
            a
        ]);
        else {
            c = 0;
            for(f = d.length; c < f; c += 2){
                var g = d[c + 1];
                if (d[c] === e) return a = g, a.then(function(a) {
                    return a.clone();
                });
            }
            a = q(a, b);
            d.push(e, a);
        }
        return a.then(function(a) {
            return a.clone();
        });
    };
    m(r, q);
    try {
        fetch = r;
    } catch (a) {
        try {
            globalThis.fetch = r;
        } catch (b) {
            console.warn("React was unable to patch the fetch() function in this environment. Suspensey APIs might not work correctly as a result.");
        }
    }
}
var t = Symbol.for("react.element"), u = Symbol.for("react.portal"), v = Symbol.for("react.fragment"), w = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), z = Symbol.for("react.server_context"), A = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), C = Symbol.for("react.memo"), aa = Symbol.for("react.lazy"), D = Symbol.for("react.default_value"), E = Symbol.iterator;
function ba(a) {
    if (null === a || "object" !== typeof a) return null;
    a = E && a[E] || a["@@iterator"];
    return "function" === typeof a ? a : null;
}
function F(a) {
    for(var b = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, d = 1; d < arguments.length; d++)b += "&args[]=" + encodeURIComponent(arguments[d]);
    return "Minified React error #" + a + "; visit " + b + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var G = {
    isMounted: function() {
        return !1;
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}, H = {};
function I(a, b, d) {
    this.props = a;
    this.context = b;
    this.refs = H;
    this.updater = d || G;
}
I.prototype.isReactComponent = {};
I.prototype.setState = function(a, b) {
    if ("object" !== typeof a && "function" !== typeof a && null != a) throw Error(F(85));
    this.updater.enqueueSetState(this, a, b, "setState");
};
I.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function J() {}
J.prototype = I.prototype;
function K(a, b, d) {
    this.props = a;
    this.context = b;
    this.refs = H;
    this.updater = d || G;
}
var L = K.prototype = new J;
L.constructor = K;
m(L, I.prototype);
L.isPureReactComponent = !0;
var M = Array.isArray, N = Object.prototype.hasOwnProperty, O = {
    current: null
}, P = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function ca(a, b) {
    return {
        $$typeof: t,
        type: a.type,
        key: b,
        ref: a.ref,
        props: a.props,
        _owner: a._owner
    };
}
function Q(a) {
    return "object" === typeof a && null !== a && a.$$typeof === t;
}
function escape(a) {
    var b = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + a.replace(/[=:]/g, function(a) {
        return b[a];
    });
}
var R = /\/+/g;
function S(a, b) {
    return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b.toString(36);
}
function T(a, b, d, c, e) {
    var f = typeof a;
    if ("undefined" === f || "boolean" === f) a = null;
    var g = !1;
    if (null === a) g = !0;
    else switch(f){
        case "string":
        case "number":
            g = !0;
            break;
        case "object":
            switch(a.$$typeof){
                case t:
                case u:
                    g = !0;
            }
    }
    if (g) return g = a, e = e(g), a = "" === c ? "." + S(g, 0) : c, M(e) ? (d = "", null != a && (d = a.replace(R, "$&/") + "/"), T(e, b, d, "", function(a) {
        return a;
    })) : null != e && (Q(e) && (e = ca(e, d + (!e.key || g && g.key === e.key ? "" : ("" + e.key).replace(R, "$&/") + "/") + a)), b.push(e)), 1;
    g = 0;
    c = "" === c ? "." : c + ":";
    if (M(a)) for(var h = 0; h < a.length; h++){
        f = a[h];
        var k = c + S(f, h);
        g += T(f, b, d, k, e);
    }
    else if (k = ba(a), "function" === typeof k) for(a = k.call(a), h = 0; !(f = a.next()).done;)f = f.value, k = c + S(f, h++), g += T(f, b, d, k, e);
    else if ("object" === f) throw b = String(a), Error(F(31, "[object Object]" === b ? "object with keys {" + Object.keys(a).join(", ") + "}" : b));
    return g;
}
function U(a, b, d) {
    if (null == a) return a;
    var c = [], e = 0;
    T(a, c, "", "", function(a) {
        return b.call(d, a, e++);
    });
    return c;
}
function da(a) {
    if (-1 === a._status) {
        var b = a._result;
        b = b();
        b.then(function(b) {
            if (0 === a._status || -1 === a._status) a._status = 1, a._result = b;
        }, function(b) {
            if (0 === a._status || -1 === a._status) a._status = 2, a._result = b;
        });
        -1 === a._status && (a._status = 0, a._result = b);
    }
    if (1 === a._status) return a._result.default;
    throw a._result;
}
function ea() {
    return new WeakMap;
}
function V() {
    return {
        s: 0,
        v: void 0,
        o: null,
        p: null
    };
}
var W = {
    current: null
}, X = {
    transition: null
}, Y = {
    ReactCurrentDispatcher: W,
    ReactCurrentCache: n,
    ReactCurrentBatchConfig: X,
    ReactCurrentOwner: O,
    ContextRegistry: {}
}, Z = Y.ContextRegistry;
exports.Children = {
    map: U,
    forEach: function(a, b, d) {
        U(a, function() {
            b.apply(this, arguments);
        }, d);
    },
    count: function(a) {
        var b = 0;
        U(a, function() {
            b++;
        });
        return b;
    },
    toArray: function(a) {
        return U(a, function(a) {
            return a;
        }) || [];
    },
    only: function(a) {
        if (!Q(a)) throw Error(F(143));
        return a;
    }
};
exports.Fragment = v;
exports.Profiler = x;
exports.StrictMode = w;
exports.Suspense = B;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Y;
exports.cache = function(a) {
    return function() {
        var b = n.current;
        if (!b) return a.apply(null, arguments);
        var d = b.getCacheForType(ea);
        b = d.get(a);
        void 0 === b && (b = V(), d.set(a, b));
        d = 0;
        for(var c = arguments.length; d < c; d++){
            var e = arguments[d];
            if ("function" === typeof e || "object" === typeof e && null !== e) {
                var f = b.o;
                null === f && (b.o = f = new WeakMap);
                b = f.get(e);
                void 0 === b && (b = V(), f.set(e, b));
            } else f = b.p, null === f && (b.p = f = new Map), b = f.get(e), void 0 === b && (b = V(), f.set(e, b));
        }
        if (1 === b.s) return b.v;
        if (2 === b.s) throw b.v;
        try {
            var g = a.apply(null, arguments);
            d = b;
            d.s = 1;
            return d.v = g;
        } catch (h) {
            throw g = b, g.s = 2, g.v = h, h;
        }
    };
};
exports.cloneElement = function(a, b, d) {
    if (null === a || void 0 === a) throw Error(F(267, a));
    var c = m({}, a.props), e = a.key, f = a.ref, g = a._owner;
    if (null != b) {
        void 0 !== b.ref && (f = b.ref, g = O.current);
        void 0 !== b.key && (e = "" + b.key);
        if (a.type && a.type.defaultProps) var h = a.type.defaultProps;
        for(k in b)N.call(b, k) && !P.hasOwnProperty(k) && (c[k] = void 0 === b[k] && void 0 !== h ? h[k] : b[k]);
    }
    var k = arguments.length - 2;
    if (1 === k) c.children = d;
    else if (1 < k) {
        h = Array(k);
        for(var l = 0; l < k; l++)h[l] = arguments[l + 2];
        c.children = h;
    }
    return {
        $$typeof: t,
        type: a.type,
        key: e,
        ref: f,
        props: c,
        _owner: g
    };
};
exports.createElement = function(a, b, d) {
    var c, e = {}, f = null, g = null;
    if (null != b) for(c in void 0 !== b.ref && (g = b.ref), void 0 !== b.key && (f = "" + b.key), b)N.call(b, c) && !P.hasOwnProperty(c) && (e[c] = b[c]);
    var h = arguments.length - 2;
    if (1 === h) e.children = d;
    else if (1 < h) {
        for(var k = Array(h), l = 0; l < h; l++)k[l] = arguments[l + 2];
        e.children = k;
    }
    if (a && a.defaultProps) for(c in h = a.defaultProps, h)void 0 === e[c] && (e[c] = h[c]);
    return {
        $$typeof: t,
        type: a,
        key: f,
        ref: g,
        props: e,
        _owner: O.current
    };
};
exports.createRef = function() {
    return {
        current: null
    };
};
exports.createServerContext = function(a, b) {
    var d = !0;
    if (!Z[a]) {
        d = !1;
        var c = {
            $$typeof: z,
            _currentValue: b,
            _currentValue2: b,
            _defaultValue: b,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _globalName: a
        };
        c.Provider = {
            $$typeof: y,
            _context: c
        };
        Z[a] = c;
    }
    c = Z[a];
    if (c._defaultValue === D) c._defaultValue = b, c._currentValue === D && (c._currentValue = b), c._currentValue2 === D && (c._currentValue2 = b);
    else if (d) throw Error(F(429, a));
    return c;
};
exports.forwardRef = function(a) {
    return {
        $$typeof: A,
        render: a
    };
};
exports.isValidElement = Q;
exports.lazy = function(a) {
    return {
        $$typeof: aa,
        _payload: {
            _status: -1,
            _result: a
        },
        _init: da
    };
};
exports.memo = function(a, b) {
    return {
        $$typeof: C,
        type: a,
        compare: void 0 === b ? null : b
    };
};
exports.startTransition = function(a) {
    var b = X.transition;
    X.transition = {};
    try {
        a();
    } finally{
        X.transition = b;
    }
};
exports.use = function(a) {
    return W.current.use(a);
};
exports.useCallback = function(a, b) {
    return W.current.useCallback(a, b);
};
exports.useContext = function(a) {
    return W.current.useContext(a);
};
exports.useDebugValue = function() {};
exports.useId = function() {
    return W.current.useId();
};
exports.useMemo = function(a, b) {
    return W.current.useMemo(a, b);
};
exports.version = "18.3.0-next-3ba7add60-20221201";


/***/ }),

/***/ 8499:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    module.exports = __webpack_require__(5505);
} else {}


/***/ }),

/***/ 5468:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (true) {
    module.exports = __webpack_require__(5045);
} else {}


/***/ }),

/***/ 4056:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__ */ 
const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("/Users/f/Documents/Code/2022/December/mistrata-demo/node_modules/next/dist/shared/lib/app-router-context.js");
 //# sourceMappingURL=app-router-context.js.map


/***/ }),

/***/ 7311:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__ */ 
const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("/Users/f/Documents/Code/2022/December/mistrata-demo/node_modules/next/dist/shared/lib/dynamic-no-ssr.js");
 //# sourceMappingURL=dynamic-no-ssr.js.map


/***/ }),

/***/ 698:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__ */ 
const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("/Users/f/Documents/Code/2022/December/mistrata-demo/node_modules/next/dist/shared/lib/hooks-client-context.js");
 //# sourceMappingURL=hooks-client-context.js.map


/***/ }),

/***/ 5350:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__ */ 
const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("/Users/f/Documents/Code/2022/December/mistrata-demo/node_modules/next/dist/shared/lib/server-inserted-html.js");
 //# sourceMappingURL=server-inserted-html.js.map


/***/ }),

/***/ 634:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(3372);


/***/ }),

/***/ 2890:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(6259);


/***/ }),

/***/ 5560:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(9509);


/***/ }),

/***/ 7572:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;

__webpack_unused_export__ = ({
    value: true
});
var isPlainObject = __webpack_require__(3323);
var immer = __webpack_require__(6779);
function unwrapExports(x) {
    return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function createCommonjsModule(fn, module) {
    return module = {
        exports: {}
    }, fn(module, module.exports), module.exports;
}
var arrayLikeToArray = createCommonjsModule(function(module) {
    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for(var i = 0, arr2 = new Array(len); i < len; i++){
            arr2[i] = arr[i];
        }
        return arr2;
    }
    module.exports = _arrayLikeToArray;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports(arrayLikeToArray);
var arrayWithoutHoles = createCommonjsModule(function(module) {
    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) return arrayLikeToArray(arr);
    }
    module.exports = _arrayWithoutHoles;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports(arrayWithoutHoles);
var iterableToArray = createCommonjsModule(function(module) {
    function _iterableToArray(iter) {
        if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
    }
    module.exports = _iterableToArray;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports(iterableToArray);
var unsupportedIterableToArray = createCommonjsModule(function(module) {
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
var nonIterableSpread = createCommonjsModule(function(module) {
    function _nonIterableSpread() {
        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    module.exports = _nonIterableSpread;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports(nonIterableSpread);
var toConsumableArray = createCommonjsModule(function(module) {
    function _toConsumableArray(arr) {
        return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
    }
    module.exports = _toConsumableArray;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
});
var _toConsumableArray = unwrapExports(toConsumableArray);
var defineProperty = createCommonjsModule(function(module) {
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
var arrayWithHoles = createCommonjsModule(function(module) {
    function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
    }
    module.exports = _arrayWithHoles;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports(arrayWithHoles);
var iterableToArrayLimit = createCommonjsModule(function(module) {
    function _iterableToArrayLimit(arr, i) {
        var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
        if (_i == null) return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _s, _e;
        try {
            for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i["return"] != null) _i["return"]();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    module.exports = _iterableToArrayLimit;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports(iterableToArrayLimit);
var nonIterableRest = createCommonjsModule(function(module) {
    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    module.exports = _nonIterableRest;
    module.exports["default"] = module.exports, module.exports.__esModule = true;
});
unwrapExports(nonIterableRest);
var slicedToArray = createCommonjsModule(function(module) {
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
function ownKeys$9(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread$9(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            ownKeys$9(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys$9(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }
    return target;
}
function _createForOfIteratorHelper$7(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray$7(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray$7(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$7(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$7(o, minLen);
}
function _arrayLikeToArray$7(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++){
        arr2[i] = arr[i];
    }
    return arr2;
}
var nextEditorId = 0;
/**
 * Create a new Slate `Editor` object.
 */ var createEditor = function createEditor() {
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
            var _iterator = _createForOfIteratorHelper$7(Editor.pathRefs(editor)), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ref = _step.value;
                    PathRef.transform(ref, op);
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            var _iterator2 = _createForOfIteratorHelper$7(Editor.pointRefs(editor)), _step2;
            try {
                for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
                    var _ref = _step2.value;
                    PointRef.transform(_ref, op);
                }
            } catch (err1) {
                _iterator2.e(err1);
            } finally{
                _iterator2.f();
            }
            var _iterator3 = _createForOfIteratorHelper$7(Editor.rangeRefs(editor)), _step3;
            try {
                for(_iterator3.s(); !(_step3 = _iterator3.n()).done;){
                    var _ref2 = _step3.value;
                    RangeRef.transform(_ref2, op);
                }
            } catch (err2) {
                _iterator3.e(err2);
            } finally{
                _iterator3.f();
            }
            var oldDirtyPaths = DIRTY_PATHS.get(editor) || [];
            var oldDirtyPathKeys = DIRTY_PATH_KEYS.get(editor) || new Set();
            var dirtyPaths;
            var dirtyPathKeys;
            var add = function add(path) {
                if (path) {
                    var key = path.join(",");
                    if (!dirtyPathKeys.has(key)) {
                        dirtyPathKeys.add(key);
                        dirtyPaths.push(path);
                    }
                }
            };
            if (Path.operationCanTransformPath(op)) {
                dirtyPaths = [];
                dirtyPathKeys = new Set();
                var _iterator4 = _createForOfIteratorHelper$7(oldDirtyPaths), _step4;
                try {
                    for(_iterator4.s(); !(_step4 = _iterator4.n()).done;){
                        var path = _step4.value;
                        var newPath = Path.transform(path, op);
                        add(newPath);
                    }
                } catch (err3) {
                    _iterator4.e(err3);
                } finally{
                    _iterator4.f();
                }
            } else {
                dirtyPaths = oldDirtyPaths;
                dirtyPathKeys = oldDirtyPathKeys;
            }
            var newDirtyPaths = editor.getDirtyPaths(op);
            var _iterator5 = _createForOfIteratorHelper$7(newDirtyPaths), _step5;
            try {
                for(_iterator5.s(); !(_step5 = _iterator5.n()).done;){
                    var _path = _step5.value;
                    add(_path);
                }
            } catch (err4) {
                _iterator5.e(err4);
            } finally{
                _iterator5.f();
            }
            DIRTY_PATHS.set(editor, dirtyPaths);
            DIRTY_PATH_KEYS.set(editor, dirtyPathKeys);
            Transforms.transform(editor, op);
            editor.operations.push(op);
            Editor.normalize(editor); // Clear any formats applied to the cursor if the selection changes.
            if (op.type === "set_selection") {
                editor.marks = null;
            }
            if (!FLUSHING.get(editor)) {
                FLUSHING.set(editor, true);
                Promise.resolve().then(function() {
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
                    var _Editor$parent = Editor.parent(editor, path), _Editor$parent2 = _slicedToArray(_Editor$parent, 2), parentNode = _Editor$parent2[0];
                    _Editor$parent2[1];
                    return !editor.isVoid(parentNode) || editor.markableVoid(parentNode);
                };
                var expandedSelection = Range.isExpanded(selection);
                var markAcceptingVoidSelected = false;
                if (!expandedSelection) {
                    var _Editor$node = Editor.node(editor, selection), _Editor$node2 = _slicedToArray(_Editor$node, 2), selectedNode = _Editor$node2[0], selectedPath = _Editor$node2[1];
                    if (selectedNode && match(selectedNode, selectedPath)) {
                        var _Editor$parent3 = Editor.parent(editor, selectedPath), _Editor$parent4 = _slicedToArray(_Editor$parent3, 1), parentNode = _Editor$parent4[0];
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
                    reverse: direction === "backward"
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
            var selection = editor.selection, marks = editor.marks;
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
            var _entry = _slicedToArray(entry, 2), node = _entry[0], path = _entry[1]; // There are no core normalizations for text nodes.
            if (Text.isText(node)) {
                return;
            } // Ensure that block and inline nodes have at least one text child.
            if (Element.isElement(node) && node.children.length === 0) {
                var child = {
                    text: ""
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
            for(var i = 0; i < node.children.length; i++, n++){
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
                                text: ""
                            };
                            Transforms.insertNodes(editor, newChild, {
                                at: path.concat(n),
                                voids: true
                            });
                            n++;
                        } else if (isLast) {
                            var _newChild = {
                                text: ""
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
                        } else if (prev.text === "") {
                            Transforms.removeNodes(editor, {
                                at: path.concat(n - 1),
                                voids: true
                            });
                            n--;
                        } else if (_child.text === "") {
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
                    var _Editor$parent5 = Editor.parent(editor, path), _Editor$parent6 = _slicedToArray(_Editor$parent5, 2), parentNode = _Editor$parent6[0];
                    _Editor$parent6[1];
                    return !editor.isVoid(parentNode) || editor.markableVoid(parentNode);
                };
                var expandedSelection = Range.isExpanded(selection);
                var markAcceptingVoidSelected = false;
                if (!expandedSelection) {
                    var _Editor$node3 = Editor.node(editor, selection), _Editor$node4 = _slicedToArray(_Editor$node3, 2), selectedNode = _Editor$node4[0], selectedPath = _Editor$node4[1];
                    if (selectedNode && match(selectedNode, selectedPath)) {
                        var _Editor$parent7 = Editor.parent(editor, selectedPath), _Editor$parent8 = _slicedToArray(_Editor$parent7, 1), parentNode = _Editor$parent8[0];
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
     */ getDirtyPaths: function getDirtyPaths(op) {
            switch(op.type){
                case "insert_text":
                case "remove_text":
                case "set_node":
                    {
                        var path = op.path;
                        return Path.levels(path);
                    }
                case "insert_node":
                    {
                        var node = op.node, _path2 = op.path;
                        var levels = Path.levels(_path2);
                        var descendants = Text.isText(node) ? [] : Array.from(Node.nodes(node), function(_ref3) {
                            var _ref4 = _slicedToArray(_ref3, 2), p = _ref4[1];
                            return _path2.concat(p);
                        });
                        return [].concat(_toConsumableArray(levels), _toConsumableArray(descendants));
                    }
                case "merge_node":
                    {
                        var _path3 = op.path;
                        var ancestors = Path.ancestors(_path3);
                        var previousPath = Path.previous(_path3);
                        return [].concat(_toConsumableArray(ancestors), [
                            previousPath
                        ]);
                    }
                case "move_node":
                    {
                        var _path4 = op.path, newPath = op.newPath;
                        if (Path.equals(_path4, newPath)) {
                            return [];
                        }
                        var oldAncestors = [];
                        var newAncestors = [];
                        var _iterator6 = _createForOfIteratorHelper$7(Path.ancestors(_path4)), _step6;
                        try {
                            for(_iterator6.s(); !(_step6 = _iterator6.n()).done;){
                                var ancestor = _step6.value;
                                var p = Path.transform(ancestor, op);
                                oldAncestors.push(p);
                            }
                        } catch (err) {
                            _iterator6.e(err);
                        } finally{
                            _iterator6.f();
                        }
                        var _iterator7 = _createForOfIteratorHelper$7(Path.ancestors(newPath)), _step7;
                        try {
                            for(_iterator7.s(); !(_step7 = _iterator7.n()).done;){
                                var _ancestor = _step7.value;
                                var _p = Path.transform(_ancestor, op);
                                newAncestors.push(_p);
                            }
                        } catch (err1) {
                            _iterator7.e(err1);
                        } finally{
                            _iterator7.f();
                        }
                        var newParent = newAncestors[newAncestors.length - 1];
                        var newIndex = newPath[newPath.length - 1];
                        var resultPath = newParent.concat(newIndex);
                        return [].concat(oldAncestors, newAncestors, [
                            resultPath
                        ]);
                    }
                case "remove_node":
                    {
                        var _path5 = op.path;
                        var _ancestors = Path.ancestors(_path5);
                        return _toConsumableArray(_ancestors);
                    }
                case "split_node":
                    {
                        var _path6 = op.path;
                        var _levels = Path.levels(_path6);
                        var nextPath = Path.next(_path6);
                        return [].concat(_toConsumableArray(_levels), [
                            nextPath
                        ]);
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
var objectWithoutPropertiesLoose = createCommonjsModule(function(module) {
    function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for(i = 0; i < sourceKeys.length; i++){
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
var objectWithoutProperties = createCommonjsModule(function(module) {
    function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        var target = objectWithoutPropertiesLoose(source, excluded);
        var key, i;
        if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
            for(i = 0; i < sourceSymbolKeys.length; i++){
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
function _createForOfIteratorHelper$6(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray$6(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray$6(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$6(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$6(o, minLen);
}
function _arrayLikeToArray$6(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++){
        arr2[i] = arr[i];
    }
    return arr2;
}
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
 */ var getCharacterDistance = function getCharacterDistance(str) {
    var isRTL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var isLTR = !isRTL;
    var codepoints = isRTL ? codepointsIteratorRTL(str) : str;
    var left = CodepointType.None;
    var right = CodepointType.None;
    var distance = 0; // Evaluation of these conditions are deferred.
    var gb11 = null; // Is GB11 applicable?
    var gb12Or13 = null; // Is GB12 or GB13 applicable?
    var _iterator = _createForOfIteratorHelper$6(codepoints), _step;
    try {
        for(_iterator.s(); !(_step = _iterator.n()).done;){
            var _char = _step.value;
            var code = _char.codePointAt(0);
            if (!code) break;
            var type = getCodepointType(_char, code);
            var _ref = isLTR ? [
                right,
                type
            ] : [
                type,
                left
            ];
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
    } finally{
        _iterator.f();
    }
    return distance || 1;
};
var SPACE = /\s/;
var PUNCTUATION = /[\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/;
var CHAMELEON = /['\u2018\u2019]/;
/**
 * Get the distance to the end of the first word in a string of text.
 */ var getWordDistance = function getWordDistance(text) {
    var isRTL = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var dist = 0;
    var started = false;
    while(text.length > 0){
        var charDist = getCharacterDistance(text, isRTL);
        var _splitByCharacterDist = splitByCharacterDistance(text, charDist, isRTL), _splitByCharacterDist2 = _slicedToArray(_splitByCharacterDist, 2), _char2 = _splitByCharacterDist2[0], remaining = _splitByCharacterDist2[1];
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
 */ var splitByCharacterDistance = function splitByCharacterDistance(str, dist, isRTL) {
    if (isRTL) {
        var at = str.length - dist;
        return [
            str.slice(at, str.length),
            str.slice(0, at)
        ];
    }
    return [
        str.slice(0, dist),
        str.slice(dist)
    ];
};
/**
 * Check if a character is a word character. The `remaining` argument is used
 * because sometimes you must read subsequent characters to truly determine it.
 */ var isWordCharacter = function isWordCharacter(_char3, remaining) {
    var isRTL = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    if (SPACE.test(_char3)) {
        return false;
    } // Chameleons count as word characters as long as they're in a word, so
    // recurse to see if the next one is a word character or not.
    if (CHAMELEON.test(_char3)) {
        var charDist = getCharacterDistance(remaining, isRTL);
        var _splitByCharacterDist3 = splitByCharacterDistance(remaining, charDist, isRTL), _splitByCharacterDist4 = _slicedToArray(_splitByCharacterDist3, 2), nextChar = _splitByCharacterDist4[0], nextRemaining = _splitByCharacterDist4[1];
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
 */ var codepointsIteratorRTL = function* codepointsIteratorRTL(str) {
    var end = str.length - 1;
    for(var i = 0; i < str.length; i++){
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
 */ var isHighSurrogate = function isHighSurrogate(charCode) {
    return charCode >= 0xd800 && charCode <= 0xdbff;
};
/**
 * Is `charCode` a low surrogate.
 *
 * https://en.wikipedia.org/wiki/Universal_Character_Set_characters#Surrogates
 */ var isLowSurrogate = function isLowSurrogate(charCode) {
    return charCode >= 0xdc00 && charCode <= 0xdfff;
};
var CodepointType;
(function(CodepointType) {
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
var NonBoundaryPairs = [
    [
        CodepointType.L,
        CodepointType.L | CodepointType.V | CodepointType.LV | CodepointType.LVT
    ],
    [
        CodepointType.LV | CodepointType.V,
        CodepointType.V | CodepointType.T
    ],
    [
        CodepointType.LVT | CodepointType.T,
        CodepointType.T
    ],
    [
        CodepointType.Any,
        CodepointType.Extend | CodepointType.ZWJ
    ],
    [
        CodepointType.Any,
        CodepointType.SpacingMark
    ],
    [
        CodepointType.Prepend,
        CodepointType.Any
    ],
    [
        CodepointType.ZWJ,
        CodepointType.ExtPict
    ],
    [
        CodepointType.RI,
        CodepointType.RI
    ]
];
function isBoundaryPair(left, right) {
    return NonBoundaryPairs.findIndex(function(r) {
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
 */ var isElement = function isElement(value) {
    return isPlainObject.isPlainObject(value) && Node.isNodeList(value.children) && !Editor.isEditor(value);
}; // eslint-disable-next-line no-redeclare
var Element = {
    /**
   * Check if a value implements the 'Ancestor' interface.
   */ isAncestor: function isAncestor(value) {
        return isPlainObject.isPlainObject(value) && Node.isNodeList(value.children);
    },
    /**
   * Check if a value implements the `Element` interface.
   */ isElement: isElement,
    /**
   * Check if a value is an array of `Element` objects.
   */ isElementList: function isElementList(value) {
        return Array.isArray(value) && value.every(function(val) {
            return Element.isElement(val);
        });
    },
    /**
   * Check if a set of props is a partial of Element.
   */ isElementProps: function isElementProps(props) {
        return props.children !== undefined;
    },
    /**
   * Check if a value implements the `Element` interface and has elementKey with selected value.
   * Default it check to `type` key value
   */ isElementType: function isElementType(value, elementVal) {
        var elementKey = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "type";
        return isElement(value) && value[elementKey] === elementVal;
    },
    /**
   * Check if an element matches set of properties.
   *
   * Note: this checks custom properties, and it does not ensure that any
   * children are equivalent.
   */ matches: function matches(element, props) {
        for(var key in props){
            if (key === "children") {
                continue;
            }
            if (element[key] !== props[key]) {
                return false;
            }
        }
        return true;
    }
};
var _excluded$4 = [
    "text"
], _excluded2$3 = [
    "text"
];
function ownKeys$8(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread$8(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            ownKeys$8(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys$8(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }
    return target;
}
function _createForOfIteratorHelper$5(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray$5(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray$5(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$5(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$5(o, minLen);
}
function _arrayLikeToArray$5(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++){
        arr2[i] = arr[i];
    }
    return arr2;
}
var IS_EDITOR_CACHE = new WeakMap(); // eslint-disable-next-line no-redeclare
var Editor = {
    /**
   * Get the ancestor above a location in the document.
   */ above: function above(editor) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _options$voids = options.voids, voids = _options$voids === void 0 ? false : _options$voids, _options$mode = options.mode, mode = _options$mode === void 0 ? "lowest" : _options$mode, _options$at = options.at, at = _options$at === void 0 ? editor.selection : _options$at, match = options.match;
        if (!at) {
            return;
        }
        var path = Editor.path(editor, at);
        var reverse = mode === "lowest";
        var _iterator = _createForOfIteratorHelper$5(Editor.levels(editor, {
            at: path,
            voids: voids,
            match: match,
            reverse: reverse
        })), _step;
        try {
            for(_iterator.s(); !(_step = _iterator.n()).done;){
                var _step$value = _slicedToArray(_step.value, 2), n = _step$value[0], p = _step$value[1];
                if (Text.isText(n)) return;
                if (Range.isRange(at)) {
                    if (Path.isAncestor(p, at.anchor.path) && Path.isAncestor(p, at.focus.path)) {
                        return [
                            n,
                            p
                        ];
                    }
                } else {
                    if (!Path.equals(path, p)) {
                        return [
                            n,
                            p
                        ];
                    }
                }
            }
        } catch (err) {
            _iterator.e(err);
        } finally{
            _iterator.f();
        }
    },
    /**
   * Add a custom property to the leaf text nodes in the current selection.
   *
   * If the selection is currently collapsed, the marks will be added to the
   * `editor.marks` property instead, and applied when text is inserted next.
   */ addMark: function addMark(editor, key, value) {
        editor.addMark(key, value);
    },
    /**
   * Get the point after a location.
   */ after: function after(editor, at) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var anchor = Editor.point(editor, at, {
            edge: "end"
        });
        var focus = Editor.end(editor, []);
        var range = {
            anchor: anchor,
            focus: focus
        };
        var _options$distance = options.distance, distance = _options$distance === void 0 ? 1 : _options$distance;
        var d = 0;
        var target;
        var _iterator2 = _createForOfIteratorHelper$5(Editor.positions(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
            at: range
        }))), _step2;
        try {
            for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
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
        } finally{
            _iterator2.f();
        }
        return target;
    },
    /**
   * Get the point before a location.
   */ before: function before(editor, at) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var anchor = Editor.start(editor, []);
        var focus = Editor.point(editor, at, {
            edge: "start"
        });
        var range = {
            anchor: anchor,
            focus: focus
        };
        var _options$distance2 = options.distance, distance = _options$distance2 === void 0 ? 1 : _options$distance2;
        var d = 0;
        var target;
        var _iterator3 = _createForOfIteratorHelper$5(Editor.positions(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
            at: range,
            reverse: true
        }))), _step3;
        try {
            for(_iterator3.s(); !(_step3 = _iterator3.n()).done;){
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
        } finally{
            _iterator3.f();
        }
        return target;
    },
    /**
   * Delete content in the editor backward from the current selection.
   */ deleteBackward: function deleteBackward(editor) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _options$unit = options.unit, unit = _options$unit === void 0 ? "character" : _options$unit;
        editor.deleteBackward(unit);
    },
    /**
   * Delete content in the editor forward from the current selection.
   */ deleteForward: function deleteForward(editor) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _options$unit2 = options.unit, unit = _options$unit2 === void 0 ? "character" : _options$unit2;
        editor.deleteForward(unit);
    },
    /**
   * Delete the content in the current selection.
   */ deleteFragment: function deleteFragment(editor) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _options$direction = options.direction, direction = _options$direction === void 0 ? "forward" : _options$direction;
        editor.deleteFragment(direction);
    },
    /**
   * Get the start and end points of a location.
   */ edges: function edges(editor, at) {
        return [
            Editor.start(editor, at),
            Editor.end(editor, at)
        ];
    },
    /**
   * Get the end point of a location.
   */ end: function end(editor, at) {
        return Editor.point(editor, at, {
            edge: "end"
        });
    },
    /**
   * Get the first node at a location.
   */ first: function first(editor, at) {
        var path = Editor.path(editor, at, {
            edge: "start"
        });
        return Editor.node(editor, path);
    },
    /**
   * Get the fragment at a location.
   */ fragment: function fragment(editor, at) {
        var range = Editor.range(editor, at);
        var fragment = Node.fragment(editor, range);
        return fragment;
    },
    /**
   * Check if a node has block children.
   */ hasBlocks: function hasBlocks(editor, element) {
        return element.children.some(function(n) {
            return Editor.isBlock(editor, n);
        });
    },
    /**
   * Check if a node has inline and text children.
   */ hasInlines: function hasInlines(editor, element) {
        return element.children.some(function(n) {
            return Text.isText(n) || Editor.isInline(editor, n);
        });
    },
    /**
   * Check if a node has text children.
   */ hasTexts: function hasTexts(editor, element) {
        return element.children.every(function(n) {
            return Text.isText(n);
        });
    },
    /**
   * Insert a block break at the current selection.
   *
   * If the selection is currently expanded, it will be deleted first.
   */ insertBreak: function insertBreak(editor) {
        editor.insertBreak();
    },
    /**
   * Insert a soft break at the current selection.
   *
   * If the selection is currently expanded, it will be deleted first.
   */ insertSoftBreak: function insertSoftBreak(editor) {
        editor.insertSoftBreak();
    },
    /**
   * Insert a fragment at the current selection.
   *
   * If the selection is currently expanded, it will be deleted first.
   */ insertFragment: function insertFragment(editor, fragment) {
        editor.insertFragment(fragment);
    },
    /**
   * Insert a node at the current selection.
   *
   * If the selection is currently expanded, it will be deleted first.
   */ insertNode: function insertNode(editor, node) {
        editor.insertNode(node);
    },
    /**
   * Insert text at the current selection.
   *
   * If the selection is currently expanded, it will be deleted first.
   */ insertText: function insertText(editor, text) {
        editor.insertText(text);
    },
    /**
   * Check if a value is a block `Element` object.
   */ isBlock: function isBlock(editor, value) {
        return Element.isElement(value) && !editor.isInline(value);
    },
    /**
   * Check if a value is an `Editor` object.
   */ isEditor: function isEditor(value) {
        var cachedIsEditor = IS_EDITOR_CACHE.get(value);
        if (cachedIsEditor !== undefined) {
            return cachedIsEditor;
        }
        if (!isPlainObject.isPlainObject(value)) {
            return false;
        }
        var isEditor = typeof value.addMark === "function" && typeof value.apply === "function" && typeof value.deleteBackward === "function" && typeof value.deleteForward === "function" && typeof value.deleteFragment === "function" && typeof value.insertBreak === "function" && typeof value.insertSoftBreak === "function" && typeof value.insertFragment === "function" && typeof value.insertNode === "function" && typeof value.insertText === "function" && typeof value.isInline === "function" && typeof value.isVoid === "function" && typeof value.normalizeNode === "function" && typeof value.onChange === "function" && typeof value.removeMark === "function" && typeof value.getDirtyPaths === "function" && (value.marks === null || isPlainObject.isPlainObject(value.marks)) && (value.selection === null || Range.isRange(value.selection)) && Node.isNodeList(value.children) && Operation.isOperationList(value.operations);
        IS_EDITOR_CACHE.set(value, isEditor);
        return isEditor;
    },
    /**
   * Check if a point is the end point of a location.
   */ isEnd: function isEnd(editor, point, at) {
        var end = Editor.end(editor, at);
        return Point.equals(point, end);
    },
    /**
   * Check if a point is an edge of a location.
   */ isEdge: function isEdge(editor, point, at) {
        return Editor.isStart(editor, point, at) || Editor.isEnd(editor, point, at);
    },
    /**
   * Check if an element is empty, accounting for void nodes.
   */ isEmpty: function isEmpty(editor, element) {
        var children = element.children;
        var _children = _slicedToArray(children, 1), first = _children[0];
        return children.length === 0 || children.length === 1 && Text.isText(first) && first.text === "" && !editor.isVoid(element);
    },
    /**
   * Check if a value is an inline `Element` object.
   */ isInline: function isInline(editor, value) {
        return Element.isElement(value) && editor.isInline(value);
    },
    /**
   * Check if the editor is currently normalizing after each operation.
   */ isNormalizing: function isNormalizing(editor) {
        var isNormalizing = NORMALIZING.get(editor);
        return isNormalizing === undefined ? true : isNormalizing;
    },
    /**
   * Check if a point is the start point of a location.
   */ isStart: function isStart(editor, point, at) {
        // PERF: If the offset isn't `0` we know it's not the start.
        if (point.offset !== 0) {
            return false;
        }
        var start = Editor.start(editor, at);
        return Point.equals(point, start);
    },
    /**
   * Check if a value is a void `Element` object.
   */ isVoid: function isVoid(editor, value) {
        return Element.isElement(value) && editor.isVoid(value);
    },
    /**
   * Get the last node at a location.
   */ last: function last(editor, at) {
        var path = Editor.path(editor, at, {
            edge: "end"
        });
        return Editor.node(editor, path);
    },
    /**
   * Get the leaf text node at a location.
   */ leaf: function leaf(editor, at) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var path = Editor.path(editor, at, options);
        var node = Node.leaf(editor, path);
        return [
            node,
            path
        ];
    },
    /**
   * Iterate through all of the levels at a location.
   */ levels: function* levels(editor) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _options$at2 = options.at, at = _options$at2 === void 0 ? editor.selection : _options$at2, _options$reverse = options.reverse, reverse = _options$reverse === void 0 ? false : _options$reverse, _options$voids2 = options.voids, voids = _options$voids2 === void 0 ? false : _options$voids2;
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
        var _iterator4 = _createForOfIteratorHelper$5(Node.levels(editor, path)), _step4;
        try {
            for(_iterator4.s(); !(_step4 = _iterator4.n()).done;){
                var _step4$value = _slicedToArray(_step4.value, 2), n = _step4$value[0], p = _step4$value[1];
                if (!match(n, p)) {
                    continue;
                }
                levels.push([
                    n,
                    p
                ]);
                if (!voids && Editor.isVoid(editor, n)) {
                    break;
                }
            }
        } catch (err) {
            _iterator4.e(err);
        } finally{
            _iterator4.f();
        }
        if (reverse) {
            levels.reverse();
        }
        yield* levels;
    },
    /**
   * Get the marks that would be added to text at the current selection.
   */ marks: function marks(editor) {
        var marks = editor.marks, selection = editor.selection;
        if (!selection) {
            return null;
        }
        if (marks) {
            return marks;
        }
        if (Range.isExpanded(selection)) {
            var _Editor$nodes = Editor.nodes(editor, {
                match: Text.isText
            }), _Editor$nodes2 = _slicedToArray(_Editor$nodes, 1), match = _Editor$nodes2[0];
            if (match) {
                var _match = _slicedToArray(match, 1), _node = _match[0];
                _node.text;
                var _rest = _objectWithoutProperties(_node, _excluded$4);
                return _rest;
            } else {
                return {};
            }
        }
        var anchor = selection.anchor;
        var path = anchor.path;
        var _Editor$leaf = Editor.leaf(editor, path), _Editor$leaf2 = _slicedToArray(_Editor$leaf, 1), node = _Editor$leaf2[0];
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
                    var _prev = _slicedToArray(prev, 2), prevNode = _prev[0], prevPath = _prev[1];
                    var _block = _slicedToArray(block, 2), blockPath = _block[1];
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
   */ next: function next(editor) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _options$mode2 = options.mode, mode = _options$mode2 === void 0 ? "lowest" : _options$mode2, _options$voids3 = options.voids, voids = _options$voids3 === void 0 ? false : _options$voids3;
        var match = options.match, _options$at3 = options.at, at = _options$at3 === void 0 ? editor.selection : _options$at3;
        if (!at) {
            return;
        }
        var pointAfterLocation = Editor.after(editor, at, {
            voids: voids
        });
        if (!pointAfterLocation) return;
        var _Editor$last = Editor.last(editor, []), _Editor$last2 = _slicedToArray(_Editor$last, 2), to = _Editor$last2[1];
        var span = [
            pointAfterLocation.path,
            to
        ];
        if (Path.isPath(at) && at.length === 0) {
            throw new Error("Cannot get the next node from the root node!");
        }
        if (match == null) {
            if (Path.isPath(at)) {
                var _Editor$parent = Editor.parent(editor, at), _Editor$parent2 = _slicedToArray(_Editor$parent, 1), parent = _Editor$parent2[0];
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
        }), _Editor$nodes4 = _slicedToArray(_Editor$nodes3, 1), next = _Editor$nodes4[0];
        return next;
    },
    /**
   * Get the node at a location.
   */ node: function node(editor, at) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var path = Editor.path(editor, at, options);
        var node = Node.get(editor, path);
        return [
            node,
            path
        ];
    },
    /**
   * Iterate through all of the nodes in the Editor.
   */ nodes: function* nodes(editor) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _options$at4 = options.at, at = _options$at4 === void 0 ? editor.selection : _options$at4, _options$mode3 = options.mode, mode = _options$mode3 === void 0 ? "all" : _options$mode3, _options$universal = options.universal, universal = _options$universal === void 0 ? false : _options$universal, _options$reverse2 = options.reverse, reverse = _options$reverse2 === void 0 ? false : _options$reverse2, _options$voids4 = options.voids, voids = _options$voids4 === void 0 ? false : _options$voids4;
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
                edge: "start"
            });
            var last = Editor.path(editor, at, {
                edge: "end"
            });
            from = reverse ? last : first;
            to = reverse ? first : last;
        }
        var nodeEntries = Node.nodes(editor, {
            reverse: reverse,
            from: from,
            to: to,
            pass: function pass(_ref) {
                var _ref2 = _slicedToArray(_ref, 1), n = _ref2[0];
                return voids ? false : Editor.isVoid(editor, n);
            }
        });
        var matches = [];
        var hit;
        var _iterator5 = _createForOfIteratorHelper$5(nodeEntries), _step5;
        try {
            for(_iterator5.s(); !(_step5 = _iterator5.n()).done;){
                var _step5$value = _slicedToArray(_step5.value, 2), node = _step5$value[0], path = _step5$value[1];
                var isLower = hit && Path.compare(path, hit[1]) === 0; // In highest mode any node lower than the last hit is not a match.
                if (mode === "highest" && isLower) {
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
                if (mode === "lowest" && isLower) {
                    hit = [
                        node,
                        path
                    ];
                    continue;
                } // In lowest mode we emit the last hit, once it's guaranteed lowest.
                var emit = mode === "lowest" ? hit : [
                    node,
                    path
                ];
                if (emit) {
                    if (universal) {
                        matches.push(emit);
                    } else {
                        yield emit;
                    }
                }
                hit = [
                    node,
                    path
                ];
            } // Since lowest is always emitting one behind, catch up at the end.
        } catch (err) {
            _iterator5.e(err);
        } finally{
            _iterator5.f();
        }
        if (mode === "lowest" && hit) {
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
   */ normalize: function normalize(editor) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _options$force = options.force, force = _options$force === void 0 ? false : _options$force;
        var getDirtyPaths = function getDirtyPaths(editor) {
            return DIRTY_PATHS.get(editor) || [];
        };
        var getDirtyPathKeys = function getDirtyPathKeys(editor) {
            return DIRTY_PATH_KEYS.get(editor) || new Set();
        };
        var popDirtyPath = function popDirtyPath(editor) {
            var path = getDirtyPaths(editor).pop();
            var key = path.join(",");
            getDirtyPathKeys(editor)["delete"](key);
            return path;
        };
        if (!Editor.isNormalizing(editor)) {
            return;
        }
        if (force) {
            var allPaths = Array.from(Node.nodes(editor), function(_ref3) {
                var _ref4 = _slicedToArray(_ref3, 2), p = _ref4[1];
                return p;
            });
            var allPathKeys = new Set(allPaths.map(function(p) {
                return p.join(",");
            }));
            DIRTY_PATHS.set(editor, allPaths);
            DIRTY_PATH_KEYS.set(editor, allPathKeys);
        }
        if (getDirtyPaths(editor).length === 0) {
            return;
        }
        Editor.withoutNormalizing(editor, function() {
            /*
        Fix dirty elements with no children.
        editor.normalizeNode() does fix this, but some normalization fixes also require it to work.
        Running an initial pass avoids the catch-22 race condition.
      */ var _iterator6 = _createForOfIteratorHelper$5(getDirtyPaths(editor)), _step6;
            try {
                for(_iterator6.s(); !(_step6 = _iterator6.n()).done;){
                    var _dirtyPath = _step6.value;
                    if (Node.has(editor, _dirtyPath)) {
                        var _entry = Editor.node(editor, _dirtyPath);
                        var _entry2 = _slicedToArray(_entry, 2), node = _entry2[0], _ = _entry2[1];
                        /*
              The default normalizer inserts an empty text node in this scenario, but it can be customised.
              So there is some risk here.
                         As long as the normalizer only inserts child nodes for this case it is safe to do in any order;
              by definition adding children to an empty node can't cause other paths to change.
            */ if (Element.isElement(node) && node.children.length === 0) {
                            editor.normalizeNode(_entry);
                        }
                    }
                }
            } catch (err) {
                _iterator6.e(err);
            } finally{
                _iterator6.f();
            }
            var max = getDirtyPaths(editor).length * 42; // HACK: better way?
            var m = 0;
            while(getDirtyPaths(editor).length !== 0){
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
   */ parent: function parent(editor, at) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var path = Editor.path(editor, at, options);
        var parentPath = Path.parent(path);
        var entry = Editor.node(editor, parentPath);
        return entry;
    },
    /**
   * Get the path of a location.
   */ path: function path(editor, at) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var depth = options.depth, edge = options.edge;
        if (Path.isPath(at)) {
            if (edge === "start") {
                var _Node$first = Node.first(editor, at), _Node$first2 = _slicedToArray(_Node$first, 2), firstPath = _Node$first2[1];
                at = firstPath;
            } else if (edge === "end") {
                var _Node$last = Node.last(editor, at), _Node$last2 = _slicedToArray(_Node$last, 2), lastPath = _Node$last2[1];
                at = lastPath;
            }
        }
        if (Range.isRange(at)) {
            if (edge === "start") {
                at = Range.start(at);
            } else if (edge === "end") {
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
   */ pathRef: function pathRef(editor, path) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var _options$affinity = options.affinity, affinity = _options$affinity === void 0 ? "forward" : _options$affinity;
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
   */ pathRefs: function pathRefs(editor) {
        var refs = PATH_REFS.get(editor);
        if (!refs) {
            refs = new Set();
            PATH_REFS.set(editor, refs);
        }
        return refs;
    },
    /**
   * Get the start or end point of a location.
   */ point: function point(editor, at) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var _options$edge = options.edge, edge = _options$edge === void 0 ? "start" : _options$edge;
        if (Path.isPath(at)) {
            var path;
            if (edge === "end") {
                var _Node$last3 = Node.last(editor, at), _Node$last4 = _slicedToArray(_Node$last3, 2), lastPath = _Node$last4[1];
                path = lastPath;
            } else {
                var _Node$first3 = Node.first(editor, at), _Node$first4 = _slicedToArray(_Node$first3, 2), firstPath = _Node$first4[1];
                path = firstPath;
            }
            var node = Node.get(editor, path);
            if (!Text.isText(node)) {
                throw new Error("Cannot get the ".concat(edge, " point in the node at path [").concat(at, "] because it has no ").concat(edge, " text node."));
            }
            return {
                path: path,
                offset: edge === "end" ? node.text.length : 0
            };
        }
        if (Range.isRange(at)) {
            var _Range$edges = Range.edges(at), _Range$edges2 = _slicedToArray(_Range$edges, 2), start = _Range$edges2[0], end = _Range$edges2[1];
            return edge === "start" ? start : end;
        }
        return at;
    },
    /**
   * Create a mutable ref for a `Point` object, which will stay in sync as new
   * operations are applied to the editor.
   */ pointRef: function pointRef(editor, point) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var _options$affinity2 = options.affinity, affinity = _options$affinity2 === void 0 ? "forward" : _options$affinity2;
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
   */ pointRefs: function pointRefs(editor) {
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
   */ positions: function* positions(editor) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _options$at5 = options.at, at = _options$at5 === void 0 ? editor.selection : _options$at5, _options$unit3 = options.unit, unit = _options$unit3 === void 0 ? "offset" : _options$unit3, _options$reverse3 = options.reverse, reverse = _options$reverse3 === void 0 ? false : _options$reverse3, _options$voids5 = options.voids, voids = _options$voids5 === void 0 ? false : _options$voids5;
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
     */ var range = Editor.range(editor, at);
        var _Range$edges3 = Range.edges(range), _Range$edges4 = _slicedToArray(_Range$edges3, 2), start = _Range$edges4[0], end = _Range$edges4[1];
        var first = reverse ? end : start;
        var isNewBlock = false;
        var blockText = "";
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
        })), _step7;
        try {
            for(_iterator7.s(); !(_step7 = _iterator7.n()).done;){
                var _step7$value = _slicedToArray(_step7.value, 2), node = _step7$value[0], path = _step7$value[1];
                /*
         * ELEMENT NODE - Yield position(s) for voids, collect blockText for blocks
         */ if (Element.isElement(node)) {
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
         */ if (Text.isText(node)) {
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
                    if (isFirst || isNewBlock || unit === "offset") {
                        yield {
                            path: path,
                            offset: leafTextOffset
                        };
                        isNewBlock = false;
                    } // Yield positions every (dynamically calculated) `distance` offset.
                    while(true){
                        // If `leafText` has caught up with `blockText` (distance=0),
                        // and if blockText is exhausted, break to get another block node,
                        // otherwise advance blockText forward by the new `distance`.
                        if (distance === 0) {
                            if (blockText === "") break;
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
        } finally{
            _iterator7.f();
        }
        function calcDistance(text, unit, reverse) {
            if (unit === "character") {
                return getCharacterDistance(text, reverse);
            } else if (unit === "word") {
                return getWordDistance(text, reverse);
            } else if (unit === "line" || unit === "block") {
                return text.length;
            }
            return 1;
        }
    },
    /**
   * Get the matching node in the branch of the document before a location.
   */ previous: function previous(editor) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _options$mode4 = options.mode, mode = _options$mode4 === void 0 ? "lowest" : _options$mode4, _options$voids6 = options.voids, voids = _options$voids6 === void 0 ? false : _options$voids6;
        var match = options.match, _options$at6 = options.at, at = _options$at6 === void 0 ? editor.selection : _options$at6;
        if (!at) {
            return;
        }
        var pointBeforeLocation = Editor.before(editor, at, {
            voids: voids
        });
        if (!pointBeforeLocation) {
            return;
        }
        var _Editor$first = Editor.first(editor, []), _Editor$first2 = _slicedToArray(_Editor$first, 2), to = _Editor$first2[1]; // The search location is from the start of the document to the path of
        // the point before the location passed in
        var span = [
            pointBeforeLocation.path,
            to
        ];
        if (Path.isPath(at) && at.length === 0) {
            throw new Error("Cannot get the previous node from the root node!");
        }
        if (match == null) {
            if (Path.isPath(at)) {
                var _Editor$parent3 = Editor.parent(editor, at), _Editor$parent4 = _slicedToArray(_Editor$parent3, 1), parent = _Editor$parent4[0];
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
        }), _Editor$nodes6 = _slicedToArray(_Editor$nodes5, 1), previous = _Editor$nodes6[0];
        return previous;
    },
    /**
   * Get a range of a location.
   */ range: function range(editor, at, to) {
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
   */ rangeRef: function rangeRef(editor, range) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var _options$affinity3 = options.affinity, affinity = _options$affinity3 === void 0 ? "forward" : _options$affinity3;
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
   */ rangeRefs: function rangeRefs(editor) {
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
   */ removeMark: function removeMark(editor, key) {
        editor.removeMark(key);
    },
    /**
   * Manually set if the editor should currently be normalizing.
   *
   * Note: Using this incorrectly can leave the editor in an invalid state.
   *
   */ setNormalizing: function setNormalizing(editor, isNormalizing) {
        NORMALIZING.set(editor, isNormalizing);
    },
    /**
   * Get the start point of a location.
   */ start: function start(editor, at) {
        return Editor.point(editor, at, {
            edge: "start"
        });
    },
    /**
   * Get the text string content of a location.
   *
   * Note: by default the text of void nodes is considered to be an empty
   * string, regardless of content, unless you pass in true for the voids option
   */ string: function string(editor, at) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var _options$voids7 = options.voids, voids = _options$voids7 === void 0 ? false : _options$voids7;
        var range = Editor.range(editor, at);
        var _Range$edges5 = Range.edges(range), _Range$edges6 = _slicedToArray(_Range$edges5, 2), start = _Range$edges6[0], end = _Range$edges6[1];
        var text = "";
        var _iterator8 = _createForOfIteratorHelper$5(Editor.nodes(editor, {
            at: range,
            match: Text.isText,
            voids: voids
        })), _step8;
        try {
            for(_iterator8.s(); !(_step8 = _iterator8.n()).done;){
                var _step8$value = _slicedToArray(_step8.value, 2), node = _step8$value[0], path = _step8$value[1];
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
        } finally{
            _iterator8.f();
        }
        return text;
    },
    /**
   * Convert a range into a non-hanging one.
   */ unhangRange: function unhangRange(editor, range) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var _options$voids8 = options.voids, voids = _options$voids8 === void 0 ? false : _options$voids8;
        var _Range$edges7 = Range.edges(range), _Range$edges8 = _slicedToArray(_Range$edges7, 2), start = _Range$edges8[0], end = _Range$edges8[1]; // PERF: exit early if we can guarantee that the range isn't hanging.
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
        })), _step9;
        try {
            for(_iterator9.s(); !(_step9 = _iterator9.n()).done;){
                var _step9$value = _slicedToArray(_step9.value, 2), node = _step9$value[0], path = _step9$value[1];
                if (skip) {
                    skip = false;
                    continue;
                }
                if (node.text !== "" || Path.isBefore(path, blockPath)) {
                    end = {
                        path: path,
                        offset: node.text.length
                    };
                    break;
                }
            }
        } catch (err) {
            _iterator9.e(err);
        } finally{
            _iterator9.f();
        }
        return {
            anchor: start,
            focus: end
        };
    },
    /**
   * Match a void node in the current branch of the editor.
   */ "void": function _void(editor) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return Editor.above(editor, _objectSpread$8(_objectSpread$8({}, options), {}, {
            match: function match(n) {
                return Editor.isVoid(editor, n);
            }
        }));
    },
    /**
   * Call a function, deferring normalization until after it completes.
   */ withoutNormalizing: function withoutNormalizing(editor, fn) {
        var value = Editor.isNormalizing(editor);
        Editor.setNormalizing(editor, false);
        try {
            fn();
        } finally{
            Editor.setNormalizing(editor, value);
        }
        Editor.normalize(editor);
    }
};
var Location = {
    /**
   * Check if a value implements the `Location` interface.
   */ isLocation: function isLocation(value) {
        return Path.isPath(value) || Point.isPoint(value) || Range.isRange(value);
    }
}; // eslint-disable-next-line no-redeclare
var Span = {
    /**
   * Check if a value implements the `Span` interface.
   */ isSpan: function isSpan(value) {
        return Array.isArray(value) && value.length === 2 && value.every(Path.isPath);
    }
};
var _excluded$3 = [
    "children"
], _excluded2$2 = [
    "text"
];
function _createForOfIteratorHelper$4(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray$4(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray$4(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$4(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$4(o, minLen);
}
function _arrayLikeToArray$4(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++){
        arr2[i] = arr[i];
    }
    return arr2;
}
var IS_NODE_LIST_CACHE = new WeakMap(); // eslint-disable-next-line no-redeclare
var Node = {
    /**
   * Get the node at a specific path, asserting that it's an ancestor node.
   */ ancestor: function ancestor(root, path) {
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
   */ ancestors: function* ancestors(root, path) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var _iterator = _createForOfIteratorHelper$4(Path.ancestors(path, options)), _step;
        try {
            for(_iterator.s(); !(_step = _iterator.n()).done;){
                var p = _step.value;
                var n = Node.ancestor(root, p);
                var entry = [
                    n,
                    p
                ];
                yield entry;
            }
        } catch (err) {
            _iterator.e(err);
        } finally{
            _iterator.f();
        }
    },
    /**
   * Get the child of a node at a specific index.
   */ child: function child(root, index) {
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
   */ children: function* children(root, path) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var _options$reverse = options.reverse, reverse = _options$reverse === void 0 ? false : _options$reverse;
        var ancestor = Node.ancestor(root, path);
        var children = ancestor.children;
        var index = reverse ? children.length - 1 : 0;
        while(reverse ? index >= 0 : index < children.length){
            var child = Node.child(ancestor, index);
            var childPath = path.concat(index);
            yield [
                child,
                childPath
            ];
            index = reverse ? index - 1 : index + 1;
        }
    },
    /**
   * Get an entry for the common ancesetor node of two paths.
   */ common: function common(root, path, another) {
        var p = Path.common(path, another);
        var n = Node.get(root, p);
        return [
            n,
            p
        ];
    },
    /**
   * Get the node at a specific path, asserting that it's a descendant node.
   */ descendant: function descendant(root, path) {
        var node = Node.get(root, path);
        if (Editor.isEditor(node)) {
            throw new Error("Cannot get the descendant node at path [".concat(path, "] because it refers to the root editor node instead: ").concat(Scrubber.stringify(node)));
        }
        return node;
    },
    /**
   * Return a generator of all the descendant node entries inside a root node.
   */ descendants: function* descendants(root) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _iterator2 = _createForOfIteratorHelper$4(Node.nodes(root, options)), _step2;
        try {
            for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
                var _step2$value = _slicedToArray(_step2.value, 2), node = _step2$value[0], path = _step2$value[1];
                if (path.length !== 0) {
                    // NOTE: we have to coerce here because checking the path's length does
                    // guarantee that `node` is not a `Editor`, but TypeScript doesn't know.
                    yield [
                        node,
                        path
                    ];
                }
            }
        } catch (err) {
            _iterator2.e(err);
        } finally{
            _iterator2.f();
        }
    },
    /**
   * Return a generator of all the element nodes inside a root node. Each iteration
   * will return an `ElementEntry` tuple consisting of `[Element, Path]`. If the
   * root node is an element it will be included in the iteration as well.
   */ elements: function* elements(root) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _iterator3 = _createForOfIteratorHelper$4(Node.nodes(root, options)), _step3;
        try {
            for(_iterator3.s(); !(_step3 = _iterator3.n()).done;){
                var _step3$value = _slicedToArray(_step3.value, 2), node = _step3$value[0], path = _step3$value[1];
                if (Element.isElement(node)) {
                    yield [
                        node,
                        path
                    ];
                }
            }
        } catch (err) {
            _iterator3.e(err);
        } finally{
            _iterator3.f();
        }
    },
    /**
   * Extract props from a Node.
   */ extractProps: function extractProps(node) {
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
   */ first: function first(root, path) {
        var p = path.slice();
        var n = Node.get(root, p);
        while(n){
            if (Text.isText(n) || n.children.length === 0) {
                break;
            } else {
                n = n.children[0];
                p.push(0);
            }
        }
        return [
            n,
            p
        ];
    },
    /**
   * Get the sliced fragment represented by a range inside a root node.
   */ fragment: function fragment(root, range) {
        if (Text.isText(root)) {
            throw new Error("Cannot get a fragment starting from a root text node: ".concat(Scrubber.stringify(root)));
        }
        var newRoot = immer.produce({
            children: root.children
        }, function(r) {
            var _Range$edges = Range.edges(range), _Range$edges2 = _slicedToArray(_Range$edges, 2), start = _Range$edges2[0], end = _Range$edges2[1];
            var nodeEntries = Node.nodes(r, {
                reverse: true,
                pass: function pass(_ref) {
                    var _ref2 = _slicedToArray(_ref, 2), path = _ref2[1];
                    return !Range.includes(range, path);
                }
            });
            var _iterator4 = _createForOfIteratorHelper$4(nodeEntries), _step4;
            try {
                for(_iterator4.s(); !(_step4 = _iterator4.n()).done;){
                    var _step4$value = _slicedToArray(_step4.value, 2), path = _step4$value[1];
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
            } finally{
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
   */ get: function get(root, path) {
        var node = root;
        for(var i = 0; i < path.length; i++){
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
   */ has: function has(root, path) {
        var node = root;
        for(var i = 0; i < path.length; i++){
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
   */ isNode: function isNode(value) {
        return Text.isText(value) || Element.isElement(value) || Editor.isEditor(value);
    },
    /**
   * Check if a value is a list of `Node` objects.
   */ isNodeList: function isNodeList(value) {
        if (!Array.isArray(value)) {
            return false;
        }
        var cachedResult = IS_NODE_LIST_CACHE.get(value);
        if (cachedResult !== undefined) {
            return cachedResult;
        }
        var isNodeList = value.every(function(val) {
            return Node.isNode(val);
        });
        IS_NODE_LIST_CACHE.set(value, isNodeList);
        return isNodeList;
    },
    /**
   * Get the last node entry in a root node from a path.
   */ last: function last(root, path) {
        var p = path.slice();
        var n = Node.get(root, p);
        while(n){
            if (Text.isText(n) || n.children.length === 0) {
                break;
            } else {
                var i = n.children.length - 1;
                n = n.children[i];
                p.push(i);
            }
        }
        return [
            n,
            p
        ];
    },
    /**
   * Get the node at a specific path, ensuring it's a leaf text node.
   */ leaf: function leaf(root, path) {
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
   */ levels: function* levels(root, path) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var _iterator5 = _createForOfIteratorHelper$4(Path.levels(path, options)), _step5;
        try {
            for(_iterator5.s(); !(_step5 = _iterator5.n()).done;){
                var p = _step5.value;
                var n = Node.get(root, p);
                yield [
                    n,
                    p
                ];
            }
        } catch (err) {
            _iterator5.e(err);
        } finally{
            _iterator5.f();
        }
    },
    /**
   * Check if a node matches a set of props.
   */ matches: function matches(node, props) {
        return Element.isElement(node) && Element.isElementProps(props) && Element.matches(node, props) || Text.isText(node) && Text.isTextProps(props) && Text.matches(node, props);
    },
    /**
   * Return a generator of all the node entries of a root node. Each entry is
   * returned as a `[Node, Path]` tuple, with the path referring to the node's
   * position inside the root node.
   */ nodes: function* nodes(root) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var pass = options.pass, _options$reverse2 = options.reverse, reverse = _options$reverse2 === void 0 ? false : _options$reverse2;
        var _options$from = options.from, from = _options$from === void 0 ? [] : _options$from, to = options.to;
        var visited = new Set();
        var p = [];
        var n = root;
        while(true){
            if (to && (reverse ? Path.isBefore(p, to) : Path.isAfter(p, to))) {
                break;
            }
            if (!visited.has(n)) {
                yield [
                    n,
                    p
                ];
            } // If we're allowed to go downward and we haven't descended yet, do.
            if (!visited.has(n) && !Text.isText(n) && n.children.length !== 0 && (pass == null || pass([
                n,
                p
            ]) === false)) {
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
   */ parent: function parent(root, path) {
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
   */ string: function string(node) {
        if (Text.isText(node)) {
            return node.text;
        } else {
            return node.children.map(Node.string).join("");
        }
    },
    /**
   * Return a generator of all leaf text nodes in a root node.
   */ texts: function* texts(root) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _iterator6 = _createForOfIteratorHelper$4(Node.nodes(root, options)), _step6;
        try {
            for(_iterator6.s(); !(_step6 = _iterator6.n()).done;){
                var _step6$value = _slicedToArray(_step6.value, 2), node = _step6$value[0], path = _step6$value[1];
                if (Text.isText(node)) {
                    yield [
                        node,
                        path
                    ];
                }
            }
        } catch (err) {
            _iterator6.e(err);
        } finally{
            _iterator6.f();
        }
    }
};
function ownKeys$7(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread$7(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            ownKeys$7(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys$7(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }
    return target;
}
var Operation = {
    /**
   * Check of a value is a `NodeOperation` object.
   */ isNodeOperation: function isNodeOperation(value) {
        return Operation.isOperation(value) && value.type.endsWith("_node");
    },
    /**
   * Check of a value is an `Operation` object.
   */ isOperation: function isOperation(value) {
        if (!isPlainObject.isPlainObject(value)) {
            return false;
        }
        switch(value.type){
            case "insert_node":
                return Path.isPath(value.path) && Node.isNode(value.node);
            case "insert_text":
                return typeof value.offset === "number" && typeof value.text === "string" && Path.isPath(value.path);
            case "merge_node":
                return typeof value.position === "number" && Path.isPath(value.path) && isPlainObject.isPlainObject(value.properties);
            case "move_node":
                return Path.isPath(value.path) && Path.isPath(value.newPath);
            case "remove_node":
                return Path.isPath(value.path) && Node.isNode(value.node);
            case "remove_text":
                return typeof value.offset === "number" && typeof value.text === "string" && Path.isPath(value.path);
            case "set_node":
                return Path.isPath(value.path) && isPlainObject.isPlainObject(value.properties) && isPlainObject.isPlainObject(value.newProperties);
            case "set_selection":
                return value.properties === null && Range.isRange(value.newProperties) || value.newProperties === null && Range.isRange(value.properties) || isPlainObject.isPlainObject(value.properties) && isPlainObject.isPlainObject(value.newProperties);
            case "split_node":
                return Path.isPath(value.path) && typeof value.position === "number" && isPlainObject.isPlainObject(value.properties);
            default:
                return false;
        }
    },
    /**
   * Check if a value is a list of `Operation` objects.
   */ isOperationList: function isOperationList(value) {
        return Array.isArray(value) && value.every(function(val) {
            return Operation.isOperation(val);
        });
    },
    /**
   * Check of a value is a `SelectionOperation` object.
   */ isSelectionOperation: function isSelectionOperation(value) {
        return Operation.isOperation(value) && value.type.endsWith("_selection");
    },
    /**
   * Check of a value is a `TextOperation` object.
   */ isTextOperation: function isTextOperation(value) {
        return Operation.isOperation(value) && value.type.endsWith("_text");
    },
    /**
   * Invert an operation, returning a new operation that will exactly undo the
   * original when applied.
   */ inverse: function inverse(op) {
        switch(op.type){
            case "insert_node":
                {
                    return _objectSpread$7(_objectSpread$7({}, op), {}, {
                        type: "remove_node"
                    });
                }
            case "insert_text":
                {
                    return _objectSpread$7(_objectSpread$7({}, op), {}, {
                        type: "remove_text"
                    });
                }
            case "merge_node":
                {
                    return _objectSpread$7(_objectSpread$7({}, op), {}, {
                        type: "split_node",
                        path: Path.previous(op.path)
                    });
                }
            case "move_node":
                {
                    var newPath = op.newPath, path = op.path; // PERF: in this case the move operation is a no-op anyways.
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
            case "remove_node":
                {
                    return _objectSpread$7(_objectSpread$7({}, op), {}, {
                        type: "insert_node"
                    });
                }
            case "remove_text":
                {
                    return _objectSpread$7(_objectSpread$7({}, op), {}, {
                        type: "insert_text"
                    });
                }
            case "set_node":
                {
                    var properties = op.properties, newProperties = op.newProperties;
                    return _objectSpread$7(_objectSpread$7({}, op), {}, {
                        properties: newProperties,
                        newProperties: properties
                    });
                }
            case "set_selection":
                {
                    var _properties = op.properties, _newProperties = op.newProperties;
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
            case "split_node":
                {
                    return _objectSpread$7(_objectSpread$7({}, op), {}, {
                        type: "merge_node",
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
   */ ancestors: function ancestors(path) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _options$reverse = options.reverse, reverse = _options$reverse === void 0 ? false : _options$reverse;
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
   */ common: function common(path, another) {
        var common = [];
        for(var i = 0; i < path.length && i < another.length; i++){
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
   */ compare: function compare(path, another) {
        var min = Math.min(path.length, another.length);
        for(var i = 0; i < min; i++){
            if (path[i] < another[i]) return -1;
            if (path[i] > another[i]) return 1;
        }
        return 0;
    },
    /**
   * Check if a path ends after one of the indexes in another.
   */ endsAfter: function endsAfter(path, another) {
        var i = path.length - 1;
        var as = path.slice(0, i);
        var bs = another.slice(0, i);
        var av = path[i];
        var bv = another[i];
        return Path.equals(as, bs) && av > bv;
    },
    /**
   * Check if a path ends at one of the indexes in another.
   */ endsAt: function endsAt(path, another) {
        var i = path.length;
        var as = path.slice(0, i);
        var bs = another.slice(0, i);
        return Path.equals(as, bs);
    },
    /**
   * Check if a path ends before one of the indexes in another.
   */ endsBefore: function endsBefore(path, another) {
        var i = path.length - 1;
        var as = path.slice(0, i);
        var bs = another.slice(0, i);
        var av = path[i];
        var bv = another[i];
        return Path.equals(as, bs) && av < bv;
    },
    /**
   * Check if a path is exactly equal to another.
   */ equals: function equals(path, another) {
        return path.length === another.length && path.every(function(n, i) {
            return n === another[i];
        });
    },
    /**
   * Check if the path of previous sibling node exists
   */ hasPrevious: function hasPrevious(path) {
        return path[path.length - 1] > 0;
    },
    /**
   * Check if a path is after another.
   */ isAfter: function isAfter(path, another) {
        return Path.compare(path, another) === 1;
    },
    /**
   * Check if a path is an ancestor of another.
   */ isAncestor: function isAncestor(path, another) {
        return path.length < another.length && Path.compare(path, another) === 0;
    },
    /**
   * Check if a path is before another.
   */ isBefore: function isBefore(path, another) {
        return Path.compare(path, another) === -1;
    },
    /**
   * Check if a path is a child of another.
   */ isChild: function isChild(path, another) {
        return path.length === another.length + 1 && Path.compare(path, another) === 0;
    },
    /**
   * Check if a path is equal to or an ancestor of another.
   */ isCommon: function isCommon(path, another) {
        return path.length <= another.length && Path.compare(path, another) === 0;
    },
    /**
   * Check if a path is a descendant of another.
   */ isDescendant: function isDescendant(path, another) {
        return path.length > another.length && Path.compare(path, another) === 0;
    },
    /**
   * Check if a path is the parent of another.
   */ isParent: function isParent(path, another) {
        return path.length + 1 === another.length && Path.compare(path, another) === 0;
    },
    /**
   * Check is a value implements the `Path` interface.
   */ isPath: function isPath(value) {
        return Array.isArray(value) && (value.length === 0 || typeof value[0] === "number");
    },
    /**
   * Check if a path is a sibling of another.
   */ isSibling: function isSibling(path, another) {
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
   */ levels: function levels(path) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _options$reverse2 = options.reverse, reverse = _options$reverse2 === void 0 ? false : _options$reverse2;
        var list = [];
        for(var i = 0; i <= path.length; i++){
            list.push(path.slice(0, i));
        }
        if (reverse) {
            list.reverse();
        }
        return list;
    },
    /**
   * Given a path, get the path to the next sibling node.
   */ next: function next(path) {
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
   */ operationCanTransformPath: function operationCanTransformPath(operation) {
        switch(operation.type){
            case "insert_node":
            case "remove_node":
            case "merge_node":
            case "split_node":
            case "move_node":
                return true;
            default:
                return false;
        }
    },
    /**
   * Given a path, return a new path referring to the parent node above it.
   */ parent: function parent(path) {
        if (path.length === 0) {
            throw new Error("Cannot get the parent path of the root path [".concat(path, "]."));
        }
        return path.slice(0, -1);
    },
    /**
   * Given a path, get the path to the previous sibling node.
   */ previous: function previous(path) {
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
   */ relative: function relative(path, ancestor) {
        if (!Path.isAncestor(ancestor, path) && !Path.equals(path, ancestor)) {
            throw new Error("Cannot get the relative path of [".concat(path, "] inside ancestor [").concat(ancestor, "], because it is not above or equal to the path."));
        }
        return path.slice(ancestor.length);
    },
    /**
   * Transform a path by an operation.
   */ transform: function transform(path, operation) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        if (!path) return null; // PERF: use destructing instead of immer
        var p = _toConsumableArray(path);
        var _options$affinity = options.affinity, affinity = _options$affinity === void 0 ? "forward" : _options$affinity; // PERF: Exit early if the operation is guaranteed not to have an effect.
        if (path.length === 0) {
            return p;
        }
        switch(operation.type){
            case "insert_node":
                {
                    var op = operation.path;
                    if (Path.equals(op, p) || Path.endsBefore(op, p) || Path.isAncestor(op, p)) {
                        p[op.length - 1] += 1;
                    }
                    break;
                }
            case "remove_node":
                {
                    var _op = operation.path;
                    if (Path.equals(_op, p) || Path.isAncestor(_op, p)) {
                        return null;
                    } else if (Path.endsBefore(_op, p)) {
                        p[_op.length - 1] -= 1;
                    }
                    break;
                }
            case "merge_node":
                {
                    var _op2 = operation.path, position = operation.position;
                    if (Path.equals(_op2, p) || Path.endsBefore(_op2, p)) {
                        p[_op2.length - 1] -= 1;
                    } else if (Path.isAncestor(_op2, p)) {
                        p[_op2.length - 1] -= 1;
                        p[_op2.length] += position;
                    }
                    break;
                }
            case "split_node":
                {
                    var _op3 = operation.path, _position = operation.position;
                    if (Path.equals(_op3, p)) {
                        if (affinity === "forward") {
                            p[p.length - 1] += 1;
                        } else if (affinity === "backward") ;
                        else {
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
            case "move_node":
                {
                    var _op4 = operation.path, onp = operation.newPath; // If the old and new path are the same, it's a no-op.
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
   */ transform: function transform(ref, op) {
        var current = ref.current, affinity = ref.affinity;
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
function ownKeys$6(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread$6(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            ownKeys$6(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys$6(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }
    return target;
}
var Point = {
    /**
   * Compare a point to another, returning an integer indicating whether the
   * point was before, at, or after the other.
   */ compare: function compare(point, another) {
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
   */ isAfter: function isAfter(point, another) {
        return Point.compare(point, another) === 1;
    },
    /**
   * Check if a point is before another.
   */ isBefore: function isBefore(point, another) {
        return Point.compare(point, another) === -1;
    },
    /**
   * Check if a point is exactly equal to another.
   */ equals: function equals(point, another) {
        // PERF: ensure the offsets are equal first since they are cheaper to check.
        return point.offset === another.offset && Path.equals(point.path, another.path);
    },
    /**
   * Check if a value implements the `Point` interface.
   */ isPoint: function isPoint(value) {
        return isPlainObject.isPlainObject(value) && typeof value.offset === "number" && Path.isPath(value.path);
    },
    /**
   * Transform a point by an operation.
   */ transform: function transform(point, op) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return immer.produce(point, function(p) {
            if (p === null) {
                return null;
            }
            var _options$affinity = options.affinity, affinity = _options$affinity === void 0 ? "forward" : _options$affinity;
            var path = p.path, offset = p.offset;
            switch(op.type){
                case "insert_node":
                case "move_node":
                    {
                        p.path = Path.transform(path, op, options);
                        break;
                    }
                case "insert_text":
                    {
                        if (Path.equals(op.path, path) && (op.offset < offset || op.offset === offset && affinity === "forward")) {
                            p.offset += op.text.length;
                        }
                        break;
                    }
                case "merge_node":
                    {
                        if (Path.equals(op.path, path)) {
                            p.offset += op.position;
                        }
                        p.path = Path.transform(path, op, options);
                        break;
                    }
                case "remove_text":
                    {
                        if (Path.equals(op.path, path) && op.offset <= offset) {
                            p.offset -= Math.min(offset - op.offset, op.text.length);
                        }
                        break;
                    }
                case "remove_node":
                    {
                        if (Path.equals(op.path, path) || Path.isAncestor(op.path, path)) {
                            return null;
                        }
                        p.path = Path.transform(path, op, options);
                        break;
                    }
                case "split_node":
                    {
                        if (Path.equals(op.path, path)) {
                            if (op.position === offset && affinity == null) {
                                return null;
                            } else if (op.position < offset || op.position === offset && affinity === "forward") {
                                p.offset -= op.position;
                                p.path = Path.transform(path, op, _objectSpread$6(_objectSpread$6({}, options), {}, {
                                    affinity: "forward"
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
   */ transform: function transform(ref, op) {
        var current = ref.current, affinity = ref.affinity;
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
var _excluded$2 = [
    "anchor",
    "focus"
];
function ownKeys$5(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread$5(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            ownKeys$5(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys$5(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }
    return target;
}
var Range = {
    /**
   * Get the start and end points of a range, in the order in which they appear
   * in the document.
   */ edges: function edges(range) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _options$reverse = options.reverse, reverse = _options$reverse === void 0 ? false : _options$reverse;
        var anchor = range.anchor, focus = range.focus;
        return Range.isBackward(range) === reverse ? [
            anchor,
            focus
        ] : [
            focus,
            anchor
        ];
    },
    /**
   * Get the end point of a range.
   */ end: function end(range) {
        var _Range$edges = Range.edges(range), _Range$edges2 = _slicedToArray(_Range$edges, 2), end = _Range$edges2[1];
        return end;
    },
    /**
   * Check if a range is exactly equal to another.
   */ equals: function equals(range, another) {
        return Point.equals(range.anchor, another.anchor) && Point.equals(range.focus, another.focus);
    },
    /**
   * Check if a range includes a path, a point or part of another range.
   */ includes: function includes(range, target) {
        if (Range.isRange(target)) {
            if (Range.includes(range, target.anchor) || Range.includes(range, target.focus)) {
                return true;
            }
            var _Range$edges3 = Range.edges(range), _Range$edges4 = _slicedToArray(_Range$edges3, 2), rs = _Range$edges4[0], re = _Range$edges4[1];
            var _Range$edges5 = Range.edges(target), _Range$edges6 = _slicedToArray(_Range$edges5, 2), ts = _Range$edges6[0], te = _Range$edges6[1];
            return Point.isBefore(rs, ts) && Point.isAfter(re, te);
        }
        var _Range$edges7 = Range.edges(range), _Range$edges8 = _slicedToArray(_Range$edges7, 2), start = _Range$edges8[0], end = _Range$edges8[1];
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
   */ intersection: function intersection(range, another) {
        range.anchor;
        range.focus;
        var rest = _objectWithoutProperties(range, _excluded$2);
        var _Range$edges9 = Range.edges(range), _Range$edges10 = _slicedToArray(_Range$edges9, 2), s1 = _Range$edges10[0], e1 = _Range$edges10[1];
        var _Range$edges11 = Range.edges(another), _Range$edges12 = _slicedToArray(_Range$edges11, 2), s2 = _Range$edges12[0], e2 = _Range$edges12[1];
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
   */ isBackward: function isBackward(range) {
        var anchor = range.anchor, focus = range.focus;
        return Point.isAfter(anchor, focus);
    },
    /**
   * Check if a range is collapsed, meaning that both its anchor and focus
   * points refer to the exact same position in the document.
   */ isCollapsed: function isCollapsed(range) {
        var anchor = range.anchor, focus = range.focus;
        return Point.equals(anchor, focus);
    },
    /**
   * Check if a range is expanded.
   *
   * This is the opposite of [[Range.isCollapsed]] and is provided for legibility.
   */ isExpanded: function isExpanded(range) {
        return !Range.isCollapsed(range);
    },
    /**
   * Check if a range is forward.
   *
   * This is the opposite of [[Range.isBackward]] and is provided for legibility.
   */ isForward: function isForward(range) {
        return !Range.isBackward(range);
    },
    /**
   * Check if a value implements the [[Range]] interface.
   */ isRange: function isRange(value) {
        return isPlainObject.isPlainObject(value) && Point.isPoint(value.anchor) && Point.isPoint(value.focus);
    },
    /**
   * Iterate through all of the point entries in a range.
   */ points: function* points(range) {
        yield [
            range.anchor,
            "anchor"
        ];
        yield [
            range.focus,
            "focus"
        ];
    },
    /**
   * Get the start point of a range.
   */ start: function start(range) {
        var _Range$edges13 = Range.edges(range), _Range$edges14 = _slicedToArray(_Range$edges13, 1), start = _Range$edges14[0];
        return start;
    },
    /**
   * Transform a range by an operation.
   */ transform: function transform(range, op) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        return immer.produce(range, function(r) {
            if (r === null) {
                return null;
            }
            var _options$affinity = options.affinity, affinity = _options$affinity === void 0 ? "inward" : _options$affinity;
            var affinityAnchor;
            var affinityFocus;
            if (affinity === "inward") {
                // If the range is collapsed, make sure to use the same affinity to
                // avoid the two points passing each other and expanding in the opposite
                // direction
                var isCollapsed = Range.isCollapsed(r);
                if (Range.isForward(r)) {
                    affinityAnchor = "forward";
                    affinityFocus = isCollapsed ? affinityAnchor : "backward";
                } else {
                    affinityAnchor = "backward";
                    affinityFocus = isCollapsed ? affinityAnchor : "forward";
                }
            } else if (affinity === "outward") {
                if (Range.isForward(r)) {
                    affinityAnchor = "backward";
                    affinityFocus = "forward";
                } else {
                    affinityAnchor = "forward";
                    affinityFocus = "backward";
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
   */ transform: function transform(ref, op) {
        var current = ref.current, affinity = ref.affinity;
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
 */ // eslint-disable-next-line no-redeclare
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
 */ var isDeepEqual = function isDeepEqual(node, another) {
    for(var key in node){
        var a = node[key];
        var b = another[key];
        if (isPlainObject.isPlainObject(a) && isPlainObject.isPlainObject(b)) {
            if (!isDeepEqual(a, b)) return false;
        } else if (Array.isArray(a) && Array.isArray(b)) {
            if (a.length !== b.length) return false;
            for(var i = 0; i < a.length; i++){
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
  */ for(var _key in another){
        if (node[_key] === undefined && another[_key] !== undefined) {
            return false;
        }
    }
    return true;
};
var _excluded$1 = [
    "text"
], _excluded2$1 = [
    "anchor",
    "focus"
];
function _createForOfIteratorHelper$3(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray$3(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray$3(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$3(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$3(o, minLen);
}
function _arrayLikeToArray$3(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++){
        arr2[i] = arr[i];
    }
    return arr2;
}
function ownKeys$4(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread$4(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            ownKeys$4(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys$4(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }
    return target;
}
var Text = {
    /**
   * Check if two text nodes are equal.
   *
   * When loose is set, the text is not compared. This is
   * used to check whether sibling text nodes can be merged.
   */ equals: function equals(text, another) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var _options$loose = options.loose, loose = _options$loose === void 0 ? false : _options$loose;
        function omitText(obj) {
            obj.text;
            var rest = _objectWithoutProperties(obj, _excluded$1);
            return rest;
        }
        return isDeepEqual(loose ? omitText(text) : text, loose ? omitText(another) : another);
    },
    /**
   * Check if a value implements the `Text` interface.
   */ isText: function isText(value) {
        return isPlainObject.isPlainObject(value) && typeof value.text === "string";
    },
    /**
   * Check if a value is a list of `Text` objects.
   */ isTextList: function isTextList(value) {
        return Array.isArray(value) && value.every(function(val) {
            return Text.isText(val);
        });
    },
    /**
   * Check if some props are a partial of Text.
   */ isTextProps: function isTextProps(props) {
        return props.text !== undefined;
    },
    /**
   * Check if an text matches set of properties.
   *
   * Note: this is for matching custom properties, and it does not ensure that
   * the `text` property are two nodes equal.
   */ matches: function matches(text, props) {
        for(var key in props){
            if (key === "text") {
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
   */ decorations: function decorations(node, _decorations) {
        var leaves = [
            _objectSpread$4({}, node)
        ];
        var _iterator = _createForOfIteratorHelper$3(_decorations), _step;
        try {
            for(_iterator.s(); !(_step = _iterator.n()).done;){
                var dec = _step.value;
                var anchor = dec.anchor, focus = dec.focus, rest = _objectWithoutProperties(dec, _excluded2$1);
                var _Range$edges = Range.edges(dec), _Range$edges2 = _slicedToArray(_Range$edges, 2), start = _Range$edges2[0], end = _Range$edges2[1];
                var next = [];
                var leafEnd = 0;
                var decorationStart = start.offset;
                var decorationEnd = end.offset;
                var _iterator2 = _createForOfIteratorHelper$3(leaves), _step2;
                try {
                    for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
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
                } finally{
                    _iterator2.f();
                }
                leaves = next;
            }
        } catch (err1) {
            _iterator.e(err1);
        } finally{
            _iterator.f();
        }
        return leaves;
    }
};
function ownKeys$3(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread$3(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            ownKeys$3(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys$3(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }
    return target;
}
function _createForOfIteratorHelper$2(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray$2(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray$2(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$2(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen);
}
function _arrayLikeToArray$2(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++){
        arr2[i] = arr[i];
    }
    return arr2;
}
var applyToDraft = function applyToDraft(editor, selection, op) {
    switch(op.type){
        case "insert_node":
            {
                var path = op.path, node = op.node;
                var parent = Node.parent(editor, path);
                var index = path[path.length - 1];
                if (index > parent.children.length) {
                    throw new Error('Cannot apply an "insert_node" operation at path ['.concat(path, "] because the destination is past the end of the node."));
                }
                parent.children.splice(index, 0, node);
                if (selection) {
                    var _iterator = _createForOfIteratorHelper$2(Range.points(selection)), _step;
                    try {
                        for(_iterator.s(); !(_step = _iterator.n()).done;){
                            var _step$value = _slicedToArray(_step.value, 2), point = _step$value[0], key = _step$value[1];
                            selection[key] = Point.transform(point, op);
                        }
                    } catch (err) {
                        _iterator.e(err);
                    } finally{
                        _iterator.f();
                    }
                }
                break;
            }
        case "insert_text":
            {
                var _path = op.path, offset = op.offset, text = op.text;
                if (text.length === 0) break;
                var _node = Node.leaf(editor, _path);
                var before = _node.text.slice(0, offset);
                var after = _node.text.slice(offset);
                _node.text = before + text + after;
                if (selection) {
                    var _iterator2 = _createForOfIteratorHelper$2(Range.points(selection)), _step2;
                    try {
                        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
                            var _step2$value = _slicedToArray(_step2.value, 2), _point = _step2$value[0], _key = _step2$value[1];
                            selection[_key] = Point.transform(_point, op);
                        }
                    } catch (err1) {
                        _iterator2.e(err1);
                    } finally{
                        _iterator2.f();
                    }
                }
                break;
            }
        case "merge_node":
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
                    throw new Error('Cannot apply a "merge_node" operation at path ['.concat(_path2, "] to nodes of different interfaces: ").concat(Scrubber.stringify(_node2), " ").concat(Scrubber.stringify(prev)));
                }
                _parent.children.splice(_index, 1);
                if (selection) {
                    var _iterator3 = _createForOfIteratorHelper$2(Range.points(selection)), _step3;
                    try {
                        for(_iterator3.s(); !(_step3 = _iterator3.n()).done;){
                            var _step3$value = _slicedToArray(_step3.value, 2), _point2 = _step3$value[0], _key2 = _step3$value[1];
                            selection[_key2] = Point.transform(_point2, op);
                        }
                    } catch (err2) {
                        _iterator3.e(err2);
                    } finally{
                        _iterator3.f();
                    }
                }
                break;
            }
        case "move_node":
            {
                var _path3 = op.path, newPath = op.newPath;
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
                    var _iterator4 = _createForOfIteratorHelper$2(Range.points(selection)), _step4;
                    try {
                        for(_iterator4.s(); !(_step4 = _iterator4.n()).done;){
                            var _step4$value = _slicedToArray(_step4.value, 2), _point3 = _step4$value[0], _key3 = _step4$value[1];
                            selection[_key3] = Point.transform(_point3, op);
                        }
                    } catch (err3) {
                        _iterator4.e(err3);
                    } finally{
                        _iterator4.f();
                    }
                }
                break;
            }
        case "remove_node":
            {
                var _path4 = op.path;
                var _index3 = _path4[_path4.length - 1];
                var _parent3 = Node.parent(editor, _path4);
                _parent3.children.splice(_index3, 1); // Transform all of the points in the value, but if the point was in the
                // node that was removed we need to update the range or remove it.
                if (selection) {
                    var _iterator5 = _createForOfIteratorHelper$2(Range.points(selection)), _step5;
                    try {
                        for(_iterator5.s(); !(_step5 = _iterator5.n()).done;){
                            var _step5$value = _slicedToArray(_step5.value, 2), _point4 = _step5$value[0], _key4 = _step5$value[1];
                            var result = Point.transform(_point4, op);
                            if (selection != null && result != null) {
                                selection[_key4] = result;
                            } else {
                                var _prev = void 0;
                                var next = void 0;
                                var _iterator6 = _createForOfIteratorHelper$2(Node.texts(editor)), _step6;
                                try {
                                    for(_iterator6.s(); !(_step6 = _iterator6.n()).done;){
                                        var _step6$value = _slicedToArray(_step6.value, 2), n = _step6$value[0], p = _step6$value[1];
                                        if (Path.compare(p, _path4) === -1) {
                                            _prev = [
                                                n,
                                                p
                                            ];
                                        } else {
                                            next = [
                                                n,
                                                p
                                            ];
                                            break;
                                        }
                                    }
                                } catch (err4) {
                                    _iterator6.e(err4);
                                } finally{
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
                    } catch (err5) {
                        _iterator5.e(err5);
                    } finally{
                        _iterator5.f();
                    }
                }
                break;
            }
        case "remove_text":
            {
                var _path5 = op.path, _offset = op.offset, _text = op.text;
                if (_text.length === 0) break;
                var _node4 = Node.leaf(editor, _path5);
                var _before = _node4.text.slice(0, _offset);
                var _after = _node4.text.slice(_offset + _text.length);
                _node4.text = _before + _after;
                if (selection) {
                    var _iterator7 = _createForOfIteratorHelper$2(Range.points(selection)), _step7;
                    try {
                        for(_iterator7.s(); !(_step7 = _iterator7.n()).done;){
                            var _step7$value = _slicedToArray(_step7.value, 2), _point5 = _step7$value[0], _key5 = _step7$value[1];
                            selection[_key5] = Point.transform(_point5, op);
                        }
                    } catch (err6) {
                        _iterator7.e(err6);
                    } finally{
                        _iterator7.f();
                    }
                }
                break;
            }
        case "set_node":
            {
                var _path6 = op.path, properties = op.properties, newProperties = op.newProperties;
                if (_path6.length === 0) {
                    throw new Error("Cannot set properties on the root node!");
                }
                var _node5 = Node.get(editor, _path6);
                for(var _key6 in newProperties){
                    if (_key6 === "children" || _key6 === "text") {
                        throw new Error('Cannot set the "'.concat(_key6, '" property of nodes!'));
                    }
                    var value = newProperties[_key6];
                    if (value == null) {
                        delete _node5[_key6];
                    } else {
                        _node5[_key6] = value;
                    }
                } // properties that were previously defined, but are now missing, must be deleted
                for(var _key7 in properties){
                    if (!newProperties.hasOwnProperty(_key7)) {
                        delete _node5[_key7];
                    }
                }
                break;
            }
        case "set_selection":
            {
                var _newProperties = op.newProperties;
                if (_newProperties == null) {
                    selection = _newProperties;
                } else {
                    if (selection == null) {
                        if (!Range.isRange(_newProperties)) {
                            throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(Scrubber.stringify(_newProperties), " when there is no current selection."));
                        }
                        selection = _objectSpread$3({}, _newProperties);
                    }
                    for(var _key8 in _newProperties){
                        var _value = _newProperties[_key8];
                        if (_value == null) {
                            if (_key8 === "anchor" || _key8 === "focus") {
                                throw new Error('Cannot remove the "'.concat(_key8, '" selection property'));
                            }
                            delete selection[_key8];
                        } else {
                            selection[_key8] = _value;
                        }
                    }
                }
                break;
            }
        case "split_node":
            {
                var _path7 = op.path, position = op.position, _properties = op.properties;
                if (_path7.length === 0) {
                    throw new Error('Cannot apply a "split_node" operation at path ['.concat(_path7, "] because the root node cannot be split."));
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
                    var _iterator8 = _createForOfIteratorHelper$2(Range.points(selection)), _step8;
                    try {
                        for(_iterator8.s(); !(_step8 = _iterator8.n()).done;){
                            var _step8$value = _slicedToArray(_step8.value, 2), _point6 = _step8$value[0], _key9 = _step8$value[1];
                            selection[_key9] = Point.transform(_point6, op);
                        }
                    } catch (err7) {
                        _iterator8.e(err7);
                    } finally{
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
   */ transform: function transform(editor, op) {
        editor.children = immer.createDraft(editor.children);
        var selection = editor.selection && immer.createDraft(editor.selection);
        try {
            selection = applyToDraft(editor, selection, op);
        } finally{
            editor.children = immer.finishDraft(editor.children);
            if (selection) {
                editor.selection = immer.isDraft(selection) ? immer.finishDraft(selection) : selection;
            } else {
                editor.selection = null;
            }
        }
    }
};
var _excluded = [
    "text"
], _excluded2 = [
    "children"
];
function ownKeys$2(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread$2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            ownKeys$2(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys$2(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }
    return target;
}
function _createForOfIteratorHelper$1(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray$1(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
}
function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++){
        arr2[i] = arr[i];
    }
    return arr2;
}
var NodeTransforms = {
    /**
   * Insert nodes at a specific location in the Editor.
   */ insertNodes: function insertNodes(editor, nodes) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        Editor.withoutNormalizing(editor, function() {
            var _options$hanging = options.hanging, hanging = _options$hanging === void 0 ? false : _options$hanging, _options$voids = options.voids, voids = _options$voids === void 0 ? false : _options$voids, _options$mode = options.mode, mode = _options$mode === void 0 ? "lowest" : _options$mode;
            var at = options.at, match = options.match, select = options.select;
            if (Node.isNode(nodes)) {
                nodes = [
                    nodes
                ];
            }
            if (nodes.length === 0) {
                return;
            }
            var _nodes = nodes, _nodes2 = _slicedToArray(_nodes, 1), node = _nodes2[0]; // By default, use the selection as the target location. But if there is
            // no selection, insert at the end of the document since that is such a
            // common use case when inserting from a non-selected state.
            if (!at) {
                if (editor.selection) {
                    at = editor.selection;
                } else if (editor.children.length > 0) {
                    at = Editor.end(editor, []);
                } else {
                    at = [
                        0
                    ];
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
                    var _Range$edges = Range.edges(at), _Range$edges2 = _slicedToArray(_Range$edges, 2), end = _Range$edges2[1];
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
                }), _Editor$nodes2 = _slicedToArray(_Editor$nodes, 1), entry = _Editor$nodes2[0];
                if (entry) {
                    var _entry = _slicedToArray(entry, 2), _matchPath = _entry[1];
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
            var _iterator = _createForOfIteratorHelper$1(nodes), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var _node = _step.value;
                    var _path = parentPath.concat(index);
                    index++;
                    editor.apply({
                        type: "insert_node",
                        path: _path,
                        node: _node
                    });
                    at = Path.next(at);
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
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
   */ liftNodes: function liftNodes(editor) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        Editor.withoutNormalizing(editor, function() {
            var _options$at = options.at, at = _options$at === void 0 ? editor.selection : _options$at, _options$mode2 = options.mode, mode = _options$mode2 === void 0 ? "lowest" : _options$mode2, _options$voids2 = options.voids, voids = _options$voids2 === void 0 ? false : _options$voids2;
            var match = options.match;
            if (match == null) {
                match = Path.isPath(at) ? matchPath(editor, at) : function(n) {
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
            var pathRefs = Array.from(matches, function(_ref) {
                var _ref2 = _slicedToArray(_ref, 2), p = _ref2[1];
                return Editor.pathRef(editor, p);
            });
            for(var _i = 0, _pathRefs = pathRefs; _i < _pathRefs.length; _i++){
                var pathRef = _pathRefs[_i];
                var path = pathRef.unref();
                if (path.length < 2) {
                    throw new Error("Cannot lift node at a path [".concat(path, "] because it has a depth of less than `2`."));
                }
                var parentNodeEntry = Editor.node(editor, Path.parent(path));
                var _parentNodeEntry = _slicedToArray(parentNodeEntry, 2), parent = _parentNodeEntry[0], parentPath = _parentNodeEntry[1];
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
   */ mergeNodes: function mergeNodes(editor) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        Editor.withoutNormalizing(editor, function() {
            var match = options.match, _options$at2 = options.at, at = _options$at2 === void 0 ? editor.selection : _options$at2;
            var _options$hanging2 = options.hanging, hanging = _options$hanging2 === void 0 ? false : _options$hanging2, _options$voids3 = options.voids, voids = _options$voids3 === void 0 ? false : _options$voids3, _options$mode3 = options.mode, mode = _options$mode3 === void 0 ? "lowest" : _options$mode3;
            if (!at) {
                return;
            }
            if (match == null) {
                if (Path.isPath(at)) {
                    var _Editor$parent = Editor.parent(editor, at), _Editor$parent2 = _slicedToArray(_Editor$parent, 1), parent = _Editor$parent2[0];
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
                    var _Range$edges3 = Range.edges(at), _Range$edges4 = _slicedToArray(_Range$edges3, 2), end = _Range$edges4[1];
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
            }), _Editor$nodes4 = _slicedToArray(_Editor$nodes3, 1), current = _Editor$nodes4[0];
            var prev = Editor.previous(editor, {
                at: at,
                match: match,
                voids: voids,
                mode: mode
            });
            if (!current || !prev) {
                return;
            }
            var _current = _slicedToArray(current, 2), node = _current[0], path = _current[1];
            var _prev = _slicedToArray(prev, 2), prevNode = _prev[0], prevPath = _prev[1];
            if (path.length === 0 || prevPath.length === 0) {
                return;
            }
            var newPath = Path.next(prevPath);
            var commonPath = Path.common(path, prevPath);
            var isPreviousSibling = Path.isSibling(path, prevPath);
            var levels = Array.from(Editor.levels(editor, {
                at: path
            }), function(_ref3) {
                var _ref4 = _slicedToArray(_ref3, 1), n = _ref4[0];
                return n;
            }).slice(commonPath.length).slice(0, -1); // Determine if the merge will leave an ancestor of the path empty as a
            // result, in which case we'll want to remove it after merging.
            var emptyAncestor = Editor.above(editor, {
                at: path,
                mode: "highest",
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
            if (Element.isElement(prevNode) && Editor.isEmpty(editor, prevNode) || Text.isText(prevNode) && prevNode.text === "" && prevPath[prevPath.length - 1] !== 0) {
                Transforms.removeNodes(editor, {
                    at: prevPath,
                    voids: voids
                });
            } else {
                editor.apply({
                    type: "merge_node",
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
   */ moveNodes: function moveNodes(editor, options) {
        Editor.withoutNormalizing(editor, function() {
            var to = options.to, _options$at3 = options.at, at = _options$at3 === void 0 ? editor.selection : _options$at3, _options$mode4 = options.mode, mode = _options$mode4 === void 0 ? "lowest" : _options$mode4, _options$voids4 = options.voids, voids = _options$voids4 === void 0 ? false : _options$voids4;
            var match = options.match;
            if (!at) {
                return;
            }
            if (match == null) {
                match = Path.isPath(at) ? matchPath(editor, at) : function(n) {
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
            var pathRefs = Array.from(targets, function(_ref5) {
                var _ref6 = _slicedToArray(_ref5, 2), p = _ref6[1];
                return Editor.pathRef(editor, p);
            });
            for(var _i2 = 0, _pathRefs2 = pathRefs; _i2 < _pathRefs2.length; _i2++){
                var pathRef = _pathRefs2[_i2];
                var path = pathRef.unref();
                var newPath = toRef.current;
                if (path.length !== 0) {
                    editor.apply({
                        type: "move_node",
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
   */ removeNodes: function removeNodes(editor) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        Editor.withoutNormalizing(editor, function() {
            var _options$hanging3 = options.hanging, hanging = _options$hanging3 === void 0 ? false : _options$hanging3, _options$voids5 = options.voids, voids = _options$voids5 === void 0 ? false : _options$voids5, _options$mode5 = options.mode, mode = _options$mode5 === void 0 ? "lowest" : _options$mode5;
            var _options$at4 = options.at, at = _options$at4 === void 0 ? editor.selection : _options$at4, match = options.match;
            if (!at) {
                return;
            }
            if (match == null) {
                match = Path.isPath(at) ? matchPath(editor, at) : function(n) {
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
            var pathRefs = Array.from(depths, function(_ref7) {
                var _ref8 = _slicedToArray(_ref7, 2), p = _ref8[1];
                return Editor.pathRef(editor, p);
            });
            for(var _i3 = 0, _pathRefs3 = pathRefs; _i3 < _pathRefs3.length; _i3++){
                var pathRef = _pathRefs3[_i3];
                var path = pathRef.unref();
                if (path) {
                    var _Editor$node = Editor.node(editor, path), _Editor$node2 = _slicedToArray(_Editor$node, 1), node = _Editor$node2[0];
                    editor.apply({
                        type: "remove_node",
                        path: path,
                        node: node
                    });
                }
            }
        });
    },
    /**
   * Set new properties on the nodes at a location.
   */ setNodes: function setNodes(editor, props) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        Editor.withoutNormalizing(editor, function() {
            var match = options.match, _options$at5 = options.at, at = _options$at5 === void 0 ? editor.selection : _options$at5, compare = options.compare, merge = options.merge;
            var _options$hanging4 = options.hanging, hanging = _options$hanging4 === void 0 ? false : _options$hanging4, _options$mode6 = options.mode, mode = _options$mode6 === void 0 ? "lowest" : _options$mode6, _options$split = options.split, split = _options$split === void 0 ? false : _options$split, _options$voids6 = options.voids, voids = _options$voids6 === void 0 ? false : _options$voids6;
            if (!at) {
                return;
            }
            if (match == null) {
                match = Path.isPath(at) ? matchPath(editor, at) : function(n) {
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
                    affinity: "inward"
                });
                var _Range$edges5 = Range.edges(at), _Range$edges6 = _slicedToArray(_Range$edges5, 2), start = _Range$edges6[0], end = _Range$edges6[1];
                var splitMode = mode === "lowest" ? "lowest" : "highest";
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
            })), _step2;
            try {
                for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
                    var _step2$value = _slicedToArray(_step2.value, 2), node = _step2$value[0], path = _step2$value[1];
                    var properties = {};
                    var newProperties = {}; // You can't set properties on the editor node.
                    if (path.length === 0) {
                        continue;
                    }
                    var hasChanges = false;
                    for(var k in props){
                        if (k === "children" || k === "text") {
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
                            type: "set_node",
                            path: path,
                            properties: properties,
                            newProperties: newProperties
                        });
                    }
                }
            } catch (err) {
                _iterator2.e(err);
            } finally{
                _iterator2.f();
            }
        });
    },
    /**
   * Split the nodes at a specific location.
   */ splitNodes: function splitNodes(editor) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        Editor.withoutNormalizing(editor, function() {
            var _options$mode7 = options.mode, mode = _options$mode7 === void 0 ? "lowest" : _options$mode7, _options$voids7 = options.voids, voids = _options$voids7 === void 0 ? false : _options$voids7;
            var match = options.match, _options$at6 = options.at, at = _options$at6 === void 0 ? editor.selection : _options$at6, _options$height = options.height, height = _options$height === void 0 ? 0 : _options$height, _options$always = options.always, always = _options$always === void 0 ? false : _options$always;
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
                var _Editor$parent3 = Editor.parent(editor, path), _Editor$parent4 = _slicedToArray(_Editor$parent3, 1), parent = _Editor$parent4[0];
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
                affinity: "backward"
            });
            var afterRef;
            try {
                var _Editor$nodes5 = Editor.nodes(editor, {
                    at: at,
                    match: match,
                    mode: mode,
                    voids: voids
                }), _Editor$nodes6 = _slicedToArray(_Editor$nodes5, 1), highest = _Editor$nodes6[0];
                if (!highest) {
                    return;
                }
                var voidMatch = Editor["void"](editor, {
                    at: at,
                    mode: "highest"
                });
                var nudge = 0;
                if (!voids && voidMatch) {
                    var _voidMatch = _slicedToArray(voidMatch, 2), voidNode = _voidMatch[0], voidPath = _voidMatch[1];
                    if (Element.isElement(voidNode) && editor.isInline(voidNode)) {
                        var after = Editor.after(editor, voidPath);
                        if (!after) {
                            var text = {
                                text: ""
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
                var _highest = _slicedToArray(highest, 2), highestPath = _highest[1];
                var lowestPath = at.path.slice(0, depth);
                var position = height === 0 ? at.offset : at.path[depth] + nudge;
                var _iterator3 = _createForOfIteratorHelper$1(Editor.levels(editor, {
                    at: lowestPath,
                    reverse: true,
                    voids: voids
                })), _step3;
                try {
                    for(_iterator3.s(); !(_step3 = _iterator3.n()).done;){
                        var _step3$value = _slicedToArray(_step3.value, 2), node = _step3$value[0], _path2 = _step3$value[1];
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
                                type: "split_node",
                                path: _path2,
                                position: position,
                                properties: properties
                            });
                        }
                        position = _path2[_path2.length - 1] + (split || isEnd ? 1 : 0);
                    }
                } catch (err) {
                    _iterator3.e(err);
                } finally{
                    _iterator3.f();
                }
                if (options.at == null) {
                    var _point = afterRef.current || Editor.end(editor, []);
                    Transforms.select(editor, _point);
                }
            } finally{
                var _afterRef;
                beforeRef.unref();
                (_afterRef = afterRef) === null || _afterRef === void 0 ? void 0 : _afterRef.unref();
            }
        });
    },
    /**
   * Unset properties on the nodes at a location.
   */ unsetNodes: function unsetNodes(editor, props) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        if (!Array.isArray(props)) {
            props = [
                props
            ];
        }
        var obj = {};
        var _iterator4 = _createForOfIteratorHelper$1(props), _step4;
        try {
            for(_iterator4.s(); !(_step4 = _iterator4.n()).done;){
                var key = _step4.value;
                obj[key] = null;
            }
        } catch (err) {
            _iterator4.e(err);
        } finally{
            _iterator4.f();
        }
        Transforms.setNodes(editor, obj, options);
    },
    /**
   * Unwrap the nodes at a location from a parent node, splitting the parent if
   * necessary to ensure that only the content in the range is unwrapped.
   */ unwrapNodes: function unwrapNodes(editor) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        Editor.withoutNormalizing(editor, function() {
            var _options$mode8 = options.mode, mode = _options$mode8 === void 0 ? "lowest" : _options$mode8, _options$split2 = options.split, split = _options$split2 === void 0 ? false : _options$split2, _options$voids8 = options.voids, voids = _options$voids8 === void 0 ? false : _options$voids8;
            var _options$at7 = options.at, at = _options$at7 === void 0 ? editor.selection : _options$at7, match = options.match;
            if (!at) {
                return;
            }
            if (match == null) {
                match = Path.isPath(at) ? matchPath(editor, at) : function(n) {
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
            var pathRefs = Array.from(matches, function(_ref9) {
                var _ref10 = _slicedToArray(_ref9, 2), p = _ref10[1];
                return Editor.pathRef(editor, p);
            } // unwrapNode will call liftNode which does not support splitting the node when nested.
            ).reverse();
            var _iterator5 = _createForOfIteratorHelper$1(pathRefs), _step5;
            try {
                var _loop = function _loop() {
                    var pathRef = _step5.value;
                    var path = pathRef.unref();
                    var _Editor$node3 = Editor.node(editor, path), _Editor$node4 = _slicedToArray(_Editor$node3, 1), node = _Editor$node4[0];
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
                for(_iterator5.s(); !(_step5 = _iterator5.n()).done;){
                    _loop();
                }
            } catch (err) {
                _iterator5.e(err);
            } finally{
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
   */ wrapNodes: function wrapNodes(editor, element) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        Editor.withoutNormalizing(editor, function() {
            var _options$mode9 = options.mode, mode = _options$mode9 === void 0 ? "lowest" : _options$mode9, _options$split3 = options.split, split = _options$split3 === void 0 ? false : _options$split3, _options$voids9 = options.voids, voids = _options$voids9 === void 0 ? false : _options$voids9;
            var match = options.match, _options$at8 = options.at, at = _options$at8 === void 0 ? editor.selection : _options$at8;
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
                var _Range$edges7 = Range.edges(at), _Range$edges8 = _slicedToArray(_Range$edges7, 2), start = _Range$edges8[0], end = _Range$edges8[1];
                var rangeRef = Editor.rangeRef(editor, at, {
                    affinity: "inward"
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
                match: editor.isInline(element) ? function(n) {
                    return Editor.isBlock(editor, n);
                } : function(n) {
                    return Editor.isEditor(n);
                },
                mode: "lowest",
                voids: voids
            }));
            for(var _i4 = 0, _roots = roots; _i4 < _roots.length; _i4++){
                var _roots$_i = _slicedToArray(_roots[_i4], 2), rootPath = _roots$_i[1];
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
                    var _ret = function() {
                        var _matches = _slicedToArray(matches, 1), first = _matches[0];
                        var last = matches[matches.length - 1];
                        var _first = _slicedToArray(first, 2), firstPath = _first[1];
                        var _last = _slicedToArray(last, 2), lastPath = _last[1];
                        if (firstPath.length === 0 && lastPath.length === 0) {
                            // if there's no matching parent - usually means the node is an editor - don't do anything
                            return "continue";
                        }
                        var commonPath = Path.equals(firstPath, lastPath) ? Path.parent(firstPath) : Path.common(firstPath, lastPath);
                        var range = Editor.range(editor, firstPath, lastPath);
                        var commonNodeEntry = Editor.node(editor, commonPath);
                        var _commonNodeEntry = _slicedToArray(commonNodeEntry, 1), commonNode = _commonNodeEntry[0];
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
 */ var deleteRange = function deleteRange(editor, range) {
    if (Range.isCollapsed(range)) {
        return range.anchor;
    } else {
        var _Range$edges9 = Range.edges(range), _Range$edges10 = _slicedToArray(_Range$edges9, 2), end = _Range$edges10[1];
        var pointRef = Editor.pointRef(editor, end);
        Transforms["delete"](editor, {
            at: range
        });
        return pointRef.unref();
    }
};
var matchPath = function matchPath(editor, path) {
    var _Editor$node5 = Editor.node(editor, path), _Editor$node6 = _slicedToArray(_Editor$node5, 1), node = _Editor$node6[0];
    return function(n) {
        return n === node;
    };
};
function ownKeys$1(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread$1(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            ownKeys$1(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys$1(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }
    return target;
}
var SelectionTransforms = {
    /**
   * Collapse the selection.
   */ collapse: function collapse(editor) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var _options$edge = options.edge, edge = _options$edge === void 0 ? "anchor" : _options$edge;
        var selection = editor.selection;
        if (!selection) {
            return;
        } else if (edge === "anchor") {
            Transforms.select(editor, selection.anchor);
        } else if (edge === "focus") {
            Transforms.select(editor, selection.focus);
        } else if (edge === "start") {
            var _Range$edges = Range.edges(selection), _Range$edges2 = _slicedToArray(_Range$edges, 1), start = _Range$edges2[0];
            Transforms.select(editor, start);
        } else if (edge === "end") {
            var _Range$edges3 = Range.edges(selection), _Range$edges4 = _slicedToArray(_Range$edges3, 2), end = _Range$edges4[1];
            Transforms.select(editor, end);
        }
    },
    /**
   * Unset the selection.
   */ deselect: function deselect(editor) {
        var selection = editor.selection;
        if (selection) {
            editor.apply({
                type: "set_selection",
                properties: selection,
                newProperties: null
            });
        }
    },
    /**
   * Move the selection's point forward or backward.
   */ move: function move(editor) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var selection = editor.selection;
        var _options$distance = options.distance, distance = _options$distance === void 0 ? 1 : _options$distance, _options$unit = options.unit, unit = _options$unit === void 0 ? "character" : _options$unit, _options$reverse = options.reverse, reverse = _options$reverse === void 0 ? false : _options$reverse;
        var _options$edge2 = options.edge, edge = _options$edge2 === void 0 ? null : _options$edge2;
        if (!selection) {
            return;
        }
        if (edge === "start") {
            edge = Range.isBackward(selection) ? "focus" : "anchor";
        }
        if (edge === "end") {
            edge = Range.isBackward(selection) ? "anchor" : "focus";
        }
        var anchor = selection.anchor, focus = selection.focus;
        var opts = {
            distance: distance,
            unit: unit
        };
        var props = {};
        if (edge == null || edge === "anchor") {
            var point = reverse ? Editor.before(editor, anchor, opts) : Editor.after(editor, anchor, opts);
            if (point) {
                props.anchor = point;
            }
        }
        if (edge == null || edge === "focus") {
            var _point = reverse ? Editor.before(editor, focus, opts) : Editor.after(editor, focus, opts);
            if (_point) {
                props.focus = _point;
            }
        }
        Transforms.setSelection(editor, props);
    },
    /**
   * Set the selection to a new value.
   */ select: function select(editor, target) {
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
            type: "set_selection",
            properties: selection,
            newProperties: target
        });
    },
    /**
   * Set new properties on one of the selection's points.
   */ setPoint: function setPoint(editor, props) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var selection = editor.selection;
        var _options$edge3 = options.edge, edge = _options$edge3 === void 0 ? "both" : _options$edge3;
        if (!selection) {
            return;
        }
        if (edge === "start") {
            edge = Range.isBackward(selection) ? "focus" : "anchor";
        }
        if (edge === "end") {
            edge = Range.isBackward(selection) ? "anchor" : "focus";
        }
        var anchor = selection.anchor, focus = selection.focus;
        var point = edge === "anchor" ? anchor : focus;
        Transforms.setSelection(editor, _defineProperty({}, edge === "anchor" ? "anchor" : "focus", _objectSpread$1(_objectSpread$1({}, point), props)));
    },
    /**
   * Set new properties on the selection.
   */ setSelection: function setSelection(editor, props) {
        var selection = editor.selection;
        var oldProps = {};
        var newProps = {};
        if (!selection) {
            return;
        }
        for(var k in props){
            if (k === "anchor" && props.anchor != null && !Point.equals(props.anchor, selection.anchor) || k === "focus" && props.focus != null && !Point.equals(props.focus, selection.focus) || k !== "anchor" && k !== "focus" && props[k] !== selection[k]) {
                oldProps[k] = selection[k];
                newProps[k] = props[k];
            }
        }
        if (Object.keys(oldProps).length > 0) {
            editor.apply({
                type: "set_selection",
                properties: oldProps,
                newProperties: newProps
            });
        }
    }
};
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++){
        arr2[i] = arr[i];
    }
    return arr2;
}
var TextTransforms = {
    /**
   * Delete content in the editor.
   */ "delete": function _delete(editor) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        Editor.withoutNormalizing(editor, function() {
            var _options$reverse = options.reverse, reverse = _options$reverse === void 0 ? false : _options$reverse, _options$unit = options.unit, unit = _options$unit === void 0 ? "character" : _options$unit, _options$distance = options.distance, distance = _options$distance === void 0 ? 1 : _options$distance, _options$voids = options.voids, voids = _options$voids === void 0 ? false : _options$voids;
            var _options$at = options.at, at = _options$at === void 0 ? editor.selection : _options$at, _options$hanging = options.hanging, hanging = _options$hanging === void 0 ? false : _options$hanging;
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
                    mode: "highest"
                });
                if (!voids && furthestVoid) {
                    var _furthestVoid = _slicedToArray(furthestVoid, 2), voidPath = _furthestVoid[1];
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
                var _Range$edges = Range.edges(at), _Range$edges2 = _slicedToArray(_Range$edges, 2), _end = _Range$edges2[1];
                var endOfDoc = Editor.end(editor, []);
                if (!Point.equals(_end, endOfDoc)) {
                    at = Editor.unhangRange(editor, at, {
                        voids: voids
                    });
                }
            }
            var _Range$edges3 = Range.edges(at), _Range$edges4 = _slicedToArray(_Range$edges3, 2), start = _Range$edges4[0], end = _Range$edges4[1];
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
                mode: "highest"
            });
            var endVoid = voids ? null : Editor["void"](editor, {
                at: end,
                mode: "highest"
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
            })), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var entry = _step.value;
                    var _entry = _slicedToArray(entry, 2), _node2 = _entry[0], _path2 = _entry[1];
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
            } finally{
                _iterator.f();
            }
            var pathRefs = Array.from(matches, function(_ref) {
                var _ref2 = _slicedToArray(_ref, 2), p = _ref2[1];
                return Editor.pathRef(editor, p);
            });
            var startRef = Editor.pointRef(editor, start);
            var endRef = Editor.pointRef(editor, end);
            var removedText = "";
            if (!isSingleText && !startVoid) {
                var _point = startRef.current;
                var _Editor$leaf = Editor.leaf(editor, _point), _Editor$leaf2 = _slicedToArray(_Editor$leaf, 1), node = _Editor$leaf2[0];
                var path = _point.path;
                var _start = start, offset = _start.offset;
                var text = node.text.slice(offset);
                if (text.length > 0) {
                    editor.apply({
                        type: "remove_text",
                        path: path,
                        offset: offset,
                        text: text
                    });
                    removedText = text;
                }
            }
            pathRefs.reverse().map(function(r) {
                return r.unref();
            }).filter(function(r) {
                return r !== null;
            }).forEach(function(p) {
                return Transforms.removeNodes(editor, {
                    at: p,
                    voids: voids
                });
            });
            if (!endVoid) {
                var _point2 = endRef.current;
                var _Editor$leaf3 = Editor.leaf(editor, _point2), _Editor$leaf4 = _slicedToArray(_Editor$leaf3, 1), _node = _Editor$leaf4[0];
                var _path = _point2.path;
                var _offset = isSingleText ? start.offset : 0;
                var _text = _node.text.slice(_offset, end.offset);
                if (_text.length > 0) {
                    editor.apply({
                        type: "remove_text",
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
            if (isCollapsed && reverse && unit === "character" && removedText.length > 1 && removedText.match(/[\u0E00-\u0E7F]+/)) {
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
   */ insertFragment: function insertFragment(editor, fragment) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        Editor.withoutNormalizing(editor, function() {
            var _options$hanging2 = options.hanging, hanging = _options$hanging2 === void 0 ? false : _options$hanging2, _options$voids2 = options.voids, voids = _options$voids2 === void 0 ? false : _options$voids2;
            var _options$at2 = options.at, at = _options$at2 === void 0 ? editor.selection : _options$at2;
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
                    var _Range$edges5 = Range.edges(at), _Range$edges6 = _slicedToArray(_Range$edges5, 2), end = _Range$edges6[1];
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
                mode: "highest",
                voids: voids
            });
            if (inlineElementMatch) {
                var _inlineElementMatch = _slicedToArray(inlineElementMatch, 2), _inlinePath = _inlineElementMatch[1];
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
            var _blockMatch = _slicedToArray(blockMatch, 2), blockPath = _blockMatch[1];
            var isBlockStart = Editor.isStart(editor, at, blockPath);
            var isBlockEnd = Editor.isEnd(editor, at, blockPath);
            var isBlockEmpty = isBlockStart && isBlockEnd;
            var mergeStart = !isBlockStart || isBlockStart && isBlockEnd;
            var mergeEnd = !isBlockEnd;
            var _Node$first = Node.first({
                children: fragment
            }, []), _Node$first2 = _slicedToArray(_Node$first, 2), firstPath = _Node$first2[1];
            var _Node$last = Node.last({
                children: fragment
            }, []), _Node$last2 = _slicedToArray(_Node$last, 2), lastPath = _Node$last2[1];
            var matches = [];
            var matcher = function matcher(_ref3) {
                var _ref4 = _slicedToArray(_ref3, 2), n = _ref4[0], p = _ref4[1];
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
            })), _step2;
            try {
                for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
                    var entry = _step2.value;
                    if (matcher(entry)) {
                        matches.push(entry);
                    }
                }
            } catch (err) {
                _iterator2.e(err);
            } finally{
                _iterator2.f();
            }
            var starts = [];
            var middles = [];
            var ends = [];
            var starting = true;
            var hasBlocks = false;
            for(var _i = 0, _matches = matches; _i < _matches.length; _i++){
                var _matches$_i = _slicedToArray(_matches[_i], 1), node = _matches$_i[0];
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
                mode: "highest",
                voids: voids
            }), _Editor$nodes2 = _slicedToArray(_Editor$nodes, 1), inlineMatch = _Editor$nodes2[0];
            var _inlineMatch = _slicedToArray(inlineMatch, 2), inlinePath = _inlineMatch[1];
            var isInlineStart = Editor.isStart(editor, at, inlinePath);
            var isInlineEnd = Editor.isEnd(editor, at, inlinePath);
            var middleRef = Editor.pathRef(editor, isBlockEnd && !ends.length ? Path.next(blockPath) : blockPath);
            var endRef = Editor.pathRef(editor, isInlineEnd ? Path.next(inlinePath) : inlinePath);
            Transforms.splitNodes(editor, {
                at: at,
                match: function match(n) {
                    return hasBlocks ? Editor.isBlock(editor, n) : Text.isText(n) || Editor.isInline(editor, n);
                },
                mode: hasBlocks ? "lowest" : "highest",
                always: hasBlocks && (!isBlockStart || starts.length > 0) && (!isBlockEnd || ends.length > 0),
                voids: voids
            });
            var startRef = Editor.pathRef(editor, !isInlineStart || isInlineStart && isInlineEnd ? Path.next(inlinePath) : inlinePath);
            Transforms.insertNodes(editor, starts, {
                at: startRef.current,
                match: function match(n) {
                    return Text.isText(n) || Editor.isInline(editor, n);
                },
                mode: "highest",
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
                mode: "lowest",
                voids: voids
            });
            Transforms.insertNodes(editor, ends, {
                at: endRef.current,
                match: function match(n) {
                    return Text.isText(n) || Editor.isInline(editor, n);
                },
                mode: "highest",
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
   */ insertText: function insertText(editor, text) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        Editor.withoutNormalizing(editor, function() {
            var _options$voids3 = options.voids, voids = _options$voids3 === void 0 ? false : _options$voids3;
            var _options$at3 = options.at, at = _options$at3 === void 0 ? editor.selection : _options$at3;
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
            var _at = at, path = _at.path, offset = _at.offset;
            if (text.length > 0) editor.apply({
                type: "insert_text",
                path: path,
                offset: offset,
                text: text
            });
        });
    }
};
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) {
            symbols = symbols.filter(function(sym) {
                return Object.getOwnPropertyDescriptor(object, sym).enumerable;
            });
        }
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {};
        if (i % 2) {
            ownKeys(Object(source), true).forEach(function(key) {
                _defineProperty(target, key, source[key]);
            });
        } else if (Object.getOwnPropertyDescriptors) {
            Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        } else {
            ownKeys(Object(source)).forEach(function(key) {
                Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
            });
        }
    }
    return target;
}
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
__webpack_unused_export__ = createEditor; //# sourceMappingURL=index.js.map


/***/ }),

/***/ 8205:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.addBasePath = addBasePath;
var _addPathPrefix = __webpack_require__(1751);
var _normalizeTrailingSlash = __webpack_require__(9247);
const basePath =  false || "";
function addBasePath(path, required) {
    if (false) {}
    return (0, _normalizeTrailingSlash).normalizePathTrailingSlash((0, _addPathPrefix).addPathPrefix(path, basePath));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map


/***/ }),

/***/ 6330:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.addLocale = void 0;
var _normalizeTrailingSlash = __webpack_require__(9247);
const addLocale = (path, ...args)=>{
    if (false) {}
    return path;
};
exports.addLocale = addLocale;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-locale.js.map


/***/ }),

/***/ 4093:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.FLIGHT_PARAMETERS = exports.RSC_VARY_HEADER = exports.FETCH_CACHE_HEADER = exports.NEXT_ROUTER_PREFETCH = exports.NEXT_ROUTER_STATE_TREE = exports.RSC = void 0;
const RSC = "RSC";
exports.RSC = RSC;
const NEXT_ROUTER_STATE_TREE = "Next-Router-State-Tree";
exports.NEXT_ROUTER_STATE_TREE = NEXT_ROUTER_STATE_TREE;
const NEXT_ROUTER_PREFETCH = "Next-Router-Prefetch";
exports.NEXT_ROUTER_PREFETCH = NEXT_ROUTER_PREFETCH;
const FETCH_CACHE_HEADER = "x-vercel-sc-headers";
exports.FETCH_CACHE_HEADER = FETCH_CACHE_HEADER;
const RSC_VARY_HEADER = `${RSC}, ${NEXT_ROUTER_STATE_TREE}, ${NEXT_ROUTER_PREFETCH}`;
exports.RSC_VARY_HEADER = RSC_VARY_HEADER;
const FLIGHT_PARAMETERS = [
    [
        RSC
    ],
    [
        NEXT_ROUTER_STATE_TREE
    ],
    [
        NEXT_ROUTER_PREFETCH
    ]
];
exports.FLIGHT_PARAMETERS = FLIGHT_PARAMETERS;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-headers.js.map


/***/ }),

/***/ 9446:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = AppRouter;
exports.fetchServerResponse = fetchServerResponse;
var _async_to_generator = (__webpack_require__(4432)/* ["default"] */ .Z);
var _interop_require_wildcard = (__webpack_require__(1644)/* ["default"] */ .Z);
var _object_without_properties_loose = (__webpack_require__(2495)/* ["default"] */ .Z);
var _react = _interop_require_wildcard(__webpack_require__(8038));
var _client = __webpack_require__(7897);
var _appRouterContext = __webpack_require__(3280);
var _reducer = __webpack_require__(7042);
var _hooksClientContext = __webpack_require__(9274);
var _useReducerWithDevtools = __webpack_require__(7410);
var _errorBoundary = __webpack_require__(2030);
var _appRouterHeaders = __webpack_require__(4093);
function AppRouter(props) {
    const { globalErrorComponent  } = props, rest = _object_without_properties_loose(props, [
        "globalErrorComponent"
    ]);
    return /*#__PURE__*/ _react.default.createElement(_errorBoundary.ErrorBoundary, {
        errorComponent: globalErrorComponent
    }, /*#__PURE__*/ _react.default.createElement(Router, Object.assign({}, rest)));
}
function urlToUrlWithoutFlightMarker(url) {
    const urlWithoutFlightParameters = new URL(url, location.origin);
    // TODO-APP: handle .rsc for static export case
    return urlWithoutFlightParameters;
}
const HotReloader =  true ? null : 0;
function fetchServerResponse(url, flightRouterState, prefetch) {
    return _fetchServerResponse.apply(this, arguments);
}
function _fetchServerResponse() {
    _fetchServerResponse = _async_to_generator(function*(url, flightRouterState, prefetch) {
        const headers = {
            // Enable flight response
            [_appRouterHeaders.RSC]: "1",
            // Provide the current router state
            [_appRouterHeaders.NEXT_ROUTER_STATE_TREE]: JSON.stringify(flightRouterState)
        };
        if (prefetch) {
            // Enable prefetch response
            headers[_appRouterHeaders.NEXT_ROUTER_PREFETCH] = "1";
        }
        const res = yield fetch(url.toString(), {
            headers
        });
        const canonicalUrl = res.redirected ? urlToUrlWithoutFlightMarker(res.url) : undefined;
        const isFlightResponse = res.headers.get("content-type") === "application/octet-stream";
        // If fetch returns something different than flight response handle it like a mpa navigation
        if (!isFlightResponse) {
            return [
                res.url,
                undefined
            ];
        }
        // Handle the `fetch` readable stream that can be unwrapped by `React.use`.
        const flightData = yield (0, _client).createFromFetch(Promise.resolve(res));
        return [
            flightData,
            canonicalUrl
        ];
    });
    return _fetchServerResponse.apply(this, arguments);
}
// Ensure the initialParallelRoutes are not combined because of double-rendering in the browser with Strict Mode.
let initialParallelRoutes =  true ? null : 0;
const prefetched = new Set();
function findHeadInCache(cache, parallelRoutes) {
    const isLastItem = Object.keys(parallelRoutes).length === 0;
    if (isLastItem) {
        return cache.head;
    }
    for(const key in parallelRoutes){
        const [segment, childParallelRoutes] = parallelRoutes[key];
        const childSegmentMap = cache.parallelRoutes.get(key);
        if (!childSegmentMap) {
            continue;
        }
        const cacheKey = Array.isArray(segment) ? segment[1] : segment;
        const cacheNode = childSegmentMap.get(cacheKey);
        if (!cacheNode) {
            continue;
        }
        const item = findHeadInCache(cacheNode, childParallelRoutes);
        if (item) {
            return item;
        }
    }
    return undefined;
}
/**
 * The global router that wraps the application components.
 */ function Router({ initialHead , initialTree , initialCanonicalUrl , children , assetPrefix  }) {
    const initialState = (0, _react).useMemo(()=>{
        return {
            tree: initialTree,
            cache: {
                status: _appRouterContext.CacheStates.READY,
                data: null,
                subTreeData: children,
                parallelRoutes:  true ? new Map() : 0
            },
            prefetchCache: new Map(),
            pushRef: {
                pendingPush: false,
                mpaNavigation: false
            },
            focusAndScrollRef: {
                apply: false
            },
            canonicalUrl: // This is safe to do as canonicalUrl can't be rendered, it's only used to control the history updates in the useEffect further down in this file.
             false ? 0 : initialCanonicalUrl
        };
    }, [
        children,
        initialCanonicalUrl,
        initialTree
    ]);
    const [{ tree , cache , prefetchCache , pushRef , focusAndScrollRef , canonicalUrl  }, dispatch, sync] = (0, _useReducerWithDevtools).useReducerWithReduxDevtools(_reducer.reducer, initialState);
    const head = (0, _react).useMemo(()=>{
        return findHeadInCache(cache, tree[1]);
    }, [
        cache,
        tree
    ]);
    (0, _react).useEffect(()=>{
        // Ensure initialParallelRoutes is cleaned up from memory once it's used.
        initialParallelRoutes = null;
    }, []);
    // Add memoized pathname/query for useSearchParams and usePathname.
    const { searchParams , pathname  } = (0, _react).useMemo(()=>{
        const url = new URL(canonicalUrl,  true ? "http://n" : 0);
        return {
            // This is turned into a readonly class in `useSearchParams`
            searchParams: url.searchParams,
            pathname: url.pathname
        };
    }, [
        canonicalUrl
    ]);
    /**
   * Server response that only patches the cache and tree.
   */ const changeByServerResponse = (0, _react).useCallback((previousTree, flightData, overrideCanonicalUrl)=>{
        dispatch({
            type: _reducer.ACTION_SERVER_PATCH,
            flightData,
            previousTree,
            overrideCanonicalUrl,
            cache: {
                status: _appRouterContext.CacheStates.LAZY_INITIALIZED,
                data: null,
                subTreeData: null,
                parallelRoutes: new Map()
            },
            mutable: {}
        });
    }, [
        dispatch
    ]);
    /**
   * The app router that is exposed through `useRouter`. It's only concerned with dispatching actions to the reducer, does not hold state.
   */ const appRouter = (0, _react).useMemo(()=>{
        const navigate = (href, navigateType, forceOptimisticNavigation)=>{
            return dispatch({
                type: _reducer.ACTION_NAVIGATE,
                url: new URL(href, location.origin),
                forceOptimisticNavigation,
                navigateType,
                cache: {
                    status: _appRouterContext.CacheStates.LAZY_INITIALIZED,
                    data: null,
                    subTreeData: null,
                    parallelRoutes: new Map()
                },
                mutable: {}
            });
        };
        const routerInstance = {
            back: ()=>window.history.back(),
            forward: ()=>window.history.forward(),
            prefetch: _async_to_generator(function*(href) {
                // If prefetch has already been triggered, don't trigger it again.
                if (prefetched.has(href)) {
                    return;
                }
                prefetched.add(href);
                const url = new URL(href, location.origin);
                try {
                    var ref;
                    const routerTree = ((ref = window.history.state) == null ? void 0 : ref.tree) || initialTree;
                    const serverResponse = yield fetchServerResponse(url, routerTree, true);
                    // @ts-ignore startTransition exists
                    _react.default.startTransition(()=>{
                        dispatch({
                            type: _reducer.ACTION_PREFETCH,
                            url,
                            tree: routerTree,
                            serverResponse
                        });
                    });
                } catch (err) {
                    console.error("PREFETCH ERROR", err);
                }
            }),
            replace: (href, options = {})=>{
                // @ts-ignore startTransition exists
                _react.default.startTransition(()=>{
                    navigate(href, "replace", Boolean(options.forceOptimisticNavigation));
                });
            },
            push: (href, options = {})=>{
                // @ts-ignore startTransition exists
                _react.default.startTransition(()=>{
                    navigate(href, "push", Boolean(options.forceOptimisticNavigation));
                });
            },
            refresh: ()=>{
                // @ts-ignore startTransition exists
                _react.default.startTransition(()=>{
                    dispatch({
                        type: _reducer.ACTION_REFRESH,
                        cache: {
                            status: _appRouterContext.CacheStates.LAZY_INITIALIZED,
                            data: null,
                            subTreeData: null,
                            parallelRoutes: new Map()
                        },
                        mutable: {}
                    });
                });
            }
        };
        return routerInstance;
    }, [
        dispatch,
        initialTree
    ]);
    (0, _react).useEffect(()=>{
        // When mpaNavigation flag is set do a hard navigation to the new url.
        if (pushRef.mpaNavigation) {
            window.location.href = canonicalUrl;
            return;
        }
        // Identifier is shortened intentionally.
        // __NA is used to identify if the history entry can be handled by the app-router.
        // __N is used to identify if the history entry can be handled by the old router.
        const historyState = {
            __NA: true,
            tree
        };
        if (pushRef.pendingPush && (0, _reducer).createHrefFromUrl(new URL(window.location.href)) !== canonicalUrl) {
            // This intentionally mutates React state, pushRef is overwritten to ensure additional push/replace calls do not trigger an additional history entry.
            pushRef.pendingPush = false;
            window.history.pushState(historyState, "", canonicalUrl);
        } else {
            window.history.replaceState(historyState, "", canonicalUrl);
        }
        sync();
    }, [
        tree,
        pushRef,
        canonicalUrl,
        sync
    ]);
    // Add `window.nd` for debugging purposes.
    // This is not meant for use in applications as concurrent rendering will affect the cache/tree/router.
    if (false) {}
    /**
   * Handle popstate event, this is used to handle back/forward in the browser.
   * By default dispatches ACTION_RESTORE, however if the history entry was not pushed/replaced by app-router it will reload the page.
   * That case can happen when the old router injected the history entry.
   */ const onPopState = (0, _react).useCallback(({ state  })=>{
        if (!state) {
            // TODO-APP: this case only happens when pushState/replaceState was called outside of Next.js. It should probably reload the page in this case.
            return;
        }
        // This case happens when the history entry was pushed by the `pages` router.
        if (!state.__NA) {
            window.location.reload();
            return;
        }
        // @ts-ignore useTransition exists
        // TODO-APP: Ideally the back button should not use startTransition as it should apply the updates synchronously
        // Without startTransition works if the cache is there for this path
        _react.default.startTransition(()=>{
            dispatch({
                type: _reducer.ACTION_RESTORE,
                url: new URL(window.location.href),
                tree: state.tree
            });
        });
    }, [
        dispatch
    ]);
    // Register popstate event to call onPopstate.
    (0, _react).useEffect(()=>{
        window.addEventListener("popstate", onPopState);
        return ()=>{
            window.removeEventListener("popstate", onPopState);
        };
    }, [
        onPopState
    ]);
    const content = /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, head || initialHead, cache.subTreeData);
    return /*#__PURE__*/ _react.default.createElement(_hooksClientContext.PathnameContext.Provider, {
        value: pathname
    }, /*#__PURE__*/ _react.default.createElement(_hooksClientContext.SearchParamsContext.Provider, {
        value: searchParams
    }, /*#__PURE__*/ _react.default.createElement(_appRouterContext.GlobalLayoutRouterContext.Provider, {
        value: {
            changeByServerResponse,
            tree,
            focusAndScrollRef
        }
    }, /*#__PURE__*/ _react.default.createElement(_appRouterContext.AppRouterContext.Provider, {
        value: appRouter
    }, /*#__PURE__*/ _react.default.createElement(_appRouterContext.LayoutRouterContext.Provider, {
        value: {
            childNodes: cache.parallelRoutes,
            tree: tree,
            // Root node always has `url`
            // Provided in AppTreeContext to ensure it can be overwritten in layout-router
            url: canonicalUrl
        }
    }, HotReloader ? /*#__PURE__*/ _react.default.createElement(HotReloader, {
        assetPrefix: assetPrefix
    }, content) : content)))));
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router.js.map


/***/ }),

/***/ 5842:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.bailoutToClientRendering = bailoutToClientRendering;
var _dynamicNoSsr = __webpack_require__(887);
var _staticGenerationAsyncStorage = __webpack_require__(683);
function bailoutToClientRendering() {
    const staticGenerationStore = _staticGenerationAsyncStorage.staticGenerationAsyncStorage && "getStore" in _staticGenerationAsyncStorage.staticGenerationAsyncStorage ? _staticGenerationAsyncStorage.staticGenerationAsyncStorage == null ? void 0 : _staticGenerationAsyncStorage.staticGenerationAsyncStorage.getStore() : _staticGenerationAsyncStorage.staticGenerationAsyncStorage;
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.forceStatic) {
        return true;
    }
    if (staticGenerationStore == null ? void 0 : staticGenerationStore.isStaticGeneration) {
        (0, _dynamicNoSsr).suspense();
    }
    return false;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bailout-to-client-rendering.js.map


/***/ }),

/***/ 2030:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = GlobalError;
exports.ErrorBoundary = ErrorBoundary;
var _interop_require_default = (__webpack_require__(6356)/* ["default"] */ .Z);
var _react = _interop_require_default(__webpack_require__(8038));
function GlobalError({ error  }) {
    return /*#__PURE__*/ _react.default.createElement("html", null, /*#__PURE__*/ _react.default.createElement("head", null), /*#__PURE__*/ _react.default.createElement("body", null, /*#__PURE__*/ _react.default.createElement("div", {
        style: styles.error
    }, /*#__PURE__*/ _react.default.createElement("div", {
        style: styles.desc
    }, /*#__PURE__*/ _react.default.createElement("h2", {
        style: styles.text
    }, "Application error: a client-side exception has occurred (see the browser console for more information)."), (error == null ? void 0 : error.digest) && /*#__PURE__*/ _react.default.createElement("p", {
        style: styles.text
    }, `Digest: ${error.digest}`)))));
}
const styles = {
    error: {
        fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
        height: "100vh",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center"
    },
    desc: {
        display: "inline-block",
        textAlign: "left",
        lineHeight: "49px",
        height: "49px",
        verticalAlign: "middle"
    },
    text: {
        fontSize: "14px",
        fontWeight: "normal",
        lineHeight: "49px",
        margin: 0,
        padding: 0
    }
};
class ErrorBoundaryHandler extends _react.default.Component {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    render() {
        if (this.state.error) {
            return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, this.props.errorStyles, /*#__PURE__*/ _react.default.createElement(this.props.errorComponent, {
                error: this.state.error,
                reset: this.reset
            }));
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.reset = ()=>{
            this.setState({
                error: null
            });
        };
        this.state = {
            error: null
        };
    }
}
exports.ErrorBoundaryHandler = ErrorBoundaryHandler;
function ErrorBoundary({ errorComponent , errorStyles , children  }) {
    if (errorComponent) {
        return /*#__PURE__*/ _react.default.createElement(ErrorBoundaryHandler, {
            errorComponent: errorComponent,
            errorStyles: errorStyles
        }, children);
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-boundary.js.map


/***/ }),

/***/ 9864:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createInfinitePromise = createInfinitePromise;
/**
 * Used to cache in createInfinitePromise
 */ let infinitePromise;
function createInfinitePromise() {
    if (!infinitePromise) {
        // Only create the Promise once
        infinitePromise = new Promise(()=>{
        // This is used to debug when the rendering is never updated.
        // setTimeout(() => {
        //   infinitePromise = new Error('Infinite promise')
        //   resolve()
        // }, 5000)
        });
    }
    return infinitePromise;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=infinite-promise.js.map


/***/ }),

/***/ 3258:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = OuterLayoutRouter;
exports.InnerLayoutRouter = InnerLayoutRouter;
var _extends = (__webpack_require__(7688)/* ["default"] */ .Z);
var _interop_require_default = (__webpack_require__(6356)/* ["default"] */ .Z);
var _interop_require_wildcard = (__webpack_require__(1644)/* ["default"] */ .Z);
var _react = _interop_require_wildcard(__webpack_require__(8038));
var _reactDom = _interop_require_default(__webpack_require__(8704));
var _appRouterContext = __webpack_require__(3280);
var _appRouter = __webpack_require__(9446);
var _infinitePromise = __webpack_require__(9864);
var _errorBoundary = __webpack_require__(2030);
var _matchSegments = __webpack_require__(6197);
var _navigation = __webpack_require__(2575);
function OuterLayoutRouter({ parallelRouterKey , segmentPath , childProp , error , errorStyles , templateStyles , loading , loadingStyles , hasLoading , template , notFound , notFoundStyles , rootLayoutIncluded  }) {
    const context = (0, _react).useContext(_appRouterContext.LayoutRouterContext);
    if (!context) {
        throw new Error("invariant expected layout router to be mounted");
    }
    const { childNodes , tree , url  } = context;
    // Get the current parallelRouter cache node
    let childNodesForParallelRouter = childNodes.get(parallelRouterKey);
    // If the parallel router cache node does not exist yet, create it.
    // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
    if (!childNodesForParallelRouter) {
        childNodes.set(parallelRouterKey, new Map());
        childNodesForParallelRouter = childNodes.get(parallelRouterKey);
    }
    // Get the active segment in the tree
    // The reason arrays are used in the data format is that these are transferred from the server to the browser so it's optimized to save bytes.
    const treeSegment = tree[1][parallelRouterKey][0];
    const childPropSegment = Array.isArray(childProp.segment) ? childProp.segment[1] : childProp.segment;
    // If segment is an array it's a dynamic route and we want to read the dynamic route value as the segment to get from the cache.
    const currentChildSegment = Array.isArray(treeSegment) ? treeSegment[1] : treeSegment;
    /**
   * Decides which segments to keep rendering, all segments that are not active will be wrapped in `<Offscreen>`.
   */ // TODO-APP: Add handling of `<Offscreen>` when it's available.
    const preservedSegments = [
        currentChildSegment
    ];
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, preservedSegments.map((preservedSegment)=>{
        return(/*
            - Error boundary
              - Only renders error boundary if error component is provided.
              - Rendered for each segment to ensure they have their own error state.
            - Loading boundary
              - Only renders suspense boundary if loading components is provided.
              - Rendered for each segment to ensure they have their own loading state.
              - Passed to the router during rendering to ensure it can be immediately rendered when suspending on a Flight fetch.
          */ /*#__PURE__*/ _react.default.createElement(_appRouterContext.TemplateContext.Provider, {
            key: preservedSegment,
            value: /*#__PURE__*/ _react.default.createElement(_errorBoundary.ErrorBoundary, {
                errorComponent: error,
                errorStyles: errorStyles
            }, /*#__PURE__*/ _react.default.createElement(LoadingBoundary, {
                hasLoading: hasLoading,
                loading: loading,
                loadingStyles: loadingStyles
            }, /*#__PURE__*/ _react.default.createElement(NotFoundBoundary, {
                notFound: notFound,
                notFoundStyles: notFoundStyles
            }, /*#__PURE__*/ _react.default.createElement(RedirectBoundary, null, /*#__PURE__*/ _react.default.createElement(InnerLayoutRouter, {
                parallelRouterKey: parallelRouterKey,
                url: url,
                tree: tree,
                childNodes: childNodesForParallelRouter,
                childProp: childPropSegment === preservedSegment ? childProp : null,
                segmentPath: segmentPath,
                path: preservedSegment,
                isActive: currentChildSegment === preservedSegment,
                rootLayoutIncluded: rootLayoutIncluded
            })))))
        }, /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, templateStyles, template)));
    }));
}
/**
 * Add refetch marker to router state at the point of the current layout segment.
 * This ensures the response returned is not further down than the current layout segment.
 */ function walkAddRefetch(segmentPathToWalk, treeToRecreate) {
    if (segmentPathToWalk) {
        const [segment, parallelRouteKey] = segmentPathToWalk;
        const isLast = segmentPathToWalk.length === 2;
        if ((0, _matchSegments).matchSegment(treeToRecreate[0], segment)) {
            if (treeToRecreate[1].hasOwnProperty(parallelRouteKey)) {
                if (isLast) {
                    const subTree = walkAddRefetch(undefined, treeToRecreate[1][parallelRouteKey]);
                    return [
                        treeToRecreate[0],
                        _extends({}, treeToRecreate[1], {
                            [parallelRouteKey]: [
                                subTree[0],
                                subTree[1],
                                subTree[2],
                                "refetch"
                            ]
                        })
                    ];
                }
                return [
                    treeToRecreate[0],
                    _extends({}, treeToRecreate[1], {
                        [parallelRouteKey]: walkAddRefetch(segmentPathToWalk.slice(2), treeToRecreate[1][parallelRouteKey])
                    })
                ];
            }
        }
    }
    return treeToRecreate;
}
// TODO-APP: Replace with new React API for finding dom nodes without a `ref` when available
/**
 * Wraps ReactDOM.findDOMNode with additional logic to hide React Strict Mode warning
 */ function findDOMNode(instance) {
    // Tree-shake for server bundle
    if (false) {}
    // Only apply strict mode warning when not in production
    if (false) {}
    return _reactDom.default.findDOMNode(instance);
}
/**
 * Check if the top of the HTMLElement is in the viewport.
 */ function topOfElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0;
}
class ScrollAndFocusHandler extends _react.default.Component {
    componentDidMount() {
        // Handle scroll and focus, it's only applied once in the first useEffect that triggers that changed.
        const { focusAndScrollRef  } = this.props;
        const domNode = findDOMNode(this);
        if (focusAndScrollRef.apply && domNode instanceof HTMLElement) {
            // State is mutated to ensure that the focus and scroll is applied only once.
            focusAndScrollRef.apply = false;
            // Set focus on the element
            domNode.focus();
            // Only scroll into viewport when the layout is not visible currently.
            if (!topOfElementInViewport(domNode)) {
                const htmlElement = document.documentElement;
                const existing = htmlElement.style.scrollBehavior;
                htmlElement.style.scrollBehavior = "auto";
                // In Chrome-based browsers we need to force reflow before calling `scrollTo`.
                // Otherwise it will not pickup the change in scrollBehavior
                // More info here: https://github.com/vercel/next.js/issues/40719#issuecomment-1336248042
                htmlElement.getClientRects();
                domNode.scrollIntoView();
                htmlElement.style.scrollBehavior = existing;
            }
        }
    }
    render() {
        return this.props.children;
    }
}
function InnerLayoutRouter({ parallelRouterKey , url , childNodes , childProp , segmentPath , tree , // isActive,
path , rootLayoutIncluded  }) {
    const context = (0, _react).useContext(_appRouterContext.GlobalLayoutRouterContext);
    if (!context) {
        throw new Error("invariant global layout router not mounted");
    }
    const { changeByServerResponse , tree: fullTree , focusAndScrollRef  } = context;
    // Read segment path from the parallel router cache node.
    let childNode = childNodes.get(path);
    // If childProp is available this means it's the Flight / SSR case.
    if (childProp && // TODO-APP: verify if this can be null based on user code
    childProp.current !== null) {
        if (childNode && childNode.status === _appRouterContext.CacheStates.LAZY_INITIALIZED) {
            // @ts-expect-error TODO-APP: handle changing of the type
            childNode.status = _appRouterContext.CacheStates.READY;
            // @ts-expect-error TODO-APP: handle changing of the type
            childNode.subTreeData = childProp.current;
            // Mutates the prop in order to clean up the memory associated with the subTreeData as it is now part of the cache.
            childProp.current = null;
        } else {
            // Add the segment's subTreeData to the cache.
            // This writes to the cache when there is no item in the cache yet. It never *overwrites* existing cache items which is why it's safe in concurrent mode.
            childNodes.set(path, {
                status: _appRouterContext.CacheStates.READY,
                data: null,
                subTreeData: childProp.current,
                parallelRoutes: new Map()
            });
            // Mutates the prop in order to clean up the memory associated with the subTreeData as it is now part of the cache.
            childProp.current = null;
            // In the above case childNode was set on childNodes, so we have to get it from the cacheNodes again.
            childNode = childNodes.get(path);
        }
    }
    // When childNode is not available during rendering client-side we need to fetch it from the server.
    if (!childNode || childNode.status === _appRouterContext.CacheStates.LAZY_INITIALIZED) {
        /**
     * Router state with refetch marker added
     */ // TODO-APP: remove ''
        const refetchTree = walkAddRefetch([
            "",
            ...segmentPath
        ], fullTree);
        /**
     * Flight data fetch kicked off during render and put into the cache.
     */ childNodes.set(path, {
            status: _appRouterContext.CacheStates.DATA_FETCH,
            data: (0, _appRouter).fetchServerResponse(new URL(url, location.origin), refetchTree),
            subTreeData: null,
            head: childNode && childNode.status === _appRouterContext.CacheStates.LAZY_INITIALIZED ? childNode.head : undefined,
            parallelRoutes: childNode && childNode.status === _appRouterContext.CacheStates.LAZY_INITIALIZED ? childNode.parallelRoutes : new Map()
        });
        // In the above case childNode was set on childNodes, so we have to get it from the cacheNodes again.
        childNode = childNodes.get(path);
    }
    // This case should never happen so it throws an error. It indicates there's a bug in the Next.js.
    if (!childNode) {
        throw new Error("Child node should always exist");
    }
    // This case should never happen so it throws an error. It indicates there's a bug in the Next.js.
    if (childNode.subTreeData && childNode.data) {
        throw new Error("Child node should not have both subTreeData and data");
    }
    // If cache node has a data request we have to unwrap response by `use` and update the cache.
    if (childNode.data) {
        /**
     * Flight response data
     */ // When the data has not resolved yet `use` will suspend here.
        const [flightData, overrideCanonicalUrl] = (0, _react).use(childNode.data);
        // Handle case when navigating to page in `pages` from `app`
        if (typeof flightData === "string") {
            window.location.href = url;
            return null;
        }
        // segmentPath from the server does not match the layout's segmentPath
        childNode.data = null;
        // setTimeout is used to start a new transition during render, this is an intentional hack around React.
        setTimeout(()=>{
            // @ts-ignore startTransition exists
            _react.default.startTransition(()=>{
                changeByServerResponse(fullTree, flightData, overrideCanonicalUrl);
            });
        });
        // Suspend infinitely as `changeByServerResponse` will cause a different part of the tree to be rendered.
        (0, _react).use((0, _infinitePromise).createInfinitePromise());
    }
    // If cache node has no subTreeData and no data request we have to infinitely suspend as the data will likely flow in from another place.
    // TODO-APP: double check users can't return null in a component that will kick in here.
    if (!childNode.subTreeData) {
        (0, _react).use((0, _infinitePromise).createInfinitePromise());
    }
    const subtree = /*#__PURE__*/ _react.default.createElement(_appRouterContext.LayoutRouterContext.Provider, {
        value: {
            tree: tree[1][parallelRouterKey],
            childNodes: childNode.parallelRoutes,
            // TODO-APP: overriding of url for parallel routes
            url: url
        }
    }, childNode.subTreeData);
    // Ensure root layout is not wrapped in a div as the root layout renders `<html>`
    return rootLayoutIncluded ? /*#__PURE__*/ _react.default.createElement(ScrollAndFocusHandler, {
        focusAndScrollRef: focusAndScrollRef
    }, subtree) : subtree;
}
/**
 * Renders suspense boundary with the provided "loading" property as the fallback.
 * If no loading property is provided it renders the children without a suspense boundary.
 */ function LoadingBoundary({ children , loading , loadingStyles , hasLoading  }) {
    if (hasLoading) {
        return /*#__PURE__*/ _react.default.createElement(_react.default.Suspense, {
            fallback: /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, loadingStyles, loading)
        }, children);
    }
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
function HandleRedirect({ redirect  }) {
    const router = (0, _navigation).useRouter();
    (0, _react).useEffect(()=>{
        router.replace(redirect, {});
    }, [
        redirect,
        router
    ]);
    return null;
}
class RedirectErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        var ref;
        if (error == null ? void 0 : (ref = error.digest) == null ? void 0 : ref.startsWith("NEXT_REDIRECT")) {
            const url = error.digest.split(";")[1];
            return {
                redirect: url
            };
        }
        // Re-throw if error is not for redirect
        throw error;
    }
    render() {
        const redirect = this.state.redirect;
        if (redirect !== null) {
            return /*#__PURE__*/ _react.default.createElement(HandleRedirect, {
                redirect: redirect
            });
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            redirect: null
        };
    }
}
function RedirectBoundary({ children  }) {
    const router = (0, _navigation).useRouter();
    return /*#__PURE__*/ _react.default.createElement(RedirectErrorBoundary, {
        router: router
    }, children);
}
class NotFoundErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((error == null ? void 0 : error.digest) === "NEXT_NOT_FOUND") {
            return {
                notFoundTriggered: true
            };
        }
        // Re-throw if error is not for 404
        throw error;
    }
    render() {
        if (this.state.notFoundTriggered) {
            return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("meta", {
                name: "robots",
                content: "noindex"
            }), this.props.notFoundStyles, this.props.notFound);
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            notFoundTriggered: false
        };
    }
}
function NotFoundBoundary({ notFound , notFoundStyles , children  }) {
    return notFound ? /*#__PURE__*/ _react.default.createElement(NotFoundErrorBoundary, {
        notFound: notFound,
        notFoundStyles: notFoundStyles
    }, children) : /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=layout-router.js.map


/***/ }),

/***/ 6197:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.matchSegment = void 0;
const matchSegment = (existingSegment, segment)=>{
    // Common case: segment is just a string
    if (typeof existingSegment === "string" && typeof segment === "string") {
        return existingSegment === segment;
    }
    // Dynamic parameter case: segment is an array with param/value. Both param and value are compared.
    if (Array.isArray(existingSegment) && Array.isArray(segment)) {
        return existingSegment[0] === segment[0] && existingSegment[1] === segment[1];
    }
    return false;
};
exports.matchSegment = matchSegment;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=match-segments.js.map


/***/ }),

/***/ 2575:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useSearchParams = useSearchParams;
exports.usePathname = usePathname;
Object.defineProperty(exports, "ServerInsertedHTMLContext", ({
    enumerable: true,
    get: function() {
        return _serverInsertedHtml.ServerInsertedHTMLContext;
    }
}));
Object.defineProperty(exports, "useServerInsertedHTML", ({
    enumerable: true,
    get: function() {
        return _serverInsertedHtml.useServerInsertedHTML;
    }
}));
exports.useRouter = useRouter;
exports.useSelectedLayoutSegments = useSelectedLayoutSegments;
exports.useSelectedLayoutSegment = useSelectedLayoutSegment;
Object.defineProperty(exports, "redirect", ({
    enumerable: true,
    get: function() {
        return _redirect.redirect;
    }
}));
Object.defineProperty(exports, "notFound", ({
    enumerable: true,
    get: function() {
        return _notFound.notFound;
    }
}));
var _react = __webpack_require__(8038);
var _appRouterContext = __webpack_require__(3280);
var _hooksClientContext = __webpack_require__(9274);
var _bailoutToClientRendering = __webpack_require__(5842);
var _serverInsertedHtml = __webpack_require__(3349);
var _redirect = __webpack_require__(8842);
var _notFound = __webpack_require__(1426);
const INTERNAL_URLSEARCHPARAMS_INSTANCE = Symbol("internal for urlsearchparams readonly");
function readonlyURLSearchParamsError() {
    return new Error("ReadonlyURLSearchParams cannot be modified");
}
class ReadonlyURLSearchParams {
    [Symbol.iterator]() {
        return this[INTERNAL_URLSEARCHPARAMS_INSTANCE][Symbol.iterator]();
    }
    append() {
        throw readonlyURLSearchParamsError();
    }
    delete() {
        throw readonlyURLSearchParamsError();
    }
    set() {
        throw readonlyURLSearchParamsError();
    }
    sort() {
        throw readonlyURLSearchParamsError();
    }
    constructor(urlSearchParams){
        // Since `new Headers` uses `this.append()` to fill the headers object ReadonlyHeaders can't extend from Headers directly as it would throw.
        this[INTERNAL_URLSEARCHPARAMS_INSTANCE] = urlSearchParams;
        this.entries = urlSearchParams.entries.bind(urlSearchParams);
        this.forEach = urlSearchParams.forEach.bind(urlSearchParams);
        this.get = urlSearchParams.get.bind(urlSearchParams);
        this.getAll = urlSearchParams.getAll.bind(urlSearchParams);
        this.has = urlSearchParams.has.bind(urlSearchParams);
        this.keys = urlSearchParams.keys.bind(urlSearchParams);
        this.values = urlSearchParams.values.bind(urlSearchParams);
        this.toString = urlSearchParams.toString.bind(urlSearchParams);
    }
}
function useSearchParams() {
    const searchParams = (0, _react).useContext(_hooksClientContext.SearchParamsContext);
    const readonlySearchParams = (0, _react).useMemo(()=>{
        return new ReadonlyURLSearchParams(searchParams || new URLSearchParams());
    }, [
        searchParams
    ]);
    if ((0, _bailoutToClientRendering).bailoutToClientRendering()) {
        // TODO-APP: handle dynamic = 'force-static' here and on the client
        return readonlySearchParams;
    }
    if (!searchParams) {
        throw new Error("invariant expected search params to be mounted");
    }
    return readonlySearchParams;
}
function usePathname() {
    return (0, _react).useContext(_hooksClientContext.PathnameContext);
}
function useRouter() {
    const router = (0, _react).useContext(_appRouterContext.AppRouterContext);
    if (router === null) {
        throw new Error("invariant expected app router to be mounted");
    }
    return router;
}
// TODO-APP: handle parallel routes
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first = true, segmentPath = []) {
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        var _children;
        node = (_children = parallelRoutes.children) != null ? _children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    const segmentValue = Array.isArray(segment) ? segment[1] : segment;
    if (!segmentValue) return segmentPath;
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
function useSelectedLayoutSegments(parallelRouteKey = "children") {
    const { tree  } = (0, _react).useContext(_appRouterContext.LayoutRouterContext);
    return getSelectedLayoutSegmentPath(tree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey = "children") {
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (selectedLayoutSegments.length === 0) {
        return null;
    }
    return selectedLayoutSegments[0];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map


/***/ }),

/***/ 1426:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.notFound = notFound;
exports.NOT_FOUND_ERROR_CODE = void 0;
const NOT_FOUND_ERROR_CODE = "NEXT_NOT_FOUND";
exports.NOT_FOUND_ERROR_CODE = NOT_FOUND_ERROR_CODE;
function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(NOT_FOUND_ERROR_CODE);
    error.digest = NOT_FOUND_ERROR_CODE;
    throw error;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map


/***/ }),

/***/ 8842:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.redirect = redirect;
exports.REDIRECT_ERROR_CODE = void 0;
const REDIRECT_ERROR_CODE = "NEXT_REDIRECT";
exports.REDIRECT_ERROR_CODE = REDIRECT_ERROR_CODE;
function redirect(url) {
    // eslint-disable-next-line no-throw-literal
    const error = new Error(REDIRECT_ERROR_CODE);
    error.digest = REDIRECT_ERROR_CODE + ";" + url;
    throw error;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map


/***/ }),

/***/ 7042:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createHrefFromUrl = createHrefFromUrl;
exports.reducer = exports.ACTION_PREFETCH = exports.ACTION_SERVER_PATCH = exports.ACTION_RESTORE = exports.ACTION_NAVIGATE = exports.ACTION_REFRESH = void 0;
var _extends = (__webpack_require__(7688)/* ["default"] */ .Z);
var _appRouterContext = __webpack_require__(3280);
var _matchSegments = __webpack_require__(6197);
var _appRouter = __webpack_require__(9446);
/**
 * Create data fetching record for Promise.
 */ // TODO-APP: change `any` to type inference.
function createRecordFromThenable(thenable) {
    thenable.status = "pending";
    thenable.then((value)=>{
        if (thenable.status === "pending") {
            thenable.status = "fulfilled";
            thenable.value = value;
        }
    }, (err)=>{
        if (thenable.status === "pending") {
            thenable.status = "rejected";
            thenable.value = err;
        }
    });
    return thenable;
}
/**
 * Read record value or throw Promise if it's not resolved yet.
 */ function readRecordValue(thenable) {
    // @ts-expect-error TODO: fix type
    if (thenable.status === "fulfilled") {
        // @ts-expect-error TODO: fix type
        return thenable.value;
    } else {
        throw thenable;
    }
}
function createHrefFromUrl(url) {
    return url.pathname + url.search + url.hash;
}
/**
 * Invalidate cache one level down from the router state.
 */ function invalidateCacheByRouterState(newCache, existingCache, routerState) {
    // Remove segment that we got data for so that it is filled in during rendering of subTreeData.
    for(const key in routerState[1]){
        const segmentForParallelRoute = routerState[1][key][0];
        const cacheKey = Array.isArray(segmentForParallelRoute) ? segmentForParallelRoute[1] : segmentForParallelRoute;
        const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
        if (existingParallelRoutesCacheNode) {
            let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
            parallelRouteCacheNode.delete(cacheKey);
            newCache.parallelRoutes.set(key, parallelRouteCacheNode);
        }
    }
}
function fillLazyItemsTillLeafWithHead(newCache, existingCache, routerState, head) {
    const isLastSegment = Object.keys(routerState[1]).length === 0;
    if (isLastSegment) {
        newCache.head = head;
        return;
    }
    // Remove segment that we got data for so that it is filled in during rendering of subTreeData.
    for(const key in routerState[1]){
        const parallelRouteState = routerState[1][key];
        const segmentForParallelRoute = parallelRouteState[0];
        const cacheKey = Array.isArray(segmentForParallelRoute) ? segmentForParallelRoute[1] : segmentForParallelRoute;
        if (existingCache) {
            const existingParallelRoutesCacheNode = existingCache.parallelRoutes.get(key);
            if (existingParallelRoutesCacheNode) {
                let parallelRouteCacheNode = new Map(existingParallelRoutesCacheNode);
                parallelRouteCacheNode.delete(cacheKey);
                const newCacheNode = {
                    status: _appRouterContext.CacheStates.LAZY_INITIALIZED,
                    data: null,
                    subTreeData: null,
                    parallelRoutes: new Map()
                };
                parallelRouteCacheNode.set(cacheKey, newCacheNode);
                fillLazyItemsTillLeafWithHead(newCacheNode, undefined, parallelRouteState, head);
                newCache.parallelRoutes.set(key, parallelRouteCacheNode);
                continue;
            }
        }
        const newCacheNode1 = {
            status: _appRouterContext.CacheStates.LAZY_INITIALIZED,
            data: null,
            subTreeData: null,
            parallelRoutes: new Map()
        };
        newCache.parallelRoutes.set(key, new Map([
            [
                cacheKey,
                newCacheNode1
            ]
        ]));
        fillLazyItemsTillLeafWithHead(newCacheNode1, undefined, parallelRouteState, head);
    }
}
/**
 * Fill cache with subTreeData based on flightDataPath
 */ function fillCacheWithNewSubTreeData(newCache, existingCache, flightDataPath) {
    const isLastEntry = flightDataPath.length <= 5;
    const [parallelRouteKey, segment] = flightDataPath;
    const segmentForCache = Array.isArray(segment) ? segment[1] : segment;
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap.get(segmentForCache);
    let childCacheNode = childSegmentMap.get(segmentForCache);
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.data || childCacheNode === existingChildCacheNode) {
            childCacheNode = {
                status: _appRouterContext.CacheStates.READY,
                data: null,
                subTreeData: flightDataPath[3],
                // Ensure segments other than the one we got data for are preserved.
                parallelRoutes: existingChildCacheNode ? new Map(existingChildCacheNode.parallelRoutes) : new Map()
            };
            if (existingChildCacheNode) {
                invalidateCacheByRouterState(childCacheNode, existingChildCacheNode, flightDataPath[2]);
            }
            fillLazyItemsTillLeafWithHead(childCacheNode, existingChildCacheNode, flightDataPath[2], flightDataPath[4]);
            childSegmentMap.set(segmentForCache, childCacheNode);
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(segmentForCache, childCacheNode);
    }
    fillCacheWithNewSubTreeData(childCacheNode, existingChildCacheNode, flightDataPath.slice(2));
}
/**
 * Fill cache up to the end of the flightSegmentPath, invalidating anything below it.
 */ function invalidateCacheBelowFlightSegmentPath(newCache, existingCache, flightSegmentPath) {
    const isLastEntry = flightSegmentPath.length <= 2;
    const [parallelRouteKey, segment] = flightSegmentPath;
    const segmentForCache = Array.isArray(segment) ? segment[1] : segment;
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    // In case of last entry don't copy further down.
    if (isLastEntry) {
        childSegmentMap.delete(segmentForCache);
        return;
    }
    const existingChildCacheNode = existingChildSegmentMap.get(segmentForCache);
    let childCacheNode = childSegmentMap.get(segmentForCache);
    if (!childCacheNode || !existingChildCacheNode) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(segmentForCache, childCacheNode);
    }
    invalidateCacheBelowFlightSegmentPath(childCacheNode, existingChildCacheNode, flightSegmentPath.slice(2));
}
/**
 * Fill cache with subTreeData based on flightDataPath that was prefetched
 * This operation is append-only to the existing cache.
 */ function fillCacheWithPrefetchedSubTreeData(existingCache, flightDataPath) {
    const isLastEntry = flightDataPath.length <= 5;
    const [parallelRouteKey, segment] = flightDataPath;
    const segmentForCache = Array.isArray(segment) ? segment[1] : segment;
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        return;
    }
    const existingChildCacheNode = existingChildSegmentMap.get(segmentForCache);
    if (isLastEntry) {
        if (!existingChildCacheNode) {
            const childCacheNode = {
                status: _appRouterContext.CacheStates.READY,
                data: null,
                subTreeData: flightDataPath[3],
                parallelRoutes: new Map()
            };
            fillLazyItemsTillLeafWithHead(childCacheNode, existingChildCacheNode, flightDataPath[2], flightDataPath[4]);
            existingChildSegmentMap.set(segmentForCache, childCacheNode);
        }
        return;
    }
    if (!existingChildCacheNode) {
        // Bailout because the existing cache does not have the path to the leaf node
        return;
    }
    fillCacheWithPrefetchedSubTreeData(existingChildCacheNode, flightDataPath.slice(2));
}
/**
 * Kick off fetch based on the common layout between two routes. Fill cache with data property holding the in-progress fetch.
 */ function fillCacheWithDataProperty(newCache, existingCache, segments, fetchResponse) {
    const isLastEntry = segments.length === 1;
    const parallelRouteKey = "children";
    const [segment] = segments;
    const existingChildSegmentMap = existingCache.parallelRoutes.get(parallelRouteKey);
    if (!existingChildSegmentMap) {
        // Bailout because the existing cache does not have the path to the leaf node
        // Will trigger lazy fetch in layout-router because of missing segment
        return {
            bailOptimistic: true
        };
    }
    let childSegmentMap = newCache.parallelRoutes.get(parallelRouteKey);
    if (!childSegmentMap || childSegmentMap === existingChildSegmentMap) {
        childSegmentMap = new Map(existingChildSegmentMap);
        newCache.parallelRoutes.set(parallelRouteKey, childSegmentMap);
    }
    const existingChildCacheNode = existingChildSegmentMap.get(segment);
    let childCacheNode = childSegmentMap.get(segment);
    // In case of last segment start off the fetch at this level and don't copy further down.
    if (isLastEntry) {
        if (!childCacheNode || !childCacheNode.data || childCacheNode === existingChildCacheNode) {
            childSegmentMap.set(segment, {
                status: _appRouterContext.CacheStates.DATA_FETCH,
                data: fetchResponse(),
                subTreeData: null,
                parallelRoutes: new Map()
            });
        }
        return;
    }
    if (!childCacheNode || !existingChildCacheNode) {
        // Start fetch in the place where the existing cache doesn't have the data yet.
        if (!childCacheNode) {
            childSegmentMap.set(segment, {
                status: _appRouterContext.CacheStates.DATA_FETCH,
                data: fetchResponse(),
                subTreeData: null,
                parallelRoutes: new Map()
            });
        }
        return;
    }
    if (childCacheNode === existingChildCacheNode) {
        childCacheNode = {
            status: childCacheNode.status,
            data: childCacheNode.data,
            subTreeData: childCacheNode.subTreeData,
            parallelRoutes: new Map(childCacheNode.parallelRoutes)
        };
        childSegmentMap.set(segment, childCacheNode);
    }
    return fillCacheWithDataProperty(childCacheNode, existingChildCacheNode, segments.slice(1), fetchResponse);
}
/**
 * Create optimistic version of router state based on the existing router state and segments.
 * This is used to allow rendering layout-routers up till the point where data is missing.
 */ function createOptimisticTree(segments, flightRouterState, _isFirstSegment, parentRefetch, _href) {
    const [existingSegment, existingParallelRoutes] = flightRouterState || [
        null,
        {}
    ];
    const segment = segments[0];
    const isLastSegment = segments.length === 1;
    const segmentMatches = existingSegment !== null && (0, _matchSegments).matchSegment(existingSegment, segment);
    const shouldRefetchThisLevel = !flightRouterState || !segmentMatches;
    let parallelRoutes = {};
    if (existingSegment !== null && segmentMatches) {
        parallelRoutes = existingParallelRoutes;
    }
    let childTree;
    if (!isLastSegment) {
        const childItem = createOptimisticTree(segments.slice(1), parallelRoutes ? parallelRoutes.children : null, false, parentRefetch || shouldRefetchThisLevel);
        childTree = childItem;
    }
    const result = [
        segment,
        _extends({}, parallelRoutes, childTree ? {
            children: childTree
        } : {})
    ];
    if (!parentRefetch && shouldRefetchThisLevel) {
        result[3] = "refetch";
    }
    return result;
}
/**
 * Apply the router state from the Flight response. Creates a new router state tree.
 */ function applyRouterStatePatchToTree(flightSegmentPath, flightRouterState, treePatch) {
    const [segment, parallelRoutes, , , isRootLayout] = flightRouterState;
    // Root refresh
    if (flightSegmentPath.length === 1) {
        const tree = [
            ...treePatch
        ];
        return tree;
    }
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    // Tree path returned from the server should always match up with the current tree in the browser
    if (!(0, _matchSegments).matchSegment(currentSegment, segment)) {
        return null;
    }
    const lastSegment = flightSegmentPath.length === 2;
    let parallelRoutePatch;
    if (lastSegment) {
        parallelRoutePatch = treePatch;
    } else {
        parallelRoutePatch = applyRouterStatePatchToTree(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey], treePatch);
        if (parallelRoutePatch === null) {
            return null;
        }
    }
    const tree1 = [
        flightSegmentPath[0],
        _extends({}, parallelRoutes, {
            [parallelRouteKey]: parallelRoutePatch
        })
    ];
    // Current segment is the root layout
    if (isRootLayout) {
        tree1[4] = true;
    }
    return tree1;
}
function shouldHardNavigate(flightSegmentPath, flightRouterState, treePatch) {
    const [segment, parallelRoutes] = flightRouterState;
    // TODO-APP: Check if `as` can be replaced.
    const [currentSegment, parallelRouteKey] = flightSegmentPath;
    // Check if current segment matches the existing segment.
    if (!(0, _matchSegments).matchSegment(currentSegment, segment)) {
        // If dynamic parameter in tree doesn't match up with segment path a hard navigation is triggered.
        if (Array.isArray(currentSegment)) {
            return true;
        }
        // If the existing segment did not match soft navigation is triggered.
        return false;
    }
    const lastSegment = flightSegmentPath.length <= 2;
    if (lastSegment) {
        return false;
    }
    return shouldHardNavigate(flightSegmentPath.slice(2), parallelRoutes[parallelRouteKey], treePatch);
}
function isNavigatingToNewRootLayout(currentTree, nextTree) {
    // Compare segments
    const currentTreeSegment = currentTree[0];
    const nextTreeSegment = nextTree[0];
    // If any segment is different before we find the root layout, the root layout has changed.
    // E.g. /same/(group1)/layout.js -> /same/(group2)/layout.js
    // First segment is 'same' for both, keep looking. (group1) changed to (group2) before the root layout was found, it must have changed.
    if (Array.isArray(currentTreeSegment) && Array.isArray(nextTreeSegment)) {
        // Compare dynamic param name and type but ignore the value, different values would not affect the current root layout
        // /[name] - /slug1 and /slug2, both values (slug1 & slug2) still has the same layout /[name]/layout.js
        if (currentTreeSegment[0] !== nextTreeSegment[0] || currentTreeSegment[2] !== nextTreeSegment[2]) {
            return true;
        }
    } else if (currentTreeSegment !== nextTreeSegment) {
        return true;
    }
    // Current tree root layout found
    if (currentTree[4]) {
        // If the next tree doesn't have the root layout flag, it must have changed.
        return !nextTree[4];
    }
    // Current tree  didn't have its root layout here, must have changed.
    if (nextTree[4]) {
        return true;
    }
    // We can't assume it's `parallelRoutes.children` here in case the root layout is `app/@something/layout.js`
    // But it's not possible to be more than one parallelRoutes before the root layout is found
    // TODO-APP: change to traverse all parallel routes
    const currentTreeChild = Object.values(currentTree[1])[0];
    const nextTreeChild = Object.values(nextTree[1])[0];
    if (!currentTreeChild || !nextTreeChild) return true;
    return isNavigatingToNewRootLayout(currentTreeChild, nextTreeChild);
}
const ACTION_REFRESH = "refresh";
exports.ACTION_REFRESH = ACTION_REFRESH;
const ACTION_NAVIGATE = "navigate";
exports.ACTION_NAVIGATE = ACTION_NAVIGATE;
const ACTION_RESTORE = "restore";
exports.ACTION_RESTORE = ACTION_RESTORE;
const ACTION_SERVER_PATCH = "server-patch";
exports.ACTION_SERVER_PATCH = ACTION_SERVER_PATCH;
const ACTION_PREFETCH = "prefetch";
exports.ACTION_PREFETCH = ACTION_PREFETCH;
/**
 * Reducer that handles the app-router state updates.
 */ function clientReducer(state, action) {
    switch(action.type){
        case ACTION_NAVIGATE:
            {
                const { url , navigateType , cache , mutable , forceOptimisticNavigation  } = action;
                const { pathname , search  } = url;
                const href = createHrefFromUrl(url);
                const pendingPush = navigateType === "push";
                const isForCurrentTree = JSON.stringify(mutable.previousTree) === JSON.stringify(state.tree);
                if (mutable.mpaNavigation && isForCurrentTree) {
                    return {
                        // Set href.
                        canonicalUrl: mutable.canonicalUrlOverride ? mutable.canonicalUrlOverride : href,
                        pushRef: {
                            pendingPush,
                            mpaNavigation: mutable.mpaNavigation
                        },
                        // All navigation requires scroll and focus management to trigger.
                        focusAndScrollRef: {
                            apply: false
                        },
                        // Apply cache.
                        cache: state.cache,
                        prefetchCache: state.prefetchCache,
                        // Apply patched router state.
                        tree: state.tree
                    };
                }
                // Handle concurrent rendering / strict mode case where the cache and tree were already populated.
                if (mutable.patchedTree && isForCurrentTree) {
                    return {
                        // Set href.
                        canonicalUrl: mutable.canonicalUrlOverride ? mutable.canonicalUrlOverride : href,
                        pushRef: {
                            pendingPush,
                            mpaNavigation: false
                        },
                        // All navigation requires scroll and focus management to trigger.
                        focusAndScrollRef: {
                            apply: true
                        },
                        // Apply cache.
                        cache: mutable.useExistingCache ? state.cache : cache,
                        prefetchCache: state.prefetchCache,
                        // Apply patched router state.
                        tree: mutable.patchedTree
                    };
                }
                const prefetchValues = state.prefetchCache.get(href);
                if (prefetchValues) {
                    // The one before last item is the router state tree patch
                    const { flightSegmentPath , tree: newTree , canonicalUrlOverride  } = prefetchValues;
                    if (newTree !== null) {
                        mutable.previousTree = state.tree;
                        mutable.patchedTree = newTree;
                        mutable.mpaNavigation = isNavigatingToNewRootLayout(state.tree, newTree);
                        const hardNavigate = search !== location.search || shouldHardNavigate([
                            "",
                            ...flightSegmentPath
                        ], state.tree, newTree);
                        if (hardNavigate) {
                            // Copy subTreeData for the root node of the cache.
                            cache.subTreeData = state.cache.subTreeData;
                            invalidateCacheBelowFlightSegmentPath(cache, state.cache, flightSegmentPath);
                        } else {
                            mutable.useExistingCache = true;
                        }
                        const canonicalUrlOverrideHref = canonicalUrlOverride ? createHrefFromUrl(canonicalUrlOverride) : undefined;
                        if (canonicalUrlOverrideHref) {
                            mutable.canonicalUrlOverride = canonicalUrlOverrideHref;
                        }
                        return {
                            // Set href.
                            canonicalUrl: canonicalUrlOverrideHref ? canonicalUrlOverrideHref : href,
                            // Set pendingPush.
                            pushRef: {
                                pendingPush,
                                mpaNavigation: false
                            },
                            // All navigation requires scroll and focus management to trigger.
                            focusAndScrollRef: {
                                apply: true
                            },
                            // Apply patched cache.
                            cache: mutable.useExistingCache ? state.cache : cache,
                            prefetchCache: state.prefetchCache,
                            // Apply patched tree.
                            tree: newTree
                        };
                    }
                }
                // When doing a hard push there can be two cases: with optimistic tree and without
                // The with optimistic tree case only happens when the layouts have a loading state (loading.js)
                // The without optimistic tree case happens when there is no loading state, in that case we suspend in this reducer
                // forceOptimisticNavigation is used for links that have `prefetch={false}`.
                if (forceOptimisticNavigation) {
                    const segments = pathname.split("/");
                    // TODO-APP: figure out something better for index pages
                    segments.push("");
                    // Optimistic tree case.
                    // If the optimistic tree is deeper than the current state leave that deeper part out of the fetch
                    const optimisticTree = createOptimisticTree(segments, state.tree, true, false, href);
                    // Copy subTreeData for the root node of the cache.
                    cache.subTreeData = state.cache.subTreeData;
                    // Copy existing cache nodes as far as possible and fill in `data` property with the started data fetch.
                    // The `data` property is used to suspend in layout-router during render if it hasn't resolved yet by the time it renders.
                    const res = fillCacheWithDataProperty(cache, state.cache, segments.slice(1), ()=>(0, _appRouter).fetchServerResponse(url, optimisticTree));
                    // If optimistic fetch couldn't happen it falls back to the non-optimistic case.
                    if (!(res == null ? void 0 : res.bailOptimistic)) {
                        mutable.previousTree = state.tree;
                        mutable.patchedTree = optimisticTree;
                        mutable.mpaNavigation = isNavigatingToNewRootLayout(state.tree, optimisticTree);
                        return {
                            // Set href.
                            canonicalUrl: href,
                            // Set pendingPush.
                            pushRef: {
                                pendingPush,
                                mpaNavigation: false
                            },
                            // All navigation requires scroll and focus management to trigger.
                            focusAndScrollRef: {
                                apply: true
                            },
                            // Apply patched cache.
                            cache: cache,
                            prefetchCache: state.prefetchCache,
                            // Apply optimistic tree.
                            tree: optimisticTree
                        };
                    }
                }
                // Below is the not-optimistic case. Data is fetched at the root and suspended there without a suspense boundary.
                // If no in-flight fetch at the top, start it.
                if (!cache.data) {
                    cache.data = createRecordFromThenable((0, _appRouter).fetchServerResponse(url, state.tree));
                }
                // Unwrap cache data with `use` to suspend here (in the reducer) until the fetch resolves.
                const [flightData, canonicalUrlOverride1] = readRecordValue(cache.data);
                // Handle case when navigating to page in `pages` from `app`
                if (typeof flightData === "string") {
                    return {
                        canonicalUrl: flightData,
                        // Enable mpaNavigation
                        pushRef: {
                            pendingPush: true,
                            mpaNavigation: true
                        },
                        // Don't apply scroll and focus management.
                        focusAndScrollRef: {
                            apply: false
                        },
                        cache: state.cache,
                        prefetchCache: state.prefetchCache,
                        tree: state.tree
                    };
                }
                // Remove cache.data as it has been resolved at this point.
                cache.data = null;
                // TODO-APP: Currently the Flight data can only have one item but in the future it can have multiple paths.
                const flightDataPath = flightData[0];
                // The one before last item is the router state tree patch
                const [treePatch, subTreeData, head] = flightDataPath.slice(-3);
                // Path without the last segment, router state, and the subTreeData
                const flightSegmentPath1 = flightDataPath.slice(0, -4);
                // Create new tree based on the flightSegmentPath and router state patch
                const newTree1 = applyRouterStatePatchToTree([
                    "",
                    ...flightSegmentPath1
                ], state.tree, treePatch);
                if (newTree1 === null) {
                    throw new Error("SEGMENT MISMATCH");
                }
                const canonicalUrlOverrideHref1 = canonicalUrlOverride1 ? createHrefFromUrl(canonicalUrlOverride1) : undefined;
                if (canonicalUrlOverrideHref1) {
                    mutable.canonicalUrlOverride = canonicalUrlOverrideHref1;
                }
                mutable.previousTree = state.tree;
                mutable.patchedTree = newTree1;
                mutable.mpaNavigation = isNavigatingToNewRootLayout(state.tree, newTree1);
                if (flightDataPath.length === 3) {
                    cache.subTreeData = subTreeData;
                    fillLazyItemsTillLeafWithHead(cache, state.cache, treePatch, head);
                } else {
                    // Copy subTreeData for the root node of the cache.
                    cache.subTreeData = state.cache.subTreeData;
                    // Create a copy of the existing cache with the subTreeData applied.
                    fillCacheWithNewSubTreeData(cache, state.cache, flightDataPath);
                }
                return {
                    // Set href.
                    canonicalUrl: canonicalUrlOverrideHref1 ? canonicalUrlOverrideHref1 : href,
                    // Set pendingPush.
                    pushRef: {
                        pendingPush,
                        mpaNavigation: false
                    },
                    // All navigation requires scroll and focus management to trigger.
                    focusAndScrollRef: {
                        apply: true
                    },
                    // Apply patched cache.
                    cache: cache,
                    prefetchCache: state.prefetchCache,
                    // Apply patched tree.
                    tree: newTree1
                };
            }
        case ACTION_SERVER_PATCH:
            {
                const { flightData: flightData1 , previousTree , overrideCanonicalUrl , cache: cache1 , mutable: mutable1  } = action;
                // When a fetch is slow to resolve it could be that you navigated away while the request was happening or before the reducer runs.
                // In that case opt-out of applying the patch given that the data could be stale.
                if (JSON.stringify(previousTree) !== JSON.stringify(state.tree)) {
                    // TODO-APP: Handle tree mismatch
                    console.log("TREE MISMATCH");
                    // Keep everything as-is.
                    return state;
                }
                if (mutable1.mpaNavigation) {
                    return {
                        // Set href.
                        canonicalUrl: mutable1.canonicalUrlOverride ? mutable1.canonicalUrlOverride : state.canonicalUrl,
                        // TODO-APP: verify mpaNavigation not being set is correct here.
                        pushRef: {
                            pendingPush: true,
                            mpaNavigation: mutable1.mpaNavigation
                        },
                        // All navigation requires scroll and focus management to trigger.
                        focusAndScrollRef: {
                            apply: false
                        },
                        // Apply cache.
                        cache: state.cache,
                        prefetchCache: state.prefetchCache,
                        // Apply patched router state.
                        tree: state.tree
                    };
                }
                // Handle concurrent rendering / strict mode case where the cache and tree were already populated.
                if (mutable1.patchedTree) {
                    return {
                        // Keep href as it was set during navigate / restore
                        canonicalUrl: mutable1.canonicalUrlOverride ? mutable1.canonicalUrlOverride : state.canonicalUrl,
                        // Keep pushRef as server-patch only causes cache/tree update.
                        pushRef: state.pushRef,
                        // Keep focusAndScrollRef as server-patch only causes cache/tree update.
                        focusAndScrollRef: state.focusAndScrollRef,
                        // Apply patched router state
                        tree: mutable1.patchedTree,
                        prefetchCache: state.prefetchCache,
                        // Apply patched cache
                        cache: cache1
                    };
                }
                // Handle case when navigating to page in `pages` from `app`
                if (typeof flightData1 === "string") {
                    return {
                        // Set href.
                        canonicalUrl: flightData1,
                        // Enable mpaNavigation as this is a navigation that the app-router shouldn't handle.
                        pushRef: {
                            pendingPush: true,
                            mpaNavigation: true
                        },
                        // Don't apply scroll and focus management.
                        focusAndScrollRef: {
                            apply: false
                        },
                        // Other state is kept as-is.
                        cache: state.cache,
                        prefetchCache: state.prefetchCache,
                        tree: state.tree
                    };
                }
                // TODO-APP: Currently the Flight data can only have one item but in the future it can have multiple paths.
                const flightDataPath1 = flightData1[0];
                // Slices off the last segment (which is at -4) as it doesn't exist in the tree yet
                const flightSegmentPath2 = flightDataPath1.slice(0, -4);
                const [treePatch1, subTreeData1, head1] = flightDataPath1.slice(-3);
                const newTree2 = applyRouterStatePatchToTree([
                    "",
                    ...flightSegmentPath2
                ], state.tree, treePatch1);
                if (newTree2 === null) {
                    throw new Error("SEGMENT MISMATCH");
                }
                const canonicalUrlOverrideHref2 = overrideCanonicalUrl ? createHrefFromUrl(overrideCanonicalUrl) : undefined;
                if (canonicalUrlOverrideHref2) {
                    mutable1.canonicalUrlOverride = canonicalUrlOverrideHref2;
                }
                mutable1.patchedTree = newTree2;
                mutable1.mpaNavigation = isNavigatingToNewRootLayout(state.tree, newTree2);
                // Root refresh
                if (flightDataPath1.length === 3) {
                    cache1.subTreeData = subTreeData1;
                    fillLazyItemsTillLeafWithHead(cache1, state.cache, treePatch1, head1);
                } else {
                    // Copy subTreeData for the root node of the cache.
                    cache1.subTreeData = state.cache.subTreeData;
                    fillCacheWithNewSubTreeData(cache1, state.cache, flightDataPath1);
                }
                return {
                    // Keep href as it was set during navigate / restore
                    canonicalUrl: canonicalUrlOverrideHref2 ? canonicalUrlOverrideHref2 : state.canonicalUrl,
                    // Keep pushRef as server-patch only causes cache/tree update.
                    pushRef: state.pushRef,
                    // Keep focusAndScrollRef as server-patch only causes cache/tree update.
                    focusAndScrollRef: state.focusAndScrollRef,
                    // Apply patched router state
                    tree: newTree2,
                    prefetchCache: state.prefetchCache,
                    // Apply patched cache
                    cache: cache1
                };
            }
        case ACTION_RESTORE:
            {
                const { url: url1 , tree  } = action;
                const href1 = createHrefFromUrl(url1);
                return {
                    // Set canonical url
                    canonicalUrl: href1,
                    pushRef: state.pushRef,
                    focusAndScrollRef: state.focusAndScrollRef,
                    cache: state.cache,
                    prefetchCache: state.prefetchCache,
                    // Restore provided tree
                    tree: tree
                };
            }
        // TODO-APP: Add test for not scrolling to nearest layout when calling refresh.
        // TODO-APP: Add test for startTransition(() => {router.push('/'); router.refresh();}), that case should scroll.
        case ACTION_REFRESH:
            {
                const { cache: cache2 , mutable: mutable2  } = action;
                const href2 = state.canonicalUrl;
                const isForCurrentTree1 = JSON.stringify(mutable2.previousTree) === JSON.stringify(state.tree);
                if (mutable2.mpaNavigation && isForCurrentTree1) {
                    return {
                        // Set href.
                        canonicalUrl: mutable2.canonicalUrlOverride ? mutable2.canonicalUrlOverride : state.canonicalUrl,
                        // TODO-APP: verify mpaNavigation not being set is correct here.
                        pushRef: {
                            pendingPush: true,
                            mpaNavigation: mutable2.mpaNavigation
                        },
                        // All navigation requires scroll and focus management to trigger.
                        focusAndScrollRef: {
                            apply: false
                        },
                        // Apply cache.
                        cache: state.cache,
                        prefetchCache: state.prefetchCache,
                        // Apply patched router state.
                        tree: state.tree
                    };
                }
                // Handle concurrent rendering / strict mode case where the cache and tree were already populated.
                if (mutable2.patchedTree && isForCurrentTree1) {
                    return {
                        // Set href.
                        canonicalUrl: mutable2.canonicalUrlOverride ? mutable2.canonicalUrlOverride : href2,
                        // set pendingPush (always false in this case).
                        pushRef: state.pushRef,
                        // Apply focus and scroll.
                        // TODO-APP: might need to disable this for Fast Refresh.
                        focusAndScrollRef: {
                            apply: false
                        },
                        cache: cache2,
                        prefetchCache: state.prefetchCache,
                        tree: mutable2.patchedTree
                    };
                }
                if (!cache2.data) {
                    // Fetch data from the root of the tree.
                    cache2.data = createRecordFromThenable((0, _appRouter).fetchServerResponse(new URL(href2, location.origin), [
                        state.tree[0],
                        state.tree[1],
                        state.tree[2],
                        "refetch"
                    ]));
                }
                const [flightData2, canonicalUrlOverride2] = readRecordValue(cache2.data);
                // Handle case when navigating to page in `pages` from `app`
                if (typeof flightData2 === "string") {
                    return {
                        canonicalUrl: flightData2,
                        pushRef: {
                            pendingPush: true,
                            mpaNavigation: true
                        },
                        focusAndScrollRef: {
                            apply: false
                        },
                        cache: state.cache,
                        prefetchCache: state.prefetchCache,
                        tree: state.tree
                    };
                }
                // Remove cache.data as it has been resolved at this point.
                cache2.data = null;
                // TODO-APP: Currently the Flight data can only have one item but in the future it can have multiple paths.
                const flightDataPath2 = flightData2[0];
                // FlightDataPath with more than two items means unexpected Flight data was returned
                if (flightDataPath2.length !== 3) {
                    // TODO-APP: handle this case better
                    console.log("REFRESH FAILED");
                    return state;
                }
                // Given the path can only have two items the items are only the router state and subTreeData for the root.
                const [treePatch2, subTreeData2, head2] = flightDataPath2;
                const newTree3 = applyRouterStatePatchToTree([
                    ""
                ], state.tree, treePatch2);
                if (newTree3 === null) {
                    throw new Error("SEGMENT MISMATCH");
                }
                const canonicalUrlOverrideHref3 = canonicalUrlOverride2 ? createHrefFromUrl(canonicalUrlOverride2) : undefined;
                if (canonicalUrlOverride2) {
                    mutable2.canonicalUrlOverride = canonicalUrlOverrideHref3;
                }
                mutable2.previousTree = state.tree;
                mutable2.patchedTree = newTree3;
                mutable2.mpaNavigation = isNavigatingToNewRootLayout(state.tree, newTree3);
                // Set subTreeData for the root node of the cache.
                cache2.subTreeData = subTreeData2;
                fillLazyItemsTillLeafWithHead(cache2, state.cache, treePatch2, head2);
                return {
                    // Set href, this doesn't reuse the state.canonicalUrl as because of concurrent rendering the href might change between dispatching and applying.
                    canonicalUrl: canonicalUrlOverrideHref3 ? canonicalUrlOverrideHref3 : href2,
                    // set pendingPush (always false in this case).
                    pushRef: state.pushRef,
                    // TODO-APP: might need to disable this for Fast Refresh.
                    focusAndScrollRef: {
                        apply: false
                    },
                    // Apply patched cache.
                    cache: cache2,
                    prefetchCache: state.prefetchCache,
                    // Apply patched router state.
                    tree: newTree3
                };
            }
        case ACTION_PREFETCH:
            {
                const { url: url2 , serverResponse  } = action;
                const [flightData3, canonicalUrlOverride3] = serverResponse;
                if (typeof flightData3 === "string") {
                    return state;
                }
                const href3 = createHrefFromUrl(url2);
                // TODO-APP: Currently the Flight data can only have one item but in the future it can have multiple paths.
                const flightDataPath3 = flightData3[0];
                // The one before last item is the router state tree patch
                const [treePatch3, subTreeData3] = flightDataPath3.slice(-3);
                // TODO-APP: Verify if `null` can't be returned from user code.
                // If subTreeData is null the prefetch did not provide a component tree.
                if (subTreeData3 !== null) {
                    fillCacheWithPrefetchedSubTreeData(state.cache, flightDataPath3);
                }
                const flightSegmentPath3 = flightDataPath3.slice(0, -3);
                const newTree4 = applyRouterStatePatchToTree([
                    "",
                    ...flightSegmentPath3
                ], state.tree, treePatch3);
                // Patch did not apply correctly
                if (newTree4 === null) {
                    return state;
                }
                // Create new tree based on the flightSegmentPath and router state patch
                state.prefetchCache.set(href3, {
                    // Path without the last segment, router state, and the subTreeData
                    flightSegmentPath: flightSegmentPath3,
                    // Create new tree based on the flightSegmentPath and router state patch
                    tree: newTree4,
                    canonicalUrlOverride: canonicalUrlOverride3
                });
                return state;
            }
        // This case should never be hit as dispatch is strongly typed.
        default:
            throw new Error("Unknown action");
    }
}
function serverReducer(state, _action) {
    return state;
}
const reducer =  true ? serverReducer : 0;
exports.reducer = reducer;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=reducer.js.map


/***/ }),

/***/ 6862:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = RenderFromTemplateContext;
var _interop_require_wildcard = (__webpack_require__(1644)/* ["default"] */ .Z);
var _react = _interop_require_wildcard(__webpack_require__(8038));
var _appRouterContext = __webpack_require__(3280);
function RenderFromTemplateContext() {
    const children = (0, _react).useContext(_appRouterContext.TemplateContext);
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, children);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=render-from-template-context.js.map


/***/ }),

/***/ 683:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.staticGenerationAsyncStorage = void 0;
let staticGenerationAsyncStorage = {};
exports.staticGenerationAsyncStorage = staticGenerationAsyncStorage;
// @ts-expect-error we provide this on globalThis in
// the edge and node runtime
if (globalThis.AsyncLocalStorage) {
    exports.staticGenerationAsyncStorage = staticGenerationAsyncStorage = new globalThis.AsyncLocalStorage();
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-async-storage.js.map


/***/ }),

/***/ 7410:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useReducerWithReduxDevtools = void 0;
var _react = __webpack_require__(8038);
function normalizeRouterState(val) {
    if (val instanceof Map) {
        const obj = {};
        for (const [key, value] of val.entries()){
            if (typeof value === "function") {
                obj[key] = "fn()";
                continue;
            }
            if (typeof value === "object" && value !== null) {
                if (value.$$typeof) {
                    obj[key] = value.$$typeof.toString();
                    continue;
                }
                if (value._bundlerConfig) {
                    obj[key] = "FlightData";
                    continue;
                }
            }
            obj[key] = normalizeRouterState(value);
        }
        return obj;
    }
    if (typeof val === "object" && val !== null) {
        const obj1 = {};
        for(const key1 in val){
            const value1 = val[key1];
            if (typeof value1 === "function") {
                obj1[key1] = "fn()";
                continue;
            }
            if (typeof value1 === "object" && value1 !== null) {
                if (value1.$$typeof) {
                    obj1[key1] = value1.$$typeof.toString();
                    continue;
                }
                if (value1.hasOwnProperty("_bundlerConfig")) {
                    obj1[key1] = "FlightData";
                    continue;
                }
            }
            obj1[key1] = normalizeRouterState(value1);
        }
        return obj1;
    }
    if (Array.isArray(val)) {
        return val.map(normalizeRouterState);
    }
    return val;
}
function devToolReducer(fn, ref) {
    return (state, action)=>{
        const res = fn(state, action);
        if (ref.current) {
            ref.current.send(action, normalizeRouterState(res));
        }
        return res;
    };
}
function useReducerWithReduxDevtoolsNoop(fn, initialState) {
    const [state, dispatch] = (0, _react).useReducer(fn, initialState);
    return [
        state,
        dispatch,
        ()=>{}
    ];
}
function useReducerWithReduxDevtoolsImpl(fn, initialState) {
    const devtoolsConnectionRef = (0, _react).useRef();
    const enabledRef = (0, _react).useRef();
    (0, _react).useEffect(()=>{
        if (devtoolsConnectionRef.current || enabledRef.current === false) {
            return;
        }
        if (enabledRef.current === undefined && typeof window.__REDUX_DEVTOOLS_EXTENSION__ === "undefined") {
            enabledRef.current = false;
            return;
        }
        devtoolsConnectionRef.current = window.__REDUX_DEVTOOLS_EXTENSION__.connect({
            instanceId: 1,
            name: "next-router"
        });
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.init(normalizeRouterState(initialState));
        }
        return ()=>{
            devtoolsConnectionRef.current = undefined;
        };
    }, [
        initialState
    ]);
    const [state, dispatch] = (0, _react).useReducer(devToolReducer(/* logReducer( */ fn /*)*/ , devtoolsConnectionRef), initialState);
    const sync = (0, _react).useCallback(()=>{
        if (devtoolsConnectionRef.current) {
            devtoolsConnectionRef.current.send({
                type: "RENDER_SYNC"
            }, normalizeRouterState(state));
        }
    }, [
        state
    ]);
    return [
        state,
        dispatch,
        sync
    ];
}
const useReducerWithReduxDevtools =  false ? 0 : useReducerWithReduxDevtoolsNoop;
exports.useReducerWithReduxDevtools = useReducerWithReduxDevtools;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-reducer-with-devtools.js.map


/***/ }),

/***/ 9447:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.detectDomainLocale = void 0;
const detectDomainLocale = (...args)=>{
    if (false) {}
};
exports.detectDomainLocale = detectDomainLocale;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=detect-domain-locale.js.map


/***/ }),

/***/ 6494:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.getDomainLocale = getDomainLocale;
const basePath = (/* unused pure expression or super */ null && ( false || ""));
function getDomainLocale(path, locale, locales, domainLocales) {
    if (false) {} else {
        return false;
    }
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-domain-locale.js.map


/***/ }),

/***/ 9804:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.hasBasePath = hasBasePath;
var _pathHasPrefix = __webpack_require__(4567);
const basePath =  false || "";
function hasBasePath(path) {
    return (0, _pathHasPrefix).pathHasPrefix(path, basePath);
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-base-path.js.map


/***/ }),

/***/ 3700:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = initHeadManager;
exports.isEqualNode = isEqualNode;
exports.DOMAttributeNames = void 0;
function initHeadManager() {
    return {
        mountedInstances: new Set(),
        updateHead: (head)=>{
            const tags = {};
            head.forEach((h)=>{
                if (// it won't be inlined. In this case revert to the original behavior
                h.type === "link" && h.props["data-optimized-fonts"]) {
                    if (document.querySelector(`style[data-href="${h.props["data-href"]}"]`)) {
                        return;
                    } else {
                        h.props.href = h.props["data-href"];
                        h.props["data-href"] = undefined;
                    }
                }
                const components = tags[h.type] || [];
                components.push(h);
                tags[h.type] = components;
            });
            const titleComponent = tags.title ? tags.title[0] : null;
            let title = "";
            if (titleComponent) {
                const { children  } = titleComponent.props;
                title = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
            }
            if (title !== document.title) document.title = title;
            [
                "meta",
                "base",
                "link",
                "style",
                "script"
            ].forEach((type)=>{
                updateElements(type, tags[type] || []);
            });
        }
    };
}
const DOMAttributeNames = {
    acceptCharset: "accept-charset",
    className: "class",
    htmlFor: "for",
    httpEquiv: "http-equiv",
    noModule: "noModule"
};
exports.DOMAttributeNames = DOMAttributeNames;
function reactElementToDOM({ type , props  }) {
    const el = document.createElement(type);
    for(const p in props){
        if (!props.hasOwnProperty(p)) continue;
        if (p === "children" || p === "dangerouslySetInnerHTML") continue;
        // we don't render undefined props to the DOM
        if (props[p] === undefined) continue;
        const attr = DOMAttributeNames[p] || p.toLowerCase();
        if (type === "script" && (attr === "async" || attr === "defer" || attr === "noModule")) {
            el[attr] = !!props[p];
        } else {
            el.setAttribute(attr, props[p]);
        }
    }
    const { children , dangerouslySetInnerHTML  } = props;
    if (dangerouslySetInnerHTML) {
        el.innerHTML = dangerouslySetInnerHTML.__html || "";
    } else if (children) {
        el.textContent = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
    }
    return el;
}
function isEqualNode(oldTag, newTag) {
    if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
        const nonce = newTag.getAttribute("nonce");
        // Only strip the nonce if `oldTag` has had it stripped. An element's nonce attribute will not
        // be stripped if there is no content security policy response header that includes a nonce.
        if (nonce && !oldTag.getAttribute("nonce")) {
            const cloneTag = newTag.cloneNode(true);
            cloneTag.setAttribute("nonce", "");
            cloneTag.nonce = nonce;
            return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
        }
    }
    return oldTag.isEqualNode(newTag);
}
function updateElements(type, components) {
    const headEl = document.getElementsByTagName("head")[0];
    const headCountEl = headEl.querySelector("meta[name=next-head-count]");
    if (false) {}
    const headCount = Number(headCountEl.content);
    const oldTags = [];
    for(let i = 0, j = headCountEl.previousElementSibling; i < headCount; i++, j = (j == null ? void 0 : j.previousElementSibling) || null){
        var ref;
        if ((j == null ? void 0 : (ref = j.tagName) == null ? void 0 : ref.toLowerCase()) === type) {
            oldTags.push(j);
        }
    }
    const newTags = components.map(reactElementToDOM).filter((newTag)=>{
        for(let k = 0, len = oldTags.length; k < len; k++){
            const oldTag = oldTags[k];
            if (isEqualNode(oldTag, newTag)) {
                oldTags.splice(k, 1);
                return false;
            }
        }
        return true;
    });
    oldTags.forEach((t)=>{
        var ref;
        return (ref = t.parentNode) == null ? void 0 : ref.removeChild(t);
    });
    newTags.forEach((t)=>headEl.insertBefore(t, headCountEl));
    headCountEl.content = (headCount - oldTags.length + newTags.length).toString();
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head-manager.js.map


/***/ }),

/***/ 9797:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
var _extends = (__webpack_require__(7688)/* ["default"] */ .Z);
var _interop_require_default = (__webpack_require__(6356)/* ["default"] */ .Z);
var _interop_require_wildcard = (__webpack_require__(1644)/* ["default"] */ .Z);
var _object_without_properties_loose = (__webpack_require__(2495)/* ["default"] */ .Z);
var _react = _interop_require_wildcard(__webpack_require__(8038));
var _head = _interop_require_default(__webpack_require__(2989));
var _imageBlurSvg = __webpack_require__(4486);
var _imageConfig = __webpack_require__(5843);
var _imageConfigContext = __webpack_require__(744);
var _warnOnce = __webpack_require__(618);
var _imageLoader = _interop_require_default(__webpack_require__(9552));
const configEnv = {"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false};
const allImgs = new Map();
let perfObserver;
if (true) {
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
const VALID_LOADING_VALUES = (/* unused pure expression or super */ null && ([
    "lazy",
    "eager",
    undefined
]));
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return typeof src === "object" && (isStaticRequire(src) || isStaticImageData(src));
}
function getWidths({ deviceSizes , allSizes  }, width, sizes) {
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: "w"
            };
        }
        return {
            widths: allSizes,
            kind: "w"
        };
    }
    if (typeof width !== "number") {
        return {
            widths: deviceSizes,
            kind: "w"
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: "x"
    };
}
function generateImgAttrs({ config , src , unoptimized , width , quality , sizes , loader  }) {
    if (unoptimized) {
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths , kind  } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === "w" ? "100vw" : sizes,
        srcSet: widths.map((w, i)=>`${loader({
                config,
                src,
                quality,
                width: w
            })} ${kind === "w" ? w : i + 1}${kind}`).join(", "),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getInt(x) {
    if (typeof x === "number" || typeof x === "undefined") {
        return x;
    }
    if (typeof x === "string" && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, src, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized) {
    if (!img || img["data-loaded-src"] === src) {
        return;
    }
    img["data-loaded-src"] = src;
    const p = "decode" in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentNode) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder === "blur") {
            setBlurComplete(true);
        }
        if (onLoadRef == null ? void 0 : onLoadRef.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event("load");
            Object.defineProperty(event, "target", {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current(_extends({}, event, {
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            }));
        }
        if (onLoadingCompleteRef == null ? void 0 : onLoadingCompleteRef.current) {
            onLoadingCompleteRef.current(img);
        }
        if (false) {}
    });
}
const ImageElement = /*#__PURE__*/ (0, _react).forwardRef((_param, forwardedRef)=>{
    var { imgAttributes , heightInt , widthInt , qualityInt , className , imgStyle , blurStyle , isLazy , fill , placeholder , loading , srcString , config , unoptimized , loader , onLoadRef , onLoadingCompleteRef , setBlurComplete , setShowAltText , onLoad , onError  } = _param, rest = _object_without_properties_loose(_param, [
        "imgAttributes",
        "heightInt",
        "widthInt",
        "qualityInt",
        "className",
        "imgStyle",
        "blurStyle",
        "isLazy",
        "fill",
        "placeholder",
        "loading",
        "srcString",
        "config",
        "unoptimized",
        "loader",
        "onLoadRef",
        "onLoadingCompleteRef",
        "setBlurComplete",
        "setShowAltText",
        "onLoad",
        "onError"
    ]);
    loading = isLazy ? "lazy" : loading;
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement("img", Object.assign({}, rest, imgAttributes, {
        width: widthInt,
        height: heightInt,
        decoding: "async",
        "data-nimg": fill ? "fill" : "1",
        className: className,
        // @ts-ignore - TODO: upgrade to `@types/react@17`
        loading: loading,
        style: _extends({}, imgStyle, blurStyle),
        ref: (0, _react).useCallback((img)=>{
            if (forwardedRef) {
                if (typeof forwardedRef === "function") forwardedRef(img);
                else if (typeof forwardedRef === "object") {
                    // @ts-ignore - .current is read only it's usually assigned by react internally
                    forwardedRef.current = img;
                }
            }
            if (!img) {
                return;
            }
            if (onError) {
                // If the image has an error before react hydrates, then the error is lost.
                // The workaround is to wait until the image is mounted which is after hydration,
                // then we set the src again to trigger the error handler (if there was an error).
                // eslint-disable-next-line no-self-assign
                img.src = img.src;
            }
            if (false) {}
            if (img.complete) {
                handleLoading(img, srcString, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
            }
        }, [
            srcString,
            placeholder,
            onLoadRef,
            onLoadingCompleteRef,
            setBlurComplete,
            onError,
            unoptimized,
            forwardedRef
        ]),
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, srcString, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder === "blur") {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    })));
});
const Image = /*#__PURE__*/ (0, _react).forwardRef((_param, forwardedRef)=>{
    var { src , sizes , unoptimized =false , priority =false , loading , className , quality , width , height , fill , style , onLoad , onLoadingComplete , placeholder ="empty" , blurDataURL , layout , objectFit , objectPosition , lazyBoundary , lazyRoot  } = _param, all = _object_without_properties_loose(_param, [
        "src",
        "sizes",
        "unoptimized",
        "priority",
        "loading",
        "className",
        "quality",
        "width",
        "height",
        "fill",
        "style",
        "onLoad",
        "onLoadingComplete",
        "placeholder",
        "blurDataURL",
        "layout",
        "objectFit",
        "objectPosition",
        "lazyBoundary",
        "lazyRoot"
    ]);
    const configContext = (0, _react).useContext(_imageConfigContext.ImageConfigContext);
    const config = (0, _react).useMemo(()=>{
        const c = configEnv || configContext || _imageConfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        return _extends({}, c, {
            allSizes,
            deviceSizes
        });
    }, [
        configContext
    ]);
    let rest = all;
    let loader = rest.loader || _imageLoader.default;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = "__next_img_default" in loader;
    if (isDefaultLoader) {
        if (config.loader === "custom") {
            throw new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`);
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        var _tmp;
        _tmp = (obj)=>{
            const { config: _  } = obj, opts = _object_without_properties_loose(obj, [
                "config"
            ]);
            return customImageLoader(opts);
        }, loader = _tmp, _tmp;
    }
    if (layout) {
        if (layout === "fill") {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: "100%",
                height: "auto"
            },
            responsive: {
                width: "100%",
                height: "auto"
            }
        };
        const layoutToSizes = {
            responsive: "100vw",
            fill: "100vw"
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = _extends({}, style, layoutStyle);
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = "";
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`);
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`);
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio1 = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio1);
            }
        }
    }
    src = typeof src === "string" ? src : staticSrc;
    let isLazy = !priority && (loading === "lazy" || typeof loading === "undefined");
    if (src.startsWith("data:") || src.startsWith("blob:")) {
        // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && src.endsWith(".svg") && !config.dangerouslyAllowSVG) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    const [blurComplete, setBlurComplete] = (0, _react).useState(false);
    const [showAltText, setShowAltText] = (0, _react).useState(false);
    const qualityInt = getInt(quality);
    if (false) {}
    const imgStyle = Object.assign(fill ? {
        position: "absolute",
        height: "100%",
        width: "100%",
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: "transparent"
    }, style);
    const blurStyle = placeholder === "blur" && blurDataURL && !blurComplete ? {
        backgroundSize: imgStyle.objectFit || "cover",
        backgroundPosition: imgStyle.objectPosition || "50% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url("data:image/svg+xml;charset=utf-8,${(0, _imageBlurSvg).getImageBlurSvg({
            widthInt,
            heightInt,
            blurWidth,
            blurHeight,
            blurDataURL
        })}")`
    } : {};
    if (false) {}
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    let srcString = src;
    if (false) {}
    const linkProps = {
        // @ts-expect-error upgrade react types to react 18
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: rest.crossOrigin
    };
    const onLoadRef = (0, _react).useRef(onLoad);
    (0, _react).useEffect(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react).useRef(onLoadingComplete);
    (0, _react).useEffect(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const imgElementArgs = _extends({
        isLazy,
        imgAttributes,
        heightInt,
        widthInt,
        qualityInt,
        className,
        imgStyle,
        blurStyle,
        loading,
        config,
        fill,
        unoptimized,
        placeholder,
        loader,
        srcString,
        onLoadRef,
        onLoadingCompleteRef,
        setBlurComplete,
        setShowAltText
    }, rest);
    return /*#__PURE__*/ _react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/ _react.default.createElement(ImageElement, Object.assign({}, imgElementArgs, {
        ref: forwardedRef
    })), priority ? // for browsers that do not support `imagesrcset`, and in those cases
    // it would likely cause the incorrect image to be preloaded.
    //
    // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
    /*#__PURE__*/ _react.default.createElement(_head.default, null, /*#__PURE__*/ _react.default.createElement("link", Object.assign({
        key: "__nimg-" + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes,
        rel: "preload",
        as: "image",
        href: imgAttributes.srcSet ? undefined : imgAttributes.src
    }, linkProps))) : null);
});
var _default = Image;
exports["default"] = _default;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image.js.map


/***/ }),

/***/ 2919:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
var _interop_require_default = (__webpack_require__(6356)/* ["default"] */ .Z);
var _object_without_properties_loose = (__webpack_require__(2495)/* ["default"] */ .Z);
var _react = _interop_require_default(__webpack_require__(8038));
var _router = __webpack_require__(4387);
var _formatUrl = __webpack_require__(3938);
var _addLocale = __webpack_require__(6330);
var _routerContext = __webpack_require__(4964);
var _appRouterContext = __webpack_require__(3280);
var _useIntersection = __webpack_require__(4717);
var _getDomainLocale = __webpack_require__(6494);
var _addBasePath = __webpack_require__(8205);
const prefetched = new Set();
function prefetch(router, href, as, options) {
    if (true) {
        return;
    }
    if (!(0, _router).isLocalURL(href)) {
        return;
    }
    // We should only dedupe requests when experimental.optimisticClientCache is
    // disabled.
    if (!options.bypassPrefetchedCheck) {
        const locale = typeof options.locale !== "undefined" ? options.locale : "locale" in router ? router.locale : undefined;
        const prefetchedKey = href + "%" + as + "%" + locale;
        // If we've already fetched the key, then don't prefetch it again!
        if (prefetched.has(prefetchedKey)) {
            return;
        }
        // Mark this URL as prefetched.
        prefetched.add(prefetchedKey);
    }
    // Prefetch the JSON page if asked (only in the client)
    // We need to handle a prefetch error here since we may be
    // loading with priority which can reject but we don't
    // want to force navigation since this is only a prefetch
    Promise.resolve(router.prefetch(href, as, options)).catch((err)=>{
        if (false) {}
    });
}
function isModifiedEvent(event) {
    const { target  } = event.currentTarget;
    return target && target !== "_self" || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, router, href, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled) {
    const { nodeName  } = e.currentTarget;
    // anchors inside an svg have a lowercase nodeName
    const isAnchorNodeName = nodeName.toUpperCase() === "A";
    if (isAnchorNodeName && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
        // ignore click for browser’s default behavior
        return;
    }
    e.preventDefault();
    const navigate = ()=>{
        // If the router is an NextRouter instance it will have `beforePopState`
        if ("beforePopState" in router) {
            router[replace ? "replace" : "push"](href, as, {
                shallow,
                locale,
                scroll
            });
        } else {
            router[replace ? "replace" : "push"](as || href, {
                forceOptimisticNavigation: !prefetchEnabled
            });
        }
    };
    if (isAppRouter) {
        // @ts-expect-error startTransition exists.
        _react.default.startTransition(navigate);
    } else {
        navigate();
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === "string") {
        return urlObjOrString;
    }
    return (0, _formatUrl).formatUrl(urlObjOrString);
}
/**
 * React Component that enables client-side transitions between routes.
 */ const Link = /*#__PURE__*/ _react.default.forwardRef(function LinkComponent(props, forwardedRef) {
    if (false) {}
    let children;
    const { href: hrefProp , as: asProp , children: childrenProp , prefetch: prefetchProp , passHref , replace , shallow , scroll , locale , onClick , onMouseEnter: onMouseEnterProp , onTouchStart: onTouchStartProp , legacyBehavior =true === false  } = props, restProps = _object_without_properties_loose(props, [
        "href",
        "as",
        "children",
        "prefetch",
        "passHref",
        "replace",
        "shallow",
        "scroll",
        "locale",
        "onClick",
        "onMouseEnter",
        "onTouchStart",
        "legacyBehavior"
    ]);
    children = childrenProp;
    if (legacyBehavior && (typeof children === "string" || typeof children === "number")) {
        children = /*#__PURE__*/ _react.default.createElement("a", null, children);
    }
    const prefetchEnabled = prefetchProp !== false;
    const pagesRouter = _react.default.useContext(_routerContext.RouterContext);
    const appRouter = _react.default.useContext(_appRouterContext.AppRouterContext);
    const router = pagesRouter != null ? pagesRouter : appRouter;
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    if (false) {}
    const { href: href1 , as  } = _react.default.useMemo(()=>{
        if (!pagesRouter) {
            const resolvedHref = formatStringOrUrl(hrefProp);
            return {
                href: resolvedHref,
                as: asProp ? formatStringOrUrl(asProp) : resolvedHref
            };
        }
        const [resolvedHref1, resolvedAs] = (0, _router).resolveHref(pagesRouter, hrefProp, true);
        return {
            href: resolvedHref1,
            as: asProp ? (0, _router).resolveHref(pagesRouter, asProp) : resolvedAs || resolvedHref1
        };
    }, [
        pagesRouter,
        hrefProp,
        asProp
    ]);
    const previousHref = _react.default.useRef(href1);
    const previousAs = _react.default.useRef(as);
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (false) {} else {
            child = _react.default.Children.only(children);
        }
    } else {
        if (false) { var ref; }
    }
    const childRef = legacyBehavior ? child && typeof child === "object" && child.ref : forwardedRef;
    const [setIntersectionRef, isVisible, resetVisible] = (0, _useIntersection).useIntersection({
        rootMargin: "200px"
    });
    const setRef = _react.default.useCallback((el)=>{
        // Before the link getting observed, check if visible state need to be reset
        if (previousAs.current !== as || previousHref.current !== href1) {
            resetVisible();
            previousAs.current = as;
            previousHref.current = href1;
        }
        setIntersectionRef(el);
        if (childRef) {
            if (typeof childRef === "function") childRef(el);
            else if (typeof childRef === "object") {
                childRef.current = el;
            }
        }
    }, [
        as,
        childRef,
        href1,
        resetVisible,
        setIntersectionRef
    ]);
    // Prefetch the URL if we haven't already and it's visible.
    _react.default.useEffect(()=>{
        // in dev, we only prefetch on hover to avoid wasting resources as the prefetch will trigger compiling the page.
        if (false) {}
        if (!router) {
            return;
        }
        // If we don't need to prefetch the URL, don't do prefetch.
        if (!isVisible || !prefetchEnabled) {
            return;
        }
        // Prefetch the URL.
        prefetch(router, href1, as, {
            locale
        });
    }, [
        as,
        href1,
        isVisible,
        locale,
        prefetchEnabled,
        pagesRouter == null ? void 0 : pagesRouter.locale,
        router
    ]);
    const childProps = {
        ref: setRef,
        onClick (e) {
            if (false) {}
            if (!legacyBehavior && typeof onClick === "function") {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === "function") {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, router, href1, as, replace, shallow, scroll, locale, isAppRouter, prefetchEnabled);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === "function") {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === "function") {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href1, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            });
        },
        onTouchStart (e) {
            if (!legacyBehavior && typeof onTouchStartProp === "function") {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === "function") {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled && isAppRouter) {
                return;
            }
            prefetch(router, href1, as, {
                locale,
                priority: true,
                // @see {https://github.com/vercel/next.js/discussions/40268?sort=top#discussioncomment-3572642}
                bypassPrefetchedCheck: true
            });
        }
    };
    // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user
    if (!legacyBehavior || passHref || child.type === "a" && !("href" in child.props)) {
        const curLocale = typeof locale !== "undefined" ? locale : pagesRouter == null ? void 0 : pagesRouter.locale;
        // we only render domain locales if we are currently on a domain locale
        // so that locale links are still visitable in development/preview envs
        const localeDomain = (pagesRouter == null ? void 0 : pagesRouter.isLocaleDomain) && (0, _getDomainLocale).getDomainLocale(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.locales, pagesRouter == null ? void 0 : pagesRouter.domainLocales);
        childProps.href = localeDomain || (0, _addBasePath).addBasePath((0, _addLocale).addLocale(as, curLocale, pagesRouter == null ? void 0 : pagesRouter.defaultLocale));
    }
    return legacyBehavior ? /*#__PURE__*/ _react.default.cloneElement(child, childProps) : /*#__PURE__*/ _react.default.createElement("a", Object.assign({}, restProps, childProps), children);
});
var _default = Link;
exports["default"] = _default;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=link.js.map


/***/ }),

/***/ 9247:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.normalizePathTrailingSlash = void 0;
var _removeTrailingSlash = __webpack_require__(3297);
var _parsePath = __webpack_require__(8854);
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith("/") || undefined) {
        return path;
    }
    const { pathname , query , hash  } = (0, _parsePath).parsePath(path);
    if (false) {}
    return `${(0, _removeTrailingSlash).removeTrailingSlash(pathname)}${query}${hash}`;
};
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map


/***/ }),

/***/ 3910:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.removeBasePath = removeBasePath;
var _hasBasePath = __webpack_require__(9804);
const basePath =  false || "";
function removeBasePath(path) {
    if (false) {}
    path = path.slice(basePath.length);
    if (!path.startsWith("/")) path = `/${path}`;
    return path;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=remove-base-path.js.map


/***/ }),

/***/ 6477:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.removeLocale = removeLocale;
var _parsePath = __webpack_require__(8854);
function removeLocale(path, locale) {
    if (false) {}
    return path;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=remove-locale.js.map


/***/ }),

/***/ 3179:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.cancelIdleCallback = exports.requestIdleCallback = void 0;
const requestIdleCallback = typeof self !== "undefined" && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
exports.requestIdleCallback = requestIdleCallback;
const cancelIdleCallback = typeof self !== "undefined" && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
exports.cancelIdleCallback = cancelIdleCallback;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map


/***/ }),

/***/ 169:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;
var _interop_require_default = (__webpack_require__(6356)/* ["default"] */ .Z);
var _getAssetPathFromRoute = _interop_require_default(__webpack_require__(9565));
var _trustedTypes = __webpack_require__(5443);
var _requestIdleCallback = __webpack_require__(3179);
// 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.
const MS_MAX_IDLE_DELAY = 3800;
function withFuture(key, map, generator) {
    let entry = map.get(key);
    if (entry) {
        if ("future" in entry) {
            return entry.future;
        }
        return Promise.resolve(entry);
    }
    let resolver;
    const prom = new Promise((resolve)=>{
        resolver = resolve;
    });
    map.set(key, entry = {
        resolve: resolver,
        future: prom
    });
    return generator ? generator() // eslint-disable-next-line no-sequences
    .then((value)=>(resolver(value), value)).catch((err)=>{
        map.delete(key);
        throw err;
    }) : prom;
}
const ASSET_LOAD_ERROR = Symbol("ASSET_LOAD_ERROR");
function markAssetError(err) {
    return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}
function isAssetError(err) {
    return err && ASSET_LOAD_ERROR in err;
}
function hasPrefetch(link) {
    try {
        link = document.createElement("link");
        return(// with relList.support
        !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports("prefetch"));
    } catch (e) {
        return false;
    }
}
const canPrefetch = hasPrefetch();
function prefetchViaDom(href, as, link) {
    return new Promise((resolve, reject)=>{
        const selector = `
      link[rel="prefetch"][href^="${href}"],
      link[rel="preload"][href^="${href}"],
      script[src^="${href}"]`;
        if (document.querySelector(selector)) {
            return resolve();
        }
        link = document.createElement("link");
        // The order of property assignment here is intentional:
        if (as) link.as = as;
        link.rel = `prefetch`;
        link.crossOrigin = undefined;
        link.onload = resolve;
        link.onerror = ()=>reject(markAssetError(new Error(`Failed to prefetch: ${href}`)));
        // `href` should always be last:
        link.href = href;
        document.head.appendChild(link);
    });
}
function appendScript(src, script) {
    return new Promise((resolve, reject)=>{
        script = document.createElement("script");
        // The order of property assignment here is intentional.
        // 1. Setup success/failure hooks in case the browser synchronously
        //    executes when `src` is set.
        script.onload = resolve;
        script.onerror = ()=>reject(markAssetError(new Error(`Failed to load script: ${src}`)));
        // 2. Configure the cross-origin attribute before setting `src` in case the
        //    browser begins to fetch.
        script.crossOrigin = undefined;
        // 3. Finally, set the source and inject into the DOM in case the child
        //    must be appended for fetching to start.
        script.src = src;
        document.body.appendChild(script);
    });
}
// We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.
let devBuildPromise;
// Resolve a promise that times out after given amount of milliseconds.
function resolvePromiseWithTimeout(p, ms, err) {
    return new Promise((resolve, reject)=>{
        let cancelled = false;
        p.then((r)=>{
            // Resolved, cancel the timeout
            cancelled = true;
            resolve(r);
        }).catch(reject);
        // We wrap these checks separately for better dead-code elimination in
        // production bundles.
        if (false) {}
        if (true) {
            (0, _requestIdleCallback).requestIdleCallback(()=>setTimeout(()=>{
                    if (!cancelled) {
                        reject(err);
                    }
                }, ms));
        }
    });
}
function getClientBuildManifest() {
    if (self.__BUILD_MANIFEST) {
        return Promise.resolve(self.__BUILD_MANIFEST);
    }
    const onBuildManifest = new Promise((resolve)=>{
        // Mandatory because this is not concurrent safe:
        const cb = self.__BUILD_MANIFEST_CB;
        self.__BUILD_MANIFEST_CB = ()=>{
            resolve(self.__BUILD_MANIFEST);
            cb && cb();
        };
    });
    return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error("Failed to load client build manifest")));
}
function getFilesForRoute(assetPrefix, route) {
    if (false) {}
    return getClientBuildManifest().then((manifest)=>{
        if (!(route in manifest)) {
            throw markAssetError(new Error(`Failed to lookup route: ${route}`));
        }
        const allFiles = manifest[route].map((entry)=>assetPrefix + "/_next/" + encodeURI(entry));
        return {
            scripts: allFiles.filter((v)=>v.endsWith(".js")).map((v)=>(0, _trustedTypes).__unsafeCreateTrustedScriptURL(v)),
            css: allFiles.filter((v)=>v.endsWith(".css"))
        };
    });
}
function createRouteLoader(assetPrefix) {
    const entrypoints = new Map();
    const loadedScripts = new Map();
    const styleSheets = new Map();
    const routes = new Map();
    function maybeExecuteScript(src) {
        // With HMR we might need to "reload" scripts when they are
        // disposed and readded. Executing scripts twice has no functional
        // differences
        if (true) {
            let prom = loadedScripts.get(src.toString());
            if (prom) {
                return prom;
            }
            // Skip executing script if it's already in the DOM:
            if (document.querySelector(`script[src^="${src}"]`)) {
                return Promise.resolve();
            }
            loadedScripts.set(src.toString(), prom = appendScript(src));
            return prom;
        } else {}
    }
    function fetchStyleSheet(href) {
        let prom = styleSheets.get(href);
        if (prom) {
            return prom;
        }
        styleSheets.set(href, prom = fetch(href).then((res)=>{
            if (!res.ok) {
                throw new Error(`Failed to load stylesheet: ${href}`);
            }
            return res.text().then((text)=>({
                    href: href,
                    content: text
                }));
        }).catch((err)=>{
            throw markAssetError(err);
        }));
        return prom;
    }
    return {
        whenEntrypoint (route) {
            return withFuture(route, entrypoints);
        },
        onEntrypoint (route, execute) {
            (execute ? Promise.resolve().then(()=>execute()).then((exports1)=>({
                    component: exports1 && exports1.default || exports1,
                    exports: exports1
                }), (err)=>({
                    error: err
                })) : Promise.resolve(undefined)).then((input)=>{
                const old = entrypoints.get(route);
                if (old && "resolve" in old) {
                    if (input) {
                        entrypoints.set(route, input);
                        old.resolve(input);
                    }
                } else {
                    if (input) {
                        entrypoints.set(route, input);
                    } else {
                        entrypoints.delete(route);
                    }
                    // when this entrypoint has been resolved before
                    // the route is outdated and we want to invalidate
                    // this cache entry
                    routes.delete(route);
                }
            });
        },
        loadRoute (route, prefetch) {
            return withFuture(route, routes, ()=>{
                let devBuildPromiseResolve;
                if (false) {}
                return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then(({ scripts , css  })=>{
                    return Promise.all([
                        entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)),
                        Promise.all(css.map(fetchStyleSheet))
                    ]);
                }).then((res)=>{
                    return this.whenEntrypoint(route).then((entrypoint)=>({
                            entrypoint,
                            styles: res[1]
                        }));
                }), MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({ entrypoint , styles  })=>{
                    const res = Object.assign({
                        styles: styles
                    }, entrypoint);
                    return "error" in entrypoint ? entrypoint : res;
                }).catch((err)=>{
                    if (prefetch) {
                        // we don't want to cache errors during prefetch
                        throw err;
                    }
                    return {
                        error: err
                    };
                }).finally(()=>{
                    return devBuildPromiseResolve == null ? void 0 : devBuildPromiseResolve();
                });
            });
        },
        prefetch (route) {
            // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
            // License: Apache 2.0
            let cn;
            if (cn = navigator.connection) {
                // Don't prefetch if using 2G or if Save-Data is enabled.
                if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
            }
            return getFilesForRoute(assetPrefix, route).then((output)=>Promise.all(canPrefetch ? output.scripts.map((script)=>prefetchViaDom(script.toString(), "script")) : [])).then(()=>{
                (0, _requestIdleCallback).requestIdleCallback(()=>this.loadRoute(route, true).catch(()=>{}));
            }).catch(()=>{});
        }
    };
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=route-loader.js.map


/***/ }),

/***/ 5497:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.handleClientScriptLoad = handleClientScriptLoad;
exports.initScriptLoader = initScriptLoader;
exports["default"] = void 0;
var _extends = (__webpack_require__(7688)/* ["default"] */ .Z);
var _interop_require_default = (__webpack_require__(6356)/* ["default"] */ .Z);
var _interop_require_wildcard = (__webpack_require__(1644)/* ["default"] */ .Z);
var _object_without_properties_loose = (__webpack_require__(2495)/* ["default"] */ .Z);
var _reactDom = _interop_require_default(__webpack_require__(8704));
var _react = _interop_require_wildcard(__webpack_require__(8038));
var _headManagerContext = __webpack_require__(2796);
var _headManager = __webpack_require__(3700);
var _requestIdleCallback = __webpack_require__(3179);
const ScriptCache = new Map();
const LoadCache = new Set();
const ignoreProps = [
    "onLoad",
    "onReady",
    "dangerouslySetInnerHTML",
    "children",
    "onError",
    "strategy"
];
const loadScript = (props)=>{
    const { src , id , onLoad =()=>{} , onReady =null , dangerouslySetInnerHTML , children ="" , strategy ="afterInteractive" , onError  } = props;
    const cacheKey = id || src;
    // Script has already loaded
    if (cacheKey && LoadCache.has(cacheKey)) {
        return;
    }
    // Contents of this script are already loading/loaded
    if (ScriptCache.has(src)) {
        LoadCache.add(cacheKey);
        // It is possible that multiple `next/script` components all have same "src", but has different "onLoad"
        // This is to make sure the same remote script will only load once, but "onLoad" are executed in order
        ScriptCache.get(src).then(onLoad, onError);
        return;
    }
    /** Execute after the script first loaded */ const afterLoad = ()=>{
        // Run onReady for the first time after load event
        if (onReady) {
            onReady();
        }
        // add cacheKey to LoadCache when load successfully
        LoadCache.add(cacheKey);
    };
    const el = document.createElement("script");
    const loadPromise = new Promise((resolve, reject)=>{
        el.addEventListener("load", function(e) {
            resolve();
            if (onLoad) {
                onLoad.call(this, e);
            }
            afterLoad();
        });
        el.addEventListener("error", function(e) {
            reject(e);
        });
    }).catch(function(e) {
        if (onError) {
            onError(e);
        }
    });
    if (dangerouslySetInnerHTML) {
        el.innerHTML = dangerouslySetInnerHTML.__html || "";
        afterLoad();
    } else if (children) {
        el.textContent = typeof children === "string" ? children : Array.isArray(children) ? children.join("") : "";
        afterLoad();
    } else if (src) {
        el.src = src;
        // do not add cacheKey into LoadCache for remote script here
        // cacheKey will be added to LoadCache when it is actually loaded (see loadPromise above)
        ScriptCache.set(src, loadPromise);
    }
    for (const [k, value] of Object.entries(props)){
        if (value === undefined || ignoreProps.includes(k)) {
            continue;
        }
        const attr = _headManager.DOMAttributeNames[k] || k.toLowerCase();
        el.setAttribute(attr, value);
    }
    if (strategy === "worker") {
        el.setAttribute("type", "text/partytown");
    }
    el.setAttribute("data-nscript", strategy);
    document.body.appendChild(el);
};
function handleClientScriptLoad(props) {
    const { strategy ="afterInteractive"  } = props;
    if (strategy === "lazyOnload") {
        window.addEventListener("load", ()=>{
            (0, _requestIdleCallback).requestIdleCallback(()=>loadScript(props));
        });
    } else {
        loadScript(props);
    }
}
function loadLazyScript(props) {
    if (document.readyState === "complete") {
        (0, _requestIdleCallback).requestIdleCallback(()=>loadScript(props));
    } else {
        window.addEventListener("load", ()=>{
            (0, _requestIdleCallback).requestIdleCallback(()=>loadScript(props));
        });
    }
}
function addBeforeInteractiveToCache() {
    const scripts = [
        ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
        ...document.querySelectorAll('[data-nscript="beforePageRender"]')
    ];
    scripts.forEach((script)=>{
        const cacheKey = script.id || script.getAttribute("src");
        LoadCache.add(cacheKey);
    });
}
function initScriptLoader(scriptLoaderItems) {
    scriptLoaderItems.forEach(handleClientScriptLoad);
    addBeforeInteractiveToCache();
}
function Script(props) {
    const { id , src ="" , onLoad =()=>{} , onReady =null , strategy ="afterInteractive" , onError  } = props, restProps = _object_without_properties_loose(props, [
        "id",
        "src",
        "onLoad",
        "onReady",
        "strategy",
        "onError"
    ]);
    // Context is available only during SSR
    const { updateScripts , scripts , getIsSsr , appDir , nonce  } = (0, _react).useContext(_headManagerContext.HeadManagerContext);
    /**
   * - First mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script hasn't loaded yet (not in LoadCache)
   *      onReady is skipped, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. hasLoadScriptEffectCalled.current is false, loadScript executes
   *      Once the script is loaded, the onLoad and onReady will be called by then
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   *
   * - Second mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script has already loaded (found in LoadCache)
   *      onReady is called, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. The script is already loaded, loadScript bails out
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   */ const hasOnReadyEffectCalled = (0, _react).useRef(false);
    (0, _react).useEffect(()=>{
        const cacheKey = id || src;
        if (!hasOnReadyEffectCalled.current) {
            // Run onReady if script has loaded before but component is re-mounted
            if (onReady && cacheKey && LoadCache.has(cacheKey)) {
                onReady();
            }
            hasOnReadyEffectCalled.current = true;
        }
    }, [
        onReady,
        id,
        src
    ]);
    const hasLoadScriptEffectCalled = (0, _react).useRef(false);
    (0, _react).useEffect(()=>{
        if (!hasLoadScriptEffectCalled.current) {
            if (strategy === "afterInteractive") {
                loadScript(props);
            } else if (strategy === "lazyOnload") {
                loadLazyScript(props);
            }
            hasLoadScriptEffectCalled.current = true;
        }
    }, [
        props,
        strategy
    ]);
    if (strategy === "beforeInteractive" || strategy === "worker") {
        if (updateScripts) {
            scripts[strategy] = (scripts[strategy] || []).concat([
                _extends({
                    id,
                    src,
                    onLoad,
                    onReady,
                    onError
                }, restProps)
            ]);
            updateScripts(scripts);
        } else if (getIsSsr && getIsSsr()) {
            // Script has already loaded during SSR
            LoadCache.add(id || src);
        } else if (getIsSsr && !getIsSsr()) {
            loadScript(props);
        }
    }
    // For the app directory, we need React Float to preload these scripts.
    if (appDir) {
        // Before interactive scripts need to be loaded by Next.js' runtime instead
        // of native <script> tags, because they no longer have `defer`.
        if (strategy === "beforeInteractive") {
            if (!src) {
                // For inlined scripts, we put the content in `children`.
                if (restProps.dangerouslySetInnerHTML) {
                    restProps.children = restProps.dangerouslySetInnerHTML.__html;
                    delete restProps.dangerouslySetInnerHTML;
                }
                return /*#__PURE__*/ _react.default.createElement("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([
                            0,
                            _extends({}, restProps)
                        ])})`
                    }
                });
            }
            // @ts-ignore
            _reactDom.default.preload(src, restProps.integrity ? {
                as: "script",
                integrity: restProps.integrity
            } : {
                as: "script"
            });
            return /*#__PURE__*/ _react.default.createElement("script", {
                nonce: nonce,
                dangerouslySetInnerHTML: {
                    __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([
                        src
                    ])})`
                }
            });
        } else if (strategy === "afterInteractive") {
            if (src) {
                // @ts-ignore
                _reactDom.default.preload(src, restProps.integrity ? {
                    as: "script",
                    integrity: restProps.integrity
                } : {
                    as: "script"
                });
            }
        }
    }
    return null;
}
Object.defineProperty(Script, "__nextScript", {
    value: true
});
var _default = Script;
exports["default"] = _default;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=script.js.map


/***/ }),

/***/ 5443:
/***/ ((module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.__unsafeCreateTrustedScriptURL = __unsafeCreateTrustedScriptURL;
/**
 * Stores the Trusted Types Policy. Starts as undefined and can be set to null
 * if Trusted Types is not supported in the browser.
 */ let policy;
/**
 * Getter for the Trusted Types Policy. If it is undefined, it is instantiated
 * here or set to null if Trusted Types is not supported in the browser.
 */ function getPolicy() {
    if (typeof policy === "undefined" && "undefined" !== "undefined") { var ref; }
    return policy;
}
function __unsafeCreateTrustedScriptURL(url) {
    var ref;
    return ((ref = getPolicy()) == null ? void 0 : ref.createScriptURL(url)) || url;
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=trusted-types.js.map


/***/ }),

/***/ 4717:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.useIntersection = useIntersection;
var _react = __webpack_require__(8038);
var _requestIdleCallback = __webpack_require__(3179);
const hasIntersectionObserver = typeof IntersectionObserver === "function";
const observers = new Map();
const idList = [];
function createObserver(options) {
    const id = {
        root: options.root || null,
        margin: options.rootMargin || ""
    };
    const existing = idList.find((obj)=>obj.root === id.root && obj.margin === id.margin);
    let instance;
    if (existing) {
        instance = observers.get(existing);
        if (instance) {
            return instance;
        }
    }
    const elements = new Map();
    const observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
            const callback = elements.get(entry.target);
            const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;
            if (callback && isVisible) {
                callback(isVisible);
            }
        });
    }, options);
    instance = {
        id,
        observer,
        elements
    };
    idList.push(id);
    observers.set(id, instance);
    return instance;
}
function observe(element, callback, options) {
    const { id , observer , elements  } = createObserver(options);
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
            const index = idList.findIndex((obj)=>obj.root === id.root && obj.margin === id.margin);
            if (index > -1) {
                idList.splice(index, 1);
            }
        }
    };
}
function useIntersection({ rootRef , rootMargin , disabled  }) {
    const isDisabled = disabled || !hasIntersectionObserver;
    const [visible, setVisible] = (0, _react).useState(false);
    const [element, setElement] = (0, _react).useState(null);
    (0, _react).useEffect(()=>{
        if (hasIntersectionObserver) {
            if (isDisabled || visible) return;
            if (element && element.tagName) {
                const unobserve = observe(element, (isVisible)=>isVisible && setVisible(isVisible), {
                    root: rootRef == null ? void 0 : rootRef.current,
                    rootMargin
                });
                return unobserve;
            }
        } else {
            if (!visible) {
                const idleCallback = (0, _requestIdleCallback).requestIdleCallback(()=>setVisible(true));
                return ()=>(0, _requestIdleCallback).cancelIdleCallback(idleCallback);
            }
        }
    }, [
        element,
        isDisabled,
        rootMargin,
        rootRef,
        visible
    ]);
    const resetVisible = (0, _react).useCallback(()=>{
        setVisible(false);
    }, []);
    return [
        setElement,
        visible,
        resetVisible
    ];
}
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-intersection.js.map


/***/ }),

/***/ 887:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = NoSSR;
exports.suspense = suspense;
var _interop_require_default = (__webpack_require__(6356)/* ["default"] */ .Z);
var _react = _interop_require_default(__webpack_require__(8038));
var _noSsrError = __webpack_require__(7342);
function NoSSR({ children  }) {
    if (true) {
        suspense();
    }
    return children;
}
function suspense() {
    const error = new Error(_noSsrError.NEXT_DYNAMIC_NO_SSR_CODE);
    error.digest = _noSsrError.NEXT_DYNAMIC_NO_SSR_CODE;
    throw error;
} //# sourceMappingURL=dynamic-no-ssr.js.map


/***/ }),

/***/ 2989:
/***/ ((module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.defaultHead = defaultHead;
exports["default"] = void 0;
var _extends = (__webpack_require__(7688)/* ["default"] */ .Z);
var _interop_require_default = (__webpack_require__(6356)/* ["default"] */ .Z);
var _interop_require_wildcard = (__webpack_require__(1644)/* ["default"] */ .Z);
var _react = _interop_require_wildcard(__webpack_require__(8038));
var _sideEffect = _interop_require_default(__webpack_require__(2470));
var _ampContext = __webpack_require__(3918);
var _headManagerContext = __webpack_require__(2796);
var _ampMode = __webpack_require__(5732);
var _warnOnce = __webpack_require__(618);
function defaultHead(inAmpMode = false) {
    const head = [
        /*#__PURE__*/ _react.default.createElement("meta", {
            charSet: "utf-8"
        })
    ];
    if (!inAmpMode) {
        head.push(/*#__PURE__*/ _react.default.createElement("meta", {
            name: "viewport",
            content: "width=device-width"
        }));
    }
    return head;
}
function onlyReactElement(list, child) {
    // React children can be "string" or "number" in this case we ignore them for backwards compat
    if (typeof child === "string" || typeof child === "number") {
        return list;
    }
    // Adds support for React.Fragment
    if (child.type === _react.default.Fragment) {
        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild)=>{
            if (typeof fragmentChild === "string" || typeof fragmentChild === "number") {
                return fragmentList;
            }
            return fragmentList.concat(fragmentChild);
        }, []));
    }
    return list.concat(child);
}
const METATYPES = [
    "name",
    "httpEquiv",
    "charSet",
    "itemProp"
];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/ function unique() {
    const keys = new Set();
    const tags = new Set();
    const metaTypes = new Set();
    const metaCategories = {};
    return (h)=>{
        let isUnique = true;
        let hasKey = false;
        if (h.key && typeof h.key !== "number" && h.key.indexOf("$") > 0) {
            hasKey = true;
            const key = h.key.slice(h.key.indexOf("$") + 1);
            if (keys.has(key)) {
                isUnique = false;
            } else {
                keys.add(key);
            }
        }
        // eslint-disable-next-line default-case
        switch(h.type){
            case "title":
            case "base":
                if (tags.has(h.type)) {
                    isUnique = false;
                } else {
                    tags.add(h.type);
                }
                break;
            case "meta":
                for(let i = 0, len = METATYPES.length; i < len; i++){
                    const metatype = METATYPES[i];
                    if (!h.props.hasOwnProperty(metatype)) continue;
                    if (metatype === "charSet") {
                        if (metaTypes.has(metatype)) {
                            isUnique = false;
                        } else {
                            metaTypes.add(metatype);
                        }
                    } else {
                        const category = h.props[metatype];
                        const categories = metaCategories[metatype] || new Set();
                        if ((metatype !== "name" || !hasKey) && categories.has(category)) {
                            isUnique = false;
                        } else {
                            categories.add(category);
                            metaCategories[metatype] = categories;
                        }
                    }
                }
                break;
        }
        return isUnique;
    };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */ function reduceComponents(headChildrenElements, props) {
    const { inAmpMode  } = props;
    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead(inAmpMode).reverse()).filter(unique()).reverse().map((c, i)=>{
        const key = c.key || i;
        if ( true && !inAmpMode) {
            if (c.type === "link" && c.props["href"] && // TODO(prateekbh@): Replace this with const from `constants` when the tree shaking works.
            [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/"
            ].some((url)=>c.props["href"].startsWith(url))) {
                const newProps = _extends({}, c.props || {});
                newProps["data-href"] = newProps["href"];
                newProps["href"] = undefined;
                // Add this attribute to make it easy to identify optimized tags
                newProps["data-optimized-fonts"] = true;
                return /*#__PURE__*/ _react.default.cloneElement(c, newProps);
            }
        }
        if (false) {}
        return /*#__PURE__*/ _react.default.cloneElement(c, {
            key
        });
    });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */ function Head({ children  }) {
    const ampState = (0, _react).useContext(_ampContext.AmpStateContext);
    const headManager = (0, _react).useContext(_headManagerContext.HeadManagerContext);
    return /*#__PURE__*/ _react.default.createElement(_sideEffect.default, {
        reduceComponentsToState: reduceComponents,
        headManager: headManager,
        inAmpMode: (0, _ampMode).isInAmpMode(ampState)
    }, children);
}
var _default = Head;
exports["default"] = _default;
if ((typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) && typeof exports.default.__esModule === "undefined") {
    Object.defineProperty(exports.default, "__esModule", {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head.js.map


/***/ }),

/***/ 4387:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.matchesMiddleware = matchesMiddleware;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.createKey = createKey;
exports["default"] = void 0;
var _async_to_generator = (__webpack_require__(4432)/* ["default"] */ .Z);
var _extends = (__webpack_require__(7688)/* ["default"] */ .Z);
var _interop_require_default = (__webpack_require__(6356)/* ["default"] */ .Z);
var _interop_require_wildcard = (__webpack_require__(1644)/* ["default"] */ .Z);
var _normalizeTrailingSlash = __webpack_require__(9247);
var _removeTrailingSlash = __webpack_require__(3297);
var _routeLoader = __webpack_require__(169);
var _script = __webpack_require__(5497);
var _isError = _interop_require_wildcard(__webpack_require__(9253));
var _denormalizePagePath = __webpack_require__(4406);
var _normalizeLocalePath = __webpack_require__(4014);
var _mitt = _interop_require_default(__webpack_require__(8020));
var _utils = __webpack_require__(8245);
var _isDynamic = __webpack_require__(1428);
var _parseRelativeUrl = __webpack_require__(1292);
var _querystring = __webpack_require__(979);
var _resolveRewrites = _interop_require_default(__webpack_require__(6052));
var _routeMatcher = __webpack_require__(4226);
var _routeRegex = __webpack_require__(5052);
var _formatUrl = __webpack_require__(3938);
var _detectDomainLocale = __webpack_require__(9447);
var _parsePath = __webpack_require__(8854);
var _addLocale = __webpack_require__(6330);
var _removeLocale = __webpack_require__(6477);
var _removeBasePath = __webpack_require__(3910);
var _addBasePath = __webpack_require__(8205);
var _hasBasePath = __webpack_require__(9804);
var _isApiRoute = __webpack_require__(8533);
var _getNextPathnameInfo = __webpack_require__(5789);
var _formatNextPathnameInfo = __webpack_require__(299);
var _compareStates = __webpack_require__(6220);
var _isBot = __webpack_require__(1897);
function buildCancellationError() {
    return Object.assign(new Error("Route Cancelled"), {
        cancelled: true
    });
}
function matchesMiddleware(options) {
    return _matchesMiddleware.apply(this, arguments);
}
function _matchesMiddleware() {
    _matchesMiddleware = _async_to_generator(function*(options) {
        const matchers = yield Promise.resolve(options.router.pageLoader.getMiddleware());
        if (!matchers) return false;
        const { pathname: asPathname  } = (0, _parsePath).parsePath(options.asPath);
        // remove basePath first since path prefix has to be in the order of `/${basePath}/${locale}`
        const cleanedAs = (0, _hasBasePath).hasBasePath(asPathname) ? (0, _removeBasePath).removeBasePath(asPathname) : asPathname;
        const asWithBasePathAndLocale = (0, _addBasePath).addBasePath((0, _addLocale).addLocale(cleanedAs, options.locale));
        // Check only path match on client. Matching "has" should be done on server
        // where we can access more info such as headers, HttpOnly cookie, etc.
        return matchers.some((m)=>new RegExp(m.regexp).test(asWithBasePathAndLocale));
    });
    return _matchesMiddleware.apply(this, arguments);
}
function stripOrigin(url) {
    const origin = (0, _utils).getLocationOrigin();
    return url.startsWith(origin) ? url.substring(origin.length) : url;
}
function omit(object, keys) {
    const omitted = {};
    Object.keys(object).forEach((key)=>{
        if (!keys.includes(key)) {
            omitted[key] = object[key];
        }
    });
    return omitted;
}
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils).isAbsoluteUrl(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils).getLocationOrigin();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasBasePath).hasBasePath(resolved.pathname);
    } catch (_) {
        return false;
    }
}
function interpolateAs(route, asPathname, query) {
    let interpolatedRoute = "";
    const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
    const dynamicGroups = dynamicRegex.groups;
    const dynamicMatches = (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : "") || // Fall back to reading the values from the href
    // TODO: should this take priority; also need to change in the router.
    query;
    interpolatedRoute = route;
    const params = Object.keys(dynamicGroups);
    if (!params.every((param)=>{
        let value = dynamicMatches[param] || "";
        const { repeat , optional  } = dynamicGroups[param];
        // support single-level catch-all
        // TODO: more robust handling for user-error (passing `/`)
        let replaced = `[${repeat ? "..." : ""}${param}]`;
        if (optional) {
            replaced = `${!value ? "/" : ""}[${replaced}]`;
        }
        if (repeat && !Array.isArray(value)) value = [
            value
        ];
        return (optional || param in dynamicMatches) && // Interpolate group into data URL if present
        (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(// path delimiter escaped since they are being inserted
        // into the URL and we expect URL encoded segments
        // when parsing dynamic route params
        (segment)=>encodeURIComponent(segment)).join("/") : encodeURIComponent(value)) || "/");
    })) {
        interpolatedRoute = "" // did not satisfy all requirements
        ;
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
    }
    return {
        params,
        result: interpolatedRoute
    };
}
function resolveHref(router, href, resolveAs) {
    // we use a dummy base url for relative urls
    let base;
    let urlAsString = typeof href === "string" ? href : (0, _formatUrl).formatWithValidation(href);
    // repeated slashes and backslashes in the URL are considered
    // invalid and will never match a Next.js page/file
    const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
    const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
    const urlParts = urlAsStringNoProto.split("?");
    if ((urlParts[0] || "").match(/(\/\/|\\)/)) {
        console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
        const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
        urlAsString = (urlProtoMatch ? urlProtoMatch[0] : "") + normalizedUrl;
    }
    // Return because it cannot be routed by the Next.js router
    if (!isLocalURL(urlAsString)) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
    try {
        base = new URL(urlAsString.startsWith("#") ? router.asPath : router.pathname, "http://n");
    } catch (_) {
        // fallback to / for invalid asPath values e.g. //
        base = new URL("/", "http://n");
    }
    try {
        const finalUrl = new URL(urlAsString, base);
        finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
        let interpolatedAs = "";
        if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
            const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
            const { result , params  } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);
            if (result) {
                interpolatedAs = (0, _formatUrl).formatWithValidation({
                    pathname: result,
                    hash: finalUrl.hash,
                    query: omit(query, params)
                });
            }
        }
        // if the origin didn't change, it means we received a relative href
        const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
        return resolveAs ? [
            resolvedHref,
            interpolatedAs || resolvedHref
        ] : resolvedHref;
    } catch (_1) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
}
function prepareUrlAs(router, url, as) {
    // If url and as provided as an object representation,
    // we'll format them into the string version here.
    let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
    const origin = (0, _utils).getLocationOrigin();
    const hrefWasAbsolute = resolvedHref.startsWith(origin);
    const asWasAbsolute = resolvedAs && resolvedAs.startsWith(origin);
    resolvedHref = stripOrigin(resolvedHref);
    resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
    const preparedUrl = hrefWasAbsolute ? resolvedHref : (0, _addBasePath).addBasePath(resolvedHref);
    const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
    return {
        url: preparedUrl,
        as: asWasAbsolute ? preparedAs : (0, _addBasePath).addBasePath(preparedAs)
    };
}
function resolveDynamicRoute(pathname, pages) {
    const cleanPathname = (0, _removeTrailingSlash).removeTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));
    if (cleanPathname === "/404" || cleanPathname === "/_error") {
        return pathname;
    }
    // handle resolving href for dynamic routes
    if (!pages.includes(cleanPathname)) {
        // eslint-disable-next-line array-callback-return
        pages.some((page)=>{
            if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
                pathname = page;
                return true;
            }
        });
    }
    return (0, _removeTrailingSlash).removeTrailingSlash(pathname);
}
function getMiddlewareData(source, response, options) {
    const nextConfig = {
        basePath: options.router.basePath,
        i18n: {
            locales: options.router.locales
        },
        trailingSlash: Boolean(false)
    };
    const rewriteHeader = response.headers.get("x-nextjs-rewrite");
    let rewriteTarget = rewriteHeader || response.headers.get("x-nextjs-matched-path");
    const matchedPath = response.headers.get("x-matched-path");
    if (matchedPath && !rewriteTarget && !matchedPath.includes("__next_data_catchall") && !matchedPath.includes("/_error") && !matchedPath.includes("/404")) {
        // leverage x-matched-path to detect next.config.js rewrites
        rewriteTarget = matchedPath;
    }
    if (rewriteTarget) {
        if (rewriteTarget.startsWith("/")) {
            const parsedRewriteTarget = (0, _parseRelativeUrl).parseRelativeUrl(rewriteTarget);
            const pathnameInfo = (0, _getNextPathnameInfo).getNextPathnameInfo(parsedRewriteTarget.pathname, {
                nextConfig,
                parseData: true
            });
            let fsPathname = (0, _removeTrailingSlash).removeTrailingSlash(pathnameInfo.pathname);
            return Promise.all([
                options.router.pageLoader.getPageList(),
                (0, _routeLoader).getClientBuildManifest()
            ]).then(([pages, { __rewrites: rewrites  }])=>{
                let as = (0, _addLocale).addLocale(pathnameInfo.pathname, pathnameInfo.locale);
                if ((0, _isDynamic).isDynamicRoute(as) || !rewriteHeader && pages.includes((0, _normalizeLocalePath).normalizeLocalePath((0, _removeBasePath).removeBasePath(as), options.router.locales).pathname)) {
                    const parsedSource = (0, _getNextPathnameInfo).getNextPathnameInfo((0, _parseRelativeUrl).parseRelativeUrl(source).pathname, {
                        parseData: true
                    });
                    as = (0, _addBasePath).addBasePath(parsedSource.pathname);
                    parsedRewriteTarget.pathname = as;
                }
                if (true) {
                    const result = (0, _resolveRewrites).default(as, pages, rewrites, parsedRewriteTarget.query, (path)=>resolveDynamicRoute(path, pages), options.router.locales);
                    if (result.matchedPage) {
                        parsedRewriteTarget.pathname = result.parsedAs.pathname;
                        as = parsedRewriteTarget.pathname;
                        Object.assign(parsedRewriteTarget.query, result.parsedAs.query);
                    }
                } else {}
                const resolvedHref = !pages.includes(fsPathname) ? resolveDynamicRoute((0, _normalizeLocalePath).normalizeLocalePath((0, _removeBasePath).removeBasePath(parsedRewriteTarget.pathname), options.router.locales).pathname, pages) : fsPathname;
                if ((0, _isDynamic).isDynamicRoute(resolvedHref)) {
                    const matches = (0, _routeMatcher).getRouteMatcher((0, _routeRegex).getRouteRegex(resolvedHref))(as);
                    Object.assign(parsedRewriteTarget.query, matches || {});
                }
                return {
                    type: "rewrite",
                    parsedAs: parsedRewriteTarget,
                    resolvedHref
                };
            });
        }
        const src = (0, _parsePath).parsePath(source);
        const pathname = (0, _formatNextPathnameInfo).formatNextPathnameInfo(_extends({}, (0, _getNextPathnameInfo).getNextPathnameInfo(src.pathname, {
            nextConfig,
            parseData: true
        }), {
            defaultLocale: options.router.defaultLocale,
            buildId: ""
        }));
        return Promise.resolve({
            type: "redirect-external",
            destination: `${pathname}${src.query}${src.hash}`
        });
    }
    const redirectTarget = response.headers.get("x-nextjs-redirect");
    if (redirectTarget) {
        if (redirectTarget.startsWith("/")) {
            const src1 = (0, _parsePath).parsePath(redirectTarget);
            const pathname1 = (0, _formatNextPathnameInfo).formatNextPathnameInfo(_extends({}, (0, _getNextPathnameInfo).getNextPathnameInfo(src1.pathname, {
                nextConfig,
                parseData: true
            }), {
                defaultLocale: options.router.defaultLocale,
                buildId: ""
            }));
            return Promise.resolve({
                type: "redirect-internal",
                newAs: `${pathname1}${src1.query}${src1.hash}`,
                newUrl: `${pathname1}${src1.query}${src1.hash}`
            });
        }
        return Promise.resolve({
            type: "redirect-external",
            destination: redirectTarget
        });
    }
    return Promise.resolve({
        type: "next"
    });
}
function withMiddlewareEffects(options) {
    return _withMiddlewareEffects.apply(this, arguments);
}
function _withMiddlewareEffects() {
    _withMiddlewareEffects = _async_to_generator(function*(options) {
        const matches = yield matchesMiddleware(options);
        if (!matches || !options.fetchData) {
            return null;
        }
        try {
            const data = yield options.fetchData();
            const effect = yield getMiddlewareData(data.dataHref, data.response, options);
            return {
                dataHref: data.dataHref,
                json: data.json,
                response: data.response,
                text: data.text,
                cacheKey: data.cacheKey,
                effect
            };
        } catch (e) {
            /**
     * TODO: Revisit this in the future.
     * For now we will not consider middleware data errors to be fatal.
     * maybe we should revisit in the future.
     */ return null;
        }
    });
    return _withMiddlewareEffects.apply(this, arguments);
}
const manualScrollRestoration = (/* unused pure expression or super */ null && ( false && 0));
const SSG_DATA_NOT_FOUND = Symbol("SSG_DATA_NOT_FOUND");
function fetchRetry(url, attempts, options) {
    return fetch(url, {
        // Cookies are required to be present for Next.js' SSG "Preview Mode".
        // Cookies may also be required for `getServerSideProps`.
        //
        // > `fetch` won’t send cookies, unless you set the credentials init
        // > option.
        // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        //
        // > For maximum browser compatibility when it comes to sending &
        // > receiving cookies, always supply the `credentials: 'same-origin'`
        // > option instead of relying on the default.
        // https://github.com/github/fetch#caveats
        credentials: "same-origin",
        method: options.method || "GET",
        headers: Object.assign({}, options.headers, {
            "x-nextjs-data": "1"
        })
    }).then((response)=>{
        return !response.ok && attempts > 1 && response.status >= 500 ? fetchRetry(url, attempts - 1, options) : response;
    });
}
function handleSmoothScroll(fn) {
    const htmlElement = document.documentElement;
    const existing = htmlElement.style.scrollBehavior;
    htmlElement.style.scrollBehavior = "auto";
    // In Chrome-based browsers we need to force reflow before calling `scrollTo`.
    // Otherwise it will not pickup the change in scrollBehavior
    // More info here: https://github.com/vercel/next.js/issues/40719#issuecomment-1336248042
    htmlElement.getClientRects();
    fn();
    htmlElement.style.scrollBehavior = existing;
}
function tryToParseAsJSON(text) {
    try {
        return JSON.parse(text);
    } catch (error) {
        return null;
    }
}
function fetchNextData({ dataHref , inflightCache , isPrefetch , hasMiddleware , isServerRender , parseJSON , persistCache , isBackground , unstable_skipClientCache  }) {
    const { href: cacheKey  } = new URL(dataHref, window.location.href);
    var ref1;
    const getData = (params)=>{
        return fetchRetry(dataHref, isServerRender ? 3 : 1, {
            headers: Object.assign({}, isPrefetch ? {
                purpose: "prefetch"
            } : {}, isPrefetch && hasMiddleware ? {
                "x-middleware-prefetch": "1"
            } : {}),
            method: (ref1 = params == null ? void 0 : params.method) != null ? ref1 : "GET"
        }).then((response)=>{
            if (response.ok && (params == null ? void 0 : params.method) === "HEAD") {
                return {
                    dataHref,
                    response,
                    text: "",
                    json: {},
                    cacheKey
                };
            }
            return response.text().then((text)=>{
                if (!response.ok) {
                    /**
             * When the data response is a redirect because of a middleware
             * we do not consider it an error. The headers must bring the
             * mapped location.
             * TODO: Change the status code in the handler.
             */ if (hasMiddleware && [
                        301,
                        302,
                        307,
                        308
                    ].includes(response.status)) {
                        return {
                            dataHref,
                            response,
                            text,
                            json: {},
                            cacheKey
                        };
                    }
                    if (!hasMiddleware && response.status === 404) {
                        var ref;
                        if ((ref = tryToParseAsJSON(text)) == null ? void 0 : ref.notFound) {
                            return {
                                dataHref,
                                json: {
                                    notFound: SSG_DATA_NOT_FOUND
                                },
                                response,
                                text,
                                cacheKey
                            };
                        }
                    }
                    const error = new Error(`Failed to load static props`);
                    /**
             * We should only trigger a server-side transition if this was
             * caused on a client-side transition. Otherwise, we'd get into
             * an infinite loop.
             */ if (!isServerRender) {
                        (0, _routeLoader).markAssetError(error);
                    }
                    throw error;
                }
                return {
                    dataHref,
                    json: parseJSON ? tryToParseAsJSON(text) : null,
                    response,
                    text,
                    cacheKey
                };
            });
        }).then((data)=>{
            if (!persistCache || "production" !== "production" || data.response.headers.get("x-middleware-cache") === "no-cache") {
                delete inflightCache[cacheKey];
            }
            return data;
        }).catch((err)=>{
            if (!unstable_skipClientCache) {
                delete inflightCache[cacheKey];
            }
            if (err.message === "Failed to fetch") {
                (0, _routeLoader).markAssetError(err);
            }
            throw err;
        });
    };
    // when skipping client cache we wait to update
    // inflight cache until successful data response
    // this allows racing click event with fetching newer data
    // without blocking navigation when stale data is available
    if (unstable_skipClientCache && persistCache) {
        return getData({}).then((data)=>{
            inflightCache[cacheKey] = Promise.resolve(data);
            return data;
        });
    }
    if (inflightCache[cacheKey] !== undefined) {
        return inflightCache[cacheKey];
    }
    return inflightCache[cacheKey] = getData(isBackground ? {
        method: "HEAD"
    } : {});
}
function createKey() {
    return Math.random().toString(36).slice(2, 10);
}
function handleHardNavigation({ url , router  }) {
    // ensure we don't trigger a hard navigation to the same
    // URL as this can end up with an infinite refresh
    if (url === (0, _addBasePath).addBasePath((0, _addLocale).addLocale(router.asPath, router.locale))) {
        throw new Error(`Invariant: attempted to hard navigate to the same URL ${url} ${location.href}`);
    }
    window.location.href = url;
}
const getCancelledHandler = ({ route , router  })=>{
    let cancelled = false;
    const cancel = router.clc = ()=>{
        cancelled = true;
    };
    const handleCancelled = ()=>{
        if (cancelled) {
            const error = new Error(`Abort fetching component for route: "${route}"`);
            error.cancelled = true;
            throw error;
        }
        if (cancel === router.clc) {
            router.clc = null;
        }
    };
    return handleCancelled;
};
class Router {
    reload() {
        window.location.reload();
    }
    /**
   * Go back in history
   */ back() {
        window.history.back();
    }
    /**
   * Go forward in history
   */ forward() {
        window.history.forward();
    }
    /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */ push(url, as, options = {}) {
        if (false) {}
        ({ url , as  } = prepareUrlAs(this, url, as));
        return this.change("pushState", url, as, options);
    }
    /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */ replace(url, as, options = {}) {
        ({ url , as  } = prepareUrlAs(this, url, as));
        return this.change("replaceState", url, as, options);
    }
    change(method, url, as, options, forcedScroll) {
        var _this = this;
        return _async_to_generator(function*() {
            if (!isLocalURL(url)) {
                handleHardNavigation({
                    url,
                    router: _this
                });
                return false;
            }
            // WARNING: `_h` is an internal option for handing Next.js client-side
            // hydration. Your app should _never_ use this property. It may change at
            // any time without notice.
            const isQueryUpdating = options._h === 1;
            let shouldResolveHref = isQueryUpdating || options._shouldResolveHref || (0, _parsePath).parsePath(url).pathname === (0, _parsePath).parsePath(as).pathname;
            const nextState = _extends({}, _this.state);
            // for static pages with query params in the URL we delay
            // marking the router ready until after the query is updated
            // or a navigation has occurred
            const readyStateChange = _this.isReady !== true;
            _this.isReady = true;
            const isSsr = _this.isSsr;
            if (!isQueryUpdating) {
                _this.isSsr = false;
            }
            // if a route transition is already in progress before
            // the query updating is triggered ignore query updating
            if (isQueryUpdating && _this.clc) {
                return false;
            }
            const prevLocale = nextState.locale;
            if (false) { var ref; }
            // marking route changes as a navigation start entry
            if (_utils.ST) {
                performance.mark("routeChange");
            }
            const { shallow =false , scroll =true  } = options;
            const routeProps = {
                shallow
            };
            if (_this._inFlightRoute && _this.clc) {
                if (!isSsr) {
                    Router.events.emit("routeChangeError", buildCancellationError(), _this._inFlightRoute, routeProps);
                }
                _this.clc();
                _this.clc = null;
            }
            as = (0, _addBasePath).addBasePath((0, _addLocale).addLocale((0, _hasBasePath).hasBasePath(as) ? (0, _removeBasePath).removeBasePath(as) : as, options.locale, _this.defaultLocale));
            const cleanedAs = (0, _removeLocale).removeLocale((0, _hasBasePath).hasBasePath(as) ? (0, _removeBasePath).removeBasePath(as) : as, nextState.locale);
            _this._inFlightRoute = as;
            const localeChange = prevLocale !== nextState.locale;
            // If the url change is only related to a hash change
            // We should not proceed. We should only change the state.
            if (!isQueryUpdating && _this.onlyAHashChange(cleanedAs) && !localeChange) {
                nextState.asPath = cleanedAs;
                Router.events.emit("hashChangeStart", as, routeProps);
                // TODO: do we need the resolved href when only a hash change?
                _this.changeState(method, url, as, _extends({}, options, {
                    scroll: false
                }));
                if (scroll) {
                    _this.scrollToHash(cleanedAs);
                }
                try {
                    yield _this.set(nextState, _this.components[nextState.route], null);
                } catch (err) {
                    if ((0, _isError).default(err) && err.cancelled) {
                        Router.events.emit("routeChangeError", err, cleanedAs, routeProps);
                    }
                    throw err;
                }
                Router.events.emit("hashChangeComplete", as, routeProps);
                return true;
            }
            let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
            let { pathname , query  } = parsed;
            // The build manifest needs to be loaded before auto-static dynamic pages
            // get their query parameters to allow ensuring they can be parsed properly
            // when rewritten to
            let pages, rewrites;
            try {
                [pages, { __rewrites: rewrites  }] = yield Promise.all([
                    _this.pageLoader.getPageList(),
                    (0, _routeLoader).getClientBuildManifest(),
                    _this.pageLoader.getMiddleware()
                ]);
            } catch (err1) {
                // If we fail to resolve the page list or client-build manifest, we must
                // do a server-side transition:
                handleHardNavigation({
                    url: as,
                    router: _this
                });
                return false;
            }
            // If asked to change the current URL we should reload the current page
            // (not location.reload() but reload getInitialProps and other Next.js stuffs)
            // We also need to set the method = replaceState always
            // as this should not go into the history (That's how browsers work)
            // We should compare the new asPath to the current asPath, not the url
            if (!_this.urlIsNew(cleanedAs) && !localeChange) {
                method = "replaceState";
            }
            // we need to resolve the as value using rewrites for dynamic SSG
            // pages to allow building the data URL correctly
            let resolvedAs = as;
            // url and as should always be prefixed with basePath by this
            // point by either next/link or router.push/replace so strip the
            // basePath from the pathname to match the pages dir 1-to-1
            pathname = pathname ? (0, _removeTrailingSlash).removeTrailingSlash((0, _removeBasePath).removeBasePath(pathname)) : pathname;
            let route = (0, _removeTrailingSlash).removeTrailingSlash(pathname);
            const parsedAsPathname = as.startsWith("/") && (0, _parseRelativeUrl).parseRelativeUrl(as).pathname;
            const isMiddlewareRewrite = !!(parsedAsPathname && route !== parsedAsPathname && (!(0, _isDynamic).isDynamicRoute(route) || !(0, _routeMatcher).getRouteMatcher((0, _routeRegex).getRouteRegex(route))(parsedAsPathname)));
            // we don't attempt resolve asPath when we need to execute
            // middleware as the resolving will occur server-side
            const isMiddlewareMatch = !options.shallow && (yield matchesMiddleware({
                asPath: as,
                locale: nextState.locale,
                router: _this
            }));
            if (isQueryUpdating && isMiddlewareMatch) {
                shouldResolveHref = false;
            }
            if (shouldResolveHref && pathname !== "/_error") {
                options._shouldResolveHref = true;
                if ( true && as.startsWith("/")) {
                    const rewritesResult = (0, _resolveRewrites).default((0, _addBasePath).addBasePath((0, _addLocale).addLocale(cleanedAs, nextState.locale), true), pages, rewrites, query, (p)=>resolveDynamicRoute(p, pages), _this.locales);
                    if (rewritesResult.externalDest) {
                        handleHardNavigation({
                            url: as,
                            router: _this
                        });
                        return true;
                    }
                    if (!isMiddlewareMatch) {
                        resolvedAs = rewritesResult.asPath;
                    }
                    if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
                        // if this directly matches a page we need to update the href to
                        // allow the correct page chunk to be loaded
                        pathname = rewritesResult.resolvedHref;
                        parsed.pathname = (0, _addBasePath).addBasePath(pathname);
                        if (!isMiddlewareMatch) {
                            url = (0, _formatUrl).formatWithValidation(parsed);
                        }
                    }
                } else {
                    parsed.pathname = resolveDynamicRoute(pathname, pages);
                    if (parsed.pathname !== pathname) {
                        pathname = parsed.pathname;
                        parsed.pathname = (0, _addBasePath).addBasePath(pathname);
                        if (!isMiddlewareMatch) {
                            url = (0, _formatUrl).formatWithValidation(parsed);
                        }
                    }
                }
            }
            if (!isLocalURL(as)) {
                if (false) {}
                handleHardNavigation({
                    url: as,
                    router: _this
                });
                return false;
            }
            resolvedAs = (0, _removeLocale).removeLocale((0, _removeBasePath).removeBasePath(resolvedAs), nextState.locale);
            route = (0, _removeTrailingSlash).removeTrailingSlash(pathname);
            let routeMatch = false;
            if ((0, _isDynamic).isDynamicRoute(route)) {
                const parsedAs1 = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
                const asPathname = parsedAs1.pathname;
                const routeRegex = (0, _routeRegex).getRouteRegex(route);
                routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
                const shouldInterpolate = route === asPathname;
                const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};
                if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
                    const missingParams = Object.keys(routeRegex.groups).filter((param)=>!query[param] && !routeRegex.groups[param].optional);
                    if (missingParams.length > 0 && !isMiddlewareMatch) {
                        if (false) {}
                        throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(", ")}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? "href-interpolation-failed" : "incompatible-href-as"}`);
                    }
                } else if (shouldInterpolate) {
                    as = (0, _formatUrl).formatWithValidation(Object.assign({}, parsedAs1, {
                        pathname: interpolatedAs.result,
                        query: omit(query, interpolatedAs.params)
                    }));
                } else {
                    // Merge params into `query`, overwriting any specified in search
                    Object.assign(query, routeMatch);
                }
            }
            if (!isQueryUpdating) {
                Router.events.emit("routeChangeStart", as, routeProps);
            }
            try {
                var ref2, ref3, ref4;
                let routeInfo = yield _this.getRouteInfo({
                    route,
                    pathname,
                    query,
                    as,
                    resolvedAs,
                    routeProps,
                    locale: nextState.locale,
                    isPreview: nextState.isPreview,
                    hasMiddleware: isMiddlewareMatch,
                    unstable_skipClientCache: options.unstable_skipClientCache,
                    isQueryUpdating: isQueryUpdating && !_this.isFallback,
                    isMiddlewareRewrite
                });
                if ("route" in routeInfo && isMiddlewareMatch) {
                    pathname = routeInfo.route || route;
                    route = pathname;
                    if (!routeProps.shallow) {
                        query = Object.assign({}, routeInfo.query || {}, query);
                    }
                    const cleanedParsedPathname = (0, _hasBasePath).hasBasePath(parsed.pathname) ? (0, _removeBasePath).removeBasePath(parsed.pathname) : parsed.pathname;
                    if (routeMatch && pathname !== cleanedParsedPathname) {
                        Object.keys(routeMatch).forEach((key)=>{
                            if (routeMatch && query[key] === routeMatch[key]) {
                                delete query[key];
                            }
                        });
                    }
                    if ((0, _isDynamic).isDynamicRoute(pathname)) {
                        const prefixedAs = !routeProps.shallow && routeInfo.resolvedAs ? routeInfo.resolvedAs : (0, _addBasePath).addBasePath((0, _addLocale).addLocale(new URL(as, location.href).pathname, nextState.locale), true);
                        let rewriteAs = prefixedAs;
                        if ((0, _hasBasePath).hasBasePath(rewriteAs)) {
                            rewriteAs = (0, _removeBasePath).removeBasePath(rewriteAs);
                        }
                        if (false) {}
                        const routeRegex1 = (0, _routeRegex).getRouteRegex(pathname);
                        const curRouteMatch = (0, _routeMatcher).getRouteMatcher(routeRegex1)(new URL(rewriteAs, location.href).pathname);
                        if (curRouteMatch) {
                            Object.assign(query, curRouteMatch);
                        }
                    }
                }
                // If the routeInfo brings a redirect we simply apply it.
                if ("type" in routeInfo) {
                    if (routeInfo.type === "redirect-internal") {
                        return _this.change(method, routeInfo.newUrl, routeInfo.newAs, options);
                    } else {
                        handleHardNavigation({
                            url: routeInfo.destination,
                            router: _this
                        });
                        return new Promise(()=>{});
                    }
                }
                const component = routeInfo.Component;
                if (component && component.unstable_scriptLoader) {
                    const scripts = [].concat(component.unstable_scriptLoader());
                    scripts.forEach((script)=>{
                        (0, _script).handleClientScriptLoad(script.props);
                    });
                }
                // handle redirect on client-transition
                if ((routeInfo.__N_SSG || routeInfo.__N_SSP) && routeInfo.props) {
                    if (routeInfo.props.pageProps && routeInfo.props.pageProps.__N_REDIRECT) {
                        // Use the destination from redirect without adding locale
                        options.locale = false;
                        const destination = routeInfo.props.pageProps.__N_REDIRECT;
                        // check if destination is internal (resolves to a page) and attempt
                        // client-navigation if it is falling back to hard navigation if
                        // it's not
                        if (destination.startsWith("/") && routeInfo.props.pageProps.__N_REDIRECT_BASE_PATH !== false) {
                            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
                            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
                            const { url: newUrl , as: newAs  } = prepareUrlAs(_this, destination, destination);
                            return _this.change(method, newUrl, newAs, options);
                        }
                        handleHardNavigation({
                            url: destination,
                            router: _this
                        });
                        return new Promise(()=>{});
                    }
                    nextState.isPreview = !!routeInfo.props.__N_PREVIEW;
                    // handle SSG data 404
                    if (routeInfo.props.notFound === SSG_DATA_NOT_FOUND) {
                        let notFoundRoute;
                        try {
                            yield _this.fetchComponent("/404");
                            notFoundRoute = "/404";
                        } catch (_) {
                            notFoundRoute = "/_error";
                        }
                        routeInfo = yield _this.getRouteInfo({
                            route: notFoundRoute,
                            pathname: notFoundRoute,
                            query,
                            as,
                            resolvedAs,
                            routeProps: {
                                shallow: false
                            },
                            locale: nextState.locale,
                            isPreview: nextState.isPreview
                        });
                        if ("type" in routeInfo) {
                            throw new Error(`Unexpected middleware effect on /404`);
                        }
                    }
                }
                if (isQueryUpdating && _this.pathname === "/_error" && ((ref2 = self.__NEXT_DATA__.props) == null ? void 0 : (ref3 = ref2.pageProps) == null ? void 0 : ref3.statusCode) === 500 && ((ref4 = routeInfo.props) == null ? void 0 : ref4.pageProps)) {
                    // ensure statusCode is still correct for static 500 page
                    // when updating query information
                    routeInfo.props.pageProps.statusCode = 500;
                }
                var _route;
                // shallow routing is only allowed for same page URL changes.
                const isValidShallowRoute = options.shallow && nextState.route === ((_route = routeInfo.route) != null ? _route : route);
                var _scroll;
                const shouldScroll = (_scroll = options.scroll) != null ? _scroll : !isQueryUpdating && !isValidShallowRoute;
                const resetScroll = shouldScroll ? {
                    x: 0,
                    y: 0
                } : null;
                const upcomingScrollState = forcedScroll != null ? forcedScroll : resetScroll;
                // the new state that the router gonna set
                const upcomingRouterState = _extends({}, nextState, {
                    route,
                    pathname,
                    query,
                    asPath: cleanedAs,
                    isFallback: false
                });
                // When the page being rendered is the 404 page, we should only update the
                // query parameters. Route changes here might add the basePath when it
                // wasn't originally present. This is also why this block is before the
                // below `changeState` call which updates the browser's history (changing
                // the URL).
                if (isQueryUpdating && (_this.pathname === "/404" || _this.pathname === "/_error")) {
                    var ref5, ref6, ref7;
                    routeInfo = yield _this.getRouteInfo({
                        route: _this.pathname,
                        pathname: _this.pathname,
                        query,
                        as,
                        resolvedAs,
                        routeProps: {
                            shallow: false
                        },
                        locale: nextState.locale,
                        isPreview: nextState.isPreview
                    });
                    if ("type" in routeInfo) {
                        throw new Error(`Unexpected middleware effect on ${_this.pathname}`);
                    }
                    if (_this.pathname === "/_error" && ((ref5 = self.__NEXT_DATA__.props) == null ? void 0 : (ref6 = ref5.pageProps) == null ? void 0 : ref6.statusCode) === 500 && ((ref7 = routeInfo.props) == null ? void 0 : ref7.pageProps)) {
                        // ensure statusCode is still correct for static 500 page
                        // when updating query information
                        routeInfo.props.pageProps.statusCode = 500;
                    }
                    try {
                        yield _this.set(upcomingRouterState, routeInfo, upcomingScrollState);
                    } catch (err2) {
                        if ((0, _isError).default(err2) && err2.cancelled) {
                            Router.events.emit("routeChangeError", err2, cleanedAs, routeProps);
                        }
                        throw err2;
                    }
                    return true;
                }
                Router.events.emit("beforeHistoryChange", as, routeProps);
                _this.changeState(method, url, as, options);
                // for query updates we can skip it if the state is unchanged and we don't
                // need to scroll
                // https://github.com/vercel/next.js/issues/37139
                const canSkipUpdating = isQueryUpdating && !upcomingScrollState && !readyStateChange && !localeChange && (0, _compareStates).compareRouterStates(upcomingRouterState, _this.state);
                if (!canSkipUpdating) {
                    try {
                        yield _this.set(upcomingRouterState, routeInfo, upcomingScrollState);
                    } catch (e) {
                        if (e.cancelled) routeInfo.error = routeInfo.error || e;
                        else throw e;
                    }
                    if (routeInfo.error) {
                        if (!isQueryUpdating) {
                            Router.events.emit("routeChangeError", routeInfo.error, cleanedAs, routeProps);
                        }
                        throw routeInfo.error;
                    }
                    if (false) {}
                    if (!isQueryUpdating) {
                        Router.events.emit("routeChangeComplete", as, routeProps);
                    }
                    // A hash mark # is the optional last part of a URL
                    const hashRegex = /#.+$/;
                    if (shouldScroll && hashRegex.test(as)) {
                        _this.scrollToHash(as);
                    }
                }
                return true;
            } catch (err11) {
                if ((0, _isError).default(err11) && err11.cancelled) {
                    return false;
                }
                throw err11;
            }
        })();
    }
    changeState(method, url, as, options = {}) {
        if (false) {}
        if (method !== "pushState" || (0, _utils).getURL() !== as) {
            this._shallow = options.shallow;
            window.history[method]({
                url,
                as,
                options,
                __N: true,
                key: this._key = method !== "pushState" ? this._key : createKey()
            }, // Passing the empty string here should be safe against future changes to the method.
            // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
            "", as);
        }
    }
    handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
        var _this = this;
        return _async_to_generator(function*() {
            console.error(err);
            if (err.cancelled) {
                // bubble up cancellation errors
                throw err;
            }
            if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
                Router.events.emit("routeChangeError", err, as, routeProps);
                // If we can't load the page it could be one of following reasons
                //  1. Page doesn't exists
                //  2. Page does exist in a different zone
                //  3. Internal error while loading the page
                // So, doing a hard reload is the proper way to deal with this.
                handleHardNavigation({
                    url: as,
                    router: _this
                });
                // Changing the URL doesn't block executing the current code path.
                // So let's throw a cancellation error stop the routing logic.
                throw buildCancellationError();
            }
            try {
                let props;
                const { page: Component , styleSheets  } = yield _this.fetchComponent("/_error");
                const routeInfo = {
                    props,
                    Component,
                    styleSheets,
                    err,
                    error: err
                };
                if (!routeInfo.props) {
                    try {
                        routeInfo.props = yield _this.getInitialProps(Component, {
                            err,
                            pathname,
                            query
                        });
                    } catch (gipErr) {
                        console.error("Error in error page `getInitialProps`: ", gipErr);
                        routeInfo.props = {};
                    }
                }
                return routeInfo;
            } catch (routeInfoErr) {
                return _this.handleRouteInfoError((0, _isError).default(routeInfoErr) ? routeInfoErr : new Error(routeInfoErr + ""), pathname, query, as, routeProps, true);
            }
        })();
    }
    getRouteInfo({ route: requestedRoute , pathname , query , as , resolvedAs , routeProps , locale , hasMiddleware , isPreview , unstable_skipClientCache , isQueryUpdating , isMiddlewareRewrite  }) {
        var _this = this;
        return _async_to_generator(function*() {
            /**
     * This `route` binding can change if there's a rewrite
     * so we keep a reference to the original requested route
     * so we can store the cache for it and avoid re-requesting every time
     * for shallow routing purposes.
     */ let route = requestedRoute;
            try {
                var ref, ref8, ref9, ref10;
                const handleCancelled = getCancelledHandler({
                    route,
                    router: _this
                });
                let existingInfo = _this.components[route];
                if (routeProps.shallow && existingInfo && _this.route === route) {
                    return existingInfo;
                }
                if (hasMiddleware) {
                    existingInfo = undefined;
                }
                let cachedRouteInfo = existingInfo && !("initial" in existingInfo) && "production" !== "development" ? existingInfo : undefined;
                const isBackground = isQueryUpdating;
                const fetchNextDataParams = {
                    dataHref: _this.pageLoader.getDataHref({
                        href: (0, _formatUrl).formatWithValidation({
                            pathname,
                            query
                        }),
                        skipInterpolation: true,
                        asPath: resolvedAs,
                        locale
                    }),
                    hasMiddleware: true,
                    isServerRender: _this.isSsr,
                    parseJSON: true,
                    inflightCache: isBackground ? _this.sbc : _this.sdc,
                    persistCache: !isPreview,
                    isPrefetch: false,
                    unstable_skipClientCache,
                    isBackground
                };
                let data = isQueryUpdating && !isMiddlewareRewrite ? null : yield withMiddlewareEffects({
                    fetchData: ()=>fetchNextData(fetchNextDataParams),
                    asPath: resolvedAs,
                    locale: locale,
                    router: _this
                }).catch((err)=>{
                    // we don't hard error during query updating
                    // as it's un-necessary and doesn't need to be fatal
                    // unless it is a fallback route and the props can't
                    // be loaded
                    if (isQueryUpdating) {
                        return null;
                    }
                    throw err;
                });
                if (isQueryUpdating) {
                    if (!data) {
                        data = {
                            json: self.__NEXT_DATA__.props
                        };
                    } else {
                        data.json = self.__NEXT_DATA__.props;
                    }
                }
                handleCancelled();
                if ((data == null ? void 0 : (ref = data.effect) == null ? void 0 : ref.type) === "redirect-internal" || (data == null ? void 0 : (ref8 = data.effect) == null ? void 0 : ref8.type) === "redirect-external") {
                    return data.effect;
                }
                if ((data == null ? void 0 : (ref9 = data.effect) == null ? void 0 : ref9.type) === "rewrite") {
                    const resolvedRoute = (0, _removeTrailingSlash).removeTrailingSlash(data.effect.resolvedHref);
                    const pages = yield _this.pageLoader.getPageList();
                    // during query updating the page must match although during
                    // client-transition a redirect that doesn't match a page
                    // can be returned and this should trigger a hard navigation
                    // which is valid for incremental migration
                    if (!isQueryUpdating || pages.includes(resolvedRoute)) {
                        route = resolvedRoute;
                        pathname = data.effect.resolvedHref;
                        query = _extends({}, query, data.effect.parsedAs.query);
                        resolvedAs = (0, _removeBasePath).removeBasePath((0, _normalizeLocalePath).normalizeLocalePath(data.effect.parsedAs.pathname, _this.locales).pathname);
                        // Check again the cache with the new destination.
                        existingInfo = _this.components[route];
                        if (routeProps.shallow && existingInfo && _this.route === route && !hasMiddleware) {
                            // If we have a match with the current route due to rewrite,
                            // we can copy the existing information to the rewritten one.
                            // Then, we return the information along with the matched route.
                            return _extends({}, existingInfo, {
                                route
                            });
                        }
                    }
                }
                if ((0, _isApiRoute).isAPIRoute(route)) {
                    handleHardNavigation({
                        url: as,
                        router: _this
                    });
                    return new Promise(()=>{});
                }
                const routeInfo = cachedRouteInfo || (yield _this.fetchComponent(route).then((res)=>({
                        Component: res.page,
                        styleSheets: res.styleSheets,
                        __N_SSG: res.mod.__N_SSG,
                        __N_SSP: res.mod.__N_SSP
                    })));
                if (false) {}
                const wasBailedPrefetch = data == null ? void 0 : (ref10 = data.response) == null ? void 0 : ref10.headers.get("x-middleware-skip");
                const shouldFetchData = routeInfo.__N_SSG || routeInfo.__N_SSP;
                // For non-SSG prefetches that bailed before sending data
                // we clear the cache to fetch full response
                if (wasBailedPrefetch && (data == null ? void 0 : data.dataHref)) {
                    delete _this.sdc[data.dataHref];
                }
                const { props , cacheKey  } = yield _this._getData(_async_to_generator(function*() {
                    if (shouldFetchData) {
                        if ((data == null ? void 0 : data.json) && !wasBailedPrefetch) {
                            return {
                                cacheKey: data.cacheKey,
                                props: data.json
                            };
                        }
                        const dataHref = (data == null ? void 0 : data.dataHref) ? data.dataHref : _this.pageLoader.getDataHref({
                            href: (0, _formatUrl).formatWithValidation({
                                pathname,
                                query
                            }),
                            asPath: resolvedAs,
                            locale
                        });
                        const fetched = yield fetchNextData({
                            dataHref,
                            isServerRender: _this.isSsr,
                            parseJSON: true,
                            inflightCache: wasBailedPrefetch ? {} : _this.sdc,
                            persistCache: !isPreview,
                            isPrefetch: false,
                            unstable_skipClientCache
                        });
                        return {
                            cacheKey: fetched.cacheKey,
                            props: fetched.json || {}
                        };
                    }
                    return {
                        headers: {},
                        props: yield _this.getInitialProps(routeInfo.Component, {
                            pathname,
                            query,
                            asPath: as,
                            locale,
                            locales: _this.locales,
                            defaultLocale: _this.defaultLocale
                        })
                    };
                }));
                // Only bust the data cache for SSP routes although
                // middleware can skip cache per request with
                // x-middleware-cache: no-cache as well
                if (routeInfo.__N_SSP && fetchNextDataParams.dataHref && cacheKey) {
                    delete _this.sdc[cacheKey];
                }
                // we kick off a HEAD request in the background
                // when a non-prefetch request is made to signal revalidation
                if (!_this.isPreview && routeInfo.__N_SSG && "production" !== "development" && !isQueryUpdating) {
                    fetchNextData(Object.assign({}, fetchNextDataParams, {
                        isBackground: true,
                        persistCache: false,
                        inflightCache: _this.sbc
                    })).catch(()=>{});
                }
                props.pageProps = Object.assign({}, props.pageProps);
                routeInfo.props = props;
                routeInfo.route = route;
                routeInfo.query = query;
                routeInfo.resolvedAs = resolvedAs;
                _this.components[route] = routeInfo;
                return routeInfo;
            } catch (err) {
                return _this.handleRouteInfoError((0, _isError).getProperError(err), pathname, query, as, routeProps);
            }
        })();
    }
    set(state, data, resetScroll) {
        this.state = state;
        return this.sub(data, this.components["/_app"].Component, resetScroll);
    }
    /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */ beforePopState(cb) {
        this._bps = cb;
    }
    onlyAHashChange(as) {
        if (!this.asPath) return false;
        const [oldUrlNoHash, oldHash] = this.asPath.split("#");
        const [newUrlNoHash, newHash] = as.split("#");
        // Makes sure we scroll to the provided hash if the url/hash are the same
        if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
            return true;
        }
        // If the urls are change, there's more than a hash change
        if (oldUrlNoHash !== newUrlNoHash) {
            return false;
        }
        // If the hash has changed, then it's a hash only change.
        // This check is necessary to handle both the enter and
        // leave hash === '' cases. The identity case falls through
        // and is treated as a next reload.
        return oldHash !== newHash;
    }
    scrollToHash(as) {
        const [, hash = ""] = as.split("#");
        // Scroll to top if the hash is just `#` with no value or `#top`
        // To mirror browsers
        if (hash === "" || hash === "top") {
            handleSmoothScroll(()=>window.scrollTo(0, 0));
            return;
        }
        // Decode hash to make non-latin anchor works.
        const rawHash = decodeURIComponent(hash);
        // First we check if the element by id is found
        const idEl = document.getElementById(rawHash);
        if (idEl) {
            handleSmoothScroll(()=>idEl.scrollIntoView());
            return;
        }
        // If there's no element with the id, we check the `name` property
        // To mirror browsers
        const nameEl = document.getElementsByName(rawHash)[0];
        if (nameEl) {
            handleSmoothScroll(()=>nameEl.scrollIntoView());
        }
    }
    urlIsNew(asPath) {
        return this.asPath !== asPath;
    }
    /**
   * Prefetch page code, you may wait for the data during page rendering.
   * This feature only works in production!
   * @param url the href of prefetched page
   * @param asPath the as path of the prefetched page
   */ prefetch(url, asPath = url, options = {}) {
        var _this = this;
        return _async_to_generator(function*() {
            // Prefetch is not supported in development mode because it would trigger on-demand-entries
            if (false) {}
            if (false) {}
            let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
            let { pathname , query  } = parsed;
            const originalPathname = pathname;
            if (false) {}
            const pages = yield _this.pageLoader.getPageList();
            let resolvedAs = asPath;
            const locale = typeof options.locale !== "undefined" ? options.locale || undefined : _this.locale;
            const isMiddlewareMatch = yield matchesMiddleware({
                asPath: asPath,
                locale: locale,
                router: _this
            });
            if ( true && asPath.startsWith("/")) {
                let rewrites;
                ({ __rewrites: rewrites  } = yield (0, _routeLoader).getClientBuildManifest());
                const rewritesResult = (0, _resolveRewrites).default((0, _addBasePath).addBasePath((0, _addLocale).addLocale(asPath, _this.locale), true), pages, rewrites, parsed.query, (p)=>resolveDynamicRoute(p, pages), _this.locales);
                if (rewritesResult.externalDest) {
                    return;
                }
                if (!isMiddlewareMatch) {
                    resolvedAs = (0, _removeLocale).removeLocale((0, _removeBasePath).removeBasePath(rewritesResult.asPath), _this.locale);
                }
                if (rewritesResult.matchedPage && rewritesResult.resolvedHref) {
                    // if this directly matches a page we need to update the href to
                    // allow the correct page chunk to be loaded
                    pathname = rewritesResult.resolvedHref;
                    parsed.pathname = pathname;
                    if (!isMiddlewareMatch) {
                        url = (0, _formatUrl).formatWithValidation(parsed);
                    }
                }
            }
            parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);
            if ((0, _isDynamic).isDynamicRoute(parsed.pathname)) {
                pathname = parsed.pathname;
                parsed.pathname = pathname;
                Object.assign(query, (0, _routeMatcher).getRouteMatcher((0, _routeRegex).getRouteRegex(parsed.pathname))((0, _parsePath).parsePath(asPath).pathname) || {});
                if (!isMiddlewareMatch) {
                    url = (0, _formatUrl).formatWithValidation(parsed);
                }
            }
            const data =  false ? 0 : yield withMiddlewareEffects({
                fetchData: ()=>fetchNextData({
                        dataHref: _this.pageLoader.getDataHref({
                            href: (0, _formatUrl).formatWithValidation({
                                pathname: originalPathname,
                                query
                            }),
                            skipInterpolation: true,
                            asPath: resolvedAs,
                            locale
                        }),
                        hasMiddleware: true,
                        isServerRender: _this.isSsr,
                        parseJSON: true,
                        inflightCache: _this.sdc,
                        persistCache: !_this.isPreview,
                        isPrefetch: true
                    }),
                asPath: asPath,
                locale: locale,
                router: _this
            });
            /**
     * If there was a rewrite we apply the effects of the rewrite on the
     * current parameters for the prefetch.
     */ if ((data == null ? void 0 : data.effect.type) === "rewrite") {
                parsed.pathname = data.effect.resolvedHref;
                pathname = data.effect.resolvedHref;
                query = _extends({}, query, data.effect.parsedAs.query);
                resolvedAs = data.effect.parsedAs.pathname;
                url = (0, _formatUrl).formatWithValidation(parsed);
            }
            /**
     * If there is a redirect to an external destination then we don't have
     * to prefetch content as it will be unused.
     */ if ((data == null ? void 0 : data.effect.type) === "redirect-external") {
                return;
            }
            const route = (0, _removeTrailingSlash).removeTrailingSlash(pathname);
            yield Promise.all([
                _this.pageLoader._isSsg(route).then((isSsg)=>{
                    return isSsg ? fetchNextData({
                        dataHref: (data == null ? void 0 : data.json) ? data == null ? void 0 : data.dataHref : _this.pageLoader.getDataHref({
                            href: url,
                            asPath: resolvedAs,
                            locale: locale
                        }),
                        isServerRender: false,
                        parseJSON: true,
                        inflightCache: _this.sdc,
                        persistCache: !_this.isPreview,
                        isPrefetch: true,
                        unstable_skipClientCache: options.unstable_skipClientCache || options.priority && !!true
                    }).then(()=>false) : false;
                }),
                _this.pageLoader[options.priority ? "loadPage" : "prefetch"](route)
            ]);
        })();
    }
    fetchComponent(route) {
        var _this = this;
        return _async_to_generator(function*() {
            const handleCancelled = getCancelledHandler({
                route,
                router: _this
            });
            try {
                const componentResult = yield _this.pageLoader.loadPage(route);
                handleCancelled();
                return componentResult;
            } catch (err) {
                handleCancelled();
                throw err;
            }
        })();
    }
    _getData(fn) {
        let cancelled = false;
        const cancel = ()=>{
            cancelled = true;
        };
        this.clc = cancel;
        return fn().then((data)=>{
            if (cancel === this.clc) {
                this.clc = null;
            }
            if (cancelled) {
                const err = new Error("Loading initial props cancelled");
                err.cancelled = true;
                throw err;
            }
            return data;
        });
    }
    _getFlightData(dataHref) {
        // Do not cache RSC flight response since it's not a static resource
        return fetchNextData({
            dataHref,
            isServerRender: true,
            parseJSON: false,
            inflightCache: this.sdc,
            persistCache: false,
            isPrefetch: false
        }).then(({ text  })=>({
                data: text
            }));
    }
    getInitialProps(Component, ctx) {
        const { Component: App  } = this.components["/_app"];
        const AppTree = this._wrapApp(App);
        ctx.AppTree = AppTree;
        return (0, _utils).loadGetInitialProps(App, {
            AppTree,
            Component,
            router: this,
            ctx
        });
    }
    get route() {
        return this.state.route;
    }
    get pathname() {
        return this.state.pathname;
    }
    get query() {
        return this.state.query;
    }
    get asPath() {
        return this.state.asPath;
    }
    get locale() {
        return this.state.locale;
    }
    get isFallback() {
        return this.state.isFallback;
    }
    get isPreview() {
        return this.state.isPreview;
    }
    constructor(pathname1, query1, as1, { initialProps , pageLoader , App , wrapApp , Component , err , subscription , isFallback , locale , locales , defaultLocale , domainLocales , isPreview  }){
        // Server Data Cache (full data requests)
        this.sdc = {};
        // Server Background Cache (HEAD requests)
        this.sbc = {};
        this.isFirstPopStateEvent = true;
        this._key = createKey();
        this.onPopState = (e)=>{
            const { isFirstPopStateEvent  } = this;
            this.isFirstPopStateEvent = false;
            const state = e.state;
            if (!state) {
                // We get state as undefined for two reasons.
                //  1. With older safari (< 8) and older chrome (< 34)
                //  2. When the URL changed with #
                //
                // In the both cases, we don't need to proceed and change the route.
                // (as it's already changed)
                // But we can simply replace the state with the new changes.
                // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
                // So, doing the following for (1) does no harm.
                const { pathname , query  } = this;
                this.changeState("replaceState", (0, _formatUrl).formatWithValidation({
                    pathname: (0, _addBasePath).addBasePath(pathname),
                    query
                }), (0, _utils).getURL());
                return;
            }
            // __NA is used to identify if the history entry can be handled by the app-router.
            if (state.__NA) {
                window.location.reload();
                return;
            }
            if (!state.__N) {
                return;
            }
            // Safari fires popstateevent when reopening the browser.
            if (isFirstPopStateEvent && this.locale === state.options.locale && state.as === this.asPath) {
                return;
            }
            let forcedScroll;
            const { url , as , options , key  } = state;
            if (false) {}
            this._key = key;
            const { pathname: pathname1  } = (0, _parseRelativeUrl).parseRelativeUrl(url);
            // Make sure we don't re-render on initial load,
            // can be caused by navigating back from an external site
            if (this.isSsr && as === (0, _addBasePath).addBasePath(this.asPath) && pathname1 === (0, _addBasePath).addBasePath(this.pathname)) {
                return;
            }
            // If the downstream application returns falsy, return.
            // They will then be responsible for handling the event.
            if (this._bps && !this._bps(state)) {
                return;
            }
            this.change("replaceState", url, as, Object.assign({}, options, {
                shallow: options.shallow && this._shallow,
                locale: options.locale || this.defaultLocale,
                // @ts-ignore internal value not exposed on types
                _h: 0
            }), forcedScroll);
        };
        // represents the current component key
        const route = (0, _removeTrailingSlash).removeTrailingSlash(pathname1);
        // set up the component cache (by route keys)
        this.components = {};
        // We should not keep the cache, if there's an error
        // Otherwise, this cause issues when when going back and
        // come again to the errored page.
        if (pathname1 !== "/_error") {
            this.components[route] = {
                Component,
                initial: true,
                props: initialProps,
                err,
                __N_SSG: initialProps && initialProps.__N_SSG,
                __N_SSP: initialProps && initialProps.__N_SSP
            };
        }
        this.components["/_app"] = {
            Component: App,
            styleSheets: []
        };
        // Backwards compat for Router.router.events
        // TODO: Should be remove the following major version as it was never documented
        this.events = Router.events;
        this.pageLoader = pageLoader;
        // if auto prerendered and dynamic route wait to update asPath
        // until after mount to prevent hydration mismatch
        const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;
        this.basePath =  false || "";
        this.sub = subscription;
        this.clc = null;
        this._wrapApp = wrapApp;
        // make sure to ignore extra popState in safari on navigating
        // back from external site
        this.isSsr = true;
        this.isLocaleDomain = false;
        this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !true);
        if (false) {}
        this.state = {
            route,
            pathname: pathname1,
            query: query1,
            asPath: autoExportDynamic ? pathname1 : as1,
            isPreview: !!isPreview,
            locale:  false ? 0 : undefined,
            isFallback
        };
        this._initialMatchesMiddlewarePromise = Promise.resolve(false);
        if (false) {}
    }
}
Router.events = (0, _mitt).default();
exports["default"] = Router; //# sourceMappingURL=router.js.map


/***/ }),

/***/ 8533:
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.isAPIRoute = isAPIRoute;
function isAPIRoute(value) {
    return value === "/api" || Boolean(value == null ? void 0 : value.startsWith("/api/"));
}

//# sourceMappingURL=is-api-route.js.map

/***/ }),

/***/ 9253:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = isError;
exports.getProperError = getProperError;
var _isPlainObject = __webpack_require__(8524);
function isError(err) {
    return typeof err === "object" && err !== null && "name" in err && "message" in err;
}
function getProperError(err) {
    if (isError(err)) {
        return err;
    }
    if (false) {}
    return new Error((0, _isPlainObject).isPlainObject(err) ? JSON.stringify(err) : err + "");
}

//# sourceMappingURL=is-error.js.map

/***/ }),

/***/ 8421:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(9797)


/***/ }),

/***/ 1621:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(2919)


/***/ }),

/***/ 5830:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(5284);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 9232:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(5830)();
}


/***/ }),

/***/ 5284:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 6079:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var e=__webpack_require__(8038);function h(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var k="function"===typeof Object.is?Object.is:h,l=e.useState,m=e.useEffect,n=e.useLayoutEffect,p=e.useDebugValue;function q(a,b){var d=b(),f=l({inst:{value:d,getSnapshot:b}}),c=f[0].inst,g=f[1];n(function(){c.value=d;c.getSnapshot=b;r(c)&&g({inst:c})},[a,d,b]);m(function(){r(c)&&g({inst:c});return a(function(){r(c)&&g({inst:c})})},[a]);p(d);return d}
function r(a){var b=a.getSnapshot;a=a.value;try{var d=b();return!k(a,d)}catch(f){return!0}}function t(a,b){return b()}var u="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?t:q;exports.useSyncExternalStore=void 0!==e.useSyncExternalStore?e.useSyncExternalStore:u;


/***/ }),

/***/ 9303:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var h=__webpack_require__(8038),n=__webpack_require__(1448);function p(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var q="function"===typeof Object.is?Object.is:p,r=n.useSyncExternalStore,t=h.useRef,u=h.useEffect,v=h.useMemo,w=h.useDebugValue;
exports.useSyncExternalStoreWithSelector=function(a,b,e,l,g){var c=t(null);if(null===c.current){var f={hasValue:!1,value:null};c.current=f}else f=c.current;c=v(function(){function a(a){if(!c){c=!0;d=a;a=l(a);if(void 0!==g&&f.hasValue){var b=f.value;if(g(b,a))return k=b}return k=a}b=k;if(q(d,a))return b;var e=l(a);if(void 0!==g&&g(b,e))return b;d=a;return k=e}var c=!1,d,k,m=void 0===e?null:e;return[function(){return a(b())},null===m?void 0:function(){return a(m())}]},[b,e,l,g]);var d=r(a,c[0],c[1]);
u(function(){f.hasValue=!0;f.value=d},[d]);w(d);return d};


/***/ }),

/***/ 1448:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(6079);
} else {}


/***/ }),

/***/ 5020:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (true) {
  module.exports = __webpack_require__(9303);
} else {}


/***/ }),

/***/ 1550:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ o)
/* harmony export */ });
var o=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(o||{});


/***/ }),

/***/ 7803:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "J": () => (/* binding */ St)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/match.js
var match = __webpack_require__(8118);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/render.js
var render = __webpack_require__(1147);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var use_sync_refs = __webpack_require__(1464);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-id.js
var use_id = __webpack_require__(6304);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/keyboard.js
var keyboard = __webpack_require__(1550);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/bugs.js
var bugs = __webpack_require__(5410);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/owner.js
var owner = __webpack_require__(1506);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/focus-management.js
let f=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var focus_management_L=(n=>(n[n.First=1]="First",n[n.Previous=2]="Previous",n[n.Next=4]="Next",n[n.Last=8]="Last",n[n.WrapAround=16]="WrapAround",n[n.NoScroll=32]="NoScroll",n))(focus_management_L||{}),N=(o=>(o[o.Error=0]="Error",o[o.Overflow=1]="Overflow",o[o.Success=2]="Success",o[o.Underflow=3]="Underflow",o))(N||{}),T=(r=>(r[r.Previous=-1]="Previous",r[r.Next=1]="Next",r))(T||{});function focus_management_E(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(f)).sort((t,r)=>Math.sign((t.tabIndex||Number.MAX_SAFE_INTEGER)-(r.tabIndex||Number.MAX_SAFE_INTEGER)))}var focus_management_F=(r=>(r[r.Strict=0]="Strict",r[r.Loose=1]="Loose",r))(focus_management_F||{});function h(e,t=0){var r;return e===((r=(0,owner/* getOwnerDocument */.r)(e))==null?void 0:r.body)?!1:(0,match/* match */.E)(t,{[0](){return e.matches(f)},[1](){let l=e;for(;l!==null;){if(l.matches(f))return!0;l=l.parentElement}return!1}})}function v(e){let t=m(e);b().nextFrame(()=>{t&&!h(t.activeElement,0)&&S(e)})}function S(e){e==null||e.focus({preventScroll:!0})}let H=["textarea","input"].join(",");function w(e){var t,r;return(r=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,H))!=null?r:!1}function A(e,t=r=>r){return e.slice().sort((r,l)=>{let o=t(r),i=t(l);if(o===null||i===null)return 0;let n=o.compareDocumentPosition(i);return n&Node.DOCUMENT_POSITION_FOLLOWING?-1:n&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function g(e,t){return focus_management_I(focus_management_E(),t,{relativeTo:e})}function focus_management_I(e,t,{sorted:r=!0,relativeTo:l=null,skipElements:o=[]}={}){let i=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,n=Array.isArray(e)?r?A(e):e:focus_management_E(e);o.length>0&&(n=n.filter(s=>!o.includes(s))),l=l!=null?l:i.activeElement;let d=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),x=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,n.indexOf(l))-1;if(t&4)return Math.max(0,n.indexOf(l))+1;if(t&8)return n.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),p=t&32?{preventScroll:!0}:{},c=0,a=n.length,u;do{if(c>=a||c+a<=0)return 0;let s=x+c;if(t&16)s=(s+a)%a;else{if(s<0)return 3;if(s>=a)return 1}u=n[s],u==null||u.focus(p),c+=d}while(u!==i.activeElement);return t&6&&w(u)&&u.select(),u.hasAttribute("tabindex")||u.setAttribute("tabindex","0"),2}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/internal/open-closed.js
var open_closed = __webpack_require__(7844);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-resolve-button-type.js
var use_resolve_button_type = __webpack_require__(986);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var use_latest_value = __webpack_require__(4612);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-document-event.js
function d(e,r,n){let o=(0,use_latest_value/* useLatestValue */.E)(r);(0,react_.useEffect)(()=>{function t(u){o.current(u)}return document.addEventListener(e,t,n),()=>document.removeEventListener(e,t,n)},[e,n])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-outside-click.js
function use_outside_click_L(m,E,c=!0){let i=(0,react_.useRef)(!1);(0,react_.useEffect)(()=>{requestAnimationFrame(()=>{i.current=c})},[c]);function f(e,o){if(!i.current||e.defaultPrevented)return;let l=function r(t){return typeof t=="function"?r(t()):Array.isArray(t)||t instanceof Set?t:[t]}(m),n=o(e);if(n!==null&&!!n.getRootNode().contains(n)){for(let r of l){if(r===null)continue;let t=r instanceof HTMLElement?r:r.current;if(t!=null&&t.contains(n)||e.composed&&e.composedPath().includes(t))return}return!h(n,focus_management_F.Loose)&&n.tabIndex!==-1&&e.preventDefault(),E(e,n)}}let u=(0,react_.useRef)(null);d("mousedown",e=>{var o,l;i.current&&(u.current=((l=(o=e.composedPath)==null?void 0:o.call(e))==null?void 0:l[0])||e.target)},!0),d("click",e=>{!u.current||(f(e,()=>u.current),u.current=null)},!0),d("blur",e=>f(e,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-owner.js
function use_owner_n(...e){return (0,react_.useMemo)(()=>(0,owner/* getOwnerDocument */.r)(...e),[...e])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-event-listener.js
function E(n,e,a,t){let i=(0,use_latest_value/* useLatestValue */.E)(a);(0,react_.useEffect)(()=>{n=n!=null?n:window;function r(o){i.current(o)}return n.addEventListener(e,r,t),()=>n.removeEventListener(e,r,t)},[n,e,t])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/internal/hidden.js
let a="div";var hidden_s=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(hidden_s||{});let hidden_h=(0,render/* forwardRefWithAs */.yV)(function(t,o){let{features:e=1,...r}=t,d={ref:o,"aria-hidden":(e&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(e&4)===4&&(e&2)!==2&&{display:"none"}}};return (0,render/* render */.sY)({ourProps:d,theirProps:r,slot:{},defaultTag:a,name:"Hidden"})});

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-event.js
var use_event = __webpack_require__(2264);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-window-event.js
function s(e,r,n){let o=(0,use_latest_value/* useLatestValue */.E)(r);(0,react_.useEffect)(()=>{function t(i){o.current(i)}return window.addEventListener(e,t,n),()=>window.removeEventListener(e,t,n)},[e,n])}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-tab-direction.js
var use_tab_direction_s=(r=>(r[r.Forwards=0]="Forwards",r[r.Backwards=1]="Backwards",r))(use_tab_direction_s||{});function use_tab_direction_n(){let e=(0,react_.useRef)(0);return s("keydown",o=>{o.key==="Tab"&&(e.current=o.shiftKey?1:0)},!0),e}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/popover/popover.js
var Ce=(f=>(f[f.Open=0]="Open",f[f.Closed=1]="Closed",f))(Ce||{}),Oe=(o=>(o[o.TogglePopover=0]="TogglePopover",o[o.ClosePopover=1]="ClosePopover",o[o.SetButton=2]="SetButton",o[o.SetButtonId=3]="SetButtonId",o[o.SetPanel=4]="SetPanel",o[o.SetPanelId=5]="SetPanelId",o))(Oe||{});let Me={[0]:r=>({...r,popoverState:(0,match/* match */.E)(r.popoverState,{[0]:1,[1]:0})}),[1](r){return r.popoverState===1?r:{...r,popoverState:1}},[2](r,n){return r.button===n.button?r:{...r,button:n.button}},[3](r,n){return r.buttonId===n.buttonId?r:{...r,buttonId:n.buttonId}},[4](r,n){return r.panel===n.panel?r:{...r,panel:n.panel}},[5](r,n){return r.panelId===n.panelId?r:{...r,panelId:n.panelId}}},ne=(0,react_.createContext)(null);ne.displayName="PopoverContext";function Z(r){let n=(0,react_.useContext)(ne);if(n===null){let f=new Error(`<${r} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(f,Z),f}return n}let re=(0,react_.createContext)(null);re.displayName="PopoverAPIContext";function le(r){let n=(0,react_.useContext)(re);if(n===null){let f=new Error(`<${r} /> is missing a parent <Popover /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(f,le),f}return n}let ae=(0,react_.createContext)(null);ae.displayName="PopoverGroupContext";function ve(){return (0,react_.useContext)(ae)}let ue=(0,react_.createContext)(null);ue.displayName="PopoverPanelContext";function Le(){return (0,react_.useContext)(ue)}function Fe(r,n){return (0,match/* match */.E)(n.type,Me,r,n)}let Be="div",he=(0,render/* forwardRefWithAs */.yV)(function(n,f){var O;let I=(0,react_.useRef)(null),b=(0,use_sync_refs/* useSyncRefs */.T)(f,(0,use_sync_refs/* optionalRef */.h)(e=>{I.current=e})),S=(0,react_.useReducer)(Fe,{popoverState:1,buttons:[],button:null,buttonId:null,panel:null,panelId:null,beforePanelSentinel:(0,react_.createRef)(),afterPanelSentinel:(0,react_.createRef)()}),[{popoverState:o,button:t,buttonId:P,panel:a,panelId:L,beforePanelSentinel:F,afterPanelSentinel:v},u]=S,s=use_owner_n((O=I.current)!=null?O:t),p=(0,react_.useMemo)(()=>{if(!t||!a)return!1;for(let M of document.querySelectorAll("body > *"))if(Number(M==null?void 0:M.contains(t))^Number(M==null?void 0:M.contains(a)))return!0;let e=focus_management_E(),l=e.indexOf(t),d=(l+e.length-1)%e.length,E=(l+1)%e.length,D=e[d],Y=e[E];return!a.contains(D)&&!a.contains(Y)},[t,a]),c=(0,use_latest_value/* useLatestValue */.E)(P),T=(0,use_latest_value/* useLatestValue */.E)(L),g=(0,react_.useMemo)(()=>({buttonId:c,panelId:T,close:()=>u({type:1})}),[c,T,u]),A=ve(),C=A==null?void 0:A.registerPopover,k=(0,use_event/* useEvent */.z)(()=>{var e;return(e=A==null?void 0:A.isFocusWithinPopoverGroup())!=null?e:(s==null?void 0:s.activeElement)&&((t==null?void 0:t.contains(s.activeElement))||(a==null?void 0:a.contains(s.activeElement)))});(0,react_.useEffect)(()=>C==null?void 0:C(g),[C,g]),E(s==null?void 0:s.defaultView,"focus",e=>{var l,d,E,D;o===0&&(k()||!t||!a||e.target!==window&&((d=(l=F.current)==null?void 0:l.contains)!=null&&d.call(l,e.target)||(D=(E=v.current)==null?void 0:E.contains)!=null&&D.call(E,e.target)||u({type:1})))},!0),use_outside_click_L([t,a],(e,l)=>{u({type:1}),h(l,focus_management_F.Loose)||(e.preventDefault(),t==null||t.focus())},o===0);let B=(0,use_event/* useEvent */.z)(e=>{u({type:1});let l=(()=>e?e instanceof HTMLElement?e:"current"in e&&e.current instanceof HTMLElement?e.current:t:t)();l==null||l.focus()}),W=(0,react_.useMemo)(()=>({close:B,isPortalled:p}),[B,p]),i=(0,react_.useMemo)(()=>({open:o===0,close:B}),[o,B]),m=n,R={ref:b};return react_.createElement(ne.Provider,{value:S},react_.createElement(re.Provider,{value:W},react_.createElement(open_closed/* OpenClosedProvider */.up,{value:(0,match/* match */.E)(o,{[0]:open_closed/* State.Open */.ZM.Open,[1]:open_closed/* State.Closed */.ZM.Closed})},(0,render/* render */.sY)({ourProps:R,theirProps:m,slot:i,defaultTag:Be,name:"Popover"}))))}),xe="button",De=(0,render/* forwardRefWithAs */.yV)(function(n,f){let I=(0,use_id/* useId */.M)(),{id:b=`headlessui-popover-button-${I}`,...S}=n,[o,t]=Z("Popover.Button"),{isPortalled:P}=le("Popover.Button"),a=(0,react_.useRef)(null),L=`headlessui-focus-sentinel-${(0,use_id/* useId */.M)()}`,F=ve(),v=F==null?void 0:F.closeOthers,u=Le(),s=u===null?!1:u===o.panelId;(0,react_.useEffect)(()=>{if(!s)return t({type:3,buttonId:b}),()=>{t({type:3,buttonId:null})}},[b,t]);let p=(0,use_sync_refs/* useSyncRefs */.T)(a,f,s?null:e=>{if(e)o.buttons.push(b);else{let l=o.buttons.indexOf(b);l!==-1&&o.buttons.splice(l,1)}o.buttons.length>1&&console.warn("You are already using a <Popover.Button /> but only 1 <Popover.Button /> is supported."),e&&t({type:2,button:e})}),c=(0,use_sync_refs/* useSyncRefs */.T)(a,f),T=use_owner_n(a),g=(0,use_event/* useEvent */.z)(e=>{var l,d,E;if(s){if(o.popoverState===1)return;switch(e.key){case keyboard/* Keys.Space */.R.Space:case keyboard/* Keys.Enter */.R.Enter:e.preventDefault(),(d=(l=e.target).click)==null||d.call(l),t({type:1}),(E=o.button)==null||E.focus();break}}else switch(e.key){case keyboard/* Keys.Space */.R.Space:case keyboard/* Keys.Enter */.R.Enter:e.preventDefault(),e.stopPropagation(),o.popoverState===1&&(v==null||v(o.buttonId)),t({type:0});break;case keyboard/* Keys.Escape */.R.Escape:if(o.popoverState!==0)return v==null?void 0:v(o.buttonId);if(!a.current||(T==null?void 0:T.activeElement)&&!a.current.contains(T.activeElement))return;e.preventDefault(),e.stopPropagation(),t({type:1});break}}),A=(0,use_event/* useEvent */.z)(e=>{s||e.key===keyboard/* Keys.Space */.R.Space&&e.preventDefault()}),C=(0,use_event/* useEvent */.z)(e=>{var l,d;(0,bugs/* isDisabledReactIssue7711 */.P)(e.currentTarget)||n.disabled||(s?(t({type:1}),(l=o.button)==null||l.focus()):(e.preventDefault(),e.stopPropagation(),o.popoverState===1&&(v==null||v(o.buttonId)),t({type:0}),(d=o.button)==null||d.focus()))}),k=(0,use_event/* useEvent */.z)(e=>{e.preventDefault(),e.stopPropagation()}),B=o.popoverState===0,W=(0,react_.useMemo)(()=>({open:B}),[B]),i=(0,use_resolve_button_type/* useResolveButtonType */.f)(n,a),m=s?{ref:c,type:i,onKeyDown:g,onClick:C}:{ref:p,id:o.buttonId,type:i,"aria-expanded":n.disabled?void 0:o.popoverState===0,"aria-controls":o.panel?o.panelId:void 0,onKeyDown:g,onKeyUp:A,onClick:C,onMouseDown:k},R=use_tab_direction_n(),O=(0,use_event/* useEvent */.z)(()=>{let e=o.panel;if(!e)return;function l(){(0,match/* match */.E)(R.current,{[use_tab_direction_s.Forwards]:()=>focus_management_I(e,focus_management_L.First),[use_tab_direction_s.Backwards]:()=>focus_management_I(e,focus_management_L.Last)})}l()});return react_.createElement(react_.Fragment,null,(0,render/* render */.sY)({ourProps:m,theirProps:S,slot:W,defaultTag:xe,name:"Popover.Button"}),B&&!s&&P&&react_.createElement(hidden_h,{id:L,features:hidden_s.Focusable,as:"button",type:"button",onFocus:O}))}),He="div",ke=render/* Features.RenderStrategy */.AN.RenderStrategy|render/* Features.Static */.AN.Static,Ge=(0,render/* forwardRefWithAs */.yV)(function(n,f){let I=(0,use_id/* useId */.M)(),{id:b=`headlessui-popover-overlay-${I}`,...S}=n,[{popoverState:o},t]=Z("Popover.Overlay"),P=(0,use_sync_refs/* useSyncRefs */.T)(f),a=(0,open_closed/* useOpenClosed */.oJ)(),L=(()=>a!==null?a===open_closed/* State.Open */.ZM.Open:o===0)(),F=(0,use_event/* useEvent */.z)(s=>{if((0,bugs/* isDisabledReactIssue7711 */.P)(s.currentTarget))return s.preventDefault();t({type:1})}),v=(0,react_.useMemo)(()=>({open:o===0}),[o]);return (0,render/* render */.sY)({ourProps:{ref:P,id:b,"aria-hidden":!0,onClick:F},theirProps:S,slot:v,defaultTag:He,features:ke,visible:L,name:"Popover.Overlay"})}),we="div",_e=render/* Features.RenderStrategy */.AN.RenderStrategy|render/* Features.Static */.AN.Static,Ne=(0,render/* forwardRefWithAs */.yV)(function(n,f){let I=(0,use_id/* useId */.M)(),{id:b=`headlessui-popover-panel-${I}`,focus:S=!1,...o}=n,[t,P]=Z("Popover.Panel"),{close:a,isPortalled:L}=le("Popover.Panel"),F=`headlessui-focus-sentinel-before-${(0,use_id/* useId */.M)()}`,v=`headlessui-focus-sentinel-after-${(0,use_id/* useId */.M)()}`,u=(0,react_.useRef)(null),s=(0,use_sync_refs/* useSyncRefs */.T)(u,f,i=>{P({type:4,panel:i})}),p=use_owner_n(u);(0,react_.useEffect)(()=>(P({type:5,panelId:b}),()=>{P({type:5,panelId:null})}),[b,P]);let c=(0,open_closed/* useOpenClosed */.oJ)(),T=(()=>c!==null?c===open_closed/* State.Open */.ZM.Open:t.popoverState===0)(),g=(0,use_event/* useEvent */.z)(i=>{var m;switch(i.key){case keyboard/* Keys.Escape */.R.Escape:if(t.popoverState!==0||!u.current||(p==null?void 0:p.activeElement)&&!u.current.contains(p.activeElement))return;i.preventDefault(),i.stopPropagation(),P({type:1}),(m=t.button)==null||m.focus();break}});(0,react_.useEffect)(()=>{var i;n.static||t.popoverState===1&&((i=n.unmount)!=null?i:!0)&&P({type:4,panel:null})},[t.popoverState,n.unmount,n.static,P]),(0,react_.useEffect)(()=>{if(!S||t.popoverState!==0||!u.current)return;let i=p==null?void 0:p.activeElement;u.current.contains(i)||focus_management_I(u.current,focus_management_L.First)},[S,u,t.popoverState]);let A=(0,react_.useMemo)(()=>({open:t.popoverState===0,close:a}),[t,a]),C={ref:s,id:t.panelId,onKeyDown:g,onBlur:S&&t.popoverState===0?i=>{var R,O,e,l,d;let m=i.relatedTarget;!m||!u.current||(R=u.current)!=null&&R.contains(m)||(P({type:1}),(((e=(O=t.beforePanelSentinel.current)==null?void 0:O.contains)==null?void 0:e.call(O,m))||((d=(l=t.afterPanelSentinel.current)==null?void 0:l.contains)==null?void 0:d.call(l,m)))&&m.focus({preventScroll:!0}))}:void 0,tabIndex:-1},k=use_tab_direction_n(),B=(0,use_event/* useEvent */.z)(()=>{let i=u.current;if(!i)return;function m(){(0,match/* match */.E)(k.current,{[use_tab_direction_s.Forwards]:()=>{focus_management_I(i,focus_management_L.First)},[use_tab_direction_s.Backwards]:()=>{var R;(R=t.button)==null||R.focus({preventScroll:!0})}})}m()}),W=(0,use_event/* useEvent */.z)(()=>{let i=u.current;if(!i)return;function m(){(0,match/* match */.E)(k.current,{[use_tab_direction_s.Forwards]:()=>{var E,D,Y;if(!t.button)return;let R=focus_management_E(),O=R.indexOf(t.button),e=R.slice(0,O+1),d=[...R.slice(O+1),...e];for(let M of d.slice())if(((D=(E=M==null?void 0:M.id)==null?void 0:E.startsWith)==null?void 0:D.call(E,"headlessui-focus-sentinel-"))||((Y=t.panel)==null?void 0:Y.contains(M))){let pe=d.indexOf(M);pe!==-1&&d.splice(pe,1)}focus_management_I(d,focus_management_L.First,{sorted:!1})},[use_tab_direction_s.Backwards]:()=>focus_management_I(i,focus_management_L.Last)})}m()});return react_.createElement(ue.Provider,{value:t.panelId},T&&L&&react_.createElement(hidden_h,{id:F,ref:t.beforePanelSentinel,features:hidden_s.Focusable,as:"button",type:"button",onFocus:B}),(0,render/* render */.sY)({ourProps:C,theirProps:o,slot:A,defaultTag:we,features:_e,visible:T,name:"Popover.Panel"}),T&&L&&react_.createElement(hidden_h,{id:v,ref:t.afterPanelSentinel,features:hidden_s.Focusable,as:"button",type:"button",onFocus:W}))}),Ke="div",Ue=(0,render/* forwardRefWithAs */.yV)(function(n,f){let I=(0,react_.useRef)(null),b=(0,use_sync_refs/* useSyncRefs */.T)(I,f),[S,o]=(0,react_.useState)([]),t=(0,use_event/* useEvent */.z)(p=>{o(c=>{let T=c.indexOf(p);if(T!==-1){let g=c.slice();return g.splice(T,1),g}return c})}),P=(0,use_event/* useEvent */.z)(p=>(o(c=>[...c,p]),()=>t(p))),a=(0,use_event/* useEvent */.z)(()=>{var T;let p=(0,owner/* getOwnerDocument */.r)(I);if(!p)return!1;let c=p.activeElement;return(T=I.current)!=null&&T.contains(c)?!0:S.some(g=>{var A,C;return((A=p.getElementById(g.buttonId.current))==null?void 0:A.contains(c))||((C=p.getElementById(g.panelId.current))==null?void 0:C.contains(c))})}),L=(0,use_event/* useEvent */.z)(p=>{for(let c of S)c.buttonId.current!==p&&c.close()}),F=(0,react_.useMemo)(()=>({registerPopover:P,unregisterPopover:t,isFocusWithinPopoverGroup:a,closeOthers:L}),[P,t,a,L]),v=(0,react_.useMemo)(()=>({}),[]),u=n,s={ref:b};return react_.createElement(ae.Provider,{value:F},(0,render/* render */.sY)({ourProps:s,theirProps:u,slot:v,defaultTag:Ke,name:"Popover.Group"}))}),St=Object.assign(he,{Button:De,Overlay:Ge,Panel:Ne,Group:Ue});


/***/ }),

/***/ 3753:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u": () => (/* binding */ Je)
});

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/render.js
var render = __webpack_require__(1147);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/internal/open-closed.js
var open_closed = __webpack_require__(7844);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/utils/match.js
var match = __webpack_require__(8118);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-iso-morphic-effect.js
var use_iso_morphic_effect = __webpack_require__(3652);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-is-mounted.js
function f(){let e=(0,react_.useRef)(!1);return (0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>(e.current=!0,()=>{e.current=!1}),[]),e}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-latest-value.js
var use_latest_value = __webpack_require__(4612);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-server-handoff-complete.js
var use_server_handoff_complete = __webpack_require__(5650);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-sync-refs.js
var use_sync_refs = __webpack_require__(1464);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/once.js
function l(r){let e={called:!1};return(...t)=>{if(!e.called)return e.called=!0,r(...t)}}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/micro-task.js
function micro_task_t(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(o=>setTimeout(()=>{throw o}))}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/disposables.js
function disposables_m(){let n=[],i=[],r={enqueue(e){i.push(e)},addEventListener(e,t,a,o){return e.addEventListener(t,a,o),r.add(()=>e.removeEventListener(t,a,o))},requestAnimationFrame(...e){let t=requestAnimationFrame(...e);return r.add(()=>cancelAnimationFrame(t))},nextFrame(...e){return r.requestAnimationFrame(()=>r.requestAnimationFrame(...e))},setTimeout(...e){let t=setTimeout(...e);return r.add(()=>clearTimeout(t))},microTask(...e){let t={current:!0};return micro_task_t(()=>{t.current&&e[0]()}),r.add(()=>{t.current=!1})},add(e){return n.push(e),()=>{let t=n.indexOf(e);if(t>=0){let[a]=n.splice(t,1);a()}}},dispose(){for(let e of n.splice(0))e()},async workQueue(){for(let e of i.splice(0))await e()}};return r}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/transitions/utils/transition.js
function v(t,...e){t&&e.length>0&&t.classList.add(...e)}function transition_f(t,...e){t&&e.length>0&&t.classList.remove(...e)}function F(t,e){let n=disposables_m();if(!t)return n.dispose;let{transitionDuration:a,transitionDelay:i}=getComputedStyle(t),[m,d]=[a,i].map(o=>{let[r=0]=o.split(",").filter(Boolean).map(l=>l.includes("ms")?parseFloat(l):parseFloat(l)*1e3).sort((l,g)=>g-l);return r});if(m+d!==0){let o=n.addEventListener(t,"transitionend",r=>{r.target===r.currentTarget&&(e(),o())})}else e();return n.add(()=>e()),n.dispose}function M(t,e,n,a){let i=n?"enter":"leave",m=disposables_m(),d=a!==void 0?l(a):()=>{};i==="enter"&&(t.removeAttribute("hidden"),t.style.display="");let u=(0,match/* match */.E)(i,{enter:()=>e.enter,leave:()=>e.leave}),o=(0,match/* match */.E)(i,{enter:()=>e.enterTo,leave:()=>e.leaveTo}),r=(0,match/* match */.E)(i,{enter:()=>e.enterFrom,leave:()=>e.leaveFrom});return transition_f(t,...e.enter,...e.enterTo,...e.enterFrom,...e.leave,...e.leaveFrom,...e.leaveTo,...e.entered),v(t,...u,...r),m.nextFrame(()=>{transition_f(t,...r),v(t,...o),F(t,()=>(transition_f(t,...u),v(t,...e.entered),d()))}),m.dispose}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-disposables.js
function use_disposables_p(){let[e]=(0,react_.useState)(disposables_m);return (0,react_.useEffect)(()=>()=>e.dispose(),[e]),e}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/hooks/use-transition.js
function use_transition_D({container:i,direction:t,classes:o,onStart:s,onStop:u}){let a=f(),c=use_disposables_p(),r=(0,use_latest_value/* useLatestValue */.E)(t);(0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>{let e=disposables_m();c.add(e.dispose);let n=i.current;if(!!n&&r.current!=="idle"&&!!a.current)return e.dispose(),s.current(r.current),e.add(M(n,o.current,r.current==="enter",()=>{e.dispose(),u.current(r.current)})),e.dispose},[t])}

// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/hooks/use-event.js
var use_event = __webpack_require__(2264);
;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/utils/class-names.js
function class_names_e(...n){return n.filter(Boolean).join(" ")}

;// CONCATENATED MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js
function P(i=""){return i.split(" ").filter(e=>e.trim().length>1)}let A=(0,react_.createContext)(null);A.displayName="TransitionContext";var Ce=(s=>(s.Visible="visible",s.Hidden="hidden",s))(Ce||{});function ge(){let i=(0,react_.useContext)(A);if(i===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return i}function be(){let i=(0,react_.useContext)(transition_M);if(i===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return i}let transition_M=(0,react_.createContext)(null);transition_M.displayName="NestingContext";function I(i){return"children"in i?I(i.children):i.current.filter(({el:e})=>e.current!==null).filter(({state:e})=>e==="visible").length>0}function ne(i,e){let s=(0,use_latest_value/* useLatestValue */.E)(i),n=(0,react_.useRef)([]),m=f(),R=use_disposables_p(),b=(0,use_event/* useEvent */.z)((l,r=render/* RenderStrategy.Hidden */.l4.Hidden)=>{let t=n.current.findIndex(({el:o})=>o===l);t!==-1&&((0,match/* match */.E)(r,{[render/* RenderStrategy.Unmount */.l4.Unmount](){n.current.splice(t,1)},[render/* RenderStrategy.Hidden */.l4.Hidden](){n.current[t].state="hidden"}}),R.microTask(()=>{var o;!I(n)&&m.current&&((o=s.current)==null||o.call(s))}))}),E=(0,use_event/* useEvent */.z)(l=>{let r=n.current.find(({el:t})=>t===l);return r?r.state!=="visible"&&(r.state="visible"):n.current.push({el:l,state:"visible"}),()=>b(l,render/* RenderStrategy.Unmount */.l4.Unmount)}),S=(0,react_.useRef)([]),u=(0,react_.useRef)(Promise.resolve()),p=(0,react_.useRef)({enter:[],leave:[],idle:[]}),d=(0,use_event/* useEvent */.z)((l,r,t)=>{S.current.splice(0),e&&(e.chains.current[r]=e.chains.current[r].filter(([o])=>o!==l)),e==null||e.chains.current[r].push([l,new Promise(o=>{S.current.push(o)})]),e==null||e.chains.current[r].push([l,new Promise(o=>{Promise.all(p.current[r].map(([f,a])=>a)).then(()=>o())})]),r==="enter"?u.current=u.current.then(()=>e==null?void 0:e.wait.current).then(()=>t(r)):t(r)}),v=(0,use_event/* useEvent */.z)((l,r,t)=>{Promise.all(p.current[r].splice(0).map(([o,f])=>f)).then(()=>{var o;(o=S.current.shift())==null||o()}).then(()=>t(r))});return (0,react_.useMemo)(()=>({children:n,register:E,unregister:b,onStart:d,onStop:v,wait:u,chains:p}),[E,b,n,d,v,p,u])}function Ee(){}let Se=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function re(i){var s;let e={};for(let n of Se)e[n]=(s=i[n])!=null?s:Ee;return e}function xe(i){let e=(0,react_.useRef)(re(i));return (0,react_.useEffect)(()=>{e.current=re(i)},[i]),e}let Pe="div",ie=render/* Features.RenderStrategy */.AN.RenderStrategy,oe=(0,render/* forwardRefWithAs */.yV)(function(e,s){let{beforeEnter:n,afterEnter:m,beforeLeave:R,afterLeave:b,enter:E,enterFrom:S,enterTo:u,entered:p,leave:d,leaveFrom:v,leaveTo:l,...r}=e,t=(0,react_.useRef)(null),o=(0,use_sync_refs/* useSyncRefs */.T)(t,s),f=r.unmount?render/* RenderStrategy.Unmount */.l4.Unmount:render/* RenderStrategy.Hidden */.l4.Hidden,{show:a,appear:x,initial:se}=ge(),[h,_]=(0,react_.useState)(a?"visible":"hidden"),K=be(),{register:D,unregister:V}=K,j=(0,react_.useRef)(null);(0,react_.useEffect)(()=>D(t),[D,t]),(0,react_.useEffect)(()=>{if(f===render/* RenderStrategy.Hidden */.l4.Hidden&&!!t.current){if(a&&h!=="visible"){_("visible");return}return (0,match/* match */.E)(h,{["hidden"]:()=>V(t),["visible"]:()=>D(t)})}},[h,t,D,V,a,f]);let U=(0,use_latest_value/* useLatestValue */.E)({enter:P(E),enterFrom:P(S),enterTo:P(u),entered:P(p),leave:P(d),leaveFrom:P(v),leaveTo:P(l)}),w=xe({beforeEnter:n,afterEnter:m,beforeLeave:R,afterLeave:b}),k=(0,use_server_handoff_complete/* useServerHandoffComplete */.H)();(0,react_.useEffect)(()=>{if(k&&h==="visible"&&t.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[t,h,k]);let G=se&&!x,le=(()=>!k||G||j.current===a?"idle":a?"enter":"leave")(),ae=(0,use_event/* useEvent */.z)(C=>(0,match/* match */.E)(C,{enter:()=>w.current.beforeEnter(),leave:()=>w.current.beforeLeave(),idle:()=>{}})),ue=(0,use_event/* useEvent */.z)(C=>(0,match/* match */.E)(C,{enter:()=>w.current.afterEnter(),leave:()=>w.current.afterLeave(),idle:()=>{}})),L=ne(()=>{_("hidden"),V(t)},K);use_transition_D({container:t,classes:U,direction:le,onStart:(0,use_latest_value/* useLatestValue */.E)(C=>{L.onStart(t,C,ae)}),onStop:(0,use_latest_value/* useLatestValue */.E)(C=>{L.onStop(t,C,ue),C==="leave"&&!I(L)&&(_("hidden"),V(t))})}),(0,react_.useEffect)(()=>{!G||(f===render/* RenderStrategy.Hidden */.l4.Hidden?j.current=null:j.current=a)},[a,G,h]);let B=r,de={ref:o};return x&&a&&(typeof window=="undefined"||typeof document=="undefined")&&(B={...B,className:class_names_e(r.className,...U.current.enter,...U.current.enterFrom)}),react_.createElement(transition_M.Provider,{value:L},react_.createElement(open_closed/* OpenClosedProvider */.up,{value:(0,match/* match */.E)(h,{["visible"]:open_closed/* State.Open */.ZM.Open,["hidden"]:open_closed/* State.Closed */.ZM.Closed})},(0,render/* render */.sY)({ourProps:de,theirProps:B,defaultTag:Pe,features:ie,visible:h==="visible",name:"Transition.Child"})))}),J=(0,render/* forwardRefWithAs */.yV)(function(e,s){let{show:n,appear:m=!1,unmount:R,...b}=e,E=(0,react_.useRef)(null),S=(0,use_sync_refs/* useSyncRefs */.T)(E,s);(0,use_server_handoff_complete/* useServerHandoffComplete */.H)();let u=(0,open_closed/* useOpenClosed */.oJ)();if(n===void 0&&u!==null&&(n=(0,match/* match */.E)(u,{[open_closed/* State.Open */.ZM.Open]:!0,[open_closed/* State.Closed */.ZM.Closed]:!1})),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[p,d]=(0,react_.useState)(n?"visible":"hidden"),v=ne(()=>{d("hidden")}),[l,r]=(0,react_.useState)(!0),t=(0,react_.useRef)([n]);(0,use_iso_morphic_effect/* useIsoMorphicEffect */.e)(()=>{l!==!1&&t.current[t.current.length-1]!==n&&(t.current.push(n),r(!1))},[t,n]);let o=(0,react_.useMemo)(()=>({show:n,appear:m,initial:l}),[n,m,l]);(0,react_.useEffect)(()=>{if(n)d("visible");else if(!I(v))d("hidden");else{let a=E.current;if(!a)return;let x=a.getBoundingClientRect();x.x===0&&x.y===0&&x.width===0&&x.height===0&&d("hidden")}},[n,v]);let f={unmount:R};return react_.createElement(transition_M.Provider,{value:v},react_.createElement(A.Provider,{value:o},(0,render/* render */.sY)({ourProps:{...f,as:react_.Fragment,children:react_.createElement(oe,{ref:S,...f,...b})},theirProps:{},defaultTag:react_.Fragment,features:ie,visible:p==="visible",name:"Transition"})))}),ye=(0,render/* forwardRefWithAs */.yV)(function(e,s){let n=(0,react_.useContext)(A)!==null,m=(0,open_closed/* useOpenClosed */.oJ)()!==null;return react_.createElement(react_.Fragment,null,!n&&m?react_.createElement(J,{ref:s,...e}):react_.createElement(oe,{ref:s,...e}))}),Je=Object.assign(J,{Child:ye,Root:J});


/***/ }),

/***/ 2264:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ o)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4612);
let o=function(t){let e=(0,_use_latest_value_js__WEBPACK_IMPORTED_MODULE_1__/* .useLatestValue */ .E)(t);return react__WEBPACK_IMPORTED_MODULE_0__.useCallback((...r)=>e.current(...r),[e])};


/***/ }),

/***/ 6304:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3652);
/* harmony import */ var _use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5650);
var u;let l=0;function r(){return++l}let I=(u=react__WEBPACK_IMPORTED_MODULE_0__.useId)!=null?u:function(){let n=(0,_use_server_handoff_complete_js__WEBPACK_IMPORTED_MODULE_1__/* .useServerHandoffComplete */ .H)(),[e,o]=react__WEBPACK_IMPORTED_MODULE_0__.useState(n?r:null);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_2__/* .useIsoMorphicEffect */ .e)(()=>{e===null&&o(r())},[e]),e!=null?""+e:void 0};


/***/ }),

/***/ 3652:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _utils_ssr_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4109);
let s=_utils_ssr_js__WEBPACK_IMPORTED_MODULE_1__/* .isServer */ .s?react__WEBPACK_IMPORTED_MODULE_0__.useEffect:react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect;


/***/ }),

/***/ 4612:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3652);
function s(e){let r=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(e);return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__/* .useIsoMorphicEffect */ .e)(()=>{r.current=e},[e]),r}


/***/ }),

/***/ 986:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "f": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3652);
function i(t){var n;if(t.type)return t.type;let e=(n=t.as)!=null?n:"button";if(typeof e=="string"&&e.toLowerCase()==="button")return"button"}function s(t,e){let[n,u]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>i(t));return (0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__/* .useIsoMorphicEffect */ .e)(()=>{u(i(t))},[t.type,t.as]),(0,_use_iso_morphic_effect_js__WEBPACK_IMPORTED_MODULE_1__/* .useIsoMorphicEffect */ .e)(()=>{n||!e.current||e.current instanceof HTMLButtonElement&&!e.current.hasAttribute("type")&&u("button")},[n,e]),n}


/***/ }),

/***/ 5650:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
let r={serverHandoffComplete:!1};function a(){let[e,f]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(r.serverHandoffComplete);return (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{e!==!0&&f(!0)},[e]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{r.serverHandoffComplete===!1&&(r.serverHandoffComplete=!0)},[]),e}


/***/ }),

/***/ 1464:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ y),
/* harmony export */   "h": () => (/* binding */ T)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _use_event_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2264);
let u=Symbol();function T(t,n=!0){return Object.assign(t,{[u]:n})}function y(...t){let n=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(t);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{n.current=t},[t]);let c=(0,_use_event_js__WEBPACK_IMPORTED_MODULE_1__/* .useEvent */ .z)(e=>{for(let o of n.current)o!=null&&(typeof o=="function"?o(e):o.current=e)});return t.every(e=>e==null||(e==null?void 0:e[u]))?void 0:c}


/***/ }),

/***/ 7844:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ZM": () => (/* binding */ p),
/* harmony export */   "oJ": () => (/* binding */ s),
/* harmony export */   "up": () => (/* binding */ C)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
let o=(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);o.displayName="OpenClosedContext";var p=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(p||{});function s(){return (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(o)}function C({value:t,children:n}){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(o.Provider,{value:t},n)}


/***/ }),

/***/ 5410:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ r)
/* harmony export */ });
function r(n){let e=n.parentElement,l=null;for(;e&&!(e instanceof HTMLFieldSetElement);)e instanceof HTMLLegendElement&&(l=e),e=e.parentElement;let t=(e==null?void 0:e.getAttribute("disabled"))==="";return t&&i(l)?!1:t}function i(n){if(!n)return!1;let e=n.previousElementSibling;for(;e!==null;){if(e instanceof HTMLLegendElement)return!1;e=e.previousElementSibling}return!0}


/***/ }),

/***/ 8118:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ u)
/* harmony export */ });
function u(r,n,...a){if(r in n){let e=n[r];return typeof e=="function"?e(...a):e}let t=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(e=>`"${e}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,u),t}


/***/ }),

/***/ 1506:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ e)
/* harmony export */ });
/* harmony import */ var _ssr_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4109);
function e(r){return _ssr_js__WEBPACK_IMPORTED_MODULE_0__/* .isServer */ .s?null:r instanceof Node?r.ownerDocument:r!=null&&r.hasOwnProperty("current")&&r.current instanceof Node?r.current.ownerDocument:document}


/***/ }),

/***/ 1147:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AN": () => (/* binding */ S),
/* harmony export */   "l4": () => (/* binding */ j),
/* harmony export */   "sY": () => (/* binding */ $),
/* harmony export */   "yV": () => (/* binding */ C)
/* harmony export */ });
/* unused harmony export compact */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);
/* harmony import */ var _match_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8118);
var S=(a=>(a[a.None=0]="None",a[a.RenderStrategy=1]="RenderStrategy",a[a.Static=2]="Static",a))(S||{}),j=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(j||{});function $({ourProps:r,theirProps:t,slot:e,defaultTag:a,features:o,visible:n=!0,name:l}){let s=T(t,r);if(n)return p(s,e,a,l);let u=o!=null?o:0;if(u&2){let{static:i=!1,...d}=s;if(i)return p(d,e,a,l)}if(u&1){let{unmount:i=!0,...d}=s;return (0,_match_js__WEBPACK_IMPORTED_MODULE_1__/* .match */ .E)(i?0:1,{[0](){return null},[1](){return p({...d,hidden:!0,style:{display:"none"}},e,a,l)}})}return p(s,e,a,l)}function p(r,t={},e,a){let{as:o=e,children:n,refName:l="ref",...s}=m(r,["unmount","static"]),u=r.ref!==void 0?{[l]:r.ref}:{},i=typeof n=="function"?n(t):n;s.className&&typeof s.className=="function"&&(s.className=s.className(t));let d={};if(t){let f=!1,y=[];for(let[h,g]of Object.entries(t))typeof g=="boolean"&&(f=!0),g===!0&&y.push(h);f&&(d["data-headlessui-state"]=y.join(" "))}if(o===react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&Object.keys(F(s)).length>0){if(!(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(i)||Array.isArray(i)&&i.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${a} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(s).map(f=>`  - ${f}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(f=>`  - ${f}`).join(`
`)].join(`
`));return (0,react__WEBPACK_IMPORTED_MODULE_0__.cloneElement)(i,Object.assign({},T(i.props,F(m(s,["ref"]))),d,u,w(i.ref,u.ref)))}return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(o,Object.assign({},m(s,["ref"]),o!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&u,o!==react__WEBPACK_IMPORTED_MODULE_0__.Fragment&&d),i)}function w(...r){return{ref:r.every(t=>t==null)?void 0:t=>{for(let e of r)e!=null&&(typeof e=="function"?e(t):e.current=t)}}}function T(...r){var a;if(r.length===0)return{};if(r.length===1)return r[0];let t={},e={};for(let o of r)for(let n in o)n.startsWith("on")&&typeof o[n]=="function"?((a=e[n])!=null||(e[n]=[]),e[n].push(o[n])):t[n]=o[n];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(e).map(o=>[o,void 0])));for(let o in e)Object.assign(t,{[o](n,...l){let s=e[o];for(let u of s){if((n instanceof Event||(n==null?void 0:n.nativeEvent)instanceof Event)&&n.defaultPrevented)return;u(n,...l)}}});return t}function C(r){var t;return Object.assign((0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(r),{displayName:(t=r.displayName)!=null?t:r.name})}function F(r){let t=Object.assign({},r);for(let e in t)t[e]===void 0&&delete t[e];return t}function m(r,t=[]){let e=Object.assign({},r);for(let a of t)a in e&&delete e[a];return e}


/***/ }),

/***/ 4109:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ e)
/* harmony export */ });
const e=typeof window=="undefined"||typeof document=="undefined";


/***/ }),

/***/ 802:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function ArrowDownIcon({
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
    d: "M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowDownIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 2937:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function ArrowLeftIcon({
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
    d: "M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowLeftIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 1494:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function ArrowRightIcon({
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
    d: "M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowRightIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 1284:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function ArrowUpIcon({
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
    d: "M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowUpIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 4832:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function Bars3Icon({
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
    d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(Bars3Icon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 6670:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function BuildingStorefrontIcon({
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
    d: "M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(BuildingStorefrontIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 9667:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function CalendarDaysIcon({
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
    d: "M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CalendarDaysIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 7773:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function ChatBubbleBottomCenterTextIcon({
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
    d: "M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChatBubbleBottomCenterTextIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 8611:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function ChevronDownIcon({
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
    d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronDownIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 4749:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function ChevronLeftIcon({
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
    d: "M15.75 19.5L8.25 12l7.5-7.5"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronLeftIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 9009:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function ChevronRightIcon({
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
    d: "M8.25 4.5l7.5 7.5-7.5 7.5"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronRightIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 7858:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function ChevronUpIcon({
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
    d: "M4.5 15.75l7.5-7.5 7.5 7.5"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ChevronUpIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 1382:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function CreditCardIcon({
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
    d: "M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(CreditCardIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 1852:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function DocumentTextIcon({
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
    d: "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(DocumentTextIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 5146:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function EnvelopeIcon({
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
    d: "M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(EnvelopeIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 1981:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function FaceFrownIcon({
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
    d: "M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(FaceFrownIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 929:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function FaceSmileIcon({
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
    d: "M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(FaceSmileIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 4043:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function FireIcon({
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
    d: "M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(FireIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 500:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function GlobeAltIcon({
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
    d: "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(GlobeAltIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 3608:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function HandThumbUpIcon({
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
    d: "M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(HandThumbUpIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 8056:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function HeartIcon({
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
    d: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(HeartIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 6313:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function LinkIcon({
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
    d: "M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(LinkIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 9302:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function MapPinIcon({
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
    d: "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    d: "M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(MapPinIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 1545:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function PhoneIcon({
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
    d: "M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PhoneIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 1640:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function PlusIcon({
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
    d: "M12 4.5v15m7.5-7.5h-15"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(PlusIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 7904:
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
    d: "M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(StarIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 1271:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function UserIcon({
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
    d: "M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(UserIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 1966:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8038);


function XMarkIcon({
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
    d: "M6 18L18 6M6 6l12 12"
  }));
}

const ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(XMarkIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);

/***/ }),

/***/ 688:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "pi": () => (/* binding */ react_lenis_modern_h)
});

// UNUSED EXPORTS: Lenis, useLenis

// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(8038);
;// CONCATENATED MODULE: ./node_modules/@studio-freight/tempus/dist/tempus.modern.mjs
const tempus_modern_t=new class{constructor(){this.raf=t=>{requestAnimationFrame(this.raf);const a=t-this.now;this.now=t;for(let s=0;s<this.callbacks.length;s++)this.callbacks[s].callback(t,a)},"undefined"!=typeof window&&(this.callbacks=[],this.now=performance.now(),requestAnimationFrame(this.raf))}add(t,a=0){return this.callbacks.push({callback:t,priority:a}),this.callbacks.sort((t,a)=>t.priority-a.priority),()=>this.remove(t)}remove(t){this.callbacks=this.callbacks.filter(({callback:a})=>t!==a)}};
//# sourceMappingURL=tempus.modern.mjs.map

;// CONCATENATED MODULE: ./node_modules/@studio-freight/hamo/dist/hamo.modern.mjs
function i(t,r){const o=e(e=>{t.current&&!t.current.contains(e.target)&&r()},[t,r]);n(()=>{if(t.current)return document.addEventListener("mousedown",o),()=>{document.removeEventListener("mousedown",o)}},[o,t])}function s(){const[e,r]=t(!1);return n(()=>{r(!0)},[]),e}function a(){const e=s();return r(()=>e&&(window.location.href.includes("#debug")||"development"==="production")&&!window.location.href.includes("#production"),[e])}function d(){const[e,r]=t(()=>"undefined"!=typeof document?document.readyState:"loading");return n(()=>{if("undefined"!=typeof document)return r(document.readyState),document.addEventListener("readystatechange",e,!1),()=>document.removeEventListener("readystatechange",e,!1);function e(){r(document.readyState)}},[]),e}function hamo_modern_f(e,t=0){(0,react_.useEffect)(()=>{if(e)return tempus_modern_t.add(e,t),()=>tempus_modern_t.remove(e)},[e,t])}function v(e,t){const r=o(),c=o();return n(()=>{r.current=e}),n(()=>{if(null!==t)return c.current=setInterval(function(){r.current()},t),()=>clearInterval(c.current)},[t]),()=>clearInterval(c.current)}function l(){const r=e(()=>"ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,[]),[o,c]=t(void 0),u=e(()=>{c(r())},[r]);return n(()=>(u(),window.addEventListener("resize",u,{passive:!0}),()=>{window.removeEventListener("resize",u,{passive:!0})}),[u]),o}function m({root:r=null,rootMargin:c="0px",threshold:u=1,once:i=!1}={}){const s=o(),a=o(),[d,f]=t(!1),v=e(e=>{a.current||(a.current=e)},[]),l=e(e=>{const[n]=e;f(n.isIntersecting)},[]);return n(()=>(a.current&&(s.current=new IntersectionObserver(l,{root:r,rootMargin:c,threshold:u}),s.current.observe(a.current)),()=>{s.current&&s.current.disconnect()}),[l]),n(()=>{i&&d&&s.current.disconnect()},[d]),{setRef:v,inView:d}}function hamo_modern_p(o){const c=s(),u=r(()=>{if(c)try{return window.matchMedia(o)}catch(e){ false&&0}return null},[o,c]),[i,a]=t(void 0),d=e(({matches:e})=>{a(e)},[]);return n(()=>{if(u)return d(u),u.addEventListener("change",d,{passive:!0}),()=>{u.removeEventListener("change",d,{passive:!0})}},[u,d,c]),i}function h(){return h=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},h.apply(this,arguments)}function w(e,n=0){const t=n+e.offsetTop;return e.offsetParent?w(e.offsetParent,t):t}function g(e,n=0){const t=n+e.offsetLeft;return e.offsetParent?g(e.offsetParent,t):t}function y({lazy:r=!1,debounce:c=1e3}={}){const i=o(),s=o(),[a,d]=t({}),f=o(a),v=e(()=>{if(i.current){const e=w(i.current),n=g(i.current);f.current=h({},f.current,{top:e,left:n}),r||d(f.current)}},[r]);n(()=>{const e=u(c,v),n=new ResizeObserver(e);return n.observe(document.body),()=>{n.disconnect(),e.cancel({upcomingOnly:!0})}},[c,v]);const l=e(([e])=>{const{width:n,height:t}=e.contentRect;f.current=h({},f.current,{width:n,height:t}),r||d(f.current)},[r]),m=e(()=>f.current,[]);return n(()=>()=>{var e; true&&(null==(e=s.current)||e.disconnect())},[]),[e(e=>{var n;e&&e!==i.current&&(null==(n=s.current)||n.disconnect(),s.current=new ResizeObserver(l),s.current.observe(e),i.current=e)},[v]),r?m:a]}function b(e=[],n=[]){const t=r(()=>n&&[n].flat(),[n]),o=r(()=>e&&[e].flat(),[e]);return r(()=>{if(!t||!o)return;const n=o.map(e=>{var n;return null==(n=t.find(n=>n.type===e))?void 0:n.props.children});return e[0]?n:n[0]},[t,o])}
//# sourceMappingURL=hamo.modern.mjs.map

;// CONCATENATED MODULE: ./node_modules/nanoevents/index.js
let createNanoEvents = () => ({
  events: {},
  emit(event, ...args) {
    let callbacks = this.events[event] || []
    for (let i = 0, length = callbacks.length; i < length; i++) {
      callbacks[i](...args)
    }
  },
  on(event, cb) {
    this.events[event]?.push(cb) || (this.events[event] = [cb])
    return () => {
      this.events[event] = this.events[event]?.filter(i => cb !== i)
    }
  }
})

;// CONCATENATED MODULE: ./node_modules/@studio-freight/lenis/dist/lenis.modern.mjs
function lenis_modern_e(t,e,i){return Math.max(t,Math.min(e,i))}class lenis_modern_i{advance(t){var i;if(!this.isRunning)return;let s=!1;if(this.lerp)this.value=(1-(o=this.lerp))*this.value+o*this.to,Math.round(this.value)===this.to&&(this.value=this.to,s=!0);else{this.currentTime+=t;const i=lenis_modern_e(0,this.currentTime/this.duration,1);s=i>=1;const o=s?1:this.easing(i);this.value=this.from+(this.to-this.from)*o}var o;null==(i=this.onUpdate)||i.call(this,this.value,{completed:s}),s&&this.stop()}stop(){this.isRunning=!1}fromTo(t,e,{lerp:i=.1,duration:s=1,easing:o=(t=>t),onUpdate:r}){this.from=this.value=t,this.to=e,this.lerp=i,this.duration=s,this.easing=o,this.currentTime=0,this.isRunning=!0,this.onUpdate=r}}var lenis_modern_s=0;function lenis_modern_o(t){return"__private_"+lenis_modern_s+++"_"+t}function lenis_modern_r(t,e){if(!Object.prototype.hasOwnProperty.call(t,e))throw new TypeError("attempted to use private field on non-instance");return t}var lenis_modern_n=/*#__PURE__*/lenis_modern_o("resizeObserver"),lenis_modern_l=/*#__PURE__*/lenis_modern_o("onResize"),lenis_modern_h=/*#__PURE__*/lenis_modern_o("onWindowResize");class lenis_modern_a{constructor(t){Object.defineProperty(this,lenis_modern_n,{writable:!0,value:void 0}),Object.defineProperty(this,lenis_modern_l,{writable:!0,value:([t])=>{if(t){const{width:e,height:i}=t.contentRect;this.width=e,this.height=i}}}),Object.defineProperty(this,lenis_modern_h,{writable:!0,value:()=>{this.width=window.innerWidth,this.height=window.innerHeight}}),this.element=t,t===window?(window.addEventListener("resize",lenis_modern_r(this,lenis_modern_h)[lenis_modern_h]),lenis_modern_r(this,lenis_modern_h)[lenis_modern_h]()):(this.width=this.element.offsetWidth,this.height=this.element.offsetHeight,lenis_modern_r(this,lenis_modern_n)[lenis_modern_n]=new ResizeObserver(lenis_modern_r(this,lenis_modern_l)[lenis_modern_l]),lenis_modern_r(this,lenis_modern_n)[lenis_modern_n].observe(this.element))}destroy(){window.removeEventListener("resize",this.onWindowResize),lenis_modern_r(this,lenis_modern_n)[lenis_modern_n].disconnect()}}var c=/*#__PURE__*/lenis_modern_o("wheelMultiplier"),lenis_modern_u=/*#__PURE__*/lenis_modern_o("touchMultiplier"),lenis_modern_p=/*#__PURE__*/lenis_modern_o("normalizeWheel"),lenis_modern_d=/*#__PURE__*/lenis_modern_o("touchStart"),lenis_modern_m=/*#__PURE__*/lenis_modern_o("emitter"),lenis_modern_v=/*#__PURE__*/lenis_modern_o("onTouchStart"),lenis_modern_g=/*#__PURE__*/lenis_modern_o("onTouchMove"),lenis_modern_w=/*#__PURE__*/lenis_modern_o("onWheel");class f{constructor(i,{wheelMultiplier:s=1,touchMultiplier:o=2,normalizeWheel:n=!1}){Object.defineProperty(this,c,{writable:!0,value:void 0}),Object.defineProperty(this,lenis_modern_u,{writable:!0,value:void 0}),Object.defineProperty(this,lenis_modern_p,{writable:!0,value:void 0}),Object.defineProperty(this,lenis_modern_d,{writable:!0,value:void 0}),Object.defineProperty(this,lenis_modern_m,{writable:!0,value:void 0}),Object.defineProperty(this,lenis_modern_v,{writable:!0,value:t=>{const{pageX:e,pageY:i}=t.targetTouches?t.targetTouches[0]:t;lenis_modern_r(this,lenis_modern_d)[lenis_modern_d].x=e,lenis_modern_r(this,lenis_modern_d)[lenis_modern_d].y=i}}),Object.defineProperty(this,lenis_modern_g,{writable:!0,value:t=>{const{pageX:e,pageY:i}=t.targetTouches?t.targetTouches[0]:t,s=-(e-lenis_modern_r(this,lenis_modern_d)[lenis_modern_d].x)*lenis_modern_r(this,lenis_modern_u)[lenis_modern_u],o=-(i-lenis_modern_r(this,lenis_modern_d)[lenis_modern_d].y)*lenis_modern_r(this,lenis_modern_u)[lenis_modern_u];lenis_modern_r(this,lenis_modern_d)[lenis_modern_d].x=e,lenis_modern_r(this,lenis_modern_d)[lenis_modern_d].y=i,lenis_modern_r(this,lenis_modern_m)[lenis_modern_m].emit("scroll",{type:"touch",deltaX:s,deltaY:o,event:t})}}),Object.defineProperty(this,lenis_modern_w,{writable:!0,value:t=>{let{deltaX:i,deltaY:s}=t;lenis_modern_r(this,lenis_modern_p)[lenis_modern_p]&&(i=lenis_modern_e(-100,i,100),s=lenis_modern_e(-100,s,100)),i*=lenis_modern_r(this,c)[c],s*=lenis_modern_r(this,c)[c],lenis_modern_r(this,lenis_modern_m)[lenis_modern_m].emit("scroll",{type:"wheel",deltaX:i,deltaY:s,event:t})}}),this.element=i,lenis_modern_r(this,c)[c]=s,lenis_modern_r(this,lenis_modern_u)[lenis_modern_u]=o,lenis_modern_r(this,lenis_modern_p)[lenis_modern_p]=n,lenis_modern_r(this,lenis_modern_d)[lenis_modern_d]={x:null,y:null},lenis_modern_r(this,lenis_modern_m)[lenis_modern_m]=createNanoEvents(),this.element.addEventListener("wheel",lenis_modern_r(this,lenis_modern_w)[lenis_modern_w],{passive:!1}),this.element.addEventListener("touchstart",lenis_modern_r(this,lenis_modern_v)[lenis_modern_v],{passive:!1}),this.element.addEventListener("touchmove",lenis_modern_r(this,lenis_modern_g)[lenis_modern_g],{passive:!1})}on(t,e){return lenis_modern_r(this,lenis_modern_m)[lenis_modern_m].on(t,e)}destroy(){lenis_modern_r(this,lenis_modern_m)[lenis_modern_m].events={},this.element.removeEventListener("wheel",lenis_modern_r(this,lenis_modern_w)[lenis_modern_w],{passive:!1}),this.element.removeEventListener("touchstart",lenis_modern_r(this,lenis_modern_v)[lenis_modern_v],{passive:!1}),this.element.removeEventListener("touchmove",lenis_modern_r(this,lenis_modern_g)[lenis_modern_g],{passive:!1})}}class S{constructor({direction:e,gestureDirection:s,mouseMultiplier:o,smooth:r,wrapper:n=window,content:l=document.documentElement,smoothWheel:h=null==r||r,smoothTouch:c=!1,duration:u,easing:p=(t=>Math.min(1,1.001-Math.pow(2,-10*t))),lerp:d=(u?null:.1),infinite:m=!1,orientation:v=(null!=e?e:"vertical"),gestureOrientation:g=(null!=s?s:"vertical"),touchMultiplier:w=2,wheelMultiplier:S=(null!=o?o:1),normalizeWheel:y=!0}={}){this.onVirtualScroll=({type:t,deltaX:e,deltaY:i,event:s})=>{if(s.ctrlKey)return;if("vertical"===this.options.gestureOrientation&&0===i||"horizontal"===this.options.gestureOrientation&&0===e)return;if(s.composedPath().find(t=>null==t||null==t.hasAttribute?void 0:t.hasAttribute("data-lenis-prevent")))return;if(this.isStopped||this.isLocked)return void s.preventDefault();if(this.isSmooth=this.options.smoothTouch&&"touch"===t||this.options.smoothWheel&&"wheel"===t,!this.isSmooth)return this.isScrolling=!1,void this.animate.stop();s.preventDefault();let o=i;"both"===this.options.gestureOrientation?o=e+i:"horizontal"===this.options.gestureOrientation&&(o=e),this.scrollTo(this.targetScroll+o,{programmatic:!1})},this.onScroll=()=>{if(!this.isScrolling){const t=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.velocity=0,this.direction=Math.sign(this.animatedScroll-t),this.emit()}},e&&console.warn("Lenis: `direction` option is deprecated, use `orientation` instead"),s&&console.warn("Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"),o&&console.warn("Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"),r&&console.warn("Lenis: `smooth` option is deprecated, use `smoothWheel` instead"),window.lenisVersion="1.0.0-dev.7",n!==document.documentElement&&n!==document.body||(n=window),this.options={wrapper:n,content:l,smoothWheel:h,smoothTouch:c,duration:u,easing:p,lerp:d,infinite:m,gestureOrientation:g,orientation:v,touchMultiplier:w,wheelMultiplier:S,normalizeWheel:y},this.wrapper=new lenis_modern_a(n),this.content=new lenis_modern_a(l),this.rootElement.classList.add("lenis"),this.velocity=0,this.isStopped=!1,this.isSmooth=h||c,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.animate=new lenis_modern_i,this.emitter=createNanoEvents(),this.wrapper.element.addEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll=new f(n,{touchMultiplier:w,wheelMultiplier:S,normalizeWheel:y}),this.virtualScroll.on("scroll",this.onVirtualScroll)}destroy(){this.emitter.events={},this.wrapper.element.removeEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll.destroy()}on(t,e){return this.emitter.on(t,e)}off(t,e){var i;this.emitter.events[t]=null==(i=this.emitter.events[t])?void 0:i.filter(t=>e!==t)}setScroll(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.velocity=0}start(){this.isStopped=!1,this.reset()}stop(){this.isStopped=!0,this.animate.stop(),this.reset()}raf(t){const e=t-(this.time||t);this.time=t,this.animate.advance(.001*e)}scrollTo(t,{offset:i=0,immediate:s=!1,lock:o=!1,duration:r=this.options.duration,easing:n=this.options.easing,lerp:l=!r&&this.options.lerp,onComplete:h,force:a=!1,programmatic:c=!0}={}){if(!this.isStopped||a){if(["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{var u;let e;if("string"==typeof t?e=document.querySelector(t):null!=(u=t)&&u.nodeType&&(e=t),e){if(this.wrapper.element!==window){const t=this.wrapper.element.getBoundingClientRect();i-=this.isHorizontal?t.left:t.top}const s=e.getBoundingClientRect();t=(this.isHorizontal?s.left:s.top)+this.animatedScroll}}if("number"==typeof t){if(t+=i,t=Math.round(t),this.options.infinite?c&&(this.targetScroll=this.animatedScroll=this.scroll):t=lenis_modern_e(0,t,this.limit),s)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.animate.stop(),this.reset(),this.emit(),void(null==h||h());c||(this.targetScroll=t),this.animate.fromTo(this.animatedScroll,t,{duration:r,easing:n,lerp:l,onUpdate:(t,{completed:e})=>{o&&(this.isLocked=!0),this.isScrolling=!0,this.velocity=t-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=t,this.setScroll(this.scroll),c&&(this.targetScroll=t),e&&(o&&(this.isLocked=!1),requestAnimationFrame(()=>{this.isScrolling=!1}),this.velocity=0,null==h||h()),this.emit()}})}}}get rootElement(){return this.wrapper.element===window?this.content.element:this.wrapper.element}get limit(){return Math.round(this.isHorizontal?this.content.width-this.wrapper.width:this.content.height-this.wrapper.height)}get isHorizontal(){return"horizontal"===this.options.orientation}get actualScroll(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}get scroll(){return this.options.infinite?function(t,e){let i=t%e;return(e>0&&i<0||e<0&&i>0)&&(i+=e),i}(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.scroll/this.limit}get isSmooth(){return this.__isSmooth}set isSmooth(t){this.__isSmooth!==t&&(this.rootElement.classList.toggle("lenis-smooth",t),this.__isSmooth=t)}get isScrolling(){return this.__isScrolling}set isScrolling(t){this.__isScrolling!==t&&(this.rootElement.classList.toggle("lenis-scrolling",t),this.__isScrolling=t)}get isStopped(){return this.__isStopped}set isStopped(t){this.__isStopped!==t&&(this.rootElement.classList.toggle("lenis-stopped",t),this.__isStopped=t)}}
//# sourceMappingURL=lenis.modern.mjs.map

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(9232);
;// CONCATENATED MODULE: ./node_modules/zustand/esm/vanilla.mjs
const createStoreImpl = (createState) => {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partial, replace) => {
    const nextState = typeof partial === "function" ? partial(state) : partial;
    if (!Object.is(nextState, state)) {
      const previousState = state;
      state = (replace != null ? replace : typeof nextState !== "object") ? nextState : Object.assign({}, state, nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const subscribe = (listener) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };
  const destroy = () => {
    if (true) {
      console.warn(
        "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
      );
    }
    listeners.clear();
  };
  const api = { setState, getState, subscribe, destroy };
  state = createState(setState, getState, api);
  return api;
};
const createStore = (createState) => createState ? createStoreImpl(createState) : createStoreImpl;
var vanilla = (createState) => {
  if (true) {
    console.warn(
      "[DEPRECATED] Default export is deprecated. Instead use import { createStore } from 'zustand/vanilla'."
    );
  }
  return createStore(createState);
};



// EXTERNAL MODULE: ./node_modules/use-sync-external-store/shim/with-selector.js
var with_selector = __webpack_require__(5020);
;// CONCATENATED MODULE: ./node_modules/zustand/esm/index.mjs





const { useSyncExternalStoreWithSelector } = with_selector;
function useStore(api, selector = api.getState, equalityFn) {
  const slice = useSyncExternalStoreWithSelector(
    api.subscribe,
    api.getState,
    api.getServerState || api.getState,
    selector,
    equalityFn
  );
  (0,react_.useDebugValue)(slice);
  return slice;
}
const createImpl = (createState) => {
  if ( true && typeof createState !== "function") {
    console.warn(
      "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
    );
  }
  const api = typeof createState === "function" ? createStore(createState) : createState;
  const useBoundStore = (selector, equalityFn) => useStore(api, selector, equalityFn);
  Object.assign(useBoundStore, api);
  return useBoundStore;
};
const create = (createState) => createState ? createImpl(createState) : createImpl;
var react = (createState) => {
  if (true) {
    console.warn(
      "[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."
    );
  }
  return create(createState);
};



;// CONCATENATED MODULE: ./node_modules/@studio-freight/react-lenis/dist/react-lenis.modern.mjs
function react_lenis_modern_d(){return react_lenis_modern_d=Object.assign?Object.assign.bind():function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o])}return r},react_lenis_modern_d.apply(this,arguments)}const react_lenis_modern_m=create(()=>({}));function react_lenis_modern_b(r,t=[],e=0){const{lenis:o,addCallback:n,removeCallback:a}=function(){const r=u(react_lenis_modern_v),t=react_lenis_modern_m();return null!=r?r:t}();return p(()=>{if(r&&n&&a&&o)return n(r,e),r(o),()=>{a(r)}},[o,r,n,a,e,t]),o}const react_lenis_modern_v=(0,react_.createContext)(),react_lenis_modern_h=(0,react_.forwardRef)(({children:e,root:n=!1,options:a={},isStopped:u=!1,className:f},b)=>{const h=(0,react_.useRef)(),y=(0,react_.useRef)(),[k,g]=(0,react_.useState)(),C=(0,react_.useRef)([]),j=(0,react_.useCallback)((r,t)=>{C.current.push({callback:r,priority:t}),C.current.sort((r,t)=>r.priority-t.priority)},[]),N=(0,react_.useCallback)(r=>{C.current=C.current.filter(t=>t.callback!==r)},[]);(0,react_.useImperativeHandle)(b,()=>k,[k]),(0,react_.useEffect)(()=>{n||(a.wrapper=h.current,a.content=y.current);const r=new S(react_lenis_modern_d({},a));return g(r),()=>{r.destroy(),g(void 0)}},[n]),hamo_modern_f(r=>{null==k||k.raf(r)}),(0,react_.useEffect)(()=>{k&&(u?k.stop():k.start())},[k,u]),(0,react_.useEffect)(()=>{n&&k&&react_lenis_modern_m.setState({lenis:k,addCallback:j,removeCallback:N})},[n,k,j,N]);const O=(0,react_.useCallback)(r=>{for(let t=0;t<C.current.length;t++)C.current[t].callback(r)},[]);return (0,react_.useEffect)(()=>{if(k)return k.on("scroll",O),()=>{k.off("scroll",O)}},[k,O]),/*#__PURE__*/react_.createElement(react_lenis_modern_v.Provider,{value:{lenis:k,addCallback:j,removeCallback:N}},n?e:/*#__PURE__*/react_.createElement("div",{ref:h,className:f},/*#__PURE__*/react_.createElement("div",{ref:y},e)))});react_lenis_modern_h.displayName="ReactLenis",react_lenis_modern_h.propTypes={children:prop_types.node,root:prop_types.bool,options:prop_types.object,isStopped:prop_types.bool,className:prop_types.string};
//# sourceMappingURL=react-lenis.modern.mjs.map


/***/ }),

/***/ 9721:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function ArrowTopRightOnSquareIcon({ title , titleId , ...props }, svgRef) {
    return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 20",
        fill: "currentColor",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("title", {
        id: titleId
    }, title) : null, /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        fillRule: "evenodd",
        d: "M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z",
        clipRule: "evenodd"
    }), /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
        fillRule: "evenodd",
        d: "M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z",
        clipRule: "evenodd"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(ArrowTopRightOnSquareIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 4687:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5468);

function SparklesIcon({ title , titleId , ...props }, svgRef) {
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
        d: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
    }));
}
const ForwardRef = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(SparklesIcon);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ForwardRef);


/***/ }),

/***/ 6779:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Immer": () => (/* binding */ un),
/* harmony export */   "applyPatches": () => (/* binding */ pn),
/* harmony export */   "castDraft": () => (/* binding */ K),
/* harmony export */   "castImmutable": () => (/* binding */ $),
/* harmony export */   "createDraft": () => (/* binding */ ln),
/* harmony export */   "current": () => (/* binding */ R),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "enableAllPlugins": () => (/* binding */ J),
/* harmony export */   "enableES5": () => (/* binding */ F),
/* harmony export */   "enableMapSet": () => (/* binding */ C),
/* harmony export */   "enablePatches": () => (/* binding */ T),
/* harmony export */   "finishDraft": () => (/* binding */ dn),
/* harmony export */   "freeze": () => (/* binding */ d),
/* harmony export */   "immerable": () => (/* binding */ L),
/* harmony export */   "isDraft": () => (/* binding */ r),
/* harmony export */   "isDraftable": () => (/* binding */ t),
/* harmony export */   "nothing": () => (/* binding */ H),
/* harmony export */   "original": () => (/* binding */ e),
/* harmony export */   "produce": () => (/* binding */ fn),
/* harmony export */   "produceWithPatches": () => (/* binding */ cn),
/* harmony export */   "setAutoFreeze": () => (/* binding */ sn),
/* harmony export */   "setUseProxies": () => (/* binding */ vn)
/* harmony export */ });
function n(n) {
    for(var r = arguments.length, t = Array(r > 1 ? r - 1 : 0), e = 1; e < r; e++)t[e - 1] = arguments[e];
    if (false) { var i, o; }
    throw Error("[Immer] minified error nr: " + n + (t.length ? " " + t.map(function(n) {
        return "'" + n + "'";
    }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r(n) {
    return !!n && !!n[Q];
}
function t(n) {
    var r;
    return !!n && (function(n) {
        if (!n || "object" != typeof n) return !1;
        var r = Object.getPrototypeOf(n);
        if (null === r) return !0;
        var t = Object.hasOwnProperty.call(r, "constructor") && r.constructor;
        return t === Object || "function" == typeof t && Function.toString.call(t) === Z;
    }(n) || Array.isArray(n) || !!n[L] || !!(null === (r = n.constructor) || void 0 === r ? void 0 : r[L]) || s(n) || v(n));
}
function e(t) {
    return r(t) || n(23, t), t[Q].t;
}
function i(n, r, t) {
    void 0 === t && (t = !1), 0 === o(n) ? (t ? Object.keys : nn)(n).forEach(function(e) {
        t && "symbol" == typeof e || r(e, n[e], n);
    }) : n.forEach(function(t, e) {
        return r(e, t, n);
    });
}
function o(n) {
    var r = n[Q];
    return r ? r.i > 3 ? r.i - 4 : r.i : Array.isArray(n) ? 1 : s(n) ? 2 : v(n) ? 3 : 0;
}
function u(n, r) {
    return 2 === o(n) ? n.has(r) : Object.prototype.hasOwnProperty.call(n, r);
}
function a(n, r) {
    return 2 === o(n) ? n.get(r) : n[r];
}
function f(n, r, t) {
    var e = o(n);
    2 === e ? n.set(r, t) : 3 === e ? n.add(t) : n[r] = t;
}
function c(n, r) {
    return n === r ? 0 !== n || 1 / n == 1 / r : n != n && r != r;
}
function s(n) {
    return X && n instanceof Map;
}
function v(n) {
    return q && n instanceof Set;
}
function p(n) {
    return n.o || n.t;
}
function l(n) {
    if (Array.isArray(n)) return Array.prototype.slice.call(n);
    var r = rn(n);
    delete r[Q];
    for(var t = nn(r), e = 0; e < t.length; e++){
        var i = t[e], o = r[i];
        !1 === o.writable && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (r[i] = {
            configurable: !0,
            writable: !0,
            enumerable: o.enumerable,
            value: n[i]
        });
    }
    return Object.create(Object.getPrototypeOf(n), r);
}
function d(n, e) {
    return void 0 === e && (e = !1), y(n) || r(n) || !t(n) || (o(n) > 1 && (n.set = n.add = n.clear = n.delete = h), Object.freeze(n), e && i(n, function(n, r) {
        return d(r, !0);
    }, !0)), n;
}
function h() {
    n(2);
}
function y(n) {
    return null == n || "object" != typeof n || Object.isFrozen(n);
}
function b(r) {
    var t = tn[r];
    return t || n(18, r), t;
}
function m(n, r) {
    tn[n] || (tn[n] = r);
}
function _() {
    return  true || 0, U;
}
function j(n, r) {
    r && (b("Patches"), n.u = [], n.s = [], n.v = r);
}
function O(n) {
    g(n), n.p.forEach(S), n.p = null;
}
function g(n) {
    n === U && (U = n.l);
}
function w(n) {
    return U = {
        p: [],
        l: U,
        h: n,
        m: !0,
        _: 0
    };
}
function S(n) {
    var r = n[Q];
    0 === r.i || 1 === r.i ? r.j() : r.O = !0;
}
function P(r, e) {
    e._ = e.p.length;
    var i = e.p[0], o = void 0 !== r && r !== i;
    return e.h.g || b("ES5").S(e, r, o), o ? (i[Q].P && (O(e), n(4)), t(r) && (r = M(e, r), e.l || x(e, r)), e.u && b("Patches").M(i[Q].t, r, e.u, e.s)) : r = M(e, i, []), O(e), e.u && e.v(e.u, e.s), r !== H ? r : void 0;
}
function M(n, r, t) {
    if (y(r)) return r;
    var e = r[Q];
    if (!e) return i(r, function(i, o) {
        return A(n, e, r, i, o, t);
    }, !0), r;
    if (e.A !== n) return r;
    if (!e.P) return x(n, e.t, !0), e.t;
    if (!e.I) {
        e.I = !0, e.A._--;
        var o = 4 === e.i || 5 === e.i ? e.o = l(e.k) : e.o, u = o, a = !1;
        3 === e.i && (u = new Set(o), o.clear(), a = !0), i(u, function(r, i) {
            return A(n, e, o, r, i, t, a);
        }), x(n, o, !1), t && n.u && b("Patches").N(e, t, n.u, n.s);
    }
    return e.o;
}
function A(e, i, o, a, c, s, v) {
    if ( false && 0, r(c)) {
        var p = M(e, c, s && i && 3 !== i.i && !u(i.R, a) ? s.concat(a) : void 0);
        if (f(o, a, p), !r(p)) return;
        e.m = !1;
    } else v && o.add(c);
    if (t(c) && !y(c)) {
        if (!e.h.D && e._ < 1) return;
        M(e, c), i && i.A.l || x(e, c);
    }
}
function x(n, r, t) {
    void 0 === t && (t = !1), n.h.D && n.m && d(r, t);
}
function z(n, r) {
    var t = n[Q];
    return (t ? p(t) : n)[r];
}
function I(n, r) {
    if (r in n) for(var t = Object.getPrototypeOf(n); t;){
        var e = Object.getOwnPropertyDescriptor(t, r);
        if (e) return e;
        t = Object.getPrototypeOf(t);
    }
}
function k(n) {
    n.P || (n.P = !0, n.l && k(n.l));
}
function E(n) {
    n.o || (n.o = l(n.t));
}
function N(n, r, t) {
    var e = s(r) ? b("MapSet").F(r, t) : v(r) ? b("MapSet").T(r, t) : n.g ? function(n, r) {
        var t = Array.isArray(n), e = {
            i: t ? 1 : 0,
            A: r ? r.A : _(),
            P: !1,
            I: !1,
            R: {},
            l: r,
            t: n,
            k: null,
            o: null,
            j: null,
            C: !1
        }, i = e, o = en;
        t && (i = [
            e
        ], o = on);
        var u = Proxy.revocable(i, o), a = u.revoke, f = u.proxy;
        return e.k = f, e.j = a, f;
    }(r, t) : b("ES5").J(r, t);
    return (t ? t.A : _()).p.push(e), e;
}
function R(e) {
    return r(e) || n(22, e), function n(r) {
        if (!t(r)) return r;
        var e, u = r[Q], c = o(r);
        if (u) {
            if (!u.P && (u.i < 4 || !b("ES5").K(u))) return u.t;
            u.I = !0, e = D(r, c), u.I = !1;
        } else e = D(r, c);
        return i(e, function(r, t) {
            u && a(u.t, r) === t || f(e, r, n(t));
        }), 3 === c ? new Set(e) : e;
    }(e);
}
function D(n, r) {
    switch(r){
        case 2:
            return new Map(n);
        case 3:
            return Array.from(n);
    }
    return l(n);
}
function F() {
    function t(n, r) {
        var t = s[n];
        return t ? t.enumerable = r : s[n] = t = {
            configurable: !0,
            enumerable: r,
            get: function() {
                var r = this[Q];
                return  false && 0, en.get(r, n);
            },
            set: function(r) {
                var t = this[Q];
                 false && 0, en.set(t, n, r);
            }
        }, t;
    }
    function e(n) {
        for(var r = n.length - 1; r >= 0; r--){
            var t = n[r][Q];
            if (!t.P) switch(t.i){
                case 5:
                    a(t) && k(t);
                    break;
                case 4:
                    o(t) && k(t);
            }
        }
    }
    function o(n) {
        for(var r = n.t, t = n.k, e = nn(t), i = e.length - 1; i >= 0; i--){
            var o = e[i];
            if (o !== Q) {
                var a = r[o];
                if (void 0 === a && !u(r, o)) return !0;
                var f = t[o], s = f && f[Q];
                if (s ? s.t !== a : !c(f, a)) return !0;
            }
        }
        var v = !!r[Q];
        return e.length !== nn(r).length + (v ? 0 : 1);
    }
    function a(n) {
        var r = n.k;
        if (r.length !== n.t.length) return !0;
        var t = Object.getOwnPropertyDescriptor(r, r.length - 1);
        if (t && !t.get) return !0;
        for(var e = 0; e < r.length; e++)if (!r.hasOwnProperty(e)) return !0;
        return !1;
    }
    function f(r) {
        r.O && n(3, JSON.stringify(p(r)));
    }
    var s = {};
    m("ES5", {
        J: function(n, r) {
            var e = Array.isArray(n), i = function(n, r) {
                if (n) {
                    for(var e = Array(r.length), i = 0; i < r.length; i++)Object.defineProperty(e, "" + i, t(i, !0));
                    return e;
                }
                var o = rn(r);
                delete o[Q];
                for(var u = nn(o), a = 0; a < u.length; a++){
                    var f = u[a];
                    o[f] = t(f, n || !!o[f].enumerable);
                }
                return Object.create(Object.getPrototypeOf(r), o);
            }(e, n), o = {
                i: e ? 5 : 4,
                A: r ? r.A : _(),
                P: !1,
                I: !1,
                R: {},
                l: r,
                t: n,
                k: i,
                o: null,
                O: !1,
                C: !1
            };
            return Object.defineProperty(i, Q, {
                value: o,
                writable: !0
            }), i;
        },
        S: function(n, t, o) {
            o ? r(t) && t[Q].A === n && e(n.p) : (n.u && function n(r) {
                if (r && "object" == typeof r) {
                    var t = r[Q];
                    if (t) {
                        var e = t.t, o = t.k, f = t.R, c = t.i;
                        if (4 === c) i(o, function(r) {
                            r !== Q && (void 0 !== e[r] || u(e, r) ? f[r] || n(o[r]) : (f[r] = !0, k(t)));
                        }), i(e, function(n) {
                            void 0 !== o[n] || u(o, n) || (f[n] = !1, k(t));
                        });
                        else if (5 === c) {
                            if (a(t) && (k(t), f.length = !0), o.length < e.length) for(var s = o.length; s < e.length; s++)f[s] = !1;
                            else for(var v = e.length; v < o.length; v++)f[v] = !0;
                            for(var p = Math.min(o.length, e.length), l = 0; l < p; l++)o.hasOwnProperty(l) || (f[l] = !0), void 0 === f[l] && n(o[l]);
                        }
                    }
                }
            }(n.p[0]), e(n.p));
        },
        K: function(n) {
            return 4 === n.i ? o(n) : a(n);
        }
    });
}
function T() {
    function e(n) {
        if (!t(n)) return n;
        if (Array.isArray(n)) return n.map(e);
        if (s(n)) return new Map(Array.from(n.entries()).map(function(n) {
            return [
                n[0],
                e(n[1])
            ];
        }));
        if (v(n)) return new Set(Array.from(n).map(e));
        var r = Object.create(Object.getPrototypeOf(n));
        for(var i in n)r[i] = e(n[i]);
        return u(n, L) && (r[L] = n[L]), r;
    }
    function f(n) {
        return r(n) ? e(n) : n;
    }
    var c = "add";
    m("Patches", {
        $: function(r, t) {
            return t.forEach(function(t) {
                for(var i = t.path, u = t.op, f = r, s = 0; s < i.length - 1; s++){
                    var v = o(f), p = "" + i[s];
                    0 !== v && 1 !== v || "__proto__" !== p && "constructor" !== p || n(24), "function" == typeof f && "prototype" === p && n(24), "object" != typeof (f = a(f, p)) && n(15, i.join("/"));
                }
                var l = o(f), d = e(t.value), h = i[i.length - 1];
                switch(u){
                    case "replace":
                        switch(l){
                            case 2:
                                return f.set(h, d);
                            case 3:
                                n(16);
                            default:
                                return f[h] = d;
                        }
                    case c:
                        switch(l){
                            case 1:
                                return "-" === h ? f.push(d) : f.splice(h, 0, d);
                            case 2:
                                return f.set(h, d);
                            case 3:
                                return f.add(d);
                            default:
                                return f[h] = d;
                        }
                    case "remove":
                        switch(l){
                            case 1:
                                return f.splice(h, 1);
                            case 2:
                                return f.delete(h);
                            case 3:
                                return f.delete(t.value);
                            default:
                                return delete f[h];
                        }
                    default:
                        n(17, u);
                }
            }), r;
        },
        N: function(n, r, t, e) {
            switch(n.i){
                case 0:
                case 4:
                case 2:
                    return function(n, r, t, e) {
                        var o = n.t, s = n.o;
                        i(n.R, function(n, i) {
                            var v = a(o, n), p = a(s, n), l = i ? u(o, n) ? "replace" : c : "remove";
                            if (v !== p || "replace" !== l) {
                                var d = r.concat(n);
                                t.push("remove" === l ? {
                                    op: l,
                                    path: d
                                } : {
                                    op: l,
                                    path: d,
                                    value: p
                                }), e.push(l === c ? {
                                    op: "remove",
                                    path: d
                                } : "remove" === l ? {
                                    op: c,
                                    path: d,
                                    value: f(v)
                                } : {
                                    op: "replace",
                                    path: d,
                                    value: f(v)
                                });
                            }
                        });
                    }(n, r, t, e);
                case 5:
                case 1:
                    return function(n, r, t, e) {
                        var i = n.t, o = n.R, u = n.o;
                        if (u.length < i.length) {
                            var a = [
                                u,
                                i
                            ];
                            i = a[0], u = a[1];
                            var s = [
                                e,
                                t
                            ];
                            t = s[0], e = s[1];
                        }
                        for(var v = 0; v < i.length; v++)if (o[v] && u[v] !== i[v]) {
                            var p = r.concat([
                                v
                            ]);
                            t.push({
                                op: "replace",
                                path: p,
                                value: f(u[v])
                            }), e.push({
                                op: "replace",
                                path: p,
                                value: f(i[v])
                            });
                        }
                        for(var l = i.length; l < u.length; l++){
                            var d = r.concat([
                                l
                            ]);
                            t.push({
                                op: c,
                                path: d,
                                value: f(u[l])
                            });
                        }
                        i.length < u.length && e.push({
                            op: "replace",
                            path: r.concat([
                                "length"
                            ]),
                            value: i.length
                        });
                    }(n, r, t, e);
                case 3:
                    return function(n, r, t, e) {
                        var i = n.t, o = n.o, u = 0;
                        i.forEach(function(n) {
                            if (!o.has(n)) {
                                var i = r.concat([
                                    u
                                ]);
                                t.push({
                                    op: "remove",
                                    path: i,
                                    value: n
                                }), e.unshift({
                                    op: c,
                                    path: i,
                                    value: n
                                });
                            }
                            u++;
                        }), u = 0, o.forEach(function(n) {
                            if (!i.has(n)) {
                                var o = r.concat([
                                    u
                                ]);
                                t.push({
                                    op: c,
                                    path: o,
                                    value: n
                                }), e.unshift({
                                    op: "remove",
                                    path: o,
                                    value: n
                                });
                            }
                            u++;
                        });
                    }(n, r, t, e);
            }
        },
        M: function(n, r, t, e) {
            t.push({
                op: "replace",
                path: [],
                value: r === H ? void 0 : r
            }), e.push({
                op: "replace",
                path: [],
                value: n
            });
        }
    });
}
function C() {
    function r(n, r) {
        function t() {
            this.constructor = n;
        }
        a(n, r), n.prototype = (t.prototype = r.prototype, new t);
    }
    function e(n) {
        n.o || (n.R = new Map, n.o = new Map(n.t));
    }
    function o(n) {
        n.o || (n.o = new Set, n.t.forEach(function(r) {
            if (t(r)) {
                var e = N(n.A.h, r, n);
                n.p.set(r, e), n.o.add(e);
            } else n.o.add(r);
        }));
    }
    function u(r) {
        r.O && n(3, JSON.stringify(p(r)));
    }
    var a = function(n, r) {
        return (a = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(n, r) {
            n.__proto__ = r;
        } || function(n, r) {
            for(var t in r)r.hasOwnProperty(t) && (n[t] = r[t]);
        })(n, r);
    }, f = function() {
        function n(n, r) {
            return this[Q] = {
                i: 2,
                l: r,
                A: r ? r.A : _(),
                P: !1,
                I: !1,
                o: void 0,
                R: void 0,
                t: n,
                k: this,
                C: !1,
                O: !1
            }, this;
        }
        r(n, Map);
        var o = n.prototype;
        return Object.defineProperty(o, "size", {
            get: function() {
                return p(this[Q]).size;
            }
        }), o.has = function(n) {
            return p(this[Q]).has(n);
        }, o.set = function(n, r) {
            var t = this[Q];
            return u(t), p(t).has(n) && p(t).get(n) === r || (e(t), k(t), t.R.set(n, !0), t.o.set(n, r), t.R.set(n, !0)), this;
        }, o.delete = function(n) {
            if (!this.has(n)) return !1;
            var r = this[Q];
            return u(r), e(r), k(r), r.t.has(n) ? r.R.set(n, !1) : r.R.delete(n), r.o.delete(n), !0;
        }, o.clear = function() {
            var n = this[Q];
            u(n), p(n).size && (e(n), k(n), n.R = new Map, i(n.t, function(r) {
                n.R.set(r, !1);
            }), n.o.clear());
        }, o.forEach = function(n, r) {
            var t = this;
            p(this[Q]).forEach(function(e, i) {
                n.call(r, t.get(i), i, t);
            });
        }, o.get = function(n) {
            var r = this[Q];
            u(r);
            var i = p(r).get(n);
            if (r.I || !t(i)) return i;
            if (i !== r.t.get(n)) return i;
            var o = N(r.A.h, i, r);
            return e(r), r.o.set(n, o), o;
        }, o.keys = function() {
            return p(this[Q]).keys();
        }, o.values = function() {
            var n, r = this, t = this.keys();
            return (n = {})[V] = function() {
                return r.values();
            }, n.next = function() {
                var n = t.next();
                return n.done ? n : {
                    done: !1,
                    value: r.get(n.value)
                };
            }, n;
        }, o.entries = function() {
            var n, r = this, t = this.keys();
            return (n = {})[V] = function() {
                return r.entries();
            }, n.next = function() {
                var n = t.next();
                if (n.done) return n;
                var e = r.get(n.value);
                return {
                    done: !1,
                    value: [
                        n.value,
                        e
                    ]
                };
            }, n;
        }, o[V] = function() {
            return this.entries();
        }, n;
    }(), c = function() {
        function n(n, r) {
            return this[Q] = {
                i: 3,
                l: r,
                A: r ? r.A : _(),
                P: !1,
                I: !1,
                o: void 0,
                t: n,
                k: this,
                p: new Map,
                O: !1,
                C: !1
            }, this;
        }
        r(n, Set);
        var t = n.prototype;
        return Object.defineProperty(t, "size", {
            get: function() {
                return p(this[Q]).size;
            }
        }), t.has = function(n) {
            var r = this[Q];
            return u(r), r.o ? !!r.o.has(n) || !(!r.p.has(n) || !r.o.has(r.p.get(n))) : r.t.has(n);
        }, t.add = function(n) {
            var r = this[Q];
            return u(r), this.has(n) || (o(r), k(r), r.o.add(n)), this;
        }, t.delete = function(n) {
            if (!this.has(n)) return !1;
            var r = this[Q];
            return u(r), o(r), k(r), r.o.delete(n) || !!r.p.has(n) && r.o.delete(r.p.get(n));
        }, t.clear = function() {
            var n = this[Q];
            u(n), p(n).size && (o(n), k(n), n.o.clear());
        }, t.values = function() {
            var n = this[Q];
            return u(n), o(n), n.o.values();
        }, t.entries = function() {
            var n = this[Q];
            return u(n), o(n), n.o.entries();
        }, t.keys = function() {
            return this.values();
        }, t[V] = function() {
            return this.values();
        }, t.forEach = function(n, r) {
            for(var t = this.values(), e = t.next(); !e.done;)n.call(r, e.value, e.value, this), e = t.next();
        }, n;
    }();
    m("MapSet", {
        F: function(n, r) {
            return new f(n, r);
        },
        T: function(n, r) {
            return new c(n, r);
        }
    });
}
function J() {
    F(), C(), T();
}
function K(n) {
    return n;
}
function $(n) {
    return n;
}
var G, U, W = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), X = "undefined" != typeof Map, q = "undefined" != typeof Set, B = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect, H = W ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = !0, G), L = W ? Symbol.for("immer-draftable") : "__$immer_draftable", Q = W ? Symbol.for("immer-state") : "__$immer_state", V = "undefined" != typeof Symbol && Symbol.iterator || "@@iterator", Y = {
    0: "Illegal state",
    1: "Immer drafts cannot have computed properties",
    2: "This object has been frozen and should not be mutated",
    3: function(n) {
        return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + n;
    },
    4: "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
    5: "Immer forbids circular references",
    6: "The first or second argument to `produce` must be a function",
    7: "The third argument to `produce` must be a function or undefined",
    8: "First argument to `createDraft` must be a plain object, an array, or an immerable object",
    9: "First argument to `finishDraft` must be a draft returned by `createDraft`",
    10: "The given draft is already finalized",
    11: "Object.defineProperty() cannot be used on an Immer draft",
    12: "Object.setPrototypeOf() cannot be used on an Immer draft",
    13: "Immer only supports deleting array indices",
    14: "Immer only supports setting array indices and the 'length' property",
    15: function(n) {
        return "Cannot apply patch, path doesn't resolve: " + n;
    },
    16: 'Sets cannot have "replace" patches.',
    17: function(n) {
        return "Unsupported patch operation: " + n;
    },
    18: function(n) {
        return "The plugin for '" + n + "' has not been loaded into Immer. To enable the plugin, import and call `enable" + n + "()` when initializing your application.";
    },
    20: "Cannot use proxies if Proxy, Proxy.revocable or Reflect are not available",
    21: function(n) {
        return "produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '" + n + "'";
    },
    22: function(n) {
        return "'current' expects a draft, got: " + n;
    },
    23: function(n) {
        return "'original' expects a draft, got: " + n;
    },
    24: "Patching reserved attributes like __proto__, prototype and constructor is not allowed"
}, Z = "" + Object.prototype.constructor, nn = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n) {
    return Object.getOwnPropertyNames(n).concat(Object.getOwnPropertySymbols(n));
} : Object.getOwnPropertyNames, rn = Object.getOwnPropertyDescriptors || function(n) {
    var r = {};
    return nn(n).forEach(function(t) {
        r[t] = Object.getOwnPropertyDescriptor(n, t);
    }), r;
}, tn = {}, en = {
    get: function(n, r) {
        if (r === Q) return n;
        var e = p(n);
        if (!u(e, r)) return function(n, r, t) {
            var e, i = I(r, t);
            return i ? "value" in i ? i.value : null === (e = i.get) || void 0 === e ? void 0 : e.call(n.k) : void 0;
        }(n, e, r);
        var i = e[r];
        return n.I || !t(i) ? i : i === z(n.t, r) ? (E(n), n.o[r] = N(n.A.h, i, n)) : i;
    },
    has: function(n, r) {
        return r in p(n);
    },
    ownKeys: function(n) {
        return Reflect.ownKeys(p(n));
    },
    set: function(n, r, t) {
        var e = I(p(n), r);
        if (null == e ? void 0 : e.set) return e.set.call(n.k, t), !0;
        if (!n.P) {
            var i = z(p(n), r), o = null == i ? void 0 : i[Q];
            if (o && o.t === t) return n.o[r] = t, n.R[r] = !1, !0;
            if (c(t, i) && (void 0 !== t || u(n.t, r))) return !0;
            E(n), k(n);
        }
        return n.o[r] === t && (void 0 !== t || r in n.o) || Number.isNaN(t) && Number.isNaN(n.o[r]) || (n.o[r] = t, n.R[r] = !0), !0;
    },
    deleteProperty: function(n, r) {
        return void 0 !== z(n.t, r) || r in n.t ? (n.R[r] = !1, E(n), k(n)) : delete n.R[r], n.o && delete n.o[r], !0;
    },
    getOwnPropertyDescriptor: function(n, r) {
        var t = p(n), e = Reflect.getOwnPropertyDescriptor(t, r);
        return e ? {
            writable: !0,
            configurable: 1 !== n.i || "length" !== r,
            enumerable: e.enumerable,
            value: t[r]
        } : e;
    },
    defineProperty: function() {
        n(11);
    },
    getPrototypeOf: function(n) {
        return Object.getPrototypeOf(n.t);
    },
    setPrototypeOf: function() {
        n(12);
    }
}, on = {};
i(en, function(n, r) {
    on[n] = function() {
        return arguments[0] = arguments[0][0], r.apply(this, arguments);
    };
}), on.deleteProperty = function(r, t) {
    return  false && 0, on.set.call(this, r, t, void 0);
}, on.set = function(r, t, e) {
    return  false && 0, en.set.call(this, r[0], t, e, r[0]);
};
var un = function() {
    function e(r) {
        var e = this;
        this.g = B, this.D = !0, this.produce = function(r, i, o) {
            if ("function" == typeof r && "function" != typeof i) {
                var u = i;
                i = r;
                var a = e;
                return function(n) {
                    var r = this;
                    void 0 === n && (n = u);
                    for(var t = arguments.length, e = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)e[o - 1] = arguments[o];
                    return a.produce(n, function(n) {
                        var t;
                        return (t = i).call.apply(t, [
                            r,
                            n
                        ].concat(e));
                    });
                };
            }
            var f;
            if ("function" != typeof i && n(6), void 0 !== o && "function" != typeof o && n(7), t(r)) {
                var c = w(e), s = N(e, r, void 0), v = !0;
                try {
                    f = i(s), v = !1;
                } finally{
                    v ? O(c) : g(c);
                }
                return "undefined" != typeof Promise && f instanceof Promise ? f.then(function(n) {
                    return j(c, o), P(n, c);
                }, function(n) {
                    throw O(c), n;
                }) : (j(c, o), P(f, c));
            }
            if (!r || "object" != typeof r) {
                if (void 0 === (f = i(r)) && (f = r), f === H && (f = void 0), e.D && d(f, !0), o) {
                    var p = [], l = [];
                    b("Patches").M(r, f, p, l), o(p, l);
                }
                return f;
            }
            n(21, r);
        }, this.produceWithPatches = function(n, r) {
            if ("function" == typeof n) return function(r) {
                for(var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)i[o - 1] = arguments[o];
                return e.produceWithPatches(r, function(r) {
                    return n.apply(void 0, [
                        r
                    ].concat(i));
                });
            };
            var t, i, o = e.produce(n, r, function(n, r) {
                t = n, i = r;
            });
            return "undefined" != typeof Promise && o instanceof Promise ? o.then(function(n) {
                return [
                    n,
                    t,
                    i
                ];
            }) : [
                o,
                t,
                i
            ];
        }, "boolean" == typeof (null == r ? void 0 : r.useProxies) && this.setUseProxies(r.useProxies), "boolean" == typeof (null == r ? void 0 : r.autoFreeze) && this.setAutoFreeze(r.autoFreeze);
    }
    var i = e.prototype;
    return i.createDraft = function(e) {
        t(e) || n(8), r(e) && (e = R(e));
        var i = w(this), o = N(this, e, void 0);
        return o[Q].C = !0, g(i), o;
    }, i.finishDraft = function(r, t) {
        var e = r && r[Q];
         false && (0);
        var i = e.A;
        return j(i, t), P(void 0, i);
    }, i.setAutoFreeze = function(n) {
        this.D = n;
    }, i.setUseProxies = function(r) {
        r && !B && n(20), this.g = r;
    }, i.applyPatches = function(n, t) {
        var e;
        for(e = t.length - 1; e >= 0; e--){
            var i = t[e];
            if (0 === i.path.length && "replace" === i.op) {
                n = i.value;
                break;
            }
        }
        e > -1 && (t = t.slice(e + 1));
        var o = b("Patches").$;
        return r(n) ? o(n, t) : this.produce(n, function(n) {
            return o(n, t);
        });
    }, e;
}(), an = new un, fn = an.produce, cn = an.produceWithPatches.bind(an), sn = an.setAutoFreeze.bind(an), vn = an.setUseProxies.bind(an), pn = an.applyPatches.bind(an), ln = an.createDraft.bind(an), dn = an.finishDraft.bind(an);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fn);
 //# sourceMappingURL=immer.esm.js.map


/***/ }),

/***/ 3323:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isPlainObject": () => (/* binding */ isPlainObject)
/* harmony export */ });
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */ function isObject(o) {
    return Object.prototype.toString.call(o) === "[object Object]";
}
function isPlainObject(o) {
    var ctor, prot;
    if (isObject(o) === false) return false;
    // If has modified constructor
    ctor = o.constructor;
    if (ctor === undefined) return true;
    // If has modified prototype
    prot = ctor.prototype;
    if (isObject(prot) === false) return false;
    // If constructor does not have an Object-specific method
    if (prot.hasOwnProperty("isPrototypeOf") === false) {
        return false;
    }
    // Most likely a plain Object
    return true;
}



/***/ })

};
;