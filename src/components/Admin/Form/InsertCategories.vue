<template>
  <div class="layout__full-height flex-center flex-col bg-gray-100/60 p-6">
    <div class="modal__container">
      <formTitle>Add Stuff To Run Your Business</formTitle>
      <form
        @submit.prevent=""
        class="space-y-4 form-element-container">
        <div class="px-2 py-1 w-full space-y-3">
          <label
            for="icon"
            class="form-label"
            >Icon Name</label
          >
          <input
            type="text"
            id="icon"
            class="form__input--field"
            placeholder="Enter Icon Name" />
        </div>

        <div class="px-2 py-1 w-full space-y-3">
          <label
            for="category"
            class="form-label"
            >Category</label
          >
          <input
            type="text"
            id="category"
            class="form__input--field"
            placeholder="Enter Icon Category" />
        </div>

        <div class="px-2 py-1 w-full space-y-3">
          <label
            for="icon-image"
            class="form-label"
            >Icon Image</label
          >
          <input
            type="file"
            id="icon-image"
            class="form__input--file" />
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
