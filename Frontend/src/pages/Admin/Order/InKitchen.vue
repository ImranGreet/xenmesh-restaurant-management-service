<template>
    <section>
      <OrderInKitchen />
    </section>
  </template>
  
  <script>
import OrderInKitchen from '../../../components/Admin/Tables/Order/OrderInKitchen.vue';

  
  export default {
    name: "In Kitchen",
    components: {
        OrderInKitchen,
    },
  };
  </script>
  