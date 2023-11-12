<template>
  <section ref="fullscreenElement">
    <Topbardesktop />
    <div>
      <router-view></router-view>
    </div>
  </section>
</template>

<script>
import Topbardesktop from "../components/Topbar/Topbardesktop.vue";
import { fullscreenElement } from "../scripts/screen/Fullscreen";

export default {
  name: "Admin",
  components: {
    Topbardesktop,
  },
  setup() {
    return {
      fullscreenElement,
    };
  },
};
</script>

<style></style>
