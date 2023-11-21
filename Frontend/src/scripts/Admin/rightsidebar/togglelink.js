import { sidebarView } from "../leftsidebar/layoutcontroller";

const routeToggling = function (index) {
  const routesToToggle = document.getElementById("routes-" + `${index}`);

  if (!sidebarView.value) {
    if (routesToToggle.classList.contains("hidden")) {
      routesToToggle.classList.remove("hidden");
      routesToToggle.classList.add("block");
    } else if (routesToToggle.classList.contains("block")) {
      routesToToggle.classList.add("hidden");
      routesToToggle.classList.remove("block");
    }
  }
};

const ulLinkCloser = function () {
  const ulLinks = document.querySelectorAll(".ul-link");
  ulLinks.forEach((ulLink) => {
    if (ulLink.classList.contains("block")) {
      ulLink.classList.add("hidden");
      ulLink.classList.remove("block");
    }
  });
};

const mouseOverUlLinkDiscloser = function (index) {
  const routesToToggle = document.getElementById("routes-" + `${index}`);
  if (sidebarView.value) {
    if (routesToToggle.classList.contains("hidden")) {
      routesToToggle.classList.remove("hidden");
      routesToToggle.classList.add("block");
    }
  }
};

const mouseOutUlLinkCloser = function (index) {
  const routesToToggle = document.getElementById("routes-" + `${index}`);
  if (sidebarView.value) {
    if (routesToToggle.classList.contains("block")) {
      routesToToggle.classList.remove("block");
      routesToToggle.classList.add("hidden");
    }
  }
};

const discloseMenuBarOnHover = function () {
  if (sidebarView.value) {
    sidebarView.value = false;
  }
};

export {
  routeToggling,
  mouseOverUlLinkDiscloser,
  mouseOutUlLinkCloser,
  ulLinkCloser,
  discloseMenuBarOnHover,
};
