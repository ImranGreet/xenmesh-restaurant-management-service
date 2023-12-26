<template>
  <section class="min-h-screen relative">
    <div
      class="w-full lg:px-4 py-2 bg-white shadow-sm fixed inset-x-0 top-0 z-[999]">
      <div
        class="hidden xl:flex w-full justify-between items-center mx-auto bg-inherit max-w-[1130px]">
        <Firsttopbar />
        <SecondTopbar />
      </div>
      <MobileNav class="w-full xl:hidden" />
    </div>
    <section class="w-full bg-white antialiased min-h-screen relative">
      <section
        class="max-w-full xl:max-w-[1130px] h-auto mx-auto my-20 px-2 md:px-3 xl:px-0">
        <SlidingPhoto
          :class="{
            block: $route.name == 'public-home',
            hidden: $route.name != 'public-home',
          }" />
        <CategoryNav :class="{
          block: $route.name != 'processed_order',
          hidden: $route.name == 'processed_order',
        }"/>

        <router-view />
      </section>
      <div class="max-w-full bg-pink-500 text-white">
        <Footer class="max-w-full xl:max-w-[1130px] mx-auto xl:px-0" />
      </div>
      <div class="my-10 block xl:hidden"></div>
    </section>
    <MobileFooter
      class="w-full fixed inset-x-0 bottom-0 bg-white block xl:hidden z-[200]" />
    <WebOrderPublic
      class=" h-full fixed top-14 lg:top-16 xl:top-14 bottom-0 bg-white"
      :class="{
        hidden: !orderItems,
        'block  right-0 float-right z-[699]': orderItems,
      }" />
    <div
      class="fixed inset-x-0 inset-y-0 bg-gray-300/50"
      :class="{ hidden: !orderItems, block: orderItems }"></div>

    <div
      class="fixed inset-x-0 inset-y-0 bg-gray-300/50 w-full flex justify-center items-center h-screen [z-1000]"
      :class="{ hidden: !showOverlayout, block: showOverlayout }">
      <ProductDescription />
    </div>
    <div
      class="fixed right-2 top-8 z-[1000]"
      :class="{
        block: toasterSerial.length > 0,
        hidden: toasterSerial.length == 0,
      }">
      <div class="w-full flex flex-col-reverse justify-start gap-y-2">
        <Toaster
          v-for="(toaster, index) in toasterSerial"
          :key="index"
          :itemIndex="index" />
      </div>
    </div>

    <div
      class="fixed right-96 top-16 z-[1000]"
      :class="{
        block: authorized && authorisedProfileShower,
        hidden: !authorized || !authorisedProfileShower,
      }">
      <AuthModal />
    </div>
  </section>
</template>

<script>
import Footer from '../components/PublicViews/Footer/Footer.vue';
import Firsttopbar from '../components/PublicViews/Topbar/Firsttopbar.vue';
import SecondTopbar from '../components/PublicViews/Topbar/SecondTopbar.vue';
import MobileNav from '../components/PublicViews/Footer/MobileNav.vue';
import MobileFooter from '../components/PublicViews/Footer/MobileFooter.vue';
import CategoryNav from '../components/PublicViews/Topbar/CategoryNav.vue';
import SlidingPhoto from '../components/Utilities/Slideshow/SlidingPhoto.vue';
import WebOrderPublic from '../components/Utilities/modal/WebOrderPublic.vue';
import ProductDescription from '../components/PublicViews/modal/ProductDescription.vue';
import Toaster from '../components/Utilities/Notifications/Toaster.vue';
import AuthModal from '../components/Utilities/modal/AuthModal.vue';

/*order modal*/

import { orderItems, showOrderItems } from '../scripts/public/Utility';
import {
  productComposition,
  showOverlayout,
  showOverlayoutOnOff,
} from '../scripts/public/modal/modal';

import { showToaster, toasterSerial } from '../scripts/toaster';
import {
  authorized,
  authorisedProfileShower,
} from '../scripts/Global/Authentications/customerAuth';

/*router*/

export default {
  name: 'Public',
  components: {
    SecondTopbar,
    Firsttopbar,
    Footer,
    MobileNav,
    MobileFooter,
    CategoryNav,
    SlidingPhoto,
    WebOrderPublic,
    ProductDescription,
    Toaster,
    AuthModal,
  },
  setup() {
    return {
      orderItems,
      productComposition,
      showOverlayout,
      showToaster,
      toasterSerial,
      authorized,
      authorisedProfileShower,
      showOrderItems,
      showOverlayoutOnOff,
    };
  },
};
</script>
