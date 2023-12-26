<template>
  <section>
    <ExpenseTypes />
  </section>
</template>

<script>
import ExpenseTypes from '../../../components/Admin/Tables/Expense/ExpenseTypes.vue';
export default {
  name: 'ExpenseTypeList',
  components: {
    ExpenseTypes,
  },
};
</script>
