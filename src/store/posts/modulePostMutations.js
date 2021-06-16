export default {
  SET_POST: (state, post) => {
    state.post = post;
  },
  SET_POST_DETAIL: (state, postDetail) => {
    state.postDetail = postDetail;
  },
  SET_CURRENT_POST: (state, currentPost) => {
    state.currentPost = currentPost;
  },
  SET_ERROR(state, payload) {
    state.error = payload;
  }
};
