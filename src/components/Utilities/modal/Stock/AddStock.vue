<template>
  <FormContainerModal :ModalTitle="'Add Item To Stock'">
    <form
      @submit.prevent
      class="space-y-4">
      <div>
        <label
          for="item_name"
          class="block text-sm font-medium text-gray-700">
          Item Name Or Code
        </label>
        <input
          type="text"
          id="item_name"
          placeholder="Enter Item Name or Code"
          class="mt-1 form__input--field" />
      </div>

      <div class="flex space-x-4">
        <div class="w-1/3">
          <label
            for="category"
            class="block text-sm font-medium text-gray-700">
            Item Category
          </label>
          <input
            type="text"
            id="category"
            placeholder="Enter Item Category"
            class="mt-1 form__input--field" />
        </div>
        <div class="w-1/3">
          <label
            for="subcategory"
            class="block text-sm font-medium text-gray-700">
            Subcategory
          </label>
          <input
            type="text"
            id="subcategory"
            placeholder="Enter Item Subcategory"
            class="mt-1 form__input--field" />
        </div>
        <div class="w-1/3">
          <label
            for="unit"
            class="block text-sm font-medium text-gray-700">
            Unit
          </label>
          <input
            type="text"
            id="unit"
            placeholder="Enter Unit"
            class="mt-1 form__input--field" />
        </div>
      </div>

      <div>
        <label
          for="invoice"
          class="block text-sm font-medium text-gray-700">
          Invoice
        </label>
        <input
          type="file"
          id="invoice"
          class="mt-1 form__input--field" />
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
  name: 'AddStock',
};
</script>
