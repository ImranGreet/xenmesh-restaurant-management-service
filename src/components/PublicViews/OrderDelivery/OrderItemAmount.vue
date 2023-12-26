<template>
  <div
    class="w-full flex flex-col justify-center items-center border border-gray-300/20 rounded-md">
    <div
      class="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-rose-500 to-indigo-700 text-white w-full relative rounded-t-lg">
      <div class="w-3/4 flex justify-evenly py-2 px-5">
        <div class="w-1/2">
          <h1 class="text-base tracking-wide">{{ title.slice(0, 15) }}</h1>
          <button
            @click="getItemDetails(id)"
            class="bg-stone-600 text-stone-50 inline w-6 h-6 rounded-full">
            !
          </button>
        </div>
        <div class="w-1/2 flex flex-col justify-center items-center">
          <img
            :src="image"
            alt=""
            loading="lazy"
            class="w-14 h-14 rounded-lg" />
        </div>
      </div>
      <div
        class="bg-gray-800 text-white absolute top-1 lg:-top-2 right-1 lg:-right-2 rounded-full w-6 h-6 flex flex-col justify-center items-center shadow-xl shadow-red-300">
        <p class="p-3 text-base rounded-full">{{ quantity }}</p>
      </div>
    </div>

    <div
      class="bg-stone-50 text-stone-900 w-full relative border border-gray-700/20 rounded-b-lg flex justify-start space-x-2 py-1">
      <ul
        class="w-4/5 -space-y-1 py-2 px-5"
        type="i">
        <li>
          <span class="font-semibold"> Category </span><span>:</span>
          {{ category }}
        </li>
        <li>
          <span class="font-semibold">Per Price </span> <span>:</span> $
          {{ Math.floor(price) }}
        </li>
        <li class="tracking-tight">
          <span class="font-semibold">Total price</span>
          <span class="text-red-500 font-semibold text-xl">:</span> $
          {{ Math.floor(price) }}
          <span><XMarkIcon class="w-4 h-4 inline" /></span>
          <span>{{ Math.floor(quantity) }}</span> <span>=</span>
          {{ Math.floor(price * quantity) }}
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
  props: {
    purchedItemsInfo: {
      type: Object,
      required: true,
    },
    totalItems: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { id, category, title, price, quantity, image } =
      props.purchedItemsInfo;
    return {
      getItemDetails,
      id,
      category,
      title,
      price,
      quantity,
      image,
    };
  },
};
</script>

<style></style>
