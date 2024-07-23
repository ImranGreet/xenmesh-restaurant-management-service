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
                class="text-xs uppercase text-white bg-lime-600 overflow-hidden sticky top-0 bottom-6">
                <tr>
                  <th
                    scope="col"
                    class="px-4 py-1 border border-slate-300">
                    Sr No
                  </th>
                  <th
                    scope="col"
                    class="px-4 py-1 border border-slate-300">
                    Product Title
                  </th>
                  <th
                    scope="col"
                    class="px-4 py-1 border border-slate-300">
                    Quantity
                  </th>
                  <th
                    scope="col"
                    class="px-4 py-1 border border-slate-300">
                    Unit Prices
                  </th>
                  <th
                    scope="col"
                    class="px-4 py-1 border border-slate-300">
                    Line Total
                  </th>
                  <th
                    scope="col"
                    class="px-4 py-1 border border-slate-300">
                    Delete
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(item, index) in itemsToBePurchased"
                  :key="index"
                  class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                  <th class="w-4 px-4 py-2 border border-slate-300">
                    {{ Math.floor(index + 1) }}
                  </th>
                  <th
                    scope="row"
                    class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                    {{ item.title.slice(0, 10) }}
                  </th>
                  <td class="px-4 py-2 border border-slate-300">
                    <div class="w-full flex gap-x-2">
                      <button
                        @click="increaseItemQuantity(item.id)"
                        class="border border-inherit rounded-md shadow-md p-0.5 w-4 h-4 flex flex-col justify-center items-center bg-lime-600 text-white">
                        +
                      </button>
                      <div
                        class="w-4 h-4 flex flex-col justify-center items-center">
                        <p class="p-0.5 text-sm">{{ item.quantity }}</p>
                      </div>
                      <button
                        @click="decreaseItemQuantity(item.id)"
                        class="border border-inherit rounded-md shadow-md p-0.5 w-4 h-4 flex flex-col justify-center items-center bg-rose-600 text-white"
                        :class="{
                          hidden: item.quantity < 2,
                          inline: item.quantity >= 2,
                        }">
                        -
                      </button>
                    </div>
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
                    class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300 text-center flex justify-center items-center">
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
  decreaseItemQuantity,
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
      decreaseItemQuantity,
    };
  },
};
</script>

<style scoped>
input[type='number'] {
  -moz-appearance: textfield;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
