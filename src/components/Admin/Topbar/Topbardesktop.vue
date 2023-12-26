<template>
  <div class="flex justify-between items-center shadow-md px-0 lg:px-5">
    <Topbarfirst />
    <Secondtopbar />
  </div>
</template>

<script>
import Secondtopbar from './Secondtopbar.vue';
import Topbarfirst from './Topbarfirst.vue';

export default {
  name: 'Topbardesktop',
  components: {
    Topbarfirst,
    Secondtopbar,
  },
};
</script>

<style></style>
