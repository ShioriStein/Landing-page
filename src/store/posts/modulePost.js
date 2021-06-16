import state from "./modulePostState.js";
import mutations from "./modulePostMutations.js";
import actions from "./modulePostActions.js";
import getters from "./modulePostGetters.js";

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
