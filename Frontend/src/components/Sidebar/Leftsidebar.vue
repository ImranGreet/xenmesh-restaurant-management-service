<template>
  <section>
    <div
      class="w-full flex flex-col bg-inherit min-h-[93vh] max-h-[93vh] overflow-x-hidden overflow-custome z-0 mt-[61px]">
      <Logo />
      <div class="mt-5"></div>
      <div
        v-for="(sidebarLink, index) in useLeftSideBarRouterLink"
        :key="index">
        <Navigations
          :routerLinkId="sidebarLink.id"
          :routerLink="sidebarLink.paths"
          :componentText="sidebarLink.largeIcon">
          {{ sidebarLink.name }}
        </Navigations>
      </div>
    </div>
  </section>
</template>

<script>
/*composables*/
import useLeftSideBarRouterLink from "../../composables/router-link";

import Logo from "../sidebarProperties/Logo.vue";
import Footer from "../Footer/Footer.vue";
import Navigations from "../Dropdown/Navigations.vue";

export default {
  name: "Admin",
  components: {
    Logo,
    Footer,
    Navigations,
  },
  setup() {
    return {
      useLeftSideBarRouterLink,
    };
  },
};
</script>

<style>
.overflow-custome {
  overflow-y: scroll;
}
.overflow-custome::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(56, 15, 15, 0.3);
  background-color: #f5f5f5;
}
.overflow-custome::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}
.overflow-custome::-webkit-scrollbar-thumb {
  background-color: #330a0a;
  border: 2px solid #555555;
}
</style>
