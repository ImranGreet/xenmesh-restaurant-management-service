<template>
  <div class="bg-white w-full overflow-x-scroll custom-overflowscroll">
      <div class="w-full flex justify-between items-center gap-x-4 py-3 snap-x snap-mandatory">
            <router-link to="#" v-for="cat in categories" :key="cat.id" class="snap-always snap-center">
               <itemCategory :productPhoto="cat.image" :title="cat.category"/>
            </router-link>
      </div>
      
  </div>
</template>

<script>
import { ref } from 'vue';
import itemCategory from '../ReuseComps/Category.vue';



export default {
name:"CategoryNav",
components:{
      itemCategory
},
setup(){
      
      
      const categories = ref([
  { id: 1, category: 'Appetizers', image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: 'Delicious starters to kick off your meal' },
  { id: 2, category: 'Mainc', image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: 'Heartwarming main dishes to satisfy your hunger' },
  { id: 3, category: 'Desserts', image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: 'Sweet treats to end your meal on a high note' },
  { id: 4, category: 'Beverages', image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: 'Refreshing drinks to quench your thirst' },
  { id: 5, category: 'Salads', image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: 'Healthy and fresh salads for a lighter option' },
  { id: 6, category: 'Sandwiches', image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: 'Tasty sandwiches for a quick and satisfying bite' },
  { id: 7, category: 'Pasta', image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: 'Hearty pasta dishes for a comforting experience' },
  { id: 8, category: 'Specia', image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: 'Unique and flavorful drinks for a special touch' },
  { id: 5, category: 'Salads', image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: 'Healthy and fresh salads for a lighter option' },
  { id: 6, category: 'Sandwiches', image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: 'Tasty sandwiches for a quick and satisfying bite' },
  { id: 7, category: 'Pasta', image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: 'Hearty pasta dishes for a comforting experience' },
  { id: 8, category: 'Specia', image:"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: 'Unique and flavorful drinks for a special touch' },
]);

return {
   categories,
   
   
 }

}
}
</script>

