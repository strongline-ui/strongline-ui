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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.registerComponent = exports.registeredComponentList = exports.staticComponentNameList = exports.ANONYM_COMPONENT = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Element = __webpack_require__(5);

var _Element2 = _interopRequireDefault(_Element);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ANONYM_COMPONENT = exports.ANONYM_COMPONENT = "@@INTERNAL_ANONYM_COMPONENT";

var staticComponentNameList = exports.staticComponentNameList = [];
var registeredComponentList = exports.registeredComponentList = [];

var Component = function () {
    function Component() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ANONYM_COMPONENT;
        var element = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, Component);

        this.name = ANONYM_COMPONENT;
        this.constants = {};
        this.classes = {
            IS_UPGRADED: "is-upgraded"
        };

        if (name) {
            if (name === ANONYM_COMPONENT) {
                throw new Error("Component(...): Each component must have its own name passed in the super constructor.");
            }

            if (~staticComponentNameList.indexOf(name)) {
                throw new Error("Component(" + name + "): Components must have a unique name.");
            }

            this.name = name;
            staticComponentNameList.push(this.name);
            global[this.name] = this;
        } else {
            throw new Error("Component(" + name + "): Component names must be valid and unique, " + name + " (" + (typeof name === "undefined" ? "undefined" : _typeof(name)) + ") is already registered.");
        }

        if (!element) {
            console.warn("Component(" + this.name + ", " + (typeof element === "undefined" ? "undefined" : _typeof(element)) + "): Might not register any component on invalid element(s).");
        }

        this.element = new _Element2.default(element);
        this.init();
    }

    _createClass(Component, [{
        key: "init",


        /**
         * @abstract
         */
        value: function init() {}
    }, {
        key: "elementClassList",
        get: function get() {
            var optimisticElement = this.element || {};
            return Array.isArray(optimisticElement.classList) ? optimisticElement.classList : [];
        }
    }, {
        key: "hasState",
        get: function get() {}
    }]);

    return Component;
}();

exports.default = Component;
var registerComponent = exports.registerComponent = function registerComponent(_ref) {
    var constructor = _ref.constructor,
        selector = _ref.selector,
        _ref$widget = _ref.widget,
        widget = _ref$widget === undefined ? false : _ref$widget;

    registeredComponentList.push({
        selector: selector,
        constructor: constructor,
        name: constructor.name,
        widget: !!widget
    });
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(7);

var _Component = __webpack_require__(0);

// Globals
window.addEventListener("load", function () {
    _Component.registeredComponentList.forEach(function (componentSpec, index) {
        console.log("Try registering", componentSpec, index);
    });
});

// Bootstrap


// Components

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Component2 = __webpack_require__(0);

var _Component3 = _interopRequireDefault(_Component2);

__webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_Component) {
    _inherits(Button, _Component);

    function Button(element) {
        _classCallCheck(this, Button);

        return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, "Button", element));
    }

    _createClass(Button, [{
        key: "disable",
        value: function disable() {
            this.element.disable = true;
        }
    }, {
        key: "enable",
        value: function enable() {
            this.element.disable = false;
        }
    }, {
        key: "init",
        value: function init() {}
    }]);

    return Button;
}(_Component3.default);

exports.default = Button;


(0, _Component2.registerComponent)({
    constructor: Button,
    selector: "sl-js-button",
    widget: false
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Element = function () {
    function Element() {
        _classCallCheck(this, Element);
    }

    _createClass(Element, [{
        key: "focus",
        value: function focus() {}
    }, {
        key: "blur",
        value: function blur() {}
    }, {
        key: "hasState",
        value: function hasState() {
            return false;
        }
    }, {
        key: "classList",
        get: function get() {
            return [];
        }
    }]);

    return Element;
}();

exports.default = Element;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

__webpack_require__(9);

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=strongline-ui.js.map