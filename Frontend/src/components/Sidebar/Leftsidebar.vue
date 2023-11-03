<template>
  <section>
    <div
      class="flex flex-col bg-inherit min-h-[93vh] max-h-[93vh] overflow-x-hidden overflow-custome z-0 mt-[61px]"
    >
      <Logo />
      <div class="mt-5"></div>
      <Dashboard />
      <Accounting />
      <authoraization />
      <Socialmedia />
      <Order />
    </div>
  </section>
</template>

<script>
import Logo from "../sidebarProperties/Logo.vue";
import Accounting from "../sidebarProperties/Accounting.vue";
import Authoraization from "../sidebarProperties/Authoraization.vue";
import Dashboard from "../sidebarProperties/Dashboard.vue";
import Socialmedia from "../sidebarProperties/Socialmedia.vue";
import Order from "../sidebarProperties/Order.vue";

import Footer from "../Footer/Footer.vue";

export default {
  name: "Admin",
  components: {
    Logo,
    Dashboard,
    Accounting,
    Authoraization,
    Socialmedia,
    Order,
    Footer,
  },
  setup() {
    return {};
  },
};
</script>

<style>
.overflow-custome {
  overflow-y: scroll;
}
.overflow-custome::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(56, 15, 15, 0.3);
  background-color: #f5f5f5;
}
.overflow-custome::-webkit-scrollbar {
  width: 6px;
  background-color: #f5f5f5;
}
.overflow-custome::-webkit-scrollbar-thumb {
  background-color: #330a0a;
  border: 2px solid #555555;
}
</style>
