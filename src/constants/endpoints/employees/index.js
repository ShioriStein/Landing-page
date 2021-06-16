const baseService = "/api/v1/employees";

const EMPLOYEES = {
  GET: `${baseService}`,
  GET_BY_DEPARTMENT_ID: `${baseService}/departments`,
  ADD: `${baseService}`,
  DELETE: `${baseService}`,
  GET_BY_ID: `${baseService}`,
  UPDATE: `${baseService}`
};

export default EMPLOYEES;
