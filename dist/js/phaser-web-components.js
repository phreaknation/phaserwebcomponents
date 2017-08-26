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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!****************************************************!*\
  !*** ./src/js/Components/UI/WebComponent/index.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// let merge = require('deeply');

// resizable: Able to be resized
// dropable: Able to accept a `dropable` object,
// draggable: Able to be dragged. Resets position if not placed in a dropable,,
// moveable: Able to be freely moved and remembers its position. Able to be constrained to a parent.
// sortable: Children can be sorted,
// selectable: Highlights when clicked,
// dockable: able to dock to the sides of the page. Possibly to windows,
// scrollspy: highlight options or trigger events on scroll,

var _class2 = function (_Phaser$Sprite) {
  _inherits(_class2, _Phaser$Sprite);

  function _class2(options, defaults) {
    _classCallCheck(this, _class2);

    var game = options && options.owner ? options.owner.game : options.game;

    var _this = _possibleConstructorReturn(this, (_class2.__proto__ || Object.getPrototypeOf(_class2)).call(this, game, options && options.x ? options.x : 0, options && options.y ? options.y : 0, options && options.key ? options.key : '', options && options.frame ? options.frame : ''));

    _this._ = {
      el: {},
      htmlParent: options && options.htmlParent ? options.htmlParent : game.canvas.parentElement,
      now: +new Date(),
      owner: options.owner,
      watchers: options.watchers || [],
      ownerPrevPosition: {
        x: null,
        y: null
      },
      cameraPrevPosition: {
        x: null,
        y: null
      }
    };

    _this.CEIL = 'ceil';
    _this.DESTROY = true;
    _this.FLOOR = 'floor';
    _this.ROUND = 'round';

    _this.animation = {
      NONE: null,
      FLOAT: {
        key: 'top',
        value: '[value]px'
      },
      SINK: {
        key: 'top',
        value: '[value]px'
      },
      FADE: {
        key: 'opacity',
        value: '[value]'
      }
    };

    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== undefined && (typeof defaults === 'undefined' ? 'undefined' : _typeof(defaults)) !== undefined) {
      options = _this.merge(defaults, options);
    }
    _this._ = _this.merge(_this._, options);

    _this.visible = false;
    _this.exists = false;
    _this.alive = false;

    if (!_this._.interactions && (_this._.options.moveable == true || _this._.options.resizable)) {
      _this._.interactions = window._PWC.registry.interactions = {};
      _this._.interactions.moveable = {
        activeWindow: null,
        offsetPosition: {
          x: 0,
          y: 0
        },

        mousemove: function mousemove(ev) {
          if (_this._.interactions.moveable.activeWindow !== null) {
            var mousePosition = {
              x: ev.x || ev.clientX || ev.pageX,
              y: ev.y || ev.clientY || ev.pageY
            };

            var windowPosition = {
              x: mousePosition.x - _this._.interactions.moveable.offsetPosition.x,
              y: mousePosition.y - _this._.interactions.moveable.offsetPosition.y
            };

            _this._.interactions.moveable.activeWindow.style.left = windowPosition.x + 'px';
            _this._.interactions.moveable.activeWindow.style.top = windowPosition.y + 'px';
          }
        },

        mouseup: function mouseup(ev) {
          if (_this._.interactions.moveable.activeWindow !== null) {
            var ism = null;
            if (_this._.interactions.moveable.activeWindow.dataset.ismoveable === 'true') {
              ism = _this._.interactions.moveable.activeWindow;
            } else {
              ism = _this._.interactions.moveable.activeWindow.querySelector('[data-ismoveable="true"]');
            }

            ism.classList.remove('moving');
            _this._.interactions.moveable.activeWindow = null;
          }
        }
      };
      if (_this._.interactions.set !== true) {
        document.addEventListener('mousemove', _this._.interactions.moveable.mousemove);
        document.addEventListener('mouseup', _this._.interactions.moveable.mouseup);
      }
    }

    _this.createComponent();
    _this.setupComponent();
    _this.updatePosition();
    _this.updateValues(_this.getValuesToUpdate());
    return _this;
  }

  // Component specific methods

  _createClass(_class2, [{
    key: 'createComponent',
    value: function createComponent(cssSelector) {
      var template = document.createElement('template');
      var selector = cssSelector + (this._.pid ? '[data-pid="' + this._.pid + '"]' : '');

      template.innerHTML = this._.template;
      if (!isNaN(this._.pid) && this._.pid !== null) {
        template.content.firstChild.dataset.pid = this._.pid;
      }

      var el = template.content.firstChild;
      if (this._.target) {
        var parent = this._.target.parentElement;
        parent.replaceChild(el, this._.target);
        this._.el.container = parent.querySelector(selector);
      } else if (this._.htmlParent) {
        this._.htmlParent.prepend(el);
        this._.el.container = this._.htmlParent.querySelector(selector);
      }

      if (this._.el.container !== null) {
        if (typeof this._.options.name === 'string' && this._.options.name !== '') {
          this._.el.container.id = this._.options.name;
        }
      }

      if (this._.options) {
        if (this._.options.styles instanceof Object) {
          for (var key in this._.options.styles) {
            var style = this._.options.styles[key];
            this._.el.container.style[key] = style;
          }
        }

        if (typeof this._.options.className === 'string') {
          this._.el.container.classList.add(this._.options.className);
        }
      }
    }
  }, {
    key: 'setupComponent',
    value: function setupComponent() {
      var _this2 = this;

      if (this._.events) {
        for (var key in this._.events) {
          var _event = this._.events[key];

          if (typeof _event === 'function') {
            this.on(key, _event);
          }
        }
      }

      if (this._.interactions) {
        if (this._.interactions.moveable) {
          var mover = null;
          for (var _key in this._.el) {
            var el = this._.el[_key];
            if (el !== null && el.dataset.ismoveable === 'true') {
              mover = el;
            }
          }

          this._.el.container.addEventListener('mousedown', function (ev) {
            _this2.sendToFront(ev);
          });

          if (mover !== null && this._.interactions.set !== true) {
            this._.interactions.set = true;
            mover.addEventListener('mousedown', function (ev) {
              ev.preventDefault();
              ev.stopPropagation();

              if (_this2._.options.moveable) {
                _this2._.interactions.moveable.offsetPosition.x = (ev.x || ev.clientX || ev.pageX) - _this2._.el.container.offsetLeft;
                _this2._.interactions.moveable.offsetPosition.y = (ev.y || ev.clientY || ev.pageY) - _this2._.el.container.offsetTop;
                _this2._.interactions.moveable.activeWindow = _this2._.el.container;
                var ism = null;
                if (_this2._.interactions.moveable.activeWindow.dataset.ismoveable === 'true') {
                  ism = _this2._.interactions.moveable.activeWindow;
                } else {
                  ism = _this2._.interactions.moveable.activeWindow.querySelector('[data-ismoveable="true"]');
                }

                if (ism !== null) {
                  // console.log(ism)
                  ism.classList.add('moving');
                }
              }

              _this2.sendToFront(ev);
            });
          }
        }
      }
    }
  }, {
    key: 'animate',
    value: function animate() {
      var _this3 = this;

      var now = +new Date();
      var passed = now - this._.now;
      var perc = 100 / this._.options.time * passed;

      if (perc <= 100.0) {
        if (this._.options.animationKeys) {
          this._.options.animationKeys.forEach(function (animation, index) {
            if (typeof animation.type === 'string') {
              return false;
            }

            var animationKey = _this3.animation[animation.type];
            if (_this3._.el.container !== null) {
              if (typeof animationKey.key === 'string' && typeof animationKey.value === 'string') {
                var value = void 0;
                if (animationKey.value.indexOf('[value]') !== -1) {
                  value = animationKey.value.replace('[value]', '');
                } else {
                  value = '';
                }

                _this3._.el.container.style[animationKey.key] = value;
              }
            }
            // console.log(animation)
          });
        }

        // damageIndicator.style.left = (parentPos.x - (damageIndicator.offsetWidth / 2)) + 'px';
        // damageIndicator.style.top = (parentPos.y - ((this._.options.distance / 100) * perc) -(owner.height + 10)) + 'px';
        // damageIndicator.style.opacity = 1.0 - (perc / 100);
      } else {
        this.die(this.DESTROY);
      }
    }
  }, {
    key: 'die',
    value: function die(destroy) {
      destroy = destroy || false;

      if (destroy === true) {
        if (this._.el.container.parentElement !== null) {
          var parent = this._.el.container.parentElement;
          parent.removeChild(this._.el.container);
        }
      } else {
        if (this._.el.container.parentElement !== null) {
          this._.el.container.style.display = 'none';
        }
      }
    }
  }, {
    key: 'sendToFront',
    value: function sendToFront(ev) {
      var _this4 = this;

      ev.preventDefault();
      ev.stopPropagation();
      var activeMoveables = document.querySelectorAll('[data-ismoveable="true"]');

      activeMoveables.forEach(function (el) {
        if (el.classList.contains('active')) {
          el.classList.remove('active');
        } else {
          _this4.getParents(el).forEach(function (parent) {
            if (parent.classList.contains('active')) {
              parent.classList.remove('active');
            }
          });
        }
      });

      this._.el.container.classList.add('active');
    }

    // Getters

  }, {
    key: 'getParents',
    value: function getParents(e) {
      var result = [];
      for (var p = e && e.parentElement; p; p = p.parentElement) {
        result.push(p);
      }
      return result;
    }
  }, {
    key: 'getElement',
    value: function getElement(el) {
      if (typeof el === 'string') {
        el = this._.el[el];

        if (el && el !== null) {
          return el;
        }
      } else if (this.isNode(el) || this.isElement(el)) {
        return el;
      }

      return;
    }
  }, {
    key: 'getContainerNode',
    value: function getContainerNode() {
      return this.getElement('container');
    }
  }, {
    key: 'getParentPosition',
    value: function getParentPosition(owner) {
      owner = owner || this._.owner;
      var x = false;
      var y = false;

      if (owner && owner.inCamera) {
        var canvas = this.game.canvas;
        var camera = this.game.camera;
        x = owner.position.x - camera.position.x + parseInt(canvas.offsetLeft);
        y = owner.position.y - camera.position.y + parseInt(canvas.offsetTop);
      }

      return {
        x: x,
        y: y
      };
    }
  }, {
    key: 'getProperty',
    value: function getProperty(o, strList) {
      if (o && typeof strList === 'string') {
        if (strList.indexOf('.') !== -1) {
          var list = strList.split('.');
          var p = o[list.shift()];
          return this.getProperty(p, list.join('.'));
        } else {
          return o[strList];
        }
      }
    }
  }, {
    key: 'getValue',
    value: function getValue(el) {
      if (typeof el === 'string') {
        el = this.getElement(el);
      } else if (this.isNode(el) || this.isElement(el)) {
        el = el;
      }

      if (el && el !== null) {
        return el.textContent;
      }

      return;
    }
  }, {
    key: 'getValuesToUpdate',
    value: function getValuesToUpdate() {
      var valuesToUpdate = [];

      // add global WebComponent values here.

      return valuesToUpdate;
    }
  }, {
    key: 'trigger',
    value: function trigger(eventName, props) {
      var event = new CustomEvent(eventName, { detail: props });

      this._.el.container.dispatchEvent(event);
    }
  }, {
    key: 'addClass',
    value: function addClass(el, _classes) {
      if (this.isNode(el)) {
        if (typeof _classes === 'string') {
          _classes.split(' ').forEach(function (_class) {
            el.classList.add(_class);
          });
        } else if (this.isArray(_classes)) {
          _classes.forEach(function (_class) {
            if (typeof _class === 'string') {
              _class.split(' ').forEach(function (_c) {
                el.classList.add(_c);
              });
            }
          });
        }
      }
    }
  }, {
    key: 'removeClass',
    value: function removeClass(el, _classes) {
      if (this.isNode(el)) {
        if (typeof _classes === 'string') {
          _classes.split(' ').forEach(function (_class) {
            el.classList.remove(_class);
          });
        } else if (this.isArray(_classes)) {
          _classes.forEach(function (_class) {
            if (typeof _class === 'string') {
              _class.split(' ').forEach(function (_c) {
                el.classList.remove(_c);
              });
            }
          });
        }
      }
    }
  }, {
    key: 'hasClass',
    value: function hasClass(el, _classes) {
      var contained = true;
      if (this.isNode(el)) {
        if (typeof _classes === 'string') {
          _classes.split(' ').forEach(function (_class) {
            if (!el.classList.contains(_class)) {
              contained = false;
            }
          });
        } else if (this.isArray(_classes)) {
          _classes.forEach(function (_class) {
            if (typeof _class === 'string') {
              _class.split(' ').forEach(function (_c) {
                if (!el.classList.contains(_c)) {
                  contained = false;
                }
              });
            }
          });
        }
      }
      return contained;
    }

    // Helpers

  }, {
    key: 'convertCSSUnit',
    value: function convertCSSUnit(_from, _to) {
      var _base = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1000;

      var rx_from = /(auto|0)|([+-]?)(\d+)(px|%|cm|em|ex|in|mm|pc|pt|px|rem|vh|vw|vmin)/;
      var rx_to = /(px|%|cm|em|ex|in|mm|pc|pt|px|rem|vh|vw|vmin)/;
      _from = String(_from).toLowerCase();
      _to = String(_to).toLowerCase();

      var match_to = _to.match(rx_to);
      if (typeof _from === 'string' && !this.isUndefined(match_to[1])) {
        var match_from = _from.match(rx_from);

        if (!this.isUndefined(match_from[1]) && match_from[1].toLowerCase() === 'auto' || !this.isUndefined(match_from[3]) && !this.isUndefined(match_from[4])) {
          var body = document.querySelector('body');
          body.insertAdjacentHTML('beforeend', '<div class="conver-css-unit" style="position: absolute; top: -99999px; visibility: hidden;">\n          <div class="_to" style="width: ' + (_base + _to) + ';"></div>\n        </div>');
          var p = body.querySelector('.conver-css-unit');
          var b = p.querySelector('._to');

          var factor = _base / b.offsetWidth;
          body.removeChild(p);
          return factor * match_from[3] + _to;
        }
      }
      return false;
    }
  }, {
    key: 'isNode',
    value: function isNode(o) {
      return (typeof Node === 'undefined' ? 'undefined' : _typeof(Node)) === "object" ? o instanceof Node : o && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === "object" && typeof o.nodeType === "number" && typeof o.nodeName === "string";
    }
  }, {
    key: 'isElement',
    value: function isElement(o) {
      return (typeof HTMLElement === 'undefined' ? 'undefined' : _typeof(HTMLElement)) === "object" ? o instanceof HTMLElement : //DOM2
      o && (typeof o === 'undefined' ? 'undefined' : _typeof(o)) === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName === "string";
    }
  }, {
    key: 'isUndefined',
    value: function isUndefined(o) {
      return o === undefined;
    }
  }, {
    key: 'isObject',
    value: function isObject(o) {
      return o instanceof Object && !Array.isArray(o);
    }
  }, {
    key: 'isArray',
    value: function isArray(o) {
      return o instanceof Object && Array.isArray(o);
    }
  }, {
    key: 'merge',
    value: function merge(target) {
      var _this5 = this;

      for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
        sources[_key2 - 1] = arguments[_key2];
      }

      sources.forEach(function (source, indexSource) {
        if (!(target instanceof Phaser.Sprite) && window.Phaser.Plugin.Isometric.IsoSprite && !(target instanceof window.Phaser.Plugin.Isometric.IsoSprite)) {
          if (_this5.isObject(source)) {
            if (_this5.isObject(target)) {
              Object.keys(source).forEach(function (key) {
                var value = source[key];
                if (_this5.isObject(value) || _this5.isArray(value)) {
                  if (typeof value !== 'undefined') {
                    target[key] = _this5.merge(target[key], value);
                  }
                } else {
                  if (typeof value !== 'undefined') {
                    target[key] = value;
                  }
                }
              });
            } else {
              if (typeof source !== 'undefined') {
                target = source;
              }
            }
          } else if (_this5.isArray(source)) {
            if (_this5.isArray(target)) {
              source.forEach(function (value, index) {
                if (typeof value !== 'undefined') {
                  target[index] = value;
                }
              });
            } else {
              if (typeof source !== 'undefined') {
                target = source;
              }
            }
          } else {
            if (typeof source !== 'undefined') {
              target = source;
            }
          }
        } else {
          if (typeof source !== 'undefined') {
            target = source;
          }
        }
      });

      return target;
    }
  }, {
    key: 'on',
    value: function on(events, selector, data, fn) {
      if (typeof events !== 'string') {
        console.warn('Argument "event" must be a string. Usage \non(event [, selector] [, data], fn)');
      }
      var el = null;
      if (typeof selector === 'function') {
        fn = selector;
        el = this._.el.container;
      } else if (this.isNode(selector) || this.isElement(selector)) {
        el = selector;
      } else if (typeof selector === 'string') {
        el = this._.el.container.parentElement.querySelector(selector);
      } else {
        data = selector;
        el = this._.el.container;
      }

      if (typeof data === 'function') {
        fn = data;
        data = {};
      }

      if (typeof fn !== 'function') {
        console.warn('Argument "fn" must be a function. Usage \non(event [, selector] [, data], fn)');
      } else {
        var eventsArray = events.split(' ');
        if (eventsArray.length > 0) {
          var _loop = function _loop() {
            var event = eventsArray[index];
            if (event !== '' && eventsArray.hasOwnProperty(index)) {
              el.addEventListener(event, function (ev) {
                data = data || {};
                data.detail = ev.detail;
                fn(event, data);
              });
            }
          };

          for (var index = 0; index <= eventsArray.length - 1; eventsArray++) {
            _loop();
          }
        }
      }

      return this;
    }

    // Updates

  }, {
    key: 'updatePosition',
    value: function updatePosition(offset) {
      var owner = this._.owner;
      var parentPos = this.getParentPosition(owner);
      var styles = getComputedStyle(this._.el.container);

      if (this._.el.container && styles.position.toLowerCase() === 'absolute') {
        if (parentPos.x !== false && parentPos.y !== false) {
          offset = offset || {
            left: 0,
            top: 0
          };

          if (this._.options) {
            offset.top = owner.height + 10;
            if (this._.options.styles) {
              offset.left += this._.options.styles.left ? this._.options.styles.left : 0;
              offset.top += this._.options.styles.top ? this._.options.styles.top : 0;
            }
          }

          var left = parentPos.x - (this._.options && this._.options.center === true ? this._.el.container.offsetWidth / 2 : 0) - (offset.left || 0);
          var top = parentPos.y - (offset.top || 0);

          if (styles.display.toLowerCase() === 'none') {
            this._.el.container.style.display = 'inline-block';
          }
          this._.el.container.style.left = left + 'px';
          this._.el.container.style.top = top + 'px';
        } else {
          if (typeof owner !== 'undefined') {
            this._.el.container.style.display = 'none';
          }
        }
      }
    }
  }, {
    key: 'updateValues',
    value: function updateValues(values) {
      var _this6 = this;

      values.forEach(function (value, index) {
        var el = void 0;

        if (typeof value.el === 'string') {
          el = _this6._.el[value.el];
        } else if (_this6.isNode(value.el) || _this6.isElement(value.el)) {
          el = value.el;
        }
        if (el && el !== null && value instanceof Object) {
          _this6.updateValue(el, value);
        }
      });
    }
  }, {
    key: 'updateValue',
    value: function updateValue(el, value) {
      /**
       * key: {
       *   text: '',
       *   prefix: '',
       *   suffix: '',
       *   mathOp: WebComponent.FLOOR
       * }
       *
       * key: {
       *   html: ''
       * }
       */
      if (el && el !== null) {
        if (value.text && value.text !== '') {
          var text = value.text;
          if (value.mathOp) {
            var mathOp = value.mathOp;
            if (Math.hasOwnProperty(mathOp)) {
              text = Math[mathOp](text);
            }
          }

          el.textContent = (value.prefix || '') + text + (value.suffix || '');
        } else if (value.html) {
          el.innerHTML = value.html;
        }
      }
    }
  }, {
    key: 'update',
    value: function update(valuesToUpdate, positionOffset) {
      var _this7 = this;

      if (this._.watchers && this._.watchers.length > 0) {
        if (owner && owner.alive) {
          this._.watchers.forEach(function (watcher, index) {
            var owner = watcher.owner || _this7._.owner;
            if (valuesToUpdate instanceof Array && valuesToUpdate.length > 0) {
              _this7.updateValues(valuesToUpdate);
            }
          });
        }
      }

      var owner = this._.owner;
      if (owner && owner.alive) {
        if (this._.ownerPrevPosition.x !== owner.position.x || this._.ownerPrevPosition.y !== owner.position.y || this._.cameraPrevPosition.x !== this.game.camera.position.x || this._.cameraPrevPosition.y !== this.game.camera.position.y) {
          this.updatePosition(positionOffset);
          if (this._.ownerPrevPosition.x !== owner.position.x || this._.ownerPrevPosition.y !== owner.position.y) {
            this._.ownerPrevPosition.x = owner.position.x;
            this._.ownerPrevPosition.y = owner.position.y;
          } else if (this._.cameraPrevPosition.x !== this.game.camera.position.x || this._.cameraPrevPosition.y !== this.game.camera.position.y) {
            this._.cameraPrevPosition.x = this._.cameraPrevPosition.x;
            this._.cameraPrevPosition.y = this._.cameraPrevPosition.y;
          }
        }
      }

      _get(_class2.prototype.__proto__ || Object.getPrototypeOf(_class2.prototype), 'update', this).call(this);
    }
  }]);

  return _class2;
}(Phaser.Sprite);

