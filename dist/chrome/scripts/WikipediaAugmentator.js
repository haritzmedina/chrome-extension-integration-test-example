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

	module.exports = __webpack_require__(1);


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

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNDQzMDI2YTM1YjRkYzVmMGFkZmUiLCJ3ZWJwYWNrOi8vLy4vYXBwL3NjcmlwdHMvV2lraXBlZGlhQXVnbWVudGF0b3IuanMiXSwibmFtZXMiOlsiV2lraXBlZGlhQXVnbWVudGF0b3IiLCJkYnBlZGlhUHJlZml4IiwidXJsUGFydHMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzcGxpdCIsImFydGljbGVJZCIsImxlbmd0aCIsImhlYWRpbmciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkYnBlZGlhTGluayIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJ0YXJnZXQiLCJpbm5lckhUTUwiLCJvdXRlckhUTUwiLCJjb25zb2xlIiwibG9nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDdENNQSxvQjtBQUNKLG1DQUFhO0FBQUE7QUFFWjs7Ozs0QkFFSztBQUNKLFdBQUlDLGdCQUFnQiwwQkFBcEI7QUFDQSxXQUFJQyxXQUFXQyxPQUFPQyxRQUFQLENBQWdCQyxJQUFoQixDQUFxQkMsS0FBckIsQ0FBMkIsR0FBM0IsQ0FBZjtBQUNBLFdBQUlDLFlBQVlMLFNBQVNBLFNBQVNNLE1BQVQsR0FBaUIsQ0FBMUIsQ0FBaEI7QUFDQSxXQUFJQyxVQUFVQyxTQUFTQyxhQUFULENBQXVCLGVBQXZCLENBQWQ7QUFDQSxXQUFJQyxjQUFjRixTQUFTRyxhQUFULENBQXVCLEdBQXZCLENBQWxCO0FBQ0FELG1CQUFZUCxJQUFaLEdBQW1CSixnQkFBY00sU0FBakM7QUFDQUssbUJBQVlFLFNBQVosR0FBd0JMLFFBQVFLLFNBQWhDO0FBQ0FGLG1CQUFZRyxNQUFaLEdBQXFCLFFBQXJCO0FBQ0FOLGVBQVFPLFNBQVIsR0FBb0JKLFlBQVlLLFNBQWhDO0FBQ0FDLGVBQVFDLEdBQVIsQ0FBWSxNQUFaO0FBQ0Q7Ozs7OztBQUdIQyxRQUFPQyxPQUFQLEdBQWlCckIsb0JBQWpCLEMiLCJmaWxlIjoiV2lraXBlZGlhQXVnbWVudGF0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA0NDMwMjZhMzViNGRjNWYwYWRmZSIsImNsYXNzIFdpa2lwZWRpYUF1Z21lbnRhdG9ye1xuICBjb25zdHJ1Y3Rvcigpe1xuXG4gIH1cblxuICBpbml0KCl7XG4gICAgbGV0IGRicGVkaWFQcmVmaXggPSAnaHR0cDovL2RicGVkaWEub3JnL3BhZ2UvJztcbiAgICBsZXQgdXJsUGFydHMgPSB3aW5kb3cubG9jYXRpb24uaHJlZi5zcGxpdChcIi9cIik7XG4gICAgbGV0IGFydGljbGVJZCA9IHVybFBhcnRzW3VybFBhcnRzLmxlbmd0aCAtMV07XG4gICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmlyc3RIZWFkaW5nJyk7XG4gICAgbGV0IGRicGVkaWFMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGRicGVkaWFMaW5rLmhyZWYgPSBkYnBlZGlhUHJlZml4K2FydGljbGVJZDtcbiAgICBkYnBlZGlhTGluay5pbm5lclRleHQgPSBoZWFkaW5nLmlubmVyVGV4dDtcbiAgICBkYnBlZGlhTGluay50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBoZWFkaW5nLmlubmVySFRNTCA9IGRicGVkaWFMaW5rLm91dGVySFRNTDtcbiAgICBjb25zb2xlLmxvZygnRG9uZScpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2lraXBlZGlhQXVnbWVudGF0b3I7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvc2NyaXB0cy9XaWtpcGVkaWFBdWdtZW50YXRvci5qcyJdLCJzb3VyY2VSb290IjoiIn0=