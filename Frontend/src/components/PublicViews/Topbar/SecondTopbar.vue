<template>
  <div class="w-full bg-inherit">
    <div class="w-full">
      <ul class="flex justify-end items-center space-x-4">
        <li>
          <form class="inline-block relative">
            <input
              v-model="searchKeywords"
              type="text"
              name=""
              id=""
              class="py-1 text-start px-8 text-sm rounded-full border border-gray-300 focus:outline-none tracking-widest capitalize" />
            <MagnifyingGlassIcon class="w-4 h-4 absolute top-2 left-3" />
            <button
              @click="deleteKeywords()"
              type="button"
              class="absolute top-2 right-3"
              :class="{
                inline: searchKeywords.length > 0,
                hidden: searchKeywords.length == 0,
              }">
              <XMarkIcon
                class="w-4 h-4 border border-gray-700 text-red-500 rounded-full" />
            </button>
          </form>
        </li>
        <li>
          <button
            class="border border-gray-300 rounded-2xl px-3 py-0.5 bg-gray-800 text-white">
            English
          </button>
        </li>
        <li>
          <button
            @click="showOrderItems()"
            class="border border-gray-300 rounded-2xl px-3 py-0.5 bg-gray-800 text-white">
            <ShoppingCartIcon class="w-4 h-4 inline-block" />
            {{ Math.floor(totalPrice) }} 
          </button>
        </li>
        <li>
          <button
            @click="authorizedProfileCloseDiscloser()"
            class="border border-gray-300 rounded-2xl px-3 py-0.5 bg-gray-800 text-white"
            :class="{ inline: authorized, hidden: !authorized }">
            Customer
            <ChevronDownIcon class="w-4 h-4 inline-block" />
          </button>
          <router-link
            :to="{ name: 'user_login' }"
            class="border border-gray-300 rounded-2xl px-3 py-1 bg-pink-600 text-white"
            :class="{ inline: !authorized, hidden: authorized }">
            <UserCircleIcon class="w-4 h-4 inline" /> Login</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  ChevronDownIcon,
} from '@heroicons/vue/24/solid';

import { showOrderItems } from '../../../scripts/public/Utility';
import { totalPrice } from '../../../scripts/public/Order/publicorder';
import UseCustomerAuthentication, {
  authorized,
  authorizedProfileCloseDiscloser,
} from '../../../scripts/Global/Authentications/customerAuth';
import {
  searchKeywords,
  deleteKeywords,
  handleSearchInPublic,
} from '../../../scripts/Global/Search/searchproperties';
import { onMounted } from 'vue';

export default {
  name: 'Firsttopbar',
  components: {
    MagnifyingGlassIcon,
    XMarkIcon,
    ShoppingCartIcon,
    UserCircleIcon,
    ChevronDownIcon,
  },
  setup() {
    const { getCustomerToken } = UseCustomerAuthentication();
    onMounted(() => {
      getCustomerToken('customerToken');
    });
    return {
      showOrderItems,
      deleteKeywords,
      handleSearchInPublic,
      authorizedProfileCloseDiscloser,
      totalPrice,
      authorized,
      searchKeywords,
    };
  },
};
</script>
