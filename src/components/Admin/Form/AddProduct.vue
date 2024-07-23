<template>
  <section
    class="w-full min-h-screen bg-inherit flex flex-col justify-center items-center">
    <div
      class="max-w-full lg:max-w-7xl mx-auto border border-inherit p-3 rounded-md shadow-sm shadow-gray-300 bg-white">
      <div class="w-full text-center border border-inherit p-2">
        <h2 class="text-xl tracking-wider leading-relax">
          Enter Product Information
        </h2>
      </div>
      <div class="bg-inherit w-full">
        <form @submit.prevent="" class="w-full flex flex-col justify-between items-center gap-y-2">
          <div class="w-full border border-inherit p-2 space-y-2">
            <label for="product_title">Product Title</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="Enter Product Title or name"
              class="w-full px-3 py-2 focus:outline-none placeholder:capitalize border border-gray-300 rounded-sm" />
          </div>

          <div
            class="w-full flex justify-between items-center border border-inherit p-2 gap-x-2">
            <div class="w-full border p-2 space-y-2">
              <label
                for="countries"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >Select a Category</label
              >
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm px-3 py-2 focus:outline-none accent-pink-500">
                <option selected>Choose a Category</option>
                <option value="Pasta">Pasta</option>
                <option value="Desert">Desert</option>
                <option value="appitizer">Appitizer</option>
                <option value="Fruits">Fruits</option>
              </select>
            </div>
            <div class="w-full border p-2 space-y-2">
              <label for="product_title">Price</label>
              <input
                type="number"
                name=""
                id=""
                placeholder="Enter Product price"
                class="w-full px-3 py-2 focus:outline-none placeholder:capitalize border border-gray-300 rounded-sm" />
            </div>
          </div>

          <div class="w-full border p-2 space-y-3">
            <label for="product_title">Product Images</label>
            <div class="w-full flex justify-between items-center gap-x-2">
              <div class="w-52 h-36 rounded-sm relative">
                <img
                  :src="imageOne"
                  alt=""
                  class="w-full h-full rounded-md" />
                <button
                  class="absolute -top-1 -right-1.5 text-red-600 rounded-full bg-white w-5 h-5 flex justify-center items-center">
                  x
                </button>
              </div>
              <div class="w-52 h-36 rounded-md relative">
                <img
                  :src="imageTwo"
                  alt=""
                  class="w-full h-full rounded-md" />
                <button
                  class="absolute -top-1 -right-1.5 text-red-600 rounded-full bg-white w-5 h-5 flex justify-center items-center">
                  x
                </button>
              </div>
              <div class="w-52 h-36 rounded-md relative">
                <img
                  :src="imageThree"
                  alt=""
                  class="w-full h-full rounded-md" />
                <button
                  class="absolute -top-1 -right-1.5 text-red-600 rounded-full bg-white w-5 h-5 flex justify-center items-center">
                  x
                </button>
              </div>
            </div>

            <div class="w-full border p-1 bg-slate-600/50">
              <input
                type="file"
                name=""
                id=""
                class="w-full px-3 py-2 focus:outline-none" />
            </div>
          </div>
          <div class="w-full">
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >Your message</label
            >
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border focus:outline-none border-gray-300 rounded-sm"
              placeholder="Write your thoughts here..."></textarea>
          </div>

          <div class="w-full border p-2 space-y-2">
            <label
              for="submit_button"
              class="sr-only"
              >Price</label
            >
            <button
              class="px-3 py-2 w-full focus outline-none bg-blue-600 text-white">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
import ProductImage from '../../../pages/Admin/Form/ProductImage.vue';

export default {
  name: 'AddProduct',
  components: {
    ProductImage,
  },
  setup() {
    const imageOne = ref(
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    );
    const imageTwo = ref(
      'https://images.unsplash.com/photo-1515041761709-f9fc96e04cd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    );
    const imageThree = ref(
      'https://plus.unsplash.com/premium_photo-1663855531876-579d7016bb1e?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    );

    return {
      imageOne,
      imageTwo,
      imageThree,
    };
  },
};
</script>
