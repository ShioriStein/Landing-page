import axios from "@/http/axios";
import CONSTANTS from "@/constants";

const { ENDPOINTS } = CONSTANTS;
//const temporaryBaseURL = "https://localhost:5001"

export default {
  /**
   * Get all item in folder Function:
   * This function send request to BE for all posts
   */
  getFolder({ dispatch, commit }, payload) {
    return new Promise((resolve, reject) => {
      let query;
      commit("SET_FOLDER", {});
      if (payload.folderId > 0) {
        query = new URLSearchParams(payload).toString();
      } else {
        query = new URLSearchParams().toString();
      }
      axios
        .get(`${ENDPOINTS.DRIVES.GET_BY_ID}?${query}`)
        .then(res => {
          res.data.data.sort((a, b) => {
            if (a.fileType == b.fileType) {
              return a.name.localeCompare(b.name);
            }
            return a.fileType < b.fileType ? -1 : 1;
          });
          commit("SET_FOLDER", res.data);
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
  getFolderCompany({ dispatch, commit }, payload) {
    commit("SET_FOLDER", {});
    return new Promise((resolve, reject) => {
      let query;
      if (payload.folderId > 0) {
        query = new URLSearchParams(payload).toString();
      } else {
        query = new URLSearchParams().toString();
      }
      axios
        .get(`${ENDPOINTS.DRIVES_COMPANY.GET_BY_ID}?${query}`)
        .then(res => {
          res.data.data.sort((a, b) => {
            if (a.fileType == b.fileType) {
              return a.name.localeCompare(b.name);
            }
            return a.fileType < b.fileType ? -1 : 1;
          });
          commit("SET_FOLDER", res.data);
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
  getFolderShare({ dispatch, commit }, payload) {
    commit("SET_FOLDER", {});
    return new Promise((resolve, reject) => {
      let query;
      if (payload.folderId > 0) {
        query = new URLSearchParams(payload).toString();
      } else {
        query = new URLSearchParams().toString();
      }
      axios
        .get(`${ENDPOINTS.DRIVES_SHARE.GET_BY_ID}?${query}`)
        .then(res => {
          res.data.data.sort((a, b) => {
            if (a.fileType == b.fileType) {
              return a.name.localeCompare(b.name);
            }
            return a.fileType < b.fileType ? -1 : 1;
          });
          commit("SET_FOLDER", res.data);
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
  getTrashBin({ dispatch, commit }) {
    return new Promise((resolve, reject) => {
      commit("SET_FOLDER", {});
      axios
        .get(`${ENDPOINTS.DRIVES_TRASH.GET}`)
        .then(res => {
          res.data.data.sort((a, b) => {
            if (a.fileType == b.fileType) {
              return a.name.localeCompare(b.name);
            }
            return a.fileType < b.fileType ? -1 : 1;
          });
          commit("SET_FOLDER", res.data);
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
   * create folder action:
   */
  createFolder({ dispatch, commit }, payload) {
    if (payload.parentId == 0) {
      delete payload.parentId;
    }
    return new Promise((resolve, reject) => {
      axios
        .post(`${ENDPOINTS.DRIVES.ADD_FOLDER}`, payload)
        .then(res => {
          commit("SET_FOLDER", res.data);
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
  createFolderCompany({ dispatch, commit }, payload) {
    if (payload.parentId == null) {
      delete payload.parentId;
    }
    return new Promise((resolve, reject) => {
      axios
        .post(`${ENDPOINTS.DRIVES_COMPANY.ADD_FOLDER}`, payload)
        .then(res => {
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
   * Add file actions:
   * This actions send request "POST" to BE with multipart/form-data object to add a file to current folder
   */
  addFile: (_, payload) => {
    var bodyFormData = new FormData();
    bodyFormData.append("FolderId", payload.folderId);
    for (var i = 0; i < payload.files.length; i++) {
      bodyFormData.append("Files", payload.files[i]);
    }
    return new Promise((resolve, reject) => {
      axios
        .post(`${ENDPOINTS.DRIVES.ADD_FILE}`, bodyFormData, {
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
    });
  },
  addFileCompany: (_, payload) => {
    var bodyFormData = new FormData();
    bodyFormData.append("FolderId", payload.folderId);
    for (var i = 0; i < payload.files.length; i++) {
      bodyFormData.append("Files", payload.files[i]);
    }
    return new Promise((resolve, reject) => {
      axios
        .post(`${ENDPOINTS.DRIVES_COMPANY.ADD_FILE}`, bodyFormData, {
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
    });
  },
  /**
   * download file actions:
   */
  downloadFile: (_, payload) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${ENDPOINTS.DRIVES.DOWNLOAD_FILE}/${payload}`, {
          responseType: "arraybuffer"
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  downloadFileCompany: (_, payload) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`$${ENDPOINTS.DRIVES_COMPANY.DOWNLOAD_FILE}/${payload}`, {
          responseType: "arraybuffer"
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  downloadFileShare: (_, payload) => {
    return new Promise((resolve, reject) => {
      axios
        .get(`${ENDPOINTS.DRIVES_SHARE.DOWNLOAD}/${payload}/download`, {
          responseType: "arraybuffer"
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  deleteFile: (_, payload) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/api/v1/drives/${payload}`)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  deleteFileCompany: ({ dispatch }, payload) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`/api/v1/company-drives/${payload}`)
        .then(res => {
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
  deleteFileTrash: (_, payload) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${ENDPOINTS.DRIVES_TRASH.DELETE}`, {
          data: { driveIds: payload }
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
   * reset folder action:
   */
  resetFolder: ({ commit }) => {
    commit("SET_FOLDER", {});
  },
  /**
   * reset error action:
   */
  resetError: ({ commit }) => {
    commit("SET_ERROR", "");
  },
  setSrc({ commit }, payload) {
    commit("SET_SRC", payload);
  },
  pasteDrive({ state }, { driveId, destinationId }) {
    let apiURl = "";
    if (state.src.copy) {
      apiURl = ENDPOINTS.DRIVES.COPY;
    } else {
      apiURl = ENDPOINTS.DRIVES.MOVE;
    }

    return axios.post(apiURl, {
      driveId,
      destinationId: destinationId == 0 ? null : destinationId
    });
  },
  pasteDriveCompany({ state }, { driveId, destinationId }) {
    let apiURl = "";
    if (state.src.copy) {
      apiURl = ENDPOINTS.DRIVES_COMPANY.COPY;
    } else {
      apiURl = ENDPOINTS.DRIVES_COMPANY.MOVE;
    }

    return axios.post(apiURl, {
      driveId,
      destinationId: destinationId == 0 ? null : destinationId
    });
  },
  shareItemDrives({ dispatch }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${ENDPOINTS.DRIVES.GET}/Shared`, {
          driveIds: payload.id,
          sharedUserRequests: payload.sharedUserRequests
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          err.response;
          dispatch("errors/setErrors", err.response.data.message, {
            root: true
          });
          reject(err);
        });
    });
  },
  restoreDrives({ dispatch }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${ENDPOINTS.DRIVES_TRASH.RESTORE}`, {
          driveIds: payload
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          dispatch("errors/setErrors", err.response.data.message, {
            root: true
          });
          reject(err);
        });
    });
  }
};
