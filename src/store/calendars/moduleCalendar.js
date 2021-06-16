import state from "./moduleCalendarState";
import mutations from "./moduleCalendarMutations";
import actions from "./moduleCalendarActions";
import getters from "./moduleCalendarGetters";

export default {
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
};
