exports.id = 584;
exports.ids = [584];
exports.modules = {

/***/ 7947:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 7))

/***/ }),

/***/ 5462:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9446, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3258, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 6862, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2030, 23))

/***/ }),

/***/ 1881:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 9797, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 2919, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 2664))

/***/ }),

/***/ 3259:
/***/ (() => {



/***/ }),

/***/ 9217:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MarketingLayout)
});

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(8499);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/20/solid/esm/ArrowTopRightOnSquareIcon.js
var ArrowTopRightOnSquareIcon = __webpack_require__(9721);
// EXTERNAL MODULE: ./node_modules/@heroicons/react/24/outline/esm/SparklesIcon.js
var SparklesIcon = __webpack_require__(4687);
// EXTERNAL MODULE: ./components/shared/SecondaryButton.tsx
var SecondaryButton = __webpack_require__(5328);
;// CONCATENATED MODULE: ./components/blocks/DemoBanner.tsx




const DemoBanner = ()=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "bg-primary-50 border-b border-primary-200",
        children: /*#__PURE__*/ jsx_runtime.jsx("div", {
            className: "mx-auto max-w-7xl py-3 px-3 sm:px-8 lg:px-8",
            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "flex items-center justify-between flex-col sm:flex-row",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                        className: "flex flex-1 items-center py-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime.jsx("span", {
                                className: "flex rounded-lg",
                                children: /*#__PURE__*/ jsx_runtime.jsx(SparklesIcon/* default */.Z, {
                                    className: "h-6 w-6 text-primary-700",
                                    "aria-hidden": "true"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime.jsxs)("p", {
                                className: "flex-1 ml-3 text-sm",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("span", {
                                        className: "text-primary-900 font-medium",
                                        children: [
                                            "Our websites are extremely fast, accessible and optimised for search.",
                                            ` `
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "text-primary-800 font-normal",
                                        children: "See the results for yourself."
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                        className: "order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 ml-0 sm:ml-3 sm:w-auto",
                        children: /*#__PURE__*/ jsx_runtime.jsx("a", {
                            href: "https://pagespeed.web.dev/report?url=https%3A%2F%2Fdemo.mistrata.com%2F",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "w-full",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)(SecondaryButton/* default */.Z, {
                                className: "w-full -py-2",
                                children: [
                                    "View results",
                                    /*#__PURE__*/ jsx_runtime.jsx(ArrowTopRightOnSquareIcon/* default */.Z, {
                                        className: "w-5 h-5 ml-2"
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const blocks_DemoBanner = (DemoBanner);

// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(5468);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(634);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(2890);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./components/shared/CMSLink.tsx
var CMSLink = __webpack_require__(5292);
;// CONCATENATED MODULE: ./components/globals/FooterNavigationLayout.tsx




const FooterNavigationLayout = ({ data , business  })=>{
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        className: "bg-white",
        children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
            className: "mx-auto max-w-7xl px-4 sm:px-8 pt-16",
            children: [
                /*#__PURE__*/ jsx_runtime.jsx("div", {
                    className: "grid grid-cols-2 lg:grid-cols-4 gap-16 mb-16",
                    children: data.columns.map((column, index)=>/*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                            className: "space-y-4 flex flex-col",
                            children: [
                                /*#__PURE__*/ jsx_runtime.jsx("div", {
                                    className: "text-sm font-normal mb-2 text-gray-500",
                                    children: column.heading
                                }),
                                /*#__PURE__*/ jsx_runtime.jsx("ul", {
                                    className: "space-y-3",
                                    children: column.links.map((item, index)=>/*#__PURE__*/ jsx_runtime.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime.jsx(CMSLink/* default */.Z, {
                                                link: item,
                                                children: /*#__PURE__*/ jsx_runtime.jsx("div", {
                                                    className: "text-base font-medium text-gray-600",
                                                    children: item.label
                                                })
                                            })
                                        }, index))
                                })
                            ]
                        }, index))
                }),
                /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                    className: "flex flex-row justify-between w-full text-gray-500 border-t border-gray-200 py-8 items-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "flex-none justify-start w-auto",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)((link_default()), {
                                href: "/",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("span", {
                                        className: "sr-only",
                                        children: business.name
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "relative h-12 w-auto overflow-hidden flex items-center",
                                        children: /*#__PURE__*/ jsx_runtime.jsx((image_default()), {
                                            src: "http://localhost:3000" + business.logo.url,
                                            height: 40,
                                            width: business.logo.width / business.logo.height * 40,
                                            alt: business.logo.alt
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime.jsx("div", {
                            className: "w-auto text-gray-400",
                            children: /*#__PURE__*/ (0,jsx_runtime.jsxs)("a", {
                                href: "https://www.mistrata.com",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: [
                                    /*#__PURE__*/ jsx_runtime.jsx("div", {
                                        className: "sr-only",
                                        children: "Mistrata"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime.jsxs)("svg", {
                                        className: "hidden md:block",
                                        width: "101",
                                        height: "31",
                                        viewBox: "0 0 101 31",
                                        fill: "currentColor",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                fillRule: "evenodd",
                                                clipRule: "evenodd",
                                                d: "M14.8942 0.51976L23.7961 3.41218L29.2978 10.9846V20.3447L23.7961 27.9171L14.8942 30.8095L5.99216 27.9171L0.49054 20.3447V10.9846L5.99224 3.41218L14.8942 0.51976ZM7.15417 26.7818L13.0107 28.6847L9.22252 23.4708L7.15415 22.7987L7.15417 26.7818ZM7.15414 21.2858L10.1118 22.2468L11.9385 24.7611L14.894 23.8008L17.8497 24.7611L19.6763 22.247L22.632 21.2866L22.632 18.179L24.4587 15.6647L22.6321 13.1506L22.6321 10.0428L19.6766 9.08252L17.8498 6.56823L14.8944 7.52855L11.9386 6.56819L10.112 9.08239L7.15633 10.0427L7.15635 13.1503L5.32857 15.666L7.15412 18.1787L7.15414 21.2858ZM4.43932 16.89L2.09921 20.1109L5.71532 25.0881L5.71528 18.6462L4.43932 16.89ZM1.92938 17.8967V11.7411L5.71749 10.5102L5.7175 12.6828L1.92938 17.8967ZM3.09343 9.84996L9.22273 7.85844L10.4998 6.10069L6.71167 4.86988L3.09343 9.84996ZM8.76499 4.02415L14.8943 6.01566L16.9606 5.34428L14.6194 2.12194L8.76499 4.02415ZM16.7777 2.64463L20.5658 7.85856L22.6321 8.52991L22.6321 4.54685L16.7777 2.64463ZM24.0709 6.23833L27.6891 11.2184L25.348 14.4408L24.071 12.6831L24.0709 6.23833ZM27.859 13.4326L24.0709 18.6465L24.0709 20.8191L27.859 19.5882V13.4326ZM26.6949 21.4794L20.5656 23.4709L19.2886 25.2286L23.0767 26.4594L26.6949 21.4794ZM21.0234 27.3052L14.894 25.3136L12.8278 25.985L15.169 29.2074L21.0234 27.3052Z",
                                                fill: "currentColor"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                d: "M37.3934 9.53321H39.6927L43.6904 19.2945H43.8375L47.8352 9.53321H50.1345V22.0904H48.3319V13.0036H48.2154L44.512 22.072H43.0159L39.3125 12.9975H39.196V22.0904H37.3934V9.53321Z",
                                                fill: "currentColor"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                d: "M52.3966 22.0904V12.6725H54.2299V22.0904H52.3966ZM53.3224 11.2194C53.0036 11.2194 52.7297 11.1131 52.5008 10.9005C52.276 10.6839 52.1636 10.4264 52.1636 10.128C52.1636 9.82548 52.276 9.56796 52.5008 9.3554C52.7297 9.13876 53.0036 9.03043 53.3224 9.03043C53.6412 9.03043 53.9131 9.13876 54.1379 9.3554C54.3668 9.56796 54.4813 9.82548 54.4813 10.128C54.4813 10.4264 54.3668 10.6839 54.1379 10.9005C53.9131 11.1131 53.6412 11.2194 53.3224 11.2194Z",
                                                fill: "currentColor"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                d: "M63.4082 14.9718L61.7466 15.2661C61.6771 15.0536 61.5667 14.8512 61.4155 14.6591C61.2683 14.467 61.068 14.3096 60.8146 14.187C60.5612 14.0643 60.2444 14.003 59.8642 14.003C59.3451 14.003 58.9118 14.1195 58.5644 14.3525C58.2169 14.5814 58.0432 14.8778 58.0432 15.2416C58.0432 15.5563 58.1597 15.8098 58.3927 16.0019C58.6257 16.194 59.0017 16.3514 59.5209 16.474L61.0169 16.8174C61.8835 17.0177 62.5294 17.3263 62.9545 17.7432C63.3796 18.1601 63.5921 18.7018 63.5921 19.368C63.5921 19.9321 63.4286 20.4349 63.1016 20.8764C62.7787 21.3138 62.327 21.6571 61.7466 21.9065C61.1702 22.1558 60.5019 22.2805 59.7416 22.2805C58.687 22.2805 57.8266 22.0557 57.1603 21.606C56.494 21.1523 56.0852 20.5085 55.934 19.6746L57.706 19.4048C57.8163 19.8667 58.0432 20.2162 58.3866 20.4533C58.7299 20.6863 59.1775 20.8028 59.7293 20.8028C60.3302 20.8028 60.8105 20.6781 61.1702 20.4288C61.5299 20.1753 61.7098 19.8667 61.7098 19.5029C61.7098 19.2086 61.5994 18.9613 61.3787 18.761C61.1621 18.5607 60.8289 18.4095 60.3793 18.3073L58.7851 17.9578C57.9063 17.7575 57.2563 17.4387 56.8353 17.0013C56.4184 16.5639 56.2099 16.0101 56.2099 15.3397C56.2099 14.7838 56.3652 14.2973 56.6759 13.8804C56.9865 13.4635 57.4157 13.1385 57.9635 12.9055C58.5112 12.6684 59.1387 12.5499 59.8458 12.5499C60.8637 12.5499 61.6648 12.7706 62.2494 13.2121C62.8339 13.6495 63.2202 14.236 63.4082 14.9718Z",
                                                fill: "currentColor"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                d: "M69.6588 12.6725V14.1441H64.5145V12.6725H69.6588ZM65.8941 10.4161H67.7274V19.3251C67.7274 19.6807 67.7805 19.9485 67.8868 20.1283C67.9931 20.3041 68.13 20.4247 68.2976 20.4901C68.4693 20.5514 68.6553 20.5821 68.8556 20.5821C69.0027 20.5821 69.1315 20.5718 69.2418 20.5514C69.3522 20.531 69.438 20.5146 69.4994 20.5024L69.8305 22.0168C69.7242 22.0577 69.5729 22.0986 69.3767 22.1395C69.1805 22.1844 68.9353 22.2089 68.641 22.213C68.1586 22.2212 67.709 22.1354 67.292 21.9555C66.8751 21.7757 66.5379 21.4977 66.2804 21.1216C66.0228 20.7456 65.8941 20.2735 65.8941 19.7053V10.4161Z",
                                                fill: "currentColor"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                d: "M71.3414 22.0904V12.6725H73.1134V14.1686H73.2115C73.3832 13.6617 73.6857 13.2632 74.119 12.9729C74.5564 12.6786 75.051 12.5315 75.6028 12.5315C75.7172 12.5315 75.8521 12.5356 76.0075 12.5437C76.1669 12.5519 76.2915 12.5621 76.3815 12.5744V14.328C76.3079 14.3076 76.1771 14.2851 75.9891 14.2606C75.801 14.2319 75.613 14.2176 75.425 14.2176C74.9917 14.2176 74.6054 14.3096 74.2661 14.4935C73.9309 14.6734 73.6652 14.9248 73.469 15.2477C73.2728 15.5665 73.1747 15.9303 73.1747 16.3391V22.0904H71.3414Z",
                                                fill: "currentColor"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                d: "M80.2791 22.2989C79.6823 22.2989 79.1427 22.1885 78.6604 21.9678C78.1781 21.743 77.7959 21.418 77.5138 20.9929C77.2359 20.5678 77.0969 20.0466 77.0969 19.4294C77.0969 18.898 77.1991 18.4606 77.4035 18.1172C77.6078 17.7739 77.8838 17.502 78.2312 17.3017C78.5787 17.1015 78.967 16.9502 79.3962 16.848C79.8254 16.7458 80.2628 16.6682 80.7083 16.615C81.2724 16.5496 81.7302 16.4965 82.0818 16.4556C82.4333 16.4106 82.6888 16.3391 82.8482 16.241C83.0076 16.1429 83.0873 15.9835 83.0873 15.7628V15.7198C83.0873 15.1844 82.9361 14.7695 82.6336 14.4752C82.3352 14.1808 81.8896 14.0337 81.2969 14.0337C80.6797 14.0337 80.1933 14.1706 79.8376 14.4445C79.4861 14.7143 79.2429 15.0147 79.108 15.3458L77.3851 14.9534C77.5895 14.3811 77.8878 13.9192 78.2803 13.5677C78.6768 13.2121 79.1325 12.9546 79.6476 12.7951C80.1626 12.6316 80.7042 12.5499 81.2724 12.5499C81.6485 12.5499 82.047 12.5948 82.468 12.6848C82.8931 12.7706 83.2896 12.93 83.6575 13.163C84.0295 13.396 84.334 13.7292 84.5711 14.1624C84.8082 14.5917 84.9267 15.1496 84.9267 15.8363V22.0904H83.1364V20.8028H83.0628C82.9442 21.0399 82.7664 21.2729 82.5293 21.5018C82.2923 21.7307 81.9877 21.9208 81.6158 22.072C81.2438 22.2232 80.7982 22.2989 80.2791 22.2989ZM80.6777 20.8273C81.1845 20.8273 81.6178 20.7272 81.9775 20.5269C82.3413 20.3266 82.6172 20.065 82.8053 19.7421C82.9974 19.4151 83.0934 19.0656 83.0934 18.6936V17.4796C83.028 17.545 82.9013 17.6063 82.7133 17.6635C82.5294 17.7166 82.3188 17.7636 82.0818 17.8045C81.8447 17.8413 81.6137 17.8761 81.3889 17.9088C81.1641 17.9374 80.976 17.9619 80.8248 17.9823C80.4692 18.0273 80.1442 18.1029 79.8499 18.2092C79.5597 18.3155 79.3267 18.4688 79.1509 18.6691C78.9792 18.8653 78.8934 19.1269 78.8934 19.4539C78.8934 19.9076 79.061 20.251 79.3962 20.484C79.7314 20.7129 80.1585 20.8273 80.6777 20.8273Z",
                                                fill: "currentColor"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                d: "M91.4195 12.6725V14.1441H86.2752V12.6725H91.4195ZM87.6548 10.4161H89.4881V19.3251C89.4881 19.6807 89.5412 19.9485 89.6475 20.1283C89.7538 20.3041 89.8907 20.4247 90.0583 20.4901C90.23 20.5514 90.416 20.5821 90.6163 20.5821C90.7634 20.5821 90.8922 20.5718 91.0026 20.5514C91.1129 20.531 91.1988 20.5146 91.2601 20.5024L91.5912 22.0168C91.4849 22.0577 91.3337 22.0986 91.1375 22.1395C90.9413 22.1844 90.696 22.2089 90.4017 22.213C89.9193 22.2212 89.4697 22.1354 89.0528 21.9555C88.6358 21.7757 88.2986 21.4977 88.0411 21.1216C87.7836 20.7456 87.6548 20.2735 87.6548 19.7053V10.4161Z",
                                                fill: "currentColor"
                                            }),
                                            /*#__PURE__*/ jsx_runtime.jsx("path", {
                                                d: "M95.8429 22.2989C95.2461 22.2989 94.7066 22.1885 94.2242 21.9678C93.7419 21.743 93.3597 21.418 93.0776 20.9929C92.7997 20.5678 92.6607 20.0466 92.6607 19.4294C92.6607 18.898 92.7629 18.4606 92.9673 18.1172C93.1716 17.7739 93.4476 17.502 93.795 17.3017C94.1425 17.1015 94.5308 16.9502 94.96 16.848C95.3892 16.7458 95.8266 16.6682 96.2721 16.615C96.8362 16.5496 97.294 16.4965 97.6456 16.4556C97.9971 16.4106 98.2526 16.3391 98.412 16.241C98.5714 16.1429 98.6511 15.9835 98.6511 15.7628V15.7198C98.6511 15.1844 98.4999 14.7695 98.1974 14.4752C97.899 14.1808 97.4534 14.0337 96.8607 14.0337C96.2435 14.0337 95.7571 14.1706 95.4014 14.4445C95.0499 14.7143 94.8067 15.0147 94.6718 15.3458L92.9489 14.9534C93.1533 14.3811 93.4516 13.9192 93.8441 13.5677C94.2406 13.2121 94.6963 12.9546 95.2114 12.7951C95.7264 12.6316 96.268 12.5499 96.8362 12.5499C97.2123 12.5499 97.6108 12.5948 98.0318 12.6848C98.4569 12.7706 98.8535 12.93 99.2213 13.163C99.5933 13.396 99.8978 13.7292 100.135 14.1624C100.372 14.5917 100.491 15.1496 100.491 15.8363V22.0904H98.7002V20.8028H98.6266C98.508 21.0399 98.3302 21.2729 98.0932 21.5018C97.8561 21.7307 97.5515 21.9208 97.1796 22.072C96.8076 22.2232 96.362 22.2989 95.8429 22.2989ZM96.2415 20.8273C96.7483 20.8273 97.1816 20.7272 97.5413 20.5269C97.9051 20.3266 98.181 20.065 98.3691 19.7421C98.5612 19.4151 98.6573 19.0656 98.6573 18.6936V17.4796C98.5919 17.545 98.4651 17.6063 98.2771 17.6635C98.0932 17.7166 97.8826 17.7636 97.6456 17.8045C97.4085 17.8413 97.1775 17.8761 96.9527 17.9088C96.7279 17.9374 96.5399 17.9619 96.3886 17.9823C96.033 18.0273 95.708 18.1029 95.4137 18.2092C95.1235 18.3155 94.8905 18.4688 94.7147 18.6691C94.543 18.8653 94.4572 19.1269 94.4572 19.4539C94.4572 19.9076 94.6248 20.251 94.96 20.484C95.2952 20.7129 95.7223 20.8273 96.2415 20.8273Z",
                                                fill: "currentColor"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime.jsx("svg", {
                                        className: "md:hidden block",
                                        width: "33",
                                        height: "33",
                                        viewBox: "0 0 33 33",
                                        fill: "currentColor",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: /*#__PURE__*/ jsx_runtime.jsx("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M16.4905 1.52777L25.3925 4.42019L30.8942 11.9926V21.3527L25.3925 28.9251L16.4905 31.8176L7.58852 28.9251L2.0869 21.3527V11.9926L7.5886 4.42019L16.4905 1.52777ZM8.75053 27.7898L14.607 29.6927L10.8189 24.4788L8.75051 23.8067L8.75053 27.7898ZM8.7505 22.2938L11.7081 23.2548L13.5349 25.7691L16.4904 24.8088L19.4461 25.7691L21.2727 23.255L24.2284 22.2946L24.2284 19.187L26.0551 16.6727L24.2285 14.1586L24.2285 11.0508L21.273 10.0905L19.4462 7.57624L16.4907 8.53656L13.535 7.57621L11.7083 10.0904L8.75269 11.0507L8.75271 14.1583L6.92493 16.674L8.75048 19.1867L8.7505 22.2938ZM6.03568 17.898L3.69557 21.1189L7.31168 26.0961L7.31164 19.6542L6.03568 17.898ZM3.52574 18.9048V12.7491L7.31384 11.5183L7.31386 13.6908L3.52574 18.9048ZM4.68979 10.858L10.8191 8.86645L12.0961 7.1087L8.30803 5.87789L4.68979 10.858ZM10.3613 5.03216L16.4907 7.02367L18.5569 6.35229L16.2157 3.12995L10.3613 5.03216ZM18.374 3.65264L22.1622 8.86657L24.2285 9.53792L24.2284 5.55486L18.374 3.65264ZM25.6673 7.24634L29.2855 12.2264L26.9443 15.4488L25.6673 13.6911L25.6673 7.24634ZM29.4553 14.4406L25.6672 19.6545L25.6672 21.8271L29.4553 20.5962V14.4406ZM28.2913 22.4874L22.1619 24.479L20.8849 26.2366L24.6731 27.4674L28.2913 22.4874ZM22.6197 28.3132L16.4904 26.3217L14.4241 26.993L16.7653 30.2154L22.6197 28.3132Z",
                                            fill: "currentColor"
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const globals_FooterNavigationLayout = (FooterNavigationLayout);

;// CONCATENATED MODULE: ./components/globals/FooterNavigation.tsx



const FooterNavigation = ()=>{
    const data = (0,react_shared_subset.use)(fetch(`${"http://localhost:3000"}/api/globals/footer-navigation`).then((res)=>res.json()).then((data)=>data));
    const business = (0,react_shared_subset.use)(fetch(`${"http://localhost:3000"}/api/globals/business`).then((res)=>res.json()).then((data)=>data));
    return /*#__PURE__*/ jsx_runtime.jsx("div", {
        children: /*#__PURE__*/ jsx_runtime.jsx(globals_FooterNavigationLayout, {
            data: data,
            business: business
        })
    });
};
/* harmony default export */ const globals_FooterNavigation = (FooterNavigation);

// EXTERNAL MODULE: ./components/globals/HeaderNavigationLayout.tsx
var HeaderNavigationLayout = __webpack_require__(9831);
var HeaderNavigationLayout_default = /*#__PURE__*/__webpack_require__.n(HeaderNavigationLayout);
;// CONCATENATED MODULE: ./components/globals/HeaderNavigation.tsx



const HeaderNavigation = ()=>{
    const data = (0,react_shared_subset.use)(fetch(`${"http://localhost:3000"}/api/globals/header-navigation`).then((res)=>res.json()).then((data)=>data));
    const business = (0,react_shared_subset.use)(fetch(`${"http://localhost:3000"}/api/globals/business`).then((res)=>res.json()).then((data)=>data));
    return /*#__PURE__*/ jsx_runtime.jsx((HeaderNavigationLayout_default()), {
        data: data,
        business: business
    });
};
/* harmony default export */ const globals_HeaderNavigation = (HeaderNavigation);

;// CONCATENATED MODULE: ./app/(marketing)/layout.tsx




function MarketingLayout({ children  }) {
    return /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ jsx_runtime.jsx(blocks_DemoBanner, {}),
            /*#__PURE__*/ (0,jsx_runtime.jsxs)("div", {
                className: "relative z-10",
                children: [
                    /*#__PURE__*/ jsx_runtime.jsx(globals_HeaderNavigation, {}),
                    /*#__PURE__*/ jsx_runtime.jsx("main", {
                        children: children
                    }),
                    /*#__PURE__*/ jsx_runtime.jsx(globals_FooterNavigation, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 6573:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8499);
/* harmony import */ var _components_shared_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3097);


function NotFound() {
    // const treatments = use(fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/pages?where[slug][equals]=${"treatments"}`).then((res) => res.json()).then((res) => res.docs[0]))
    // const blog = use(fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/pages?where[slug][equals]=${"blog"}`).then((res) => res.json()).then((res) => res.docs[0]))
    // const about = use(fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/pages?where[slug][equals]=${"about"}`).then((res) => res.json()).then((res) => res.docs[0]))
    // const contact = use(fetch(`${process.env.NEXT_PUBLIC_CMS_URL}/api/pages?where[slug][equals]=${"contact"}`).then((res) => res.json()).then((res) => res.docs[0]))
    // const navigation = []
    // if (treatments) {
    //     navigation.push({
    //         "heading": "Treatments",
    //         "subheading": "Find out more about our treatments and services.",
    //         "href": "/treatments",
    //     })
    // }
    // if (blog) {
    //     navigation.push({
    //         "heading": "Blog",
    //         "subheading": "Read the latest news and updates from our blog.",
    //         "href": "/blog",
    //     })
    // }
    // if (about) {
    //     navigation.push({
    //         "heading": "About",
    //         "subheading": "Learn more about our practice and team.",
    //         "href": "/about",
    //     })
    // }
    // if (contact) {
    //     navigation.push({
    //         "heading": "Contact",
    //         "subheading": "Get in touch",
    //         "href": "/contact",
    //     })
    // }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_shared_Container__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "flex w-full flex-col pt-24",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col place-items-start max-w-3xl mb-8 lg:mb-0",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-base font-semibold text-primary-700 text-left mb-3",
                            children: "404 Error"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                            className: "text-4xl text-gray-900 text-left font-semibold",
                            children: "Sorry, we couldn't find that page."
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "text-lg font-normal text-gray-500 mt-5",
                            children: "Unfortunately, the page you are looking for doesn't exist or has been moved."
                        })
                    ]
                })
            })
        })
    });
}


/***/ }),

/***/ 8514:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("/Users/f/Documents/Code/2022/December/mistrata-demo/app/layout.tsx");


/***/ }),

/***/ 9831:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* __next_internal_client_entry_do_not_use__ */ const { createProxy  } = __webpack_require__(4353);
module.exports = createProxy("/Users/f/Documents/Code/2022/December/mistrata-demo/components/globals/HeaderNavigationLayout.tsx");


/***/ }),

/***/ 5292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8499);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2890);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const CMSLink = ({ link , children  })=>{
    if (link.type == "page" && link.page) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: `/${typeof link.page !== "string" ? link.page.slug : link.page}`,
            className: "",
            children: children || link.label
        });
    } else if (link.type == "url") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: link.url,
            target: "_blank",
            rel: "noreferrer noopener",
            className: "",
            children: children
        });
    } else if (link.type == "phone_number") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: `tel:${link.phone_number}`,
            className: "",
            children: children
        });
    } else if (link.type == "email") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: `mailto:${link.email}`,
            className: "",
            children: children
        });
    } else return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CMSLink);


