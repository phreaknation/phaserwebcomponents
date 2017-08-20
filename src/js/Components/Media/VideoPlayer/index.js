import WebComponent from '../../UI/WebComponent';
import template from './template.js';

// Events: https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Media_events
export default class extends WebComponent {
  constructor(options) {
    let pid = document.querySelectorAll('.video-player').length;
    super(options, {
      pid: pid,
      template: template[typeof opts !== 'undefined' && opts.type ? opts.type : 'default'],
      options: {
        videoOptions: {
          width: '400px',
          startPosition: 0,
        },
        onControls: false,
        hideDelay: 0.5,
        hideTimeout: undefined,
      }
    });

    return this;
  }

  createComponent() {
    super.createComponent('.video-player');

    if (this._.el.container !== null) {
      let container = this._.el.container;

      this._.el.title = container.querySelector('.title');
      this._.el.player = container.querySelector('.player');

      this._.el.video = this._.el.player.querySelector('video.video');
      this._.el.play = this._.el.player.querySelector('.play.big');
      this._.el.controls = this._.el.player.querySelector('.controls');

      this._.el.btnPlay = this._.el.controls.querySelector('button.play');
      this._.el.btnPause = this._.el.controls.querySelector('button.pause');
      this._.el.btnRestart = this._.el.controls.querySelector('button.restart');
      this._.el.btnStop = this._.el.controls.querySelector('button.stop');
      this._.el.btnFullscreen = this._.el.controls.querySelector('button.fullscreen');
      this._.el.btnMute = this._.el.controls.querySelector('button.mute');

      this._.el.seekbar = this.game.add.existing(
        new this.game.PhaserWebComponents.components.UI.SeekBar({
          game: this.game,
          target: this._.el.controls.querySelector('[data-replace="seekbar"]'),
          events: {
            seekupdate: (name, data) => {
              let isPlaying = this.isPlaying();
              this.pause();

              let seconds = (this._.el.video.duration / 100) * data.detail.percentage;
              this._.el.video.currentTime = seconds;

              let icon = this._.el.play;
              let iconClass = {
                old: [
                  this._.options.videoOptions.icons.classes.pause,
                  this._.options.videoOptions.icons.classes.play,
                ],
                new: this._.options.videoOptions.icons.classes.loading,
              };

              this.removeClass(icon.querySelector('i.fa'), iconClass.old);
              this.addClass(icon.querySelector('i.fa'), iconClass.new);
              this.removeClass(this._.el.btnPlay.querySelector('i.fa'), iconClass.old);
              this.addClass(this._.el.btnPlay.querySelector('i.fa'), iconClass.new);

              if (isPlaying === true) {
                this.play();
              }
            }
          },
          options: {}
        }),
      );

      this._.el.volumebar = this.game.add.existing(
        new this.game.PhaserWebComponents.components.UI.VolumeBar({
          game: this.game,
          target: this._.el.controls.querySelector('[data-replace="volumebar"]'),
          events: {
            setVolume: (name, data) => {
              this.setVolume(data.detail.volume);
            }
          },
          options: {
            styles: {
              width: '50px',
              height: '10px',
            }
          }
        }),
      );

      this._.el.volumebar.setVolume(this._.options.videoOptions.volume || 100, true);

    }
  }

