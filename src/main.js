import Vue from 'vue'
import iView from 'iview';
import VueRouter from 'vue-router';
import router from './router'
import App from './App'
import 'iview/dist/styles/iview.css';

Vue.use(VueRouter);
Vue.use(iView);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
