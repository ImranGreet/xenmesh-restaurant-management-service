<template>
  <TransitionRoot
    appear
    :show="profileDropDown"
    as="template"
    enter="transform transition duration-[300ms]"
    enter-from="opacity-0 rotate-[10deg] scale-10"
    enter-to="opacity-100 rotate-0 scale-100"
    leave="transform duration-200 transition ease-in-out"
    leave-from="opacity-100 rotate-0 scale-100 "
    leave-to="opacity-0 scale-95 ">
    <div class="py-4 border border-gray-200/60 rounded-b-md bg-white shadow-md">
      <ul class="w-full flex flex-col justify-center items-start gap-y-2">
        <li class="lg:hover:bg-gray-500/20 block w-full px-4 py-2">
          <router-link to="#" class="block"
            ><i class="px-1 sm:px-1.5 lg:px-2"
              ><font-awesome-icon icon="fa-solid fa-user"
            /></i>
            My Account</router-link
          >
        </li>
        <li class="lg:hover:bg-gray-500/20 block w-full px-4 py-2">
          <router-link to="#" class="block"
            ><i class="px-1 sm:px-1.5 lg:px-2"
              ><font-awesome-icon icon="fa-solid fa-gear" /></i
            >Settings</router-link
          >
        </li>
        <li class="lg:hover:bg-gray-500/20 block w-full px-4 py-2">
          <router-link to="#" class="block"
            ><i class="px-1 sm:px-1.5 lg:px-2"
              ><font-awesome-icon icon="fa-solid fa-globe" /></i
            >Support</router-link
          >
        </li>
        <li class="lg:hover:bg-gray-500/20 block w-full px-4 py-2">
          <router-link class="block"
            to="#"
            
            ><i class="px-1 sm:px-1.5 lg:px-2"
              ><font-awesome-icon icon="fa-solid fa-lock" /></i
            >Lock Screen</router-link
          >
        </li>
        <li
          class="lg:hover:bg-rose-800 lg:hover:text-white block w-full px-4 py-2">
          <router-link to="#" class="block"
            ><i class="px-1 sm:px-1.5 lg:px-2"
              ><font-awesome-icon icon="fa-solid fa-power-off" /></i
            >Log Out</router-link
          >
        </li>
      </ul>
    </div>
  </TransitionRoot>
</template>

<script>
import { TransitionRoot } from '@headlessui/vue';
import { profileDropDown } from '../../../scripts/Admin/topbar/topbarcontroller';

export default {
  name: 'Profile',
  components: {
    TransitionRoot,
  },
  setup() {
    return {
      profileDropDown,
    };
  },
};
</script>
