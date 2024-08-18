<template>
  <section class="full-screen-center bg-gray-100/60 p-6">
    <div
      class="w-full max-w-3xl bg-white border border-gray-200 p-6 rounded-lg shadow-lg relative"
      :class="{
        'toggle-screen-animation': showAnimation,
        'toggle-screen-animation': !showAnimation,
      }">
      <div class="text-center mb-6">
        <h2 class="text-2xl font-semibold text-gray-800">
          Enter Product Information
        </h2>
      </div>
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
      <button
        @click="showOverlayoutOnOff"
        class="absolute top-0 right-0 bg-gray-500 text-white rounded-full p-1 hover:bg-red-600 focus:outline-none">
        <XMarkIcon class="w-5 h-5" />
      </button>
    </div>
  </section>
</template>
    
    <script>
import { ref, watch } from 'vue';
import { XMarkIcon } from '@heroicons/vue/24/solid';
import { showOverlayoutOnOff } from '../../../scripts/public/modal/modal';

export default {
  name: 'AddProduct',
  components: {
    XMarkIcon,
  },

  setup() {
    return {
      showAnimation,
      showOverlayoutOnOff,
    };
  },
};
</script>
    