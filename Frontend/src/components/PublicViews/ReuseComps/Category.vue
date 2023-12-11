<template>
  <div
    class="bg-stone-50 lg:hover:bg-pink-200/25 rounded-2xl product-hover w-36 activeRouterBlock">
    <div class="w-full px-5 py-4 space-y-4 rounded-2xl">
      <div
        class="w-3/5 mx-auto flex flex-col justify-center items-center rounded-2xl">
        <img
          :src="categoryThumnail"
          :alt="categoryTitle"
          class="w-full h-16 mx-auto rounded-2xl" />
      </div>
      <div class="text-center w-full">
        <h2 class="text-base tracking-wider font-semibold w-full">
          {{ categoryTitle }}
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: {
    productPhoto: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
    },
    
  },
  setup(props) {
    const categoryThumnail = props.productPhoto;
    const categoryTitle = props.title;
    
    return {
      categoryThumnail,
      categoryTitle,
     
    };
  },
};
</script>

<style scoped>
.router-link-exact-active > .activeRouterBlock {
  background-color: rgb(251 207 232 / 0.25);
  box-shadow:
    0 10px 15px -3px rgb(0 0 0 / 0.1),
    0 4px 6px -4px rgb(0 0 0 / 0.8);
  --tw-shadow-color: #b91c1c;
  opacity: 0.9;
}
</style>
