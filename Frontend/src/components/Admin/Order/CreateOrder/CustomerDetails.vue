<template>
  <TabGroup>
    <TabList
      class="w-full mx-auto flex justify-between items-center text-gray-700 my-2 rounded-sm py-1.5">
      <Tab class="border border-gray-600/60 px-2 py-1.5 rounded-sm"
        >Delivery Ways</Tab
      >
      <Tab class="border border-gray-600/60 px-2 py-1.5 rounded-sm">Table</Tab>
      <Tab class="border border-gray-600/60 px-2 py-1.5 rounded-sm"
        >Pay Ways</Tab
      >
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
