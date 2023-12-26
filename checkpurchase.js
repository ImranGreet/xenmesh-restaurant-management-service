// Initialize purchased items from local storage or use an empty array
let purchasedItems = JSON.parse(localStorage.getItem('publicOrder')) || [];

// Calculate the total price based on quantity and price of each item
const calculateTotalPrice = () => {
  return purchasedItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
};

// Increase the quantity and price of a specific product
const increaseProductQuantity = productId => {
  const index = purchasedItems.findIndex(item => item.id === productId);

  if (index !== -1) {
    purchasedItems[index].quantity += 1;
    purchasedItems[index].price += 1; // Assuming price increase by 1 on each click
  }

  // Update local storage and calculate total price
  updateLocalStorage();
  calculateAndDisplayTotalPrice();
};

// Decrease the quantity and price of a specific product
const decreaseProductQuantity = productId => {
  const index = purchasedItems.findIndex(item => item.id === productId);

  if (index !== -1) {
    if (purchasedItems[index].quantity > 1) {
      purchasedItems[index].quantity -= 1;
      purchasedItems[index].price -= 1; // Assuming price decreases by 1 on each click
    } else {
      // If quantity is 1, remove the item from the array
      purchasedItems.splice(index, 1);
    }
  }

  // Update local storage and calculate total price
  updateLocalStorage();
  calculateAndDisplayTotalPrice();
};

// Remove a specific product by its ID
const removeProductById = productId => {
  purchasedItems = purchasedItems.filter(item => item.id !== productId);

  // Update local storage and calculate total price
  updateLocalStorage();
  calculateAndDisplayTotalPrice();
};

// Update local storage with the latest purchased items
const updateLocalStorage = () => {
  localStorage.setItem('publicOrder', JSON.stringify(purchasedItems));
};

// Display the total price in the nav or any other element
const calculateAndDisplayTotalPrice = () => {
  const totalPrice = calculateTotalPrice();
  console.log('Total Price:', totalPrice);

  // Update your UI element with the total price
  // For example, if you have a DOM element with an ID 'totalPriceDisplay':
  // document.getElementById('totalPriceDisplay').textContent = totalPrice;
};

// Example of adding a new product to purchasedItems
const addProductToCart = product => {
  const existingProductIndex = purchasedItems.findIndex(
    item => item.id === product.id,
  );

  if (existingProductIndex !== -1) {
    // If the product already exists, increase its quantity
    purchasedItems[existingProductIndex].quantity += 1;
    purchasedItems[existingProductIndex].price += 1; // Update price as needed
  } else {
    // If the product doesn't exist, add it to the array with quantity 1
    purchasedItems.push({ ...product, quantity: 1, price: 1 }); // Initial price, update as needed
  }

  // Update local storage and calculate total price
  updateLocalStorage();
  calculateAndDisplayTotalPrice();
};

// Initial call to display the total price on page load
calculateAndDisplayTotalPrice();

// Export functions for use in your application
export {
  increaseProductQuantity,
  decreaseProductQuantity,
  removeProductById,
  addProductToCart,
};
