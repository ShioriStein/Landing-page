import state from "./moduleTaskState";
import mutations from "./moduleTaskMutations";
import actions from "./moduleTaskActions";
import getters from "./moduleTaskGetters";

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
