# Phaser Web Components
By Joel Dies

Web components that are phaser aware. If you wish to request a component please submit an issue with **[REQUEST]** at the start of the title and a breif description and add a couple links to where examples of the component can be found.

**This is not 100% documented but is on its way to being 100% documented.**

Help support these efforts by becoming a [Patreon](https://www.patreon.com/user?u=4928922)

License: MIT

**[Release Chart](https://goo.gl/hPa6wt)**
## Including in a project
Please see the [wiki](https://github.com/phreaknation/phaserwebcomponents/wiki) on how to use the components.

Required Modules:

  NA

```
// Optional
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />

// Required
<script src="/path/to/phaser.min.js"></script>
<script src="/path/to/plugin/phreaknation.phaserwebcomponents.min.js"></script>

```

In your create of your phaser project.

```
// Be sure to pass the game object into the constructor.
this.game.plugins.add(new Phaser.Plugin.PhaserWebComponents(this.game));
```
