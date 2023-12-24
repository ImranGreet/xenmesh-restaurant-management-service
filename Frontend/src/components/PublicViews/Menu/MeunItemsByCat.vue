<template>
  <div class="bg-inherit w-full space-y-5">
    <div class="w-full flex flex-col justify-between items-center">
      <div class="w-full flex justify-between items-center py-3">
        <div class="text-center">
          <h1
            class="text-gray-800 tracking-wider leading-7 text-xl font-semibold">
            <slot>{{ categoryPage }}</slot>
          </h1>
        </div>

        <div class="space-x-2 hidden lg:block">
          <button
            @click="showGridItems('flex')"
            id="flexViweres"
            :class="{
              'bg-gray-600 text-pink-200 animate-pulse px-1 rounded-md':
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
        class="w-full bg-inherit sapce-y-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 "
        :class="{ 'xl:grid-cols-3': gridView, 'xl:grid-cols-4': !gridView }">
        <ProductCard
          :productInformation="product"
          v-for="product in itemsByCat"
          :key="product.id" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, onUnmounted, watch } from 'vue';
import ProductCard from '../Products/ProductCard.vue';
import { useRoute } from 'vue-router';

import items from '../../../DB/products.json';

import {
  gridView,
  showGridItems,
  flexColor,
  gridColor,
} from '../../../scripts/public/Utility';

export default {
  name: 'Menuitemsbycat',
  components: { ProductCard },
  setup() {
    const route = useRoute();

    const categoryPage = ref();
    const itemsByCat = ref();

    onMounted(() => {
      showGridItems('grid');
    });

    onUnmounted(() => {
      gridView.value = false;
    });

    watch(
      () => (categoryPage.value = route.params.category),
      () => (categoryPage.value = route.params.category),
    );

    watch(
      () =>
        (itemsByCat.value = items.filter(foodItem => {
          return foodItem.category == categoryPage.value;
        })),
      () =>
        (itemsByCat.value = items.filter(foodItem => {
          return foodItem.category == categoryPage.value;
        })),
    );

    return {
      itemsByCat,
      categoryPage,
      gridView,
      flexColor,
      gridColor,
      showGridItems,
    };
  },
};
</script>
