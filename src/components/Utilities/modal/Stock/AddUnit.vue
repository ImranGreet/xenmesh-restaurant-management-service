<template>
  <div class="w-full h-full bg-gray-200 flex items-center justify-center">
    <div
      class="w-full lg:w-2/5 bg-white border border-gray-300 rounded-md shadow-lg p-4">
      <div class="text-center text-gray-600 mb-4">
        <h2 class="text-xl font-semibold tracking-wide">Add Unit</h2>
      </div>
      <form class="space-y-4">
        <div class="space-y-2">
          <label
            for="unit"
            class="block text-sm font-medium text-gray-700">
            Item Unit
          </label>
          <input
            type="text"
            id="unit"
            placeholder="Like KG, CM, Pieces"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <button
            type="submit"
            class="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddUnit',
  setup() {
    return {};
  },
};
</script>

<style>
/* Additional styles if needed */
</style>
