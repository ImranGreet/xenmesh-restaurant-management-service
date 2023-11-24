<template>
  <div class=" bg-inherit shadow-sm px-5 py-5 ">
      <div class=" space-y-2 ">
            <div class="bg-slate-50 text-gray-950 py-2 rounded-t-lg relative">
               <h1 class="text-xl tracking-wider text-center">
                  My Cart
               </h1>
               <button 
               @click="showOrderItems()"
               class="absolute top-1 right-2 text-base rounded-full lg:hover:border lg:hover:border-gray-500 text-red-500 w-6 h-6">X</button>
            </div>
            <div class="w-full h-[75vh] overflow-y-auto custom-overflowscroll flex flex-col justify-between  items-start gap-y-3 ">
              <OrderItem/>
              <OrderItem/>
              <OrderItem/>
              <OrderItem/>
              <OrderItem/>
              <OrderItem/>
              <OrderItem/>
              <OrderItem/>
              
            </div>

          <div class="w-full space-y-3">
            <div class="w-full flex justify-between items-center px-3 py-2 rounded-xl border border-gray-600">
              <h1>Subtotal</h1>
              <h2>$400</h2>
            </div>
            <button class="w-full h-10 rounded-2xl text-center border border-pink-600 text-white bg-rose-600">Proccesed To Check</button>
          </div>    
      </div>
  </div>
</template>

<script>
import { showOrderItems } from '../../../scripts/public/Utility';
import OrderItem from '../../PublicViews/Items/OrderItem.vue';


export default {
  name:"WebOrder",
  components:{
    OrderItem
  },
  setup(){
    return {
      showOrderItems
    }
  }
}
</script>

