import WebComponent from '../WebComponent';
import template from './template.js';


// Basic menu, or ribbon style
export default class extends WebComponent {
  constructor(options) {
    let pid = document.querySelectorAll('.menu-bar').length;
    super(options, {
      pid: pid,
      template: template[typeof opts !== 'undefined' && opts.type ? opts.type : 'default'],
    });
  }

  createComponent() {
    super.createComponent('.menu-bar');
  }

  update() {
    super.update();
  }
}
