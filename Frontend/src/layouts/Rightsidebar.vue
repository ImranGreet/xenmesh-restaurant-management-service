<template>
  <div class="py-3" :class="{ 'w-1/6': !sidebarView, 'w-1/12': sidebarView }">
    <Logo
      class="fixed left-0 top-0"
      :class="{ 'w-1/6': !sidebarView, 'w-1/12': sidebarView }" />
    <div
      class="mt-[52.5px] fixed float-right h-screen overflow-y-scroll custom-overflowscroll px-3"
      :class="{ 'w-1/6': !sidebarView, 'w-1/12': sidebarView }"></div>
  </div>
</template>

<script>
import Logo from "../components/Topbar/Logo.vue";
import { sidebarView } from "../scripts/leftsidebar/layoutcontroller";

export default {
  name: "Rightsidebar",
  components: {
    Logo,
  },
  setup() {
    return {
      sidebarView,
    };
  },
};
</script>
