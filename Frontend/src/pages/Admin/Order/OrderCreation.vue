<template>
  <div class="w-full flex flex-wrap">
        
        <div class="w-1/5">
            <PaymentForm/>
            <DeliveryWays/>
        </div>
        <div class="w-1/3">
            <OrderedList/>
        </div>
      <div class="w-1/3">
          <SelectCategory/>
          <AvailableItems/>
      </div>
  </div>
</template>

<script>
import AvailableItems from '../../../components/Admin/Order/CreateOrder/AvailableItems.vue';
import DeliveryWays from '../../../components/Admin/Order/CreateOrder/DeliveryWays.vue';
import OrderedList from '../../../components/Admin/Order/CreateOrder/OrderedList.vue';
import PaymentForm from '../../../components/Admin/Order/CreateOrder/PaymentForm.vue';
import SelectCategory from '../../../components/Admin/Order/CreateOrder/SelectCategory.vue';

export default {
name:"OrderCreation",
components:{
      OrderedList,
      PaymentForm,
      SelectCategory,
      DeliveryWays,
      AvailableItems
}
}
</script>

