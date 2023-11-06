import { ref } from "vue";

const useMontlyReport = ref([
  {
    id: 1,
    category: "customer",
    reportIcon: "UserGroupIcon",
    amount: 3600,
    growthRate: 2.5,
  },
  {
    id: 2,
    category: "customer",
    reportIcon: "ShoppingCartIcon",
    amount: 3600,
    growthRate: 2.5,
  },
  {
    id: 3,
    category: "revenue",
    reportIcon: "CurrencyDollarIcon",
    amount: 6254,
    growthRate: 2.5,
  },
  {
    id: 4,
    category: "growth",
    reportIcon: "ArrowTrendingUpIcon",
    amount: 6254,
    growthRate: 2.5,
  },
]);

export default useMontlyReport;
