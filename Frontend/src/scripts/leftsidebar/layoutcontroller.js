import { ref } from "vue";

const sidebarView = ref(false);

const sidebarController = function () {
  sidebarView.value = !sidebarView.value;
};

export { sidebarController, sidebarView };
