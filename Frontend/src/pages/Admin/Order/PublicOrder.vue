<template>
    <section>
      <WebOrder/>
    </section>
  </template>
  
  <script>
import WebOrder from '../../../components/Admin/Tables/Order/WebOrder.vue';

  
  export default {
    name: "Public Order",
    components: {
        WebOrder,
    },
  };
  </script>
  