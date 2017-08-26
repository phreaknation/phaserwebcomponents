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
        this._.el.identifier.classList.add(this._.options.type.toLowerCase());
      }

      if (this._.options.text) {
        this._.el.text.textContent = this._.options.text;
      }

      if (this._.options.html) {
        this._.el.text.innerHTML = this._.options.html;
      }

      if (this._.options.isCloseable === true) {
        container.insertAdjacentHTML('beforeend', `<button class="close">&times;</button>`);
        let btnClose = container.querySelector('button.close');
        btnClose.addEventListener('click', (ev) => {
          container.classList.add('hidden');
          this.trigger('closed', {
            pid: this._.pid,
          });
        });
      }

      if (this.isArray(this._.options.buttons) && this._.options.buttons.length > 0) {
        this._.el.buttons = [];
        this._.options.buttons.forEach((button) => {
          let template = document.createElement('template');
          let html;
          if (!this.isUndefined(button.html)) {
            html = button.html;
          } else {
            html = `<button>${button.text}<button>`;
          }
          template.innerHTML = html
          let el = template.content.firstChild;

          if (button.classes) {
            el.classList.add(button.classes);
          }

          if (button.align) {
            el.classList.add('pull-' + button.align);
          }

          if (button.callback) {
            el.addEventListener('click', button.callback);
          }

          let parent = this._.el.text;
          parent.appendChild(el);
          this._.el.buttons.push(el);
        });
      }

      if (this._.options.type.toLowerCase() === 'arrow') {
        let direction = !this.isUndefined(this._.options.arrowDirection)? this._.options.arrowDirection.toLowerCase() : 'left';
        this._.el.identifier.classList.add(direction);

        let styles = window.getComputedStyle(container);
        let size = ((parseInt(styles.height) / 3) * 2) + 'px';
        this._.el.identifier.style.height = size;
        this._.el.identifier.style.width = size;

        container.insertAdjacentHTML('beforeend', `<div class="cover"></div>`);
        let cover = container.querySelector('.cover');
        cover.classList.add(direction);
        cover.style.height = styles.height;
        cover.style.width = Math.ceil((parseInt(styles.height) / 2) + 1) + 'px';

        if (this._.options.backgroundColor) {
          this._.el.identifier.style.backgroundColor = this._.options.backgroundColor;
          cover.style.backgroundColor = this._.options.backgroundColor;
        }

        if (direction === 'right') {
          container.style.borderRadius = '0 7px 7px 0';
          container.style.paddingRight = '24px';
          container.style.marginRight = '10px';
        } else {
          container.style.borderRadius = '7px 0 0 7px';
          container.style.paddingLeft = '28px';
          container.style.marginLeft = '10px';
        }
      }
    }
  }

  update() {
    super.update();
  }
}
