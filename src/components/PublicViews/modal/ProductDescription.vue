<template>
  <div
    class="w-11/12 lg:w-[500px] rounded-md bg-white shadow-lg disclose-modal"
    :class="{
      'h-48 mt-10 overflow-y-auto': innerHeight <= 700,
      'h-auto mt-0 overflow-y-hidden': innerHeight >= 700,
    }">
    <div class="w-full space-y-4 py-2">
      <div
        class="w-full flex justify-between items-center space-x-4 px-4 py-2 border-b border-gray-600/30 shadow-sm">
        <h1
          class="text-base xl:text-xl tracking-wider font-semibold text-gray-900">
          {{ productTitle }}
        </h1>
        <button
          @click="showOverlayoutOnOff()"
          class="border border-stone-800 rounded-full text-base lg:hover:text-gray-800 group hover:bg-red-600/70 hover:border-none hover:shadow-sm">
          <XMarkIcon class="w-4 h-4 text-gray-950 group-hover:text-white" />
        </button>
      </div>

      <!-- description -->
      <div class="text-start px-4">
        <p class="text-base tracking-wide">
          {{ productDetails }}
        </p>
      </div>
      <!-- compostion -->
      <div class="w-full px-4">
        <h1
          class="text-base xl:text-xl tracking-wider text-gray-900 font-semibold">
          Composition
        </h1>
        <ul class="flex flex-col justify-between items-start">
          <li
            v-for="(ingredient, index) in productComposition"
            :key="index">
            <CheckIcon class="w-3 h-3 inline text-lime-700 text-base" />
            {{ ingredient }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { XMarkIcon, CheckIcon } from '@heroicons/vue/24/solid';

import {
  productDetails,
  productComposition,
  productTitle,
  showOverlayoutOnOff,
} from '../../../scripts/public/modal/modal';
import {
  innerHeight,
  innerWidth,
} from '../../../scripts/Global/innerheightwidth';

export default {
  name: 'ProductDescription',
  components: { XMarkIcon, CheckIcon },
  setup() {
    return {
      productDetails,
      productComposition,
      productTitle,
      showOverlayoutOnOff,
      innerHeight,
      innerWidth,
    };
  },
};
</script>

<style></style>
