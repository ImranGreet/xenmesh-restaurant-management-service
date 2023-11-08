<template>
    <div
        class="w-full flex justify-between items-center px-10 py-2 border-b border-gray-700/25"
        :class="{
            'bg-gray-800 text-white': darkColor,
            'bg-inherit': lightColor,
            'bg-blue-600/60 text-white': brandColor,
        }">
        <Topbarfirst />
        <Topbarsecond />
    </div>
</template>

<script>
import Topbarfirst from '../sidebarProperties/Topbarfirst.vue';
import Topbarsecond from '../sidebarProperties/Topbarsecond.vue';
/*composables*/
import { darkColor, brandColor, lightColor } from '../../composables/topbar';
export default {
    name: 'Topbar',
    components: {
        Topbarfirst,
        Topbarsecond,
    },
    setup() {
        return {
            darkColor,
            brandColor,
            lightColor,
        };
    },
};
</script>
