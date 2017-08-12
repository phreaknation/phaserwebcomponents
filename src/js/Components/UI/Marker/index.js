import WebComponent from '../WebComponent';
import template from './template.js';

export default class extends WebComponent {
  constructor(options) {
    let pid = document.querySelectorAll('.marker').length;
    super(options, {
      pid: pid,
      template: template[typeof opts !== 'undefined' && opts.type ? opts.type : 'default'],
    });
  }

  createComponent() {
    super.createComponent('.marker');

    if (this._.el.container !== null) {
      let container = this._.el.container;

      this._.el.text = container.querySelector('.text');
    }
  }

  setupComponent() {
    super.setupComponent();

    if (typeof this._.options.text === 'string' && this._.options.text !== '') {
      this._.el.text.textContent = this._.options.text;
    }
  }

  update() {
    super.update();
  }
}
