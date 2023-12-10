<template>
  <section class="w-full dark:bg-gray-900 py-3 sm:py-5">
    <div class="px-4 mx-auto w-full">
      <div
        class="w-full relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <ShowButton
          @click="searchFormShower()"
          class="my-3 ml-2"
          :class="{ inline: !searchForm, hidden: searchForm }"
          >Search</ShowButton
        >

        <div
          class="w-full flex-col py-3 bg-gary-800/50 lg:bg-gray-600/50 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4 relative"
          :class="{ flex: searchForm, hidden: !searchForm }">
          <div
            class="w-full lg:w-4/5 mx-auto border border-pink-500/30 rounded-lg py-5 px-5 shadow-sm shadow-white">
            <form
              class="w-full flex flex-col lg:flex-row justify-between items-center gap-y-3 gap-x-0 lg:gap-x-3 lg:gap-y-0">
              <div class="space-y-2 w-full lg:w-auto">
                <label
                  for="start_date"
                  class="text-white"
                  >Start Date</label
                >
                <input
                  type="date"
                  name=""
                  id=""
                  class="w-full focus:outline-none px-4 py-2" />
              </div>
              <div class="space-y-2 w-full lg:w-auto">
                <label
                  for="start_date"
                  class="text-white"
                  >Start Date</label
                >
                <input
                  type="date"
                  name=""
                  id=""
                  class="w-full focus:outline-none px-4 py-2" />
              </div>
              <div class="space-y-2 w-full lg:w-auto">
                <label
                  for="start_date"
                  class="text-white"
                  >Category</label
                >
                <input
                  type="text"
                  name=""
                  id=""
                  class="w-full focus:outline-none px-4 py-2" />
              </div>
              <div class="space-y-2 w-full lg:w-auto">
                <TableButton
                  class="w-full mt-auto lg:mt-8 lg:w-auto bg-blue-600 text-white"
                  >Search</TableButton
                >
              </div>
            </form>
          </div>
          <button
            @click="searchFormShower()"
            class="w-8 h-8 flex flex-col justify-center items-center absolute top-2 right-2 text-white bg-red-500 rounded-full">
            X
          </button>
        </div>

        <div class="overflow-x-auto">
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-separate border border-slate-400">
            <thead
              class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Sr No
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Order No
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Order Items
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Order_type
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Payment Methods
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Status
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Time Placed
                </th>

                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(order, index) in orderList"
                :key="index"
                class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                <th class="w-4 px-4 py-3 border border-slate-300">
                  {{ index + 1 }}
                </th>
                <td class="px-4 py-2 border border-slate-300">
                  <span
                    class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300"
                    >{{ order.order_number }}</span
                  >
                </td>
                <td class="px-4 py-2 border border-slate-300">
                  <div
                    class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                    <div class="w-full flex flex-col gap-y-2">
                      <div
                        v-for="(item, index) in order.items_ordered"
                        :key="index">
                        <div class="flex justify-start space-x-2">
                          <img
                            :src="item.image"
                            alt=""
                            class="w-6 h-6 rounded-lg" />
                          <p>{{ item.id }}</p>
                          <p>{{ item.category }}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  <div class="flex items-center">
                    {{ order.order_type }}
                  </div>
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  {{ order.payment_method }}
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  {{ order.order_status }}
                </td>

                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  {{ order.time_placed }}
                </td>

                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  Delete
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <nav
          class="flex flex-col items-start justify-between p-4 space-y-3 md:flex-row md:items-center md:space-y-0"
          aria-label="Table navigation">
          <span class="text-sm font-normal text-gray-500 dark:text-gray-400">
            Showing
            <span class="font-semibold text-gray-900 dark:text-white"
              >1-10</span
            >
            of
            <span class="font-semibold text-gray-900 dark:text-white"
              >1000</span
            >
          </span>
          <ul class="inline-flex items-stretch -space-x-px">
            <li>
              <a
                href="#"
                class="flex items-center justify-center h-full py-1.5 px-3 ml-0 text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span class="sr-only">Previous</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >1</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >2</a
              >
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                class="z-10 flex items-center justify-center px-3 py-2 text-sm leading-tight border text-primary-600 bg-primary-50 border-primary-300 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >3</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >...</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center px-3 py-2 text-sm leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >100</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center justify-center h-full py-1.5 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                <span class="sr-only">Next</span>
                <svg
                  class="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewbox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </section>
</template>

<script>
import TableButton from '../../../Utilities/actionButtons/TableButton.vue';
import Orderdata from '../../../../DB/order';
import {
  searchForm,
  searchFormShower,
} from '../../../../scripts/Admin/utility/form';
import { onUnmounted } from 'vue';
export default {
  name: 'OrderList',
  components: {
    TableButton,
  },
  setup() {
    onUnmounted(() => {
      searchForm.value = false;
    });
    const orderList = Orderdata;
    return {
      searchForm,
      orderList,
      searchFormShower,
    };
  },
};
</script>

<style></style>
