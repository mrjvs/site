<template>
  <div
    class="bg-bray-500 rounded-md p-8 pr-12 flex flex-col article-card theme-green"
  >
    <Tagline v-if="hasTag || tag.length > 0">{{ tag }}</Tagline>
    <slot />
  </div>
</template>

<style scoped>
.article-card > *:first-child {
  @apply mb-0;
}
.article-card > *:last-child {
  @apply mb-0;
}
.article-card > .paragraph:last-of-type {
  @apply flex-1;
}
.article-card > p.paragraph {
  @apply mb-4;
}
</style>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "",
    },
    hasTag: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
