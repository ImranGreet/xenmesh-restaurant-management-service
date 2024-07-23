import { ref } from 'vue';
import items from '../../../DB/products.json';

const productId = ref();
const productDetails = ref('');
const productComposition = ref([]);
const productTitle = ref('');
const showOverlayout = ref(false);

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

const showOverlayoutOnOff = function () {
  if (showOverlayout.value) {
    showOverlayout.value = false;
  }
  document.body.classList.remove('body-scroll-hide');
};

export {
  productId,
  productDetails,
  productComposition,
  showOverlayout,
  productTitle,
  showOverlayoutOnOff,
  getItemDetails,
};
