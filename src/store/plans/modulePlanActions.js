import axios from "@/http/axios";
import CONSTANTS from "@/constants";

const { ENDPOINTS } = CONSTANTS;
//const temporaryBaseURL = "https://localhost:5001"

export default {
  /**
   * Get all plans action:
   */
  getPlans({ dispatch, commit }, payload) {
    return new Promise((resolve, reject) => {
      let query;
      commit("SET_PLANS", []);
      query = new URLSearchParams(payload).toString();
      axios
        .get(`${ENDPOINTS.PLANS.GET}?${query}`)
        .then(res => {
          commit("SET_PLANS", res.data.data);
          resolve(res);
        })
        .catch(err => {
          dispatch("errors/setErrors", err.response.data.message, {
            root: true
          });
          reject(err);
        });
    });
  },
  resetPlans: ({ commit }) => {
    commit("SET_PLANS", []);
  },
  resetError: ({ commit }) => {
    commit("SET_ERROR", "");
  }
};
