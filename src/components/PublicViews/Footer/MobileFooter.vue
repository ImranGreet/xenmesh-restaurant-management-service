<template>
  <div class="w-full bg-inherit">
    <div
      class="w-full flex justify-between items-center h-14 px-3 activeIdentity">
      <router-link :to="{ name: 'public-home' }">
        <HomeIcon class="w-6 h-6" />
      </router-link>
      <router-link :to="{ name: 'category', params: { category: category } }">
        <AdjustmentsHorizontalIcon class="w-6 h-6" />
      </router-link>
      <button
        class="self-start bg-rose-700/80 rounded-full p-3 text-white"
        @click="showOrderItems()">
        <ShoppingBagIcon class="w-6 h-6" />
      </button>
      <router-link :to="{ name: 'offer' }">
        <Squares2X2Icon class="w-6 h-6" />
      </router-link>
      <router-link :to="{ name: 'user_login' }">
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
import { uniqueCategoriesArray } from '../../../scripts/public/Navs/categoryNav';
import Items from '../../../DB/products.json';

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
    const category = uniqueCategoriesArray[0];
    return {
      showOrderItems,
      category,
    };
  },
};
</script>

<style>
.activeIdentity > .router-link-exact-active {
  background-color: rgb(190 18 60 / 0.9);
  color: white;
  border: 0.5px solid gray;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-color: transparent;
  padding: 0.25px;
}
</style>
