<template>
  <div class="bg-inherit shadow-sm px-5 py-5">
    <div class="space-y-1 lg:space-y-2">
      <div class="bg-slate-50 text-gray-950 py-2 rounded-t-lg relative">
        <h1 class="text-xs lg:text-xl tracking-wider text-center">My Cart</h1>
        <button
          @click="showOrderItems()"
          class="absolute top-1 right-2 text-base rounded-full lg:hover:border lg:hover:border-gray-500 text-red-500 w-3 lg:w-6 h-3 lg:h-6">
          X
        </button>
      </div>
      
      <ul

        class="w-full 2xl:h-[75vh] h-[68vh]  overflow-y-auto custom-overflowscroll flex flex-col justify-start items-start gap-y-3"  :class="{'sm:h-[32vh]':innerHeight<=500,'sm:h-[58vh]':innerHeight>=601}">
        <li
          class="w-full"
          v-for="purchased in purchasedItems"
          :key="purchased.id">
          <OrderItem :itemsPurchased="purchased" />
        </li>
      </ul>

      <div class="w-full space-y-2 ">
        <div
          class="w-full flex justify-between items-center px-3 py-1 lg:py-2 rounded-xl border border-gray-600">
          <h1>Subtotal</h1>
          <h2>${{ Math.floor(totalPrice) }}</h2>
        </div>
        

        <div
          class="w-full flex justify-center flex-col items-center px-3 py-1 lg:py-2 rounded-xl border border-gray-600 bg-rose-600">
          <router-link
          :to="{ name: 'processed_order' }"
          class="w-full   rounded-2xl text-center  text-white ">
          Proccesed To Check
        </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { showOrderItems } from '../../../scripts/public/Utility';
import OrderItem from '../../PublicViews/Items/OrderItem.vue';
import {
  totalPrice,
  getPriceFromStorage,
  purchasedItems,
} from '../../../scripts/public/Order/publicorder';
import { computed, onMounted, ref, watch } from 'vue';



export default {
  name: 'WebOrder',
  components: {
    OrderItem,
  },
  setup() {
    onMounted(() => {
      getPriceFromStorage();
    });

  
let innerHeight =ref();

onMounted(()=>{
  innerHeight.value = window.innerHeight;
  console.log(innerHeight.value);
});

window.addEventListener("resize",()=>{
  innerHeight.value = window.innerHeight; 
});
  

  


    return {
      showOrderItems,

      getPriceFromStorage,
      purchasedItems,
      totalPrice,
      innerHeight
      
    };
  },
};
</script>
