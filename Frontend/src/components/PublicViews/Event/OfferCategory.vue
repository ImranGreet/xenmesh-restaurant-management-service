<template>
  
      <div class="w-full bg-inherit">
            <div class="text-start mt-5">
                  <h1 class="text-gray-800 tracking-wider leading-7 text-xl font-semibold">
                        Offer In Category
                  </h1>
            </div>
             <OfferAd/>
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
    
 