<template>
    <section>
      <OrderList />
    </section>
  </template>
  
  <script>
import OrderList from '../../../components/Admin/Tables/Order/OrderList.vue';
  
  export default {
    name: "Order House",
    components: {
        OrderList,
    },
  };
  </script>
  