<template>
  <div
    class="w-full flex justify-between items-center px-10 py-2 border-b border-gray-700/25"
  >
    <Topbarfirst />
    <Topbarsecond />
  </div>
</template>

<script>
import Topbarfirst from "../sidebarProperties/Topbarfirst.vue";
import Topbarsecond from "../sidebarProperties/Topbarsecond.vue";
export default {
  name: "Topbar",
  components: {
    Topbarfirst,
    Topbarsecond,
  },
};
</script>
