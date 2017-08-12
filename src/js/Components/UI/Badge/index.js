import WebComponent from '../WebComponent';
let template = require('./template.js');

export default class extends WebComponent {
  constructor(options) {
    let pid = document.querySelectorAll('.badge').length;
    super(options, {
      pid: pid,
      template: template[typeof opts !== 'undefined' && opts.type ? opts.type : 'default'],
    });
  }

  createComponent() {
    super.createComponent('.badge');
  }

  update() {
    super.update();
  }
}
