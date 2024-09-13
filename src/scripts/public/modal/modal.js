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
let componentName = ref('');

const modalContainer = ref([
  { id: 1, name: 'AddProductCategory' },
  { id: 2, name: 'AddProduct' },
  { id: 3, name: 'EditProduct' },
  { id: 4, name: 'AddRole' },
  { id: 5, name: 'EditRole' },
  { id: 6, name: 'AddStock' },
  { id: 7, name: 'AddUnit' },
  { id: 8, name: 'Category' },
  { id: 9, name: 'AddStuff' },
  { id: 10, name: 'EditStuff' },
  { id: 11, name: 'ExpenseTypes' },
  { id: 12, name: 'AddPermission' },
  { id: 13, name: 'AddStuff' },
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

const showModalContainer = function (modalName) {
  showOverlayout.value = true;
  showOverlayoutAdmin.value = true;
  let indexOfComponent = modalContainer.value.findIndex(
    item => item.name === modalName.trim(),
  );
  console.log(indexOfComponent, 'compo');
  componentName.value = modalContainer.value[indexOfComponent].name;
  document.body.classList.add('body-scroll-hide');
  console.log(componentName.value);
};

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
  showModalContainer,
};
