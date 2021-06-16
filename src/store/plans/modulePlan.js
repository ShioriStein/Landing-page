import state from "./modulePlanState.js";
import mutations from "./modulePlanMutations.js";
import actions from "./modulePlanActions.js";
import getters from "./modulePlanGetters.js";

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
