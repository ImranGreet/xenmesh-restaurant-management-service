<template>
  <div class="bg-inherit w-full space-y-5">
    <div class="w-full flex flex-col justify-between items-center">
      <div class="w-full flex justify-between items-center py-3">
        <div class="text-center">
          <h1
            class="text-gray-800 tracking-wider leading-7 text-xl font-semibold">
            <slot>{{ itemsByCategory.category }}</slot>
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
        class="w-full bg-inherit sapce-y-2 grid grid-cols-1 sm:grid-cols-2 gap-6"
        :class="{ 'xl:grid-cols-3': gridView, 'xl:grid-cols-4': !gridView }">
        <ProductCard
          v-for="product in itemsByCategory.foodItems"
          :key="product.id" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref, onUnmounted } from 'vue';
import ProductCard from '../Products/ProductCard.vue';
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
    onMounted(() => {
      showGridItems('grid');
    });

    onUnmounted(() => {
      gridView.value = false;
    });

    let itemsByCategory = ref({
      category: 'Beef and Vegetables',
      foodItems: [
        {
          id: 1,
          foodname: 'Burger',
          foodImage: 'https://source.unsplash.com/800x600/?burger',
          price: 5.99,
        },
        {
          id: 2,
          foodname: 'Pizza',
          foodImage: 'https://source.unsplash.com/800x600/?pizza',
          price: 8.99,
        },
        {
          id: 3,
          foodname: 'Salad',
          foodImage: 'https://source.unsplash.com/800x600/?salad',
          price: 4.99,
        },
        {
          id: 4,
          foodname: 'Sushi',
          foodImage: 'https://source.unsplash.com/800x600/?sushi',
          price: 12.99,
        },
        {
          id: 5,
          foodname: 'Pasta',
          foodImage: 'https://source.unsplash.com/800x600/?pasta',
          price: 9.99,
        },
        {
          id: 6,
          foodname: 'Ice Cream',
          foodImage: 'https://source.unsplash.com/800x600/?ice-cream',
          price: 3.99,
        },
      ],
    });

    return {
      itemsByCategory,
      gridView,
      flexColor,
      gridColor,
      showGridItems,
    };
  },
};
</script>
