// let merge = require('deeply');

// resizable: Able to be resized
// dropable: Able to accept a `dropable` object,
// draggable: Able to be dragged. Resets position if not placed in a dropable,,
// moveable: Able to be freely moved and remembers its position. Able to be constrained to a parent.
// sortable: Children can be sorted,
// selectable: Highlights when clicked,
// dockable: able to dock to the sides of the page. Possibly to windows,
// scrollspy: highlight options or trigger events on scroll,

export default class extends Phaser.Sprite {
  constructor(options, defaults) {
    let game = options && options.owner ? options.owner.game : options.game;
    super(game,
      options && options.x ? options.x : 0,
      options && options.y ? options.y : 0,
      options && options.key? options.key : '',
      options && options.frame ? options.frame : '',
    );

    this._ = {
      el: {},
      htmlParent: options && options.htmlParent? options.htmlParent : game.canvas.parentElement,
      now: +(new Date()),
      owner: options.owner,
      watchers: options.watchers || [],
      ownerPrevPosition: {
        x: null,
        y: null
      }
    };

    this.CEIL = 'ceil';
    this.DESTROY = true;
    this.FLOOR = 'floor';
    this.ROUND = 'round';

    this.animation = {
      NONE: null,
      FLOAT: {
        key: 'top',
        value: '[value]px',
      },
      SINK: {
        key: 'top',
        value: '[value]px',
      },
      FADE: {
        key: 'opacity',
        value: '[value]'
      },
    };

    if (typeof options !== undefined && typeof defaults !== undefined) {
      options = this.merge(defaults, options);
    }
    this._ = this.merge(this._, options);

    this.visible = false;
    this.exists = false;
    this.alive = false;

    if (!this._.interactions) {
      this._.interactions = window._PWC.registry.interactions = {};
      this._.interactions.moveable = {
        activeWindow: null,
        offsetPosition: {
          x: 0,
          y: 0
        },

        mousemove: (ev) => {
          if (this._.interactions.moveable.activeWindow !== null) {
            let mousePosition = {
              x: ev.x || ev.clientX || ev.pageX,
              y: ev.y || ev.clientY || ev.pageY
            }

            let windowPosition = {
              x: mousePosition.x - this._.interactions.moveable.offsetPosition.x,
              y: mousePosition.y - this._.interactions.moveable.offsetPosition.y
            }

            this._.interactions.moveable.activeWindow.style.left = windowPosition.x + 'px';
            this._.interactions.moveable.activeWindow.style.top = windowPosition.y + 'px';
          }
        },

        mouseup: (ev) => {
          if (this._.interactions.moveable.activeWindow !== null) {
            let ism = null;
            if (this._.interactions.moveable.activeWindow.dataset.ismoveable === 'true') {
              ism = this._.interactions.moveable.activeWindow;
            } else {
              ism = this._.interactions.moveable.activeWindow.querySelector('[data-ismoveable="true"]');
            }

            ism.classList.remove('moving');
            this._.interactions.moveable.activeWindow = null;
          }
        }
      };
      if (this._.interactions.set !== true) {
        document.addEventListener('mousemove', this._.interactions.moveable.mousemove);
        document.addEventListener('mouseup', this._.interactions.moveable.mouseup);
      }
    }

    this.createComponent();
    this.setupComponent();
    this.updatePosition();
    this.updateValues(this.getValuesToUpdate());
  }

  // Component specific methods

