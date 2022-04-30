import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/sort",
      name: "sort",
      component: () => import("../views/PriceSorterView.vue"),
    },
  ],
});

export default router;
