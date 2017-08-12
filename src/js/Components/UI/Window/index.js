// Basic Window, Modal, Alert Box
import WebComponent from '../WebComponent';
import template from './template.js';

export default class extends WebComponent {
  constructor(options) {
    const templateKeys = Object.keys(template);
    const TYPES = templateKeys.map((v) => { return v.toUpperCase(); });
    const typeId = TYPES.indexOf(options.options.type.toUpperCase());
    const type = TYPES[typeId].toLowerCase();
    const pid = document.querySelectorAll('.' + type).length;

    super(options, {
      pid: pid,
      template: template[type],
      options: {
        type: type,
        roundValues: true,
        inverted: false,
        direction: 'horizontal',
      }
    });
  }

  updatePosition() {
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

  createComponent() {
    super.createComponent('.' + this._.options.type);

    if (this._.el.container !== null) {
      let container = this._.el.container;
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

  die(destroy) {
    if (destroy === true) {
      if (this._.el.backdrop) {
        let parent = this._.el.backdrop.parentNode;
        parent.removeChild(this._.el.backdrop);
      }
    } else {
      if (this._.el.backdrop) {
        this._.el.backdrop.style.display = 'none';
      }
    }
    super.die(destroy);
  }

  setupComponent() {
    super.setupComponent();
    if (this._.el.header !== null) {
      let close = this.getElement('headerControlClose');
      if (close !== null) {
        close
          .addEventListener('click', (ev) => {
            this.die(true);
          });
      }
    }
  }

  update() {
    super.update([]);
  }
}
