<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <AddPermission />
  </div>
</template>

<script>
import AddPermission from '../../../components/Admin/Form/AddPermission.vue';

export default {
  name: 'InsertRole',
  components: {
    AddPermission,
  },
};
</script>
