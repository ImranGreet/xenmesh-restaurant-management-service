import { ref } from "vue";

const resizeView = ref(false);
let innerwidth = ref(0);
const screenSizes = ref([640, 768, 1024, 1280, 1536]);

const resizeController = function () {
  innerwidth.value = window.innerWidth;

  if (innerwidth.value < screenSizes.value[0]) {
    innerwidth.value = "150px";
  } else if (
    innerwidth.value >= screenSizes.value[0] &&
    innerwidth.value < screenSizes.value[1]
  ) {
    innerwidth.value = "200px";
  } else if (
    innerwidth.value >= screenSizes.value[1] &&
    innerwidth.value < screenSizes.value[2]
  ) {
    innerwidth.value = "300px";
  } else if (
    innerwidth.value >= screenSizes.value[2] &&
    innerwidth.value < screenSizes.value[3]
  ) {
    innerwidth.value = "500px";
  }
};

window.addEventListener("resize", resizeController);

// Call the function initially to set the initial state
resizeController();

export { resizeController, innerwidth as customWidth };
