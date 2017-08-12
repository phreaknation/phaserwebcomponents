// Basic Window, Modal, Alert Box

export default {
  alert: `<div class="backdrop">
    <div data-pid="[$pid]" class="alert">
      <div class="header">
        <div class="icon"></div>
        <div class="title">
          <label class="title-text"></label>
        </div>
        <div class="controls">
          <div class="control" data-action="close"></div>
        </div>
      </div>
      <div class="body"></div>
    </div>
  </div>`,
  panel: `<div data-pid="[$pid]" class="panel">
      <div class="body"></div>
    </div>
  </div>`,
  window: `<div data-pid="[$pid]" class="window">
      <div class="header" data-ismoveable="true">
        <div class="icon"></div>
        <div class="title">
          <label class="title-text"></label>
        </div>
        <div class="controls">
          <div class="control" data-action="close"></div>
        </div>
      </div>
      <div class="body"></div>
    </div>`,
};
