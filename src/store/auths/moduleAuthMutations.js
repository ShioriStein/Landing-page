import axios from "@/http/axios";
import CONSTANTS from "@/constants";

const { TOKEN } = CONSTANTS;
export default {
  SET_BEARER(state, accessToken) {
    axios.defaults.headers.common["Authorization"] = "Bearer" + accessToken;
  },
  SET_IS_AUTHENTICATED(state) {
    state.isAuthenticated = () =>
      localStorage.getItem(CONSTANTS.USER_INFO) != null;
  },
  SET_ERROR(state, payload) {
    state.error = payload;
  },
  SET_TOKEN(_, payload) {
    localStorage.setItem(TOKEN.ACCESS_TOKEN, payload.accessToken);
    localStorage.setItem(TOKEN.REFRESH_TOKEN, payload.refreshToken);
  },
  SET_USER_INFO(state, payload) {
    state.permissions = payload.permissions;
    delete payload.permissions;
    state.roles = payload.roles;
    delete payload.roles;
    state.userInfo = payload;
  },
  SET_LOGOUT(state, payload) {
    state.logout = payload;
  }
};
