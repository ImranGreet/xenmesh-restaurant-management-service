import { ref } from 'vue';

let itemsToBePurchased = ref([]);

let addInCustomerCart = function (item) {
  let existItem = itemsToBePurchased.value.find(
    product => product.id === item.id,
  );

  if (existItem) {
    existItem.quantity = (existItem.quantity || 0) + 1;
  } else {
    item.quantity = 1;
    itemsToBePurchased.value.push(item);
  }
};

let removeItemFromOrderList = function (itemId) {
  let confirmToDelete = window.confirm('Are you sure ?');
  if (confirmToDelete) {
    itemsToBePurchased.value = itemsToBePurchased.value.filter(
      product => product.id !== itemId,
    );
  } else {
    return;
  }
};

let increaseItemQuantity = function(productId){
  let itemToBeIncrease = itemsToBePurchased.value.find(item=>item.id ===productId);
  if(itemToBeIncrease){
    itemToBeIncrease.quantity++;
  }else{
    return;
  }
}

export { itemsToBePurchased, addInCustomerCart, removeItemFromOrderList,increaseItemQuantity };
