<template>
  <section class="w-full dark:bg-gray-900 py-1 sm:py-5">
    <div class="px-4 mx-auto w-full">
      <SearchFormUtility />
      <div
        class="w-full relative overflow-hidden bg-white rounded-md dark:bg-gray-800">
        <div class="layout">
          <div class="layout__inner">
            <div class="table-wrapper custom-overflowscroll">
              <table class="table">
                <thead class="table__header">
                  <tr class="table__row">
                    <th
                      scope="col"
                      class="table__header-cell">
                      Sr No
                    </th>
                    <th
                      scope="col"
                      class="table__header-cell">
                      TRANSACTION ID
                    </th>
                    <th
                      scope="col"
                      class="table__header-cell">
                      PAYMENT METHOD
                    </th>
                    <th
                      scope="col"
                      class="table__header-cell">
                      ORDER SERIAL NO
                    </th>
                    <th
                      scope="col"
                      class="table__header-cell">
                      Amount
                    </th>
                    <th
                      scope="col"
                      class="table__header-cell">
                      Date
                    </th>
                    <th
                      scope="col"
                      class="table__header-cell">
                      Action
                    </th>
                    <th class="bg-white"></th>
                  </tr>
                </thead>
                <tbody class="table__body">
                  <tr
                    v-for="(order, index) in totalOrder"
                    :key="index"
                    class="table__body-row table__body-row--hover">
                    <td class="w-4 px-4 py-2 border border-slate-300">
                      {{ index + 1 }}
                    </td>
                    <td class="table__cell table__cell--title">
                      <span class="badge">{{ order.transaction_id }}</span>
                    </td>
                    <td class="table__cell table__cell--title">
                      <span class="badge">{{ order.payment_method }}</span>
                    </td>
                    <td class="table__cell table__cell--title">
                      {{ order.order_number }}
                    </td>
                    <td class="table__cell table__cell--title">450</td>
                    <td class="table__cell table__cell--title">
                      {{ order.time_placed }}
                    </td>

                    <td class="table__cell table__cell--title">
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
          </div>
        </div>

        <!-- pagination -->
        <pagination />
      </div>
    </div>
  </section>
</template>

<script>
import { onUnmounted, ref } from 'vue';
import TableButton from '../../../Utilities/actionButtons/TableButton.vue';
import SearchFormUtility from '../../../Utilities/FormUtility/SearchFormComp.vue';
import {
  searchForm,
  searchFormShower,
} from '../../../../scripts/Admin/utility/form';

/*databases*/
import order from '../../../../DB/order';

export default {
  name: 'Transaction',
  components: {
    TableButton,
    SearchFormUtility,
  },

  setup() {
    onUnmounted(() => {
      searchForm.value = false;
    });

    const totalOrder = order;

    return {
      searchForm,
      totalOrder,
      searchFormShower,
    };
  },
};
</script>
