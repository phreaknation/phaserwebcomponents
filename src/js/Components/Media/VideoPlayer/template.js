export default {
  default: `<div class="video-player">
    <div class="title">
      <a></a>
    </div>
    <div class="player">
      <video class="video"></video>
      <div class="play big"></div>
      <div class="controls">
        <div data-replace="seekbar"></div>
        <button class="play"></button>
        <button class="pause hidden"></button>
        <button class="restart hidden"></button>
        <button class="stop hidden"></button>
        <button class="fullscreen"></button>
        <div data-replace="volumebar"></div>
        <button class="mute"></button>
      </div>
    </div>
  </div>`,
};
