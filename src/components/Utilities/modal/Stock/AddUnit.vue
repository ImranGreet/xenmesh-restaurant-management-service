<template>
 

  <FormContainerModal :ModalTitle="'Add Unit'">
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
          class="form__input--field" />
      </div>

      <div>
        <button
          type="submit"
          class="form-submit-btn">
          Submit
        </button>
      </div>
    </form>
  </FormContainerModal>

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
