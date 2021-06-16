import Vue from "vue";
import Vuex from "vuex";
import auths from "./auths/moduleAuth";
import errors from "./errors/moduleErro";
import plans from "./plans/modulePlan";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auths,
    errors,
    plans
  }
});
