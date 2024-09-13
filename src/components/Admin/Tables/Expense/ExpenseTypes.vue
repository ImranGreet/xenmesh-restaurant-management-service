<template>
  <FormContainerModal :ModalTitle="'Type Of Expenses'">
    <section class="w-full dark:bg-gray-900 py-3 sm:py-5 min-h-[650px]">
      <div class="px-4 mx-auto w-full">
        <div
          class="w-full relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
          <div
            class="flex flex-col bg-gray-400/50 lg:flex-row lg:items-center lg:justify-between py-4 px-6">
            <TableCard
              heading=" Total Expense Types"
              :amount="450"
              class="text-gray-950 bg-white/50">
              <CalculatorIcon
                class="w-12 h-12 border border-pink-200 inline-block rounded-md p-2" />
            </TableCard>
            <TableCard
              heading=" Total Expense Types"
              :amount="450"
              class="text-gray-950 bg-white/50">
              <CalculatorIcon
                class="w-12 h-12 border border-pink-200 rounded-md p-2" />
            </TableCard>
            <TableCard
              heading=" Total Expense Types"
              :amount="450"
              class="text-gray-950 bg-white/50">
              <CalculatorIcon
                class="w-12 h-12 border border-pink-200 rounded-md p-2" />
            </TableCard>
          </div>
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
                        Note
                      </th>
                      <th
                        scope="col"
                        class="table__header-cell">
                        Amount
                      </th>
                      <th
                        scope="col"
                        class="table__header-cell">
                        Fixed Variable
                      </th>
                      <th
                        scope="col"
                        class="table__header-cell">
                        Payment Method
                      </th>
                      <th
                        scope="col"
                        class="table__header-cell">
                        Description
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
                      v-for="(type, index) in typesOfExpenses"
                      :key="type.id"
                      class="table__body-row table__body-row--hover">
                      <th></th>

                      <td class="table__cell table__cell--title">
                        {{ index + 1 }}
                      </td>
                      <td class="px-4 py-2 border border-slate-300">
                        <span class="badge">{{ type.ExpenseCategory }}</span>
                      </td>
                      <td class="px-4 py-2 border border-slate-300">
                        <span class="badge">{{ type.Notes }}</span>
                      </td>
                      <td class="table__cell table__cell--title">
                        <div class="flex items-center">
                          $
                          {{ type.Amount }}
                        </div>
                      </td>
                      <td class="table__cell table__cell--title">
                        {{ type.FixedVariable }}
                      </td>
                      <td class="table__cell table__cell--title">
                        <span>{{ type.PaymentMethod }}</span>
                      </td>
                      <td class="table__cell table__cell--title">
                        <span>{{ type.Description }}</span>
                      </td>
                      <td class="table__cell table__cell--title">
                        <span>{{ type.Date }}</span>
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
  </FormContainerModal>
</template>

<script>
import { CalculatorIcon } from '@heroicons/vue/24/outline';
import TableCard from '../../../Utilities/TableCard.vue';
import expenseTypes from '../../../../DB/expenseTypes';

export default {
  name: 'Expense Types',
  components: {
    TableCard,
    CalculatorIcon,
  },
  setup() {
    const typesOfExpenses = expenseTypes;
    return {
      typesOfExpenses,
    };
  },
};
</script>

<style></style>
