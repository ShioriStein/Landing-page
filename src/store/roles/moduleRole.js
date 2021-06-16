import state from "./moduleRoleState.js";
import mutations from "./moduleRoleMutations.js";
import actions from "./moduleRoleActions.js";
import getters from "./moduleRoleGetters.js";

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
