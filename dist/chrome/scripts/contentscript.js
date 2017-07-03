/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var WikipediaAugmentator = function () {
	  function WikipediaAugmentator() {
	    _classCallCheck(this, WikipediaAugmentator);
	  }
	
	  _createClass(WikipediaAugmentator, [{
	    key: 'init',
	    value: function init() {
	      var dbpediaPrefix = 'http://dbpedia.org/page/';
	      var urlParts = window.location.href.split("/");
	      var articleId = urlParts[urlParts.length - 1];
	      var heading = document.querySelector('#firstHeading');
	      var dbpediaLink = document.createElement('a');
	      dbpediaLink.href = dbpediaPrefix + articleId;
	      dbpediaLink.innerText = heading.innerText;
	      dbpediaLink.target = '_blank';
	      heading.innerHTML = dbpediaLink.outerHTML;
	    }
	  }]);
	
	  return WikipediaAugmentator;
	}();
	
	module.exports = WikipediaAugmentator;

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	console.log('\'Allo \'Allo! Content script');
	
	var WikipediaAugmentator = __webpack_require__(1);
	
	console.log('Hey');
	
	var wikipediaAugmentator = new WikipediaAugmentator();
	
	wikipediaAugmentator.init();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjkxOGU4Mjk2MGMxMjQyODhiYmM/MzcwNSoiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvV2lraXBlZGlhQXVnbWVudGF0b3IuanM/N2U3OSIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9jb250ZW50c2NyaXB0LmpzIl0sIm5hbWVzIjpbIldpa2lwZWRpYUF1Z21lbnRhdG9yIiwiZGJwZWRpYVByZWZpeCIsInVybFBhcnRzIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3BsaXQiLCJhcnRpY2xlSWQiLCJsZW5ndGgiLCJoZWFkaW5nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGJwZWRpYUxpbmsiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwidGFyZ2V0IiwiaW5uZXJIVE1MIiwib3V0ZXJIVE1MIiwibW9kdWxlIiwiZXhwb3J0cyIsImNvbnNvbGUiLCJsb2ciLCJyZXF1aXJlIiwid2lraXBlZGlhQXVnbWVudGF0b3IiLCJpbml0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0N0Q01BLG9CO0FBQ0osbUNBQWE7QUFBQTtBQUVaOzs7OzRCQUVLO0FBQ0osV0FBSUMsZ0JBQWdCLDBCQUFwQjtBQUNBLFdBQUlDLFdBQVdDLE9BQU9DLFFBQVAsQ0FBZ0JDLElBQWhCLENBQXFCQyxLQUFyQixDQUEyQixHQUEzQixDQUFmO0FBQ0EsV0FBSUMsWUFBWUwsU0FBU0EsU0FBU00sTUFBVCxHQUFpQixDQUExQixDQUFoQjtBQUNBLFdBQUlDLFVBQVVDLFNBQVNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBZDtBQUNBLFdBQUlDLGNBQWNGLFNBQVNHLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBbEI7QUFDQUQsbUJBQVlQLElBQVosR0FBbUJKLGdCQUFjTSxTQUFqQztBQUNBSyxtQkFBWUUsU0FBWixHQUF3QkwsUUFBUUssU0FBaEM7QUFDQUYsbUJBQVlHLE1BQVosR0FBcUIsUUFBckI7QUFDQU4sZUFBUU8sU0FBUixHQUFvQkosWUFBWUssU0FBaEM7QUFDRDs7Ozs7O0FBR0hDLFFBQU9DLE9BQVAsR0FBaUJuQixvQkFBakIsQzs7Ozs7Ozs7Ozs7O0FDbEJBb0IsU0FBUUMsR0FBUixDQUFZLCtCQUFaOztBQUVBLEtBQU1yQix1QkFBdUIsbUJBQUFzQixDQUFRLENBQVIsQ0FBN0I7O0FBRUFGLFNBQVFDLEdBQVIsQ0FBWSxLQUFaOztBQUVBLEtBQUlFLHVCQUF1QixJQUFJdkIsb0JBQUosRUFBM0I7O0FBRUF1QixzQkFBcUJDLElBQXJCLEciLCJmaWxlIjoiY29udGVudHNjcmlwdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGY5MThlODI5NjBjMTI0Mjg4YmJjIiwiY2xhc3MgV2lraXBlZGlhQXVnbWVudGF0b3J7XG4gIGNvbnN0cnVjdG9yKCl7XG5cbiAgfVxuXG4gIGluaXQoKXtcbiAgICBsZXQgZGJwZWRpYVByZWZpeCA9ICdodHRwOi8vZGJwZWRpYS5vcmcvcGFnZS8nO1xuICAgIGxldCB1cmxQYXJ0cyA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KFwiL1wiKTtcbiAgICBsZXQgYXJ0aWNsZUlkID0gdXJsUGFydHNbdXJsUGFydHMubGVuZ3RoIC0xXTtcbiAgICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaXJzdEhlYWRpbmcnKTtcbiAgICBsZXQgZGJwZWRpYUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZGJwZWRpYUxpbmsuaHJlZiA9IGRicGVkaWFQcmVmaXgrYXJ0aWNsZUlkO1xuICAgIGRicGVkaWFMaW5rLmlubmVyVGV4dCA9IGhlYWRpbmcuaW5uZXJUZXh0O1xuICAgIGRicGVkaWFMaW5rLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIGhlYWRpbmcuaW5uZXJIVE1MID0gZGJwZWRpYUxpbmsub3V0ZXJIVE1MO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2lraXBlZGlhQXVnbWVudGF0b3I7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2NyaXB0cy9XaWtpcGVkaWFBdWdtZW50YXRvci5qcyIsImNvbnNvbGUubG9nKCdcXCdBbGxvIFxcJ0FsbG8hIENvbnRlbnQgc2NyaXB0Jyk7XG5cbmNvbnN0IFdpa2lwZWRpYUF1Z21lbnRhdG9yID0gcmVxdWlyZSgnLi9XaWtpcGVkaWFBdWdtZW50YXRvcicpO1xuXG5jb25zb2xlLmxvZygnSGV5Jyk7XG5cbmxldCB3aWtpcGVkaWFBdWdtZW50YXRvciA9IG5ldyBXaWtpcGVkaWFBdWdtZW50YXRvcigpO1xuXG53aWtpcGVkaWFBdWdtZW50YXRvci5pbml0KCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2NyaXB0cy9jb250ZW50c2NyaXB0LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==