<template>
    <section>
        <div
            class="w-full flex flex-col min-h-[93vh] max-h-[93vh] overflow-x-hidden overflow-custome z-0 mt-[61px] relative"
            :class="{
                'bg-blue-800/70 text-white': brand,
                'bg-gray-800 text-white': dark,
                'bg-white text-gray-800': light,
                'bg-inherit text-gray-800': !light && !dark && !brand,
            }">
            <Logo />
            <div class="mt-5"></div>
            <div
                v-for="(sidebarLink, index) in useLeftSideBarRouterLink"
                :key="index">
                <Navigations
                    :routerLinkId="sidebarLink.id"
                    :routerLink="sidebarLink.paths"
                    :componentText="sidebarLink.largeIcon">
                    {{ sidebarLink.name }}
                </Navigations>
            </div>
        </div>
    </section>
</template>

<script>
/*composables*/
import useLeftSideBarRouterLink from '../../composables/router-link';
import { light, brand, dark } from '../../composables/menu';

import Logo from '../sidebarProperties/Logo.vue';
import Footer from '../Footer/Footer.vue';
import Navigations from '../Dropdown/Navigations.vue';

export default {
    name: 'Admin',
    components: {
        Logo,
        Footer,
        Navigations,
    },
    setup() {
        return {
            useLeftSideBarRouterLink,
            light,
            brand,
            dark,
        };
    },
};
</script>
