<template>
  <FormContainerModal :ModalTitle="'Enter Product Information Category'" >

    <form
        @submit.prevent=""
        class="space-y-4">
        <div>
          <label
            for="product_title"
            class="block text-sm font-medium text-gray-700">
            Product Title
          </label>
          <input
            type="text"
            id="product_title"
            placeholder="Enter Product Title or name"
            class="mt-1 form__input--field" />
        </div>

        <div>
          <label
            for="message"
            class="block text-sm font-medium text-gray-700"
            >Your message</label
          >
          <textarea
            id="message"
            rows="4"
            class="mt-1 message-box"
            placeholder="Write your thoughts here..."></textarea>
        </div>

        <div>
          <button
            type="submit"
            class="form-submit-btn">
            Submit
          </button>
        </div>
      </form>

  </FormContainerModal>
  
</template>

<script>
import { ref, watch } from 'vue';
import { XMarkIcon } from '@heroicons/vue/24/solid';


export default {
  name: 'AddProduct',
  components: {
    XMarkIcon,
  },

  setup() {
    return {
    
    
    };
  },
};
</script>
