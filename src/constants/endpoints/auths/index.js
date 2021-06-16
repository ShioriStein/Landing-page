const baseService = "/api/v1/auth";

const AUTHS = {
  REFRESH_TOKEN: `${baseService}/refresh-token`,
  SIGN_IN: `${baseService}/sign-in`,
  ME: `${baseService}/me`,
  FORGOT_PASSWORD: `${baseService}/forgot-password`,
  RESET_PASSWORD: `${baseService}/reset-password`
};

export default AUTHS;
