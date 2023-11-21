<template>
    <div class="w-full bg-inherit">
      <div class="space-y-4">
          <div class="text-start">
              <h1 class="text-xl tracking-wide leading-relaxed">Popular Items</h1>
          </div>
          <div class="w-full grid grid-cols-2 lg:grid-cols-3 gap-8">
            <PopularItems/>
            <PopularItems/>
            <PopularItems/>
            <PopularItems/>
            <PopularItems/>
            <PopularItems/>
            <PopularItems/>
            <PopularItems/>
          </div>
      </div>
    </div>
  </template>
  
  <script>
  
  import PopularItems from "../Products/Popular.vue"
  export default {
  name:"Popular",
  components:{
    PopularItems
  }
  }
  </script>
  
  