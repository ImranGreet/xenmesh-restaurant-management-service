<template>
  <div class="bg-inherit px-3 py-2 w-full">
    <div
      class="w-full md:w-4/5 lg:3/4 xl:w-1/2 mx-auto border border-gray-800/25 rounded-lg bg-white p-5">
      <formTitle>Add Stuff To Run Your Business</formTitle>
      <form
        class="w-full flex flex-col justify-between items-center gap-y-5 shadow-xl shadow-gray-300 p-5">
        <div class="px-2 py-1 w-full space-y-3">
          <label for="icon">Icon Name</label>
          <input
            type="text"
            class="w-full focus:outline-none text-start placeholder:text-gray-950 bg-inherit border border-gray-600 rounded-lg px-4 py-2"
            name="icon"
            placeholder="Enter Icon Name" />
        </div>
        <div class="px-2 py-1 w-full space-y-3">
          <label for="icon">Category</label>
          <input
            type="text"
            class="w-full focus:outline-none text-start placeholder:text-gray-950 bg-inherit border border-gray-600 rounded-lg px-4 py-2"
            name="icon"
            placeholder="Enter Icon Category" />
        </div>
        <div class="px-2 py-1 w-full space-y-3">
          <label for="icon">Icon Image</label>
          <input
            type="file"
            class="w-full focus:outline-none text-start placeholder:text-gray-950 bg-inherit border border-gray-600 rounded-lg px-4 py-2"
            name="icon" />
        </div>
        <div class="px-2 py-1 w-full">
          <authsubmitBtn>Submit</authsubmitBtn>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddStuff',
  setup() {
    return {};
  },
};
</script>
