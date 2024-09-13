<template>
  <section class="w-full dark:bg-gray-900 py-3 sm:py-5">
    <div class="px-4 mx-auto w-full">
      <SearchFormUtility  />
      <div
        class="w-full relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <div class="layout">
          <div class="layout__inner">
            <div class="table-wrapper custom-overflowscroll">
              <table class="table">
                <thead class="table__header">
                  <tr class="table__row">
                    <th class="bg-white"></th>
                    <th
                      scope="col"
                      class="table__header-cell">
                      Sr No
                    </th>
                    <th
                      scope="col"
                      class="table__header-cell">
                      Category
                    </th>
                    <th
                      scope="col"
                      class="table__header-cell">
                      Amount
                    </th>
                    <th
                      scope="col"
                      class="table__header-cell">
                      Payment Methods
                    </th>
                    <th
                      scope="col"
                      class="table__header-cell">
                      Vendor
                    </th>
                    <th
                      scope="col"
                      class="table__header-cell">
                      Currency
                    </th>
                    <th
                      scope="col"
                      class="table__header-cell">
                      Description
                    </th>
                    <th
                      scope="col"
                      class="table__header-cell">
                      Recipet Attach
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
                <tbody>
                  <tr
                    v-for="(expense, index) in expensesToShow"
                    :key="expense.id"
                    class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <th></th>
                    <th class="w-4 px-4 py-3 border border-slate-300">
                      {{ index + 1 }}
                    </th>
                    <td class="px-4 py-2 border border-slate-300">
                      <span class="badge">{{ expense.category }}</span>
                    </td>

                    <td class="px-4 py-2 border border-slate-300">
                      <span class="badge">{{ expense.amount }}</span>
                    </td>
                    <td class="table__cell table__cell--title">
                      <div class="flex items-center">
                        {{ expense.paymentMethod }}
                      </div>
                    </td>
                    <td class="table__cell table__cell--title">
                      {{ expense.vendor }}
                    </td>
                    <td class="table__cell table__cell--title">
                      {{ expense.currency }}
                    </td>
                    <td class="table__cell table__cell--title">
                      <div class="flex items-center">
                        {{ expense.description }}
                      </div>
                    </td>
                    <td class="table__cell table__cell--title">
                      <span v-if="expense.receiptAttached == true">Yes</span>
                      <span v-else>No</span>
                    </td>
                    <td class="px-4 py-2 border border-slate-300">
                      {{ expense.date }}
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
        <nav
          class="pagination"
          aria-label="Table navigation">
          <span class="pagination__info">
            Showing
            <span class="pagination__info--highlight">1-10</span>
            of
            <span class="pagination__info--highlight">1000</span>
          </span>
          <ul class="pagination__list">
            <li>
              <a
                href="#"
                class="pagination__prev pagination__prev-next">
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
                class="pagination__item"
                >1</a
              >
            </li>
            <li>
              <a
                href="#"
                class="pagination__item"
                >2</a
              >
            </li>
            <li>
              <a
                href="#"
                aria-current="page"
                class="pagination__item pagination__item--active"
                >3</a
              >
            </li>
            <li>
              <a
                href="#"
                class="pagination__item"
                >...</a
              >
            </li>
            <li>
              <a
                href="#"
                class="pagination__item"
                >100</a
              >
            </li>
            <li>
              <a
                href="#"
                class="pagination__next pagination__prev-next">
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
import { onMounted, onUnmounted, ref } from 'vue';
import TableButton from '../../../Utilities/actionButtons/TableButton.vue';
import SearchFormUtility from '../../../Utilities/FormUtility/SearchFormComp.vue';
import {
  searchForm,
  searchFormShower,
} from '../../../../scripts/Admin/utility/form';

import Expenses from '../../../../DB/expense';

import {
  currentDate as startDate,
  lastdate as endDate,
} from '../../../../scripts/Global/DateYearMonth/date';

export default {
  name: 'Expenses',
  components: {
    TableButton,
    SearchFormUtility,
  },
  setup() {
    let expensesToShow = ref([]);

    onUnmounted(() => {
      searchForm.value = false;
    });

    onMounted(() => {
      expensesToShow.value = Expenses;
    });

    let expenses = Expenses;

    const paymentMethods = new Set(expenses.map(cat => cat.paymentMethod));
    const arrayofMethods = Array.from(paymentMethods);

    const selectedPaymentOption = ref('');

    const currentDate = ref(startDate);
    const lastdate = ref(endDate);

    const filterProducts = function (startDate, endDate, paymentMethod) {
      const filteredProducts = expenses.filter(expense => {
        const isWithinDateRange =
          expense.date >= startDate && expense.date <= endDate
            ? expense.paymentMethod.toLowerCase() ===
              paymentMethod.toLowerCase()
            : true;
        const hasSelectedPaymentMethod =
          !selectedPaymentOption.value ||
          expense.paymentMethod.toLowerCase() ===
            selectedPaymentOption.value.toLowerCase();

        return isWithinDateRange && hasSelectedPaymentMethod;
      });

      expensesToShow.value = filteredProducts;
    };
    const submitForm = function () {
      filterProducts(
        currentDate.value,
        lastdate.value,
        selectedPaymentOption.value,
      );
    };

    return {
      searchForm,
      expenses,
      currentDate,
      lastdate,
      expensesToShow,
      startDate,
      endDate,
      /*categories*/
      arrayofMethods,
      selectedPaymentOption,
      searchFormShower,
      filterProducts,
      submitForm,
    };
  },
};
</script>

<style>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.25s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
