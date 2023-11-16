<template>
  <div
    class="py-3"
    :class="{
      'w-1/6': !sidebarView && !mobileView,
      'w-1/12': sidebarView && !mobileView,
      'w-0 hidden': sidebarView && mobileView,
    }">
    <Logo
      class="fixed left-0 top-0"
      :class="{
        'w-1/6': !sidebarView,
        'w-1/12': sidebarView,
        'w-0 hidden': sidebarView && mobileView,
      }" />
    <div
      class="mt-[52.5px] fixed float-right h-screen px-3"
      :class="{
        'w-1/6 overflow-y-scroll custom-overflowscroll': !sidebarView,
        'w-1/12 overflow-y-scroll custom-overflowscroll': sidebarView,
        'w-0 hidden': sidebarView && mobileView,
      }">
      <Menu />
    </div>
  </div>
</template>

<script>
import { Menu } from "@headlessui/vue";
import Logo from "../components/Topbar/Logo.vue";
import {
  mobileView,
  sidebarView,
} from "../scripts/leftsidebar/layoutcontroller";

export default {
  name: "Rightsidebar",
  components: {
    Logo,
    Menu,
  },
  setup() {
    return {
      sidebarView,
      mobileView,
    };
  },
};
</script>
