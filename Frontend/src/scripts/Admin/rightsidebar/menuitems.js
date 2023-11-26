import { ref } from "vue";

const useLeftSideBarRouterLink = ref([


  {
    id: 3,
    name: "Expenses",
    largeIcon: "Battery50Icon",

    paths: [
      {
        id: 1,
        params: "Expenses",
        uri: "#",
        name:"expense"
      },
      {
        id: 2,
        params: "expense types",
        uri: "#",
        name:"expense types"
      },
      
    ],
  },

  {
    id: 4,
    name: "Accounts ",
    largeIcon: "CalculatorIcon",

    paths: [
      {
        id: 1,
        params: "transaction",
        uri: "#",
        name:"banktransaction"
      },
      
    ],
  },

  {
    id: 5,
    name: "Settings",
    largeIcon: "CalculatorIcon",

    paths: [
      {
        id: 1,
        params: "settingasset",
        uri: "settingassets",
        name:"setting"
      },
     
    ],
  },
  {
    id: 6,
    name: "Products",
    largeIcon: "CalculatorIcon",

    paths: [
      {
        id: 1,
        params: " Products",
        uri: "products",
        name:"products house"
      },
      {
        id: 2,
        params: "Add Products",
        uri: "insert_product",
        name:"insert_product"
      },
      

    ],
  },

  {
    id: 7,
    name: "Order",
    largeIcon: "CalculatorIcon",

    paths: [
      {
        id: 1,
        params: "Order",
        uri: "order-list",
        name:"order_house"
      },
      {
        id: 2,
        params: "Order In Kitchen",
        uri: "inkitchen",
        name:"orderin_kitchen"
      },

      {
        id: 3,
        params: "Order from Web",
        uri: "website",
        name:"weborder"
      },
      {
        id: 4,
        params: "Completed Order",
        uri: "completed_order",
        name:"completed"
      },
    ],
  },

  {
    id: 8,
    name: "Stuff And Role",
    largeIcon: "CalculatorIcon",

    paths: [
      {
        id: 1,
        params: "stuff",
        uri: "stuff",
        name:"stuff"
      },

    ],
  },
  {
    id: 9,
    name: "Insert & Delete",
    largeIcon: "CalculatorIcon",

    paths: [
      {
        id: 1,
        params: "Add Category",
        uri: "add_category",
        name:"add_cat"
      },
      {
        id: 2,
        params: "Add Stuff",
        uri: "add_stuff",
        name:"add_stuff"
      },
      {
        id: 3,
        params: "Add Role",
        uri: "add_role",
        name:"add_role"
      },
      

    ],
  },

]);

export default useLeftSideBarRouterLink;
