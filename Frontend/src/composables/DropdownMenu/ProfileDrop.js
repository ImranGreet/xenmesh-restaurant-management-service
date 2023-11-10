import { ref } from 'vue';

const showDropDown = ref(null);

const dropDown = ref(false);
const profileMenuDropDown = function () {
    dropDown.value = !dropDown.value;
};
const hideDropDown = function (event) {
    if (dropDown.value && !event.target.closest('.dropdownClass')) {
        dropDown.value = false;
    }
};

window.addEventListener('click', hideDropDown);

export { dropDown, profileMenuDropDown, showDropDown, hideDropDown };
