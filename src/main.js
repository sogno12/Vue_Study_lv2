import Vue from 'vue'
import App from './App.vue'
// VueRouter 등록
import {router} from './router/index.js'
// Vuex 등록
import {store} from './store/index.js';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')

