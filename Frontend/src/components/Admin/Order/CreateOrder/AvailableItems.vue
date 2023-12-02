<template>
  <div class="w-full">
    <div class="w-full">
      <div class="max-w-sm border border-grauy-200 rounded-md">
        <div class="w-full flex flex-col justify-center items-start">
          <div
            class="w-full flex flex-col justify-center items-center rounded-t-md">
            <img
              :src="itemImage"
              alt=""
              class="rounded-t-md"
              loading="lazy" />
          </div>
          <!-- description -->
          <div
            class="space-y-1 bg-gray-100 text-gray-950 text-start w-full py-0.5 px-1">
            <h1 class="text-base tracking-wider leading-relax">
              Americano Coffe
              <span class=""
                ><button
                  class="bg-gray-700 text-white w-5 h-5 p-1 inline-flex flex-col justify-center items-center rounded-full">
                  i
                </button></span
              >
            </h1>
            <h3 class="text-base"><span class="pl-0.5">$</span> 450</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'AvailableItems',
  setup() {
    const itemImage = ref(
      'https://images.unsplash.com/photo-1700902741852-ecf2bd2c26eb?q=80&w=2062&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    );

    return {
      itemImage,
    };
  },
};
</script>
