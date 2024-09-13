<template>
  <FormContainerModal
    :ModalTitle="'Add Permission Of Your Services'"
    :showAnimation="true">
    <form
      @submit.prevent=""
      class="w-full flex flex-col justify-between items-center gap-y-5">
      <div class="px-2 py-1 w-full space-y-3">
        <label for="icon">Permission Name</label>
        <input
          type="text"
          class="form__input--field"
          placeholder="Enter Role Name" />
      </div>
      <div class="px-2 py-1 w-full space-y-3">
        <div class="flex justify-between items-center">
          <h4>Roles</h4>
          <label class="custom-checkbox-label p-1">
            <input
              type="checkbox"
              class="custom-checkbox" />
            <span class="custom-checkbox-box"></span>
            Check All
          </label>
        </div>
        <div
          class="w-full h-48 overflow-y-auto px-2 custom-overflowscroll border border-gray-400/30 p-2 rounded-md">
          <div class="grid grid-cols-3 border border-gray-300 rounded-md">
            <label
              for="permission"
              class="custom-checkbox-label border border-gray-300 capitalize">
              <input
                type="checkbox"
                class="custom-checkbox"
                checked />
              <span class="custom-checkbox-box"></span>
            </label>
          </div>
        </div>
      </div>

      <div class="px-2 py-1 w-full">
        <authsubmitBtn>Submit</authsubmitBtn>
      </div>
    </form>
  </FormContainerModal>
</template>

<script>
export default {
  name: 'AddRole',

  setup() {
    return {};
  },
};
</script>

<style scoped>
/* Hide the default checkbox */
.custom-checkbox {
  display: none;
}

/* Style the custom checkbox container */
.custom-checkbox-label {
  display: flex;
  align-items: center;
  font-size: 1.15rem;
  cursor: pointer;
  padding: 6px;
}

/* Style the custom checkbox box */
.custom-checkbox-box {
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  position: relative;
}

/* Checkmark style */
.custom-checkbox-box::after {
  content: '';
  width: 8px;
  height: 14px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 0.2s ease;
  position: absolute;
  top: 0px;
}

/* When the checkbox is checked */
.custom-checkbox:checked + .custom-checkbox-box {
  background-color: #269b0f;
  border-color: #269b0f;
}

.custom-checkbox:checked + .custom-checkbox-box::after {
  opacity: 1;
}
</style>
