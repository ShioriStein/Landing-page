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
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
