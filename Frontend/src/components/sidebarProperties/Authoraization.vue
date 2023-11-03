<template>
  <div class="w-full">
    <button
      class="w-full flex justify-evenly items-center text-gray-950 py-3 text-xl"
    >
      <span class="inline-block"> <IdentificationIcon class="w-4 h-4" /></span>
      <span>Authoraization</span>
      <span class="inline-block"> <ChevronRightIcon class="w-4 h-4" /></span>
    </button>

    <ul class="flex flex-col justify-center items-start gap-y-0.5 w-full px-8">
      <li class="lg:hover:bg-gray-500/20 w-full">
        <router-link to="#" class="w-full block py-2 px-2">
          My Account</router-link
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
import {
  IdentificationIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/vue/24/outline";
export default {
  name: "Dashboard",
  components: {
    IdentificationIcon,
    ChevronRightIcon,
    ChevronDownIcon,
  },
  setup() {
    return {};
  },
};
</script>
