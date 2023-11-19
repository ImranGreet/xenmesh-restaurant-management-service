<template>
  <section ref="fullscreenElement" class="h-screen bg-gray-50">
    <Topbardesktop
      class="float-right top-0 right-0 bg-white w-full static px-2"
      :class="{
        'sm:w-[70%] xl:w-[85%] fixed': !sidebarView,
        'sm:w-[90%] xl:w-[95%] fixed': sidebarView,
      }" />
    <Rightsidebar
      class="fixed float-left h-full hidden sm:block"
      :class="{
        ' w-[30%] xl:w-[10%]': !sidebarView,
        'w-[10%] xl:w-[5%]': sidebarView,
      }" />
    <!-- main -->
    <div
      class="float-right mt-[60px] px-1 w-full right-0 h-full z-0 overflow-y-auto"
      :class="{
        'sm:w-[70%] xl:w-[85%] fixed': !sidebarView,
        'sm:w-[90%] xl:w-[95%] fixed': sidebarView,
      }">
      <div
        class="w-full flex flex-col justify-between items-center z-0 h-full overflow-y-scroll">
        <router-view />
      </div>
    </div>
    <Setting
      class="fixed top-0 right-0 md:w-2/4 lg:w-1/4 h-full"
      :class="{
        'hidden sm:block z-[999]': seetingsView,
        hidden: !seetingsView,
      }"></Setting>
    <div
      class="fixed right-0 inset-y-0 bg-gray-900/30 w-full h-screen"
      :class="{ 'block z-[500]': seetingsView, hidden: !seetingsView }"></div>

    <Footer
      class="w-full fixed bottom-0 z-[599] bg-white float-right right-0"
      :class="{
        'sm:w-[70%] xl:w-[85%] fixed': !sidebarView,
        'sm:w-[90%] xl:w-[95%] fixed': sidebarView,
      }" />
  </section>
</template>

<script>
import Setting from "../components/Settings/Setting.vue";
import Topbardesktop from "../components/Topbar/Topbardesktop.vue";
import Rightsidebar from "./Rightsidebar.vue";
import Logo from "../components/Topbar/Logo.vue";
import Footer from "../components/Footer/Footer.vue";

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
import { discloseMenuBarOnHover } from "../scripts/rightsidebar/togglelink";

export default {
  name: "Admin",
  components: {
    Topbardesktop,
    Setting,
    Rightsidebar,
    Logo,
    Footer,
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
      discloseMenuBarOnHover,
    };
  },
};
</script>
