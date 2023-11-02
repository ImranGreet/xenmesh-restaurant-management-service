<template>
  <div class="py-4 w-52 shadow-sm border border-gray-200/60 rounded-md">
    <ul class="flex flex-col justify-center items-start gap-y-2 w-full">
      <li class="lg:hover:bg-gray-500/20 block w-full px-4 py-2">
        <router-link to="#"
          ><UserCircleIcon class="inline-block w-5 h-5 mr-2" /> My
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
          ><GlobeAltIcon
            class="inline-block w-5 h-5 mr-2"
          />Support</router-link
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
          ><PowerIcon class="inline-block w-5 h-5 mr-2" />Log Out</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import {
  UserCircleIcon,
  Cog6ToothIcon,
  GlobeAltIcon,
  LockClosedIcon,
  PowerIcon,
} from "@heroicons/vue/24/solid";
export default {
  name: "Profile",
  components: {
    UserCircleIcon,
    Cog6ToothIcon,
    GlobeAltIcon,
    LockClosedIcon,
    PowerIcon,
  },
};
</script>
