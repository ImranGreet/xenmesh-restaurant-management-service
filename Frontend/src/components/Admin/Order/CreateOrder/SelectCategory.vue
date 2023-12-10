<template>
  <div class="w-full bg-inherit">
    <div
      class="w-full h-24 overflow-y-scroll custom-overflowscroll flex flex-wrap justify-start items-center gap-3">
      <router-link
        to="#"
        v-for="cat,index in useCategoryRoutes"
        :key="index"
        class="bg-blue-900/80 px-2 py-1 text-white rounded-sm"
        >{{ cat.category }}</router-link
      >
    </div>
  </div>
</template>

<script>
import { useCategoryRoutes } from '../../../../scripts/public/Navs/categoryNav';

export default {
  name: 'SelectCategory',
  setup() {
   
    return {
      
      useCategoryRoutes
    };
  },
};
</script>
