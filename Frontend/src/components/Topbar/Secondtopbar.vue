<template>
  <div class="w-full relative">
    <div class="w-full px-1">
      <div
        class="w-full flex justify-end items-center space-x-3 md:space-x-5 lg:space-x-8">
        <button @click="toggleSearchForm()" class="smallSearch">
          <i class="inline sm:hidden"
            ><font-awesome-icon icon="fa-solid fa-magnifying-glass"
          /></i>
        </button>

        <button @click="notificationsToggler()" class="p-1 notificationsView">
          <i class="text-xl">
            <font-awesome-icon icon="fa-regular fa-bell" />
          </i>
        </button>
        <button
          @click="settingsViewToggler()"
          class="p-1 hidden md:inline settingsViews">
          <i class="text-xl">
            <font-awesome-icon icon="fa-solid fa-gear" />
          </i>
        </button>
        <button class="p-1">
          <i class="text-xl">
            <font-awesome-icon icon="fa-solid fa-moon" />
          </i>
        </button>
        <button @click="toggleFullScreen()" class="p-1">
          <i class="text-xl">
            <font-awesome-icon
              icon="fa-solid fa-compress"
              :class="{ inline: fullScreen, hidden: !fullScreen }" />
            <font-awesome-icon
              icon="fa-solid fa-expand"
              :class="{ inline: !fullScreen, hidden: fullScreen }" />
          </i>
        </button>
        <div role="button" class="p-1 profileView" @click="profileToggler()">
          <div class="flex justify-between items-center space-x-5">
            <img
              :src="profileImage"
              alt=""
              class="w-5 md:w-8 h-5 md:h-8 rounded-full" />
            <div class="space-y-1 text-start hidden xl:block">
              <h1 class="text-xl">John Doe</h1>
              <small>Admin</small>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Profile
      class="fixed left-0 sm:right-2 sm:left-auto w-[100%] mx-auto sm:max-w-[200px]"
      :class="{ block: profileDropDown, hidden: !profileDropDown }" />
    <Notifications
      class="fixed left-0 right-auto sm:right-[11.5rem] md:right-52 lg:right-96 sm:left-auto w-[100%] z-[999] mx-auto sm:w-[300px]"
      :class="{
        block: notificationsDropDown,
        hidden: !notificationsDropDown,
      }" />

    <Dropsearchform
      class="fixed left-0 right-0 w-[100%]"
      :class="{
        'block sm:hidden': searchDropDown,
        hidden: !searchDropDown,
      }" />
  </div>
</template>

<script>
import { ref } from "vue";
import Profile from "../Dropdown/Profile.vue";
import Notifications from "../Dropdown/Notifications.vue";
import Setting from "../Settings/Setting.vue";
/*scripts*/
import {
  profileDropDown,
  profileToggler,
  notificationsDropDown,
  notificationsToggler,
  searchDropDown,
  toggleSearchForm,
  seetingsView,
  settingsViewToggler,
} from "../../scripts/topbar/topbarcontroller";
import { toggleFullScreen, fullScreen } from "../../scripts/screen/Fullscreen";
import Dropsearchform from "../Dropdown/Dropsearchform.vue";

export default {
  name: "Secondtopbar",
  components: {
    Profile,
    Notifications,
    Dropsearchform,
    Setting,
  },
  setup() {
    const profileImage = ref(
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    );
    return {
      profileImage,
      profileDropDown,
      notificationsDropDown,
      fullScreen,
      seetingsView,
      searchDropDown,
      notificationsToggler,
      profileToggler,
      toggleFullScreen,
      toggleSearchForm,
      settingsViewToggler,
    };
  },
};
</script>

<style></style>
