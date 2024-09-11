<template>
  <div
    class="w-full flex flex-col bg-white lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4 relative border-b-2 border-pink-800/30">
    <div class="w-full md:w-11/12 mx-auto py-5 px-6">
      <form
        @submit.prevent=""
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

        <div class="w-full lg:w-auto z-[600]">
          <Menu
            as="div"
            class="relative inline-block text-left">
            <div>
              <MenuButton
                v-if="productUtilityContainer"
                class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-none">
                Product Utility
                <ChevronDownIcon
                  class="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true" />
              </MenuButton>

              <MenuButton
                v-if="stockUtilityContainer"
                class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:outline-none">
                Stock Utility
                <ChevronDownIcon
                  class="-mr-1 h-5 w-5 text-gray-400"
                  aria-hidden="true" />
              </MenuButton>
            </div>

            <transition
              enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95"
              enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75"
              leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95">
              <MenuItems
                class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div class="py-1">
                  <div>
                    <MenuItem
                      v-slot="{ active }"
                      v-if="productUtilityContainer">
                      <a
                        @click="showModalContainer('AddProduct')"
                        href="#"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Add Product</a
                      >
                    </MenuItem>
                    <MenuItem
                      v-slot="{ active }"
                      v-if="productUtilityContainer">
                      <a
                        @click="showModalContainer('AddProductCategory')"
                        href="#"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Add Product Category</a
                      >
                    </MenuItem>
                    <MenuItem
                      v-slot="{ active }"
                      v-if="stockUtilityContainer">
                      <a
                      @click="showModalContainer('AddStock')"
                        href="#"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm',
                        ]"
                        >Add Stock</a
                      >
                    </MenuItem>
                  </div>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
        <div>
          <button
            class="form__input--field"
            v-if="expenseReport"
            @click="showModalContainer('ExpenseTypes')">
            Expensess Types
          </button>
        </div>
      </form>
    </div>
  </div>
</template>



<script>
import { showModalContainer } from '../../../scripts/public/modal/modal';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
export default {
  name: 'SearchForm',
  components: { Menu, MenuButton, MenuItem, MenuItems, ChevronDownIcon },
  props: {
    expenseReport: {
      type: Boolean,
      Required: false,
    },
    productUtilityContainer: {
      type: Boolean,
      Required: false,
    },
    stockUtilityContainer: {
      type: Boolean,
      Required: false,
    },
  },
  setup(props) {
    const { expenseReport, productUtilityContainer, stockUtilityContainer } =
      props;
    return {
      showModalContainer,
      expenseReport,
      productUtilityContainer,
      stockUtilityContainer,
    };
  },
};
</script>