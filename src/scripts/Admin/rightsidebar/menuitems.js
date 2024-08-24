import { ref } from 'vue';

const useLeftSideBarRouterLink = ref([
  {
    id: 3,
    name: 'Expenses',
    largeIcon: 'Battery50Icon',

    paths: [
      {
        id: 1,
        params: 'Expenses',
        uri: '#',
        name: 'expense',
      },
    ],
  },

  {
    id: 4,
    name: 'Accounts ',
    largeIcon: 'CalculatorIcon',

    paths: [
      {
        id: 1,
        params: 'transaction',
        uri: '#',
        name: 'banktransaction',
      },
    ],
  },

  {
    id: 5,
    name: 'Settings',
    largeIcon: 'WrenchScrewdriverIcon',

    paths: [
      {
        id: 1,
        params: 'settingasset',
        uri: 'settingassets',
        name: 'setting',
      },
    ],
  },
  {
    id: 6,
    name: 'Products',
    largeIcon: 'CakeIcon',

    paths: [
      {
        id: 1,
        params: ' Products',
        uri: 'products',
        name: 'products house',
      },
    ],
  },

  {
    id: 7,
    name: 'Order',
    largeIcon: 'TicketIcon',

    paths: [
      {
        id: 1,
        params: 'Order',
        uri: 'order-list',
        name: 'order_house',
      },
      {
        id: 2,
        params: 'Order In Kitchen',
        uri: 'inkitchen',
        name: 'orderin_kitchen',
      },

      {
        id: 3,
        params: 'Order from Web',
        uri: 'website',
        name: 'weborder',
      },
      {
        id: 4,
        params: 'Completed Order',
        uri: 'completed_order',
        name: 'completed',
      },
    ],
  },

  {
    id: 8,
    name: 'Stuff And Role',
    largeIcon: 'UserGroupIcon',

    paths: [
      {
        id: 1,
        params: 'stuff',
        uri: 'stuff',
        name: 'stuff',
      },
    ],
  },
  {
    id: 9,
    name: 'Insert & Delete',
    largeIcon: 'XCircleIcon',

    paths: [
      {
        id: 1,
        params: 'Add Category',
        uri: 'add_category',
        name: 'add_cat',
      },
      {
        id: 2,
        params: 'Add Stuff',
        uri: 'add_stuff',
        name: 'add_stuff',
      },
      {
        id: 3,
        params: 'Add Role',
        uri: 'add_role',
        name: 'add_role',
      },
      {
        id: 4,
        params: 'Add Permission',
        uri: 'add_permission',
        name: 'add_permission',
      },
    ],
  },
  {
    id: 10,
    name: 'Stock',
    largeIcon: 'Square3Stack3DIcon',

    paths: [
      {
        id: 1,
        params: 'Add stock Category',
        uri: 'add_stock_category',
        name: 'add_stock_cat',
      },
      {
        id: 2,
        params: 'Add Stock',
        uri: 'add_stock_store',
        name: 'add_stock_store',
      },
      {
        id: 3,
        params: 'Add Unit',
        uri: 'add_unit',
        name: 'add_items_unit',
      },
      {
        id: 4,
        params: 'Stocks',
        uri: 'stocks',
        name: 'stock_check',
      },
    ],
  },
]);

export default useLeftSideBarRouterLink;
