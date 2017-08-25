import WebComponent from '../../UI/WebComponent';
import template from './template.js';

export default class extends WebComponent {
  constructor(options) {
    let pid = document.querySelectorAll('.screen-splatter').length;
    super(options, {
      pid: pid,
      template: template[typeof opts !== 'undefined' && opts.type ? opts.type : 'default'],
      playing: false,
    });
  }

  createComponent() {
    super.createComponent('.screen-splatter');

    let container = this._.el.container;
    if (container !== null) {
    }
  }

  setupComponent() {
    super.setupComponent();

    let container = this._.el.container;
    if (container !== null) {

      container.style.backgroundImage = `url('${this._.options.source}')`;
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

  play() {
    this.resume();
    if (typeof this._.options.animation.name === 'string') {
      this._.el.container.style.animationName = this._.options.animation.name;
      this._.playing = true;
    }
    this._.started = +(new Date);

    return this;
  }

  pause() {
    this._.el.container.style.animationPlayState = 'paused';
    this._.playing = false;

    return this;
  }

  resume() {
    this._.el.container.style.display = 'inline-block';
    this._.el.container.style.opacity = this._.options.styles? parseInt(this._.options.styles.opacity) : 1;
    this._.el.container.style.animationPlayState = 'running';

    return this;
  }

  togglePlay() {
    if (this._.playing === true) {
      this.play();
    } else {
      this.pause();
    }

    return this;
  }

  stop() {
    this._.el.container.style.animationName = '';
    this._.el.container.style.opacity = 0;
    this._.el.container.style.display = 'none';
    this._.playing = false;

    return this;
  }

  restart () {
    this.stop();
    this.play();
    return this;
  }

  setRandomPosition(zone = this._.options.zone) {

    // Randomizes the position based on the zone.
    let top = zone.top || zone.y || 0;
    let left = zone.left || zone.x || 0;

    let right = window.innerWidth - (zone.right + parseInt(this._.options.size.width)) || window.innerWidth - (zone.x + parseInt(this._.options.size.width)) || 0;
    let bottom = window.innerHeight - (zone.bottom + parseInt(this._.options.size.height)) || window.innerHeight - (zone.y + parseInt(this._.options.size.height)) || 0;

    let x = Math.max(left, Math.min(right, Math.floor(Math.random() * window.innerWidth))) + 'px';
    let y = Math.max(top, Math.min(bottom, Math.floor(Math.random() * window.innerHeight))) + 'px';

    this.setPosition(x, y);

    return this;
  }

  setPosition(x, y) {
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

  getSize() {}

  update() {
    super.update();
    let now = +(new Date);
    if (this._.playing !== false && (this._.started + this._.options.life) <= now) {
      this.stop();
    };
  }

  remove() {
    this.destroy();
    this.die(true);
  }
}
