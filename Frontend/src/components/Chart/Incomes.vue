<template>
    <XyzTransitionGroup
        class="item-group"
        xyz="fade">
        <div
            class="square"
            v-if="false"></div>
        <div
            class="square"
            v-if="false"></div>
        <div
            class="square"
            v-if="false"></div>
    </XyzTransitionGroup>
    <Bar :data="chartData" />
</template>

<script>
import { Bar } from 'vue-chartjs';
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
} from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

export default {
    name: 'BarChart',
    components: { Bar },
    data() {
        return {
            chartData: {
                labels: [
                    'January',
                    'February',
                    'March',
                    'April',
                    'May',
                    'June',
                    'July',
                    'August',
                    'September',
                    'October',
                    'November',
                    'December',
                ],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#f87979',
                        data: [
                            1000, 1500, 1200, 2000, 1800, 2500, 5000, 2800, 2200, 1800, 1600, 2100,
                        ],
                    },
                ],
            },
        };
    },
};
</script>
