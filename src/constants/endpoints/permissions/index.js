const baseService = "/api/v1/permissions";

const PERMISSIONS = {
  GET: `${baseService}`,
  ADD: `${baseService}`,
  DELETE: `${baseService}`,
  GET_BY_ID: `/${baseService}`,
  UPDATE: `${baseService}`,
  ASSIGN_PERMISSIONS: `/api/v1/Roles/permissions`,
  REVOKE_PERMISSIONS: `/api/v1/Roles/permissions`
};

export default PERMISSIONS;
