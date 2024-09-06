import { ref } from 'vue';
import items from '../../../DB/products.json';

const productId = ref();
const productDetails = ref('');
const productComposition = ref([]);
const productTitle = ref('');
const showOverlayout = ref(false);
const showOverlayoutAdmin = ref(false);
const addStockModal = ref(false);
const addRoleModal = ref(false);
/*teleport on modal*/
let componentName = ref(""); 

const modalContainer = ref([
  { id: 1, name: 'AddCategory' },
  { id: 2, name: 'AddProduct' },
  { id: 3, name: 'EditProduct' },
  { id: 4, name: 'AddRole' },
  { id: 5, name: 'EditRole' },
  { id: 6, name: 'AddStockVue' },
  { id: 7, name: 'AddUnitVue' },
  { id: 8, name: 'CategoryVue' },
  { id: 9, name: 'AddStuffVue' },
  { id: 10, name: 'EditStuffVue' },
]);

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

const showModalContainer = function(){
  showOverlayout.value=true;
  showOverlayoutAdmin.value = true;
  componentName.value =modalContainer.value[1].name;
  document.body.classList.add('body-scroll-hide');
  console.log(componentName.value);
}

export {
  productId,
  productDetails,
  productComposition,
  showOverlayout,
  productTitle,
  showOverlayoutAdmin,
  addStockModal,
  componentName,
  modalContainer,
  /*Methods*/
  showOverlayoutOnOff,
  getItemDetails,
  showProductAddForm,
  showAddStockForm,
  showModalContainer
};
