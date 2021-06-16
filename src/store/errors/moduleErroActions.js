export default {
  resetError: ({ commit }) => {
    commit("SET_ERROR", "");
  },
  setErrors: ({ commit }, payload) => {
    commit("SET_ERROR", payload);
  }
};
