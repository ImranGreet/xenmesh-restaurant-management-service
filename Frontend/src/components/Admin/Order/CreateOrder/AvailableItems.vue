<template>
      <div class="bg-white w-full">
            <div class="p-2 w-full">
                <div class="w-36 border border-grauy-200 rounded-sm">
                  <div class="w-full flex flex-col justify-center items-start">
                        <div class="w-full flex flex-col justify-center items-center">
                              <img :src="itemImage" alt="">
                        </div>
                  </div>
                </div>
            </div>
        </div>
</template>

<script>
import { ref } from 'vue';

export default {
name:"AvailableItems",
setup(){
      const itemImage = ref("https://images.unsplash.com/photo-1700902741852-ecf2bd2c26eb?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
      
      return {
           itemImage
      }
}
}
</script>

