<template>
  <div class="vrContainer">
    <div class="fill left">
      <slot name="left" v-if="useLeftRight"></slot>
      <slot v-if="!useLeftRight"></slot>
    </div>
    <div class="divider" v-if="vr"></div>
    <div class="fill right" v-if="vr">
      <slot name="right" v-if="useLeftRight"></slot>
      <slot v-if="!useLeftRight"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    vr: Boolean
  },
  computed: {
    useLeftRight: function() {
      return this.$slots.left && this.$slots.right;
    }
  }
};
</script>

<style scoped>
.vrContainer {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  height: 100%;
}

.fill {
  flex: 1;
  overflow: hidden;
}

.divider {
  width: 1px;
  background: rgba(0, 0, 0, 0.2);
  height: 100%;
}
</style>
