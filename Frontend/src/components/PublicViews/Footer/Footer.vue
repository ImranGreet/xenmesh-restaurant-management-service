<template>
  

  <section >
    <div class="w-full bg-gray-200 grid grid-cols-2 xl:grid-cols-4  py-5 px-8">
      <div class="w-full " v-for="(cat, index) in categories" :key="index">
        <FooterCategories 
          :subCategory="cat.label"
          :categories="cat.subcategories" />
      </div>
    </div>
    <div class="w-full flex flex-col md:flex-row justify-between items-center bg-gray-800 py-8 px-8">
       <Social/>
       <Terms/>
    </div>
  </section>
</template>

<script>
import FooterCategories from "./FooterCategories.vue";
import Social from "./Social.vue";
import Terms from "./Terms.vue";


export default {
  name: "Footer",
  components: {
    FooterCategories,Terms,Social
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
