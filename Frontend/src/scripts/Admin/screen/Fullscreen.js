import { ref } from 'vue';

const fullscreenElement = ref();
const fullScreen = ref(false);

const enterFullScreen = () => {
  const element = fullscreenElement.value;

  if (element.requestFullscreen) {
    element.requestFullscreen();
  } else if (element.mozRequestFullScreen) {
    // Firefox
    element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) {
    // Chrome, Safari, and Opera
    element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) {
    // IE/Edge
    element.msRequestFullscreen();
  }
  fullScreen.value = !fullScreen.value;
};

const exitFullScreen = () => {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    // Firefox
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) {
    // Chrome, Safari, and Opera
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) {
    // IE/Edge
    document.msExitFullscreen();
  }
  fullScreen.value = !fullScreen.value;
};

const toggleFullScreen = () => {
  if (fullScreen.value) {
    exitFullScreen();
  } else if (!fullScreen.value) {
    enterFullScreen();
  }
};

export { fullScreen, fullscreenElement, toggleFullScreen };
