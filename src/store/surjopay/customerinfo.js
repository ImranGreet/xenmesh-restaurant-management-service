import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import axios from 'axios';

const routeToSend = 'https://www.sandbox.shurjopayment.com/api/secret-pay';

export const getCustomerInformation = defineStore('customerInfo', () => {
  async function forwardCustomerInfo(generatedCode) {
    const customerInformation = {
      prefix: 'sp',
      token: generatedCode,
      return_url: 'https://www.sandbox.shurjopayment.com/response',
      cancel_url: 'https://www.sandbox.shurjopayment.com/response',
      store_id: 1,
      amount: 10,
      customer_name: 'John Doe',
      customer_email: 'john.doe@example.com',
      customer_phone: '123-456-7890',
      clinet_ip: '127.00.0',
      currency: 'BDT',
      order_id: 'spind1278hf',
      customer_address: '123 Main Street',
      customer_city: 'Cityville',
    };

    try {
      const response = await axios.post(routeToSend, customerInformation, {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Vary: Origin,
          Authorization: `Bearer ${generatedCode}`,
          withCredentials: false,
        },
      });

      console.log(response);
      console.log(generatedCode);
    } catch (error) {}
  }

  return {
    forwardCustomerInfo,
  };
});
