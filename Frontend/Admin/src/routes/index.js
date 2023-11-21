import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../layouts/Admin.vue"),

    children: [
      {
        path: "/",
        name: "home",
        component: () => import("../pages/Admin/Dashboard/Dashboard.vue"),
      },
      {
        path: "settingassets",
        name: "setting",
        component: () => import("../pages/Admin/Form/Storesettingicons.vue"),
      },
      {
        path: "products",
        name: "products house",
        component: () => import("../pages/Admin/Products/ProductHouse.vue"),
      },
      {
        path: "insert-product",
        name: "insert product",
        component: () => import("../pages/Admin/Form/InsertProduct.vue"),
      },
      {
        path: "insert_categories",
        name: "insert category",
        component: () => import("../pages/Admin/Form/AddCategories.vue"),
      },
      {
        path: "draw_role",
        name: "insert role",
        component: () => import("../pages/Admin/Form/InsertRole.vue"),
      },

      {
        path: "insert_stuff",
        name: "insert stuff",
        component: () => import("../pages/Admin/Form/InsertStuff.vue"),
      },
    ],
  },
  {
    path: "/public",
    name: "public",
    component: () => import("../layouts/Public.vue"),
    children: [
      {
        path: "/public",
        name: "public home",
        component: () => import("../pages/Public/Index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
