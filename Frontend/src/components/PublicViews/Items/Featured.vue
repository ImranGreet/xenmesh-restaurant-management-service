<template>
  <div class="w-full bg-inherit">
    <div class="space-y-4">
        <div class="text-start">
            <h1 class="text-xl tracking-wide leading-relaxed">Featured Items</h1>
        </div>
        <div class="w-full grid grid-cols-2 lg:grid-cols-4 gap-8">
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
          <ProductCard/>
        </div>
    </div>
  </div>
</template>

<script>
import ProductCard from '../Products/ProductCard.vue'

export default {
name:"Featured",
components:{
    ProductCard
}
}
</script>

