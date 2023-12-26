<template>
  <div class="py-4 border border-gray-200/60 rounded-b-md bg-white shadow-md">
    <ul class="w-full flex flex-col justify-center items-start gap-y-2">
      <li class="lg:hover:bg-gray-500/20 block w-full px-4 py-2">
        <router-link to="#"
          ><i class="px-1 sm:px-1.5 lg:px-2"
            ><font-awesome-icon icon="fa-solid fa-user"
          /></i>
          My Account</router-link
        >
      </li>
      <li class="lg:hover:bg-gray-500/20 block w-full px-4 py-2">
        <router-link to="#"
          ><i class="px-1 sm:px-1.5 lg:px-2"
            ><font-awesome-icon icon="fa-solid fa-gear" /></i
          >Settings</router-link
        >
      </li>
      <li class="lg:hover:bg-gray-500/20 block w-full px-4 py-2">
        <router-link to="#"
          ><i class="px-1 sm:px-1.5 lg:px-2"
            ><font-awesome-icon icon="fa-solid fa-globe" /></i
          >Support</router-link
        >
      </li>
      <li class="lg:hover:bg-gray-500/20 block w-full px-4 py-2">
        <router-link
          to="#"
          class=""
          ><i class="px-1 sm:px-1.5 lg:px-2"
            ><font-awesome-icon icon="fa-solid fa-lock" /></i
          >Lock Screen</router-link
        >
      </li>
      <li
        class="lg:hover:bg-rose-800 lg:hover:text-white block w-full px-4 py-2">
        <router-link to="#"
          ><i class="px-1 sm:px-1.5 lg:px-2"
            ><font-awesome-icon icon="fa-solid fa-power-off" /></i
          >Log Out</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Profile',
};
</script>
