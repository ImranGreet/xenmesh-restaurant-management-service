<template>
  <section class="w-full dark:bg-gray-900 py-3 sm:py-5">
    <div class="px-4 mx-auto w-full">
      <div
        class="w-full relative overflow-hidden bg-white shadow-md dark:bg-gray-800 sm:rounded-lg">
        <SearchFormUtility/>
        <div
          class="relative overflow-auto min-h-[220px] max-h-[690px] table-container rounded-t-lg bg-white z-50">
          <div class="layout">
            <div class="layout__inner">
              <div class="table-wrapper custom-overflowscroll">
                <table
                class="table">
                <thead
                  class="table__header">
                  <tr>
                    <th class="bg-white"></th>
                    <th
                      scope="col"
                      class="table__header-cell">
                      Sr No
                    </th>
                    <th
                      scope="col"
                      class="table__header-cell">
                      Name
                    </th>
                    <th
                      scope="col"
                      class="table__header-cell">
                      Position
                    </th>
                    <th
                      scope="col"
                      class="table__header-cell">
                      Start From
                    </th>
    
                    <th
                      scope="col"
                      class="table__header-cell">
                      Contact
                    </th>
                    <th
                      scope="col"
                      class="table__header-cell">
                      Address
                    </th>
                    <th
                      scope="col"
                      class="table__header-cell">
                      Salary Wage
                    </th>
                    <th
                      scope="col"
                      class="table__header-cell">
                      Vacation Period
                    </th>
    
                    <th
                      scope="col"
                      class="table__header-cell">
                      Training Records
                    </th>
                    <th
                      scope="col"
                      class="table__header-cell">
                      Notes
                    </th>
                    <th
                      scope="col"
                      class="table__header-cell">
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
                    <th class="w-4 table__header-cell">
                      {{ index + 1 }}
                    </th>
                    <td class="table__cell table__cell--title">
                      <span
                        class="span"
                        >{{ stuff.Name }}</span
                      >
                    </td>
                    <td class="table__cell table__cell--title">
                      <span
                        class="span"
                        >{{ stuff.Position }}</span
                      >
                    </td>
                    <td
                      class="table__cell table__cell--title">
                      <span>{{ stuff.StartDate }}</span>
                    </td>
                    <td
                      class="table__cell table__cell--title">
                      <span class="font-bold">Regular </span>
                      {{ stuff.ContactInformation }}
                      <br />
                      <span class="font-bold">Emergency</span>
                      {{ stuff.EmergencyContactInformation }}
                    </td>
    
                    <td
                      class="table__cell table__cell--title">
                      {{ stuff.Address }}
                    </td>
                    <td
                      class="table__cell table__cell--title">
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
                    <td class="table__cell table__cell--title text-center">
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
                      class="table__cell table__cell--title"
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
                      class="table__cell table__cell--title">
                      <span>{{ stuff.Notes }}</span>
                    </td>
                    <td
                      class="table__cell table__cell--title">
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
