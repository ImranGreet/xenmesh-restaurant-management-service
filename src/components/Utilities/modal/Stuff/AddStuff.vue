<template>
  

  <FormContainerModal :ModalTitle="'Add Stuff To Run Your Business'">
    <form class="form-element-container p-5">
      <div class="px-2 py-1 w-full space-y-3">
        <label for="icon">Stuff Name</label>
        <input
          type="text"
          class="form__input--field"
          name="icon"
          placeholder="Enter Icon Name" />
      </div>
      <div class="px-2 py-1 w-full space-y-3">
        <label for="icon">Category</label>
        <input
          type="text"
          class="form__input--field"
          name="icon"
          placeholder="Enter Icon Category" />
      </div>
      <div class="px-2 py-1 w-full space-y-3">
        <label for="icon">Icon Image</label>
        <input
          type="file"
          class="form__input--file"
          name="icon" />
      </div>
      <div class="px-2 py-1 w-full">
        <authsubmitBtn>Submit</authsubmitBtn>
      </div>
    </form>
  </FormContainerModal>
</template>

<script>
export default {
  name: 'AddStuff',
};
</script>


