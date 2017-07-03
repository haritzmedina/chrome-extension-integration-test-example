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

	module.exports = __webpack_require__(2);


/***/ }),
/* 1 */,
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';
	
	__webpack_require__(3);
	
	chrome.runtime.onInstalled.addListener(function (details) {
	  console.log('previousVersion', details.previousVersion);
	}); // Enable chromereload by uncommenting this line:
	
	
	console.log('\'Allo \'Allo! Event Page');

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {'use strict';
	
	var _chromereload = __webpack_require__(5);
	
	var _chromereload2 = _interopRequireDefault(_chromereload);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	if (process.env.NODE_ENV === 'development') {
	  new _chromereload2.default();
	}
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9kZXZvbmx5LmpzIl0sIm5hbWVzIjpbInByb2Nlc3MiLCJlbnYiLCJOT0RFX0VOViJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7Ozs7O0FBRUEsSUFBSUEsUUFBUUMsR0FBUixDQUFZQyxRQUFaLEtBQXlCLGFBQTdCLEVBQTRDO0FBQzFDO0FBQ0QiLCJmaWxlIjoiZGV2b25seS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDaHJvbWVSZWxvYWQgZnJvbSAnLi9jaHJvbWVyZWxvYWQuanMnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgbmV3IENocm9tZVJlbG9hZCgpO1xufVxuIl19
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	function defaultSetTimout() {
	    throw new Error('setTimeout has not been defined');
	}
	function defaultClearTimeout () {
	    throw new Error('clearTimeout has not been defined');
	}
	(function () {
	    try {
	        if (typeof setTimeout === 'function') {
	            cachedSetTimeout = setTimeout;
	        } else {
	            cachedSetTimeout = defaultSetTimout;
	        }
	    } catch (e) {
	        cachedSetTimeout = defaultSetTimout;
	    }
	    try {
	        if (typeof clearTimeout === 'function') {
	            cachedClearTimeout = clearTimeout;
	        } else {
	            cachedClearTimeout = defaultClearTimeout;
	        }
	    } catch (e) {
	        cachedClearTimeout = defaultClearTimeout;
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    // if setTimeout wasn't available but was latter defined
	    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
	        cachedSetTimeout = setTimeout;
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    // if clearTimeout wasn't available but was latter defined
	    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
	        cachedClearTimeout = clearTimeout;
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	process.prependListener = noop;
	process.prependOnceListener = noop;
	
	process.listeners = function (name) { return [] }
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ }),
/* 5 */
/***/ (function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var ChromeReload = function () {
	  function ChromeReload() {
	    var args = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	    _classCallCheck(this, ChromeReload);
	
	    var _args$host = args.host;
	    var host = _args$host === undefined ? 'localhost' : _args$host;
	    var _args$port = args.port;
	    var port = _args$port === undefined ? 35729 : _args$port;
	    var _args$reconnectTime = args.reconnectTime;
	    var reconnectTime = _args$reconnectTime === undefined ? 3000 : _args$reconnectTime;
	    var _args$debug = args.debug;
	    var debug = _args$debug === undefined ? true : _args$debug;
	
	
	    this.host = host;
	    this.port = port;
	    this.reconnectTime = reconnectTime;
	    this.debug = debug;
	
	    this.connect = this.connect.bind(this);
	    this.onerror = this.onerror.bind(this);
	    this.onopen = this.onopen.bind(this);
	    this._onmessage = this._onmessage.bind(this);
	    this.onmessage = this.onmessage.bind(this);
	    this.onclose = this.onclose.bind(this);
	
	    this.state = {
	      connected: false,
	      connectionLost: false,
	      reloading: false
	    };
	
	    this.connect();
	  }
	
	  _createClass(ChromeReload, [{
	    key: 'connect',
	    value: function connect() {
	      this.connection = new WebSocket('ws://' + this.host + ':' + this.port + '/livereload');
	      this.connection.onopen = this.onopen;
	      this.connection.onmessage = this._onmessage;
	      this.connection.onerror = this.onerror;
	      this.connection.onclose = this.onclose;
	    }
	  }, {
	    key: 'onopen',
	    value: function onopen() {
	      this.log('Enabled');
	      this.state.connected = true;
	    }
	  }, {
	    key: 'onerror',
	    value: function onerror(error) {
	      this.log('Connection error');
	      this.state.connected = false;
	      this.state.connectionLost = true;
	    }
	  }, {
	    key: '_onmessage',
	    value: function _onmessage(event) {
	      if (event.data) {
	        this.onmessage(JSON.parse(event.data));
	      }
	    }
	  }, {
	    key: 'onmessage',
	    value: function onmessage(_ref) {
	      var command = _ref.command;
	      var path = _ref.path;
	
	      var connectionLost = this.state.connectionLost;
	      var scriptreload = /\.js$/.test(path);
	
	      if (command === 'reload') {
	
	        if (connectionLost && !scriptreload) {
	          this.log('Waiting for scripts to be ready.');
	          return;
	        }
	
	        this.state.connectionLost = false;
	        this.reload();
	      }
	    }
	  }, {
	    key: 'onclose',
	    value: function onclose() {
	      this.log('Connection lost. Reconnecting in %ss', this.reconnectTime);
	      setTimeout(this.connect, this.reconnectTime);
	    }
	  }, {
	    key: 'reload',
	    value: function reload() {
	      if (this.state.reloading) {
	        return;
	      }
	      this.state.reloading = true;
	      this.log('Reloading ...');
	      if (chrome.runtime && chrome.runtime.reload) {
	        // If we are on a background page
	        // we should reload the entire runtime
	        chrome.runtime.reload();
	      } else {
	        // Sometimes we are on a different context
	        // for example a contentscript
	        // therefore we need to reload via
	        // window.location
	        window.location.reload();
	      }
	    }
	  }, {
	    key: 'log',
	    value: function log(message) {
	      if (this.debug) {
	        var _console;
	
	        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
	          args[_key - 1] = arguments[_key];
	        }
	
	        (_console = console).log.apply(_console, ['%cChromeReload: ' + message, 'color: gray;'].concat(args));
	      }
	    }
	  }]);
	
	  return ChromeReload;
	}();
	
	exports.default = ChromeReload;
	//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jaHJvbWVyZWxvYWQuanMiXSwibmFtZXMiOlsiQ2hyb21lUmVsb2FkIiwiYXJncyIsImhvc3QiLCJwb3J0IiwicmVjb25uZWN0VGltZSIsImRlYnVnIiwiY29ubmVjdCIsImJpbmQiLCJvbmVycm9yIiwib25vcGVuIiwiX29ubWVzc2FnZSIsIm9ubWVzc2FnZSIsIm9uY2xvc2UiLCJzdGF0ZSIsImNvbm5lY3RlZCIsImNvbm5lY3Rpb25Mb3N0IiwicmVsb2FkaW5nIiwiY29ubmVjdGlvbiIsIldlYlNvY2tldCIsImxvZyIsImVycm9yIiwiZXZlbnQiLCJkYXRhIiwiSlNPTiIsInBhcnNlIiwiY29tbWFuZCIsInBhdGgiLCJzY3JpcHRyZWxvYWQiLCJ0ZXN0IiwicmVsb2FkIiwic2V0VGltZW91dCIsImNocm9tZSIsInJ1bnRpbWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm1lc3NhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsWTtBQUNKLDBCQUF1QjtBQUFBLFFBQVhDLElBQVcseURBQUosRUFBSTs7QUFBQTs7QUFBQSxxQkFNakJBLElBTmlCLENBRW5CQyxJQUZtQjtBQUFBLFFBRW5CQSxJQUZtQiw4QkFFWixXQUZZO0FBQUEscUJBTWpCRCxJQU5pQixDQUduQkUsSUFIbUI7QUFBQSxRQUduQkEsSUFIbUIsOEJBR1osS0FIWTtBQUFBLDhCQU1qQkYsSUFOaUIsQ0FJbkJHLGFBSm1CO0FBQUEsUUFJbkJBLGFBSm1CLHVDQUlILElBSkc7QUFBQSxzQkFNakJILElBTmlCLENBS25CSSxLQUxtQjtBQUFBLFFBS25CQSxLQUxtQiwrQkFLWCxJQUxXOzs7QUFRckIsU0FBS0gsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQkEsYUFBckI7QUFDQSxTQUFLQyxLQUFMLEdBQWFBLEtBQWI7O0FBRUEsU0FBS0MsT0FBTCxHQUFlLEtBQUtBLE9BQUwsQ0FBYUMsSUFBYixDQUFrQixJ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Y0FDQztBQUFBOztBQUNiLDZCQUFRa0IsR0FBUix1Q0FBK0JnQixPQUEvQixFQUEwQyxjQUExQyxTQUE2RGxDLElBQTdEO0FBQ0Q7QUFDRjs7Ozs7O2tCQUdZRCxZIiwiZmlsZSI6ImNocm9tZXJlbG9hZC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENocm9tZVJlbG9hZCB7XG4gIGNvbnN0cnVjdG9yKGFyZ3MgPSB7fSkge1xuICAgIGNvbnN0IHtcbiAgICAgIGhvc3QgPSAnbG9jYWxob3N0JyxcbiAgICAgIHBvcnQgPSAzNTcyOSxcbiAgICAgIHJlY29ubmVjdFRpbWUgPSAzMDAwLFxuICAgICAgZGVidWcgPSB0cnVlXG4gICAgfSA9IGFyZ3M7XG5cbiAgICB0aGlzLmhvc3QgPSBob3N0O1xuICAgIHRoaXMucG9ydCA9IHBvcnQ7XG4gICAgdGhpcy5yZWNvbm5lY3RUaW1lID0gcmVjb25uZWN0VGltZTtcbiAgICB0aGlzLmRlYnVnID0gZGVidWc7XG5cbiAgICB0aGlzLmNvbm5lY3QgPSB0aGlzLmNvbm5lY3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9uZXJyb3IgPSB0aGlzLm9uZXJyb3IuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9ub3BlbiA9IHRoaXMub25vcGVuLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fb25tZXNzYWdlID0gdGhpcy5fb25tZXNzYWdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbm1lc3NhZ2UgPSB0aGlzLm9ubWVzc2FnZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25jbG9zZSA9IHRoaXMub25jbG9zZS5iaW5kKHRoaXMpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvbm5lY3RlZDogZmFsc2UsXG4gICAgICBjb25uZWN0aW9uTG9zdDogZmFsc2UsXG4gICAgICByZWxvYWRpbmc6IGZhbHNlXG4gICAgfTtcblxuICAgIHRoaXMuY29ubmVjdCgpO1xuICB9XG5cbiAgY29ubmVjdCgpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb24gPSBuZXcgV2ViU29ja2V0KGB3czovLyR7dGhpcy5ob3N0fToke3RoaXMucG9ydH0vbGl2ZXJlbG9hZGApO1xuICAgIHRoaXMuY29ubmVjdGlvbi5vbm9wZW4gPSB0aGlzLm9ub3BlbjtcbiAgICB0aGlzLmNvbm5lY3Rpb24ub25tZXNzYWdlID0gdGhpcy5fb25tZXNzYWdlO1xuICAgIHRoaXMuY29ubmVjdGlvbi5vbmVycm9yID0gdGhpcy5vbmVycm9yO1xuICAgIHRoaXMuY29ubmVjdGlvbi5vbmNsb3NlID0gdGhpcy5vbmNsb3NlO1xuICB9XG5cbiAgb25vcGVuKCkge1xuICAgIHRoaXMubG9nKCdFbmFibGVkJyk7XG4gICAgdGhpcy5zdGF0ZS5jb25uZWN0ZWQgPSB0cnVlO1xuICB9XG5cbiAgb25lcnJvcihlcnJvcikge1xuICAgIHRoaXMubG9nKCdDb25uZWN0aW9uIGVycm9yJyk7XG4gICAgdGhpcy5zdGF0ZS5jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLnN0YXRlLmNvbm5lY3Rpb25Mb3N0ID0gdHJ1ZTtcbiAgfVxuXG4gIF9vbm1lc3NhZ2UoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuZGF0YSkge1xuICAgICAgdGhpcy5vbm1lc3NhZ2UoXG4gICAgICAgIEpTT04ucGFyc2UoZXZlbnQuZGF0YSlcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgb25tZXNzYWdlKHtcbiAgICBjb21tYW5kLFxuICAgIHBhdGhcbiAgfSkge1xuICAgIGNvbnN0IGNvbm5lY3Rpb25Mb3N0ID0gdGhpcy5zdGF0ZS5jb25uZWN0aW9uTG9zdDtcbiAgICBjb25zdCBzY3JpcHRyZWxvYWQgPSAvXFwuanMkLy50ZXN0KHBhdGgpO1xuXG4gICAgaWYgKGNvbW1hbmQgPT09ICdyZWxvYWQnKSB7XG5cbiAgICAgIGlmIChjb25uZWN0aW9uTG9zdCAmJiAhc2NyaXB0cmVsb2FkKSB7XG4gICAgICAgIHRoaXMubG9nKCdXYWl0aW5nIGZvciBzY3JpcHRzIHRvIGJlIHJlYWR5LicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc3RhdGUuY29ubmVjdGlvbkxvc3QgPSBmYWxzZTtcbiAgICAgIHRoaXMucmVsb2FkKCk7XG4gICAgfVxuICB9XG5cbiAgb25jbG9zZSgpIHtcbiAgICB0aGlzLmxvZygnQ29ubmVjdGlvbiBsb3N0LiBSZWNvbm5lY3RpbmcgaW4gJXNzJywgdGhpcy5yZWNvbm5lY3RUaW1lKTtcbiAgICBzZXRUaW1lb3V0KHRoaXMuY29ubmVjdCwgdGhpcy5yZWNvbm5lY3RUaW1lKTtcbiAgfVxuXG4gIHJlbG9hZCgpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5yZWxvYWRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zdGF0ZS5yZWxvYWRpbmcgPSB0cnVlO1xuICAgIHRoaXMubG9nKCdSZWxvYWRpbmcgLi4uJyk7XG4gICAgaWYgKGNocm9tZS5ydW50aW1lICYmIGNocm9tZS5ydW50aW1lLnJlbG9hZCkge1xuICAgICAgLy8gSWYgd2UgYXJlIG9uIGEgYmFja2dyb3VuZCBwYWdlXG4gICAgICAvLyB3ZSBzaG91bGQgcmVsb2FkIHRoZSBlbnRpcmUgcnVudGltZVxuICAgICAgY2hyb21lLnJ1bnRpbWUucmVsb2FkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFNvbWV0aW1lcyB3ZSBhcmUgb24gYSBkaWZmZXJlbnQgY29udGV4dFxuICAgICAgLy8gZm9yIGV4YW1wbGUgYSBjb250ZW50c2NyaXB0XG4gICAgICAvLyB0aGVyZWZvcmUgd2UgbmVlZCB0byByZWxvYWQgdmlhXG4gICAgICAvLyB3aW5kb3cubG9jYXRpb25cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gIH1cblxuICBsb2cobWVzc2FnZSwgLi4uYXJncykge1xuICAgIGlmKHRoaXMuZGVidWcpIHtcbiAgICAgIGNvbnNvbGUubG9nKGAlY0Nocm9tZVJlbG9hZDogJHttZXNzYWdlfWAsICdjb2xvcjogZ3JheTsnLCAuLi5hcmdzKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hyb21lUmVsb2FkO1xuIl19

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjkxOGU4Mjk2MGMxMjQyODhiYmM/MzcwNSIsIndlYnBhY2s6Ly8vLi9hcHAvc2NyaXB0cy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovLy8uL34vY2hyb21lcmVsb2FkL2Rldm9ubHkuanMiLCJ3ZWJwYWNrOi8vLy4vfi9wcm9jZXNzL2Jyb3dzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9jaHJvbWVyZWxvYWQvY2hyb21lcmVsb2FkLmpzIl0sIm5hbWVzIjpbImNocm9tZSIsInJ1bnRpbWUiLCJvbkluc3RhbGxlZCIsImFkZExpc3RlbmVyIiwiZGV0YWlscyIsImNvbnNvbGUiLCJsb2ciLCJwcmV2aW91c1ZlcnNpb24iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDQTs7QUFFQUEsUUFBT0MsT0FBUCxDQUFlQyxXQUFmLENBQTJCQyxXQUEzQixDQUF1QyxVQUFVQyxPQUFWLEVBQW1CO0FBQ3hEQyxXQUFRQyxHQUFSLENBQVksaUJBQVosRUFBK0JGLFFBQVFHLGVBQXZDO0FBQ0QsRUFGRCxFLENBSEE7OztBQU9BRixTQUFRQyxHQUFSLENBQVksMkJBQVosRTs7Ozs7O0FDUEE7O0FBRUE7O0FBRUE7O0FBRUEsdUNBQXNDLHVDQUF1QyxnQkFBZ0I7O0FBRTdGO0FBQ0E7QUFDQTtBQUNBLDRDQUEyQywrYjs7Ozs7OztBQ1gzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsc0NBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsNEJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDZCQUE0QixVQUFVOzs7Ozs7O0FDdkx0Qzs7QUFFQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRCxpQ0FBZ0MsMkNBQTJDLGdCQUFnQixrQkFBa0IsT0FBTywyQkFBMkIsd0RBQXdELGdDQUFnQyx1REFBdUQsMkRBQTJELEVBQUUsRUFBRSx5REFBeUQscUVBQXFFLDZEQUE2RCxvQkFBb0IsR0FBRyxFQUFFOztBQUVqakIsa0RBQWlELDBDQUEwQywwREFBMEQsRUFBRTs7QUFFdko7QUFDQTtBQUNBLHdFQUF1RTs7QUFFdkU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJGQUEwRixhQUFhO0FBQ3ZHO0FBQ0E7O0FBRUEsOEZBQTZGO0FBQzdGO0FBQ0E7QUFDQSxJQUFHOztBQUVIO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLDRDQUEyQywyak8iLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGY5MThlODI5NjBjMTI0Mjg4YmJjIiwiLy8gRW5hYmxlIGNocm9tZXJlbG9hZCBieSB1bmNvbW1lbnRpbmcgdGhpcyBsaW5lOlxuaW1wb3J0ICdjaHJvbWVyZWxvYWQvZGV2b25seSc7XG5cbmNocm9tZS5ydW50aW1lLm9uSW5zdGFsbGVkLmFkZExpc3RlbmVyKGZ1bmN0aW9uIChkZXRhaWxzKSB7XG4gIGNvbnNvbGUubG9nKCdwcmV2aW91c1ZlcnNpb24nLCBkZXRhaWxzLnByZXZpb3VzVmVyc2lvbik7XG59KTtcblxuY29uc29sZS5sb2coJ1xcJ0FsbG8gXFwnQWxsbyEgRXZlbnQgUGFnZScpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL3NjcmlwdHMvYmFja2dyb3VuZC5qcyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9jaHJvbWVyZWxvYWQgPSByZXF1aXJlKCcuL2Nocm9tZXJlbG9hZC5qcycpO1xuXG52YXIgX2Nocm9tZXJlbG9hZDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jaHJvbWVyZWxvYWQpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgbmV3IF9jaHJvbWVyZWxvYWQyLmRlZmF1bHQoKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbk55WXk5a1pYWnZibXg1TG1weklsMHNJbTVoYldWeklqcGJJbkJ5YjJObGMzTWlMQ0psYm5ZaUxDSk9UMFJGWDBWT1ZpSmRMQ0p0WVhCd2FXNW5jeUk2SWpzN1FVRkJRVHM3T3pzN08wRkJSVUVzU1VGQlNVRXNVVUZCVVVNc1IwRkJVaXhEUVVGWlF5eFJRVUZhTEV0QlFYbENMR0ZCUVRkQ0xFVkJRVFJETzBGQlF6RkRPMEZCUTBRaUxDSm1hV3hsSWpvaVpHVjJiMjVzZVM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbWx0Y0c5eWRDQkRhSEp2YldWU1pXeHZZV1FnWm5KdmJTQW5MaTlqYUhKdmJXVnlaV3h2WVdRdWFuTW5PMXh1WEc1cFppQW9jSEp2WTJWemN5NWxibll1VGs5RVJWOUZUbFlnUFQwOUlDZGtaWFpsYkc5d2JXVnVkQ2NwSUh0Y2JpQWdibVYzSUVOb2NtOXRaVkpsYkc5aFpDZ3BPMXh1ZlZ4dUlsMTlcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY2hyb21lcmVsb2FkL2Rldm9ubHkuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9wcm9jZXNzL2Jyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgQ2hyb21lUmVsb2FkID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBDaHJvbWVSZWxvYWQoKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBDaHJvbWVSZWxvYWQpO1xuXG4gICAgdmFyIF9hcmdzJGhvc3QgPSBhcmdzLmhvc3Q7XG4gICAgdmFyIGhvc3QgPSBfYXJncyRob3N0ID09PSB1bmRlZmluZWQgPyAnbG9jYWxob3N0JyA6IF9hcmdzJGhvc3Q7XG4gICAgdmFyIF9hcmdzJHBvcnQgPSBhcmdzLnBvcnQ7XG4gICAgdmFyIHBvcnQgPSBfYXJncyRwb3J0ID09PSB1bmRlZmluZWQgPyAzNTcyOSA6IF9hcmdzJHBvcnQ7XG4gICAgdmFyIF9hcmdzJHJlY29ubmVjdFRpbWUgPSBhcmdzLnJlY29ubmVjdFRpbWU7XG4gICAgdmFyIHJlY29ubmVjdFRpbWUgPSBfYXJncyRyZWNvbm5lY3RUaW1lID09PSB1bmRlZmluZWQgPyAzMDAwIDogX2FyZ3MkcmVjb25uZWN0VGltZTtcbiAgICB2YXIgX2FyZ3MkZGVidWcgPSBhcmdzLmRlYnVnO1xuICAgIHZhciBkZWJ1ZyA9IF9hcmdzJGRlYnVnID09PSB1bmRlZmluZWQgPyB0cnVlIDogX2FyZ3MkZGVidWc7XG5cblxuICAgIHRoaXMuaG9zdCA9IGhvc3Q7XG4gICAgdGhpcy5wb3J0ID0gcG9ydDtcbiAgICB0aGlzLnJlY29ubmVjdFRpbWUgPSByZWNvbm5lY3RUaW1lO1xuICAgIHRoaXMuZGVidWcgPSBkZWJ1ZztcblxuICAgIHRoaXMuY29ubmVjdCA9IHRoaXMuY29ubmVjdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25lcnJvciA9IHRoaXMub25lcnJvci5iaW5kKHRoaXMpO1xuICAgIHRoaXMub25vcGVuID0gdGhpcy5vbm9wZW4uYmluZCh0aGlzKTtcbiAgICB0aGlzLl9vbm1lc3NhZ2UgPSB0aGlzLl9vbm1lc3NhZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLm9ubWVzc2FnZSA9IHRoaXMub25tZXNzYWdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5vbmNsb3NlID0gdGhpcy5vbmNsb3NlLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY29ubmVjdGVkOiBmYWxzZSxcbiAgICAgIGNvbm5lY3Rpb25Mb3N0OiBmYWxzZSxcbiAgICAgIHJlbG9hZGluZzogZmFsc2VcbiAgICB9O1xuXG4gICAgdGhpcy5jb25uZWN0KCk7XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoQ2hyb21lUmVsb2FkLCBbe1xuICAgIGtleTogJ2Nvbm5lY3QnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0KCkge1xuICAgICAgdGhpcy5jb25uZWN0aW9uID0gbmV3IFdlYlNvY2tldCgnd3M6Ly8nICsgdGhpcy5ob3N0ICsgJzonICsgdGhpcy5wb3J0ICsgJy9saXZlcmVsb2FkJyk7XG4gICAgICB0aGlzLmNvbm5lY3Rpb24ub25vcGVuID0gdGhpcy5vbm9wZW47XG4gICAgICB0aGlzLmNvbm5lY3Rpb24ub25tZXNzYWdlID0gdGhpcy5fb25tZXNzYWdlO1xuICAgICAgdGhpcy5jb25uZWN0aW9uLm9uZXJyb3IgPSB0aGlzLm9uZXJyb3I7XG4gICAgICB0aGlzLmNvbm5lY3Rpb24ub25jbG9zZSA9IHRoaXMub25jbG9zZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbm9wZW4nLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbm9wZW4oKSB7XG4gICAgICB0aGlzLmxvZygnRW5hYmxlZCcpO1xuICAgICAgdGhpcy5zdGF0ZS5jb25uZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ29uZXJyb3InLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbmVycm9yKGVycm9yKSB7XG4gICAgICB0aGlzLmxvZygnQ29ubmVjdGlvbiBlcnJvcicpO1xuICAgICAgdGhpcy5zdGF0ZS5jb25uZWN0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuc3RhdGUuY29ubmVjdGlvbkxvc3QgPSB0cnVlO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ19vbm1lc3NhZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfb25tZXNzYWdlKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuZGF0YSkge1xuICAgICAgICB0aGlzLm9ubWVzc2FnZShKU09OLnBhcnNlKGV2ZW50LmRhdGEpKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbm1lc3NhZ2UnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbm1lc3NhZ2UoX3JlZikge1xuICAgICAgdmFyIGNvbW1hbmQgPSBfcmVmLmNvbW1hbmQ7XG4gICAgICB2YXIgcGF0aCA9IF9yZWYucGF0aDtcblxuICAgICAgdmFyIGNvbm5lY3Rpb25Mb3N0ID0gdGhpcy5zdGF0ZS5jb25uZWN0aW9uTG9zdDtcbiAgICAgIHZhciBzY3JpcHRyZWxvYWQgPSAvXFwuanMkLy50ZXN0KHBhdGgpO1xuXG4gICAgICBpZiAoY29tbWFuZCA9PT0gJ3JlbG9hZCcpIHtcblxuICAgICAgICBpZiAoY29ubmVjdGlvbkxvc3QgJiYgIXNjcmlwdHJlbG9hZCkge1xuICAgICAgICAgIHRoaXMubG9nKCdXYWl0aW5nIGZvciBzY3JpcHRzIHRvIGJlIHJlYWR5LicpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuc3RhdGUuY29ubmVjdGlvbkxvc3QgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvbmNsb3NlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25jbG9zZSgpIHtcbiAgICAgIHRoaXMubG9nKCdDb25uZWN0aW9uIGxvc3QuIFJlY29ubmVjdGluZyBpbiAlc3MnLCB0aGlzLnJlY29ubmVjdFRpbWUpO1xuICAgICAgc2V0VGltZW91dCh0aGlzLmNvbm5lY3QsIHRoaXMucmVjb25uZWN0VGltZSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAncmVsb2FkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVsb2FkKCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUucmVsb2FkaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuc3RhdGUucmVsb2FkaW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMubG9nKCdSZWxvYWRpbmcgLi4uJyk7XG4gICAgICBpZiAoY2hyb21lLnJ1bnRpbWUgJiYgY2hyb21lLnJ1bnRpbWUucmVsb2FkKSB7XG4gICAgICAgIC8vIElmIHdlIGFyZSBvbiBhIGJhY2tncm91bmQgcGFnZVxuICAgICAgICAvLyB3ZSBzaG91bGQgcmVsb2FkIHRoZSBlbnRpcmUgcnVudGltZVxuICAgICAgICBjaHJvbWUucnVudGltZS5yZWxvYWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFNvbWV0aW1lcyB3ZSBhcmUgb24gYSBkaWZmZXJlbnQgY29udGV4dFxuICAgICAgICAvLyBmb3IgZXhhbXBsZSBhIGNvbnRlbnRzY3JpcHRcbiAgICAgICAgLy8gdGhlcmVmb3JlIHdlIG5lZWQgdG8gcmVsb2FkIHZpYVxuICAgICAgICAvLyB3aW5kb3cubG9jYXRpb25cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2xvZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvZyhtZXNzYWdlKSB7XG4gICAgICBpZiAodGhpcy5kZWJ1Zykge1xuICAgICAgICB2YXIgX2NvbnNvbGU7XG5cbiAgICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5IC0gMV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICAgIH1cblxuICAgICAgICAoX2NvbnNvbGUgPSBjb25zb2xlKS5sb2cuYXBwbHkoX2NvbnNvbGUsIFsnJWNDaHJvbWVSZWxvYWQ6ICcgKyBtZXNzYWdlLCAnY29sb3I6IGdyYXk7J10uY29uY2F0KGFyZ3MpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gQ2hyb21lUmVsb2FkO1xufSgpO1xuXG5leHBvcnRzLmRlZmF1bHQgPSBDaHJvbWVSZWxvYWQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LGV5SjJaWEp6YVc5dUlqb3pMQ0p6YjNWeVkyVnpJanBiSW5OeVl5OWphSEp2YldWeVpXeHZZV1F1YW5NaVhTd2libUZ0WlhNaU9sc2lRMmh5YjIxbFVtVnNiMkZrSWl3aVlYSm5jeUlzSW1odmMzUWlMQ0p3YjNKMElpd2ljbVZqYjI1dVpXTjBWR2x0WlNJc0ltUmxZblZuSWl3aVkyOXVibVZqZENJc0ltSnBibVFpTENKdmJtVnljbTl5SWl3aWIyNXZjR1Z1SWl3aVgyOXViV1Z6YzJGblpTSXNJbTl1YldWemMyRm5aU0lzSW05dVkyeHZjMlVpTENKemRHRjBaU0lzSW1OdmJtNWxZM1JsWkNJc0ltTnZibTVsWTNScGIyNU1iM04wSWl3aWNtVnNiMkZrYVc1bklpd2lZMjl1Ym1WamRHbHZiaUlzSWxkbFlsTnZZMnRsZENJc0lteHZaeUlzSW1WeWNtOXlJaXdpWlhabGJuUWlMQ0prWVhSaElpd2lTbE5QVGlJc0luQmhjbk5sSWl3aVkyOXRiV0Z1WkNJc0luQmhkR2dpTENKelkzSnBjSFJ5Wld4dllXUWlMQ0owWlhOMElpd2ljbVZzYjJGa0lpd2ljMlYwVkdsdFpXOTFkQ0lzSW1Ob2NtOXRaU0lzSW5KMWJuUnBiV1VpTENKM2FXNWtiM2NpTENKc2IyTmhkR2x2YmlJc0ltMWxjM05oWjJVaVhTd2liV0Z3Y0dsdVozTWlPaUk3T3pzN096czdPenM3U1VGQlRVRXNXVHRCUVVOS0xEQkNRVUYxUWp0QlFVRkJMRkZCUVZoRExFbEJRVmNzZVVSQlFVb3NSVUZCU1RzN1FVRkJRVHM3UVVGQlFTeHhRa0ZOYWtKQkxFbEJUbWxDTEVOQlJXNUNReXhKUVVadFFqdEJRVUZCTEZGQlJXNUNRU3hKUVVadFFpdzRRa0ZGV2l4WFFVWlpPMEZCUVVFc2NVSkJUV3BDUkN4SlFVNXBRaXhEUVVkdVFrVXNTVUZJYlVJN1FVRkJRU3hSUVVkdVFrRXNTVUZJYlVJc09FSkJSMW9zUzBGSVdUdEJRVUZCTERoQ1FVMXFRa1lzU1VGT2FVSXNRMEZKYmtKSExHRkJTbTFDTzBGQlFVRXNVVUZKYmtKQkxHRkJTbTFDTEhWRFFVbElMRWxCU2tjN1FVRkJRU3h6UWtGTmFrSklMRWxCVG1sQ0xFTkJTMjVDU1N4TFFVeHRRanRCUVVGQkxGRkJTMjVDUVN4TFFVeHRRaXdyUWtGTFdDeEpRVXhYT3pzN1FVRlJja0lzVTBGQlMwZ3NTVUZCVEN4SFFVRlpRU3hKUVVGYU8wRkJRMEVzVTBGQlMwTXNTVUZCVEN4SFFVRlpRU3hKUVVGYU8wRkJRMEVzVTBGQlMwTXNZVUZCVEN4SFFVRnhRa0VzWVVGQmNrSTdRVUZEUVN4VFFVRkxReXhMUVVGTUxFZEJRV0ZCTEV0QlFXSTdPMEZCUlVFc1UwRkJTME1zVDBGQlRDeEhRVUZsTEV0QlFVdEJMRTlCUVV3c1EwRkJZVU1zU1VGQllpeERRVUZyUWl4SlFVRnNRaXhEUVVGbU8wRkJRMEVzVTBGQlMwTXNUMEZCVEN4SFFVRmxMRXRCUVV0QkxFOUJRVXdzUTBGQllVUXNTVUZCWWl4RFFVRnJRaXhKUVVGc1FpeERRVUZtTzBGQlEwRXNVMEZCUzBVc1RVRkJUQ3hIUVVGakxFdEJRVXRCTEUxQlFVd3NRMEZCV1VZc1NVRkJXaXhEUVVGcFFpeEpRVUZxUWl4RFFVRmtPMEZCUTBFc1UwRkJTMGNzVlVGQlRDeEhRVUZyUWl4TFFVRkxRU3hWUVVGTUxFTkJRV2RDU0N4SlFVRm9RaXhEUVVGeFFpeEpRVUZ5UWl4RFFVRnNRanRCUVVOQkxGTkJRVXRKTEZOQlFVd3NSMEZCYVVJc1MwRkJTMEVzVTBGQlRDeERRVUZsU2l4SlFVRm1MRU5CUVc5Q0xFbEJRWEJDTEVOQlFXcENPMEZCUTBFc1UwRkJTMHNzVDBGQlRDeEhRVUZsTEV0QlFVdEJMRTlCUVV3c1EwRkJZVXdzU1VGQllpeERRVUZyUWl4SlFVRnNRaXhEUVVGbU96dEJRVVZCTEZOQlFVdE5MRXRCUVV3c1IwRkJZVHRCUVVOWVF5eHBRa0ZCVnl4TFFVUkJPMEZCUlZoRExITkNRVUZuUWl4TFFVWk1PMEZCUjFoRExHbENRVUZYTzBGQlNFRXNTMEZCWWpzN1FVRk5RU3hUUVVGTFZpeFBRVUZNTzBGQlEwUTdPenM3T0VKQlJWTTdRVUZEVWl4WFFVRkxWeXhWUVVGTUxFZEJRV3RDTEVsQlFVbERMRk5CUVVvc1YwRkJjMElzUzBGQlMyaENMRWxCUVROQ0xGTkJRVzFETEV0QlFVdERMRWxCUVhoRExHbENRVUZzUWp0QlFVTkJMRmRCUVV0akxGVkJRVXdzUTBGQlowSlNMRTFCUVdoQ0xFZEJRWGxDTEV0QlFVdEJMRTFCUVRsQ08wRkJRMEVzVjBGQlMxRXNWVUZCVEN4RFFVRm5RazRzVTBGQmFFSXNSMEZCTkVJc1MwRkJTMFFzVlVGQmFrTTdRVUZEUVN4WFFVRkxUeXhWUVVGTUxFTkJRV2RDVkN4UFFVRm9RaXhIUVVFd1FpeExRVUZMUVN4UFFVRXZRanRCUVVOQkxGZEJRVXRUTEZWQlFVd3NRMEZCWjBKTUxFOUJRV2hDTEVkQlFUQkNMRXRCUVV0QkxFOUJRUzlDTzBGQlEwUTdPenMyUWtGRlVUdEJRVU5RTEZkQlFVdFBMRWRCUVV3c1EwRkJVeXhUUVVGVU8wRkJRMEVzVjBGQlMwNHNTMEZCVEN4RFFVRlhReXhUUVVGWUxFZEJRWFZDTEVsQlFYWkNPMEZCUTBRN096czBRa0ZGVDAwc1N5eEZRVUZQTzBGQlEySXNWMEZCUzBRc1IwRkJUQ3hEUVVGVExHdENRVUZVTzBGQlEwRXNWMEZCUzA0c1MwRkJUQ3hEUVVGWFF5eFRRVUZZTEVkQlFYVkNMRXRCUVhaQ08wRkJRMEVzVjBGQlMwUXNTMEZCVEN4RFFVRlhSU3hqUVVGWUxFZEJRVFJDTEVsQlFUVkNPMEZCUTBRN096c3JRa0ZGVlUwc1N5eEZRVUZQTzBGQlEyaENMRlZCUVVsQkxFMUJRVTFETEVsQlFWWXNSVUZCWjBJN1FVRkRaQ3hoUVVGTFdDeFRRVUZNTEVOQlEwVlpMRXRCUVV0RExFdEJRVXdzUTBGQlYwZ3NUVUZCVFVNc1NVRkJha0lzUTBGRVJqdEJRVWRFTzBGQlEwWTdPenR2UTBGTFJUdEJRVUZCTEZWQlJrUkhMRTlCUlVNc1VVRkdSRUVzVDBGRlF6dEJRVUZCTEZWQlJFUkRMRWxCUTBNc1VVRkVSRUVzU1VGRFF6czdRVUZEUkN4VlFVRk5XQ3hwUWtGQmFVSXNTMEZCUzBZc1MwRkJUQ3hEUVVGWFJTeGpRVUZzUXp0QlFVTkJMRlZCUVUxWkxHVkJRV1VzVVVGQlVVTXNTVUZCVWl4RFFVRmhSaXhKUVVGaUxFTkJRWEpDT3p0QlFVVkJMRlZCUVVsRUxGbEJRVmtzVVVGQmFFSXNSVUZCTUVJN08wRkJSWGhDTEZsQlFVbFdMR3RDUVVGclFpeERRVUZEV1N4WlFVRjJRaXhGUVVGeFF6dEJRVU51UXl4bFFVRkxVaXhIUVVGTUxFTkJRVk1zYTBOQlFWUTdRVUZEUVR0QlFVTkVPenRCUVVWRUxHRkJRVXRPTEV0QlFVd3NRMEZCVjBVc1kwRkJXQ3hIUVVFMFFpeExRVUUxUWp0QlFVTkJMR0ZCUVV0akxFMUJRVXc3UVVGRFJEdEJRVU5HT3pzN09FSkJSVk03UVVGRFVpeFhRVUZMVml4SFFVRk1MRU5CUVZNc2MwTkJRVlFzUlVGQmFVUXNTMEZCUzJZc1lVRkJkRVE3UVVGRFFUQkNMR2xDUVVGWExFdEJRVXQ0UWl4UFFVRm9RaXhGUVVGNVFpeExRVUZMUml4aFFVRTVRanRCUVVORU96czdOa0pCUlZFN1FVRkRVQ3hWUVVGSkxFdEJRVXRUTEV0QlFVd3NRMEZCVjBjc1UwRkJaaXhGUVVFd1FqdEJRVU40UWp0QlFVTkVPMEZCUTBRc1YwRkJTMGdzUzBGQlRDeERRVUZYUnl4VFFVRllMRWRCUVhWQ0xFbEJRWFpDTzBGQlEwRXNWMEZCUzBjc1IwRkJUQ3hEUVVGVExHVkJRVlE3UVVGRFFTeFZRVUZKV1N4UFFVRlBReXhQUVVGUUxFbEJRV3RDUkN4UFFVRlBReXhQUVVGUUxFTkJRV1ZJTEUxQlFYSkRMRVZCUVRaRE8wRkJRek5ETzBGQlEwRTdRVUZEUVVVc1pVRkJUME1zVDBGQlVDeERRVUZsU0N4TlFVRm1PMEZCUTBRc1QwRktSQ3hOUVVsUE8wRkJRMHc3UVVGRFFUdEJRVU5CTzBGQlEwRTdRVUZEUVVrc1pVRkJUME1zVVVGQlVDeERRVUZuUWt3c1RVRkJhRUk3UVVGRFJEdEJRVU5HT3pzN2QwSkJSVWROTEU4c1JVRkJhMEk3UVVGRGNFSXNWVUZCUnl4TFFVRkxPVUlzUzBGQlVpeEZRVUZsTzBGQlFVRTdPMEZCUVVFc01FTkJSRVJLTEVsQlEwTTdRVUZFUkVFc1kwRkRRenRCUVVGQk96dEJRVU5pTERaQ1FVRlJhMElzUjBGQlVpeDFRMEZCSzBKblFpeFBRVUV2UWl4RlFVRXdReXhqUVVFeFF5eFRRVUUyUkd4RExFbEJRVGRFTzBGQlEwUTdRVUZEUmpzN096czdPMnRDUVVkWlJDeFpJaXdpWm1sc1pTSTZJbU5vY205dFpYSmxiRzloWkM1cWN5SXNJbk52ZFhKalpYTkRiMjUwWlc1MElqcGJJbU5zWVhOeklFTm9jbTl0WlZKbGJHOWhaQ0I3WEc0Z0lHTnZibk4wY25WamRHOXlLR0Z5WjNNZ1BTQjdmU2tnZTF4dUlDQWdJR052Ym5OMElIdGNiaUFnSUNBZ0lHaHZjM1FnUFNBbmJHOWpZV3hvYjNOMEp5eGNiaUFnSUNBZ0lIQnZjblFnUFNBek5UY3lPU3hjYmlBZ0lDQWdJSEpsWTI5dWJtVmpkRlJwYldVZ1BTQXpNREF3TEZ4dUlDQWdJQ0FnWkdWaWRXY2dQU0IwY25WbFhHNGdJQ0FnZlNBOUlHRnlaM003WEc1Y2JpQWdJQ0IwYUdsekxtaHZjM1FnUFNCb2IzTjBPMXh1SUNBZ0lIUm9hWE11Y0c5eWRDQTlJSEJ2Y25RN1hHNGdJQ0FnZEdocGN5NXlaV052Ym01bFkzUlVhVzFsSUQwZ2NtVmpiMjV1WldOMFZHbHRaVHRjYmlBZ0lDQjBhR2x6TG1SbFluVm5JRDBnWkdWaWRXYzdYRzVjYmlBZ0lDQjBhR2x6TG1OdmJtNWxZM1FnUFNCMGFHbHpMbU52Ym01bFkzUXVZbWx1WkNoMGFHbHpLVHRjYmlBZ0lDQjBhR2x6TG05dVpYSnliM0lnUFNCMGFHbHpMbTl1WlhKeWIzSXVZbWx1WkNoMGFHbHpLVHRjYmlBZ0lDQjBhR2x6TG05dWIzQmxiaUE5SUhSb2FYTXViMjV2Y0dWdUxtSnBibVFvZEdocGN5azdYRzRnSUNBZ2RHaHBjeTVmYjI1dFpYTnpZV2RsSUQwZ2RHaHBjeTVmYjI1dFpYTnpZV2RsTG1KcGJtUW9kR2hwY3lrN1hHNGdJQ0FnZEdocGN5NXZibTFsYzNOaFoyVWdQU0IwYUdsekxtOXViV1Z6YzJGblpTNWlhVzVrS0hSb2FYTXBPMXh1SUNBZ0lIUm9hWE11YjI1amJHOXpaU0E5SUhSb2FYTXViMjVqYkc5elpTNWlhVzVrS0hSb2FYTXBPMXh1WEc0Z0lDQWdkR2hwY3k1emRHRjBaU0E5SUh0Y2JpQWdJQ0FnSUdOdmJtNWxZM1JsWkRvZ1ptRnNjMlVzWEc0Z0lDQWdJQ0JqYjI1dVpXTjBhVzl1VEc5emREb2dabUZzYzJVc1hHNGdJQ0FnSUNCeVpXeHZZV1JwYm1jNklHWmhiSE5sWEc0Z0lDQWdmVHRjYmx4dUlDQWdJSFJvYVhNdVkyOXVibVZqZENncE8xeHVJQ0I5WEc1Y2JpQWdZMjl1Ym1WamRDZ3BJSHRjYmlBZ0lDQjBhR2x6TG1OdmJtNWxZM1JwYjI0Z1BTQnVaWGNnVjJWaVUyOWphMlYwS0dCM2N6b3ZMeVI3ZEdocGN5NW9iM04wZlRva2UzUm9hWE11Y0c5eWRIMHZiR2wyWlhKbGJHOWhaR0FwTzF4dUlDQWdJSFJvYVhNdVkyOXVibVZqZEdsdmJpNXZibTl3Wlc0Z1BTQjBhR2x6TG05dWIzQmxianRjYmlBZ0lDQjBhR2x6TG1OdmJtNWxZM1JwYjI0dWIyNXRaWE56WVdkbElEMGdkR2hwY3k1ZmIyNXRaWE56WVdkbE8xeHVJQ0FnSUhSb2FYTXVZMjl1Ym1WamRHbHZiaTV2Ym1WeWNtOXlJRDBnZEdocGN5NXZibVZ5Y205eU8xeHVJQ0FnSUhSb2FYTXVZMjl1Ym1WamRHbHZiaTV2Ym1Oc2IzTmxJRDBnZEdocGN5NXZibU5zYjNObE8xeHVJQ0I5WEc1Y2JpQWdiMjV2Y0dWdUtDa2dlMXh1SUNBZ0lIUm9hWE11Ykc5bktDZEZibUZpYkdWa0p5azdYRzRnSUNBZ2RHaHBjeTV6ZEdGMFpTNWpiMjV1WldOMFpXUWdQU0IwY25WbE8xeHVJQ0I5WEc1Y2JpQWdiMjVsY25KdmNpaGxjbkp2Y2lrZ2UxeHVJQ0FnSUhSb2FYTXViRzluS0NkRGIyNXVaV04wYVc5dUlHVnljbTl5SnlrN1hHNGdJQ0FnZEdocGN5NXpkR0YwWlM1amIyNXVaV04wWldRZ1BTQm1ZV3h6WlR0Y2JpQWdJQ0IwYUdsekxuTjBZWFJsTG1OdmJtNWxZM1JwYjI1TWIzTjBJRDBnZEhKMVpUdGNiaUFnZlZ4dVhHNGdJRjl2Ym0xbGMzTmhaMlVvWlhabGJuUXBJSHRjYmlBZ0lDQnBaaUFvWlhabGJuUXVaR0YwWVNrZ2UxeHVJQ0FnSUNBZ2RHaHBjeTV2Ym0xbGMzTmhaMlVvWEc0Z0lDQWdJQ0FnSUVwVFQwNHVjR0Z5YzJVb1pYWmxiblF1WkdGMFlTbGNiaUFnSUNBZ0lDazdYRzRnSUNBZ2ZWeHVJQ0I5WEc1Y2JpQWdiMjV0WlhOellXZGxLSHRjYmlBZ0lDQmpiMjF0WVc1a0xGeHVJQ0FnSUhCaGRHaGNiaUFnZlNrZ2UxeHVJQ0FnSUdOdmJuTjBJR052Ym01bFkzUnBiMjVNYjNOMElEMGdkR2hwY3k1emRHRjBaUzVqYjI1dVpXTjBhVzl1VEc5emREdGNiaUFnSUNCamIyNXpkQ0J6WTNKcGNIUnlaV3h2WVdRZ1BTQXZYRnd1YW5Na0x5NTBaWE4wS0hCaGRHZ3BPMXh1WEc0Z0lDQWdhV1lnS0dOdmJXMWhibVFnUFQwOUlDZHlaV3h2WVdRbktTQjdYRzVjYmlBZ0lDQWdJR2xtSUNoamIyNXVaV04wYVc5dVRHOXpkQ0FtSmlBaGMyTnlhWEIwY21Wc2IyRmtLU0I3WEc0Z0lDQWdJQ0FnSUhSb2FYTXViRzluS0NkWFlXbDBhVzVuSUdadmNpQnpZM0pwY0hSeklIUnZJR0psSUhKbFlXUjVMaWNwTzF4dUlDQWdJQ0FnSUNCeVpYUjFjbTQ3WEc0Z0lDQWdJQ0I5WEc1Y2JpQWdJQ0FnSUhSb2FYTXVjM1JoZEdVdVkyOXVibVZqZEdsdmJreHZjM1FnUFNCbVlXeHpaVHRjYmlBZ0lDQWdJSFJvYVhNdWNtVnNiMkZrS0NrN1hHNGdJQ0FnZlZ4dUlDQjlYRzVjYmlBZ2IyNWpiRzl6WlNncElIdGNiaUFnSUNCMGFHbHpMbXh2WnlnblEyOXVibVZqZEdsdmJpQnNiM04wTGlCU1pXTnZibTVsWTNScGJtY2dhVzRnSlhOekp5d2dkR2hwY3k1eVpXTnZibTVsWTNSVWFXMWxLVHRjYmlBZ0lDQnpaWFJVYVcxbGIzVjBLSFJvYVhNdVkyOXVibVZqZEN3Z2RHaHBjeTV5WldOdmJtNWxZM1JVYVcxbEtUdGNiaUFnZlZ4dVhHNGdJSEpsYkc5aFpDZ3BJSHRjYmlBZ0lDQnBaaUFvZEdocGN5NXpkR0YwWlM1eVpXeHZZV1JwYm1jcElIdGNiaUFnSUNBZ0lISmxkSFZ5Ymp0Y2JpQWdJQ0I5WEc0Z0lDQWdkR2hwY3k1emRHRjBaUzV5Wld4dllXUnBibWNnUFNCMGNuVmxPMXh1SUNBZ0lIUm9hWE11Ykc5bktDZFNaV3h2WVdScGJtY2dMaTR1SnlrN1hHNGdJQ0FnYVdZZ0tHTm9jbTl0WlM1eWRXNTBhVzFsSUNZbUlHTm9jbTl0WlM1eWRXNTBhVzFsTG5KbGJHOWhaQ2tnZTF4dUlDQWdJQ0FnTHk4Z1NXWWdkMlVnWVhKbElHOXVJR0VnWW1GamEyZHliM1Z1WkNCd1lXZGxYRzRnSUNBZ0lDQXZMeUIzWlNCemFHOTFiR1FnY21Wc2IyRmtJSFJvWlNCbGJuUnBjbVVnY25WdWRHbHRaVnh1SUNBZ0lDQWdZMmh5YjIxbExuSjFiblJwYldVdWNtVnNiMkZrS0NrN1hHNGdJQ0FnZlNCbGJITmxJSHRjYmlBZ0lDQWdJQzh2SUZOdmJXVjBhVzFsY3lCM1pTQmhjbVVnYjI0Z1lTQmthV1ptWlhKbGJuUWdZMjl1ZEdWNGRGeHVJQ0FnSUNBZ0x5OGdabTl5SUdWNFlXMXdiR1VnWVNCamIyNTBaVzUwYzJOeWFYQjBYRzRnSUNBZ0lDQXZMeUIwYUdWeVpXWnZjbVVnZDJVZ2JtVmxaQ0IwYnlCeVpXeHZZV1FnZG1saFhHNGdJQ0FnSUNBdkx5QjNhVzVrYjNjdWJHOWpZWFJwYjI1Y2JpQWdJQ0FnSUhkcGJtUnZkeTVzYjJOaGRHbHZiaTV5Wld4dllXUW9LVHRjYmlBZ0lDQjlYRzRnSUgxY2JseHVJQ0JzYjJjb2JXVnpjMkZuWlN3Z0xpNHVZWEpuY3lrZ2UxeHVJQ0FnSUdsbUtIUm9hWE11WkdWaWRXY3BJSHRjYmlBZ0lDQWdJR052Ym5OdmJHVXViRzluS0dBbFkwTm9jbTl0WlZKbGJHOWhaRG9nSkh0dFpYTnpZV2RsZldBc0lDZGpiMnh2Y2pvZ1ozSmhlVHNuTENBdUxpNWhjbWR6S1R0Y2JpQWdJQ0I5WEc0Z0lIMWNibjFjYmx4dVpYaHdiM0owSUdSbFptRjFiSFFnUTJoeWIyMWxVbVZzYjJGa08xeHVJbDE5XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nocm9tZXJlbG9hZC9jaHJvbWVyZWxvYWQuanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==