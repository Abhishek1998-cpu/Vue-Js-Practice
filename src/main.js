import "@babel/polyfill";
import "mutationobserver-shim";
// import '@babel/polyfill'
// import 'mutationobserver-shim'
import Vue from "vue";
import "./plugins/bootstrap-vue";
// import './plugins/bootstrap-vue'
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./routes/index";

Vue.use(VueRouter);
Vue.config.productionTip = false;

Vue.filter("convertToUpperCase", function (val) {
  return val.toUpperCase();
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
