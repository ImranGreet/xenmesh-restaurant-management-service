<template>
    <div
        class="w-[700px] h-auto bg-white absolute top-16 right-0 z-50 rounded-sm rightSideBarControllerMenu">
        <div class="w-full border border-blue-300 rounded-md space-y-2">
            <div class="w-full px-4 py-2 bg-blue-700 text-white">
                <div class="w-full flex justify-between items-center">
                    <h1 class="text-xl tracking-wider leading-relaxed">Theme Setting</h1>
                    <button @click="toggleRightSidebar()">
                        <XMarkIcon class="w-6 h-6" />
                    </button>
                </div>
            </div>
            <div class="px-5">
                <div class="text-start">
                    <h1>Chose Layout</h1>
                </div>
                <div class="flex justify-start items-center py-3 gap-x-8">
                    <SettingButton @click="fluidToggler()" />
                    <SettingButton @click="boxToggler()" />
                    <SettingButton @click="detachToggler()" />
                </div>
            </div>
            <div class="px-5">
                <div class="text-start">
                    <h1>Chose Layout</h1>
                </div>
                <div class="flex justify-start items-center py-3 gap-x-8">
                    <SettingButton />
                    <SettingButton />
                </div>
            </div>
            <div class="px-5">
                <div class="text-start">
                    <h1>Top Bar Color</h1>
                </div>
                <div class="flex justify-start items-center py-3 gap-x-8">
                    <SettingButton @click="lightColorSeter()" />
                    <SettingButton @click="darkColorSeter()" />
                    <SettingButton @click="brandColorSeter()" />
                </div>
            </div>
            <div class="px-5">
                <div class="text-start">
                    <h1>Menu Color</h1>
                </div>
                <div class="flex justify-start items-center py-3 gap-x-8">
                    <SettingButton @click="menuLight()" />
                    <SettingButton @click="menuBrand()" />
                    <SettingButton @click="menuDark()" />
                </div>
            </div>
            <div class="px-5">
                <div class="text-start">
                    <h1>Layout Position</h1>
                </div>
                <div class="flex justify-start items-center py-3 gap-x-8">
                    <button
                        @click="fixedLayout()"
                        class="px-5 py-2 bg-blue-500 text-white"
                        >Fixed</button
                    >
                    <button
                        @click="scrollLayout()"
                        class="bg-rose-300 text-gray-950 px-3 py-2"
                        >Scroll</button
                    >
                </div>
            </div>
            <div class="px-5">
                <div class="text-start flex">
                    <h1>Side User Info</h1>
                    <div class="flex justify-start items-center py-3 gap-x-8">
                        <input
                            type="checkbox"
                            class="px-3 py-2 w-14 bg-green-700"
                            value="Boat" />
                        <label
                            for="vehicle3"
                            class="sr-only">
                            I have a boat</label
                        >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    toggleRightSidebar,
    boxToggler,
    fluidToggler,
    detachToggler,
} from '../../composables/layout';
import { brandColorSeter, lightColorSeter, darkColorSeter } from '../../composables/topbar';
import {
    menuBrand,
    menuDark,
    menuLight,
    fixedLayout,
    scrollLayout,
} from '../../composables/layoutControll';

import { XMarkIcon } from '@heroicons/vue/24/solid';
import SettingButton from '../Utilities/SettingButton.vue';

export default {
    name: 'Placing',
    components: {
        XMarkIcon,
        SettingButton,
    },

    setup() {
        return {
            toggleRightSidebar,
            boxToggler,
            fluidToggler,
            detachToggler,
            /*top bar methods*/
            brandColorSeter,
            lightColorSeter,
            darkColorSeter,
            /*sidebar methods*/
            menuBrand,
            menuDark,
            menuLight,
            /*layout fixed and scroller methods start*/
            fixedLayout,
            scrollLayout,
            /*layout fixed and scroller methods end*/
        };
    },
};
</script>
