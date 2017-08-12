import WebComponent from '../../UI/WebComponent';
import template from './template.js';

export default class extends WebComponent {
  constructor(options) {
    // Damage Indicator
    let dis = document.querySelectorAll('.damage-indicator');
    let pid;

    if (dis.length > 0) {
      let lastPid = dis[0];
      pid = parseInt(lastPid.dataset.pid)+1;
    } else {
      pid = 0;
    }

    super(options, {
      pid: pid,
      template: template.default,
      options: {
        distance: 100,
        time: 1000,
        fadeOut: 500,
        roundValues: true
      }
    });
  }

  createComponent() {
    super.createComponent('.damage-indicator');

    if (this._.el.container !== null) {
      let container = this._.el.container;
      this._.el.value = container.querySelector('.value');
      this.updateValue(this.getElement('value'), {
        text: this._.options.amount
      });
    }
  }

  update() {
    super.update();

    let owner = this._.owner;
    let damageIndicator = this._.el.container;

    if (owner && owner.alive) {
      let parentPos = this.getParentPosition(owner);
      if (parentPos.x !== false && parentPos.y !== false) {

        if (damageIndicator.style.display.toLowerCase() === 'none') {
          damageIndicator.style.display = 'inline-block';
        }

        this.animate();
      } else {
        this.die(this.DESTROY);
      }
    } else {
      this.die(this.DESTROY);
    }
  }
}
