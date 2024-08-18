<template>
  <section class="w-full dark:bg-gray-900 py-3 sm:py-5">
    <div class="px-4 mx-auto w-full">
      <div
        class="w-full relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">

        <SearchFormUtility/>

        <div
          class="relative overflow-auto min-h-[220px] max-h-[640px] table-container rounded-t-lg bg-white z-50">
         <div class="layout">
          <div class="layout__inner">
            <div class="table-wrapper custom-overflowscroll">
              <table
              class="table">
              <thead
                class="table__header">
                <tr class="table__row">
                  
                  <th
                    scope="col"
                    class="table__header-cell">
                    Sr No
                  </th>
                  <th
                    scope="col"
                    class="table__header-cell">
                    Product Title
                  </th>
                  <th
                    scope="col"
                    class="table__header-cell">
                    Category
                  </th>
                  <th
                    scope="col"
                    class="table__header-cell">
                    Reorder Point
                  </th>
                  <th
                    scope="col"
                    class="table__header-cell">
                    Quantity In Hand
                  </th>
                  <th
                    scope="col"
                    class="table__header-cell break-words">
                    Minimum Order Quantity
                  </th>
                  <th
                    scope="col"
                    class="table__header-cell">
                    LeadTime
                  </th>
                  <th
                    scope="col"
                    class="table__header-cell">
                    Preferred Supplier
                  </th>
                  <th
                    scope="col"
                    class="table__header-cell">
                    Ingredient Use
                  </th>
                  <th
                    scope="col"
                    class="table__header-cell">
                    Expiration Date
                  </th>
                  <th
                    scope="col"
                    class="table__header-cell">
                    Location
                  </th>
                  <th
                    scope="col"
                    class="table__header-cell">
                    Notes
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
                  v-for="(stock, index) in availableStocks"
                  :key="index"
                  class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                  
                  <th class="w-4 px-4 py-3 border border-slate-300">
                    {{ index + 1 }}
                  </th>
                  <td class="table__cell table__cell--title">
                    <span
                      class="badge">
                      {{ stock.ItemName }}</span
                    >
                  </td>
                  <td class="table__cell table__cell--title">
                    <span
                      class="badge"
                      >{{ stock.Category }}</span
                    >
                  </td>
                  <td
                    class="table__cell table__cell--title">
                    <div class="flex items-center">
                      {{ stock.ReorderPoint }}
                    </div>
                  </td>
                  <td
                    class="table__cell table__cell--title">
                    {{ stock.QuantityOnHand }}
                  </td>
                  <td
                    class="table__cell table__cell--title">
                    {{ stock.MinimumOrderQuantity }}
                  </td>
                  <td
                    class="table__cell table__cell--title">
                    {{ stock.LeadTime }}
                  </td>
                  <td
                    class="table__cell table__cell--title">
                    {{ stock.PreferredSupplier }}
                  </td>
                  <td class="table__cell table__cell--title">
                    <span v-if="stock.IngredientUse === true">Yes</span>
                    <span v-else>No</span>
                  </td>
                  <td
                    class="table__cell table__cell--title">
                    {{ stock.ExpirationDate }}
                  </td>
  
                  <td
                    class="table__cell table__cell--title">
                    {{ stock.Location }}
                  </td>
                  <td
                    class="table__cell table__cell--title">
                    {{ stock.Notes }}
                  </td>
  
                  <td
                    class="table__cell table__cell--title">
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
        </div>

        <!-- pagination -->

        <Pagination/>

      </div>
    </div>
  </section>
</template>

<script>
import stocks from '../../../../DB/stocks.json';
import SearchFormUtility from "../../../Utilities/FormUtility/SearchFormComp.vue"
export default {
  name: 'StocksItem',
  components:{SearchFormUtility},
  setup() {
    const availableStocks = stocks;
    return {
      availableStocks,
    };
  },
};
</script>

<style></style>
