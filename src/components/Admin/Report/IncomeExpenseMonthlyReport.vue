<template>
  <div>
    <div class="text-start px-3 py-2">
      <h1 class="text-xl tracking-wide font-semibold">
        Last Month Income Report
      </h1>
    </div>

    <div
      class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2 py-7">
      <Card
        v-for="record in lastMonthIncomeReport"
        :key="record.id"
        :lastMonthRecord="record" />
    </div>

    <div class="text-start px-3">
      <h1 class="text-xl tracking-wide font-semibold">
        Last Month Expense Report
      </h1>
    </div>

    <div
      class="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-2 py-7">
      <Card
        v-for="expenseRecord in lastMonthIncomeReport"
        :key="expenseRecord.id"
        :lastMonthRecord="expenseRecord" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Card from '../ReusedComps/Card.vue';
import expenseperiod from '../../../DB/expenseperoid';

export default {
  name: 'LastMonthReport',
  components: { Card },
  setup() {
    const lastMonthIncomeReport = ref([
      {
        id: 1,
        title: 'Daily',
        amount: 3600,
        growing: 5.27,
      },
      {
        id: 2,
        title: 'Weekly',
        amount: 5400,
        growing: 3.27,
      },
      {
        id: 3,
        title: 'Monthly',
        amount: 4800,
        growing: 6.27,
      },
    ]);

    const lastMonthExpenseReport = [
      {
        id: 4,
        title: 'Daily',
        amount: 5800,
        growing: 3.27,
      },
      {
        id: 5,
        title: 'Weekly',
        amount: 5800,
        growing: 3.27,
      },
      {
        id: 6,
        title: 'Monthly',
        amount: 5800,
        growing: 3.27,
      },
    ];

    return {
      lastMonthIncomeReport,
      lastMonthExpenseReport,
    };
  },
};
</script>
