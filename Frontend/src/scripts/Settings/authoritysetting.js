import { ref } from "vue";

const activeIndex = ref(0);

const tabcontroller = function (index) {
  activeIndex.value = index;
};

export { tabcontroller, activeIndex };
