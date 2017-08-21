import WebComponent from '../../UI/WebComponent';
import template from './template.js';

export default class extends WebComponent {
  constructor(options) {
    let pid = document.querySelectorAll('.avatar').length;
    super(options, {
      pid: pid,
      template: template[typeof opts !== 'undefined' && opts.type ? opts.type : 'default'],
    });
  }

  createComponent() {
    super.createComponent('.avatar');

    let container = this._.el.container;
    if (container !== null) {
      this._.el.image = container.querySelector('.image')
    }
  }

  setupComponent() {
    super.setupComponent();

    let container = this._.el.container;
    if (container !== null) {

      if (this._.options.defaultSource) {
        this._.el.container.style.backgroundImage = `url('${this._.options.defaultSource}')`;
      }

      if (this._.options.source) {
        this._.el.image.src = this._.options.source
      } else {
        this._.el.image.style.display = 'none';
      }

      if (this._.options.size) {
        this._.el.container.style.height = this._.options.size;
        this._.el.container.style.width = this._.options.size;
        // this._.el.image.style.height = this._.options.size;
        // this._.el.image.style.width = this._.options.size;
      }
    }
  }

  update() {
    super.update();
  }
}
