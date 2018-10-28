import NoSleep from "nosleep.js";
let noSleep = new NoSleep();

export default {
  exitFullScreen: function () {
    document.webkitExitFullscreen();
    screen.orientation.unlock();
    noSleep.disable();
  },
  enterFullScreen: function () {
    document.documentElement.webkitRequestFullScreen();
    screen.orientation.lock('landscape');
    noSleep.enable();
  }
}