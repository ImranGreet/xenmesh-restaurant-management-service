<template>
  <div class="w-full bg-inherit">
    <div class="w-full space-y-0 lg:space-y-4 px-4">
      <div class="w-full flex justify-between items-center">
        <router-link to="/">
          <h1 class="text-base tracking-wide leading-normal">Xenmesh</h1>
        </router-link>
      </div>

      <form class="inline-block relative w-full">
        <input
          type="text"
          name=""
          id=""
          class="px-2 py-1 text-start pl-8 rounded-full border border-gray-300 focus:outline-none w-full" />
        <MagnifyingGlassIcon class="w-4 h-4 absolute top-2 left-3" />
        <button class="absolute top-2 right-3 hidden">
          <XMarkIcon
            class="w-4 h-4 border border-gray-700 text-red-500 rounded-full" />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/vue/24/outline';

export default {
  name: 'MobileNav',
  components: {
    MagnifyingGlassIcon,
    XMarkIcon,
  },
};
</script>

<style></style>
