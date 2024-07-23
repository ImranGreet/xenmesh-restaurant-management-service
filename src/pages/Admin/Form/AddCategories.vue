<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <InsertCategories />
  </div>
</template>

<script>
import InsertCategories from '../../../components/Admin/Form/InsertCategories.vue';

export default {
  name: 'InsertProduct',
  components: {
    InsertCategories,
  },
};
</script>
