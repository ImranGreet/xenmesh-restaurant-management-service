<template>
  <div class="w-full h-full flex justify-between flex-col">
    <div class="w-full px-5 py-6 bg-gray-500/10 text-white">
      <div
        class="w-full gap-x-10 mx-auto flex flex-wrap items-center gap-y-2 sm:gap-y-0">
        <Tab
          @click="tabcontroller(index)"
          v-for="(compoTitle, index) in componentsTitle"
          :key="index"
          :tabId="index + 1"
          :class="{ 'border-b border-gray-900/70 ': activeIndex === index }">
          {{ compoTitle }}
        </Tab>
      </div>
    </div>
    <div class="w-full flex-1 px-3 py-2 flex justify-center items-center">
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
import { ref } from 'vue';
import {
  tabcontroller,
  activeIndex,
} from '../../../scripts/Admin/Settings/authoritysetting';

import Settingicon from '../../../components/Admin/Auth/Settingicon.vue';
import Shoplogo from '../../../components/Admin/Auth/Shoplogo.vue';
import UserProfile from '../../../components/Admin/Auth/UserProfile.vue';
import ContactDetails from '../../../components/Admin/Auth/ContactDetails.vue';
import PaymentMethods from '../../../components/Admin/Auth/PaymentMethods.vue';
import DeliveryWays from '../../../components/Admin/Auth/DeliveryWays.vue';
import Tab from '../../../components/Utilities/Tab.vue';

export default {
  name: 'Storesettingicons',
  components: {
    Settingicon,
    UserProfile,
    Shoplogo,
    ContactDetails,
    Tab,
    PaymentMethods,
    DeliveryWays,
  },
  setup() {
    const componentsTitle = ref([
      'Setting icon',
      'User Profile',
      'Shop logo',
      'Contact Details',
      'Payment Methods',
      'Delivery Ways',
    ]);
    const componentContainer = ref([
      'Settingicon',
      'UserProfile',
      'Shoplogo',
      'ContactDetails',
      'PaymentMethods',
      'DeliveryWays',
    ]);
    return {
      componentsTitle,
      componentContainer,
      activeIndex,
      tabcontroller,
    };
  },
};
</script>
