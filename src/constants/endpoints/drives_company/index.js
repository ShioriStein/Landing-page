const baseService = "/api/v1/company-drives";

const DRIVES_COMPANY = {
  GET: `${baseService}`,
  ADD: `${baseService}`,
  ADD_FOLDER: `${baseService}/folders`,
  ADD_FILE: `${baseService}/files`,
  DOWNLOAD_FOLDER: `${baseService}/folders`,
  DOWNLOAD_FILE: `${baseService}/files`,
  DELETE: `${baseService}`,
  GET_BY_ID: `${baseService}`,
  UPDATE: `${baseService}`,
  COPY: `${baseService}/copy`,
  MOVE: `${baseService}/move`
};

export default DRIVES_COMPANY;
