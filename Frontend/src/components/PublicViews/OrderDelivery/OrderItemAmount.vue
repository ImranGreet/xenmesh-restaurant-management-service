<template>
  <div
    class="w-full flex flex-col justify-center items-center border border-gray-300/20 rounded-md">
    <div
      class="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700 text-white w-full relative rounded-t-lg">
      <div class="w-3/4 flex justify-evenly py-2 px-5">
        <div class="w-1/2">
          <h1 class="text-base tracking-wide">Tomato Basil</h1>
          <button
            @click="getItemDetails(1)"
            class="bg-stone-600 text-stone-50 inline w-6 h-6 rounded-full">
            !
          </button>
        </div>
        <div class="w-1/2 flex flex-col justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1980&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            class="w-14 h-14 rounded-lg" />
        </div>
      </div>
      <div
        class="bg-gray-800 text-white absolute top-1 lg:-top-2 right-1 lg:-right-2 rounded-full w-6 h-6 flex flex-col justify-center items-center shadow-xl shadow-red-300">
        <p class="p-3 text-base rounded-full">2</p>
      </div>
    </div>

    <div
      class="bg-stone-50 text-stone-900 w-full relative border border-gray-700/20 rounded-b-lg flex justify-start space-x-2 py-1">
      <ul
        class="w-4/5 -space-y-1 py-2 px-5"
        type="i">
        <li>
          <span class="font-semibold"> Category </span><span>:</span> Pizza
        </li>
        <li>
          <span class="font-semibold">Per Price </span> <span>:</span> $150
        </li>
        <li class="tracking-tight">
          <span class="font-semibold">Total price</span>
          <span class="text-red-500 font-semibold text-xl">:</span> $150
          <span><XMarkIcon class="w-4 h-4 inline" /></span> <span>2</span>
          <span>=</span> 300
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { XMarkIcon, CheckCircleIcon } from '@heroicons/vue/24/solid';
import { getItemDetails } from '../../../scripts/public/modal/modal';

export default {
  name: 'OrderItemAmount',
  components: { XMarkIcon, CheckCircleIcon },
  setup() {
    return {
      getItemDetails,
    };
  },
};
</script>

<style></style>