/***/ }),

/***/ 3097:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8499);

const Container = ({ children  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "w-screen",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "w-full max-w-7xl mx-auto pb-24 px-4 sm:px-8",
            children: children
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);


/***/ }),

/***/ 6558:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PageHead)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8499);

function PageHead({ page , business  }) {
    const favicon =  true && business.favicon.url ? "http://localhost:3000" + business.favicon.url : null;
    const logo =  true && business.logo.url ? "http://localhost:3000" + business.logo.url : null;
    const name = encodeURIComponent(business.name ?? "");
    if (page) {
        const title = page.title ? encodeURIComponent(page.title ?? "") : "";
        const description = encodeURIComponent(page.meta.description ?? "");
        const meta_image_query = `title=${title}&description=${description}${logo && `&logo=${logo}`}&business=${name}`;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                }),
                page.meta.title ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: page.meta.title
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("title", {
                    children: [
                        page.title,
                        " | ",
                        business.name
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "description",
                    content: page.meta.description
                }),
                favicon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: favicon
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "twitter:card",
                    content: "summary"
                }),
                page.meta.title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "twitter:title",
                    content: page.meta.title
                }),
                page.meta.description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "twitter:description",
                    content: page.meta.description
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "twitter:image",
                    content: `${"http://localhost:3001"}/api/og?width=600&height=600&${meta_image_query}`
                }),
                page.meta.title && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:title",
                    content: page.meta.title
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:type",
                    content: "website"
                }),
                business.name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:site_name",
                    content: business.name
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:image",
                    content: `${"http://localhost:3001"}/api/og?${meta_image_query}`
                }),
                page.meta.description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:description",
                    content: page.meta.description
                })
            ]
        });
    } else {
        const meta_image_query1 = `${logo && `&logo=${logo}`}&business=${name}`;
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                    children: business.name
                }),
                favicon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                    rel: "icon",
                    type: "image/png",
                    sizes: "16x16",
                    href: favicon
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "twitter:card",
                    content: "summary"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    name: "twitter:image",
                    content: `${"http://localhost:3001"}/api/og?width=600&height=600&${meta_image_query1}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:type",
                    content: "website"
                }),
                business.name && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:site_name",
                    content: business.name
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                    property: "og:image",
                    content: `${"http://localhost:3001"}/api/og?${meta_image_query1}`
                })
            ]
        });
    }
}


/***/ }),

/***/ 2997:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8499);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5468);
/* harmony import */ var escape_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4230);
/* harmony import */ var escape_html__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(escape_html__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7572);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(634);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2890);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);






const serialize = (children)=>children.map((node, i)=>{
        if (slate__WEBPACK_IMPORTED_MODULE_5__/* .Text.isText */ .xv.isText(node)) {
            let text = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                dangerouslySetInnerHTML: {
                    __html: escape_html__WEBPACK_IMPORTED_MODULE_2___default()(node.text)
                }
            });
            if (node.bold) {
                text = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
                    children: text
                }, i);
            }
            if (node.italic) {
                text = /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("em", {
                    children: text
                }, i);
            }
            // Handle other leaf types here...
            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
                children: text
            }, i);
        }
        if (!node) {
            return null;
        }
        switch(node.type){
            case "h1":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    children: serialize(node.children)
                }, i);
            case "h2":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                    children: serialize(node.children)
                }, i);
            case "h3":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    children: serialize(node.children)
                }, i);
            case "h4":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h4", {
                    children: serialize(node.children)
                }, i);
            case "h5":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                    children: serialize(node.children)
                }, i);
            case "h6":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h6", {
                    children: serialize(node.children)
                }, i);
            case "quote":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("blockquote", {
                    children: serialize(node.children)
                }, i);
            case "ul":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    children: serialize(node.children)
                }, i);
            case "ol":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ol", {
                    children: serialize(node.children)
                }, i);
            case "li":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                    children: serialize(node.children)
                }, i);
            case "link":
                if (node.linkType == "internal") {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                        href: node.doc.relationTo == "blog" ? "/blog/" + node.doc.value.slug : "/" + node.doc.value.slug,
                        target: node.newTab ? "_blank" : "_self",
                        children: serialize(node.children)
                    });
                } else {
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: escape_html__WEBPACK_IMPORTED_MODULE_2___default()(node.url),
                        children: serialize(node.children)
                    }, i);
                }
            case "upload":
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative w-full aspect-[4/3] shadow-md bg-white",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                        src: "http://localhost:3000" + (node.value.url ?? ""),
                        alt: node.value.alt,
                        fill: true,
                        className: "object-cover",
                        sizes: "100vw"
                    })
                });
            default:
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                    children: serialize(node.children)
                }, i);
        }
    });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (serialize);


/***/ }),

/***/ 5328:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SecondaryButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8499);

function SecondaryButton({ children , className , type  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: type ?? "button",
        className: className + " bg-white inline-flex text-base items-center justify-center whitespace-nowrap rounded-lg px-5 py-3 font-medium text-gray-700 shadow-sm hover:bg-gray-50 border border-gray-300 leading-6",
        children: children
    });
}


/***/ }),

/***/ 3237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getBusiness = async ()=>{
    const data = await fetch(`${"http://localhost:3000"}/api/globals/business`).then((res)=>res.json());
    return data;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getBusiness);


/***/ }),

/***/ 7:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RootLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5506);
/* harmony import */ var _next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1338);
/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_globals_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _studio_freight_react_lenis__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(688);




function RootLayout({ children  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_studio_freight_react_lenis__WEBPACK_IMPORTED_MODULE_2__/* .ReactLenis */ .pi, {
        root: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("html", {
            lang: "en",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("head", {}),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("body", {
                    className: (_next_font_google_target_css_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter___WEBPACK_IMPORTED_MODULE_3___default().className) + " bg-white min-h-screen",
                    children: children
                })
            ]
        })
    });
}


/***/ }),

/***/ 2664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HeaderNavigationLayout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7803);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(3753);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4832);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1966);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8421);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_CMSLink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(850);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _shared_SecondaryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3926);
/* harmony import */ var _shared_PrimaryButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1447);
/* harmony import */ var _shared_Icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6888);










function HeaderNavigationLayout({ data , business  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "sticky top-0 left-0 right-0 z-50 shadow-sm",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__/* .Popover */ .J, {
            className: "bg-white relative z-50",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "mx-auto max-w-7xl px-4 sm:px-8",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between py-6 md:justify-start md:space-x-10",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex-none justify-start flex items-center",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                    href: "/",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "sr-only",
                                            children: business.name
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "relative h-12 w-auto overflow-hidden flex items-center",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                src: "http://localhost:3000" + business.logo.url,
                                                height: 40,
                                                width: business.logo.width / business.logo.height * 40,
                                                alt: business.logo.alt
                                            })
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "-my-2 -mr-2 md:hidden",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__/* .Popover.Button */ .J.Button, {
                                    className: "inline-flex items-center justify-center rounded-md bg-white p-2 text-primary-600 hover:bg-gray-100 hover:text-gray-500",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: "sr-only",
                                            children: "Open menu"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                                            className: "h-6 w-6",
                                            "aria-hidden": "true"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                                className: "flex-1 hidden space-x-8 md:flex justify-start items-center",
                                children: data.links.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "text-base font-medium text-gray-600 hover:text-gray-500",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_CMSLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            link: item
                                        })
                                    }, index))
                            }),
                            data.ctas?.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                className: "hidden items-center justify-end w-min md:flex md:flex-none lg:w-min",
                                children: data.ctas.map((cta, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_CMSLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                            link: cta,
                                            children: index % 2 == 0 && data.ctas.length > 1 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_SecondaryButton__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        cta.icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "w-5 h-5 mr-2 text-gray-900 stroke-current",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Icon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                                icon: cta.icon
                                                            })
                                                        }),
                                                        cta.label
                                                    ]
                                                })
                                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_PrimaryButton__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                    children: [
                                                        cta.icon && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "w-5 h-5 mr-2 text-white stroke-current",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_Icon__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {
                                                                icon: cta.icon
                                                            })
                                                        }),
                                                        cta.label
                                                    ]
                                                })
                                            })
                                        })
                                    }, index))
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_10__/* .Transition */ .u, {
                    as: react__WEBPACK_IMPORTED_MODULE_1__.Fragment,
                    enter: "duration-200 ease-out",
                    enterFrom: "opacity-0 scale-100",
                    enterTo: "opacity-100 scale-100",
                    leave: "duration-100 ease-in",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-100",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__/* .Popover.Panel */ .J.Panel, {
                        focus: true,
                        className: "absolute inset-x-0 top-0 origin-top-right transform transition md:hidden bg-white",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "divide-y-2 divide-gray-50 bg-white shadow-lg ring-1 ring-primary-600 ring-opacity-5",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "py-6 px-4 sm:px-8",
                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center justify-between",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "flex-none justify-start lg:w-0 lg:flex-1",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: "/",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "sr-only",
                                                            children: business.name
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "relative h-12 w-auto overflow-hidden flex items-center",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                                src: "http://localhost:3000" + business.logo.url,
                                                                height: 40,
                                                                width: business.logo.width / business.logo.height * 40,
                                                                alt: business.logo.alt
                                                            })
                                                        })
                                                    ]
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: "-mr-2",
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_8__/* .Popover.Button */ .J.Button, {
                                                    className: "inline-flex items-center justify-center rounded-md bg-white p-2 text-primary-600 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-600",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "sr-only",
                                                            children: "Close menu"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {
                                                            className: "h-6 w-6",
                                                            "aria-hidden": "true"
                                                        })
                                                    ]
                                                })
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "space-y-6 py-6 px-5",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: "flex flex-col gap-y-4",
                                            children: data.links.map((item, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "text-base font-medium text-gray-600 hover:text-gray-700",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_CMSLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                        link: item
                                                    })
                                                }, index))
                                        }),
                                        data.ctas?.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            children: data.ctas.map((cta, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                    className: "flex w-full items-center justify-center rounded-lg bg-primary-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-primary-700",
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_shared_CMSLink__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                                        link: cta
                                                    })
                                                }, index))
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);


const CMSLink = ({ link , children  })=>{
    if (link.type == "page" && link.page) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
            href: `/${typeof link.page !== "string" ? link.page.slug : link.page}`,
            className: "",
            children: children || link.label
        });
    } else if (link.type == "url") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: link.url,
            target: "_blank",
            rel: "noreferrer noopener",
            className: "",
            children: children
        });
    } else if (link.type == "phone_number") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: `tel:${link.phone_number}`,
            className: "",
            children: children
        });
    } else if (link.type == "email") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: `mailto:${link.email}`,
            className: "",
            children: children
        });
    } else return null;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CMSLink);


/***/ }),

/***/ 6888:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3608);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1640);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7773);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7904);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1545);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1271);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9302);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(929);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1981);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1494);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(2937);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1284);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(802);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9009);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(4749);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(7858);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8611);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6670);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(9667);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1382);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(5146);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(1852);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(500);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(4043);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(8056);
/* harmony import */ var _heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(6313);


const IconOptions = {
    "Thumbs Up": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
    "Plus": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
    "Chat Bubble": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
    "Star": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
    "Phone": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
    "Person": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
    "Map Pin": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
    "Smiley Face": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {}),
    "Sad Face": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {}),
    "Arrow Right": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_10__/* ["default"] */ .Z, {}),
    "Arrow Left": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_11__/* ["default"] */ .Z, {}),
    "Arrow Up": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {}),
    "Arrow Down": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
    "Chevron Right": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_14__/* ["default"] */ .Z, {}),
    "Chevron Left": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_15__/* ["default"] */ .Z, {}),
    "Chevron Up": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_16__/* ["default"] */ .Z, {}),
    "Chevron Down": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_17__/* ["default"] */ .Z, {}),
    "Building": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_18__/* ["default"] */ .Z, {}),
    "Calendar": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_19__/* ["default"] */ .Z, {}),
    "Credit Card": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_20__/* ["default"] */ .Z, {}),
    "Envelope": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_21__/* ["default"] */ .Z, {}),
    "Document": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_22__/* ["default"] */ .Z, {}),
    "Globe": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_23__/* ["default"] */ .Z, {}),
    "Fire": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_24__/* ["default"] */ .Z, {}),
    "Heart": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_25__/* ["default"] */ .Z, {}),
    "Link": /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_24_outline__WEBPACK_IMPORTED_MODULE_26__/* ["default"] */ .Z, {})
};
const Icon = (props)=>IconOptions[props.icon] ?? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Icon);


/***/ }),

/***/ 1447:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ PrimaryButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function PrimaryButton({ children , className , type  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: type ?? "button",
        className: className + " inline-flex text-base items-center justify-center whitespace-nowrap rounded-lg bg-primary-700 px-5 py-3 font-medium text-white shadow-sm hover:bg-primary-700 leading-6",
        children: children
    });
}


/***/ }),

/***/ 3926:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SecondaryButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function SecondaryButton({ children , className , type  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        type: type ?? "button",
        className: className + " bg-white inline-flex text-base items-center justify-center whitespace-nowrap rounded-lg px-5 py-3 font-medium text-gray-700 shadow-sm hover:bg-gray-50 border border-gray-300 leading-6",
        children: children
    });
}


/***/ }),

/***/ 1338:
/***/ (() => {



/***/ })

};
;