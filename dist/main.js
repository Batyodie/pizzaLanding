/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors~main"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/styles.css */ \"./styles/styles.css\");\n/* harmony import */ var _styles_styles_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_styles_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _js_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/component */ \"./js/component.js\");\n/* harmony import */ var _js_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_component__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _js_gamburgerNav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/gamburgerNav */ \"./js/gamburgerNav.js\");\n/* harmony import */ var _js_gamburgerNav__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_gamburgerNav__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _js_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/validation */ \"./js/validation.js\");\n\n\n\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/component.js":
/*!*************************!*\
  !*** ./js/component.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var anchors = document.querySelectorAll('a[href*=\"#\"]');\nanchors.forEach(function (anchor) {\n  anchor.addEventListener('click', function (e) {\n    e.preventDefault();\n    var blockID = anchor.getAttribute('href').substr(1);\n    document.getElementById(blockID).scrollIntoView({\n      behavior: 'smooth',\n      block: 'end'\n    }); // window.scrollBy(0, -10)\n  });\n});\n\n//# sourceURL=webpack:///./js/component.js?");

/***/ }),

/***/ "./js/gamburgerNav.js":
/*!****************************!*\
  !*** ./js/gamburgerNav.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var close = document.querySelector('.nav-close-icon');\nvar open = document.querySelector('.button-gamburger');\nvar menu = document.querySelector('.nav-main');\nvar navbar = document.getElementById('navbar-icon1');\nvar sticky = navbar.offsetTop;\nclose.addEventListener('click', function () {\n  menu.classList.toggle('close');\n  open.classList.toggle('nodisplay');\n  navbar.style.display = 'none';\n});\nopen.addEventListener('click', function () {\n  menu.classList.toggle('close');\n  open.classList.toggle('nodisplay');\n  navbar.style.display = 'none';\n});\n\n//# sourceURL=webpack:///./js/gamburgerNav.js?");

/***/ }),

/***/ "./js/modal.js":
/*!*********************!*\
  !*** ./js/modal.js ***!
  \*********************/
/*! exports provided: modal, $ */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"modal\", function() { return modal; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"$\", function() { return $; });\nvar $ = {};\nwindow.$ = $;\n\nfunction _createModal(options) {\n  var DEFAULT_WIDTH = '400px';\n  var DEFAULT_HEIGHT = '550px';\n  var modal = document.createElement('div');\n  modal.classList.add('modal');\n  modal.insertAdjacentHTML('afterbegin', \"\\n    <div class=\\\"modal-overlay\\\" data-close=\\\"true\\\">\\n      <div class=\\\"main-contact-inner-right-modal\\\" style=\\\"width: \".concat(options.width || DEFAULT_WIDTH, \"; height:\").concat(options.height || DEFAULT_HEIGHT, \"\\\" >\\n            \\n        <div class=\\\"inner-right-form-modal\\\" style=\\\"height: \").concat(options.height || DEFAULT_HEIGHT, \"; \\\">\\n        \\n          <form id=\\\"myForm\\\" class=\\\"inner-form-modal\\\" style=\\\"height: 378px;\\\" >\\n         \\n         \").concat(options.content || '', \"\\n        </form>\\n        </div>\\n      </div>\\n  </div>\\n  \"));\n  document.body.appendChild(modal);\n  return modal;\n}\n\n$.modal = function (options) {\n  var ANIMATION_SPEED = 200;\n\n  var $modal = _createModal(options);\n\n  var closing = false;\n  var destroyed = false;\n  var modal = {\n    open: function open() {\n      if (destroyed) {\n        return console.log('modal is destroyed');\n      }\n\n      !closing && $modal.classList.add('open');\n    },\n    close: function close() {\n      closing = true;\n      $modal.classList.remove('open');\n      $modal.classList.add('hide');\n      setTimeout(function () {\n        $modal.classList.remove('hide');\n        closing = false;\n      }, ANIMATION_SPEED);\n    }\n  };\n\n  var listener = function listener(event) {\n    if (event.target.dataset.close) {\n      modal.close();\n    }\n  };\n\n  $modal.addEventListener('click', listener);\n  return Object.assign(modal, {\n    destroy: function destroy() {\n      $modal.parentNode.removeChild($modal);\n      $modal.removeEventListener('click', listener);\n      destroyed = true;\n    }\n  });\n};\n\nvar modal = $.modal({\n  title: 'message',\n  closable: true,\n  content: \"\",\n  width: '428px'\n});\ndocument.addEventListener('click', function (event) {\n  event.preventDefault();\n  var btnType = event.target.dataset.btn;\n\n  if (btnType === 'form') {\n    modal.open();\n  }\n});\n\n\n//# sourceURL=webpack:///./js/modal.js?");

/***/ }),

