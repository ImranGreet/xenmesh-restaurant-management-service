import { ref } from "vue";

const sidebarView = ref(false);
const mobileView = ref(false);

const sidebarController = function () {
  const viewPortInnerWidth = window.innerWidth;
  if (viewPortInnerWidth <= 640) {
    mobileView.value = !mobileView.value;
  } else if (viewPortInnerWidth > 640) {
    if (mobileView.value) {
      mobileView.value = false;
    }
  }
  sidebarView.value = !sidebarView.value;
};

/*call it in initaila state*/
sidebarController();

window.addEventListener("resize", function () {
  if (mobileView.value) {
    mobileView.value = false;
  }
  sidebarController();
});

export { sidebarController, sidebarView, mobileView };
