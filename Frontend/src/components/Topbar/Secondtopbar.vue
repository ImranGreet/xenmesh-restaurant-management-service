<template>
  <div class="w-full relative">
    <div class="w-full px-4 py-2">
      <div
        class="w-full flex justify-end items-center space-x-3 md:space-x-5 lg:space-x-8">
        <button>
          <i class="inline lg:hidden"
            ><font-awesome-icon icon="fa-solid fa-magnifying-glass"
          /></i>
        </button>

        <button class="p-1">
          <i class="text-xl">
            <font-awesome-icon icon="fa-regular fa-bell" />
          </i>
        </button>
        <button class="p-1">
          <i class="text-xl">
            <font-awesome-icon icon="fa-solid fa-gear" />
          </i>
        </button>
        <button class="p-1">
          <i class="text-xl">
            <font-awesome-icon icon="fa-solid fa-moon" />
          </i>
        </button>
        <button class="p-1">
          <i class="text-xl">
            <font-awesome-icon icon="fa-solid fa-compress" />
          </i>
        </button>
        <div role="button" class="p-1" @click="profileToggler()">
          <div class="flex justify-between items-center space-x-5">
            <img :src="profileImage" alt="" class="w-8 h-8 rounded-full" />
            <div class="space-y-1 text-start hidden lg:block">
              <h1 class="text-xl">John Doe</h1>
              <small>Admin</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Profile
      class="fixed left-0 sm:right-2 sm:left-auto w-[98%] mx-auto sm:max-w-[200px]"
      :class="{ block: profileDropDown, hidden: !profileDropDown }" />
  </div>
</template>

<script>
import { ref } from "vue";
import Profile from "../Dropdown/Profile.vue";
/*scripts*/
import {
  profileDropDown,
  profileToggler,
} from "../../scripts/topbar/topbarcontroller";
export default {
  name: "Secondtopbar",
  components: {
    Profile,
  },
  setup() {
    const profileImage = ref(
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
    return {
      profileImage,
      profileDropDown,
      profileToggler,
    };
  },
};
</script>

<style></style>
