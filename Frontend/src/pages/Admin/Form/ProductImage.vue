<template>
  <div class="bg-inherit px-4 py-2 w-full">
    <div class="py-4 w-full flex justify-between items-center">
      <div class="bg-yellow-600 w-4 h-3"></div>
      <h1 class="text-2xl leading-relaxed tracking-wider">Product Thumbnail</h1>
    </div>
    <div
      class="bg-gray-500 w-full h-36 flex flex-col justify-center items-center">
      <input
        type="file"
        name=""
        id="" />
    </div>

    <div>
      <div class="py-4 flex justify-between items-center w-full">
        <div class="bg-yellow-600 w-4 h-3"></div>
        <h1 class="text-2xl leading-relaxed tracking-wider">
          Product Thumbnail
        </h1>
      </div>

      <div class="flex justify-between items-center w-full">
        <h2 class="text-lg">File Titles</h2>
        <h3 class="text-lg tracking-wider">Thumbnail</h3>
      </div>
      <div>
        <div
          v-for="Thumbnail in productThumbnail"
          :key="Thumbnail.id">
          <img
            :src="Thumbnail.image"
            alt=""
            class="w-48 h-24" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'AddImage',
  setup() {
    const productThumbnail = ref([
      {
        id: 1,
        image:
          'https://images.unsplash.com/photo-1533606117812-0783e8e690f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        title:
          'Utilities for controlling whether table borders should collapse or be separated.',
      },
    ]);
    return {
      productThumbnail,
    };
  },
};
</script>
