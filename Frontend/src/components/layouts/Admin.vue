<template>
  <div
    class="w-full flex justify-between items-center shadow-md bg-blue-200/10 px-6 py-2"
  >
    <Topbarfirst />
    <Topbarsecond />
  </div>
  <profile />
  <notifications />
</template>

<script>
import Topbarfirst from "../Sidebar/Topbarfirst.vue";
import Topbarsecond from "../Sidebar/Topbarsecond.vue";
import profile from "../Dropdown/Profile.vue";
import notifications from "../Dropdown/Notifications.vue";

export default {
  name: "Admin",
  components: {
    Topbarfirst,
    Topbarsecond,
    profile,
    notifications,
  },
  setup() {
    return {};
  },
};
</script>
