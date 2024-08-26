<template>
  <div class="w-full flex justify-start gap-2 flex-wrap py-2 p-2 mb-3 rounded-sm bg-gray-100">
    <button
      v-for="table in tablesNumber"
      :key="table.id"
      @click="setTable(table.id)"
      class="border w-10 h-10 p-1  text-gray-500 border-gray-300 rounded-md hover:bg-blue-100 transition duration-300"
      :class="{'bg-blue-600 text-white border-inherit': table.active}"
    >
      {{ table.tableNumber }}
    </button>
  </div>
</template>


<script>
import { ref } from 'vue';

export default {
  name: 'AvailableTable',
  setup() {
    const tablesNumber = ref([
      { tableNumber: 1, id: 1, active: false },
      { tableNumber: 2, id: 2, active: false },
      { tableNumber: 3, id: 3, active: false },
      { tableNumber: 4, id: 4, active: false },
      { tableNumber: 5, id: 5, active: false },
      { tableNumber: 6, id: 6, active: false },
      { tableNumber: 7, id: 7, active: false },
      { tableNumber: 8, id: 8, active: false },
      { tableNumber: 9, id: 9, active: false },
      { tableNumber: 10, id: 10, active: false },
    ]);

    const setTable = (id) => {
      tablesNumber.value.forEach((table) => {
        table.active = table.id === id; 
      })
    };

    return {
      tablesNumber,
      setTable,
    };
  },
};
</script>


<style></style>
