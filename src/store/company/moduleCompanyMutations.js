export default {
  SET_COMPANIES: (state, payload) => {
    state.company = payload;
  },
  SET_CHOOSE_COMPANIES: (state, payload) => {
    state.chooseCompany = payload;
  },
  SET_ERROR(state, payload) {
    state.error = payload;
  }
};
