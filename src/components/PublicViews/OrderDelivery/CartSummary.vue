<template>
  <div class="w-full bg-inherit">
    <div class="w-full bg-white space-y-3">
      <div class="text-start font-semibold py-3">
        <h1>Cart Summary</h1>
      </div>
      <!-- items to delivery -->

      <div
        class="w-full h-96 overflow-x-hidden overflow-y-scroll p-2 custom-overflowscroll border border-gray-300/20 space-y-2 rounded-sm">
        <OrderItemAmount
          v-for="cartedProduct in purchasedItems"
          :key="cartedProduct.id"
          :purchedItemsInfo="cartedProduct"
          :totalItems="purchasedItems.length" />
      </div>
    </div>
    <div class="my-3 text-center border border-inherit rounded-sm shadow-md">
      <h1 class="text-xl underline underline-offset-8">
        Complete your payemnt With
      </h1>
      <div class="w-full flex justify-evenly items-center gap-x-2">
        <button
          @click="getGeneratedCode()"
          class="my-3 border border-red-500 rounded p-3">
          <img
            src="../../../assets/images/cloud-png-image-from-pngfre-15.png"
            alt=""
            class="w-20 h-20 rounded-md" />
        </button>
        <button
          @click="createPaymentId()"
          class="my-3 border border-red-500 rounded p-3">
          <img
            src="../../../assets/images/BKash_logo.svg.png"
            alt=""
            class="w-20 h-20 rounded-md" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import OrderItemAmount from './OrderItemAmount.vue';
import { purchasedItems } from '../../../scripts/public/Order/publicorder';
import { useGeneratedToken } from '../../../store/surjopay/tokengenerate';

import { useBkashPaymnetId } from '../../../store/bkash/createpayment';

const { getGeneratedCode } = useGeneratedToken();
const { createPaymentId } = useBkashPaymnetId();
export default {
  name: 'CartSummary',
  components: { OrderItemAmount },
  setup() {
    return {
      purchasedItems,
      getGeneratedCode,
      createPaymentId,
    };
  },
};
</script>

<style></style>
