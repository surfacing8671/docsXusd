"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/docs/[[...slug]]/layout",{

/***/ "(app-pages-browser)/./lib/routes-config.ts":
/*!******************************!*\
  !*** ./lib/routes-config.ts ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ROUTES: function() { return /* binding */ ROUTES; },\n/* harmony export */   page_routes: function() { return /* binding */ page_routes; }\n/* harmony export */ });\n// for page navigation & to sort on leftbar\nconst ROUTES = [\n    {\n        title: \"XUSD EcoStable System\",\n        href: \"xusd-start\",\n        items: [\n            {\n                title: \"XUSD\",\n                href: \"/whatisxusd\"\n            },\n            {\n                title: \"Quick Start\",\n                href: \"/quickStart\"\n            },\n            {\n                title: \"PulseChain\",\n                href: \"/pulsechain\"\n            }\n        ]\n    },\n    {\n        title: \"Launch Stages\",\n        href: \"launch\",\n        items: [\n            {\n                title: \"Overview\",\n                href: \"/launchOverview\"\n            }\n        ]\n    },\n    {\n        title: \"Dynamic Taxation\",\n        href: \"dynamicTax\",\n        items: [\n            {\n                title: \"Overview\",\n                href: \"/taxoverview\"\n            },\n            {\n                title: \"Taxes\",\n                href: \"/taxes\"\n            },\n            {\n                title: \"Tax Classes\",\n                href: \"/classes\"\n            },\n            {\n                title: \"Assignment of Tax to Users\",\n                href: \"/assignment\"\n            },\n            {\n                title: \"Dev resources\",\n                href: \"/taxdev\"\n            }\n        ]\n    },\n    {\n        title: \"XUSD LitPass\",\n        href: \"creditreport\",\n        items: [\n            {\n                title: \"Overview\",\n                href: \"/litoverview\"\n            },\n            {\n                title: \"Buy\",\n                href: \"/obtain\"\n            }\n        ]\n    },\n    {\n        title: \"When Over Peg\",\n        href: \"peg\",\n        items: [\n            {\n                title: \"Peg Control\",\n                href: \"/pegcontrol\"\n            },\n            {\n                title: \"Buy\",\n                href: \"/obtain\"\n            }\n        ]\n    },\n    // {\n    //   title: \"Kings\",\n    //   href: \"kings\",\n    //   items: [\n    //     { title: \"Are you worthy?\", href: \"/startking\" },\n    //     { title: \"Seigniorage\", href: \"/seigniorage\" },\n    //   ],\n    // }, \n    {\n        title: \"Tg Bots\",\n        href: \"tgbots\",\n        items: [\n            {\n                title: \"TG Notifications\",\n                href: \"/tgbots\"\n            }\n        ]\n    }\n];\nconst page_routes = ROUTES.map((param)=>{\n    let { href, items } = param;\n    return items.map((link)=>{\n        return {\n            title: link.title,\n            href: href + link.href\n        };\n    });\n}).flat();\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2xpYi9yb3V0ZXMtY29uZmlnLnRzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsMkNBQTJDO0FBQ3BDLE1BQU1BLFNBQVM7SUFFcEI7UUFDRUMsT0FBTztRQUNQQyxNQUFNO1FBQ05DLE9BQU87WUFDTDtnQkFBRUYsT0FBTztnQkFBUUMsTUFBTTtZQUFjO1lBQ3JDO2dCQUFFRCxPQUFPO2dCQUFlQyxNQUFNO1lBQWM7WUFDNUM7Z0JBQUVELE9BQU87Z0JBQWNDLE1BQU07WUFBYztTQUM1QztJQUNIO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxNQUFNO1FBQ05DLE9BQU87WUFDTDtnQkFBRUYsT0FBTztnQkFBWUMsTUFBTTtZQUFrQjtTQUU5QztJQUNIO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxNQUFNO1FBQ05DLE9BQU87WUFDTDtnQkFBRUYsT0FBTztnQkFBWUMsTUFBTTtZQUFlO1lBQzFDO2dCQUFFRCxPQUFPO2dCQUFTQyxNQUFNO1lBQVM7WUFDakM7Z0JBQUVELE9BQU87Z0JBQWVDLE1BQU07WUFBVztZQUN6QztnQkFBRUQsT0FBTztnQkFBOEJDLE1BQU07WUFBYztZQUUzRDtnQkFBRUQsT0FBTztnQkFBaUJDLE1BQU07WUFBVTtTQUMzQztJQUNIO0lBQ0E7UUFDRUQsT0FBTztRQUNQQyxNQUFNO1FBQ05DLE9BQU87WUFDTDtnQkFBRUYsT0FBTztnQkFBWUMsTUFBTTtZQUFlO1lBRTFDO2dCQUFFRCxPQUFPO2dCQUFPQyxNQUFNO1lBQVU7U0FFakM7SUFDSDtJQUNBO1FBQ0VELE9BQU87UUFDUEMsTUFBTTtRQUNOQyxPQUFPO1lBQ0w7Z0JBQUVGLE9BQU87Z0JBQWVDLE1BQU07WUFBYztZQUU1QztnQkFBRUQsT0FBTztnQkFBT0MsTUFBTTtZQUFVO1NBRWpDO0lBQ0g7SUFDQSxJQUFJO0lBQ0osb0JBQW9CO0lBQ3BCLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isd0RBQXdEO0lBQ3hELHNEQUFzRDtJQUV0RCxPQUFPO0lBQ1AsTUFBTTtJQUNOO1FBQ0VELE9BQU87UUFDUEMsTUFBTTtRQUNOQyxPQUFPO1lBQ0w7Z0JBQUVGLE9BQU87Z0JBQW9CQyxNQUFNO1lBQVU7U0FHOUM7SUFDSDtDQUVELENBQUM7QUFFSyxNQUFNRSxjQUFjSixPQUFPSyxHQUFHLENBQUM7UUFBQyxFQUFFSCxJQUFJLEVBQUVDLEtBQUssRUFBRTtJQUNwRCxPQUFPQSxNQUFNRSxHQUFHLENBQUMsQ0FBQ0M7UUFDaEIsT0FBTztZQUNMTCxPQUFPSyxLQUFLTCxLQUFLO1lBQ2pCQyxNQUFNQSxPQUFPSSxLQUFLSixJQUFJO1FBQ3hCO0lBQ0Y7QUFDRixHQUFHSyxJQUFJLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbGliL3JvdXRlcy1jb25maWcudHM/NzE1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBmb3IgcGFnZSBuYXZpZ2F0aW9uICYgdG8gc29ydCBvbiBsZWZ0YmFyXG5leHBvcnQgY29uc3QgUk9VVEVTID0gW1xuXG4gIHtcbiAgICB0aXRsZTogXCJYVVNEIEVjb1N0YWJsZSBTeXN0ZW1cIixcbiAgICBocmVmOiBcInh1c2Qtc3RhcnRcIixcbiAgICBpdGVtczogW1xuICAgICAgeyB0aXRsZTogXCJYVVNEXCIsIGhyZWY6IFwiL3doYXRpc3h1c2RcIiB9LFxuICAgICAgeyB0aXRsZTogXCJRdWljayBTdGFydFwiLCBocmVmOiBcIi9xdWlja1N0YXJ0XCIgfSxcbiAgICAgIHsgdGl0bGU6IFwiUHVsc2VDaGFpblwiLCBocmVmOiBcIi9wdWxzZWNoYWluXCIgfSxcbiAgICBdLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTGF1bmNoIFN0YWdlc1wiLFxuICAgIGhyZWY6IFwibGF1bmNoXCIsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGl0bGU6IFwiT3ZlcnZpZXdcIiwgaHJlZjogXCIvbGF1bmNoT3ZlcnZpZXdcIiB9LFxuXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkR5bmFtaWMgVGF4YXRpb25cIixcbiAgICBocmVmOiBcImR5bmFtaWNUYXhcIixcbiAgICBpdGVtczogW1xuICAgICAgeyB0aXRsZTogXCJPdmVydmlld1wiLCBocmVmOiBcIi90YXhvdmVydmlld1wiIH0sXG4gICAgICB7IHRpdGxlOiBcIlRheGVzXCIsIGhyZWY6IFwiL3RheGVzXCIgfSxcbiAgICAgIHsgdGl0bGU6IFwiVGF4IENsYXNzZXNcIiwgaHJlZjogXCIvY2xhc3Nlc1wiIH0sXG4gICAgICB7IHRpdGxlOiBcIkFzc2lnbm1lbnQgb2YgVGF4IHRvIFVzZXJzXCIsIGhyZWY6IFwiL2Fzc2lnbm1lbnRcIiB9LCAgIFxuIFxuICAgICAgeyB0aXRsZTogXCJEZXYgcmVzb3VyY2VzXCIsIGhyZWY6IFwiL3RheGRldlwiIH0sXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIlhVU0QgTGl0UGFzc1wiLFxuICAgIGhyZWY6IFwiY3JlZGl0cmVwb3J0XCIsXG4gICAgaXRlbXM6IFtcbiAgICAgIHsgdGl0bGU6IFwiT3ZlcnZpZXdcIiwgaHJlZjogXCIvbGl0b3ZlcnZpZXdcIiB9LFxuXG4gICAgICB7IHRpdGxlOiBcIkJ1eVwiLCBocmVmOiBcIi9vYnRhaW5cIiB9LFxuICAgICAgXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIldoZW4gT3ZlciBQZWdcIixcbiAgICBocmVmOiBcInBlZ1wiLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IHRpdGxlOiBcIlBlZyBDb250cm9sXCIsIGhyZWY6IFwiL3BlZ2NvbnRyb2xcIiB9LFxuXG4gICAgICB7IHRpdGxlOiBcIkJ1eVwiLCBocmVmOiBcIi9vYnRhaW5cIiB9LFxuICAgICAgXG4gICAgXSxcbiAgfSxcbiAgLy8ge1xuICAvLyAgIHRpdGxlOiBcIktpbmdzXCIsXG4gIC8vICAgaHJlZjogXCJraW5nc1wiLFxuICAvLyAgIGl0ZW1zOiBbXG4gIC8vICAgICB7IHRpdGxlOiBcIkFyZSB5b3Ugd29ydGh5P1wiLCBocmVmOiBcIi9zdGFydGtpbmdcIiB9LFxuICAvLyAgICAgeyB0aXRsZTogXCJTZWlnbmlvcmFnZVwiLCBocmVmOiBcIi9zZWlnbmlvcmFnZVwiIH0sXG4gICAgICBcbiAgLy8gICBdLFxuICAvLyB9LCBcbiAge1xuICAgIHRpdGxlOiBcIlRnIEJvdHNcIixcbiAgICBocmVmOiBcInRnYm90c1wiLFxuICAgIGl0ZW1zOiBbXG4gICAgICB7IHRpdGxlOiBcIlRHIE5vdGlmaWNhdGlvbnNcIiwgaHJlZjogXCIvdGdib3RzXCIgfSxcbiAgXG4gICAgICBcbiAgICBdLFxuICB9LCBcbiAgXG5dO1xuXG5leHBvcnQgY29uc3QgcGFnZV9yb3V0ZXMgPSBST1VURVMubWFwKCh7IGhyZWYsIGl0ZW1zIH0pID0+IHtcbiAgcmV0dXJuIGl0ZW1zLm1hcCgobGluaykgPT4ge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogbGluay50aXRsZSxcbiAgICAgIGhyZWY6IGhyZWYgKyBsaW5rLmhyZWYsXG4gICAgfTtcbiAgfSk7XG59KS5mbGF0KCk7XG4iXSwibmFtZXMiOlsiUk9VVEVTIiwidGl0bGUiLCJocmVmIiwiaXRlbXMiLCJwYWdlX3JvdXRlcyIsIm1hcCIsImxpbmsiLCJmbGF0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./lib/routes-config.ts\n"));

/***/ })

});