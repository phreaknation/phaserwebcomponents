import WebComponent from '../../UI/WebComponent';
import template from './template.js';

export default class extends WebComponent {
  constructor(options) {
    // Mini Map
    let pid = document.querySelectorAll('.mini-map').length;
    super(options, {
      pid: pid,
      template: template.default,
    });
  }

  createComponent() {
    super.createComponent('.mini-map');
  }

  update() {
    super.update();
  }
}
