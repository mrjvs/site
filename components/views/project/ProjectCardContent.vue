<template>
  <div class="flex-1 p-7">
    <div class="max-w-md project-card-content">
      <Heading v-if="title.length > 0" size="3">{{ title }}</Heading>
      <slot />
    </div>
  </div>
</template>

<style scoped>
.project-card-content > *:first-child {
  margin-top: 0;
}
.project-card-content > *:last-child {
  margin-bottom: 0;
}
</style>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
  },
};
</script>
