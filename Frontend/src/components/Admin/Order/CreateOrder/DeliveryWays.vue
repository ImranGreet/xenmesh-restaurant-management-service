<template>
  <div
    class="w-full flex justify-between gap-2 flex-wrap py-2 border border-gray-700/25 p-2 mb-3 rounded-sm">
    <!-- HTML with Tailwind CSS classes -->
    <div class="flex items-center">
      <input
        type="radio"
        id="foodpandaButton"
        name="foodDelivery"
        class="hidden" />
      <label
        for="foodpandaButton"
        class="cursor-pointer flex items-center space-x-2 text-gray-700">
        <div
          class="w-8 h-8 border-2 border-pink-500 rounded-full flex items-center justify-center">
          <svg
            class="w-5 h-5 text-pink-500 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <circle
              cx="12"
              cy="12"
              r="10"
              stroke="#FF4081"
              stroke-width="2" />
            <circle
              cx="12"
              cy="12"
              r="6"
              fill="#FF4081" />
            <rect
              x="10"
              y="2"
              width="4"
              height="8"
              rx="1"
              fill="#FF4081"
              transform="rotate(45 10 2)" />
          </svg>
        </div>
        <span>Foodpanda</span>
      </label>
    </div>

    <!-- uber eats -->

    <!-- HTML with Tailwind CSS classes -->
    <div class="flex items-center">
      <input
        type="radio"
        id="uberEatsButton"
        name="foodDelivery"
        class="hidden" />
      <label
        for="uberEatsButton"
        class="cursor-pointer flex items-center space-x-2 text-gray-700">
        <div
          class="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center">
          <svg
            class="w-5 h-5 text-black fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <rect
              x="2"
              y="2"
              width="20"
              height="20"
              rx="2"
              ry="2"
              fill="none"
              stroke="#000000"
              stroke-width="2" />
            <path
              d="M12 3v18"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round" />
            <path
              d="M5 12h14"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round" />
          </svg>
        </div>
        <span>Uber Eats</span>
      </label>
    </div>

    <!-- HTML with Tailwind CSS classes -->
    <div class="flex items-center">
      <input
        type="radio"
        id="pathoDeliveryButton"
        name="foodDelivery"
        class="hidden" />
      <label
        for="pathoDeliveryButton"
        class="cursor-pointer flex items-center space-x-2 text-gray-700">
        <div
          class="w-8 h-8 border-2 border-black rounded-full flex items-center justify-center">
          <svg
            class="w-5 h-5 text-black fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-2-14h4v8h-4z" />
          </svg>
        </div>
        <span>Patho </span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DeliveryWays',
  setup() {
    return {};
  },
};
</script>

<style></style>
