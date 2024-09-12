<template>
  <section class="w-full dark:bg-gray-900 py-3 sm:py-5">
    <div class="px-4 mx-auto w-full">
      <div
        class="w-full relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <SearchFormUtility
        :roleUtility="true" />

        <div
          class="relative overflow-auto min-h-[220px] max-h-[640px] table-container rounded-t-lg bg-white z-50">
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-separate border border-slate-400">
            <thead
              class="text-xs text-white sticky top-0 bg-lime-600 uppercase dark:bg-gray-700 dark:text-gray-400">
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
                  <span
                    v-for="(
                      assignedPermission, index
                    ) in item.assignedPermission"
                    :key="index"
                    class="bg-primary-100 text-primary-800 text-md font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                    <span>
                      <input
                        type="checkbox"
                        name=""
                        id=""
                        checked />
                    </span>
                    <span>{{ assignedPermission }}</span> <span>,</span>
                  </span>
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
    