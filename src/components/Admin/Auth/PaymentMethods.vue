<template>
  <div class="px-4 py-6 w-full h-full flex justify-center items-center">
    <div
      class="w-full md:w-4/5 lg:w-3/5 xl:w-1/2 mx-auto border border-gray-300 rounded-xl bg-white p-8">
      <FormHeadLine class="text-3xl font-bold text-gray-800 mb-8"
        >Payment Methods</FormHeadLine
      >

      <div class="relative overflow-x-auto">
        <table
          class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                class="px-6 py-3">
                Payment Methods
              </th>
              <th
                scope="col"
                class="px-6 py-3">
                Status
              </th>
              <th
                scope="col"
                class="px-6 py-3">
                Image
              </th>
              <th
                scope="col"
                class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(payment_method, index) in paymentMethods"
              :key="index"
              :class="[
                'bg-white dark:bg-gray-800 dark:border-gray-700',
                index === paymentMethods.length - 1
                  ? 'border-none'
                  : 'border-b',
              ]">
              <th
                scope="row"
                class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {{ payment_method.name }}
              </th>
              <td class="px-6 py-4">
                <span
                  v-if="payment_method.status === true"
                  class="bg-lime-300/80 p-1 text-gray-900 rounded-sm"
                  >Active</span
                >
                <span
                  v-else
                  class="bg-red-300 p-1 text-white rounded-sm"
                  >Not activated</span
                >
              </td>
              <td class="px-6 py-4">
                <img
                  :src="payment_method.asset"
                  alt=""
                  class="w-10 h-10" />
              </td>
              <td class="table__cell table__cell--title border-none">
                <div class="flex justify-center items-center gap-x-2">
                  <button class="text-gray-900">
                    <PencilSquareIcon class="inline-block w-4 h-4" />
                  </button>
                  <button
                    :class="
                      payment_method.status
                        ? 'text-green-800'
                        : 'text-red-300 shadow-sm font-extrabold'
                    ">
                    <ShieldCheckIcon class="inline-block w-4 h-4" />
                  </button>
                  <button class="text-pink-600">
                    <TrashIcon class="inline-block w-4 h-4" />
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue';
import FormHeadLine from './FormHeadLine.vue';
import Visa from '../../../assets/images/images.png';
import ApplePay from '../../../assets/images/Apple_Pay_logo.svg.png';
import Bkash from '../../../assets/images/BKash_logo.svg.png';
import paypal from '../../../assets/images/PayPal.svg.png';
import cash from "../../../assets/images/Flickr_-_Nic's_events_-_London_-_14-15_Dec_2007_-_034.jpg";

const addSetting = () => {
  console.log('Settings');
};
const paymentMethods = ref([
  {
    id: 1,
    name: 'Apple Pay',
    status: false,
    asset: ApplePay,
  },
  {
    id: 2,
    name: 'Visa',
    status: true,
    asset: Visa,
  },
  {
    id: 1,
    name: 'Paypal',
    status: true,
    asset: paypal,
  },
  {
    id: 1,
    name: 'Cash',
    status: true,
    asset: cash,
  },
  {
    id: 1,
    name: 'Bkash',
    status: true,
    asset: Bkash,
  },
]);
</script>
