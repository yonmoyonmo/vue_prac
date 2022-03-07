import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import router from "./router/index.js";

Vue.config.productionTip = false;
Vue.use(Vuetify);
new Vue({
  router,
  vuetify: new Vuetify(),
  render: (h) => h(App),
}).$mount("#app");
