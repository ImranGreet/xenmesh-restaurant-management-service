<template>
  <div class="w-full border h-96 border-gray-100 rounded-md relative">
      <div class="w-full h-full flex flex-col justify-center items-center rounded-md ">
            <img :src="slidesPhoto" alt="" class="w-full h-full object-fill object-center rounded-md ">
      </div>
      <div class="w-full h-full absolute bg-gray-600/40 z-20 inset-x-0 inset-y-0 rounded-md">
            <div class="w-full h-full flex justify-between items-center">
                  <button 
                  @click="previusSlider()"
                  class="bg-slate-600/80 text-white w-12 h-12 shadow rounded-full flex flex-col justify-center items-center">
                        <ChevronLeftIcon class="w-6 h-6 text-white"/>
                  </button>
                  <button
                   @click="nextSlider()"
                  class="bg-slate-600/80 text-white w-12 h-12 shadow rounded-full flex flex-col justify-center items-center">
                        <ChevronRightIcon class="w-6 h-6 text-white"/>
                  </button>
            </div>
      </div>
      
  </div>
</template>

<script>
import { computed, ref } from 'vue';

import { ChevronLeftIcon,ChevronRightIcon } from '@heroicons/vue/24/outline';
import {slidingController,currentSlideElement} from '../../../scripts/public/Sliding';


export default {
name:"SlidingPhoto",
components:{
      ChevronLeftIcon,
      ChevronRightIcon
},

setup()
{
 const slidesPhoto = ref("https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");

 const nextSlider = function(){
      slidingController.nextSlider();
 }


const previusSlider = function(){
    slidingController.previusSlider();
}

computed(()=>{
      return currentSlideElement;
});

 return {
      slidesPhoto,
      slidingController,
      currentSlideElement,
      /*methods*/
      nextSlider,
      previusSlider, 
      }
}
}
</script>

