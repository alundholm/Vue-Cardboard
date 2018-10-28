<template>
  <full-screen-button class="fullScreenBtn"></full-screen-button>
</template>

<script>
import fullScreenButton from "./fullScreenButton.vue";
export default {
  components: {
    fullScreenButton
  }
};
</script>

<style scoped>
.fullScreenBtn {
  float: right;
}
</style>
