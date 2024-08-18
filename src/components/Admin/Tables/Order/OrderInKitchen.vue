<template>
  <section class="w-full dark:bg-gray-900 py-3 sm:py-5">
    <div class="px-4 mx-auto w-full">
      <div
        class="w-full relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <SearchFormUtility />
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
        <!-- pagination -->
        <Pagination />
      </div>
    </div>
  </section>
</template>

<script>
import order from '../../../../DB/order';
import SearchFormUtility from '../../../Utilities/FormUtility/SearchFormComp.vue';
export default {
  components: { SearchFormUtility },
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
