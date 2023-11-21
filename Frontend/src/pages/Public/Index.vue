<template>
  <section class="w-full flex flex-col justify-between h-screen space-y-5">
    <div
      class="w-full flex justify-between items-center max-w-7xl mx-auto py-5">
      <Firsttopbar />
      <SecondTopbar />
      
    </div>

    <div class="max-w-7xl mx-auto space-y-10">
      <Featured/>
      <OfferAd/>
      <Popular/>
    </div>

    <Footer />
  </section>
</template>

<script>
import SecondTopbar from "../../components/PublicViews/Topbar/SecondTopbar.vue";
import Firsttopbar from "../../components/PublicViews/Topbar/Firsttopbar.vue";
import Footer from "../../components/PublicViews/Footer/Footer.vue";
import Featured from "../../components/PublicViews/Items/Featured.vue";
import OfferAd from "../../components/PublicViews/Offer/OfferAd.vue";
import Popular from "../../components/PublicViews/Items/Popular.vue";


export default {
  name: "Index",
  components: {
    SecondTopbar,
    Firsttopbar,
    SecondTopbar,
    Footer,
    Featured,
    OfferAd,
    Popular
  },
};
</script>

<style></style>
