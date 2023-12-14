import { onMounted, ref } from 'vue';

const screenWidth = ref(true);

const getMobileFooter = function () {
  if (window.innerWidth > 1050) {
    screenWidth.value = false;
  }
};

window.addEventListener('resize', function () {
  getMobileFooter();
});

window.addEventListener('load', function () {
  getMobileFooter();
});

export { screenWidth, getMobileFooter };
