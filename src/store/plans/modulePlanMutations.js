export default {
  SET_PLANS: (state, payload) => {
    state.plans = payload;
  },
  SET_ERROR(state, payload) {
    state.error = payload;
  },
  SET_SRC(state, payload) {
    state.src = payload;
  }
};
