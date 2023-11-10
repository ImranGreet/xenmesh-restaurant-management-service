<template>
    <section class="w-full bg-inherit">
        <div class="w-full flex justify-between gap-x-4">
            <div class="w-2/5 flex flex-col justify-center items-center">
                <Token />
            </div>
            <div class="w-3/5 flex flex-col justify-center items-center">
                <Incomes />
            </div>
        </div>
    </section>
</template>

<script>
import Expense from '../components/Chart/Expense.vue';
import Incomes from '../components/Chart/Incomes.vue';
import Token from '../components/DashboardProperties/Token.vue';

export default {
    name: 'Dashboard',
    components: { Expense, Token, Incomes },
};
</script>

<style></style>
