<template>
    <div class="w-full">
        <button
            @click="toggleDropdownMenu()"
            class="w-full flex justify-evenly items-center text-inherit py-3 text-xl">
            <span class="inline-block">
                <component
                    :is="compotext"
                    :class="{
                        'w-4 h-4': !sidebarController,
                        'w-6 h-6': sidebarController,
                    }"></component>
            </span>
            <span
                :class="{
                    'inline-block ': !sidebarController,
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
                        hidden: sidebarController || showDropDown,
                    }">
                </ChevronRightIcon>

                <ChevronDownIcon
                    v-if="showDropDown"
                    name="chevron"
                    class="w-4 h-4"
                    :class="{
                        'inline-block': !sidebarController,
                        hidden: sidebarController,
                    }">
                </ChevronDownIcon>
            </span>
        </button>

        <transition
            enter-active-class="transition ease-out duration-100"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95">
            <ul
                v-if="showDropDown"
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
                        class="w-full block py-2 px-2 capitalize text-base tracking-wide">
                        {{ track.params }}</router-link
                    >
                </li>
            </ul>
        </transition>
    </div>
</template>

<script>
import {
    sidebarController,
    toggleRightSidebar,
    showDropDown,
    toggleDropdownMenu,
} from '../../composables/layout';
import {
    HomeIcon,
    ChevronRightIcon,
    ChevronDownIcon,
    BanknotesIcon,
    Battery50Icon,
    CalculatorIcon,
} from '@heroicons/vue/24/outline';

export default {
    name: 'Navigations',
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
            sidebarController,
            urlTag,
            compotext,
            showDropDown,
            DropdownRouterLinkId,
            toggleRightSidebar,
            toggleDropdownMenu,
        };
    },
};
</script>
