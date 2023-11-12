import { ref } from "vue";

const profileDropDown = ref(false);
const notificationsDropDown = ref(false);
const searchDropDown = ref(false);

const profileToggler = function () {
  profileDropDown.value = !profileDropDown.value;
};

const notificationsToggler = function () {
  notificationsDropDown.value = !notificationsDropDown.value;
};

const toggleSearchForm = function () {
  searchDropDown.value = !searchDropDown.value;
};

window.addEventListener("click", function (event) {
  if (profileDropDown.value && !event.target.closest(".profileView")) {
    profileDropDown.value = false;
  }
});

window.addEventListener("click", function (event) {
  if (
    notificationsDropDown.value &&
    !event.target.closest(".notificationsView")
  ) {
    notificationsDropDown.value = false;
  }
});

window.addEventListener("click", function (event) {
  if (searchDropDown.value && !event.target.closest(".smallSearch")) {
    //searchDropDown.value = false;
  }
});

export {
  profileDropDown,
  notificationsDropDown,
  searchDropDown,
  profileToggler,
  notificationsToggler,
  toggleSearchForm,
};
