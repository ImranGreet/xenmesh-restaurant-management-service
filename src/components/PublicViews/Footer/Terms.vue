<template>
  <div class="bg-inherit text-white">
    <div class="flex justify-between items-center">
      <!-- social sites -->
      <div class="flex items-center justify-between space-x-8">
        <a href="#"> Terms </a>
        <a href="#"> Privacy Policy </a>
        <p>
          <span>&#169;</span> {{ currentYear }}
          <span>Xenmesh Incorporation</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Terms',
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
