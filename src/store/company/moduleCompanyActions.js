import axios from "@/http/axios";
import CONSTANTS from "@/constants";

const { ENDPOINTS } = CONSTANTS;

export default {
  /**
   * Get list company action:
   * This action send request to BE for all company
   */
  getAllCompany({ dispatch, commit }, payload) {
    return new Promise((resolve, reject) => {
      const query = new URLSearchParams(payload).toString();
      axios
        .get(`${ENDPOINTS.COMPANY.GET}?${query}`)
        .then(res => {
          commit("SET_COMPANIES", res.data);
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
  getAllCompanies({ dispatch, commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${ENDPOINTS.COMPANY.GET}`)
        .then(res => {
          commit("SET_COMPANIES", res.data);
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
  /**
   * create company action:
   */
  createCompanyAction({ dispatch, commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${ENDPOINTS.COMPANY.GET}`, payload)
        .then(res => {
          commit("SET_CHOOSE_COMPANIES", res.data);
          resolve(res);
        })
        .catch(err => {
          commit("SET_ERROR", err.response.data.message);
          dispatch("errors/setErrors", err.response.data.message, {
            root: true
          });
          reject(err);
        });
    });
  },
  /**
   * reset error action:
   */
  resetError: ({ commit }) => {
    commit("SET_ERROR", "");
  }
};
