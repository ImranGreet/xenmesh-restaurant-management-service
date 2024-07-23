<template>
  <div class="w-full h-full flex flex-col justify-center items-center">
    <AddStuff />
  </div>
</template>

<script>
import AddStuff from '../../../components/Admin/Form/AddStuff.vue';

export default {
  name: 'InsertStuff',
  components: {
    AddStuff,
  },
};
</script>
