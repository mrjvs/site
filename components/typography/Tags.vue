<template>
  <p
    class="font-bold text-bray-100 -mt-4 mb-8 flex justify-start transition-opacity items-center"
  >
    <span
      v-for="(item, i) in items"
      :key="i"
      class="flex justify-start items-center mr-3"
    >
      <span v-if="i !== 0" class="h-1.5 w-1.5 rounded-full bg-bray-100 mr-3" />
      {{ item }}
    </span>
  </p>
</template>

<style scoped>
.h-1\.5 {
  height: 6px;
}
.w-1\.5 {
  width: 6px;
}
</style>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
};
</script>
