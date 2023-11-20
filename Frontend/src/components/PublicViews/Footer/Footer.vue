<template>
  <section class="w-full bg-gray-200 grid grid-cols-2 xl:grid-cols-4 py-5 px-8">
    <div class="w-full" v-for="(cat, index) in categories" :key="index">
      <FooterCategories
        :subCategory="cat.label"
        :categories="cat.subcategories" />
    </div>
  </section>
</template>

<script>
import FooterCategories from "./FooterCategories.vue";

export default {
  name: "Footer",
  components: {
    FooterCategories,
  },
  setup() {
    const categories = [
      {
        label: "How to buy",
        subcategories: [
          {
            subcategoryLabel: "Payment methods",
            link: "#",
          },
          {
            subcategoryLabel: "Order pickup",
            link: "#",
          },
          {
            subcategoryLabel: "Purchase status",
            link: "#",
          },
          {
            subcategoryLabel: "Track orders",
            link: "#",
          },
          {
            subcategoryLabel: "Returns",
            link: "#",
          },
        ],
      },
      {
        label: "Help",
        subcategories: [
          {
            subcategoryLabel: "Help centers",
            link: "#",
          },
          {
            subcategoryLabel: "Security & fraud",
            link: "#",
          },
          {
            subcategoryLabel: "Feedback",
            link: "#",
          },
          {
            subcategoryLabel: "Contact",
            link: "#",
          },
        ],
      },
      {
        label: "Services",
        subcategories: [
          {
            subcategoryLabel: "Gift cards",
            link: "#",
          },
          {
            subcategoryLabel: "Order pickup",
            link: "#",
          },
          {
            subcategoryLabel: "Purchase status",
            link: "#",
          },
          {
            subcategoryLabel: "Track orders",
            link: "#",
          },
        ],
      },
      {
        label: "About",
        subcategories: [
          {
            subcategoryLabel: "About us",
            link: "#",
          },
          {
            subcategoryLabel: "Order pickup",
            link: "#",
          },
          {
            subcategoryLabel: "Purchase status",
            link: "#",
          },
          {
            subcategoryLabel: "Track orders",
            link: "#",
          },
          {
            subcategoryLabel: "Returns",
            link: "#",
          },
        ],
      },
    ];

    return {
      categories,
    };
  },
};
</script>

<style></style>
