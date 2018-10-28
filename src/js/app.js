import Vue from 'vue';

import appComponent from "../components/app.vue";

const app = new Vue({
  el: '#app', // App root element
  components: {
    appComponent
  },
  render: (c) => c(appComponent)
});