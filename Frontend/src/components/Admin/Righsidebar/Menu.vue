<template>
  <div class="w-full text-center">
    <button
      @click="routeToggling(DropdownRouterLinkId)"
      class="w-full flex items-center text-inherit py-3 text-xl text-center relative"
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

        <ChevronDownIcon name="chevron" class="w-5 h-5 hidden">
        </ChevronDownIcon>
      </span>
    </button>
   
         
      <ul
        :id="`routes-` + DropdownRouterLinkId"
        class="space-y-2 text-start gap-y-0.5 w-full px-8 hidden ul-link square">
        <li
          v-for="track in urlTag"
          :key="track.id"
          class="lg:hover:bg-gray-100/80 w-full">
          <router-link
            :to="{name:track.name}"
            class="w-full block py-2 px-2 capitalize text-base tracking-wide">
            {{ track.params }}</router-link
          >
        </li>
      </ul>
      
    
  </div>
</template>

<script>
import {
  sidebarNavigations,
  sidebarView,
} from "../../../scripts/Admin/leftsidebar/layoutcontroller";


import {
  routeToggling,
  mouseOutUlLinkCloser,
  mouseOverUlLinkDiscloser,
} from "../../../scripts/Admin/rightsidebar/togglelink";



import {
  HomeIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  BanknotesIcon,
  Battery50Icon,
  CalculatorIcon,
} from "@heroicons/vue/24/outline";

export default {
  name: "Navigations",
  components: {
    HomeIcon,
    ChevronRightIcon,
    ChevronDownIcon,
    BanknotesIcon,
    Battery50Icon,
    CalculatorIcon,
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
      mouseOverUlLinkDiscloser,
      mouseOutUlLinkCloser,
    };
  },
};
</script>
