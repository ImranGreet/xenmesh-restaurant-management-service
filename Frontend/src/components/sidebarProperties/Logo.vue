<template>
  <div
    class="bg-gray-200 flex flex-col justify-center items-center py-4 fixed left-0 top-0 z-50"
    :class="{ 'w-1/6': !sidebarController, 'w-1/12': sidebarController }"
  >
    <router-link
      to="#"
      class="w-full flex justify-center items-center gap-x-10"
    >
      <div class="flex justify-center items-center -space-x-4">
        <div
          class="mix-blend-multiply bg-blue-400 w-8 h-8 rounded-full animate-pulse"
        ></div>
        <div
          class="mix-blend-multiply bg-pink-400 w-8 h-8 rounded-full animate-pulse"
        ></div>
      </div>
      <div class="text-center">
        <h1
          class="text-xl tracking-wide font-semibold"
          :class="{ block: !sidebarController, hidden: sidebarController }"
        >
          Xenmesh
        </h1>
      </div>
    </router-link>
  </div>
</template>

<script>
import { sidebarController } from "../../composables/layout";
import { XMarkIcon } from "@heroicons/vue/24/outline";
export default {
  name: "Logo",
  components: {
    XMarkIcon,
  },
  setup() {
    return {
      sidebarController,
    };
  },
};
</script>

<style></style>
