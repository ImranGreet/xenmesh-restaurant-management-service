<template>
  <Transition name="slide-fade">
    <div
      v-if="showTransition"
      class="bg-inherit w-full space-y-5">
      <div class="w-full flex-between flex-col">
        <div class="w-full flex-between py-3">
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
                'view-toggle__button  view-toggle__button--active   toggle-screen-animation':
                  flexColor,
                'bg-auto ': !flexColor,
              }">
              <font-awesome-icon icon="fa-solid fa-bars-progress" />
            </button>

            <button
              @click="showGridItems('grid')"
              id="gridViewres"
              :class="{
                'view-toggle__button view-toggle__button--active  toggle-screen-animation':
                  gridColor,
                'bg-auto': !gridColor,
              }">
              <font-awesome-icon icon="fa-solid fa-table-cells" />
            </button>
          </div>
        </div>

        <div
          class="w-full bg-inherit sapce-y-2 product-grid--columns gap-6"
          :class="{ 'xl:grid-cols-3': gridView, 'xl:grid-cols-4': !gridView }">
          <ProductCard
            :productInformation="product"
            v-for="product in itemsByCat"
            :key="product.id" />
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { onMounted, ref, onUnmounted, watch, nextTick } from 'vue';
import ProductCard from '../Products/ProductCard.vue';
import { useRoute } from 'vue-router';

import items from '../../../DB/products.json';

import {
  gridView,
  showGridItems,
  flexColor,
  gridColor,
} from '../../../scripts/public/utility';

import { innerWidth } from '../../../scripts/Global/innerheightwidth';

export default {
  name: 'Menuitemsbycat',
  components: { ProductCard },
  setup() {
    const route = useRoute();

    const categoryPage = ref();
    const itemsByCat = ref();

    const showTransition = ref(true);

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

      () => {
        showTransition.value = false;
        itemsByCat.value = items.filter(foodItem => {
          return foodItem.category == categoryPage.value;
        });
        nextTick(() => {
          showTransition.value = true;
        });
      },
    );

    return {
      itemsByCat,
      categoryPage,
      gridView,
      flexColor,
      gridColor,
      showTransition,
      innerWidth,
      showGridItems,
    };
  },
};
</script>

<style></style>
