<template>
  <div
    class="flex flex-col justify-center items-center py-[9px] md:py-[10px] lg:py-[12px] xl:py-[17px]"
    :class="{
      'bg-inherit': mobileView,
      'bg-gray-200 shadow-md  w-[30%] xl:w-[15%]': !sidebarView && !mobileView,
      'bg-gray-200 shadow-md w-[10%] xl:w-[5%]': sidebarView && !mobileView,
    }">
    <router-link to="#" class="w-full flex justify-center items-center">
      <div class="flex justify-center items-center -space-x-2">
        <div
          class="mix-blend-multiply bg-blue-400 w-5 h-5 md:w-6 md:h-6 rounded-full animate-pulse"></div>
        <div
          class="mix-blend-multiply bg-pink-400 w-5 h-5 md:w-6 md:h-6 rounded-full animate-pulse"></div>
      </div>
      <div class="text-center" :class="{ hidden: mobileView || sidebarView }">
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
