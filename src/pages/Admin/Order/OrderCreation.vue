<template>
  <section class="mt-3 xl:mt-6 relative">
    <div
      class="w-full"
      :class="{ 'flex justify-between': largeScreen, hidden: !largeScreen }">
      <div class="lg:w-3/4 xl:w-4/5 flex justify-between">
        <div class="w-1/2 space-y-6">
          <div class="w-full">
            <SelectCategory />
          </div>

          <div class="w-full">
            <form class="w-full">
              <div class="w-full">
                <label
                  for="item_title"
                  class="sr-only"
                  >item title</label
                >
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Search Item"
                  class="w-full p-2 focus:outline-none focus:outline-gray-200 px-4 border-2 border-gray-400/50 rounded-sm  placeholder:font-extrabold text-gray-800 " />
              </div>
            </form>
          </div>

          <div class="w-full">
            <AvailableItems  />
          </div>
        </div>
        <div class="w-1/2">
          <OrderedList />
        </div>
      </div>

      <div class="lg:w-1/4 xl:w-1/5">
        <CustomerDetails />
        <PaymentForm />
      </div>
    </div>

    <!-- tabcomponent start-->

    <div
      class="absolue top-2 w-full left-0 right-0 text-white z-[500]"
      :class="{ block: mobileWidth, hidden: largeScreen }">
      <TabGroup>
        <TabList
          class="bg-red-600 w-full rounded-sm px-3 py-1.5 flex justify-start space-x-3 items-center">
          <Tab>Pick Item</Tab>
          <Tab>Ordered Items</Tab>
          <Tab>Payment Form</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SelectCategory />
            <div class="w-full">
              <form class="w-full">
                <div>
                  <label
                    for="item_title"
                    class="sr-only"
                    >item title</label
                  >
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search Item"
                    class="w-full p-2 focus:outline-none px-4 border border-gray-400/20"/>
                </div>
              </form>
            </div>
            <AvailableItems />
          </TabPanel>
          <TabPanel>
            <OrderedList />
          </TabPanel>
          <TabPanel>
            <CustomerDetails />
            <PaymentForm />
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>

    <!-- tabcomponent end -->
    <!-- <div
      >
      <CreateOrderInFoot />
    </div> -->
  </section>
</template>

<script>
import CreateOrderInFoot from '../../../components/Admin/Order/CreateOrderInFoot.vue';
import AvailableItems from '../../../components/Admin/Order/CreateOrder/AvailableItems.vue';
import CustomerDetails from '../../../components/Admin/Order/CreateOrder/CustomerDetails.vue';
import DeliveryWays from '../../../components/Admin/Order/CreateOrder/DeliveryWays.vue';
import OrderedList from '../../../components/Admin/Order/CreateOrder/OrderedList.vue';
import PaymentForm from '../../../components/Admin/Order/CreateOrder/PaymentForm.vue';
import SelectCategory from '../../../components/Admin/Order/CreateOrder/SelectCategory.vue';

import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import {
  mobileWidth,
  largeScreen,
  getMobileFooter,
} from '../../../scripts/Admin/Order/createOrder';
import { onMounted } from 'vue';

export default {
  name: 'OrderCreation',
  components: {
    OrderedList,
    PaymentForm,
    SelectCategory,
    AvailableItems,
    CustomerDetails,
    DeliveryWays,
    CreateOrderInFoot,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
  setup() {
    onMounted(() => {
      getMobileFooter();
    });
    return {
      mobileWidth,
      largeScreen,
      getMobileFooter,
    };
  },
};
</script>
