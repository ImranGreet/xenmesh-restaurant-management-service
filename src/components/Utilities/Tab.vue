<template>
  <button
    :id="tabDetectionId"
    class="bg-blue-700 lg:hover:bg-blue-600 text-white px-3 md:px-4 lg:px-6 xl:px-10 py-2 tracking-wider leading-relaxed rounded-3xl shadow-lg shadow-white">
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
