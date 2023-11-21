<template>
  <div
    class="w-full bg-inherit sapce-y-2 max-w-2xl shadow-xl shadow-slate-200 bg-lime-200 rounded-xl overflow-hidden">
    <div class="w-full flex justify-around items-center px-4 h-40">
      <div class="py-2 space-y-2">
        <div class="w-full flex justify-between items-center gap-x-0.5">
          <h1 class="text-lg text-red-500 tracking-wide font-semibold">
            {{ offerInformation.title }}
          </h1>
        </div>
        <p class="text-sm tracking-wide leading-relaxed">
          Flat
          <span class="text-red-600"
            >{{ offerInformation.percentage }}
            <span class="text-red-600 -ml-0.5">% </span>
          </span>
          on
          {{ offerInformation.category }}
        </p>
        <p
          class="p-1 border border-gray-700 rounded-2xl text-center shadow-lg shadow-gray-400/25">
          Order Now
        </p>
      </div>

      <div class="w-1/3 flex flex-col justify-center items-center rounded-t-xl">
        <img
          :src="offerInformation.image"
          alt=""
          class="w-full h-24 rounded-t-xl object-cover" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "Offer",

  setup() {
    const offerInformation = ref({
      title: "Pear Salad Drinks",
      image:
        "https://images.unsplash.com/photo-1506395308321-904a71783d60?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      percentage: 5,
      category: "drinks",
    });
    return {
      offerInformation,
    };
  },
};
</script>
