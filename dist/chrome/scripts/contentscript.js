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

	module.exports = __webpack_require__(5);


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
	      console.log('Done');
	    }
	  }]);
	
	  return WikipediaAugmentator;
	}();
	
	module.exports = WikipediaAugmentator;

/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	console.log('\'Allo \'Allo! Content script');
	
	var WikipediaAugmentator = __webpack_require__(1);
	
	console.log('Hey');
	
	var wikipediaAugmentator = new WikipediaAugmentator();
	
	wikipediaAugmentator.init();

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDQzMDI2YTM1YjRkYzVmMGFkZmU/Nzc1NSoiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvV2lraXBlZGlhQXVnbWVudGF0b3IuanM/N2U3OSIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9jb250ZW50c2NyaXB0LmpzIl0sIm5hbWVzIjpbIldpa2lwZWRpYUF1Z21lbnRhdG9yIiwiZGJwZWRpYVByZWZpeCIsInVybFBhcnRzIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic3BsaXQiLCJhcnRpY2xlSWQiLCJsZW5ndGgiLCJoZWFkaW5nIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZGJwZWRpYUxpbmsiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwidGFyZ2V0IiwiaW5uZXJIVE1MIiwib3V0ZXJIVE1MIiwiY29uc29sZSIsImxvZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJyZXF1aXJlIiwid2lraXBlZGlhQXVnbWVudGF0b3IiLCJpbml0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0N0Q01BLG9CO0FBQ0osbUNBQWE7QUFBQTtBQUVaOzs7OzRCQUVLO0FBQ0osV0FBSUMsZ0JBQWdCLDBCQUFwQjtBQUNBLFdBQUlDLFdBQVdDLE9BQU9DLFFBQVAsQ0FBZ0JDLElBQWhCLENBQXFCQyxLQUFyQixDQUEyQixHQUEzQixDQUFmO0FBQ0EsV0FBSUMsWUFBWUwsU0FBU0EsU0FBU00sTUFBVCxHQUFpQixDQUExQixDQUFoQjtBQUNBLFdBQUlDLFVBQVVDLFNBQVNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBZDtBQUNBLFdBQUlDLGNBQWNGLFNBQVNHLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBbEI7QUFDQUQsbUJBQVlQLElBQVosR0FBbUJKLGdCQUFjTSxTQUFqQztBQUNBSyxtQkFBWUUsU0FBWixHQUF3QkwsUUFBUUssU0FBaEM7QUFDQUYsbUJBQVlHLE1BQVosR0FBcUIsUUFBckI7QUFDQU4sZUFBUU8sU0FBUixHQUFvQkosWUFBWUssU0FBaEM7QUFDQUMsZUFBUUMsR0FBUixDQUFZLE1BQVo7QUFDRDs7Ozs7O0FBR0hDLFFBQU9DLE9BQVAsR0FBaUJyQixvQkFBakIsQzs7Ozs7Ozs7Ozs7QUNuQkFrQixTQUFRQyxHQUFSLENBQVksK0JBQVo7O0FBRUEsS0FBTW5CLHVCQUF1QixtQkFBQXNCLENBQVEsQ0FBUixDQUE3Qjs7QUFFQUosU0FBUUMsR0FBUixDQUFZLEtBQVo7O0FBRUEsS0FBSUksdUJBQXVCLElBQUl2QixvQkFBSixFQUEzQjs7QUFFQXVCLHNCQUFxQkMsSUFBckIsRyIsImZpbGUiOiJjb250ZW50c2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgNDQzMDI2YTM1YjRkYzVmMGFkZmUiLCJjbGFzcyBXaWtpcGVkaWFBdWdtZW50YXRvcntcbiAgY29uc3RydWN0b3IoKXtcblxuICB9XG5cbiAgaW5pdCgpe1xuICAgIGxldCBkYnBlZGlhUHJlZml4ID0gJ2h0dHA6Ly9kYnBlZGlhLm9yZy9wYWdlLyc7XG4gICAgbGV0IHVybFBhcnRzID0gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIvXCIpO1xuICAgIGxldCBhcnRpY2xlSWQgPSB1cmxQYXJ0c1t1cmxQYXJ0cy5sZW5ndGggLTFdO1xuICAgIGxldCBoZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpcnN0SGVhZGluZycpO1xuICAgIGxldCBkYnBlZGlhTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBkYnBlZGlhTGluay5ocmVmID0gZGJwZWRpYVByZWZpeCthcnRpY2xlSWQ7XG4gICAgZGJwZWRpYUxpbmsuaW5uZXJUZXh0ID0gaGVhZGluZy5pbm5lclRleHQ7XG4gICAgZGJwZWRpYUxpbmsudGFyZ2V0ID0gJ19ibGFuayc7XG4gICAgaGVhZGluZy5pbm5lckhUTUwgPSBkYnBlZGlhTGluay5vdXRlckhUTUw7XG4gICAgY29uc29sZS5sb2coJ0RvbmUnKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFdpa2lwZWRpYUF1Z21lbnRhdG9yO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NjcmlwdHMvV2lraXBlZGlhQXVnbWVudGF0b3IuanMiLCJjb25zb2xlLmxvZygnXFwnQWxsbyBcXCdBbGxvISBDb250ZW50IHNjcmlwdCcpO1xuXG5jb25zdCBXaWtpcGVkaWFBdWdtZW50YXRvciA9IHJlcXVpcmUoJy4vV2lraXBlZGlhQXVnbWVudGF0b3InKTtcblxuY29uc29sZS5sb2coJ0hleScpO1xuXG5sZXQgd2lraXBlZGlhQXVnbWVudGF0b3IgPSBuZXcgV2lraXBlZGlhQXVnbWVudGF0b3IoKTtcblxud2lraXBlZGlhQXVnbWVudGF0b3IuaW5pdCgpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NjcmlwdHMvY29udGVudHNjcmlwdC5qcyJdLCJzb3VyY2VSb290IjoiIn0=