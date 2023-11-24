import { ref } from "vue";

const orderItems = ref(false);

const gridView = ref(false);

const showOrderItems = function(){
      orderItems.value = !orderItems.value
}

const showGridItems = function(){
      gridView.value = !gridView.value
}

export {
      orderItems,
      gridView,
      showGridItems,
      showOrderItems,
}