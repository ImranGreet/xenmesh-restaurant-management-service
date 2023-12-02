<template>
  <section class="mt-6">
    <div class="w-full flex justify-between">
      <div class="lg:w-3/4 xl:w-4/5 flex justify-between">
        <div class="w-1/2 space-y-6">
          <div class="w-full">
            <SelectCategory />
          </div>

          <div
            class="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 h-[600px] overflow-y-scroll custom-overflowscroll rounded-md">
            <button><AvailableItems /></button>
            <button><AvailableItems /></button>
            <button><AvailableItems /></button>
            <button><AvailableItems /></button>
            <button><AvailableItems /></button>
            <button><AvailableItems /></button>
            <button><AvailableItems /></button>
            <button><AvailableItems /></button>
            <button><AvailableItems /></button>
            <button><AvailableItems /></button>
            <button><AvailableItems /></button>
            <button><AvailableItems /></button>
            <button><AvailableItems /></button>
            <button><AvailableItems /></button>
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
  </section>
</template>

<script>
import AvailableItems from '../../../components/Admin/Order/CreateOrder/AvailableItems.vue';
import CustomerDetails from '../../../components/Admin/Order/CreateOrder/CustomerDetails.vue';
import DeliveryWays from '../../../components/Admin/Order/CreateOrder/DeliveryWays.vue';
import OrderedList from '../../../components/Admin/Order/CreateOrder/OrderedList.vue';
import PaymentForm from '../../../components/Admin/Order/CreateOrder/PaymentForm.vue';
import SelectCategory from '../../../components/Admin/Order/CreateOrder/SelectCategory.vue';

export default {
  name: 'OrderCreation',
  components: {
    OrderedList,
    PaymentForm,
    SelectCategory,
    AvailableItems,
    CustomerDetails,
    DeliveryWays,
  },
};
</script>
