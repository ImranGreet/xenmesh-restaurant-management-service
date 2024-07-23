<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <AddRole />
  </div>
</template>

<script>
import AddRole from '../../../components/Admin/Form/AddRole.vue';

export default {
  name: 'InsertRole',
  components: {
    AddRole,
  },
};
</script>
