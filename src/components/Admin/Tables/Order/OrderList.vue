<template>
  <section class="w-full dark:bg-gray-900 py-3 sm:py-5">
    <div class="px-4 mx-auto w-full">
      <div
        class="w-full relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <SearchFormUtility/>

       

        <div
          class="relative overflow-auto min-h-[220px] max-h-[640px] table-container rounded-t-lg bg-white z-50">
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-separate border border-slate-400">
            <thead
              class="text-xs text-white sticky top-0 bg-lime-600 uppercase dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th class="bg-white"></th>
                <th
                  scope="col"
                  class="px-4 py-1 border border-slate-300">
                  Sr No
                </th>
                <th
                  scope="col"
                  class="px-4 py-1 border border-slate-300">
                  Order No
                </th>
                <th
                  scope="col"
                  class="px-4 py-1 border border-slate-300">
                  Order Items
                </th>
                <th
                  scope="col"
                  class="px-4 py-1 border border-slate-300">
                  Order_type
                </th>
                <th
                  scope="col"
                  class="px-4 py-1 border border-slate-300">
                  Payment Methods
                </th>
                <th
                  scope="col"
                  class="px-4 py-1 border border-slate-300">
                  Status
                </th>
                <th
                  scope="col"
                  class="px-4 py-1 border border-slate-300">
                  Time Placed
                </th>

                <th
                  scope="col"
                  class="px-4 py-1 border border-slate-300">
                  Action
                </th>
                <th class="bg-white"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(order, index) in orderList"
                :key="index"
                class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                <th></th>
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
                  <div class="flex justify-center items-center gap-x-2">
                    <button class="text-gray-900">
                      <PencilSquareIcon class="inline-block w-4 h-4" />
                    </button>
                    <button class="text-green-800">
                      <ShieldCheckIcon class="inline-block w-4 h-4" />
                    </button>
                    <button class="text-pink-600">
                      <TrashIcon class="inline-block w-4 h-4" />
                    </button>
                  </div>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <!-- pagination -->
        <Pagination/>
      </div>
    </div>
  </section>
</template>

<script>
import TableButton from '../../../Utilities/actionButtons/TableButton.vue';
import SearchFormUtility from "../../../Utilities/FormUtility/SearchFormComp.vue"
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
    SearchFormUtility
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