exports.default = _class2;

/***/ }),
/* 1 */
/*!*****************************************************!*\
  !*** multi ./src/js/index.js ./src/sass/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! J:\Dropbox\Projects\development\phaserwebcomponents\src\js\index.js */2);
module.exports = __webpack_require__(/*! J:\Dropbox\Projects\development\phaserwebcomponents\src\sass\index.scss */42);


/***/ }),
/* 2 */
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

// import Badge from './Components/UI/Badge/index.js';
// import Calendar from './Components/UI/Calendar/index.js';
// import Card from './Components/UI/Card/index.js';
// import Collapse from './Components/UI/Collapse/index.js';
// import ColorPicker from './Components/UI/ColorPicker/index.js';
// import DropDown from './Components/UI/DropDown/index.js';
// import Group from './Components/UI/Group/index.js';
// import Header from './Components/UI/Header/index.js';
// import Keyboard from './Components/UI/Keyboard/index.js';
// import Layout from './Components/UI/Layout/index.js';

// import MenuBar from './Components/UI/MenuBar/index.js';
// import MenuItem from './Components/UI/MenuItem/index.js';
// import Pager from './Components/UI/Pager/index.js';
// import Pagination from './Components/UI/Pagination/index.js';
// import Popover from './Components/UI/Popover/index.js';
// import ProgressBar from './Components/UI/ProgressBar/index.js';

// import Showcase from './Components/UI/Showcase/index.js';
// import Slider from './Components/UI/Slider/index.js';

// import Tab from './Components/UI/Tab/index.js';

// import Timer from './Components/UI/Timer/index.js';
// import Toast from './Components/UI/Toast/index.js';
// import Toggle from './Components/UI/Toggle/index.js';
// import Tooltip from './Components/UI/Tooltip/index.js';

// import Minimap from './Components/Game/Minimap/index.js';

// import ScreenWriter from './Components/Game/ScreenWriter/index.js';

// import Carousel from './Components/Media/Carousel/index.js';

// import Shape from './Components/Media/Shape/index.js';


var _index = __webpack_require__(/*! ./Utility/index.js */ 3);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ./Components/UI/Loader/index.js */ 4);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ./Components/UI/Marker/index.js */ 6);

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(/*! ./Components/UI/SeekBar/index.js */ 8);

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(/*! ./Components/UI/Switch/index.js */ 12);

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__(/*! ./Components/UI/Tag/index.js */ 14);

var _index12 = _interopRequireDefault(_index11);

var _index13 = __webpack_require__(/*! ./Components/UI/VolumeBar/index.js */ 16);

