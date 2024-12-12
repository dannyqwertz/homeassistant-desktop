const Store = require('electron-store');

module.exports = new Store({
  defaults: {
    autoUpdate: true,
    automaticSwitching: true,
    detachedMode: false,
    disableHover: false,
    stayOnTop: true,
    fullScreen: false,
    shortcutEnabled: true,
    allInstances: []
  }
});
