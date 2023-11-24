<template>
      <div
        class="w-full bg-inherit border-y border-gray-400/20 sapce-y-2 py-2">
        <div class="w-full h-auto flex justify-between  space-x-3">
          <div class="w-2/6 flex flex-col justify-center items-center rounded-t-xl">
            <img
              :src="productInformation.image"
              alt=""
              class="w-full h-24 rounded-l-xl object-cover" />
          </div>
         
          <div class="w-2/3 h-auto flex items-center justify-between pr-2">
            <div class="w-full space-y-3">
                  <h1 class="text-sm tracking-wide font-semibold text-gray-800">
                    {{ productInformation.title }}
                  </h1>
                  <Price>${{ productInformation.price }}</Price>
            </div>
              
            
              
              <div class="flex flex-col space-y-1">
                  <button class="bg-inherit lg:hover:bg-pink-600 lg:hover:text-white product-hover border border-red-500 rounded-full w-6 h-6 text-center flex flex-col justify-center items-center">+</button>
                  <p class="text-center">1</p>
                  <button class="bg-inherit lg:hover:bg-pink-600 lg:hover:text-white product-hover border border-red-500 rounded-full w-6 h-6 text-center flex flex-col justify-center items-center ">-</button>
              </div>
            
          </div>
        </div>
      </div>
    </template>
    
    <script>
    import { ref } from "vue";
    import Price from "../../Utilities/Price.vue";
    import addToCart from "../../Utilities/addToCart.vue";
    export default {
      name: "OrderItem",
      components: {
        Price,
        addToCart,
      },
      setup() {
        const productInformation = ref({
          title: "Pear Salad Drinks Time to clean up the diet.",
          price: 20,
          image:
            "https://demo.foodking.dev/storage/48/conversions/vegan_hum-burger_with_cheese-thumb.png",
          description:
            "With a side of fried rice or supreme soy noodles, and steamed chi. ",
          composition:
            "Slid my cart over for checkout, the attendant peeked inside and said  ",
        });
        return {
          productInformation,
        };
      },
    };
    </script>
    