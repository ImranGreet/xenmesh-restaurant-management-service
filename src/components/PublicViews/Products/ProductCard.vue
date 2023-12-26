<template>
  <div
    class="w-full bg-inherit space-y-1 md:sapce-y-2 max-w-lg shadow-sm shadow-slate-200 rounded-2xl product-hover py-1.5"
    :class="{
      'flex justify-between items-center': gridView,
      block: !gridView,
    }">
    <div
      class="flex flex-col justify-center items-center rounded-t-2xl"
      :class="{ 'w-full': !gridView, 'w-3/5': gridView }">
      <img
        :src="image"
        loading="lazy"
        :alt="title"
        class="w-full object-cover"
        :class="{
          'h-[182px] rounded-t-xl': !gridView,
          'h-[132px] rounded-l-xl': gridView,
        }" />
    </div>
    <div
      class="px-1 md:px-2 xl:px-3 w-full"
      :class="{
        'py-1 md:py-2 lg:py-3 xl:py-5 space-y-3': !gridView,
        'py-1 space-y-0': gridView,
      }">
      <div class="py-0 space-y-2">
        <div class="w-full flex justify-start items-center gap-x-1 md:gap-x-2">
          <h1
            class="text-base tracking-wide font-semibold text-gray-800"
            v-if="title.length > 10 && innerWidth >= 300 && innerWidth <= 767">
            {{ title.slice(0, 8) }} ...
          </h1>

          <h1
            class="text-base tracking-wide font-semibold text-gray-800"
            v-else-if="
              title.length > 20 && innerWidth >= 768 && innerWidth <= 1023
            ">
            {{ title.slice(0, 15) }} ...
          </h1>

          <h1
            class="text-base tracking-wide font-semibold text-gray-800"
            v-else-if="title.length >= 20 && innerWidth >= 1025">
            {{ title.slice(0, 18) }} ...
          </h1>

          <h1
            class="text-base tracking-wide font-semibold text-gray-800"
            v-else>
            {{ title }}
          </h1>

          <button
            @click="getItemDetails(id)"
            class="bg-slate-800/70 text-white w-5 h-5 text-center text-sm rounded-full lg:hover:bg-pink-700">
            !
          </button>
        </div>

        <p
          class="text-sm tracking-wide leading-relaxed"
          v-if="description.length > 50">
          {{ description.slice(0, 50) }} ...
        </p>

        <p
          class="text-sm tracking-wide leading-relaxed"
          v-else>
          {{ description }}
        </p>
      </div>

      <div class="w-full flex justify-between items-center">
        <Price
          :class="{
            'line-through': discountAmount,
            'no-underline': !discountAmount,
          }"
          >${{ price }}</Price
        >

        <Price
          :class="{
            'no-underline block': discountAmount,
            hidden: !discountAmount,
          }">
          ${{ Math.floor(Math.abs(price - (discountAmount * price) / 100)) }}
        </Price>

        <addToCart @click="addProductToCart(productInformation)" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import Price from '../../Utilities/Price.vue';
import addToCart from '../../Utilities/addToCart.vue';
/* composables */
import { gridView, showGridItems } from '../../../scripts/public/utility';
import { addProductToCart } from '../../../scripts/public/Order/publicorder';
import { getItemDetails } from '../../../scripts/public/modal/modal';
/*inner height and window*/
import {
  innerHeight,
  innerWidth,
} from '../../../scripts/Global/innerheightwidth';
export default {
  name: 'ProductCard',
  components: {
    Price,
    addToCart,
  },
  props: {
    productInformation: {
      type: Object,
      required: true,
    },
    discount: {
      type: Number,
      required: false,
    },
  },
  setup(props) {
    const { id, title, price, image, description, composition } =
      props.productInformation;
    const discountAmount = props.discount;
    return {
      id,
      title,
      price,
      image,
      description,
      composition,
      gridView,
      discountAmount,
      innerHeight,
      innerWidth,
      showGridItems,
      addProductToCart,
      getItemDetails,
    };
  },
};
</script>
