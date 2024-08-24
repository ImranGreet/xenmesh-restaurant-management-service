<template>
  <div class="w-full py-2">
    <div class="mx-auto w-full max-w-md">
      <RadioGroup v-model="selected">
        <RadioGroupLabel class="sr-only">Server size</RadioGroupLabel>
        <div class="grid grid-cols-3 gap-2 max-h-[180px] overflow-y-auto p-2">
          <RadioGroupOption
            as="template"
            v-for="plan in plans"
            :key="plan.name"
            :value="plan"
            v-slot="{ active, checked }">
            <div
              :class="[
                active
                  ? 'ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300'
                  : '',
                checked ? 'bg-lime-900/75 text-white ' : 'bg-white ',
              ]"
              class="relative flex cursor-pointer rounded-lg px-2 shadow-md focus:outline-none"
              @click="selectPaymentOption(plan.name)">
              <div class="flex w-full items-center justify-between">
                <div class="flex items-center py-2">
                  <div class="text-sm">
                    <RadioGroupLabel
                      as="p"
                      :class="checked ? 'text-white' : 'text-gray-900'"
                      class="font-medium">
                      {{ plan.name }}
                    </RadioGroupLabel>
                    <RadioGroupDescription
                      as="span"
                      :class="checked ? 'text-sky-100' : 'text-gray-500'"
                      class="inline">
                    </RadioGroupDescription>
                  </div>
                </div>
                <div
                  v-show="checked"
                  class="shrink-0 text-white">
                  <svg
                    class="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none">
                    <circle
                      cx="12"
                      cy="12"
                      r="12"
                      fill="#fff"
                      fill-opacity="0.2" />
                    <path
                      d="M7 13l3 3 7-7"
                      stroke="#fff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </RadioGroupOption>
        </div>
      </RadioGroup>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import {
  RadioGroup,
  RadioGroupLabel,
  RadioGroupDescription,
  RadioGroupOption,
} from '@headlessui/vue';
import useOrderOperation from '../../../../store/Table/OrderOperation';
import { storeToRefs } from 'pinia';

const plans = [
  {
    name: 'Visa',
  },
  {
    name: 'PayPal',
  },
  {
    name: 'Apple',
  },
  {
    name: 'Cash',
  },
  {
    name: 'Bkash',
  },
  
];

const selected = ref(null);
const selectPaymentOption = function (option) {
  selected.value = option;
  console.log(selected.value);
};



</script>
