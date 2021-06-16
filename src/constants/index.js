import ENDPOINTS from "./endpoints";
import PAGE_NAMES from "./pageNames";
import ROUTERS from "./routers";
import MESSAGES from "./message/";
import PERMISSIONS from "./permissions/";
import COLORS from "./colors/";
import HUBS from "@/constants/hubs";
import FILE_SRC from "@/constants/files";

const CONSTANTS = {
  SERVER_URL:
    process.env.NODE_ENV === "development"
      ? "https://localhost:5001"
      : "https://my-business-management.heroku.com",
  ACCESS_TOKEN: "accessToken",
  REFRESH_TOKEN: "refreshToken",
  TOKEN: {
    ACCESS_TOKEN: "accessToken",
    REFRESH_TOKEN: "refreshToken"
  },
  ROLES: "Roles",
  USER_INFO: "UserInfo",
  USER_ID: "UserID",
  LIMIT: 6,
  ACCESS_DATE: "AccessDate",
  USER: "user",
  ENDPOINTS,
  MESSAGES,
  PERMISSIONS,
  PAGE_NAMES,
  ROUTERS,
  COLORS,
  HUBS,
  FILE_SRC
};

export default CONSTANTS;
