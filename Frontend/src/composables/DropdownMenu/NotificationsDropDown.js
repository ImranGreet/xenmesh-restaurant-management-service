import { ref } from 'vue';

const notificationsDropDown = ref(false);

const notificatiosDropdownController = function () {
    notificationsDropDown.value = !notificationsDropDown.value;
};

export { notificationsDropDown, notificatiosDropdownController };
