import Vue from 'vue';

import App from './src/App.vue';

import './plugins/element';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  render: (h) => h(App),
});
