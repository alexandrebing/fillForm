import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue';
import {routes} from './routes.js';
import VueCarousel from 'vue-carousel';

Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(VueCarousel);

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
