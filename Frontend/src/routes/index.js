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
        component: () => import("../pages/Dashboard/Dashboard.vue"),
      },
      {
        path: "settingassets",
        name: "setting",
        component: () => import("../pages/Form/Storesettingicons.vue"),
      },
      {
        path: "products",
        name: "products house",
        component: () => import("../pages/Products/ProductHouse.vue"),
      },
      {
        path: "insert-product",
        name: "insert product",
        component: () => import("../pages/Form/InsertProduct.vue"),
      },
      {
        path: "insert_categories",
        name: "insert category",
        component: () => import("../pages/Form/AddCategories.vue"),
      },
      {
        path: "draw_role",
        name: "insert role",
        component: () => import("../pages/Form/InsertRole.vue"),
      },

      {
        path: "insert_stuff",
        name: "insert stuff",
        component: () => import("../pages/Form/InsertStuff.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
