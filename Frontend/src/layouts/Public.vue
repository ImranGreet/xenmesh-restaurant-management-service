<template>
    <section class="w-full bg-white antialiased">
      <div class="w-full px-4 py-2 bg-white shadow-sm fixed inset-x-0 top-0">
        <div class="w-full flex justify-between items-center mx-auto   z-[999] bg-inherit max-w-[1130px]">
          <Firsttopbar />
          <SecondTopbar />
        </div>
      </div>
      <section class="max-w-[1130px] mx-auto mt-20">
        <router-view />
      </section>
    </section>

</template>

<script>
import Firsttopbar from "../components/PublicViews/Topbar/Firsttopbar.vue";
import SecondTopbar from "../components/PublicViews/Topbar/SecondTopbar.vue";

export default {
  name: "Public",
  components: {
    SecondTopbar,
    Firsttopbar,
  },
};
</script>
