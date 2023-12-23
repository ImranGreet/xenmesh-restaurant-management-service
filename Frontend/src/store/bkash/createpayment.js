import axios from 'axios';
import { defineStore } from 'pinia';

export const useBkashPaymnetId = defineStore('bkashPaymnetId', () => {
  let urlToRequest =
    'https://checkout.sandbox.bka.sh/v1.2.0-beta/checkout/payment/create';
  let requestMethod = 'POST';
  let headers = {
    accept: 'application/json',
    'content-type': 'application/json',
  };

  async function createPaymentId() {
    try {
      const response = await axios.post(urlToRequest, headers);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return {
    createPaymentId,
  };
});
