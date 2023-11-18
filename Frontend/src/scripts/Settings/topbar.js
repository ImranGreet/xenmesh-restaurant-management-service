import { ref } from "vue";

const topbarColor = ref(["default", "light", "dark", "brand"]);

let foundColor = ref(false);

const setTopbarColor = function (colorPalet) {
  const colorToSet = topbarColor.value.find((color) => color == colorPalet);
  if (colorToSet) {
    foundColor = colorToSet;
  } else {
    foundColor = topbarColor.value.at(0);
  }
};

export { setTopbarColor, foundColor };
