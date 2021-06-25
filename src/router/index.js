import VueRouter from "vue-router";
import CONSTANTS from "../constants";
//import store from "../store";

const { ROUTERS, PAGE_NAMES } = CONSTANTS;

const routes = [
  {
    path: "/",
    name: PAGE_NAMES[ROUTERS.HOME],
    component: () => import("../views/pages/home/vHome.vue")
  },
  {
    path: "/about",
    component: () => import("@/views/About"),
    name: "About"
  },
  {
    path: "",
    name: "FullPageLayout",
    component: () =>
      import(/* webpackChunkName: "FullPageLayout" */ "../layouts/FullPage"),
    beforeEnter: (to, from, next) => {
      const currentUser = JSON.parse(localStorage.getItem(CONSTANTS.USER));
      if (currentUser) {
        return next({ path: "/" });
      }

      document.title = "Login";
      next();
    },
    children: [
      {
        path: ROUTERS.SIGN_IN,
        name: PAGE_NAMES[ROUTERS.SIGN_IN],
        component: () =>
          import(/* webpackChunkName: "Login" */ "../views/pages/auths/Login"),
        meta: {
        }
      },
      {
        path: ROUTERS.FORGOT_PASSWORD,
        name: PAGE_NAMES[ROUTERS.FORGOT_PASSWORD],
        component: () =>
          import(
            /* webpackChunkName: "Login" */ "../views/pages/auths/vForgotPassword"
          ),
        meta: {
        }
      },
      {
        path: ROUTERS.RESET_PASSWORD,
        name: PAGE_NAMES[ROUTERS.RESET_PASSWORD],
        component: () =>
          import(
            /* webpackChunkName: "Login" */ "../views/pages/auths/vResetPassword"
          ),
        meta: {
        }
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
