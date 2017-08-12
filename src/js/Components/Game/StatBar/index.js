import WebComponent from '../../UI/WebComponent';
import template from './template.js';

export default class extends WebComponent {
  constructor(options) {
    // Stat Bar
    let pid = document.querySelectorAll('.stat-bar').length;
    super(options, {
      pid: pid,
      template: template.default,
      options: {
        roundValues: true,
        inverted: false,
        direction: 'horizontal',
      }
    });
    this.HORIZONTAL = 'horizontal';
    this.VERTICAL = 'vertical';

    this.setupWatchers();
  }

  createComponent() {
    super.createComponent('.stat-bar');

    if (this._.el.container !== null) {
      let container = this._.el.container;

      this._.el.bar = container.querySelector('.bar');
      this._.el.display = container.querySelector('.display');
      if (this._.el.display) {
        this._.el.current = this._.el.display.querySelector('.current');
        this._.el.max = this._.el.display.querySelector('.max');
      }
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
      let v = this.getProperty(owner._.options, watcher.value);
      if (v) {
        if (parseInt(v) !== parseInt(this.getValue('current'))) {
          valuesToUpdate.push({
            el: 'current',
            text: v,
            mathOp: this._.options.roundValues === true? this.FLOOR: false,
          });
        }

        v = watcher.max;
        if (parseInt(v) !== parseInt(this.getValue('max'))) {
          valuesToUpdate.push({
            el: 'max',
            text: v,
            mathOp: this._.options.roundValues === true? this.FLOOR: false,
          });
        }
      }
    });

    return valuesToUpdate;
  }

  setupWatchers() {
    this._.watchers.forEach((watcher, index) => {
      let owner = watcher.owner || this._.owner;
      let statBar = this._.el.container;

      if (owner && owner.alive) {
        let bar = this._.el.bar;

        if (bar !== null) {
          if (watcher.proxy) {
            // = this.getProperty(owner._.options, watcher.value);
            watcher.this = this;
            watcher[watcher.name] = {};
            let values;
            for (let w in watcher.proxy) {
              let s = watcher.proxy[w];

              values = Object.defineProperty(watcher[watcher.name], w, {
                get: () => {
                  return s;
                },
                set: (newValue) => {
                  s = newValue;
                  watcher.this.updateBar();
                }
              });
            }

            this.values = values;
            watcher.this.updateBar();
          } else {
            // WTF?
          }
        } else {
        
        }
      } else {
        statBar.style.display = 'none';
      }
    });
  }

  updateBar() {
    this._.watchers.forEach((watcher, index) => {
      let owner = watcher.owner || this._.owner;
      let statBar = this._.el.container;

      if (owner && owner.alive) {
        let bar = this._.el.bar;
        let w = watcher[watcher.name];
        
        if (watcher.this._.options.direction.toLowerCase() === watcher.this.HORIZONTAL) {
          const newWidth = statBar.clientWidth * (w.current / w.max);
          if (watcher.this._.options.inverted === true) {
            bar.style.width = (statBar.clientWidth - newWidth) + 'px';
          } else {
            bar.style.width = (newWidth) + 'px';
          }
        } else if (watcher.this._.options.direction.toLowerCase() === watcher.this.VERTICAL) {
          const newHeight = statBar.clientHeight * (w.current / w.max);
          if (watcher.this._.options.inverted === true) {
            bar.style.height = (statBar.clientHeight - newHeight) + 'px';
          } else {
            bar.style.height = (newHeight) + 'px';
          }
        }
      } else {
        
      }
    });
  }

  update() {
    super.update();
    this._.watchers.forEach((watcher, index) => {
      let owner = watcher.owner || this._.owner;
      let statBar = this._.el.container;

      if (owner && owner.alive === false) {
        statBar.style.display = 'none';
      }
    });
  }
}
