<template>
  <section>
    <div
      :class="{
        block: itemsToBePurchased.length === 0,
        hidden: itemsToBePurchased.length > 0,
      }">
      <Noorder />
    </div>
    <section
      class="w-full dark:bg-gray-900"
      :class="{
        hidden: itemsToBePurchased.length === 0,
        block: itemsToBePurchased.length > 0,
      }">
      <div class="px-2 xl:px-4 mx-auto w-full">
        <div class="w-full relative overflow-hidden bg-white dark:bg-gray-800">
          <div
            class="overflow-x-auto max-h-[740px] overflow-y-auto custom-overflowscroll">
            <table
              class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-separate border border-slate-100">
              <thead
                class="text-xs uppercase text-white bg-blue-900/80 sticky top-0 bottom-6">
                <tr>
                  <th
                    scope="col"
                    class="px-4 py-1.5 border border-slate-300">
                    Sr No
                  </th>
                  <th
                    scope="col"
                    class="px-4 py-1.5 border border-slate-300">
                    Product Title
                  </th>
                  <th
                    scope="col"
                    class="px-4 py-1.5 border border-slate-300">
                    Quantity
                  </th>
                  <th
                    scope="col"
                    class="px-4 py-1.5 border border-slate-300">
                    Unit Prices
                  </th>
                  <th
                    scope="col"
                    class="px-4 py-1.5 border border-slate-300">
                    Line Total
                  </th>
                  <th
                    scope="col"
                    class="px-4 py-1.5 border border-slate-300">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in itemsToBePurchased"
                  :key="index"
                  class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <th class="w-4 px-4 py-3 border border-slate-300">
                    {{ Math.floor(index + 1) }}
                  </th>
                  <th
                    scope="row"
                    class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                    {{ item.title.slice(0, 10) }}
                  </th>
                  <td class="px-4 py-2 border border-slate-300">
                    <span
                      class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                      <input
                        type="number"
                        name=""
                        id=""
                        :value="item.quantity"
                        class="w-full focus:outline-none px-2 py-1 border border-inherit rounded-sm" />
                    </span>
                  </td>
                  <td
                    class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                    <div class="flex items-center">
                      {{ item.price }}
                    </div>
                  </td>
                  <td
                    class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                    {{ item.price * item.quantity }}
                  </td>
                  <td
                    class="px-4 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300 text-center flex justify-center items-center">
                    <button
                      @click="removeItemFromOrderList(item.id)"
                      class="border border-inherit p-1 rounded-md">
                      <XMarkIcon class="w-4 h-4 text-pink-600" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import { XMarkIcon } from '@heroicons/vue/24/outline';
import Noorder from './Noorder.vue';
import {
  itemsToBePurchased,
  removeItemFromOrderList,
  increaseItemQuantity,
} from '../../../../scripts/Admin/Order/createOrder';

export default {
  name: 'OrderedList',
  components: {
    XMarkIcon,
    Noorder,
  },
  setup() {
    return {
      itemsToBePurchased,
      removeItemFromOrderList,
      increaseItemQuantity,
    };
  },
};
</script>

<style>
input[type='number'] {
  -moz-appearance: textfield;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
