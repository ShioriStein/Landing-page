import axios from "../../http/axios";
import CONSTANTS from "../../constants";

const { ENDPOINTS } = CONSTANTS;

export default {
  createTask: (_, payload) => {
    return axios.post(ENDPOINTS.TASKS.CREATE, payload, {
      headers: {
        "Content-Type": "multipart/form-data;"
      }
    });
  },
  getTasks({ commit }, payload) {
    const query = new URLSearchParams(payload).toString();
    return axios.get(`${ENDPOINTS.TASKS.GET}?${query}`).then(res => {
      commit("SET_TASKS", res.data);
    });
  },
  getMyTasks({ commit }, payload) {
    const query = new URLSearchParams(payload).toString();
    return axios.get(`${ENDPOINTS.TASKS.GET_PERSONAL}?${query}`).then(res => {
      commit("SET_TASKS", res.data);
    });
  },
  getTaskById(_, payload) {
    return axios.get(`${ENDPOINTS.TASKS.GET_BY_ID}/${payload}`);
  }
};
