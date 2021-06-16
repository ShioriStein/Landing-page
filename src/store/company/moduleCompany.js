import state from "./moduleCompanyState.js";
import mutations from "./moduleCompanyMutations.js";
import actions from "./moduleCompanyActions.js";
import getters from "./moduleCompanyGetters.js";

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
