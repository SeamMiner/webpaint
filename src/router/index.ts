import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import i18n from "@/i18n";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component: () => import("@/components/404.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const titlePath = `pages.${String(to.name)}.meta.title`;
  document.title = i18n.global.te(titlePath)
    ? i18n.global.t(titlePath)
    : "Web Paint — draw pictures, figures & more";
  next();
});

export default router;
