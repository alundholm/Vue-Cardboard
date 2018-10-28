<template>
  <button @click="enterFullScreen">Enter Full Screen Landscape</button>
</template>

<script>
import screen from "../js/screen.js";
export default {
  methods: {
    enterFullScreen: function() {
      screen.enterFullScreen();
    }
  }
};
</script>

<style>
</style>
