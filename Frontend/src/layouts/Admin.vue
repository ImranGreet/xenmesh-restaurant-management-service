<template>
  <section ref="fullscreenElement" class="h-screen">
    <Topbardesktop
      class="float-right top-0 right-0 bg-white"
      :class="{
        'w-[70%] xl:w-[85%] fixed': !sidebarView && !mobileView,
        'w-[90%] xl:w-[95%] fixed': sidebarView && !mobileView,
        'w-full static px-2': mobileView,
      }" />
    <Rightsidebar
      class="fixed float-left h-full"
      :class="{
        hidden: mobileView,
        ' w-[30%] xl:w-[10%]': !sidebarView && !mobileView,
        'w-[10%] xl:w-[5%]': sidebarView && !mobileView,
      }" />
    <!-- main -->
    <div class="float-right mt-[60px] px-1">
      <div class="pl-4 bg-red-600">
        <router-view />
      </div>
    </div>
    <Setting
      class="fixed top-0 right-0 md:w-2/4 lg:w-1/4 h-full"
      :class="{
        'hidden md:block z-[999]': seetingsView,
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
  mobileView,
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
      mobileView,
      /*compose function*/
      sidebarController,
    };
  },
};
</script>
