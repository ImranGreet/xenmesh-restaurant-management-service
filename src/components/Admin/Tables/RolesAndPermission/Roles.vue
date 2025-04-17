<template>
  <section class="w-full dark:bg-gray-900 py-3 sm:py-5">
    <div class="px-2 sm:px-4 mx-auto w-full">
      <div
        class="w-full relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <SearchFormUtility :roleUtility="true" />

        <div
          class="relative overflow-auto min-h-[220px] max-h-[640px] table-container rounded-t-lg bg-white z-50">
          <table
            class="w-full text-sm sm:text-xs text-left text-gray-500 dark:text-gray-400 border-separate border border-slate-400">
            <thead
              class="text-xs sm:text-[10px] text-white sticky top-0 bg-lime-600 uppercase dark:bg-gray-700 dark:text-gray-400 z-50">
              <tr>
                <th class="bg-white"></th>
                <th
                  scope="col"
                  class="px-4 py-1 border border-slate-300">
                  Sr No
                </th>
                <th
                  scope="col"
                  class="px-4 py-1 border border-slate-300">
                  Role
                </th>
                <th
                  scope="col"
                  class="px-4 py-1 border border-slate-300">
                  Assigned Permission
                </th>
                <th
                  scope="col"
                  class="px-4 py-1 border border-slate-300">
                  Action
                </th>
                <th class="bg-white"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(item, index) in availableRoles"
                :key="index"
                class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                <th></th>
                <th class="w-4 px-4 py-1 border border-slate-300">
                  {{ index + 1 }}
                </th>

                <td class="px-4 py-1 border border-slate-300">
                  <span
                    class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300"
                    >{{ item.role }}</span
                  >
                </td>
                <td class="px-4 py-1 border border-slate-300">
                  <div
                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3">
                    <label
                      class="custom-checkbox-label p-2 sm:p-1"
                      v-for="(
                        assignedPermission, index
                      ) in item.assignedPermission"
                      :key="index">
                      <input
                        type="checkbox"
                        class="custom-checkbox"
                        checked />
                      <span class="custom-checkbox-box"></span>
                      <span class="text-sm sm:text-base">{{
                        assignedPermission
                      }}</span>
                    </label>
                  </div>
                </td>

                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  <div class="flex justify-center items-center gap-x-2">
                    <button class="text-gray-900">
                      <PencilSquareIcon class="inline-block w-4 h-4" />
                    </button>
                    <button class="text-green-800">
                      <ShieldCheckIcon class="inline-block w-4 h-4" />
                    </button>
                    <button class="text-pink-600">
                      <TrashIcon class="inline-block w-4 h-4" />
                    </button>
                  </div>
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import SearchFormUtility from '../../../Utilities/FormUtility/SearchFormComp.vue';
import roles from '../../../../DB/rolespermission.json';

const availableRoles = roles;
</script>





<style scoped>
/* Hide the default checkbox */
.custom-checkbox {
  display: none;
}

/* Style the custom checkbox container */
.custom-checkbox-label {
  display: flex;
  align-items: center;
  font-size: 1.15rem;
  cursor: pointer;
  padding: 6px;
}

/* Style the custom checkbox box */
.custom-checkbox-box {
  width: 20px;
  height: 20px;
  border: 2px solid #ccc;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  position: relative;
}

/* Checkmark style */
.custom-checkbox-box::after {
  content: '';
  width: 8px;
  height: 14px;
  border: solid #fff;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 0.2s ease;
  position: absolute;
  top: 0px;
}

/* When the checkbox is checked */
.custom-checkbox:checked + .custom-checkbox-box {
  background-color: #269b0f;
  border-color: #269b0f;
}

.custom-checkbox:checked + .custom-checkbox-box::after {
  opacity: 1;
}
</style>
