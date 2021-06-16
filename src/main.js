import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import router from "./router";
import store from "./store/index.js";
import Toast from "vue-toastification";
import vuetify from "./plugins/vuetify.js";
import VueYouTubeEmbed from "vue-youtube-embed";
Vue.use(VueRouter);

// Import the CSS or use your own!
import "vue-toastification/dist/index.css";
// scss
//import "./styles/main.scss";

const options = {
  // You can set your default options here
};

Vue.use(VueYouTubeEmbed);
Vue.use(Toast, options);
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  render: h => h(App),
  vuetify,
  router,
  store: store
});
