<template>
    <div class="w-full px-5 py-3 bg-white shadow space-y-3 rounded-sm">
        <div class="w-full flex justify-between items-stretch ">
          <h2 class="text-base xl:text-lg tracking-wider leading-relaxed capitalize w-full">
            {{title}}</h2>
           <div class="w-10 h-10 bg-red-300/20 flex justify-center items-center rounded-lg">
            <UserGroupIcon class="w-5 h-5"/>
           </div>
        </div>
        <div class="text-start">
          <h2 class="text-gray-800 text-xl font-semibold">{{growingAmount}}</h2>
        </div>
        <!-- percentages -->
        <div class="w-full flex justify-start items-center space-x-5">
          <ArrowDownCircleIcon class="w-5 h-5 inline-block text-red-400"/> 
          <p class="text-lg"> <span>{{rate}}</span> %</p>
          <p>Since Last Month</p>
        </div>
    </div>
</template>

<script>
import { ArrowDownCircleIcon, UserGroupIcon } from '@heroicons/vue/24/outline';

export default {
  name: "Card",
  components:{ArrowDownCircleIcon,UserGroupIcon},
  props:{
    lastMonthRecord:{
      type:Object,
      required:true
    }
    
  },
  setup(props) {
    const growingAmount = props.lastMonthRecord.amount;
    const rate = props.lastMonthRecord.growing;
    const title = props.lastMonthRecord.title;
    return {
      growingAmount,
      rate,
      title
    };
  },
};
</script>


