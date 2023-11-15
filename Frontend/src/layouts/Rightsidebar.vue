<template>
  <div class="w-1/6 py-3">
    <Logo class="fixed left-0 w-1/6 top-0" />
    <div
      class="w-1/6 mt-[52.5px] fixed float-right h-screen overflow-y-scroll custom-overflowscroll px-3"></div>
  </div>
</template>

<script>
import Logo from "../components/Topbar/Logo.vue";

export default {
  name: "Rightsidebar",
  components: {
    Logo,
  },
};
</script>
