<template>
  <div class="w-full h-full bg-inherit">
    <div class="w-full h-full">
      <div
        class="w-3/4 h-full mx-auto flex flex-col lg:flex-row justify-between items-center">
        <form class="w-full space-y-3 border border-gray-800/20 p-4 rounded-md">
          <div
            class="w-full space-y-3 border border-inherit text-center text-gray-600 p-2">
            <h2 class="text-xl tracking-wide">Add Item Stock</h2>
          </div>

          <div class="w-full space-y-3 border border-inherit p-3">
            <label for="category">Item Name Or Code</label>
            <input
              type="text"
              name=""
              id=""
              class="w-full px-3 py-2 focus:outline-none"
              placeholder="Enter Item Subcategory" />
          </div>

          <div class="w-full flex justify-between gap-x-3">
            <div class="w-full space-y-3 border border-inherit p-3">
              <label for="category">Item Category</label>
              <input
                type="text"
                name=""
                id=""
                class="w-full px-3 py-2 focus:outline-none border-2 border-inherit"
                placeholder="Enter Item Category" />
            </div>
            <div class="w-full space-y-3 border border-inherit p-3">
              <label for="category">Subcategory Category</label>
              <input
                type="text"
                name=""
                id=""
                class="w-full px-3 py-2 focus:outline-none border-2 border-inherit"
                placeholder="Enter Item Subcategory" />
            </div>
            <div class="w-full space-y-3 border border-inherit p-3">
              <label for="category">Unit</label>
              <input
                type="text"
                name=""
                id=""
                class="w-full px-3 py-2 focus:outline-none border-2 border-inherit"
                placeholder="Enter Item Subcategory" />
            </div>

            <div class="w-full space-y-3 border border-inherit p-3">
              <label for="category">Invoice</label>
              <input
                type="file"
                name=""
                id=""
                class="w-full px-3 py-2 focus:outline-none" />
            </div>
          </div>

          <div class="w-full space-y-3">
            <button class="w-full px-3 py-2 bg-blue-600 text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
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

<style></style>
