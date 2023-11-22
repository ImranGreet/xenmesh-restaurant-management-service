<template>
  <div
    class="w-full bg-inherit sapce-y-2 max-w-xs shadow-xl shadow-slate-200 rounded-xl overflow-hidden">
    <div class="w-full flex flex-col justify-center items-center rounded-t-xl">
      <img
        :src="productInformation.image"
        alt=""
        class="w-full h-48 rounded-t-xl object-cover" />
    </div>
    <div class="space-y-2 py-4">
      <div class="py-2 space-y-2">
        <div class="w-full flex justify-start items-center gap-x-0.5">
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

      <div class="w-full flex justify-between items-center px-2">
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
        "https://images.unsplash.com/photo-1506395308321-904a71783d60?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description:
        "Enjoy the sweet pickings from the fruit trees around our new home. It’s been a renovation nightmare, but this bounty may be enough to make it okay",
      composition:
        "Slid my cart over for checkout, the attendant peeked inside and said “having a party, eh?” Indeed. Wine, cheese, crackers and berries. What more could a party ask for?",
    });
    return {
      productInformation,
    };
  },
};
</script>
