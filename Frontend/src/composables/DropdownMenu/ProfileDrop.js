import { ref } from 'vue';
import { fullscreenElement } from '../fullscreen';

const dropDown = ref(false);
const profileMenuDropDown = function () {
    dropDown.value = !dropDown.value;
};
const hideDropDown = function () {
    if (dropDown.value) {
        dropDown.value = false;
    }
};
//window.addEventListener('click', hideDropDown);

export { dropDown, profileMenuDropDown };
