<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  <TotalSales />
</template>

<script>
import { Bar } from "vue-chartjs";
import TotalSales from "./TotalSales.vue";

import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar, TotalSales },
  setup() {
    return {
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ],
        datasets: [
          {
            data: [40, 20, 12, 20, 30, 50, 60, 80, 100, 45, 32, 48.5],
            label: "Monthly Income",
            backgroundColor: ["#0891b2", "#d1d5db"],
          },
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>
