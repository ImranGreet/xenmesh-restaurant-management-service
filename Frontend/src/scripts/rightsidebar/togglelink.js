import { sidebarView } from "../leftsidebar/layoutcontroller";

const routeToggling = function (index) {
  const toggler = document.getElementById("routeToggler" + `${index}`);
  const routesToToggle = document.getElementById("routes" + `${index}`);

  if (!sidebarView && routesToToggle.classList.contains("hidden")) {
    routesToToggle.classList.remove("hidden");
    routesToToggle.classList.add("block");
  }

  if (!sidebarView && routesToToggle.classList.contains("block")) {
    routesToToggle.classList.remove("block");
    routesToToggle.classList.add("hidden");
  }
};

export { routeToggling };