var _index14 = _interopRequireDefault(_index13);

var _index15 = __webpack_require__(/*! ./Components/UI/Window/index.js */ 18);

var _index16 = _interopRequireDefault(_index15);

var _index17 = __webpack_require__(/*! ./Components/Game/DamageIndicator/index.js */ 20);

var _index18 = _interopRequireDefault(_index17);

var _index19 = __webpack_require__(/*! ./Components/Game/NamePlate/index.js */ 22);

var _index20 = _interopRequireDefault(_index19);

var _index21 = __webpack_require__(/*! ./Components/Game/ScreenSplatter/index.js */ 24);

var _index22 = _interopRequireDefault(_index21);

var _index23 = __webpack_require__(/*! ./Components/Game/StatBar/index.js */ 28);

var _index24 = _interopRequireDefault(_index23);

var _index25 = __webpack_require__(/*! ./Components/Media/Avatar/index.js */ 30);

var _index26 = _interopRequireDefault(_index25);

var _index27 = __webpack_require__(/*! ./Components/Media/Icon/index.js */ 32);

var _index28 = _interopRequireDefault(_index27);

var _index29 = __webpack_require__(/*! ./Components/Media/Line/index.js */ 34);

var _index30 = _interopRequireDefault(_index29);

var _index31 = __webpack_require__(/*! ./Components/Media/MusicPlayer/index.js */ 36);

var _index32 = _interopRequireDefault(_index31);

var _index33 = __webpack_require__(/*! ./Components/Media/VideoPlayer/index.js */ 40);

var _index34 = _interopRequireDefault(_index33);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function () {
  var PhaserWebComponents = function () {
    function PhaserWebComponents(game, parent) {
      _classCallCheck(this, PhaserWebComponents);

      Phaser.Plugin.call(this, game, parent);

      this.game = game;
      this.VERSION = [0, 0, 1];
      this.Utility = _index2.default;

      this.components = {
        UI: {
          // Badge: Badge,
          // Calendar: Calendar,
          // Card: Card,
          // Collapse: Collapse,
          // ColorPicker: ColorPicker,
          // DropDown: DropDown,
          // Group: Group,
          // Header: Header,
          // Keyboard: Keyboard,
          // Layout: Layout,
          Loader: _index4.default,
          Marker: _index6.default,
          // MenuBar: MenuBar,
          // MenuItem: MenuItem,
          // Pager: Pager,
          // Pagination: Pagination,
          // Popover: Popover,
          // ProgressBar: ProgressBar,
          SeekBar: _index8.default,
          // Showcase: Showcase,
          // Slider: Slider,
          Switch: _index10.default,
          // Tab: Tab,
          Tag: _index12.default,
          // Timer: Timer,
          // Toast: Toast,
          // Toggle: Toggle,
          // Tooltip: Tooltip,
          VolumeBar: _index14.default,
          Window: _index16.default
        },
        Game: {
          DamageIndicator: _index18.default,
          // Minimap: Minimap,
          NamePlate: _index20.default,
          ScreenSplatter: _index22.default,
          // ScreenWriter: ScreenWriter,
          StatBar: _index24.default
        },
        Media: {
          Avatar: _index26.default,
          // Carousel: Carousel,
          Icon: _index28.default,
          Line: _index30.default,
          MusicPlayer: _index32.default,
          // Shape: Shape,
          VideoPlayer: _index34.default
        }
      };

      this.registry = {};

      window._PWC = this;
      game.PhaserWebComponents = this;
      return this;
    }

    _createClass(PhaserWebComponents, [{
      key: 'version',
      value: function version() {
        return this.VERSION.join('.');
      }
    }]);

    return PhaserWebComponents;
  }();

  Phaser.Plugin.PhaserWebComponents = PhaserWebComponents;
})();

/***/ }),
/* 3 */
/*!*********************************!*\
  !*** ./src/js/Utility/index.js ***!
  \*********************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 4 */
/*!**********************************************!*\
  !*** ./src/js/Components/UI/Loader/index.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _WebComponent2 = __webpack_require__(/*! ../WebComponent */ 0);

var _WebComponent3 = _interopRequireDefault(_WebComponent2);

var _template = __webpack_require__(/*! ./template.js */ 5);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WebComponent) {
  _inherits(_class, _WebComponent);

  function _class(options) {
    _classCallCheck(this, _class);

    var pid = document.querySelectorAll('.loader').length;
    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, options, {
      pid: pid,
      template: _template2.default[typeof opts !== 'undefined' && opts.type ? opts.type : 'default'],
      options: {
        amount: 8,
        className: 'circle'
      }
    }));
  }

  _createClass(_class, [{
    key: 'createComponent',
    value: function createComponent() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'createComponent', this).call(this, '.loader');
      if (this._.el.container !== null) {
        var container = this._.el.container;
        var amount = this._.options.amount;
        for (var i = 0; i < amount; i++) {
          container.insertAdjacentHTML('beforeend', '<div class="' + this._.options.className + '"></div>');
        }

        this._.el.text = container.querySelector('.text');
      }
    }
  }, {
    key: 'update',
    value: function update() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'update', this).call(this);
    }
  }]);

  return _class;
}(_WebComponent3.default);

exports.default = _class;

/***/ }),
/* 5 */
/*!*************************************************!*\
  !*** ./src/js/Components/UI/Loader/template.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  default: "<div class=\"loader\"></div>"
};

/***/ }),
/* 6 */
/*!**********************************************!*\
  !*** ./src/js/Components/UI/Marker/index.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _WebComponent2 = __webpack_require__(/*! ../WebComponent */ 0);

var _WebComponent3 = _interopRequireDefault(_WebComponent2);

var _template = __webpack_require__(/*! ./template.js */ 7);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// allow for fixing to the UI and point toward the owner/target position
var _class = function (_WebComponent) {
  _inherits(_class, _WebComponent);

  function _class(options) {
    _classCallCheck(this, _class);

    var pid = document.querySelectorAll('.marker').length;
    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, options, {
      pid: pid,
      template: _template2.default[typeof opts !== 'undefined' && opts.type ? opts.type : 'default']
    }));
  }

  _createClass(_class, [{
    key: 'createComponent',
    value: function createComponent() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'createComponent', this).call(this, '.marker');

      if (this._.el.container !== null) {
        var container = this._.el.container;

        this._.el.text = container.querySelector('.text');
        this._.el.outerArrow = container.querySelector('.arrow-outer');
        this._.el.innerArrow = this._.el.outerArrow.querySelector('.arrow-inner');
      }
    }
  }, {
    key: 'setupComponent',
    value: function setupComponent() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'setupComponent', this).call(this);

      if (typeof this._.options.text === 'string' && this._.options.text !== '') {
        this._.el.text.textContent = this._.options.text;
      }
    }

    /**
     * {
     *   colors: {
     *     primary: '#000000',
     *     secondary: '#000000',
     *   }
     *
     * }
     */

  }, {
    key: 'theme',
    value: function theme(_theme) {
      if (!_theme) {
        return false;
      }

      if (_theme.colors) {
        if (_theme.colors.primary) {
          this._.el.container.style['background-color'] = _theme.colors.primary;
          this._.el.outerArrow.style['border-color'] = _theme.colors.primary + ' transparent transparent transparent';
        }

        if (_theme.colors.secondary) {
          this._.el.text.style['background-color'] = _theme.colors.secondary;
          this._.el.innerArrow.style['border-color'] = _theme.colors.secondary + ' transparent transparent transparent';
        }
      }
    }
  }, {
    key: 'update',
    value: function update() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'update', this).call(this);
    }
  }]);

  return _class;
}(_WebComponent3.default);

exports.default = _class;

/***/ }),
/* 7 */
/*!*************************************************!*\
  !*** ./src/js/Components/UI/Marker/template.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  default: "<div class=\"marker\" data-pid=[$pid]>\n    <div class=\"text\"></div>\n    <div class=\"arrow-outer\">\n      <div class=\"arrow-inner\"></div<\n    </div>\n  </div>"
};

/***/ }),
/* 8 */
/*!***********************************************!*\
  !*** ./src/js/Components/UI/SeekBar/index.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _WebComponent2 = __webpack_require__(/*! ../WebComponent */ 0);

var _WebComponent3 = _interopRequireDefault(_WebComponent2);

var _template = __webpack_require__(/*! ./template.js */ 9);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * events
 * positionset
 */
var _class = function (_WebComponent) {
  _inherits(_class, _WebComponent);

  function _class(options) {
    _classCallCheck(this, _class);

    var pid = document.querySelectorAll('.seek-bar').length;
    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, options, {
      pid: pid,
      template: _template2.default[typeof opts !== 'undefined' && opts.type ? opts.type : 'default'],
      position: 0,
      mouseDown: false
    }));
  }

  _createClass(_class, [{
    key: 'createComponent',
    value: function createComponent() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'createComponent', this).call(this, '.seek-bar');

      if (this._.el.container !== null) {
        var container = this._.el.container;

        this._.el.progress = container.querySelector('.progress');
        this._.el.buffer = container.querySelector('.buffer');
        this._.el.bar = container.querySelector('.bar');
        this._.el.scrubber = container.querySelector('.scrubber');
      }
    }
  }, {
    key: 'setupComponent',
    value: function setupComponent() {
      var _this2 = this;

      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'setupComponent', this).call(this);

      var container = this._.el.container;
      var progress = this._.el.progress;

      container.addEventListener('mousedown', function (ev) {
        _this2._.mouseDown = true;
      });

      document.addEventListener('mouseup', function (ev) {
        _this2._.mouseDown = false;
        if (ev.target === progress) {
          _this2.setPosition(ev.layerX, false, true);
        }
      });

      document.addEventListener('mousemove', function (ev) {
        if (_this2._.mouseDown === true && ev.target === progress) {

          _this2.setPosition(ev.layerX);
        }
      });
    }
  }, {
    key: 'updateBuffer',
    value: function updateBuffer(bf, currentTime, duration) {
      var seekbar = this._.el.container;
      var inc = seekbar.offsetWidth / duration;
      var bfMaxLen = 10;

      if (bf.length > 0) {
        var buffers = this._.el.buffer.querySelectorAll('.bar');
        var lenBuffers = buffers.length;
        for (var index = 0; index < lenBuffers; index++) {
          var lastItem = buffers.item(lenBuffers);
          if (lastItem !== null) {
            lastItem.parentElement.removeChild(lastItem);
          }
        }

        for (var _index = 0; _index < Math.min(bf.length, bfMaxLen); _index++) {
          var start = bf.start(_index) * inc;
          var end = bf.end(_index) * inc;
          var width = end - start;
          // bfs.push({
          //   index: index,
          //   start: start,
          //   end: end,
          //   width: width,
          // });

          this.buffer(_index, start + 'px', end + 'px', width + 'px');
        }
      }
    }
  }, {
    key: 'buffer',
    value: function buffer(index, start, end, width) {
      var bar = this._.el.buffer.querySelector('.bar[data-id="' + index + '"]');
      if (bar === null) {
        bar = this._.el.buffer.insertAdjacentHTML('beforeend', '<div class="bar" data-id="' + index + '"></div>');
        bar = this._.el.buffer.querySelector('.bar:last-child');
      }

      if (bar.style.left !== start) {
        bar.style.left = start;
      }

      if (bar.style.width !== width) {
        bar.style.width = width;
      }
    }
  }, {
    key: 'setPosition',
    value: function setPosition(position, isPercentage, manualUpdate) {
      isPercentage = isPercentage || false;
      var value = position;
      if (isPercentage === true) {
        position = Math.floor(parseInt(this._.el.progress.offsetWidth) / 100 * position);
      }

      var event = 'setPosition';
      if (manualUpdate === true) {
        event = 'seekupdate';
      }

      this.trigger(event, {
        value: isPercentage ? value : position,
        percentage: isPercentage ? position : Math.floor(100 / parseInt(this._.el.progress.offsetWidth) * position)
      });

      this._.el.bar.style.width = position + 'px';

      return this;
    }
  }, {
    key: 'update',
    value: function update() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'update', this).call(this);
    }
  }]);

  return _class;
}(_WebComponent3.default);

exports.default = _class;

