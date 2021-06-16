import state from "./modulePermissionState.js";
import mutations from "./modulePermissionMutations.js";
import actions from "./modulePermissionActions.js";
import getters from "./modulePermissionGetters.js";

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
