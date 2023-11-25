<template>
   <div class="w-full grid grid-cols-2 gap-4 px-2 py-7">
      <Card v-for="record in lastMonthReport" 
      :key="record.id" :lastMonthRecord="record"/>
   </div>
</template>

<script>
import { ref } from 'vue';
import Card from '../ReusedComps/Card.vue';


export default {
name:"LastMonthReport",
components:{Card},
setup(){
      const lastMonthReport = ref([
            {
                  id:1,
                  title:"customer",
                  amount:3600,
                  growing:5.27,

            },
            {
                  id:2,
                  title:"order",
                  amount:5400,
                  growing:3.27,

            },
            {
                  id:3,
                  title:"revenue",
                  amount:4800,
                  growing:6.27,

            },
            {
                  id:4,
                  title:"Growth",
                  amount:5800,
                  growing:3.27,

            },
      ]);
      return {
            lastMonthReport
      }
}
}
</script>

