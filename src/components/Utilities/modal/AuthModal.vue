<template>
  <div class="w-full bg-inherit">
    <div
      class="w-11/12 lg:w-96 bg-stone-50 shadow-xl border border-gray-400/50 rounded-md">
      <div class="w-1/2 mx-auto flex flex-col justify-center items-center">
        <div class="w-full flex flex-col justify-center items-center py-4">
          <img
            src="../../../assets/images/undraw_male_avatar_g98d.svg"
            alt=""
            class="w-20 h-20 border border-dashed border-pink-600 rounded-full" />
        </div>
        <!-- profile info -->
        <div>
          <h2 class="text-base tracking-wider leading-relaxed">
            Imran Hossain
          </h2>
          <p><span>Imran</span></p>
          <p><span>$1250</span></p>
        </div>
      </div>
      <ul
        class="w-full flex flex-col justify-start items-start px-4 space-y-4 py-6">
        <li class="border-b w-full py-2 border-gray-300/25">
          <router-link
           target="_blank"
            class="lg:hover:text-blue-600"
            :to="{ name: 'admin' }">
            <span>
              <adjustments-horizontal-icon class="w-5 h-5 inline" />
            </span>
            Dashboard
          </router-link>
        </li>
        <li class="border-b w-full py-2 border-gray-300/25">
          <router-link
            class="lg:hover:text-blue-600"
            to="#">
            <span>
              <PencilSquareIcon class="w-5 h-5 inline" />
            </span>
            Edit Profile
          </router-link>
        </li>

        <li class="border-b w-full py-2 border-gray-300/25">
          <router-link
            class="lg:hover:text-blue-600"
            to="#">
            <span>
              <MapPinIcon class="w-5 h-5 inline" />
            </span>
            Address
          </router-link>
        </li>

        <li class="border-b w-full py-2 border-gray-300/25">
          <router-link
            class="lg:hover:text-blue-600"
            to="#">
            <span>
              <LockClosedIcon class="w-5 h-5 inline" />
            </span>
            Change Password
          </router-link>
        </li>

        <li class="border-b w-full py-2 border-gray-300/25">
          <router-link
            @click="userLogOutAndClearToken()"
            role="button"
            class="lg:hover:text-red-600"
            to="#">
            <span>
              <PowerIcon class="w-5 h-5 inline" />
            </span>
            Logout
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  AdjustmentsHorizontalIcon,
  UserCircleIcon,
  PencilIcon,
  MapPinIcon,
  LockClosedIcon,
  PowerIcon,
  PencilSquareIcon,
} from '@heroicons/vue/24/outline';
import UseCustomerAuthentication from '../../../scripts/Global/Authentications/customerAuth';

export default {
  name: 'AuthModal',
  components: {
    AdjustmentsHorizontalIcon,
    UserCircleIcon,
    PencilIcon,
    MapPinIcon,
    LockClosedIcon,
    PowerIcon,
    PencilSquareIcon,
  },

  setup() {
    const { userLogOutAndClearToken } = UseCustomerAuthentication();
    return {
      userLogOutAndClearToken,
    };
  },
};
</script>
