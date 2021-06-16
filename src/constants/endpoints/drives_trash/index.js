const baseService = "/api/v1/trash-bins";

const DRIVES_TRASH = {
  GET: `${baseService}`,
  DELETE: `${baseService}`,
  RESTORE: `${baseService}/restore`
};

export default DRIVES_TRASH;
