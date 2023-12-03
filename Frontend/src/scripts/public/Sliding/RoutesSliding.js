import { ref } from 'vue';
import { useCategoryRoutes as categories } from '../Navs/categoryNav';



const useRoutesSlider = function () {
  const routesPerview = ref(0);
  const initailIndex = ref(0);
  const availableRoutes = ref(0);

  const setRoutes = () => {
    availableRoutes.value = categories.value.slice(
      initailIndex.value,
      routesPerview.value,
    );
    return availableRoutes;
  };

  const routesInDevices = function () {
    if (window.innerWidth <= 640) {
      routesPerview.value = 3;
      setRoutes();
    } else if (window.innerWidth <= 768) {
      routesPerview.value = 5;
      setRoutes();
    } else if (window.innerWidth <= 1024) {
      routesPerview.value = 7;
      setRoutes();
    } else {
      routesPerview.value = categories.value.length;
      setRoutes();
    }
  };

  const playWithRoutes = function(){
      routesPerview.value = categories.value.length;
      setRoutes();
      console.log("Clicked");
  }

 

  return {
    routesPerview,
    initailIndex,
    availableRoutes,
    setRoutes,
    setRoutes,
    routesInDevices,
    playWithRoutes,
    
  };
};

export { useRoutesSlider };
