<template>
  <div class="w-full bg-white">
      <div class="w-full flex justify-between items-center">
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
  // Add more objects as needed
];
return {
      foodItems
}
}
}
</script>

