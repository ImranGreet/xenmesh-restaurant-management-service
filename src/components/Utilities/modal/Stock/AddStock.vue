<template>
  <section class="full-screen-center bg-gray-100/60 p-6">
    <div
      class="w-full max-w-3xl bg-white border border-gray-200 p-6 rounded-lg shadow-lg relative"
      :class="{
        'toggle-screen-animation': showAnimation,
      }">
      <div class="text-center mb-6">
        <h2 class="text-2xl font-semibold text-gray-800">
          Add Item Stock
        </h2>
      </div>
      <form @submit.prevent class="space-y-4">
        <div>
          <label for="item_name" class="block text-sm font-medium text-gray-700">
            Item Name Or Code
          </label>
          <input
            type="text"
            id="item_name"
            placeholder="Enter Item Name or Code"
            class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div class="flex space-x-4">
          <div class="w-1/3">
            <label for="category" class="block text-sm font-medium text-gray-700">
              Item Category
            </label>
            <input
              type="text"
              id="category"
              placeholder="Enter Item Category"
              class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div class="w-1/3">
            <label for="subcategory" class="block text-sm font-medium text-gray-700">
              Subcategory
            </label>
            <input
              type="text"
              id="subcategory"
              placeholder="Enter Item Subcategory"
              class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
          <div class="w-1/3">
            <label for="unit" class="block text-sm font-medium text-gray-700">
              Unit
            </label>
            <input
              type="text"
              id="unit"
              placeholder="Enter Unit"
              class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
          </div>
        </div>

        <div>
          <label for="invoice" class="block text-sm font-medium text-gray-700">
            Invoice
          </label>
          <input
            type="file"
            id="invoice"
            class="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>

        <div>
          <button type="submit" class="w-full px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
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

export default {
  name: 'AddStock',
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
    const showAnimation = ref(props.AnimationProperty);

    watch(
      () => props.AnimationProperty,
      (newVal) => {
        showAnimation.value = newVal;
      },
    );

    const showOverlayoutOnOff = () => {
      // Functionality for toggling overlay
    };

    return {
      showAnimation,
      showOverlayoutOnOff,
    };
  },
};
</script>

<style>
.toggle-screen-animation {
  animation: slide-in 0.3s ease-out;
}

@keyframes slide-in {
  from {
    transform: translateY(-10%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
