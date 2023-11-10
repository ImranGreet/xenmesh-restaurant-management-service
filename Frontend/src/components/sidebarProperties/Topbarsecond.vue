<template>
    <div class="flex justify-end items-center gap-x-5 relative">
        <button
            @click="notificationsDrop()"
            class="notificationsComponent">
            <BellIcon class="w-6 h-6 text-inherit" />
        </button>
        <button
            class="box rightSideBarControllerMenu"
            v-wave="{
                color: 'rgb(59 130 246 / 0.5)',
                easing: 'ease-out',
                duration: 0.7,
                dissolveDuration: 0.15,
                initialOpacity: 0.2,
                finalOpacity: 0.1,
                cancellationPeriod: 75,
                trigger: 'auto',
                tagName: 'button',
            }"
            @click="toggleRightSidebar()">
            <Cog6ToothIcon class="w-6 h-6 text-inherit" />
        </button>

        <button><MoonIcon class="w-6 h-6 text-inherit" /></button>

        <button
            @click="toggleFullScreen()"
            class="box"
            v-wave="{
                color: 'rgb(239 68 68 / 0.25)',
                easing: 'ease-out',
                duration: 0.7,
                dissolveDuration: 0.15,
                initialOpacity: 0.2,
                finalOpacity: 0.1,
                cancellationPeriod: 75,
                trigger: 'auto',
                tagName: 'button',
            }">
            <ArrowsPointingInIcon
                v-if="fullScreen"
                class="w-6 h-6 text-inherit" />
            <ArrowsPointingOutIcon
                v-if="!fullScreen"
                class="w-6 h-6 text-inherit" />
        </button>
        <div
            class="flex justify-center items-center gap-x-3 cursor-pointer relative dropdownClass"
            role="button"
            @click="profileMenuDropDown()">
            <img
                :src="profileImage"
                alt=""
                class="w-12 h-12 rounded-full object-center" />
            <div class="space-y-1">
                <a
                    href="#"
                    role="button"
                    class="text-inherit font-semibold"
                    >John Doe</a
                >
                <p class="text-inherit text-sm">Admin</p>
            </div>
            <Profile
                class="w-24 absolute -right-[2.1rem] top-14 z-50"
                :class="{ hidden: !dropDown, 'block ': dropDown }" />
        </div>
        <Notifications
            class="absolute top-14 right-36 z-50 bg-white"
            :class="{ hidden: !notificationsDropDown, block: notificationsDropDown }" />
    </div>
</template>

<script>
import { ref } from 'vue';
import { toggleRightSidebar, toggleFullScreen, fullScreen } from '../../composables/layout';
import {
    notificatiosDropdownController as notificationsDrop,
    profileMenuDropDown,
    dropDown,
    notificationsDropDown,
    showDropDown,
} from '../../composables/DropdownMenu/dropdownController';
/*components*/
import { Cog6ToothIcon } from '@heroicons/vue/24/solid';
import Profile from '../Dropdown/Profile.vue';
import Notifications from '../Dropdown/Notifications.vue';

import {
    BellIcon,
    MoonIcon,
    ArrowsPointingInIcon,
    ArrowsPointingOutIcon,
} from '@heroicons/vue/24/outline';

export default {
    components: {
        BellIcon,
        MoonIcon,
        Cog6ToothIcon,
        ArrowsPointingInIcon,
        ArrowsPointingOutIcon,
        Profile,
        Notifications,
    },
    setup() {
        const profileImage = ref(
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        );
        return {
            profileImage,
            fullScreen,
            dropDown,
            notificationsDropDown,
            showDropDown,
            /*methods*/
            toggleRightSidebar,
            toggleFullScreen,
            profileMenuDropDown,
            notificationsDrop,
        };
    },
};
</script>
