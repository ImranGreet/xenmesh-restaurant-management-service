<template>
  <div class="w-full bg-inherit">
    <div
      class="w-full flex flex-col justify-between items-start border border-gray-400/25 rounded-md px-4 py-3">
      <div class="w-full flex justify-between items-center">
        <p>Total Items</p>
        <p><span></span>12</p>
      </div>
      <div class="w-full flex justify-between items-center">
        <p>Subtotal</p>
        <p><span>$</span>1250</p>
      </div>
      <div class="w-full flex justify-between items-center">
        <p>Discount</p>
        <p><span>$</span>1250</p>
      </div>
      <div class="w-full flex justify-between items-center">
        <p>Delivery Charge</p>
        <p><span>$</span>1250</p>
      </div>
      <div
        class="w-full flex justify-between items-center font-semibold border-t border-dashed border-gray-800">
        <p>Total</p>
        <p><span>$</span>1250</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TotalPrice',
};
</script>
