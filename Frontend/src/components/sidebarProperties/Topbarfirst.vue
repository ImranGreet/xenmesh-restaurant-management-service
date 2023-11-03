<template>
  <div class="flex justify-between items-center gap-x-4">
    <button @click="toggleSidebar()" class="h-12">
      <AdjustmentsHorizontalIcon
        class="w-12 h-12 border p-1 rounded-lg focus:outline-none"
      />
    </button>
    <form action="#" class="flex justify-between items-center relative">
      <input
        type="text"
        class="border-2 border-gray-300 rounded-l-md px-12 h-12 focus:outline-none placeholder:text-base placeholder:text-gray-800"
        placeholder="Search"
      />

      <MagnifyingGlassCircleIcon
        class="flex flex-col justify-center items-center text-blue-700 absolute left-4 top-3 w-6 h-6"
      />
      <button
        class="h-12 bg-blue-600 text-white px-6 rounded-r-lg focus:outline-none"
      >
        Search
      </button>
    </form>
  </div>
</template>

<script>
import { toggleSidebar } from "../../composables/layout";
import {
  AdjustmentsHorizontalIcon,
  MagnifyingGlassCircleIcon,
} from "@heroicons/vue/24/solid";

export default {
  name: "Topbarfirst",
  components: {
    AdjustmentsHorizontalIcon,
    MagnifyingGlassCircleIcon,
  },
  setup() {
    return {
      toggleSidebar,
    };
  },
};
</script>

<style></style>
