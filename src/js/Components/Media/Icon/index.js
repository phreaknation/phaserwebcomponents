import WebComponent from '../../UI/WebComponent';
import template from './template.js';

export default class extends WebComponent {
  constructor(options) {
    let pid = document.querySelectorAll('.icon').length;
    super(options, {
      pid: pid,
      template: template[typeof opts !== 'undefined' && opts.type ? opts.type : 'default'],
    });
  }

  createComponent() {
    super.createComponent('.icon');

    let container = this._.el.container;
    if (container !== null) {
    }
  }

  setupComponent() {
    super.setupComponent();

    let container = this._.el.container;
    if (container !== null) {

      let template = this._.options.template;
      if (typeof template === 'string') {
        container.insertAdjacentHTML('beforeend', template);
      }
    }
  }

  update() {
    super.update();
  }
}