/***/ }),
/* 9 */
/*!**************************************************!*\
  !*** ./src/js/Components/UI/SeekBar/template.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  default: "<div class=\"seek-bar\">\n    <div class=\"progress\">\n      <div class=\"buffer\"></div>\n      <div class=\"bar\">\n        <div class=\"scrubber\"></div>\n      </div>\n    </div>\n  </div>"
};

/***/ }),
/* 10 */,
/* 11 */,
/* 12 */
/*!**********************************************!*\
  !*** ./src/js/Components/UI/Switch/index.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _WebComponent2 = __webpack_require__(/*! ../WebComponent */ 0);

var _WebComponent3 = _interopRequireDefault(_WebComponent2);

var _template = __webpack_require__(/*! ./template.js */ 13);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WebComponent) {
  _inherits(_class, _WebComponent);

  function _class(options) {
    _classCallCheck(this, _class);

    var pid = document.querySelectorAll('.switch').length;
    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, options, {
      pid: pid,
      template: _template2.default[typeof opts !== 'undefined' && opts.type ? opts.type : 'default']
    }));
  }

  _createClass(_class, [{
    key: 'createComponent',
    value: function createComponent() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'createComponent', this).call(this, '.switch');

      if (this._.el.container !== null) {
        var container = this._.el.container;

        this._.el.checkbox = container.querySelector('input[type="checkbox"]');
        this._.el.thumb = container.querySelector('label');
      }
    }
  }, {
    key: 'setupComponent',
    value: function setupComponent() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'setupComponent', this).call(this);

      var container = this._.el.container;
      var checkbox = this._.el.checkbox;
      checkbox.addEventListener('change', function (ev) {
        if (container !== null) {
          this.trigger('switch', {
            checked: checkbox.checked
          });
        }
      });
    }
  }, {
    key: 'update',
    value: function update() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'update', this).call(this);
    }
  }]);

  return _class;
}(_WebComponent3.default);

exports.default = _class;

/***/ }),
/* 13 */
/*!*************************************************!*\
  !*** ./src/js/Components/UI/Switch/template.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    default: "<div class=\"switch\" data-pid=[$pid]>\n      <input type=\"checkbox\" value=\"None\" id=\"switch-[$pid]\" name=\"check\" />\n      <label for=\"switch-[$pid]\"></label>\n    </div>"
};

/***/ }),
/* 14 */
/*!*******************************************!*\
  !*** ./src/js/Components/UI/Tag/index.js ***!
  \*******************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _WebComponent2 = __webpack_require__(/*! ../WebComponent */ 0);

var _WebComponent3 = _interopRequireDefault(_WebComponent2);

var _template = __webpack_require__(/*! ./template.js */ 15);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WebComponent) {
  _inherits(_class, _WebComponent);

  function _class(options) {
    _classCallCheck(this, _class);

    var pid = document.querySelectorAll('.tag').length;
    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, options, {
      pid: pid,
      template: _template2.default[typeof opts !== 'undefined' && opts.type ? opts.type : 'default']
    }));
  }

  _createClass(_class, [{
    key: 'createComponent',
    value: function createComponent() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'createComponent', this).call(this, '.tag');

      var container = this._.el.container;
      if (container !== null) {
        this._.el.identifier = container.querySelector('.identifier');
        this._.el.text = container.querySelector('.text');
      }
    }
  }, {
    key: 'setupComponent',
    value: function setupComponent() {
      var _this2 = this;

      var container = this._.el.container;
      if (container !== null) {
        if (this._.options.backgroundColor) {
          this._.el.identifier.style.backgroundColor = this._.options.backgroundColor;
        }

        if (this._.options.type) {
          this._.el.identifier.classList.add(this._.options.type.toLowerCase());
        }

        if (this._.options.text) {
          this._.el.text.textContent = this._.options.text;
        }

        if (this._.options.html) {
          this._.el.text.innerHTML = this._.options.html;
        }

        if (this._.options.isCloseable === true) {
          container.insertAdjacentHTML('beforeend', '<button class="close">&times;</button>');
          var btnClose = container.querySelector('button.close');
          btnClose.addEventListener('click', function (ev) {
            container.classList.add('hidden');
            _this2.trigger('closed', {
              pid: _this2._.pid
            });
          });
        }

        if (this.isArray(this._.options.buttons) && this._.options.buttons.length > 0) {
          this._.el.buttons = [];
          this._.options.buttons.forEach(function (button) {
            var template = document.createElement('template');
            var html = void 0;
            if (!_this2.isUndefined(button.html)) {
              html = button.html;
            } else {
              html = '<button>' + button.text + '<button>';
            }
            template.innerHTML = html;
            var el = template.content.firstChild;

            if (button.classes) {
              el.classList.add(button.classes);
            }

            if (button.align) {
              el.classList.add('pull-' + button.align);
            }

            if (button.callback) {
              el.addEventListener('click', button.callback);
            }

            var parent = _this2._.el.text;
            parent.appendChild(el);
            _this2._.el.buttons.push(el);
          });
        }

        if (this._.options.type.toLowerCase() === 'arrow') {
          var direction = !this.isUndefined(this._.options.arrowDirection) ? this._.options.arrowDirection.toLowerCase() : 'left';
          this._.el.identifier.classList.add(direction);

          var styles = window.getComputedStyle(container);
          var size = parseInt(styles.height) / 3 * 2 + 'px';
          this._.el.identifier.style.height = size;
          this._.el.identifier.style.width = size;

          container.insertAdjacentHTML('beforeend', '<div class="cover"></div>');
          var cover = container.querySelector('.cover');
          cover.classList.add(direction);
          cover.style.height = styles.height;
          cover.style.width = Math.ceil(parseInt(styles.height) / 2 + 1) + 'px';

          if (this._.options.backgroundColor) {
            this._.el.identifier.style.backgroundColor = this._.options.backgroundColor;
            cover.style.backgroundColor = this._.options.backgroundColor;
          }

          if (direction === 'right') {
            container.style.borderRadius = '0 7px 7px 0';
            container.style.paddingRight = '24px';
            container.style.marginRight = '10px';
          } else {
            container.style.borderRadius = '7px 0 0 7px';
            container.style.paddingLeft = '28px';
            container.style.marginLeft = '10px';
          }
        }
      }
    }
  }, {
    key: 'update',
    value: function update() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'update', this).call(this);
    }
  }]);

  return _class;
}(_WebComponent3.default);

exports.default = _class;

/***/ }),
/* 15 */
/*!**********************************************!*\
  !*** ./src/js/Components/UI/Tag/template.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  default: "<div class=\"tag\" data-pid=\"[$pid]\">\n    <div class=\"identifier\"></div>\n    <a class=\"text\"></a>\n  </div>"
};

/***/ }),
/* 16 */
/*!*************************************************!*\
  !*** ./src/js/Components/UI/VolumeBar/index.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _WebComponent2 = __webpack_require__(/*! ../WebComponent */ 0);

var _WebComponent3 = _interopRequireDefault(_WebComponent2);

var _template = __webpack_require__(/*! ./template.js */ 17);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WebComponent) {
  _inherits(_class, _WebComponent);

  function _class(options) {
    _classCallCheck(this, _class);

    var pid = document.querySelectorAll('.volume-bar').length;
    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, options, {
      pid: pid,
      template: _template2.default[typeof opts !== 'undefined' && opts.type ? opts.type : 'default'],
      volume: 100,
      mouseDown: false
    }));
  }

  _createClass(_class, [{
    key: 'createComponent',
    value: function createComponent() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'createComponent', this).call(this, '.volume-bar');

      if (this._.el.container !== null) {
        var container = this._.el.container;

        this._.el.back = container.querySelector('.back');
        this._.el.fill = container.querySelector('.fill');
      }
    }
  }, {
    key: 'setupComponent',
    value: function setupComponent() {
      var _this2 = this;

      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'setupComponent', this).call(this);

      var container = this._.el.container;

      container.addEventListener('mousedown', function (ev) {
        _this2._.mouseDown = true;
      });

      document.addEventListener('mouseup', function (ev) {
        _this2._.mouseDown = false;
        if (ev.target === container) {
          var volume = _this2.setVolume(ev.layerX);
        }
      });

      document.addEventListener('mousemove', function (ev) {
        if (_this2._.mouseDown === true && ev.target === container) {

          var volume = _this2.setVolume(ev.layerX);
        }
      });

      if (this._.options.styles instanceof Object) {
        if (this._.options.styles.width) {
          this._.el.back.style['border-left-width'] = this._.options.styles.width;
          this._.el.fill.style['border-left-width'] = this._.options.styles.width;
        }

        if (this._.options.styles.height) {
          this._.el.back.style['border-bottom-width'] = this._.options.styles.height;
          this._.el.fill.style['border-bottom-width'] = this._.options.styles.height;
        }
      }
    }
  }, {
    key: 'getVolume',
    value: function getVolume() {
      return this._.volume;
    }
  }, {
    key: 'setVolume',
    value: function setVolume(fillPx, isPercentage) {
      isPercentage = isPercentage || false;
      var container = this._.el.container;
      var height = parseInt(container.offsetHeight);
      var width = parseInt(container.offsetWidth);
      var perc = fillPx;
      if (!isPercentage) {
        perc = 100 / width * fillPx;
      } else {
        fillPx = width / 100 * perc;
      }
      var vertPoint = height / 100 * perc;

      this._.volume = perc;

      this.setFill(fillPx, vertPoint);

      this.trigger('setVolume', {
        volume: perc / 100,
        percentage: perc,
        width: fillPx + 'px'
      });

      return perc;
    }
  }, {
    key: 'setFill',
    value: function setFill(fillPx, vertPoint) {
      var height = parseInt(this._.el.container.offsetHeight);
      this._.el.fill.style['border-bottom-width'] = vertPoint + 'px';
      this._.el.fill.style['border-left-width'] = fillPx + 'px';
      this._.el.fill.style['margin-top'] = height - vertPoint + 'px';
    }
  }, {
    key: 'toggleVolume',
    value: function toggleVolume() {
      if (this._.volume === 0) {
        this._.volume = this._.unMuteVolume;
      } else {
        this._.unMuteVolume = this._.volume;
        this._.volume = 0;
      }

      this.setVolume(this._.volume, true);
      return this._.volume;
    }
  }, {
    key: 'update',
    value: function update() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'update', this).call(this);
    }
  }]);

  return _class;
}(_WebComponent3.default);

exports.default = _class;

/***/ }),
/* 17 */
/*!****************************************************!*\
  !*** ./src/js/Components/UI/VolumeBar/template.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  default: "<div class=\"volume-bar\">\n    <div class=\"back\"></div>\n    <div class=\"fill\"></div>\n  </div>"
};

/***/ }),
/* 18 */
/*!**********************************************!*\
  !*** ./src/js/Components/UI/Window/index.js ***!
  \**********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _WebComponent2 = __webpack_require__(/*! ../WebComponent */ 0);

var _WebComponent3 = _interopRequireDefault(_WebComponent2);

var _template = __webpack_require__(/*! ./template.js */ 19);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // Basic Window, Modal, Alert Box


