<template>
  <div class="w-full relative h-12">
    <hr class="w-full h-div border-0 bg-bray-400" />
    <div
      class="absolute left-0 right-0 -top-6 flex justify-center items-center"
    >
      <div
        v-if="icon.length !== 0"
        class="bg-bray-400 rounded-full h-12 w-12"
      ></div>
    </div>
  </div>
</template>

<style scoped>
.h-div {
  height: 2px;
}
</style>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: "",
    },
  },
};
</script>
