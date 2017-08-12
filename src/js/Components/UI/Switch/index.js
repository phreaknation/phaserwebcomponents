import WebComponent from '../WebComponent';
import template from './template.js';

export default class extends WebComponent {
  constructor(options) {
    let pid = document.querySelectorAll('.switch').length;
    super(options, {
      pid: pid,
      template: template[typeof opts !== 'undefined' && opts.type ? opts.type : 'default'],
    });
  }

  createComponent() {
    super.createComponent('.switch');

    if (this._.el.container !== null) {
      let container = this._.el.container;

      this._.el.checkbox = container.querySelector('input[type="checkbox"]');
      this._.el.thumb = container.querySelector('label');
    }
  }

  setupComponent() {
    super.setupComponent();

    let container = this._.el.container;
    let checkbox = this._.el.checkbox;
    checkbox.addEventListener('change', function (ev) {
      if (container !== null) {
        let event = new CustomEvent('switch', {
          detail: {
            checked: checkbox.checked
          }
        });
        container.dispatchEvent(event)
      }
    });
  }

  update() {
    super.update();
  }
}