var _class = function (_WebComponent) {
  _inherits(_class, _WebComponent);

  function _class(options) {
    _classCallCheck(this, _class);

    var templateKeys = Object.keys(_template2.default);
    var TYPES = templateKeys.map(function (v) {
      return v.toUpperCase();
    });
    var typeId = TYPES.indexOf(options.options.type.toUpperCase());
    var type = TYPES[typeId].toLowerCase();
    var pid = document.querySelectorAll('.' + type).length;

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, options, {
      pid: pid,
      template: _template2.default[type],
      options: {
        type: type,
        roundValues: true,
        inverted: false,
        direction: 'horizontal'
      }
    }));
  }

  _createClass(_class, [{
    key: 'updatePosition',
    value: function updatePosition() {
      if (this._.el.container.style.display.toLowerCase() === 'none') {
        this._.el.container.style.display = 'inline-block';
      }

      /*
      let x = 0;
      let y = 0;
      this._.el.container.style.left = x + 'px';
      this._.el.container.style.top = y + 'px';
      */
    }
  }, {
    key: 'createComponent',
    value: function createComponent() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'createComponent', this).call(this, '.' + this._.options.type);

      if (this._.el.container !== null) {
        var container = this._.el.container;
        if (this._.options.name) {
          container.id = this._.options.name;
        }

        if (container.parentNode.classList.contains('backdrop')) {
          this._.el.backdrop = container.parentNode;
        }
        this._.el.header = container.querySelector('.header');

        if (this._.el.header !== null) {
          this._.el.headerIcon = this._.el.header.querySelector('.icon');
          this._.el.headerTitle = this._.el.header.querySelector('.title');
          this._.el.headerTitleText = this._.el.headerTitle.querySelector('.title-text');
          this._.el.headerControls = this._.el.header.querySelector('.controls');
          this._.el.headerControlClose = this._.el.headerControls.querySelector('.control[data-action="close"]');
        }
        this._.el.body = container.querySelector('.body');

        if (this._.options.title && this._.el.header !== null) {
          this.updateValue(this.getElement('headerTitleText'), {
            text: this._.options.title
          });
        }

        if (this._.options.bodyTemplate && this._.el.body !== null) {
          this.updateValue(this.getElement('body'), {
            html: this._.options.bodyTemplate
          });
        }
      }
    }
  }, {
    key: 'die',
    value: function die(destroy) {
      if (destroy === true) {
        if (this._.el.backdrop) {
          var parent = this._.el.backdrop.parentNode;
          parent.removeChild(this._.el.backdrop);
        }
      } else {
        if (this._.el.backdrop) {
          this._.el.backdrop.style.display = 'none';
        }
      }
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'die', this).call(this, destroy);
    }
  }, {
    key: 'setupComponent',
    value: function setupComponent() {
      var _this2 = this;

      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'setupComponent', this).call(this);
      if (this._.el.header !== null) {
        var close = this.getElement('headerControlClose');
        if (close !== null) {
          close.addEventListener('click', function (ev) {
            _this2.die(true);
          });
        }
      }
    }
  }, {
    key: 'update',
    value: function update() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'update', this).call(this, []);
    }
  }]);

  return _class;
}(_WebComponent3.default);

exports.default = _class;

/***/ }),
/* 19 */
/*!*************************************************!*\
  !*** ./src/js/Components/UI/Window/template.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Basic Window, Modal, Alert Box

exports.default = {
  alert: "<div class=\"backdrop\">\n    <div data-pid=\"[$pid]\" class=\"alert\">\n      <div class=\"header\">\n        <div class=\"icon\"></div>\n        <div class=\"title\">\n          <label class=\"title-text\"></label>\n        </div>\n        <div class=\"controls\">\n          <div class=\"control\" data-action=\"close\"></div>\n        </div>\n      </div>\n      <div class=\"body\"></div>\n    </div>\n  </div>",
  panel: "<div data-pid=\"[$pid]\" class=\"panel\">\n      <div class=\"body\"></div>\n    </div>\n  </div>",
  window: "<div data-pid=\"[$pid]\" class=\"window\">\n      <div class=\"header\" data-ismoveable=\"true\">\n        <div class=\"icon\"></div>\n        <div class=\"title\">\n          <label class=\"title-text\"></label>\n        </div>\n        <div class=\"controls\">\n          <div class=\"control\" data-action=\"close\"></div>\n        </div>\n      </div>\n      <div class=\"body\"></div>\n    </div>"
};

/***/ }),
/* 20 */
/*!*********************************************************!*\
  !*** ./src/js/Components/Game/DamageIndicator/index.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _WebComponent2 = __webpack_require__(/*! ../../UI/WebComponent */ 0);

var _WebComponent3 = _interopRequireDefault(_WebComponent2);

var _template = __webpack_require__(/*! ./template.js */ 21);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WebComponent) {
  _inherits(_class, _WebComponent);

  function _class(options) {
    _classCallCheck(this, _class);

    // Damage Indicator
    var dis = document.querySelectorAll('.damage-indicator');
    var pid = void 0;

    if (dis.length > 0) {
      var lastPid = dis[0];
      pid = parseInt(lastPid.dataset.pid) + 1;
    } else {
      pid = 0;
    }

    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, options, {
      pid: pid,
      template: _template2.default.default,
      options: {
        distance: 100,
        time: 1000,
        fadeOut: 500,
        roundValues: true
      }
    }));
  }

  _createClass(_class, [{
    key: 'createComponent',
    value: function createComponent() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'createComponent', this).call(this, '.damage-indicator');

      if (this._.el.container !== null) {
        var container = this._.el.container;
        this._.el.value = container.querySelector('.value');
        this.updateValue(this.getElement('value'), {
          text: this._.options.amount
        });
      }
    }
  }, {
    key: 'update',
    value: function update() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'update', this).call(this);

      var owner = this._.owner;
      var damageIndicator = this._.el.container;

      if (owner && owner.alive) {
        var parentPos = this.getParentPosition(owner);
        if (parentPos.x !== false && parentPos.y !== false) {

          if (damageIndicator.style.display.toLowerCase() === 'none') {
            damageIndicator.style.display = 'inline-block';
          }

          this.animate();
        } else {
          this.die(this.DESTROY);
        }
      } else {
        this.die(this.DESTROY);
      }
    }
  }]);

  return _class;
}(_WebComponent3.default);

exports.default = _class;

/***/ }),
/* 21 */
/*!************************************************************!*\
  !*** ./src/js/Components/Game/DamageIndicator/template.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  default: "<div data-pid=\"[$pid]\" class=\"damage-indicator\">\n            <label class=\"value\">0</label>\n          </div>"
};

/***/ }),
/* 22 */
/*!***************************************************!*\
  !*** ./src/js/Components/Game/NamePlate/index.js ***!
  \***************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _WebComponent2 = __webpack_require__(/*! ../../UI/WebComponent */ 0);

var _WebComponent3 = _interopRequireDefault(_WebComponent2);

var _template = __webpack_require__(/*! ./template.js */ 23);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WebComponent) {
  _inherits(_class, _WebComponent);

  function _class(options) {
    _classCallCheck(this, _class);

    // Name Plate
    var pid = document.querySelectorAll('.name-plate').length;
    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, options, {
      pid: pid,
      template: _template2.default.default
    }));
  }

  _createClass(_class, [{
    key: 'createComponent',
    value: function createComponent() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'createComponent', this).call(this, '.name-plate');

      if (this._.el.container !== null) {
        var container = this._.el.container;
        this._.el.display = container.querySelector('.display');
        this._.el.text = this._.el.display.querySelector('.text');
        this._.el.overlay = this._.el.display.querySelector('.overlay');
      }
    }
  }, {
    key: 'getValuesToUpdate',
    value: function getValuesToUpdate() {
      var _this2 = this;

      var valuesToUpdate = [];

      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'getValuesToUpdate', this).call(this).forEach(function (values, index) {
        if (values instanceof Object) {
          valuesToUpdate.push(values);
        }
      });

      this._.watchers.forEach(function (watcher, index) {
        var owner = watcher.owner || _this2._.owner;
        var v = owner._.options[watcher.value || 'name'];
        if (v !== _this2.getValue('text')) {
          valuesToUpdate.push({
            el: 'text',
            text: v
          });

          valuesToUpdate.push({
            el: 'overlay',
            text: v
          });
        }
      });

      return valuesToUpdate;
    }
  }, {
    key: 'update',
    value: function update() {
      var _this3 = this;

      this._.watchers.forEach(function (watcher, index) {
        var owner = watcher.owner || _this3._.owner;
        var namePlate = _this3._.el.container;

        if (owner && owner.alive) {
          _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'update', _this3).call(_this3, _this3.getValuesToUpdate(), { y: 30 });
        } else {
          namePlate.style.display = 'none';
        }
      });
    }
  }]);

  return _class;
}(_WebComponent3.default);

exports.default = _class;

/***/ }),
/* 23 */
/*!******************************************************!*\
  !*** ./src/js/Components/Game/NamePlate/template.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  default: "<div data-pid=\"[$pid]\" class=\"name-plate\">\n              <div class=\"display\">\n                <label class=\"text\"></label>\n                <label class=\"overlay\"></label>\n              </div>\n            </div>"
};

/***/ }),
/* 24 */
/*!********************************************************!*\
  !*** ./src/js/Components/Game/ScreenSplatter/index.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _WebComponent2 = __webpack_require__(/*! ../../UI/WebComponent */ 0);

var _WebComponent3 = _interopRequireDefault(_WebComponent2);

var _template = __webpack_require__(/*! ./template.js */ 25);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WebComponent) {
  _inherits(_class, _WebComponent);

  function _class(options) {
    _classCallCheck(this, _class);

    var pid = document.querySelectorAll('.screen-splatter').length;
    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, options, {
      pid: pid,
      template: _template2.default[typeof opts !== 'undefined' && opts.type ? opts.type : 'default'],
      playing: false
    }));
  }

  _createClass(_class, [{
    key: 'createComponent',
    value: function createComponent() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'createComponent', this).call(this, '.screen-splatter');

      var container = this._.el.container;
      if (container !== null) {}
    }
  }, {
    key: 'setupComponent',
    value: function setupComponent() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'setupComponent', this).call(this);

      var container = this._.el.container;
      if (container !== null) {

        container.style.backgroundImage = 'url(\'' + this._.options.source + '\')';
        container.style.animationPlayState = 'paused';
        container.style.opacity = 0;
        this._.el.container.style.display = 'none';

        if (this.isObject(this._.options.animation)) {
          if (typeof this._.options.animation.name === 'string') {
            container.style.animationName = this._.options.animation.name;
          }

          if (typeof this._.options.animation.duration === 'string') {
            container.style.animationDuration = this._.options.animation.duration;
          }

          if (typeof this._.options.animation.delay === 'string') {
            container.style.animationDelay = this._.options.animation.delay;
          }

          if (typeof this._.options.animation.iterationCount === 'string') {
            container.style.animationIterationCount = this._.options.animation.iterationCount;
          }

          if (typeof this._.options.animation.timingFunction === 'string') {
            container.style.animationTimingFunction = this._.options.animation.timingFunction;
          }

          if (typeof this._.options.animation.fillMode === 'string') {
            container.style.animationFillMode = this._.options.animation.fillMode;
          }

          if (typeof this._.options.animation.direction === 'string') {
            container.style.animationDirection = this._.options.animation.direction;
          }
        }

        if (this.isObject(this._.options.size)) {
          if (this._.options.size.height) {
            container.style.height = this._.options.size.height;
          } else {
            if (this._.options.size.width) {
              container.style.height = this._.options.size.width;
            }
          }

          if (this._.options.size.width) {
            container.style.width = this._.options.size.width;
          } else {
            if (this._.options.size.height) {
              container.style.width = this._.options.size.height;
            }
          }
        }

        if (this.isObject(this._.options.position)) {
          this.updatePosition(this._.options.position.x, this._.options.position.y);
        }
      }
    }
  }, {
    key: 'play',
    value: function play() {
      this.resume();
      if (typeof this._.options.animation.name === 'string') {
        this._.el.container.style.animationName = this._.options.animation.name;
        this._.playing = true;
      }
      this._.started = +new Date();

      return this;
    }
  }, {
    key: 'pause',
    value: function pause() {
      this._.el.container.style.animationPlayState = 'paused';
      this._.playing = false;

      return this;
    }
  }, {
    key: 'resume',
    value: function resume() {
      this._.el.container.style.display = 'inline-block';
      this._.el.container.style.opacity = this._.options.styles ? parseInt(this._.options.styles.opacity) : 1;
      this._.el.container.style.animationPlayState = 'running';

      return this;
    }
  }, {
    key: 'togglePlay',
    value: function togglePlay() {
      if (this._.playing === true) {
        this.play();
      } else {
        this.pause();
      }

      return this;
    }
  }, {
    key: 'stop',
    value: function stop() {
      this._.el.container.style.animationName = '';
      this._.el.container.style.opacity = 0;
      this._.el.container.style.display = 'none';
      this._.playing = false;

      return this;
    }
  }, {
    key: 'restart',
    value: function restart() {
      this.stop();
      this.play();
      return this;
    }
  }, {
    key: 'setRandomPosition',
    value: function setRandomPosition() {
      var zone = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._.options.zone;


      // Randomizes the position based on the zone.
      var top = zone.top || zone.y || 0;
      var left = zone.left || zone.x || 0;

      var right = window.innerWidth - (zone.right + parseInt(this._.options.size.width)) || window.innerWidth - (zone.x + parseInt(this._.options.size.width)) || 0;
      var bottom = window.innerHeight - (zone.bottom + parseInt(this._.options.size.height)) || window.innerHeight - (zone.y + parseInt(this._.options.size.height)) || 0;

      var x = Math.max(left, Math.min(right, Math.floor(Math.random() * window.innerWidth))) + 'px';
      var y = Math.max(top, Math.min(bottom, Math.floor(Math.random() * window.innerHeight))) + 'px';

      this.setPosition(x, y);

      return this;
    }
  }, {
    key: 'setPosition',
    value: function setPosition(x, y) {
      if (x) {
        this._.el.container.style.left = x;
      } else {
        if (y) {
          this._.el.container.style.left = y;
        }
      }

      if (y) {
        this._.el.container.style.top = y;
      } else {
        if (x) {
          this._.el.container.style.top = x;
        }
      }
    }
  }, {
    key: 'getSize',
    value: function getSize() {}
  }, {
    key: 'update',
    value: function update() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'update', this).call(this);
      var now = +new Date();
      if (this._.playing !== false && this._.started + this._.options.life <= now) {
        this.stop();
      };
    }
  }, {
    key: 'remove',
    value: function remove() {
      this.destroy();
      this.die(true);
    }
  }]);

  return _class;
}(_WebComponent3.default);

