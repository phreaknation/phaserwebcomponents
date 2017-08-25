import WebComponent from '../../UI/WebComponent';
import template from './template.js';

export default class extends WebComponent {
  constructor(options) {
    let pid = document.querySelectorAll('.line').length;
    super(options, {
      pid: pid,
      template: template[typeof opts !== 'undefined' && opts.type ? opts.type : 'default'],
    });
  }

  createComponent() {
    super.createComponent('.line');

    let container = this._.el.container;
    if (container !== null) {
      this._.el.image = container.querySelector('.image')
    }
  }

  setupComponent() {
    super.setupComponent();

    let container = this._.el.container;
    if (container !== null) {

      if (this._.options.color) {
        container.style.backgroundColor = this._.options.color;
      }

      if (!isNaN(this._.options.thickness)) {
        container.style.width = this._.options.thickness + 'px';
      }

      if (this.isObject(this._.options.points)) {
        let ax = 0, ay = 0, bx = 0, by = 0;
        if (this.isObject(this._.options.points.a)) {
          ax = this._.options.points.a.x;
          ay = this._.options.points.a.y;
        }
        if (this.isObject(this._.options.points.b)) {
          bx = this._.options.points.b.x;
          by = this._.options.points.b.y;
        }
        this.draw(ax, ay, bx, by);
      }
    }
  }

  draw(ax = 0, ay = 0, bx = 0, by = 0) {
    if(ay > by) {
      bx = ax + bx;
      ax = bx - ax;
      bx = bx - ax;
      by = ay + by;
      ay = by - ay;
      by = by - ay;
    }

    let container = this._.el.container;
    let length = Math.sqrt((ax - bx) * (ax - bx) + (ay - by) * (ay - by));
    let calc = Math.atan((ay - by) / (bx - ax));
    calc = calc * 180 / Math.PI;
    container.style.height = length + 'px';
    container.style.top = ay + 'px';
    container.style.left = ax + 'px';
    container.style.transform = ('rotate(' + calc + 'deg)');
    container.style['-ms-transform'] = ('rotate(' + calc + 'deg)');
    container.style['-moz-transform'] = ('rotate(' + calc + 'deg)');
    container.style['-webkit-transform'] = ('rotate(' + calc + 'deg)');
    container.style['-o-transform'] = ('rotate(' + calc + 'deg)');
  }

  update() {
    super.update();
  }
}
