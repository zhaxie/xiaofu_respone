
import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import FastClick from 'fastclick';

import '@/assets/css/bootstrap.css';
import '@/assets/css/response-grid.css';
import '@/assets/css/xf-main.css';
import '@/assets/css/xx-base.css';
import '@/assets/css/animate.css';


const globalMethods = require('@/assets/js/globalMethods.js').default;

Vue.use(globalMethods);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

FastClick.attach(document.body);
