<template>
  <div class="w-full lg:px-4 py-2 bg-white shadow-sm fixed inset-x-0 top-0 ">
    <div class=" hidden xl:flex w-full  justify-between items-center mx-auto   z-[999] bg-inherit max-w-[1130px]">
      <Firsttopbar />
      <SecondTopbar />
    </div>
    <MobileNav class="w-full xl:hidden"/>
  </div>
    <section class="w-full bg-white antialiased ">
      
      <section class="max-w-[1130px] h-auto mx-auto my-20 px-10 xl:px-0">
        <CategoryNav/>
        <router-view />
      </section>
      <div class="max-w-full bg-pink-500 text-white ">
        <Footer class="max-w-[1130px] mx-auto px-10 xl:px-0"/>
        
      </div>
       <div class="my-10 block xl:hidden"></div>
    </section>
    <MobileFooter class="w-full fixed inset-x-0 bottom-0 bg-white block xl:hidden"/>
</template>

<script>
import Footer from '../components/PublicViews/Footer/Footer.vue';
import Firsttopbar from "../components/PublicViews/Topbar/Firsttopbar.vue";
import SecondTopbar from "../components/PublicViews/Topbar/SecondTopbar.vue";
import MobileNav from '../components/PublicViews/Footer/MobileNav.vue';
import MobileFooter from '../components/PublicViews/Footer/MobileFooter.vue';
import CategoryNav from '../components/PublicViews/Topbar/CategoryNav.vue';


export default {
  name: "Public",
  components: {
    SecondTopbar,
    Firsttopbar,
    Footer,
    MobileNav,
    MobileFooter,
    CategoryNav
  },
};
</script>
