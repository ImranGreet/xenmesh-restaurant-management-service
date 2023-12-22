<template>
  <div class="bg-lime-600 w-64 rounded-md relative">
    <div class="w-full -space-y-1 text-white p-2 text-center py-3">
      <h1>{{ textShowing }}</h1>
    </div>
    <div class="w-full h-2 bg-pink-600 shadow-md"></div>
    <button
      @click="corkedToaster()"
      class="absolute top-4 right-2 text-white animate-pulse">
      <XMarkIcon class="w-4 h-4" />
    </button>

    <span class="absolute top-4 left-2 bg-white border rounded-full">
      <CheckIcon class="w-4 h-4" />
    </span>
  </div>
</template>

<script>
import { XMarkIcon, CheckIcon } from '@heroicons/vue/24/solid';
import { textShowing, corkedToaster, inCart } from '../../../scripts/toaster';

export default {
  name: 'Toaster',
  components: { XMarkIcon, CheckIcon },
  props: {
    itemIndex: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const index = props.itemIndex;
    return {
      textShowing,
      corkedToaster,
      index,
      inCart,
    };
  },
};
</script>
