<template>
  <div class="w-full bg-inherit grid grid-cols-2 gap-3 border-gray-300">
    <div
      class="w-full px-5 py-8 bg-white rounded-sm"
      v-for="montlyReport in useMonthlyReport"
      :key="montlyReport.id">
      <div class="w-full flex flex-col justify-between items-start">
        <div class="w-full flex justify-between items-center">
          <p class="text-base">{{ montlyReport.category }}</p>
          <div class="flex flex-col justify-center items-center bg-blue-400/20 p-2 rounded-lg">
            <component
              :is="montlyReport.reportIcon"
              class="w-8 h-8 text-gray-950"></component>
          </div>
        </div>
        <h1 class="text-2xl font-semibold">{{ montlyReport.amount }}</h1>
        <p>
          <span
            ><ArrowLongUpIcon class="text-blue-700/80 inline-block w-5 h-5" />{{
              montlyReport.growthRate
            }}%</span
          >
          <span class="ml-20">Since Last Month</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import useMonthlyReport from "../../composables/report";
import {
  UserGroupIcon,
  ArrowLongUpIcon,
  ArrowLongDownIcon,
  ShoppingCartIcon,
  CurrencyDollarIcon,
  ArrowTrendingUpIcon,
} from "@heroicons/vue/24/solid";
export default {
  name: "Token",
  components: {
    UserGroupIcon,
    ArrowLongUpIcon,
    ArrowLongDownIcon,
    ShoppingCartIcon,
    CurrencyDollarIcon,
    ArrowTrendingUpIcon,
  },

  setup() {
    return {
      useMonthlyReport,
    };
  },
};
</script>

<style></style>
