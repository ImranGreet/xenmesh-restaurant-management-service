import { ref } from "vue";

const sidebarController = ref(false);
const rightSideBar = ref(false);

const toggleSidebar = () => {
  sidebarController.value = !sidebarController.value;
};

const toggleRightSidebar = () => {
  rightSideBar.value = !rightSideBar.value;
};

export { sidebarController, toggleSidebar, rightSideBar, toggleRightSidebar };
