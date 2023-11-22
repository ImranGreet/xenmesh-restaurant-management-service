<template>
  <section class="w-full flex flex-col justify-between h-screen space-y-5">
    <div class="w-full mx-auto space-y-10">
      <Featured/>
      <OfferAd/>
      <Popular/>
    </div>

    <Footer />
  </section>
</template>

<script>

import Footer from "../../components/PublicViews/Footer/Footer.vue";
import Featured from "../../components/PublicViews/Items/Featured.vue";
import OfferAd from "../../components/PublicViews/Offer/OfferAd.vue";
import Popular from "../../components/PublicViews/Items/Popular.vue";


export default {
  name: "Index",
  components: {
    
    Footer,
    Featured,
    OfferAd,
    Popular
  },
};
</script>

<style></style>
