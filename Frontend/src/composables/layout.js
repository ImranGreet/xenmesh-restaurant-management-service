import { ref } from 'vue';

const sidebarController = ref(false);
const rightSideBar = ref(false);
const showDropDown = ref(false);
const fullscreenElement = ref();
const fullScreen = ref(false);
const boxModel = ref(false);

const toggleSidebar = () => {
    sidebarController.value = !sidebarController.value;
};

const toggleRightSidebar = () => {
    rightSideBar.value = !rightSideBar.value;
};

const toggleDropdownMenu = () => {
    showDropDown.value = !showDropDown.value;
};

const boxToggler = () => {
    boxModel.value = !boxModel.value;
};

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

export {
    sidebarController,
    rightSideBar,
    showDropDown,
    fullScreen,
    fullscreenElement,
    boxModel,
    toggleSidebar,
    toggleRightSidebar,
    toggleDropdownMenu,
    toggleFullScreen,
    boxToggler,
};
