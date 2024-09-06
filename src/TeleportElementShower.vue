<template >
  <teleport
    to="#teleportElement"
    v-if="showOverlayout">
    <div
      class="fixed inset-x-0 inset-y-0 bg-gray-300/50 w-full flex justify-center items-center h-screen z-[999]">
      <AddRole></AddRole>
    </div>
  </teleport>
</template>

<script>
import { ref } from 'vue';
import AddCategory from './components/Utilities/modal/Product/AddCategory.vue';
import AddProduct from './components/Utilities/modal/Product/AddProduct.vue';
import EditProduct from './components/Utilities/modal/Product/EditProduct.vue';
/*role*/
import AddRole from './components/Utilities/modal/Role/AddRole.vue';
import EditRole from './components/Utilities/modal/Role/EditRole.vue';
/*stock*/
import AddStockVue from './components/Utilities/modal/Stock/AddStock.vue';
import AddUnitVue from './components/Utilities/modal/Stock/AddUnit.vue';
import CategoryVue from './components/Utilities/modal/Stock/Category.vue';
/*Stuff*/
import AddStuffVue from './components/Utilities/modal/Stuff/AddStuff.vue';
import EditStuffVue from './components/Utilities/modal/Stuff/EditStuff.vue';
import { showOverlayout, modalContainer } from './scripts/public/modal/modal';

export default {
  components: {
    AddCategory,
    AddProduct,
    EditProduct,
    AddRole,
    EditRole,
    AddStockVue,
    AddUnitVue,
    CategoryVue,
    AddStuffVue,
    EditStuffVue,
  },
  setup() {
    return {
      showOverlayout,
      modalContainer,
    };
  },
};
</script>

<style></style>
