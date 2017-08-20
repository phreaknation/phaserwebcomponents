import WebComponent from '../WebComponent';
import template from './template.js';

/**
 * events
 * positionset
 */
export default class extends WebComponent {
  constructor(options) {
    let pid = document.querySelectorAll('.seek-bar').length;
    super(options, {
      pid: pid,
      template: template[typeof opts !== 'undefined' && opts.type ? opts.type : 'default'],
      position: 0,
      mouseDown: false,
    });
  }

  createComponent() {
    super.createComponent('.seek-bar');

    if (this._.el.container !== null) {
      let container = this._.el.container;

      this._.el.progress = container.querySelector('.progress');
      this._.el.buffer = container.querySelector('.buffer');
      this._.el.bar = container.querySelector('.bar');
      this._.el.scrubber = container.querySelector('.scrubber');
    }
  }

  setupComponent() {
    super.setupComponent();

    let container = this._.el.container;
    let progress = this._.el.progress;

    container.addEventListener('mousedown', (ev) => {
      this._.mouseDown = true;
    });

    document.addEventListener('mouseup', (ev) => {
      this._.mouseDown = false;
      if (ev.target === progress) {
        this.setPosition(ev.layerX, false, true);
      }
    });

    document.addEventListener('mousemove', (ev) => {
      if (this._.mouseDown === true && ev.target === progress) {

      this.setPosition(ev.layerX);
      }
    });
  }

  updateBuffer(bf, currentTime, duration) {
    let seekbar = this._.el.container;
    let inc = seekbar.offsetWidth / duration;
    let bfMaxLen = 10;

    if (bf.length > 0) {
      let buffers = this._.el.buffer.querySelectorAll(`.bar`)
      let lenBuffers = buffers.length
      for (let index = 0; index < lenBuffers; index++) {
        let lastItem = buffers.item(lenBuffers);
        if (lastItem !== null) {
          lastItem.parentElement.removeChild(lastItem);
        }
      }

      for (let index = 0; index < Math.min(bf.length, bfMaxLen); index++) {
        let start = bf.start(index) * inc;
        let end = bf.end(index) * inc;
        let width = end - start;
        // bfs.push({
        //   index: index,
        //   start: start,
        //   end: end,
        //   width: width,
        // });

        this.buffer(index, start + 'px', end + 'px', width + 'px');
      }
    }
  }

  buffer(index, start, end, width) {
    let bar = this._.el.buffer.querySelector(`.bar[data-id="${index}"]`);
    if (bar === null) {
      bar = this._.el.buffer.insertAdjacentHTML('beforeend', `<div class="bar" data-id="${index}"></div>`);
      bar = this._.el.buffer.querySelector('.bar:last-child');
    }

    if (bar.style.left !== start) {
      bar.style.left = start;
    }

    if (bar.style.width !== width) {
      bar.style.width = width;
    }


  }

  setPosition(position, isPercentage, manualUpdate) {
    isPercentage = isPercentage || false
    let value = position;
    if (isPercentage === true) {
      position = Math.floor((parseInt(this._.el.progress.offsetWidth) / 100) * position);
    }

    let event = 'setPosition';
    if (manualUpdate === true) {
      event = 'seekupdate';
    }

    this.trigger(event, {
      value: isPercentage ? value : position,
      percentage: isPercentage? position : Math.floor((100 / parseInt(this._.el.progress.offsetWidth)) * position),
    });

    this._.el.bar.style.width = position + 'px';

    return this;
  }

  update() {
    super.update();
  }
}
