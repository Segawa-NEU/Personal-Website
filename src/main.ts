import bootstrapvue from 'bootstrap-vue';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import './assets/scss/customBootstrap.scss';
import { routes } from './routes';

Vue.use(bootstrapvue);
Vue.use(VueRouter);
const router = new VueRouter({ routes });

const vm = new Vue({
  el: '#app',
  render: (h) => h(App),
  router,
});
