import axios from "@/http/axios";
import CONSTANTS from "@/constants";

const { ENDPOINTS } = CONSTANTS;

export default {
  /**
   * Get all Department Function:
   * This function send request to BE for all Department
   */
  getAllDepartment: ({ commit }) => {
    return new Promise((resolve, reject) => {
      axios
        .get(ENDPOINTS.DEPARTMENTS.GET)
        .then(res => {
          commit("SET_DEPARTMENT", res.data.data);
          resolve(resolve);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  getDepartments({ commit }, payload) {
    return new Promise((resolve, reject) => {
      const query = new URLSearchParams(payload).toString();
      axios
        .get(`${ENDPOINTS.ROLES.GET}?${query}`)
        .then(res => {
          commit("SET_ROLES", res.data);
          resolve(res);
        })
        .catch(err => reject(err));
    });
  },

  /**
   * Get all Department Employee Function:
   * This function send request to BE for all Department Employee
   */
  getDepartmentsEmployees({ commit }, payload) {
    return new Promise((resolve, reject) => {
      const query = new URLSearchParams(payload.val).toString();
      axios
        .get(
          `${ENDPOINTS.DEPARTMENTS.GET_BY_DEPARTMENT_ID}/${payload.id}?${query}`
        )
        .then(res => {
          commit("SET_DEPARTMENT_EMPLOYEES", res.data);
          resolve(res);
        })
        .catch(err => reject(err));
    });
  },
  /**
   * Add new Department Function:
   * This function send request "POST" to BE with json object
   */
  AddDepartment: (_, payload) => {
    let temp = {};
    if (payload.departmentId == null || payload.departmentId == 0) {
      delete payload.departmentId;
      temp = {
        name: payload.name,
        supervisorId: payload.supervisorId
      };
    } else {
      temp = {
        departmentId: parseInt(payload.departmentId),
        name: payload.name,
        supervisorId: payload.supervisorId
      };
    }
    return new Promise((resolve, reject) => {
      axios
        .post(ENDPOINTS.DEPARTMENTS.ADD, temp)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  /**
   * Update Department Function:
   * This function send Json object to BE
   */
  updateDepartment: (_, payload) => {
    return new Promise((resolve, reject) => {
      axios
        .put(
          `${ENDPOINTS.DEPARTMENTS.UPDATE}/${parseInt(payload.departmentId)}`,
          {
            id: parseInt(payload.departmentId),
            name: payload.name
          }
        )
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  /**
   * Delete Department Function:
   * This function send request "DELETE" to BE
   * using paramater in url for id
   */
  removeDepartment: ({ dispatch }, payload) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${ENDPOINTS.DEPARTMENTS.DELETE}/${payload}`)
        .then(() => {
          resolve(resolve);
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
   * reset Department Employees Function:
   */
  resetDepartmentEmployeeCache: ({ commit }) => {
    commit("SET_DEPARTMENT_EMPLOYEES", {});
  }
};