exports.default = _class;

/***/ }),
/* 25 */
/*!***********************************************************!*\
  !*** ./src/js/Components/Game/ScreenSplatter/template.js ***!
  \***********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  default: "<div class=\"screen-splatter\" data-pid=\"[$pid]\"></div>"
};

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */
/*!*************************************************!*\
  !*** ./src/js/Components/Game/StatBar/index.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _WebComponent2 = __webpack_require__(/*! ../../UI/WebComponent */ 0);

var _WebComponent3 = _interopRequireDefault(_WebComponent2);

var _template = __webpack_require__(/*! ./template.js */ 29);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WebComponent) {
  _inherits(_class, _WebComponent);

  function _class(options) {
    _classCallCheck(this, _class);

    // Stat Bar
    var pid = document.querySelectorAll('.stat-bar').length;

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, options, {
      pid: pid,
      template: _template2.default.default,
      options: {
        roundValues: true,
        inverted: false,
        direction: 'horizontal'
      }
    }));

    _this.HORIZONTAL = 'horizontal';
    _this.VERTICAL = 'vertical';

    _this.setupWatchers();
    return _this;
  }

  _createClass(_class, [{
    key: 'createComponent',
    value: function createComponent() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'createComponent', this).call(this, '.stat-bar');

      if (this._.el.container !== null) {
        var container = this._.el.container;

        this._.el.bar = container.querySelector('.bar');
        this._.el.display = container.querySelector('.display');
        if (this._.el.display) {
          this._.el.current = this._.el.display.querySelector('.current');
          this._.el.max = this._.el.display.querySelector('.max');
        }
      }
    }
  }, {
    key: 'getValuesToUpdate',
    value: function getValuesToUpdate() {
      var _this2 = this;

      var valuesToUpdate = [];

      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'getValuesToUpdate', this).call(this).forEach(function (values, index) {
        if (values instanceof Object) {
          valuesToUpdate.push(values);
        }
      });

      this._.watchers.forEach(function (watcher, index) {
        var owner = watcher.owner || _this2._.owner;
        var v = _this2.getProperty(owner._.options, watcher.value);
        if (v) {
          if (parseInt(v) !== parseInt(_this2.getValue('current'))) {
            valuesToUpdate.push({
              el: 'current',
              text: v,
              mathOp: _this2._.options.roundValues === true ? _this2.FLOOR : false
            });
          }

          v = watcher.max;
          if (parseInt(v) !== parseInt(_this2.getValue('max'))) {
            valuesToUpdate.push({
              el: 'max',
              text: v,
              mathOp: _this2._.options.roundValues === true ? _this2.FLOOR : false
            });
          }
        }
      });

      return valuesToUpdate;
    }
  }, {
    key: 'setupWatchers',
    value: function setupWatchers() {
      var _this3 = this;

      this._.watchers.forEach(function (watcher, index) {
        var owner = watcher.owner || _this3._.owner;
        var statBar = _this3._.el.container;

        if (owner && owner.alive) {
          var bar = _this3._.el.bar;

          if (bar !== null) {
            if (watcher.proxy) {
              // = this.getProperty(owner._.options, watcher.value);
              watcher.this = _this3;
              watcher[watcher.name] = {};
              var values = void 0;

              var _loop = function _loop(w) {
                var s = watcher.proxy[w];

                values = Object.defineProperty(watcher[watcher.name], w, {
                  get: function get() {
                    return s;
                  },
                  set: function set(newValue) {
                    s = newValue;
                    watcher.this.updateBar();
                  }
                });
              };

              for (var w in watcher.proxy) {
                _loop(w);
              }

              _this3.values = values;
              watcher.this.updateBar();
            } else {
              // WTF?
            }
          } else {}
        } else {
          statBar.style.display = 'none';
        }
      });
    }
  }, {
    key: 'updateBar',
    value: function updateBar() {
      var _this4 = this;

      this._.watchers.forEach(function (watcher, index) {
        var owner = watcher.owner || _this4._.owner;
        var statBar = _this4._.el.container;

        if (owner && owner.alive) {
          var bar = _this4._.el.bar;
          var w = watcher[watcher.name];

          if (watcher.this._.options.direction.toLowerCase() === watcher.this.HORIZONTAL) {
            var newWidth = statBar.clientWidth * (w.current / w.max);
            if (watcher.this._.options.inverted === true) {
              bar.style.width = statBar.clientWidth - newWidth + 'px';
            } else {
              bar.style.width = newWidth + 'px';
            }
          } else if (watcher.this._.options.direction.toLowerCase() === watcher.this.VERTICAL) {
            var newHeight = statBar.clientHeight * (w.current / w.max);
            if (watcher.this._.options.inverted === true) {
              bar.style.height = statBar.clientHeight - newHeight + 'px';
            } else {
              bar.style.height = newHeight + 'px';
            }
          }
        } else {}
      });
    }
  }, {
    key: 'update',
    value: function update() {
      var _this5 = this;

      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'update', this).call(this);
      this._.watchers.forEach(function (watcher, index) {
        var owner = watcher.owner || _this5._.owner;
        var statBar = _this5._.el.container;

        if (owner && owner.alive === false) {
          statBar.style.display = 'none';
        }
      });
    }
  }]);

  return _class;
}(_WebComponent3.default);

exports.default = _class;

/***/ }),
/* 29 */
/*!****************************************************!*\
  !*** ./src/js/Components/Game/StatBar/template.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  default: "<div data-pid=\"[$pid]\" class=\"stat-bar\">\n              <div class=\"bar\"></div>\n              <div class=\"display\">\n                <label class=\"current\">0</label>/<label class=\"max\">0</label>\n              </div>\n            </div>"
};

/***/ }),
/* 30 */
/*!*************************************************!*\
  !*** ./src/js/Components/Media/Avatar/index.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _WebComponent2 = __webpack_require__(/*! ../../UI/WebComponent */ 0);

var _WebComponent3 = _interopRequireDefault(_WebComponent2);

var _template = __webpack_require__(/*! ./template.js */ 31);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WebComponent) {
  _inherits(_class, _WebComponent);

  function _class(options) {
    _classCallCheck(this, _class);

    var pid = document.querySelectorAll('.avatar').length;
    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, options, {
      pid: pid,
      template: _template2.default[typeof opts !== 'undefined' && opts.type ? opts.type : 'default']
    }));
  }

  _createClass(_class, [{
    key: 'createComponent',
    value: function createComponent() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'createComponent', this).call(this, '.avatar');

      var container = this._.el.container;
      if (container !== null) {
        this._.el.image = container.querySelector('.image');
      }
    }
  }, {
    key: 'setupComponent',
    value: function setupComponent() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'setupComponent', this).call(this);

      var container = this._.el.container;
      if (container !== null) {

        if (this._.options.defaultSource) {
          container.style.backgroundImage = 'url(\'' + this._.options.defaultSource + '\')';
        }

        if (this._.options.source) {
          this._.el.image.src = this._.options.source;
        } else {
          this._.el.image.style.display = 'none';
        }

        if (this._.options.size) {
          container.style.height = this._.options.size;
          container.style.width = this._.options.size;
        }
      }
    }
  }, {
    key: 'update',
    value: function update() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'update', this).call(this);
    }
  }]);

  return _class;
}(_WebComponent3.default);

exports.default = _class;

/***/ }),
/* 31 */
/*!****************************************************!*\
  !*** ./src/js/Components/Media/Avatar/template.js ***!
  \****************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  default: "<div class=\"avatar\" data-pid=\"[$pid]\">\n    <img src=\"[$source]\" class=\"image\" />\n  </div>"
};

/***/ }),
/* 32 */
/*!***********************************************!*\
  !*** ./src/js/Components/Media/Icon/index.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _WebComponent2 = __webpack_require__(/*! ../../UI/WebComponent */ 0);

var _WebComponent3 = _interopRequireDefault(_WebComponent2);

var _template2 = __webpack_require__(/*! ./template.js */ 33);

var _template3 = _interopRequireDefault(_template2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WebComponent) {
  _inherits(_class, _WebComponent);

  function _class(options) {
    _classCallCheck(this, _class);

    var pid = document.querySelectorAll('.icon').length;
    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, options, {
      pid: pid,
      template: _template3.default[typeof opts !== 'undefined' && opts.type ? opts.type : 'default']
    }));
  }

  _createClass(_class, [{
    key: 'createComponent',
    value: function createComponent() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'createComponent', this).call(this, '.icon');

      var container = this._.el.container;
      if (container !== null) {}
    }
  }, {
    key: 'setupComponent',
    value: function setupComponent() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'setupComponent', this).call(this);

      var container = this._.el.container;
      if (container !== null) {

        var _template = this._.options.template;
        if (typeof _template === 'string') {
          container.insertAdjacentHTML('beforeend', _template);
        }
      }
    }
  }, {
    key: 'update',
    value: function update() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'update', this).call(this);
    }
  }]);

  return _class;
}(_WebComponent3.default);

exports.default = _class;

/***/ }),
/* 33 */
/*!**************************************************!*\
  !*** ./src/js/Components/Media/Icon/template.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  default: "<div class=\"icon\" data-pid=\"[$pid]\"></div>"
};

/***/ }),
/* 34 */
/*!***********************************************!*\
  !*** ./src/js/Components/Media/Line/index.js ***!
  \***********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _WebComponent2 = __webpack_require__(/*! ../../UI/WebComponent */ 0);

var _WebComponent3 = _interopRequireDefault(_WebComponent2);

