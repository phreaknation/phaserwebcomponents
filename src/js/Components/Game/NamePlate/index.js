import WebComponent from '../../UI/WebComponent';
import template from './template.js';

export default class extends WebComponent {
  constructor(options) {
    // Name Plate
    let pid = document.querySelectorAll('.name-plate').length;
    super(options, {
      pid: pid,
      template: template.default,
    });
  }

  createComponent() {
    super.createComponent('.name-plate');

    if (this._.el.container !== null) {
      let container = this._.el.container;
      this._.el.display = container.querySelector('.display');
      this._.el.text = this._.el.display.querySelector('.text');
      this._.el.overlay = this._.el.display.querySelector('.overlay');
    }
  }

  getValuesToUpdate() {
    let valuesToUpdate = [];

    super.getValuesToUpdate().forEach((values, index) => {
      if (values instanceof Object) {
        valuesToUpdate.push(values);
      }
    });

    this._.watchers.forEach((watcher, index) => {
      let owner = watcher.owner || this._.owner;
      let v = owner._.options[watcher.value || 'name'];
      if (v !== this.getValue('text')) {
        valuesToUpdate.push({
          el: 'text',
          text: v,
        });

        valuesToUpdate.push({
          el: 'overlay',
          text: v,
        });
      }
    });

    return valuesToUpdate;
  }

  update() {
    this._.watchers.forEach((watcher, index) => {
      let owner = watcher.owner || this._.owner;
      let namePlate = this._.el.container;

      if (owner && owner.alive) {
        super.update(this.getValuesToUpdate(), {y: 30});
      } else {
        namePlate.style.display = 'none';
      }
    });
  }
}
