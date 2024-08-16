<template>
  <Transition name="fade">
    <div class="py-3">
      <Logo
        class="fixed left-0 top-0 hidden sm:block"
        :class="{
          'w-[30%] xl:w-[15%] toggle-screen-animation':
            !mobileView && !sidebarView,
          'w-[10%] xl:w-[5%] toggle-screen-animation':
            !mobileView && sidebarView,
        }" />

      <div
        class="mt-[20px] md:mt-[45px] lg:mt-[48px] xl:mt-[45.5px] fixed float-right h-screen border-r-2 border-red-700/50"
        :class="{
          'w-[30%] xl:w-[15%] toggle-screen-animation': !sidebarView,
          'w-[10%] xl:w-[5%] toggle-screen-animation': sidebarView,
        }">
        <Transition name="slide-fade">
          <router-link
            v-if="showUserProfile"
            :class="{ inline: showUserProfile, hidden: !showUserProfile }"
            to="#"
            class="w-full px-3 py-2 space-y-4">
            <Userprofile />
          </router-link>
        </Transition>

        <div
          class="space-y-4 px-3 py-2"
          :class="{ inline: !showUserProfile, hidden: showUserProfile }"></div>

        <div
          class="w-full overflow-x-hidden custom-overflowscroll h-[80%] px-0 md:px-2 lg:px-3 xl:px-4 relative">
          <router-link
            :to="{ name: 'order_creation' }"
            class="w-full h-5 flex items-center mb-4"
            :class="{
              'justify-center': !sidebarView,
              'justify-center': sidebarView,
            }">
            <font-awesome-icon
              icon="fa-solid fa-utensils"
              class="w-5 h-5 text-blue-600 tracking-wider text-3xl font-semibold" />
            <span
              :class="{
                'inline-block text-xl ml-5': !sidebarView,
                hidden: sidebarView,
              }"
              >Create Order</span
            >
          </router-link>
          <span></span>
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
  </Transition>
</template>

<script>
import Logo from '../components/Admin/Topbar/Logo.vue';
import Userprofile from '../components/Admin/Profile/Userprofile.vue';
import Menu from '../components/Admin/Righsidebar/Menu.vue';

import {
  mobileView,
  sidebarView,
  TransitionToggler,
} from '../scripts/Admin/leftsidebar/layoutcontroller';

import useLeftSideBarRouterLink from '../scripts/Admin/rightsidebar/menuitems';
import { showUserProfile } from '../scripts/Admin/utility/profile';

import { ref } from 'vue';

export default {
  name: 'Rightsidebar',
  components: {
    Logo,
    Menu,
    Userprofile,
  },
  setup() {
    return {
      sidebarView,
      mobileView,
      TransitionToggler,
      useLeftSideBarRouterLink,
      showUserProfile,
    };
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease; /* Adjust duration and easing function */
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
