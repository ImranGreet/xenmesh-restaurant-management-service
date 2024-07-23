<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <AddProduct />
  </div>
</template>

<script>
import AddProduct from '../../../components/Admin/Form/AddProduct.vue';
export default {
  name: 'InsertProduct',
  components: {
    AddProduct,
  },
};
</script>
