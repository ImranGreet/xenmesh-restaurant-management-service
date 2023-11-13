<template>
  <div class="w-full bg-white h-full">
    <div class="w-full h-full">
      <div class="px-5 py-[14px] lg:py-[22px] w-full bg-blue-600/25">
        <div class="flex justify-between w-full items-center">
          <h3 class="text-xl tracking-wide">Theme Settings</h3>
          <button @click="settingsViewToggler()">
            <i><font-awesome-icon icon="fa-solid fa-x" /></i>
          </button>
        </div>
      </div>
      <!-- indicator -->
      <div class="w-full h-[80%] overflow-y-scroll custom-overflowscroll">
        <div class="px-5 py-6 space-y-5">
          <Settingtitle>Choose Layout</Settingtitle>
          <div class="w-full flex justif-start items-center gap-6">
            <button>
              <img
                src="../../assets/images/controllericons/Light.png"
                alt=""
                class="w-[100px] h-[70px]" />
            </button>
            <button>
              <img
                src="../../assets/images/controllericons/brand.png"
                alt=""
                class="w-[100px] h-[70px]" />
            </button>
          </div>
        </div>

        <div class="px-5 py-6 space-y-5">
          <Settingtitle>Color Schema</Settingtitle>
          <div class="w-full flex justif-start items-center flex-wrap gap-6">
            <button>
              <img
                src="../../assets/images/controllericons/Light.png"
                alt=""
                class="w-[100px] h-[70px]" />
            </button>
            <button>
              <img
                src="../../assets/images/controllericons/brand.png"
                alt=""
                class="w-[100px] h-[70px]" />
            </button>
          </div>
        </div>

        <div class="px-5 py-6 space-y-5">
          <h1 class="w-full text-xl tracking-wide leading-relax">
            Layout Mode
          </h1>
          <div class="w-full flex justif-start items-center flex-wrap gap-6">
            <button>
              <img
                src="../../assets/images/controllericons/Light.png"
                alt=""
                class="w-[100px] h-[70px]" />
            </button>
            <button>
              <img
                src="../../assets/images/controllericons/brand.png"
                alt=""
                class="w-[100px] h-[70px]" />
            </button>
            <button>
              <img
                src="../../assets/images/controllericons/brand.png"
                alt=""
                class="w-[100px] h-[70px]" />
            </button>
          </div>
        </div>

        <div class="px-5 py-6 space-y-5">
          <Settingtitle>Topbar Mode</Settingtitle>
          <div class="w-full flex justif-start items-center flex-wrap gap-6">
            <button>
              <img
                src="../../assets/images/controllericons/Light.png"
                alt=""
                class="w-[100px] h-[70px]" />
            </button>
            <button>
              <img
                src="../../assets/images/controllericons/brand.png"
                alt=""
                class="w-[100px] h-[70px]" />
            </button>
            <button>
              <img
                src="../../assets/images/controllericons/brand.png"
                alt=""
                class="w-[100px] h-[70px]" />
            </button>
          </div>
        </div>

        <div class="px-5 py-6 space-y-5">
          <Settingtitle>Menu Color</Settingtitle>
          <div class="w-full flex justif-start items-center flex-wrap gap-6">
            <button>
              <img
                src="../../assets/images/controllericons/Light.png"
                alt=""
                class="w-[100px] h-[70px]" />
            </button>
            <button>
              <img
                src="../../assets/images/controllericons/brand.png"
                alt=""
                class="w-[100px] h-[70px]" />
            </button>
            <button>
              <img
                src="../../assets/images/controllericons/brand.png"
                alt=""
                class="w-[100px] h-[70px]" />
            </button>
          </div>
        </div>

        <div class="px-5 py-6 space-y-5">
          <Settingtitle>Sidebar Size</Settingtitle>
          <div class="w-full flex justif-start flex-wrap items-center gap-6">
            <button>
              <img
                src="../../assets/images/controllericons/Light.png"
                alt=""
                class="w-[100px] h-[70px]" />
            </button>
            <button>
              <img
                src="../../assets/images/controllericons/brand.png"
                alt=""
                class="w-[100px] h-[70px]" />
            </button>
            <button>
              <img
                src="../../assets/images/controllericons/brand.png"
                alt=""
                class="w-[100px] h-[70px]" />
            </button>
            <button>
              <img
                src="../../assets/images/controllericons/brand.png"
                alt=""
                class="w-[100px] h-[70px]" />
            </button>
            <button>
              <img
                src="../../assets/images/controllericons/brand.png"
                alt=""
                class="w-[100px] h-[70px]" />
            </button>
          </div>
        </div>
      </div>
      <!-- screen fixed -->
      <div
        class="flex justify-between items-center h-[13%] bg-blue-200/25 w-full px-6">
        <button class="bg-slate-600 text-white py-2 px-10">Fixed</button>
        <button class="bg-red-400 text-white py-2 px-10">Scroll</button>
      </div>
    </div>
  </div>
</template>

<script>
import { settingsViewToggler } from "../../scripts/topbar/topbarcontroller";
import Settingicon from "./Settingicon.vue";
import Settingtitle from "./Settingtitle.vue";

export default {
  name: "Setting",
  components: { Settingicon, Settingtitle },
  setup() {
    const image = "../../assets/images/controllericons/brand.png";
    return {
      settingsViewToggler,
      image,
    };
  },
};
</script>

<style></style>
