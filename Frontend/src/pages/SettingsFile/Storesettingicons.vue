<template>
  <div class="w-full">
    <div class="w-full px-5 py-6 bg-gray-500/10 text-white">
      <div
        class="w-full xl:w-3/4 mx-auto flex justify-between items-center gap-x-0.5 md:gap-x-0">
        <Tab
          @click="tabcontroller(index)"
          v-for="(compoTitle, index) in componentsTitle"
          :key="index"
          :tabId="index + 1">
          {{ compoTitle }}
        </Tab>
      </div>
    </div>
    <div class="w-full px-3 py-2 flex justify-between items-start">
      <component
        :is="compoText"
        :id="`component-` + (index + 1)"
        v-for="(compoText, index) in componentContainer"
        :key="index"
        :class="{
          hidden: activeIndex !== index,
          block: activeIndex == index,
        }"></component>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import {
  tabcontroller,
  activeIndex,
} from "../../scripts/Settings/authoritysetting";

import Settingicon from "../../components/Auth/Settingicon.vue";
import Shoplogo from "../../components/Auth/Shoplogo.vue";
import UserProfile from "../../components/Auth/UserProfile.vue";
import Tab from "../../components/Utilities/Tab.vue";

export default {
  name: "Storesettingicons",
  components: { Settingicon, UserProfile, Shoplogo, Tab },
  setup() {
    const componentsTitle = ref(["Setting icon", "User Profile", "Shop logo"]);
    const componentContainer = ref(["Settingicon", "UserProfile", "Shoplogo"]);
    return {
      componentsTitle,
      componentContainer,
      activeIndex,
      tabcontroller,
    };
  },
};
</script>
