<template>
  <section
    ref="fullscreenElement"
    class="h-screen"
    :class="{
      'overflow-hidden': seetingsView,
      'overflow-auto': !seetingsView,
    }">
    <Topbardesktop
      class="fixed float-right top-0 right-0 bg-white"
      :class="{
        topbarLayout: !sidebarView,
        topbarLayoutSidebar: sidebarView,
        'z-0': seetingsView,
        'z-[999]': !seetingsView,
      }" />
    <Rightsidebar
      class="float-left"
      :class="{ 'w-1/6': !sidebarView, 'w-1/12': sidebarView }" />
    <!-- main -->
    <div
      class="float-right mt-[60px] pl-0 pr-2"
      :class="{ 'w-5/6': !sidebarView, 'w-11/12': sidebarView }">
      <div class="pl-4">
        <router-view />
      </div>
    </div>
    <Setting
      class="fixed top-0 right-0 md:w-2/4 lg:w-1/4 h-full"
      :class="{
        'hidden xl:block z-[999]': seetingsView,
        hidden: !seetingsView,
      }"></Setting>
    <div
      class="fixed right-0 inset-y-0 bg-gray-900/30 w-full h-screen"
      :class="{ 'block z-[500]': seetingsView, hidden: !seetingsView }"></div>
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
  sidebarController,
  sidebarView,
} from "../scripts/leftsidebar/layoutcontroller";
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
      sidebarView,
      /*compose function*/
      sidebarController,
    };
  },
};
</script>
