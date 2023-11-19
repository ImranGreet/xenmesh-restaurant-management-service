import { sidebarView } from "../leftsidebar/layoutcontroller";

const routeToggling = function (index) {
  const routesToToggle = document.getElementById("routes-" + `${index}`);

  if (!sidebarView.value && routesToToggle.classList.contains("hidden")) {
    routesToToggle.classList.remove("hidden");
    routesToToggle.classList.add("block");
  } else if (!sidebarView.value && routesToToggle.classList.contains("block")) {
    routesToToggle.classList.add("hidden");
    routesToToggle.classList.remove("block");
  }
  console.log(sidebarView.value);

  console.log(index);
};

export { routeToggling };
