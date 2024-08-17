<template>
  <section>
    <div
      :class="{
        block: itemsToBePurchased.length === 0,
        hidden: itemsToBePurchased.length > 0,
      }">
      <Noorder />
    </div>
    <section
      class="w-full dark:bg-gray-900"
      :class="{
        hidden: itemsToBePurchased.length === 0,
        block: itemsToBePurchased.length > 0,
      }">
      <div class="layout">
        <div class="layout__inner">
          <div class="table-wrapper custom-overflowscroll">
            <table class="table">
              <thead class="table__header">
                <tr class="table__row">
                  <th class="table__header-cell">Sr No</th>
                  <th class="table__header-cell">Product Title</th>
                  <th class="table__header-cell">Quantity</th>
                  <th class="table__header-cell">Unit Prices</th>
                  <th class="table__header-cell">Line Total</th>
                  <th class="table__header-cell">Delete</th>
                </tr>
              </thead>
              <tbody class="table__body">
                <tr
                  v-for="(item, index) in itemsToBePurchased"
                  :key="index"
                  class="table__body-row table__body-row--hover"
                >
                  <td class="table__cell">
                    <div class="table__checkbox-wrapper">
                      <label class="custom-checkbox" :for="'checkbox-' + index">
                        <input type="checkbox" :id="'checkbox-' + index"  />
                        <span class="checkmark"></span>
                      </label>
                      <span class="table__serial">{{ Math.floor(index + 1) }}</span>
                    </div>
                  </td>
                  <td class="table__cell table__cell--title">
                    {{ item.title.slice(0, 10) }}
                  </td>
                  <td class="table__cell">
                    <div class="table__quantity-controls">
                      <button
                        @click="increaseItemQuantity(item.id)"
                        class="button button--increase"
                      >
                        +
                      </button>
                      <div class="table__quantity">{{ item.quantity }}</div>
                      <button
                        @click="decreaseItemQuantity(item.id)"
                        class="button button--decrease"
                        :class="{
                          'button--hidden': item.quantity < 2,
                          'button--inline': item.quantity >= 2,
                        }"
                      >
                        -
                      </button>
                    </div>
                  </td>
                  <td class="table__cell">{{ item.price }}</td>
                  <td class="table__cell">{{ item.price * item.quantity }}</td>
                  <td class="table__cell table__cell--delete">
                    <button @click="removeItemFromOrderList(item.id)" class="border border-inherit p-1 rounded-md">
                      <XMarkIcon class="button__icon" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
    </section>
  </section>
</template>

<script>
import { XMarkIcon } from '@heroicons/vue/24/outline';
import Noorder from './Noorder.vue';
import {
  itemsToBePurchased,
  removeItemFromOrderList,
  increaseItemQuantity,
  decreaseItemQuantity,
} from '../../../../scripts/Admin/Order/createOrder';

export default {
  name: 'OrderedList',
  components: {
    XMarkIcon,
    Noorder,
  },
  setup() {
    return {
      itemsToBePurchased,
      removeItemFromOrderList,
      increaseItemQuantity,
      decreaseItemQuantity,
    };
  },
};
</script>

<style scoped>
input[type='number'] {
  -moz-appearance: textfield;
}

input[type='number']::-webkit-inner-spin-button,
input[type='number']::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* Container style */
.custom-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 16px;
  user-select: none;
}

/* Hide the default checkbox */
.custom-checkbox input[type='checkbox'] {
  display: none;
}

/* Create a custom checkbox */
.custom-checkbox .checkmark {
  width: 20px;
  height: 20px;
  background-color: #ccc;
  border-radius: 4px;
  position: relative;
  margin-right: 10px;
  transition: background-color 0.3s;
}

/* Style the checkmark when checked */
.custom-checkbox input[type='checkbox']:checked + .checkmark {
  background-color: #4caf50;
}

/* Add a tick icon when checked */
.custom-checkbox .checkmark::after {
  content: '';
  position: absolute;
  display: none;
}

.custom-checkbox input[type='checkbox']:checked + .checkmark::after {
  display: block;
}

/* Style the tick icon */
.custom-checkbox .checkmark::after {
  left: 7px;
  top: 3px;
  width: 6px;
  height: 12px;
  border: solid white;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}
</style>
