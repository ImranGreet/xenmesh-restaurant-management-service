<template>
  <div class="w-full bg-inherit px-3">
      <div class="w-full h-24 overflow-y-scroll flex flex-wrap justify-between items-center gap-5">
            <router-link to="#" v-for="item in foodItems" :key="item">{{item.category}}</router-link>
      </div>
  </div>
</template>

<script>
export default {
name:"SelectCategory",
setup(){
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
  // Add more objects as needed
];
return {
      foodItems
}
}
}
</script>

