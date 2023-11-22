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
      /*start expense*/
      {
        path:"expenses",
        name:"expense",
        component:()=>import("../pages/Admin/Expense/Expenselist.vue"),
      },
      {
        path:"expenses-types",
        name:"expense types",
        component:()=>import("../pages/Admin/Expense/ExpenseTypeList.vue"),
      },
      /*end expense*/
     /*order start*/
     {
      path:"order-list",
      name:"order house",
      component:()=>import("../pages/Admin/Order/OrderHouse.vue")
     },
     {
      path:"inkitchen",
      name:"orderin_kitchen",
      component:()=>import("../pages/Admin/Order/InKitchen.vue")
     },
     {
      path:"website",
      name:"weborder",
      component:()=>import("../pages/Admin/Order/PublicOrder.vue")
     },
     {
      path:"completed-order",
      name:"completed",
      component:()=>import("../pages/Admin/Order/Completed.vue")
     },
     /*order end*/ 
    /*stuff start*/
    {
      path:"stuff",
      name:"stuff",
      component:()=>import("../pages/Admin/Stuff/Stufflist.vue")
     },
    /*stuff end*/  
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
