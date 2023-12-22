import { onMounted, ref, toRaw } from 'vue';
import { itemAdded } from '../toaster';

let purchasedItems = ref([]);

let totalPrice = ref(0);

const setLocalStorage = function (item) {
  if (!localStorage.getItem('publicOrder')) {
    localStorage.setItem('publicOrder', JSON.stringify(purchasedItems.value));
  }

  const existingItem = purchasedItems.value.find(
    product => product.id === item.id,
  );
  if (existingItem) {
    existingItem.quantity = (existingItem.quantity || 0) + 1;
  } else {
    item.quantity = 1;
    purchasedItems.value.push(item);
  }

 resetLocalStorage();
};

const addProductToCart = function (product) {
  const getProduct = toRaw(product);

  const getProductType = typeof getProduct;

  if (getProductType !== 'object') {
    window.alert("Can't add please select approval object");
    return 0;
  }

  setLocalStorage(getProduct);

  getPriceFromStorage();

  /*showing toaster*/
  itemAdded();
};

const removeItem = function (itemId) {
  purchasedItems.value = purchasedItems.value.filter(
    item => item.id !== itemId,
  );
  resetLocalStorage();
  getPriceFromStorage();
};

const increaseProductQuantity = function (product) {
  const productToIncrease = purchasedItems.value.find(
    item => item.id == product.id,
  );

  if (productToIncrease) {
    productToIncrease.quantity = (productToIncrease.quantity || 0) + 1;
    
  }
  setLocalStorage(product);
  getPriceFromStorage();
};

const decreaseProductQuantity = function (product) {
  const productToDecrease = purchasedItems.value.find(
    item => item.id == product.id,
  );

  if (productToDecrease) {
    productToDecrease.quantity = (productToDecrease.quantity || 0) - 1;
  }
  resetLocalStorage();
  getPriceFromStorage();

 
};

const getPriceFromStorage = function () {
  if (!localStorage.getItem('publicOrder')) {
    totalPrice.value = 0;
  }

  if (localStorage.getItem('publicOrder')) {
    let alreadyPurchased = JSON.parse(localStorage.getItem('publicOrder'));

    totalPrice.value = alreadyPurchased.reduce((index, item) => {
      return index + item.price * item.quantity;
    }, 0);
  }
};

const resetLocalStorage = ()=>{
  localStorage.clear('publicOrder');

  localStorage.setItem('publicOrder', JSON.stringify(purchasedItems.value));
  purchasedItems.value = JSON.parse(localStorage.getItem('publicOrder')); 
}

const initialLoad = function(){
  if (localStorage.getItem('publicOrder')) {
    purchasedItems.value = JSON.parse(localStorage.getItem('publicOrder'));
    getPriceFromStorage();
  }
}

initialLoad();

export {
  addProductToCart,
  removeItem,
  increaseProductQuantity,
  decreaseProductQuantity,
  getPriceFromStorage,
  totalPrice,
  purchasedItems,
};
