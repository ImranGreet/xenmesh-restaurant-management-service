<template>
  <div class="w-full text-center relative">
    <button
      @click="routeToggling(DropdownRouterLinkId)"
      class="w-full flex items-center text-inherit py-3 text-xl text-center"
      :class="{
        'justify-between': !sidebarView,
        'justify-center': sidebarView,
      }">
      <div class="space-x-5">
        <span class="inline-block">
          <component
            :is="compotext"
            class="w-5 h-5 text-gary-900 tracking-wider text-3xl font-semibold"></component>
        </span>

        <span
          class="self-start text-gray-900 text-xl font-semibold"
          :class="{ hidden: sidebarView }"
          ><slot></slot
        ></span>
      </div>

      <span>
        <ChevronRightIcon
          name="chevron"
          class="w-5 h-5"
          :class="{ hidden: sidebarView }">
        </ChevronRightIcon>

        <ChevronDownIcon
          name="chevron"
          class="w-5 h-5 hidden">
        </ChevronDownIcon>
      </span>
    </button>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95">
      <ul
        :id="`routes-` + DropdownRouterLinkId"
        class="flex-col justify-between items-start text-start gap-y-0.5 w-full px-8 hidden">
        <li
          v-for="track in urlTag"
          :key="track.id"
          class="lg:hover:bg-gray-100/80 w-full">
          <router-link
            to="#"
            class="w-full block py-2 px-2 capitalize text-base tracking-wide">
            {{ track.params }}</router-link
          >
        </li>
      </ul>
    </transition>

    <button class="absolute top-2 right-2 p-1 bg-gray-700 text-white">
      <XMarkIcon class="w-2 h-2"></XMarkIcon>
    </button>
  </div>
</template>

<script>
import {
  sidebarNavigations,
  sidebarView,
} from '../../scripts/leftsidebar/layoutcontroller';
import { routeToggling } from '../../scripts/rightsidebar/togglelink';

import {
  HomeIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  BanknotesIcon,
  Battery50Icon,
  CalculatorIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline';

export default {
  name: 'Navigations',
  components: {
    HomeIcon,
    ChevronRightIcon,
    ChevronDownIcon,
    BanknotesIcon,
    Battery50Icon,
    CalculatorIcon,
    XMarkIcon,
  },
  props: {
    routerLink: {
      type: Array,
      required: true,
    },
    componentText: {
      type: String,
      required: false,
    },
    routerLinkId: {
      type: Number,
      required: false,
    },
  },
  setup(props) {
    const urlTag = props.routerLink;
    const compotext = props.componentText;
    const DropdownRouterLinkId = props.routerLinkId;

    return {
      urlTag,
      compotext,
      DropdownRouterLinkId,
      sidebarNavigations,
      sidebarView,
      /*methods*/
      routeToggling,
    };
  },
};
</script>
