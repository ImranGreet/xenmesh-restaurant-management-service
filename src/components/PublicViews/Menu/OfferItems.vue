<template>
  <div class="bg-inherit w-full space-y-5">
    <div class="w-full flex flex-col justify-between items-center">
      <div class="w-full flex justify-between items-center py-5">
        <div class="text-center">
          <h1
            class="text-gray-800 tracking-wider leading-7 text-xl font-semibold">
            <slot>{{ category }}</slot>
          </h1>
        </div>

        <div class="space-x-2">
          <button
            @click="showGridItems('flex')"
            id="flexViweres"
            :class="{
              'bg-gray-600 text-pink-200 px-1 animate-pulse rounded-md':
                flexColor,
              'bg-auto ': !flexColor,
            }">
            <font-awesome-icon icon="fa-solid fa-bars-progress" />
          </button>

          <button
            @click="showGridItems('grid')"
            id="gridViewres"
            :class="{
              'bg-gray-600 text-pink-200 animate-pulse px-1 rounded-md':
                gridColor,
              'bg-auto': !gridColor,
            }">
            <font-awesome-icon icon="fa-solid fa-table-cells" />
          </button>
        </div>
      </div>

      <div
        class="w-full bg-inherit sapce-y-2 grid grid-cols-1 sm:grid-cols-2 gap-6"
        :class="{ 'xl:grid-cols-3': gridView, 'xl:grid-cols-4': !gridView }">
        <ProductCard
          :productInformation="product"
          :discount="product.discount"
          v-for="product in discountedProducts"
          :key="product.id" />
      </div>
    </div>
  </div>
</template>

<script>
import {
  gridView,
  flexColor,
  gridColor,
  showGridItems,
} from '../../../scripts/public/utility';

import ProductCard from '../Products/ProductCard.vue';

import { onMounted, onUnmounted, ref } from 'vue';

import { useRoute } from 'vue-router';

import Items from '../../../DB/products';

export default {
  name: 'OfferItems',
  components: {
    ProductCard,
  },

  setup() {
    const route = useRoute();
    const category = route.params.cat.trim();

    const discountedProducts = Items.filter(appliedOffer => {
      return (
        appliedOffer.category.trim() == category && appliedOffer.discount > 0
      );
    });

    onMounted(() => showGridItems('grid'));

    onUnmounted(() => {
      gridView.value = false;
    });

    return {
      showGridItems,
      discountedProducts,
      category,
      gridView,
      flexColor,
      gridColor,
    };
  },
};
</script>

<style></style>
