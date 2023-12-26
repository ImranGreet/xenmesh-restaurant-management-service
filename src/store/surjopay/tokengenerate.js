import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import axios from 'axios';
import { getCustomerInformation } from './customerinfo';
const { forwardCustomerInfo } = getCustomerInformation();

export const useGeneratedToken = defineStore('id_generation', () => {
  let requiredParams;
  let generatedCode;
  let storeId;
  let foundedCode = ref('');
  let username = 'sp_sandbox';
  let password = 'pyyk97hu&6u6';
  let urltorequest = `https://sandbox.shurjopayment.com/api/get_token`;

  generatedCode = computed(() => {});

  async function getGeneratedCode() {
    const header = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    const data = {
      username: username,
      password: password,
    };
    try {
      const response = await axios.post(urltorequest, data, {
        headers: header,
      });
      console.log(response);
      generatedCode = response.data.token;
      storeId = response.data.store_id;
      localStorage.setItem('generatedCode', JSON.stringify(generatedCode));
      if (generatedCode && storeId) {
        await forwardCustomerInfo(
          JSON.parse(localStorage.getItem('generatedCode')),
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  return {
    getGeneratedCode,
    storeId,
    generatedCode,
  };
});