  setupComponent() {
    if (this._.el.video !== null) {
      this._.el.video.controls = false;

      let events = ['abort','canplay','canplaythrough','durationchange','emptied','encrypted','ended','error','interruptbegin','interruptend','loadeddata','loadedmetadata','loadstart','mozaudioavailable','pause','play','playing','progress','ratechange','seeked','seeking','stalled','suspend','timeupdate','volumechange','waiting'];

      events.forEach((event) => {
        this._.el.video.addEventListener(event, (ev) => {
          this.trigger(event, ...arguments);
        }, false);
      });

      this._.el.player.addEventListener('mouseenter', (ev) => {
        ev.stopPropagation();
        if (this._.options.hideTimeout) {
          clearTimeout(this._.options.hideTimeout);
        }

        // if (parseFloat(this.el.playIcon.style.opacity) !== 0.0) {
        //   var icon = this._.el.play.querySelector('i.fa');
        //   icon.classList.add('fa-play');
        //   icon.classList.remove('fa-pause');
        // }

        this.showControls();
        this._.options.onControls = true;
      }, false);

      this._.el.player.addEventListener('mouseleave', (ev) => {
        ev.stopPropagation();
        if (this._.options.hideTimeout) {
          clearTimeout(this._.options.hideTimeout);
        }

        // if (parseFloat(this.el.playIcon.style.opacity) !== 0.0) {
        //   var icon = this.el.playIcon.querySelector('i.fa');
        //   icon.classList.remove('fa-play');
        //   icon.classList.add('fa-pause');
        // }

        this._.options.hideTimeout = setTimeout(() => {
          console.log(this)
          this.hideControls();
        }, this._.options.hideDelay * 1000);
        this._.options.onControls = false;
      }, false);

      this._.el.video.addEventListener('click', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        this.togglePlay();
      }, false);
      this._.el.play.addEventListener('click', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        this.play();
      }, false);
      this._.el.btnPlay.addEventListener('click', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        this.play();
      }, false);
      this._.el.btnPause.addEventListener('click', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        this.pause();
      }, false);
      this._.el.btnRestart.addEventListener('click', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        this.restart();
      }, false);
      this._.el.btnStop.addEventListener('click', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        this.stop();
      }, false);
      this._.el.btnFullscreen.addEventListener('click', (ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        this.fullscreen();
      }, false);

      this._.el.btnMute.addEventListener('click', (ev) => {
        let volume = this._.el.volumebar.toggleVolume();
      }, false);

      this.on('timeupdate', (ev) => {
        if (this._.el.seekbar) {
          var percentage = this.getCurrentTime(true);
          this.setSeekbarPosition(percentage);
        }
      });

      this.on('ended', (ev) => {
        this.pause();
      });

      this.on('progress', () => {
        // TODO: Finish update buffer.
        // let video = this._.el.video;
        // let bf = video.buffered;
        // this._.el.seekbar.updateBuffer(bf, video.currentTime, video.duration);
      });

      let videoOptions = this._.options.videoOptions;
      if (this.isObject(videoOptions) && this.isArray(videoOptions.sources) && videoOptions.sources.length > 0) {

        if (videoOptions.title) {
          let anchor = this._.el.title.querySelector('a');

          anchor.textContent = videoOptions.title;
          if (videoOptions.link) {
            anchor.setAttribute('src', videoOptions.link);
          }
        }

        if (videoOptions.width) {
          this._.el.player.style.width = videoOptions.width;
        }

        videoOptions.sources.forEach((source) => {
          const filename = this.getFilename(source);
          const mimetype = this.getMimeType(filename);
          this._.el.video.insertAdjacentHTML('beforeend', `<source src="${source}" type="${mimetype}"></source>`);
        });

        if (videoOptions.icons.template && Object.keys(videoOptions.icons.classes).length > 0) {
          let template = videoOptions.icons.template;
          let classes = videoOptions.icons.classes;

          if (classes.play) {
            this._.el.play.insertAdjacentHTML('beforeend', template.replace('[$icon]', (classes.big? classes.big + ' ' : '') + classes.play));
            this._.el.btnPlay.insertAdjacentHTML('beforeend', template.replace('[$icon]', (classes.small? classes.small + ' ' : '') + classes.play));
          }

          if (classes.pause) {
            this._.el.btnPause.insertAdjacentHTML('beforeend', template.replace('[$icon]', (classes.small? classes.small + ' ' : '') + classes.pause));
          }

          if (classes.restart) {
            this._.el.btnRestart.insertAdjacentHTML('beforeend', template.replace('[$icon]', (classes.small? classes.small + ' ' : '') + classes.restart));
          }

          if (classes.stop) {
            this._.el.btnStop.insertAdjacentHTML('beforeend', template.replace('[$icon]', (classes.small? classes.small + ' ' : '') + classes.stop));
          }

          if (classes.fullscreen) {
            this._.el.btnFullscreen.insertAdjacentHTML('beforeend', template.replace('[$icon]', (classes.small? classes.small + ' ' : '') + classes.fullscreen));
          }

          if (classes.mute) {
            this._.el.btnMute.insertAdjacentHTML('beforeend', template.replace('[$icon]', (classes.small? classes.small + ' ' : '') + classes.mute));
          }
        }

        this.on('pause', () => {
          let icon = this._.el.play;
          let iconClass = {
            old: [
              this._.options.videoOptions.icons.classes.loading,
              this._.options.videoOptions.icons.classes.pause,
            ],
            new: this._.options.videoOptions.icons.classes.play,
          }

          this.removeClass(icon.querySelector('i.fa'), iconClass.old);
          this.addClass(icon.querySelector('i.fa'), iconClass.new);

          this.addClass(this._.el.btnPause, 'hidden');
          if (this._.el.video.currentTime === 0) {
            this.addClass(this._.el.btnStop, 'hidden');
            this.addClass(this._.el.btnRestart, 'hidden');
          }
          this.removeClass(this._.el.btnPlay, 'hidden');
          this._.el.play.style.opacity = '0.6';
        });

        this.on('playing', () => {
          let icon = this._.el.play;
          let iconClass = {
            old: [
              this._.options.videoOptions.icons.classes.loading,
              this._.options.videoOptions.icons.classes.play,
            ],
            new: this._.options.videoOptions.icons.classes.pause,
          }

          this.removeClass(icon.querySelector('i.fa'), iconClass.old);
          this.removeClass(icon.querySelector('i.fa'), iconClass.new);
          this.removeClass(icon.querySelector('i.fa'), 'hidden');

          this.removeClass(this._.el.btnStop, 'hidden');
          this.removeClass(this._.el.btnRestart, 'hidden');
          this.removeClass(this._.el.btnPause, 'hidden');
          this.addClass(this._.el.btnPlay, 'hidden');

          this._.el.play.style.opacity = '0';
        });

        this.on('emptied', () => {
          let icon = this._.el.play;
          let iconClass = {
            old: [
              this._.options.videoOptions.icons.classes.pause,
              this._.options.videoOptions.icons.classes.play,
            ],
            new: this._.options.videoOptions.icons.classes.loading,
          };

          this.removeClass(icon.querySelector('i.fa'), iconClass.old);
          this.addClass(icon.querySelector('i.fa'), iconClass.new);
          this.removeClass(this._.el.btnPlay.querySelector('i.fa'), iconClass.old);
          this.addClass(this._.el.btnPlay.querySelector('i.fa'), iconClass.new);
        });

        this.on('loadstart', () => {
          let icon = this._.el.play;
          let iconClass = {
            old: [
              this._.options.videoOptions.icons.classes.pause,
              this._.options.videoOptions.icons.classes.play,
            ],
            new: this._.options.videoOptions.icons.classes.loading,
          };

          this.removeClass(icon.querySelector('i.fa'), iconClass.old);
          this.addClass(icon.querySelector('i.fa'), iconClass.new);
          this.removeClass(this._.el.btnPlay.querySelector('i.fa'), iconClass.old);
          this.addClass(this._.el.btnPlay.querySelector('i.fa'), iconClass.new);
        });

        this.on('canplay', () => {
          let icon = this._.el.play;
          let iconClass = {
            old: [
              this._.options.videoOptions.icons.classes.loading,
              this._.options.videoOptions.icons.classes.play,
              this._.options.videoOptions.icons.classes.pause,
            ],
          };
          this.removeClass(icon.querySelector('i.fa'), iconClass.old);
          this.removeClass(this._.el.btnPlay.querySelector('i.fa'), iconClass.old);
          this.addClass(this._.el.btnPlay.querySelector('i.fa'), this._.options.videoOptions.icons.classes.play);

          if (this.isPlaying() === true) {
            this.addClass(icon.querySelector('i.fa'), this._.options.videoOptions.icons.classes.pause);
          } else {
            this.addClass(icon.querySelector('i.fa'), this._.options.videoOptions.icons.classes.play);
          }
        });

        this.on('durationchange', () => {
          if (videoOptions.startPosition !== 0) {
            this._.el.video.currentTime = videoOptions.startPosition;
            let perc = this.getCurrentTime(true);
            this.setSeekbarPosition(perc, true);
          }

          if (videoOptions.autoPlay === true) {
            this.play();
          }
        });
      }
    } else {

    }
  }

  update() {
    super.update();
  }

  canPlayVideo(player, ext) {
    if (this._.el.video !== null) {
      var ableToPlay = this._.el.video.canPlayType('video/' + ext);
      if (ableToPlay === '') {
        return false;
      } else {
        return true;
      }
    }
  }

  getCurrentTime(asPercentage) {
    var currentTime = this._.el.video.currentTime;
    var duration = this._.el.video.duration;
    asPercentage = asPercentage || false;

    if (asPercentage) {
      var perc = Math.floor((100 / duration) * currentTime) || 0.0;
      return perc;
    }
    return currentTime;
  }

  getFilename(fullpath) {
    return fullpath.replace(/^.*[\\\/]/, '');
  }

  getMimeType(filename) {
    var ext = filename.split('.').pop();
    var mimeTypes = {
      'flv': 'video/x-flv',
      'mp4': 'video/mp4',
      'm3u8': 'application/x-mpegURL',
      'ts': 'video/MP2T',
      '3gp': 'video/3gpp',
      'mov': 'video/quicktime',
      'avi': 'video/x-msvideo',
      'wmv': 'video/x-ms-wmv',
      'ogg': 'video/ogg',
      'ogv': 'video/ogg',
    };

    if (Object.keys(mimeTypes).indexOf(ext) !== -1) {
      return mimeTypes[ext];
    }
    return false;
  }

  hideControls() {
    if (this._.options.hideTimeout) {
      clearTimeout(this._.options.hideTimeout);
    }
    console.log(this._.options)
    if (!this._.options.onControls) {
      var controls = this._.el.controls;
      var rect = controls.getBoundingClientRect();
      controls.style.borderTopWidth = '8px';
      controls.style.bottom = -(rect.height - 2) + 'px';
      console.log(-(rect.height - 2))
    }
  }

  showControls() {
    var controls = this._.el.controls;
    controls.style.borderTopWidth = '2px';
    controls.style.bottom = '0px';
  }

  isPlaying() {
    let video = this._.el.video;
    return video.currentTime > 0 && !video.paused && !video.ended && video.readyState > 2;
  }

  play() {
    let icon = this._.el.play;
    if (this.hasClass(icon.querySelector('i.fa'), this._.options.videoOptions.icons.classes.loading)) {
      return false;
    }
    if (!this.isPlaying()) {
      this._.el.video.play();
    }
  }

  pause(force) {
    let icon = this._.el.play;
    force = force || false;
    if (this.hasClass(icon, this._.options.videoOptions.icons.classes.loading)) {
      return false;
    }
    if (force === true || this.isPlaying()) {
      this._.el.video.pause();
    }
  }

  togglePlay () {
    if (this._.el.video.paused || this._.el.video.ended) {
      this.play();
    } else {
      this.pause();
    }
  }

  restart() {
    this._.el.video.currentTime = 0;
    if (!this.isPlaying()) {
      this.play();
    } else {
      this.pause(true);
    }
  }

  stop() {
    this.pause(true);
    this._.el.video.currentTime = 0;
  }

  fullscreen() {
    var player = this._.el.player;
    // var docElm = document.documentElement;
    var isInFullScreen = (document.fullscreenElement && document.fullscreenElement !== null) ||
                         (document.webkitFullscreenElement && document.webkitFullscreenElement !== null) ||
                         (document.mozFullScreenElement && document.mozFullScreenElement !== null) ||
                         (document.msFullscreenElement && document.msFullscreenElement !== null);
    // var icon = this._.el.btnFullscreen.querySelector('i.fa');


    if (!isInFullScreen) {
      // icon.classList.add('fa-compress');
      // icon.classList.remove('fa-expand');
      player.classList.add('fullscreen');
      if (player.requestFullscreen) {
        player.requestFullscreen();
      } else if (player.mozRequestFullScreen) {
        player.mozRequestFullScreen();
      } else if (player.webkitRequestFullscreen) {
        player.webkitRequestFullscreen();
      } else if (player.msRequestFullscreen) {
        player.msRequestFullscreen();
      }
    } else {
      player.classList.remove('fullscreen');
      // icon.classList.add('fa-expand');
      // icon.classList.remove('fa-compress');
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }
  }

  setSeekbarPosition(position, isPercentage) {
    isPercentage = isPercentage || false;
    this._.el.seekbar.setPosition(position, true);
  }

  setVolume(vol) {
    vol = parseFloat(vol).toFixed(2);
    if (vol === 0.0) {
      this.addClass(this._.el.btnMute.querySelector('i.fa'), this._.options.videoOptions.icons.classes.mute);
    } else {
      this.addClass(this._.el.btnMute.querySelector('i.fa'), this._.options.videoOptions.icons.classes.volume);
    }
    this._.el.video.volume = vol;
  }
}
