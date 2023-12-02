<template>
  <div class="w-full bg-inherit">
    <div class="w-full flex justify-start items-center space-x-20">
      <div class="flex space-x-6 justify-between items-center">
        <router-link to="/">
          <h1 class="text-xl tracking-wide leading-normal">Xenmesh</h1>
        </router-link>
        <div class="flex flex-col justify-start items-center text-center">
          <button
            class="border border-pink-600 rounded-2xl px-3 py-0.5 bg-pink-800 text-white">
            Branch
          </button>
          <small>Gulsan</small>
        </div>
      </div>
      <ul class="flex justify-between items-center gap-x-3">
        <li><router-link to="/">Home</router-link></li>
        <li>
          <router-link :to="{ name: 'category', params: { category: 'cat' } }"
            >Menu</router-link
          >
        </li>
        <li><router-link :to="{ name: 'offer' }">Offers</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Firsttopbar',
};
</script>
