<template>
  <section class="layout__full-height flex-center flex-col bg-gray-100/60 p-6">
    <div
      class="modal__container"
      :class="{
        'toggle-screen-animation': showAnimation,
        'toggle-screen-animation': !showAnimation,
      }">
      <div class="form-title-box">
        <h2 class="form-title">Enter Product Information</h2>
      </div>
      <form
        @submit.prevent=""
        class="space-y-4">
        <div>
          <label
            for="product_title"
            class="form-label">
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
              class="form-label">
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
              class="form-label">
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
          <label class="form-label">Product Images</label>
          <div class="mt-2 flex space-x-4 justify-between">
            <div class="relative">
              <img
                :src="imageOne"
                alt=""
                class="preview-modal__image" />
              <button class="close-preview-image">x</button>
            </div>
            <div class="relative">
              <img
                :src="imageTwo"
                alt=""
                class="preview-modal__image" />
              <button class="close-preview-image">x</button>
            </div>
            <div class="relative">
              <img
                :src="imageThree"
                alt=""
                class="preview-modal__image" />
              <button class="close-preview-image">x</button>
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
            class="form-label"
            >Your message</label
          >
          <textarea
            id="message"
            rows="4"
            class="mt-1 form__input--field"
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
        class="modal__close--button">
        <XMarkIcon class="w-5 h-5" />
      </button>
    </div>
  </section>
</template>

<script>
import { ref, watch } from 'vue';
import { XMarkIcon } from '@heroicons/vue/24/solid';
import { showOverlayoutOnOff } from '../../../../scripts/public/modal/modal';

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
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    );
    const imageTwo = ref(
      'https://images.unsplash.com/photo-1515041761709-f9fc96e04cd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    );
    const imageThree = ref(
      'https://plus.unsplash.com/premium_photo-1663855531876-579d7016bb1e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    );

    const showAnimation = ref(props.AnimationProperty);

    watch(
      () => props.AnimationProperty,
      (newVal, oldVal) => {
        showAnimation.value = newVal;
      }
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
