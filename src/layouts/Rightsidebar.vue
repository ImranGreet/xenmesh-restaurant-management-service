<template>
  <Transition name="fade">
    <div class="py-3">
      <Logo
        class="fixed left-0 top-0 hidden sm:block"
        :class="{
          'w-[30%] xl:w-[15%] ': !mobileView && !sidebarView,
          'w-[10%] xl:w-[5%] ': !mobileView && sidebarView,
        }" />

      <div
        class="mt-[20px] md:mt-[45px] lg:mt-[48px] xl:mt-[45.5px] fixed float-right h-screen border-r-2 border-red-700/50"
        :class="{
          'w-[30%] xl:w-[15%] ': !sidebarView,
          'w-[10%] xl:w-[5%] ': sidebarView,
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
          class="w-full overflow-x-hidden custom-overflowscroll h-[80%] px-0 md:px-2 lg:px-3 xl:px-4 relative flex flex-col">
          <router-link
            :to="{ name: 'order_creation' }"
            class="w-full h-5 flex items-center mb-4"
            :class="{
              'justify-center': !sidebarView,
              'justify-center': sidebarView,
            }">
            <font-awesome-icon
              icon="fa-solid fa-utensils"
              class="w-5 h-5 text-gray-600 tracking-wider text-3xl font-normal" />
            <span
              :class="{
                'inline-block text-xl ml-5': !sidebarView,
                hidden: sidebarView,
              }"
              >Create Order</span
            >
          </router-link>

          <router-link
            :to="{ name: 'expense' }"
            class="w-full h-5 flex items-center mb-4"
            :class="{
              'justify-center': !sidebarView,
              'justify-center': sidebarView,
            }">
            <font-awesome-icon
              icon="fa-solid fa-calculator"
              class="w-5 h-5 text-gray-600 tracking-wider text-3xl font-normal" />
            <span
              :class="{
                'inline-block text-xl ml-5': !sidebarView,
                hidden: sidebarView,
              }"
              >Expenses</span
            >
          </router-link>

          <router-link
            :to="{ name: 'setting' }"
            class="w-full h-5 flex items-center mb-4"
            :class="{
              'justify-center': !sidebarView,
              'justify-center': sidebarView,
            }">
            <font-awesome-icon
              icon="fa-solid fa-gears"
              class="w-5 h-5 text-gray-600 tracking-wider text-3xl font-normal" />
            <span
              :class="{
                'inline-block text-xl ml-5': !sidebarView,
                hidden: sidebarView,
              }"
              >Settings</span
            >
          </router-link>
          <router-link
            :to="{ name: 'banktransaction' }"
            class="w-full h-5 flex items-center mb-4"
            :class="{
              'justify-center': !sidebarView,
              'justify-center': sidebarView,
            }">
            <font-awesome-icon
              icon="fa-solid fa-coins"
              class="w-5 h-5 text-gray-600 tracking-wider text-3xl font-normal" />
            <span
              :class="{
                'inline-block text-xl ml-5': !sidebarView,
                hidden: sidebarView,
              }"
              >Transaction</span
            >
          </router-link>
          <router-link
            :to="{ name: 'products house' }"
            class="w-full h-5 flex items-center mb-4"
            :class="{
              'justify-center': !sidebarView,
              'justify-center': sidebarView,
            }">
            <font-awesome-icon
              icon="fa-brands fa-product-hunt"
              class="w-5 h-5 text-gray-600 tracking-wider text-3xl font-normal" />
            <span
              :class="{
                'inline-block text-xl ml-5': !sidebarView,
                hidden: sidebarView,
              }"
              >Products</span
            >
          </router-link>

          <router-link
            :to="{ name: 'order_house' }"
            class="w-full h-5 flex items-center mb-4"
            :class="{
              'justify-center': !sidebarView,
              'justify-center': sidebarView,
            }">
            <font-awesome-icon
              icon="fa-regular fa-newspaper"
              class="w-5 h-5 text-gray-600 tracking-wider text-3xl font-normal" />
            <span
              :class="{
                'inline-block text-xl ml-5': !sidebarView,
                hidden: sidebarView,
              }"
              >Order</span
            >
          </router-link>
          <router-link
            :to="{ name: 'stuff' }"
            class="w-full h-5 flex items-center mb-4"
            :class="{
              'justify-center': !sidebarView,
              'justify-center': sidebarView,
            }">
            <font-awesome-icon
              icon="fa-solid fa-users"
              class="w-5 h-5 text-gray-600 tracking-wider text-3xl font-normal" />
            <span
              :class="{
                'inline-block text-xl ml-5': !sidebarView,
                hidden: sidebarView,
              }"
              >Stuff</span
            >
          </router-link>

          <router-link
            :to="{ name: 'stock_check' }"
            class="w-full h-5 flex items-center mb-4"
            :class="{
              'justify-center': !sidebarView,
              'justify-center': sidebarView,
            }">
            <font-awesome-icon
              icon="fa-solid fa-layer-group"
              class="w-5 h-5 text-gray-600 tracking-wider text-3xl font-normal" />
            <span
              :class="{
                'inline-block text-xl ml-5': !sidebarView,
                hidden: sidebarView,
              }"
              >Stock</span
            >
          </router-link>
          <router-link
            :to="{ name: 'roles_stock' }"
            class="w-full h-5 flex items-center mb-4"
            :class="{
              'justify-center': !sidebarView,
              'justify-center': sidebarView,
            }">
            <font-awesome-icon
              icon="fa-solid fa-layer-group"
              class="w-5 h-5 text-gray-600 tracking-wider text-3xl font-normal" />
            <span
              :class="{
                'inline-block text-xl ml-5': !sidebarView,
                hidden: sidebarView,
              }"
              >Roles</span
            >
          </router-link>
          <span></span>

         
          <router-link
          :to="{ name: 'public-home' }"
           target="_blank"
          class="w-full h-5 flex items-center mb-4 bg-blue-400 text-gray-600 py-5 rounded-md self-end"
          :class="{
            'justify-center': !sidebarView,
            'justify-center': sidebarView,
          }">
          <font-awesome-icon
            icon="fa-solid fa-layer-group"
            class="w-5 h-5 text-gray-600 tracking-wider text-3xl font-normal" />
          <span
            :class="{
              'inline-block text-xl ml-5': !sidebarView,
              hidden: sidebarView,
            }"
            >Client SIte</span
          >
        </router-link>
          
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
