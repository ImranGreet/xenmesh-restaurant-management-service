<template>
  <div class="w-full bg-inherit">
    <div class="w-full flex justify-between items-center h-14 px-3">
      <router-link to="#">
        <HomeIcon class="w-6 h-6" />
      </router-link>
      <router-link to="#">
        <AdjustmentsHorizontalIcon class="w-6 h-6" />
      </router-link>
      <router-link
        to="#"
        role="button"
        class="self-start bg-rose-700/80 rounded-full p-3 text-white"
        @click="showOrderItems()">
        <ShoppingBagIcon class="w-6 h-6" />
      </router-link>
      <router-link to="#">
        <Squares2X2Icon class="w-6 h-6" />
      </router-link>
      <router-link to="#">
        <UserCircleIcon class="w-6 h-6" />
      </router-link>
    </div>
  </div>
</template>

<script>
import {
  AdjustmentsHorizontalIcon,
  HomeIcon,
  ShoppingBagIcon,
  Squares2X2Icon,
  UserCircleIcon,
} from '@heroicons/vue/24/outline';
import { showOrderItems } from '../../../scripts/public/utility';

export default {
  name: 'MobileFooter',
  components: {
    HomeIcon,
    AdjustmentsHorizontalIcon,
    ShoppingBagIcon,
    Squares2X2Icon,
    UserCircleIcon,
  },
  setup() {
    return {
      showOrderItems,
    };
  },
};
</script>

<style></style>
