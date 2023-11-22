<template>
    <section>
      <CompletedOrder />
    </section>
  </template>
  
  <script>
import CompletedOrder from '../../../components/Admin/Tables/Order/CompletedOrder.vue';
  
  export default {
    name: "Completed",
    components: {
        CompletedOrder,
    },
  };
  </script>
  