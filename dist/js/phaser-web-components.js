webpackJsonp([0],[
/* 0 */
/*!********************************************************************************************************!*\
  !*** J:/Dropbox/Projects/development/Phaser Web Components/src/js/components/UI/WebComponent/index.js ***!
  \********************************************************************************************************/
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

var _class = function (_Phaser$Sprite) {
  _inherits(_class, _Phaser$Sprite);

  function _class(options, defaults) {
    _classCallCheck(this, _class);

    var game = options && options.owner ? options.owner.game : options.game;

    var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, game, options && options.x ? options.x : 0, options && options.y ? options.y : 0, options && options.key ? options.key : '', options && options.frame ? options.frame : ''));

    _this._ = {
      el: {},
      htmlParent: options && options.htmlParent ? options.htmlParent : game.canvas.parentElement,
      now: +new Date(),
      owner: options.owner,
      watchers: options.watchers || [],
      ownerPrevPosition: {
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

    if (!_this._.interactions) {
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

  _createClass(_class, [{
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

    // Helpers

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
        if (this._.ownerPrevPosition.x !== owner.position.x || this._.ownerPrevPosition.y !== owner.position.y) {
          this.updatePosition(positionOffset);
          this._.ownerPrevPosition.x = owner.position.x;
          this._.ownerPrevPosition.y = owner.position.y;
        }
      }

      _get(_class.prototype.__proto__ || Object.getPrototypeOf(_class.prototype), 'update', this).call(this);
    }
  }]);

  return _class;
}(Phaser.Sprite);

exports.default = _class;

/***/ }),
/* 1 */
/*!*************************************************************************************************************************************************************!*\
  !*** multi J:/Dropbox/Projects/development/Phaser Web Components/src/js/index.js J:/Dropbox/Projects/development/Phaser Web Components/src/sass/index.scss ***!
  \*************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! J:\Dropbox\Projects\development\Phaser Web Components\src\js\index.js */2);
module.exports = __webpack_require__(/*! J:\Dropbox\Projects\development\Phaser Web Components\src\sass\index.scss */16);


/***/ }),
/* 2 */
/*!*****************************************************************************!*\
  !*** J:/Dropbox/Projects/development/Phaser Web Components/src/js/index.js ***!
  \*****************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

// import Badge from './components/UI/Badge/index.js';
// import Calendar from './components/UI/Calendar/index.js';
// import Card from './components/UI/Card/index.js';
// import Collapse from './components/UI/Collapse/index.js';
// import ColorPicker from './components/UI/ColorPicker/index.js';
// import DropDown from './components/UI/DropDown/index.js';
// import Group from './components/UI/Group/index.js';
// import Header from './components/UI/Header/index.js';
// import Keyboard from './components/UI/Keyboard/index.js';
// import Layout from './components/UI/Layout/index.js';

// import MenuBar from './components/UI/MenuBar/index.js';
// import MenuItem from './components/UI/MenuItem/index.js';
// import Pager from './components/UI/Pager/index.js';
// import Pagination from './components/UI/Pagination/index.js';
// import Popover from './components/UI/Popover/index.js';
// import ProgressBar from './components/UI/ProgressBar/index.js';
// import Showcase from './components/UI/Showcase/index.js';
// import Slider from './components/UI/Slider/index.js';

// import Tab from './components/UI/Tab/index.js';
// import Tag from './components/UI/Tag/index.js';
// import Timer from './components/UI/Timer/index.js';
// import Toast from './components/UI/Toast/index.js';
// import Toggle from './components/UI/Toggle/index.js';
// import Tooltip from './components/UI/Tooltip/index.js';


// import DamageIndicator from './components/Game/DamageIndicator/index.js';
// import Minimap from './components/Game/Minimap/index.js';


var _index = __webpack_require__(/*! ./Utility/index.js */ 3);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(/*! ./components/UI/Loader/index.js */ 4);

var _index4 = _interopRequireDefault(_index3);

var _index5 = __webpack_require__(/*! ./components/UI/Marker/index.js */ 6);

var _index6 = _interopRequireDefault(_index5);

var _index7 = __webpack_require__(/*! ./components/UI/Switch/index.js */ 8);

var _index8 = _interopRequireDefault(_index7);

var _index9 = __webpack_require__(/*! ./components/UI/Window/index.js */ 10);

var _index10 = _interopRequireDefault(_index9);

var _index11 = __webpack_require__(/*! ./components/Game/NamePlate/index.js */ 12);

var _index12 = _interopRequireDefault(_index11);

var _index13 = __webpack_require__(/*! ./components/Game/StatBar/index.js */ 14);

