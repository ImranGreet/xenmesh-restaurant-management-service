import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../layouts/Admin.vue"),
    children: [
      {
        path: "products",
        name: "products house",
        component: () => import("../pages/Products/ProductHouse.vue"),
      },
      {
        path: "settingassets",
        name: "setting",
        component: () => import("../pages/SettingsFile/Storesettingicons.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
