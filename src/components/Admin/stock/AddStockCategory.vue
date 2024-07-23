<template>
  <div class="w-full bg-inherit h-full">
    <div class="w-full h-full ">
      <div
        class="w-full h-full flex flex-col lg:flex-row justify-between items-center">
        <form
          class="w-full lg:w-2/5 mx-auto border border-gray-800/20 p-4 rounded-md space-y- bg-white">
          <div
            class="w-full space-y-3 border border-inherit text-center text-gray-600 p-2">
            <h2 class="text-xl tracking-wide">Add Item Category</h2>
          </div>
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