var _template = __webpack_require__(/*! ./template.js */ 35);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WebComponent) {
  _inherits(_class, _WebComponent);

  function _class(options) {
    _classCallCheck(this, _class);

    var pid = document.querySelectorAll('.line').length;
    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, options, {
      pid: pid,
      template: _template2.default[typeof opts !== 'undefined' && opts.type ? opts.type : 'default']
    }));
  }

  _createClass(_class, [{
    key: 'createComponent',
    value: function createComponent() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'createComponent', this).call(this, '.line');

      var container = this._.el.container;
      if (container !== null) {
        this._.el.image = container.querySelector('.image');
      }
    }
  }, {
    key: 'setupComponent',
    value: function setupComponent() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'setupComponent', this).call(this);

      var container = this._.el.container;
      if (container !== null) {

        if (this._.options.color) {
          container.style.backgroundColor = this._.options.color;
        }

        if (!isNaN(this._.options.thickness)) {
          container.style.width = this._.options.thickness + 'px';
        }

        if (this.isObject(this._.options.points)) {
          var ax = 0,
              ay = 0,
              bx = 0,
              by = 0;
          if (this.isObject(this._.options.points.a)) {
            ax = this._.options.points.a.x;
            ay = this._.options.points.a.y;
          }
          if (this.isObject(this._.options.points.b)) {
            bx = this._.options.points.b.x;
            by = this._.options.points.b.y;
          }
          this.draw(ax, ay, bx, by);
        }
      }
    }
  }, {
    key: 'draw',
    value: function draw() {
      var ax = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var ay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var bx = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var by = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;

      if (ay > by) {
        bx = ax + bx;
        ax = bx - ax;
        bx = bx - ax;
        by = ay + by;
        ay = by - ay;
        by = by - ay;
      }

      var container = this._.el.container;
      var length = Math.sqrt((ax - bx) * (ax - bx) + (ay - by) * (ay - by));
      var calc = Math.atan((ay - by) / (bx - ax));
      calc = calc * 180 / Math.PI;
      container.style.height = length + 'px';
      container.style.top = ay + 'px';
      container.style.left = ax + 'px';
      container.style.transform = 'rotate(' + calc + 'deg)';
      container.style['-ms-transform'] = 'rotate(' + calc + 'deg)';
      container.style['-moz-transform'] = 'rotate(' + calc + 'deg)';
      container.style['-webkit-transform'] = 'rotate(' + calc + 'deg)';
      container.style['-o-transform'] = 'rotate(' + calc + 'deg)';
    }
  }, {
    key: 'update',
    value: function update() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'update', this).call(this);
    }
  }]);

  return _class;
}(_WebComponent3.default);

exports.default = _class;

/***/ }),
/* 35 */
/*!**************************************************!*\
  !*** ./src/js/Components/Media/Line/template.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  default: "<div class=\"line\" data-pid=\"[$pid]\"></div>"
};

/***/ }),
/* 36 */
/*!******************************************************!*\
  !*** ./src/js/Components/Media/MusicPlayer/index.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _WebComponent2 = __webpack_require__(/*! ../../UI/WebComponent */ 0);

var _WebComponent3 = _interopRequireDefault(_WebComponent2);

var _template = __webpack_require__(/*! ./template.js */ 37);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _class = function (_WebComponent) {
  _inherits(_class, _WebComponent);

  function _class(options) {
    _classCallCheck(this, _class);

    var pid = document.querySelectorAll('.music-player').length;
    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, options, {
      pid: pid,
      template: _template2.default[typeof opts !== 'undefined' && opts.type ? opts.type : 'default']
    }));
  }

  _createClass(_class, [{
    key: 'createComponent',
    value: function createComponent() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'createComponent', this).call(this, '.music-player');
    }
  }, {
    key: 'update',
    value: function update() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'update', this).call(this);
    }
  }]);

  return _class;
}(_WebComponent3.default);

exports.default = _class;

/***/ }),
/* 37 */
/*!*********************************************************!*\
  !*** ./src/js/Components/Media/MusicPlayer/template.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  default: ""
};

/***/ }),
/* 38 */,
/* 39 */,
/* 40 */
/*!******************************************************!*\
  !*** ./src/js/Components/Media/VideoPlayer/index.js ***!
  \******************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _WebComponent2 = __webpack_require__(/*! ../../UI/WebComponent */ 0);

var _WebComponent3 = _interopRequireDefault(_WebComponent2);

var _template2 = __webpack_require__(/*! ./template.js */ 41);

