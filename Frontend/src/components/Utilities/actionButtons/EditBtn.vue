<template>
  <button class="bg-red-500 text-white">
    <PencilSquareIcon class="w-5 h-5 text-gray-400" />
  </button>
</template>

<script>
import { PencilSquareIcon } from "@heroicons/vue/24/outline";

export default {
  name: "EditBtn",
  components: { PencilSquareIcon },
  setup() {},
};
</script>
