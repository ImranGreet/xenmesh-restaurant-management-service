<template>
  <TransitionRoot
    appear
    :show="seetingsView"
    as="template"
    enter="transform transition duration-[200ms]"
    enter-from="opacity-0 rotate-[10deg] scale-50"
    enter-to="opacity-100 rotate-0 scale-100"
    leave="transform duration-200 transition ease-in-out"
    leave-from="opacity-100 rotate-0 scale-100 "
    leave-to="opacity-0 scale-95 ">
    <div class="w-full bg-white h-full">
      <div class="w-full h-full">
        <div
          class="px-5 py-[14px] md:pt-[5px] lg:pt-[18px] w-full bg-blue-600/25">
          <div class="flex justify-between w-full items-center">
            <h3 class="text-xl tracking-wide">Theme Settings</h3>
            <button @click="settingsViewToggler()">
              <i><font-awesome-icon icon="fa-solid fa-x" /></i>
            </button>
          </div>
        </div>
        <!-- indicator -->
        <div class="w-full h-[80%] overflow-y-scroll custom-overflowscroll">
          <div class="px-8 py-6 space-y-5">
            <Settingtitle>Choose Layout</Settingtitle>
            <div class="w-full flex justif-start items-center gap-6">
              <button class="relative">
                <img
                  src="../../../assets/images/controllericons/Brand-2.png"
                  alt=""
                  class="w-[100px] h-[70px]" />
                <small
                  class="text-blue-700 bottom-2 right-1 absolute"
                  :class="{
                    hidden: foundColor !== 'light',
                    ineline: foundColor == 'light',
                  }"
                  ><CheckBadgeIcon class="w-6 h-6"
                /></small>
              </button>
              <button>
                <img
                  src="../../../assets/images/controllericons/Dark.png"
                  alt=""
                  class="w-[100px] h-[70px]" />
                <small
                  class="text-blue-700 bottom-2 right-1 absolute"
                  :class="{
                    hidden: foundColor !== 'light',
                    ineline: foundColor == 'light',
                  }"
                  ><CheckBadgeIcon class="w-6 h-6"
                /></small>
              </button>
            </div>
          </div>

          <div class="px-8 py-6 space-y-5">
            <Settingtitle>Color Schema</Settingtitle>
            <div class="w-full flex justif-start items-center flex-wrap gap-6">
              <button>
                <img
                  src="../../../assets/images/controllericons/Light.png"
                  alt=""
                  class="w-[100px] h-[70px]" />
                <small
                  class="text-blue-700 bottom-2 right-1 absolute"
                  :class="{
                    hidden: foundColor !== 'light',
                    ineline: foundColor == 'light',
                  }"
                  ><CheckBadgeIcon class="w-6 h-6"
                /></small>
              </button>
              <button>
                <img
                  src="../../../assets/images/controllericons/Dark.png"
                  alt=""
                  class="w-[100px] h-[70px]" />
                <small
                  class="text-blue-700 bottom-2 right-1 absolute"
                  :class="{
                    hidden: foundColor !== 'light',
                    ineline: foundColor == 'light',
                  }"
                  ><CheckBadgeIcon class="w-6 h-6"
                /></small>
              </button>
            </div>
          </div>

          <div class="px-8 py-6 space-y-5">
            <h1 class="w-full text-xl tracking-wide leading-relax">
              Layout Mode
            </h1>
            <div class="w-full flex justif-start items-center flex-wrap gap-6">
              <button>
                <img
                  src="../../../assets/images/controllericons/Light.png"
                  alt=""
                  class="w-[100px] h-[70px]" />
                <small
                  class="text-blue-700 bottom-2 right-1 absolute"
                  :class="{
                    hidden: foundColor !== 'light',
                    ineline: foundColor == 'light',
                  }"
                  ><CheckBadgeIcon class="w-6 h-6"
                /></small>
              </button>
              <button>
                <img
                  src="../../../assets/images/controllericons/Dark.png"
                  alt=""
                  class="w-[100px] h-[70px]" />
                <small
                  class="text-blue-700 bottom-2 right-1 absolute"
                  :class="{
                    hidden: foundColor !== 'light',
                    ineline: foundColor == 'light',
                  }"
                  ><CheckBadgeIcon class="w-6 h-6"
                /></small>
              </button>
              <button>
                <img
                  src="../../../assets/images/controllericons/Dark.png"
                  alt=""
                  class="w-[100px] h-[70px]" />
                <small
                  class="text-blue-700 bottom-2 right-1 absolute"
                  :class="{
                    hidden: foundColor !== 'light',
                    ineline: foundColor == 'light',
                  }"
                  ><CheckBadgeIcon class="w-6 h-6"
                /></small>
              </button>
            </div>
          </div>

          <div class="px-8 py-6 space-y-5">
            <Settingtitle>Topbar Color</Settingtitle>
            <div class="w-full flex justif-start items-center flex-wrap gap-6">
              <button
                @click="setTopbarColor('light')"
                class="relative">
                <img
                  src="../../../assets/images/controllericons/Light.png"
                  alt=""
                  class="w-[100px] h-[70px]" />
                <small
                  id="light"
                  class="text-blue-700 bottom-2 right-1 absolute hidden"
                  ><CheckBadgeIcon class="w-6 h-6"
                /></small>
              </button>
              <button
                @click="setTopbarColor('brand')"
                class="relative">
                <img
                  src="../../../assets/images/controllericons/Dark.png"
                  alt=""
                  class="w-[100px] h-[70px]" />
                <small class="text-blue-700 bottom-2 right-1 absolute"
                  ><CheckBadgeIcon class="w-6 h-6"
                /></small>
              </button>
              <button
                @click="setTopbarColor('dark')"
                class="relative">
                <img
                  src="../../../assets/images/controllericons/Dark.png"
                  alt=""
                  class="w-[100px] h-[70px]" />
                <small class="text-blue-700 bottom-2 right-1 absolute hidden"
                  ><CheckBadgeIcon class="w-6 h-6"
                /></small>
              </button>
            </div>
          </div>

          <div class="px-8 py-6 space-y-5">
            <Settingtitle>Menu Color</Settingtitle>
            <div class="w-full flex justif-start items-center flex-wrap gap-6">
              <button>
                <img
                  src="../../../assets/images/controllericons/Light.png"
                  alt=""
                  class="w-[100px] h-[70px]" />
                <small
                  class="text-blue-700 bottom-2 right-1 absolute"
                  :class="{
                    hidden: foundColor !== 'light',
                    ineline: foundColor == 'light',
                  }"
                  ><CheckBadgeIcon class="w-6 h-6"
                /></small>
              </button>
              <button>
                <img
                  src="../../../assets/images/controllericons/Dark.png"
                  alt=""
                  class="w-[100px] h-[70px]" />
                <small
                  class="text-blue-700 bottom-2 right-1 absolute"
                  :class="{
                    hidden: foundColor !== 'light',
                    ineline: foundColor == 'light',
                  }"
                  ><CheckBadgeIcon class="w-6 h-6"
                /></small>
              </button>
              <button>
                <img
                  src="../../../assets/images/controllericons/Dark.png"
                  alt=""
                  class="w-[100px] h-[70px]" />
                <small
                  class="text-blue-700 bottom-2 right-1 absolute"
                  :class="{
                    hidden: foundColor !== 'light',
                    ineline: foundColor == 'light',
                  }"
                  ><CheckBadgeIcon class="w-6 h-6"
                /></small>
              </button>
            </div>
          </div>

          <div class="px-8 py-6 space-y-5">
            <Settingtitle>Sidebar Size</Settingtitle>
            <div class="w-full flex justif-start flex-wrap items-center gap-6">
              <button>
                <img
                  src="../../../assets/images/controllericons/Light.png"
                  alt=""
                  class="w-[100px] h-[70px]" />
                <small
                  class="text-blue-700 bottom-2 right-1 absolute"
                  :class="{
                    hidden: foundColor !== 'light',
                    ineline: foundColor == 'light',
                  }"
                  ><CheckBadgeIcon class="w-6 h-6"
                /></small>
              </button>
              <button>
                <img
                  src="../../../assets/images/controllericons/Dark.png"
                  alt=""
                  class="w-[100px] h-[70px]" />
                <small
                  class="text-blue-700 bottom-2 right-1 absolute"
                  :class="{
                    hidden: foundColor !== 'light',
                    ineline: foundColor == 'light',
                  }"
                  ><CheckBadgeIcon class="w-6 h-6"
                /></small>
              </button>
              <button>
                <img
                  src="../../../assets/images/controllericons/Dark.png"
                  alt=""
                  class="w-[100px] h-[70px]" />
                <small
                  class="text-blue-700 bottom-2 right-1 absolute"
                  :class="{
                    hidden: foundColor !== 'light',
                    ineline: foundColor == 'light',
                  }"
                  ><CheckBadgeIcon class="w-6 h-6"
                /></small>
              </button>
              <button>
                <img
                  src="../../../assets/images/controllericons/Dark.png"
                  alt=""
                  class="w-[100px] h-[70px]" />
                <small
                  class="text-blue-700 bottom-2 right-1 absolute"
                  :class="{
                    hidden: foundColor !== 'light',
                    ineline: foundColor == 'light',
                  }"
                  ><CheckBadgeIcon class="w-6 h-6"
                /></small>
              </button>
              <button>
                <img
                  src="../../../assets/images/controllericons/Dark.png"
                  alt=""
                  class="w-[100px] h-[70px]" />
                <small
                  class="text-blue-700 bottom-2 right-1 absolute"
                  :class="{
                    hidden: foundColor !== 'light',
                    ineline: foundColor == 'light',
                  }"
                  ><CheckBadgeIcon class="w-6 h-6"
                /></small>
              </button>
            </div>
          </div>
          <!-- sidebar info -->
          <div class="flex justify-between px-8 md:py-20 lg:py-5">
            <h1
              class="text-xl tracking-wide leading-normal font-semibold capitalize text-emerald-700">
              Sidebar user info
            </h1>
            <toogleswitch />
          </div>
        </div>
        <!-- screen fixed -->
      </div>
    </div>
  </TransitionRoot>
</template>

<script>
import {
  settingsViewToggler,
  seetingsView,
} from '../../../scripts/Admin/topbar/topbarcontroller';
import {
  setTopbarColor,
  foundColor,
  topbarDefault,
} from '../../../scripts/Admin/Settings/topbar';

import Toogleswitch from '../../../components/Utilities/Toogleswitch.vue';
import Settingicon from './Settingicon.vue';
import Settingtitle from './Settingtitle.vue';
import { TransitionRoot } from '@headlessui/vue';
/*heroicons*/
import { CheckBadgeIcon } from '@heroicons/vue/24/solid';

export default {
  name: 'Setting',
  components: {
    Settingicon,
    Settingtitle,
    Toogleswitch,
    CheckBadgeIcon,
    TransitionRoot,
  },
  setup() {
    return {
      foundColor,
      topbarDefault,
      seetingsView,
      setTopbarColor,
      settingsViewToggler,
    };
  },
};
</script>

<style></style>
