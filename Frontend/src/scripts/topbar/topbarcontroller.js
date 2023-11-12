import { ref } from "vue";

const profileDropDown = ref(false);

const profileToggler = function () {
  profileDropDown.value = !profileDropDown.value;
};

export { profileDropDown, profileToggler };
