<template>
  <div
    class="bg-gray-200 flex flex-col justify-center items-center py-[7.5px] md:py-[10px] lg:py-[12px] xl:py-[17px] shadow-md"
    :class="{
      'w-1/6': !sidebarView && !mobileView,
      'w-1/12': sidebarView && !mobileView,
      'w-0 hidden': sidebarView && mobileView,
      '[z-999]': seetingsView,
      'z-0': !seetingsView,
    }">
    <router-link to="#" class="w-full flex justify-center items-center">
      <div class="flex justify-center items-center -space-x-2">
        <div
          class="mix-blend-multiply bg-blue-400 w-4 h-4 md:w-6 md:h-6 rounded-full animate-pulse"></div>
        <div
          class="mix-blend-multiply bg-pink-400 w-4 h-4 md:w-6 md:h-6 rounded-full animate-pulse"></div>
      </div>
      <div
        class="text-center"
        :class="{
          'hidden 2xl:hidden': sidebarView,
          'hidden 2xl:block': !sidebarView,
        }">
        <h1 class="tracking-wide font-semibold lg:text-base">Xenmesh</h1>
      </div>
    </router-link>
    <button class="inline-block md:hidden">
      <!-- <XMarkIcon class="w-5 h-5 absolute top-2 right-2" /> -->
    </button>
  </div>
</template>

<script>
import {
  mobileView,
  sidebarView,
} from "../../scripts/leftsidebar/layoutcontroller";
import { seetingsView } from "../../scripts/topbar/topbarcontroller";

export default {
  name: "Logo",
  components: {},
  setup() {
    return {
      sidebarView,
      seetingsView,
      mobileView,
    };
  },
};
</script>

<style></style>
