<template>
  <div class="w-full">
    <div class="px-5 py-6 space-y-5">
      <div class="w-full flex justif-center items-center">
        <button>
          <img :src="iconSource" alt="" class="w-[100px] h-[70px]" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settingicon",
  props: {
    iconResource: {
      type: String,
      required: false,
    },
  },
  setup(props) {
    const iconSource = props.iconResource;
    return {
      iconSource,
    };
  },
};
</script>

<style></style>
