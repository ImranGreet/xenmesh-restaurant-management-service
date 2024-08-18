<template>
  <section class="w-full dark:bg-gray-900 py-3 sm:py-5">
    <div class="px-4 mx-auto w-full">
      <div
        class="w-full relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <SearchFormUtility/>
        <div
          class="relative overflow-auto min-h-[220px] max-h-[690px] table-container rounded-t-lg bg-white z-50">
          <table
            class="w-full text-sm text-left text-gray-500 dark:text-gray-400 border-separate border border-slate-400">
            <thead
              class="text-md text-white sticky top-0 bg-lime-600 capitalize dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th class="bg-white"></th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Sr No
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Name
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Position
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Start From
                </th>

                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Contact
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Address
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Salary Wage
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Vacation Period
                </th>

                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Training Records
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Notes
                </th>
                <th
                  scope="col"
                  class="px-4 py-3 border border-slate-300">
                  Action
                </th>
                <th class="bg-white"></th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(stuff, index) in ourStuff"
                :key="stuff.id"
                class="border-b dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700">
                <th></th>
                <th class="w-4 px-4 py-3 border border-slate-300">
                  {{ index + 1 }}
                </th>
                <td class="px-4 py-2 border border-slate-300">
                  <span
                    class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300"
                    >{{ stuff.Name }}</span
                  >
                </td>
                <td class="px-4 py-2 border border-slate-300">
                  <span
                    class="bg-primary-100 text-primary-800 text-xs font-medium px-2 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300"
                    >{{ stuff.Position }}</span
                  >
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  <span>{{ stuff.StartDate }}</span>
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  <span class="font-bold">Regular </span>
                  {{ stuff.ContactInformation }}
                  <br />
                  <span class="font-bold">Emergency</span>
                  {{ stuff.EmergencyContactInformation }}
                </td>

                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  {{ stuff.Address }}
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  <span class="flex flex-col">
                    <span>
                      <span class="font-bold">Sallary</span> ${{
                        stuff.SalaryWage
                      }}</span
                    >
                    <span>
                      <span class="font-bold">Benifits</span>
                      {{ stuff.Benefits }}</span
                    >
                  </span>
                </td>
                <td class="px-4 py-2 border border-slate-300 text-center">
                  {{ stuff.VacationTime }}
                  <span>
                    Day
                    <span
                      :class="{
                        'inline-block': stuff.VacationTime > 1,
                        hidden:
                          stuff.VacationTime === 1 || stuff.VacationTime === 0,
                      }">
                      s</span
                    >
                  </span>
                </td>

                <td
                  class="px-4 py-2 h-full font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300"
                  :class="{
                    'flex flex-col gap-y-1': stuff.TrainingRecords.length > 1,
                  }">
                  <span
                    v-for="(record, index) in stuff.TrainingRecords"
                    :key="index"
                    >{{ record }},</span
                  >
                </td>
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white border border-slate-300">
                  <span>{{ stuff.Notes }}</span>
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
        <!-- pagination -->
        <Pagination/>
      </div>
    </div>
  </section>
</template>

<script>
import stuff from '../../../../DB/stuff';
import SearchFormUtility from "../../../Utilities/FormUtility/SearchFormComp.vue"
export default {
  name: 'Stuff',
  components:{
    SearchFormUtility
  },
  setup() {
    const ourStuff = stuff;
    return {
      ourStuff,
    };
  },
};
</script>

<style></style>
