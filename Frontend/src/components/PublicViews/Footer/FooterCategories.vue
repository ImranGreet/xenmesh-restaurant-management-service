<template>
  <div class="w-full space-y-5">
    <h1 class="text-xl tracking-wide leading-relaxed font-semibold">
      {{ subCat }}
    </h1>
    <ul class="w-full flex flex-col justify-between items-start">
      <li
        v-for="(category, index) in categoryStore"
        :key="index">
        <router-link
          to="#"
          class="lg:hover:underline lg:hover:underline-offset-8">
          {{ category.subcategoryLabel }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FooterCategories',
  props: {
    subCategory: {
      type: String,
      required: true,
    },
    categories: {
      type: Array,
      required: true,
    },
  },

  setup(props) {
    const subCat = props.subCategory;
    const categoryStore = props.categories;
    console.log(categoryStore);
    return {
      subCat,
      categoryStore,
    };
  },
};
</script>
