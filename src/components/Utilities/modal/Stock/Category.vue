<template>
  <div class="w-full h-full bg-gray-200 flex items-center justify-center">
    <div class="w-full max-w-lg bg-white border border-gray-300 rounded-md shadow-lg p-5">
      <form class="space-y-4">
        <div class="text-center text-gray-600 mb-4">
          <h2 class="text-xl font-semibold">Add Item Category</h2>
        </div>
        <div class="space-y-3">
          <div>
            <label for="category" class="block text-sm font-medium text-gray-700">
              Item Category
            </label>
            <input
              type="text"
              id="category"
              placeholder="Enter Item Category"
              class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div>
            <label for="subcategory" class="block text-sm font-medium text-gray-700">
              Subcategory Category
            </label>
            <input
              type="text"
              id="subcategory"
              placeholder="Enter Item Subcategory"
              class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>
        <div>
          <button type="submit" class="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddStock',
  setup() {
    return {};
  },
};
</script>

<style>
/* Additional styles if needed */
</style>
