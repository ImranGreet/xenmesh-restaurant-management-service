import { defineStore } from "pinia";
import axios from "axios";
import { ref } from "vue";


const useSliderStore = defineStore("sliderStore", () => {
  const alertMessage = ref(null);
  const sliders = ref([]);

  const retrieveSlidersFromDB = async () => {
    try {
      const response = await axios.get("https://backendevony.evony.me/api/admin/get_sliders");
      sliders.value = response.data; 
      alertMessage.value = "Sliders retrieved successfully!";
    } catch (error) {
      alertMessage.value = "Failed to retrieve sliders.";
      console.error(error);
    }
  };

  const deleteSlider = async (id) => {
    try {
      await axios.delete(`https://backendevony.evony.me/api/admin/deleteSlider/${id}`);
      sliders.value = sliders.value.filter(slider => slider.id !== id); 
      alertMessage.value = "Slider deleted successfully!";
    } catch (error) {
      alertMessage.value = "Failed to delete slider.";
      console.error(error);
    }
  };

  const createSlider = async (sliderData, headers = {}) => {

    try {
      await axios.post("https://backendevony.evony.me/api/admin/createSlider", sliderData, { headers });
      await retrieveSlidersFromDB(); 
      alertMessage.value = "Slider created successfully!";
    } catch (error) {
      alertMessage.value = "Failed to create slider.";
      console.error(error);
    }
  };

  const updateSlider = async (id, sliderData, headers = {}) => {
    try {
      await axios.put(`https://backendevony.evony.me/api/admin/updateSlider/${id}`, sliderData, { headers });
      await retrieveSlidersFromDB(); 
      alertMessage.value = "Slider updated successfully!";
    } catch (error) {
      alertMessage.value = "Failed to update slider.";
      console.error(error);
    }
  };

  return {
    alertMessage,
    sliders,
    retrieveSlidersFromDB,
    deleteSlider,
    createSlider,
    updateSlider
  };
});

export default useSliderStore;
