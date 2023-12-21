<template>
  <div
    class="w-full bg-inherit border-y border-gray-400/20 sapce-y-2 py-2 pr-3">
    <div class="w-full h-auto flex justify-between space-x-3">
      <div class="w-2/6 flex flex-col justify-center items-center rounded-t-xl">
        <img
          :src="image"
          alt=""
          class="w-full h-24 rounded-l-xl object-cover" />
      </div>

      <div class="w-2/3 h-auto flex items-center justify-between pr-2">
        <div class="w-full space-y-3">
          <h1
            class="text-sm tracking-wide font-semibold text-gray-800"
            v-if="title.length > 20">
            {{ title.slice(0, 15) }}...
            <span>
              <button
                @click="getItemDetails(id)"
                class="w-3 h-3 bg-gray-700 text-white p-1 rounded-full text-xs flex flex-col justify-center items-center">
                !
              </button>
            </span>
          </h1>
          <h1
            class="text-sm tracking-wide font-semibold text-gray-800"
            v-else>
            {{ title }}
          </h1>
          <small>{{ category }}</small>
          <Price>${{ price }}</Price>
        </div>

        <div class="flex flex-col space-y-1">
          <button
            @click="increaseProductQuantity(itemToPurchase)"
            class="bg-inherit lg:hover:bg-pink-600 lg:hover:text-white product-hover border border-red-500 rounded-full w-6 h-6 text-center flex flex-col justify-center items-center">
            +
          </button>
          <p class="text-center">{{ quantity }}</p>
          <button
            :class="{ hidden: quantity === 1, inline: quantity > 1 }"
            @click="decreaseProductQuantity(itemToPurchase)"
            class="bg-inherit lg:hover:bg-pink-600 lg:hover:text-white product-hover border border-red-500 rounded-full w-6 h-6 text-center flex flex-col justify-center items-center">
            -
          </button>
          <button
            :class="{
              hidden: quantity > 1,
              'inline bg-pink-600 text-white lg:hover:bg-rose-700':
                quantity === 1,
            }"
            @click="removeItem(id)"
            class="bg-inherit product-hover border border-red-500 rounded-full w-6 h-6 text-center flex flex-col justify-center items-center">
            <TrashIcon class="w-3 h-3 inline" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Price from '../../Utilities/Price.vue';
import addToCart from '../../Utilities/addToCart.vue';
import { getItemDetails } from '../../../scripts/public/modal/modal';
import {
  increaseProductQuantity,
  decreaseProductQuantity,
  removeItem,
} from '../../../scripts/Global/orderManage';
import { TrashIcon } from '@heroicons/vue/24/solid';

export default {
  name: 'OrderItem',
  components: {
    Price,
    addToCart,
    TrashIcon,
  },

  props: {
    itemsPurchased: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const {
      id,
      title,
      price,
      image,
      description,
      composition,
      category,
      quantity,
    } = props.itemsPurchased;
    const itemToPurchase = props.itemsPurchased;

    return {
      id,
      title,
      category,
      price,
      image,
      description,
      composition,
      quantity,
      itemToPurchase,
      //methods
      getItemDetails,
      increaseProductQuantity,
      decreaseProductQuantity,
      removeItem,
    };
  },
};
</script>
