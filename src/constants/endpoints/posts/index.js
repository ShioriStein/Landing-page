const baseService = "/api/v1/posts";

const POST = {
  GET: `${baseService}`,
  ADD: `${baseService}`,
  DELETE: `${baseService}`,
  GET_BY_ID: `/${baseService}`,
  UPDATE: `${baseService}`,
  APPROVE: `${baseService}/approve`,
  REJECT: `${baseService}/reject`
};

export default POST;
