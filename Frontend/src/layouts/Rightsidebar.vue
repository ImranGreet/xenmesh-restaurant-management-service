<template>
  <div class="py-3">
    <Logo
      class="fixed left-0 top-0 hidden sm:block"
      :class="{
        'w-[30%] xl:w-[15%]': !mobileView && !sidebarView,
        'w-[10%] xl:w-[5%]': !mobileView && sidebarView,
      }" />
    <div
      class="mt-[20px] md:mt-[45px] lg:mt-[48px] xl:mt-[45.5px] fixed float-right h-screen border-r-2 border-red-700/50"
      :class="{
        'w-[30%] xl:w-[15%]': !sidebarView,
        'w-[10%] xl:w-[5%]': sidebarView,
      }">
      <router-link to="#" class="w-full px-3 py-2 space-y-4">
        <Userprofile />
      </router-link>
      <div
        class="w-full overflow-x-hidden custom-overflowscroll h-[80%] px-0 md:px-2 lg:px-3 xl:px-4">
        <div
          v-for="(sidebarLink, index) in useLeftSideBarRouterLink"
          :key="index">
          <Menu
            :routerLinkId="sidebarLink.id"
            :routerLink="sidebarLink.paths"
            :componentText="sidebarLink.largeIcon">
            {{ sidebarLink.name }}
          </Menu>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Topbar/Logo.vue";
import Userprofile from "../components/Utilities/Userprofile.vue";
import Menu from "../components/Righsidebar/Menu.vue";

import {
  mobileView,
  sidebarView,
} from "../scripts/leftsidebar/layoutcontroller";
import useLeftSideBarRouterLink from "../scripts/rightsidebar/menuitems";

export default {
  name: "Rightsidebar",
  components: {
    Logo,
    Menu,
    Userprofile,
  },
  setup() {
    return {
      sidebarView,
      mobileView,
      useLeftSideBarRouterLink,
    };
  },
};
</script>
