<template>
  
      <div class="w-full bg-inherit">
          <div class="w-full flex flex-col lg:flex-row flex-wrap justify-between items-center gap-8 ">
             <OfferAd/>
             <OfferAd/>
          </div>
      </div>
    </template>
    
    <script>
    import OfferAd from '../Offer/OfferAd.vue';
    
    export default {
    name:"OfferCategory",
    components:{
          OfferAd
    }
    }
    </script>
    
 