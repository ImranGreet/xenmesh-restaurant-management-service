<template>
  <div class="flex justify-end items-center gap-x-5">
    <button><BellIcon class="w-6 h-6 text-gray-800" /></button>
    <button><Cog6ToothIcon class="w-6 h-6 text-gray-800" /></button>

    <button><MoonIcon class="w-6 h-6 text-gray-800" /></button>

    <button><ArrowsPointingInIcon class="w-6 h-6 text-gray-800" /></button>
    <div class="flex justify-center items-center gap-x-3 cursor-pointer">
      <img
        :src="profileImage"
        alt=""
        class="w-12 h-12 rounded-full object-center"
      />
      <div class="space-y-2">
        <a href="#" role="button" class="text-gray-800 font-semibold"
          >John Doe</a
        >
        <p class="text-gray-800 text-sm">Admin</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Cog6ToothIcon } from "@heroicons/vue/24/solid";

import {
  BellIcon,
  MoonIcon,
  ArrowsPointingInIcon,
  ArrowsPointingOutIcon,
} from "@heroicons/vue/24/outline";
import { ref } from "vue";
export default {
  components: {
    BellIcon,
    MoonIcon,
    Cog6ToothIcon,
    ArrowsPointingInIcon,
    ArrowsPointingOutIcon,
  },
  setup() {
    const profileImage = ref(
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
    return {
      profileImage,
    };
  },
};
</script>
