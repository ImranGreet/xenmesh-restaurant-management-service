<template>
  <section class="mt-6 relative">
    <div
      class="w-full"
      :class="{ 'flex justify-between': !screenWidth, hidden: screenWidth }">
      <div class="lg:w-3/4 xl:w-4/5 flex justify-between">
        <div class="w-1/2 space-y-6">
          <div class="w-full">
            <SelectCategory />
          </div>

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
                  class="w-full p-2 focus:outline-none px-4 border border-gray-400/20" />
              </div>
            </form>
          </div>

          <div class="w-full">
            <AvailableItems />
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

    <!-- tabcomponent end -->
    <div
      class="absolute bottom-20 w-full left-0 right-0 bg-red-500 text-white z-[500]"
      :class="{ block: screenWidth, hidden: !screenWidth }">
      <CreateOrderInFoot />
    </div>
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
import {
  screenWidth,
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
  },
  setup() {
    onMounted(() => {
      getMobileFooter();
    });
    return {
      screenWidth,
      getMobileFooter,
    };
  },
};
</script>
