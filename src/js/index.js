import Utility from './Utility/index.js';

// import Badge from './Components/UI/Badge/index.js';
// import Calendar from './Components/UI/Calendar/index.js';
// import Card from './Components/UI/Card/index.js';
// import Collapse from './Components/UI/Collapse/index.js';
// import ColorPicker from './Components/UI/ColorPicker/index.js';
// import DropDown from './Components/UI/DropDown/index.js';
// import Group from './Components/UI/Group/index.js';
// import Header from './Components/UI/Header/index.js';
// import Keyboard from './Components/UI/Keyboard/index.js';
// import Layout from './Components/UI/Layout/index.js';
import Loader from './Components/UI/Loader/index.js';
import Marker from './Components/UI/Marker/index.js';
// import MenuBar from './Components/UI/MenuBar/index.js';
// import MenuItem from './Components/UI/MenuItem/index.js';
// import Pager from './Components/UI/Pager/index.js';
// import Pagination from './Components/UI/Pagination/index.js';
// import Popover from './Components/UI/Popover/index.js';
// import ProgressBar from './Components/UI/ProgressBar/index.js';
import SeekBar from './Components/UI/SeekBar/index.js';
// import Showcase from './Components/UI/Showcase/index.js';
// import Slider from './Components/UI/Slider/index.js';
import Switch from './Components/UI/Switch/index.js';
// import Tab from './Components/UI/Tab/index.js';
// import Tag from './Components/UI/Tag/index.js';
// import Timer from './Components/UI/Timer/index.js';
// import Toast from './Components/UI/Toast/index.js';
// import Toggle from './Components/UI/Toggle/index.js';
// import Tooltip from './Components/UI/Tooltip/index.js';
import VolumeBar from './Components/UI/VolumeBar/index.js';
import Window from './Components/UI/Window/index.js';

// import DamageIndicator from './Components/Game/DamageIndicator/index.js';
// import Minimap from './Components/Game/Minimap/index.js';
import NamePlate from './Components/Game/NamePlate/index.js';
import StatBar from './Components/Game/StatBar/index.js';

import Avatar from './Components/Media/Avatar/index.js';
// import Carousel from './Components/Media/Carousel/index.js';
import Icon from './Components/Media/Icon/index.js';
// import Line from './Components/Media/Line/index.js';
import MusicPlayer from './Components/Media/MusicPlayer/index.js';
// import Shape from './Components/Media/Shape/index.js';
import VideoPlayer from './Components/Media/VideoPlayer/index.js';

(() => {
  class PhaserWebComponents {
    constructor(game, parent) {
      Phaser.Plugin.call(this, game, parent);

      this.game = game;
      this.VERSION = [0,0,1];
      this.Utility = Utility;

      this.components = {
        UI: {
          // Badge: Badge,
          // Calendar: Calendar,
          // Card: Card,
          // Collapse: Collapse,
          // ColorPicker: ColorPicker,
          // DropDown: DropDown,
          // Group: Group,
          // Header: Header,
          // Keyboard: Keyboard,
          // Layout: Layout,
          Loader: Loader,
          Marker: Marker,
          // MenuBar: MenuBar,
          // MenuItem: MenuItem,
          // Pager: Pager,
          // Pagination: Pagination,
          // Popover: Popover,
          // ProgressBar: ProgressBar,
          SeekBar: SeekBar,
          // Showcase: Showcase,
          // Slider: Slider,
          Switch: Switch,
          // Tab: Tab,
          // Tag: Tag,
          // Timer: Timer,
          // Toast: Toast,
          // Toggle: Toggle,
          // Tooltip: Tooltip,
          VolumeBar: VolumeBar,
          Window: Window,
        },
        Game: {
          // DamageIndicator: DamageIndicator,
          // Minimap: Minimap,
          NamePlate: NamePlate,
          StatBar: StatBar,
        },
        Media: {
          Avatar: Avatar,
          // Carousel: Carousel,
          Icon: Icon,
          // Line: Line,
          MusicPlayer: MusicPlayer,
          // Shape: Shape,
          VideoPlayer: VideoPlayer,
        }
      }

      this.registry = {};

      window._PWC = this;
      game.PhaserWebComponents = this;
      return this;
    }

    version() {
      return this.VERSION.join('.');
    }
  }

  Phaser.Plugin.PhaserWebComponents = PhaserWebComponents;
})();
