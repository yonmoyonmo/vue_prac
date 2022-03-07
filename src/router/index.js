import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/photo",
    name: "photo",
    component: () => import("@/components/Photo.vue"),
  },
  {
    path: "/charts",
    name: "charts",
    component: () => import("@/components/Charts.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
