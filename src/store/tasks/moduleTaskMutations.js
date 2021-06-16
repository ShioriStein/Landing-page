export default {
  SET_TASKS(state, tasks) {
    state.tasks = tasks;
  },
  CHANGE(state) {
    state.changed = !state.changed;
  }
};
