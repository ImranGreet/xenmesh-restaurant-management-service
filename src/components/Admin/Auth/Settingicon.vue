<template>
  <div class="bg-gray-100 px-4 py-6 w-full h-full flex justify-center items-center">
    <div class="w-full md:w-4/5 lg:w-3/4 xl:w-1/2 mx-auto border border-gray-300 rounded-lg bg-white p-6 shadow-lg">
      <FormHeadLine class="text-2xl font-semibold text-gray-700 mb-6">Add Setting Image</FormHeadLine>
      <form
        @submit.prevent="addSetting()"
        class="w-full flex flex-col gap-y-6"
      >
        <div class="w-full">
          <label for="icon" class="block text-gray-600 font-medium mb-2">Icon Name</label>
          <input
            type="text"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-200 transition duration-200"
            name="icon"
            placeholder="Enter Icon Name"
          />
        </div>
        <div class="w-full">
          <label for="category" class="block text-gray-600 font-medium mb-2">Category</label>
          <input
            type="text"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-200 transition duration-200"
            name="category"
            placeholder="Enter Icon Category"
          />
        </div>
        <div class="w-full">
          <label for="iconImage" class="block text-gray-600 font-medium mb-2">Icon Image</label>
          <input
            type="file"
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring focus:ring-indigo-200 transition duration-200"
            name="iconImage"
          />
        </div>
        <div class="w-full">
          <authsubmitBtn >Submit</authsubmitBtn>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import FormHeadLine from './FormHeadLine.vue';

const addSetting = () => {
  console.log('Settings');
};
</script>
