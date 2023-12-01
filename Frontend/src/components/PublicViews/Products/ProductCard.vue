<template>
  <div
    class="w-full bg-inherit space-y-1  md:sapce-y-2 max-w-lg shadow-sm shadow-slate-200 rounded-2xl product-hover py-1.5" :class="{'flex justify-between items-center':gridView,'block':!gridView}">
    <div class=" flex flex-col justify-center items-center rounded-t-2xl" :class="{'w-full':!gridView,'w-3/5':gridView}">
      <img
        :src="productInformation.image"
        alt=""
        class="w-full  object-cover" :class="{'h-[182px] rounded-t-xl':!gridView,'h-[132px] rounded-l-xl':gridView}" />
    </div>
    <div class="px-1 md:px-2 xl:px-3 w-full" :class="{'py-1 md:py-2 lg:py-3 xl:py-5 space-y-3':!gridView,'py-1 space-y-0':gridView}">
      <div class="py-0 space-y-2">
        <div class="w-full flex justify-start items-center gap-x-1  md:gap-x-2">
          <h1 class="text-base tracking-wide font-semibold text-gray-800">
            {{ productInformation.title }}
          </h1>
          <button
            class="bg-slate-800/70 text-white w-5 h-5 text-center text-sm rounded-full">
            !
          </button>
        </div>
        <p class="text-sm tracking-wide leading-relaxed">
          {{ productInformation.description }}
        </p>
      </div>

      <div class="w-full flex justify-between items-center ">
        <Price >${{ productInformation.price }}</Price>
        <addToCart @click="addProductToCart(productInformation)" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Price from "../../Utilities/Price.vue";
import addToCart from "../../Utilities/addToCart.vue";
/* composables */
import {gridView,showGridItems} from "../../../scripts/public/utility";
import { addProductToCart } from "../../../scripts/public/Order/publicorder";

export default {
  name: "ProductCard",
  components: {
    Price,
    addToCart,
  },
  setup() {
    const productInformation = ref({
      title: "Pear Salad Drinks",
      price: 20,
      image:
        "https://demo.foodking.dev/storage/70/conversions/mix_vegetables_salad-cover.png",
      description:
        "Enjoy the sweet pickings from the fruit .",
      composition:
        "Slid my cart over for checkout, the attendant peeked inside and said “having a party, eh?",
    });
    return {
      productInformation,
      gridView,
      showGridItems,
      addProductToCart
    };
  },
};
</script>
