<template>
  <div class="w-full flex flex-col justify-between items-center mt-5 space-y-3">
    <div class="w-full flex flex-col lg:flex-row justify-between items-center">
      <LastMonthReport class="w-full" />
      <div class="w-full">
        <MonthlyIncome />
      </div>
    </div>
    <!-- report annual -->
    <div
      class="w-full flex flex-col lg:flex-row justify-between items-center border border-inherit/20 shadow-sm px-3 py-5 lg:gap-x-3">
      <div class="w-full xl:w-2/3 border border-inherit">
        <IncomeExpenseMonthlyReport />
      </div>
      <div class="w-full h-full xl:w-4/12">
        <div class="w-full">
          <TotalSales />
        </div>
      </div>
    </div>
    <!-- report annual -->
    <!-- top selling Product -->
    <TopSellingProducts class="w-full" />
    <div
      class="w-full h-full flex flex-col xl:flex-row justify-between items-start border border-inherit">
      <CurrentWebOrder class="w-full" />
    </div>
  </div>
</template>

<script>
import MonthlyIncome from '../../../components/Admin/Graph/MonthlyIncome.vue';
import TotalSales from '../../../components/Admin/Graph/TotalSales.vue';
import IncomeExpenseMonthlyReport from '../../../components/Admin/Report/IncomeExpenseMonthlyReport.vue';
import LastMonthReport from '../../../components/Admin/Report/LastMonthReport.vue';
import CurrentWebOrder from '../../../components/Admin/Tables/Products/CurrentWebOrder.vue';
import TopSellingProducts from '../../../components/Admin/Tables/Products/TopSellingProducts.vue';

export default {
  name: 'Dashboard',
  components: {
    MonthlyIncome,
    LastMonthReport,
    TopSellingProducts,
    TotalSales,
    CurrentWebOrder,
    IncomeExpenseMonthlyReport,
  },
  setup() {
    return {};
  },
};
</script>
