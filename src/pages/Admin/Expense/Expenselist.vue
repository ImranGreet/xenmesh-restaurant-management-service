<template>
  <section>
    <Expenses />
  </section>
</template>

<script>
import Expenses from '../../../components/Admin/Tables/Expense/Expenses.vue';

export default {
  name: 'ExpenseHouse',
  components: {
    Expenses,
  },
};
</script>
