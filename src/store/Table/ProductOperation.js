import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const useProductStore = defineStore('productsOps', () => {
  let alertMessage = ref('');
  let productStore = ref([]);
  let showSkillital = ref(false);

  const storeProduct = async (productData, headers = {}) => {
    try {
      await axios;
      await retrieveProductsFromStore();
      alertMessage.value = 'Product stored  successfully!';
    } catch (error) {
      alertMessage.value = 'Failed to store.';
      console.error(error);
    }
  };

  const retrieveProductsFromStore = async () => {
    try {
      let response = await axios.get();
      alertMessage.value = 'Products retrived from store successfully';
    } catch (error) {
      alertMessage.value = 'Failed retrived products';
      console.log(error);
    }
  };

  const updateProduct = async id => {
    try {
      let response = await axios.put(id);
      alertMessage.value = 'Products Updated  successfully';
    } catch (error) {
      console.log(error);
    }
  };

  const updatePublicationStatusOfProduct = async id => {
    try {
      let response = await axios.put(id);
      alertMessage.value = 'Updated succesfully to serve';
    } catch (error) {
      alertMessage.value = 'Publication status has failed to update';
    }
  };

  const deleteProductFromStore = async id => {
    try {
      let response = await axios.delete(id);
      alertMessage.value = 'Product delete from store succesfully';
    } catch (error) {
      alertMessage.value = 'Failed to delete';
      console.log(error);
    }
  };

  return {
    /*properties*/
    alertMessage,
    showSkillital,
    productStore,
    /*methods*/
    storeProduct,
    retrieveProductsFromStore,
    updateProduct,
    updatePublicationStatusOfProduct,
    deleteProductFromStore,
  };
});
