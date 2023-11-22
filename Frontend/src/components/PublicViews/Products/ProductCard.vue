<template>
  <div
    class="w-full bg-inherit sapce-y-2 max-w-lg shadow-sm shadow-slate-200 rounded-2xl lg:hover:shadow-lg overflow-hidden lg:hover:delay-500 lg:hover:duration-300 lg:hover:ease-in-out">
    <div class="w-full flex flex-col justify-center items-center rounded-t-2xl">
      <img
        :src="productInformation.image"
        alt=""
        class="w-full h-[182px] rounded-t-xl object-cover" />
    </div>
    <div class="space-y-2 py-4 px-3">
      <div class="py-2 space-y-2">
        <div class="w-full flex justify-start items-center gap-x-2">
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
        <Price>${{ productInformation.price }}</Price>
        <addToCart />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import Price from "../../Utilities/Price.vue";
import addToCart from "../../Utilities/addToCart.vue";
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
        "Enjoy the sweet pickings from the fruit trees around our new home. It’s been a renovation nightmare.",
      composition:
        "Slid my cart over for checkout, the attendant peeked inside and said “having a party, eh?” Indeed. Wine, cheese, crackers and berries. What more could a party ask for?",
    });
    return {
      productInformation,
    };
  },
};
</script>
