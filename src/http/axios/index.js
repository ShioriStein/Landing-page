import axios from "@/axios";
import CONSTANTS from "@/constants";
import router from "@/router";
import store from "@/store";
const { ROUTERS, PAGE_NAMES } = CONSTANTS;

const { TOKEN, ENDPOINTS } = CONSTANTS;

axios.interceptors.request.use(config => {
  const { companyId } = router.currentRoute.params;
  if (companyId) {
    config.headers["X-Company-Id"] = companyId;
  }
  const token = localStorage.getItem(TOKEN.ACCESS_TOKEN);
  if (token) {
    config.headers["Authorization"] = "Bearer " + token;
  }
  return config;
});

axios.interceptors.response.use(
  response => response,
  error => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem(TOKEN.REFRESH_TOKEN);

      return axios
        .post(ENDPOINTS.AUTHS.REFRESH_TOKEN, {
          refreshToken
        })
        .then(res => {
          const { accessToken, refreshToken } = res.data.data;
          localStorage.setItem(TOKEN.ACCESS_TOKEN, accessToken);
          localStorage.setItem(TOKEN.REFRESH_TOKEN, refreshToken);
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${localStorage.getItem(TOKEN.ACCESS_TOKEN)}`;
          return axios(originalRequest);
        })
        .catch(err => {
          if (error.response.status === 401 || error.response.status === 400) {
            store.dispatch("auths/logout").then(() => {
              const { fullPath: returnUrl } = router.currentRoute;
              router.push({
                name: PAGE_NAMES[ROUTERS.SIGN_IN],
                query: {
                  returnUrl
                }
              });
            });
          }
          return Promise.reject(err);
        });
    }

    return Promise.reject(error);
  }
);

export default axios;
