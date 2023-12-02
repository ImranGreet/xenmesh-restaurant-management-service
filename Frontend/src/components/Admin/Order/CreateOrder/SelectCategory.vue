<template>
  <div class="w-full bg-inherit">
    <div
      class="w-full h-24 overflow-y-scroll custom-overflowscroll flex flex-wrap justify-start items-center gap-3">
      <router-link
        to="#"
        v-for="item in foodItems"
        :key="item"
        class="bg-blue-900/80 px-2 py-1 text-white rounded-sm"
        >{{ item.category }}</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectCategory',
  setup() {
    const foodItems = [
      { id: 1, category: 'Fruits' },
      { id: 2, category: 'Vegetables' },
      { id: 3, category: 'Dairy' },
      { id: 1, category: 'Fruits' },
      { id: 2, category: 'Vegetables' },
      { id: 3, category: 'Dairy' },
      { id: 1, category: 'Fruits' },
      { id: 2, category: 'Vegetables' },
      { id: 3, category: 'Dairy' },
      { id: 1, category: 'Fruits' },
      { id: 2, category: 'Vegetables' },
      { id: 3, category: 'Dairy' },
      { id: 1, category: 'Fruits' },
      { id: 2, category: 'Vegetables' },
      { id: 3, category: 'Dairy' },
      { id: 1, category: 'Fruits' },
      { id: 2, category: 'Vegetables' },
      { id: 3, category: 'Dairy' },
      { id: 1, category: 'Fruits' },
      { id: 2, category: 'Vegetables' },
      { id: 3, category: 'Dairy' },
      { id: 1, category: 'Fruits' },
      { id: 2, category: 'Vegetables' },
      { id: 3, category: 'Dairy' },
      // Add more objects as needed
    ];
    return {
      foodItems,
    };
  },
};
</script>
