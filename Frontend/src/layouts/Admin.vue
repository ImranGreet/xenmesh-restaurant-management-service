<template>
  <section>
    <Topbardesktop />
    <div>
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import Topbardesktop from "../components/Topbar/Topbardesktop.vue";

export default {
  name: "Admin",
  components: {
    Topbardesktop,
  },
};
</script>

<style></style>
