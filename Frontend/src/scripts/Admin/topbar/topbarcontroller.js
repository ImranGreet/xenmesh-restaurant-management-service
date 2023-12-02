import { ref } from 'vue';

const profileDropDown = ref(false);
const notificationsDropDown = ref(false);
const searchDropDown = ref(false);
const seetingsView = ref(false);

const profileToggler = function () {
  profileDropDown.value = !profileDropDown.value;
};

const notificationsToggler = function () {
  notificationsDropDown.value = !notificationsDropDown.value;
};

const toggleSearchForm = function () {
  searchDropDown.value = !searchDropDown.value;
};

const settingsViewToggler = function () {
  seetingsView.value = !seetingsView.value;
};

window.addEventListener('click', function (event) {
  if (profileDropDown.value && !event.target.closest('.profileView')) {
    profileDropDown.value = false;
  }
});

window.addEventListener('click', function (event) {
  if (
    notificationsDropDown.value &&
    !event.target.closest('.notificationsView')
  ) {
    notificationsDropDown.value = false;
  }
});

window.addEventListener('click', function (event) {
  if (searchDropDown.value && !event.target.closest('.smallSearch')) {
    //searchDropDown.value = false;
  }
});
window.addEventListener('click', function (event) {
  if (seetingsView.value && !event.target.closest('.settingsViews')) {
    // seetingsView.value = false;
  }
});

export {
  profileDropDown,
  notificationsDropDown,
  searchDropDown,
  seetingsView,
  profileToggler,
  notificationsToggler,
  toggleSearchForm,
  settingsViewToggler,
};
