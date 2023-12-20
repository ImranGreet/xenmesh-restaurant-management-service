import { ref } from 'vue';


const orderItems = ref(false);

const gridView = ref(false);
const gridColor = ref(false);
const flexColor = ref(false);

const showOrderItems = function () {
  orderItems.value = !orderItems.value;
  

};

const showGridItems = function (displayProperty) {
  const propertyType = typeof displayProperty;

  if (propertyType != 'string') {
    window.alert("Can't do the operation");
    return 0;
  }
  if (displayProperty == 'flex') {
    gridView.value = true;
    flexColor.value = true;
    gridColor.value = false;
  }

  if (displayProperty == 'grid') {
    gridView.value = false;
    gridColor.value = true;
    flexColor.value = false;
  }
};

export {
  orderItems,
  gridView,
  flexColor,
  gridColor,
  showGridItems,
  showOrderItems,
};

