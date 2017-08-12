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
  }

  update() {
    super.update();
  }
}
