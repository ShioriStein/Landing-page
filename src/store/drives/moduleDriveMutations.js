export default {
  SET_FOLDER: (state, payload) => {
    state.folder = payload;
  },
  SET_ERROR(state, payload) {
    state.error = payload;
  },
  SET_SRC(state, payload) {
    state.src = payload;
  }
};
