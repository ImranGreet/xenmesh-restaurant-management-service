import { ref } from 'vue';

const notificationsDropDown = ref(false);

const notificatiosDropdownController = function () {
    notificationsDropDown.value = !notificationsDropDown.value;
};

window.addEventListener('click', function (event) {
    if (notificationsDropDown.value && !event.target.closest('.notificationsComponent')) {
        notificationsDropDown.value = false;
    }
});

export { notificationsDropDown, notificatiosDropdownController };
