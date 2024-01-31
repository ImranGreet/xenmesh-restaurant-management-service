<template>
  <section
    ref="fullscreenElement"
    class="h-screen bg-gray-100">
    <Topbardesktop
    
      class="float-right top-0 right-0  w-full static px-2 z-[699]"
      :class="{
        'sm:w-[70%] xl:w-[85%] fixed': !sidebarView,
        'sm:w-[90%] xl:w-[95%] fixed': sidebarView,
        'bg-white text-gray-800':TopbardesktopColor ==='default'
        
        
      }" 
      
      />
    <Rightsidebar
      class="fixed float-left h-full hidden sm:block"
      :class="{
        ' w-[30%] xl:w-[10%]': !sidebarView,
        'w-[10%] xl:w-[5%]': sidebarView,
      }" />
    <!-- main -->
    <div
      class="float-right mt-[60px] px-1 right-0 h-full z-0 overflow-y-auto"
      :class="{
        'w-full sm:w-[70%] xl:w-[85%] fixed mx-auto': !sidebarView,
        'w-full sm:w-[90%] xl:w-[95%] fixed mx-auto': sidebarView,
      }">
      <div class="h-[90%] w-full overflow-y-auto">
        <router-view />
      </div>
    </div>
    <Setting
      class="fixed top-0 right-0 md:w-2/4 lg:w-1/4 h-full"
      :class="{
        'hidden sm:block z-[999]': seetingsView,
        hidden: !seetingsView,
      }"></Setting>
    <div
      class="fixed right-0 inset-y-0 bg-gray-900/30 w-full h-screen"
      :class="{ 'block z-[500]': seetingsView, hidden: !seetingsView }"></div>

    <Footer
      class="w-full fixed bottom-0 z-[599] bg-white float-right right-0"
      :class="{
        'sm:w-[70%] xl:w-[85%] fixed': !sidebarView,
        'sm:w-[90%] xl:w-[95%] fixed': sidebarView,
      }" />
    <div
      class="fixed inset-x-0 inset-y-0 bg-gray-300/50 w-full flex justify-center items-center h-screen"
      :class="{ hidden: !showOverlayout, block: showOverlayout }">
      <ProductDescription />
    </div>
  </section>
</template>

<script>
import Setting from '../components/Admin/Settings/Setting.vue';
import Topbardesktop from '../components/Admin/Topbar/Topbardesktop.vue';
import Rightsidebar from './Rightsidebar.vue';
import Logo from '../components/Admin/Topbar/Logo.vue';
import Footer from '../components/Admin/Footer/Footer.vue';
import ProductDescription from '../components/PublicViews/modal/ProductDescription.vue';

/*script*/
import { fullscreenElement } from '../scripts/Admin/screen/Fullscreen';
import { seetingsView } from '../scripts/Admin/topbar/topbarcontroller';
import {
  sidebarController,
  sidebarView,
  mobileView,
} from '../scripts/Admin/leftsidebar/layoutcontroller';
import {
  resizeController,
  customWidth,
} from '../scripts/Admin/Layout/layoutonresize';
import { discloseMenuBarOnHover } from '../scripts/Admin/rightsidebar/togglelink';
import { showOverlayout } from '../scripts/public/modal/modal';
import {TopbardesktopColor} from "../scripts/Admin/Settings/settingcontroller"


export default {
  name: 'Admin',
  components: {
    Topbardesktop,
    Setting,
    Rightsidebar,
    Logo,
    Footer,
    ProductDescription,
  },
  setup() {
    return {
      fullscreenElement,
      seetingsView,
      customWidth,
      sidebarView,
      mobileView,
      showOverlayout,
      TopbardesktopColor,
      /*compose function*/
      sidebarController,
      discloseMenuBarOnHover,
    };
  },
};
</script>
