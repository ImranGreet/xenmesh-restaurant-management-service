<template>
  <section
    ref="fullscreenElement"
    class="relative h-screen"
    :class="{ 'overflow-hidden': seetingsView }">
    <Topbardesktop />
    <div>
      <router-view></router-view>
    </div>
    <Setting
      class="absolute top-0 right-0 md:w-2/4 lg:w-1/4 h-full z-50"
      :class="{
        'hidden sm:block': seetingsView,
        hidden: !seetingsView,
      }"></Setting>
    <div
      class="absolute right-0 inset-y-0 bg-gray-900/30 w-full z-20 h-screen"
      :class="{ block: seetingsView, hidden: !seetingsView }"></div>
  </section>
</template>

<script>
import Setting from "../components/Settings/Setting.vue";
import Topbardesktop from "../components/Topbar/Topbardesktop.vue";
/*script*/
import { fullscreenElement } from "../scripts/screen/Fullscreen";
import { seetingsView } from "../scripts/topbar/topbarcontroller";

export default {
  name: "Admin",
  components: {
    Topbardesktop,
    Setting,
  },
  setup() {
    return {
      fullscreenElement,
      seetingsView,
    };
  },
};
</script>

<style></style>
