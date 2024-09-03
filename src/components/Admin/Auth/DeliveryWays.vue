<template>
      <div class="px-4 py-6 w-full h-full flex justify-center items-center">
        <div
          class="w-full md:w-4/5 lg:w-3/5 xl:w-1/2 mx-auto border border-gray-300 rounded-xl bg-white p-8">
          <FormHeadLine class="text-3xl font-bold text-gray-800 mb-8"
            >Add Delivery Way</FormHeadLine
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
                    Delivery Methods
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
                  v-for="(delivery_method, index) in DeliveryWays"
                  :key="index"
                  :class="[
                    'bg-white dark:bg-gray-800 dark:border-gray-700',
                    index === DeliveryWays.length - 1
                      ? 'border-none'
                      : 'border-b',
                  ]">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {{ delivery_method.name }}
                  </th>
                  <td class="px-6 py-4">
                    <span
                      v-if="delivery_method.status === true"
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
                      :src="delivery_method.asset"
                      alt=""
                      class="w-20 h-10" />
                  </td>
                  <td class="table__cell table__cell--title border-none">
                    <div class="flex justify-center items-center gap-x-2">
                      <button class="text-gray-900">
                        <PencilSquareIcon class="inline-block w-4 h-4" />
                      </button>
                      <button
                        :class="
                        delivery_method.status
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
    import Foodpanda from '../../../assets/images/Foodpanda_logo.svg.png';
    import Ubereats from '../../../assets/images/Uber_Eats_2020_logo.svg.png';
    import Foodie from '../../../assets/images/Foodie.png';
    import Dinein from '../../../assets/images/dine in.jpeg';
    
    
    const addSetting = () => {
      console.log('Settings');
    };
    const DeliveryWays = ref([
      {
        id: 1,
        name: 'Food Panda',
        status: false,
        asset: Foodpanda,
      },
      {
        id: 2,
        name: 'Uber eats',
        status: true,
        asset: Ubereats,
      },
      {
        id: 3,
        name: 'Foodie',
        status: true,
        asset: Foodie,
      },
      {
        id: 4,
        name: 'Dine in',
        status: true,
        asset: Dinein,
      },
      
    ]);
    </script>
        