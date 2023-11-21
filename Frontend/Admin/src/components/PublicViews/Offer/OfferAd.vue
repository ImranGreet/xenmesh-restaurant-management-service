<template>
    <div class="w-full bg-inherit">
        <div class="w-full flex justify-between items-center space-x-8">
              <router-link to="#" class="w-full"><Offer/></router-link>
              <router-link to="#" class="w-full"><Offer/></router-link>
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