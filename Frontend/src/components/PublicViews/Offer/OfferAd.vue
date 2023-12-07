<template>
  <div class="w-full bg-inherit">
    <div class="w-full grid grid-cols-1 lg:grid-cols-2 items-center mt-6 gap-6">
      <router-link
        :to="{ name: 'catoffer', params: { cat: item.category } }"
        v-for="item in appliedDiscount"
        :key="item.id">
        <Offer :offerInformation="item" />
      </router-link>
    </div>
  </div>
</template>

<script>
import Offer from '../Products/Offer.vue';
import Items from '../../../DB/products';

export default {
  name: 'OfferAd',
  components: {
    Offer,
  },
  setup() {
    const discountedProducts = Items.filter(appliedOffer => {
      return appliedOffer.discount > 0;
    });
    const uniqueCategory = new Set(
      discountedProducts.map(item => item.category),
    );
    const appliedCategories = Array.from(uniqueCategory);
    const appliedDiscount = appliedCategories.map(cat => {
      return discountedProducts.find(item => item.category == cat);
    });

    return {
      appliedDiscount,
    };
  },
};
</script>

<style></style>
