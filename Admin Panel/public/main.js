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

/***/ "./src/assets/images/all_inclusive-24px.svg":
/*!**************************************************!*\
  !*** ./src/assets/images/all_inclusive-24px.svg ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./images/all_inclusive-24px.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/all_inclusive-24px.svg?");

/***/ }),

/***/ "./src/assets/images/colorize-24px.svg":
/*!*********************************************!*\
  !*** ./src/assets/images/colorize-24px.svg ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./images/colorize-24px.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/colorize-24px.svg?");

/***/ }),

/***/ "./src/assets/images/create-24px.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/create-24px.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./images/create-24px.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/create-24px.svg?");

/***/ }),

/***/ "./src/assets/images/crop_free-24px.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/crop_free-24px.svg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./images/crop_free-24px.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/crop_free-24px.svg?");

/***/ }),

/***/ "./src/assets/images/email-24px.svg":
/*!******************************************!*\
  !*** ./src/assets/images/email-24px.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./images/email-24px.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/email-24px.svg?");

/***/ }),

/***/ "./src/assets/images/emoji_objects-24px.svg":
/*!**************************************************!*\
  !*** ./src/assets/images/emoji_objects-24px.svg ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./images/emoji_objects-24px.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/emoji_objects-24px.svg?");

/***/ }),

/***/ "./src/assets/images/file_copy-24px.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/file_copy-24px.svg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./images/file_copy-24px.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/file_copy-24px.svg?");

/***/ }),

/***/ "./src/assets/images/fireplace-24px.svg":
/*!**********************************************!*\
  !*** ./src/assets/images/fireplace-24px.svg ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./images/fireplace-24px.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/fireplace-24px.svg?");

/***/ }),

/***/ "./src/assets/images/format_list_bulleted-24px.svg":
/*!*********************************************************!*\
  !*** ./src/assets/images/format_list_bulleted-24px.svg ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./images/format_list_bulleted-24px.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/format_list_bulleted-24px.svg?");

/***/ }),

/***/ "./src/assets/images/home-24px.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/home-24px.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./images/home-24px.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/home-24px.svg?");

/***/ }),

/***/ "./src/assets/images/logo.svg":
/*!************************************!*\
  !*** ./src/assets/images/logo.svg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./images/logo.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/logo.svg?");

/***/ }),

/***/ "./src/assets/images/map-24px.svg":
/*!****************************************!*\
  !*** ./src/assets/images/map-24px.svg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./images/map-24px.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/map-24px.svg?");

/***/ }),

/***/ "./src/assets/images/menu-24px.svg":
/*!*****************************************!*\
  !*** ./src/assets/images/menu-24px.svg ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./images/menu-24px.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/menu-24px.svg?");

/***/ }),

/***/ "./src/assets/images/more_horiz-24px.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/more_horiz-24px.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./images/more_horiz-24px.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/more_horiz-24px.svg?");

/***/ }),

/***/ "./src/assets/images/notifications-24px.svg":
/*!**************************************************!*\
  !*** ./src/assets/images/notifications-24px.svg ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./images/notifications-24px.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/notifications-24px.svg?");

/***/ }),

/***/ "./src/assets/images/pages-24px.svg":
/*!******************************************!*\
  !*** ./src/assets/images/pages-24px.svg ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./images/pages-24px.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/pages-24px.svg?");

/***/ }),

/***/ "./src/assets/images/portret.jpg":
/*!***************************************!*\
  !*** ./src/assets/images/portret.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./images/portret.jpg\");\n\n//# sourceURL=webpack:///./src/assets/images/portret.jpg?");

/***/ }),

/***/ "./src/assets/images/search-24px.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/search-24px.svg ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./images/search-24px.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/search-24px.svg?");

/***/ }),

/***/ "./src/assets/images/show_chart-24px.svg":
/*!***********************************************!*\
  !*** ./src/assets/images/show_chart-24px.svg ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"./images/show_chart-24px.svg\");\n\n//# sourceURL=webpack:///./src/assets/images/show_chart-24px.svg?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/app.scss */ \"./src/assets/styles/app.scss\");\n/* harmony import */ var _assets_styles_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_app_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _assets_images_logo_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/images/logo.svg */ \"./src/assets/images/logo.svg\");\n/* harmony import */ var _assets_images_menu_24px_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/images/menu-24px.svg */ \"./src/assets/images/menu-24px.svg\");\n/* harmony import */ var _assets_images_search_24px_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/images/search-24px.svg */ \"./src/assets/images/search-24px.svg\");\n/* harmony import */ var _assets_images_home_24px_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/images/home-24px.svg */ \"./src/assets/images/home-24px.svg\");\n/* harmony import */ var _assets_images_colorize_24px_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/images/colorize-24px.svg */ \"./src/assets/images/colorize-24px.svg\");\n/* harmony import */ var _assets_images_all_inclusive_24px_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/images/all_inclusive-24px.svg */ \"./src/assets/images/all_inclusive-24px.svg\");\n/* harmony import */ var _assets_images_emoji_objects_24px_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./assets/images/emoji_objects-24px.svg */ \"./src/assets/images/emoji_objects-24px.svg\");\n/* harmony import */ var _assets_images_fireplace_24px_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./assets/images/fireplace-24px.svg */ \"./src/assets/images/fireplace-24px.svg\");\n/* harmony import */ var _assets_images_create_24px_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./assets/images/create-24px.svg */ \"./src/assets/images/create-24px.svg\");\n/* harmony import */ var _assets_images_format_list_bulleted_24px_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./assets/images/format_list_bulleted-24px.svg */ \"./src/assets/images/format_list_bulleted-24px.svg\");\n/* harmony import */ var _assets_images_show_chart_24px_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./assets/images/show_chart-24px.svg */ \"./src/assets/images/show_chart-24px.svg\");\n/* harmony import */ var _assets_images_map_24px_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./assets/images/map-24px.svg */ \"./src/assets/images/map-24px.svg\");\n/* harmony import */ var _assets_images_email_24px_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./assets/images/email-24px.svg */ \"./src/assets/images/email-24px.svg\");\n/* harmony import */ var _assets_images_file_copy_24px_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./assets/images/file_copy-24px.svg */ \"./src/assets/images/file_copy-24px.svg\");\n/* harmony import */ var _assets_images_pages_24px_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./assets/images/pages-24px.svg */ \"./src/assets/images/pages-24px.svg\");\n/* harmony import */ var _assets_images_crop_free_24px_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./assets/images/crop_free-24px.svg */ \"./src/assets/images/crop_free-24px.svg\");\n/* harmony import */ var _assets_images_more_horiz_24px_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./assets/images/more_horiz-24px.svg */ \"./src/assets/images/more_horiz-24px.svg\");\n/* harmony import */ var _assets_images_notifications_24px_svg__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./assets/images/notifications-24px.svg */ \"./src/assets/images/notifications-24px.svg\");\n/* harmony import */ var _assets_images_portret_jpg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./assets/images/portret.jpg */ \"./src/assets/images/portret.jpg\");\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });