import { useCategoryRoutes } from '../scripts/public/Navs/categoryNav';
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

  
      /*start expense*/
      {
        path: 'expenses',
        name: 'expense',
        component: () => import('../pages/Admin/Expense/Expenselist.vue'),
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
 
      /*order end*/
      /*stuff start*/
      {
        path: 'stuff',
        name: 'stuff',
        component: () => import('../pages/Admin/Stuff/Stufflist.vue'),
      },
      /*stuff end*/
      /*insertions and deletations*/
  
      
      /*stocks*/
     
      {
        path: '/stocks',
        name: 'stock_check',
        component: () => import('../pages/Admin/Stock/StocksCheck.vue'),
      },
      {
        path: 'roles',
        name: 'roles_stock',
        component: () =>
          import('../components/Admin/Tables/RolesAndPermission/Roles.vue'),
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
        beforeEnter: (to, from, next) => {
          const exits = useCategoryRoutes.value.find(cat => {
            return cat.category === to.params.category;
          });

          if (exits) {
            next();
          } else {
            next({ name: 'notInCategory' });
          }
        },
      },
      {
        path: '/offer',
        name: 'offer',
        component: () => import('../pages/Public/OfferInCat.vue'),
        meta: { title: 'Offer' },
      },
      {
        path: '/offeritems/:cat',
        name: 'catoffer',
        component: () => import('../pages/Public/RunningOffer.vue'),
        beforeEnter: (to, from, next) => {
          const existsOffer = useCategoryRoutes.value.find(offer => {
            return offer.discount > 0;
          });
          if (existsOffer) {
            next();
          } else {
            next({ name: 'notInOffer' });
          }
        },
      },
      {
        path: '/user_registration',
        name: 'user_registration',
        component: () => import('../pages/Public/UserRegistrationPage.vue'),
        beforeEnter: (to, from, next) => {
          next({ name: 'public-home' });
        },
      },
      {
        path: '/user_login',
        name: 'user_login',
        component: () => import('../pages/Public/UserLoginPage.vue'),
        beforeEnter: (to, from, next) => {
          const customerTokenCheck = JSON.parse(
            localStorage.getItem('customerToken'),
          );
          if (customerTokenCheck) {
            next({ name: 'public-home' });
          } else {
            next();
          }
        },
      },
      {
        path: '/processed_order',
        name: 'processed_order',
        component: () => import('../pages/Public/ProcessedOrder.vue'),
      },
    ],
  },

  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: () => import('../pages/404.vue'),
  },
  
  {
    path: '/printOrderInvoice',
    name: 'PrintInvoice',
    component: () => import('../pages/Admin/Order/PrintInvoice.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  base: '/',
  scrollBehavior() {
    window.scrollTo(0, 0);
  },
});

export default router;
