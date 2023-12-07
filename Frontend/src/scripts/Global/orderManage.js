import { onMounted, ref, toRaw } from 'vue';

let purchasedItems = ref([]);

let totalPrice = ref(0);

const purchasedItemsPrice = function () {
  return purchasedItems.value.reduce((index, item) => index + item.price, 0);
};

const setLocalStorage = function (item) {
  if (!localStorage.getItem('publicOrder')) {
    localStorage.setItem('publicOrder', JSON.stringify(purchasedItems.value));
  }

  purchasedItems.value = JSON.parse(localStorage.getItem('publicOrder'));
  purchasedItems.value.push(item);
  localStorage.clear('publicOrder');

  localStorage.setItem('publicOrder', JSON.stringify(purchasedItems.value));
};

const addProductToCart = function (product) {
  const getProduct = toRaw(product);

  const getProductType = typeof getProduct;

  if (getProductType !== 'object') {
    window.alert("Can't add please select approval object");
    return 0;
  }

  setLocalStorage(getProduct);

  totalPrice.value = purchasedItemsPrice();
};

const removeItem = function (itemId) {
  return purchasedItems.value.filter(item => item.id !== itemId);
};

const increaseProductQuantity = function (productId) {
  const productToIncrease = purchasedItems.value.find(
    item => item.id == productId,
  );

  if (productToIncrease) {
    productToIncrease.quantity++;
  }
};

const decreaseProductQuantity = function (productId) {
  const productToDecrease = purchasedItems.value.find(
    item => item.id == productId,
  );

  if (productToDecrease) {
    if (productToDecrease.quantity > 1) {
      productToDecrease.quantity--;
    }
    if (productToDecrease.quantity == 1) {
      return 0;
    }
  }
};

const getPriceFromStorage = function () {
  if (!localStorage.getItem('publicOrder')) {
    totalPrice.value = 0;
  }

  if (localStorage.getItem('publicOrder')) {
    let alreadyPurchased = JSON.parse(localStorage.getItem('publicOrder'));

    totalPrice.value = alreadyPurchased.reduce((index, item) => {
      return index + item.price;
    }, 0);
  }
};

export {
  addProductToCart,
  purchasedItemsPrice,
  removeItem,
  increaseProductQuantity,
  decreaseProductQuantity,
  getPriceFromStorage,
  totalPrice,
  purchasedItems,
};
