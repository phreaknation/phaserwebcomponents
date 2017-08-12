// Date picker, Date Display, Clock
import WebComponent from '../WebComponent';
import template from './template.js';

export default class extends WebComponent {
  constructor(options) {
    let pid = document.querySelectorAll('.calendar').length;
    super(options, {
      pid: pid,
      template: template[opts && opts.type? opts.type : 'default'],
    });
  }

  createComponent() {
    super.createComponent('.calendar');
  }

  update() {
    super.update();
  }
}
