import WebComponent from '../WebComponent';
import template from './template.js';

export default class extends WebComponent {
  constructor(options) {
    let pid = document.querySelectorAll('.tag').length;
    super(options, {
      pid: pid,
      template: template[typeof opts !== 'undefined' && opts.type ? opts.type : 'default'],
    });
  }

  createComponent() {
    super.createComponent('.tag');

    let container = this._.el.container;
    if (container !== null) {
      this._.el.identifier = container.querySelector('.identifier');
      this._.el.text = container.querySelector('.text');
    }
  }

  setupComponent() {
    let container = this._.el.container;
    if (container !== null) {
      if (this._.options.backgroundColor) {
        this._.el.identifier.style.backgroundColor = this._.options.backgroundColor;
      }

      if (this._.options.type) {
        this._.el.identifier.classList.add(this._.options.type);
      }

      if (this._.options.text) {
        this._.el.text.textContent = this._.options.text;
      }

      if (this._.options.closeable === true) {
        container.insertAdjacentHTML('beforeend', `<button class="close">&times;</button>`);
        let btnClose = container.querySelector('button.close');
        btnClose.addEventListener('click', (ev) => {
          console.log('close ' + this._.pid);
          container.classList.add('hidden');
          this.trigger('closed', {
            pid: this._.pid,
          });
        })
      }
    }
  }

  update() {
    super.update();
  }
}
