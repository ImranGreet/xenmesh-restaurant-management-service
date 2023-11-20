<template>
  <div
    class="w-full flex flex-col justify-center items-center min-h-screen gap-y-3 py-20">
    <ProductCard />
    <Offer />
    <FilterButton />
    <Popular />
  </div>
</template>

<script>
import ProductCard from "../../components/PublicViews/Products/ProductCard.vue";
import Offer from "../../components/PublicViews/Products/Offer.vue";
import FilterButton from "../../components/PublicViews/Products/FilterButton.vue";
import Popular from "../../components/PublicViews/Products/Popular.vue";

export default {
  name: "Index",
  components: {
    ProductCard,
    Offer,
    FilterButton,
    Popular,
  },
};
</script>

<style></style>
