<template>
  <div class="p-6 bg-white rounded-lg max-w-3xl mx-auto">
    <!-- Restaurant Header -->
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold mb-2 print:text-2xl print:text-gray-700/60">
        Xenmesh
      </h1>
      <p class="text-sm text-gray-500">Fine Dining Experience</p>
    </div>

    <!-- Invoice Details -->
    <div class="mb-8">
      <div class="flex justify-between items-center">
        <div>
          <p class="text-sm text-gray-500">Invoice #: {{ invoiceNumber }}</p>
          <p class="text-sm text-gray-500">Date: {{ date }}</p>
        </div>
        <div class="text-right">
          <h2 class="text-xl font-semibold">Customer Details</h2>
          <p>{{ customer.name }}</p>
          <p>{{ customer.email }}</p>
        </div>
      </div>
    </div>

    <!-- Order Details -->
    <div class="mb-8">
      <h2 class="text-xl font-semibold mb-4">Order Details</h2>
      <table class="w-full border-collapse print:border-none">
        <thead>
          <tr class="bg-gray-100">
            <th class="border-b px-4 py-2 text-left">Item</th>
            <th class="border-b px-4 py-2 text-left">Quantity</th>
            <th class="border-b px-4 py-2 text-left">Unit Price</th>
            <th class="border-b px-4 py-2 text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="order in itemsToBePurchased"
            :key="order.id"
            class="border-b">
            <td class="border print:border-none px-4 py-2">
              {{ order.title }}
            </td>
            <td class="border print:border-none px-4 py-2">
              {{ order.quantity }}
            </td>
            <td class="border print:border-none px-4 py-2">
              {{ formatPrice(order.price) }}
            </td>
            <td class="border print:border-none px-4 py-2">
              {{ formatPrice(order.quantity * order.price) }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Total Amount -->
    <div class="text-right mt-8">
      <p class="text-xl font-semibold print:text-lg">
        Total: {{ formatPrice(totalAmount) }}
      </p>
      <p class="text-lg font-normal">Discount: 5.00</p>
      <p class="text-lg font-normal inline-block text-right">------------</p>
      <p class="text-lg font-normal">
        Payable {{ formatPrice(totalAmount - 5) }}
      </p>
      <p class="text-lg font-normal inline-block text-right">------------</p>
      <p class="text-lg font-normal">5% VAT on 81.00: 6.17</p>
      <p class="text-lg font-normal inline-block text-right">------------</p>
      <p class="text-lg font-normal">
        Net Payable <span></span> {{ formatPrice(totalAmount - 5 + 6.17) }}
      </p>
    </div>

    <!-- Print Button -->
    <button
      @click="printInvoice"
      class="mt-6 text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded print:hidden">
      Print Invoice
    </button>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import { itemsToBePurchased } from '../../../scripts/Admin/Order/manager';

export default {
  name: 'OrderInvoice',
  setup() {
    const invoiceNumber = ref('INV-2024-01');
    const date = ref(new Date().toLocaleDateString());
    const customer = ref({
      name: 'Jane Doe',
      email: 'jane.doe@example.com',
    });
    const orders = ref([
      { id: 1, item: 'Grilled Salmon', quantity: 2, price: 25 },
      { id: 2, item: 'Caesar Salad', quantity: 1, price: 12 },
      { id: 3, item: 'Chocolate Cake', quantity: 3, price: 8 },
    ]);

    const totalAmount = computed(() =>
      itemsToBePurchased.value.reduce(
        (total, order) => total + order.quantity * order.price,
        0,
      ),
    );

    const formatPrice = value => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(value);
    };

    const printInvoice = () => {
      window.print();
    };

    return {
      invoiceNumber,
      date,
      customer,
      orders,
      totalAmount,
      formatPrice,
      printInvoice,
      itemsToBePurchased,
    };
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
