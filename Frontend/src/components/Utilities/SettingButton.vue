<template>
  <button class="w-24 h-24 border border-gray-600/50 bg-blue-500/20">
    <div class="w-full h-full flex flex-row justify-between items-center">
      <div class="w-1/3 h-full border-r border-gray-900/50">
        <div
          class="w-full h-full p-2 flex flex-col justify-between items-start"
        >
          <span class="p-2 bg-gray-900/50"></span>
          <span class="p-1.5 bg-gray-500"></span>
          <span class="p-1.5 bg-gray-500"></span>
          <span class="p-1.5 bg-gray-500"></span>
          <span class="p-1.5 bg-gray-500"></span>
        </div>
      </div>
      <div class="w-2/3 h-full bg-red-50"></div>
    </div>
  </button>
</template>

<script>
export default {
  name: "SettingButton",
};
</script>
