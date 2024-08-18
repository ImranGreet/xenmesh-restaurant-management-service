import { ref } from 'vue';
import items from '../../../DB/products.json';

const productId = ref();
const productDetails = ref('');
const productComposition = ref([]);
const productTitle = ref('');
const showOverlayout = ref(false);
const showOverlayoutAdmin = ref(true);
const addStockModal = ref(false);

const getItemDetails = function (idParam) {
  const getProductToShowDesc = items.find(item => item.id == idParam);

  const { id, title, description: details, composition } = getProductToShowDesc;

  productId.value = id;
  productTitle.value = title;
  productDetails.value = details;
  productComposition.value = composition;

  showOverlayout.value = true;
  document.body.classList.add('body-scroll-hide');
};

/*Admin Modal Show*/
const showProductAddForm = function () {
  showOverlayoutAdmin.value = true;
  document.body.classList.add('body-scroll-hide');
};

const showAddStockForm = function () {
  addStockModal.value = true;
  document.body.classList.add('body-scroll-hide');
};

const showOverlayoutOnOff = function () {
  if (showOverlayout.value) {
    showOverlayout.value = false;
  } else if (showOverlayoutAdmin.value) {
    showOverlayoutAdmin.value = false;
  }
  document.body.classList.remove('body-scroll-hide');
};

export {
  productId,
  productDetails,
  productComposition,
  showOverlayout,
  productTitle,
  showOverlayoutAdmin,
  addStockModal,
  /*Methods*/
  showOverlayoutOnOff,
  getItemDetails,
  showProductAddForm,
  showAddStockForm
};
