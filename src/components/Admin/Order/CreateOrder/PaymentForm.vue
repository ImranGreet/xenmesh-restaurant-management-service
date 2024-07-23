<template>
  <div class="bg-gray-700 xl:bg-inherit w-ful">
    <form @submit.prevent="submitOrderFromHouse()"
         class="w-full flex flex-col justify-between items-center">
      <div
        class="w-full space-y-2 border border-gray-200/25 px-2 py-1 2xl:py-3 bg-pink-600 text-white rounded-t-lg">
        <h1 class="w-full text-base 2xl:text-xl">
          Total <span class="ml-3 select-none"> {{ totalPrice }} </span>
        </h1>
      </div>
      <div class="w-full flex justify-between items-center space-x-3 pl-2 py-1">
        <label
          for="subtotal"
          class="w-full text-base"
          >subtotal</label
        >
        <input
          v-model="subtotalPrice"
          readonly
          type="number"
          name=""
          id=""
          class="w-full text-center px-4 py-1 focus:outline-none" />
      </div>
      <div class="w-full flex justify-between items-center space-x-3 pl-2 py-1">
        <label
          for="subtotal"
          class="w-full text-base"
          >Discount Rate (%)</label
        >
        <input
          v-model="discountRate"
          @input="amountToBePay()"
          type="text"
          name=""
          id=""
          class="w-full text-center px-4 py-1 focus:outline-none" />
      </div>
      <div class="w-full flex justify-between items-center space-x-3 pl-2 py-1">
        <label
          for="subtotal"
          class="w-full text-base"
          >Discounted Amount</label
        >
        <input
          v-model="discountedAmount"
          type="text"
          name=""
          id=""
          class="w-full text-center px-4 py-1 focus:outline-none" readonly/>
      </div>
      <div class="w-full flex justify-between items-center space-x-3 pl-2 py-1">
        <label
          for="subtotal"
          class="w-full text-sm"
          >Amount After Discount
        </label>
        <input
          v-model="totalPrice"
          type="text"
          name=""
          id=""
          class="w-full text-center px-4 py-1 focus:outline-none" readonly />
      </div>
      <div class="w-full flex justify-between items-center space-x-3 pl-2 py-1">
        <label
          for="subtotal"
          class="w-full text-base"
          >Special Discount</label
        >
        <input
          @input="amountToBePay()"
          v-model="specialDiscount"
          type="number"
          name=""
          id=""
          class="w-full text-center px-4 py-1 focus:outline-none" />
      </div>
      <div class="w-full flex justify-between items-center space-x-3 pl-2 py-1">
        <label
          for="subtotal"
          class="w-full text-base"
          >Delivery Way</label
        >
        <input
          v-model="deliveryWay"
          type="text"
          name=""
          id=""
          class="w-full text-center px-4 py-1 focus:outline-none"
          readonly />
      </div>

      <div
        class="bg-stone-600 text-start text-white px-2 py-1 2xl:py-3 w-full rounded-t-lg">
        <h1 class="text-base 2xl:text-xl">Payment</h1>
      </div>

      <div class="w-full flex justify-between items-center space-x-3 pl-2 py-1">
        <label
          for="subtotal"
          class="w-full"
          >Payable
        </label>
        <input
          v-model="totalPrice"
          type="text"
          name=""
          id=""
          readonly
          class="w-full text-center px-4 py-1 focus:outline-none select-none" />
      </div>
      <div class="w-full flex justify-between items-center space-x-3 pl-2 py-1">
        <label
          for="subtotal"
          class="w-full"
          >Paid Amount</label
        >
        <input
          v-model="paidAmount"
          @input="paymentAndChange()"
          type="text"
          name=""
          id=""
          class="w-full text-center px-4 py-1 focus:outline-none" />
      </div>
      <div class="w-full flex justify-between items-center space-x-3 pl-2 py-1">
        <label
          for="subtotal"
          class="w-full"
          >Change Amount</label
        >
        <input
          v-model="changeAmount"
          type="text"
          name=""
          id=""
          class="w-full text-center px-4 py-1 focus:outline-none" readonly />
      </div>
      <div class="w-full flex justify-between items-center space-x-3 pl-2 py-1">
        <label
          for="subtotal"
          class="w-full"
          >Due Amount</label
        >
        <input
          v-model="dueAmount"
          type="text"
          name=""
          id=""
          class="w-full text-center px-4 py-1 focus:outline-none" readonly />
      </div>
      <!-- confirm button -->
      <button
        class="px-2 py-3 text-base 2xl:text-xl tracking-wider bg-blue-700 text-white w-full">
        Confirm
      </button>
    </form>
  </div>
</template>

<script>
import { onMounted, watch } from 'vue';
import { useOrderPaymentDiscount } from '../../../../scripts/Admin/Order/createOrder';

export default {
  name: 'PaymentForm',
  setup() {
    const {
      //properties
      subtotalPrice,
      discountRate,
      specialDiscount,
      totalPrice,
      deliveryWay,
      payableAmount,
      paidAmount,
      changeAmount,
      dueAmount,
      discountedAmount,
      itemsToBePurchased,
      //methods
      amountToBePay,
      selectDeliveryWay,
      paymentAndChange,
    } = useOrderPaymentDiscount();

    onMounted(() => {
      subtotalPrice.value = itemsToBePurchased.value.reduce(
        (initialSum, product) => {
          return initialSum + product.price * product.quantity;
        },
        0,
      );

      if (specialDiscount.value === 0 && discountRate.value === 0) {
        totalPrice.value = subtotalPrice.value;
      }
    });

    const submitOrderFromHouse = async function(){
      console.log("Order Submitted");
    }

    return {
      subtotalPrice,
      discountRate,
      specialDiscount,
      totalPrice,
      deliveryWay,
      payableAmount,
      paidAmount,
      changeAmount,
      dueAmount,
      discountedAmount,
      itemsToBePurchased,
      //methods
      amountToBePay,
      selectDeliveryWay,
      paymentAndChange,
      submitOrderFromHouse
    };
  },
};
</script>

<style scoped>
input[type='number'] {
  -moz-appearance: textfield;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
