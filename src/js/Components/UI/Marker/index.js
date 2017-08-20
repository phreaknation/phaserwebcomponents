import WebComponent from '../WebComponent';
import template from './template.js';
// allow for fixing to the UI and point toward the owner/target position
export default class extends WebComponent {
  constructor(options) {
    let pid = document.querySelectorAll('.marker').length;
    super(options, {
      pid: pid,
      template: template[typeof opts !== 'undefined' && opts.type ? opts.type : 'default'],
    });
  }

  createComponent() {
    super.createComponent('.marker');

    if (this._.el.container !== null) {
      let container = this._.el.container;

      this._.el.text = container.querySelector('.text');
      this._.el.outerArrow = container.querySelector('.arrow-outer');
      this._.el.innerArrow = this._.el.outerArrow.querySelector('.arrow-inner');
    }
  }

  setupComponent() {
    super.setupComponent();

    if (typeof this._.options.text === 'string' && this._.options.text !== '') {
      this._.el.text.textContent = this._.options.text;
    }
  }

  /**
   * {
   *   colors: {
   *     primary: '#000000',
   *     secondary: '#000000',
   *   }
   *
   * }
   */

  theme (theme) {
    if (!theme) {
      return false;
    }

    if (theme.colors) {
      if (theme.colors.primary) {
        this._.el.container.style['background-color'] = theme.colors.primary;
        this._.el.outerArrow.style['border-color'] = theme.colors.primary + ' transparent transparent transparent';
      }

      if (theme.colors.secondary) {
        this._.el.text.style['background-color'] = theme.colors.secondary;
        this._.el.innerArrow.style['border-color'] = theme.colors.secondary + ' transparent transparent transparent';
      }
    }

  }

  update() {
    super.update();
  }
}
