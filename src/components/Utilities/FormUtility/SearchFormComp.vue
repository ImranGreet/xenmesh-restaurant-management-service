<template>
  <div
    class="w-full flex flex-col bg-white lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4 relative border-b-2 border-pink-800/30"
    :class="{ '': searchForm, hidden: !searchForm }">
    <div class="w-full md:w-11/12 mx-auto py-5 px-6">
      <form
        class="w-full flex flex-col lg:flex-row justify-between items-center gap-y-4 lg:gap-x-4">
        <div class="flex flex-col items-center">
          <div class="dark:bg-gray-900 rounded-lg">
            <label
              for="table-search"
              class="sr-only"
              >Search</label
            >
            <div class="relative mt-1">
              <div
                class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20">
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input
                type="text"
                class="block px-12 form__input--field"
                placeholder="Search for items" />
            </div>
          </div>
        </div>

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
          <form class="max-w-sm mx-auto">
            <label
              for="countries"
              class="block text-gray-700 mb-2 sr-only"
              >Select an option</label
            >
            <select
              id="countries"
              class="form__input--field py-2">
              <option selected>Choose a country</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>
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
    