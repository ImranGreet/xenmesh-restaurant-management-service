<template>
      <div
        class="w-full flex flex-col bg-white lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4 relative border-b-2 border-pink-800/30"
        :class="{ '': searchForm, hidden: !searchForm }">
        <div class="w-full md:w-11/12 mx-auto py-5 px-6">
          <form
            class="w-full flex flex-col lg:flex-row justify-between items-center gap-y-4 lg:gap-x-4">
            <div class="w-full lg:w-auto">
              <label
                for="start_date"
                class="block text-gray-700 mb-2 sr-only">
                Start Date
              </label>
              <input
                type="date"
                id="start_date"
                class="form__input--field" />
            </div>
            <div class="w-full lg:w-auto">
              <label
                for="end_date"
                class="block text-gray-700 mb-2 sr-only">
                End Date
              </label>
              <input
                type="date"
                id="end_date"
                class="form__input--field" />
            </div>
            <div class="w-full lg:w-auto">
              <label
                for="category"
                class="block text-gray-700 mb-2 sr-only">
                Category
              </label>
              <input
                type="text"
                id="category"
                class="form__input--field" />
            </div>
            
          </form>
        </div>
      </div>
    </template>
    
    <script>
    export default {
      data() {
        return {
          searchForm: true, // Toggle the form visibility
        };
      },
      methods: {
        searchFormShower() {
          this.searchForm = !this.searchForm;
        },
      },
    };
    </script>
    