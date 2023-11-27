<template>
<section class="mt-6">

   
    <div class="w-full flex justify-between">
        
        <div class="w-4/5 flex justify-between">
            <div class="w-1/2 space-y-3 divide-y-4">
                    <div class="w-full ">
                        <SelectCategory/>
                    </div>
                <div class="w-full grid grid-cols-4 gap-2 h-[524px] overflow-y-scroll custom-overflowscroll rounded-md">
                    <button><AvailableItems/></button>
                    <button><AvailableItems/></button>
                    <button><AvailableItems/></button>
                    <button><AvailableItems/></button>
                    <button><AvailableItems/></button>
                    <button><AvailableItems/></button>
                    <button><AvailableItems/></button>
                    <button><AvailableItems/></button>
                    <button><AvailableItems/></button>
                </div>
                
            </div>
            <div class="w-1/2 border border-inherit">
                <OrderedList />
                <div class="w-full border border-inherit rounded-md">
                    <div class="text-start p-3">
                        <h1 class="text-xl tracking-wider leading-relax">Select Delivery Ways</h1>
                      </div>
                      <DeliveryWays/>
                </div>
            </div>
        
        </div>
              <div class="w-1/5">
                 
                <PaymentForm/>
              </div>
        
        </div>
</section>
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

