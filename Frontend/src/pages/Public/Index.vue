<template>
  <section class="w-full flex flex-col justify-between h-screen">
    <div
      class="w-full flex justify-between items-center max-w-7xl mx-auto py-5">
      <Firsttopbar />
      <SecondTopbar />
    </div>
    <Footer />
  </section>
</template>

<script>
import ProductCard from "../../components/PublicViews/Products/ProductCard.vue";
import Offer from "../../components/PublicViews/Products/Offer.vue";
import FilterButton from "../../components/PublicViews/Products/FilterButton.vue";
import Popular from "../../components/PublicViews/Products/Popular.vue";
import SecondTopbar from "../../components/PublicViews/Topbar/SecondTopbar.vue";
import Firsttopbar from "../../components/PublicViews/Topbar/Firsttopbar.vue";
import Footer from "../../components/PublicViews/Footer/Footer.vue";

export default {
  name: "Index",
  components: {
    ProductCard,
    Offer,
    FilterButton,
    Popular,
    SecondTopbar,
    Firsttopbar,
    SecondTopbar,
    Footer,
  },
};
</script>

<style></style>
