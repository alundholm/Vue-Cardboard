<template>
  <div class="root">
    <full-screen-button class="fullScreenBtn" @fullScreenChange="updateFullScreen"></full-screen-button>
    <vr-content :vr=isVr>
      <template slot="left">Left</template>
      <template slot="right">Right</template>
    </vr-content>
  </div>
</template>

<script>
import fullScreenButton from "./fullScreenButton.vue";
import vrContent from "./vrContent.vue";

export default {
  components: {
    fullScreenButton,
    vrContent
  },
  data: function() {
    return {
      isVr: false
    };
  },
  methods: {
    updateFullScreen(isFullScreen) {
      this.isVr = isFullScreen;
    }
  }
};
</script>

<style scoped>
.fullScreenBtn {
  position: absolute;
  right: 10px;
  top: 10px;
}

.root {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
