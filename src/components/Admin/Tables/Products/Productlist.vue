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
                  Product Title
                </th>
                <th
                  scope="col"
                  class="px-4 py-1 border border-slate-300">
                  Category
                </th>
                <th
                  scope="col"
                  class="px-4 py-1 border border-slate-300">
                  Price
                </th>
                <th
                  scope="col"
                  class="px-4 py-1 border border-slate-300">
                  Status
                </th>
                <th
                  scope="col"
                  class="px-4 py-1 border border-slate-300">
                  Description
                </th>
                <th
                  scope="col"
                  class="px-4 py-1 border border-slate-300">
                  Rating
                </th>

                <th
                  scope="col"
                  class="px-4 py-1 border border-slate-300">
                  discount
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
                v-for="(item, index) in availableProducts"
                :key="index"
                class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                <th></th>
                <th class="w-4 px-4 py-1 border border-slate-300">
                  {{ index + 1 }}
                </th>
                <th
                  scope="row"
                  class="flex items-center px-4 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  <img
                    :src="item.image"
                    :alt="item.title"
                    class="w-10 h-10 xl:h-8 xl:w-8 rounded-sm mr-3" />
                  {{ item.title }}&#34;
                </th>
                <td class="px-4 py-1 border border-slate-300">
                  <span
                    class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300"
                    >{{ item.category }}</span
                  >
                </td>
                <td
                  class="px-4 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  <span>{{ item.price }}</span>
                </td>
                <td
                  class="px-4 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  {{ item.status }}
                </td>
                <td
                  class="px-4 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  <p v-if="item.description.length > 20">
                    {{ item.description.slice(0, 30) }}...
                  </p>
                  <p v-else>{{ item.description }}</p>
                </td>
                <td
                  class="px-4 py-1 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  <div class="flex items-center">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewbox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span class="ml-1 text-gray-500 dark:text-gray-400">{{
                      item.rate
                    }}</span>
                  </div>
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  {{ item.discount }}
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
                    <button
                      class="text-pink-600"
                      @click="deleteProductFromStore(item.id)">
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

<script setup>
import { showProductAddForm } from '../../../../scripts/public/modal/modal';
import SearchFormUtility from "../../../Utilities/FormUtility/SearchFormComp.vue"
import products from '../../../../DB/products';

const availableProducts = products;
const deleteProductFromStore = function (id) {
  let confirmToDelete = window.confirm('Are You Sure?');
  confirmToDelete ? console.log(id) : console.log('Not Okay');
};
</script>
