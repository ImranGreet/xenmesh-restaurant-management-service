import { computed, ref } from 'vue';
import { fullscreenElement } from './layout';

const innerHeightOfAdminLayout = ref(0);
const innerWidthOfAdminLayout = ref(0);

const adminHeight = () => {
    if (fullscreenElement.value) {
        console.log(fullscreenElement.value.getBoundingClientRect().height, 'height');
    } else {
        console.log('Fuck');
    }
};

export { adminHeight };
