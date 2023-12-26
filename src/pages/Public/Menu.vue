<template>
  <div class="w-full bg-inherit">
    <MeunItemsByCat />
  </div>
</template>

<script>
import MeunItemsByCat from '../../components/PublicViews/Menu/MeunItemsByCat.vue';

export default {
  name: 'Menu',
  components: {
    MeunItemsByCat,
  },
};
</script>
