import { ref, watch, watchEffect } from 'vue';
import { itemsToBePurchased } from './manager';

const useOrderPaymentDiscount = function () {
  const subtotalPrice = ref(0);

  const discountRate = ref(0);
  const specialDiscount = ref(0);
  const totalPrice = ref(0);
  const deliveryWay = ref('');
  const payableAmount = ref(0);
  const paidAmount = ref(0);
  const changeAmount = ref(0);
  const dueAmount = ref(0);
  const discountedAmount = ref(0);

  const appliedDiscouontCash = function () {
    let appliedDiscouont = Math.floor(
      Number((subtotalPrice.value * discountRate.value) / 100),
    );
    totalPrice.value = Math.floor(
      Number(subtotalPrice.value - (appliedDiscouont + specialDiscount.value)),
    );
    discountedAmount.value = Math.floor(
      Number(appliedDiscouont + specialDiscount.value),
    );
  };

  const amountToBePay = function () {
    if (discountRate.value < 0 || discountRate.value > 100) {
      window.alert('Input is not okay');
      discountRate.value = 0;
      appliedDiscouontCash();
      return;
    } else if (specialDiscount.value < 0) {
      window.alert('Input is not okay');
      specialDiscount.value = 0;
      appliedDiscouontCash();
      return;
    } else if (totalPrice.value === 0) {
      window.alert('Input is not okay');
      specialDiscount.value = 0;
      appliedDiscouontCash();
    }
    appliedDiscouontCash();
  };

  const selectDeliveryWay = function (way) {
    deliveryWay.value = way;
  };

  const paymentAndChange = function () {
    if (paidAmount.value < 0 && typeof paidAmount.value !== 'number') {
      window.alert('Input is not correct');
      paidAmount.value = 0;
      return;
    } else {
      if (paidAmount.value >= totalPrice.value) {
        dueAmount.value = Math.floor(
          Number(totalPrice.value - paidAmount.value),
        );
      }
    }
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

  watch(
    () => subtotalPrice.value,
    () => appliedDiscouontCash(),
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
    itemsToBePurchased,
    //methods
    amountToBePay,
    selectDeliveryWay,
    paymentAndChange,
    appliedDiscouontCash,
  };
};

export default useOrderPaymentDiscount;