var _index14 = _interopRequireDefault(_index13);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import Avatar from './components/Media/Avatar/index.js';
// import Carousel from './components/Media/Carousel/index.js';
// import Icon from './components/Media/Icon/index.js';
// import Line from './components/Media/Line/index.js';
// import MusicPlayer from './components/Media/MusicPlayer/index.js';
// import Shape from './components/Media/Shape/index.js';
// import VideoPlayer from './components/Media/VideoPlayer/index.js';

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
          // Showcase: Showcase,
          // Slider: Slider,
          Switch: _index8.default,
          // Tab: Tab,
          // Tag: Tag,
          // Timer: Timer,
          // Toast: Toast,
          // Toggle: Toggle,
          // Tooltip: Tooltip,
          Window: _index10.default
        },
        Game: {
          // DamageIndicator: DamageIndicator,
          // Minimap: Minimap,
          NamePlate: _index12.default,
          StatBar: _index14.default
        },
        Media: {
          // Avatar: Avatar,
          // Carousel: Carousel,
          // Icon: Icon,
          // Line: Line,
          // MusicPlayer: MusicPlayer,
          // Shape: Shape,
          // VideoPlayer: VideoPlayer,
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
/*!*************************************************************************************!*\
  !*** J:/Dropbox/Projects/development/Phaser Web Components/src/js/Utility/index.js ***!
  \*************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/***/ }),
/* 4 */
/*!**************************************************************************************************!*\
  !*** J:/Dropbox/Projects/development/Phaser Web Components/src/js/components/UI/Loader/index.js ***!
  \**************************************************************************************************/
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
/*!*****************************************************************************************************!*\
  !*** J:/Dropbox/Projects/development/Phaser Web Components/src/js/components/UI/Loader/template.js ***!
  \*****************************************************************************************************/
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
/*!**************************************************************************************************!*\
  !*** J:/Dropbox/Projects/development/Phaser Web Components/src/js/components/UI/Marker/index.js ***!
  \**************************************************************************************************/
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
/*!*****************************************************************************************************!*\
  !*** J:/Dropbox/Projects/development/Phaser Web Components/src/js/components/UI/Marker/template.js ***!
  \*****************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  default: "<div class=\"marker\" data-pid=[$pid]>\n    <div class=\"text\"></div>\n  </div>"
};

/***/ }),
/* 8 */
/*!**************************************************************************************************!*\
  !*** J:/Dropbox/Projects/development/Phaser Web Components/src/js/components/UI/Switch/index.js ***!
  \**************************************************************************************************/
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
          var event = new CustomEvent('switch', {
            detail: {
              checked: checkbox.checked
            }
          });
          container.dispatchEvent(event);
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
/* 9 */
/*!*****************************************************************************************************!*\
  !*** J:/Dropbox/Projects/development/Phaser Web Components/src/js/components/UI/Switch/template.js ***!
  \*****************************************************************************************************/
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
/* 10 */
/*!**************************************************************************************************!*\
  !*** J:/Dropbox/Projects/development/Phaser Web Components/src/js/components/UI/Window/index.js ***!
  \**************************************************************************************************/
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

var _template = __webpack_require__(/*! ./template.js */ 11);

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
/* 11 */
/*!*****************************************************************************************************!*\
  !*** J:/Dropbox/Projects/development/Phaser Web Components/src/js/components/UI/Window/template.js ***!
  \*****************************************************************************************************/
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
/* 12 */
/*!*******************************************************************************************************!*\
  !*** J:/Dropbox/Projects/development/Phaser Web Components/src/js/components/Game/NamePlate/index.js ***!
  \*******************************************************************************************************/
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
/* 13 */
/*!**********************************************************************************************************!*\
  !*** J:/Dropbox/Projects/development/Phaser Web Components/src/js/components/Game/NamePlate/template.js ***!
  \**********************************************************************************************************/
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
/* 14 */
/*!*****************************************************************************************************!*\
  !*** J:/Dropbox/Projects/development/Phaser Web Components/src/js/components/Game/StatBar/index.js ***!
  \*****************************************************************************************************/
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
/* 15 */
/*!********************************************************************************************************!*\
  !*** J:/Dropbox/Projects/development/Phaser Web Components/src/js/components/Game/StatBar/template.js ***!
  \********************************************************************************************************/
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
/* 16 */
/*!*********************************************************************************!*\
  !*** J:/Dropbox/Projects/development/Phaser Web Components/src/sass/index.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin
module.exports = {"resizer":"resizer","left":"left","right":"right","top":"top","bottom":"bottom","loader":"loader","circle":"circle","rotation":"rotation","color":"color","marker":"marker","text":"text","switch":"switch","backdrop":"backdrop","alert":"alert","active":"active","header":"header","icon":"icon","title":"title","title-text":"title-text","controls":"controls","control":"control","body":"body","window":"window","panel":"panel","name-plate":"name-plate","display":"display","overlay":"overlay","stat-bar":"stat-bar","dark-background":"dark-background","big":"big","bar":"bar","value":"value","max":"max"};

/***/ })
],[1]);
//# sourceMappingURL=phaser-web-components.js.map