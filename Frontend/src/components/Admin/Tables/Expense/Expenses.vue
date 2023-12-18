<template>
  <section class="w-full dark:bg-gray-900 py-3 sm:py-5">
    <div class="px-4 mx-auto w-full">
      <div
        class="w-full relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <ShowButton
          @click="searchFormShower()"
          class="my-3 ml-2 tracking-widest"
          :class="{ inline: !searchForm, hidden: searchForm }"
          >Filter</ShowButton
        >

        <div
          class="w-full flex-col py-3 bg-gary-800/50 lg:bg-gray-600/50 space-y-3 lg:flex-row lg:items-center lg:justify-between lg:space-y-0 lg:space-x-4 relative"
          :class="{ flex: searchForm, hidden: !searchForm }">
          <div
            class="w-full lg:w-4/5 mx-auto border border-pink-500/30 rounded-lg py-5 px-5 shadow-sm shadow-white">
            <form
              @submit.prevent="submitForm()"
              class="w-full flex flex-col lg:flex-row justify-between items-center gap-y-3 gap-x-0 lg:gap-x-3 lg:gap-y-0">
              <div class="space-y-2 w-full lg:w-auto">
                <label
                  for="start_date"
                  class="text-white"
                  >Start Date</label
                >
                <input
                  v-model="currentDate"
                  type="date"
                  name=""
                  id=""
                  min="2023-01-01"
                  max="2024-12-31"
                  
                  class="w-full focus:outline-none px-4 py-2" />
              </div>
              <div class="space-y-2 w-full lg:w-auto">
                <label
                  for="start_date"
                  class="text-white"
                  >End Date</label
                >
                <input
                  v-model="lastdate"
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
                <select
                  v-model="selectedPaymentOption"
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                  <option selected>Select a method</option>
                  <option
                    :value="method"
                    v-for="(method, index) in arrayofMethods"
                    :key="index">
                    {{ method }}
                  </option>
                </select>
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
                  Category
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Amount
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Payment Methods
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Vendor
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Currency
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Description
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Recipet Attach
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Date
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
                v-for="(expense, index) in expensesToShow"
                :key="expense.id"
                class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                <th class="w-4 px-4 py-3 border border-slate-300">
                  {{ index + 1 }}
                </th>
                <td class="px-4 py-2 border border-slate-300">
                  <span
                    class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300"
                    >{{ expense.category }}</span
                  >
                </td>

                <td class="px-4 py-2 border border-slate-300">
                  <span
                    class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300"
                    >{{ expense.amount }}</span
                  >
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  <div class="flex items-center">
                    <div
                      class="inline-block w-4 h-4 mr-2 bg-red-700 rounded-full"></div>
                    {{ expense.paymentMethod }}
                  </div>
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  {{ expense.vendor }}
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  {{ expense.currency }}
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  <div class="flex items-center">
                    {{ expense.description }}
                  </div>
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  <span v-if="expense.receiptAttached == true">Yes</span>
                  <span v-else>No</span>
                </td>
                <td class="px-4 py-2 border border-slate-300">
                  {{ expense.date }}
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  <button>X</button>
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
import { onMounted, onUnmounted, ref } from 'vue';
import TableButton from '../../../Utilities/actionButtons/TableButton.vue';
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

<style></style>
