<template>
  <div class="w-full bg-inherit">
    <div class="space-y-4">
      <div class="text-start">
        <h1 class="text-xl tracking-wide leading-relaxed">Featured Items</h1>
      </div>
      <div
        class="w-full grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 xl:gap-8">
        <ProductCard
          v-for="item in featuredItems"
          :key="item.id"
          :productInformation="item" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../Products/ProductCard.vue';
import Items from '../../../DB/products';

export default {
  name: 'Featured',
  components: {
    ProductCard,
  },
  setup() {
    const featuredItems = Items.filter(item => {
      return item.status == 'featured';
    });

    return {
      featuredItems,
    };
  },
};
</script>
