<template>
      <div class="bg-inherit w-full space-y-5">
            <div class="w-full flex flex-col justify-between items-center">
                  <div class="w-full flex justify-between  items-center  py-3">
                     <div class="text-center">
                           <h1 class="text-gray-800 tracking-wider leading-7 text-xl font-semibold">
                                 <slot>{{itemsByCategory.category}}</slot>
                           </h1>
                     </div>
         
                     <div class="space-x-2">
                           <button><font-awesome-icon icon="fa-solid fa-bars-progress" /></button>
                           <button><font-awesome-icon icon="fa-solid fa-table-cells" /></button>
                     </div>
                  </div>
      
                  <div
                    class="w-full bg-inherit border border-gray-400/10 sapce-y-2   grid grid-cols-2 xl:grid-cols-4 gap-6">
                     
                      <ProductCard v-for="product in itemsByCategory.foodItems" :key="product.id" />
                 
                </div>
            </div>
         </div>
</template>

<script>
import ProductCard from '../Products/ProductCard.vue';

export default {
      name:"OfferItems",
      components:{
            ProductCard,
      },

      setup(){
      let itemsByCategory = ref({
            category:"Beef and Vegetables",
      foodItems : [
      {
      id: 1,
      foodname: 'Burger',
      foodImage: 'https://source.unsplash.com/800x600/?burger',
      price: 5.99
      },
      {
      id: 2,
      foodname: 'Pizza',
      foodImage: 'https://source.unsplash.com/800x600/?pizza',
      price: 8.99
      },
      {
      id: 3,
      foodname: 'Salad',
      foodImage: 'https://source.unsplash.com/800x600/?salad',
      price: 4.99
      },
      {
      id: 4,
      foodname: 'Sushi',
      foodImage: 'https://source.unsplash.com/800x600/?sushi',
      price: 12.99
      },
      {
      id: 5,
      foodname: 'Pasta',
      foodImage: 'https://source.unsplash.com/800x600/?pasta',
      price: 9.99
      },
      {
      id: 6,
      foodname: 'Ice Cream',
      foodImage: 'https://source.unsplash.com/800x600/?ice-cream',
      price: 3.99
      }
      ]

      });

      return {
            itemsByCategory
      }
   }


}
</script>

<style>

</style>