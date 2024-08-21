import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const useOrderOperation = defineStore('orderOps', () => {
  let alertMessage = ref('');
  let orderStore = ref([]);
  let showSkillital = ref(false);
  let deliveryWaySelect = ref(null);
  let paymentMethodSelect = ref(null);

  const createOrder = async () => {
    try {
      let response = await axios.post();
      alertMessage.value = 'Order created Successfully!';
    } catch (error) {
      alertMessage.value = 'Failed to create Order';
      console.log(error);
    }
  };

  const passOrderToKitchen = async id => {
    try {
      let response = axios.put(id);
      alertMessage.value = 'Order pass to kitchen successfully';
    } catch (error) {
      console.log(error);
    }
  };

  const orderInStore = async params => {
    try {
      let response = await axios.get(params);
      orderStore.value = response;
      alertMessage.value = 'Order retrieved from store succesffully';
    } catch (error) {
      console.log(error);
    }
  };

  const updateOrder = async id => {
    try {
      let response = await axios.put(id);
      alertMessage.value = 'Order updated Successfully!';
    } catch (error) {
      alertMessage.value = 'Order failed to update';
      console.log(error);
    }
  };

  const deleteOrderFromOrderList = async id => {
    try {
      let response = await axios.delete(id);
      alertMessage.value = 'Order deleted from store successfully!';
    } catch (error) {
      alertMessage.value = 'Failed to delete!';
    }
  };

  const selectPaymentOption = function (option) {
    paymentMethodSelect.value = option;
    console.log(paymentMethodSelect.value);
  };

  return {
    alertMessage,
    orderStore,
    showSkillital,
    deliveryWaySelect,
    paymentMethodSelect,
    /*methods*/
    createOrder,
    passOrderToKitchen,
    orderInStore,
    updateOrder,
    deleteOrderFromOrderList,
    selectPaymentOption
  };
});


export default useOrderOperation;