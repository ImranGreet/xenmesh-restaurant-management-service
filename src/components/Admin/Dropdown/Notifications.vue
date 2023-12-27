<template>
  <TransitionRoot
    appear
    :show="notificationsDropDown"
    as="template"
    enter="transform transition duration-[300ms]"
    enter-from="opacity-0 rotate-[10deg] scale-10"
    enter-to="opacity-100 rotate-0 scale-100"
    leave="transform duration-200 transition ease-in-out"
    leave-from="opacity-100 rotate-0 scale-100 "
    leave-to="opacity-0 scale-95 ">
    <div class="w-80 bg-white py-2 space-y-5 border border-gray-600/20">
      <div
        class="flex justify-between items-center border-b border-dotted border-gray-700 py-2 px-2">
        <h1 class="text-2xl font-semibold">Notifications</h1>
        <button class="text-blue-600">Clear All</button>
      </div>
      <div class="text-start px-3">
        <small class="text-base tracking-wide">Today</small>
      </div>
      <div class="w-full">
        <ul class="flex flex-col justify-center items-start gap-y-2 w-full">
          <li class="lg:hover:bg-gray-500/20 block w-full px-4 py-2">
            <router-link to="#"
              ><i class="px-1 sm:px-1.5 lg:px-2"
                ><font-awesome-icon icon="fa-regular fa-credit-card"
              /></i>
              My Account</router-link
            >
          </li>

          <li class="lg:hover:bg-gray-500/20 block w-full px-4 py-2">
            <router-link to="#"
              ><i class="px-1 sm:px-1.5 lg:px-2"
                ><font-awesome-icon icon="fa-solid fa-user" /></i
              >Support</router-link
            >
          </li>

          <li>
            <div class="text-start px-3">
              <small class="text-base tracking-wide">Yestarday</small>
            </div>
          </li>
          <li
            class="lg:hover:bg-gray-500/20 w-full px-4 py-2 flex justify-start gap-x-2 items-center">
            <img
              :src="reviewrProfile.profileImage"
              alt=""
              class="w-12 h-12 rounded-full object-center" />
            <router-link
              to="#"
              class=""
              >{{ reviewrProfile.name }}</router-link
            >
          </li>

          <li class="lg:hover:bg-gray-500/20 block w-full px-4 py-2">
            <router-link to="#"
              ><i class="px-1 sm:px-1.5 lg:px-2"
                ><font-awesome-icon icon="fa-solid fa-comment" /></i
              >Support</router-link
            >
          </li>

          <li
            class="lg:hover:bg-gray-500/20 w-full px-4 py-2 flex justify-start gap-x-2 items-center">
            <img
              :src="commentarProfile.profileImage"
              alt=""
              class="w-12 h-12 rounded-full object-center" />
            <router-link
              to="#"
              class=""
              >{{ commentarProfile.name }}</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </TransitionRoot>
</template>

<script>
import { ref } from 'vue';
import { TransitionRoot } from '@headlessui/vue';
import { notificationsDropDown } from '../../../scripts/Admin/topbar/topbarcontroller';

export default {
  name: 'Notifications',
  components: {
    TransitionRoot,
  },

  setup() {
    const reviewrProfile = ref({
      name: 'Jhon Smith',
      profileImage:
        'https://images.unsplash.com/photo-1466112928291-0903b80a9466?auto=format&fit=crop&q=80&w=2073&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    });
    const commentarProfile = ref({
      name: 'Xennifer Rahman',
      profileImage:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    });

    return {
      reviewrProfile,
      commentarProfile,
      notificationsDropDown,
    };
  },
};
</script>

<style></style>
