<template>
  <button @click="toggleFullScreen()" :title="isFullScreen ? 'Exit Fullscreen' : 'Enter Fullscreen'">
    <i class="icon ion-md-expand" v-if="!isFullScreen"></i>
    <i class="icon ion-md-contract" v-if="isFullScreen"></i>
  </button>
</template>

<script>
import screen from "../js/screen.js";
export default {
  data: function() {
    return { isFullScreen: document.webkitIsFullScreen };
  },
  methods: {
    toggleFullScreen: function() {
      if (document.webkitIsFullScreen) {
        this.isFullScreen = false;
        screen.exitFullScreen();
      } else {
        this.isFullScreen = true;
        screen.enterFullScreen();
      }
    }
  }
};
</script>

<style scoped>
button {
  font-size: 24px;
  background: transparent;
  border: none;
  outline: none;
}
</style>
