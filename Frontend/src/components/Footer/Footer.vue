<template>
  <div class="bg-inherit w-full border-t border-gray-700/60 shadow-sm">
    <div class="px-6 py-4 w-full">
      <div class="w-full flex justify-between items-center">
        <div class="text-center inline-flex justify-center items-center gap-x-3">
          <p class="text-sm text-gray-500">2020-{{ currentYear }}</p>
          <p>Xenmesh</p>
          <p class="text-sm text-gray-500">All Rights Reserved</p>
        </div>
        <ul class="flex justify-center items-center gap-x-3">
          <li><router-link to="#">About Us</router-link></li>
          <li><router-link to="#">Support</router-link></li>
          <li><router-link to="#">Contact Us</router-link></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { currentYear } from "../../composables/date";

export default {
  setup() {
    return {
      currentYear,
    };
  },
};
</script>

<style></style>
