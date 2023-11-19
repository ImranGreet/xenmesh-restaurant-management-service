import { ref } from "vue";

const activeMenuButton = ref(false);

const useMenuButtonController = function (index) {
  console.log(index);
};

export { useMenuButtonController, activeMenuButton };