var _template3 = _interopRequireDefault(_template2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Events: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
var _class = function (_WebComponent) {
  _inherits(_class, _WebComponent);

  function _class(options) {
    var _ret;

    _classCallCheck(this, _class);

    var pid = document.querySelectorAll('.video-player').length;

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, options, {
      pid: pid,
      template: _template3.default[typeof opts !== 'undefined' && opts.type ? opts.type : 'default'],
      options: {
        videoOptions: {
          width: '400px',
          startPosition: 0
        },
        onControls: false,
        hideDelay: 0.5,
        hideTimeout: undefined
      }
    }));

    return _ret = _this, _possibleConstructorReturn(_this, _ret);
  }

  _createClass(_class, [{
    key: 'createComponent',
    value: function createComponent() {
      var _this2 = this;

      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'createComponent', this).call(this, '.video-player');

      if (this._.el.container !== null) {
        var container = this._.el.container;

        this._.el.title = container.querySelector('.title');
        this._.el.player = container.querySelector('.player');

        this._.el.video = this._.el.player.querySelector('video.video');
        this._.el.play = this._.el.player.querySelector('.play.big');
        this._.el.controls = this._.el.player.querySelector('.controls');

        this._.el.btnPlay = this._.el.controls.querySelector('button.play');
        this._.el.btnPause = this._.el.controls.querySelector('button.pause');
        this._.el.btnRestart = this._.el.controls.querySelector('button.restart');
        this._.el.btnStop = this._.el.controls.querySelector('button.stop');
        this._.el.btnFullscreen = this._.el.controls.querySelector('button.fullscreen');
        this._.el.btnMute = this._.el.controls.querySelector('button.mute');

        this._.el.seekbar = this.game.add.existing(new this.game.PhaserWebComponents.components.UI.SeekBar({
          game: this.game,
          target: this._.el.controls.querySelector('[data-replace="seekbar"]'),
          events: {
            seekupdate: function seekupdate(name, data) {
              var isPlaying = _this2.isPlaying();
              _this2.pause();

              var seconds = _this2._.el.video.duration / 100 * data.detail.percentage;
              _this2._.el.video.currentTime = seconds;

              var icon = _this2._.el.play;
              var iconClass = {
                old: [_this2._.options.videoOptions.icons.classes.pause, _this2._.options.videoOptions.icons.classes.play],
                new: _this2._.options.videoOptions.icons.classes.loading
              };

              _this2.removeClass(icon.querySelector('i.fa'), iconClass.old);
              _this2.addClass(icon.querySelector('i.fa'), iconClass.new);
              _this2.removeClass(_this2._.el.btnPlay.querySelector('i.fa'), iconClass.old);
              _this2.addClass(_this2._.el.btnPlay.querySelector('i.fa'), iconClass.new);

              if (isPlaying === true) {
                _this2.play();
              }
            }
          },
          options: {}
        }));

        this._.el.volumebar = this.game.add.existing(new this.game.PhaserWebComponents.components.UI.VolumeBar({
          game: this.game,
          target: this._.el.controls.querySelector('[data-replace="volumebar"]'),
          events: {
            setVolume: function setVolume(name, data) {
              _this2.setVolume(data.detail.volume);
            }
          },
          options: {
            styles: {
              width: '50px',
              height: '10px'
            }
          }
        }));

        this._.el.volumebar.setVolume(this._.options.videoOptions.volume || 100, true);
      }
    }
  }, {
    key: 'setupComponent',
    value: function setupComponent() {
      var _this3 = this,
          _arguments = arguments;

      if (this._.el.video !== null) {
        this._.el.video.controls = false;

        var events = ['abort', 'canplay', 'canplaythrough', 'durationchange', 'emptied', 'encrypted', 'ended', 'error', 'interruptbegin', 'interruptend', 'loadeddata', 'loadedmetadata', 'loadstart', 'mozaudioavailable', 'pause', 'play', 'playing', 'progress', 'ratechange', 'seeked', 'seeking', 'stalled', 'suspend', 'timeupdate', 'volumechange', 'waiting'];

        events.forEach(function (event) {
          _this3._.el.video.addEventListener(event, function (ev) {
            _this3.trigger.apply(_this3, [event].concat(Array.prototype.slice.call(_arguments)));
          }, false);
        });

        this._.el.player.addEventListener('mouseenter', function (ev) {
          ev.stopPropagation();
          if (_this3._.options.hideTimeout) {
            clearTimeout(_this3._.options.hideTimeout);
          }

          // if (parseFloat(this.el.playIcon.style.opacity) !== 0.0) {
          //   var icon = this._.el.play.querySelector('i.fa');
          //   icon.classList.add('fa-play');
          //   icon.classList.remove('fa-pause');
          // }

          _this3.showControls();
          _this3._.options.onControls = true;
        }, false);

        this._.el.player.addEventListener('mouseleave', function (ev) {
          ev.stopPropagation();
          if (_this3._.options.hideTimeout) {
            clearTimeout(_this3._.options.hideTimeout);
          }

          // if (parseFloat(this.el.playIcon.style.opacity) !== 0.0) {
          //   var icon = this.el.playIcon.querySelector('i.fa');
          //   icon.classList.remove('fa-play');
          //   icon.classList.add('fa-pause');
          // }

          _this3._.options.hideTimeout = setTimeout(function () {
            console.log(_this3);
            _this3.hideControls();
          }, _this3._.options.hideDelay * 1000);
          _this3._.options.onControls = false;
        }, false);

        this._.el.video.addEventListener('click', function (ev) {
          ev.preventDefault();
          ev.stopPropagation();
          _this3.togglePlay();
        }, false);
        this._.el.play.addEventListener('click', function (ev) {
          ev.preventDefault();
          ev.stopPropagation();
          _this3.play();
        }, false);
        this._.el.btnPlay.addEventListener('click', function (ev) {
          ev.preventDefault();
          ev.stopPropagation();
          _this3.play();
        }, false);
        this._.el.btnPause.addEventListener('click', function (ev) {
          ev.preventDefault();
          ev.stopPropagation();
          _this3.pause();
        }, false);
        this._.el.btnRestart.addEventListener('click', function (ev) {
          ev.preventDefault();
          ev.stopPropagation();
          _this3.restart();
        }, false);
        this._.el.btnStop.addEventListener('click', function (ev) {
          ev.preventDefault();
          ev.stopPropagation();
          _this3.stop();
        }, false);
        this._.el.btnFullscreen.addEventListener('click', function (ev) {
          ev.preventDefault();
          ev.stopPropagation();
          _this3.fullscreen();
        }, false);

        this._.el.btnMute.addEventListener('click', function (ev) {
          var volume = _this3._.el.volumebar.toggleVolume();
        }, false);

        this.on('timeupdate', function (ev) {
          if (_this3._.el.seekbar) {
            var percentage = _this3.getCurrentTime(true);
            _this3.setSeekbarPosition(percentage);
          }
        });

        this.on('ended', function (ev) {
          _this3.pause();
        });

        this.on('progress', function () {
          // TODO: Finish update buffer.
          // let video = this._.el.video;
          // let bf = video.buffered;
          // this._.el.seekbar.updateBuffer(bf, video.currentTime, video.duration);
        });

        var videoOptions = this._.options.videoOptions;
        if (this.isObject(videoOptions) && this.isArray(videoOptions.sources) && videoOptions.sources.length > 0) {

          if (videoOptions.title) {
            var anchor = this._.el.title.querySelector('a');

            anchor.textContent = videoOptions.title;
            if (videoOptions.link) {
              anchor.setAttribute('src', videoOptions.link);
            }
          }

          if (videoOptions.width) {
            this._.el.player.style.width = videoOptions.width;
          }

          videoOptions.sources.forEach(function (source) {
            var filename = _this3.getFilename(source);
            var mimetype = _this3.getMimeType(filename);
            _this3._.el.video.insertAdjacentHTML('beforeend', '<source src="' + source + '" type="' + mimetype + '"></source>');
          });

          if (videoOptions.icons.template && Object.keys(videoOptions.icons.classes).length > 0) {
            var _template = videoOptions.icons.template;
            var classes = videoOptions.icons.classes;

            if (classes.play) {
              this._.el.play.insertAdjacentHTML('beforeend', _template.replace('[$icon]', (classes.big ? classes.big + ' ' : '') + classes.play));
              this._.el.btnPlay.insertAdjacentHTML('beforeend', _template.replace('[$icon]', (classes.small ? classes.small + ' ' : '') + classes.play));
            }

            if (classes.pause) {
              this._.el.btnPause.insertAdjacentHTML('beforeend', _template.replace('[$icon]', (classes.small ? classes.small + ' ' : '') + classes.pause));
            }

            if (classes.restart) {
              this._.el.btnRestart.insertAdjacentHTML('beforeend', _template.replace('[$icon]', (classes.small ? classes.small + ' ' : '') + classes.restart));
            }

            if (classes.stop) {
              this._.el.btnStop.insertAdjacentHTML('beforeend', _template.replace('[$icon]', (classes.small ? classes.small + ' ' : '') + classes.stop));
            }

            if (classes.fullscreen) {
              this._.el.btnFullscreen.insertAdjacentHTML('beforeend', _template.replace('[$icon]', (classes.small ? classes.small + ' ' : '') + classes.fullscreen));
            }

            if (classes.mute) {
              this._.el.btnMute.insertAdjacentHTML('beforeend', _template.replace('[$icon]', (classes.small ? classes.small + ' ' : '') + classes.mute));
            }
          }

          this.on('pause', function () {
            var icon = _this3._.el.play;
            var iconClass = {
              old: [_this3._.options.videoOptions.icons.classes.loading, _this3._.options.videoOptions.icons.classes.pause],
              new: _this3._.options.videoOptions.icons.classes.play
            };

            _this3.removeClass(icon.querySelector('i.fa'), iconClass.old);
            _this3.addClass(icon.querySelector('i.fa'), iconClass.new);

            _this3.addClass(_this3._.el.btnPause, 'hidden');
            if (_this3._.el.video.currentTime === 0) {
              _this3.addClass(_this3._.el.btnStop, 'hidden');
              _this3.addClass(_this3._.el.btnRestart, 'hidden');
            }
            _this3.removeClass(_this3._.el.btnPlay, 'hidden');
            _this3._.el.play.style.opacity = '0.6';
          });

          this.on('playing', function () {
            var icon = _this3._.el.play;
            var iconClass = {
              old: [_this3._.options.videoOptions.icons.classes.loading, _this3._.options.videoOptions.icons.classes.play],
              new: _this3._.options.videoOptions.icons.classes.pause
            };

            _this3.removeClass(icon.querySelector('i.fa'), iconClass.old);
            _this3.removeClass(icon.querySelector('i.fa'), iconClass.new);
            _this3.removeClass(icon.querySelector('i.fa'), 'hidden');

            _this3.removeClass(_this3._.el.btnStop, 'hidden');
            _this3.removeClass(_this3._.el.btnRestart, 'hidden');
            _this3.removeClass(_this3._.el.btnPause, 'hidden');
            _this3.addClass(_this3._.el.btnPlay, 'hidden');

            _this3._.el.play.style.opacity = '0';
          });

          this.on('emptied', function () {
            var icon = _this3._.el.play;
            var iconClass = {
              old: [_this3._.options.videoOptions.icons.classes.pause, _this3._.options.videoOptions.icons.classes.play],
              new: _this3._.options.videoOptions.icons.classes.loading
            };

            _this3.removeClass(icon.querySelector('i.fa'), iconClass.old);
            _this3.addClass(icon.querySelector('i.fa'), iconClass.new);
            _this3.removeClass(_this3._.el.btnPlay.querySelector('i.fa'), iconClass.old);
            _this3.addClass(_this3._.el.btnPlay.querySelector('i.fa'), iconClass.new);
          });

          this.on('loadstart', function () {
            var icon = _this3._.el.play;
            var iconClass = {
              old: [_this3._.options.videoOptions.icons.classes.pause, _this3._.options.videoOptions.icons.classes.play],
              new: _this3._.options.videoOptions.icons.classes.loading
            };

            _this3.removeClass(icon.querySelector('i.fa'), iconClass.old);
            _this3.addClass(icon.querySelector('i.fa'), iconClass.new);
            _this3.removeClass(_this3._.el.btnPlay.querySelector('i.fa'), iconClass.old);
            _this3.addClass(_this3._.el.btnPlay.querySelector('i.fa'), iconClass.new);
          });

          this.on('canplay', function () {
            var icon = _this3._.el.play;
            var iconClass = {
              old: [_this3._.options.videoOptions.icons.classes.loading, _this3._.options.videoOptions.icons.classes.play, _this3._.options.videoOptions.icons.classes.pause]
            };
            _this3.removeClass(icon.querySelector('i.fa'), iconClass.old);
            _this3.removeClass(_this3._.el.btnPlay.querySelector('i.fa'), iconClass.old);
            _this3.addClass(_this3._.el.btnPlay.querySelector('i.fa'), _this3._.options.videoOptions.icons.classes.play);

            if (_this3.isPlaying() === true) {
              _this3.addClass(icon.querySelector('i.fa'), _this3._.options.videoOptions.icons.classes.pause);
            } else {
              _this3.addClass(icon.querySelector('i.fa'), _this3._.options.videoOptions.icons.classes.play);
            }
          });

          this.on('durationchange', function () {
            if (videoOptions.startPosition !== 0) {
              _this3._.el.video.currentTime = videoOptions.startPosition;
              var perc = _this3.getCurrentTime(true);
              _this3.setSeekbarPosition(perc, true);
            }

            if (videoOptions.autoPlay === true) {
              _this3.play();
            }
          });
        }
      } else {}
    }
  }, {
    key: 'update',
    value: function update() {
      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'update', this).call(this);
    }
  }, {
    key: 'canPlayVideo',
    value: function canPlayVideo(player, ext) {
      if (this._.el.video !== null) {
        var ableToPlay = this._.el.video.canPlayType('video/' + ext);
        if (ableToPlay === '') {
          return false;
        } else {
          return true;
        }
      }
    }
  }, {
    key: 'getCurrentTime',
    value: function getCurrentTime(asPercentage) {
      var currentTime = this._.el.video.currentTime;
      var duration = this._.el.video.duration;
      asPercentage = asPercentage || false;

      if (asPercentage) {
        var perc = Math.floor(100 / duration * currentTime) || 0.0;
        return perc;
      }
      return currentTime;
    }
  }, {
    key: 'getFilename',
    value: function getFilename(fullpath) {
      return fullpath.replace(/^.*[\\\/]/, '');
    }
  }, {
    key: 'getMimeType',
    value: function getMimeType(filename) {
      var ext = filename.split('.').pop();
      var mimeTypes = {
        'flv': 'video/x-flv',
        'mp4': 'video/mp4',
        'm3u8': 'application/x-mpegURL',
        'ts': 'video/MP2T',
        '3gp': 'video/3gpp',
        'mov': 'video/quicktime',
        'avi': 'video/x-msvideo',
        'wmv': 'video/x-ms-wmv',
        'ogg': 'video/ogg',
        'ogv': 'video/ogg'
      };

      if (Object.keys(mimeTypes).indexOf(ext) !== -1) {
        return mimeTypes[ext];
      }
      return false;
    }
  }, {
    key: 'hideControls',
    value: function hideControls() {
      if (this._.options.hideTimeout) {
        clearTimeout(this._.options.hideTimeout);
      }
      console.log(this._.options);
      if (!this._.options.onControls) {
        var controls = this._.el.controls;
        var rect = controls.getBoundingClientRect();
        controls.style.borderTopWidth = '8px';
        controls.style.bottom = -(rect.height - 2) + 'px';
        console.log(-(rect.height - 2));
      }
    }
  }, {
    key: 'showControls',
    value: function showControls() {
      var controls = this._.el.controls;
      controls.style.borderTopWidth = '2px';
      controls.style.bottom = '0px';
    }
  }, {
    key: 'isPlaying',
    value: function isPlaying() {
      var video = this._.el.video;
      return video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
    }
  }, {
    key: 'play',
    value: function play() {
      var icon = this._.el.play;
      if (this.hasClass(icon.querySelector('i.fa'), this._.options.videoOptions.icons.classes.loading)) {
        return false;
      }
      if (!this.isPlaying()) {
        this._.el.video.play();
      }
    }
  }, {
    key: 'pause',
    value: function pause(force) {
      var icon = this._.el.play;
      force = force || false;
      if (this.hasClass(icon, this._.options.videoOptions.icons.classes.loading)) {
        return false;
      }
      if (force === true || this.isPlaying()) {
        this._.el.video.pause();
      }
    }
  }, {
    key: 'togglePlay',
    value: function togglePlay() {
      if (this._.el.video.paused || this._.el.video.ended) {
        this.play();
      } else {
        this.pause();
      }
    }
  }, {
    key: 'restart',
    value: function restart() {
      this._.el.video.currentTime = 0;
      if (!this.isPlaying()) {
        this.play();
      } else {
        this.pause(true);
      }
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.pause(true);
      this._.el.video.currentTime = 0;
    }
  }, {
    key: 'fullscreen',
    value: function fullscreen() {
      var player = this._.el.player;
      // var docElm = document.documentElement;
      var isInFullScreen = document.fullscreenElement && document.fullscreenElement !== null || document.webkitFullscreenElement && document.webkitFullscreenElement !== null || document.mozFullScreenElement && document.mozFullScreenElement !== null || document.msFullscreenElement && document.msFullscreenElement !== null;
      // var icon = this._.el.btnFullscreen.querySelector('i.fa');


      if (!isInFullScreen) {
        // icon.classList.add('fa-compress');
        // icon.classList.remove('fa-expand');
        player.classList.add('fullscreen');
        if (player.requestFullscreen) {
          player.requestFullscreen();
        } else if (player.mozRequestFullScreen) {
          player.mozRequestFullScreen();
        } else if (player.webkitRequestFullscreen) {
          player.webkitRequestFullscreen();
        } else if (player.msRequestFullscreen) {
          player.msRequestFullscreen();
        }
      } else {
        player.classList.remove('fullscreen');
        // icon.classList.add('fa-expand');
        // icon.classList.remove('fa-compress');
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      }
    }
  }, {
    key: 'setSeekbarPosition',
    value: function setSeekbarPosition(position, isPercentage) {
      isPercentage = isPercentage || false;
      this._.el.seekbar.setPosition(position, true);
    }
  }, {
    key: 'setVolume',
    value: function setVolume(vol) {
      vol = parseFloat(vol).toFixed(2);
      if (vol === 0.0) {
        this.addClass(this._.el.btnMute.querySelector('i.fa'), this._.options.videoOptions.icons.classes.mute);
      } else {
        this.addClass(this._.el.btnMute.querySelector('i.fa'), this._.options.videoOptions.icons.classes.volume);
      }
      this._.el.video.volume = vol;
    }
  }]);

  return _class;
}(_WebComponent3.default);

exports.default = _class;

/***/ }),
/* 41 */
/*!*********************************************************!*\
  !*** ./src/js/Components/Media/VideoPlayer/template.js ***!
  \*********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  default: "<div class=\"video-player\">\n    <div class=\"title\">\n      <a></a>\n    </div>\n    <div class=\"player\">\n      <video class=\"video\"></video>\n      <div class=\"play big\"></div>\n      <div class=\"controls\">\n        <div data-replace=\"seekbar\"></div>\n        <button class=\"play\"></button>\n        <button class=\"pause hidden\"></button>\n        <button class=\"restart hidden\"></button>\n        <button class=\"stop hidden\"></button>\n        <button class=\"fullscreen\"></button>\n        <div data-replace=\"volumebar\"></div>\n        <button class=\"mute\"></button>\n      </div>\n    </div>\n  </div>"
};

/***/ }),
/* 42 */
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"hidden":"hidden","pull-left":"pull-left","pull-right":"pull-right","resizer":"resizer","left":"left","right":"right","top":"top","bottom":"bottom","loader":"loader","circle":"circle","rotation":"rotation","color":"color","marker":"marker","arrow-outer":"arrow-outer","arrow-inner":"arrow-inner","text":"text","seek-bar":"seek-bar","progress":"progress","buffer":"buffer","bar":"bar","scrubber":"scrubber","switch":"switch","tag":"tag","identifier":"identifier","arrow":"arrow","cover":"cover","close":"close","volume-bar":"volume-bar","back":"back","fill":"fill","backdrop":"backdrop","alert":"alert","active":"active","header":"header","icon":"icon","title":"title","title-text":"title-text","controls":"controls","control":"control","body":"body","window":"window","panel":"panel","name-plate":"name-plate","display":"display","overlay":"overlay","screen-splatter":"screen-splatter","stat-bar":"stat-bar","dark-background":"dark-background","big":"big","value":"value","max":"max","avatar":"avatar","image":"image","line":"line","video-player":"video-player","player":"player","fullscreen":"fullscreen","video":"video","play":"play","fa":"fa","fa-play":"fa-play","mute":"mute"};

/***/ })
/******/ ]);
//# sourceMappingURL=phaser-web-components.js.map