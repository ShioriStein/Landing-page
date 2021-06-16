export default {
  SET_EVENT: (state, ev) => {
    let data = ev;
    data.data.map(obj => {
      obj.start = new Date(obj.start);
      obj.end = new Date(obj.end);
    });
    state.events = data;
  }
};
