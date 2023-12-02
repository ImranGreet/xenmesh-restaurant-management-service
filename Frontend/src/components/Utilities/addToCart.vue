<template>
  <button
    class="bg-white text-pink-600 lg:hover:bg-pink-700 lg:hover:text-white flex justify-center items-center gap-x-2 px-2 py-0.5 rounded-2xl shadow-md group lg:hover:delay-200 lg:hover:duration-100 lg:hover:ease-in-out">
    <span><ShoppingBagIcon class="text-base w-4 h-4 shop-svg" /></span>
    <span class="text-base">Add</span>
  </button>
</template>

<script>
import { ShoppingBagIcon } from '@heroicons/vue/24/outline';

export default {
  name: 'addToCart',
  components: {
    ShoppingBagIcon,
  },
};
</script>
