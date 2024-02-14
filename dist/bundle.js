/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.ts":
/*!******************!*\
  !*** ./index.ts ***!
  \******************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.StoreManager = void 0;\nvar StoreManager_1 = __webpack_require__(/*! ./src/StoreManager */ \"./src/StoreManager.ts\");\nObject.defineProperty(exports, \"StoreManager\", ({ enumerable: true, get: function () { return StoreManager_1.StoreManager; } }));\n\n\n//# sourceURL=webpack://typescript-storage-manager-localstorage/./index.ts?");

/***/ }),

/***/ "./src/StoreManager.ts":
/*!*****************************!*\
  !*** ./src/StoreManager.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.StoreManager = void 0;\nvar StoreManager = /** @class */ (function () {\n    function StoreManager() {\n    }\n    StoreManager.storeObject = function (key, data) {\n        if (typeof window !== 'undefined') {\n            window.localStorage.setItem(key, JSON.stringify(data));\n        }\n    };\n    StoreManager.getObject = function (key) {\n        if (typeof window !== 'undefined') {\n            var data = window.localStorage.getItem(key);\n            var result = JSON.parse(data);\n            return result;\n        }\n    };\n    StoreManager.removeAllObjects = function () {\n        if (typeof window !== \"undefined\") {\n            window.localStorage.clear();\n        }\n    };\n    return StoreManager;\n}());\nexports.StoreManager = StoreManager;\n\n\n//# sourceURL=webpack://typescript-storage-manager-localstorage/./src/StoreManager.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.ts");
/******/ 	
/******/ })()
;