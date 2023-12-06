<template>
  <div class="bg-white w-full wrapper">
    <div
      class="w-full flex justify-between items-center gap-x-4 py-3 snap-x snap-mandatory items">
      <router-link
        :to="{ name: 'category', params: { category: cat.category } }"
        v-for="cat in useCategoryRoutes"
        :key="cat.id"
        class="snap-always snap-center item">
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
import { useCategoryRoutes } from '../../../scripts/public/Navs/categoryNav';

export default {
  name: 'CategoryNav',
  components: {
    itemCategory,
  },
  setup() {
    onMounted(() => {
      let isDown = false;
      let startX;
      let scrollLeft;
      const slider = document.querySelector('.items');
      console.log(slider);

      const end = () => {
        isDown = false;
        slider.classList.remove('active');
      };

      const start = e => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX || e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
      };

      const move = e => {
        if (!isDown) return;

        e.preventDefault();
        const x = e.pageX || e.touches[0].pageX - slider.offsetLeft;
        const dist = x - startX;
        slider.scrollLeft = scrollLeft - dist;
      };

      (() => {
        slider.addEventListener('mousedown', start);
        slider.addEventListener('touchstart', start);

        slider.addEventListener('mousemove', move);
        slider.addEventListener('touchmove', move);

        slider.addEventListener('mouseleave', end);
        slider.addEventListener('mouseup', end);
        slider.addEventListener('touchend', end);
      })();
    });

    return {
      useCategoryRoutes,
    };
  },
};
</script>

<style>
.wrapper {
  position: relative;
}
.wrapper:before,
.wrapper:after {
  position: absolute;
  top: 10px;
  z-index: 1;
  content: '';
  display: block;
  width: 20px;
  height: 100%;
}
.wrapper:before {
  left: 0;
}
.wrapper:after {
  right: 0;
}

.items {
  position: relative;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  font-size: 0;
  cursor: pointer;
}
.items.active {
  cursor: grab;
}

.item {
  display: inline-block;
  margin-left: 20px;
  user-select: none;
  height: 130px;
  color: #222;
  font-size: 33px;
  font-weight: bold;
  line-height: 130px;
}
.item:last-child {
  margin-right: 20px;
}

@media screen and (min-width: 500px) {
  .item {
    width: 33%;
  }
}
@media screen and (min-width: 800px) {
  .item {
    width: 25%;
  }
}
@media screen and (min-width: 1200px) {
  .wrapper {
    margin-left: -20px;
  }

  .item {
    width: 20%;
  }
}
</style>
