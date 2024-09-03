<template>
  <button
    :id="tabDetectionId"
    class="text-gray-900 px-2  tracking-wider leading-relaxed  hover:text-blue-500 hover:border-blue-500/50">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Tab',
  props: {
    tabId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const tabDetectionId = props.tabId;
    return {
      tabDetectionId,
    };
  },
};
</script>
