<template>
  <div class="flex space-x-2">
    <div class="w-4 h-4 bg-blue-500 rounded-full bounce bounce1"></div>
    <div class="w-4 h-4 bg-blue-500 rounded-full bounce bounce2"></div>
    <div class="w-4 h-4 bg-blue-500 rounded-full bounce bounce3"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}
.bounce {
  animation: bounce 1s infinite;
}
.bounce1 {
  animation-delay: 0s;
}
.bounce2 {
  animation-delay: 0.2s;
}
.bounce3 {
  animation-delay: 0.4s;
}
</style>
