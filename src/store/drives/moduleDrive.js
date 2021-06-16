import state from "./moduleDriveState.js";
import mutations from "./moduleDriveMutations.js";
import actions from "./moduleDriveActions.js";
import getters from "./moduleDriveGetters.js";

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
