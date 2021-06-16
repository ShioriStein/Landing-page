const baseService = "/api/v1/departments";

const DEPARTMENTS = {
  GET: `${baseService}`,
  GET_BY_DEPARTMENT_ID: `/api/v1/employees/departments`,
  ADD: `${baseService}`,
  DELETE: `${baseService}`,
  GET_BY_ID: `${baseService}`,
  UPDATE: `${baseService}`
};

export default DEPARTMENTS;
