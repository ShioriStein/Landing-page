import axios from "@/http/axios";
import CONSTANTS from "@/constants";

const { ENDPOINTS } = CONSTANTS;

export default {
  getAllEmployee: ({ commit }) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${ENDPOINTS.EMPLOYEES.GET}?limit=-1`)
        .then(res => {
          commit("SET_EMPLOYEE", res.data);
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  getEmployee({ commit }, payload) {
    return new Promise((resolve, reject) => {
      const query = new URLSearchParams(payload).toString();
      axios
        .get(`${ENDPOINTS.EMPLOYEES.GET}?${query}`)
        .then(res => {
          commit("SET_EMPLOYEE", res.data);
          resolve(res);
        })
        .catch(err => reject(err));
    });
  },
  createNewEmployee: (_, payload) => {
    return new Promise((resolve, reject) => {
      /*
      const formData = new FormData();
      formData.append("userName", payload.userName);
      formData.append("email", payload.email);
      formData.append("phoneNumber", payload.phoneNumber);
      formData.append("firstName", payload.firstName);
      formData.append("lastName", payload.lastName);
      formData.append("gender", payload.gender);
      formData.append("dob", payload.dob);
      formData.append("departmentId", payload.departmentId);

      axios
        .posts("/employees", formData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
        */
      const bodyData = {
        userName: payload.userName,
        email: payload.email,
        phoneNumber: payload.phoneNumber,
        firstName: payload.firstName,
        lastName: payload.lastName,
        gender: parseInt(payload.gender),
        dob: payload.dob,
        departmentId: payload.departmentId
      };
      axios
        .post(ENDPOINTS.EMPLOYEES.ADD, bodyData)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  /**
   * PAtch Employee Function:
   * This function send Json object to BE
   * Using this to change user department
   */
  changeEmployeeDepartment: (_, payload) => {
    return new Promise((resolve, reject) => {
      axios
        .patch(`${ENDPOINTS.EMPLOYEES.UPDATE}`, {
          userId: payload.id,
          departmentId: payload.departmentId
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
   * Update Employee Function:
   * This function send Json object to BE
   */
  updateEmployee: (_, payload) => {
    return new Promise((resolve, reject) => {
      axios
        .put(`${ENDPOINTS.EMPLOYEES.UPDATE}/${payload.id}`, {
          id: payload.id,
          phoneNumber: payload.phoneNumber,
          firstName: payload.firstName,
          lastName: payload.lastName,
          gender: parseInt(payload.gender),
          dob: payload.dob
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  removeEmployee: (_, payload) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${ENDPOINTS.EMPLOYEES.DELETE}/${payload}`)
        .then(() => {
          resolve(resolve);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
