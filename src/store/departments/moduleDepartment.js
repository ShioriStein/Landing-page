import state from "./moduleDepartmentState.js";
import mutations from "./moduleDepartmentMutations.js";
import actions from "./moduleDepartmentActions.js";
import getters from "./moduleDepartmentGetters.js";

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
