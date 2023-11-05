import { ref } from "vue";

const sidebarController = ref(false);
const rightSideBar = ref(false);
const showDropDown = ref(false);

const toggleSidebar = () => {
  sidebarController.value = !sidebarController.value;
};

const toggleRightSidebar = () => {
  rightSideBar.value = !rightSideBar.value;
};

const toggleDropdownMenu = () => {
  showDropDown.value = !showDropDown.value;
};

export {
  sidebarController,
  toggleSidebar,
  rightSideBar,
  toggleRightSidebar,
  showDropDown,
  toggleDropdownMenu,
};
