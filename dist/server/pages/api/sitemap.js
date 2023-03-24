"use strict";
(() => {
var exports = {};
exports.id = 290;
exports.ids = [290];
exports.modules = {

/***/ 1523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(req, res) {
    const pages = await fetch(`${"http://localhost:3000"}/api/pages?limit=100`).then((res)=>res.json()).then((res)=>res.docs);
    const blog_posts = await fetch(`${"http://localhost:3000"}/api/blog?limit=1000`).then((res)=>res.json()).then((res)=>res.docs);
    const treatments = await fetch(`${"http://localhost:3000"}/api/treatments?limit=100`).then((res)=>res.json()).then((res)=>res.docs);
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
          <url>
            <loc>${"http://localhost:3001"}</loc>
            <priority>1.00</priority>
          </url>
        ${pages.map((page)=>{
        if (page.slug !== "home") return `
                <url>
                  <loc>${"http://localhost:3001"}/${page.slug}</loc>
                  <priority>1.0</priority>
                </url>
              `;
    }).join("")}
        ${blog_posts.length > 0 && blog_posts.map((post)=>{
        return `
                    <url>
                    <loc>${"http://localhost:3001"}/blog/${post.slug}</loc>
                    <priority>1.0</priority>
                    </url>
                `;
    }).join("")}
        ${treatments.length > 0 && treatments.filter((treatment)=>treatment.layout.length !== 0).map((treatment)=>{
        return `
              <url>
              <loc>${"http://localhost:3001"}/treatments/${treatment.slug}</loc>
              <priority>1.0</priority>
              </url>
          `;
    }).join("")}
        </urlset>
    `;
    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1523));
module.exports = __webpack_exports__;

})();