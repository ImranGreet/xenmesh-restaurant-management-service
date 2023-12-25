<template>
  <transition
    :duration="{ enter: 500, leave: 800 }"
    name="nested"
    appear>
    <div
      v-if="orderItems"
      class="outer">
      <div class="inner">
        <div class="bg-inherit shadow-sm px-5 py-5">
          <div class="space-y-1 lg:space-y-2">
            <div class="bg-slate-50 text-gray-950 py-2 rounded-t-lg relative">
              <h1 class="text-xs lg:text-xl tracking-wider text-center">
                My Cart
              </h1>
              <button
                @click="showOrderItems()"
                class="absolute top-1 right-2 text-base rounded-full lg:hover:border lg:hover:border-gray-500 text-red-500 w-3 lg:w-6 h-3 lg:h-6">
                X
              </button>
            </div>

            <ul
              class="w-full 2xl:h-[75vh] h-[58vh] overflow-y-auto custom-overflowscroll flex flex-col justify-start items-start gap-y-3"
              :class="{
                'sm:h-[24vh]': innerHeight <= 500,
                'sm:h-[58vh]': innerHeight >= 601,
              }">
              <TransitionGroup
                name="list"
                tag="ul">
                <li
                  class="w-full"
                  v-for="purchased in purchasedItems"
                  :key="purchased.id">
                  <OrderItem :itemsPurchased="purchased" />
                </li>
              </TransitionGroup>
            </ul>

            <div class="w-full space-y-2">
              <div
                class="w-full flex justify-between items-center px-3 py-1 lg:py-2 rounded-xl border border-gray-600">
                <h1>Subtotal</h1>
                <h2>${{ Math.floor(totalPrice) }}</h2>
              </div>

              <div
                class="w-full flex justify-center flex-col items-center px-3 py-1 lg:py-2 rounded-xl border border-gray-600 bg-rose-600">
                <router-link
                  :to="{ name: 'processed_order' }"
                  class="w-full rounded-2xl text-center text-white">
                  Proccesed To Check
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { computed, onMounted, ref, watch } from 'vue';
import { showOrderItems } from '../../../scripts/public/Utility';
import OrderItem from '../../PublicViews/Items/OrderItem.vue';
import {
  totalPrice,
  getPriceFromStorage,
  purchasedItems,
} from '../../../scripts/public/Order/publicorder';

import { innerHeight } from '../../../scripts/Global/innerheightwidth';
import { orderItems } from '../../../scripts/public/utility';

export default {
  name: 'WebOrder',
  components: {
    OrderItem,
  },
  setup() {
    onMounted(() => {
      getPriceFromStorage();
    });

    onMounted(() => {
      innerHeight.value = window.innerHeight;
      console.log(innerHeight.value);
    });

    return {
      showOrderItems,

      getPriceFromStorage,
      purchasedItems,
      totalPrice,
      innerHeight,
      orderItems,
    };
  },
};
</script>

<style>
.nested-enter-active,
.nested-leave-active {
  transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner {
  transition: all 0.1s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
  transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
