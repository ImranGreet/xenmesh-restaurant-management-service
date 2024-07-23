import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';

const useProductCategories = defineStore('productCategories', () => {
  let alertMessage = ref('');
  let categoryStore = ref([]);
  let showSkillital = ref(false);

  const createProductCateory = async () => {
    try {
      let response = await axios.post();
      alertMessage.value = 'New Product category is created';
    } catch (error) {
      alertMessage.value = 'Failed to create new Category';
      console.log(error);
    }
  };

  const retrieveCategoriesFromStore = async () => {
    try {
      let response = await axios.get();
      alertMessage.value = 'Categories retrived from store successfully!';
    } catch (error) {
      alertMessage.value = 'Categories retrives from store';
      console.log(error);
    }
  };

  const updateProductCategory = async id => {
    try {
      let response = await axios.put(id);
      alertMessage.value = 'Product category updated successfully!';
    } catch (error) {
      alertMessage.value = 'Product category updated Failed!';
    }
  };

  const updatePublicationStatusOfProductCategory = async id => {
    try {
      let response = await axios.put(id);
      alertMessage.value = 'Updated succesfully to serve';
    } catch (error) {
      alertMessage.value = 'Publication status has failed to update';
    }
  };

  const deleteProductCategoryFromStore = async id => {
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
    categoryStore,
    /*methods*/
    createProductCateory,
    retrieveCategoriesFromStore,
    updateProductCategory,
    updatePublicationStatusOfProductCategory,
    deleteProductCategoryFromStore,
  };
});
