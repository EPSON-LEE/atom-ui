import Vue from 'vue';
import App from './App.vue'
import './styles/index.scss'
import './styles/theme/index.scss'

import Toast from './components/atom-toast/src/main.js'

Vue.prototype.$toast = Toast

new Vue({
  el: '#app',
  render: h => h(App),
});
