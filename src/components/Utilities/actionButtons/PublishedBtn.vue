<template>
  <button class="bg-red-500 text-white">
    <CheckBadgeIcon class="w-5 h-5 text-gray-400" />
  </button>
</template>

<script>
import { CheckBadgeIcon } from '@heroicons/vue/24/outline';

export default {
  name: 'EditBtn',
  components: { CheckBadgeIcon },
  setup() {},
};
</script>
