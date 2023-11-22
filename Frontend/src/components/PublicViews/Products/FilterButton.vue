<template>
  <button
    class="max-w-[150px] bg-slate-100 lg:hover:bg-pink-500/40 p-2 rounded-md shadow-sm">
    <div
      class="w-11/12 mx-auto h-full flex-col flex justify-between items-center gap-y-2">
      <div class="w-full flex flex-col justify-center items-center">
        <img
          :src="categoryInformation.poster"
          alt=""
          class="w-full rounded-full" />
      </div>
      <p class="text-sm font-semibold text-gray-800 tracking-tight">
        {{ categoryInformation.title }}
      </p>
    </div>
  </button>
</template>

<script>
import { ref } from "vue";
export default {
  name: "FilterButton",

  setup() {
    const categoryInformation = ref({
      title: "Vegetables and spices",
      poster:
        "https://images.unsplash.com/photo-1607532941433-304659e8198a?q=80&w=1978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    });
    return {
      categoryInformation,
    };
  },
};
</script>
