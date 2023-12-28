import { ref, watch, watchEffect } from 'vue';
import { itemsToBePurchased } from './manager';

const useOrderPaymentDiscount = function () {
  const purchasedItems = itemsToBePurchased.value;

  const subtotalPrice = ref(0);

  const discountRate = ref(0);
  const specialDiscount = ref(0);
  const totalPrice = ref(0);
  const deliveryWay = ref('');
  const payableAmount = ref();
  const paidAmount = ref(0);
  const changeAmount = ref(0);
  const dueAmount = ref(0);
  const discountedAmount = ref(0);

  const amountToBePay = function () {
    let appliedDiscouont = (subtotalPrice * discountRate.value) / 100;
    totalPrice.value =
      subtotalPrice - (appliedDiscouont + specialDiscount.value);
    discountedAmount.value = appliedDiscouont + specialDiscount.value;
  };

  const selectDeliveryWay = function (way) {
    deliveryWay.value = way;
  };

  const paymentAndChange = function () {
    dueAmount.value = paidAmount.value - changeAmount.value;
  };

  watch(
    () => itemsToBePurchased.value,
    () => {
      itemsToBePurchased.value = itemsToBePurchased.value;
      subtotalPrice.value = itemsToBePurchased.value.reduce(
        (initialSum, product) => {
          return initialSum + product.price * product.quantity;
        },
        0,
      );
      if (specialDiscount.value == 0 && discountRate.value == 0) {
        totalPrice.value = subtotalPrice.value;
      }
    },
    { deep: true },
  );

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
    amountToBePay,
    selectDeliveryWay,
    paymentAndChange,
    itemsToBePurchased,
  };
};

export default useOrderPaymentDiscount;