/***/ "./js/validation.js":
/*!**************************!*\
  !*** ./js/validation.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./component.js */ \"./js/component.js\");\n/* harmony import */ var _component_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_component_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal.js */ \"./js/modal.js\");\n\n\nvar buttonSubmit = document.querySelector(\".button__order\");\nvar Eat = document.querySelector(\".input-group__input\");\nvar Number = document.querySelector(\".input-group__input\"); // const inputEmail = document.querySelector(\".form-email-modal\")\n\nbuttonSubmit.addEventListener(\"click\", function (event) {\n  var eat = document.querySelector(\".hidden-error-block2\");\n  var number = document.querySelector(\".hidden-error-block3\");\n  var flag = false;\n  event.preventDefault();\n\n  if (Eat.value.length == '') {\n    eat.innerHTML = \"Это поле нужно заполнить\";\n    flag = false;\n  } else {\n    eat.innerHTML = \"\";\n    flag = true;\n  }\n\n  if (Number.value.length == '') {\n    number.innerHTML = \"Это поле нужно заполнить\";\n    flag = false;\n  } else {\n    number.innerHTML = \"\";\n    flag = true;\n  }\n\n  if (flag) {\n    var popUP = _modal_js__WEBPACK_IMPORTED_MODULE_1__[\"$\"].modal({\n      title: 'message',\n      closable: true,\n      content: \"\\n    <div class=\\\"pop-up\\\">\\n    <div class=\\\"wind-close\\\">\\n    <div class=\\\"closing\\\" data-btn=\\\"out\\\">&#10006;</div>\\n</div>\\n        <div class=\\\"pop-up__header\\\">\\n            \\n            <svg  class=\\\"pop-up__image\\\" alt=\\\"completed\\\" xmlns=\\\"http://www.w3.org/2000/svg\\\" xmlns:xlink=\\\"http://www.w3.org/1999/xlink\\\" enable-background=\\\"new 0 0 56.693 56.693\\\" height=\\\"75.693px\\\" id=\\\"Layer_1\\\" version=\\\"1.1\\\" viewBox=\\\"0 0 56.693 56.693\\\" width=\\\"75.693px\\\" xml:space=\\\"preserve\\\"><path class=\\\"path-color\\\" d=\\\"M45.922,11.767c-9.709-9.707-25.443-9.705-35.15,0c-9.709,9.711-9.711,25.447-0.002,35.155 c9.707,9.709,25.447,9.711,35.156,0.002C55.633,37.219,55.629,21.476,45.922,11.767z M40.409,21.747L26.316,40.201 c-0.452,0.591-1.137,0.941-1.878,0.956h-0.005h-0.052c-0.721,0-1.398-0.314-1.858-0.863l-6.038-7.139 c-0.419-0.494-0.619-1.125-0.566-1.773c0.055-0.648,0.358-1.236,0.853-1.656c0.957-0.811,2.625-0.668,3.432,0.287l4.083,4.826 l12.253-16.047c0.762-0.996,2.411-1.221,3.412-0.458c0.517,0.395,0.849,0.967,0.935,1.612 C40.973,20.591,40.804,21.231,40.409,21.747z\\\"></path></svg>\\n        </div>\\n        <div class=\\\"pop-up__body\\\">\\n            <p class=\\\"title\\\">\\u0421\\u043F\\u0430\\u0441\\u0438\\u0431\\u043E!</p>\\n            <p class=\\\"sub-title\\\">\\n            \\u0412\\u0430\\u0448\\u0430 \\u0437\\u0430\\u044F\\u0432\\u043A\\u0430 \\u043F\\u0440\\u0438\\u043D\\u044F\\u0442\\u0430.\\n            \\u0412 \\u0431\\u043B\\u0438\\u0436\\u0430\\u0439\\u0448\\u0435\\u0435 \\u0432\\u0440\\u0435\\u043C\\u044F \\u043C\\u044B \\u0441 \\u0432\\u0430\\u043C\\u0438 \\u0441\\u0432\\u044F\\u0436\\u0435\\u043C\\u0441\\u044F!\\n            </p>\\n        </div>\\n        <div class=\\\"pop-up__footer\\\">\\n            <button class=\\\"pop-up__button\\\" data-btn=\\\"out\\\">\\n            <span class=\\\"pop-up__button-body\\\">\\u041E\\u041A</span>\\n            </button>\\n        </div>\\n    \\n    </div>\\n\\n       \",\n      width: '400px',\n      height: '378px'\n    });\n    document.addEventListener('click', function (event) {\n      event.preventDefault();\n      var btnType = event.target.dataset.btn;\n\n      if (btnType === 'submit') {\n        _modal_js__WEBPACK_IMPORTED_MODULE_1__[\"modal\"].close();\n        popUP.open();\n      }\n    });\n    document.addEventListener('click', function (event) {\n      event.preventDefault();\n      var btnType = event.target.dataset.btn;\n\n      if (btnType === 'out') {\n        popUP.close();\n      }\n    });\n    document.addEventListener('click', function (event) {\n      event.preventDefault();\n      var btnType = event.target.dataset.btn;\n\n      if (btnType === 'out') {\n        popUP.close();\n      }\n    });\n  }\n});\n\n//# sourceURL=webpack:///./js/validation.js?");

/***/ }),

/***/ "./styles/styles.css":
/*!***************************!*\
  !*** ./styles/styles.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n    if(false) { var cssReload; }\n  \n\n//# sourceURL=webpack:///./styles/styles.css?");

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi @babel/polyfill ./index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/polyfill */\"../node_modules/@babel/polyfill/lib/index.js\");\nmodule.exports = __webpack_require__(/*! ./index.js */\"./index.js\");\n\n\n//# sourceURL=webpack:///multi_@babel/polyfill_./index.js?");

/***/ })

/******/ });