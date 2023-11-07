<template>
    <section
        class="max-h-screen min-h-screen flex justify-between relative"
        :class="{
            'w-3/4 mx-auto': boxModel,
            'w-full': !boxModel,
            'w-[90%] mx-auto ': ditachedModel,
        }"
        ref="fullscreenElement">
        <Placing
            class="absolute top-16 right-0"
            :class="{ block: rightSideBar, hidden: !rightSideBar }" />
        <Leftsidebar :class="{ 'w-1/6': !sidebarController, 'w-1/12': sidebarController }" />
        <section
            class="flex flex-col justify-between"
            :class="{ 'w-5/6 ': !sidebarController, 'w-11/12': sidebarController }">
            <Topbar :class="{ 'w-full': !boxModel, 'w-3/4 mx-auto': boxModel }" />
            <section class="w-full bg-gray-100">
                <router-view></router-view>
            </section>
            <Footer />
        </section>
        <!-- screen absolute -->
        <div
            class="absolute inset-x-0 inset-y-0 bg-gray-400/50"
            :class="{ block: rightSideBar, hidden: !rightSideBar }"></div>
    </section>
</template>

<script>
/*composables*/

import {
    sidebarController,
    toggleSidebar,
    rightSideBar,
    toggleRightSidebar,
    fullscreenElement,
    toggleFullScreen,
    boxToggler,
    boxModel,
    ditachedModel,
} from '../composables/layout';

import { adminHeight } from '../composables/screen';

/*components*/
import Footer from '../components/Footer/Footer.vue';
import Placing from '../components/Settings/Placing.vue';
import Leftsidebar from '../components/Sidebar/Leftsidebar.vue';
import Topbar from '../components/Sidebar/Topbar.vue';

export default {
    name: 'Admin',
    components: {
        Topbar,
        Leftsidebar,
        Footer,
        Placing,
    },
    setup() {
        adminHeight();
        return {
            /*properties*/
            sidebarController,
            rightSideBar,
            fullscreenElement,
            boxModel,
            ditachedModel,
            /*methods*/
            toggleSidebar,
            toggleFullScreen,
            toggleRightSidebar,
            adminHeight,
            boxToggler,
        };
    },
};
</script>
