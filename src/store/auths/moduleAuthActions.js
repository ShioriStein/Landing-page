import axios from "@/http/axios";
import CONSTANTS from "../../constants";

const { ENDPOINTS, TOKEN } = CONSTANTS;

export default {
  loginJWT({ commit, dispatch }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(ENDPOINTS.AUTHS.SIGN_IN, {
          email: payload.email,
          password: payload.password,
          rememberMe: payload.rememberMe
        })
        .then(result => {
          if (result.status === 200) {
            const { accessToken, refreshToken } = result.data.data;
            commit("SET_TOKEN", {
              accessToken,
              refreshToken
            });
            commit("SET_BEARER", result.data.data.token);
            dispatch("getInformation").finally(() => {
              resolve(result);
            });
          }
        })
        .catch(err => {
          if (err.response.status === 400 || err.response.status === 404) {
            commit("SET_ERROR", err.response.data.message);
          }
          reject(err);
        });
    });
  },
  getInformation({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get(ENDPOINTS.AUTHS.ME)
        .then(res => {
          localStorage.setItem(CONSTANTS.ROLES, res.data.data.roles);
          localStorage.setItem(
            CONSTANTS.USER_INFO,
            JSON.stringify(res.data.data)
          );
          localStorage.setItem(CONSTANTS.USER_ID, res.data.data.id);
          localStorage.setItem(CONSTANTS.ACCESS_DATE, Date());
          localStorage.setItem(CONSTANTS.USER, JSON.stringify(res.data.data));
          commit("SET_IS_AUTHENTICATED", true);
          commit("SET_USER_INFO", res.data.data);
          resolve(res);
        })
        .catch(errs => {
          if (errs.response.status === 400 || errs.response.status === 404) {
            commit("SET_ERROR", errs.response.data.message);
          }
          reject(errs);
        });
    });
  },
  changePassword(_, payload) {
    return axios.post("/auth/change-password", payload);
  },
  registerUser(_, payload) {
    return axios.post("/auth/register", payload);
  },
  logout({ commit }) {
    return new Promise(resolve => {
      localStorage.removeItem(TOKEN.ACCESS_TOKEN);
      localStorage.removeItem(TOKEN.REFRESH_TOKEN);
      commit("SET_BEARER", "");
      localStorage.removeItem(CONSTANTS.ROLES);
      localStorage.removeItem(CONSTANTS.USER_INFO);
      localStorage.removeItem(CONSTANTS.USER);
      commit("SET_IS_AUTHENTICATED", false);
      commit("SET_USER_INFO", {});
      commit("SET_LOGOUT", true);
      resolve("success");
    });
  },
  verifyEmail(_, payload) {
    return axios.post("/auth/verify-email", payload);
  },
  /**
   * Forgot pass word function
   * Input: email
   * Output: either send success or 400 error
   */
  forgotPassword({ commit }, payload) {
    return new Promise(resolve => {
      axios
        .post(ENDPOINTS.AUTHS.FORGOT_PASSWORD, {
          email: payload
        })
        .then(res => {
          if (res.status === 200) {
            resolve(res);
          } else {
            throw res;
          }
        })
        .catch(errs => {
          if (errs.response.status === 400) {
            commit("SET_ERROR", errs.response.data.message);
          }
          resolve(errs);
        });
    });
  },
  /**
   * Forgot pass word function
   * Input: email
   * Output: either send success or 400 error
   */
  resetPassword({ commit }, payload) {
    return new Promise(resolve => {
      axios
        .post(ENDPOINTS.AUTHS.RESET_PASSWORD, {
          email: payload.email,
          token: payload.token,
          password: payload.password,
          confirmPassword: payload.confirmPassword
        })
        .then(res => {
          if (res.status === 200) {
            resolve(res);
          } else {
            throw res;
          }
        })
        .catch(errs => {
          if (errs.response.status === 400) {
            commit("SET_ERROR", errs.response.data.message);
          }
          resolve(errs);
        });
    });
  },
  checkSpecialRole({ state }) {
    return state.roles === "SupperAdmin";
  },
  checkAuthorize({ state }, permission) {
    return state.permissions.some(
      p => p == permission || state.roles == "SupperAdmin"
    );
  }
};
