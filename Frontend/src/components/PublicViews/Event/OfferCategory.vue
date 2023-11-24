<template>
  
      <div class="w-full bg-inherit">
          <div class="w-full flex flex-col lg:flex-row justify-between items-center">
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
    
 