export default {
  SET_PERMISSION_ASSIGN: (state, per) => {
    state.permissionAssign = per;
  },
  SET_PERMISSION_NOT_ASSIGN: (state, per) => {
    state.permissionNotAssign = per;
  }
};
