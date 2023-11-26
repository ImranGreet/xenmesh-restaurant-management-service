<template>
  <div class="bg-inherit W-FULL">
      <form class="w-full flex flex-col justify-between      items-center">
            <div class="w-full space-y-2 border border-gray-200/25 px-2 py-3  bg-pink-600 text-white">
                  <h1  class="w-full text-xl">Payment Amount <span class="ml-3 select-none">0</span> </h1>
                  
            </div>
            <div class="w-full flex justify-between items-center space-x-3  pl-2 py-1">
                  <label for="subtotal" class="w-full text-base">Discount Rate (%)</label>
                  <input type="text" name="" id="" value="450"  class="w-full text-center px-4 py-1 focus:outline-none">
            </div>
            <div class="w-full flex justify-between items-center space-x-3  pl-2 py-1">
                  <label for="subtotal" class="w-full text-base">Discounted Amount</label>
                  <input type="text" name="" id="" value="450"  class="w-full text-center px-4 py-1 focus:outline-none">
            </div>
            <div class="w-full flex justify-between items-center space-x-3  pl-2 py-1">
                  <label for="subtotal" class="w-full text-sm">Amount After Discount</label>
                  <input type="text" name="" id="" value="450"  class="w-full text-center px-4 py-1 focus:outline-none">
            </div>
            <div class="w-full flex justify-between items-center space-x-3  pl-2 py-1">
                  <label for="subtotal" class="w-full text-base">Special Discount</label>
                  <input type="text" name="" id="" value="450"  class="w-full text-center px-4 py-1 focus:outline-none">
            </div>
            
            <div class="bg-stone-600 text-start text-white  px-2 py-3  w-full">
                  <h1 class="text-lg">Payment</h1>
            </div>

            <div class="w-full flex justify-between items-center space-x-3  pl-2  py-1">
                  <label for="subtotal" class="w-full">Payable Amounts</label>
                  <input type="text" name="" id="" value="450" readonly class="w-full text-center px-4 py-1 focus:outline-none select-none">
            </div>
            <div class="w-full flex justify-between items-center space-x-3  pl-2 py-1">
                  <label for="subtotal" class="w-full">Paid Amount</label>
                  <input type="text" name="" id="" value="450"  class="w-full text-center px-4 py-1 focus:outline-none">
            </div>
            <div class="w-full flex justify-between items-center space-x-3 pl-2 py-1">
                  <label for="subtotal" class="w-full">Change Amount</label>
                  <input type="text" name="" id="" value="450"  class="w-full text-center px-4 py-1 focus:outline-none">
            </div>
            <div class="w-full flex justify-between items-center space-x-3  pl-2  py-1">
                  <label for="subtotal" class="w-full">Due Amount</label>
                  <input type="text" name="" id="" value="450"  class="w-full text-center px-4 py-1 focus:outline-none">
            </div>
            <!-- confirm button -->
            <button class="px-2 py-3  tracking-wider bg-blue-700 text-white w-full">Confirm </button>
      </form>
  </div>
</template>

<script>
export default {
name:"PaymentForm",
}
</script>

