<template>
  <footer class="w-full bg-inherit space-y-6">
    <div class="w-full grid grid-cols-2 lg:grid-cols-4 gap-10 py-10  px-4 xl:px-0">
      <FooterCategories
        v-for="(cat, index) in categories"
        :key="index"
        :subCategory="cat.label"
        :categories="cat.subcategories" />
    </div>

    <div
      class="w-full flex flex-col md:flex-row justify-between items-center py-8 px-4 xl:px-0">
      <Social />
      <Terms />
    </div>
  </footer>
</template>

<script>
import Footer from '../../Admin/Footer/Footer.vue';
import FooterCategories from './FooterCategories.vue';
import Social from './Social.vue';
import Terms from './Terms.vue';

export default {
  name: 'Footer',
  components: {
    FooterCategories,
    Terms,
    Social,
    Footer,
  },
  setup() {
    const categories = [
      {
        label: 'How to buy',
        subcategories: [
          {
            subcategoryLabel: 'Payment methods',
            link: '#',
          },
          {
            subcategoryLabel: 'Order pickup',
            link: '#',
          },
          {
            subcategoryLabel: 'Purchase status',
            link: '#',
          },
          {
            subcategoryLabel: 'Track orders',
            link: '#',
          },
          {
            subcategoryLabel: 'Returns',
            link: '#',
          },
        ],
      },
      {
        label: 'Help',
        subcategories: [
          {
            subcategoryLabel: 'Help centers',
            link: '#',
          },
          {
            subcategoryLabel: 'Security & fraud',
            link: '#',
          },
          {
            subcategoryLabel: 'Feedback',
            link: '#',
          },
          {
            subcategoryLabel: 'Contact',
            link: '#',
          },
        ],
      },
      {
        label: 'Services',
        subcategories: [
          {
            subcategoryLabel: 'Gift cards',
            link: '#',
          },
          {
            subcategoryLabel: 'Order pickup',
            link: '#',
          },
          {
            subcategoryLabel: 'Purchase status',
            link: '#',
          },
          {
            subcategoryLabel: 'Track orders',
            link: '#',
          },
        ],
      },
      {
        label: 'About',
        subcategories: [
          {
            subcategoryLabel: 'About us',
            link: '#',
          },
          {
            subcategoryLabel: 'Order pickup',
            link: '#',
          },
          {
            subcategoryLabel: 'Purchase status',
            link: '#',
          },
          {
            subcategoryLabel: 'Track orders',
            link: '#',
          },
          {
            subcategoryLabel: 'Returns',
            link: '#',
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
