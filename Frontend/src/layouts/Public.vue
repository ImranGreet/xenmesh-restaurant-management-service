<template>
  <div class="w-full lg:px-4 py-2 bg-white shadow-sm fixed inset-x-0 top-0 z-[999] ">
    <div class=" hidden xl:flex w-full  justify-between items-center mx-auto   bg-inherit max-w-[1130px]">
      <Firsttopbar />
      <SecondTopbar />
    </div>
    <MobileNav class="w-full xl:hidden"/>
  </div>
    <section class="w-full bg-white antialiased min-h-screen">
      
      <section class="max-w-[1130px] h-auto mx-auto my-20 px-10 xl:px-0">
        <SlidingPhoto />
        <CategoryNav/>
        <router-view />
      </section>
      <div class="max-w-full bg-pink-500 text-white ">
        <Footer class="max-w-[1130px] mx-auto  xl:px-0 border border-gray-50/10"/>
        
      </div>
       <div class="my-10 block xl:hidden"></div>
    </section>
    <MobileFooter class="w-full fixed inset-x-0 bottom-0 bg-white block xl:hidden"/>
    <WebOrderPublic class="w-[360px] fixed top-12 right-0 bottom-0 z-[100] bg-white float-right"/>
</template>

<script>
import Footer from '../components/PublicViews/Footer/Footer.vue';
import Firsttopbar from "../components/PublicViews/Topbar/Firsttopbar.vue";
import SecondTopbar from "../components/PublicViews/Topbar/SecondTopbar.vue";
import MobileNav from '../components/PublicViews/Footer/MobileNav.vue';
import MobileFooter from '../components/PublicViews/Footer/MobileFooter.vue';
import CategoryNav from '../components/PublicViews/Topbar/CategoryNav.vue';
import SlidingPhoto from '../components/Utilities/Slideshow/SlidingPhoto.vue';
import WebOrderPublic from '../components/Utilities/modal/WebOrderPublic.vue';

/*order modal*/
 


export default {
  name: "Public",
  components: {
    SecondTopbar,
    Firsttopbar,
    Footer,
    MobileNav,
    MobileFooter,
    CategoryNav,
    SlidingPhoto,
    WebOrderPublic
},
};
</script>
