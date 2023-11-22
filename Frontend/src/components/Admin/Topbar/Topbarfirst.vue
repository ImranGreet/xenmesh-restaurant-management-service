<template>
  <div
    class="w-full flex justify-start items-center space-x-5 sm:space-x-0.5 md:space-x-3 lg:space-x-5">
    <Logo :class="{ hidden: !mobileView, 'block ': mobileView }" />
    <button @click="sidebarController()" class="p-1 sm:p-2">
      <i class="text-xl lg:text-2xl fonr-semibold">
        <font-awesome-icon icon="fa-solid fa-bars " />
      </i>
    </button>
    <form>
      <div class="-space-x-0.5 relative flex">
        <label for="search" class="sr-only">Search</label>
        <input
          type="text"
          placeholder="Search"
          class="px-3 sm:px-8 md:px-10 lg:px-12 py-1.5 lg:py-2.5 border border-blue-100 placeholder:text-bold placeholder:text-gray-950 placeholder:pl-6 focus:outline-none rounded-sm hidden sm:inline" />
        <button
          class="p-1 sm:p-1.5 md:p-2 bg-blue-600 text-white rounded-sm hidden sm:inline">
          Search
        </button>
        <i class="absolute top-2.5 left-3 hidden sm:inline"
          ><font-awesome-icon icon="fa-solid fa-magnifying-glass"
        /></i>
      </div>
    </form>
  </div>
</template>

<script>

import Logo from "../Topbar/Logo.vue"
import {sidebarController,mobileView} from "../../../scripts/Admin/leftsidebar/layoutcontroller"

export default {
  name: "Firsttopbar",
  components: { Logo },
  setup() {
    return {
      sidebarController,
      mobileView,
    };
  },
};
</script>
