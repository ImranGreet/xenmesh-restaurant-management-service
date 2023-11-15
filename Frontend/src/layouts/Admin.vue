<template>
  <section
    ref="fullscreenElement"
    class="h-screen"
    :class="{
      'overflow-hidden': seetingsView,
      'overflow-auto': !seetingsView,
    }">
    <Topbardesktop
      class="fixed topbarLayout float-right top-0 right-0 z-[999] bg-white" />
    <Rightsidebar class="float-left" :style="{ width: customWidth }" />
    <!-- main -->
    <div class="w-5/6 float-right mt-[60px] pl-0 pr-2">
      <div class="pl-4">
        <router-view />
      </div>
    </div>
    <Setting
      class="fixed top-0 right-0 md:w-2/4 lg:w-1/4 h-full z-50"
      :class="{
        'hidden sm:block': seetingsView,
        hidden: !seetingsView,
      }"></Setting>
    <div
      class="fixed right-0 inset-y-0 bg-gray-900/30 w-full z-20 h-screen"
      :class="{ block: seetingsView, hidden: !seetingsView }"></div>
  </section>
</template>

<script>
import Setting from "../components/Settings/Setting.vue";
import Topbardesktop from "../components/Topbar/Topbardesktop.vue";
import Rightsidebar from "./Rightsidebar.vue";
import Logo from "../components/Topbar/Logo.vue";

/*script*/
import { fullscreenElement } from "../scripts/screen/Fullscreen";
import { seetingsView } from "../scripts/topbar/topbarcontroller";
import {
  resizeController,
  customWidth,
} from "../scripts/Layout/layoutonresize";

export default {
  name: "Admin",
  components: {
    Topbardesktop,
    Setting,
    Rightsidebar,
    Logo,
  },
  setup() {
    return {
      fullscreenElement,
      seetingsView,
      customWidth,
    };
  },
};
</script>
