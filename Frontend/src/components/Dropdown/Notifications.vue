<template>
  <div class="w-96 px-3 py-2 space-y-5">
    <div class="flex justify-between items-center">
      <h1 class="text-2xl font-semibold">Notifications</h1>
      <button class="text-blue-600">Clear All</button>
    </div>
    <div class="text-start">
      <small>Today</small>
    </div>
    <div class="w-full">
      <ul class="flex flex-col justify-center items-start gap-y-2 w-full">
        <li class="lg:hover:bg-gray-500/20 block w-full px-4 py-2">
          <router-link to="#"
            ><CreditCardIcon class="inline-block w-5 h-5 mr-2" /> My
            Account</router-link
          >
        </li>
        <li class="lg:hover:bg-gray-500/20 block w-full px-4 py-2">
          <router-link to="#" class=""
            ><Cog6ToothIcon
              class="inline-block w-5 h-5 mr-2"
            />Settings</router-link
          >
        </li>
        <li class="lg:hover:bg-gray-500/20 block w-full px-4 py-2">
          <router-link to="#"
            ><UsersIcon class="inline-block w-5 h-5 mr-2" />Support</router-link
          >
        </li>
        <li class="lg:hover:bg-gray-500/20 block w-full px-4 py-2">
          <router-link to="#" class=""
            ><LockClosedIcon class="inline-block w-5 h-5 mr-2" />Lock
            Screen</router-link
          >
        </li>
        <li class="lg:hover:bg-gray-500/20 block w-full px-4 py-2">
          <router-link to="#"
            ><GlobeEuropeAfricaIcon class="inline-block w-5 h-5 mr-2" />Log
            Out</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  CreditCardIcon,
  UsersIcon,
  GlobeEuropeAfricaIcon,
} from "@heroicons/vue/24/solid";
import { ref } from "vue";
export default {
  name: "Notifications",
  components: {
    CreditCardIcon,
    UsersIcon,
    GlobeEuropeAfricaIcon,
  },
  setup() {
    const reviewrProfile = ref({
      name: "Jhon Smith",
      profileImage:
        "https://images.unsplash.com/photo-1466112928291-0903b80a9466?auto=format&fit=crop&q=80&w=2073&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    });
    const commentarProfile = ref({
      name: "Xennifer Rahman",
      profileImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    });

    return {
      reviewrProfile,
      commentarProfile,
    };
  },
};
</script>

<style></style>
