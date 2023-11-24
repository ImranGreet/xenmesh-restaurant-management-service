<template>
  <div class="w-full bg-inherit">
    <div class="w-full">
      <ul class="flex justify-end items-center space-x-4">
        <li>
          <form class="inline-block relative">
            <input
              type="text"
              name=""
              id=""
              class="px-2 py-1 text-start pl-8 rounded-full border border-gray-300 focus:outline-none" />
            <MagnifyingGlassIcon class="w-4 h-4 absolute top-2 left-3"/>
            <button class="absolute top-2 right-3 hidden">
              <XMarkIcon class="w-4 h-4 border border-gray-700 text-red-500 rounded-full "/>
            </button>
          </form>
        </li>
        <li>
          <button
            class="border border-gray-300 rounded-2xl px-3 py-0.5 bg-gray-800 text-white">
            English
          </button>
        </li>
        <li>
          <button
          @click="showOrderItems()"
            class="border border-gray-300 rounded-2xl px-3 py-0.5 bg-gray-800 text-white">
            Order
          </button>
        </li>
        <li>
          <router-link
            to="#"
            class="border border-gray-300 rounded-2xl px-3 py-0.5 bg-pink-600 text-white"
            >Login</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { MagnifyingGlassIcon,XMarkIcon } from '@heroicons/vue/24/solid';

import { showOrderItems } from '../../../scripts/public/Utility';


export default {
  name: "Firsttopbar",
  components:{
    MagnifyingGlassIcon,
    XMarkIcon
  },
  setup() {
    return {
      showOrderItems
    }
  }
};
</script>
