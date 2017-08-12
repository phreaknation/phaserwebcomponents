import WebComponent from '../WebComponent';
import template from './template.js';

export default class extends WebComponent {
  constructor(options) {
    let pid = document.querySelectorAll('.loader').length;
    super(options, {
      pid: pid,
      template: template[typeof opts !== 'undefined' && opts.type ? opts.type : 'default'],
      options: {
        amount: 8,
        className: 'circle',
      }
    });
  }

  createComponent() {
    super.createComponent('.loader');
    if (this._.el.container !== null) {
      let container = this._.el.container;
      let amount = this._.options.amount;
      for (let i = 0; i < amount; i++) {
        container.insertAdjacentHTML('beforeend', '<div class="' + this._.options.className + '"></div>');
      }

      this._.el.text = container.querySelector('.text');
    }
  }

  update() {
    super.update();
  }
}
