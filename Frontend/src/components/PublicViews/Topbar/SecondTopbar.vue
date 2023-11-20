<template>
  <div class="w-full bg-inherit">
    <div class="w-full">
      <ul class="flex justify-end items-center space-x-4">
        <li>
          <form class="inline-bloc">
            <input
              type="text"
              name=""
              id=""
              class="px-2 py-1 text-start pl-12 rounded-lg border border-gray-300 focus:outline-none" />
          </form>
        </li>
        <li>
          <button
            class="border border-gray-300 rounded-2xl px-3 py-0.5 bg-gray-800 text-white">
            English
          </button>
        </li>
        <li>
          <button
            class="border border-gray-300 rounded-2xl px-3 py-0.5 bg-gray-800 text-white">
            Order
          </button>
        </li>
        <li>
          <router-link
            to="#"
            class="border border-gray-300 rounded-2xl px-3 py-0.5 bg-pink-600 text-white"
            >Login</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Firsttopbar",
};
</script>
