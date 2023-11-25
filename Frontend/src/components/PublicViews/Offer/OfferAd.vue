<template>
    <div class="w-full bg-inherit">
        <div class="w-full flex flex-col md:flex-row justify-between items-center mt-6 gap-y-6 sm:gap-y-0 gap-x-0 sm:gap-x-6">
              <router-link :to="{name:'catoffer',params:{cat:'vegetables'}}" class="w-full"><Offer/></router-link>
              <router-link :to="{name:'catoffer',params:{cat:'appetizer'}}"  class="w-full"><Offer/></router-link>
        </div>
     </div>
      
</template>

<script>
import Offer from '../Products/Offer.vue'

export default {
name:"OfferAd",
components:{
    Offer
}
}
</script>

<style>

</style>