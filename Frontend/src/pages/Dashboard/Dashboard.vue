<template>
  <MonthlyIncomeVue />
</template>

<script>
import MonthlyIncomeVue from "../../components/Graph/MonthlyIncome.vue";

export default {
  name: "Dashboard",
  components: { MonthlyIncomeVue },
  setup() {
    return {};
  },
};
</script>
