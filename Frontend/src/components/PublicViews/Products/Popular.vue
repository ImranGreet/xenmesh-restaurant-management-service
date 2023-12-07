<template>
  <div
    class="w-full bg-inherit border border-gray-400/10 sapce-y-2 max-w-lg shadow-sm shadow-slate-200 rounded-2xl lg:hover:shadow-lg overflow-hidden lg:hover:delay-500 lg:hover:duration-300 lg:hover:ease-in-out">
    <div class="w-full h-auto flex justify-between items-center space-x-3">
      <div class="w-2/5 flex flex-col justify-center items-center rounded-t-xl">
        <img
          :src="image"
          alt=""
          class="w-full h-32 rounded-l-xl object-cover" />
      </div>
      <div class="w-3/5 h-auto flex flex-col justify-between space-y-2">
        <div class="w-full flex justify-start items-center gap-x-2">
          <h1
            class="text-sm tracking-wide font-semibold text-gray-800"
            v-if="title.length > 20">
            {{ title.slice(0, 20) }}....
          </h1>

          <h1
            class="text-sm tracking-wide font-semibold text-gray-800"
            v-else>
            {{ title }}
          </h1>

          <button
            @click="getItemDetails(id)"
            class="bg-slate-800/70 text-white w-5 h-5 text-center text-sm rounded-full">
            !
          </button>
        </div>

        <p
          class="text-xs tracking-wide leading-relaxed"
          v-if="description.length > 50">
          {{ description.slice(0, 50) }} ....
        </p>

        <p
          class="text-sm tracking-wide leading-relaxed"
          v-else>
          {{ description }}
        </p>

        <div class="w-full flex justify-between items-center px-2">
          <Price>${{ price }}</Price>
          <addToCart @click="addProductToCart(productInformation)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Price from '../../Utilities/Price.vue';
import addToCart from '../../Utilities/addToCart.vue';
import { addProductToCart } from '../../../scripts/public/Order/publicorder';
import { getItemDetails } from '../../../scripts/public/modal/modal';

export default {
  name: 'popular',
  components: {
    Price,
    addToCart,
  },
  props: {
    productInformation: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const { title, price, image, description, composition, id } =
      props.productInformation;
    return {
      title,
      price,
      image,
      description,
      composition,
      id,
      addProductToCart,
      getItemDetails,
    };
  },
};
</script>
