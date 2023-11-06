import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../layouts/Admin.vue"),
    children: [
      {
        path: "/",
        component: () => import("../pages/Dashboard.vue"),
      },
      {
        path: "/products",
        component: () => import("../pages/Products.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
