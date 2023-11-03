<template>
  <section
    class="max-h-screen min-h-screen w-full flex justify-between relative"
  >
    <Placing
      class="absolute top-16 right-0"
      :class="{ block: rightSideBar, hidden: !rightSideBar }"
    />
    <Leftsidebar
      :class="{ 'w-1/6': !sidebarController, 'w-1/12': sidebarController }"
    />
    <section
      class="flex flex-col justify-between"
      :class="{ 'w-5/6 ': !sidebarController, 'w-11/12': sidebarController }"
    >
      <Topbar class="w-full" />
      <section class="w-full bg-gray-100 dark:bg-gray-800">
        <router-view></router-view>
      </section>
      <Footer />
    </section>
    <!-- screen absolute -->
    <div
      class="absolute inset-x-0 inset-y-0 bg-gray-400/50"
      :class="{ block: rightSideBar, hidden: !rightSideBar }"
    ></div>
  </section>
</template>

<script>
/*composables*/

import {
  sidebarController,
  toggleSidebar,
  rightSideBar,
  toggleRightSidebar,
} from "../../composables/layout";

/*components*/
import Footer from "../Footer/Footer.vue";
import Placing from "../Settings/Placing.vue";
import Leftsidebar from "../Sidebar/Leftsidebar.vue";
import Topbar from "../Sidebar/Topbar.vue";

export default {
  name: "Admin",
  components: {
    Topbar,
    Leftsidebar,
    Footer,
    Placing,
  },
  setup() {
    return {
      /*properties*/
      sidebarController,
      rightSideBar,
      /*methods*/
      toggleSidebar,

      toggleRightSidebar,
    };
  },
};
</script>
