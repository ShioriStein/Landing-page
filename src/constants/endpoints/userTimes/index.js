const baseService = "/api/v1/user-times";

const USER_TIMES = {
  GET_ALL: ({ page = 1, limit = 50, search = "" }) =>
    `${baseService}?page=${page}&limit=${limit}&search=${search}`,
  GET_STATUS: `${baseService}/for-date`,
  CHECK_IN: `${baseService}/check-in`,
  CHECK_OUT: `${baseService}/check-out`,
  UPDATE_SUMMARY: `${baseService}/summary`
};

export default USER_TIMES;
