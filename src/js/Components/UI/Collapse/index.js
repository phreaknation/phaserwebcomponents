import WebComponent from '../WebComponent';
import template from './template.js';

export default class extends WebComponent {
  constructor(options) {
    let pid = document.querySelectorAll('.collapse').length;
    super(options, {
      pid: pid,
      template: template.default,
    });
  }

  createComponent() {
    super.createComponent('.collapse');
  }

  update() {
    super.update();
  }
}
