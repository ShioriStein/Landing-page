import axios from "@/http/axios";
import CONSTANTS from "@/constants";

const { ENDPOINTS } = CONSTANTS;

export default {
  /**
   * Get all posts Function:
   * This function send request to BE for all posts
   */
  getAllPost({ commit }, payload) {
    return new Promise((resolve, reject) => {
      const query = new URLSearchParams(payload).toString();
      axios
        .get(`${ENDPOINTS.POSTS.GET}?${query}`)
        .then(res => {
          commit("SET_POST", res.data);
          resolve(res);
        })
        .catch(err => reject(err));
    });
  },
  /**
   * Get all approve posts Function:
   * This function send request to BE for all approve posts
   */
  getAllApprovePost({ commit }, payload) {
    return new Promise((resolve, reject) => {
      const query = new URLSearchParams(payload).toString();
      axios
        .get(`${ENDPOINTS.POSTS.GET}/approved?${query}`)
        .then(res => {
          commit("SET_POST", res.data);
          resolve(res);
        })
        .catch(err => reject(err));
    });
  },
  /**
   * Get posts detail Function:
   * This function send request to BE for posts detail
   */
  getPostDetail({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${ENDPOINTS.POSTS.GET}/${payload}`)
        .then(res => {
          commit("SET_POST_DETAIL", res.data);
          resolve(res);
        })
        .catch(err => reject(err));
    });
  },
  /**
   * Get raw posts detail Function:
   * This function send request to BE for all raw posts detail
   */
  getPostRawDetail({ commit }, payload) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${ENDPOINTS.POSTS.GET}/${payload}/raw`)
        .then(res => {
          commit("SET_POST_DETAIL", res.data);
          resolve(res);
        })
        .catch(err => reject(err));
    });
  },
  /**
   * Get user's posts Function:
   * This function send request to BE for user's posts
   */
  getMyPost({ commit }, payload) {
    commit("SET_POST", {});
    const query = new URLSearchParams(payload).toString();
    return new Promise((resolve, reject) => {
      axios
        .get(`${ENDPOINTS.POSTS.GET}?${query}`)
        .then(res => {
          commit("SET_POST", res.data);
          resolve(res);
        })
        .catch(err => reject(err));
    });
  },
  /**
   * Add new Post Function:
   * This function send request "POST" to BE with multipart/form-data object
   */
  createPost: (_, payload) => {
    var bodyFormData = new FormData();
    bodyFormData.append("Title", payload.title);
    bodyFormData.append("Description", payload.description);
    for (var i = 0; i < payload.files.length; i++) {
      bodyFormData.append("Attachments", payload.files[i]);
    }
    return new Promise((resolve, reject) => {
      axios
        .post(`${ENDPOINTS.POSTS.ADD}`, bodyFormData, {
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
   * Update Post Function:
   * This function send multi request to BE
   */
  updatePostTitleDescription: ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      axios
        .put(`${ENDPOINTS.POSTS.UPDATE}/${payload.id}`, {
          title: payload.title,
          description: payload.description
        })
        .then(res => {
          resolve(res);
        })
        .catch(errs => {
          commit("SET_ERROR", errs.response.data.message);
          reject(errs);
        });
    });
  },
  updatePostAddFile: ({ commit }, payload) => {
    var bodyFormData = new FormData();
    for (var i = 0; i < payload.files.length; i++) {
      if (payload.files[i].size > 0) {
        bodyFormData.append("Attachment", payload.files[i]);
      }
    }
    return new Promise((resolve, reject) => {
      axios
        .patch(
          `${ENDPOINTS.POSTS.UPDATE}/${payload.id}/add-attachment`,
          bodyFormData,
          {
            headers: {
              "Content-Type": "multipart/form-data"
            }
          }
        )
        .then(res => {
          resolve(res);
        })
        .catch(errs => {
          commit("SET_ERROR", errs.response.data.message);
          reject(errs);
        });
    });
  },
  updatePostRemoveFile: ({ commit }, payload) => {
    return new Promise((resolve, reject) => {
      axios
        .patch(
          `${ENDPOINTS.POSTS.UPDATE}/${payload.id}/remove-attachment/${payload.fileId}`
        )
        .then(res => {
          resolve(res);
        })
        .catch(errs => {
          commit("SET_ERROR", errs.response.data.message);
          reject(errs);
        });
    });
  },

  updatePost: ({ commit }, payload) => {
    var bodyFormData = new FormData();
    bodyFormData.append("Title", payload.title);
    bodyFormData.append("Description", payload.description);
    for (var i = 0; i < payload.files.length; i++) {
      bodyFormData.append("Attachments", payload.files[i]);
    }
    return new Promise((resolve, reject) => {
      axios
        .post(`${ENDPOINTS.POSTS.ADD}`, bodyFormData, {
          headers: {
            "Content-Type": "multipart/form-data"
          }
        })
        .then(res => {
          resolve(res);
        })
        .catch(errs => {
          commit("SET_ERROR", errs.response.data.message);
          reject(errs);
        });
    });
  },
  /**
   * Approve Post Function:
   * This function send Json object to BE
   */
  approvePost: (_, payload) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${ENDPOINTS.POSTS.APPROVE}`, {
          postId: payload.id
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
   * reject post Function:
   * This function send request "POST" to BE
   * This function send Json object to BE
   * using paramater in url for id
   */
  rejectPost: (_, payload) => {
    return new Promise((resolve, reject) => {
      axios
        .post(`${ENDPOINTS.POSTS.REJECT}`, {
          postId: payload.id
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
   * delete post Function:
   * This function send request "DELETE" to BE
   * using paramater in url for id
   */
  deletePost: (_, payload) => {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${ENDPOINTS.POSTS.DELETE}/${payload}`)
        .then(() => {
          resolve(resolve);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  /**
   * reset posts Function:
   */
  resetPost: ({ commit }) => {
    commit("SET_POST", {});
    commit("SET_POST_DETAIL", {});
  },
  /**
   * set current posts:
   */
  setCurrentPost: ({ commit }, payload) => {
    commit("SET_CURRENT_POST", payload);
  },
  resetError: ({ commit }) => {
    commit("SET_ERROR", "");
  }
};