  createComponent(cssSelector) {
    let template = document.createElement('template');
    let selector = cssSelector + (this._.pid ? '[data-pid="' + this._.pid + '"]' : '');

    template.innerHTML = this._.template;
    if (!isNaN(this._.pid) && this._.pid !== null) {
      template.content.firstChild.dataset.pid = this._.pid;
    }

    let el = template.content.firstChild;
    if (this._.target) {
      let parent = this._.target.parentElement;
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
        for (let key in this._.options.styles) {
          let style = this._.options.styles[key];
          this._.el.container.style[key] = style;
        }
      }

      if (typeof this._.options.className === 'string') {
        this._.el.container.classList.add(this._.options.className);
      }
    }
  }

  setupComponent() {
    if (this._.events) {
      for (let key in this._.events) {
        let _event = this._.events[key];

        if (typeof _event === 'function') {
          this.on(key, _event);
        }
      }
    }

    if (this._.interactions) {
      if (this._.interactions.moveable) {
        let mover = null;
        for (let key in this._.el) {
          let el = this._.el[key];
          if (el !== null && el.dataset.ismoveable === 'true') {
            mover = el;
          }
        }

        this._.el.container.addEventListener('mousedown', (ev) => {
          this.sendToFront(ev)
        });


        if (mover !== null && this._.interactions.set !== true) {
          this._.interactions.set = true;
          mover.addEventListener('mousedown', (ev) => {
            ev.preventDefault();
            ev.stopPropagation();

            if (this._.options.moveable) {
              this._.interactions.moveable.offsetPosition.x = (ev.x || ev.clientX || ev.pageX) - this._.el.container.offsetLeft;
              this._.interactions.moveable.offsetPosition.y = (ev.y || ev.clientY || ev.pageY) - this._.el.container.offsetTop;
              this._.interactions.moveable.activeWindow = this._.el.container;
              let ism = null;
              if (this._.interactions.moveable.activeWindow.dataset.ismoveable === 'true') {
                ism = this._.interactions.moveable.activeWindow;
              } else {
                ism = this._.interactions.moveable.activeWindow.querySelector('[data-ismoveable="true"]');
              }

              if (ism !== null) {
                // console.log(ism)
                ism.classList.add('moving');
              }
            }

            this.sendToFront(ev);
          });
        }
      }
    }
  }

  animate() {
    let now = +(new Date());
    let passed = now - this._.now;
    let perc = (100 / this._.options.time) * passed;

    if (perc <= 100.0) {
      if (this._.options.animationKeys) {
        this._.options.animationKeys.forEach((animation, index) => {
          if (typeof animation.type === 'string') {
            return false;
          }

          let animationKey = this.animation[animation.type];
          if (this._.el.container !== null) {
            if (typeof animationKey.key === 'string' && typeof animationKey.value === 'string') {
              let value;
              if (animationKey.value.indexOf('[value]') !== -1) {
                value = animationKey.value.replace('[value]', '');
              } else {
                value = '';
              }

              this._.el.container.style[animationKey.key] = value;

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

  die(destroy) {
    destroy = destroy || false;

    if (destroy === true) {
      if (this._.el.container.parentElement !== null) {
        let parent = this._.el.container.parentElement;
        parent.removeChild(this._.el.container);
      }
    } else {
      if (this._.el.container.parentElement !== null) {
        this._.el.container.style.display = 'none';
      }
    }
  }

  sendToFront(ev) {
    ev.preventDefault();
    ev.stopPropagation();
    let activeMoveables = document.querySelectorAll('[data-ismoveable="true"]');

    activeMoveables.forEach((el) => {
      if (el.classList.contains('active')) {
        el.classList.remove('active');
      } else {
        this.getParents(el).forEach((parent) => {
          if (parent.classList.contains('active')) {
            parent.classList.remove('active');
          }
        });
      }
    });

    this._.el.container.classList.add('active');
  }

  // Getters

  getParents(e) {
    let result = [];
    for (let p = e && e.parentElement; p; p = p.parentElement) {
      result.push(p);
    }
    return result;
  }

  getElement(el) {
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

  getContainerNode() {
    return this.getElement('container');
  }

  getParentPosition(owner) {
    owner = owner || this._.owner;
    let x = false;
    let y = false;

    if (owner && owner.inCamera) {
      let canvas = this.game.canvas;
      let camera = this.game.camera;
      x = (owner.position.x - camera.position.x) + parseInt(canvas.offsetLeft);
      y = (owner.position.y - camera.position.y) + parseInt(canvas.offsetTop);

    }

    return {
      x: x,
      y: y
    }
  }

  getProperty(o, strList) {
    if (o && typeof strList === 'string') {
      if (strList.indexOf('.') !== -1) {
        let list = strList.split('.');
        let p = o[list.shift()];
        return this.getProperty(p, list.join('.'));
      } else {
        return o[strList];
      }
    }
  }

  getValue(el) {
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

  getValuesToUpdate() {
    let valuesToUpdate = [];

    // add global WebComponent values here.

    return valuesToUpdate;
  }

  // Helpers

  isNode (o) {
    return (
      typeof Node === "object" ? o instanceof Node :
      o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName==="string"
    );
  }

  isElement(o) {
    return (
      typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
      o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
    );
  }

  isObject(o) {
    return o instanceof Object && !(Array.isArray(o));
  }

  isArray(o) {
    return o instanceof Object && (Array.isArray(o));
  }

  merge (target, ...sources) {
    sources.forEach((source, indexSource) => {
      if (!(target instanceof Phaser.Sprite) && (window.Phaser.Plugin.Isometric.IsoSprite && !(target instanceof window.Phaser.Plugin.Isometric.IsoSprite))) {
        if (this.isObject(source)) {
          if (this.isObject(target)) {
            Object.keys(source).forEach(key => {
              let value = source[key];
              if (this.isObject(value) || this.isArray(value)) {
                if (typeof value !== 'undefined') {
                  target[key] = this.merge(target[key], value);
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
        } else if (this.isArray(source)) {
          if (this.isArray(target)) {
            source.forEach((value, index) => {
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

  on (events, selector, data, fn) {
    if (typeof events !== 'string') {
      console.warn('Argument "event" must be a string. Usage \non(event [, selector] [, data], fn)');
    }
    let el = null;
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
      let eventsArray = events.split(' ');
      if (eventsArray.length > 0) {
        for (var index = 0; index <= eventsArray.length-1; eventsArray++) {
          let event = eventsArray[index];
          if (event !== '' && eventsArray.hasOwnProperty(index)) {
            el.addEventListener(event, (ev) => {
              data = data || {};
              data.detail = ev.detail;
              fn(event, data);
            });
          }
        }
      }
    }

    return this;
  }

  // Updates

  updatePosition(offset) {
    let owner = this._.owner;
    let parentPos = this.getParentPosition(owner);
    let styles = getComputedStyle(this._.el.container);

    if (this._.el.container && styles.position.toLowerCase() === 'absolute') {
      if (parentPos.x !== false && parentPos.y !== false) {
        offset = offset || {
          left: 0,
          top: 0
        };

        if (this._.options) {
          offset.top = owner.height + 10;
          if (this._.options.styles) {
            offset.left += (this._.options.styles.left? this._.options.styles.left : 0);
            offset.top += (this._.options.styles.top? this._.options.styles.top : 0);
          }
        }

        let left = (parentPos.x - (this._.options && this._.options.center === true ? (this._.el.container.offsetWidth / 2) : 0)) - (offset.left || 0);
        let top = parentPos.y - (offset.top || 0);

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

  updateValues(values) {
    values.forEach((value, index) => {
      let el;

      if (typeof value.el === 'string') {
        el = this._.el[value.el];
      } else if (this.isNode(value.el) || this.isElement(value.el)) {
        el = value.el;
      }
      if (el && el !== null && value instanceof Object) {
        this.updateValue(el, value);
      }
    });
  }

  updateValue(el, value) {
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
        let text = value.text;
        if (value.mathOp) {
          let mathOp = value.mathOp;
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

  update(valuesToUpdate, positionOffset) {
    if (this._.watchers && this._.watchers.length > 0) {
      if (owner && owner.alive) {
        this._.watchers.forEach((watcher, index) => {
          let owner = watcher.owner || this._.owner;
          if (valuesToUpdate instanceof Array && valuesToUpdate.length > 0) {
            this.updateValues(valuesToUpdate);
          }
        });
      }
    }

    let owner = this._.owner;
    if (owner && owner.alive) {
      if (this._.ownerPrevPosition.x !== owner.position.x || this._.ownerPrevPosition.y !== owner.position.y) {
        this.updatePosition(positionOffset);
        this._.ownerPrevPosition.x = owner.position.x;
        this._.ownerPrevPosition.y = owner.position.y;
      }
    }

    super.update();
  }
}
