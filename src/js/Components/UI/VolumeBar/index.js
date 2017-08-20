import WebComponent from '../WebComponent';
import template from './template.js';

export default class extends WebComponent {
  constructor(options) {
    let pid = document.querySelectorAll('.volume-bar').length;
    super(options, {
      pid: pid,
      template: template[typeof opts !== 'undefined' && opts.type ? opts.type : 'default'],
      volume: 100,
      mouseDown: false,
    });
  }

  createComponent() {
    super.createComponent('.volume-bar');

    if (this._.el.container !== null) {
      let container = this._.el.container;

      this._.el.back = container.querySelector('.back');
      this._.el.fill = container.querySelector('.fill');
    }
  }

  setupComponent() {
    super.setupComponent();

    let container = this._.el.container;

    container.addEventListener('mousedown', (ev) => {
      this._.mouseDown = true;
    });

    document.addEventListener('mouseup', (ev) => {
      this._.mouseDown = false;
      if (ev.target === container) {
        let volume = this.setVolume(ev.layerX);
      }
    });

    document.addEventListener('mousemove', (ev) => {
      if (this._.mouseDown === true && ev.target === container) {

        let volume = this.setVolume(ev.layerX);
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

  getVolume() {
    return this._.volume;
  }

  setVolume(fillPx, isPercentage) {
    isPercentage = isPercentage || false;
    let container = this._.el.container;
    let height = parseInt(container.offsetHeight);
    let width = parseInt(container.offsetWidth);
    let perc = fillPx;
    if (!isPercentage) {
      perc = (100 / width) * fillPx;
    } else {
      fillPx = (width / 100) * perc;
    }
    let vertPoint = ((height / 100) * perc);

    this._.volume = perc;

    this.setFill(fillPx, vertPoint);

    this.trigger('setVolume', {
      volume: perc / 100,
      percentage: perc,
      width: fillPx + 'px',
    });

    return perc;
  }

  setFill(fillPx, vertPoint) {
    let height = parseInt(this._.el.container.offsetHeight);
    this._.el.fill.style['border-bottom-width'] = vertPoint + 'px';
    this._.el.fill.style['border-left-width'] = fillPx + 'px';
    this._.el.fill.style['margin-top'] = (height - vertPoint) + 'px';
  }

  toggleVolume() {
    if (this._.volume === 0) {
      this._.volume = this._.unMuteVolume;
    } else {
      this._.unMuteVolume = this._.volume;
      this._.volume = 0;
    }

    this.setVolume(this._.volume, true);
    return this._.volume;
  }

  update() {
    super.update();
  }
}
