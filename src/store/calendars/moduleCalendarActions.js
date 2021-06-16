import axios from "@/http/axios";
import CONSTANTS from "@/constants";

const { ENDPOINTS } = CONSTANTS;

export default {
  /**
   * Get all user event Function:
   * This function send request to BE for all event
   */
  getCalendarEvents: ({ commit }) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${ENDPOINTS.CALENDARS.GET}`)
        .then(res => {
          commit("SET_EVENT", res.data);
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
