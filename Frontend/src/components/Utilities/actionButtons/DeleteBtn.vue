<template>
  <button class="bg-red-500 text-white">
    <XMarkIcon class="w-5 h-5 text-gray-400" />
  </button>
</template>

<script>
import { XMarkIcon } from '@heroicons/vue/24/outline';

export default {
  name: 'DeleteBtn',
  components: { XMarkIcon },
  setup() {},
};
</script>
