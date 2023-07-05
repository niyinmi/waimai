import Vue from "vue";
import App from "./App";
import VueRouter from "vue-router";
import router from "./router";
import store from "./store";
import './mock/mockServer.js'//加载MockServer即可
import './fiters/index.js'
Vue.use(VueRouter)
Vue.config.productionTip=false
new Vue({
  el:'#app',
  router,
  store,
  render:h=>h(App)
})