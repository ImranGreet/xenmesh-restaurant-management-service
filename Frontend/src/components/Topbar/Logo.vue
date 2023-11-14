<template>
  <div
    class="bg-gray-200 w-[15%] flex flex-col justify-center items-center z-50 py-[15.75px] shadow-sm">
    <router-link to="#" class="w-full flex justify-center items-center">
      <div class="flex justify-center items-center -space-x-2">
        <div
          class="mix-blend-multiply bg-blue-400 w-6 h-6 rounded-full animate-pulse"></div>
        <div
          class="mix-blend-multiply bg-pink-400 w-6 h-6 rounded-full animate-pulse"></div>
      </div>
      <div class="text-center">
        <h1 class="text-xl tracking-wide font-semibold">Xenmesh</h1>
      </div>
    </router-link>
    <button class="inline-block md:hidden">
      <!-- <XMarkIcon class="w-5 h-5 absolute top-2 right-2" /> -->
    </button>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  name: "Logo",
  components: {},
  setup() {
    return {};
  },
};
</script>

<style></style>
