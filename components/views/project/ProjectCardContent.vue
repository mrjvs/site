<template>
  <div class="p-7 project-card-content flex-1">
    <Heading v-if="title.length > 0" size="3">{{ title }}</Heading>
    <slot />
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
