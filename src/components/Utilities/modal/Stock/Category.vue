<template>
      <div class="w-full bg-inherit h-full">
        <div class="w-full h-full flex flex-col justify-center items-center">
          <div class="form-container p-5">
            <form class="form-element-container">
              <div
                class="w-full space-y-3 border border-inherit text-center text-gray-600 p-2">
                <formTitle>Add Item Category</formTitle>
              </div>
              <div class="w-full space-y-3 border border-inherit p-3">
                <label for="category">Item Category</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form__input--field"
                  placeholder="Enter Item Category" />
              </div>
              <div class="w-full space-y-3 border border-inherit p-3">
                <label for="category">Subcategory Category</label>
                <input
                  type="text"
                  name=""
                  id=""
                  class="form__input--field"
                  placeholder="Enter Item Subcategory" />
              </div>
    
              <div class="w-full space-y-3">
                <authsubmitBtn>Submit</authsubmitBtn>
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
    