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
    <button @click="getGeneratedCode()">Surjopay</button>
  </div>
</template>

<script>
import { ref } from 'vue';
import OrderItemAmount from './OrderItemAmount.vue';
import { purchasedItems } from '../../../scripts/public/Order/publicorder';
import { useGeneratedToken } from '../../../store/surjopay/tokengenerate';

const { getGeneratedCode } = useGeneratedToken();
export default {
  name: 'CartSummary',
  components: { OrderItemAmount },
  setup() {
    return {
      purchasedItems,
      getGeneratedCode,
    };
  },
};
</script>

<style></style>
