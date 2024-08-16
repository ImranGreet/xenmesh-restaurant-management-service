<template>
  <div
    class="w-full bg-inherit space-y-2 px-4 max-w-[280px] shadow-sm shadow-slate-200 rounded-2xl lg:hover:shadow-lg overflow-hidden lg:hover:delay-500 lg:hover:duration-300 lg:hover:ease-in-out py-4 flex">
    <slot></slot>
    <div class="space-y-0.5 flex flex-col">
      <h2 class="text-lg tracking-wide">{{ typeofDataAmount }}</h2>
      <h4 class="text-sm font-bold text-pink-800">{{ amount }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TableCard',
  props: {
    heading: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    let typeofDataAmount = props.heading;
    let amount = props.amount;
    return {
      typeofDataAmount,
      amount,
    };
  },
};
</script>
