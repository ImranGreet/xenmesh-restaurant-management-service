<template>
  <div class="w-full border h-96 border-gray-100 rounded-md relative">
    <div
      class="w-full h-full flex flex-col justify-center items-center rounded-md">
      <img
        :src="slidesPhoto"
        alt=""
        class="w-full h-full object-fill object-center rounded-md square" />
    </div>

    <div
      class="w-full h-full absolute bg-gray-600/10 z-20 inset-x-0 inset-y-0 rounded-md">
      <div class="w-full h-full flex justify-between items-center">
        <button
          @click="previusSlideImage()"
          class="bg-slate-600/80 text-white w-12 h-12 shadow rounded-full flex flex-col justify-center items-center">
          <ChevronLeftIcon class="w-6 h-6 text-white" />
        </button>
        <button
          @click="nextSlideImage()"
          class="bg-slate-600/80 text-white w-12 h-12 shadow rounded-full flex flex-col justify-center items-center">
          <ChevronRightIcon class="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';
import {
  nextSlideImage,
  currentSlideElement,
  previusSlideImage,
  slides,
} from '../../../scripts/public/Sliding';

export default {
  name: 'SlidingPhoto',
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
  },

  setup() {
    const slidesPhoto = ref(0);

    watch(
      () => (slidesPhoto.value = slides.value[currentSlideElement.value].image),
      () => (slidesPhoto.value = slides.value[currentSlideElement.value].image),
    );

    return {
      slidesPhoto,
      slides,
      currentSlideElement,
      nextSlideImage,
      previusSlideImage,
    };
  },
};
</script>
