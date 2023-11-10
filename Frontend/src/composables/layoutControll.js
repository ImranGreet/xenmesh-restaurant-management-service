import { ref } from 'vue';
import { darkColorSeter, brandColorSeter, lightColorSeter } from './topbar';
import layoutPosition from './position';

import {
    lightColorSeter as menuLight,
    brandColorSeter as menuBrand,
    darkColorSeter as menuDark,
} from '../composables/menu';

/*fixed and scroller layout start*/
const { fixedLayout, scrollLayout } = layoutPosition;
/*fixed and scroller layout end*/

/*right side bar controller*/
const rightSideBar = ref(false);

const toggleRightSidebar = () => {
    rightSideBar.value = !rightSideBar.value;
};
window.addEventListener('click', function (event) {
    if (rightSideBar.value && !event.target.closest('.rightSideBarControllerMenu')) {
        rightSideBar.value = false;
    }
});
/*end right sidebar controller*/
const boxModel = ref(false);

const fluidModel = ref(false);
const ditachedModel = ref(false);

const sidebarController = ref(false);

const showDropDown = ref(false);

const toggleSidebar = () => {
    sidebarController.value = !sidebarController.value;
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
    /*topbar*/
    brandColorSeter,
    lightColorSeter,
    darkColorSeter,
    /*end topbar*/
    /*sidebar menu*/
    menuBrand,
    menuLight,
    menuDark,
    /*sidebar menu end*/
    /*fixed and scroller layout start*/
    fixedLayout,
    scrollLayout,
    /*fixed and scroller layout end*/
    /*properties*/
    sidebarController,
    showDropDown,
    rightSideBar,
    boxModel,
    fluidModel,
    ditachedModel,
};
