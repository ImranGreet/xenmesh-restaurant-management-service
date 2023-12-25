<template>
  <div class="w-full border h-48 lg:h-96 border-gray-100 rounded-md relative">
    <!-- Slides Container with Transition -->
    <transition
      name="slide-fade"
      mode="out-in">
      <div
        v-if="showSlide"
        class="w-full h-full flex flex-col justify-center items-center rounded-md">
        <img
          :src="slidesPhoto"
          alt=""
          class="w-full h-full object-fill object-center rounded-md square" />
      </div>
    </transition>

    <!-- Navigation Buttons -->
    <div
      class="w-full h-full absolute bg-gray-600/10 z-20 inset-x-0 inset-y-0 rounded-md">
      <div class="w-full h-full flex justify-between items-center">
        <button
          @click="previusSlideImage()"
          class="bg-slate-600/80 lg:hover:bg-slate-900/70 text-white w-10 lg:w-12 h-10 lg:h-12 shadow rounded-full flex flex-col justify-center items-center">
          <ChevronLeftIcon class="w-5 lg:w-6 lg:h-6 h-5 text-white" />
        </button>
        <button
          @click="nextSlideImage()"
          class="bg-slate-600/80 lg:hover:bg-slate-900/70 text-white w-10 lg:w-12 h-10 lg:h-12 shadow rounded-full flex flex-col justify-center items-center">
          <ChevronRightIcon class="w-5 lg:w-6 lg:h-6 h-5 text-white" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect, nextTick } from 'vue';

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
    const slidesPhoto = computed(
      () => slides.value[currentSlideElement.value].image,
    );
    const showSlide = ref(true);

    watch(
      () => currentSlideElement.value,
      () => {
        showSlide.value = false;

        nextTick(() => {
          showSlide.value = true;
        });
      },
    );

    return {
      slidesPhoto,
      slides,
      currentSlideElement,
      nextSlideImage,
      previusSlideImage,
      showSlide,
    };
  },
};
</script>

<style>
/*
  Enter and leave animations can use different
  durations and timing functions.
*/
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
