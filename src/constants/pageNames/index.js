import ROUTERS from "../routers";

const { HOME, SIGN_IN, FORGOT_PASSWORD, RESET_PASSWORD } = ROUTERS;

const PAGE_NAME = {
  [HOME]: "Home",
  [SIGN_IN]: "Login",
  [FORGOT_PASSWORD]: "Forgot password",
  [RESET_PASSWORD]: "Reset password"
};
export default PAGE_NAME;
