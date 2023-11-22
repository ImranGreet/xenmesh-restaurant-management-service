import { ref } from "vue";

const useLeftSideBarRouterLink = ref([
  {
    id: 1,
    name: "Dashboard",
    largeIcon: "HomeIcon",

    paths: [
      {
        id: 1,
        params: "my account",
        uri: "#",
      },
      {
        id: 2,
        params: "settings",
        uri: "#",
      },
      {
        id: 3,
        params: "support",
        uri: "#",
      },
      {
        id: 4,
        params: "balance",

        uri: "#",
      },
      {
        id: 5,
        params: "bill sheet",
        uri: "#",
      },
    ],
  },

  {
    id: 2,
    name: "Income",
    largeIcon: "BanknotesIcon",

    paths: [
      {
        id: 1,
        params: "Sales",
        uri: "#",
      },
      {
        id: 2,
        params: "Other Revunue",
        uri: "#",
      },
    ],
  },

  {
    id: 3,
    name: "Expenses",
    largeIcon: "Battery50Icon",

    paths: [
      {
        id: 1,
        params: "Food Costs",
        uri: "#",
      },
      {
        id: 2,
        params: "Labor Costs",
        uri: "#",
      },
      {
        id: 3,
        params: "Rent and Lease",
        uri: "#",
      },
      {
        id: 4,
        params: "Utilities",
        uri: "#",
      },
      {
        id: 5,
        params: "Supplies",
        uri: "#",
      },
      {
        id: 6,
        params: "Marketing and Advertising",
        uri: "#",
      },
      {
        id: 7,
        params: "Maintenance and Repairs",
        uri: "#",
      },
      {
        id: 8,
        params: "Insurance",
        uri: "#",
      },
      {
        id: 9,
        params: "Taxes",
        uri: "#",
      },
    ],
  },
  {
    id: 4,
    name: "Accounts Payable",
    largeIcon: "CalculatorIcon",

    paths: [
      {
        id: 1,
        params: "Vendor Payments",
        uri: "#",
      },
      {
        id: 2,
        params: "Invoices",
        uri: "#",
      },
      {
        id: 3,
        params: "Purchase Orders",
        uri: "#",
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
        params: "settingassets",
        uri: "settingassets",
      },
      {
        id: 2,
        params: "Controller Icon",
        uri: "#",
      },
      {
        id: 3,
        params: "Owner Profile",
        uri: "#",
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
        params: "Running Products",
        uri: "settingassets",
      },
      {
        id: 2,
        params: "Treanding Products",
        uri: "#",
      },
      {
        id: 3,
        params: "Upcomming Products",
        uri: "#",
      },
    ],
  },
]);

export default useLeftSideBarRouterLink;
