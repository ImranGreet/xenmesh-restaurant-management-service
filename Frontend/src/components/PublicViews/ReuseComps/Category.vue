<template>
  <div class="bg-stone-50 lg:hover:bg-pink-200/25 rounded-2xl product-hover">
    <div class="w-full px-5 py-4 space-y-4 rounded-2xl">
      <div
        class="w-3/5 mx-auto flex flex-col justify-center items-center rounded-2xl">
        <img
          :src="categoryThumnail"
          :alt="categoryTitle"
          class="w-full mx-auto rounded-2xl" />
      </div>
      <div class="text-center">
        <h2 class="text-base tracking-wider font-semibold">
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
