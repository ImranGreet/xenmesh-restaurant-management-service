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
    
            <div class="flex space-x-4">
              <div class="w-1/2">
                <label
                  for="category"
                  class="block text-sm font-medium text-gray-700">
                  Select a Category
                </label>
                <select
                  id="category"
                  class="mt-1 form__input--field">
                  <option selected>Choose a Category</option>
                  <option value="Pasta">Pasta</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Appetizer">Appetizer</option>
                  <option value="Fruits">Fruits</option>
                </select>
              </div>
              <div class="w-1/2">
                <label
                  for="price"
                  class="block text-sm font-medium text-gray-700">
                  Price
                </label>
                <input
                  type="number"
                  id="price"
                  placeholder="Enter Product price"
                  class="mt-1 form__input--field" />
              </div>
            </div>
    
            <div>
              <label class="block text-sm font-medium text-gray-700"
                >Product Images</label
              >
              <div class="mt-2 flex space-x-4 justify-between">
                <div class="relative">
                  <img
                    :src="imageOne"
                    alt=""
                    class="w-36 h-24 object-cover rounded-md border border-gray-300" />
                  <button class="absolute top-0 right-0 preview-image-item">
                    x
                  </button>
                </div>
                <div class="relative">
                  <img
                    :src="imageTwo"
                    alt=""
                    class="w-36 h-24 object-cover rounded-md border border-gray-300" />
                  <button class="absolute top-0 right-0 preview-image-item">
                    x
                  </button>
                </div>
                <div class="relative">
                  <img
                    :src="imageThree"
                    alt=""
                    class="w-36 h-24 object-cover rounded-md border border-gray-300" />
                  <button class="absolute top-0 right-0 preview-image-item">
                    x
                  </button>
                </div>
              </div>
              <div class="mt-4">
                <input
                  type="file"
                  class="form__input--file" />
              </div>
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
      props: {
        AnimationProperty: {
          type: Boolean,
          required: true,
        },
      },
      setup(props) {
        const imageOne = ref(
          'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        );
        const imageTwo = ref(
          'https://images.unsplash.com/photo-1515041761709-f9fc96e04cd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        );
        const imageThree = ref(
          'https://plus.unsplash.com/premium_photo-1663855531876-579d7016bb1e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        );
    
        const showAnimation = ref(props.AnimationProperty);
    
        watch(
          () => props.AnimationProperty,
          (newVal, oldVal) => {
            showAnimation.value = newVal;
          },
        );
    
        return {
          imageOne,
          imageTwo,
          imageThree,
          showAnimation,
          showOverlayoutOnOff,
        };
      },
    };
    </script>
    