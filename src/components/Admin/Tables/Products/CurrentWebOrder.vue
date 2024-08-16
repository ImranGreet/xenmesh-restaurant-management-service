<template>
  <section class="w-full dark:bg-gray-900 py-3 sm:py-5">
    <div class="px-4 mx-auto w-full">
      <div
        class="w-full relative overflow-auto bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <div
          class="overflow-auto max-h-[450px] min-h-[220px] table-container rounded-t-lg">
          <table
            class="w-full text-sm h-full text-left text-gray-500 dark:text-gray-400 border border-slate-100">
            <caption
              class="caption-top py-2 bg-gray-800 overflow-auto text-white px-2 text-start text-xl">
              Table 2: Recent Customer Order from Web
            </caption>

            <thead
              class="text-xs uppercase sticky top-0 bg-lime-600 text-white dark:bg-gray-700 dark:text-gray-400 overflow-hidden">
              <tr>
                <th
                  scope="col"
                  class="px-4 py-1 border border-slate-300 rounded-tl-lg">
                  Sr No
                </th>
                <th
                  scope="col"
                  class="px-4 py-1 border border-slate-300">
                  Order Number
                </th>
                <th
                  scope="col"
                  class="px-4 py-1 border border-slate-300">
                  Transaction Id
                </th>
                <th
                  scope="col"
                  class="px-4 py-1 border border-slate-300">
                  Customer Name
                </th>
                <th
                  scope="col"
                  class="px-4 py-1 border border-slate-300">
                  Order Items
                </th>
                <th
                  scope="col"
                  class="px-4 py-1 border border-slate-300">
                  Payment Method
                </th>
                <th
                  scope="col"
                  class="px-4 py-1 border border-slate-300 rounded-rl-lg">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(webOrder, index) in orderInWeb"
                :key="index"
                class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                <td class="w-8 px-4 py-8 border border-slate-300">
                  {{ index + 1 }}
                </td>
                <td
                  scope="row"
                  class="flex items-center py-8 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {{ webOrder.order_number }}
                </td>
                <td class="px-4 py-2 border border-slate-300">
                  <span
                    class="bg-primary-100 text-blue-600 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300"
                    >{{ webOrder.transaction_id }}</span
                  >
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  <div class="flex items-center">
                    <i class="w-4 h-4 mr-2 text-gray-700"><UserCircleIcon /></i>
                    {{ webOrder.customer_name }}
                  </div>
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  <div class="flex flex-col items-start gap-y-2">
                    <div
                      v-for="(items, index) in webOrder.items_ordered"
                      :key="index">
                      <div class="w-full flex gap-x-2">
                        <img
                          :src="items.image"
                          alt=""
                          loading="lazy"
                          class="w-10 h-10 object-cover rounded-md shadow-md" />
                        <h4>{{ items.quantity }}</h4>
                      </div>
                    </div>
                  </div>
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300 capitalize">
                  {{ webOrder.payment_method }}
                </td>
                <td
                  class="px-4 py-10 font-medium text-gray-900 whitespace-nowrap dark:text-white flex justify-start items-center gap-x-2 capitalize">
                  <button>
                    <EyeIcon class="w-6 h-6 bg-blue-300 rounded-md p-1" />
                  </button>
                  <button>
                    <PencilIcon class="w-6 h-6 bg-red-200 p-1 rounded-md" />
                  </button>
                  <button>
                    <TrashIcon class="w-6 h-6 bg-green-300 p-1 rounded-md" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import order from '../../../../DB/order';
import {
  EyeIcon,
  PencilIcon,
  TrashIcon,
  UserCircleIcon,
} from '@heroicons/vue/24/outline';
export default {
  name: 'CurrentWebOrder',
  components: { EyeIcon, PencilIcon, TrashIcon, UserCircleIcon },
  setup() {
    const orderInWeb = order.filter(webItem => webItem.order_type === 'web');

    return {
      orderInWeb,
    };
  },
};
</script>

<style></style>
