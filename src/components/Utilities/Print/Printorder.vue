<template>
  <section class="w-full max-h-screen min-h-[50vh] bg-slate-100">
    <div class="w-full h-full flex flex-col justify-center items-center">
      <div class="w-48 bg-inherit">
        <!-- resturant logo -->
        <div class="w-1/2 flex flex-col justify-center items-center">
          <h1 class="print:text-4xl print:tracking-wider print:leading-relaxed">
            {{ resturantLogoInText }}
          </h1>
        </div>
        <!-- contact info -->
        <div class="space-y-2">
          <h3 class="text-xl">Contact Info</h3>
          <div class="w-full divide-y-1">
            <p><span>Address</span> <span>:</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from 'vue';
export default {
  name: 'Printorder',
  setup() {
    let resturantLogoInText = ref('xenmesh');
    let contactDetails = {
      address: {
        city: 'Dhaka',
        street: '05',
        email: 'hossainimran1208@gmail.com',
        phone: '01912444216',
      },
    };
    const productsArray = [
      { id: 1, title: 'Product 1', price: 19.99, quantity: 3 },
      { id: 2, title: 'Product 2', price: 29.99, quantity: 2 },
      { id: 3, title: 'Product 3', price: 39.99, quantity: 5 },
      { id: 4, title: 'Product 4', price: 49.99, quantity: 1 },
      { id: 5, title: 'Product 5', price: 59.99, quantity: 4 },
      { id: 6, title: 'Product 6', price: 69.99, quantity: 2 },
      { id: 7, title: 'Product 7', price: 79.99, quantity: 3 },
      { id: 8, title: 'Product 8', price: 89.99, quantity: 1 },
      { id: 9, title: 'Product 9', price: 99.99, quantity: 2 },
      { id: 10, title: 'Product 10', price: 109.99, quantity: 4 },
    ];

    return {
      productsArray,
      resturantLogoInText,
      contactDetails,
    };
  },
};
</script>
