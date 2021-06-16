import axios from "@/http/axios";
import CONSTANTS from "@/constants";

const { ENDPOINTS } = CONSTANTS;
export default {
  /**
   * Get Permission Function:
   * This function send request to BE for all Department
   */
  getPermCheck({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${ENDPOINTS.PERMISSIONS.GET}/roles/${payload}/checked`)
        .then(res => {
          commit("SET_PERMISSION_ASSIGN", res.data);
          resolve(res);
        })
        .catch(err => reject(err));
    });
  },
  getPermUnCheck({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${ENDPOINTS.PERMISSIONS.GET}/roles/${payload}/un-checked`)
        .then(res => {
          commit("SET_PERMISSION_NOT_ASSIGN", res.data);
          resolve(res);
        })
        .catch(err => reject(err));
    });
  },
  /**
   * Add new perm Function:
   * This function send request "POST" to BE with json object
   */
  AddPerm: ({ dispatch }, payload) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${ENDPOINTS.PERMISSIONS.ASSIGN_PERMISSIONS}`, {
          roleId: payload.id,
          permissions: payload.permission
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          dispatch("errors/setErrors", err.response, {
            root: true
          });
          reject(err);
        });
    });
  },
  /**
   * Delete perm Function:
   * This function send request "DELETE" to BE
   * using paramater in url for id
   */
  removePerm: (_, payload) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${ENDPOINTS.PERMISSIONS.REVOKE_PERMISSIONS}`, {
          data: {
            roleId: payload.id,
            permissions: payload.permission
          }
        })
        .then(() => {
          resolve(resolve);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  /**
   * reset perm Function:
   * This function reset all store permissions in store
   */
  resetPerm: ({ commit }) => {
    commit("SET_PERMISSION_NOT_ASSIGN", {});
    commit("SET_PERMISSION_ASSIGN", {});
  }
};
