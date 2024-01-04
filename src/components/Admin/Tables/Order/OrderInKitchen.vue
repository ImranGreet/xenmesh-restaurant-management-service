<template>
  <section class="w-full dark:bg-gray-900 py-3 sm:py-5">
    <div class="px-4 mx-auto w-full">
      <div
        class="w-full relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <div
          class="w-full flex flex-col px-4 py-3 bg-gray-400/50 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4">
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
                  class="block px-12 py-2 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:outline-none"
                  placeholder="Search for items" />
              </div>
            </div>
          </div>

          <div
            class="flex flex-col xl:flex-row gap-x-4 text-white bg-blue-700 px-4 py-1.5 rounded-lg">
            <h5 class="space-x-1">
              <span>In Queues</span>
              <span>:</span>
              <span> 123456</span>
            </h5>
          </div>
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
                  Ordered Items
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Order Number
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Order Type
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Served BY
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Transaction Id
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Payment Methods
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Customer Name
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Order Palced In
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
                v-for="(order, index) in orderInKitchen"
                :key="index"
                class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                <th class="w-4 px-4 py-3 border border-slate-300">
                  {{ index + 1 }}
                </th>
                <th
                  scope="row"
                  class="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  <div class="flex gap-x-1">
                    <div
                      class="w-full flex flex-col justify-center items-center"
                      v-for="(itemImage, index) in order.items_ordered"
                      :key="index">
                      <img
                        :src="itemImage.image"
                        alt="iMac Front Image"
                        class="w-auto h-8 mr-3" />
                    </div>
                  </div>
                </th>
                <td class="px-4 py-2 border border-slate-300">
                  <span
                    class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300"
                    >{{ order.order_number }}</span
                  >
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  <div class="flex items-center">
                    <div
                      class="inline-block w-4 h-4 mr-2 bg-red-700 rounded-full"></div>
                    {{ order.order_type }}
                  </div>
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  {{ order.server_name }}
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  {{ order.transaction_id }}
                </td>

                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  <div class="flex items-center">
                    {{ order.payment_method }}
                  </div>
                </td>
                <td class="px-4 py-2 border border-slate-300">
                  {{ order.customer_name }}
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  {{
                    new Date(order.time_placed).getDate() +
                    '-' +
                    new Date(order.time_placed).getMonth() +
                    '-' +
                    new Date(order.time_placed).getFullYear()
                  }}
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
import order from '../../../../DB/order';
export default {
  name: 'Kitchen Order',
  setup() {
    const orderInKitchen = order.filter(
      item => item.order_status === 'kitchen',
    );

    return {
      orderInKitchen,
    };
  },
};
</script>

<style></style>
