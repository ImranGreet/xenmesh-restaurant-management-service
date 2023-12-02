<template>
  <div class="bg-inherit px-3 py-2 w-full">
    <div
      class="w-full md:w-4/5 lg:3/4 xl:w-1/2 mx-auto border border-gray-600/25 rounded-lg bg-white p-5">
      <FormHeadLine>Shop Logo And Name</FormHeadLine>
      <form
        class="w-full flex flex-col justify-between items-center gap-y-5 shadow-sm shadow-gray-300 p-5">
        <div
          class="px-2 w-full space-y-3 border border-gray-200 py-3 rounded-md">
          <label for="icon">Category</label>
          <input
            type="text"
            class="w-full focus:outline-none text-start placeholder:text-gray-950 bg-inherit border border-gray-200 rounded-lg px-4 py-2"
            name="icon"
            placeholder="Enter Icon Category" />
        </div>
        <div
          class="px-2 w-full space-y-3 border border-gray-200 py-3 rounded-md">
          <label for="icon">Icon Image</label>
          <input
            type="file"
            class="w-full focus:outline-none text-start placeholder:text-gray-950 bg-inherit border border-gray-200 rounded-lg px-4 py-2"
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
import FormHeadLine from './FormHeadLine.vue';
export default {
  name: 'Settingicon',
  components: { FormHeadLine },
  setup() {
    return {};
  },
};
</script>

<style></style>
