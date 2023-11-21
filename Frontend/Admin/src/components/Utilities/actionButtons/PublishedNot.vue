<template>
  <button class="bg-red-500 text-white">
    <ShieldCheckIcon class="w-5 h-5 text-gray-400" />
  </button>
</template>

<script>
import { ShieldCheckIcon } from "@heroicons/vue/24/outline";

export default {
  name: "PublishedNotBtn",
  components: { ShieldCheckIcon },
  setup() {},
};
</script>
