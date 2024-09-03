import { ref, watch, watchEffect } from 'vue';
import { itemsToBePurchased } from './manager';

const useOrderPaymentDiscount = function () {
  const subtotalPrice = ref(0);

  const discountRate = ref(0);
  const specialDiscount = ref(0);
  const totalPrice = ref(0);
  const deliveryWay = ref('');
  const tableNumber = ref(null);
  const payableAmount = ref(0);
  const paidAmount = ref(0);
  const changeAmount = ref(0);
  const dueAmount = ref(0);
  const discountedAmount = ref(0);

  const appliedDiscouontCash = function () {
    let appliedDiscouont = Math.round(
      Number((subtotalPrice.value * discountRate.value) / 100),
    );
    totalPrice.value = Math.round(
      Number(subtotalPrice.value - (appliedDiscouont + specialDiscount.value)),
    );
    discountedAmount.value = Math.round(
      Number(appliedDiscouont + specialDiscount.value),
    );
  };

  const amountToBePay = function () {
    if (discountRate.value < 0 || discountRate.value > 100) {
      window.alert('Input is not okay');
      discountRate.value = 0;
      appliedDiscouontCash();
      return;
    } else if (
      specialDiscount.value < 0 ||
      specialDiscount.value > totalPrice.value
    ) {
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

  const selectTable = function (tabNumber) {
    tableNumber.value = tabNumber;
  };

  const paymentAndChange = function () {
    if (paidAmount.value < 0 && typeof paidAmount.value !== 'number') {
      window.alert('Input is not correct');
      paidAmount.value = 0;
      return;
    } else {
      if (totalPrice.value >= paidAmount.value) {
        dueAmount.value = Math.abs(
          Math.round(Number(totalPrice.value - paidAmount.value)),
        );
        changeAmount.value = 0;
      } else if (totalPrice.value <= paidAmount.value) {
        changeAmount.value = Math.abs(
          Math.round(Number(paidAmount.value - totalPrice.value)),
        );
        dueAmount.value = 0;
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
    () => {
      appliedDiscouontCash();
      paymentAndChange();
    },
  );
  watch(
    () => totalPrice.value,
    () => paymentAndChange(),
  );

  return {
    subtotalPrice,
    discountRate,
    specialDiscount,
    totalPrice,
    deliveryWay,
    tableNumber,
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
    selectTable,
  };
};

export default useOrderPaymentDiscount;
