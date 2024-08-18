<template>
  <div
    class="w-full flex flex-col bg-white lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4 relative border-b-2 border-pink-800/30">
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
        <div class="w-full lg:w-auto z-[600]">
          <Menu
            as="div"
            class="relative inline-block text-left">
            <div>
              <MenuButton
                class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                Stocks
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
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >Add Category</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >Add Stock</a
                    >
                  </MenuItem>
                  <MenuItem v-slot="{ active }">
                    <a
                      href="#"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block px-4 py-2 text-sm',
                      ]"
                      >Add Unit</a
                    >
                  </MenuItem>
                  <form
                    method="POST"
                    action="#">
                    <MenuItem v-slot="{ active }">
                      <button
                        type="submit"
                        :class="[
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block w-full px-4 py-2 text-left text-sm',
                        ]">
                        Sign out
                      </button>
                    </MenuItem>
                  </form>
                </div>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </form>
    </div>
  </div>
</template>
    
<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/20/solid';
</script>

    