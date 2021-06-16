import CONSTANTS from "@/constants";

export default {
  has: role => {
    var roles = localStorage.getItem(CONSTANTS.ROLES);
    if (!roles) return false;
    return roles.toLocaleLowerCase().includes(role);
  },
  isAuthenticated: () => localStorage.getItem(CONSTANTS.USER_INFOR) != null,
  userInfo: {},
  roles: [],
  permissions: [],
  error: "",
  logout: false
};
