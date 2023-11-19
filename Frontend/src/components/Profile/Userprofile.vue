<template>
  <div class="w-full flex flex-col jsutify-center items-center">
    <img
      :src="userProfileImage"
      :alt="profileName"
      class="w-12 h-12 rounded-full" />
    <h4 class="text-base tracking-wider" :class="{ hidden: sidebarView }">
      {{ profileName }}
    </h4>
  </div>
</template>

<script>
import { ref } from "vue";
import { sidebarView } from "../../scripts/leftsidebar/layoutcontroller";

export default {
  name: "Userprofile",
  setup() {
    const userProfileImage = ref(
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
    const profileName = ref("Xennifer Ahmed");
    return {
      userProfileImage,
      profileName,
      sidebarView,
    };
  },
};
</script>
