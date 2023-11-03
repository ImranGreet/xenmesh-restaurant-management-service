<template>
  <div class="w-full">
    <button
      class="w-full flex justify-evenly items-center text-gray-950 py-3 text-xl"
    >
      <span class="inline-block">
        <HomeIcon
          :class="{
            'w-4 h-4': !sidebarController,
            'w-6 h-6': sidebarController,
          }"
      /></span>
      <span
        :class="{
          'inline-block': !sidebarController,
          hidden: sidebarController,
        }"
        >Dashboard</span
      >
      <span
        :class="{
          'inline-block': !sidebarController,
          hidden: sidebarController,
        }"
      >
        <ChevronRightIcon class="w-4 h-4"
      /></span>
    </button>

    <ul
      class="flex flex-col justify-center items-start gap-y-0.5 w-full px-8"
      :class="{
        flex: !sidebarController,
        hidden: sidebarController,
      }"
    >
      <li class="lg:hover:bg-gray-500/20 w-full">
        <router-link to="#" class="w-full block py-2 px-2">
          My Account Dash</router-link
        >
      </li>
      <li class="lg:hover:bg-gray-500/20 w-full">
        <router-link to="#" class="w-full block py-2 px-2"
          >Settings</router-link
        >
      </li>
      <li class="lg:hover:bg-gray-500/20 w-full">
        <router-link to="#" class="w-full block py-2 px-2">Support</router-link>
      </li>
      <li class="lg:hover:bg-gray-500/20 w-full">
        <router-link to="#" class="w-full block py-2 px-2"
          >Lock Screen</router-link
        >
      </li>
      <li class="lg:hover:bg-rose-800 lg:hover:text-white w-full">
        <router-link to="#" class="w-full block py-2 px-2">Log Out</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { sidebarController } from "../../composables/layout";
import {
  HomeIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/vue/24/outline";

export default {
  name: "Dashboard",
  components: {
    HomeIcon,
    ChevronRightIcon,
    ChevronDownIcon,
  },
  setup() {
    return {
      sidebarController,
    };
  },
};
</script>
