import Vue from 'vue';

// Ionic 'Ionicons'
// For reference: https://ionicons.com/
import 'ionicons/dist/css/ionicons.min.css';

import appComponent from "../components/app.vue";

const app = new Vue({
  el: '#app', // App root element
  components: {
    appComponent
  },
  render: (c) => c(appComponent)
});