import { ref } from 'vue';

const showDropDown = ref(null);

const dropDown = ref(false);
const profileMenuDropDown = function () {
    dropDown.value = !dropDown.value;
};
const hideDropDown = function (event) {};

window.addEventListener('click', hideDropDown);

export { dropDown, profileMenuDropDown, showDropDown, hideDropDown };
