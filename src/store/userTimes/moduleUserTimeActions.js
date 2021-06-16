import axios from "@/http/axios";
import CONSTANTS from "@/constants";
import Vue from "vue";

const { ENDPOINTS } = CONSTANTS;

export default {
  getWorkTimes({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get(ENDPOINTS.USER_TIMES.GET_ALL(payload))
        .then(res => {
          const { data } = res.data;
          commit("SET_WORK_TIMES", data);
          resolve(res);
        })
        .catch(err => reject(err));
    });
  },
  getForDate({ commit }) {
    return new Promise((resolve, reject) => {
      axios
        .get(ENDPOINTS.USER_TIMES.GET_STATUS)
        .then(res => {
          const { data } = res.data;
          commit("SET_DATE_STATUS", data);
          resolve(res);
        })
        .catch(err => reject(err));
    });
  },
  checkIn({ dispatch }) {
    return new Promise((resolve, reject) => {
      axios
        .post(ENDPOINTS.USER_TIMES.CHECK_IN, {})
        .then(res => {
          dispatch("getForDate");
          Vue.$toast("Check in successfully");
          resolve(res);
        })
        .catch(err => reject(err));
    });
  },
  checkOut({ dispatch }) {
    return new Promise((resolve, reject) => {
      axios
        .post(ENDPOINTS.USER_TIMES.CHECK_OUT, {})
        .then(res => {
          dispatch("getForDate");
          Vue.$toast("Check out successfully");
          resolve(res);
        })
        .catch(err => reject(err));
    });
  },
  updateSummary({ dispatch }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .patch(ENDPOINTS.USER_TIMES.UPDATE_SUMMARY, { summary: payload })
        .then(res => {
          dispatch("getForDate");
          Vue.$toast("Save successfully");
          resolve(res);
        })
        .catch(err => reject(err));
    });
  }
};
