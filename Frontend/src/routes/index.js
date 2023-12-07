import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/admin',
    name: 'admin-home',
    component: () => import('../layouts/Admin.vue'),

    children: [
      {
        path: '/admin',
        name: 'admin',
        component: () => import('../pages/Admin/Dashboard/Dashboard.vue'),
      },
      {
        path: 'settingassets',
        name: 'setting',
        component: () => import('../pages/Admin/Form/Storesettingicons.vue'),
      },
      {
        path: 'products',
        name: 'products house',
        component: () => import('../pages/Admin/Products/ProductHouse.vue'),
      },
      {
        path: 'insert_product',
        name: 'insert_product',
        component: () => import('../pages/Admin/Form/InsertProduct.vue'),
      },
      {
        path: 'insert_categories',
        name: 'insert category',
        component: () => import('../pages/Admin/Form/AddCategories.vue'),
      },
      {
        path: 'draw_role',
        name: 'insert role',
        component: () => import('../pages/Admin/Form/InsertRole.vue'),
      },

      {
        path: 'insert_stuff',
        name: 'insert stuff',
        component: () => import('../pages/Admin/Form/InsertStuff.vue'),
      },
      /*start expense*/
      {
        path: 'expenses',
        name: 'expense',
        component: () => import('../pages/Admin/Expense/Expenselist.vue'),
      },
      {
        path: 'expenses-types',
        name: 'expense types',
        component: () => import('../pages/Admin/Expense/ExpenseTypeList.vue'),
      },
      {
        path: 'transaction',
        name: 'banktransaction',
        component: () => import('../pages/Admin/Accounce/Transaction.vue'),
      },
      /*end expense*/
      /*order start*/
      {
        path: 'create_order',
        name: 'order_creation',
        component: () => import('../pages/Admin/Order/OrderCreation.vue'),
      },
      {
        path: 'order-list',
        name: 'order_house',
        component: () => import('../pages/Admin/Order/OrderHouse.vue'),
      },
      {
        path: 'inkitchen',
        name: 'orderin_kitchen',
        component: () => import('../pages/Admin/Order/InKitchen.vue'),
      },
      {
        path: 'website',
        name: 'weborder',
        component: () => import('../pages/Admin/Order/PublicOrder.vue'),
      },
      {
        path: 'completed_order',
        name: 'completed',
        component: () => import('../pages/Admin/Order/Completed.vue'),
      },
      /*order end*/
      /*stuff start*/
      {
        path: 'stuff',
        name: 'stuff',
        component: () => import('../pages/Admin/Stuff/Stufflist.vue'),
      },
      /*stuff end*/
      /*insertions and deletations*/
      {
        path: '/add_category',
        name: 'add_cat',
        component: () => import('../pages/Admin/Form/AddCategories.vue'),
      },
      {
        path: '/add_role',
        name: 'add_role',
        component: () => import('../pages/Admin/Form/InsertRole.vue'),
      },

      {
        path: '/add_stuff',
        name: 'add_stuff',
        component: () => import('../pages/Admin/Form/InsertStuff.vue'),
      },
      {
        path: '/add_role',
        name: 'add_role',
        component: () => import('../pages/Admin/Form/InsertRole.vue'),
      },
      /*stocks*/
      {
        path: '/add_stock_category',
        name: 'add_stock_cat',
        component: () => import('../pages/Admin/Stock/AddStockCategory.vue'),
      },
      {
        path: '/add_stock',
        name: 'add_stock_store',
        component: () => import('../pages/Admin/Stock/AddStockToStore.vue'),
      },
      {
        path: '/add_unit',
        name: 'add_items_unit',
        component: () => import('../pages/Admin/Stock/AddItemUnit.vue'),
      },
      {
        path: '/stocks',
        name: 'stock_check',
        component: () => import('../pages/Admin/Stock/StocksCheck.vue'),
      },
    ],
  },

  {
    path: '/',
    component: () => import('../layouts/Public.vue'),
    children: [
      {
        path: '/',
        name: 'public-home',
        component: () => import('../pages/Public/Index.vue'),
      },
      {
        path: '/menu/:category',
        name: 'category',
        component: () => import('../pages/Public/Menu.vue'),
      },
      {
        path: '/offer',
        name: 'offer',
        component: () => import('../pages/Public/OfferInCat.vue'),
      },
      {
        path: '/offeritems/:cat',
        name: 'catoffer',
        component: () => import('../pages/Public/RunningOffer.vue'),
      },
      {
        path: '/user_registration',
        name: 'user_registration',
        component: () => import('../pages/Public/UserRegistrationPage.vue'),
      },
      {
        path: '/user_login',
        name: 'user_login',
        component: () => import('../pages/Public/UserLoginPage.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
