import state from "./moduleErroState.js";
import mutations from "./moduleErroMutations.js";
import actions from "./moduleErroActions.js";
import getters from "./moduleErroGetters.js";

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
