<template>
  <section class="w-full">
    <div
      class="w-full flex flex-col lg:flex-row justify-between items-center lg:space-x-16">
      <div class="w-full lg:w-3/5 self-start">
        <GoogleMap />
        <DeliveryMethods />
      </div>
      <div class="space-y-4 w-full lg:w-2/5">
        <CartSummary />
        <TotalPrice />
        <button class="px-5 py-2 rounded-md bg-teal-600 w-full text-white">
          Place Order
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import DeliveryMethods from '../../components/PublicViews/OrderDelivery/DeliveryMethods.vue';
import CartSummary from '../../components/PublicViews/OrderDelivery/CartSummary.vue';
import TotalPrice from '../../components/PublicViews/OrderDelivery/TotalPrice.vue';
import GoogleMap from '../../global/GoogleMap.vue';

export default {
  name: 'ProcessedOrder',
  components: {
    DeliveryMethods,
    CartSummary,
    TotalPrice,
    GoogleMap,
  },
  setup() {
    return {};
  },
};
</script>
