import { ref } from 'vue';

import { seetingsView } from '../../../scripts/Admin/topbar/topbarcontroller';

import { ulLinkCloser } from '../../../scripts/Admin/rightsidebar/togglelink';

const sidebarView = ref(true);
const mobileView = ref(false);

const TransitionToggler = ref(false);

const sidebarNavigations = ref(false);

const sidebarNavTextController = function () {
  sidebarNavigations.value = !sidebarNavigations.value;
};

const sidebarController = function () {
  const viewPortInnerWidth = window.innerWidth;
  if (viewPortInnerWidth <= 640) {
    mobileView.value = true;
  } else if (viewPortInnerWidth > 640) {
    if (mobileView.value) {
      mobileView.value = false;
    }
  }
  sidebarView.value = !sidebarView.value;
  ulLinkCloser();
  TransitionToggler.value = !TransitionToggler.value;
};

/*call it in initaila state*/
sidebarController();

window.addEventListener('resize', function () {
  if (mobileView.value) {
    mobileView.value = false;
  }
  if (this.window.innerWidth <= 768) {
    seetingsView.value = false;
  } else {
    if (seetingsView.value) {
      seetingsView.value = false;
    }
  }
  sidebarController();
});

export {
  sidebarView,
  mobileView,
  sidebarNavigations,
  sidebarController,
  sidebarNavTextController,
  TransitionToggler,
};
