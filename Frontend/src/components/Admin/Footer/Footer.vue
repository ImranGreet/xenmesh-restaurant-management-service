<template>
  <footer
    class="w-full flex justify-center lg:justify-between items-center px-8 py-4 bg-inherit border-t border-gray-500/25 shadow-xl">
    <div class="text-center lg:text-start">
      <h1 class="text-lg tracking-wider leading-relaxed">
        <span>{{ currentYear }}</span> <span>&#169;</span>
        Xenmesh Incorporation
      </h1>
    </div>
    <!-- links -->
    <div
      class="lg:flex justify-between items-center text-center space-x-4 hidden">
      <router-link to="#">About</router-link>
      <router-link to="#">Support</router-link>
      <router-link to="#">Contact Us</router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  setup() {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    return {
      currentYear,
    };
  },
};
</script>

<style></style>
