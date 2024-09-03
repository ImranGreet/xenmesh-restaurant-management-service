<template>
  <div class="offer-card">
    <div class="w-full flex justify-around items-center px-4 h-40">
      <div class="py-2 space-y-2">
        <div class="w-full flex justify-between items-center gap-x-0.5">
          <h1 class="offer-title">
            {{ title }}
          </h1>
        </div>
        <p class="text-sm tracking-wide leading-relaxed">
          Flat
          <span class="text-red-600"
            >{{ discount }}
            <span class="text-red-600 -ml-0.5">% </span>
          </span>
          on
          {{ category }}
        </p>
        <p class="p-1 border border-gray-700/20 rounded-2xl text-center">
          Order Now
        </p>
      </div>

      <div class="w-1/3 flex flex-col justify-center items-center rounded-t-xl">
        <img
          :src="image"
          alt=""
          class="w-full h-24 rounded-t-xl object-cover" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Offer',
  props: {
    offerInformation: {
      type: Object,
      required: true,
    },
  },

  setup(props) {
    const { title, image, discount, category } = props.offerInformation;

    return {
      title,
      image,
      discount,
      category,
    };
  },
};
</script>
