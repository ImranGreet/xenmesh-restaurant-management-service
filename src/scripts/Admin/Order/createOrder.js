import { onMounted, ref } from 'vue';
import {
  addInCustomerCart,
  itemsToBePurchased,
  removeItemFromOrderList,
  increaseItemQuantity
} from './manager';

const mobileWidth = ref(false);
const largeScreen = ref(true);

const getMobileFooter = function () {
  if (window.innerWidth <= 1350) {
    mobileWidth.value = true;
    largeScreen.value = false;
  } else {
    mobileWidth.value = false;
    largeScreen.value = true;
  }
};

window.addEventListener('resize', function () {
  getMobileFooter();
});

window.addEventListener('DOMContentLoaded', function () {
  getMobileFooter();
});

export {
  mobileWidth,
  largeScreen,
  itemsToBePurchased,
  getMobileFooter,
  addInCustomerCart,
  removeItemFromOrderList,
  increaseItemQuantity
};
