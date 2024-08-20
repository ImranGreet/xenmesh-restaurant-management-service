<template>
  <TabGroup>
    <TabList
      class="w-full mx-auto flex justify-between items-center text-gray-700 my-2 rounded-sm py-1.5 bg-gray-200/80">
      <Tab v-slot="{ selected }">
        <button
          class="px-4 py-2 rounded-sm cursor-pointer transition-colors duration-200 ease-in-out hover:bg-gray-300 focus:outline-none"
          :class="{
            ' border-b-2 border-blue-500 font-semibold': selected,
          }">
          Delivery Ways
        </button>
      </Tab>
      <Tab v-slot="{ selected }">
        <button
          class="px-4 py-2 rounded-sm cursor-pointer transition-colors duration-200 ease-in-out hover:bg-gray-300 focus:outline-none"
          :class="{
            ' border-b-2 border-blue-500 font-semibold': selected,
          }">
          Table
        </button>
      </Tab>
      <Tab v-slot="{ selected }">
        <button
          class="px-4 py-2 rounded-sm cursor-pointer transition-colors duration-200 ease-in-out hover:bg-gray-300 focus:outline-none font-semibold"
          :class="{
            ' border-b-2 border-blue-500 ': selected,
          }">
          Pay Ways
        </button>
      </Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
        <Deliveryways />
      </TabPanel>
      <TabPanel>
        <AvailableTable />
      </TabPanel>
      <TabPanel>
        <PaymentCards />
      </TabPanel>
    </TabPanels>
  </TabGroup>
</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import Deliveryways from '../../../Admin/Order/CreateOrder/DeliveryWays.vue';
import PaymentCards from '../../../Admin/Order/CreateOrder/PaymentCards.vue';
import AvailableTable from './AvailableTable.vue';

export default {
  name: 'CustomerDetails',
  components: {
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    Deliveryways,
    PaymentCards,
    AvailableTable,
  },
};
</script>
