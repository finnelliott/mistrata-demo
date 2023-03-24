"use strict";
(() => {
var exports = {};
exports.id = 951;
exports.ids = [951];
exports.modules = {

/***/ 658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
function handler(req, res) {
    const robots = `User-agent: *
Sitemap: ${"http://localhost:3001"}/sitemap.xml
`;
    res.send(robots);
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(658));
module.exports = __webpack_exports__;

})();