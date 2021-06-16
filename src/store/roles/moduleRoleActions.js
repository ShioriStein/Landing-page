import axios from "@/http/axios";
import CONSTANTS from "@/constants";

const { ENDPOINTS } = CONSTANTS;

export default {
  /**
   * Get all Role Function:
   * This function send request to BE for all Department
   */
  getRole({ commit }, payload) {
    return new Promise((resolve, reject) => {
      const query = new URLSearchParams(payload).toString();
      axios
        .get(`${ENDPOINTS.ROLES.GET}?${query}`)
        .then(res => {
          commit("SET_ROLE", res.data);
          resolve(res);
        })
        .catch(err => reject(err));
    });
  },
  /**
   * Add new Role Function:
   * This function send request "POST" to BE with json object
   */
  AddRole: (_, payload) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${ENDPOINTS.ROLES.ADD}`, {
          name: payload.name,
          description: payload.description
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  /**
   * Update Role Function:
   * This function send Json object to BE
   */
  updateRole: (_, payload) => {
    return new Promise((resolve, reject) => {
      axios
        .put(`${ENDPOINTS.ROLES.UPDATE}/${payload.id}`, {
          id: payload.id,
          name: payload.name,
          description: payload.description
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  /**
   * Delete Role Function:
   * This function send request "DELETE" to BE
   * using paramater in url for id
   */
  removeRole: (_, payload) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${ENDPOINTS.ROLES.DELETE}/${payload}`)
        .then(() => {
          resolve(resolve);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
