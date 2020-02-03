/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/images/Facebook.png":
/*!****************************************!*\
  !*** ./src/assets/images/Facebook.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/Facebook.png\");\n\n//# sourceURL=webpack:///./src/assets/images/Facebook.png?");

/***/ }),

/***/ "./src/assets/images/Instagram.png":
/*!*****************************************!*\
  !*** ./src/assets/images/Instagram.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/Instagram.png\");\n\n//# sourceURL=webpack:///./src/assets/images/Instagram.png?");

/***/ }),

/***/ "./src/assets/images/Marble_Surface.jpg":
/*!**********************************************!*\
  !*** ./src/assets/images/Marble_Surface.jpg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/Marble_Surface.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/Marble_Surface.jpg?");

/***/ }),

/***/ "./src/assets/images/Pineapple.jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/Pineapple.jpg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/Pineapple.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/Pineapple.jpg?");

/***/ }),

/***/ "./src/assets/images/Pinterest.png":
/*!*****************************************!*\
  !*** ./src/assets/images/Pinterest.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/Pinterest.png\");\n\n//# sourceURL=webpack:///./src/assets/images/Pinterest.png?");

/***/ }),

/***/ "./src/assets/images/Sliced_Bread.jpg":
/*!********************************************!*\
  !*** ./src/assets/images/Sliced_Bread.jpg ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/Sliced_Bread.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/Sliced_Bread.jpg?");

/***/ }),

/***/ "./src/assets/images/breakfast.jpg":
/*!*****************************************!*\
  !*** ./src/assets/images/breakfast.jpg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/breakfast.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/breakfast.jpg?");

/***/ }),

/***/ "./src/assets/images/commercial.png":
/*!******************************************!*\
  !*** ./src/assets/images/commercial.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/commercial.png\");\n\n//# sourceURL=webpack:///./src/assets/images/commercial.png?");

/***/ }),

/***/ "./src/assets/images/cookies-background.jpg":
/*!**************************************************!*\
  !*** ./src/assets/images/cookies-background.jpg ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/cookies-background.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/cookies-background.jpg?");

/***/ }),

/***/ "./src/assets/images/cookies.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/cookies.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/cookies.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/cookies.jpg?");

/***/ }),

/***/ "./src/assets/images/couple.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/couple.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/couple.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/couple.jpg?");

/***/ }),

/***/ "./src/assets/images/event.png":
/*!*************************************!*\
  !*** ./src/assets/images/event.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/event.png\");\n\n//# sourceURL=webpack:///./src/assets/images/event.png?");

/***/ }),

/***/ "./src/assets/images/logoresized.png":
/*!*******************************************!*\
  !*** ./src/assets/images/logoresized.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/logoresized.png\");\n\n//# sourceURL=webpack:///./src/assets/images/logoresized.png?");

/***/ }),

/***/ "./src/assets/images/pancakes.jpg":
/*!****************************************!*\
  !*** ./src/assets/images/pancakes.jpg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/pancakes.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/pancakes.jpg?");

/***/ }),

/***/ "./src/assets/images/press-white.png":
/*!*******************************************!*\
  !*** ./src/assets/images/press-white.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/press-white.png\");\n\n//# sourceURL=webpack:///./src/assets/images/press-white.png?");

/***/ }),

/***/ "./src/assets/images/pumpkin.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/pumpkin.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/pumpkin.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/pumpkin.jpg?");

/***/ }),

/***/ "./src/assets/images/table.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/table.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/table.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/table.jpg?");

/***/ }),

/***/ "./src/assets/images/tiles.jpg":
/*!*************************************!*\
  !*** ./src/assets/images/tiles.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/tiles.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/tiles.jpg?");

/***/ }),

/***/ "./src/assets/images/wood.jpg":
/*!************************************!*\
  !*** ./src/assets/images/wood.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/wood.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/wood.jpg?");

/***/ }),

/***/ "./src/assets/images/yogurt.jpg":
/*!**************************************!*\
  !*** ./src/assets/images/yogurt.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"../images/yogurt.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/yogurt.jpg?");

/***/ }),

/***/ "./src/assets/styles/app.scss":
/*!************************************!*\
  !*** ./src/assets/styles/app.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/assets/styles/app.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/app.scss */ \"./src/assets/styles/app.scss\");\n/* harmony import */ var _assets_styles_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_app_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_images_Sliced_Bread_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/Sliced_Bread.jpg */ \"./src/assets/images/Sliced_Bread.jpg\");\n/* harmony import */ var _assets_images_Pineapple_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/Pineapple.jpg */ \"./src/assets/images/Pineapple.jpg\");\n/* harmony import */ var _assets_images_Marble_Surface_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/Marble_Surface.jpg */ \"./src/assets/images/Marble_Surface.jpg\");\n/* harmony import */ var _assets_images_logoresized_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/logoresized.png */ \"./src/assets/images/logoresized.png\");\n/* harmony import */ var _assets_images_Facebook_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/Facebook.png */ \"./src/assets/images/Facebook.png\");\n/* harmony import */ var _assets_images_Instagram_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/Instagram.png */ \"./src/assets/images/Instagram.png\");\n/* harmony import */ var _assets_images_Pinterest_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/Pinterest.png */ \"./src/assets/images/Pinterest.png\");\n/* harmony import */ var _assets_images_press_white_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/images/press-white.png */ \"./src/assets/images/press-white.png\");\n/* harmony import */ var _assets_images_commercial_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/images/commercial.png */ \"./src/assets/images/commercial.png\");\n/* harmony import */ var _assets_images_event_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/images/event.png */ \"./src/assets/images/event.png\");\n/* harmony import */ var _assets_images_cookies_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/images/cookies.jpg */ \"./src/assets/images/cookies.jpg\");\n/* harmony import */ var _assets_images_yogurt_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/images/yogurt.jpg */ \"./src/assets/images/yogurt.jpg\");\n/* harmony import */ var _assets_images_table_jpg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/images/table.jpg */ \"./src/assets/images/table.jpg\");\n/* harmony import */ var _assets_images_pumpkin_jpg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/images/pumpkin.jpg */ \"./src/assets/images/pumpkin.jpg\");\n/* harmony import */ var _assets_images_pancakes_jpg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/images/pancakes.jpg */ \"./src/assets/images/pancakes.jpg\");\n/* harmony import */ var _assets_images_breakfast_jpg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/images/breakfast.jpg */ \"./src/assets/images/breakfast.jpg\");\n/* harmony import */ var _assets_images_cookies_background_jpg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/images/cookies-background.jpg */ \"./src/assets/images/cookies-background.jpg\");\n/* harmony import */ var _assets_images_tiles_jpg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/images/tiles.jpg */ \"./src/assets/images/tiles.jpg\");\n/* harmony import */ var _assets_images_wood_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/images/wood.jpg */ \"./src/assets/images/wood.jpg\");\n/* harmony import */ var _assets_images_couple_jpg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./assets/images/couple.jpg */ \"./src/assets/images/couple.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });