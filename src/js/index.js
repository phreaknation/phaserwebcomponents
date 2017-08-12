import Utility from './Utility/index.js';

// import Badge from './components/UI/Badge/index.js';
// import Calendar from './components/UI/Calendar/index.js';
// import Card from './components/UI/Card/index.js';
// import Collapse from './components/UI/Collapse/index.js';
// import ColorPicker from './components/UI/ColorPicker/index.js';
// import DropDown from './components/UI/DropDown/index.js';
// import Group from './components/UI/Group/index.js';
// import Header from './components/UI/Header/index.js';
// import Keyboard from './components/UI/Keyboard/index.js';
// import Layout from './components/UI/Layout/index.js';
import Loader from './components/UI/Loader/index.js';
import Marker from './components/UI/Marker/index.js';
// import MenuBar from './components/UI/MenuBar/index.js';
// import MenuItem from './components/UI/MenuItem/index.js';
// import Pager from './components/UI/Pager/index.js';
// import Pagination from './components/UI/Pagination/index.js';
// import Popover from './components/UI/Popover/index.js';
// import ProgressBar from './components/UI/ProgressBar/index.js';
// import Showcase from './components/UI/Showcase/index.js';
// import Slider from './components/UI/Slider/index.js';
import Switch from './components/UI/Switch/index.js';
// import Tab from './components/UI/Tab/index.js';
// import Tag from './components/UI/Tag/index.js';
// import Timer from './components/UI/Timer/index.js';
// import Toast from './components/UI/Toast/index.js';
// import Toggle from './components/UI/Toggle/index.js';
// import Tooltip from './components/UI/Tooltip/index.js';
import Window from './components/UI/Window/index.js';

// import DamageIndicator from './components/Game/DamageIndicator/index.js';
// import Minimap from './components/Game/Minimap/index.js';
import NamePlate from './components/Game/NamePlate/index.js';
import StatBar from './components/Game/StatBar/index.js';

// import Avatar from './components/Media/Avatar/index.js';
// import Carousel from './components/Media/Carousel/index.js';
// import Icon from './components/Media/Icon/index.js';
// import Line from './components/Media/Line/index.js';
// import MusicPlayer from './components/Media/MusicPlayer/index.js';
// import Shape from './components/Media/Shape/index.js';
// import VideoPlayer from './components/Media/VideoPlayer/index.js';

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
          // Showcase: Showcase,
          // Slider: Slider,
          Switch: Switch,
          // Tab: Tab,
          // Tag: Tag,
          // Timer: Timer,
          // Toast: Toast,
          // Toggle: Toggle,
          // Tooltip: Tooltip,
          Window: Window,
        },
        Game: {
          // DamageIndicator: DamageIndicator,
          // Minimap: Minimap,
          NamePlate: NamePlate,
          StatBar: StatBar,
        },
        Media: {
          // Avatar: Avatar,
          // Carousel: Carousel,
          // Icon: Icon,
          // Line: Line,
          // MusicPlayer: MusicPlayer,
          // Shape: Shape,
          // VideoPlayer: VideoPlayer,
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
