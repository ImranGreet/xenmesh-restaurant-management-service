<template>
  <section class="w-full dark:bg-gray-900 py-3 sm:py-5">
    <div class="px-4 mx-auto w-full">
      <div
        class="w-full relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <div class="overflow-x-auto">
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-separate border border-slate-100">
            <caption class="caption-top py-5 bg-lime-600 text-white text-xl">
              Table 1: Top Selling Products
            </caption>

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
                  Title
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Category
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Price
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Ratings
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(topItem, index) in topProducts"
                :key="index"
                class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                <th class="w-4 px-4 py-3 border border-slate-300">
                  {{ index + 1 }}
                </th>
                <th
                  scope="row"
                  class="flex items-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  <img
                    :src="topItem.image"
                    alt="iMac Front Image"
                    class="w-auto h-8 mr-3" />
                  {{ topItem.title.slice(0, 10) }}
                </th>
                <td class="px-4 py-2 border border-slate-300">
                  <span
                    class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300"
                    >{{ topItem.category }}</span
                  >
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  <div class="flex items-center">
                    <div
                      class="inline-block w-4 h-4 mr-2 bg-red-700 rounded-full"></div>
                    {{ topItem.price }}
                  </div>
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  {{ topItem.rate }}
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
import products from '../../../../DB/products';
export default {
  name: 'TopSellingProducts',
  setup() {
    const topProducts = products.filter(
      product => product.Top || product.top === true,
    );
    console.log(topProducts);
    return {
      topProducts,
    };
  },
};
</script>

<style></style>
