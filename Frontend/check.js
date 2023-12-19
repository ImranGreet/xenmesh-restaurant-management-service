import { onMounted, ref, toRaw } from 'vue';
import { itemAdded } from '../toaster';

// Using a constant for the localStorage key
const localStorageKey = 'publicOrder';

// Initialize purchasedItems and totalPrice with localStorage data
let purchasedItems = ref(getLocalStorageData() || []);
let totalPrice = ref(calculateTotalPrice(purchasedItems.value));

// Helper function to get data from localStorage
function getLocalStorageData() {
  const storedData = localStorage.getItem(localStorageKey);
  return storedData ? JSON.parse(storedData) : null;
}

// Helper function to set data to localStorage
function setLocalStorage(data) {
  localStorage.setItem(localStorageKey, JSON.stringify(data));
}

// Function to calculate the total price of purchased items
function calculateTotalPrice(items) {
  return items.reduce((total, item) => total + item.price, 0);
}

// Function to add a product to the cart
const addProductToCart = function (product) {
  const getProduct = toRaw(product);

  if (typeof getProduct !== 'object') {
    window.alert("Can't add, please select an approved object");
    return;
  }

  // Add the product to the purchasedItems array
  purchasedItems.value.push(getProduct);

  // Update localStorage with the new data
  setLocalStorage(purchasedItems.value);

  // Update totalPrice
  totalPrice.value = calculateTotalPrice(purchasedItems.value);

  // Show toaster
  itemAdded();
};

// Function to remove an item from the cart
const removeItem = function (itemId) {
  purchasedItems.value = purchasedItems.value.filter(item => item.id !== itemId);
  setLocalStorage(purchasedItems.value);
};

// Function to increase the quantity of a product in the cart
const increaseProductQuantity = function (productId) {
  const productToIncrease = purchasedItems.value.find(item => item.id == productId);

  if (productToIncrease) {
    productToIncrease.quantity++;
    setLocalStorage(purchasedItems.value);
    totalPrice.value = calculateTotalPrice(purchasedItems.value);
  }
};

// Function to decrease the quantity of a product in the cart
const decreaseProductQuantity = function (productId) {
  const productToDecrease = purchasedItems.value.find(item => item.id == productId);

  if (productToDecrease && productToDecrease.quantity > 1) {
    productToDecrease.quantity--;
    setLocalStorage(purchasedItems.value);
    totalPrice.value = calculateTotalPrice(purchasedItems.value);
  }
};

// Function to get the price from localStorage
const getPriceFromStorage = function () {
  totalPrice.value = calculateTotalPrice(purchasedItems.value);
};

export {
  addProductToCart,
  purchasedItemsPrice: calculateTotalPrice,
  removeItem,
  increaseProductQuantity,
  decreaseProductQuantity,
  getPriceFromStorage,
  totalPrice,
  purchasedItems,
};
