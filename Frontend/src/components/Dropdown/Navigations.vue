<template>
  <div class="w-full">
    <button class="w-full flex justify-evenly items-center text-gray-950 py-3 text-xl">
      <span class="inline-block">
        <component
          :is="getTheComponent"
          :class="{
            'w-4 h-4': !sidebarController,
            'w-6 h-6': sidebarController,
          }"></component>
      </span>
      <span
        :class="{
          'inline-block': !sidebarController,
          hidden: sidebarController,
        }"
        ><slot></slot
      ></span>
      <span>
        <ChevronRightIcon
          name="chevron"
          class="w-4 h-4"
          :class="{
            'inline-block': !sidebarController,
            hidden: sidebarController,
          }"></ChevronRightIcon
      ></span>
    </button>

    <ul
      class="flex flex-col justify-center items-start gap-y-0.5 w-full px-8"
      :class="{
        flex: !sidebarController,
        hidden: sidebarController,
      }">
      <li
        v-for="track in urlTag"
        :key="track.id"
        class="lg:hover:bg-gray-500/20 w-full">
        <router-link
          to="#"
          class="w-full block py-2 px-2">
          {{ track.params }}</router-link
        >
      </li>
    </ul>
  </div>
</template>

<script>
import { sidebarController } from "../../composables/layout";
import {
  HomeIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  BanknotesIcon,
} from "@heroicons/vue/24/outline";

export default {
  name: "Navigations",
  components: {
    HomeIcon,
    ChevronRightIcon,
    ChevronDownIcon,
    BanknotesIcon,
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
  },
  setup(props) {
    const urlTag = props.routerLink;
    const compotext = props.componentText;

    const componentsContainer = [
      "HomeIcon",
      "ChevronRightIcon",
      "ChevronDownIcon",
      "BanknotesIcon",
    ];
    const getTheIcon = function (comp) {
      if (componentsContainer.includes(comp)) {
        return comp;
      }
    };
    let getTheComponent = getTheIcon(compotext);

    return {
      sidebarController,
      urlTag,
      compotext,
      getTheComponent,
    };
  },
};
</script>
