<template>
  <section class="w-full min-h-screen">
    <div class="w-full min-h-screen flex flex-col justify-center items-center">
      <div class="flex flex-col justify-between gap-y-5 items-start">
        <h1
          class="text-9xl tracking-wider font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
          404
        </h1>
        <h1 class="text-xl tracking-wide font-semibold">Page Not Found</h1>
        <div>
          <router-link
            :to="{ name: 'public-home' }"
            class="px-3 py-2 border border-gray-800 text-gray-900 rounded-md"
            >Home</router-link
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: '404',
};
</script>

<style></style>
