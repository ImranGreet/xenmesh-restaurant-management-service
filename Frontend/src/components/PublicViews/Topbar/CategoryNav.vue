<template>
  <div class="bg-white w-full overflow-x-scroll custom-overflowscroll">
    <div
      class="w-full flex justify-between items-center gap-x-4 py-3 snap-x snap-mandatory">
      <router-link
        to="#"
        v-for="cat in availableRoutes"
        :key="cat.id"
        class="snap-always snap-center">
        <itemCategory
          :productPhoto="cat.image"
          :title="cat.category" />
      </router-link>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import itemCategory from '../ReuseComps/Category.vue';
import { useRoutesSlider } from '../../../scripts/public/Sliding/RoutesSliding';

export default {
  name: 'CategoryNav',
  components: {
    itemCategory,
  },
  setup() {
   
    const { setRoutes, routesInDevices, availableRoutes,playWithRoutes } = useRoutesSlider();
    const categories = setRoutes();
    onMounted(() => {
      routesInDevices();
    });

    window.addEventListener('resize', () => {
      routesInDevices();
    });

  

    return {
      categories,
      availableRoutes,
      setRoutes,
      routesInDevices,
      playWithRoutes
    };
  },
};
</script>
