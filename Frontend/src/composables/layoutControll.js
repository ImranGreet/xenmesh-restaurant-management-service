import { ref } from 'vue';

const boxModel = ref(false);

const fluidModel = ref(false);
const ditachedModel = ref(false);

const rightSideBar = ref(false);
const sidebarController = ref(false);

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

const boxToggler = () => {
    if (fluidModel.value && ditachedModel.value) {
        fluidModel.value = false;
        ditachedModel = false;
        boxModel.value = true;
    } else if (!fluidModel.value || ditachedModel.value) {
        ditachedModel.value = false;
        boxModel.value = true;
    } else if (!ditachedModel.value || fluidModel.value) {
        boxModel.value = true;
    }
};

const fluidToggler = function () {
    if (boxModel.value && ditachedModel.value) {
        boxModel.value = false;
        ditachedModel = false;
    } else if (!boxModel.value || ditachedModel.value) {
        ditachedModel.value = false;
    } else if (!ditachedModel.value || boxModel.value) {
        boxModel.value = false;
    }
};

const detachToggler = function () {
    if (boxModel.value && fluidModel.value) {
        boxModel.value = false;
        fluidModel = false;
        ditachedModel.value = true;
    } else if (!boxModel.value || fluidModel.value) {
        fluidModel.value = false;
        ditachedModel.value = true;
    } else if (!fluidModel.value || boxModel.value) {
        boxModel.value = false;
        ditachedModel.value = true;
    }
};

export {
    /*methods*/
    toggleDropdownMenu,
    toggleSidebar,
    toggleRightSidebar,
    boxToggler,
    fluidToggler,
    detachToggler,
    /*properties*/
    sidebarController,
    showDropDown,
    rightSideBar,
    boxModel,
    fluidModel,
    ditachedModel,
};
